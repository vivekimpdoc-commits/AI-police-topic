const fs = require('fs');
const path = require('path');

const aiExperts = [
  "Vendor Management AI", "Tender Analysis AI", 
  "Vendor Scoring AI", "Bid Evaluation AI", "Inventory Forecasting AI", 
  "Supply Chain Optimization AI", "Price Benchmarking AI", "Cost Optimization AI", 
  "Armoury Procurement Expert AI", "Vehicle Sourcing Expert AI", "Legal Compliance Bot AI", 
  "Contract Risk Assessor AI", "Procurement Fraud Detection AI", "Procurement Analytics AI", 
  "Executive Procurement Dashboard AI", "AI Procurement Copilot", "Asset Lifecycle Management AI", 
  "Quality Control AI"
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

const expertRoutes = {
  "Procurement Planning AI": "/procurement-planning-ai-agent"
};

let importStatements = [];
let routeComponents = [];

aiExperts.forEach(expert => {
  const compName = toPascalCase(expert) + 'Agent';
  const routePath = '/' + toKebabCase(expert) + '-agent';
  const filePath = path.join(__dirname, 'src', 'pages', compName + '.jsx');
  
  expertRoutes[expert] = routePath;
  
  const content = template.replace(/AGENT_NAME_PASCAL/g, compName)
                          .replace(/AGENT_NAME_DISPLAY/g, expert)
                          .replace(/AGENT_DESCRIPTION/g, `The ${expert} is designed to automate and optimize workflows, providing real-time analytics, predictive modeling, and absolute transparency across administrative and financial protocols.`);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: ${compName}.jsx`);
  
  importStatements.push(`import ${compName} from './pages/${compName}';`);
  routeComponents.push(`        <Route path="${routePath}" element={<${compName} />} />`);
});

// Update App.jsx
let appJsx = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
const importIndex = appJsx.indexOf('import ProcurementPlanningAIAgent');
if (importIndex !== -1) {
  appJsx = appJsx.substring(0, importIndex) + importStatements.join('\n') + '\n' + appJsx.substring(importIndex);
} else {
  // Just prepend after the first few imports
  const lines = appJsx.split('\n');
  lines.splice(10, 0, importStatements.join('\n'));
  appJsx = lines.join('\n');
}

const routeIndex = appJsx.indexOf('</Routes>');
appJsx = appJsx.substring(0, routeIndex) + routeComponents.join('\n') + '\n      ' + appJsx.substring(routeIndex);

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx, 'utf8');
console.log('App.jsx updated.');

// Update ProcurementDetailed.jsx
let procJsx = fs.readFileSync(path.join(__dirname, 'src', 'pages', 'ProcurementDetailed.jsx'), 'utf8');

const routeDictCode = `
const expertRoutes = ${JSON.stringify(expertRoutes, null, 2)};
const isClickable = (expert) => !!expertRoutes[expert];
`;

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

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'ProcurementDetailed.jsx'), procJsx, 'utf8');
console.log('ProcurementDetailed.jsx updated.');
