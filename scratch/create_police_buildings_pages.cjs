const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'BuildingStructuralInspectionDetailed.jsx',
    compName: 'BuildingStructuralInspectionDetailed',
    mainTitle: 'AI BUILDING STRUCTURAL',
    subTitle: 'INSPECTION',
    desc: 'Drone-assisted Crack Detection, Seismic Vulnerability Audits, Material Degradation Sensors & Repair Forecasting',
    experts: [
      "Drone-based Crack/Fissure Detector AI", "Seismic Vulnerability/Earthquake Readiness Scorer", "Material Degradation (Concrete/Steel) Analyzer", "Structural Integrity Predictive Modeler",
      "Thermal Imaging for Moisture/Leak Detection", "Vibration/Stress Sensor Sync Bot", "Geo-Spatial Police Real Estate Mapper", "Renovation/Repair Priority Scorer",
      "Structural Inspection Dashboard", "Voice-Command Building Health Bot", "Automated Quarterly Audit Report", "State Police Housing Corporation Sync",
      "Old/Heritage Police Station Assessment AI", "Load-Bearing Capacity Calculator", "Fake/Substandard Construction Material Predictor", "3D Building Model (BIM) Integrator",
      "AI Evaluator for Condemnation/Demolition", "Audit/Inspection Log Generator", "Data Privacy/Floor Plan Scrubber", "PWD (Public Works Department) Sync",
      "Field Engineer AR (Augmented Reality) App", "Historical Collapse/Failure Correlator", "Estate Officer Briefing AI", "Repair Task/Tender Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Structural Report Shield", "Mobile App for Quick Image Uploads", "Inter-District Infrastructure Benchmarker",
      "Automated Reminder for Routine Checks", "Historical Maintenance Cost Analyzer", "Structural Safety SOP Trainer", "IoT Sensor Data Server Monitor",
      "Imminent Structural Collapse Alert", "Contractor Fraud/Corruption Profiler", "High-Risk/Dilapidated Building Classifier", "AI Assisted Condemnation Proposal Drafter",
      "Drone Video/3D Scan Storage Forecaster", "Secure Classified Blueprint Protector", "Integration with National Disaster Management Authority", "Citizen Safety Buffer Zone Sync",
      "Disaster Resilience Structural Modeler", "Post-Disaster Damage Assessment Coordinator", "Capital Expenditure/Repair Budget Tracker", "Custom Workflow for Emergency Evacuation",
      "AI Driven Lifespan Predictor", "Predictive Need for Major Renovation", "Custom Alert Trigger for Housing IG", "Building Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'RoofMaintenancePlannerDetailed.jsx',
    compName: 'RoofMaintenancePlannerDetailed',
    mainTitle: 'AI ROOF MAINTENANCE',
    subTitle: 'PLANNER',
    desc: 'Monsoon Leakage Prediction, Drone Waterproofing Audits, Debris Accumulation Alerts & Terrace Security',
    experts: [
      "Pre-Monsoon Leakage Predictor AI", "Drone-assisted Waterproofing Auditor", "Debris/Dry Leaf Accumulation Alert Bot", "Terrace Security/Unauthorized Access Detector",
      "Thermal Seepage/Dampness Mapper", "Solar Panel/Terrace Equipment Interference AI", "Geo-Spatial High-Risk Roof Mapper", "Gutter/Drain Blockage Predictor",
      "Roof Maintenance Dashboard", "Voice-Command Roof Health Bot", "Automated Pre-Monsoon Readiness Report", "State Meteorology/Weather Sync Bot",
      "Heritage/Tile Roof Specific Assessment", "Wind-Damage/Cyclone Vulnerability Scorer", "Substandard Tar/Waterproofing Predictor", "Rooftop Antenna/Telecom Tower Structural Scorer",
      "AI Evaluator for Repair Urgency", "Audit/Maintenance Log Generator", "Data Privacy/Security Camera Sync", "PWD/Estate Department Sync",
      "Field Worker Maintenance App", "Historical Leakage/Damage Correlator", "Station House Officer (SHO) Briefing AI", "Waterproofing Vendor Task Allocator",
      "Blockchain Immutable Inspection Hash", "Anti-Tamper Maintenance Shield", "Mobile App for Seepage Reporting", "District-wise Roof Health Benchmarker",
      "Automated Reminder for Annual Coating", "Historical Repair ROI Analyzer", "Roof Maintenance SOP Trainer", "IoT Moisture Sensor Server Monitor",
      "Imminent Roof Collapse/Severe Leak Alert", "Contractor Warranty/Defect Profiler", "High-Priority Server/Armory Roof Classifier", "AI Assisted Emergency Tarp Request Drafter",
      "Drone Image/Sensor Data Storage Forecaster", "Secure Armory/Data Center Layout Protector", "Integration with Fire Safety Department", "Record Room Protection Sync",
      "Heavy Rainfall/Cyclone Impact Modeler", "Post-Storm Damage Assessment Coordinator", "Waterproofing/Repair Budget Tracker", "Custom Workflow for Rooftop Helipad Maintenance",
      "AI Driven Waterproofing Lifespan Predictor", "Predictive Need for Complete Reroofing", "Custom Alert Trigger for Estate Officer", "Roof Coating/Repair Timeline Tracker"
    ]
  },
  {
    fileName: 'WaterTankCleaningScheduleDetailed.jsx',
    compName: 'WaterTankCleaningScheduleDetailed',
    mainTitle: 'AI WATER TANK CLEANING',
    subTitle: 'SCHEDULE',
    desc: 'IoT Water Quality Monitoring, Automated Cleaning Rosters, Contamination Alerts & Usage Analytics',
    experts: [
      "IoT Water Quality/Turbidity Monitor", "Automated Cleaning/Chlorination Roster AI", "Contamination/Pathogen Alert Bot", "Real-Time Water Level/Usage Predictor",
      "Mosquito/Dengue Breeding Risk Scorer", "PH/TDS Level Anomaly Detector", "Geo-Spatial Water Scarcity/Tank Mapper", "Borewell/Municipal Supply Source Switcher AI",
      "Water Tank Health Dashboard", "Voice-Command Water Status Bot", "Automated Monthly Hygiene Report", "Municipal Corporation/Jal Board Sync",
      "Underground vs Overhead Tank Analytics", "Leakage/Overflow Detection AI", "Substandard Cleaning/Chemical Detector", "Pump Motor Health/Burnout Predictor",
      "AI Evaluator for Water Safety", "Audit/Cleaning Certificate Log Generator", "Data Privacy/Usage Pattern Scrubber", "State Health Department Sync",
      "Maintenance Staff Roster App", "Historical Waterborne Disease Correlator", "Estate/Welfare Officer Briefing AI", "Cleaning Vendor Task Allocator",
      "Blockchain Immutable Hygiene Hash", "Anti-Tamper Water Quality Shield", "Mobile App for Taste/Odor Complaints", "Station-wise Water Usage Benchmarker",
      "Automated Reminder for Next Cleaning", "Historical Maintenance Contract Analyzer", "Water Sanitation SOP Trainer", "IoT Sensor Gateway Health Monitor",
      "Imminent Contamination/Poisoning Alert", "Vendor Negligence/Fake Cleaning Profiler", "High-Capacity/Barrack Tank Classifier", "AI Assisted Health Advisory Drafter",
      "Sensor Data/Log Storage Forecaster", "Secure Water Supply Schematic Protector", "Integration with Public Health Engineering (PHED)", "Barrack/Colony Resident Advisory Sync",
      "Summer Drought/Shortage Modeler", "Flood/Disaster Contamination Coordinator", "Water Supply/Cleaning Budget Tracker", "Custom Workflow for Emergency Supply Tender",
      "AI Driven Filter Replacement Predictor", "Predictive Need for Tank Expansion", "Custom Alert Trigger for Quartermaster", "Tank Cleaning Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'LiftMaintenanceMonitorDetailed.jsx',
    compName: 'LiftMaintenanceMonitorDetailed',
    mainTitle: 'AI LIFT MAINTENANCE',
    subTitle: 'MONITOR',
    desc: 'IoT Fault Prediction, Entrapment Alerts, AMC (Annual Maintenance) Tracking & Load Analytics',
    experts: [
      "IoT Vibration/Motor Fault Predictor", "Real-Time Entrapment/Stall Alert Bot", "AMC (Annual Maintenance Contract) Compliance AI", "Overload/Capacity Breach Analyzer",
      "Power Fluctuation/Backup Generator Integrator", "Usage Pattern/Peak Hour Scheduler AI", "Geo-Spatial Multi-Story Police Building Mapper", "Cable Wear/Friction Anomaly Detector",
      "Lift Maintenance Dashboard", "Voice-Command Elevator Status Bot", "Automated Monthly Safety Audit Report", "State Electrical Inspectorate Sync",
      "CCTV Sync for Vandalism/Suspicious Activity", "Door Sensor Alignment/Failure Predictor", "Fake/Skipped AMC Visit Detector", "Fire Alarm/Emergency Grounding Integrator",
      "AI Evaluator for Lift Safety Index", "Audit/Service Log Generator", "Data Privacy/Passenger Video Scrubber", "Estate/PWD Department Sync",
      "Technician Dispatch/Tracking App", "Historical Breakdown/Trap Correlator", "Building Admin/Security Briefing AI", "Vendor Penalty/SLA Allocator",
      "Blockchain Immutable Service Hash", "Anti-Tamper Safety Certificate Shield", "Mobile App for Emergency Intercom", "Brand/Model Reliability Benchmarker",
      "Automated Reminder for Statutory Inspection", "Historical Downtime/Cost Analyzer", "Elevator Safety/Rescue SOP Trainer", "IoT Gateway/Controller Health Monitor",
      "Imminent Snapping/Free-Fall Alert", "Habitual AMC Defaulter Vendor Profiler", "High-Priority/VVIP Lift Classifier", "AI Assisted Penalty Notice Drafter",
      "Sensor Data/Service History Storage Forecaster", "Secure Building Access Control Protector", "Integration with Fire/Disaster Protocols", "Visitor/Citizen Accessibility Sync",
      "Earthquake/Seismic Shut-down Modeler", "Post-Disaster Rescue Operations Coordinator", "Lift AMC/Replacement Budget Tracker", "Custom Workflow for VIP Override Control",
      "AI Driven Part Replacement Predictor", "Predictive Need for Elevator Modernization", "Custom Alert Trigger for Estate Officer", "Elevator Component Lifecycle Tracker"
    ]
  },
  {
    fileName: 'AirConditionerMaintenanceDetailed.jsx',
    compName: 'AirConditionerMaintenanceDetailed',
    mainTitle: 'AI AIR CONDITIONER',
    subTitle: 'MAINTENANCE',
    desc: 'Energy Consumption Analytics, IoT Breakdown Prediction, Server Room Temperature Control & AMC Tracking',
    experts: [
      "IoT Compressor Fault/Gas Leak Predictor", "Energy Consumption/Efficiency Analyzer", "Server Room/Armory Climate Control AI", "AMC (Annual Maintenance) SLA Tracker",
      "Filter Choke/Air Quality (AQI) Monitor", "Occupancy-based Smart Cooling Optimizer", "Geo-Spatial AC Inventory Mapper", "Power Surge/Voltage Fluctuation Correlator",
      "AC Maintenance Dashboard", "Voice-Command Climate Query Bot", "Automated Monthly Energy Savings Report", "State Electricity Board/Grid Sync",
      "Central HVAC vs Split AC Analytics", "Condensation/Water Leakage Detector", "Fake/Skipped Servicing Detector", "Refrigerant Phase-out/Compliance Scorer",
      "AI Evaluator for Cooling Efficiency", "Audit/Gas Refill Log Generator", "Data Privacy/Occupancy Sensor Scrubber", "IT/Data Center Management Sync",
      "Technician Dispatch Mobile App", "Historical Breakdown vs Weather Correlator", "Estate/IT Officer Briefing AI", "Vendor/Technician Task Allocator",
      "Blockchain Immutable Service Hash", "Anti-Tamper AMC Log Shield", "Mobile App for Temperature Complaints", "Brand/Model Energy Efficiency Benchmarker",
      "Automated Reminder for Filter Cleaning", "Historical Repair/Replacement Cost Analyzer", "HVAC Maintenance SOP Trainer", "IoT Thermostat/Gateway Health Monitor",
      "Imminent Server Room Overheating Alert", "Fraudulent Gas Refill Billing Profiler", "Critical/Server Room AC Classifier", "AI Assisted Eco-Friendly Replacement Drafter",
      "Sensor Telemetry Storage Forecaster", "Secure Data Center Layout Protector", "Integration with Building Management System (BMS)", "Officer Workspace Comfort Index Sync",
      "Heatwave Cooling Load Modeler", "Disaster Power-Cut Priority Coordinator", "Electricity Bill/AMC Budget Tracker", "Custom Workflow for Emergency Portable AC",
      "AI Driven Lifespan/Scrap Predictor", "Predictive Need for Solar/Green Energy", "Custom Alert Trigger for IT SP/Nodal Officer", "AC Unit Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'CCTVPoleMaintenanceDetailed.jsx',
    compName: 'CCTVPoleMaintenanceDetailed',
    mainTitle: 'AI CCTV POLE',
    subTitle: 'MAINTENANCE',
    desc: 'Structural Integrity of Poles, Power Supply/UPS Monitoring, Line-of-Sight Blockage Alerts & Anti-Vandalism',
    experts: [
      "Pole Structural/Rust Integrity AI", "UPS/Battery Backup Health Monitor", "Tree Branch/Line-of-Sight Blockage Detector", "Anti-Vandalism/Tamper Alert Bot",
      "Junction Box/Wiring Weatherproofing Auditor", "Optical Fiber/Network Connectivity Predictor", "Geo-Spatial Camera/Pole Mapper", "Blind-Spot/Coverage Overlap Analyzer",
      "CCTV Infrastructure Dashboard", "Voice-Command Camera Status Bot", "Automated Weekly Downtime Report", "Smart City/Municipal Corporation Sync",
      "PTZ (Pan-Tilt-Zoom) Calibration Checker", "Lens Dirt/Fogging Auto-Detector", "Vendor SLA/Penalty Calculator", "Lightning/Surge Protection Scorer",
      "AI Evaluator for Surveillance Uptime", "Audit/Repair Log Generator", "Data Privacy/Camera Field-of-View Scrubber", "State Command & Control Center Sync",
      "Field Technician Routing App", "Historical Vandalism Hotspot Correlator", "Traffic/Control Room Briefing AI", "Maintenance Vendor Task Allocator",
      "Blockchain Immutable Uptime Hash", "Anti-Tamper Infrastructure Shield", "Mobile App for Rapid Issue Reporting", "Vendor-wise Repair Speed Benchmarker",
      "Automated Reminder for Preventive Maintenance", "Historical Infrastructure ROI Analyzer", "Surveillance Maintenance SOP Trainer", "IoT Health Check Server Monitor",
      "Imminent Pole Collapse/Blind-Spot Alert", "Organized Syndicate Sabotage Profiler", "High-Priority/Strategic Junction Classifier", "AI Assisted Tree Trimming Request Drafter",
      "Diagnostic Log Storage Forecaster", "Secure Camera IP/Network Diagram Protector", "Integration with Traffic Management System", "Public Safety/Deterrence Index Sync",
      "Riot/Protest Infrastructure Damage Modeler", "Cyclone/Storm Wind-Load Coordinator", "Surveillance AMC/Expansion Budget Tracker", "Custom Workflow for Covert Camera Setup",
      "AI Driven Hardware Upgrade Predictor", "Predictive Need for Wireless/Solar Cameras", "Custom Alert Trigger for SP/SSP (Traffic)", "CCTV Infrastructure Lifecycle Tracker"
    ]
  },
  {
    fileName: 'BoundaryWallInspectionDetailed.jsx',
    compName: 'BoundaryWallInspectionDetailed',
    mainTitle: 'AI BOUNDARY WALL',
    subTitle: 'INSPECTION',
    desc: 'Intrusion Vulnerability Mapping, Barbed Wire/Fencing Integrity, Perimeter Security & Encroachment Detection',
    experts: [
      "Perimeter Intrusion Vulnerability AI", "Barbed Wire/Concertina Rust/Break Detector", "Drone-assisted Encroachment/Slum Mapper", "Vibration/Perimeter Fence Sensor Sync",
      "Structural Crack/Settlement Analyzer", "Blind-Spot/Lighting Deficit Mapper", "Geo-Spatial Property Boundary/Land Record Sync", "Overhanging Tree/Scaling Risk Predictor",
      "Boundary Security Dashboard", "Voice-Command Perimeter Status Bot", "Automated Quarterly Security Audit Report", "Revenue/Land Records Department Sync",
      "PTZ Camera Auto-Tracking Integrator", "Wild Animal Intrusion/Breach Filter", "Fake Land Claim/Encroachment Predictor", "Watchtower/Sentry Post Line-of-Sight Scorer",
      "AI Evaluator for Campus Security Index", "Audit/Repair Log Generator", "Data Privacy/Adjoining Property Scrubber", "State Police Housing/Estate Sync",
      "Guard/Sentry Patrol Mobile App", "Historical Jailbreak/Infiltration Correlator", "Base Commander/Estate Officer Briefing AI", "PWD/Fencing Vendor Task Allocator",
      "Blockchain Immutable Land Record Hash", "Anti-Tamper Boundary Shield", "Mobile App for Breach Reporting", "Armory/Prison Perimeter Benchmarker",
      "Automated Reminder for Fence Replacement", "Historical Encroachment Dispute Analyzer", "Perimeter Security SOP Trainer", "IoT Vibration Sensor Server Monitor",
      "Imminent Breach/Wall Collapse Alert", "Land Mafia/Encroacher Syndicate Profiler", "High-Security (Armory/Intel) Classifier", "AI Assisted Anti-Encroachment Notice Drafter",
      "Drone Survey/Map Storage Forecaster", "Secure Security Layout Protector", "Integration with Automated Access Control", "Local Civic Authority (for demolition) Sync",
      "Riot/Mob Breach Vulnerability Modeler", "Flood/Water-logging Wall Damage Coordinator", "Perimeter Upgrade/Maintenance Budget Tracker", "Custom Workflow for Electrified Fencing",
      "AI Driven Intrusion Predictor", "Predictive Need for Additional Sentry/Cameras", "Custom Alert Trigger for Base Commander", "Police Property Integrity Timeline Tracker"
    ]
  },
  {
    fileName: 'ElectricalSafetyInspectionDetailed.jsx',
    compName: 'ElectricalSafetyInspectionDetailed',
    mainTitle: 'AI ELECTRICAL SAFETY',
    subTitle: 'INSPECTION',
    desc: 'Short-Circuit Prediction, Thermal Imaging of Panels, Load Balancing & Fire Hazard Alerts',
    experts: [
      "IoT Short-Circuit/Arc Fault Predictor AI", "Thermal Imaging Panel/Breaker Analyzer", "Phase Load Balancing/Overload Monitor", "Fire Hazard/Spark Detection Bot",
      "DG (Diesel Generator) Health/Sync AI", "Earth/Grounding Resistance Checker", "Geo-Spatial Electrical Layout/Grid Mapper", "Harmonics/Power Quality Analyzer",
      "Electrical Safety Dashboard", "Voice-Command Power Status Bot", "Automated Monthly Safety Audit Report", "State Electricity Board Sync Bot",
      "Old Wiring/Insulation Degradation Scorer", "Server Room Power Redundancy Monitor", "Substandard/Fake Cable Detector", "Energy Waste/Vampire Draw Identifier",
      "AI Evaluator for Fire Risk Index", "Audit/Inspection Log Generator", "Data Privacy/Usage Pattern Scrubber", "Fire/Emergency Services Sync",
      "Electrician Dispatch/AR App", "Historical Fire/Short-Circuit Correlator", "Estate/Fire Officer Briefing AI", "Maintenance/Rewiring Task Allocator",
      "Blockchain Immutable Safety Audit Hash", "Anti-Tamper Compliance Shield", "Mobile App for Tripping/Fault Reporting", "Station-wise Power Efficiency Benchmarker",
      "Automated Reminder for Panel Servicing", "Historical Maintenance Cost Analyzer", "Electrical Safety SOP/Code Trainer", "Smart Meter/IoT Gateway Monitor",
      "Imminent Fire/Meltdown Alert", "Vendor Negligence/Poor Wiring Profiler", "High-Risk/Armory Electrical Zone Classifier", "AI Assisted Rewiring Proposal Drafter",
      "Thermal Scan/Telemetry Storage Forecaster", "Secure Grid/Network Blueprint Protector", "Integration with Building Fire Alarms", "Green Energy/Solar Integration Sync",
      "Summer Overload/Heatwave Modeler", "Flood/Water-Logging Electrocution Coordinator", "Electrical Upgrade/Maintenance Budget Tracker", "Custom Workflow for Emergency Power Cut",
      "AI Driven Lifespan/Rewiring Predictor", "Predictive Need for Substation Upgrade", "Custom Alert Trigger for Quartermaster", "Electrical Infrastructure Lifecycle Tracker"
    ]
  },
  {
    fileName: 'DrainageInspectionDetailed.jsx',
    compName: 'DrainageInspectionDetailed',
    mainTitle: 'AI DRAINAGE',
    subTitle: 'INSPECTION',
    desc: 'Blockage Prediction, Pre-Monsoon Cleaning Audits, Mosquito Breeding Alerts & Sewage Overflow Prevention',
    experts: [
      "IoT Drain Blockage/Flow Rate Predictor", "Pre-Monsoon De-silting/Cleaning Auditor", "Mosquito/Vector-Borne Disease Risk Scorer", "Sewage Overflow/Backflow Alert Bot",
      "Underground Pipe Sonar/Robotic Scanner AI", "Rainwater Harvesting Pit Health Monitor", "Geo-Spatial Campus Drainage Mapper", "Chemical/Toxic Effluent Detector",
      "Drainage Health Dashboard", "Voice-Command Sanitation Query Bot", "Automated Pre-Monsoon Audit Report", "Municipal Corporation/Sanitation Dept Sync",
      "CCTV based Surface Water-logging AI", "Septic Tank Level/Evacuation Predictor", "Substandard Contractor Cleaning Detector", "Slope/Gradient Flaw Identifier",
      "AI Evaluator for Campus Sanitation", "Audit/Cleaning Log Generator", "Data Privacy/Internal Layout Scrubber", "Public Health Department Sync",
      "Sanitation Staff Routing App", "Historical Flood/Water-logging Correlator", "Estate/Welfare Officer Briefing AI", "Sewer Cleaning Machine Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Sanitation Record Shield", "Mobile App for Overflow Reporting", "Campus-wise Hygiene/Sanitation Benchmarker",
      "Automated Reminder for De-silting", "Historical Maintenance Contract Analyzer", "Sanitation/Hygiene SOP Trainer", "IoT Flow Sensor Server Monitor",
      "Imminent Flooding/Sewage Backup Alert", "Contractor Fraud/Negligence Profiler", "Critical/Basement Evidence Room Classifier", "AI Assisted Municipal Coordination Drafter",
      "Sensor/Robotic Video Storage Forecaster", "Secure Underground Blueprint Protector", "Integration with Weather/Rainfall Forecasts", "Police Colony Resident Health Sync",
      "Heavy Monsoon/Cyclone Flooding Modeler", "Post-Disaster Epidemic Prevention Coordinator", "Sanitation/Drainage Repair Budget Tracker", "Custom Workflow for Emergency Pumping",
      "AI Driven Pipe Replacement Predictor", "Predictive Need for Deep Drainage Overhaul", "Custom Alert Trigger for Estate Officer", "Drainage Infrastructure Timeline Tracker"
    ]
  },
  {
    fileName: 'SolarPowerMonitoringDetailed.jsx',
    compName: 'SolarPowerMonitoringDetailed',
    mainTitle: 'AI SOLAR POWER',
    subTitle: 'MONITORING',
    desc: 'Panel Efficiency Analytics, Dust Accumulation Alerts, Grid-Tie Output Optimization & Carbon Footprint Tracking',
    experts: [
      "Panel Efficiency/Output Optimizer AI", "Dust/Soiling Accumulation Alert Bot", "Grid-Tie (Net Metering) Sync Engine", "Carbon Footprint/Green Energy Scorer",
      "Inverter Health/Fault Predictor", "Shadow/Obstruction Tracking AI", "Geo-Spatial Rooftop Solar Mapper", "Battery Bank/Storage Degradation Analyzer",
      "Solar Power Dashboard", "Voice-Command Energy Query Bot", "Automated Monthly ROI/Savings Report", "State Renewable Energy Agency Sync",
      "Weather/Cloud Cover Output Predictor", "Thermal Scan for Hotspot/Damaged Cells", "Fake AMC/Cleaning Visit Detector", "Energy Trading/Excess Power Sales AI",
      "AI Evaluator for Green Police Station Rating", "Audit/Maintenance Log Generator", "Data Privacy/Energy Usage Scrubber", "State Electricity Board Sync",
      "Maintenance/Cleaning Staff App", "Historical Output vs Weather Correlator", "Estate/Finance Officer Briefing AI", "Vendor/Cleaning Task Allocator",
      "Blockchain Immutable Energy Hash", "Anti-Tamper Net-Metering Shield", "Mobile App for Live Output Tracking", "District-wise Green Energy Benchmarker",
      "Automated Reminder for Panel Washing", "Historical CAPEX ROI Analyzer", "Green Energy Maintenance SOP Trainer", "IoT Inverter Gateway Monitor",
      "Imminent Inverter Failure/Fire Alert", "Substandard Panel/Vendor Profiler", "Off-Grid/Remote Station Classifier", "AI Assisted Solar Expansion Drafter",
      "Telemetry/Output Data Storage Forecaster", "Secure Smart Grid Blueprint Protector", "Integration with National Solar Mission Portals", "Citizen Transparency on Police Green Energy",
      "Cyclone/Hailstorm Damage Modeler", "Disaster Island-Mode (Off-Grid) Coordinator", "Solar CAPEX/AMC Budget Tracker", "Custom Workflow for Battery Replacement",
      "AI Driven Panel Degradation Predictor", "Predictive Need for Capacity Expansion", "Custom Alert Trigger for Nodal Officer", "Solar Asset Lifecycle Timeline Tracker"
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

console.log('All 10 Police Buildings Modules files generated successfully.');
