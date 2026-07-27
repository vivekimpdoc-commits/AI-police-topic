const fs = require('fs');

const appPath = 'c:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\AI topic for html\\\\AI poilc topic\\\\AI-police-topic\\\\src\\\\pages\\\\BorderCheckPostDetailed.jsx';
let code = fs.readFileSync(appPath, 'utf8');

// 15 AI Experts
const aiExperts = `[
    { title: "Highway Patrol Sync AI", icon: <Car size={20} />, items: ["Intercept Routes", "GPS Sync", "Speed Analytics", "Pursuit Logic"] },
    { title: "ANPR Master Bot", icon: <Camera size={20} />, items: ["Plate Reads", "Fuzzy Match", "State DB Sync", "Stolen Check"] },
    { title: "Smuggling Predictor", icon: <Package size={20} />, items: ["Route Anomaly", "Weight Check", "Manifest Match", "Risk Score"] },
    { title: "Toll Plaza API Bot", icon: <Activity size={20} />, items: ["FASTag Sync", "Pass Logs", "Delay Alerts", "Barrier Control"] },
    { title: "Mobile Checkpoint AI", icon: <MapPin size={20} />, items: ["Nakabandi Spots", "Surprise Checks", "Evasion Risk", "Live Status"] },
    { title: "E-Waybill Verifier", icon: <FileCheck size={20} />, items: ["GSTN Sync", "Fraud Detect", "Validity Check", "Goods Match"] },
    { title: "Border Clash Predictor", icon: <ShieldAlert size={20} />, items: ["Tension Alerts", "Crowd Density", "Force Deploy", "SOS Triggers"] },
    { title: "Interstate Alert Sync", icon: <Globe size={20} />, items: ["Cross-border Warrants", "Fugitive Track", "CCTNS Link", "Alert Broadcast"] },
    { title: "Drone Border Guard", icon: <Crosshair size={20} />, items: ["Air Patrol", "Night Vision", "Off-road Track", "Live Feed"] },
    { title: "Facial Match Bot", icon: <UserCheck size={20} />, items: ["Driver ID", "Wanted List", "Mask Bypass", "Watchlist"] },
    { title: "Weighbridge Analyst", icon: <Scale size={20} />, items: ["Overload Detect", "Axle Weight", "Penalty Calc", "Auto-Challan"] },
    { title: "Hazardous Goods AI", icon: <AlertTriangle size={20} />, items: ["Chem Scan", "Explosive Risk", "Route Escort", "Permit Verify"] },
    { title: "Livestock Smuggle Bot", icon: <Truck size={20} />, items: ["Thermal Scan", "Capacity Check", "Cruelty Flag", "Origin Trace"] },
    { title: "Traffic Density AI", icon: <TrafficCone size={20} />, items: ["Choke Points", "Lane Optimize", "Clearance Time", "Divert Route"] },
    { title: "VIP Corridor AI", icon: <Star size={20} />, items: ["Green Channel", "Escort Sync", "Pre-clearance", "Threat Scan"] }
]`;

// 15 Modules (replacing borderModules)
const borderModules = `[
    { title: "ANPR Integration", icon: <Camera size={20} />, items: ["Optical Character Recog", "Night Vision Plates", "Fake Plate Detect", "Interstate DB Search"] },
    { title: "E-Waybill & GSTN", icon: <FileText size={20} />, items: ["QR Code Scanners", "Real-time Verification", "Quantity Match", "Tax Defaulter Flag"] },
    { title: "Toll Gateway Sync", icon: <Activity size={20} />, items: ["FASTag API", "Cash Lane Monitor", "Barrier Override", "Passage Timestamps"] },
    { title: "Dynamic Nakabandi", icon: <MapPin size={20} />, items: ["AI Spot Selection", "Barricade Logistics", "Duty Roster Match", "Evasion Heatmap"] },
    { title: "Weighbridge Automation", icon: <Scale size={20} />, items: ["Live Weight Capture", "Overload Penalties", "Automated Challans", "Data Tamper Proofing"] },
    { title: "Highway Patrol Sync", icon: <Car size={20} />, items: ["Live Dispatch", "Pursuit Routing", "Radio Comm Sync", "Ambulance Route"] },
    { title: "Smuggling Interception", icon: <Package size={20} />, items: ["Liquor Transit", "Arms Detect", "Narcotics Profiling", "Concealment Patterns"] },
    { title: "Drone Surveillance", icon: <Crosshair size={20} />, items: ["Perimeter Scan", "Off-road Tracking", "Thermal Imaging", "Battery Swaps"] },
    { title: "Cross-Border Intelligence", icon: <Globe size={20} />, items: ["Neighbor State API", "Fugitive Sync", "Terror Alerts", "Joint Ops"] },
    { title: "Traffic Optimization", icon: <TrafficCone size={20} />, items: ["Queue Length AI", "Lane Management", "Peak Hour Prediction", "Divert Signals"] },
    { title: "Facial Recognition at Checks", icon: <UserCheck size={20} />, items: ["Driver Snapshot", "Passenger Scan", "Wanted DB Match", "Alert Trigger"] },
    { title: "Livestock Transit Control", icon: <Truck size={20} />, items: ["Capacity Rules", "Thermal Heatmaps", "Permit Validation", "NGO Alerts"] },
    { title: "Hazardous Materials", icon: <AlertTriangle size={20} />, items: ["Explosives License", "Chemical Routes", "Escort Sync", "Spill Response"] },
    { title: "VIP & Green Corridors", icon: <Star size={20} />, items: ["Convoy Tracking", "Zero-stop Transit", "Route Sanitize", "Medical Emergency"] },
    { title: "Audit & Compliance", icon: <ShieldAlert size={20} />, items: ["Officer Bodycam Sync", "Bribery Flags", "Random Audits", "Shift Handover"] }
]`;

// 10 Dashboards (replacing dashboards and reports)
const dashboards = `[
    { title: "Live Border Crossing Radar", icon: <Monitor size={20} />, items: ["Active Vehicles", "Wait Times", "Lane Status", "Alerts"] },
    { title: "Highway Patrol Heatmap", icon: <Map size={20} />, items: ["Unit Locations", "Recent Stops", "Pursuit Tracks", "Coverage"] },
    { title: "Commercial Transit Stats", icon: <Truck size={20} />, items: ["Total Trucks", "E-Waybill Checks", "Overload Count", "Revenue"] },
    { title: "Interstate Alert Hits", icon: <ShieldAlert size={20} />, items: ["Wanted Found", "Stolen Recovered", "Fake Plates", "Arrests"] },
    { title: "Mobile Checkpoint Efficacy", icon: <Target size={20} />, items: ["Spots Active", "Vehicles Checked", "Seizures Made", "ROI Score"] },
    { title: "Toll Plaza Choke Points", icon: <TrafficCone size={20} />, items: ["Queue Length", "Clearance Rate", "FASTag Fails", "Manual Lane"] },
    { title: "Smuggling Risk Map", icon: <Package size={20} />, items: ["High-Risk Routes", "Seizure Hotspots", "Time Patterns", "Goods Type"] },
    { title: "Drone Fleet Operations", icon: <Crosshair size={20} />, items: ["Airborne Units", "Battery Levels", "Coverage Area", "Flagged Videos"] },
    { title: "Officer Performance", icon: <UserCheck size={20} />, items: ["Scans Completed", "Challans Issued", "Shift Hours", "Complaint Rate"] },
    { title: "Revenue & Challan DB", icon: <PieChart size={20} />, items: ["Overload Fines", "Tax Evasion", "Daily Total", "Pending Dues"] }
]`;

// 10 Databases
const databases = `[
    { title: "Border Transit Logs", icon: <Database size={20} />, items: ["Plate Numbers", "Timestamps", "Direction", "Lane ID"] },
    { title: "Commercial E-Waybills", icon: <FileText size={20} />, items: ["GSTIN", "Consignment", "Validity", "Verification"] },
    { title: "ANPR Read Archive", icon: <Camera size={20} />, items: ["Images", "Confidence Score", "Fuzzy Matches", "State Reg"] },
    { title: "Highway Patrol GPS", icon: <MapPin size={20} />, items: ["Vehicle ID", "Lat/Long", "Speed", "Duty Status"] },
    { title: "Interstate Alert DB", icon: <Globe size={20} />, items: ["Warrants", "Stolen Cars", "Missing Persons", "BOLO"] },
    { title: "Seizure Manifests", icon: <Briefcase size={20} />, items: ["Item Desc", "Quantity", "Value", "Case Link"] },
    { title: "Mobile Checkpoint History", icon: <History size={20} />, items: ["Location", "Duration", "Officers", "Outcome"] },
    { title: "Toll Plaza Crossings", icon: <Activity size={20} />, items: ["Tag ID", "Class", "Balance", "Pass Time"] },
    { title: "Weighbridge Records", icon: <Scale size={20} />, items: ["Gross Weight", "Tare Weight", "Overload", "Receipt"] },
    { title: "Drone Video Archive", icon: <Video size={20} />, items: ["Flight Path", "Duration", "Tagged Events", "Metadata"] }
]`;

// 10 APIs / Integrations
const apis = `[
    { title: "NHAI FASTag API", icon: <Link size={20} />, items: ["Tag Read", "Blacklist Check", "Pass Auth", "Class Mismatch"] },
    { title: "GSTN E-Waybill API", icon: <FileCheck size={20} />, items: ["Bill Fetch", "Validity Query", "Cancel Status", "Tax Sync"] },
    { title: "Vahan / Sarathi (RTO)", icon: <Car size={20} />, items: ["Reg Details", "Owner Info", "Fitness Cert", "Challan Hist"] },
    { title: "CCTNS Interstate DB", icon: <Globe size={20} />, items: ["Crime Records", "Wanted List", "Stolen Vehicles", "FIR Sync"] },
    { title: "Weighbridge IoT Grid", icon: <Scale size={20} />, items: ["Sensor Data", "Calibration", "Tamper Alert", "Live Weight"] },
    { title: "Smart City Cameras", icon: <Video size={20} />, items: ["Feed Access", "PTZ Control", "Event Trigger", "Video Analytics"] },
    { title: "State Police Comms", icon: <Radio size={20} />, items: ["Radio Sync", "SOS Broadcast", "Dispatch Alert", "Unit Call"] },
    { title: "Excise Dept API", icon: <Wine size={20} />, items: ["Liquor Permits", "Route Check", "Quota Limit", "Seizure Sync"] },
    { title: "Mining Dept API", icon: <Pickaxe size={20} />, items: ["Sand Transit", "Mineral Royalty", "Route Pass", "Overload Check"] },
    { title: "Command Center Webhook", icon: <ShieldAlert size={20} />, items: ["Red Alerts", "Live Dashboards", "Resource Ask", "Escalations"] }
]`;

// Replace arrays in the file using Regex
const replaceArray = (str, arrayName, newContent) => {
  const regex = new RegExp(\`const \${arrayName} = \\\\[.*?\\\\];\`, 's');
  return str.replace(regex, \`const \${arrayName} = \${newContent};\`);
};

code = replaceArray(code, 'aiExperts', aiExperts);
code = replaceArray(code, 'borderModules', borderModules);
code = replaceArray(code, 'dashboards', dashboards);
code = replaceArray(code, 'databases', databases);
code = replaceArray(code, 'apis', apis);
// also replace reports with the new dashboards array so it's consistent if they rendered reports
code = replaceArray(code, 'reports', dashboards);
// aiFeatures was also an array of strings. We can just set it to the borderModules string to avoid breaking.
code = replaceArray(code, 'aiFeatures', borderModules);

// Fix JSX rendering in the file to handle the object structure
// The JSX currently expects strings for aiExperts, aiFeatures, dashboards, databases, apis, reports.
// We need to rewrite the render blocks to match the object structure like WeaponIssueDetailed had.

const newExpertsJsx = \`
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  {expert.icon}
                  <h3>{expert.title}</h3>
                </div>
                <div className="module-tags">
                  {expert.items.map((item, j) => (
                    <span key={j} className="module-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
\`;

const newFeaturesJsx = \`
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {aiFeatures.map((feat, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  {feat.icon}
                  <h3>{feat.title}</h3>
                </div>
                <div className="module-tags">
                  {feat.items.map((item, j) => (
                    <span key={j} className="module-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
\`;

const newArchitectureJsx = \`
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel">
                <h3 style={{ marginBottom: '1.5rem' }}><Database className="inline-icon" color="#06b6d4" /> Core Databases</h3>
                <div className="module-accordion">
                  {databases.map((db, i) => (
                    <div key={i} className="premium-module-panel" style={{ marginBottom: '1rem' }}>
                      <div className="module-header" style={{ padding: '0.75rem 1rem' }}>
                        {db.icon}
                        <h3 style={{ fontSize: '1rem' }}>{db.title}</h3>
                      </div>
                      <div className="module-tags" style={{ padding: '0 1rem 1rem 1rem' }}>
                        {db.items.map((item, j) => (
                          <span key={j} className="module-tag">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="panel">
                <h3 style={{ marginBottom: '1.5rem' }}><Network className="inline-icon" color="#8b5cf6" /> Integrations & APIs</h3>
                <div className="module-accordion">
                  {apis.map((api, i) => (
                    <div key={i} className="premium-module-panel" style={{ marginBottom: '1rem' }}>
                      <div className="module-header" style={{ padding: '0.75rem 1rem' }}>
                        {api.icon}
                        <h3 style={{ fontSize: '1rem' }}>{api.title}</h3>
                      </div>
                      <div className="module-tags" style={{ padding: '0 1rem 1rem 1rem' }}>
                        {api.items.map((item, j) => (
                          <span key={j} className="module-tag" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#a78bfa', border: '1px solid rgba(139, 92, 246, 0.3)' }}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
\`;

const newReportsJsx = \`
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
             <div className="split-section">
              <div className="panel" style={{ width: '100%' }}>
                <h3 style={{ marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" color="#3b82f6" /> Dashboards & Reports</h3>
                <div className="module-accordion" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {dashboards.map((d, i) => (
                    <div key={i} className="premium-module-panel" style={{ marginBottom: '0' }}>
                      <div className="module-header" style={{ padding: '0.75rem 1rem' }}>
                        {d.icon}
                        <h3 style={{ fontSize: '1rem' }}>{d.title}</h3>
                      </div>
                      <div className="module-tags" style={{ padding: '0 1rem 1rem 1rem' }}>
                        {d.items.map((item, j) => (
                          <span key={j} className="module-tag">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
\`;

// Let's replace the render blocks in the file
code = code.replace(/case 'experts':\\s*return \\(\\s*<motion\\.div.*?>[\\s\\S]*?<\\/motion\\.div>\\s*\\);/m, "case 'experts':\\n        return (" + newExpertsJsx + "        );");
code = code.replace(/case 'features':\\s*return \\(\\s*<motion\\.div.*?>[\\s\\S]*?<\\/motion\\.div>\\s*\\);/m, "case 'features':\\n        return (" + newFeaturesJsx + "        );");
code = code.replace(/case 'architecture':\\s*return \\(\\s*<motion\\.div.*?>[\\s\\S]*?<\\/motion\\.div>\\s*\\);/m, "case 'architecture':\\n        return (" + newArchitectureJsx + "        );");
code = code.replace(/case 'reports':\\s*return \\(\\s*<motion\\.div.*?>[\\s\\S]*?<\\/motion\\.div>\\s*\\);/m, "case 'reports':\\n        return (" + newReportsJsx + "        );");

// Inject missing Lucide icons
const lucideImportRegex = /import\\s+\\{([^}]+)\\}\\s+from\\s+["']lucide-react["'];/;
const currentImportsMatch = code.match(lucideImportRegex);

if (currentImportsMatch) {
  const currentImports = currentImportsMatch[1].split(',').map(i => i.trim());
  const newIcons = [
    "Car", "Camera", "Package", "Activity", "MapPin", "FileCheck", "ShieldAlert", "Globe", "Crosshair", "UserCheck", "Scale", "AlertTriangle", "Truck", "TrafficCone", "Star",
    "FileText", "Monitor", "Map", "Target", "PieChart", "Database", "Briefcase", "History", "Video", "Link", "Radio", "Wine", "Pickaxe", "Bot", "LayoutDashboard", "Shield", "Rocket", "Network", "ArrowLeft", "Terminal", "Cpu", "CheckCircle"
  ];
  
  const allIcons = new Set([...currentImports, ...newIcons].filter(Boolean));
  const importString = Array.from(allIcons).join(', ');
  code = code.replace(lucideImportRegex, \`import { \${importString} } from "lucide-react";\`);
}

fs.writeFileSync(appPath, code);
console.log('BorderCheckPostDetailed expanded successfully!');
