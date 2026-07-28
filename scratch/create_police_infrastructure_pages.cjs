const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'PoliceBuildingMaintenanceDetailed.jsx',
    compName: 'PoliceBuildingMaintenanceDetailed',
    mainTitle: 'AI POLICE BUILDING',
    subTitle: 'MAINTENANCE',
    desc: 'Predictive structural repair, digital snag lists, vendor SLA tracking & estate lifecycle management',
    experts: [
      "Structural Degradation Predictor AI", "Automated Digital Snag/Defect Logger", "Vendor/Contractor SLA Monitor", "Estate Lifecycle/Depreciation Analyzer",
      "Roof Leakage/Seepage Sensor Sync", "Routine Whitewash/Painting Scheduler", "Geo-Spatial Police Estate Mapper", "Preventive Maintenance Task Router",
      "Building Maintenance Dashboard", "Voice-Command Repair Query Bot", "Automated Monthly Estate Health Report", "State PWD/Housing Board Sync",
      "Emergency Repair Triage AI", "Vendor Over-Billing/Delay Predictor", "Unattended Ticket Escalator", "Material/Cement Quality Validator",
      "AI Evaluator for Estate Integrity Index", "Audit/Repair Log Generator", "Data Privacy/Vendor Pricing Scrubber", "Finance/Estate Department Sync",
      "Estate Officer Field Inspection App", "Historical Monsoon Damage Correlator", "SP (Administration) Briefing AI", "Repair/Plumbing Task Allocator",
      "Blockchain Immutable Repair Hash", "Anti-Tamper Maintenance Record Shield", "Mobile App for Quick Photo-Snag Upload", "Station-wise Upkeep Benchmarker",
      "Automated Alert for Structural Cracks", "Historical Civil Work Cost Analyzer", "Estate Management SOP Trainer", "IoT Structural Sensor Health Monitor",
      "Imminent Roof/Wall Collapse Alert", "Substandard Contractor Profiler", "High-Priority (Headquarters/Armory) Repair Classifier", "AI Assisted Vendor Penalty Drafter",
      "Maintenance Image/Blueprint Forecaster", "Secure Facility Layout Protector", "Integration with E-Tendering/Procurement", "Quarter Allotment Portal Sync",
      "Election Force Rapid Barrack Repair Modeler", "Disaster Earthquake Damage Coordinator", "Civil Maintenance/Repair Budget Tracker", "Custom Workflow for Heritage Police Buildings",
      "AI Driven Annual Repair Budget Predictor", "Predictive Need for Deep Renovation", "Custom Alert Trigger for IG Provisioning", "Snag Detection to Resolution Timeline"
    ]
  },
  {
    fileName: 'PoliceBarrackManagementDetailed.jsx',
    compName: 'PoliceBarrackManagementDetailed',
    mainTitle: 'AI POLICE BARRACK',
    subTitle: 'MANAGEMENT',
    desc: 'Bed Capacity Optimization, Hygiene Scoring, Mess Linkage & Force Deployment Sync',
    experts: [
      "Dynamic Bed Capacity/Occupancy Optimizer", "Barrack Hygiene/Sanitation Scoring AI", "Mess/Canteen Headcount Sync Engine", "Force Deployment/Return Arrival Linker",
      "Linen/Mattress Replacement Scheduler", "Shared Washroom Maintenance Tracker", "Geo-Spatial Barrack Capacity Mapper", "Mosquito/Pest Control Auto-Scheduler",
      "Barrack Management Dashboard", "Voice-Command Occupancy Bot", "Automated Weekly Living Condition Report", "Lines/Reserve Inspector (RI) Sync",
      "Overcrowding/Congestion Alert AI", "Infectious Disease Spread Predictor", "Unreported Damage/Vandalism Detector", "Water/Electricity Usage per Jawan Analyzer",
      "AI Evaluator for Force Welfare Index", "Audit/Inspection Log Generator", "Data Privacy/Personnel Roster Scrubber", "Medical/Hospital Department Sync",
      "Barrack Commander Inspection App", "Historical Festival Deployment Correlator", "Commandant/SP (Lines) Briefing AI", "Housekeeping/Sweeper Task Allocator",
      "Blockchain Immutable Hygiene Hash", "Anti-Tamper Occupancy Record Shield", "Mobile App for Jawan Grievance/Request", "Battalion-wise Living Standard Benchmarker",
      "Automated Alert for Severe Unhygienic Conditions", "Historical Barrack Maintenance Cost Analyzer", "Barrack Discipline/Upkeep SOP Trainer", "CCTV/Access Control Health Monitor",
      "Imminent Dengue/Malaria Outbreak Alert", "Habitual Rule-Breaker/Vandal Profiler", "High-Capacity (Training Center) Barrack Classifier", "AI Assisted Capacity Expansion Proposal Drafter",
      "Occupancy Data Storage Forecaster", "Secure Force Deployment Strength Protector", "Integration with HRMS/Leave Management", "Force Welfare Committee Sync",
      "Election Mass Deployment Billeting Modeler", "Disaster Relief Force Accommodation Coordinator", "Barrack Upkeep/Welfare Budget Tracker", "Custom Workflow for Female Officer Barracks",
      "AI Driven Peak Occupancy Predictor", "Predictive Need for Mobile Toilets/Tents", "Custom Alert Trigger for ADG Armed Police", "Check-in to Check-out Lifecycle Tracker"
    ]
  },
  {
    fileName: 'PoliceGuestHouseManagementDetailed.jsx',
    compName: 'PoliceGuestHouseManagementDetailed',
    mainTitle: 'AI POLICE GUEST HOUSE',
    subTitle: 'MANAGEMENT',
    desc: 'Room Booking Automation, Dignitary Protocol Prep, Inventory Tracking & Revenue Management',
    experts: [
      "Automated Room Booking/Allocation AI", "VIP Dignitary Protocol Prep Engine", "Room Inventory/Amenity Tracker", "Revenue/Rent Collection Auto-Ledger",
      "Check-in/Check-out Kiosk Integrator", "VIP Dietary/Preference Memory Bot", "Geo-Spatial Guest House Network Mapper", "Housekeeping Turnaround Optimizer",
      "Guest House Management Dashboard", "Voice-Command Availability Bot", "Automated Monthly Occupancy/Revenue Report", "State Protocol/Estate Sync",
      "Double Booking/Clash Predictor", "VIP Unannounced Arrival Alert", "Missing Amenity/Pilferage Detector", "Peak Season/Training Cycle Demand Analyzer",
      "AI Evaluator for Guest Satisfaction Index", "Audit/Booking Log Generator", "Data Privacy/VIP Itinerary Scrubber", "Finance/Accounts Sync",
      "Guest House Manager Mobile App", "Historical VIP Visit Trend Correlator", "PRO/Estate Officer Briefing AI", "Room Prep/Catering Task Allocator",
      "Blockchain Immutable Booking Hash", "Anti-Tamper Revenue Ledger Shield", "Mobile App for VIP Service Requests", "Facility-wise Hospitality Benchmarker",
      "Automated Alert for VIP Suite Unreadiness", "Historical Operating Cost vs Revenue Analyzer", "Hospitality/Guest Relations SOP Trainer", "Smart Lock/Thermostat Gateway Monitor",
      "Imminent Protocol Breach/Embarrassment Alert", "Frequent/Vexatious Complainer Profiler", "Presidential/DGP Suite Classifier", "AI Assisted Vendor Upgradation Drafter",
      "Guest Ledger Storage Forecaster", "Secure VIP Profile/Schedule Protector", "Integration with State Tourism/Transit Mess", "E-Payment/Treasury Sync",
      "Election Observer Accommodation Modeler", "Disaster Central Team Basecamp Coordinator", "Guest House Maintenance Budget Tracker", "Custom Workflow for Prolonged Medical Stays",
      "AI Driven Future Occupancy Predictor", "Predictive Need for Linen/Furniture Replacement", "Custom Alert Trigger for IG Admin", "Booking Request to Checkout Timeline"
    ]
  },
  {
    fileName: 'PoliceCampusSecurityDetailed.jsx',
    compName: 'PoliceCampusSecurityDetailed',
    mainTitle: 'AI POLICE CAMPUS',
    subTitle: 'SECURITY',
    desc: 'Perimeter Intrusion Detection, ANPR Gate Access, Sentry Duty Monitoring & Drone Surveillance Sync',
    experts: [
      "Perimeter Intrusion Detection System (PIDS) AI", "ANPR (Number Plate) Gate Access Engine", "Sentry Alertness/Duty Monitor Vision", "Drone/UAV Surveillance Feed Integrator",
      "Tailgating/Unauthorized Vehicle Detector", "Facial Recognition Blacklist Matcher", "Geo-Spatial Campus Perimeter Mapper", "Night-Vision/Thermal Anomaly Detector",
      "Campus Security Command Dashboard", "Voice-Command Threat Query Bot", "Automated Daily Perimeter Breach Report", "District Control Room Sync",
      "Fence Tamper/Cut Predictor", "Unattended Baggage/Object Alert", "Sentry Sleep/Absence Detector", "Visitor/Contractor Loitering Analyzer",
      "AI Evaluator for Campus Vulnerability Index", "Audit/Access Log Generator", "Data Privacy/Resident Plate Scrubber", "State Intelligence/ATS Sync",
      "Quick Response Team (QRT) Mobile App", "Historical Mob Protest/Attack Correlator", "Chief Security Officer Briefing AI", "Patrol/Sentry Task Allocator",
      "Blockchain Immutable Breach Hash", "Anti-Tamper CCTV/ANPR Log Shield", "Mobile App for Sentry Check-In/SOS", "Gate-wise Security Speed Benchmarker",
      "Automated Alert for Perimeter Breach", "Historical Security Infrastructure Cost Analyzer", "Base Security/Sentry SOP Trainer", "PIDS/Camera Health Monitor",
      "Imminent Mob Attack/Infiltration Alert", "Suspicious Reconnaissance/Scout Profiler", "High-Security (Armory/Magazine) Zone Classifier", "AI Assisted Security Upgrade Drafter",
      "Video Feed/ANPR Storage Forecaster", "Secure Campus Blueprint Protector", "Integration with City Safe City Project", "Dial 112/Emergency Sync",
      "Election Counting Center Perimeter Modeler", "Disaster Refugee Camp Security Coordinator", "Security Tech/CCTV Budget Tracker", "Custom Workflow for VIP Convoy Entry",
      "AI Driven Threat Vector Predictor", "Predictive Need for Extra Perimeter Lighting", "Custom Alert Trigger for SP/Commandant", "Threat Detection to Interception Timeline"
    ]
  },
  {
    fileName: 'SmartPoliceHeadquartersDetailed.jsx',
    compName: 'SmartPoliceHeadquartersDetailed',
    mainTitle: 'AI SMART POLICE',
    subTitle: 'HEADQUARTERS',
    desc: 'IoT Integration for HVAC/Lighting, Smart Parking, Automated PA Systems & Carbon Footprint Tracking',
    experts: [
      "IoT HVAC/Climate Control Optimizer", "Smart Lighting/Occupancy Sensor AI", "Automated PA (Public Address) System Router", "Carbon Footprint/Sustainability Tracker",
      "Smart Parking Space Allocator (ANPR Sync)", "Lift/Elevator Health & Traffic AI", "Geo-Spatial PHQ Floorplan Mapper", "Energy vs Occupancy Correlation Engine",
      "Smart HQ Central Dashboard", "Voice-Command Facility Query Bot", "Automated Monthly Energy/Green Report", "State IT/Smart City Sync",
      "Energy Wastage/Leak Predictor", "Unauthorized VIP Parking Alert", "Emergency Evacuation Route Optimizer", "Peak Hour Congestion Analyzer",
      "AI Evaluator for Green Building Index", "Audit/IoT Log Generator", "Data Privacy/Officer Movement Scrubber", "Estate/PWD Department Sync",
      "Facility Manager Mobile App", "Historical Power/HVAC Failure Correlator", "DGP (Admin) Briefing AI", "Maintenance Task Allocator",
      "Blockchain Immutable Energy Log Hash", "Anti-Tamper Facility Control Shield", "Mobile App for Desk/Parking Booking", "Floor-wise Energy Efficiency Benchmarker",
      "Automated Alert for Critical System Failure", "Historical Utility Savings Analyzer", "Smart Building Evacuation SOP Trainer", "IoT Gateway/Sensor Health Monitor",
      "Imminent Fire/Gas Leak Alert", "Habitual Energy Waster (Branch) Profiler", "Classified (SCIF/Server Room) Zone Classifier", "AI Assisted Carbon Credit Claim Drafter",
      "IoT Telemetry Data Forecaster", "Secure BMS (Building Management System) Protector", "Integration with National Smart Grid", "Solar/Renewable Energy Portal Sync",
      "Election 24x7 Control Room HVAC Modeler", "Disaster Command Center Power Resilience Coordinator", "Smart Infrastructure Budget Tracker", "Custom Workflow for DGP/CM Arrival Override",
      "AI Driven Utility Bill Predictor", "Predictive Need for Sensor Calibration", "Custom Alert Trigger for Nodal Officer", "Issue Detection to Automated Correction Timeline"
    ]
  },
  {
    fileName: 'PoliceStationEnergyMonitoringDetailed.jsx',
    compName: 'PoliceStationEnergyMonitoringDetailed',
    mainTitle: 'AI POLICE STATION',
    subTitle: 'ENERGY MONITORING',
    desc: 'Smart Meter Integration, AC/Light Wastage Alerts, Solar Panel Sync & Bill Auditing',
    experts: [
      "Smart Meter Consumption Sync Engine", "AC/Lighting Idle Wastage Detector", "Solar Panel/Inverter Output Tracker", "Electricity Bill Audit/Anomaly Finder",
      "Peak Load/Demand Charge Optimizer", "Appliance Health/Degradation Scorer", "Geo-Spatial District Energy Mapper", "Power Cut/Diesel Generator Sync AI",
      "Station Energy Dashboard", "Voice-Command Energy Query Bot", "Automated Monthly Station Bill Report", "State Electricity Board (DISCOM) Sync",
      "Power Theft/Tamper Predictor", "Equipment Left On After-Hours Alert", "Solar Panel Dust/Cleaning Prompt AI", "Energy Efficiency vs Sanctioned Load Analyzer",
      "AI Evaluator for Station Green Index", "Audit/Billing Log Generator", "Data Privacy/Station Roster Scrubber", "Finance/Accounts Department Sync",
      "SHO/Station Manager Mobile App", "Historical Summer Peak Load Correlator", "SP (Headquarters) Briefing AI", "Electrician Task Allocator",
      "Blockchain Immutable Meter Hash", "Anti-Tamper Smart Meter Shield", "Mobile App for Outage Reporting", "Station-wise Energy Efficiency Benchmarker",
      "Automated Alert for Budget/Load Exceedance", "Historical DISCOM Tariff Analyzer", "Energy Conservation SOP Trainer", "Smart Meter/Solar Inverter Gateway Monitor",
      "Imminent Short Circuit/Overload Alert", "Habitual Energy Wasting Station Profiler", "High-Load (Server Room/AC) Classifier", "AI Assisted Bill Dispute Drafter",
      "Energy Consumption Data Forecaster", "Secure Station Network Protector", "Integration with Renewable Energy Nodal Agency", "Smart City Grid Sync",
      "Election Control Room 24x7 Load Modeler", "Disaster Power Resilience/Backup Coordinator", "Station Electricity Budget Tracker", "Custom Workflow for Solar Upgrade Approval",
      "AI Driven Monthly Bill Predictor", "Predictive Need for Wiring Upgrades", "Custom Alert Trigger for SP Admin", "Wastage Detection to Mitigation Timeline"
    ]
  },
  {
    fileName: 'WaterSupplyMonitoringDetailed.jsx',
    compName: 'WaterSupplyMonitoringDetailed',
    mainTitle: 'AI WATER SUPPLY',
    subTitle: 'MONITORING',
    desc: 'Overhead Tank Level Sensors, Leakage Detection, RO Plant Health & Barrack Water Usage Analytics',
    experts: [
      "Overhead Tank Level/Telemetry AI", "Pipe Leakage/Pressure Drop Detector", "RO/Water Purification Plant Health Scorer", "Barrack/Mess Water Usage Optimizer",
      "Automated Borewell/Pump Scheduler", "TDS/Water Quality Anomaly Alert", "Geo-Spatial Campus Water Network Mapper", "Rainwater Harvesting Yield Tracker",
      "Water Supply Dashboard", "Voice-Command Water Query Bot", "Automated Weekly Water Consumption Report", "Municipal/Jal Board Sync",
      "Underground Pipe Burst Predictor", "Tap Left Open/Wastage Alert", "Pump Motor Burnout/Overheating Predictor", "Supply vs Demand Deficit Analyzer",
      "AI Evaluator for Water Conservation Index", "Audit/Usage Log Generator", "Data Privacy/Barrack Roster Scrubber", "Estate/PWD Department Sync",
      "Plumber/Maintenance Mobile App", "Historical Summer Drought Correlator", "Commandant/SP (Lines) Briefing AI", "Repair/Filter Replacement Task Allocator",
      "Blockchain Immutable Water Quality Hash", "Anti-Tamper Sensor Log Shield", "Mobile App for Leak Reporting", "Battalion-wise Water Efficiency Benchmarker",
      "Automated Alert for Critical Tank Low", "Historical Water Tanker Expense Analyzer", "Water Conservation SOP Trainer", "IoT Level/Pressure Sensor Monitor",
      "Imminent Complete Water Outage Alert", "Habitual Water Waster Profiler", "Critical (Hospital/Mess) Supply Classifier", "AI Assisted RO Maintenance Penalty Drafter",
      "Consumption/Telemetry Data Forecaster", "Secure SCADA/Water Control Protector", "Integration with State Ground Water Board", "Health/Sanitation Portal Sync",
      "Election Mass Barrack Water Demand Modeler", "Disaster Relief Camp Water Coordinator", "Plumbing/Water Utility Budget Tracker", "Custom Workflow for Emergency Tanker Indent",
      "AI Driven Daily Demand Predictor", "Predictive Need for Borewell Deepening", "Custom Alert Trigger for RI (Reserve Inspector)", "Leak Detection to Repair Timeline"
    ]
  },
  {
    fileName: 'ElectricalAssetMonitoringDetailed.jsx',
    compName: 'ElectricalAssetMonitoringDetailed',
    mainTitle: 'AI ELECTRICAL ASSET',
    subTitle: 'MONITORING',
    desc: 'Transformer Health, UPS Battery Lifespan, Short-Circuit Risk Prediction & Switchgear Diagnostics',
    experts: [
      "Transformer Oil/Temperature AI Monitor", "UPS/Inverter Battery Degradation Predictor", "Short-Circuit/Thermal Overload Risk Engine", "Switchgear/Panel Diagnostic Bot",
      "Power Factor/Harmonic Distortion Analyzer", "Phase Imbalance/Voltage Fluctuation Alert", "Geo-Spatial Electrical Grid Mapper", "Asset Depreciation/Replacement Scorer",
      "Electrical Asset Dashboard", "Voice-Command Asset Query Bot", "Automated Monthly Electrical Safety Report", "State Electricity Inspectorate Sync",
      "Insulation Breakdown/Spark Predictor", "Battery Swelling/Failure Alert AI", "Load Creep/Unauthorized Extension Detector", "Preventive Maintenance ROI Analyzer",
      "AI Evaluator for Electrical Fire Safety Index", "Audit/Maintenance Log Generator", "Data Privacy/Facility Data Scrubber", "Estate/IT Infrastructure Sync",
      "Electrical Engineer/Technician App", "Historical Monsoon Trip-Out Correlator", "SP (Infrastructure) Briefing AI", "Testing/Servicing Task Allocator",
      "Blockchain Immutable Testing Hash", "Anti-Tamper SCADA/Panel Shield", "Mobile App for Spot Thermal Scan Upload", "Asset-wise Reliability Benchmarker",
      "Automated Alert for Imminent Transformer Failure", "Historical Electrical Repair Cost Analyzer", "Electrical Safety/LOTO (Lockout-Tagout) Trainer", "IoT Sensor/Thermal Camera Health Monitor",
      "Imminent Total Blackout/Fire Alert", "Substandard Equipment Supplier Profiler", "Mission-Critical (Server/CCTNS) UPS Classifier", "AI Assisted Condemnation Board Drafter",
      "Telemetry/Diagnostic Data Forecaster", "Secure Power Grid Blueprint Protector", "Integration with OEM (Original Equipment Manufacturer) Portals", "Fire Safety Compliance Sync",
      "Election Counting Center Power Resilience Modeler", "Disaster Command Grid Coordinator", "Electrical Asset Replacement Budget Tracker", "Custom Workflow for High-Tension (HT) Repairs",
      "AI Driven Component Failure Predictor", "Predictive Need for Substation Capacity Upgrade", "Custom Alert Trigger for Chief Engineer (Police)", "Anomaly Detection to Rectification Timeline"
    ]
  },
  {
    fileName: 'GeneratorMonitoringDetailed.jsx',
    compName: 'GeneratorMonitoringDetailed',
    mainTitle: 'AI GENERATOR',
    subTitle: 'MONITORING',
    desc: 'Diesel Fuel Theft Detection, Run-Hour Logs, Preventative Servicing & Grid-Outage Sync',
    experts: [
      "Diesel Level/Fuel Pilferage Detection AI", "Automated Run-Hour/Logbook Engine", "Grid-Outage vs DG Run-Time Sync Bot", "Engine Health/Vibration Diagnostic AI",
      "Lube Oil/Filter Degradation Predictor", "Emissions/Smoke Anomaly Analyzer", "Geo-Spatial DG Set Location Mapper", "Fuel Efficiency (KWH/Liter) Optimizer",
      "Generator Fleet Dashboard", "Voice-Command DG Status Bot", "Automated Weekly Fuel/Run Report", "State DISCOM/Grid Sync",
      "Unauthorized Siphoning/Sudden Drop Alert", "Battery/Self-Starter Failure Predictor", "Fake Run-Hour Entry Detector", "Optimum Load Matching Analyzer",
      "AI Evaluator for Power Backup Reliability", "Audit/Refueling Log Generator", "Data Privacy/Station Roster Scrubber", "Finance/Audit Department Sync",
      "DG Operator/Mechanic Mobile App", "Historical Summer Power Cut Correlator", "Reserve Inspector/Quartermaster Briefing AI", "Servicing/Refueling Task Allocator",
      "Blockchain Immutable Refuel Hash", "Anti-Tamper DG Controller Shield", "Mobile App for QR-Based Refuel Entry", "DG-wise Fuel Efficiency Benchmarker",
      "Automated Alert for Low Fuel (Critical)", "Historical Diesel Expenditure Analyzer", "Generator Operation/Safety SOP Trainer", "IoT Fuel/Vibration Sensor Health Monitor",
      "Imminent Engine Seizure Alert", "Habitual Fuel Pilferer (Staff) Profiler", "High-Capacity (Headquarters) DG Classifier", "AI Assisted Maintenance Contract Drafter",
      "Telemetry/Run-Hour Storage Forecaster", "Secure Fuel Indent Protector", "Integration with Petrol Pump/Vendor API", "Pollution Control Board Compliance Sync",
      "Election 24x7 Uninterrupted Power Modeler", "Disaster Relief Mobile DG Coordinator", "Diesel/Maintenance Budget Tracker", "Custom Workflow for Emergency Diesel Requisition",
      "AI Driven Monthly Fuel Indent Predictor", "Predictive Need for DG Overhaul/Replacement", "Custom Alert Trigger for SP Admin", "Grid Failure to DG Start Response Timeline"
    ]
  },
  {
    fileName: 'FireSafetyComplianceDetailed.jsx',
    compName: 'FireSafetyComplianceDetailed',
    mainTitle: 'AI FIRE SAFETY',
    subTitle: 'COMPLIANCE',
    desc: 'Extinguisher Expiry Tracking, Automated Mock Drill Logs, Smoke Detector Health & NOC Management',
    experts: [
      "Extinguisher Pressure/Expiry Tracking AI", "Smoke/Heat Detector Health Monitor", "Automated Fire/Mock Drill Logger", "Fire NOC (No Objection Certificate) Renewal Engine",
      "Evacuation Route Blockage/Obstruction Detector", "Sprinkler System Pressure/Pump Validator", "Geo-Spatial Fire Asset/Hydrant Mapper", "Flammable Material Storage Risk Analyzer",
      "Fire Safety Compliance Dashboard", "Voice-Command Safety Query Bot", "Automated Quarterly Fire Readiness Report", "State Fire Service/Directorate Sync",
      "Missing/Moved Extinguisher Alert AI", "False Alarm/Dust Confusion Predictor", "Hydrant Dry-Run/Failure Alert", "Staff Drill Participation/Knowledge Scorer",
      "AI Evaluator for Building Fire Resilience", "Audit/Inspection Log Generator", "Data Privacy/Evacuation Roster Scrubber", "Estate/Infrastructure Department Sync",
      "Fire Safety Officer Inspection App", "Historical Short-Circuit/Fire Event Correlator", "SP (Infrastructure) Briefing AI", "Refilling/Maintenance Task Allocator",
      "Blockchain Immutable NOC Hash", "Anti-Tamper Fire Panel/Log Shield", "Mobile App for Spot Hazard Reporting", "Facility-wise Fire Readiness Benchmarker",
      "Automated Alert for Overdue Refilling", "Historical Fire Safety Budget Analyzer", "Evacuation/First-Responder SOP Trainer", "Fire Alarm Control Panel (FACP) Monitor",
      "Imminent Fire Hazard (Blockage) Alert", "Habitual Safety Violator (Branch) Profiler", "High-Risk (Malkhana/Record Room) Zone Classifier", "AI Assisted Vendor SLA Penalty Drafter",
      "Compliance/Drill Video Storage Forecaster", "Secure Evacuation Blueprint Protector", "Integration with Municipal Fire Department", "Building Management System (BMS) Sync",
      "Election EVM Strongroom Fire Safety Modeler", "Disaster Post-Earthquake Fire Risk Coordinator", "Fire Equipment Maintenance Budget Tracker", "Custom Workflow for Structural Fire Upgrades",
      "AI Driven Refill/Replacement Predictor", "Predictive Need for Advanced Suppression (Gas-Based)", "Custom Alert Trigger for DGP/ADG Admin", "Hazard Detection to Elimination Timeline"
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

console.log('All 10 Police Infrastructure Modules files generated successfully.');
