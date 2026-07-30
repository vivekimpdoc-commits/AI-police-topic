const fs = require('fs');
const path = require('path');

const aiExperts = [
  "CAG Audit Predictor AI", "Internal Audit Automation Bot", "Fraud Triangle Analyzer",
  "Expense Anomaly Detector AI", "Ghost Vendor Audit Bot", "Duplicate Invoice Scanner",
  "Payroll Fraud Auditor", "Petty Cash Reconciliation AI", "Tender Cartel Audit AI",
  "Procurement Price Benchmarker", "SS Fund Encrypted Auditor", "Grant Utilization Auditor",
  "Fund Diversion Detector AI", "Taxation (TDS/GST) Audit Bot", "Asset Depreciation Auditor",
  "Inventory Shrinkage Audit AI", "Station Level Audit Bot", "Headquarters Audit Sweeper",
  "Treasury Discrepancy Finder", "Bank Reconciliation AI", "Digital Signature Validator",
  "Biometric Audit Trail AI", "Blockchain Ledger Auditor", "Zero-Trust Access Auditor",
  "Audit Query Auto-Responder", "Compliance Deviation Alerter", "SOP Breach Audit AI",
  "Medical Claim Fraud Auditor", "TA/DA Travel Audit Bot", "Fuel Log Anomaly Detector",
  "Logistics & Shipping Auditor", "Weaponry Stock Audit AI", "Ammunition Discrepancy Bot",
  "Riot Gear Inventory Auditor", "Confiscated Asset Audit AI", "Seized Cash Vault Auditor",
  "Narcotics Seizure Audit Bot", "Forensic Lab Audit AI", "Cyber Cell CapEx Auditor",
  "IT Hardware Lifespan Audit", "Software License Usage Audit", "Cloud Server Billing Auditor",
  "Smart City CCTV Audit AI", "Drone Flight Log Auditor", "Marine Fuel Audit Bot",
  "Aviation Maintenance Auditor", "K9 Unit Expense Audit AI", "Welfare Fund Audit Bot",
  "Hospital Pharmacy Auditor", "Canteen Sales Audit AI", "Guest House Revenue Audit",
  "Event Security Billing Audit", "Traffic Fine Collection Audit", "Lok Adalat Settlement Audit",
  "Vendor SLA Breach Auditor", "Penalty Deduction Audit AI", "Insurance Claim Audit Bot",
  "Construction CapEx Auditor", "Housing Maintenance Audit", "Green Energy ROI Auditor"
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
  
  // Skip if already exists (some of these might have been generated in Finance/Procurement)
  if (!fs.existsSync(filePath)) {
      const content = template.replace(/AGENT_NAME_PASCAL/g, compName)
                              .replace(/AGENT_NAME_DISPLAY/g, expert)
                              .replace(/AGENT_DESCRIPTION/g, `The ${expert} is designed to automate and optimize workflows, providing real-time analytics, predictive modeling, and absolute transparency across administrative and financial protocols.`);
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Generated: ${compName}.jsx`);
  }
  
  // Avoid duplicate imports in App.jsx
  let appJsxTemp = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
  if (!appJsxTemp.includes(`import ${compName} from`)) {
      importStatements.push(`import ${compName} from './pages/${compName}';`);
      routeComponents.push(`        <Route path="${routePath}" element={<${compName} />} />`);
  }
});

if (importStatements.length > 0) {
    // Update App.jsx
    let appJsx = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
    const lines = appJsx.split('\n');
    lines.splice(10, 0, importStatements.join('\n'));
    appJsx = lines.join('\n');

    const routeIndex = appJsx.indexOf('</Routes>');
    appJsx = appJsx.substring(0, routeIndex) + routeComponents.join('\n') + '\n      ' + appJsx.substring(routeIndex);

    fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx, 'utf8');
    console.log('App.jsx updated with ' + importStatements.length + ' new routes.');
}

// Update AuditFinanceDetailed.jsx
let procJsx = fs.readFileSync(path.join(__dirname, 'src', 'pages', 'AuditFinanceDetailed.jsx'), 'utf8');

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

    fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'AuditFinanceDetailed.jsx'), procJsx, 'utf8');
    console.log('AuditFinanceDetailed.jsx updated.');
}
