const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf8');

if (!content.includes('FundAllocationExpertAgent')) {
  // Insert import
  content = content.replace(
    "import PoliceBudgetPlannerAgent from './pages/PoliceBudgetPlannerAgent';",
    "import PoliceBudgetPlannerAgent from './pages/PoliceBudgetPlannerAgent';\nimport FundAllocationExpertAgent from './pages/FundAllocationExpertAgent';"
  );

  // Insert route
  content = content.replace(
    '<Route path="/police-budget-planner-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceBudgetPlannerAgent /></motion.div>} />',
    '<Route path="/police-budget-planner-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceBudgetPlannerAgent /></motion.div>} />\n        <Route path="/fund-allocation-expert-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FundAllocationExpertAgent /></motion.div>} />'
  );
  
  fs.writeFileSync(appJsxPath, content, 'utf8');
  console.log("Updated App.jsx successfully!");
} else {
  console.log("FundAllocationExpertAgent already in App.jsx");
}

const modulePagePath = path.join(__dirname, 'src', 'components', 'ModulePage.jsx');
let moduleContent = fs.readFileSync(modulePagePath, 'utf8');

if (!moduleContent.includes("'/fund-allocation-expert-agent'")) {
  moduleContent = moduleContent.replace(
    "'AI Police Budget Planner': '/police-budget-planner-agent',",
    "'AI Police Budget Planner': '/police-budget-planner-agent',\n                      'Fund Allocation Expert AI': '/fund-allocation-expert-agent',"
  );
  fs.writeFileSync(modulePagePath, moduleContent, 'utf8');
  console.log("Updated ModulePage.jsx successfully!");
} else {
  console.log("Fund Allocation already in ModulePage.jsx");
}
