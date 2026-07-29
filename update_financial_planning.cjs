const fs = require('fs');
const path = require('path');

const projectRoot = 'c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic';

const filesToUpdate = [
  path.join(projectRoot, 'src', 'App.jsx'),
  path.join(projectRoot, 'src', 'pages', 'FinanceDetailed.jsx'),
  path.join(projectRoot, 'src', 'pages', 'BudgetPlanningDetailed.jsx'),
  path.join(projectRoot, 'src', 'components', 'ModulePage.jsx')
];

function updateAppJsx(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('FinancialPlanningAIAgent')) {
    // Add import
    const importStatement = "import FinancialPlanningAIAgent from './pages/FinancialPlanningAIAgent';\n";
    content = content.replace(/(import BudgetUtilizationMonitorAgent from '\.\/pages\/BudgetUtilizationMonitorAgent';)/, `$1\n${importStatement}`);
    
    // Add route
    const routeStatement = "          <Route path=\"/financial-planning-ai-agent\" element={<FinancialPlanningAIAgent />} />\n";
    content = content.replace(/(<Route path="\/budget-utilization-monitor-agent" element={<BudgetUtilizationMonitorAgent \/>} \/>)/, `$1\n${routeStatement}`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated App.jsx`);
  }
}

function updateDetailedPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('isFinancialPlanning ? () => navigate(\'/financial-planning-ai-agent\')')) {
    // Update variables
    content = content.replace(
      /const isUtilization = expert === "Budget Utilization Monitor AI";/,
      `const isUtilization = expert === "Budget Utilization Monitor AI";\n              const isFinancialPlanning = expert === "Financial Planning AI";`
    );
    
    // Update isClickable
    content = content.replace(
      /const isClickable = isBudgetPlanner \|\| isFundAllocation \|\| isBudgetForecast \|\| isUtilization;/,
      `const isClickable = isBudgetPlanner || isFundAllocation || isBudgetForecast || isUtilization || isFinancialPlanning;`
    );
    
    // Update onClick
    content = content.replace(
      /onClick=\{isBudgetPlanner \? \(\) => navigate\('\/police-budget-planner-agent'\) : isFundAllocation \? \(\) => navigate\('\/fund-allocation-expert-agent'\) : isBudgetForecast \? \(\) => navigate\('\/budget-forecast-ai-agent'\) : isUtilization \? \(\) => navigate\('\/budget-utilization-monitor-agent'\) : undefined\}/,
      `onClick={isBudgetPlanner ? () => navigate('/police-budget-planner-agent') : isFundAllocation ? () => navigate('/fund-allocation-expert-agent') : isBudgetForecast ? () => navigate('/budget-forecast-ai-agent') : isUtilization ? () => navigate('/budget-utilization-monitor-agent') : isFinancialPlanning ? () => navigate('/financial-planning-ai-agent') : undefined}`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

function updateModulePage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('"/financial-planning-ai-agent"')) {
    content = content.replace(
      /"Budget Utilization Monitor AI": "\/budget-utilization-monitor-agent",/,
      `"Budget Utilization Monitor AI": "/budget-utilization-monitor-agent",
    "Financial Planning AI": "/financial-planning-ai-agent",`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ModulePage.jsx`);
  }
}

updateAppJsx(filesToUpdate[0]);
updateDetailedPage(filesToUpdate[1]);
updateDetailedPage(filesToUpdate[2]);
updateModulePage(filesToUpdate[3]);
