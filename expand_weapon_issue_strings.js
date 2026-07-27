const fs = require('fs');
const path = 'c:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\AI topic for html\\\\AI poilc topic\\\\AI-police-topic\\\\src\\\\pages\\\\WeaponIssueDetailed.jsx';
let code = fs.readFileSync(path, 'utf8');

// The new arrays to replace the old ones
const newAiExperts = \`const aiExperts = [
  "Biometric Iris Checkout Bot",
  "RFID Live Triangulation AI",
  "Automated Return Reminder Bot",
  "Missing Firearm Alert Sentinel",
  "Unauthorized Access Predictor",
  "Shift-Weapon Sync Coordinator",
  "Liveness Detection Modeler",
  "Iris Matching & Auth Algorithm",
  "Duty Roster Validation AI",
  "Weapon Deployment Heatmap AI",
  "Emergency Vault Lockdown Enforcer",
  "Officer Skill vs Caliber Matcher",
  "Psychological Stress Flagging AI",
  "Firearm Condition Visual Analyzer",
  "Ammunition Depletion Tracker AI"
];\`;

const newAiFeatures = \`const aiFeatures = [
  "AI Liveness Detection for Fingerprints & Iris",
  "Real-time RFID Gateway Tracking & Alarms",
  "Automated Discrepancy & Missing Asset Alerts",
  "Integration with HRMS Duty Rosters",
  "Geo-Fencing for HQ Weapons & Transport",
  "Predictive Deployment & Riot Analytics",
  "Automated Disciplinary Flagging for Late Returns",
  "Digital Two-Man Rule Enforcement via Facial Auth",
  "Smart Weapon Rack Sensor Synchronization",
  "Magazine & Round Counting Algorithms",
  "Weapon Maintenance Needs Prediction",
  "Officer Shooting Hand & Preference Logic",
  "Automated Show-Cause Notice Generation",
  "Multi-Armoury Stock Rebalancing Engine",
  "Weapon Quarantine & Evidence Hold Rules"
];\`;

const newDatabases = \`const databases = [
  "RFID_Firearm_Ledger_DB",
  "Biometric_Access_Vector_Logs",
  "Duty_Roster_Sync_Cache",
  "Missing_Asset_Telemetry_DB",
  "Weapon_Condition_History_Logs",
  "GeoFence_Alert_Records",
  "Checkout_Timestamp_Blockchain",
  "Shift_Commander_Approvals_DB",
  "Armoury_Visitor_Identity_Logs",
  "Weapon_Tag_Registry_DB"
];\`;

const newDashboards = \`const dashboards = [
  "Live Weapon Deployment Heatmap",
  "Missing/Overdue Firearms Radar",
  "Officer Checkout Frequencies Chart",
  "Unauthorized Access Attempts Log",
  "RFID Gateway Health Status",
  "Armoury Footfall Analytics",
  "Ammunition Consumption Timeline",
  "Weapon Maintenance & Repair Queue",
  "Defaulter Officer Penalty Dashboard",
  "Asset Value & Depreciation Graph"
];\`;

const newApis = \`const apis = [
  "State HRMS (Officer DB) Link",
  "Central Firearm Registry API",
  "IoT RFID Antennas Webhook",
  "Iris Scanner SDKs Integration",
  "HQ Geo-Fencing System Sync",
  "Police Comms (SMS Alerts) Gateway",
  "Smart Vault Lock Control API",
  "CCTV Facial Auth Stream",
  "Forensic Lab Ballistics Link",
  "Command Center Red Alert Webhook"
];\`;

// We'll replace the existing arrays in the code using simple string replacement or regex
// Let's use regex that matches `const arrayName = [ ... ];` across multiple lines if needed.
const replaceArray = (str, arrayName, replacementString) => {
  const regex = new RegExp(\`const \\\\s+\${arrayName}\\\\s*=\\\\s*\\\\[[\\\\s\\\\S]*?\\\\\\];\`);
  return str.replace(regex, replacementString);
};

code = replaceArray(code, 'aiExperts', newAiExperts);
code = replaceArray(code, 'aiFeatures', newAiFeatures);
code = replaceArray(code, 'databases', newDatabases);
code = replaceArray(code, 'dashboards', newDashboards);
code = replaceArray(code, 'apis', newApis);

fs.writeFileSync(path, code);
console.log('Successfully expanded 60 topics in WeaponIssueDetailed.jsx!');
