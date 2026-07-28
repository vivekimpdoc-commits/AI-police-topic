const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'KnowledgeHubDetailed.jsx',
    compName: 'KnowledgeHubDetailed',
    mainTitle: 'AI KNOWLEDGE',
    subTitle: 'HUB',
    desc: 'Centralized Repository for Legal Frameworks, Investigation Precedents, Best Practices & Officer Forums',
    experts: [
      "Semantic Document Search AI", "Legal Precedent Correlator Bot", "Investigative Best Practice Summarizer", "Knowledge Tagging & Indexing Engine",
      "Cross-Department Query Router", "Historical Case Studies Analyzer", "SOP vs Real-world Action Comparer", "Subject Matter Expert (SME) Matcher",
      "Knowledge Hub Command Dashboard", "Voice-Command Library Assistant Bot", "Automated Daily Knowledge Brief", "Inter-State Policy Sync Bot",
      "Legal Update Alert System AI", "Forensic Procedure Knowledge Bot", "Cyber Crime Case Study Aggregator", "Crowdsourced Officer Tip Validator",
      "AI Evaluator for Document Relevance", "Audit/Knowledge Access Log Gen", "Data Privacy/Sensitive Case Scrubber", "National Police Academy Repo Sync",
      "Field IO Quick-Reference App", "Cold Case Methodology Extractor AI", "Senior Officer Research Briefing", "Knowledge Transfer Resource Allocator",
      "Blockchain Immutable Document Hash", "Anti-Tamper Knowledge Vault Shield", "Mobile App for Offline Reading", "Jurisdictional Law Variation Matcher",
      "Multi-Lingual Document Translator", "Historical Legal Evolution Analyzer", "Legal Drafting Training Assistant", "Knowledge DB Server Monitor",
      "Urgent Supreme Court Ruling Alert", "Organized Crime Takedown SOP Profiler", "VIP/High-Profile Case Best Practices", "AI Assisted Case Prep Outline Drafter",
      "Document Storage & Archival Forecaster", "Secure Whistleblower Method Protector", "Integration with Judicial e-Library", "Citizen Legal Rights Portal Sync",
      "Riot Control Case Studies Modeler", "Disaster Response SOP Coordinator", "Knowledge Hub Maintenance Budget Tracker", "Custom Workflow for Document Approval",
      "AI Driven Training Needs Predictor", "Predictive Need for SOP Update", "Custom Alert Trigger for Nodal Training", "Document Lifespan & Deprecation Tracker"
    ]
  },
  {
    fileName: 'PoliceTrainingAcademyDetailed.jsx',
    compName: 'PoliceTrainingAcademyDetailed',
    mainTitle: 'AI POLICE TRAINING',
    subTitle: 'ACADEMY',
    desc: 'Virtual Simulation Training, Cadet Performance Analytics, Curriculum Optimization & Tactical VR Modules',
    experts: [
      "VR/AR Tactical Simulation Engine", "Cadet Performance & Fatigue Scorer", "Curriculum Personalization AI", "Weapons Handling Skill Analyzer",
      "Physical Fitness Tracking Correlator", "Legal/IPC Exam Evaluator Bot", "Stress Tolerance & Psychology Modeler", "Interrogation Technique Simulation AI",
      "Training Academy Dashboard", "Voice-Command Cadet Query Bot", "Automated Batch Progress Report", "Instructor Workload Balancer Bot",
      "Predictive Dropout Risk Analyzer AI", "Scenario-Based Decision Scoring", "Crowd Control Simulation Engine", "First Responder First-Aid Trainer",
      "AI Evaluator for Graduation Readiness", "Audit/Training Completion Log Gen", "Data Privacy/Cadet Health Scrubber", "State Police HQ Talent Sync",
      "Cadet Daily Routine Management App", "Refresher Course Recommender AI", "Academy Director Briefing AI", "Training Facility Resource Allocator",
      "Blockchain Immutable Certification Hash", "Anti-Tamper Exam Result Shield", "Mobile App for Cadet E-Learning", "Geo-Spatial Simulation Environment Matcher",
      "Multi-Lingual Exam Question Translator", "Historical Training Success Analyzer", "Instructor SOP Compliance Trainer", "Training DB Server Health Monitor",
      "Urgent Field Deployment Alert Bot", "Organized Crime Simulation Profiler", "VIP Protection Detail Training Classifier", "AI Assisted Curriculum Update Drafter",
      "Training Data Storage Forecaster", "Secure Instructor Evaluation Protector", "Integration with National Police Mission", "Citizen/Community Engagement Simulator",
      "Riot/Mob Violence Tactical Modeler", "Disaster Rescue Drill Coordinator", "Academy Operations Budget Tracker", "Custom Workflow for Certification Approval",
      "AI Driven Officer Career Path Predictor", "Predictive Need for New Facilities", "Custom Alert Trigger for Chief Instructors", "Cadet Lifecycle & Deployment Tracker"
    ]
  },
  {
    fileName: 'SOPAssistantDetailed.jsx',
    compName: 'SOPAssistantDetailed',
    mainTitle: 'AI SOP',
    subTitle: 'ASSISTANT',
    desc: 'Standard Operating Procedure Guidance, Real-Time Procedural Checklists, Legal Compliance & Audit Tracking',
    experts: [
      "Real-Time SOP Query Resolution Bot", "Dynamic Procedural Checklist Generator", "Legal Loophole Identifier AI", "SOP Compliance Audit Tracker",
      "Context-Aware Procedure Router", "Emergency Response SOP Expediter", "Evidence Handling Protocol Enforcer", "Arrest/Detention SOP Verifier AI",
      "SOP Assistant Command Dashboard", "Voice-Command Procedure Query Bot", "Automated SOP Deviation Report", "Cross-Department SOP Sync Bot",
      "New Legislation Impact Analyzer AI", "Cyber Evidence SOP Validator", "Traffic/Accident Scene SOP Guide", "Forensic Lab Request Protocol Bot",
      "AI Evaluator for Field Compliance", "Audit/SOP Usage Log Generator", "Data Privacy/Sensitive Protocol Scrubber", "State Police HQ Directives Sync",
      "Field IO SOP Mobile App", "Cold Case SOP Revision Correlator", "Supervisory Officer Briefing AI", "Training/Refresh Course Allocator Bot",
      "Blockchain Immutable Audit Hash", "Anti-Tamper SOP Archive Shield", "Mobile App for Offline SOP View", "Jurisdiction-Specific SOP Matcher",
      "Multi-Lingual SOP Translator", "Historical SOP Deviation Analyzer", "SOP Authoring & Drafting Assistant", "SOP DB Server Health Monitor",
      "Imminent Compliance Failure Alert Bot", "Organized Crime Raid SOP Profiler", "VIP Escort/Security SOP Classifier", "AI Assisted New SOP Drafter",
      "SOP Document Storage Forecaster", "Secure Internal Audit Protector", "Integration with National Guidelines", "Citizen Interface Protocol Guide",
      "Riot/Mob Control SOP Modeler", "Disaster Response SOP Coordinator", "SOP Training Budget Tracker", "Custom Workflow for SOP Amendment",
      "AI Driven Common Error Predictor", "Predictive Need for SOP Modernization", "Custom Alert Trigger for Compliance Leads", "SOP Version Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'PolicyCircularSearchDetailed.jsx',
    compName: 'PolicyCircularSearchDetailed',
    mainTitle: 'AI POLICY & CIRCULAR',
    subTitle: 'SEARCH',
    desc: 'Intelligent Document Retrieval, Directive Version Control, Natural Language Querying & Notification Alerts',
    experts: [
      "Semantic Circular Search Engine", "Natural Language Directive Query Bot", "Version Control & Deprecation Tracker", "Policy Contradiction Detector AI",
      "Department-Specific Router Bot", "Gazette Notification Indexer", "Urgent Circular Broadcast Coordinator", "Acknowledgment/Read-Receipt Tracker",
      "Circular Search Dashboard", "Voice-Command Policy Query Bot", "Automated Policy Impact Report Gen", "Inter-District Directive Sync Bot",
      "Pending Compliance Alert System", "Historical Circular Precedent Matcher", "Financial/Budget Policy Analyzer AI", "Leave/HR Circular Clarification Bot",
      "AI Evaluator for Policy Adherence", "Audit/Search Query Log Generator", "Data Privacy/Confidential Circular Scrubber", "State Secretariat Policy Sync Bot",
      "Field Officer Notification App", "Cold Case Policy Reference Matcher", "Senior Officer Review Briefing AI", "Policy Drafting Resource Allocator",
      "Blockchain Immutable Circular Hash", "Anti-Tamper Directive Shield AI", "Mobile App for Offline Policy Read", "Geo-Spatial Policy Impact Matcher",
      "Multi-Lingual Circular Translator", "Historical Policy Evolution Analyzer", "Policy Drafting/Formatting Assistant", "Circular DB Server Health Monitor",
      "Urgent Immediate-Action Circular Alert", "Organized Crime Policy Takedown Profiler", "VIP Protocol Circular Classifier", "AI Assisted Policy Brief Drafter",
      "Document Digitization Storage Forecaster", "Secure Internal Memo Protector", "Integration with eOffice/Govt Portals", "Citizen Relevant Circular Extractor",
      "Election/Model Code Circular Modeler", "Disaster Relief Directive Coordinator", "Policy Implementation Budget Tracker", "Custom Workflow for Circular Approval",
      "AI Driven Policy Overlap Predictor", "Predictive Need for Clarification Memo", "Custom Alert Trigger for Nodal Officers", "Circular Lifecycle & Expiry Tracker"
    ]
  },
  {
    fileName: 'ELearningPlatformDetailed.jsx',
    compName: 'ELearningPlatformDetailed',
    mainTitle: 'AI E-LEARNING',
    subTitle: 'PLATFORM',
    desc: 'Continuous Officer Education, Micro-Learning Modules, Skill Gap Analysis & Gamified Certification Paths',
    experts: [
      "Micro-Learning Module Generator AI", "Officer Skill Gap Analyzer", "Gamified Learning Progression Engine", "Interactive Quiz/Test Evaluator Bot",
      "Course Recommendation Router", "Video Lecture Sentiment/Engagement Analyzer", "On-the-job Scenario Simulator AI", "Peer-to-Peer Knowledge Share Moderator",
      "E-Learning Command Dashboard", "Voice-Command Course Search Bot", "Automated Officer Progress Report", "Inter-District Skill Comparison Bot",
      "Predictive Training Dropout Analyzer", "Cyber-Security Literacy Tracker", "Legal Update Micro-Course Bot", "Forensic Collection Refresh Trainer",
      "AI Evaluator for Course Effectiveness", "Audit/Course Completion Log Gen", "Data Privacy/Officer Performance Scrubber", "National Police Academy E-Sync Bot",
      "Field Officer Mobile Learning App", "Cold Case Review Study Module Gen", "Academy Director Briefing AI", "Instructor/Content Creator Allocator",
      "Blockchain Immutable Certificate Hash", "Anti-Tamper Test Score Shield", "Mobile App for Offline E-Learning", "Regional Language Course Matcher",
      "Multi-Lingual Course Content Translator", "Historical Learning Retention Analyzer", "Course Creation/SOP Trainer AI", "E-Learning Server Health Monitor",
      "Urgent Mandatory Compliance Course Alert", "Organized Crime Takedown Course Profiler", "VIP Security Drill Module Classifier", "AI Assisted Course Curriculum Drafter",
      "Video/Content Storage Forecaster", "Secure Evaluation Metric Protector", "Integration with HRMS Promotion Engine", "Citizen Police Volunteer E-Learning",
      "Riot/Crowd Control Refresh Modeler", "Disaster Relief Training Coordinator", "E-Learning Platform Budget Tracker", "Custom Workflow for Course Approval",
      "AI Driven Future Skill Predictor", "Predictive Need for Remedial Training", "Custom Alert Trigger for Training Leads", "Course Content Relevance Timeline Tracker"
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

console.log('All 5 Knowledge & Training Modules files generated successfully.');
