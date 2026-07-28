const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'AnnualInspectionPlannerDetailed.jsx',
    compName: 'AnnualInspectionPlannerDetailed',
    mainTitle: 'AI ANNUAL INSPECTION',
    subTitle: 'PLANNER',
    desc: 'Automated scheduling, DIG/IG itinerary optimization, pre-inspection checklist generation & timeline tracking',
    experts: [
      "Annual Schedule/Itinerary Optimizer AI", "Pre-Inspection Checklist Generator", "DIG/IG Calendar Sync Engine", "Readiness/Preparation Scorer",
      "Historical Observation/Deficiency Linker", "Geospatial Route/Tour Planner", "Document/Register Pre-Audit Bot", "Pending Inquiry/Case Flagging AI",
      "Annual Inspection Dashboard", "Voice-Command Schedule Query Bot", "Automated Monthly Inspection Progress Report", "PHQ (Police Headquarters) Sync",
      "Last-Minute Postponement/Clash Predictor", "Unprepared Unit/Station Alert", "Weather/Event Disruption Analyzer", "Officer Availability/Leave Sync",
      "AI Evaluator for Station Readiness Index", "Audit/Itinerary Log Generator", "Data Privacy/Tour Schedule Scrubber", "State Intelligence/Security Sync",
      "Inspecting Officer Mobile App", "Historical Grading/Score Correlator", "DGP (Administration) Briefing AI", "Preparation Task Allocator (to SHOs)",
      "Blockchain Immutable Schedule Hash", "Anti-Tamper Inspection Record Shield", "Mobile App for Station Preparation Uploads", "Range-wise Inspection Completion Benchmarker",
      "Automated Alert for Overdue Inspections", "Historical Tour/TA-DA Cost Analyzer", "Inspection Preparation SOP Trainer", "Calendar API/Database Health Monitor",
      "Imminent VIP Visit/Inspection Clash Alert", "Habitual Defaulter (Unprepared Station) Profiler", "High-Priority (Sensitive Station) Classifier", "AI Assisted Inspection Order Drafter",
      "Tour/Schedule Data Storage Forecaster", "Secure Itinerary/Movement Protector", "Integration with E-Office/HRMS", "Media/PRO Update Sync",
      "Election Year Accelerated Inspection Modeler", "Disaster/Emergency Tour Coordinator", "Tour & Travel Allowance Budget Tracker", "Custom Workflow for DGP/CM Inspections",
      "AI Driven Inspection Completion Date Predictor", "Predictive Need for Remedial Training", "Custom Alert Trigger for IG Range", "Notification to Final Report Timeline"
    ]
  },
  {
    fileName: 'SurpriseInspectionSystemDetailed.jsx',
    compName: 'SurpriseInspectionSystemDetailed',
    mainTitle: 'AI SURPRISE INSPECTION',
    subTitle: 'SYSTEM',
    desc: 'Randomized target selection, geo-fenced trigger alerts, stealth deployment planning & spot-check reporting',
    experts: [
      "Randomized Target Selection Algorithm", "Geo-Fenced Proximity Trigger Alert", "Stealth Deployment/Route Optimizer", "Real-Time Spot-Check Reporting Bot",
      "Tip-off/Information Leak Detector", "Night Duty/Sentry Alertness Scorer", "Historical Vulnerability Hotspot Mapper", "Response Time/Turnout Evaluator",
      "Surprise Inspection Dashboard", "Voice-Command Target Query Bot", "Automated Weekly Spot-Check Report", "District Control Room (DCR) Sync",
      "Duty Evasion/Absence Predictor", "Compromised Route/Traffic Jam Analyzer", "Register Manipulation (Post-Arrival) Detector", "Lock-up/Prisoner Count Validator",
      "AI Evaluator for Operational Alertness", "Audit/Spot-Check Log Generator", "Data Privacy/Surprise Plan Scrubber", "Anti-Corruption/Vigilance Sync",
      "Gazetted Officer (GO) Night App", "Historical Negligence Correlator", "SP/SSP Briefing AI", "Remedial Action Task Allocator",
      "Blockchain Immutable Spot-Check Hash", "Anti-Tamper Night Diary Shield", "Mobile App for Live Video/Photo Evidence", "Station-wise Alertness Benchmarker",
      "Automated Alert for Missing Sentries", "Historical Night-Duty Fuel Cost Analyzer", "Surprise Check/Night Round SOP Trainer", "GPS/Vehicle Tracking API Monitor",
      "Imminent Custodial Incident Alert", "Habitual Sleeper/Absentee Profiler", "High-Risk (Border/Highway) Target Classifier", "AI Assisted Suspension/Notice Drafter",
      "Spot-Check Evidence/Video Forecaster", "Secure Surprise Target Roster Protector", "Integration with Dial 112/Emergency Dispatch", "Traffic/Highway Patrol Sync",
      "Election Vulnerable Booth Surprise Check Modeler", "Disaster Relief Camp Night Audit Coordinator", "Night Round Vehicle Fuel Budget Tracker", "Custom Workflow for DGP Flying Squad",
      "AI Driven Negligence Hotspot Predictor", "Predictive Need for Roster Shuffle", "Custom Alert Trigger for Zonal IG", "Target Selection to Spot Report Timeline"
    ]
  },
  {
    fileName: 'PoliceLineInspectionDetailed.jsx',
    compName: 'PoliceLineInspectionDetailed',
    mainTitle: 'AI POLICE LINE',
    subTitle: 'INSPECTION',
    desc: 'Reserve force readiness, quarter guard audit, mess hygiene scoring & armory safety compliance',
    experts: [
      "Reserve Force Turnout/Readiness Scorer", "Quarter Guard Protocol Audit AI", "Mess/Canteen Hygiene & Ration Validator", "Armory/Magazine Safety Compliance Bot",
      "Barrack Sanitation/Living Standard Analyzer", "MT (Motor Transport) Fleet Readiness Scorer", "Geo-Spatial Police Line Layout Mapper", "Welfare Activity/Hospital Audit Engine",
      "Police Line Inspection Dashboard", "Voice-Command Line Status Bot", "Automated Monthly Reserve Audit Report", "Lines Officer/Reserve Inspector (RI) Sync",
      "Ammunition Discrepancy/Shortage Predictor", "Food Quality/Ration Pilferage Alert", "Vehicle Breakdown/Unreadiness Detector", "Sickness/Leave Spike Analyzer",
      "AI Evaluator for Reserve Force Health Index", "Audit/Line Inspection Log Generator", "Data Privacy/Force Roster Scrubber", "Armed Police/Battalion HQ Sync",
      "Inspecting Commandant/SP App", "Historical Discipline Breach Correlator", "DGP (Armed/Reserve) Briefing AI", "Maintenance/Repair Task Allocator",
      "Blockchain Immutable Armory Audit Hash", "Anti-Tamper Ration Ledger Shield", "Mobile App for Quick Parade Grading", "Battalion-wise Readiness Benchmarker",
      "Automated Alert for Armory Security Breach", "Historical Mess/Ration Subsidy Analyzer", "Police Line/Quarter Guard SOP Trainer", "CCTV/Armory Sensor Health Monitor",
      "Imminent Riot/Mob Deployment Unreadiness Alert", "Substandard Ration Vendor Profiler", "Critical (Quick Response Team) Readiness Classifier", "AI Assisted Welfare Grant Proposal Drafter",
      "Inspection Image/Data Storage Forecaster", "Secure Armory Inventory Protector", "Integration with HRMS/Leave Portal", "State Health Department (Camp Hospital) Sync",
      "Election Reserve Force Turnout Modeler", "Disaster Relief Equipment Readiness Coordinator", "Line Maintenance/Welfare Budget Tracker", "Custom Workflow for Mounted Police (Cavalry)",
      "AI Driven Equipment Replacement Predictor", "Predictive Need for Mess Upgrades", "Custom Alert Trigger for ADG Armed Police", "Inspection Start to Rectification Timeline"
    ]
  },
  {
    fileName: 'StationCleanlinessAuditDetailed.jsx',
    compName: 'StationCleanlinessAuditDetailed',
    mainTitle: 'AI STATION CLEANLINESS',
    subTitle: 'AUDIT',
    desc: 'Visual hygiene scoring, lock-up sanitation checks, public reception aesthetics & 5S methodology compliance',
    experts: [
      "Visual Hygiene/Cleanliness Scorer AI", "Lock-up/Toilet Sanitation Auditor", "Public Reception/Waiting Area Aesthetic Analyzer", "5S Methodology (Sort, Set, Shine) Compliance Bot",
      "Record Room/Malkhana Dust/Pest Detector", "Scrap/Seized Vehicle Yard Clutter Analyzer", "Geo-Spatial Station Hygiene Heatmapper", "Contractor/Sweeper Attendance Sync AI",
      "Cleanliness Audit Dashboard", "Voice-Command Hygiene Query Bot", "Automated Weekly Swachhata (Cleanliness) Report", "Municipal/Sanitation Department Sync",
      "Infectious Disease/Outbreak Predictor (Lock-up)", "Bio-Hazard/Medical Waste Mishandling Alert", "Water Stagnation/Dengue Risk Detector", "Cleaning Supply/Chemical Shortage Analyzer",
      "AI Evaluator for Swachh Police Station Index", "Audit/Sanitation Log Generator", "Data Privacy/Custody Video Scrubber", "Health/Medical Officer Sync",
      "Nodal Officer (Swachhata) Mobile App", "Historical Custodial Health Issue Correlator", "SP (Administration) Briefing AI", "Housekeeping/Scrap Disposal Task Allocator",
      "Blockchain Immutable Cleanliness Hash", "Anti-Tamper Sweeper Attendance Shield", "Mobile App for Public/Citizen Feedback", "Station-wise Hygiene Benchmarker",
      "Automated Alert for Severe Unhygienic Conditions", "Historical Cleaning Contract Cost Analyzer", "Swachh Bharat/Sanitation SOP Trainer", "IoT Odor/Air Quality Sensor Monitor",
      "Imminent Epidemic (in Barrack/Lock-up) Alert", "Habitual Clutter/Mess Creator Profiler", "High-Footfall (City Center) Station Classifier", "AI Assisted Contractor Penalty Drafter",
      "Cleanliness Image/Before-After Forecaster", "Secure Lock-up Footage Protector", "Integration with National Swachh Bharat Portal", "Pollution Control Board Sync",
      "Election Observer Visit Readiness Modeler", "Disaster Flood/Mud Clearance Coordinator", "Sanitation/Housekeeping Budget Tracker", "Custom Workflow for Hazardous Seizure Disposal",
      "AI Driven Cleaning Supply Indent Predictor", "Predictive Need for Pest Control", "Custom Alert Trigger for Range DIG", "Deficiency Identification to Deep Clean Timeline"
    ]
  },
  {
    fileName: 'VehicleInspectionRegisterDetailed.jsx',
    compName: 'VehicleInspectionRegisterDetailed',
    mainTitle: 'AI VEHICLE INSPECTION',
    subTitle: 'REGISTER',
    desc: 'Logbook vs GPS reconciliation, maintenance schedule auditing, mileage efficiency tracking & condemnation modeling',
    experts: [
      "Logbook vs GPS Telemetry Reconciler", "Maintenance/Service Schedule Auditor", "Mileage/Fuel Efficiency (KMPL) Tracker", "Vehicle Condemnation/Auction Modeler",
      "Tire Wear/Battery Health Scorer AI", "Unauthorized Detour/Personal Use Detector", "Geo-Spatial Fleet Movement Mapper", "Accident/Damage Assessment Engine",
      "Vehicle Inspection Dashboard", "Voice-Command Fleet Status Bot", "Automated Monthly MT (Motor Transport) Report", "State Transport/RTO Sync",
      "Fuel Pilferage/Siphoning Predictor", "Fake Run-Kilometer Entry Alert", "Imminent Engine Seizure/Failure Predictor", "Driver Rash-Driving/Harsh Braking Analyzer",
      "AI Evaluator for Fleet Readiness Index", "Audit/Inspection Log Generator", "Data Privacy/Officer Movement Scrubber", "Finance/Audit Department Sync",
      "MT Officer/Inspector Mobile App", "Historical Breakdown Trend Correlator", "SP (Motor Transport) Briefing AI", "Workshop/Repair Task Allocator",
      "Blockchain Immutable Logbook Hash", "Anti-Tamper GPS/Telemetry Shield", "Mobile App for Pre-Trip Inspection (PTI)", "Vehicle-Make Efficiency Benchmarker",
      "Automated Alert for Overdue Servicing", "Historical Fuel/Maintenance Cost Analyzer", "Fleet Management/Safety SOP Trainer", "OBD-II (On-Board Diagnostics) API Monitor",
      "Imminent Highway Breakdown/Accident Alert", "Careless/Rash Driver Profiler", "Mission-Critical (VIP Escort/Ambulance) Classifier", "AI Assisted Condemnation Board Drafter",
      "Telemetry/Log Data Storage Forecaster", "Secure VIP Convoy Route Protector", "Integration with E-Challan/Vahan Database", "Approved Workshop/Vendor Portal Sync",
      "Election Fleet Mass Deployment Modeler", "Disaster Rescue Boat/Vehicle Coordinator", "POL (Petrol, Oil, Lubricants) Budget Tracker", "Custom Workflow for Armored/Bulletproof Vehicles",
      "AI Driven Monthly Fuel Indent Predictor", "Predictive Need for Fleet Replacement", "Custom Alert Trigger for IG Provisioning", "Defect Logging to Workshop Release Timeline"
    ]
  },
  {
    fileName: 'EquipmentInspectionDetailed.jsx',
    compName: 'EquipmentInspectionDetailed',
    mainTitle: 'AI EQUIPMENT',
    subTitle: 'INSPECTION',
    desc: 'Anti-riot gear degradation analysis, body-worn camera health, breathalyzer calibration checks & communication radio audits',
    experts: [
      "Anti-Riot/Tear Gas Expiry & Degradation AI", "Body-Worn Camera (BWC) Health & Storage Auditor", "Breathalyzer/Speed Gun Calibration Checker", "Wireless Radio/Comms Battery Health Scorer",
      "Lathi/Shield/Helmet Inventory & Damage Analyzer", "Metal Detector/Baggage Scanner Validation Bot", "Geo-Spatial Equipment Distribution Mapper", "Forensic Kit/Evidence Collection Readiness Scorer",
      "Equipment Inspection Dashboard", "Voice-Command Gear Query Bot", "Automated Monthly Provisioning Report", "State Police Store/Quartermaster Sync",
      "Defective/Substandard Gear Predictor", "Un-synced/Offline BWC Alert", "Calibration Drift/Accuracy Loss Analyzer", "Hoarding/Uneven Distribution Detector",
      "AI Evaluator for Operational Gear Readiness", "Audit/Inspection Log Generator", "Data Privacy/BWC Video Scrubber", "Telecom/Wireless Department Sync",
      "Provisioning Inspector Mobile App", "Historical Equipment Failure/Riot Correlator", "DGP (Provisioning & Logistics) Briefing AI", "Repair/Replacement Indent Allocator",
      "Blockchain Immutable Calibration Hash", "Anti-Tamper BWC Log Shield", "Mobile App for Damaged Gear Reporting", "District-wise Gear Readiness Benchmarker",
      "Automated Alert for Expiring Tear Gas/Munitions", "Historical Procurement/Maintenance Cost Analyzer", "Equipment Maintenance/Handling SOP Trainer", "IoT/Smart-Gear Battery Health Monitor",
      "Imminent Riot (Without Adequate Gear) Alert", "Habitual Gear Loser/Damager Profiler", "High-Priority (VIP Security/ATS) Gear Classifier", "AI Assisted Procurement Indent Drafter",
      "Equipment Lifespan/Depreciation Forecaster", "Secure Armory/Store Inventory Protector", "Integration with GeM (Govt e-Marketplace)", "Forensic Science Lab (FSL) Sync",
      "Election Mass Deployment Gear Modeler", "Disaster Relief (Life Jacket/Rope) Readiness Coordinator", "Modernization/Equipment Budget Tracker", "Custom Workflow for Bomb Disposal Squad (BDS) Gear",
      "AI Driven Next-Year Procurement Predictor", "Predictive Need for Tech Upgrades", "Custom Alert Trigger for IG Provisioning", "Defect Identification to Replacement Timeline"
    ]
  },
  {
    fileName: 'RecordInspectionDetailed.jsx',
    compName: 'RecordInspectionDetailed',
    mainTitle: 'AI RECORD',
    subTitle: 'INSPECTION',
    desc: 'Crime register auditing, missing entry detection, CCTNS data parity checks & automated red-flagging of delayed investigations',
    experts: [
      "Physical Register vs CCTNS Parity Checker", "Missing/Overwritten Entry Detection AI", "Delayed Investigation/Charge-sheet Red-Flagger", "Bail/Absconder Register Audit Bot",
      "Village Crime Notebook (VCNB) Completeness Scorer", "Malkhana (Property) Register Validation AI", "Geo-Spatial Crime Record Mapping Integrator", "Case Diary (CD) Submission Timeline Analyzer",
      "Record Inspection Dashboard", "Voice-Command Record Query Bot", "Automated Monthly Crime Audit Report", "State Crime Records Bureau (SCRB) Sync",
      "Data Manipulation/Whitener Use Predictor", "FIR Registration Delay/Burking Alert", "Pending Warrant/Summons Accumulation Analyzer", "Habitual Offender/History-Sheeter Update Monitor",
      "AI Evaluator for Documentation Compliance Index", "Audit/Inspection Log Generator", "Data Privacy/Victim Identity Scrubber", "Prosecution/Legal Department Sync",
      "Inspecting Officer/Circle Officer App", "Historical Acquittal (Due to Bad Records) Correlator", "IG (Crime) Briefing AI", "Record Updating/Correction Task Allocator",
      "Blockchain Immutable CCTNS Hash", "Anti-Tamper Crime Register Shield", "Mobile App for Spot File Scanning", "Station-wise Record Accuracy Benchmarker",
      "Automated Alert for Expiring Limitation Periods", "Historical Litigation/Compensation Cost Analyzer", "Crime Documentation/CCTNS SOP Trainer", "Database Synchronization/API Health Monitor",
      "Imminent Custodial/Legal Crisis Alert", "Sloppy Investigating Officer (IO) Profiler", "Heinous Crime (Murder/Rape) Record Classifier", "AI Assisted Show-Cause Notice Drafter",
      "Crime Data/Storage Forecaster", "Secure Case File/Evidence Protector", "Integration with E-Courts/ICJS", "Women/Child Protection Cell Sync",
      "Election Preventive Arrest Register Modeler", "Disaster Missing Person Record Coordinator", "CCTNS/Digitization Budget Tracker", "Custom Workflow for Unsolved/Cold Cases",
      "AI Driven Backlog Clearance Predictor", "Predictive Need for IO Refresher Training", "Custom Alert Trigger for SP Crime", "Discrepancy Detection to Rectification Timeline"
    ]
  },
  {
    fileName: 'InspectionDeficiencyTrackerDetailed.jsx',
    compName: 'InspectionDeficiencyTrackerDetailed',
    mainTitle: 'AI INSPECTION',
    subTitle: 'DEFICIENCY TRACKER',
    desc: 'Automated compliance chasing, deadline reminders, recurring flaw pattern analysis & escalation workflows',
    experts: [
      "Automated Compliance/Chasing Engine", "Deadline Reminder/Escalation Bot", "Recurring Flaw/Pattern Analysis AI", "Root Cause Analysis (RCA) Generator",
      "Action Taken Report (ATR) Validation AI", "Inter-Departmental Dependency Mapper", "Geo-Spatial Deficiency Heatmapper", "Penalty/Adverse Entry Recommender",
      "Deficiency Tracking Dashboard", "Voice-Command Compliance Query Bot", "Automated Weekly Pending ATR Report", "PHQ/DGP Office Sync",
      "Fake/Superficial Compliance Predictor", "Chronic Defaulter/Ignored Order Alert", "Resource/Budget Constraint Identifier", "Escalation Matrix/Delay Analyzer",
      "AI Evaluator for Compliance Agility Index", "Audit/ATR Log Generator", "Data Privacy/Personnel Action Scrubber", "HRMS/Disciplinary Directorate Sync",
      "SHO/Unit Commander Action App", "Historical Non-Compliance Consequence Correlator", "IG (Inspection & Verification) Briefing AI", "Remedial Task/Budget Allocator",
      "Blockchain Immutable Compliance Hash", "Anti-Tamper ATR Shield", "Mobile App for Compliance Photo/Proof Upload", "District-wise Compliance Speed Benchmarker",
      "Automated Alert for Critical Unresolved Flaws", "Historical Cost of Delay/Negligence Analyzer", "Compliance/ATR Submission SOP Trainer", "Workflow/Ticketing System Health Monitor",
      "Imminent Systemic Failure/Crisis Alert", "Habitual Defaulter (Officer/Unit) Profiler", "High-Risk (Security/Armory) Deficiency Classifier", "AI Assisted Warning/Charge-Sheet Drafter",
      "Compliance Trend/Data Forecaster", "Secure Inspection Report Protector", "Integration with State Finance/Budget Portal", "Public Grievance/CM Helpline Sync",
      "Election Preparedness Deficiency Modeler", "Disaster Relief Readiness Flaw Coordinator", "Remedial Action/Contingency Budget Tracker", "Custom Workflow for Statutory/NHRC Flaws",
      "AI Driven Resolution Time Predictor", "Predictive Need for Policy Overhaul", "Custom Alert Trigger for DGP", "Flaw Identification to Final Resolution Timeline"
    ]
  },
  {
    fileName: 'ComplianceVerificationDetailed.jsx',
    compName: 'ComplianceVerificationDetailed',
    mainTitle: 'AI COMPLIANCE',
    subTitle: 'VERIFICATION',
    desc: 'Cross-referencing ATRs (Action Taken Reports) with real-time IoT/CCTNS data, photo-evidence validation & spot-check routing',
    experts: [
      "ATR vs IoT/CCTNS Data Cross-Referencer", "Photo/Video Evidence Authenticator AI", "GPS Metadata/Spoofing Detector", "Targeted Spot-Check/Re-Audit Router",
      "NLP-Based Document Consistency Checker", "Vendor Bill/Repair Invoice Validator", "Geo-Spatial Verification Mapper", "False Compliance/Bluff Probability Scorer",
      "Compliance Verification Dashboard", "Voice-Command Verification Query Bot", "Automated Monthly Validation Report", "State Audit/Vigilance Sync",
      "Stock-Photo/Recycled Image Predictor", "Collusion/Cover-up Alert", "Time-Stretching/Delay Tactic Analyzer", "Resource Misallocation Detector",
      "AI Evaluator for ATR Authenticity Index", "Audit/Verification Log Generator", "Data Privacy/Evidence Scrubber", "Finance/Accounts Department Sync",
      "Verification Officer/Auditor App", "Historical Forged Compliance Correlator", "ADG (Vigilance) Briefing AI", "Physical Re-Verification Task Allocator",
      "Blockchain Immutable Evidence Hash", "Anti-Tamper Verification Record Shield", "Mobile App for Geo-Tagged Validation", "Unit-wise Honesty/Integrity Benchmarker",
      "Automated Alert for High-Probability Fake ATR", "Historical Fraud/Wastage Cost Analyzer", "Evidence Collection/Audit SOP Trainer", "IoT/Data Ingestion API Health Monitor",
      "Imminent Audit Failure/Scandal Alert", "Habitual Fabricator/Liar Profiler", "High-Stakes (Financial/Armory) Compliance Classifier", "AI Assisted FIR/Vigilance Inquiry Drafter",
      "Verification Data/Image Storage Forecaster", "Secure Whistleblower/Audit Protector", "Integration with Accountant General (AG) Office", "Anti-Corruption Bureau Sync",
      "Election Expenditure/Deployment Validation Modeler", "Disaster Relief Fund Utilization Verifier", "Audit/Vigilance Operations Budget Tracker", "Custom Workflow for Court-Mandated Compliance",
      "AI Driven Verification Workload Predictor", "Predictive Need for Independent External Audit", "Custom Alert Trigger for DGP/Home Secretary", "ATR Submission to Final Validation Timeline"
    ]
  },
  {
    fileName: 'InspectionScoringEngineDetailed.jsx',
    compName: 'InspectionScoringEngineDetailed',
    mainTitle: 'AI INSPECTION SCORING',
    subTitle: 'ENGINE',
    desc: 'Dynamic weightage algorithms, peer group benchmarking, historical performance curves & state-wide ranking dashboards',
    experts: [
      "Dynamic Weightage/Criteria Algorithm AI", "Peer Group/Category Benchmarking Engine", "Historical Performance Curve Analyzer", "State-Wide Station Ranking Integrator",
      "Urban vs Rural Complexity Normalizer", "Subjectivity/Bias Removal Filter", "Geo-Spatial Performance Heatmapper", "Best-Practice/Champion Identification Bot",
      "Inspection Scoring & Ranking Dashboard", "Voice-Command Ranking Query Bot", "Automated Annual 'Best Station' Report", "Ministry of Home Affairs (MHA) Sync",
      "Sudden Performance Drop/Slump Predictor", "Unfair Grading/Favoritism Alert", "Resource-Deficit vs Low-Score Correlation Analyzer", "Morale/Motivation Impact Estimator",
      "AI Evaluator for Overall Excellence Index", "Audit/Scoring Log Generator", "Data Privacy/Officer Appraisal Scrubber", "HRMS/Promotion Board Sync",
      "DGP/Commissioner Dashboard App", "Historical Reward/Punishment Correlator", "Home Minister/CM Briefing AI", "Reward/Trophy Allocation Task Allocator",
      "Blockchain Immutable Score Hash", "Anti-Tamper Ranking Algorithm Shield", "Mobile App for Station Scorecard View", "State-to-State (National) Benchmarker",
      "Automated Alert for Bottom 10% Stations", "Historical Incentive/Reward Budget Analyzer", "Performance Appraisal/Evaluation SOP Trainer", "Data Aggregation/API Health Monitor",
      "Imminent Unit Mutiny/Severe Demoralization Alert", "Consistently Poor Performing Unit Profiler", "High-Weightage (Heinous Crime/Law & Order) Classifier", "AI Assisted Commendation/Appreciation Drafter",
      "Scoring Data/Analytics Forecaster", "Secure Evaluation Algorithm Protector", "Integration with SMART Policing (BPR&D) Metrics", "Public Relations/Media Sync",
      "Election Readiness Overall Score Modeler", "Disaster Resilience Capability Ranker", "Rewards & Recognition Budget Tracker", "Custom Workflow for Specialized Units (CID/Cyber)",
      "AI Driven Next Year Ranking Predictor", "Predictive Need for Leadership Change (SHO)", "Custom Alert Trigger for DGP", "Inspection Data Ingestion to Final Rank Publication"
    ]
  }
];

pagesData.forEach(page => {
  const filePath = path.join(pagesDir, page.fileName);
  let newContent = template;
  
  // Replace component name
  newContent = newContent.replace(/StateBorderCheckDetailed/g, page.compName);
  
  // Replace description
  newContent = newContent.replace(
    /Automated vehicle screening, face recognition, contraband detection & interstate coordination/g, 
    page.desc
  );
  
  // Replace experts list
  const expertsString = JSON.stringify(page.experts, null, 2);
  newContent = newContent.replace(
    /const aiExperts = \[[\s\S]*?\];/, 
    `const aiExperts = ${expertsString};`
  );

  // Fix <h2>
  newContent = newContent.replace(
    /<ShieldAlert className="inline-icon" size=\{28\} \/>[\s\S]*?<\/h2>/,
    `<ShieldAlert className="inline-icon" size={28} /> ${page.mainTitle} ${page.subTitle}\n            </h2>`
  );

  // Fix <h1> cyber-title
  const titleUpper = page.mainTitle + ' ' + page.subTitle;
  const words = titleUpper.split(' ');
  const lastWord = words.pop();
  const restOfTitle = words.join(' ');
  
  newContent = newContent.replace(
    /<h1 className="cyber-title">.*?<\/h1>/,
    `<h1 className="cyber-title">${restOfTitle} <span>${lastWord}</span></h1>`
  );
  
  // Replace description below title
  const descString = "By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in " + page.mainTitle.toLowerCase() + ".";
  newContent = newContent.replace(
    /By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in border check management./g,
    descString
  );

  fs.writeFileSync(filePath, newContent);
  console.log(`Created: ${page.fileName}`);
});

console.log('All 10 Police Inspection Modules files generated successfully.');
