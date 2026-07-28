const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'WarrantManagementDetailed.jsx',
    compName: 'WarrantManagementDetailed',
    mainTitle: 'AI WARRANT',
    subTitle: 'MANAGEMENT',
    desc: 'Automated Warrant Generation, GPS Tracking for Execution, Priority Scoring & Age Analysis',
    experts: [
      "Warrant Priority/Severity Scorer AI", "Fugitive/Absconder Geo-Locator Bot", "Pending Warrant Age Analyzer", "Statutory Expiry/Recall Tracker",
      "Warrant Execution Resource Allocator", "Bail Jumper Cross-District Matcher", "CCTNS/Court Sync Engine", "Unexecuted Warrant Alert Bot",
      "Warrant Command Dashboard", "Voice-Command Warrant Query Bot", "Automated Daily Execution Roster", "Inter-Station Sync Bot",
      "Geo-Spatial Fugitive Hotspot Mapper", "Facial Recognition Warrant Matcher", "Fake ID/Alias Predictor AI", "Surrender/Arrest Probability Scorer",
      "AI Evaluator for IO Performance", "Audit/Warrant Access Log Gen", "Data Privacy/Juvenile Scrubber", "Directorate of Prosecution Sync",
      "Field IO Warrant Execution App", "Historical Absconder Pattern Matcher", "SHO/Supervisory Officer Briefing AI", "Tactical Raid Resource Allocator",
      "Blockchain Immutable Warrant Hash", "Anti-Tamper Record Shield", "Mobile App for Quick Arrest Updates", "Jurisdiction Polygon Matcher",
      "Multi-Lingual Warrant Translator", "Historical Execution Rate Analyzer", "Warrant Procedure SOP Trainer", "Warrant Server Health Monitor",
      "Imminent Statutory Deadline Alert", "Organized Crime Absconder Profiler", "High-Profile Fugitive Classifier", "AI Assisted Raid Plan Drafter",
      "Document Storage Forecaster", "Secure Informant Link Protector", "Integration with Prisons/Jail DB", "Citizen Most-Wanted Portal Sync",
      "Inter-State Warrant Coordination Modeler", "Disaster Disrupted Execution Tracker", "Warrant Ops Budget Tracker", "Custom Workflow for NBW Cancellation",
      "AI Driven Execution Delay Predictor", "Predictive Need for Special Task Force", "Custom Alert Trigger for SP/SSP", "Warrant Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'SummonsManagementDetailed.jsx',
    compName: 'SummonsManagementDetailed',
    mainTitle: 'AI SUMMONS',
    subTitle: 'MANAGEMENT',
    desc: 'Electronic Delivery Proof, Service Optimization Routes, Bulk Generation & Witness Attendance Analytics',
    experts: [
      "Bulk Summons Generation/Formatting AI", "Delivery Route/Process Server Optimizer", "Electronic Service (Email/WhatsApp) Tracker", "Statutory Deadline/Validity Alert Bot",
      "Witness/Accused Attendance Predictor", "Non-Service Reason/Excuse Analyzer", "CCTNS/E-Courts API Sync Engine", "Pending Summons Backlog Tracker",
      "Summons Command Dashboard", "Voice-Command Summons Status Bot", "Automated Daily Service Roster", "Inter-District/State Sync Bot",
      "Geo-Spatial Non-Service Hotspot Mapper", "Address Verification/Correction AI", "Fake Address/Absconder Detector", "Digital Signature/Acknowledgment Verifier",
      "AI Evaluator for Process Server Efficiency", "Audit/Service Log Generator", "Data Privacy/Witness Detail Scrubber", "Directorate of Prosecution Sync",
      "Field Process Server Mobile App", "Historical Evasion Pattern Matcher", "SHO/Supervisory Officer Briefing", "Process Server Resource Allocator",
      "Blockchain Immutable Delivery Hash", "Anti-Tamper Acknowledgment Shield", "Mobile App for E-Summons Delivery", "Jurisdiction Polygon Matcher",
      "Multi-Lingual Summons Translator", "Historical Service Rate Analyzer", "Summons Service SOP Trainer", "Summons DB Server Health Monitor",
      "Imminent Limitation Period Alert", "Syndicate Witness Intimidation Profiler", "High-Profile VIP Witness Classifier", "AI Assisted Substituted Service Drafter",
      "Document Digitization Storage Forecaster", "Secure Protected Witness Protector", "Integration with Postal/Telecom APIs", "Citizen Summons Status Portal Sync",
      "Mass Trial/Riot Case Summons Modeler", "Disaster Disrupted Service Tracker", "Service/Travel Allowance Budget Tracker", "Custom Workflow for Bailable Warrants",
      "AI Driven Service Delay Predictor", "Predictive Need for Police Escort", "Custom Alert Trigger for Nodal Officers", "Summons Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'NoticeManagementDetailed.jsx',
    compName: 'NoticeManagementDetailed',
    mainTitle: 'AI NOTICE',
    subTitle: 'MANAGEMENT',
    desc: 'Section 41A/160 CrPC Notice Generation, Compliance Tracking, Legal Text Vetting & Audit Logging',
    experts: [
      "Section 41A/160 Notice Generator AI", "Legal Text/Format Vetting Engine", "Notice Compliance/Appearance Tracker", "Statutory Validity/Expiry Alert Bot",
      "Suspect/Witness Flight Risk Predictor", "Non-Compliance Escalation Analyzer", "CCTNS Notice Registry Sync", "Pending Notice Backlog Tracker",
      "Notice Command Dashboard", "Voice-Command Notice Status Bot", "Automated Daily Notice Roster", "Inter-Station Jurisdiction Sync Bot",
      "Geo-Spatial Suspect Movement Mapper", "Email/WhatsApp Delivery Receipt Tracker", "Fake Identity/Proxy Appearance Detector", "Digital Acknowledgment Verifier",
      "AI Evaluator for IO Notice Compliance", "Audit/Notice Access Log Gen", "Data Privacy/Informant Name Scrubber", "State Legal Dept Sync",
      "Field IO Notice Delivery App", "Historical Evasion Pattern Matcher", "SHO/Supervisory Officer Briefing", "Notice Server Resource Allocator",
      "Blockchain Immutable Notice Hash", "Anti-Tamper Record Shield", "Mobile App for Quick Compliance Updates", "Jurisdiction Polygon Matcher",
      "Multi-Lingual Notice Translator", "Historical Compliance Rate Analyzer", "Notice Procedure SOP Trainer", "Notice DB Server Health Monitor",
      "Imminent Expiry/Arrest Deadline Alert", "Syndicate Evasion Profiler", "High-Profile Notice Classifier", "AI Assisted Arrest Memo Drafter",
      "Document Storage Forecaster", "Secure Whistleblower Notice Protector", "Integration with Cyber Cell Tracking", "Citizen Notice Status Portal Sync",
      "Mass Agitation/Protest Notice Modeler", "Disaster Disrupted Compliance Tracker", "Notice Service Budget Tracker", "Custom Workflow for Notice Escalation",
      "AI Driven Non-Appearance Predictor", "Predictive Need for Surveillance/Lookout", "Custom Alert Trigger for SP/SSP", "Notice Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'BailComplianceTrackerDetailed.jsx',
    compName: 'BailComplianceTrackerDetailed',
    mainTitle: 'AI BAIL COMPLIANCE',
    subTitle: 'TRACKER',
    desc: 'Condition Monitoring, Police Station Attendance Logs, Surety Verification & Cancellation Automation',
    experts: [
      "Bail Condition Extraction/NLP Analyzer", "Police Station Attendance Log Integrator", "Surety/Guarantor Verification Scorer", "Bail Expiry/Extension Alert Bot",
      "Flight Risk/Absconder Predictor Engine", "Bail Violation/Crime Recidivism Correlator", "CCTNS/E-Courts Bail Sync", "Bail Cancellation Request Generator AI",
      "Bail Compliance Dashboard", "Voice-Command Compliance Query Bot", "Automated Defaulter Alert Report", "Inter-District/State Sync Bot",
      "Geo-Spatial Geofence (City Limits) Monitor", "Biometric/Face-Scan Attendance Verifier", "Fake Surety/Forged Document Detector", "Passport/Travel Ban Monitor",
      "AI Evaluator for IO Monitoring Efficiency", "Audit/Attendance Log Generator", "Data Privacy/Juvenile Bail Scrubber", "Directorate of Prosecution Sync",
      "Field IO Bail Check App", "Historical Bail Jumping Pattern Matcher", "SHO/Supervisory Officer Briefing", "Surveillance Resource Allocator",
      "Blockchain Immutable Attendance Hash", "Anti-Tamper Compliance Shield", "Mobile App for Remote GPS Check-in", "Jurisdiction Polygon Matcher",
      "Multi-Lingual Court Order Translator", "Historical Recidivism Rate Analyzer", "Bail Monitoring SOP Trainer", "Bail DB Server Health Monitor",
      "Imminent Flight Risk Alert Bot", "Organized Syndicate Surety Profiler", "High-Profile Accused Classifier", "AI Assisted Cancellation Application Drafter",
      "Biometric Data Storage Forecaster", "Secure Informant Link Protector", "Integration with Immigration/Airport APIs", "Citizen Surety Verification Portal",
      "Mass Arrest Bail Trend Modeler", "Disaster Disrupted Attendance Tracker", "Surveillance Ops Budget Tracker", "Custom Workflow for High Court Appeals",
      "AI Driven Violation Probability Predictor", "Predictive Need for Asset Attachment", "Custom Alert Trigger for Nodal Officers", "Bail Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'RemandMonitoringDetailed.jsx',
    compName: 'RemandMonitoringDetailed',
    mainTitle: 'AI REMAND',
    subTitle: 'MONITORING',
    desc: 'Police Custody Expiry Alerts, Judicial Remand Tracking, Medical Checkup Scheduling & Interrogation Planning',
    experts: [
      "Remand Expiry (24h/14d) Alert Engine", "Judicial vs Police Custody Tracker", "Mandatory Medical Checkup Scheduler", "Interrogation Plan/Milestone AI",
      "Custodial Violence Risk Predictor", "Statutory (60/90 Day) Charge-Sheet Alert", "CCTNS/Prison Sync Engine", "Remand Extension Justification Drafter",
      "Remand Command Dashboard", "Voice-Command Custody Status Bot", "Automated Daily Remand Roster", "Hospital/Medical Officer Sync Bot",
      "Geo-Spatial Lockup Capacity Monitor", "CCTV Lockup Feed Anomaly Detector", "Fake Illness/Delay Tactic Predictor", "Interrogation Transcript Summarizer",
      "AI Evaluator for IO Remand Efficiency", "Audit/Custody Transfer Log Gen", "Data Privacy/Medical Record Scrubber", "Human Rights Commission Guideline Sync",
      "Field IO Custody Alert App", "Historical Custodial Death Correlator", "SHO/Supervisory Officer Briefing", "Interrogator/Specialist Allocator",
      "Blockchain Immutable Custody Hash", "Anti-Tamper Medical Report Shield", "Mobile App for Court Production Updates", "Jurisdictional Court Matcher",
      "Multi-Lingual Interrogation Translator", "Historical Remand Success Rate Analyzer", "Custody Procedure SOP Trainer", "Remand DB Server Health Monitor",
      "Imminent Expiry/Illegal Detention Alert", "Syndicate Custody Intimidation Profiler", "High-Profile Accused Classifier", "AI Assisted Remand Application Drafter",
      "CCTV/Audio Storage Forecaster", "Secure Custody Location Protector", "Integration with State Prisons Dept", "Citizen/Family Custody Status Portal",
      "Mass Arrest Remand Triage Modeler", "Disaster Disrupted Production Tracker", "Custody/Diet Expense Budget Tracker", "Custom Workflow for Specialized Agency Transfer",
      "AI Driven Information Extraction Predictor", "Predictive Need for Narco/Polygraph", "Custom Alert Trigger for SP/SSP", "Remand Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'PrisonerEscortManagementDetailed.jsx',
    compName: 'PrisonerEscortManagementDetailed',
    mainTitle: 'AI PRISONER ESCORT',
    subTitle: 'MANAGEMENT',
    desc: 'Guard Roster Optimization, Safe Routing, Escape Risk Assessment & Vehicle GPS Tracking',
    experts: [
      "Escort Force Requirement Calculator", "Safe Route (Traffic/Threat Aware) Optimizer", "Prisoner Escape/Ambush Risk Scorer", "Guard Duty Roster & Fatigue Analyzer",
      "Vehicle GPS/Telematics Tracker Bot", "Medical Emergency Diversion Planner", "CCTNS/Court Production Sync Engine", "Multi-Prisoner Pooling/Batching AI",
      "Escort Command Dashboard", "Voice-Command Convoy Status Bot", "Automated Daily Escort Roster", "Inter-District/State Border Sync",
      "Geo-Spatial Threat Hotspot Mapper", "CCTV/ANPR Route Surveillance Integrator", "Fake Breakdown/Delay Predictor", "Weapon/Ammunition Requisition Bot",
      "AI Evaluator for Guard Performance", "Audit/Escort Handover Log Gen", "Data Privacy/Prisoner Medical Scrubber", "State Prisons Department Sync",
      "Field Guard Convoy Mobile App", "Historical Escape/Ambush Pattern Matcher", "Command Center Briefing AI", "Tactical Vehicle (Bulletproof) Allocator",
      "Blockchain Immutable Handover Hash", "Anti-Tamper Route Plan Shield", "Mobile App for Live GPS Tracking", "Jurisdiction Boundary Matcher",
      "Multi-Lingual Emergency Broadcast Translator", "Historical Escort Safety Analyzer", "Escort Protocol SOP Trainer", "Escort DB Server Health Monitor",
      "Imminent Route Deviation/Ambush Alert", "Syndicate Rescue Attempt Profiler", "High-Risk/Terrorist Escort Classifier", "AI Assisted Contingency Route Drafter",
      "Telematics Data Storage Forecaster", "Secure Radio Comm Frequency Protector", "Integration with Highway Patrol/Toll", "Citizen Traffic Advisory Broadcaster",
      "Riot/Protest Route Interception Modeler", "Disaster Evacuation Escort Coordinator", "Escort Travel/TA Budget Tracker", "Custom Workflow for Air/Train Transit",
      "AI Driven Ambush Probability Predictor", "Predictive Need for SWAT/QRT Backup", "Custom Alert Trigger for Nodal Officers", "Escort Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'CourtProductionPlanningDetailed.jsx',
    compName: 'CourtProductionPlanningDetailed',
    mainTitle: 'AI COURT PRODUCTION',
    subTitle: 'PLANNING',
    desc: 'Video Conferencing (VC) Scheduling, IO Appearance Roster, Evidence Transit & Judicial Sync',
    experts: [
      "Physical vs VC Production Triage AI", "Video Conferencing (VC) Slot Scheduler", "IO Court Appearance Roster Optimizer", "Evidence/Exhibit Transit Planner",
      "Court Hearing Delay/Adjournment Predictor", "Prison/Jail Capacity & Transit Coordinator", "CCTNS/E-Courts Daily Roster Sync", "Missing Exhibit/Malkhana Alert Bot",
      "Production Command Dashboard", "Voice-Command Hearing Status Bot", "Automated Daily Production Plan", "Prosecution/Law Officer Sync Bot",
      "Geo-Spatial Court Route Mapper", "Secure VC Link/Bandwidth Monitor", "Fake Medical Certificate Predictor", "Witness Sync & Coordination AI",
      "AI Evaluator for IO Attendance", "Audit/Production Log Generator", "Data Privacy/Juvenile Hearing Scrubber", "Directorate of Prosecution Sync",
      "Field IO Hearing Schedule App", "Historical Adjournment Pattern Matcher", "SHO/Supervisory Officer Briefing", "Court Pairi Officer/Escort Allocator",
      "Blockchain Immutable VC Recording Hash", "Anti-Tamper Exhibit Chain Shield", "Mobile App for Quick Status Updates", "Jurisdiction Court Matcher",
      "Multi-Lingual Court Order Translator", "Historical Production Success Analyzer", "Court Etiquette/SOP Trainer", "Production DB Server Health Monitor",
      "Imminent Non-Production Contempt Alert", "Syndicate Witness Tampering Profiler", "High-Profile/Sensitive Production Classifier", "AI Assisted Remand Extension Drafter",
      "VC Video Storage Forecaster", "Secure Witness Identity Protector", "Integration with National Judicial Data Grid", "Citizen/Family Hearing Portal Sync",
      "Mass Arrest Production Batching Modeler", "Disaster Disrupted Court Coordinator", "Transit/Escort Ops Budget Tracker", "Custom Workflow for Out-of-State Production",
      "AI Driven Conviction Delay Predictor", "Predictive Need for Additional Force", "Custom Alert Trigger for Nodal Officers", "Trial Production Lifecycle Tracker"
    ]
  },
  {
    fileName: 'LegalDeadlineTrackerDetailed.jsx',
    compName: 'LegalDeadlineTrackerDetailed',
    mainTitle: 'AI LEGAL DEADLINE',
    subTitle: 'TRACKER',
    desc: 'Statutory Limitation Alerts (Charge-sheet/Appeal), Limitation Act Calculation & Escalation Matrix',
    experts: [
      "Charge-Sheet Deadline (60/90 day) Calculator", "Appeal/Revision Limitation Period AI", "Forensic Lab Report Delay Escalator", "Prosecution Sanction Deadline Tracker",
      "Statutory Default Bail Predictor", "High Court/Supreme Court Direction Timer", "CCTNS Automated Deadline Sync", "Delay Condonation Ground Suggester",
      "Deadline Command Dashboard", "Voice-Command Expiry Query Bot", "Automated Defaulter Alert Report", "Inter-Department Sync Bot",
      "Jurisdiction-Specific Holiday/Vacation Adjuster", "Pending Case Backlog Geo-Mapper", "Systemic Delay Bottleneck Analyzer", "Ageing FIR/Investigation Scorer",
      "AI Evaluator for IO Timeliness", "Audit/Deadline Override Log Gen", "Data Privacy/Case Detail Scrubber", "State Legal Dept/Advocate General Sync",
      "Field IO Deadline Alert App", "Historical Default Bail Correlator", "DGP/SP Level Pending Cases Briefing", "Supervisory Officer Task Allocator",
      "Blockchain Immutable Timeline Hash", "Anti-Tamper Deadline Shield AI", "Mobile App for Quick Compliance Update", "Jurisdictional Rule Matcher",
      "Multi-Lingual Alert Translator", "Historical Compliance Rate Analyzer", "Limitation Act SOP Trainer", "Tracker DB Server Health Monitor",
      "Imminent Statutory Expiry Alert Bot", "Organized Crime Delay Tactic Profiler", "VIP/High-Profile Fast-Track Classifier", "AI Assisted Delay Explanation Drafter",
      "Document Storage/Archival Forecaster", "Secure Internal Audit Protector", "Integration with E-Courts/NJDG API", "Citizen Right to Speedy Trial Analytics",
      "Mass Riot Case Deadline Batching Modeler", "Disaster/Pandemic Limitation Extension Coordinator", "Legal Penalty/Compensation Budget Tracker", "Custom Workflow for Inter-State Delays",
      "AI Driven Case Dismissal Predictor", "Predictive Need for IO Reassignment", "Custom Alert Trigger for Chief Secretary", "Case Investigation Timeline Tracker"
    ]
  },
  {
    fileName: 'JudicialOrderTrackerDetailed.jsx',
    compName: 'JudicialOrderTrackerDetailed',
    mainTitle: 'AI JUDICIAL ORDER',
    subTitle: 'TRACKER',
    desc: 'Court Direction Extraction, Compliance Monitoring, Contempt Risk Alerts & Implementation Audits',
    experts: [
      "Court Order NLP Extraction/Summarizer", "Actionable Direction Parsing Engine", "Contempt of Court Risk Scorer", "Compliance Deadline/Milestone Tracker",
      "Department-Specific Task Router AI", "Stay Order/Injunction Geo-Mapper", "CCTNS/E-Courts Judgment Sync", "Non-Compliance Escalation Analyzer",
      "Order Tracker Command Dashboard", "Voice-Command Compliance Status Bot", "Automated Pending Order Report", "Inter-Department (Civic/Revenue) Sync",
      "Geo-Spatial Dispute Hotspot Modeler", "Attachment/Seizure Warrant Monitor", "Ambiguous Order Clarification Predictor", "Precedent/Past Compliance Matcher",
      "AI Evaluator for Department Response", "Audit/Compliance Action Log Gen", "Data Privacy/Sensitive Order Scrubber", "State Legal Dept Sync Bot",
      "Field IO Compliance Task App", "Historical Contempt Case Correlator", "DGP/Home Secretary Briefing AI", "Nodal Officer/Task Allocator",
      "Blockchain Immutable Compliance Hash", "Anti-Tamper Judicial Record Shield", "Mobile App for Eviction/Seizure Updates", "Jurisdiction Polygon Matcher",
      "Multi-Lingual Judgment Translator", "Historical Compliance Rate Analyzer", "Judicial Etiquette SOP Trainer", "Tracker DB Server Health Monitor",
      "Imminent Contempt Deadline Alert Bot", "Syndicate Asset Attachment Profiler", "Supreme Court/High Court Directive Classifier", "AI Assisted Compliance Affidavit Drafter",
      "Judgment Document Storage Forecaster", "Secure Protected Witness Protector", "Integration with E-Courts API", "Citizen Grievance Order Portal Sync",
      "Riot/Mass Violence Directive Modeler", "Disaster Relief Court Order Coordinator", "Legal Compensation Budget Tracker", "Custom Workflow for Multi-Agency Orders",
      "AI Driven Penalty Predictor", "Predictive Need for Specialized Counsel", "Custom Alert Trigger for Chief Secretary", "Judicial Order Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'ComplianceMonitoringDetailed.jsx',
    compName: 'ComplianceMonitoringDetailed',
    mainTitle: 'AI COMPLIANCE',
    subTitle: 'MONITORING',
    desc: 'NHRC/SHRC Guideline Tracking, Arrest Memo Auditing, Custodial Regulations & Internal Directives',
    experts: [
      "NHRC/SHRC Guideline Compliance Checker", "DK Basu Arrest Guidelines Auditor AI", "Custodial Death/Violence Risk Scorer", "Internal Police Circular Tracker",
      "RTI Query/Response Deadline Monitor", "Departmental Inquiry (DE) Milestone Tracker", "Women/Child Rights SOP Enforcer", "CCTNS/Internal HRMS Sync Engine",
      "Compliance Command Dashboard", "Voice-Command Guideline Query Bot", "Automated Daily Audit Report", "Inter-District Compliance Sync Bot",
      "Geo-Spatial Rights Violation Hotspot Mapper", "CCTV Police Station Feed Analyzer", "Fake/Fabricated Record Predictor AI", "Whistleblower/Complaint Sentiment Scorer",
      "AI Evaluator for Station House Officer (SHO)", "Audit/Override Access Log Gen", "Data Privacy/Victim Detail Scrubber", "State Human Rights Commission Sync",
      "Field IO Rights Checklist App", "Historical Violation Precedent Matcher", "DGP/IG Range Briefing AI", "Supervisory Review Resource Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Log Shield AI", "Mobile App for Spot Inspections", "Jurisdiction/Zone Comparison Matcher",
      "Multi-Lingual Guideline Translator", "Historical Compliance Trend Analyzer", "Human Rights SOP Trainer", "Compliance DB Server Health Monitor",
      "Imminent Gross Violation Alert Bot", "Organized Crime False Complaint Profiler", "High-Profile/Media Sensitive Case Classifier", "AI Assisted Departmental Reply Drafter",
      "Audit Video/Document Storage Forecaster", "Secure Whistleblower Protector", "Integration with CVC/Lokayukta DB", "Citizen Human Rights Portal Sync",
      "Riot/Encounter Extra-Judicial Modeler", "Disaster Relief Fund Compliance Coordinator", "Compensation/Penalty Budget Tracker", "Custom Workflow for External Inquiries",
      "AI Driven Suspension/Transfer Predictor", "Predictive Need for Sensitization Training", "Custom Alert Trigger for Nodal Officers", "Compliance Issue Lifecycle Timeline Tracker"
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

console.log('All 10 Legal Process Modules files generated successfully.');
