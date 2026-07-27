const fs = require('fs');

const appPath = 'c:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\AI topic for html\\\\AI poilc topic\\\\AI-police-topic\\\\src\\\\pages\\\\WeaponIssueDetailed.jsx';
let code = fs.readFileSync(appPath, 'utf8');

// The 60 topics data
const aiExperts = `[
    { title: "Iris Biometric Assigner", icon: <Fingerprint size={20} />, items: ["Dual-Iris Scan","Liveness Check","Gaze Validation","Match Score"] },
    { title: "RFID Vault Guard AI", icon: <Radio size={20} />, items: ["Gateway Scan","Anti-Tailgate","Geo-fence","Tamper Alert"] },
    { title: "Weapon Pairing Expert", icon: <Crosshair size={20} />, items: ["Officer Skill Match","Caliber Req","Recoil Sync","Mission Spec"] },
    { title: "Return Audit AI", icon: <RotateCcw size={20} />, items: ["Shift Sync","Overdue Ping","Defaulter Log","Fine Calculator"] },
    { title: "Firearm Condition AI", icon: <Wrench size={20} />, items: ["Visual Dent Scan","Rust Check","Carbon Buildup","Jam Predictor"] },
    { title: "Ammo Sync Expert", icon: <Database size={20} />, items: ["Round Counting","Magazine Match","Blank vs Live","Depletion Rate"] },
    { title: "Suspicious Activity AI", icon: <ShieldAlert size={20} />, items: ["Late Returns","Unusual Draw","Rapid Fire Flag","Multi-Weapon Alert"] },
    { title: "Armoury Access Expert", icon: <Key size={20} />, items: ["Two-Man Rule","Supervisor Override","Emergency Unlock","Vault Sealing"] },
    { title: "Psychological Screen AI", icon: <Brain size={20} />, items: ["Stress Level Sync","PTSD Flagging","HRMS Veto","Anger Pattern"] },
    { title: "Kiosk Guide Bot", icon: <Bot size={20} />, items: ["Voice Instructions","Visual Cues","Multilingual","Error Help"] },
    { title: "Deployment Predictor", icon: <TrendingUp size={20} />, items: ["Riot Prep","Election Ops","VIP Movement","Threat Level"] },
    { title: "Asset Value AI", icon: <Landmark size={20} />, items: ["Depreciation","Loss Audit","Replacement Cost","Insurance Value"] },
    { title: "Quartermaster Copilot", icon: <UserCheck size={20} />, items: ["Shift Handoff","Ledger Balance","Missing Alert","Auto-Indent"] },
    { title: "Weapon Transport AI", icon: <Truck size={20} />, items: ["Convoy Tracking","GPS Padlock","Route Deviate","Hijack Alert"] },
    { title: "Compliance Auditor AI", icon: <FileCheck size={20} />, items: ["SOP Check","Legal Trace","Court Evidence","Usage Logs"] }
  ]`;

const coreModules = `[
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
  ]`;

const dashboards = `[
    { title: "Live Armoury View", icon: <Monitor size={20} />, items: ["Rack Status","Current Stock","Active Issues","Vault Temp"] },
    { title: "Issue/Return Timeline", icon: <Activity size={20} />, items: ["Hourly Spikes","Shift Trends","Peak Load","Delay Graph"] },
    { title: "Officer Weapon History", icon: <UserCheck size={20} />, items: ["Total Issues","Fault Rates","Delay Count","Caliber Pref"] },
    { title: "Defaulter Dashboard", icon: <AlertTriangle size={20} />, items: ["Overdue List","Escalation Level","Penalty Dues","Blocklist"] },
    { title: "Ammunition Sync Map", icon: <Database size={20} />, items: ["Rounds Issued","Batch Track","Expiry Warn","Live vs Blank"] },
    { title: "Maintenance Queue", icon: <Wrench size={20} />, items: ["Pending Fixes","Parts Needed","Mechanic Load","Clearance"] },
    { title: "Emergency Readiness", icon: <Zap size={20} />, items: ["Available Arsenal","Riot Gear Sync","Deploy Time","Alert Level"] },
    { title: "Geographic Deploy Map", icon: <Map size={20} />, items: ["Patrol Zones","Weapon Density","Hotspot Match","Range Ring"] },
    { title: "Cost & Depreciation", icon: <PieChart size={20} />, items: ["Asset Value","Repair Spend","Replacement Budget","Scrap Value"] },
    { title: "Compliance & Audit", icon: <FileText size={20} />, items: ["Ledger Match","Discrepancies","Digital Signatures","HQ Reports"] }
  ]`;

const databases = `[
    { title: "Officer Biometric DB", icon: <Database size={20} />, items: ["Iris Hashes","Fingerprints","Facial Vectors","Clearance Level"] },
    { title: "RFID Asset Registry", icon: <Server size={20} />, items: ["Tag UIDs","Weapon Map","Last Scanned","Battery Status"] },
    { title: "Firearm Ballistics DB", icon: <Target size={20} />, items: ["Rifling Marks","Test Fire Logs","Barrel Print","Forensic Sync"] },
    { title: "Maintenance Log DB", icon: <Wrench size={20} />, items: ["Repair History","Part Replacements","Technician Notes","Warranty"] },
    { title: "Shift Roster DB", icon: <Clock size={20} />, items: ["Duty Allocations","Officer Posts","Return Deadlines","Leaves"] },
    { title: "Ammunition Batch DB", icon: <Layers size={20} />, items: ["Lot Numbers","Manufacturing Date","Expiry","Supplier Info"] },
    { title: "Defaulter & Penalty DB", icon: <AlertCircle size={20} />, items: ["Show Cause Notices","Fine Amounts","Block History","Appeals"] },
    { title: "Armoury Access Logs", icon: <Lock size={20} />, items: ["Entry/Exit","Door Pings","Override Auth","CCTV Stamps"] },
    { title: "Evidence & Seizure DB", icon: <Briefcase size={20} />, items: ["Case Links","Court Holds","Seized By","Disposal Date"] },
    { title: "Statewide Arsenal DB", icon: <Globe size={20} />, items: ["All Locations","Total Count","Transfer Logs","Procurement"] }
  ]`;

const integrations = `[
    { title: "Smart Lock API", icon: <Lock size={20} />, items: ["Rack Unlock","Vault Seal","Siren Trigger","Tamper Ping"] },
    { title: "State HRMS Link", icon: <Users size={20} />, items: ["Payroll Block","Leave Sync","Transfer Flag","Retirement"] },
    { title: "CCTV Facial Auth", icon: <Video size={20} />, items: ["Tailgate Catch","Mask Detect","Identity Confirm","Log Video"] },
    { title: "Forensic Lab API", icon: <TestTube size={20} />, items: ["Ballistic Sync","Crime Match","Test Report","Hold Request"] },
    { title: "GPS Convoy Sync", icon: <MapPin size={20} />, items: ["Transport Van","Route Deviation","Halt Alert","ETA Update"] },
    { title: "SMS/Email Gateway", icon: <Mail size={20} />, items: ["OTP Auth","Overdue Warn","Fine Alert","Command Notice"] },
    { title: "Blockchain Ledger", icon: <Link size={20} />, items: ["Immutable Logs","Audit Trail","Court Proof","Hash Sync"] },
    { title: "Police Radio Comms", icon: <Radio size={20} />, items: ["TETRA Alert","Armoury Dispatch","SOS Broadcast","Unit Call"] },
    { title: "Predictive Analytics Engine", icon: <Cpu size={20} />, items: ["Demand Model","Fault Predict","Budget Forecast","Riot Need"] },
    { title: "Command Center Webhook", icon: <ShieldAlert size={20} />, items: ["Live Feeds","Emergency Lock","Riot Dispatch","Red Alert"] }
  ]`;

// Find and replace the arrays
const replaceArray = (str, arrayName, newContent) => {
  const regex = new RegExp(\`const \${arrayName} = \\\\[.*?\\\\];\`, 's');
  return str.replace(regex, \`const \${arrayName} = \${newContent};\`);
};

code = replaceArray(code, 'aiExperts', aiExperts);
code = replaceArray(code, 'coreCapabilities', coreModules);
code = replaceArray(code, 'dashboards', dashboards);
code = replaceArray(code, 'databases', databases);
code = replaceArray(code, 'integrations', integrations);

// Inject all required Lucide icons
const lucideImportRegex = /import\\s+\\{([^}]+)\\}\\s+from\\s+["']lucide-react["'];/;
const currentImportsMatch = code.match(lucideImportRegex);

if (currentImportsMatch) {
  const currentImports = currentImportsMatch[1].split(',').map(i => i.trim());
  const newIcons = [
    "Fingerprint", "Radio", "RotateCcw", "ShieldAlert", "FileCheck",
    "Crosshair", "Wrench", "Database", "Key", "Brain", "Bot", "TrendingUp",
    "Landmark", "UserCheck", "Truck", "Server", "Clock", "Target", "Zap",
    "AlertTriangle", "Smartphone", "ArrowUpRight", "BarChart2", "QrCode", "Network",
    "Monitor", "Activity", "Map", "PieChart", "FileText", "Layers", "AlertCircle",
    "Lock", "Briefcase", "Globe", "Users", "Video", "TestTube", "MapPin", "Mail",
    "Link", "Radio", "Cpu"
  ];
  
  const allIcons = new Set([...currentImports, ...newIcons].filter(Boolean));
  // Let's remove any icons that conflict with existing functions like TrendingDown if they exist.
  // We'll just generate the import line
  const importString = Array.from(allIcons).join(', ');
  code = code.replace(lucideImportRegex, \`import { \${importString} } from 'lucide-react';\`);
}

fs.writeFileSync(appPath, code);
console.log('WeaponIssueDetailed expanded successfully!');
