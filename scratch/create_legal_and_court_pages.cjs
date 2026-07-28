const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'LegalAssistantDetailed.jsx',
    compName: 'LegalAssistantDetailed',
    mainTitle: 'AI LEGAL',
    subTitle: 'ASSISTANT',
    desc: 'Intelligent Drafting, FIR Section Recommendation, IPC/BNS Mapping & Legal Precedent Lookup',
    experts: [
      "FIR Drafting/Formatting AI", "BNS/IPC Section Recommender Engine", "Legal Precedent Search Bot", "Language Translation & Legal Lexicon",
      "Draft Charge-Sheet Reviewer AI", "Bail Objection Argument Drafter", "Evidence Admissibility Checker", "Contradiction/Loophole Identifier Bot",
      "Legal Assistant Dashboard", "Voice-Command Legal Query Bot", "Automated Daily Legal Brief", "Prosecution/Law Officer Sync Bot",
      "Document Summarization AI", "OCR for Handwritten Legal Notes", "Similar Past Case Matcher", "Recent Supreme Court Ruling Alert",
      "AI Evaluator for Document Accuracy", "Audit/Query Access Log Generator", "Data Privacy/Victim Detail Scrubber", "State Legal Dept Sync Bot",
      "Field IO Legal Reference App", "Historical Case Acquittal Correlator", "SHO/Supervisory Officer Briefing AI", "Legal Resource/Lawyer Allocator",
      "Blockchain Immutable Draft Hash", "Anti-Tamper Legal Document Shield", "Mobile App for Quick IPC Reference", "Jurisdictional Rule Matcher AI",
      "Multi-Lingual Deposition Translator", "Historical Conviction Rate Analyzer", "Legal Procedure SOP Trainer AI", "Legal DB Server Health Monitor",
      "Imminent Statutory Deadline Alert", "Organized Crime Legal Defense Profiler", "High-Profile Case Legal Strategy Classifier", "AI Assisted Appeal Drafter",
      "Legal Precedent Storage Forecaster", "Secure Witness Identity Protector", "Integration with E-Courts API", "Citizen Legal Rights Explanation Bot",
      "Riot/Mass Arrest Legal Strategy Modeler", "Disaster Relief Legal Compliance Coordinator", "Legal Expense/Counsel Budget Tracker", "Custom Workflow for Law Dept Approval",
      "AI Driven Acquittal Risk Predictor", "Predictive Need for Special Counsel", "Custom Alert Trigger for Nodal Officers", "Legal Document Lifecycle Tracker"
    ]
  },
  {
    fileName: 'CourtCaseTrackingDetailed.jsx',
    compName: 'CourtCaseTrackingDetailed',
    mainTitle: 'AI COURT CASE',
    subTitle: 'TRACKING',
    desc: 'Hearing Date Sync, Witness Summon Management, Statutory Timeline Alerts & Disposition Analytics',
    experts: [
      "E-Courts API Sync/Scraper Engine", "Hearing Date Calendar Optimizer", "Summons/Warrant Generation Bot", "Statutory Deadline (90-day) Alert AI",
      "Witness Attendance Predictor", "IO Court Appearance Scheduler", "Next Hearing Propensity Modeler", "Bail Expiry/Cancellation Tracker",
      "Court Case Dashboard", "Voice-Command Case Status Bot", "Automated Daily Court Roster", "Prosecution Department Sync Bot",
      "Judicial Officer Roster/Leave Matcher", "Pending Warrant Geo-Mapper", "Case Delay/Adjournment Analyzer", "Bail Surety Verification AI",
      "AI Evaluator for IO Readiness", "Audit/Tracking Access Log Gen", "Data Privacy/Juvenile Name Scrubber", "Directorate of Prosecution Sync",
      "Field IO Hearing Reminder App", "Cold Case Hearing Resumption Matcher", "DGP/SP Level Pending Trial Briefing", "Court Pairi Officer Allocator",
      "Blockchain Immutable Case Status Hash", "Anti-Tamper Court Order Shield", "Mobile App for IOs/Witnesses", "Court/Jurisdiction Polygon Matcher",
      "Multi-Lingual Court Order Translator", "Historical Adjournment Pattern Analyzer", "Court Procedure SOP Trainer", "Tracking Server Health Monitor",
      "Imminent Limitation Period Alert Bot", "Syndicate Bail Application Profiler", "VIP Case Fast-Track Classifier", "AI Assisted Status Report Drafter",
      "Court Document Storage Forecaster", "Secure Witness Address Protector", "Integration with Prison/Jail DB", "Citizen Case Status Portal Sync",
      "Mass Arrest Trial Batching Modeler", "Disaster Disrupted Court Coordinator", "Witness Travel/TA Budget Tracker", "Custom Workflow for High Court Appeals",
      "AI Driven Conviction Probability Predictor", "Predictive Need for Expert Witness", "Custom Alert Trigger for Nodal Officers", "Case Trial Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'ProsecutionSupportDetailed.jsx',
    compName: 'ProsecutionSupportDetailed',
    mainTitle: 'AI PROSECUTION',
    subTitle: 'SUPPORT',
    desc: 'Evidence Linking, Argument Preparation, Witness Deposition Analysis & Trial Strategy Optimization',
    experts: [
      "Cross-Examination Question Generator AI", "Evidence/Chain of Custody Linker", "Hostile Witness Probability Scorer", "Deposition Contradiction Detector",
      "Trial Strategy/Precedent Matcher", "Defense Argument Predictor Bot", "Digital Evidence Presentation Organizer", "Expert Testimony Correlator AI",
      "Prosecution Support Dashboard", "Voice-Command Evidence Query Bot", "Automated Trial Readiness Report", "Police-Prosecutor Sync Bot",
      "Forensic Report NLP Summarizer", "Witness Credibility/Background Analyzer", "Similar Acquittal Pattern Matcher", "Bail Objection Point Extractor",
      "AI Evaluator for Case Strength", "Audit/Evidence Review Log Gen", "Data Privacy/Informant Scrubber", "State Advocate General Sync Bot",
      "Prosecutor Mobile Prep App", "Cold Case Evidence Re-evaluation AI", "Director of Prosecution Briefing", "Special Public Prosecutor Allocator",
      "Blockchain Immutable Evidence Hash", "Anti-Tamper Prosecution Strategy Shield", "Mobile App for Trial Updates", "Jurisdiction Precedent Matcher AI",
      "Multi-Lingual Deposition Translator", "Historical Trial Success Analyzer", "Prosecution SOP/Guideline Trainer", "Support DB Server Health Monitor",
      "Imminent Witness Tampering Alert Bot", "Syndicate Intimidation Profiler", "High-Profile VIP Trial Classifier", "AI Assisted Final Argument Drafter",
      "Trial Video/Audio Storage Forecaster", "Secure Victim Identity Protector", "Integration with FSL/Forensic DB", "Citizen Trial Transparency Analytics",
      "Mass Trial/Riot Case Strategy Modeler", "Disaster Trial Delay Coordinator", "Prosecution Ops Budget Tracker", "Custom Workflow for Appeal Approval",
      "AI Driven Trial Duration Predictor", "Predictive Need for Additional Evidence", "Custom Alert Trigger for Lead Prosecutors", "Prosecution Trial Phase Tracker"
    ]
  },
  {
    fileName: 'LegalResearchDetailed.jsx',
    compName: 'LegalResearchDetailed',
    mainTitle: 'AI LEGAL',
    subTitle: 'RESEARCH',
    desc: 'NLP-based Jurisprudence Search, High Court/Supreme Court Citations & Law Commission Report Indexing',
    experts: [
      "Semantic Legal Search Engine", "Supreme Court Judgment Extractor", "Law Commission Report Summarizer", "Overruled/Upheld Citation Tracker",
      "Statute/Amendment Version Control AI", "Legal Argument Topic Correlator", "International Precedent Matcher", "Gazette Notification Indexer Bot",
      "Legal Research Dashboard", "Voice-Command Precedent Query Bot", "Automated Citation Relevance Report", "Inter-Department Legal Sync Bot",
      "NLP Case Synopsis Generator", "Paragraph/Headnote Specific Search", "Pending Bill/Legislation Impact AI", "Legal Dictionary/Lexicon Bot",
      "AI Evaluator for Citation Validity", "Audit/Research Query Log Gen", "Data Privacy/Confidential Memo Scrubber", "State Law Department Sync",
      "Field Officer Quick-Law App", "Historical Case Precedent Correlator", "Senior Legal Advisor Briefing AI", "Legal Researcher Workload Allocator",
      "Blockchain Immutable Citation Hash", "Anti-Tamper Legal DB Shield", "Mobile App for Offline Reading", "Jurisdiction-Specific Law Matcher",
      "Multi-Lingual Judgment Translator", "Historical Jurisprudence Trend Analyzer", "Legal Research Methodology Trainer", "Research Server Health Monitor",
      "Imminent Law Change/Amendment Alert", "Organized Crime Law Loophole Profiler", "Constitutional Bench Ruling Classifier", "AI Assisted Legal Opinion Drafter",
      "Document Digitization Storage Forecaster", "Secure Internal Legal Strategy Protector", "Integration with SCC Online/Manupatra APIs", "Citizen Legal Awareness Extractor",
      "Emergency/Martial Law Precedent Modeler", "Disaster Relief Legal Provision Coordinator", "Legal Research Subscription Tracker", "Custom Workflow for Opinion Approval",
      "AI Driven Legal Outcome Predictor", "Predictive Need for Ordinance", "Custom Alert Trigger for Law Officers", "Legal Precedent Evolution Tracker"
    ]
  },
  {
    fileName: 'JudgmentAnalyticsDetailed.jsx',
    compName: 'JudgmentAnalyticsDetailed',
    mainTitle: 'AI JUDGMENT',
    subTitle: 'ANALYTICS',
    desc: 'Acquittal Reason Extraction, Conviction Trend Analysis, Judicial Propensity Scoring & Policy Feedback Loops',
    experts: [
      "Acquittal Reason NLP Extractor", "Conviction Rate Trend Analyzer", "Judicial Officer Propensity/Trend Scorer", "Sentencing Disparity Modeler AI",
      "Investigation Flaw/Loophole Identifier", "Hostile Witness Pattern Tracker", "Section-wise Conviction Probability AI", "Forensic Rejection Reason Analyzer",
      "Judgment Analytics Dashboard", "Voice-Command Analytics Query Bot", "Automated Quarterly Conviction Report", "Training Academy Feedback Sync Bot",
      "Geospatial Acquittal Hotspot Mapper", "Bail Granting Pattern Extractor", "Fine/Penalty Trend Analyzer", "Appeal Success Rate Predictor",
      "AI Evaluator for IO Performance", "Audit/Analytics Access Log Gen", "Data Privacy/Judge Detail Scrubber", "High Court/Supreme Court E-Committee Sync",
      "Field IO Feedback/Alert App", "Cold Case Conviction Correlator AI", "DGP/Home Secretary Briefing Bot", "Remedial Training Resource Allocator",
      "Blockchain Immutable Analytics Hash", "Anti-Tamper Analytics Shield AI", "Mobile App for Senior Supervisory Officers", "Jurisdictional Bench Trend Matcher",
      "Multi-Lingual Judgment OCR/Translator", "Historical Judicial Trend Analyzer", "Judgment Analysis SOP Trainer", "Analytics Server Health Monitor",
      "Imminent Systemic Flaw Alert Bot", "Syndicate Acquittal Pattern Profiler", "High-Profile Case Judgment Classifier", "AI Assisted SOP Revision Drafter",
      "Judgment Data Storage Forecaster", "Secure Performance Metric Protector", "Integration with E-Courts/NJDG APIs", "Citizen Justice Transparency Analytics",
      "Riot/Mass Violence Conviction Modeler", "Disaster Fraud Judgment Coordinator", "Analytics Platform Budget Tracker", "Custom Workflow for Policy Recommendation",
      "AI Driven Policy Impact Predictor", "Predictive Need for Legal Reform", "Custom Alert Trigger for IG/ADG", "Judgment Trend Timeline Tracker"
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

console.log('All 5 Legal & Court Modules files generated successfully.');
