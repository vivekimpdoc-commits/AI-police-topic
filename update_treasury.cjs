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
  let changed = false;
  
  if (!content.includes('TreasuryManagementAIAgent')) {
    // Add import
    const importStatement = "import TreasuryManagementAIAgent from './pages/TreasuryManagementAIAgent';\n";
    content = content.replace(/(import FinancialPlanningAIAgent from '\.\/pages\/FinancialPlanningAIAgent';)/, `$1\n${importStatement}`);
    
    // Add route
    const routeStatement = "        <Route path=\"/treasury-management-ai-agent\" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className=\"page-transition\"><TreasuryManagementAIAgent /></motion.div>} />\n";
    content = content.replace(/(<Route path="\/financial-planning-ai-agent" element=\{<motion\.div.*?>.*?<\/motion\.div>\} \/>)/, `$1\n${routeStatement}`);
    
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated App.jsx`);
  }
}

function updateDetailedPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  if (!content.includes('isTreasury ? () => navigate(\'/treasury-management-ai-agent\')')) {
    // Update variables
    content = content.replace(
      /const isFinancialPlanning = expert === "Financial Planning AI";/,
      `const isFinancialPlanning = expert === "Financial Planning AI";\n              const isTreasury = expert === "Treasury Management AI";`
    );
    
    // Update isClickable
    content = content.replace(
      /const isClickable = isBudgetPlanner \|\| isFundAllocation \|\| isBudgetForecast \|\| isUtilization \|\| isFinancialPlanning;/,
      `const isClickable = isBudgetPlanner || isFundAllocation || isBudgetForecast || isUtilization || isFinancialPlanning || isTreasury;`
    );
    
    // Update onClick
    content = content.replace(
      /onClick=\{isBudgetPlanner \? \(\) => navigate\('\/police-budget-planner-agent'\) : isFundAllocation \? \(\) => navigate\('\/fund-allocation-expert-agent'\) : isBudgetForecast \? \(\) => navigate\('\/budget-forecast-ai-agent'\) : isUtilization \? \(\) => navigate\('\/budget-utilization-monitor-agent'\) : isFinancialPlanning \? \(\) => navigate\('\/financial-planning-ai-agent'\) : undefined\}/,
      `onClick={isBudgetPlanner ? () => navigate('/police-budget-planner-agent') : isFundAllocation ? () => navigate('/fund-allocation-expert-agent') : isBudgetForecast ? () => navigate('/budget-forecast-ai-agent') : isUtilization ? () => navigate('/budget-utilization-monitor-agent') : isFinancialPlanning ? () => navigate('/financial-planning-ai-agent') : isTreasury ? () => navigate('/treasury-management-ai-agent') : undefined}`
    );
    
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

function updateModulePage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  if (!content.includes('"/financial-planning-ai-agent"')) {
    content = content.replace(
      /"Budget Utilization Monitor AI": "\/budget-utilization-monitor-agent",/,
      `"Budget Utilization Monitor AI": "/budget-utilization-monitor-agent",
    "Financial Planning AI": "/financial-planning-ai-agent",`
    );
    changed = true;
  }
  
  if (!content.includes('"/treasury-management-ai-agent"')) {
    content = content.replace(
      /"Financial Planning AI": "\/financial-planning-ai-agent",/,
      `"Financial Planning AI": "/financial-planning-ai-agent",
    "Treasury Management AI": "/treasury-management-ai-agent",`
    );
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ModulePage.jsx`);
  }
}

updateAppJsx(filesToUpdate[0]);
updateDetailedPage(filesToUpdate[1]);
updateDetailedPage(filesToUpdate[2]);
updateModulePage(filesToUpdate[3]);
