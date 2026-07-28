const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'BuildingStructuralHealthIndexDetailed.jsx',
    compName: 'BuildingStructuralHealthIndexDetailed',
    mainTitle: 'AI BUILDING STRUCTURAL',
    subTitle: 'HEALTH INDEX',
    desc: 'Automated crack detection, vibration anomaly scoring, load-bearing assessment & lifecycle degradation tracking',
    experts: [
      "Structural Crack/Fissure Vision AI", "Vibration/Seismic Anomaly Detector", "Load-Bearing Stress Analyzer", "Lifecycle Degradation Scorer",
      "Foundation Settlement Monitor", "Corrosion/Rust Detection AI", "Geo-Spatial Estate Structural Mapper", "Non-Destructive Testing (NDT) Integrator",
      "Structural Health Dashboard", "Voice-Command Building Safety Bot", "Automated Quarterly Inspection Report", "State PWD/Engineering Sync",
      "Imminent Collapse Risk Predictor", "Overcrowding Stress Alert", "Material Fatigue Analyzer", "Maintenance Priority Router",
      "AI Evaluator for Estate Safety Index", "Audit/Inspection Log Generator", "Data Privacy/Facility Blueprint Scrubber", "Infrastructure Planning Department Sync",
      "Civil Engineer Field Inspection App", "Historical Structural Failure Correlator", "SP (Infrastructure) Briefing AI", "Repair Task Allocator",
      "Blockchain Immutable Structural Hash", "Anti-Tamper Safety Record Shield", "Mobile App for Quick Snag Upload", "Station-wise Structural Integrity Benchmarker",
      "Automated Alert for Critical Weakness", "Historical Civil Work Cost Analyzer", "Building Safety SOP Trainer", "IoT Strain Gauge Health Monitor",
      "Imminent Roof/Wall Collapse Alert", "Substandard Material Vendor Profiler", "High-Priority (Headquarters/Armory) Assessment Classifier", "AI Assisted Condemnation Notice Drafter",
      "Structural Scan/Image Forecaster", "Secure Facility Layout Protector", "Integration with E-Tendering/Procurement", "Building Renovation Portal Sync",
      "Election Mass Deployment Load Modeler", "Disaster Post-Earthquake Assessment Coordinator", "Civil Maintenance Budget Tracker", "Custom Workflow for Heritage Police Buildings",
      "AI Driven Structural Lifespan Predictor", "Predictive Need for Deep Retrofitting", "Custom Alert Trigger for IG Provisioning", "Anomaly Detection to Rectification Timeline"
    ]
  },
  {
    fileName: 'EarthquakeSafetyInspectionDetailed.jsx',
    compName: 'EarthquakeSafetyInspectionDetailed',
    mainTitle: 'AI EARTHQUAKE SAFETY',
    subTitle: 'INSPECTION',
    desc: 'Seismic compliance auditing, retrofitting requirement mapping, soil stability analysis & emergency evacuation routing',
    experts: [
      "Seismic Code Compliance AI", "Retrofitting Requirement Analyzer", "Soil/Foundation Stability Predictor", "Evacuation Route Obstruction Detector",
      "Real-time Tremor/Seismic Sensor Sync", "Aftershock Vulnerability Scorer", "Geo-Spatial Seismic Zone Mapper", "Building Resonance/Frequency Monitor",
      "Earthquake Readiness Dashboard", "Voice-Command Seismic Query Bot", "Automated Annual Seismic Audit Report", "Disaster Management Authority Sync",
      "Critical Weak Point Predictor", "Non-Structural Falling Hazard Alert", "Emergency Power Resilience Analyzer", "Evacuation Bottleneck Optimizer",
      "AI Evaluator for Seismic Readiness Index", "Audit/Inspection Log Generator", "Data Privacy/Base Isolation Scrubber", "State PWD/Structural Design Sync",
      "Seismic Auditor Mobile App", "Historical Quake Damage Correlator", "DGP (Disaster Response) Briefing AI", "Retrofitting Task Allocator",
      "Blockchain Immutable Seismic Audit Hash", "Anti-Tamper Inspection Record Shield", "Mobile App for Hazard Reporting", "District-wise Seismic Resilience Benchmarker",
      "Automated Alert for Non-Compliant Structures", "Historical Retrofitting Cost Analyzer", "Earthquake Evacuation SOP Trainer", "IoT Seismic Sensor Health Monitor",
      "Imminent Structural Failure (During Quake) Alert", "Substandard Construction Profiler", "High-Importance (Control Room) Resilience Classifier", "AI Assisted Retrofitting Tender Drafter",
      "Seismic Audit Data Forecaster", "Secure Structural Blueprint Protector", "Integration with National Seismological Center", "Civil Defence Portal Sync",
      "Election Polling Station Seismic Safety Modeler", "Disaster Post-Quake Damage Rapid Coordinator", "Seismic Retrofitting Budget Tracker", "Custom Workflow for High-Rise Police HQs",
      "AI Driven Next Audit Requirement Predictor", "Predictive Need for Base Isolation Upgrade", "Custom Alert Trigger for ADG Infrastructure", "Audit Recommendation to Implementation Timeline"
    ]
  },
  {
    fileName: 'FireExitReadinessMonitorDetailed.jsx',
    compName: 'FireExitReadinessMonitorDetailed',
    mainTitle: 'AI FIRE EXIT',
    subTitle: 'READINESS MONITOR',
    desc: 'Obstruction detection in stairwells, panic bar health checks, emergency lighting status & automated drill logging',
    experts: [
      "Fire Exit Obstruction Vision AI", "Panic Bar/Door Hardware Health Monitor", "Emergency Lighting/Signage Status Tracker", "Automated Mock Drill/Evacuation Logger",
      "Stairwell Smoke Infiltration Predictor", "Fire Door Propped-Open Alert", "Geo-Spatial Exit Route Mapper", "Occupancy vs Exit Capacity Analyzer",
      "Fire Readiness Dashboard", "Voice-Command Exit Status Bot", "Automated Weekly Exit Compliance Report", "State Fire Service Sync",
      "Chokepoint/Bottleneck Predictor", "Corridor Combustible Load Detector", "Emergency Power/UPS Failure Alert", "Evacuation Time Optimizer",
      "AI Evaluator for Evacuation Efficiency", "Audit/Drill Log Generator", "Data Privacy/Occupancy Data Scrubber", "Estate/Infrastructure Sync",
      "Fire Safety Warden Mobile App", "Historical Evacuation Delay Correlator", "Chief Security Officer Briefing AI", "Clearance/Maintenance Task Allocator",
      "Blockchain Immutable Drill Hash", "Anti-Tamper Fire Safety Shield", "Mobile App for Obstruction Reporting", "Floor-wise Evacuation Speed Benchmarker",
      "Automated Alert for Blocked Fire Exits", "Historical Fire Upgrade Cost Analyzer", "Fire Safety/Evacuation SOP Trainer", "IoT Exit Sensor Health Monitor",
      "Imminent Trap Hazard Alert", "Habitual Rule-Breaker (Obstruction) Profiler", "High-Occupancy (Conference/Barrack) Exit Classifier", "AI Assisted Disciplinary Notice Drafter",
      "Drill Video/Data Forecaster", "Secure Evacuation Plan Protector", "Integration with Building Management System (BMS)", "Municipal Fire NOC Sync",
      "Election Mass Briefing Evacuation Modeler", "Disaster Rapid Evacuation Coordinator", "Fire Safety Equipment Budget Tracker", "Custom Workflow for Underground/Basement Exits",
      "AI Driven Evacuation Time Predictor", "Predictive Need for Additional Stairwells", "Custom Alert Trigger for SP Headquarters", "Obstruction Detection to Clearance Timeline"
    ]
  },
  {
    fileName: 'RainLeakageMonitoringDetailed.jsx',
    compName: 'RainLeakageMonitoringDetailed',
    mainTitle: 'AI RAIN LEAKAGE',
    subTitle: 'MONITORING',
    desc: 'Moisture sensor integration, roof seepage prediction, waterproofing lifecycle tracking & archival room protection',
    experts: [
      "Moisture/Humidity Sensor AI", "Roof Seepage/Crack Predictor", "Waterproofing Lifecycle Tracker", "Archival/Malkhana Protection Bot",
      "Gutter/Drain Blockage Detector", "Basement Flooding/Sump Pump Monitor", "Geo-Spatial Seepage Vulnerability Mapper", "Weather Forecast Sync & Alert Engine",
      "Rain Leakage Dashboard", "Voice-Command Moisture Status Bot", "Automated Pre-Monsoon Readiness Report", "State PWD/Civil Maintenance Sync",
      "Electrical Short-Circuit Risk Predictor", "Mold/Mildew Growth Analyzer", "Wall Dampness/Plaster Peel Alert", "Preventive Waterproofing Optimizer",
      "AI Evaluator for Building Weatherproofing Index", "Audit/Repair Log Generator", "Data Privacy/Evidence Room Layout Scrubber", "Record/Evidence Room Sync",
      "Maintenance Staff Mobile App", "Historical Monsoon Damage Correlator", "Estate Officer Briefing AI", "Waterproofing/Plumbing Task Allocator",
      "Blockchain Immutable Repair Hash", "Anti-Tamper Sensor Log Shield", "Mobile App for Leak Reporting", "Station-wise Waterproofing Benchmarker",
      "Automated Alert for Archival Room Leakage", "Historical Waterproofing Cost Analyzer", "Monsoon Preparedness SOP Trainer", "IoT Moisture Sensor Health Monitor",
      "Imminent Evidence/Record Destruction Alert", "Substandard Waterproofing Vendor Profiler", "High-Value (Server Room/Armory) Classifier", "AI Assisted Roof Repair Tender Drafter",
      "Moisture Trend Data Forecaster", "Secure Facility Layout Protector", "Integration with Meteorological Department", "E-Tendering Portal Sync",
      "Election Monsoon Deployment Damage Modeler", "Disaster Flash Flood Inundation Coordinator", "Waterproofing/Maintenance Budget Tracker", "Custom Workflow for Heritage Roofs",
      "AI Driven Repair Budget Predictor", "Predictive Need for Roof Overhaul", "Custom Alert Trigger for SP Admin", "Leak Detection to Patching Timeline"
    ]
  },
  {
    fileName: 'BuildingRenovationPlannerDetailed.jsx',
    compName: 'BuildingRenovationPlannerDetailed',
    mainTitle: 'AI BUILDING RENOVATION',
    subTitle: 'PLANNER',
    desc: 'Space utilization analysis, ROI on upgrades, temporary relocation logistics & modern aesthetic modeling',
    experts: [
      "Space Utilization/Occupancy Analyzer", "Renovation ROI/Cost-Benefit Estimator", "Temporary Relocation/Decanting Logistics AI", "Modern Aesthetic/Ergonomic Modeler",
      "Budget vs Actual Cost Tracker", "Vendor Selection/Tender Evaluation Bot", "Geo-Spatial Renovation Project Mapper", "Material Quantity/Wastage Optimizer",
      "Renovation Planning Dashboard", "Voice-Command Project Status Bot", "Automated Monthly Progress Report", "State Housing/PWD Sync",
      "Project Delay/Cost Overrun Predictor", "Workplace Disruption Analyzer", "Structural Alteration Risk Scorer", "Energy Efficiency Upgrade Integrator",
      "AI Evaluator for Modernization Index", "Audit/Project Milestone Log Generator", "Data Privacy/Floorplan Scrubber", "Finance/Planning Department Sync",
      "Project Manager Mobile App", "Historical Renovation Bottleneck Correlator", "DGP (Modernization) Briefing AI", "Contractor Task/Phase Allocator",
      "Blockchain Immutable Milestone Hash", "Anti-Tamper Tender Evaluation Shield", "Mobile App for Progress Photo Upload", "Contractor-wise Execution Speed Benchmarker",
      "Automated Alert for Timeline Slippage", "Historical Material Cost Analyzer", "Construction Safety/Compliance SOP Trainer", "Project Management Software Sync Monitor",
      "Imminent Budget Exhaustion Alert", "Underperforming Contractor Profiler", "High-Impact (Control Room/Public Area) Renovation Classifier", "AI Assisted Penalty/Extension Notice Drafter",
      "Renovation Blueprint/3D Model Forecaster", "Secure Architectural Plan Protector", "Integration with E-Procurement/Treasury", "Green Building Certification Sync",
      "Election Phase Renovation Pause Modeler", "Disaster Resilient Rebuilding Coordinator", "Capital Expenditure (CAPEX) Budget Tracker", "Custom Workflow for Smart Police Station Upgrades",
      "AI Driven Final Completion Date Predictor", "Predictive Need for Design Revisions", "Custom Alert Trigger for ADG Provisioning", "Project Inception to Handover Timeline"
    ]
  },
  {
    fileName: 'SmartWaterMeterDashboardDetailed.jsx',
    compName: 'SmartWaterMeterDashboardDetailed',
    mainTitle: 'AI SMART WATER METER',
    subTitle: 'DASHBOARD',
    desc: 'Real-time consumption tracking, anomalous usage detection, automated municipal billing reconciliation & conservation gamification',
    experts: [
      "Real-Time Consumption Tracker", "Anomalous Usage/Leak Detector", "Municipal Bill Reconciliation Engine", "Water Conservation Gamification AI",
      "Peak Demand Time Analyzer", "Flow Rate/Pressure Drop Monitor", "Geo-Spatial Water Usage Heatmapper", "Borewell/Tank Level Sync AI",
      "Smart Water Dashboard", "Voice-Command Water Query Bot", "Automated Monthly Consumption Report", "Municipal/Jal Board Sync",
      "Underground Leak/Pipe Burst Predictor", "Unauthorized Tapping/Theft Alert", "Sensor Drift/Calibration Predictor", "Barrack vs Office Usage Segmenter",
      "AI Evaluator for Water Efficiency Index", "Audit/Billing Log Generator", "Data Privacy/Resident Data Scrubber", "Finance/Estate Department Sync",
      "Plumber/Estate Officer App", "Historical Summer Demand Correlator", "SP (Lines) Briefing AI", "Repair/Inspection Task Allocator",
      "Blockchain Immutable Consumption Hash", "Anti-Tamper Smart Meter Shield", "Mobile App for Wastage Reporting", "Unit-wise Water Efficiency Benchmarker",
      "Automated Alert for Continuous Flow (Leak)", "Historical Water Tariff/Cost Analyzer", "Water Conservation SOP Trainer", "IoT Smart Meter Gateway Monitor",
      "Imminent Supply Exhaustion Alert", "Habitual Water Waster (Unit/Block) Profiler", "High-Consumption (Mess/Hospital) Classifier", "AI Assisted Bill Dispute Drafter",
      "Consumption Trend Data Forecaster", "Secure Telemetry Network Protector", "Integration with Central Ground Water Board", "Sustainability/Green Audit Sync",
      "Election Force Mass Consumption Modeler", "Disaster Relief Camp Water Allocation Coordinator", "Utility/Water Bill Budget Tracker", "Custom Workflow for Rainwater Harvesting Yield",
      "AI Driven Monthly Bill Predictor", "Predictive Need for Plumbing Overhaul", "Custom Alert Trigger for Commandant", "Anomaly Detection to Resolution Timeline"
    ]
  },
  {
    fileName: 'EnergyEfficiencyAuditDetailed.jsx',
    compName: 'EnergyEfficiencyAuditDetailed',
    mainTitle: 'AI ENERGY EFFICIENCY',
    subTitle: 'AUDIT',
    desc: 'Appliance power draw analysis, carbon footprint tracking, LED/BLDC upgrade ROI & solar potential mapping',
    experts: [
      "Appliance Power Draw Analyzer", "Carbon Footprint/Emissions Tracker", "LED/BLDC Fan Upgrade ROI Estimator", "Rooftop Solar Potential Mapper",
      "Phantom Load/Standby Power Detector", "Peak Demand Charge Optimizer", "Geo-Spatial Energy Waste Hotspot Mapper", "Tariff Slab/Penalty Optimizer",
      "Energy Efficiency Dashboard", "Voice-Command Energy Query Bot", "Automated Quarterly Energy Audit Report", "State Renewable Energy Agency Sync",
      "Inefficient/Aging AC Unit Predictor", "Unnecessary After-Hours Lighting Alert", "Solar Yield Degradation Predictor", "Insulation/Heat Gain Analyzer",
      "AI Evaluator for Green Building Compliance", "Audit/Consumption Log Generator", "Data Privacy/Occupancy Profile Scrubber", "Finance/Modernization Department Sync",
      "Energy Auditor Mobile App", "Historical Energy Price Trend Correlator", "DGP (Modernization) Briefing AI", "Retrofit/Replacement Task Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Energy Log Shield", "Mobile App for Appliance Inventory", "Station-wise Energy Efficiency Benchmarker",
      "Automated Alert for Excessive Power Draw", "Historical Utility Bill Analyzer", "Energy Conservation SOP Trainer", "Smart Plug/Sub-meter Health Monitor",
      "Imminent Transformer Overload Alert", "Energy-Inefficient Facility Profiler", "High-Consumption (Server Room/Command Center) Classifier", "AI Assisted Solar Tender Drafter",
      "Energy Consumption Forecaster", "Secure Facility Electrical Layout Protector", "Integration with National Smart Grid", "Carbon Credit Exchange Sync",
      "Election 24x7 Operations Energy Modeler", "Disaster Power Resilience/Microgrid Coordinator", "Energy Upgrade/CAPEX Budget Tracker", "Custom Workflow for EV Charging Station Integration",
      "AI Driven Annual Energy Savings Predictor", "Predictive Need for Complete Rewiring", "Custom Alert Trigger for IG Provisioning", "Audit Recommendation to Implementation Timeline"
    ]
  },
  {
    fileName: 'HVACPerformanceMonitoringDetailed.jsx',
    compName: 'HVACPerformanceMonitoringDetailed',
    mainTitle: 'AI HVAC PERFORMANCE',
    subTitle: 'MONITORING',
    desc: 'Chiller efficiency tracking, refrigerant leak detection, filter replacement scheduling & server room climate control',
    experts: [
      "Chiller/Compressor Efficiency AI", "Refrigerant Gas Leak Detector", "Filter Dust/Clog Degradation Scorer", "Server Room/Data Center Climate Optimizer",
      "Air Quality/CO2 Level Monitor", "Thermal Comfort vs Energy Analyzer", "Geo-Spatial HVAC Zone Heatmapper", "Variable Refrigerant Flow (VRF) Optimizer",
      "HVAC Performance Dashboard", "Voice-Command Climate Query Bot", "Automated Weekly HVAC Health Report", "Building Management System (BMS) Sync",
      "Compressor Seizure/Failure Predictor", "Condensation/Drip Leak Alert", "Occupancy-Based Temperature Adjuster", "Duct Blockage/Airflow Analyzer",
      "AI Evaluator for HVAC Efficiency Index", "Audit/Maintenance Log Generator", "Data Privacy/Zone Occupancy Scrubber", "IT (Server Room)/Estate Sync",
      "HVAC Technician Mobile App", "Historical Summer Breakdown Correlator", "Chief Technology Officer (CTO) Briefing AI", "Servicing/Filter Replacement Task Allocator",
      "Blockchain Immutable Maintenance Hash", "Anti-Tamper HVAC Controller Shield", "Mobile App for Temperature Complaint", "Zone-wise Cooling Efficiency Benchmarker",
      "Automated Alert for Server Room Overheating", "Historical AMC (Annual Maintenance) Cost Analyzer", "HVAC Operations/Safety SOP Trainer", "IoT Thermostat/Sensor Health Monitor",
      "Imminent Server Shutdown (Heat) Alert", "Substandard AMC Vendor Profiler", "Mission-Critical (CCTNS Data Center) Cooling Classifier", "AI Assisted Vendor Penalty Drafter",
      "Telemetry/Temperature Trend Forecaster", "Secure BMS Network Protector", "Integration with Weather Forecast API", "Environmental Compliance Sync",
      "Election Command Center Cooling Modeler", "Disaster Mobile Control Room AC Coordinator", "HVAC Maintenance Budget Tracker", "Custom Workflow for Morgue/Forensic Lab Cooling",
      "AI Driven Monthly Power Draw Predictor", "Predictive Need for System Replacement", "Custom Alert Trigger for SP IT/Computer", "Anomaly Detection to Repair Timeline"
    ]
  },
  {
    fileName: 'GeneratorFuelConsumptionAnalyticsDetailed.jsx',
    compName: 'GeneratorFuelConsumptionAnalyticsDetailed',
    mainTitle: 'AI GENERATOR FUEL',
    subTitle: 'CONSUMPTION ANALYTICS',
    desc: 'Load-to-fuel correlation, pilferage detection algorithms, maintenance hour tracking & DG synchronization efficiency',
    experts: [
      "Load-to-Fuel Efficiency Correlator AI", "Diesel Pilferage/Siphoning Detector", "Engine Run-Hour/Maintenance Tracker", "Multi-DG Synchronization Optimizer",
      "Grid Outage vs DG Run-Time Validator", "Carbon Emission/Smoke Analyzer", "Geo-Spatial Generator Fleet Mapper", "Battery/Self-Starter Health Scorer",
      "Generator Fuel Analytics Dashboard", "Voice-Command DG Query Bot", "Automated Weekly Fuel Audit Report", "State Electricity Board (DISCOM) Sync",
      "Sudden Fuel Drop/Theft Predictor", "Engine Seizure/Overheating Alert", "Optimal Load Allocation Analyzer", "Substandard Fuel/Adulteration Detector",
      "AI Evaluator for Backup Power Reliability", "Audit/Refueling Log Generator", "Data Privacy/Station Outage Data Scrubber", "Finance/Audit Department Sync",
      "DG Operator/Mechanic Mobile App", "Historical Power Cut Trend Correlator", "SP (Infrastructure) Briefing AI", "Refueling/Servicing Task Allocator",
      "Blockchain Immutable Fuel Log Hash", "Anti-Tamper DG Telemetry Shield", "Mobile App for QR Fuel Indent", "DG-wise Efficiency (KWH/Liter) Benchmarker",
      "Automated Alert for Critical Fuel Level", "Historical Diesel Expenditure Analyzer", "Generator Safety/Operations SOP Trainer", "IoT Fuel/Vibration Sensor Monitor",
      "Imminent Total Power Failure Alert", "Habitual Fuel Pilferer Profiler", "High-Capacity (Headquarters) DG Classifier", "AI Assisted Fuel Supply Tender Drafter",
      "Fuel Consumption/Price Trend Forecaster", "Secure Generator Controller Network Protector", "Integration with Approved Fuel Vendors", "Pollution Control Board Sync",
      "Election Uninterrupted Power Fuel Modeler", "Disaster Mobile DG Deployment Coordinator", "Diesel/Maintenance Budget Tracker", "Custom Workflow for Remote Checkpost DG Sets",
      "AI Driven Monthly Fuel Budget Predictor", "Predictive Need for Engine Overhaul", "Custom Alert Trigger for Reserve Inspector", "Grid Failure to Auto-Start Timeline"
    ]
  },
  {
    fileName: 'LiftBreakdownPredictionDetailed.jsx',
    compName: 'LiftBreakdownPredictionDetailed',
    mainTitle: 'AI LIFT BREAKDOWN',
    subTitle: 'PREDICTION',
    desc: 'Motor vibration analysis, door jam prediction, usage frequency heatmaps & AMC vendor accountability tracking',
    experts: [
      "Motor/Sheave Vibration Analysis AI", "Door Jam/Sensor Failure Predictor", "Usage Frequency/Traffic Heatmapper", "AMC Vendor SLA/Accountability Tracker",
      "Cable/Rope Tension Anomaly Detector", "Overload/Capacity Breach Alert", "Geo-Spatial Elevator Network Mapper", "Floor Wait Time/Congestion Optimizer",
      "Elevator Health Dashboard", "Voice-Command Lift Status Bot", "Automated Monthly Lift Safety Report", "Building Management System (BMS) Sync",
      "Mid-Floor Entrapment Risk Predictor", "Uneven Leveling/Trip Hazard Alert", "Brake Pad Wear/Tear Scorer", "Power Fluctuation Impact Analyzer",
      "AI Evaluator for Vertical Mobility Safety", "Audit/Maintenance Log Generator", "Data Privacy/VIP Movement Scrubber", "Estate/Infrastructure Department Sync",
      "Elevator Technician Mobile App", "Historical Breakdown/Entrapment Correlator", "Chief Security Officer Briefing AI", "Servicing/Rescue Task Allocator",
      "Blockchain Immutable Maintenance Hash", "Anti-Tamper Lift Controller Shield", "Mobile App for Emergency Intercom/SOS", "Lift-wise Uptime/Reliability Benchmarker",
      "Automated Alert for Passenger Entrapment", "Historical AMC/Repair Cost Analyzer", "Elevator Rescue/Safety SOP Trainer", "IoT Vibration/Load Sensor Health Monitor",
      "Imminent Free-Fall/Catastrophic Failure Alert", "Substandard AMC Vendor Profiler", "High-Traffic (Public/Reception) Lift Classifier", "AI Assisted Vendor Penalty Drafter",
      "Component Lifespan Forecaster", "Secure Elevator Control Network Protector", "Integration with State Lift Inspectorate", "Fire Alarm/Emergency Evacuation Sync",
      "Election Command Center VIP Movement Modeler", "Disaster Evacuation Override Coordinator", "Elevator AMC/Modernization Budget Tracker", "Custom Workflow for VIP/DGP Exclusive Lift",
      "AI Driven Part Replacement Predictor", "Predictive Need for Complete Lift Replacement", "Custom Alert Trigger for SP Admin", "Entrapment to Rescue Timeline"
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

console.log('All 10 Police Infrastructure Engineering Modules files generated successfully.');
