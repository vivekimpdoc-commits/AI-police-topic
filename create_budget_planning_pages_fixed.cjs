const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic';
const pagesDir = path.join(projectRoot, 'src', 'pages');
const componentsDir = path.join(projectRoot, 'src', 'components');
const templatePath = path.join(projectRoot, 'template.txt');

const aiExperts = [
  "Police Budget Planner AI", "Fund Allocation Expert AI", "Budget Forecast AI", 
  "Budget Utilization Monitor AI", "Financial Planning AI", "Treasury Management AI", 
  "Revenue & Grant Management AI", "Procurement Planning AI", "Vendor Payment Auditor AI", 
  "Salary & Payroll AI", "Pension & Gratuity AI", "Fleet Expense AI", 
  "Ammunition Cost Analyzer AI", "Expense Fraud Auditor AI", "Financial Compliance Bot AI", 
  "Internal Audit AI", "Financial Risk Intelligence AI", "Executive Finance Copilot AI", 
  "Financial Analytics AI", "Risk Allowance Predictor AI", "Station Upkeep Budget AI", 
  "Tax Optimization Expert AI", "Contingency Fund Predictor", "Overtime Spend Forecaster",
  "State Grant ROI Analyzer", "Central Funding Sync Bot", "Uniform & Kit Allowance AI",
  "Travel DA/TA Optimizer", "Investigation Expense Tracker", "Secret Informant (SS Fund) Auditor",
  "PCR Van Fuel Log AI", "Vehicle Maintenance Budget Bot", "Toll & Transport Expense AI",
  "Fuel Card Integration Sync", "Post-Retirement Medical Fund AI", "Family Pension Calculator Bot",
  "CAG Compliance Auditor", "Expense Anomaly Detector", "Fund Utilization Certificate Bot",
  "Budget Deficit Alert AI", "Fake Bill OCR Scanner", "Vendor Overpricing Alert Bot",
  "Multi-currency Forensic AI", "Smart Contract Payment Exec", "Crypto Asset Seizure Valuator",
  "District-wise Allocation Optimizer", "Zone-wise Fund Distrubution AI", "Event Security Cost Predictor",
  "Election Deployment Budget AI", "Specialized Unit Training Cost AI", "K9 Unit Upkeep Forecaster",
  "Drone Fleet Depreciation Modeler", "Cyber Security Investment ROI AI", "Cloud Storage Billing Optimizer",
  "Headquarters Utility Expense AI", "Officer Loan & Advance Tracker", "Financial Hardship Predictor Bot",
  "Station Renovation Budget AI", "Reward & Bounty Payout Bot", "Future Inflation Adjustment AI"
];

// Skip the ones already done (first 7)
const topicsToCreate = aiExperts.slice(7);

function toComponentName(topic) {
  return topic
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + (topic.endsWith('AI') || topic.endsWith('Bot') ? 'Agent' : 'AIAgent');
}

function toPathName(topic) {
  return '/' + topic
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase() + '-agent';
}

const templateContent = fs.readFileSync(templatePath, 'utf8');

topicsToCreate.forEach(topic => {
  const componentName = toComponentName(topic);
  const shortTitle = topic.replace(' AI', '').replace(' Bot', '');
  
  let fileContent = templateContent
    .replace(/__COMPONENT_NAME__/g, componentName)
    .replace(/__SHORT_TITLE__/g, shortTitle)
    .replace(/__SHORT_TITLE_UPPER__/g, shortTitle.toUpperCase())
    .replace(/__TOPIC__/g, topic);
    
  const filePath = path.join(pagesDir, componentName + '.jsx');
  fs.writeFileSync(filePath, fileContent);
});

console.log('Generated ' + topicsToCreate.length + ' page components.');

// 2. Update App.jsx
const appPath = path.join(pagesDir, '..', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const importLines = topicsToCreate.map(topic => {
  const comp = toComponentName(topic);
  return 'import ' + comp + ' from \'./pages/' + comp + '\';';
}).join('\n');

const routeLines = topicsToCreate.map(topic => {
  const comp = toComponentName(topic);
  const route = toPathName(topic);
  return '        <Route path="' + route + '" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><' + comp + ' /></motion.div>} />';
}).join('\n');

appContent = appContent.replace(
  /(import RevenueGrantManagementAIAgent from '\.\/pages\/RevenueGrantManagementAIAgent';)/,
  '$1\n' + importLines
);

appContent = appContent.replace(
  /(<Route path="\/revenue-grant-management-ai-agent" element=\{<motion\.div.*?<\/motion\.div>\} \/>)/,
  '$1\n' + routeLines
);

fs.writeFileSync(appPath, appContent);
console.log('Updated App.jsx with imports and routes.');

// 3. Update Detailed Pages (FinanceDetailed & BudgetPlanningDetailed)
function updateDetailedPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const routeMapping = aiExperts.map(topic => {
    return '      "' + topic + '": "' + toPathName(topic) + '"';
  }).join(',\n');
  
  // Replace the old mapRegex mapping entirely
  // Wait, I already updated this to use expertRoutes in FinanceDetailed? No, the previous script failed before replacing it, so it still has the old isClickable = isBudgetPlanner || ... logic!
  
  // Let's replace the whole block from `const isBudgetPlanner` down to `onClick={...}`
  const mapRegex = /(const isBudgetPlanner = expert === "Police Budget Planner AI";[\s\S]*?)onClick=\{.*?\}/m;
  content = content.replace(mapRegex, (match, p1) => {
    return '              const expertRoutes = {\n' +
routeMapping + '\n' +
'              };\n' +
'              const isClickable = !!expertRoutes[expert];\n' +
'              const handleClick = () => {\n' +
'                if (isClickable) navigate(expertRoutes[expert]);\n' +
'              };\n' +
'              onClick={handleClick}';
  });
  
  // Because it still has className={\`premium-card highlight-cyan ${isClickable ? 'clickable-agent-card' : ''}\`} in some form
  // Actually, I don't need to change className if it already uses `isClickable`. The logic `const isClickable = !!expertRoutes[expert];` covers it.
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + path.basename(filePath));
}

updateDetailedPage(path.join(pagesDir, 'FinanceDetailed.jsx'));
updateDetailedPage(path.join(pagesDir, 'BudgetPlanningDetailed.jsx'));

// 4. Update ModulePage.jsx
const modulePath = path.join(componentsDir, 'ModulePage.jsx');
let modContent = fs.readFileSync(modulePath, 'utf8');

const modMappings = topicsToCreate.map(topic => {
  return '    "' + topic + '": "' + toPathName(topic) + '",';
}).join('\n');

modContent = modContent.replace(
  /("Revenue & Grant Management AI": "\/revenue-grant-management-ai-agent",)/,
  '$1\n' + modMappings
);
fs.writeFileSync(modulePath, modContent);
console.log('Updated ModulePage.jsx');
