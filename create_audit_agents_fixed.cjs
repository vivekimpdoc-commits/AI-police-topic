const fs = require('fs');
const path = require('path');

const aiExperts = [
  "Internal Audit Planning AI", "Audit Workflow Manager AI", "Audit Scheduling AI",
  "Audit Findings AI", "Corrective Action Tracker AI", "Audit Report Generator AI",
  "Audit Analytics AI", "Executive Audit Dashboard AI", "Internal Control Assessment AI",
  "Financial Audit AI", "Procurement Audit AI", "Inventory Audit AI",
  "Data Integrity Audit AI", "Predictive Audit AI", "Audit KPI Dashboard AI",
  "Fraud Detection AI", "Station Audit Expert AI", "Asset Verification AI",
  "Compliance Checker AI", "Disciplinary Auditor AI", "Cyber Forensics Auditor AI",
  "Risk Management AI", "Armoury Inspector AI", "Legal Audit Bot AI", "Evidence Chain Auditor AI"
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

const expertRoutes = {};
let importStatements = [];
let routeComponents = [];

aiExperts.forEach(expert => {
  const compName = toPascalCase(expert) + 'Agent';
  const routePath = '/' + toKebabCase(expert) + '-agent';
  const filePath = path.join(__dirname, 'src', 'pages', compName + '.jsx');
  
  expertRoutes[expert] = routePath;
  
  if (!fs.existsSync(filePath)) {
      const content = template.replace(/AGENT_NAME_PASCAL/g, compName)
                              .replace(/AGENT_NAME_DISPLAY/g, expert)
                              .replace(/AGENT_DESCRIPTION/g, `The ${expert} is designed to automate and optimize workflows, providing real-time analytics, predictive modeling, and absolute transparency across administrative and financial protocols.`);
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Generated: ${compName}.jsx`);
  }
  
  let appJsxTemp = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
  if (!appJsxTemp.includes(`import ${compName} from`)) {
      importStatements.push(`import ${compName} from './pages/${compName}';`);
      routeComponents.push(`        <Route path="${routePath}" element={<${compName} />} />`);
  }
});

if (importStatements.length > 0) {
    let appJsx = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
    const lines = appJsx.split('\n');
    lines.splice(10, 0, importStatements.join('\n'));
    appJsx = lines.join('\n');

    const routeIndex = appJsx.indexOf('</Routes>');
    appJsx = appJsx.substring(0, routeIndex) + routeComponents.join('\n') + '\n      ' + appJsx.substring(routeIndex);

    fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx, 'utf8');
    console.log('App.jsx updated with ' + importStatements.length + ' new routes.');
}

let procJsx = fs.readFileSync(path.join(__dirname, 'src', 'pages', 'AuditDetailed.jsx'), 'utf8');

const routeDictCode = `
const expertRoutes = ${JSON.stringify(expertRoutes, null, 2)};
const isClickable = (expert) => !!expertRoutes[expert];
`;

if (!procJsx.includes('isClickable')) {
    procJsx = procJsx.replace('const tabs = [', routeDictCode + '\nconst tabs = [');

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

    procJsx = procJsx.replace(oldMap, newMap);

    fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'AuditDetailed.jsx'), procJsx, 'utf8');
    console.log('AuditDetailed.jsx updated.');
}
