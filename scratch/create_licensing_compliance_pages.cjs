const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'PawnShopMonitoringDetailed.jsx',
    compName: 'PawnShopMonitoringDetailed',
    mainTitle: 'AI PAWN SHOP',
    subTitle: 'MONITORING',
    desc: 'Stolen Property Cross-Matching, Digital Ledger Auditing, Suspicious Transaction Alerts & Vendor Verification',
    experts: [
      "Stolen Goods Database (CCTNS) Matcher", "Suspicious Transaction Anomaly Detector", "Digital Ledger OCR/Data Extractor", "Frequent Pledger/Seller Profiler",
      "Item Serial Number/IMEI Verifier", "Shop License Expiry/Renewal Tracker", "Geo-Spatial Pawn Shop Heatmapper", "Repeat Offender Fencing Network AI",
      "Pawn Shop Command Dashboard", "Voice-Command Item Query Bot", "Automated Daily Audit Report", "Inter-District Fencing Sync Bot",
      "CCTV Feed Anomaly Detector (Shop Front)", "Jewelry Melting/Tampering Predictor", "Fake ID/Alias Verification AI", "Statutory Compliance (KYC) Auditor",
      "AI Evaluator for IO Audit Efficiency", "Audit/Seizure Log Generator", "Data Privacy/Legitimate Seller Scrubber", "State Licensing Department Sync",
      "Field IO Spot-Check App", "Historical Fencing Hotspot Matcher", "SHO/Supervisory Officer Briefing AI", "Raid/Recovery Task Allocator",
      "Blockchain Immutable Ledger Hash", "Anti-Tamper Digital Record Shield", "Mobile App for Shop Owners (Upload)", "Jurisdiction Polygon Matcher",
      "Multi-Lingual Compliance Translator", "Historical Recovery Rate Analyzer", "Audit SOP/Guideline Trainer", "Pawn DB Server Health Monitor",
      "Imminent License Expiry Alert Bot", "Organized Crime Syndicate Fencing Profiler", "High-Value Item Alert Classifier", "AI Assisted Search Warrant Drafter",
      "Digital Ledger Storage Forecaster", "Secure Whistleblower Link Protector", "Integration with National Stolen Vehicle DB", "Citizen Lost Item Search Portal Sync",
      "Inter-State Smuggling Route Modeler", "Disaster/Looting Recovery Coordinator", "Recovery/Reward Budget Tracker", "Custom Workflow for License Cancellation",
      "AI Driven Stolen Item Match Predictor", "Predictive Need for Specialist Appraiser", "Custom Alert Trigger for SP/SSP", "Recovery/Seizure Timeline Tracker"
    ]
  },
  {
    fileName: 'ScrapDealerVerificationDetailed.jsx',
    compName: 'ScrapDealerVerificationDetailed',
    mainTitle: 'AI SCRAP DEALER',
    subTitle: 'VERIFICATION',
    desc: 'Stolen Vehicle Dismantling Tracking, Copper/Metal Theft Correlator, License Audits & CCTV Integration',
    experts: [
      "Stolen Vehicle Chassis/Engine No Matcher", "Copper/Cable Theft Anomaly Detector", "Scrap Inventory Digital Register AI", "Suspicious Volume/Bulk Seller Profiler",
      "License/Permit Expiry Alert Bot", "Environmental Compliance/Hazard Auditor", "Geo-Spatial Scrap Yard Mapper", "Chop-Shop Network Modeler AI",
      "Scrap Dealer Command Dashboard", "Voice-Command Scrap Query Bot", "Automated Weekly Audit Report", "Municipal Corporation/RTO Sync Bot",
      "CCTV Yard Feed Anomaly Detector", "Burnt/Melted Metal Origin Predictor", "Fake ID/Proxy Seller Detector", "Statutory (Form-4) Compliance AI",
      "AI Evaluator for Spot Checks", "Audit/Raid Log Generator", "Data Privacy/Legitimate Vendor Scrubber", "State Pollution Control Board Sync",
      "Field IO Yard Inspection App", "Historical Chop-Shop Precedent Matcher", "SHO/Supervisory Officer Briefing", "Task Force/Raid Allocator",
      "Blockchain Immutable Register Hash", "Anti-Tamper Inventory Shield", "Mobile App for Dealer (Daily Upload)", "Jurisdiction Boundary Matcher",
      "Multi-Lingual Compliance Translator", "Historical Theft/Recovery Analyzer", "Scrap Yard Audit SOP Trainer", "Scrap DB Server Health Monitor",
      "Imminent Bulk Dismantling Alert", "Organized Auto-Theft Syndicate Profiler", "High-Value/Govt Property Theft Classifier", "AI Assisted Closure Notice Drafter",
      "CCTV Video Storage Forecaster", "Secure Informant Identity Protector", "Integration with VAHAN/Sarathi DB", "Citizen/Corporate Theft Reporting Sync",
      "Inter-State Metal Smuggling Modeler", "Disaster Debris/Scavenging Coordinator", "Audit/Inspection Ops Expense Tracker", "Custom Workflow for Yard Sealing",
      "AI Driven Chop-Shop Predictor", "Predictive Need for Drone Surveillance", "Custom Alert Trigger for Nodal Officers", "Scrap Verification Lifecycle Tracker"
    ]
  },
  {
    fileName: 'SecondHandGoodsRegisterDetailed.jsx',
    compName: 'SecondHandGoodsRegisterDetailed',
    mainTitle: 'AI SECOND-HAND GOODS',
    subTitle: 'REGISTER',
    desc: 'IMEI/Serial Tracking, OLX/Quikr Scraping, Buyer-Seller Verification & Fraud Network Detection',
    experts: [
      "Online Marketplace (OLX/Quikr) Scraper AI", "Mobile IMEI/Laptop Serial Matcher", "Digital Register Compliance Auditor", "Suspicious Repeat Seller/Buyer Profiler",
      "Stolen Electronics CCTNS Sync Bot", "Price Anomaly (Under-Priced) Detector", "Geo-Spatial Fraud Hub Mapper", "Inter-State Mobile Smuggling Network AI",
      "Goods Register Command Dashboard", "Voice-Command IMEI Query Bot", "Automated Daily Flagged Item Report", "Cyber Cell/Telecom Sync Bot",
      "Image/Photo Matcher for Stolen Goods", "Bulk Refurbishment/Wiping Detector", "Fake KYC/Aadhar Verification AI", "Statutory Return Filing Tracker",
      "AI Evaluator for Shop Compliance", "Audit/Seizure Log Generator", "Data Privacy/Legitimate User Scrubber", "Central Equipment Identity Register (CEIR) Sync",
      "Field IO Spot-Check Mobile App", "Historical Fraud Pattern Matcher", "SHO/Supervisory Officer Briefing", "Cyber/Tech Specialist Task Allocator",
      "Blockchain Immutable Item Hash", "Anti-Tamper Register Shield AI", "Mobile App for Shop Owners (Quick Upload)", "Jurisdiction Polygon Matcher",
      "Multi-Lingual Platform Rule Translator", "Historical Recovery Rate Analyzer", "Goods Audit SOP Trainer AI", "Goods DB Server Health Monitor",
      "Imminent Bulk Smuggling Shipment Alert", "Organized Cyber-Fraud Syndicate Profiler", "High-Value Electronics Alert Classifier", "AI Assisted Takedown Notice Drafter",
      "Digital Record Storage Forecaster", "Secure Cyber-Informant Protector", "Integration with E-Commerce Fraud APIs", "Citizen Lost Mobile Portal Sync",
      "International Smuggling Route Modeler", "Disaster/Looting E-Commerce Tracker", "Cyber Audit Operations Budget Tracker", "Custom Workflow for ISP/Platform Blocking",
      "AI Driven Fence/Fraud Predictor", "Predictive Need for Cyber Forensics", "Custom Alert Trigger for Cyber SP", "Goods Recovery Timeline Tracker"
    ]
  },
  {
    fileName: 'JewelleryShopSecurityDetailed.jsx',
    compName: 'JewelleryShopSecurityDetailed',
    mainTitle: 'AI JEWELLERY SHOP',
    subTitle: 'SECURITY AUDIT',
    desc: 'CCTV Vulnerability Mapping, Alarm/Panic Button Sync, Guard Roster Verification & Target Hardening',
    experts: [
      "Shop Vulnerability/Threat Scorer AI", "CCTV Coverage/Blindspot Mapper", "Panic Button/Alarm Integration Bot", "Guard Verification & Arms License Auditor",
      "Locker/Strong-Room Standard Compliance AI", "Historical Heist/Robbery Precedent Matcher", "Geo-Spatial High-Risk Cluster Mapper", "Opening/Closing Time Movement Monitor",
      "Security Audit Command Dashboard", "Voice-Command Shop Status Bot", "Automated Monthly Audit Report", "Emergency Response (Dial 112) Sync Bot",
      "Suspicious Recce/Loitering Detector (via CCTV)", "Fake Customer/Disguise Anomaly Predictor", "Private Security Agency (PSARA) Sync AI", "Insurance Compliance Audit Tracker",
      "AI Evaluator for Shop Preparedness", "Audit/Inspection Log Generator", "Data Privacy/Customer Scrubber", "State Private Security Regulation Dept Sync",
      "Field IO Security Checklist App", "Cold Case Heist Correlator AI", "SHO/Supervisory Officer Briefing", "Beat Officer/Patrol Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Security Rating Shield", "Mobile App for Shop Owners (Panic/Upload)", "Jurisdiction/Market Polygon Matcher",
      "Multi-Lingual Advisory Translator", "Historical Robbery Trend Analyzer", "Security Audit SOP Trainer", "Audit Server Health Monitor",
      "Imminent Threat/Recce Alert Bot", "Organized Armed Robbery Syndicate Profiler", "High-Inventory Value Target Classifier", "AI Assisted Security Advisory Drafter",
      "Audit Image/Video Storage Forecaster", "Secure Security Flaw Data Protector", "Integration with Jewelers Association", "Citizen/Owner Suspicious Person Reporting",
      "Festival Season Heist Modeler", "Disaster/Riot Shop Security Coordinator", "Audit/Patrol Expense Budget Tracker", "Custom Workflow for License Suspension",
      "AI Driven Heist Probability Predictor", "Predictive Need for Armed Picket", "Custom Alert Trigger for SP/SSP", "Audit Rectification Timeline Tracker"
    ]
  },
  {
    fileName: 'PetrolPumpSecurityDetailed.jsx',
    compName: 'PetrolPumpSecurityDetailed',
    mainTitle: 'AI PETROL PUMP',
    subTitle: 'SECURITY AUDIT',
    desc: 'Highway Robbery Risk Assessment, Cash Handling Protocol Checks, CCTV Sync & Fuel Adulteration Alerts',
    experts: [
      "Highway Robbery/Dacoity Risk Scorer AI", "Cash Handling/Transport Protocol Auditor", "CCTV/ANPR Highway Integration Bot", "Night Shift Staffing/Guard Verifier",
      "Fuel Adulteration/Smuggling Anomaly Detector", "Fire/Hazard Safety Compliance Scorer", "Geo-Spatial Isolated Pump Mapper", "Suspect Vehicle Fueling Pattern AI",
      "Security Audit Command Dashboard", "Voice-Command Pump Status Bot", "Automated Monthly Audit Report", "Highway Patrol/Traffic Sync Bot",
      "Suspicious Loitering/Reconnaissance Detector", "Drive-off/Fuel Theft Predictor", "Private Guard (PSARA) Verification AI", "Emergency Shut-off/Panic Button Tester",
      "AI Evaluator for Pump Preparedness", "Audit/Inspection Log Generator", "Data Privacy/Customer Vehicle Scrubber", "Petroleum Ministry/Explosives Dept Sync",
      "Field IO Security Checklist App", "Historical Highway Crime Correlator", "SHO/Supervisory Officer Briefing", "Highway Patrol Beat Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Security Rating Shield", "Mobile App for Pump Managers (Panic/Report)", "Highway Route/Jurisdiction Matcher",
      "Multi-Lingual Safety Advisory Translator", "Historical Crime Trend Analyzer", "Pump Security Audit SOP Trainer", "Audit Server Health Monitor",
      "Imminent Highway Robbery Alert Bot", "Organized Fuel Theft Syndicate Profiler", "High-Risk Isolated Target Classifier", "AI Assisted Security Notice Drafter",
      "Audit Image/Video Storage Forecaster", "Secure Flaw/Vulnerability Protector", "Integration with Oil Marketing Companies (OMC)", "Citizen/Manager Suspicious Reporting Portal",
      "Riot/Arson Target Security Modeler", "Disaster/Fuel Supply Protection Coordinator", "Patrol/Audit Expense Budget Tracker", "Custom Workflow for NOC Cancellation",
      "AI Driven Dacoity Probability Predictor", "Predictive Need for Armed Highway Patrol", "Custom Alert Trigger for Nodal Officers", "Audit Rectification Timeline Tracker"
    ]
  },
  {
    fileName: 'BankSecurityInspectionDetailed.jsx',
    compName: 'BankSecurityInspectionDetailed',
    mainTitle: 'AI BANK SECURITY',
    subTitle: 'INSPECTION',
    desc: 'Strong-Room Compliance, Alarm System Testing, Guard Roster Validation & Cyber-Physical Threat Correlation',
    experts: [
      "Bank Branch Vulnerability/Risk Scorer AI", "Strong-Room/Vault Standard Compliance Auditor", "Intrusion Alarm/Panic Button Tester Bot", "Armed Guard Roster & License Verifier",
      "Cyber-Physical Attack Threat Correlator", "CCTV/DVR Health & Coverage Analyzer", "Geo-Spatial High-Risk Branch Mapper", "Opening/Closing Time SOP Monitor",
      "Bank Security Command Dashboard", "Voice-Command Branch Query Bot", "Automated Quarterly Audit Report", "Emergency Response (Dial 112) Sync Bot",
      "Suspicious Recce/Loitering Detector (via CCTV)", "Fake Customer/Disguise Anomaly Predictor", "Private Security Agency (PSARA) Sync AI", "Fire/Hazard Safety Audit Tracker",
      "AI Evaluator for Branch Preparedness", "Audit/Inspection Log Generator", "Data Privacy/Customer Detail Scrubber", "State Lead Bank/RBI Guideline Sync",
      "Field IO Security Checklist App", "Historical Bank Heist Correlator AI", "SHO/Supervisory Officer Briefing", "Beat Officer/Armed Picket Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Security Rating Shield", "Mobile App for Branch Managers (Panic)", "Jurisdiction/Commercial Zone Matcher",
      "Multi-Lingual Advisory Translator", "Historical Robbery/Burglary Trend Analyzer", "Bank Security SOP Trainer", "Inspection DB Server Health Monitor",
      "Imminent Threat/Tunneling Alert Bot", "Organized Bank Robbery Syndicate Profiler", "High-Cash Volume Target Classifier", "AI Assisted Security Advisory Drafter",
      "Audit Image/Video Storage Forecaster", "Secure Security Flaw Data Protector", "Integration with State Level Bankers Committee (SLBC)", "Citizen Suspicious Activity Reporting",
      "Festival/Holiday Season Heist Modeler", "Disaster/Riot Branch Security Coordinator", "Audit/Patrol Expense Budget Tracker", "Custom Workflow for Security Escalation",
      "AI Driven Heist Probability Predictor", "Predictive Need for QRT Deployment", "Custom Alert Trigger for SP/SSP", "Audit Rectification Timeline Tracker"
    ]
  },
  {
    fileName: 'ATMSecurityComplianceDetailed.jsx',
    compName: 'ATMSecurityComplianceDetailed',
    mainTitle: 'AI ATM SECURITY',
    subTitle: 'COMPLIANCE',
    desc: 'Skimming Device Detection Audits, Isolated ATM Vulnerability Scoring, Guard Verification & Tamper Alerts',
    experts: [
      "Isolated/Off-Site ATM Vulnerability Scorer", "Skimming/Cloning Device Audit AI", "CCTV/Hidden Camera Tamper Detector", "Guard Duty/Sleep Anomaly Analyzer",
      "Gas-Cutter/Physical Breach Predictor Bot", "Cash Replenishment Time Anomalies", "Geo-Spatial High-Risk ATM Mapper", "Helmet/Mask Detection in Kiosk AI",
      "ATM Security Command Dashboard", "Voice-Command ATM Status Bot", "Automated Monthly Compliance Report", "Cyber Cell (Card Fraud) Sync Bot",
      "Suspicious Loitering/Long-Stay Detector", "Repeat Unsuccessful Transaction Alert", "Private Guard (PSARA) Verification AI", "Alarm/Siren Link Tester Bot",
      "AI Evaluator for Kiosk Preparedness", "Audit/Inspection Log Generator", "Data Privacy/Cardholder Scrubber", "State Lead Bank/RBI Guideline Sync",
      "Field IO Spot-Check Mobile App", "Historical ATM Theft/Uprooting Correlator", "SHO/Supervisory Officer Briefing", "Beat Patrol Route Optimizer",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Security Rating Shield", "Mobile App for Quick Beat Updates", "Jurisdiction/Route Polygon Matcher",
      "Multi-Lingual Safety Advisory Translator", "Historical Fraud/Theft Trend Analyzer", "ATM Security Audit SOP Trainer", "Audit DB Server Health Monitor",
      "Imminent Gas-Cutter/Uprooting Alert", "Organized ATM Theft/Skimming Syndicate Profiler", "High-Cash Volume Target Classifier", "AI Assisted Rectification Notice Drafter",
      "Audit Image/Video Storage Forecaster", "Secure Vulnerability Data Protector", "Integration with Managed Service Providers (MSP)", "Citizen ATM Fraud Reporting Portal",
      "Night-Time Highway Theft Modeler", "Disaster/Riot ATM Security Coordinator", "Audit/Patrol Expense Budget Tracker", "Custom Workflow for ATM Closure Notice",
      "AI Driven Attack Probability Predictor", "Predictive Need for Increased Patrol", "Custom Alert Trigger for Nodal Officers", "Audit Rectification Timeline Tracker"
    ]
  },
  {
    fileName: 'CashVanMovementDetailed.jsx',
    compName: 'CashVanMovementDetailed',
    mainTitle: 'AI CASH VAN MOVEMENT',
    subTitle: 'COORDINATION',
    desc: 'Route Risk Scoring, Live GPS Tracking, Guard Arms License Auditing & Ambush Prevention',
    experts: [
      "Cash Van Route/Threat Risk Scorer AI", "Live Telematics/GPS Deviation Tracker", "Armed Guard (Gun License) Validator", "Ambush/Chokepoint Predictor Engine",
      "Cash Loading/Unloading SOP Monitor", "Multi-Van Pooling/Batching AI", "Geo-Spatial High-Risk Route Mapper", "Vehicle Breakdown/Delay Correlator",
      "Cash Van Command Dashboard", "Voice-Command Van Status Bot", "Automated Daily Movement Report", "Highway Patrol/Dial 112 Sync Bot",
      "CCTV/ANPR Route Surveillance Integrator", "Fake Guard/Imposter Predictor AI", "Private Security Agency (PSARA) Sync AI", "Alarm/Panic Button Tester Bot",
      "AI Evaluator for Route Safety", "Audit/Movement Log Generator", "Data Privacy/Cash Volume Scrubber", "State Lead Bank/RBI Guideline Sync",
      "Field Patrol Van Alert App", "Historical Cash Van Heist Correlator", "Command Center/Supervisory Briefing AI", "Tactical Escort/QRT Allocator",
      "Blockchain Immutable Route Hash", "Anti-Tamper Movement Record Shield", "Mobile App for Van Custodians (Panic)", "Jurisdiction Boundary Matcher",
      "Multi-Lingual Emergency Broadcast Translator", "Historical Robbery/Ambush Trend Analyzer", "Cash Van SOP/Protocol Trainer", "Tracking DB Server Health Monitor",
      "Imminent Route Deviation/Ambush Alert", "Organized Dacoity Syndicate Profiler", "High-Value Cash Transit Classifier", "AI Assisted Contingency Route Drafter",
      "Telematics/Video Storage Forecaster", "Secure Route Plan Protector", "Integration with Cash Replenishment Agencies", "Citizen Traffic/Suspicious Activity Portal",
      "Festival/Election Cash Movement Modeler", "Disaster/Riot Evacuation Coordinator", "Escort/Patrol Expense Budget Tracker", "Custom Workflow for High-Value Transit Approval",
      "AI Driven Heist Probability Predictor", "Predictive Need for Police Escort", "Custom Alert Trigger for SP/SSP", "Van Movement Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'WarehouseSecurityDetailed.jsx',
    compName: 'WarehouseSecurityDetailed',
    mainTitle: 'AI WAREHOUSE SECURITY',
    subTitle: 'ASSESSMENT',
    desc: 'Industrial Estate Vulnerability Mapping, Night Patrol Sync, Inventory Theft Correlation & Fire Safety Checks',
    experts: [
      "Warehouse/Industrial Vulnerability Scorer", "Perimeter/Boundary Wall Breach Analyzer", "Fire Safety & Hazardous Material Auditor", "Night Patrol/Beat Sync Optimizer",
      "Inventory Theft/Pilferage Trend Correlator", "CCTV/Drone Night Surveillance AI", "Geo-Spatial Industrial Estate Mapper", "Suspicious Truck/Loading Anomaly Detector",
      "Warehouse Security Dashboard", "Voice-Command Estate Query Bot", "Automated Monthly Audit Report", "Fire Department/Emergency Sync Bot",
      "Guard Duty/Sleep Anomaly Analyzer", "Burglary/Tunneling Predictor AI", "Private Security Agency (PSARA) Sync", "Entry/Exit Log Verification Bot",
      "AI Evaluator for Estate Preparedness", "Audit/Inspection Log Generator", "Data Privacy/Corporate Inventory Scrubber", "State Industrial Development Corp Sync",
      "Field IO Estate Spot-Check App", "Historical Warehouse Burglary Correlator", "SHO/Supervisory Officer Briefing AI", "Night Patrol/Beat Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Security Rating Shield", "Mobile App for Estate Managers (Report)", "Jurisdiction/Zone Polygon Matcher",
      "Multi-Lingual Safety Advisory Translator", "Historical Theft/Arson Trend Analyzer", "Warehouse Security Audit SOP Trainer", "Audit DB Server Health Monitor",
      "Imminent Perimeter Breach/Fire Alert", "Organized Cargo Theft Syndicate Profiler", "High-Value Inventory (Electronics/Pharma) Classifier", "AI Assisted Security Advisory Drafter",
      "Audit Image/Video Storage Forecaster", "Secure Corporate Vulnerability Protector", "Integration with Logistics/Transport DB", "Citizen/Worker Suspicious Reporting Sync",
      "Riot/Arson Target Security Modeler", "Disaster/Flood Inventory Evacuation Coordinator", "Audit/Patrol Expense Budget Tracker", "Custom Workflow for License Suspension",
      "AI Driven Burglary Probability Predictor", "Predictive Need for Increased Night Patrol", "Custom Alert Trigger for Nodal Officers", "Audit Rectification Timeline Tracker"
    ]
  },
  {
    fileName: 'CriticalInfrastructureDetailed.jsx',
    compName: 'CriticalInfrastructureDetailed',
    mainTitle: 'AI CRITICAL INFRA',
    subTitle: 'SECURITY REGISTER',
    desc: 'Power Grid, Dam, & Telecom Tower Security Audits, Sabotage Threat Prediction & Multi-Agency Mock Drills',
    experts: [
      "Critical Infra Vulnerability/Risk Scorer AI", "Sabotage/Terror Threat Predictor Engine", "Perimeter Intrusion/Drone Detection AI", "Multi-Agency Mock Drill Coordinator",
      "Power Grid/Dam/Telecom Site Auditor", "Cyber-Physical Attack Threat Correlator", "Geo-Spatial Critical Asset Heatmapper", "Employee/Contractor Background Verification AI",
      "Critical Infra Command Dashboard", "Voice-Command Asset Status Bot", "Automated Quarterly Audit Report", "Inter-Agency (IB/CISF/NDRF) Sync Bot",
      "CCTV/Sensor Health & Coverage Analyzer", "Fake ID/Unauthorized Access Predictor", "Armed Guard (CISF/State Police) Verifier", "Emergency Evacuation Route Optimizer",
      "AI Evaluator for Site Preparedness", "Audit/Inspection Log Generator", "Data Privacy/Classified Layout Scrubber", "National Critical Information Infrastructure Protection Centre (NCIIPC) Sync",
      "Field IO/CISF Security Checklist App", "Historical Sabotage/Attack Correlator AI", "DGP/Home Secretary Briefing Bot", "Tactical Quick Reaction Team (QRT) Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Security Plan Shield", "Mobile App for Site Managers (Panic/Report)", "Jurisdiction/Zone Polygon Matcher",
      "Multi-Lingual Emergency Protocol Translator", "Historical Threat Trend Analyzer", "Critical Infra Security SOP Trainer", "Audit DB Server Health Monitor",
      "Imminent Sabotage/Breach Alert Bot", "Terror/Extremist Syndicate Profiler", "Vital/High-Risk Asset Classifier", "AI Assisted Contingency/Disaster Plan Drafter",
      "Audit Image/Video/Sensor Storage Forecaster", "Secure Classified Blueprint Protector", "Integration with Central/State Intelligence", "Citizen Suspicious Activity Reporting Portal",
      "War/Conflict Scenario Threat Modeler", "Disaster/Natural Calamity Impact Coordinator", "Audit/Security Upgradation Budget Tracker", "Custom Workflow for National Security Alert",
      "AI Driven Attack Probability Predictor", "Predictive Need for Paramilitary Deployment", "Custom Alert Trigger for Chief Secretary", "Audit Rectification/Upgradation Timeline Tracker"
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

console.log('All 10 Licensing & Business Compliance Modules files generated successfully.');
