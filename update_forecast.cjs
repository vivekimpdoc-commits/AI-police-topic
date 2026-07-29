const fs = require('fs');
const path = require('path');

function updateFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  for (const { search, replace } of replacements) {
    if (content.includes(search) && !content.includes(replace)) {
      content = content.replace(search, replace);
      updated = true;
    } else if (content.includes(replace)) {
      console.log(`Already contains replace string in ${filePath}`);
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
}

// 1. App.jsx
updateFile(path.join(__dirname, 'src', 'App.jsx'), [
  {
    search: "import FundAllocationExpertAgent from './pages/FundAllocationExpertAgent';",
    replace: "import FundAllocationExpertAgent from './pages/FundAllocationExpertAgent';\nimport BudgetForecastAIAgent from './pages/BudgetForecastAIAgent';"
  },
  {
    search: '<Route path="/fund-allocation-expert-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FundAllocationExpertAgent /></motion.div>} />',
    replace: '<Route path="/fund-allocation-expert-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FundAllocationExpertAgent /></motion.div>} />\n        <Route path="/budget-forecast-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BudgetForecastAIAgent /></motion.div>} />'
  }
]);

// 2. ModulePage.jsx
updateFile(path.join(__dirname, 'src', 'components', 'ModulePage.jsx'), [
  {
    search: "'Fund Allocation Expert AI': '/fund-allocation-expert-agent',",
    replace: "'Fund Allocation Expert AI': '/fund-allocation-expert-agent',\n                      'Budget Forecast AI': '/budget-forecast-ai-agent',"
  }
]);

// 3. FinanceDetailed.jsx & BudgetPlanningDetailed.jsx
const clickReplacements = [
  {
    search: "const isClickable = isBudgetPlanner || isFundAllocation;",
    replace: "const isBudgetForecast = expert === \"Budget Forecast AI\";\n              const isClickable = isBudgetPlanner || isFundAllocation || isBudgetForecast;"
  },
  {
    search: "onClick={isBudgetPlanner ? () => navigate('/police-budget-planner-agent') : isFundAllocation ? () => navigate('/fund-allocation-expert-agent') : undefined}",
    replace: "onClick={isBudgetPlanner ? () => navigate('/police-budget-planner-agent') : isFundAllocation ? () => navigate('/fund-allocation-expert-agent') : isBudgetForecast ? () => navigate('/budget-forecast-ai-agent') : undefined}"
  }
];

updateFile(path.join(__dirname, 'src', 'pages', 'FinanceDetailed.jsx'), clickReplacements);
updateFile(path.join(__dirname, 'src', 'pages', 'BudgetPlanningDetailed.jsx'), clickReplacements);
