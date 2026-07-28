const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'RetiredOfficerExperienceArchiveDetailed.jsx',
    compName: 'RetiredOfficerExperienceArchiveDetailed',
    mainTitle: 'AI RETIRED OFFICER EXPERIENCE',
    subTitle: 'ARCHIVE',
    desc: 'Interview transcription, tacit knowledge extraction, mentorship pairing & historical riot negotiation case studies',
    experts: [
      "Interview Audio/Video Transcription NLP", "Tacit Knowledge/Tradecraft Extractor AI", "Retired Officer-Trainee Mentorship Matcher", "Historical Riot/Crisis Negotiation Case Study Analyzer",
      "Investigative Modus Operandi (MO) Archiver", "Semantic Search/Query Engine for Past Cases", "Geo-Spatial Mapping of Historical Postings", "Cross-Referencing with Current Unsolved Cases AI",
      "Experience Archive Dashboard", "Voice-Command History Query Bot", "Automated Monthly Tradecraft Digest", "Police Training Academy/PTC Sync",
      "Knowledge Loss/Retirement Drain Risk Predictor", "Outdated SOP/Obsolete Tactic Flagging Engine", "Language/Dialect Translation AI for Interrogations", "Subject Matter Expert (SME) Directory Generator",
      "AI Evaluator for Tacit Knowledge Retention", "Audit/Archive Access Log Generator", "Data Privacy/Classified Identity Scrubber", "Pension/Welfare Directorate Sync",
      "Retired Officer Mobile/Audio Upload App", "Historical Success/Failure Correlator", "DGP (Training/HR) Briefing AI", "Debriefing/Interview Scheduling Allocator",
      "Blockchain Immutable Archive Hash", "Anti-Tamper Classified Experience Shield", "Mobile App for Quick Tactic Reference (for Trainees)", "District-wise Knowledge Retention Benchmarker",
      "Automated Alert for Impending SME Retirement", "Historical Training Cost Analyzer", "Mentorship/Experience Sharing SOP Trainer", "Audio/Video Cloud Storage Health Monitor",
      "Imminent Loss of Crucial Domain Expertise Alert", "Unresponsive/Unwilling Participant Profiler", "High-Priority (Anti-Terror/CID) Knowledge Classifier", "AI Assisted Honorarium/Recognition Drafter",
      "Archive Storage/Indexing Forecaster", "Secure Classified Operation Protector", "Integration with National Police Mission", "State CID/Intelligence Branch Sync",
      "Election Booth-Management Historical Tactics Modeler", "Disaster Rescue/Evacuation Historical Precedent Coordinator", "Recording/Archiving Infrastructure Budget Tracker", "Custom Workflow for Gallantry Awardees",
      "AI Driven Mentorship Match Probability Predictor", "Predictive Need for Specialized Tradecraft Manuals", "Custom Alert Trigger for IG Training", "Retirement to Debriefing/Archiving Timeline"
    ]
  },
  {
    fileName: 'BestInvestigationPracticesLibraryDetailed.jsx',
    compName: 'BestInvestigationPracticesLibraryDetailed',
    mainTitle: 'AI BEST INVESTIGATION PRACTICES',
    subTitle: 'LIBRARY',
    desc: 'Court acquittal/conviction analysis, forensics collection SOPs, cyber-crime tracking guides & cross-state MO sharing',
    experts: [
      "Court Acquittal/Conviction Ratio Analyzer AI", "Forensic Evidence Collection SOP Validator", "Cyber/Financial Crime Tracking Guide Generator", "Cross-State Modus Operandi (MO) Sharing Engine",
      "Charge-sheet Flaw/Loophole Detector NLP", "Supreme/High Court Ruling Linker AI", "Geo-Spatial Organized Crime Best-Practice Mapper", "Witness/Victim Interrogation Tactics Extractor",
      "Investigation Practices Dashboard", "Voice-Command Case Law Query Bot", "Automated Weekly Investigative Insights Report", "State Crime Records Bureau (SCRB) Sync",
      "Investigative Pitfall/Common Error Predictor", "Procedural Lapses (CrPC/BNS) Red-Flagger", "New/Emerging Crime Trend Analyzer", "Evidence Chain-of-Custody Optimization Scorer",
      "AI Evaluator for Investigation Quality Index", "Audit/Library Access Log Generator", "Data Privacy/Victim PII Scrubber", "Directorate of Prosecution/Legal Sync",
      "Investigating Officer (IO) Mobile Toolkit App", "Historical Investigation Failure Correlator", "IG (CID/Crime) Briefing AI", "Refresher Training/Case Review Allocator",
      "Blockchain Immutable Case-Law Hash", "Anti-Tamper Evidence SOP Shield", "Mobile App for On-Scene Forensic Guidance", "Zone-wise Conviction Rate Benchmarker",
      "Automated Alert for High-Profile Acquittals", "Historical Litigation/Appeal Cost Analyzer", "Investigation/Charge-sheeting SOP Trainer", "Legal Database/API Sync Monitor",
      "Imminent Case Collapse (Due to Flawed SOP) Alert", "Habitual Poor-Investigator (IO) Profiler", "High-Stakes (Murder/Rape/Terror) Case Classifier", "AI Assisted Legal Opinion/Drafting Tool",
      "Conviction Rate/Trend Forecaster", "Secure Undercover/Sensitive Tactics Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "National/State Forensic Science Lab (FSL) Sync",
      "Election Violence Investigation Best Practices Modeler", "Disaster/Mass-Casualty Victim ID Practices Coordinator", "Legal/Forensic Training Budget Tracker", "Custom Workflow for Economic Offences Wing (EOW)",
      "AI Driven Case Success Probability Predictor", "Predictive Need for Specialized Forensic Tools", "Custom Alert Trigger for DGP", "Acquittal/Judgment to Library Update Timeline"
    ]
  },
  {
    fileName: 'StandardTemplatesRepositoryDetailed.jsx',
    compName: 'StandardTemplatesRepositoryDetailed',
    mainTitle: 'AI STANDARD TEMPLATES',
    subTitle: 'REPOSITORY',
    desc: 'Bilingual FIR drafting, automated remand requests, standardized seizure memos & dynamic legal format updates',
    experts: [
      "Bilingual (English/Hindi) Legal Translation AI", "Automated FIR/Charge-sheet Drafting Engine", "Remand Request/Bail Opposition Formulator AI", "Standardized Seizure/Panchnama Memo Generator",
      "Dynamic Legal Code (BNS/BNSS) Format Updater", "Typographical/Legal Error Detection NLP", "Geo-Spatial Template Usage/Adoption Mapper", "Case Diary (CD) Formatting Assistant",
      "Standard Templates Dashboard", "Voice-Command Template Search Bot", "Automated Monthly Template Usage Report", "E-Courts/Judiciary IT System Sync",
      "Outdated/Repealed Section Usage Predictor", "Court Rejection/Objection Risk Analyzer", "Language Ambiguity/Vagueness Flagging AI", "Formatting Inconsistency Detector",
      "AI Evaluator for Documentation Standardization", "Audit/Download Log Generator", "Data Privacy/Auto-Redaction Engine", "Law/Legal Affairs Department Sync",
      "Station Writer/Munshi Mobile App", "Historical Document Rejection Correlator", "SP (Legal/Crime) Briefing AI", "Template Revision/Update Task Allocator",
      "Blockchain Immutable Template Hash", "Anti-Tamper Legal Format Shield", "Mobile App for Offline/Remote Seizure Memo Generation", "District-wise Template Compliance Benchmarker",
      "Automated Alert for Supreme Court Format Changes", "Historical Stationery/Printing Cost Analyzer", "Legal Drafting/Documentation SOP Trainer", "Document Storage/Cloud API Monitor",
      "Imminent Bail/Release (Due to Bad Drafting) Alert", "Habitual Sloppy Drafter Profiler", "High-Priority (UAPA/NDPS) Template Classifier", "AI Assisted Notice/Summons Generator",
      "Drafting Workload/Time-Saving Forecaster", "Secure Digital Signature (DSC) Protector", "Integration with CCTNS/Core Policing App", "State Prosecution Directorate Sync",
      "Election Preventive Arrest (CrPC/BNSS) Template Modeler", "Disaster Unnatural Death/Inquest Report Coordinator", "Legal Software/License Budget Tracker", "Custom Workflow for Cyber Crime/Digital Seizures",
      "AI Driven Court Acceptance Rate Predictor", "Predictive Need for New Language Templates", "Custom Alert Trigger for IG Legal", "Law Amendment to Template Update Timeline"
    ]
  },
  {
    fileName: 'OperationalPlaybookManagerDetailed.jsx',
    compName: 'OperationalPlaybookManagerDetailed',
    mainTitle: 'AI OPERATIONAL PLAYBOOK',
    subTitle: 'MANAGER',
    desc: 'Riot control formations, VIP security drills, hostage negotiation decision-trees & quick-reference mobile access',
    experts: [
      "Riot Control/Crowd Dispersal Formation AI", "VIP/VVIP Security Route & Drill Optimizer", "Hostage/Crisis Negotiation Decision-Tree Bot", "Active Shooter/Terror Response Tactics Engine",
      "Quick-Reference Mobile UI/UX Optimizer", "Geospatial Operational Zone/Chokepoint Mapper", "Force Multiplier/Logistics Allocation Analyzer", "Weather/Terrain Impact on Operations Predictor",
      "Operational Playbook Dashboard", "Voice-Command Tactical Query Bot", "Automated Post-Operation After-Action Report (AAR)", "State Armed Police/Task Force Sync",
      "Tactical Failure/Vulnerability Predictor", "Communication Breakdown/Radio Silence Analyzer", "Fatigue/Resource Depletion Estimator", "Civilian Casualty/Collateral Damage Risk Scorer",
      "AI Evaluator for Tactical Readiness Index", "Audit/Playbook Access Log Generator", "Data Privacy/Classified Ops Scrubber", "National Security Guard (NSG/Greyhounds) Sync",
      "Field Commander/QRT Tactical App", "Historical Tactical Success/Failure Correlator", "ADG (Law & Order/Operations) Briefing AI", "Mock-Drill/Simulation Task Allocator",
      "Blockchain Immutable Playbook Version Hash", "Anti-Tamper Classified Playbook Shield", "Mobile App for Offline Tactical Diagrams", "Unit-wise Tactical Proficiency Benchmarker",
      "Automated Alert for Obsolete/Flawed Tactics", "Historical Operational Deployment Cost Analyzer", "Tactical Operations/CQB SOP Trainer", "Playbook Cloud Sync/API Monitor",
      "Imminent Tactical Blunder/Ambush Alert", "Poorly Trained/Unprepared Unit Profiler", "Mission-Critical (Anti-Terror/Hostage) Playbook Classifier", "AI Assisted Rules of Engagement (RoE) Drafter",
      "Operational Resource/Ammunition Forecaster", "Secure Tactical Blueprint Protector", "Integration with Drone/UAV Live Feed Analytics", "State/District Control Room Sync",
      "Election Flash-Riot/Booth Capture Playbook Modeler", "Disaster Mass-Panic/Stampede Control Coordinator", "Tactical Training/Simulation Budget Tracker", "Custom Workflow for Aviation/Helicopter Ops",
      "AI Driven Operation Success Probability Predictor", "Predictive Need for Specialized Gear", "Custom Alert Trigger for DGP (Operations)", "Incident Breakout to Playbook Deployment Timeline"
    ]
  },
  {
    fileName: 'DecisionCasebookLibraryDetailed.jsx',
    compName: 'DecisionCasebookLibraryDetailed',
    mainTitle: 'AI DECISION CASEBOOK',
    subTitle: 'LIBRARY',
    desc: 'Public-order dilemma training, use-of-force justification models, human rights precedents & scenario-based simulations',
    experts: [
      "Public-Order Dilemma/Scenario Simulator AI", "Use-of-Force Justification/Proportionality Scorer", "Human Rights (NHRC) Precedent Linker Engine", "Scenario-Based Decision Tree Generator",
      "De-escalation/Conflict Resolution NLP Analyzer", "Crowd Psychology/Mob Mentality Predictor", "Geospatial Riot/Flashpoint Context Mapper", "Legal Liability/Indemnity Analyzer AI",
      "Decision Casebook Dashboard", "Voice-Command Precedent Query Bot", "Automated Monthly Training Impact Report", "State Human Rights Commission Sync",
      "Excessive Force/Brutality Risk Predictor", "Media/Public Backlash Fallout Analyzer", "Officer Panic/Stress Response Estimator", "Split-Second Decision Error Flagging AI",
      "AI Evaluator for Restraint & Judgment Index", "Audit/Simulation Attempt Log Generator", "Data Privacy/Officer Identity Scrubber", "Judicial/Magistracy Liaison Sync",
      "Police Trainee/Cadet Simulation App", "Historical Riot Escalation Correlator", "IG (Training/Human Rights) Briefing AI", "Remedial Judgment Training Allocator",
      "Blockchain Immutable Casebook Version Hash", "Anti-Tamper Training Record Shield", "Mobile App for VR/AR Scenario Training", "District-wise Use-of-Force Restraint Benchmarker",
      "Automated Alert for Severe Rights Violations", "Historical Litigation/Compensation Cost Analyzer", "Use-of-Force/De-escalation SOP Trainer", "Simulation/VR Platform API Health Monitor",
      "Imminent Custodial Death/Firing Backlash Alert", "Trigger-Happy/Aggressive Officer Profiler", "High-Sensitivity (Communal/Student Protest) Classifier", "AI Assisted Magisterial Inquiry Report Drafter",
      "Public Trust/Sentiment Trend Forecaster", "Secure Internal Inquiry File Protector", "Integration with Police Academy Curriculum", "Civil Society/NGO Outreach Sync",
      "Election Mob Control/Firing Decision Modeler", "Disaster Looting/Panic Control Decision Coordinator", "Simulation Tech/VR Hardware Budget Tracker", "Custom Workflow for Armed/Naxal Encounters",
      "AI Driven Officer Decision-Making Score Predictor", "Predictive Need for Psychological Counseling", "Custom Alert Trigger for DGP", "Training Simulation to Field Application Timeline"
    ]
  },
  {
    fileName: 'HistoricalIncidentLessonsDetailed.jsx',
    compName: 'HistoricalIncidentLessonsDetailed',
    mainTitle: 'AI HISTORICAL INCIDENT',
    subTitle: 'LESSONS',
    desc: 'Root cause analysis of past failures, intelligence gaps identification, socio-political context mapping & automated curriculum updates',
    experts: [
      "Root Cause Analysis (RCA) Extraction AI", "Intelligence Gap/Failure Identification Engine", "Socio-Political Context/Undercurrent Mapper", "Automated Training Curriculum Updater Bot",
      "Media Narrative vs Ground Reality NLP Analyzer", "Officer/Command Chain Bottleneck Detector", "Geospatial Historical Flashpoint Heatmapper", "Inter-Agency Miscommunication Analyzer",
      "Historical Lessons Dashboard", "Voice-Command Incident Query Bot", "Automated Quarterly Lessons-Learned Report", "State/Central Intelligence Branch Sync",
      "Repeat Failure/Ignored Warning Predictor", "Systemic Vulnerability/Flaw Analyzer", "Resource/Logistical Deficit Predictor", "Community Alienation/Trust Deficit Scorer",
      "AI Evaluator for Institutional Learning Index", "Audit/Curriculum Update Log Generator", "Data Privacy/Classified Intel Scrubber", "Police Training College (PTC) Sync",
      "Commanding Officer/Instructor Mobile App", "Historical Casualty/Damage Correlator", "DGP (Planning/Modernization) Briefing AI", "Curriculum Revision/Integration Allocator",
      "Blockchain Immutable RCA Hash", "Anti-Tamper Classified Lesson Shield", "Mobile App for Quick Lesson Briefing (Pre-Deployment)", "State-to-State Incident Avoidance Benchmarker",
      "Automated Alert for Repeating Historical Mistakes", "Historical Compensation/Rebuilding Cost Analyzer", "Crisis Management/Command SOP Trainer", "Database/Archive Indexing API Monitor",
      "Imminent Major Incident (Repeating Pattern) Alert", "Systemic/Institutional Flaw Profiler", "High-Impact (Terror/Mass-Casualty) Lesson Classifier", "AI Assisted Inquiry Commission Report Drafter",
      "Incident Recurrence/Trend Forecaster", "Secure Inquiry/Commission File Protector", "Integration with National Security Council (NSCS)", "Home Department/Secretariat Sync",
      "Election Historical Violence (Booth-wise) Modeler", "Disaster Historical Flaw/Response Delay Coordinator", "Research & Analysis Budget Tracker", "Custom Workflow for High-Profile Assassinations",
      "AI Driven Institutional Readiness Score Predictor", "Predictive Need for Complete Policy Overhaul", "Custom Alert Trigger for Home Minister", "Inquiry Conclusion to Curriculum Update Timeline"
    ]
  },
  {
    fileName: 'PoliceTerminologyDictionaryDetailed.jsx',
    compName: 'PoliceTerminologyDictionaryDetailed',
    mainTitle: 'AI POLICE TERMINOLOGY',
    subTitle: 'DICTIONARY',
    desc: 'Regional slang translation, penal code glossary mapping, dark-web jargon decoders & cross-state linguistic standardization',
    experts: [
      "Regional Slang/Dialect Translation AI", "Penal Code (BNS/BNSS) Glossary Mapper", "Dark-Web/Cyber Jargon Decoding Engine", "Cross-State/Linguistic Standardization Bot",
      "Underworld/Syndicate Code-Word NLP Analyzer", "Legal Jargon Simplifier/Explainer AI", "Geospatial Dialect/Slang Origin Mapper", "Audio Interrogation Transcript Translator",
      "Terminology Dictionary Dashboard", "Voice-Command Slang Query Bot", "Automated Monthly New Jargon Update Report", "State Cyber Crime/Intelligence Sync",
      "Misinterpretation/Translation Error Predictor", "Emerging Syndicate Code-Word Alert AI", "Court Rejection (Due to Ambiguity) Analyzer", "Cross-Border Linguistic Friction Scorer",
      "AI Evaluator for Linguistic Standardization Index", "Audit/Query Log Generator", "Data Privacy/Interrogation Transcript Scrubber", "Directorate of Prosecution Sync",
      "Investigating Officer/Translator Mobile App", "Historical Miscommunication Correlator", "SP (Training/Cyber) Briefing AI", "Dictionary Update/Review Task Allocator",
      "Blockchain Immutable Terminology Hash", "Anti-Tamper Legal Definition Shield", "Mobile App for Real-Time Audio Translation", "District-wise Linguistic Accuracy Benchmarker",
      "Automated Alert for New Threat/Dark-Web Jargon", "Historical Translation Outsourcing Cost Analyzer", "Legal Drafting/Interrogation Linguistics SOP Trainer", "Translation API/Model Health Monitor",
      "Imminent Intelligence Failure (Due to Mis-translation) Alert", "Habitual Slang-User/Suspect Linguistic Profiler", "High-Priority (Terror/Narcotics Code) Classifier", "AI Assisted Translation Certification Drafter",
      "Linguistic Trend/Evolution Forecaster", "Secure Classified Code-Word Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "Central Forensic Science Lab (Linguistics) Sync",
      "Election Regional Sloganeering/Hate-Speech Modeler", "Disaster Local Distress Call Dialect Coordinator", "Linguistics/Translation Tech Budget Tracker", "Custom Workflow for Inter-State Gang Intercepts",
      "AI Driven NLP Model Accuracy Predictor", "Predictive Need for New Dialect Training Data", "Custom Alert Trigger for IG Cyber/Intel", "New Jargon Intercept to Dictionary Update Timeline"
    ]
  },
  {
    fileName: 'AcronymKnowledgeBaseDetailed.jsx',
    compName: 'AcronymKnowledgeBaseDetailed',
    mainTitle: 'AI ACRONYM',
    subTitle: 'KNOWLEDGE BASE',
    desc: 'Central/State agency abbreviation mapping, military/paramilitary designation decoder, automated document tagging & disambiguation',
    experts: [
      "Central/State Agency Abbreviation AI", "Military/Paramilitary Designation Decoder", "Automated Document Tagging/Hyperlinking Engine", "Contextual Acronym Disambiguation NLP",
      "Historical/Obsolete Acronym Archiver", "Cross-Departmental Hierarchy Mapper", "Geospatial Agency/Unit Location Mapper", "Inter-Agency Communication Smoother AI",
      "Acronym Knowledge Base Dashboard", "Voice-Command Acronym Query Bot", "Automated Weekly Database Update Report", "Ministry of Home Affairs (MHA) Sync",
      "Communication Breakdown/Confusion Predictor", "Wrong Agency Routing/Delay Alert", "Contextual Misinterpretation (e.g., IB vs IB) Analyzer", "Document Clarity/Readability Scorer",
      "AI Evaluator for Inter-Agency Communication Index", "Audit/Search Log Generator", "Data Privacy/Classified Unit Scrubber", "Central Armed Police Forces (CAPF) Sync",
      "Control Room/Dispatch Officer Mobile App", "Historical Routing Delay Correlator", "DGP (Administration) Briefing AI", "Database Curation/Update Task Allocator",
      "Blockchain Immutable Acronym Hash", "Anti-Tamper Designation Database Shield", "Mobile App for Quick Acronym Lookup", "Agency-wise Communication Clarity Benchmarker",
      "Automated Alert for Unrecognized/New Acronyms", "Historical Inter-Agency Delay Cost Analyzer", "Police Correspondence/Drafting SOP Trainer", "Search Engine/NLP API Health Monitor",
      "Imminent Dispatch Failure (Due to Confusion) Alert", "Habitual Jargon/Acronym Overuser Profiler", "High-Priority (Special Forces/Intelligence) Classifier", "AI Assisted Official Communication Drafter",
      "Designation/Agency Restructuring Forecaster", "Secure Covert Unit/Designation Protector", "Integration with E-Office/Dak System", "Military Intelligence/Defense Sync",
      "Election Paramilitary (CAPF/SAP) Deployment Modeler", "Disaster Multi-Agency (NDRF/SDRF) Comms Coordinator", "Administrative IT Systems Budget Tracker", "Custom Workflow for Foreign/Interpol Designations",
      "AI Driven Document Readability Score Predictor", "Predictive Need for Agency Restructuring Updates", "Custom Alert Trigger for SP Headquarters", "New Acronym Detection to Database Integration Timeline"
    ]
  },
  {
    fileName: 'OrganizationalMemoryPlatformDetailed.jsx',
    compName: 'OrganizationalMemoryPlatformDetailed',
    mainTitle: 'AI ORGANIZATIONAL MEMORY',
    subTitle: 'PLATFORM',
    desc: 'Semantic enterprise search, silo-busting data integration, institutional history timeline & knowledge graph generation',
    experts: [
      "Semantic Enterprise Search/Query AI", "Data Silo-Busting/Integration Engine", "Institutional History Timeline Generator", "Entity/Relationship Knowledge Graph AI",
      "Unstructured Data (PDF/Image) OCR & NLP", "Cross-Departmental Data Correlation AI", "Geo-Spatial Institutional Asset Mapper", "Expertise/Subject Matter Expert Finder Bot",
      "Organizational Memory Dashboard", "Voice-Command Enterprise Search Bot", "Automated Monthly Data Integration Report", "State Data Center/IT Department Sync",
      "Institutional Amnesia/Knowledge Loss Predictor", "Data Hoarding/Silo Identification Alert", "Redundant/Duplicative Effort Analyzer", "Search Relevancy/Accuracy Scorer",
      "AI Evaluator for Knowledge Liquidity Index", "Audit/Search Query Log Generator", "Data Privacy/Role-Based Access Control Scrubber", "All State Police Directorates Sync",
      "Investigating/Planning Officer Mobile App", "Historical Inefficiency/Duplication Correlator", "DGP/Chief Information Officer Briefing AI", "Data Digitization/Indexing Task Allocator",
      "Blockchain Immutable Data Provenance Hash", "Anti-Tamper Enterprise Data Shield", "Mobile App for On-the-Go Record Retrieval", "Department-wise Knowledge Sharing Benchmarker",
      "Automated Alert for Severed Knowledge Links", "Historical Data Silo/Inefficiency Cost Analyzer", "Data Management/Digital Archiving SOP Trainer", "Enterprise Search/Graph API Health Monitor",
      "Imminent Crucial Data Loss (Legacy System) Alert", "Information Silo/Gatekeeper Profiler", "Mission-Critical (Crime/Intelligence) Data Classifier", "AI Assisted Comprehensive Background/History Drafter",
      "Data Growth/Storage Forecaster", "Secure Enterprise Knowledge Graph Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "National Crime Records Bureau (NCRB) Sync",
      "Election Historical Trend/Vulnerability Knowledge Modeler", "Disaster Historical Response Capability Coordinator", "IT Infrastructure/Cloud Storage Budget Tracker", "Custom Workflow for Declassified/Historical Records",
      "AI Driven Search Relevancy Predictor", "Predictive Need for Legacy System Migration", "Custom Alert Trigger for DGP (Modernization)", "Data Ingestion to Searchable Knowledge Graph Timeline"
    ]
  },
  {
    fileName: 'KnowledgeContinuityManagerDetailed.jsx',
    compName: 'KnowledgeContinuityManagerDetailed',
    mainTitle: 'AI KNOWLEDGE CONTINUITY',
    subTitle: 'MANAGER',
    desc: 'Automated handover notes, succession planning analytics, desk-specific SOP extraction & minimal disruption transition modeling',
    experts: [
      "Automated Handover/Relieving Note Generator AI", "Succession Planning/Competency Analytics Engine", "Desk-Specific SOP/Routine Extractor NLP", "Minimal Disruption Transition Modeler",
      "Pending Task/File Flagging Bot", "Critical Contact/Network Handover AI", "Geo-Spatial Jurisdiction Familiarity Mapper", "Role-to-Skill Fitment Scorer",
      "Knowledge Continuity Dashboard", "Voice-Command Handover Query Bot", "Automated Transfer/Posting Transition Report", "HRMS/Personnel Department Sync",
      "Transition Disruption/Vulnerability Predictor", "Incomplete Handover/Missing File Alert", "Steep Learning Curve/Skill Gap Analyzer", "Loss of Informant/Source Network Predictor",
      "AI Evaluator for Transition Smoothness Index", "Audit/Handover Log Generator", "Data Privacy/Confidential File Scrubber", "State Police Establishment Board Sync",
      "Transferred/Incoming Officer Mobile App", "Historical Post-Transfer Inefficiency Correlator", "IG (Personnel/Administration) Briefing AI", "Handover Briefing/Overlap Task Allocator",
      "Blockchain Immutable Handover Hash", "Anti-Tamper Relieving Note Shield", "Mobile App for Quick Desk Familiarization", "Unit-wise Transition Efficiency Benchmarker",
      "Automated Alert for Abrupt/Unplanned Transfers", "Historical Transition/Training Cost Analyzer", "Transfer/Relieving Protocol SOP Trainer", "HRMS/Database Sync API Health Monitor",
      "Imminent Operational Halt (Due to Bad Handover) Alert", "Habitual Poor-Documenter/Hoarder Profiler", "High-Stakes (SHO/SP/Intelligence) Role Classifier", "AI Assisted Formal Charge Assumption Drafter",
      "Retirement/Transfer Wave Forecaster", "Secure Classified Desk Note Protector", "Integration with E-Office/File Tracking System", "State Secretariat/Home Department Sync",
      "Election Sudden Transfer Disruption Modeler", "Disaster Nodal Officer Transition Coordinator", "Training/Onboarding Budget Tracker", "Custom Workflow for Suspended/Dismissed Officers",
      "AI Driven Competency Mastery Time Predictor", "Predictive Need for Shadowing/Overlap Period", "Custom Alert Trigger for DGP", "Transfer Order to Full Operational Control Timeline"
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

console.log('All 10 Police Knowledge Preservation Modules files generated successfully.');
