const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'DGPSecretariatManagementDetailed.jsx',
    compName: 'DGPSecretariatManagementDetailed',
    mainTitle: 'AI DGP SECRETARIAT',
    subTitle: 'MANAGEMENT',
    desc: 'Top-Level Executive Dashboard, VIP Reference Tracking, State-Wide Law & Order Heatmaps & Priority Dak Routing',
    experts: [
      "DGP Executive Dashboard Engine", "VIP/DO Letter Priority Tracker", "State-Wide Law & Order Heatmap AI", "CM/Home Minister Directive Sync",
      "Confidential/Top-Secret File Router", "Appointment/Visitor Vetting Bot", "Geo-Spatial Critical Incident Mapper", "Media/Sentiment Briefing Generator",
      "Secretariat Workflow Dashboard", "Voice-Command Executive Query Bot", "Automated Daily Morning Briefing Report", "MHA/IB (Intelligence Bureau) Sync",
      "Multi-Lingual Dak Translation", "Vague/Delayed Reply Detector AI", "Unauthorized Access Predictor", "Executive Summary/Abstract Generator",
      "AI Evaluator for Responsiveness", "Audit/Approval Log Generator", "Data Privacy/Classified Info Scrubber", "State Intelligence Department Sync",
      "DGP Mobile Briefing App", "Historical Crisis/Event Correlator", "Staff Officer (SO to DGP) Briefing AI", "Task/Delegation Engine",
      "Blockchain Immutable Secretariat Hash", "Anti-Tamper Top-Secret Shield", "Mobile App for Immediate Approval", "Branch-wise Pendency Benchmarker",
      "Automated Alert for CM/PM Deadlines", "Historical VIP Reference Analyzer", "Secretariat Protocol SOP Trainer", "Executive Server Health Monitor",
      "Imminent Privilege Motion/Contempt Alert", "Serial Defaulter (ADG/IG level) Profiler", "High-Priority Election/Disaster File Classifier", "AI Assisted Speaking Notes Drafter",
      "Classified Data Storage Forecaster", "Secure Vault/SCIF Layout Protector", "Integration with E-Courts/Tribunals", "Zero Public Exposure Policy Sync",
      "Election Code of Conduct Directive Modeler", "Disaster Emergency Command Coordinator", "Secretariat/Contingency Budget Tracker", "Custom Workflow for Cabinet Note Approval",
      "AI Driven Policy Impact Predictor", "Predictive Need for High-Level Review", "Custom Alert Trigger for DGP", "Secretariat File Lifecycle Timeline"
    ]
  },
  {
    fileName: 'ADGOfficeManagementDetailed.jsx',
    compName: 'ADGOfficeManagementDetailed',
    mainTitle: 'AI ADG OFFICE',
    subTitle: 'MANAGEMENT',
    desc: 'Zone-Level Command Dashboard, specialized branch (L&O, Admin, Intel) workflows, & policy implementation tracking',
    experts: [
      "Zone/Branch Command Dashboard AI", "Policy Implementation Tracker Bot", "DGP Directive Compliance Monitor", "Specialized (L&O/Admin/Intel) Workflow Engine",
      "Subordinate (IG/DIG) Performance Scorer", "Cross-Branch Coordination Linker", "Geo-Spatial Zonal Crime Mapper", "Budget/Fund Allocation Optimizer",
      "ADG Office Management Dashboard", "Voice-Command Branch Query Bot", "Automated Weekly Zonal Briefing Report", "DGP Secretariat Sync",
      "Multi-Lingual Circular Translation", "Bottleneck/Delay Detector AI", "Favoritism/Bias in Allocation Predictor", "Summary/Abstract of Subordinate Reports Generator",
      "AI Evaluator for Zonal Efficiency", "Audit/Routing Log Generator", "Data Privacy/Internal Branch Scrubber", "Finance/Accounts Sync",
      "ADG Mobile Command App", "Historical Zonal Crime/Event Correlator", "Staff Officer Briefing AI", "Task/Investigation Delegation Engine",
      "Blockchain Immutable Branch Hash", "Anti-Tamper Zonal Record Shield", "Mobile App for Field Approvals", "Range-wise (IG) Performance Benchmarker",
      "Automated Alert for DGP Deadlines", "Historical Zonal Expenditure Analyzer", "Branch-specific SOP/Rule Trainer", "Zonal Database Server Health Monitor",
      "Imminent L&O Breakdown Alert", "Non-Performing IG/DIG Profiler", "High-Priority Court/NHRC File Classifier", "AI Assisted Zonal Circular Drafter",
      "Zonal Data Storage Forecaster", "Secure Branch File Protector", "Integration with CCTNS/ICJS", "Internal Grievance Portal Sync",
      "Election Zonal Deployment Modeler", "Disaster Zonal Resource Coordinator", "Zonal Allocation Budget Tracker", "Custom Workflow for Inter-Zone Transfers",
      "AI Driven Crime Trend Predictor", "Predictive Need for Force Reallocation", "Custom Alert Trigger for ADG", "Branch Policy Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'IGOfficeWorkflowDetailed.jsx',
    compName: 'IGOfficeWorkflowDetailed',
    mainTitle: 'AI IG OFFICE',
    subTitle: 'WORKFLOW',
    desc: 'Range-Level Command Dashboard, District (SP) performance monitoring, inspection scheduling, & petition reviews',
    experts: [
      "Range Command Dashboard AI", "District (SP) Performance/Scorecard Engine", "Annual/Surprise Inspection Scheduler", "Public Petition/Review Tracker",
      "ADG/DGP Directive Compliance Monitor", "Crime Review Meeting (CRM) Automator", "Geo-Spatial Range Crime/L&O Mapper", "Force Deployment/Reserve Optimizer",
      "IG Office Workflow Dashboard", "Voice-Command Range Query Bot", "Automated Monthly Range Briefing Report", "ADG/Zone Command Sync",
      "Petition Sentiment/Urgency Analyzer", "Inspection Defect/Compliance Tracker", "Data Manipulation by Districts Predictor", "CRM Minutes of Meeting (MoM) Generator",
      "AI Evaluator for Range Policing Index", "Audit/Inspection Log Generator", "Data Privacy/Petitioner Info Scrubber", "State Intelligence Branch Sync",
      "IG Mobile Inspection App", "Historical Range Crime/Riot Correlator", "Reader/Staff Officer Briefing AI", "Task/Inquiry Delegation Engine",
      "Blockchain Immutable Inspection Hash", "Anti-Tamper Range Record Shield", "Mobile App for Tour Notes/Approvals", "District-wise (SP) Performance Benchmarker",
      "Automated Alert for PHQ Deadlines", "Historical Petition Resolution Analyzer", "Inspection/Tour Note SOP Trainer", "Range Database Server Health Monitor",
      "Imminent Communal/Caste Tension Alert", "Non-Performing SP/Subdivision Profiler", "High-Priority Heinous Crime Classifier", "AI Assisted Show-Cause Notice Drafter",
      "Range Data Storage Forecaster", "Secure Inspection Report Protector", "Integration with CCTNS/District Portals", "Public Grievance Portal (CM Helpline) Sync",
      "Election Range Force Modeler", "Disaster Range Relief Coordinator", "Range Level Budget/Fund Tracker", "Custom Workflow for Magisterial Inquiries",
      "AI Driven Petition Surge Predictor", "Predictive Need for Range-Level Training", "Custom Alert Trigger for IG", "Range Petition/Inquiry Timeline Tracker"
    ]
  },
  {
    fileName: 'DIGOfficeDashboardDetailed.jsx',
    compName: 'DIGOfficeDashboardDetailed',
    mainTitle: 'AI DIG OFFICE',
    subTitle: 'DASHBOARD',
    desc: 'Sub-Range Command, specialized unit (e.g., Anti-Corruption, CID) monitoring, & targeted operational oversight',
    experts: [
      "Sub-Range/Special Unit Command Dashboard", "Targeted Operation/Raid Tracker AI", "Investigating Officer (IO) Performance Scorer", "Specialized Case (CID/ACB) Pendency Monitor",
      "IG/ADG Directive Compliance Tracker", "Inter-District Co-ordination Linker", "Geo-Spatial Organized Crime Mapper", "Secret Service Fund/Informer Optimizer",
      "DIG Office Management Dashboard", "Voice-Command Operation Query Bot", "Automated Weekly Specialized Briefing Report", "IG/Range Command Sync",
      "Case Diary/Evidence Sentiment Analyzer", "Delay in Forensic/Cyber Report Tracker", "Leak/Compromise in Operation Predictor", "Summary of Complex Investigation Generator",
      "AI Evaluator for Conviction Rate", "Audit/Operation Log Generator", "Data Privacy/Informer ID Scrubber", "Forensic Lab/Cyber Cell Sync",
      "DIG Mobile Command/Raid App", "Historical Organized Syndicate Correlator", "Reader/DSP Briefing AI", "Special Investigation Team (SIT) Task Allocator",
      "Blockchain Immutable Evidence Hash", "Anti-Tamper Raid Log Shield", "Mobile App for Covert Approvals", "IO/Sub-unit Efficiency Benchmarker",
      "Automated Alert for Court Deadlines", "Historical Secret Fund Expenditure Analyzer", "Specialized Investigation SOP Trainer", "Covert Operations Server Health Monitor",
      "Imminent Operation Compromise Alert", "Corrupt/Inefficient IO Profiler", "High-Profile/Sensational Case Classifier", "AI Assisted Case Transfer Order Drafter",
      "Investigation Data Storage Forecaster", "Secure Covert Intel Protector", "Integration with National Databases (NATGRID/CCTNS)", "Zero Public Exposure Policy Sync",
      "Election Special Task Force Modeler", "Disaster Specialized Rescue Coordinator", "Secret Fund/Operation Budget Tracker", "Custom Workflow for Inter-State Raids",
      "AI Driven Syndicate Activity Predictor", "Predictive Need for Specialized Tech (UAV/Cyber)", "Custom Alert Trigger for DIG", "Specialized Case Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'SPOfficeAutomationDetailed.jsx',
    compName: 'SPOfficeAutomationDetailed',
    mainTitle: 'AI SP OFFICE',
    subTitle: 'AUTOMATION',
    desc: 'District Command, Thana (Police Station) performance tracking, daily situation reports (DSR), & public grievance redressal',
    experts: [
      "District Command Dashboard AI", "Thana/SHO Performance Scorecard Engine", "Automated Daily Situation Report (DSR) Generator", "Public Grievance/Jan-Sunwai Tracker",
      "Force Deployment/Law & Order Optimizer", "Crime Review Meeting (CRM) Automator", "Geo-Spatial District Crime/Patrol Mapper", "VIP Movement/Protocol Tracker",
      "SP Office Automation Dashboard", "Voice-Command District Query Bot", "Automated Weekly Crime Review Report", "DIG/IG Command Sync",
      "Grievance Sentiment/Urgency Analyzer", "Burking/Non-Registration of FIR Detector", "Caste/Communal Tension Predictor", "CRM Minutes of Meeting (MoM) Generator",
      "AI Evaluator for District Policing Index", "Audit/DSR Log Generator", "Data Privacy/Complainant Info Scrubber", "District Magistrate/Collectorate Sync",
      "SP Mobile Command App", "Historical District Crime/Festival Correlator", "Reader/PRO Briefing AI", "Task/Resource Re-allocation Engine",
      "Blockchain Immutable Grievance Hash", "Anti-Tamper DSR Shield", "Mobile App for Field Inspection Notes", "Thana-wise (SHO) Performance Benchmarker",
      "Automated Alert for PHQ/CM Deadlines", "Historical Grievance Resolution Analyzer", "District Policing/Patrol SOP Trainer", "District Database Server Health Monitor",
      "Imminent Riot/L&O Breakdown Alert", "Non-Performing SHO/Beat Officer Profiler", "High-Priority Heinous/Women Crime Classifier", "AI Assisted Suspension/Reward Order Drafter",
      "District Data Storage Forecaster", "Secure VIP Movement Layout Protector", "Integration with CCTNS/Dial 112", "Public Grievance Portal (CM Helpline) Sync",
      "Election District Deployment Modeler", "Disaster District Relief Coordinator", "District Level Budget/Fund Tracker", "Custom Workflow for Magisterial Inquiries",
      "AI Driven Crime Surge Predictor", "Predictive Need for Extra Force (PAC/RAF)", "Custom Alert Trigger for SP", "District Grievance/Crime Timeline Tracker"
    ]
  },
  {
    fileName: 'PoliceHeadquartersFileRoomDetailed.jsx',
    compName: 'PoliceHeadquartersFileRoomDetailed',
    mainTitle: 'AI PHQ',
    subTitle: 'FILE ROOM',
    desc: 'Centralized Physical File Archiving, Barcode/RFID Tracking, Weeding Out Schedules & Digitization Integration',
    experts: [
      "RFID/Barcode Physical File Tracker AI", "Automated Weeding Out/Destruction Scheduler", "Central Archival Indexing Engine", "Legacy Data Digitization/OCR Sync",
      "File Movement/Pendency Tracker", "Category (A/B/C/D) Recommender AI", "Geo-Spatial Rack/Shelf Mapper", "Missing/Misplaced File Detector",
      "PHQ File Room Dashboard", "Voice-Command File Query Bot", "Automated Monthly Weeding Report", "E-Office/Dak System Sync",
      "Multi-Lingual File Noting OCR", "Pest/Moisture Damage Predictor", "Unauthorized Access/Check-out Detector", "Summary/Metadata Generator",
      "AI Evaluator for Archival Compliance", "Audit/Movement Log Generator", "Data Privacy/Classified Info Scrubber", "State Archives Sync",
      "Record Keeper Mobile Scanning App", "Historical File Retrieval Frequency Correlator", "Head Clerk/Superintendent Briefing AI", "Filing/Retrieval Task Allocator",
      "Blockchain Immutable Movement Hash", "Anti-Tamper Archival Index Shield", "Mobile App for Rapid Audit", "Branch-wise Archival Discipline Benchmarker",
      "Automated Reminder for Expired Files", "Historical Storage/Digitization Cost Analyzer", "Record Management SOP Trainer", "RFID Gateway Health Monitor",
      "Imminent Space Exhaustion Alert", "Habitual File Hoarder (Officer) Profiler", "Permanent/Historical Value Classifier", "AI Assisted Destruction Certificate Drafter",
      "Physical/Digital Storage Space Forecaster", "Secure Top-Secret File Protector", "Integration with State IT/Digitization Portals", "RTI Information Retrieval Sync",
      "Election Old Record Retrieval Modeler", "Disaster Record Preservation Coordinator", "Storage/Digitization Budget Tracker", "Custom Workflow for Historical Archiving",
      "AI Driven Weeding Workload Predictor", "Predictive Need for High-Density Storage", "Custom Alert Trigger for Nodal Officer", "File Archival to Destruction Timeline"
    ]
  },
  {
    fileName: 'HeadquartersVisitorPassDetailed.jsx',
    compName: 'HeadquartersVisitorPassDetailed',
    mainTitle: 'AI HEADQUARTERS',
    subTitle: 'VISITOR PASS',
    desc: 'E-Pass Generation, Facial Recognition Entry, Background Vetting & Restricted Area Access Control',
    experts: [
      "Facial Recognition Entry/Exit AI", "Pre-Scheduled E-Pass Generator", "Real-Time Background Vetting/CCTNS Linker", "Restricted Area/Zonal Access Controller",
      "Overstay/Loitering Alert Bot", "Repeat Visitor/Middleman Identifier", "Geo-Spatial Visitor Movement Mapper", "VIP/Dignitary Protocol Automator",
      "Visitor Management Dashboard", "Voice-Command Access Query Bot", "Automated Daily Footfall Report", "PHQ Security/Sentry Sync",
      "Multi-Lingual ID/Aadhaar OCR Scanner", "Aggressive/Suspicious Behavior Detector", "Fake/Forged ID Predictor", "Purpose of Visit Categorizer",
      "AI Evaluator for Campus Security Index", "Audit/Access Log Generator", "Data Privacy/Visitor Data Scrubber", "State Intelligence/CID Sync",
      "Officer Appointment Approval App", "Historical Protest/Breach Correlator", "Chief Security Officer Briefing AI", "Escort/Sentry Task Allocator",
      "Blockchain Immutable Access Hash", "Anti-Tamper Visitor Log Shield", "Mobile App for QR Code E-Pass", "Branch-wise Visitor Volume Benchmarker",
      "Automated Alert for Unauthorized Zone Entry", "Historical Visitor Trend Analyzer", "Campus Security/Access SOP Trainer", "Turnstile/Biometric Gateway Health Monitor",
      "Imminent Security Breach/Mob Alert", "Frequent/Vexatious Petitioner Profiler", "High-Risk/Blacklisted Individual Classifier", "AI Assisted Ban/Blacklist Order Drafter",
      "Visitor Image/Data Storage Forecaster", "Secure Classified Zone Blueprint Protector", "Integration with CCTNS/Crime Branch", "Public Grievance Appointment Sync",
      "Election Protest/Delegation Modeler", "Disaster Media/Relief Worker Access Coordinator", "Security Infrastructure Budget Tracker", "Custom Workflow for Media/Press Briefing",
      "AI Driven Peak Footfall Predictor", "Predictive Need for Extra Security Deployment", "Custom Alert Trigger for Security IG", "Visitor Entry to Exit Timeline Tracker"
    ]
  },
  {
    fileName: 'HeadquartersMeetingSchedulerDetailed.jsx',
    compName: 'HeadquartersMeetingSchedulerDetailed',
    mainTitle: 'AI HEADQUARTERS',
    subTitle: 'MEETING SCHEDULER',
    desc: 'Conference Room Booking, Calendar Sync, Automated Agenda/MoM Generation & Video Conference Linkages',
    experts: [
      "Conference Room/Resource Optimizer AI", "Outlook/Google Calendar Sync Engine", "Automated Agenda/MoM (Minutes of Meeting) Generator", "Video Conference (NIC/Zoom) Link Automator",
      "Participant Conflict/Availability Resolver", "Audio-to-Text Transcription Bot", "Geo-Spatial PHQ Meeting Room Mapper", "Action Item/Task Extractor AI",
      "Meeting Scheduler Dashboard", "Voice-Command Booking Bot", "Automated Weekly Meeting Productivity Report", "IT/Network Department Sync",
      "Multi-Lingual Transcription Engine", "Off-Topic/Time-Wastage Analyzer", "Double-Booking/Clash Predictor", "Meeting Summary/Abstract Generator",
      "AI Evaluator for Meeting Efficiency", "Audit/Booking Log Generator", "Data Privacy/Classified Discussion Scrubber", "DGP/ADG Secretariat Sync",
      "Officer Calendar Mobile App", "Historical Delay in ATR (Action Taken) Correlator", "Staff Officer Briefing AI", "Catering/IT Support Task Allocator",
      "Blockchain Immutable MoM Hash", "Anti-Tamper Meeting Record Shield", "Mobile App for Quick RSVP", "Branch-wise Meeting Frequency Benchmarker",
      "Automated Reminder for Action Items", "Historical Meeting Cost (Time) Analyzer", "Conference Protocol SOP Trainer", "VC Equipment/Network Health Monitor",
      "Imminent Schedule Clash (CM/DGP) Alert", "Habitual Latecomer/Absentee Profiler", "Top-Secret/Intelligence Briefing Classifier", "AI Assisted Rescheduling Notice Drafter",
      "Video/Audio Recording Storage Forecaster", "Secure Classified MoM Protector", "Integration with E-Office (for file approval)", "External Agency (MHA/CBI) VC Sync",
      "Election Video Conference Marathon Modeler", "Disaster Emergency Command Meeting Coordinator", "Catering/IT Maintenance Budget Tracker", "Custom Workflow for Media Briefings",
      "AI Driven Meeting Duration Predictor", "Predictive Need for VC Bandwidth Upgrade", "Custom Alert Trigger for Nodal Officer", "Meeting Agenda to ATR Timeline Tracker"
    ]
  },
  {
    fileName: 'HeadquartersApprovalWorkflowDetailed.jsx',
    compName: 'HeadquartersApprovalWorkflowDetailed',
    mainTitle: 'AI HEADQUARTERS',
    subTitle: 'APPROVAL WORKFLOW',
    desc: 'Multi-Level Hierarchy Routing, Financial Power Matrix Verification, Digital Signature Integration & Delay Alerts',
    experts: [
      "Dynamic Hierarchy/Matrix Routing Engine", "Financial Delegation of Power (DOP) Validator", "DSC (Digital Signature Certificate) Integrator", "Bottleneck/Delay Alert Bot",
      "Rule/Policy Citation Checker AI", "Automated Escalation/Bypass Engine", "Geo-Spatial File Origin/Branch Mapper", "Cross-Department (Finance/Law) Linker",
      "Approval Workflow Dashboard", "Voice-Command File Tracking Bot", "Automated Weekly Pendency/Clearance Report", "E-Office/NIC System Sync",
      "Multi-Lingual Noting/Comment Translation", "Contradictory/Vague Comment Detector", "Unauthorized Approval/Bypass Predictor", "Summary of Objections Generator",
      "AI Evaluator for Processing Speed", "Audit/Approval Trail Log Generator", "Data Privacy/Classified File Scrubber", "Finance/Establishment Department Sync",
      "Officer Approval Mobile App", "Historical Red-Tape/Query Loop Correlator", "Supervisory Officer Briefing AI", "Task/Clarification Delegation Engine",
      "Blockchain Immutable Approval Hash", "Anti-Tamper Digital File Shield", "Mobile App for Quick DSC Sign", "Desk-wise Approval Speed Benchmarker",
      "Automated Reminder for Urgent Files", "Historical Approval/Rejection Rate Analyzer", "Secretariat/Noting SOP Trainer", "E-Office Gateway Health Monitor",
      "Imminent Fund Lapse/Deadline Alert", "Habitual File Delayer (Queries) Profiler", "High-Priority/Cabinet Memo Classifier", "AI Assisted Standard Objection Drafter",
      "Digital File/Noting Storage Forecaster", "Secure Top-Secret Approval Protector", "Integration with State Treasury/IFMS", "Citizen Portal Sync (for public services)",
      "Election Urgent Financial Approval Modeler", "Disaster Emergency Procurement Approval Coordinator", "E-Office/DSC Licensing Budget Tracker", "Custom Workflow for Top-Secret Clearances",
      "AI Driven Approval Outcome/Time Predictor", "Predictive Need for Committee Formation", "Custom Alert Trigger for Nodal Officer", "Initiation to Final Approval Timeline"
    ]
  },
  {
    fileName: 'HeadquartersCircularMonitoringDetailed.jsx',
    compName: 'HeadquartersCircularMonitoringDetailed',
    mainTitle: 'AI HEADQUARTERS',
    subTitle: 'CIRCULAR MONITORING',
    desc: 'Issuance Tracking, Compliance Reporting from Districts, Contradiction Checks against Old Circulars & Archiving',
    experts: [
      "Circular Issuance/Distribution Engine", "District/Unit Compliance (ATR) Tracker AI", "Old Circular Contradiction/Conflict Detector", "Semantic Archiving/Tagging Bot",
      "Read-Receipt/Acknowledgment Tracker", "Effectiveness/Implementation Scorer", "Geo-Spatial District Compliance Heatmapper", "Key Clause/Action Item Extractor AI",
      "Circular Monitoring Dashboard", "Voice-Command Policy Query Bot", "Automated Quarterly Compliance Report", "E-Office/State Police Portal Sync",
      "Multi-Lingual Translation (State/English)", "Vague/Ambiguous Wording Highlighting AI", "Implementation Resistance/Delay Predictor", "Summary/Abstract Generator",
      "AI Evaluator for Policy Clarity", "Audit/Distribution Log Generator", "Data Privacy/Restricted Circular Scrubber", "Law/Training Department Sync",
      "Field Officer Compliance Mobile App", "Historical Circular Success/Failure Correlator", "DGP/ADG (Admin) Briefing AI", "Remedial Training/Notice Allocator",
      "Blockchain Immutable Circular Hash", "Anti-Tamper Policy Document Shield", "Mobile App for Quick Compliance Update", "District-wise Implementation Benchmarker",
      "Automated Reminder for Action Taken Report", "Historical Policy Revision Analyzer", "Policy Drafting/Implementation SOP Trainer", "Archive Database Health Monitor",
      "Imminent Implementation Failure Alert", "Habitual Defaulter District Profiler", "High-Impact/Service Rule Change Classifier", "AI Assisted Corrigendum Drafter",
      "Policy/Archive Storage Forecaster", "Secure Restricted Circular Protector", "Integration with HRMS/Appraisals", "Public Information Portal Sync (for unclassified)",
      "Election Guideline Circular Modeler", "Disaster SOP Circular Effectiveness Coordinator", "Policy Printing/Distribution Budget Tracker", "Custom Workflow for Urgent Directives",
      "AI Driven Compliance/Resistance Predictor", "Predictive Need for Video Conference Briefing", "Custom Alert Trigger for DGP", "Circular Issuance to Implementation Timeline"
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

console.log('All 10 Police Headquarters Management Modules files generated successfully.');
