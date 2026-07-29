const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic';

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

function toPathName(topic) {
  return '/' + topic
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase() + '-agent';
}

function updateDetailedPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const routeMapping = aiExperts.map(topic => {
    return '      "' + topic + '": "' + toPathName(topic) + '"';
  }).join(',\n');
  
  // Find everything between const isBudgetPlanner = ... and const isClickable = ...
  // Replace the entire block of `const isTopic = ...` and `const isClickable = ...`
  // with a dictionary mapping.
  
  // Then we also need to replace the long `onClick` attribute in `<motion.div>`
  
  // 1. Remove the long list of consts
  const regexVars = /const isBudgetPlanner = expert === "Police Budget Planner AI";[\s\S]*?const isClickable = [^;]+;/;
  content = content.replace(regexVars, 
`const expertRoutes = {
${routeMapping}
};
const isClickable = !!expertRoutes[expert];`
  );
  
  // 2. Replace the onClick logic
  const regexOnClick = /onClick=\{isBudgetPlanner \? \(\) => navigate\('\/police-budget-planner-agent'\) [^}]+?\}/;
  content = content.replace(regexOnClick, 'onClick={() => { if (isClickable) navigate(expertRoutes[expert]); }}');
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + path.basename(filePath));
}

updateDetailedPage(path.join(projectRoot, 'src', 'pages', 'FinanceDetailed.jsx'));
updateDetailedPage(path.join(projectRoot, 'src', 'pages', 'BudgetPlanningDetailed.jsx'));
