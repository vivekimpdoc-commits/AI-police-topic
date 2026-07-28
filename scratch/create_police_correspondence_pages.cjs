const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'DakManagementDetailed.jsx',
    compName: 'DakManagementDetailed',
    mainTitle: 'AI DAK',
    subTitle: 'MANAGEMENT',
    desc: 'Smart Sorting, NLP Subject Extraction, Auto-Routing & Receipt Acknowledgment',
    experts: [
      "NLP Subject/Topic Extractor AI", "Automated Desk Routing Engine", "Priority/Urgency Sorter", "Barcode/QR Dak Tracker",
      "Sender Verification Bot", "Physical-to-Digital Sync Engine", "Geo-Spatial Origin Mapper", "Duplicate Dak Detector",
      "Dak Management Dashboard", "Voice-Command Dak Query Bot", "Automated Daily Receipt Report", "Postal/Courier Service Sync",
      "Multi-Lingual Dak Translation", "Language/Sentiment Analyzer", "Fake/Phishing Letter Predictor", "Pending Action Extractor",
      "AI Evaluator for Processing Speed", "Audit/Receipt Log Generator", "Data Privacy/Confidential Dak Scrubber", "E-Office Sync",
      "Desk Officer Dak Mobile App", "Historical Delay Correlator", "Head Clerk Briefing AI", "Urgent Dak Allocator",
      "Blockchain Immutable Receipt Hash", "Anti-Tamper Dak Log Shield", "Mobile App for Dispatch Riders", "Desk-wise Pendency Benchmarker",
      "Automated Reminder for Unopened Dak", "Historical Volume Trend Analyzer", "Dak Handling SOP Trainer", "Dak Server Health Monitor",
      "Imminent Deadline Alert", "Habitual Hoarder Profiler", "High-Priority VIP Dak Classifier", "AI Assisted Acknowledgment Drafter",
      "Dak Image Storage Forecaster", "Secure Sensitive Dak Protector", "Integration with Secretariat", "Citizen Petition Portal Sync",
      "Election Commission Dak Modeler", "Disaster Relief Application Coordinator", "Postage/Courier Budget Tracker", "Custom Workflow for Registered Post",
      "AI Driven Processing Time Predictor", "Predictive Need for More Clerks", "Custom Alert Trigger for Superintendent", "Dak Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'EOfficeIntegrationDetailed.jsx',
    compName: 'EOfficeIntegrationDetailed',
    mainTitle: 'AI E-OFFICE',
    subTitle: 'INTEGRATION',
    desc: 'NIC E-Office Sync, File Noting Automation, Digital Signature Tracking & Legacy Data Migration',
    experts: [
      "NIC E-Office API Integrator AI", "Auto-Drafting File Noting Bot", "Digital Signature/DSC Tracker", "Legacy Physical Data Migration Engine",
      "Attachment OCR & Indexing AI", "Cross-Department Routing Rules", "Geo-Spatial Access Log Mapper", "Version Control/Revision History Monitor",
      "E-Office Integration Dashboard", "Voice-Command File Query Bot", "Automated Weekly E-Office Usage Report", "State IT Department/NIC Sync",
      "Multi-Lingual Noting Translation", "Duplicate/Redundant File Detector", "Unauthorized Access Predictor", "Summary/Abstract Generator",
      "AI Evaluator for Paperless Compliance", "Audit/Approval Log Generator", "Data Privacy/Classified File Scrubber", "State Secretariat Sync",
      "Officer Pending File Mobile App", "Historical File Delay Correlator", "DGP/IG Briefing AI", "Task Delegation Engine",
      "Blockchain Immutable Noting Hash", "Anti-Tamper Digital File Shield", "Mobile App for Quick DSC Approval", "Branch-wise Paperless Benchmarker",
      "Automated Reminder for Pending E-Files", "Historical Processing Speed Analyzer", "E-Office SOP/Training Bot", "E-Office API Gateway Health Monitor",
      "Imminent File Deadlock Alert", "Digital Illiteracy/Reluctance Profiler", "High-Priority Court File Classifier", "AI Assisted Clarification Drafter",
      "Digital Storage Cost Forecaster", "Secure Top-Secret File Protector", "Integration with State Treasury (IFMS)", "RTI Public Information Portal Sync",
      "Election Transfer File Modeler", "Disaster Emergency Fund File Coordinator", "E-Office Licensing Budget Tracker", "Custom Workflow for Top-Secret E-Files",
      "AI Driven Approval Time Predictor", "Predictive Need for IT Training", "Custom Alert Trigger for Nodal Officer", "Digital File Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'DispatchRegisterDetailed.jsx',
    compName: 'DispatchRegisterDetailed',
    mainTitle: 'AI DISPATCH',
    subTitle: 'REGISTER',
    desc: 'Outward Number Generation, Postage Calculation, Courier Tracking Integration & Delivery Analytics',
    experts: [
      "Auto Outward Number/Barcode Generator", "Postage/Weight Calculator AI", "Courier/India Post API Integrator", "Delivery Acknowledgment/RTO Tracker",
      "Bulk Dispatch Optimizer", "Sender/Branch Cost Apportionment", "Geo-Spatial Dispatch Destination Mapper", "Address Verification/Correction AI",
      "Dispatch Register Dashboard", "Voice-Command Dispatch Query Bot", "Automated Daily Dispatch/Cost Report", "Postal Department Sync Bot",
      "Multi-Lingual Address Translation", "Delay in Transit Predictor", "Fake/Wrong Address Detector", "Postage Stamp Inventory Monitor",
      "AI Evaluator for Dispatch Efficiency", "Audit/Dispatch Log Generator", "Data Privacy/Recipient Info Scrubber", "Finance/Accounts Sync",
      "Dispatch Rider/Clerk Mobile App", "Historical Return-to-Sender Correlator", "Head Clerk Briefing AI", "Courier Vendor Allocator",
      "Blockchain Immutable Dispatch Hash", "Anti-Tamper Dispatch Shield", "Mobile App for Proof of Delivery", "Branch-wise Dispatch Volume Benchmarker",
      "Automated Reminder for Undelivered Post", "Historical Postal Expense Analyzer", "Dispatch/Postage SOP Trainer", "Courier API Health Monitor",
      "Imminent Delivery Failure Alert", "High Return/Bounce Rate Profiler", "Urgent/Court Notice Classifier", "AI Assisted Reminder/Resend Drafter",
      "Dispatch Log Storage Forecaster", "Secure Confidential Dispatch Protector", "Integration with E-Courts (for summons)", "Citizen Tracking Portal Sync",
      "Election Notice Dispatch Modeler", "Disaster Advisory Dispatch Coordinator", "Postage/Courier Budget Tracker", "Custom Workflow for Special Messenger",
      "AI Driven Delivery Time Predictor", "Predictive Need for New Courier Empanelment", "Custom Alert Trigger for SP/SSP", "Dispatch to Delivery Timeline Tracker"
    ]
  },
  {
    fileName: 'ReceiptRegisterDetailed.jsx',
    compName: 'ReceiptRegisterDetailed',
    mainTitle: 'AI RECEIPT',
    subTitle: 'REGISTER',
    desc: 'Inward Number Generation, Sender Tagging, Attachment Scanning & Digital Archiving',
    experts: [
      "Auto Inward Number/Barcode Generator", "Sender/Organization Tagging AI", "Attachment/Enclosure OCR Scanner", "Smart Categorization (Complaint/Order/Misc)",
      "Duplicate Receipt Detector", "Prior Reference/Reply Matcher", "Geo-Spatial Origin of Receipt Mapper", "Priority/VIP Sender Identifier",
      "Receipt Register Dashboard", "Voice-Command Receipt Query Bot", "Automated Daily Inward Volume Report", "E-Office System Sync Bot",
      "Multi-Lingual Receipt Translation", "Content Summarizer/Abstractor AI", "Fake/Phishing Document Detector", "Missing Enclosure Alert Bot",
      "AI Evaluator for Inward Speed", "Audit/Receipt Log Generator", "Data Privacy/Complainant Info Scrubber", "State Intelligence Bureau Sync",
      "Dak Clerk Mobile App", "Historical Volume/Peak Correlator", "Superintendent/Head Clerk Briefing AI", "Filing/Routing Allocator",
      "Blockchain Immutable Receipt Hash", "Anti-Tamper Inward Shield", "Mobile App for Immediate Scanning", "Source/Department-wise Volume Benchmarker",
      "Automated Reminder for Routing Delay", "Historical Inward Trend Analyzer", "Receipt/Filing SOP Trainer", "Scanner/Hardware Health Monitor",
      "Imminent Bottleneck/Pile-up Alert", "Frequent/Vexatious Sender Profiler", "Court Order/Contempt Receipt Classifier", "AI Assisted Acknowledgment Receipt Drafter",
      "Scanned Image Storage Forecaster", "Secure Sensitive Receipt Protector", "Integration with CCTNS/Crime Branch", "Citizen Grievance Portal Sync",
      "Election Related Receipt Modeler", "Disaster Aid Receipt Coordinator", "Digitization Hardware Budget Tracker", "Custom Workflow for Classified Receipts",
      "AI Driven Processing Workload Predictor", "Predictive Need for High-Speed Scanners", "Custom Alert Trigger for Nodal Officer", "Receipt to Routing Timeline Tracker"
    ]
  },
  {
    fileName: 'GovernmentCommunicationTrackerDetailed.jsx',
    compName: 'GovernmentCommunicationTrackerDetailed',
    mainTitle: 'AI GOVERNMENT COMMUNICATION',
    subTitle: 'TRACKER',
    desc: 'DGP/MHA Directives, Assembly Questions (Vidhan Sabha), VIP References & Inter-Departmental Sync',
    experts: [
      "MHA/DGP Directive Tracking Engine", "Assembly/Parliament Question Monitor", "VIP Reference (DO Letter) Priority AI", "Inter-Departmental (Revenue/Health) Sync Bot",
      "Deadline/Session Timeline Tracker", "Previous Assembly Question Matcher", "Geo-Spatial Issue Relevance Mapper", "Policy Change/Gazette Notification Extractor",
      "Govt Communication Dashboard", "Voice-Command Query Bot", "Automated Session/Weekly Pendency Report", "State Secretariat Sync Bot",
      "Multi-Lingual Translation (State Language to English)", "Draft Reply Auto-Generator AI", "Contradictory Policy Detector", "Media/Public Interest Correlator",
      "AI Evaluator for Reply Quality/Timeliness", "Audit/Action Log Generator", "Data Privacy/Classified Info Scrubber", "Law/Legal Department Sync",
      "Nodal Officer Alert Mobile App", "Historical Delay/Privilege Motion Correlator", "DGP/Home Secretary Briefing AI", "Branch/District Task Allocator",
      "Blockchain Immutable Communication Hash", "Anti-Tamper Policy Document Shield", "Mobile App for Draft Approval", "Department-wise Responsiveness Benchmarker",
      "Automated Reminder for Imminent Deadlines", "Historical Legislative Interest Analyzer", "Government Protocol SOP Trainer", "Tracker DB Server Health Monitor",
      "Imminent Privilege Motion/Contempt Alert", "Defaulter Branch/Unit Profiler", "Top-Secret/Cabinet Memo Classifier", "AI Assisted Extension Request Drafter",
      "Policy/Archive Storage Forecaster", "Secure Official Secrets Protector", "Integration with E-Vidhaan/E-Assembly", "Public Information Portal Sync",
      "Election Commission Directive Modeler", "Disaster/NDMA Guideline Coordinator", "Legal/Consultation Budget Tracker", "Custom Workflow for Cabinet Note Approval",
      "AI Driven Assembly Question Predictor", "Predictive Need for Policy Review", "Custom Alert Trigger for Chief Secretary", "Govt Directive Implementation Timeline"
    ]
  },
  {
    fileName: 'ConfidentialLetterRegisterDetailed.jsx',
    compName: 'ConfidentialLetterRegisterDetailed',
    mainTitle: 'AI CONFIDENTIAL LETTER',
    subTitle: 'REGISTER',
    desc: 'Restricted Access Control, Encryption, Hand-to-Hand Delivery Tracking & Espionage Prevention',
    experts: [
      "Role-Based Restricted Access Control AI", "End-to-End Encryption Engine", "Hand-to-Hand (Special Messenger) Tracker", "Espionage/Leak Prevention Monitor",
      "Auto-Classification (Secret/Top Secret)", "Digital Watermarking/Print Tracker AI", "Geo-Spatial Movement of Messenger Mapper", "Unauthorized Copy/Forward Detector",
      "Confidential Register Dashboard", "Voice-Command Access Query Bot", "Automated Access/Audit Trail Report", "State Intelligence/CID Sync",
      "Biometric/OTP Decryption Gateway", "Self-Destruct/Time-Limited View Timer", "Phishing/Social Engineering Predictor", "Double-Envelope Verification Bot",
      "AI Evaluator for Security Protocol Compliance", "Audit/Chain of Custody Log Generator", "Data Privacy/PII Scrubber", "Ministry of Home Affairs Sync",
      "Special Messenger GPS Tracking App", "Historical Information Leak Correlator", "DGP/Intelligence Chief Briefing AI", "Clearance/Access Allocator",
      "Blockchain Immutable Custody Hash", "Anti-Tamper Encryption Shield", "Mobile App for Secure Viewing", "Unit-wise Secrecy Discipline Benchmarker",
      "Automated Alert for Unauthorized Access", "Historical Access Frequency Analyzer", "Official Secrets Act/SOP Trainer", "Encryption Server Health Monitor",
      "Imminent Data Leak/Compromise Alert", "Insider Threat/Snooping Profiler", "Nuclear/State Security Classifier", "AI Assisted Damage Control Protocol Drafter",
      "Encrypted Vault Storage Forecaster", "Secure SCIF (Sensitive Compartmented Info) Protector", "Integration with National Intelligence Grid", "Zero Public Exposure Sync",
      "Election Security Intelligence Modeler", "Disaster Vulnerability Intelligence Coordinator", "Encryption Infrastructure Budget Tracker", "Custom Workflow for Declassification",
      "AI Driven Threat/Leak Predictor", "Predictive Need for Clearance Upgrade", "Custom Alert Trigger for DGP", "Confidential Letter Lifecycle Tracker"
    ]
  },
  {
    fileName: 'OfficeMemorandumManagementDetailed.jsx',
    compName: 'OfficeMemorandumManagementDetailed',
    mainTitle: 'AI OFFICE MEMORANDUM',
    subTitle: 'MANAGEMENT',
    desc: 'OM Drafting, Version Control, Distribution Lists, Amendment Tracking & Policy Archiving',
    experts: [
      "OM (Office Memorandum) NLP Drafting AI", "Version Control/Revision History Engine", "Dynamic Distribution List Optimizer", "Amendment/Corrigendum Linker AI",
      "Policy Contradiction Checker Bot", "Cross-Reference to Standing Orders AI", "Geo-Spatial Implementation Mapper", "Approval Matrix/Hierarchy Automator",
      "Memorandum Management Dashboard", "Voice-Command Policy Query Bot", "Automated New Policy Distribution Report", "Personnel/HRMS Department Sync",
      "Multi-Lingual OM Translation", "Superseded/Obsolete OM Detector", "Fake/Forged Memorandum Predictor", "Summary/Impact Abstract Generator",
      "AI Evaluator for Policy Clarity", "Audit/Approval Log Generator", "Data Privacy/Internal Draft Scrubber", "State Police Headquarters Sync",
      "Officer Policy Update Mobile App", "Historical Policy Reversal Correlator", "IG/ADG Administration Briefing AI", "Task/Compliance Allocator",
      "Blockchain Immutable OM Hash", "Anti-Tamper Policy Document Shield", "Mobile App for Draft Review", "Implementation Rate Benchmarker",
      "Automated Reminder for Read-Receipts", "Historical Policy Effectiveness Analyzer", "Policy Drafting SOP Trainer", "Document Server Health Monitor",
      "Imminent Policy Conflict Alert", "Chronic Non-Compliance Profiler", "High-Impact/Service Rule Change Classifier", "AI Assisted Clarification OM Drafter",
      "Archival Storage Forecaster", "Secure Internal Policy Protector", "Integration with E-Office", "Citizen Facing Policy Portal Sync (if public)",
      "Election Code Compliance OM Modeler", "Disaster SOP Modification Coordinator", "Policy Printing/Distribution Budget Tracker", "Custom Workflow for Emergency OM",
      "AI Driven Policy Impact Predictor", "Predictive Need for Training/Workshop", "Custom Alert Trigger for Nodal Officers", "Memorandum Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'ReminderManagementDetailed.jsx',
    compName: 'ReminderManagementDetailed',
    mainTitle: 'AI REMINDER',
    subTitle: 'MANAGEMENT',
    desc: 'Automated Escalation, SMS/Email Alerts, D-O Letter Reminders & Pendency Heatmaps',
    experts: [
      "Automated Escalation/Hierarchy Engine AI", "Multi-Channel (SMS/Email) Alert Bot", "DO (Demi-Official) Letter Reminder Optimizer", "Pendency/Delay Heatmap Generator",
      "Priority/Deadline Based Scheduler", "Read-Receipt/Acknowledgment Tracker", "Geo-Spatial Delay Mapper", "Custom Frequency/Interval Manager AI",
      "Reminder Management Dashboard", "Voice-Command Pendency Query Bot", "Automated Weekly Defaulter Report", "E-Office/Dak System Sync",
      "Multi-Lingual Reminder Translation", "Vague/Evasive Reply Detector AI", "Spam/Ignored Message Predictor", "Next Action Item Suggester",
      "AI Evaluator for Responsiveness Index", "Audit/Reminder Sent Log Generator", "Data Privacy/Contact Detail Scrubber", "State Command Center Sync",
      "Officer Pending Task Mobile App", "Historical Defaulter/Delay Correlator", "Supervisory Officer Briefing AI", "Intervention/Show-Cause Allocator",
      "Blockchain Immutable Reminder Hash", "Anti-Tamper Alert Log Shield", "Mobile App for Task Update/Snooze", "Unit-wise Responsiveness Benchmarker",
      "Automated Reminder for High-Level Meetings", "Historical Reminder Efficacy Analyzer", "Time Management SOP Trainer", "Messaging Gateway Health Monitor",
      "Imminent Statutory Deadline Alert", "Serial Defaulter/Procrastinator Profiler", "Court/Assembly Reminder Classifier", "AI Assisted Show-Cause Notice Drafter",
      "Alert Log Storage Forecaster", "Secure Communication Channel Protector", "Integration with HRMS (for Appraisals)", "Citizen Grievance Resolution Reminder Sync",
      "Election Task Deadline Modeler", "Disaster Response Critical Alert Coordinator", "SMS/Email Gateway Budget Tracker", "Custom Workflow for Final Warning",
      "AI Driven Task Completion Predictor", "Predictive Need for Task Reallocation", "Custom Alert Trigger for SP/SSP", "Reminder Escalation Timeline Tracker"
    ]
  },
  {
    fileName: 'PendingLetterDashboardDetailed.jsx',
    compName: 'PendingLetterDashboardDetailed',
    mainTitle: 'AI PENDING LETTER',
    subTitle: 'DASHBOARD',
    desc: 'Desk-wise Pendency Analytics, Ageing Analysis (0-7, 7-15 days), Bottleneck Identification & Officer Scorecards',
    experts: [
      "Desk-wise Pendency/Workload Analyzer", "Ageing Analysis (0-7, 7-15, >30 days) AI", "Bottleneck/Choke-point Identifier", "Officer Responsiveness Scorecard Generator",
      "Category-wise (Court/VIP/Public) Pendency Splitter", "Volume vs Manpower Correlator", "Geo-Spatial District-wise Pendency Mapper", "Leave/Absence Impact Correlator",
      "Executive Pendency Dashboard", "Voice-Command Desk Status Bot", "Automated Monthly Performance Report", "E-Office/Dak Register Sync",
      "Root Cause Analysis (RCA) Bot", "Workload Re-distribution Suggester AI", "Data Manipulation/Fake Disposal Detector", "Critical File Highlight Engine",
      "AI Evaluator for Desk Efficiency", "Audit/Clearance Rate Log Generator", "Data Privacy/Classified File Scrubber", "HRMS/Appraisal System Sync",
      "Supervisory Dashboard Mobile App", "Historical Seasonal Workload Correlator", "DGP/IG Administration Briefing AI", "Task Force/Additional Staff Allocator",
      "Blockchain Immutable Pendency Hash", "Anti-Tamper Performance Record Shield", "Mobile App for Quick Approvals", "Inter-Desk Efficiency Benchmarker",
      "Automated Alert for 30+ Days Pendency", "Historical Clearance Trend Analyzer", "File Processing SOP Trainer", "Dashboard Database Health Monitor",
      "Imminent Systemic Paralysis Alert", "Habitual File Hoarder Profiler", "High-Stakes Pending File Classifier", "AI Assisted Remedial Action Plan Drafter",
      "Analytics Data Storage Forecaster", "Secure Officer Appraisal Protector", "Integration with State Secretariat", "Citizen Grievance Pendency Sync",
      "Election Duty Impact on Pendency Modeler", "Disaster Duty Impact on Pendency Coordinator", "Performance Incentive Budget Tracker", "Custom Workflow for Mass Disposal Drives",
      "AI Driven Backlog Clearance Predictor", "Predictive Need for Overtime/Camp", "Custom Alert Trigger for Chief Secretary", "Pendency Ageing Timeline Tracker"
    ]
  },
  {
    fileName: 'CorrespondenceAnalyticsDetailed.jsx',
    compName: 'CorrespondenceAnalyticsDetailed',
    mainTitle: 'AI CORRESPONDENCE',
    subTitle: 'ANALYTICS',
    desc: 'Sentiment Analysis of Public Letters, Topic Modeling, Trend Forecasting & Inter-departmental Communication Flow',
    experts: [
      "Public Letter Sentiment/Tone Analyzer AI", "NLP Topic Modeling/Clustering Engine", "Communication Flow/Network Graph Generator", "Emerging Trend/Grievance Forecaster",
      "Inter-departmental Bottleneck Mapper", "Key Influencer/Frequent Sender Identifier", "Geo-Spatial Grievance/Topic Heatmapper", "Spike/Anomaly Detection AI",
      "Correspondence Analytics Dashboard", "Voice-Command Trend Query Bot", "Automated Quarterly Insight Report", "CM Helpline/Public Grievance Portal Sync",
      "Multi-Lingual Text Mining Engine", "Keyword/Buzzword Extractor Bot", "Fake/Bot-Generated Letter Predictor", "Correlation with Crime/Law & Order Stats",
      "AI Evaluator for Public Satisfaction", "Audit/Analysis Log Generator", "Data Privacy/PII Masking Engine", "State Intelligence/CID Sync",
      "Executive Insight Mobile App", "Historical Policy Impact Correlator", "DGP/Home Minister Briefing AI", "Resource Reallocation Predictor",
      "Blockchain Immutable Insight Hash", "Anti-Tamper Analytics Shield", "Mobile App for Live Trend Tracking", "District-wise Issue Benchmarker",
      "Automated Alert for Negative Sentiment Spikes", "Historical Communication Efficacy Analyzer", "Public Relations (PR)/Drafting SOP Trainer", "Big Data Server Health Monitor",
      "Imminent Public Outrage/Protest Alert", "Coordinated Letter Writing Campaign Profiler", "Sensitive/Communal Topic Classifier", "AI Assisted Strategic Response Drafter",
      "Big Data Storage/Data Lake Forecaster", "Secure Intelligence Insight Protector", "Integration with Social Media Analytics", "Citizen Feedback Loop Sync",
      "Election Sentiment/Complaint Modeler", "Disaster Relief Satisfaction Coordinator", "Analytics Software/Cloud Budget Tracker", "Custom Workflow for Deep-Dive Investigations",
      "AI Driven Public Unrest Predictor", "Predictive Need for Policy Change", "Custom Alert Trigger for DGP", "Issue/Trend Evolution Timeline Tracker"
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

console.log('All 10 Police Correspondence Modules files generated successfully.');
