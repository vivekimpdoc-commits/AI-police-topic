const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'EquipmentCalibrationRegisterDetailed.jsx',
    compName: 'EquipmentCalibrationRegisterDetailed',
    mainTitle: 'AI EQUIPMENT CALIBRATION',
    subTitle: 'REGISTER',
    desc: 'Automated calibration schedules, drift analysis, digital signatures & compliance tracking for forensic instruments',
    experts: [
      "Instrument Drift Predictor AI", "Automated Calibration Scheduler", "Digital Signature/Log Authenticator", "NABL Compliance Checker",
      "Spectrometer/Chromatograph Health Scorer", "Vendor/Service AMC Tracker", "Geo-Spatial Lab Instrument Mapper", "Measurement Uncertainty Calculator AI",
      "Equipment Calibration Dashboard", "Voice-Command Instrument Query Bot", "Automated Monthly Calibration Audit Report", "Forensic Science Lab (FSL) Sync",
      "Calibration Expiry/Overdue Alert", "Fake/Forged Calibration Certificate Detector", "Instrument Down-Time/Failure Predictor", "Historical Accuracy/Variance Analyzer",
      "AI Evaluator for Instrument Reliability Index", "Audit/Calibration Log Generator", "Data Privacy/Test Record Scrubber", "Quality Council of India (QCI) Sync",
      "Lab Technician/Analyst Mobile App", "Historical Erroneous Result Correlator", "FSL Director Briefing AI", "Calibration/Service Task Allocator",
      "Blockchain Immutable Calibration Hash", "Anti-Tamper Instrument Log Shield", "Mobile App for Quick QR Code Log View", "Instrument-wise ROI/Lifespan Benchmarker",
      "Automated Alert for Critical Instrument Drift", "Historical Maintenance/Calibration Cost Analyzer", "Lab Instrument Handling SOP Trainer", "IoT/Instrument API Health Monitor",
      "Imminent Court Evidence Rejection (Due to Uncalibrated Gear) Alert", "Habitual Negligent Technician Profiler", "High-Priority (DNA/Toxicology) Instrument Classifier", "AI Assisted Service/Replacement Indent Drafter",
      "Instrument Lifespan/Depreciation Forecaster", "Secure Calibration Record Protector", "Integration with E-Courts (Evidence Validation)", "State Procurement Portal Sync",
      "Election Forensic (EVM Tampering) Gear Readiness Modeler", "Disaster (Chemical Leak) Analyzer Readiness Coordinator", "Lab Equipment Maintenance Budget Tracker", "Custom Workflow for Breathalyzers/Speed Guns",
      "AI Driven Next Service Date Predictor", "Predictive Need for Complete Instrument Replacement", "Custom Alert Trigger for IG Forensics", "Drift Detection to Recalibration Timeline"
    ]
  },
  {
    fileName: 'SampleDispatchTrackingDetailed.jsx',
    compName: 'SampleDispatchTrackingDetailed',
    mainTitle: 'AI SAMPLE DISPATCH',
    subTitle: 'TRACKING',
    desc: 'Secure chain of custody, GPS tagged transit, tamper-evident seal monitoring & automated FSL receipt generation',
    experts: [
      "Secure Chain of Custody (CoC) Validator AI", "GPS/Transit Route Tracker", "Tamper-Evident Seal/Photo Analyzer", "Automated FSL Receipt/Acknowledgement Generator",
      "Temperature/Cold-Chain Integrity Monitor", "Courier/Malkhana Delay Predictor", "Geo-Spatial Sample Movement Mapper", "Cross-Contamination Risk Scorer",
      "Sample Dispatch Tracking Dashboard", "Voice-Command Sample Query Bot", "Automated Weekly Transit Audit Report", "State Malkhana (Evidence Room) Sync",
      "Transit Delay/Route Deviation Alert", "Seal Tampering/Replacement Detector", "Cold-Chain Failure (DNA/Blood) Predictor", "Missing/Misplaced Sample Flagging AI",
      "AI Evaluator for CoC Integrity Index", "Audit/Transit Log Generator", "Data Privacy/Victim Identity Scrubber", "Investigating Officer (IO) App Sync",
      "Malkhana In-Charge/Courier Mobile App", "Historical Tampering/Acquittal Correlator", "SP (Crime) Briefing AI", "Dispatch/Courier Re-Routing Allocator",
      "Blockchain Immutable CoC Hash", "Anti-Tamper Transit Log Shield", "Mobile App for Geo-Tagged Handover", "District-wise Dispatch Speed Benchmarker",
      "Automated Alert for Compromised/Tampered Sample", "Historical Courier/Transport Cost Analyzer", "Evidence Packaging/Dispatch SOP Trainer", "IoT (Temperature/GPS) Sensor API Monitor",
      "Imminent Evidence Spoliation/Loss Alert", "Careless Courier/Malkhana Officer Profiler", "High-Stakes (Murder/Rape) Sample Classifier", "AI Assisted Show-Cause Notice Drafter (for Delay)",
      "Transit Bottleneck/Delay Forecaster", "Secure Evidence Details Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "Prosecution Directorate Sync",
      "Election Violence Evidence Dispatch Modeler", "Disaster Victim ID (DNA) Sample Coordinator", "Evidence Transport/Logistics Budget Tracker", "Custom Workflow for Cyber/Digital Evidence Transit",
      "AI Driven Estimated Time of Arrival (ETA) Predictor", "Predictive Need for Specialized Transport (Cold Storage)", "Custom Alert Trigger for FSL Director", "Seizure at Scene to FSL Receipt Timeline"
    ]
  },
  {
    fileName: 'LaboratoryCapacityDashboardDetailed.jsx',
    compName: 'LaboratoryCapacityDashboardDetailed',
    mainTitle: 'AI LABORATORY CAPACITY',
    subTitle: 'DASHBOARD',
    desc: 'Workload balancing, backlog prediction, automated test prioritization & resource (reagents/staff) constraint modeling',
    experts: [
      "Workload Balancing/Routing Algorithm", "Backlog/Pendency Predictor AI", "Automated Case/Test Prioritization Engine", "Reagent/Staff Constraint Modeler",
      "Turnaround Time (TAT) vs Capacity Analyzer", "Inter-Division (DNA/Cyber/Tox) Load Balancer", "Geo-Spatial Regional FSL Load Mapper", "Urgent/Court-Mandated Rush Order Manager",
      "Laboratory Capacity Dashboard", "Voice-Command Pendency Query Bot", "Automated Monthly Backlog Audit Report", "State Police Headquarters (PHQ) Sync",
      "Imminent Division Chokepoint/Collapse Predictor", "Reagent/Consumable Exhaustion Alert", "Expert/Analyst Burnout/Fatigue Scorer", "Unbalanced Distribution (Regional FSL) Flagging AI",
      "AI Evaluator for Lab Efficiency Index", "Audit/Workload Log Generator", "Data Privacy/Case Detail Scrubber", "Directorate of Prosecution Sync",
      "FSL Division Head/Analyst App", "Historical Backlog-to-Acquittal Correlator", "FSL Director/ADG Briefing AI", "Case Re-Assignment/Routing Allocator",
      "Blockchain Immutable Pendency Hash", "Anti-Tamper Workload Report Shield", "Mobile App for Quick Status Update", "Division-wise Efficiency/Output Benchmarker",
      "Automated Alert for Over 1-Year Pending Cases", "Historical Overtime/Reagent Cost Analyzer", "Workload Management/Triage SOP Trainer", "LIMS (Laboratory Information Management System) API Monitor",
      "Imminent Court Contempt (Due to Delay) Alert", "Low-Output/Slow Analyst Profiler", "High-Priority (Fast-Track Court) Case Classifier", "AI Assisted Resource Augmentation Proposal Drafter",
      "Pendency/Backlog Clearance Forecaster", "Secure Case Priority List Protector", "Integration with E-Courts (Next Hearing Date)", "HRMS/Leave Portal Sync (for Analysts)",
      "Election (Ballot/EVM) Fast-Track Testing Modeler", "Disaster (Mass Casualty) Rapid ID Coordinator", "Laboratory Consumables/Overtime Budget Tracker", "Custom Workflow for High-Profile/CBI Cases",
      "AI Driven TAT (Turnaround Time) Predictor", "Predictive Need for Outsourcing to Private Labs", "Custom Alert Trigger for Home Secretary", "Sample Receipt to Report Dispatch Timeline"
    ]
  },
  {
    fileName: 'InstrumentMaintenancePlannerDetailed.jsx',
    compName: 'InstrumentMaintenancePlannerDetailed',
    mainTitle: 'AI INSTRUMENT MAINTENANCE',
    subTitle: 'PLANNER',
    desc: 'Predictive failure alerts, AMC (Annual Maintenance Contract) lifecycle tracking, spare parts inventory & vendor SLA auditing',
    experts: [
      "Predictive Failure/Wear & Tear AI", "AMC Lifecycle/Renewal Tracker Bot", "Spare Parts Inventory Forecasting Engine", "Vendor SLA (Service Level Agreement) Auditor",
      "Root Cause Analysis (RCA) for Frequent Breakdowns", "Downtime/Lost Productivity Cost Calculator", "Geo-Spatial Vendor Response-Time Mapper", "Preventive vs Reactive Maintenance Optimizer",
      "Maintenance Planner Dashboard", "Voice-Command Maintenance Query Bot", "Automated Monthly AMC Audit Report", "State Procurement/Finance Department Sync",
      "Imminent Critical Instrument Failure Predictor", "Vendor SLA Violation/Delay Alert", "Spare Part Shortage/Stock-out Flagging AI", "Obsolete/End-of-Life (EoL) Equipment Predictor",
      "AI Evaluator for Instrument Uptime Index", "Audit/Maintenance Log Generator", "Data Privacy/Vendor Contract Scrubber", "Laboratory Information Management System (LIMS) Sync",
      "Lab Manager/Technician Mobile App", "Historical Breakdown-to-Backlog Correlator", "FSL Director (Administration) Briefing AI", "Repair/Service Ticket Allocator",
      "Blockchain Immutable Maintenance Log Hash", "Anti-Tamper AMC/SLA Shield", "Mobile App for Immediate Fault Reporting", "Instrument Make/Model Reliability Benchmarker",
      "Automated Alert for Expiring AMC/Warranties", "Historical Repair/Spare Parts Cost Analyzer", "Preventive Maintenance SOP Trainer", "IoT/Diagnostic API Health Monitor",
      "Imminent Total Lab Shutdown (Due to Key Server/HVAC Failure) Alert", "Habitual Defective Vendor Profiler", "Mission-Critical (DNA Sequencer) Instrument Classifier", "AI Assisted Penalty/Show-Cause Notice Drafter (for Vendors)",
      "Instrument Replacement/Modernization Forecaster", "Secure AMC Pricing/Contract Protector", "Integration with Government e-Marketplace (GeM)", "Cyber Security/Firmware Update Sync",
      "Election Evidentiary Backlog Risk (Due to Breakdown) Modeler", "Disaster Relief (Mobile FSL) Maintenance Coordinator", "Equipment Maintenance & Repair Budget Tracker", "Custom Workflow for Imported/Proprietary Instruments",
      "AI Driven Next Breakdown Date Predictor", "Predictive Need for AMC Upgrade", "Custom Alert Trigger for ADG Forensics", "Fault Detection to Vendor Resolution Timeline"
    ]
  },
  {
    fileName: 'LabQualityAssuranceDetailed.jsx',
    compName: 'LabQualityAssuranceDetailed',
    mainTitle: 'AI LAB QUALITY',
    subTitle: 'ASSURANCE',
    desc: 'Proficiency testing tracking, blind sample generation, standard operating procedure (SOP) compliance & internal audit automation',
    experts: [
      "Proficiency Testing/Z-Score Analyzer AI", "Automated Blind/Dummy Sample Generator", "SOP Compliance/Deviation Tracker", "Internal Audit/NABL Readiness Automation Engine",
      "Analyst Competency/Error-Rate Profiler", "Cross-Contamination Root Cause Analysis (RCA)", "Geo-Spatial Quality Metrics Heatmapper", "Document Control/Version History Manager",
      "Quality Assurance (QA) Dashboard", "Voice-Command QA Query Bot", "Automated Quarterly Internal Audit Report", "National Accreditation Board for Testing and Calibration Laboratories (NABL) Sync",
      "Systemic Error/Bias Predictor", "SOP Violation/Shortcut Alert", "Proficiency Test Failure Flagging AI", "Outdated/Unapproved Method Usage Detector",
      "AI Evaluator for Lab Quality/Reliability Index", "Audit/QA Log Generator", "Data Privacy/Analyst Performance Scrubber", "Directorate of Forensic Science Services (DFSS) Sync",
      "Quality Manager/Internal Auditor Mobile App", "Historical Quality-Lapse/Court-Rejection Correlator", "FSL Director (Quality) Briefing AI", "Corrective & Preventive Action (CAPA) Task Allocator",
      "Blockchain Immutable QA/Audit Hash", "Anti-Tamper Test Record Shield", "Mobile App for Spot SOP Reference", "Division-wise Quality/Error-Rate Benchmarker",
      "Automated Alert for Critical Quality Failure (CAPA Required)", "Historical Re-testing/Wastage Cost Analyzer", "ISO/IEC 17025 Standard SOP Trainer", "LIMS/QA Module API Health Monitor",
      "Imminent Accreditation Suspension/Revocation Alert", "High-Error-Rate/Careless Analyst Profiler", "High-Stakes (DNA/Digital) Division QA Classifier", "AI Assisted Corrective Action (CAPA) Report Drafter",
      "Quality Improvement/Trend Forecaster", "Secure QA/Internal Audit File Protector", "Integration with E-Courts (Evidence Reliability)", "HRMS/Training Needs Assessment Sync",
      "Election Forensic Evidence Integrity Modeler", "Disaster Victim ID (DNA) QA Coordinator", "Quality Control/Proficiency Testing Budget Tracker", "Custom Workflow for New Testing Method Validation",
      "AI Driven Next Internal Audit Requirement Predictor", "Predictive Need for Analyst Retraining", "Custom Alert Trigger for FSL Director", "Error Detection to CAPA Implementation Timeline"
    ]
  },
  {
    fileName: 'ChemicalInventoryDetailed.jsx',
    compName: 'ChemicalInventoryDetailed',
    mainTitle: 'AI CHEMICAL',
    subTitle: 'INVENTORY',
    desc: 'Reagent expiry prediction, hazardous material safety compliance, automated procurement triggers & usage anomaly detection',
    experts: [
      "Reagent/Chemical Expiry Predictor AI", "Hazardous Material/MSDS Compliance Checker", "Automated Procurement/Indent Trigger Engine", "Usage Anomaly/Pilferage Detector",
      "Storage Condition (Temp/Humidity) Monitor", "Batch/Lot Traceability Linker", "Geo-Spatial Lab Inventory Layout Mapper", "First-In-First-Out (FIFO) Optimization Bot",
      "Chemical Inventory Dashboard", "Voice-Command Stock Query Bot", "Automated Monthly Consumption/Expiry Report", "State Procurement/Store Department Sync",
      "Imminent Stock-out (Critical Reagent) Predictor", "Chemical Degradation/Spoilage Alert", "Suspicious/Excessive Usage (Pilferage) Flagging AI", "Incompatible Chemical Storage/Fire Hazard Detector",
      "AI Evaluator for Inventory Optimization Index", "Audit/Consumption Log Generator", "Data Privacy/Vendor Pricing Scrubber", "Fire & Safety Department Sync",
      "Storekeeper/Lab Analyst Mobile App", "Historical Expiry/Wastage Cost Correlator", "FSL Director (Stores) Briefing AI", "Re-order/Disposal Task Allocator",
      "Blockchain Immutable Inventory/Lot Hash", "Anti-Tamper Stock Register Shield", "Mobile App for Barcode/QR Scanning", "Division-wise Chemical Wastage Benchmarker",
      "Automated Alert for Expired/Degraded Reagents", "Historical Chemical Procurement/Disposal Cost Analyzer", "Hazardous Chemical Handling/Disposal SOP Trainer", "IoT (Storage Temp)/Barcode API Monitor",
      "Imminent Lab Fire/Toxicity (Due to Bad Storage) Alert", "Habitual Hoarder/Waster Analyst Profiler", "High-Risk (Explosive/Toxic) Chemical Classifier", "AI Assisted Hazardous Waste Disposal Manifest Drafter",
      "Reagent Consumption/Demand Forecaster", "Secure Precursor Chemical/Narcotics Standard Protector", "Integration with Government e-Marketplace (GeM)", "Pollution Control Board Sync",
      "Election Mass-Testing Reagent Demand Modeler", "Disaster (Chemical Spill) Antidote/Reagent Coordinator", "Lab Consumables/Chemicals Budget Tracker", "Custom Workflow for NDPS/Narcotics Standards",
      "AI Driven Next Quarter Indent Predictor", "Predictive Need for Safe Disposal Action", "Custom Alert Trigger for Lab Admin", "Low-Stock Detection to Replenishment Timeline"
    ]
  },
  {
    fileName: 'TestRequestWorkflowDetailed.jsx',
    compName: 'TestRequestWorkflowDetailed',
    mainTitle: 'AI TEST REQUEST',
    subTitle: 'WORKFLOW',
    desc: 'Intelligent routing to divisions, automated parameter selection, duplicate request flagging & investigating officer (IO) portal integration',
    experts: [
      "Intelligent Division Routing AI", "Automated Test Parameter/Methodology Selector", "Duplicate/Redundant Request Flagging Engine", "Investigating Officer (IO) Portal Integrator",
      "Evidence Adequacy/Quantity Checker NLP", "Rush/Fast-Track Court Order Prioritizer", "Geo-Spatial Origin/Police Station Mapper", "Case Context/FIR Summary Extractor AI",
      "Test Request Workflow Dashboard", "Voice-Command Request Status Bot", "Automated Daily Inward/Outward Request Report", "CCTNS/Core Policing Application Sync",
      "Inadequate Sample/Improper Seizure Predictor", "Unnecessary/Fishing-Expedition Test Request Alert", "Contradictory/Conflicting Test Parameter Analyzer", "Delay in Handover/Transit Red-Flagger",
      "AI Evaluator for Request Triage Efficiency", "Audit/Routing Log Generator", "Data Privacy/Victim PII Scrubber", "Prosecution/Legal Department Sync",
      "Investigating Officer (IO)/Malkhana Mobile App", "Historical Rejection/Clarification Request Correlator", "FSL Director (Inward) Briefing AI", "Sample Sorting/Routing Task Allocator",
      "Blockchain Immutable Request/Receipt Hash", "Anti-Tamper Triage Log Shield", "Mobile App for Real-Time Status Tracking (for IOs)", "Police Station-wise Rejection Rate Benchmarker",
      "Automated Alert for Rejected/Inadequate Samples", "Historical Testing/Consumable Cost Analyzer (Per Case)", "Evidence Collection/Test Request SOP Trainer", "LIMS/CCTNS API Health Monitor",
      "Imminent Case Collapse (Due to Wrong Test Requested) Alert", "Habitual Poor-Requester (IO) Profiler", "High-Priority (Murder/POCSO) Request Classifier", "AI Assisted Clarification/Rejection Memo Drafter",
      "Testing Workload/Influx Forecaster", "Secure Case Information/FIR Protector", "Integration with E-Courts (Next Hearing Date Sync)", "State Crime Records Bureau (SCRB) Sync",
      "Election Violence/Liquor Mass Request Modeler", "Disaster Victim DNA Request Coordinator", "Digital Workflow/LIMS License Budget Tracker", "Custom Workflow for Cyber/Digital Forensics Requests",
      "AI Driven Estimated Turnaround Time (TAT) Predictor", "Predictive Need for IO Refresher Training (on Evidence Collection)", "Custom Alert Trigger for SP Crime", "Request Submission to Division Allocation Timeline"
    ]
  },
  {
    fileName: 'SampleStorageMonitoringDetailed.jsx',
    compName: 'SampleStorageMonitoringDetailed',
    mainTitle: 'AI SAMPLE STORAGE',
    subTitle: 'MONITORING',
    desc: 'IoT cold-chain tracking, shelf-life prediction, automated disposal alerts for completed cases & chain of custody mapping',
    experts: [
      "IoT Cold-Chain/Temperature Tracker AI", "Biological Sample Shelf-Life Predictor", "Automated Case-Completed Disposal Alert Engine", "Internal Chain of Custody (CoC) Mapper",
      "Storage Capacity/Space Optimization Bot", "Cross-Contamination/Leakage Risk Scorer", "Geo-Spatial Malkhana/Cold-Room Layout Mapper", "Power Failure/Backup Generator Transition Analyzer",
      "Sample Storage Dashboard", "Voice-Command Storage Query Bot", "Automated Monthly Storage/Disposal Audit Report", "State Malkhana/Evidence Management Sync",
      "Imminent Cold-Chain Failure Predictor", "Sample Degradation/Spoilage Alert", "Unauthorized Access/Handling Flagging AI", "Overcrowding/Mishandling Predictor",
      "AI Evaluator for Sample Preservation Index", "Audit/Storage Access Log Generator", "Data Privacy/Case Detail Scrubber", "Fire & Emergency Services Sync",
      "Storage In-charge/Technician Mobile App", "Historical Spoliation/Acquittal Correlator", "FSL Director (Operations) Briefing AI", "Relocation/Disposal Task Allocator",
      "Blockchain Immutable CoC/Storage Hash", "Anti-Tamper Temp/Access Log Shield", "Mobile App for Barcode/RFID Tracking", "Division-wise Storage Discipline Benchmarker",
      "Automated Alert for Critical Temperature Deviation", "Historical Cold-Storage/Electricity Cost Analyzer", "Evidence Preservation/Storage SOP Trainer", "IoT Sensor (Temp/Humidity/RFID) API Monitor",
      "Imminent Evidence Loss (Due to Freezer Breakdown) Alert", "Careless Handler/Technician Profiler", "High-Sensitivity (DNA/Viscera) Sample Classifier", "AI Assisted Court Order (for Disposal) Drafter",
      "Storage Space Exhaustion/Expansion Forecaster", "Secure Physical Access (Biometric) Protector", "Integration with E-Courts (Case Disposal Status)", "Public Works Department (Electrical) Sync",
      "Election EVM/Ballot Box Secure Storage Modeler", "Disaster (Flood/Fire in Lab) Relocation Coordinator", "Cold-Storage Maintenance/Expansion Budget Tracker", "Custom Workflow for Explosives/Narcotics Storage",
      "AI Driven Next Disposal/Purge Date Predictor", "Predictive Need for New Cold-Room Setup", "Custom Alert Trigger for IG Forensics", "Temperature Deviation to Backup Action Timeline"
    ]
  },
  {
    fileName: 'ReportTurnaroundAnalyticsDetailed.jsx',
    compName: 'ReportTurnaroundAnalyticsDetailed',
    mainTitle: 'AI REPORT TURNAROUND',
    subTitle: 'ANALYTICS',
    desc: 'Pendency bottleneck identification, analyst efficiency scoring, fast-track court prioritization & predictive delay modeling',
    experts: [
      "Pendency/Bottleneck Identification AI", "Analyst Efficiency/Throughput Scorer", "Fast-Track Court Prioritization Engine", "Predictive Delay/Overdue Modeler",
      "Case Complexity vs Time-Taken Analyzer", "Inter-Division Dependency/Delay Mapper", "Geo-Spatial Regional FSL TAT (Turnaround Time) Mapper", "Automated Report Drafting/Template Assistant",
      "Turnaround Analytics Dashboard", "Voice-Command Pendency Query Bot", "Automated Monthly TAT/Efficiency Report", "Directorate of Prosecution Sync",
      "Imminent Court Deadline/Contempt Predictor", "Systemic Delay/Inefficiency Alert", "Analyst Burnout/Overwork Flagging AI", "Equipment Breakdown Impact/Delay Estimator",
      "AI Evaluator for Lab Agility Index", "Audit/Workflow Log Generator", "Data Privacy/Officer Appraisal Scrubber", "HRMS/Performance Review Sync",
      "FSL Director/Division Head Mobile App", "Historical Delay-to-Acquittal/Bail Correlator", "Home Secretary/DGP Briefing AI", "Workload Re-balancing/Re-assignment Allocator",
      "Blockchain Immutable TAT/Timestamp Hash", "Anti-Tamper Performance Report Shield", "Mobile App for Quick Pendency Overview", "Analyst-to-Analyst Efficiency Benchmarker",
      "Automated Alert for Approaching Statutory Deadline (e.g., POCSO/NDPS)", "Historical Overtime/Incentive Cost Analyzer", "Time Management/Workflow Optimization SOP Trainer", "LIMS/Reporting API Health Monitor",
      "Imminent Mass Bail (Due to Missing FSL Report) Alert", "Chronically Slow/Inefficient Analyst Profiler", "High-Priority (Heinous Crime/Media Highlighted) Classifier", "AI Assisted Delay Explanation/Affidavit Drafter",
      "Future Workload/TAT Trend Forecaster", "Secure Performance Appraisal Protector", "Integration with E-Courts/ICJS", "State Crime Records Bureau (SCRB) Sync",
      "Election Fast-Track Case TAT Modeler", "Disaster Mass-Casualty DNA Report Expeditor", "Performance Incentive/Overtime Budget Tracker", "Custom Workflow for Inter-State/CBI Cases",
      "AI Driven Estimated Dispatch Date Predictor", "Predictive Need for Staff Augmentation", "Custom Alert Trigger for Home Minister", "Case Assignment to Final Report Dispatch Timeline"
    ]
  },
  {
    fileName: 'AccreditationComplianceDetailed.jsx',
    compName: 'AccreditationComplianceDetailed',
    mainTitle: 'AI ACCREDITATION',
    subTitle: 'COMPLIANCE',
    desc: 'ISO/IEC 17025 tracking, NABL audit readiness scoring, document version control & automated corrective action (CAPA) tracking',
    experts: [
      "ISO/IEC 17025 Compliance Tracker AI", "NABL Audit Readiness/Mock Audit Scorer", "Document Version Control/Change Management Bot", "Automated Corrective & Preventive Action (CAPA) Tracker",
      "Staff Training/Competency Matrix Validator", "Management Review Meeting (MRM) Minute Analyzer", "Geo-Spatial Multi-Lab Compliance Mapper", "Uncertainty of Measurement (MU) Validation AI",
      "Accreditation Compliance Dashboard", "Voice-Command Compliance Query Bot", "Automated Monthly NABL Readiness Report", "National Accreditation Board (NABL/QCI) Sync",
      "Accreditation Suspension/Non-Conformance Predictor", "SOP Deviation/Violation Alert", "Overdue Calibration/Internal Audit Flagging AI", "Unresolved CAPA/Root Cause Analysis Delay Analyzer",
      "AI Evaluator for Global Standard Compliance Index", "Audit/Compliance Log Generator", "Data Privacy/Audit Finding Scrubber", "Directorate of Forensic Science Services (DFSS) Sync",
      "Quality Manager/FSL Director Mobile App", "Historical Non-Conformance (NC) Correlator", "Home Department (Forensics) Briefing AI", "CAPA/Compliance Task Allocator",
      "Blockchain Immutable Compliance/SOP Hash", "Anti-Tamper Audit Trail Shield", "Mobile App for Spot Audit/Checklist", "Regional Lab-to-Lab Compliance Benchmarker",
      "Automated Alert for Critical ISO Non-Conformance", "Historical Accreditation/Audit Cost Analyzer", "Quality Management System (QMS) SOP Trainer", "Document Control/QMS API Health Monitor",
      "Imminent NABL De-recognition/Suspension Alert", "Habitual Compliance Violator Profiler", "Mandatory/Statutory Compliance Classifier", "AI Assisted NABL Application/Renewal Drafter",
      "Compliance/Quality Maturity Forecaster", "Secure Audit Finding/Vulnerability Protector", "Integration with International Forensic Standards", "State Quality Control Board Sync",
      "Election Forensic Evidence Admissibility (Due to Accreditation) Modeler", "Disaster Mobile-FSL Rapid Accreditation Coordinator", "Quality Assurance/Accreditation Budget Tracker", "Custom Workflow for New Discipline Scope Extension",
      "AI Driven Next Surveillance Audit Readiness Predictor", "Predictive Need for External Quality Consultant", "Custom Alert Trigger for DGP/Home Secretary", "Non-Conformance Identification to CAPA Closure Timeline"
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

console.log('All 10 Police Laboratories Modules files generated successfully.');
