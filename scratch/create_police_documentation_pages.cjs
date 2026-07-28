const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'GovernmentOrderRepositoryDetailed.jsx',
    compName: 'GovernmentOrderRepositoryDetailed',
    mainTitle: 'AI GOVERNMENT ORDER',
    subTitle: 'REPOSITORY',
    desc: 'Smart Search, Semantic Tagging, Supersession Alerts & Cross-Reference Mapping',
    experts: [
      "Semantic Search & Tagging AI", "Superseded/Amended Order Alert Bot", "Cross-Reference Linker AI", "OCR/Digitization Engine",
      "Topic Clustering/Categorization Bot", "Keyword/Clause Extraction AI", "Geo-Spatial Applicability Mapper", "Compliance/Deadline Tracker",
      "GO Repository Dashboard", "Voice-Command Order Query Bot", "Automated Monthly Update Report", "State Secretariat/MHA Sync",
      "Multi-Lingual Translation (State/English)", "Contradiction/Conflict Detector", "Fake/Forged Order Identifier", "Impact Abstract/Summary Generator",
      "AI Evaluator for Implementation Rate", "Audit/Search Log Generator", "Data Privacy/Classification Scrubber", "Law/Legal Department Sync",
      "Field Officer Mobile Access App", "Historical Policy Shift Correlator", "DGP/Home Secretary Briefing AI", "Branch Task/Compliance Allocator",
      "Blockchain Immutable GO Hash", "Anti-Tamper Official Record Shield", "Mobile App for Quick Reference", "Unit-wise Compliance Benchmarker",
      "Automated Reminder for New Orders", "Historical Order Frequency Analyzer", "Policy/Legal SOP Trainer", "Repository DB Server Health Monitor",
      "Imminent Compliance Deadline Alert", "Non-Compliance/Defaulter Profiler", "High-Priority/Court Directed GO Classifier", "AI Assisted Clarification Drafter",
      "Document Storage/Archive Forecaster", "Secure Classified Order Protector", "Integration with E-Courts/Tribunals", "Public RTI Portal Sync (for unclassified GOs)",
      "Election Code of Conduct Order Modeler", "Disaster/Emergency Decree Coordinator", "Digitization/Archive Budget Tracker", "Custom Workflow for Restricted Orders",
      "AI Driven Policy Impact Predictor", "Predictive Need for Standing Order Revision", "Custom Alert Trigger for Nodal Officers", "Order Lifecycle/Validity Timeline Tracker"
    ]
  },
  {
    fileName: 'CircularImpactAnalyzerDetailed.jsx',
    compName: 'CircularImpactAnalyzerDetailed',
    mainTitle: 'AI CIRCULAR IMPACT',
    subTitle: 'ANALYZER',
    desc: 'Compliance Tracking, Ground-Level Feedback Sentiment, Contradiction Detection & Effectiveness Scoring',
    experts: [
      "Ground-Level Feedback Sentiment AI", "Contradiction/Conflict Detector Bot", "Compliance/Action Taken Tracker", "Effectiveness/Impact Scoring Engine",
      "Implementation Bottleneck Mapper", "Read-Receipt/Acknowledgment Tracker", "Geo-Spatial Compliance Heatmapper", "Key Influencer/Adopter Identifier",
      "Circular Impact Dashboard", "Voice-Command Compliance Query Bot", "Automated Quarterly Effectiveness Report", "Field Unit/Thana Sync Bot",
      "Multi-Lingual Feedback Translation", "Vague/Ambiguous Clause Highlighting AI", "Resistance/Reluctance Predictor", "Summary/Abstract Generator",
      "AI Evaluator for Policy Clarity", "Audit/Feedback Log Generator", "Data Privacy/Anonymization Engine", "Training Department Sync",
      "Officer Feedback/Reporting App", "Historical Circular Success Correlator", "IG/ADG Administration Briefing AI", "Remedial Training/Action Allocator",
      "Blockchain Immutable Compliance Hash", "Anti-Tamper Feedback Shield", "Mobile App for Quick Compliance Update", "District-wise Implementation Benchmarker",
      "Automated Reminder for Action Taken Report", "Historical Policy Revision Analyzer", "Circular/Directive SOP Trainer", "Analytics Server Health Monitor",
      "Imminent Implementation Failure Alert", "Habitual Defaulter Unit Profiler", "High-Impact/Critical Circular Classifier", "AI Assisted Corrigendum Drafter",
      "Analytics Data Storage Forecaster", "Secure Internal Feedback Protector", "Integration with HRMS Appraisals", "Citizen Feedback Loop Sync",
      "Election Guideline Compliance Modeler", "Disaster SOP Effectiveness Coordinator", "Training/Sensitization Budget Tracker", "Custom Workflow for Sensitive Circulars",
      "AI Driven Resistance Predictor", "Predictive Need for Video Conference Briefing", "Custom Alert Trigger for DGP", "Circular Implementation Timeline Tracker"
    ]
  },
  {
    fileName: 'StandingOrderManagementDetailed.jsx',
    compName: 'StandingOrderManagementDetailed',
    mainTitle: 'AI STANDING ORDER',
    subTitle: 'MANAGEMENT',
    desc: 'Drafting Assistance, Legacy Consolidation, Periodic Review Reminders & Version Control',
    experts: [
      "Drafting/Formatting Assistant AI", "Legacy Order Consolidator Engine", "Periodic Review/Expiry Reminder Bot", "Version Control/Revision Tracker",
      "Cross-Reference to IPC/BNS AI", "Contradictory Clause Detector", "Geo-Spatial Applicability Mapper", "Approval Matrix/Hierarchy Automator",
      "Standing Order Dashboard", "Voice-Command SO Query Bot", "Automated Annual Review Report", "Law/Prosecution Department Sync",
      "Multi-Lingual Translation Engine", "Obsolete/Redundant Rule Identifier", "Plagiarism/Duplication Checker", "Executive Summary/Abstract Generator",
      "AI Evaluator for Legal Soundness", "Audit/Approval Log Generator", "Data Privacy/Internal Draft Scrubber", "State Police Headquarters Sync",
      "Officer Quick Reference Mobile App", "Historical Rule Amendment Correlator", "DGP/Legal Advisor Briefing AI", "Review Committee Task Allocator",
      "Blockchain Immutable SO Hash", "Anti-Tamper Rulebook Shield", "Mobile App for Draft Review", "Implementation Rate Benchmarker",
      "Automated Alert for Outdated Orders", "Historical Revision Frequency Analyzer", "Police Manual/SOP Trainer", "Document Server Health Monitor",
      "Imminent Legal Challenge/Conflict Alert", "Non-Compliance/Defaulter Profiler", "High-Stakes/Service Rule SO Classifier", "AI Assisted Amendment Drafter",
      "Rulebook/Archive Storage Forecaster", "Secure Restricted Order Protector", "Integration with Police Academy/Training", "RTI/Public Information Portal Sync",
      "Election Duty Standing Order Modeler", "Disaster Response SO Modification Coordinator", "Legal Consultation/Drafting Budget Tracker", "Custom Workflow for Emergency SO",
      "AI Driven Legal Implication Predictor", "Predictive Need for Comprehensive Overhaul", "Custom Alert Trigger for Chief Secretary", "Standing Order Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'OfficeNoteSheetAssistantDetailed.jsx',
    compName: 'OfficeNoteSheetAssistantDetailed',
    mainTitle: 'AI OFFICE NOTE SHEET',
    subTitle: 'ASSISTANT',
    desc: 'Auto-Drafting, Precedent Searching, Rule Citation Suggestions & Hierarchy Routing',
    experts: [
      "Auto-Drafting/Templating Engine AI", "Historical Precedent Search Bot", "Rule/Act Citation Suggester AI", "Automated Hierarchy Routing Engine",
      "Sentiment/Tone Formality Checker", "Financial Approval/Budget Rule Linker", "Geo-Spatial File Origin Mapper", "Grammar/Spell Check & Formatting Bot",
      "Note Sheet Assistant Dashboard", "Voice-Command File Query Bot", "Automated Weekly Pendency Report", "E-Office/Dak System Sync",
      "Multi-Lingual Note Translation", "Contradictory Noting Detector", "Unauthorized Noting/Overwrite Predictor", "Summary/Abstract of Noting Generator",
      "AI Evaluator for Noting Quality", "Audit/Routing Log Generator", "Data Privacy/Classified Content Scrubber", "Finance/Establishment Department Sync",
      "Officer Approval Mobile App", "Historical Delay/Bottleneck Correlator", "Supervisory Officer Briefing AI", "Task/Delegation Engine",
      "Blockchain Immutable Noting Hash", "Anti-Tamper Digital Signature Shield", "Mobile App for Quick Remarks", "Desk-wise Processing Speed Benchmarker",
      "Automated Reminder for Pending Files", "Historical Approval Rate Analyzer", "File Processing/Noting SOP Trainer", "E-Office Gateway Health Monitor",
      "Imminent File Deadlock/Stall Alert", "Habitual Objector/Delayer Profiler", "High-Priority/VIP File Classifier", "AI Assisted Clarification Note Drafter",
      "Digital File Storage Forecaster", "Secure Top-Secret File Protector", "Integration with State Treasury", "RTI Information Extraction Sync",
      "Election Urgent Transfer File Modeler", "Disaster Emergency Fund Approval Coordinator", "E-Office Licensing Budget Tracker", "Custom Workflow for Top-Secret Clearances",
      "AI Driven Approval Outcome Predictor", "Predictive Need for Inter-Department Meeting", "Custom Alert Trigger for Nodal Officer", "Note Sheet Routing Timeline Tracker"
    ]
  },
  {
    fileName: 'DispatchEnvelopeTrackingDetailed.jsx',
    compName: 'DispatchEnvelopeTrackingDetailed',
    mainTitle: 'AI DISPATCH ENVELOPE',
    subTitle: 'TRACKING',
    desc: 'Barcode/QR Generation, Postage Optimization, Delivery Confirmation & Return-to-Sender Analytics',
    experts: [
      "Barcode/QR Code Generation Engine", "Postage/Weight Optimization AI", "Delivery Confirmation/RTO Tracker", "Courier/India Post API Integrator",
      "Bulk Dispatch/Sorting Optimizer", "Address Verification/Correction AI", "Geo-Spatial Delivery Route Mapper", "Sender/Branch Cost Apportionment",
      "Envelope Tracking Dashboard", "Voice-Command Dispatch Query Bot", "Automated Daily Postal Expense Report", "Postal Department/Courier Sync",
      "Multi-Lingual Address Translation", "Delay in Transit Predictor", "Fake/Wrong Address Detector", "Postage Stamp/Franking Inventory Monitor",
      "AI Evaluator for Dispatch Efficiency", "Audit/Tracking Log Generator", "Data Privacy/Recipient Info Scrubber", "Finance/Accounts Sync",
      "Dispatch Rider/Clerk Mobile App", "Historical Return-to-Sender Correlator", "Head Clerk/Superintendent Briefing AI", "Courier Vendor Allocator",
      "Blockchain Immutable Dispatch Hash", "Anti-Tamper Tracking Shield", "Mobile App for Proof of Delivery", "Branch-wise Dispatch Volume Benchmarker",
      "Automated Reminder for Undelivered Post", "Historical Postal Expense Analyzer", "Dispatch/Postage SOP Trainer", "Courier API Health Monitor",
      "Imminent Delivery Failure Alert", "High Return/Bounce Rate Profiler", "Urgent/Court Notice Envelope Classifier", "AI Assisted Reminder/Resend Drafter",
      "Dispatch Log Storage Forecaster", "Secure Confidential Envelope Protector", "Integration with E-Courts (for summons)", "Citizen Tracking Portal Sync",
      "Election Notice Dispatch Modeler", "Disaster Advisory Dispatch Coordinator", "Postage/Courier Budget Tracker", "Custom Workflow for Special Messenger",
      "AI Driven Delivery Time Predictor", "Predictive Need for New Courier Empanelment", "Custom Alert Trigger for SP/SSP", "Envelope Dispatch to Delivery Timeline"
    ]
  },
  {
    fileName: 'GazetteNotificationArchiveDetailed.jsx',
    compName: 'GazetteNotificationArchiveDetailed',
    mainTitle: 'AI GAZETTE NOTIFICATION',
    subTitle: 'ARCHIVE',
    desc: 'OCR Digitization, Clause Extraction, Date of Applicability Tracking & Legal Cross-Referencing',
    experts: [
      "OCR/Historical Digitization Engine", "Clause/Section Extraction AI", "Date of Applicability/Enforcement Tracker", "Legal/Act Cross-Referencing Linker",
      "Semantic Search & Tagging AI", "Superseded/Amended Notification Alert Bot", "Geo-Spatial Jurisdiction/Boundary Mapper", "Topic Clustering/Categorization Bot",
      "Gazette Archive Dashboard", "Voice-Command Notification Query Bot", "Automated Monthly Update Report", "State Printing Press/Secretariat Sync",
      "Multi-Lingual Translation (State/English)", "Contradiction/Conflict Detector", "Fake/Forged Gazette Identifier", "Impact Abstract/Summary Generator",
      "AI Evaluator for Legal Applicability", "Audit/Search Log Generator", "Data Privacy/Anonymization Scrubber", "Law/Prosecution Department Sync",
      "Field Officer Reference App", "Historical Boundary/Jurisdiction Shift Correlator", "DGP/Legal Advisor Briefing AI", "Branch Update/Compliance Allocator",
      "Blockchain Immutable Gazette Hash", "Anti-Tamper Official Record Shield", "Mobile App for Quick Reference", "Unit-wise Legal Awareness Benchmarker",
      "Automated Reminder for New Notifications", "Historical Amendment Frequency Analyzer", "Legal Procedure/SOP Trainer", "Archive Database Health Monitor",
      "Imminent Legal Challenge/Loophole Alert", "Non-Compliance/Ignorance Profiler", "High-Priority/Service Rule Classifier", "AI Assisted Circular Generation from Gazette",
      "Document Storage/Archive Forecaster", "Secure Sensitive Notification Protector", "Integration with E-Courts/Tribunals", "Public Information Portal Sync",
      "Election Boundary Delimitation Modeler", "Disaster/Emergency Notification Coordinator", "Digitization/Archive Budget Tracker", "Custom Workflow for Restricted Notifications",
      "AI Driven Legal Impact Predictor", "Predictive Need for Police Manual Update", "Custom Alert Trigger for Nodal Officers", "Gazette Notification Lifecycle Timeline"
    ]
  },
  {
    fileName: 'RecordClassificationEngineDetailed.jsx',
    compName: 'RecordClassificationEngineDetailed',
    mainTitle: 'AI RECORD CLASSIFICATION',
    subTitle: 'ENGINE',
    desc: 'Auto-tagging (A, B, C, D Category), Retention Period Assignment, Weeding Out Alerts & Archival Indexing',
    experts: [
      "Auto-tagging/Classification (A, B, C, D) AI", "Retention Period Assignment Bot", "Weeding Out/Destruction Alert Engine", "Semantic Archival Indexing AI",
      "Content Analysis/Category Recommender", "Duplicate/Redundant Record Detector", "Geo-Spatial Record Room Mapper", "Digital/Physical Location Sync",
      "Record Classification Dashboard", "Voice-Command Record Query Bot", "Automated Monthly Weeding Report", "Record Room/Archives Department Sync",
      "Multi-Lingual Content OCR", "Misclassification/Error Detector AI", "Unauthorized Destruction Predictor", "Summary/Metadata Generator",
      "AI Evaluator for Archival Compliance", "Audit/Classification Log Generator", "Data Privacy/Classified Info Scrubber", "Law/Legal Department Sync (for retention rules)",
      "Record Keeper Mobile App", "Historical Record Accumulation Correlator", "Superintendent/Head Clerk Briefing AI", "Weeding/Shredding Task Allocator",
      "Blockchain Immutable Classification Hash", "Anti-Tamper Record Index Shield", "Mobile App for Barcode Scanning", "Branch-wise Archival Discipline Benchmarker",
      "Automated Reminder for Expired Records", "Historical Storage Cost Analyzer", "Record Management SOP Trainer", "Index Database Health Monitor",
      "Imminent Space Exhaustion Alert", "Habitual Record Hoarder Profiler", "Permanent/Historical Value Classifier", "AI Assisted Destruction Certificate Drafter",
      "Physical/Digital Storage Space Forecaster", "Secure Top-Secret Record Protector", "Integration with State Archives", "RTI Information Retrieval Sync",
      "Election Record Retention Modeler", "Disaster Record Preservation Coordinator", "Storage/Digitization Budget Tracker", "Custom Workflow for Historical Archiving",
      "AI Driven Weeding Workload Predictor", "Predictive Need for More Storage Space", "Custom Alert Trigger for Nodal Officer", "Record Retention Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'LegacyRecordConversionTrackerDetailed.jsx',
    compName: 'LegacyRecordConversionTrackerDetailed',
    mainTitle: 'AI LEGACY RECORD',
    subTitle: 'CONVERSION TRACKER',
    desc: 'Scanning Progress Monitoring, OCR Quality Checks, Metadata Tagging & Vendor SLA Management',
    experts: [
      "Scanning Progress/Volume Tracker AI", "OCR Quality/Accuracy Check Engine", "Automated Metadata Tagging Bot", "Vendor SLA/Penalty Calculator",
      "Faded Text/Handwriting Enhancement AI", "Missing Page/Gap Detector", "Geo-Spatial Document Origin Mapper", "Batch Processing/Queue Optimizer",
      "Conversion Tracker Dashboard", "Voice-Command Progress Query Bot", "Automated Weekly Digitization Report", "IT/Modernization Department Sync",
      "Multi-Lingual Handwriting (Urdu/Hindi) OCR", "Data Corruption/Formatting Error Detector", "Fake/Manipulated Scan Predictor", "Content Summarizer/Abstractor AI",
      "AI Evaluator for Digitization Quality", "Audit/QA Log Generator", "Data Privacy/PII Masking Engine", "Record Room/Archives Sync",
      "QA Inspector Mobile App", "Historical Record Decay/Loss Correlator", "Nodal Officer/SP Briefing AI", "Vendor/Scanner Task Allocator",
      "Blockchain Immutable Digital Copy Hash", "Anti-Tamper Digitized Record Shield", "Mobile App for Random QA Checks", "Vendor-wise Digitization Speed Benchmarker",
      "Automated Reminder for Pending Batches", "Historical Digitization Cost Analyzer", "Digitization QA SOP Trainer", "Storage/Cloud Gateway Health Monitor",
      "Imminent Storage/Budget Exhaustion Alert", "Substandard Vendor/Contractor Profiler", "Fragile/Historical Document Classifier", "AI Assisted Vendor Notice Drafter",
      "Digital Storage/Cloud Capacity Forecaster", "Secure Classified Legacy Record Protector", "Integration with CCTNS/E-Office", "Public Portal Sync (for unclassified historical data)",
      "Election Old Record Digitization Modeler", "Disaster Recovery Backup Coordinator", "Digitization Project Budget Tracker", "Custom Workflow for Fragile/Torn Documents",
      "AI Driven Project Completion Predictor", "Predictive Need for Cloud Storage Upgrade", "Custom Alert Trigger for IG Modernization", "Legacy Record Conversion Timeline Tracker"
    ]
  },
  {
    fileName: 'MicrofilmDigitizationManagerDetailed.jsx',
    compName: 'MicrofilmDigitizationManagerDetailed',
    mainTitle: 'AI MICROFILM DIGITIZATION',
    subTitle: 'MANAGER',
    desc: 'Film Degradation Analysis, Image Enhancement, Frame-to-Digital Indexing & Archive Sync',
    experts: [
      "Film Degradation/Vinegar Syndrome Analyzer AI", "Image Enhancement/Scratch Removal Bot", "Frame-to-Digital Indexing/Tagging Engine", "Microfilm/Fiche Format Converter AI",
      "Missing Frame/Splice Detector", "High-Resolution Scan Optimizer", "Geo-Spatial Historical Record Mapper", "Metadata/Keyword Linker Bot",
      "Microfilm Digitization Dashboard", "Voice-Command Archive Query Bot", "Automated Weekly Processing Report", "State Archives/Historical Dept Sync",
      "Old Script/Font OCR Engine", "Contrast/Exposure Correction AI", "Fungal/Mold Damage Predictor", "Summary/Catalog Generator",
      "AI Evaluator for Image Fidelity", "Audit/QA Log Generator", "Data Privacy/Classified Frame Scrubber", "Record Room Sync",
      "Archivist QA Mobile App", "Historical Record Value Correlator", "Nodal Officer/Historian Briefing AI", "Scanner Technician Task Allocator",
      "Blockchain Immutable Digital Frame Hash", "Anti-Tamper Historical Record Shield", "Mobile App for Random Frame Checks", "Batch-wise Processing Speed Benchmarker",
      "Automated Reminder for Degraded Reels", "Historical Archival Cost Analyzer", "Microfilm Handling/Digitization SOP Trainer", "High-Res Storage Health Monitor",
      "Imminent Irreversible Film Loss Alert", "Substandard Equipment/Vendor Profiler", "High-Value/Historical Reel Classifier", "AI Assisted Preservation Protocol Drafter",
      "Cold Storage/Cloud Capacity Forecaster", "Secure Classified Microfilm Protector", "Integration with National Archives", "Public Historical Research Portal Sync",
      "Election Old Data Retrieval Modeler", "Disaster Recovery Backup Coordinator", "Digitization Equipment Budget Tracker", "Custom Workflow for Severely Damaged Film",
      "AI Driven Processing Time Predictor", "Predictive Need for Physical Film Relocation", "Custom Alert Trigger for IG Modernization", "Microfilm Digitization Lifecycle Timeline"
    ]
  },
  {
    fileName: 'OfficialRecordAuthenticationDetailed.jsx',
    compName: 'OfficialRecordAuthenticationDetailed',
    mainTitle: 'AI OFFICIAL RECORD',
    subTitle: 'AUTHENTICATION',
    desc: 'Digital Signature Verification, Watermarking, Tamper Detection & Blockchain Hashing for Integrity',
    experts: [
      "Digital Signature (DSC) Verification Engine", "Digital/Invisible Watermarking AI", "Tamper/Modification Detection Bot", "Blockchain Hashing/Immutability Logger",
      "Forged Seal/Stamp OCR Detector", "Metadata/EXIF Data Analyzer", "Geo-Spatial Authentication Request Mapper", "Document Version/Hash Comparator",
      "Record Authentication Dashboard", "Voice-Command Validity Query Bot", "Automated Monthly Tamper Attempt Report", "State IT Department/Certifying Authority Sync",
      "Cross-Reference Verification with Source", "Deepfake/AI-Manipulated Image Detector", "Expired/Revoked Signature Predictor", "Audit Trail/Chain of Custody Generator",
      "AI Evaluator for Document Integrity", "Audit/Verification Log Generator", "Data Privacy/PII Scrubber", "Law/Prosecution Department Sync",
      "Investigating Officer Verification App", "Historical Forgery/Fraud Correlator", "Supervisory Officer/Cyber Cell Briefing AI", "Forensic Review Task Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Cryptographic Shield", "Mobile App for QR/Barcode Verification", "Department-wise Fraud Attempt Benchmarker",
      "Automated Alert for Failed Authentication", "Historical Verification Cost/Time Analyzer", "Digital Authentication SOP Trainer", "Blockchain/Crypto Server Health Monitor",
      "Imminent Large-Scale Forgery Alert", "Habitual Forger/Syndicate Profiler", "High-Stakes Court Evidence Classifier", "AI Assisted FIR/Legal Action Drafter",
      "Hash Ledger Storage Forecaster", "Secure Master Key/Certificate Protector", "Integration with E-Courts/DigiLocker", "Citizen Document Verification Portal Sync",
      "Election Affidavit Authentication Modeler", "Disaster Relief Claim Verification Coordinator", "Cyber Security/Crypto Budget Tracker", "Custom Workflow for Disputed Documents",
      "AI Driven Forgery Trend Predictor", "Predictive Need for Upgraded Encryption", "Custom Alert Trigger for Nodal Officer", "Document Authentication/Validity Timeline"
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

console.log('All 10 Police Documentation Modules files generated successfully.');
