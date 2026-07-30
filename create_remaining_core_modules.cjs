const fs = require('fs');
const path = require('path');

const targetFiles = [
  'CopilotDetailed.jsx',
  'MultimodalDetailed.jsx',
  'PredictiveDetailed.jsx',
  'ModelManagementDetailed.jsx',
  'DataLakeDetailed.jsx',
  'ResearchLabDetailed.jsx',
  'CitizenDetailed.jsx',
  'ComplaintDetailed.jsx',
  'IntelligenceDetailed.jsx'
];

function toPascalCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
            .replace(/[^a-zA-Z0-9]/g, '')
            .replace(/^[a-z]/, m => m.toUpperCase());
}

function toKebabCase(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase().replace(/^-+|-+$/g, '');
}

const templatePath = path.join(__dirname, 'template.txt');
const template = fs.readFileSync(templatePath, 'utf8');
const pagesDir = path.join(__dirname, 'src', 'pages');

let totalGenerated = 0;
let allImportStatements = [];
let allRouteComponents = [];
let processedFilesCount = 0;

targetFiles.forEach(file => {
    const filePath = path.join(pagesDir, file);
    if (!fs.existsSync(filePath)) {
        console.warn('File not found: ' + file);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it has aiExperts array
    const expertMatch = content.match(/const aiExperts = \[([\s\S]*?)\];/);
    if (!expertMatch) return; 

    // Extract experts by evaling the matched string (safely)
    let expertsArray = [];
    try {
        const extractCode = `return [${expertMatch[1]}];`;
        const func = new Function(extractCode);
        expertsArray = func();
    } catch (e) {
        console.error('Failed to parse experts in ' + file);
        return;
    }

    if (!Array.isArray(expertsArray) || expertsArray.length === 0) return;

    processedFilesCount++;
    console.log(`Processing ${file} with ${expertsArray.length} experts`);

    const expertRoutes = {};

    expertsArray.forEach(expert => {
        if(typeof expert !== 'string') return;
        expert = expert.trim();
        if(!expert) return;

        let compName = toPascalCase(expert) + 'Agent';
        // Prefix with 'AI' if it starts with a number (e.g. 3D City Simulator -> AI3dCitySimulator)
        if (/^\d/.test(compName)) {
            compName = 'AI' + compName;
        }

        const routePath = '/' + toKebabCase(expert) + '-agent';
        const agentFilePath = path.join(pagesDir, compName + '.jsx');
        
        expertRoutes[expert] = routePath;
        
        if (!fs.existsSync(agentFilePath)) {
            const agentContent = template.replace(/AGENT_NAME_PASCAL/g, compName)
                                    .replace(/AGENT_NAME_DISPLAY/g, expert)
                                    .replace(/AGENT_DESCRIPTION/g, `The ${expert} is designed to automate and optimize workflows, providing real-time analytics, predictive modeling, and absolute transparency across administrative and financial protocols.`);
            
            fs.writeFileSync(agentFilePath, agentContent, 'utf8');
            totalGenerated++;
        }
        
        allImportStatements.push(`import ${compName} from './pages/${compName}';`);
        allRouteComponents.push(`        <Route path="${routePath}" element={<${compName} />} />`);
    });

    // Update the detailed component
    const routeDictCode = `
const expertRoutes = ${JSON.stringify(expertRoutes, null, 2)};
const isClickable = (expert) => !!expertRoutes[expert];
`;

    if(!content.includes('isClickable')) {
        content = content.replace('const tabs = [', routeDictCode + '\nconst tabs = [');

        const oldMap = `<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan">
                <Bot className="card-icon" />
                <h4>{expert}</h4>
              </motion.div>`;

        const newMap = `<motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: i * 0.03 }} 
                    key={i} 
                    className={\`premium-card highlight-cyan \${isClickable(expert) ? 'clickable-agent-card' : ''}\`}
                    onClick={() => { if (isClickable(expert)) navigate(expertRoutes[expert]); }}
                    style={isClickable(expert) ? { cursor: 'pointer', border: '1px solid #00f0ff', boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' } : {}}
                  >
                    <Bot className="card-icon" />
                    <h4>{expert}</h4>
                    {isClickable(expert) && <div style={{ fontSize: '0.75rem', color: '#00f0ff', marginTop: '5px' }}>Click to view Agent details</div>}
                  </motion.div>`;

        if(content.includes(oldMap)) {
            content = content.replace(oldMap, newMap);
            fs.writeFileSync(filePath, content, 'utf8');
        } else {
            console.warn(`WARNING: Could not find exact oldMap to replace in ${file}`);
        }
    }
});

if (allImportStatements.length > 0) {
    let appJsx = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
    
    let newImports = [];
    let newRoutes = [];
    allImportStatements.forEach((imp, idx) => {
        if (!appJsx.includes(imp)) {
            newImports.push(imp);
            newRoutes.push(allRouteComponents[idx]);
        }
    });

    if (newImports.length > 0) {
        const lines = appJsx.split('\n');
        lines.splice(10, 0, newImports.join('\n'));
        appJsx = lines.join('\n');

        const routeIndex = appJsx.indexOf('</Routes>');
        appJsx = appJsx.substring(0, routeIndex) + newRoutes.join('\n') + '\n      ' + appJsx.substring(routeIndex);

        fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx, 'utf8');
        console.log('App.jsx updated with ' + newImports.length + ' new routes.');
    }
}

console.log('Total files processed: ' + processedFilesCount);
console.log('Total agents generated: ' + totalGenerated);
