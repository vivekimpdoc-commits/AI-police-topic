const fs = require('fs');
const path = 'c:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\AI topic for html\\\\AI poilc topic\\\\AI-police-topic\\\\src\\\\pages\\\\WeaponIssueDetailed.jsx';
let code = fs.readFileSync(path, 'utf8');

const newModules = \`const modules = [
  { title: "Biometric Verification", icon: <Fingerprint size={20} />, items: ["High-speed Iris","Fingerprint Match","Face Liveness","Dual Factor"] },
  { title: "RFID Live Tracking", icon: <Radio size={20} />, items: ["UHF RFID Scans","Triangulation","Choke-point Logs","Missing Beep"] },
  { title: "Automated Returns", icon: <RotateCcw size={20} />, items: ["Barcode Scan","Weight Check","Condition Log","Inventory Update"] },
  { title: "Security Protocols", icon: <ShieldAlert size={20} />, items: ["Vault Lockdown","Alarm Sync","Police HQ Alert","Drone Dispatch"] },
  { title: "Smart Racks Sync", icon: <Server size={20} />, items: ["Rack Sensors","Slot Match","LED Indicators","Weight Pad"] },
  { title: "Shift Management", icon: <Clock size={20} />, items: ["Roster Sync","Staggered Issue","Return Windows","Overtime Flag"] },
  { title: "Damage Assessment", icon: <Wrench size={20} />, items: ["Scratch Vision","Barrel Scan","Trigger Test","Action Smoothness"] },
  { title: "Ammunition Coupling", icon: <Target size={20} />, items: ["Cartridge Match","Batch ID Link","Issue Limit","Usage Justify"] },
  { title: "Emergency Mass Issue", icon: <Zap size={20} />, items: ["Bypass Mode","Quick Auth","Batch Assign","Riot Response"] },
  { title: "Weapon Quarantine", icon: <AlertTriangle size={20} />, items: ["Seized Weapons","Evidence Hold","Faulty Lock","Investigation"] },
  { title: "Mobile App Access", icon: <Smartphone size={20} />, items: ["Pre-booking","Status Check","Overdue Alert","Remote Wipe"] },
  { title: "Defaulter Escalation", icon: <ArrowUpRight size={20} />, items: ["SP Alert","Salary Hold","Show Cause","Suspension Sync"] },
  { title: "Inventory Forecasting", icon: <BarChart2 size={20} />, items: ["Wear & Tear","Retirement","New Indent","Budget Need"] },
  { title: "Barcode & QR Sync", icon: <QrCode size={20} />, items: ["Laser Scan","Tag Generate","Peel Alert","Asset Tagging"] },
  { title: "Multi-Armoury Sync", icon: <Network size={20} />, items: ["Statewide View","Inter-transfer","Stock Balance","Central DB"] }
];\`;

const replaceArray = (str, arrayName, replacementString) => {
  const regex = new RegExp(\`const \\\\s+\${arrayName}\\\\s*=\\\\s*\\\\[[\\\\s\\\\S]*?\\\\\\];\`);
  return str.replace(regex, replacementString);
};

code = replaceArray(code, 'modules', newModules);

// Inject missing icons if needed
const lucideImportRegex = /import\\s+\\{([^}]+)\\}\\s+from\\s+["']lucide-react["'];/;
const currentImportsMatch = code.match(lucideImportRegex);

if (currentImportsMatch) {
  const currentImports = currentImportsMatch[1].split(',').map(i => i.trim());
  const newIcons = ["Smartphone", "ArrowUpRight", "BarChart2", "QrCode"];
  
  const allIcons = new Set([...currentImports, ...newIcons].filter(Boolean));
  const importString = Array.from(allIcons).join(', ');
  code = code.replace(lucideImportRegex, \`import { \${importString} } from 'lucide-react';\`);
}

fs.writeFileSync(path, code);
console.log('Successfully expanded modules in WeaponIssueDetailed.jsx!');
