const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'SalaryProjectionDetailed.jsx',
    compName: 'SalaryProjectionDetailed',
    mainTitle: 'AI SALARY',
    subTitle: 'PROJECTION',
    desc: 'Automated Increment Forecasting, DA Arrears Calculation, Retiree Settlement & HRMS Sync',
    experts: [
      "DA/Arrears Calculation Engine", "Annual Increment Forecaster AI", "Retirement/Gratuity Settlement Predictor", "Tax Deduction (TDS) Optimizer",
      "Pay Commission Impact Modeler", "Suspension/Half-Pay Calculator", "Geo-Spatial District Salary Apportionment", "Recruitment Batch Cost Analyzer",
      "Salary Projection Dashboard", "Voice-Command Pay Query Bot", "Automated Monthly Payroll Forecast", "State Treasury/IFMS Sync",
      "Anomaly/Duplicate Pay Detector", "Leave Without Pay (LWP) Adjuster", "Fake/Ghost Employee Identifier", "Budget Shortfall/Deficit Predictor",
      "AI Evaluator for Payroll Accuracy", "Audit/Disbursement Log Generator", "Data Privacy/Financial Data Scrubber", "HRMS/Personnel Department Sync",
      "Employee Pay-Slip Mobile App", "Historical DA Hike Correlator", "DGP/IG Finance Briefing AI", "Accounts Clerk Task Allocator",
      "Blockchain Immutable Payroll Hash", "Anti-Tamper Salary Disbursement Shield", "Mobile App for Tax Declaration", "District-wise Per-Capita Cost Benchmarker",
      "Automated Reminder for Tax Filings", "Historical Payroll Growth Analyzer", "Financial Code/Treasury SOP Trainer", "Payroll Database Server Health Monitor",
      "Imminent Budget Exhaustion Alert", "Salary Delay/Grievance Profiler", "High-Priority Retiree Settlement Classifier", "AI Assisted Finance Department Request Drafter",
      "Payroll Data Storage Forecaster", "Secure Bank Account Detal Protector", "Integration with PF/NPS Portals", "Grievance Portal Sync (for pay anomalies)",
      "Election Duty Honorarium Modeler", "Disaster Hazard Pay Coordinator", "Overall Establishment Budget Tracker", "Custom Workflow for Stop-Payment (Suspension)",
      "AI Driven Budget Requirement Predictor", "Predictive Need for Supplementary Demands", "Custom Alert Trigger for Finance Secretary", "Employee Salary/Pension Lifecycle Timeline"
    ]
  },
  {
    fileName: 'OvertimeCalculatorDetailed.jsx',
    compName: 'OvertimeCalculatorDetailed',
    mainTitle: 'AI OVERTIME',
    subTitle: 'CALCULATOR',
    desc: 'Duty Roster Sync, Extra-Hour Analytics, Fair Compensation Mapping & Fatigue Alerts',
    experts: [
      "Duty Roster/Attendance Sync AI", "Extra-Hour/Shift Extension Calculator", "Fatigue/Burnout Risk Scorer", "Fair Compensation/Distribution Mapper",
      "Biometric/Geo-Fenced Punch-Out Integrator", "Holiday/Weekend Duty Multiplier AI", "Geo-Spatial Heavy-Duty Zone Mapper", "Unjustified/Fake Overtime Detector",
      "Overtime Analytics Dashboard", "Voice-Command Duty Hours Bot", "Automated Monthly OT Payout Report", "HRMS/Attendance System Sync",
      "Rank-wise OT Cap/Limit Monitor", "Shift Handover Delay Analyzer", "Favoritism/Unequal Distribution Predictor", "Budget vs Actual OT Cost Correlator",
      "AI Evaluator for Work-Life Balance", "Audit/Payout Log Generator", "Data Privacy/Shift Roster Scrubber", "Finance/Accounts Sync",
      "Officer OT Claim Mobile App", "Historical Festival/VIP Duty Correlator", "SP/Commandant Briefing AI", "Duty Roster Auto-Adjuster (for rest)",
      "Blockchain Immutable OT Hash", "Anti-Tamper Attendance Shield", "Mobile App for Supervisor Approval", "Unit-wise OT Expenditure Benchmarker",
      "Automated Alert for Max Hours Exceeded", "Historical OT Expenditure Trend Analyzer", "Duty Hours/Compensation SOP Trainer", "Biometric Server Health Monitor",
      "Imminent Staff Burnout/Collapse Alert", "Habitual OT Claimant (Fraud) Profiler", "High-Risk VIP/Law & Order Duty Classifier", "AI Assisted Budget Enhancement Drafter",
      "Attendance Log Storage Forecaster", "Secure Personnel Location Protector", "Integration with Health/Medical Records", "Welfare Portal Sync (for stress relief)",
      "Election Phase OT Modeler", "Disaster Rescue Continuous Duty Coordinator", "Overtime Allowance Budget Tracker", "Custom Workflow for Emergency OT Approval",
      "AI Driven Peak-Duty Cost Predictor", "Predictive Need for More Manpower", "Custom Alert Trigger for IG Welfare", "Officer Duty/Rest Lifecycle Timeline"
    ]
  },
  {
    fileName: 'UniformAllowanceManagementDetailed.jsx',
    compName: 'UniformAllowanceManagementDetailed',
    mainTitle: 'AI UNIFORM ALLOWANCE',
    subTitle: 'MANAGEMENT',
    desc: 'Automated Disbursal, Kit Issuance Tracking, Wear-and-Tear Analytics & Vendor Quality Audits',
    experts: [
      "Annual Allowance Disbursal Automator", "Kit/Equipment Issuance Tracker AI", "Uniform Wear-and-Tear/Lifespan Predictor", "Vendor Quality/Fabric Audit Bot",
      "Rank-wise Entitlement/Matrix AI", "Inventory/Stock Depletion Forecaster", "Geo-Spatial Store/Armory Mapper", "Duplicate Claim/Re-issue Detector",
      "Uniform Allowance Dashboard", "Voice-Command Inventory Query Bot", "Automated Quarterly Disbursal Report", "State Quartermaster/Store Sync",
      "Substandard Material/Stitching Predictor", "Winter/Summer Gear Switch Analyzer", "Fake Vendor/Billing Fraud Identifier", "Size/Measurement Distribution Optimizer",
      "AI Evaluator for Turnout/Appearance Index", "Audit/Issuance Log Generator", "Data Privacy/Personnel Record Scrubber", "Finance/Accounts Department Sync",
      "Officer Indent/Request Mobile App", "Historical Vendor Performance Correlator", "IG Provisioning Briefing AI", "Store Keeper Task Allocator",
      "Blockchain Immutable Issuance Hash", "Anti-Tamper Inventory Shield", "Mobile App for Digital Acknowledgment", "District-wise Kit Readiness Benchmarker",
      "Automated Reminder for Annual Renewal", "Historical Procurement Cost Analyzer", "Provisioning/Store SOP Trainer", "Inventory DB Server Health Monitor",
      "Imminent Stock-Out (Riot Gear) Alert", "Corrupt Quartermaster/Vendor Profiler", "High-Priority (Commando/ATS) Gear Classifier", "AI Assisted E-Tender Drafter",
      "Inventory Data Storage Forecaster", "Secure Tender/Pricing Protector", "Integration with CSD/Police Canteen", "Welfare Portal Sync",
      "Election Special Duty Kit Modeler", "Disaster High-Vis Gear Coordinator", "Uniform/Equipment Budget Tracker", "Custom Workflow for Condemnation/Scrap",
      "AI Driven Procurement Delay Predictor", "Predictive Need for Bulk Tender", "Custom Alert Trigger for DGP Provisioning", "Equipment Lifespan Timeline Tracker"
    ]
  },
  {
    fileName: 'FuelBudgetPlannerDetailed.jsx',
    compName: 'FuelBudgetPlannerDetailed',
    mainTitle: 'AI FUEL BUDGET',
    subTitle: 'PLANNER',
    desc: 'GPS Mileage Tracking, Dynamic Allotment, Pilferage Detection & Pump Integration',
    experts: [
      "GPS/Telematics Mileage Tracker AI", "Dynamic Fuel Allotment Optimizer", "Pilferage/Siphoning Detection Bot", "Authorized Fuel Pump/Card Integrator",
      "Vehicle-wise Efficiency (KMPL) Scorer", "VIP/Emergency Duty Fuel Apportionment", "Geo-Spatial Patrol Route/Fuel Usage Mapper", "Idle Time/AC Usage Fuel Drain Analyzer",
      "Fuel Budget Dashboard", "Voice-Command Fleet Fuel Query Bot", "Automated Monthly Consumption Report", "Motor Transport (MT) Section Sync",
      "Sudden Mileage Drop Anomaly Detector", "Private Usage/Off-Route Alert AI", "Fake Fuel Bill/Receipt Identifier", "Old/Guzzler Vehicle Condemnation Suggester",
      "AI Evaluator for Fleet Fuel Efficiency", "Audit/Refueling Log Generator", "Data Privacy/Patrol Route Scrubber", "Finance/Accounts Sync",
      "Driver Refueling/Log Mobile App", "Historical Fuel Price/Hike Correlator", "SP (Motor Transport) Briefing AI", "Pump Vendor Allocation/Payment Engine",
      "Blockchain Immutable Refuel Hash", "Anti-Tamper Telematics Shield", "Mobile App for Fleet Managers", "Station-wise Fuel Efficiency Benchmarker",
      "Automated Alert for Budget Exhaustion", "Historical Fuel Expenditure Trend Analyzer", "Fleet Management/Fuel SOP Trainer", "Telematics Gateway Health Monitor",
      "Imminent Fuel Dry-Out (During Riot) Alert", "Habitual Fuel Thief/Driver Profiler", "High-Priority (Escort/QRT) Vehicle Classifier", "AI Assisted Condemnation Proposal Drafter",
      "Telematics Data Storage Forecaster", "Secure VIP Escort Route Protector", "Integration with State Petroleum Dealers", "Carbon Footprint/Green Portal Sync",
      "Election Intensive Patrolling Fuel Modeler", "Disaster Rescue Operations Fuel Coordinator", "Fuel/Petroleum Budget Tracker", "Custom Workflow for Emergency Cash Refuel",
      "AI Driven Monthly Fuel Predictor", "Predictive Need for EV/Hybrid Transition", "Custom Alert Trigger for IG Provisioning", "Vehicle Fuel/Efficiency Lifecycle Tracker"
    ]
  },
  {
    fileName: 'BuildingMaintenanceBudgetDetailed.jsx',
    compName: 'BuildingMaintenanceBudgetDetailed',
    mainTitle: 'AI BUILDING MAINTENANCE',
    subTitle: 'BUDGET',
    desc: 'Predictive Repair Costing, AMC (Annual Maintenance) Tracking, Renovation Prioritization & PWD Sync',
    experts: [
      "Predictive Repair Costing Engine AI", "AMC (Annual Maintenance) SLA Tracker", "Renovation/Repair Prioritization Scorer", "PWD (Public Works Dept) Estimation Sync",
      "Material Cost/Inflation Impact Analyzer", "Lifecycle Degradation/Depreciation Bot", "Geo-Spatial Police Estate/Condition Mapper", "Emergency Repair Fund Allocator",
      "Maintenance Budget Dashboard", "Voice-Command Estate Query Bot", "Automated Quarterly CAPEX/OPEX Report", "State Police Housing Corporation Sync",
      "Historical Contractor Cost-Overrun Detector", "Substandard Material/Early Failure AI", "Fake/Inflated Tender Estimate Identifier", "Preventive vs Reactive Cost Correlator",
      "AI Evaluator for Estate ROI", "Audit/Tender Log Generator", "Data Privacy/Blueprint Scrubber", "Finance/Accounts Sync",
      "Estate Officer Inspection Mobile App", "Historical Monsoon/Disaster Damage Correlator", "IG (Provisioning & Estate) Briefing AI", "Vendor/Contractor Task Allocator",
      "Blockchain Immutable Maintenance Hash", "Anti-Tamper Tender Shield", "Mobile App for Quick Repair Indent", "District-wise Infrastructure Health Benchmarker",
      "Automated Reminder for AMC Renewal", "Historical Maintenance Expenditure Analyzer", "Estate Management/Financial Power SOP Trainer", "Estate DB Server Health Monitor",
      "Imminent Fund Lapse (Financial Year End) Alert", "Corrupt Contractor/Cartel Profiler", "High-Priority (Armory/Server Room) Classifier", "AI Assisted Budget Enhancement Drafter",
      "Tender/Blueprint Storage Forecaster", "Secure Armory/Jail Layout Protector", "Integration with E-Tendering Portal", "Welfare/Housing Portal Sync",
      "Election Infrastructure Upgrade Modeler", "Disaster Rebuilding Cost Coordinator", "Civil Works/Maintenance Budget Tracker", "Custom Workflow for Emergency Structural Shoring",
      "AI Driven Next-Year Budget Predictor", "Predictive Need for New Construction", "Custom Alert Trigger for DGP (Estate)", "Building Financial Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'ElectricityBillAnalyticsDetailed.jsx',
    compName: 'ElectricityBillAnalyticsDetailed',
    mainTitle: 'AI ELECTRICITY BILL',
    subTitle: 'ANALYTICS',
    desc: 'Tariff Anomaly Detection, Sub-metering Insights, Power Factor Penalties & Green Energy ROI',
    experts: [
      "Tariff Anomaly/Overcharging Detector AI", "Smart Sub-metering Usage Insights Bot", "Power Factor/Maximum Demand Penalty Analyzer", "Solar/Green Energy ROI (Net Metering) Scorer",
      "Peak Hour Load/Tariff Optimizer", "Vampire Draw/Idle Power Identifier", "Geo-Spatial Station-wise Energy Mapper", "AC/Heater Seasonal Usage Correlator",
      "Electricity Bill Dashboard", "Voice-Command Power Cost Query Bot", "Automated Monthly Energy Audit Report", "State Electricity Board (DISCOM) Sync",
      "Estimated vs Actual Reading Conflict Detector", "Faulty Meter/Slow Meter Predictor", "Illegal Hooking (Katiya) / Theft Identifier", "Energy Efficiency Rating (BEE) Correlator",
      "AI Evaluator for Green Police Station", "Audit/Payment Log Generator", "Data Privacy/Occupancy Scrubber", "Finance/Accounts Sync",
      "Energy Officer/Quartermaster Mobile App", "Historical Heatwave/Cooling Cost Correlator", "SP/Estate Officer Briefing AI", "Bill Payment/Clearance Allocator",
      "Blockchain Immutable Bill/Payment Hash", "Anti-Tamper Smart Meter Shield", "Mobile App for Meter Reading Upload", "Station-wise Energy Efficiency Benchmarker",
      "Automated Alert for Disconnection Notice", "Historical Energy Expenditure Trend Analyzer", "Energy Conservation SOP Trainer", "Smart Meter/IoT Gateway Health Monitor",
      "Imminent Budget Exhaustion Alert", "Energy Wasting Unit/Barrack Profiler", "High-Consumption (Data Center/Control Room) Classifier", "AI Assisted Disputed Bill Complaint Drafter",
      "Smart Meter Telemetry Storage Forecaster", "Secure Critical Infrastructure Power Protector", "Integration with Building Management System (BMS)", "Citizen Transparency (Green Energy) Sync",
      "Election Control Room 24x7 Load Modeler", "Disaster Power-Cut/DG Fuel Cost Coordinator", "Electricity/Energy Budget Tracker", "Custom Workflow for Solar Installation Tender",
      "AI Driven Summer Tariff Predictor", "Predictive Need for Capacitor Bank (Power Factor)", "Custom Alert Trigger for Nodal Officer", "Energy Cost Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'WaterBillAnalyticsDetailed.jsx',
    compName: 'WaterBillAnalyticsDetailed',
    mainTitle: 'AI WATER BILL',
    subTitle: 'ANALYTICS',
    desc: 'Consumption vs Billing Analytics, Leakage Waste Costing, Commercial vs Residential Tariffs & Arrears Tracking',
    experts: [
      "Consumption vs Billing Discrepancy AI", "Underground Leakage Waste Costing Engine", "Commercial vs Residential Tariff Validator", "Pending Arrears/Surcharge Tracker",
      "Smart Flow-Meter/IoT Usage Insights", "Borewell vs Municipal Supply Cost Analyzer", "Geo-Spatial Water Usage/Scarcity Mapper", "Rainwater Harvesting Offset Scorer",
      "Water Bill Dashboard", "Voice-Command Utility Query Bot", "Automated Monthly Water Audit Report", "Municipal Corporation/Jal Board Sync",
      "Estimated vs Actual Reading Conflict Detector", "Faulty/Tampered Water Meter Predictor", "Unauthorized Tapping/Theft Identifier", "Per-Capita Consumption Correlator",
      "AI Evaluator for Water Conservation", "Audit/Payment Log Generator", "Data Privacy/Barrack Usage Scrubber", "Finance/Accounts Sync",
      "Quartermaster/Estate Mobile App", "Historical Summer/Drought Cost Correlator", "SP/Estate Officer Briefing AI", "Bill Payment/Clearance Allocator",
      "Blockchain Immutable Bill/Payment Hash", "Anti-Tamper Smart Meter Shield", "Mobile App for Meter Image Upload", "Station-wise Water Efficiency Benchmarker",
      "Automated Alert for Disconnection/Penalty", "Historical Water Expenditure Trend Analyzer", "Water Conservation/Plumbing SOP Trainer", "IoT Flow Sensor Gateway Monitor",
      "Imminent Budget Exhaustion/Water Cut Alert", "Water Wasting Unit/Colony Profiler", "High-Consumption (Training Academy/Lines) Classifier", "AI Assisted Disputed Bill Drafter",
      "Sensor Telemetry Storage Forecaster", "Secure Water Supply Infrastructure Protector", "Integration with Public Health Engineering Dept", "Welfare Portal Sync (for colony supply)",
      "Election Force Mobilization Usage Modeler", "Disaster Relief Camp Water Cost Coordinator", "Water Utility Budget Tracker", "Custom Workflow for STP (Sewage Treatment) Tender",
      "AI Driven Summer Usage/Cost Predictor", "Predictive Need for New Borewell/Tank", "Custom Alert Trigger for IG Provisioning", "Water Cost/Usage Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'TelephoneExpenseAnalyticsDetailed.jsx',
    compName: 'TelephoneExpenseAnalyticsDetailed',
    mainTitle: 'AI TELEPHONE EXPENSE',
    subTitle: 'ANALYTICS',
    desc: 'CUG (Closed User Group) Plan Optimization, ISD/Premium Call Alerts, Data Limit Monitoring & Vendor Billing Audits',
    experts: [
      "CUG (Closed User Group) Plan Optimizer AI", "ISD/Premium/Spam Call Cost Alert Bot", "Data Limit/Overage Monitoring Engine", "Telecom Vendor Billing Audit AI",
      "Landline vs Mobile Cost Analyzer", "Unused/Dormant SIM Card Detector", "Geo-Spatial Roaming/Tower Usage Mapper", "Personal vs Official Usage Profiler",
      "Telephone Expense Dashboard", "Voice-Command Telecom Query Bot", "Automated Monthly Telecom Audit Report", "Telecom Provider (BSNL/Jio/Airtel) API Sync",
      "Billing Anomaly/Double Charge Detector", "Plan Downgrade/Upgrade Suggester AI", "Lost/Stolen Device Usage Identifier", "Inter-District/State STD Cost Correlator",
      "AI Evaluator for Telecom ROI", "Audit/Payment Log Generator", "Data Privacy/Call Record (CDR) Scrubber", "Finance/Accounts Sync",
      "Officer Data/Plan Usage Mobile App", "Historical Election/VIP Duty Surge Correlator", "SP/Communications Officer Briefing AI", "Bill Payment/Clearance Allocator",
      "Blockchain Immutable Bill/Payment Hash", "Anti-Tamper Telecom Billing Shield", "Mobile App for SIM Request/Block", "Rank-wise Usage/Limit Benchmarker",
      "Automated Alert for Data Exhaustion", "Historical Telecom Expenditure Trend Analyzer", "Telecom/CUG Usage SOP Trainer", "Telecom API/Gateway Health Monitor",
      "Imminent Plan Cap/Disconnection Alert", "Habitual Limit Exceeder (Frivolous Use) Profiler", "High-Priority (Control Room/Helpline) Line Classifier", "AI Assisted Disputed Bill Drafter",
      "Billing Data/Analytics Storage Forecaster", "Secure Officer Contact Number Protector", "Integration with Cyber Cell/Lawful Intercept (for lost SIMs)", "Internal Directory Sync",
      "Election Special Control Room Cost Modeler", "Disaster Satellite Phone (Satphone) Cost Coordinator", "Telecom/CUG Budget Tracker", "Custom Workflow for Bulk SIM Procurement",
      "AI Driven Next-Month Cost Predictor", "Predictive Need for Broadband/Wi-Fi offload", "Custom Alert Trigger for IG Communications", "Telecom Asset/Number Lifecycle Tracker"
    ]
  },
  {
    fileName: 'InternetExpenseMonitoringDetailed.jsx',
    compName: 'InternetExpenseMonitoringDetailed',
    mainTitle: 'AI INTERNET EXPENSE',
    subTitle: 'MONITORING',
    desc: 'Broadband Leased Line (ILL) Utilization, SLA/Downtime Penalty Calculation, Bandwidth Hoarding & Cost Apportionment',
    experts: [
      "Leased Line (ILL) Bandwidth Utilization AI", "SLA/Downtime Penalty Calculator Bot", "Bandwidth Hoarding/Streaming Detection Engine", "Branch-wise Cost Apportionment Mapper",
      "Redundant/Backup Link ROI Analyzer", "Data Overuse/FUP (Fair Usage) Alert AI", "Geo-Spatial Network Node Mapper", "Unauthorized Tethering/Hotspot Identifier",
      "Internet Expense Dashboard", "Voice-Command Bandwidth Query Bot", "Automated Monthly Network Audit Report", "ISP (Internet Service Provider) NMS Sync",
      "Billing Anomaly/Hidden Charge Detector", "Speed Downgrade/Upgrade Suggester AI", "Crypto-Mining/Torrent Bandwidth Drain Predictor", "Peak vs Off-Peak Usage Correlator",
      "AI Evaluator for Network Cost-Efficiency", "Audit/Payment Log Generator", "Data Privacy/Browsing History Scrubber", "Finance/Accounts & IT Dept Sync",
      "Network Admin Dashboard Mobile App", "Historical VVIP Visit/Event Surge Correlator", "SP (Computer/IT) Briefing AI", "Bill Payment/Clearance Allocator",
      "Blockchain Immutable SLA/Uptime Hash", "Anti-Tamper Network Log Shield", "Mobile App for Downtime Reporting", "Station-wise Connectivity Cost Benchmarker",
      "Automated Alert for Sustained Outage", "Historical IT/Network Expenditure Analyzer", "Cyber Security/Bandwidth Usage SOP Trainer", "Router/Firewall SNMP Health Monitor",
      "Imminent Budget Exhaustion Alert", "Bandwidth Abuser (Non-Official) Profiler", "Critical (CCTNS/Data Center) Link Classifier", "AI Assisted Vendor Penalty Notice Drafter",
      "Network Flow/Log Storage Forecaster", "Secure IT Infrastructure Topology Protector", "Integration with State Wide Area Network (SWAN)", "Cyber Cell Threat Intel Sync",
      "Election Webcasting/CCTV Bandwidth Modeler", "Disaster Mobile Tower/VSAT Cost Coordinator", "IT/Telecom Budget Tracker", "Custom Workflow for Emergency Bandwidth Burst",
      "AI Driven Data Growth/Cost Predictor", "Predictive Need for Fiber Upgrade", "Custom Alert Trigger for IG Provisioning/IT", "Network Infrastructure Lifecycle Tracker"
    ]
  },
  {
    fileName: 'CostCenterDashboardDetailed.jsx',
    compName: 'CostCenterDashboardDetailed',
    mainTitle: 'AI COST CENTER',
    subTitle: 'DASHBOARD',
    desc: 'Station-wise Expenditure Profiling, Budget vs Actuals, Surrender of Unused Funds & Fraud Anomalies',
    experts: [
      "Station-wise (Cost Center) Expenditure Profiler", "Budget vs Actuals (BvA) Variance Engine", "Unused Funds/Surrender (March-Rush) Predictor", "Financial Fraud/Anomaly Detection AI",
      "Head-of-Account (HoA) Misclassification Detector", "Fund Reappropriation/Diversion Suggester", "Geo-Spatial District Financial Health Mapper", "Inflation/Market Rate Adjuster Bot",
      "Cost Center Executive Dashboard", "Voice-Command Budget Query Bot", "Automated Monthly Financial Health Report", "State Treasury/IFMS (Integrated Financial Mgmt System) Sync",
      "Vendor Monopoly/Cartelization Detector", "Duplicate Invoice/Payment Predictor", "End-of-Year Panic Buying Identifier", "Cost per Constable/Station ROI Analyzer",
      "AI Evaluator for Fiscal Discipline", "Audit/Voucher Log Generator", "Data Privacy/Sensitive Procurement Scrubber", "Finance/Accounts & Audit Dept Sync",
      "DDO (Drawing & Disbursing Officer) Mobile App", "Historical Budget Cut/Allocation Correlator", "DGP/ADG Finance Briefing AI", "Fund Distribution/Allotment Engine",
      "Blockchain Immutable Financial Ledger Hash", "Anti-Tamper Audit Trail Shield", "Mobile App for Expenditure Approval", "Inter-District Fiscal Efficiency Benchmarker",
      "Automated Alert for 80%+ Budget Exhaustion", "Historical Trend & Predictive Budgeting Analyzer", "Financial Code/Treasury Rules SOP Trainer", "Financial DB Server Health Monitor",
      "Imminent Fund Lapse/Surrender Alert", "Habitual Defaulter/Rule Breaker Profiler", "High-Priority (Intelligence/Ops) Secret Fund Classifier", "AI Assisted Supplementary Demand Drafter",
      "Financial Data Archive Storage Forecaster", "Secure Secret/Covert Fund Protector", "Integration with Accountant General (AG) Audit", "Public Transparency Portal Sync (for non-classified data)",
      "Election Security Expenditure Modeler", "Disaster Emergency Relief Fund Coordinator", "Master Departmental Budget Tracker", "Custom Workflow for CAG (Comptroller & Auditor General) Audit Reply",
      "AI Driven Next Fiscal Requirement Predictor", "Predictive Need for Financial Restructuring", "Custom Alert Trigger for Principal Secretary Finance", "Financial Year Lifecycle & Audit Timeline"
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

console.log('All 10 Police Finance Modules files generated successfully.');
