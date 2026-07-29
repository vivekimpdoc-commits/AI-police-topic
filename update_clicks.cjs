const fs = require('fs');
const path = require('path');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Change isBudgetPlanner check to include FundAllocationExpert
  content = content.replace(
    'const isBudgetPlanner = expert === "Police Budget Planner AI";',
    'const isBudgetPlanner = expert === "Police Budget Planner AI";\n              const isFundAllocation = expert === "Fund Allocation Expert AI";\n              const isClickable = isBudgetPlanner || isFundAllocation;'
  );

  // Update className
  content = content.replace(
    '`premium-card highlight-cyan ${isBudgetPlanner ? \'clickable-agent-card\' : \'\'}`',
    '`premium-card highlight-cyan ${isClickable ? \'clickable-agent-card\' : \'\'}`'
  );

  // Update onClick
  content = content.replace(
    'onClick={isBudgetPlanner ? () => navigate(\'/police-budget-planner-agent\') : undefined}',
    'onClick={isBudgetPlanner ? () => navigate(\'/police-budget-planner-agent\') : isFundAllocation ? () => navigate(\'/fund-allocation-expert-agent\') : undefined}'
  );

  // Update style
  content = content.replace(
    'style={isBudgetPlanner ? { cursor: \'pointer\', border: \'1px solid #00f0ff\', boxShadow: \'0 0 15px rgba(0, 240, 255, 0.3)\' } : {}}',
    'style={isClickable ? { cursor: \'pointer\', border: \'1px solid #00f0ff\', boxShadow: \'0 0 15px rgba(0, 240, 255, 0.3)\' } : {}}'
  );

  // Update click hint
  content = content.replace(
    '{isBudgetPlanner && <div style={{ fontSize: \'0.75rem\', color: \'#00f0ff\', marginTop: \'5px\' }}>Click to view Agent details</div>}',
    '{isClickable && <div style={{ fontSize: \'0.75rem\', color: \'#00f0ff\', marginTop: \'5px\' }}>Click to view Agent details</div>}'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + filePath);
}

const file1 = path.join(__dirname, 'src', 'pages', 'FinanceDetailed.jsx');
const file2 = path.join(__dirname, 'src', 'pages', 'BudgetPlanningDetailed.jsx');

updateFile(file1);
updateFile(file2);
