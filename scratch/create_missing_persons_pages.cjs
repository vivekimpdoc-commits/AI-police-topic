const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'MissingPersonDetailed.jsx',
    compName: 'MissingPersonDetailed',
    mainTitle: 'AI MISSING',
    subTitle: 'PERSON',
    desc: 'Automated Profiling, Social Media Scanning, Geo-Fenced Alerts & Inter-State CCTNS Matching',
    experts: [
      "Missing Profile NLP Extractor AI", "Social Media Image/Activity Scanner", "CCTNS Inter-State Data Matcher", "Geo-Fenced Amber Alert Broadcaster",
      "Cell Tower (CDR) Last Location Analyzer", "Runaway vs Kidnapping Risk Scorer", "Hospital/Shelter Admission Sync Bot", "Railway/Bus Station CCTV Correlator",
      "Missing Person Command Dashboard", "Voice-Command Profile Query Bot", "Automated Daily Match Report", "NGO/Childline Coordination Sync",
      "Geo-Spatial Disappearance Mapper", "Vehicle (Cab/Auto) ANPR Tracker", "Fake Ransom/Extortion Call Predictor", "Historical Runaway Route Matcher",
      "AI Evaluator for Search Efficiency", "Audit/Search Action Log Gen", "Data Privacy/Victim Info Scrubber", "State Anti-Human Trafficking Unit Sync",
      "Field IO Search Checklist App", "Cold Case Missing Person Correlator", "SHO/Supervisory Officer Briefing AI", "Search Party Resource Allocator",
      "Blockchain Immutable Report Hash", "Anti-Tamper Profile Shield", "Mobile App for Family (Live Updates)", "Jurisdiction Boundary Matcher",
      "Multi-Lingual Missing Poster Generator", "Historical Recovery Rate Analyzer", "Missing Person SOP Trainer", "Missing DB Server Health Monitor",
      "Imminent Border Crossing Alert Bot", "Organized Trafficking Syndicate Profiler", "High-Risk (Minor/Elderly) Classifier", "AI Assisted Search Warrant Drafter",
      "CCTV/Image Storage Forecaster", "Secure Tip-Off/Informant Protector", "Integration with National Missing DB", "Citizen Tip/Sighting Reporting Portal",
      "Human Trafficking Route Modeler", "Disaster/Mass Casualty Separation Coordinator", "Search Operation Budget Tracker", "Custom Workflow for Interpol Yellow Notice",
      "AI Driven Survival/Harm Probability Predictor", "Predictive Need for Sniffer Dogs", "Custom Alert Trigger for SP/SSP", "Search & Recovery Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'FacialRecognitionDetailed.jsx',
    compName: 'FacialRecognitionDetailed',
    mainTitle: 'AI FACIAL',
    subTitle: 'RECOGNITION',
    desc: 'Live CCTV Scanning, Crowd Surveillance, Watchlist Matching & Biometric Verification',
    experts: [
      "Live CCTV Facial Extractor AI", "Criminal Watchlist/Database Matcher", "Crowd Density Face Scanner Engine", "Disguise/Mask/Helmet Penetration AI",
      "Multi-Angle/Low-Light Enhancer", "Age/Weight Fluctuation Compensator", "Border Checkpost/Airport Sync Bot", "Real-Time Suspect Alert Broadcaster",
      "FR Command Dashboard", "Voice-Command Face Query Bot", "Automated Daily Match Report", "Inter-District/State Intel Sync",
      "Geo-Spatial Suspect Tracking Mapper", "Twin/Lookalike Disambiguation AI", "Fake/Morph Image Detector", "Video Frame Rate Optimization Bot",
      "AI Evaluator for Match Accuracy (Confidence Score)", "Audit/Scan Log Generator", "Data Privacy/Non-Target Blur Engine", "National Automated Facial Recognition System Sync",
      "Field IO Face Scan App", "Historical Sightings Correlator AI", "Command Center Briefing Bot", "Beat Patrol Interception Allocator",
      "Blockchain Immutable Match Hash", "Anti-Tamper Biometric Shield", "Mobile App for Beat Cops (Quick Scan)", "Jurisdiction/Transit Route Matcher",
      "Multi-Lingual Match Alert Translator", "Historical False-Positive Rate Analyzer", "Facial Recognition Use SOP Trainer", "FR DB/Server Health Monitor",
      "Imminent Absconder Sighting Alert", "Terror/Syndicate Member Profiler", "VIP/VVIP Threat Recognition Classifier", "AI Assisted Arrest Memo Drafter",
      "Video/Biometric Storage Forecaster", "Secure Undercover Agent Protector", "Integration with Passport/Visa DB", "Citizen Missing Person Photo Upload Sync",
      "Riot/Mob Violence Face Extraction Modeler", "Disaster Victim Identification Coordinator", "FR Software Licensing Budget Tracker", "Custom Workflow for Interstate Arrests",
      "AI Driven Movement Predictor", "Predictive Need for Rapid Action Force", "Custom Alert Trigger for Cyber/Intel SP", "Suspect Tracking Timeline Log"
    ]
  },
  {
    fileName: 'AgeProgressionDetailed.jsx',
    compName: 'AgeProgressionDetailed',
    mainTitle: 'AI AGE',
    subTitle: 'PROGRESSION',
    desc: 'Predictive Facial Aging for Cold Cases, Long-Term Missing Children & Fugitive Aging Estimation',
    experts: [
      "Generative AI Age Progression Engine", "Pediatric Bone/Facial Structure Modeler", "Genetic/Family Resemblance Integrator", "Long-Term Fugitive Aging Simulator",
      "Lifestyle Factor (Smoking/Weight) Modifier", "Historical Cold Case Photo Enhancer", "CCTNS/Missing Persons DB Sync", "Cross-Age Facial Recognition Matcher",
      "Age Progression Dashboard", "Voice-Command Progression Request Bot", "Automated Quarterly Cold Case Update", "Anti-Human Trafficking Unit Sync Bot",
      "Geo-Spatial Last Known Location Mapper", "Morph/Deepfake Detection AI", "Skull-to-Face Reconstruction Overlay", "Disguise (Beard/Glasses) Simulator",
      "AI Evaluator for Progression Accuracy", "Audit/Render Log Generator", "Data Privacy/Victim Info Scrubber", "State CID/Crime Branch Sync",
      "Field IO Progression Reference App", "Historical Recovery Correlator AI", "Supervisory/Nodal Officer Briefing", "Cold Case Re-investigation Allocator",
      "Blockchain Immutable Render Hash", "Anti-Tamper Image Shield", "Mobile App for Family Updates", "Jurisdiction Matcher",
      "Multi-Lingual Missing Poster Updater", "Historical Match Success Rate Analyzer", "Age Progression Utility SOP Trainer", "Render Farm Server Health Monitor",
      "Imminent Cold Case Lead Alert", "Child Trafficking Syndicate Profiler", "High-Profile Fugitive Classifier", "AI Assisted Re-Investigation Plan Drafter",
      "High-Res Image Storage Forecaster", "Secure Identity Protection Scrubber", "Integration with NGO/Shelter Home DBs", "Citizen 'Have You Seen Me?' Portal Sync",
      "Long-Term Kidnapping Outcome Modeler", "Disaster Orphan Identification Coordinator", "Progression Software/Compute Budget Tracker", "Custom Workflow for Interpol Red Notice",
      "AI Driven Location Predictor", "Predictive Need for Specialized Task Force", "Custom Alert Trigger for IG/ADG", "Cold Case Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'UnknownPersonIdentificationDetailed.jsx',
    compName: 'UnknownPersonIdentificationDetailed',
    mainTitle: 'AI UNKNOWN PERSON',
    subTitle: 'IDENTIFICATION',
    desc: 'Amnesia/Trauma Patient Matching, Shelter Home Scanning, Fingerprint/Iris Search & Tattoo Analysis',
    experts: [
      "Aadhar/Biometric (Fingerprint/Iris) Matcher", "Tattoo/Birthmark/Scar Recognition AI", "Shelter Home/Hospital DB Integrator", "Missing Person (CCTNS) Cross-Matcher",
      "Facial Feature Extraction Engine", "Clothing/Accessory Brand Matcher", "Vagrant/Beggar Network Profiler", "Psychiatric/Trauma Ward Sync Bot",
      "Identification Command Dashboard", "Voice-Command Trait Query Bot", "Automated Daily Match Report", "Social Welfare Department Sync Bot",
      "Geo-Spatial Discovery Spot Mapper", "Dialect/Language Accent NLP Analyzer", "Fake/Assumed Identity Detector", "Post-Trauma Facial Reconstructor AI",
      "AI Evaluator for Match Probability", "Audit/Identification Log Gen", "Data Privacy/Patient Detail Scrubber", "State Crime Records Bureau Sync",
      "Field IO Biometric Scan App", "Historical Disappearance Correlator", "SHO/Supervisory Officer Briefing", "NGO/Counselor Coordination Allocator",
      "Blockchain Immutable Biometric Hash", "Anti-Tamper Identity Shield", "Mobile App for Shelter Home Staff", "Jurisdiction/Transit Route Matcher",
      "Multi-Lingual Interview Translator", "Historical Identification Rate Analyzer", "Unknown Person SOP Trainer", "Biometric DB Server Health Monitor",
      "Imminent Match/Family Locate Alert", "Human Trafficking Victim Profiler", "High-Profile/VIP Amnesia Classifier", "AI Assisted Handover Protocol Drafter",
      "Biometric/Image Storage Forecaster", "Secure Victim Shelter Protector", "Integration with National Missing DB", "Citizen 'Do You Know Them?' Portal Sync",
      "Inter-State Trafficking Modeler", "Disaster Mass Displacement Coordinator", "Rehabilitation Budget/Expense Tracker", "Custom Workflow for Foreign National Verification",
      "AI Driven Origin/Hometown Predictor", "Predictive Need for Psychiatric Help", "Custom Alert Trigger for Nodal Officers", "Identification Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'DeadBodyIdentificationDetailed.jsx',
    compName: 'DeadBodyIdentificationDetailed',
    mainTitle: 'AI DEAD BODY',
    subTitle: 'IDENTIFICATION',
    desc: 'UIDB (Unidentified Dead Body) Matching, Craniofacial Reconstruction, Dental Record Sync & Mortuary Coordination',
    experts: [
      "UIDB (Unidentified Dead Body) DB Matcher", "Post-Mortem Craniofacial Reconstruction AI", "Dental Record/Odontology Matcher Bot", "Tattoo/Surgical Implant Serial Extractor",
      "Missing Persons (CCTNS) Cross-Matcher", "Decomposition Compensator/Enhancer AI", "Mortuary/Hospital Sync Engine", "DNA Profile/Forensic DB Integrator",
      "UIDB Command Dashboard", "Voice-Command Feature Query Bot", "Automated Daily Mortuary Report", "Forensic Science Lab (FSL) Sync Bot",
      "Geo-Spatial Discovery Spot Mapper", "Clothing/Belongings Pattern Matcher", "Foul Play/Homicide Indicator Extractor", "Fingerprint (Post-Mortem) Enhancer",
      "AI Evaluator for Match Probability", "Audit/Identification Log Gen", "Data Privacy/Deceased Detail Scrubber", "State Crime Records Bureau Sync",
      "Field IO UIDB Upload App", "Historical Missing Person Correlator", "SHO/Supervisory Officer Briefing", "Forensic/Medical Examiner Task Allocator",
      "Blockchain Immutable Autopsy Hash", "Anti-Tamper Forensic Record Shield", "Mobile App for Mortuary Staff", "Jurisdiction/River Current Modeler (for drownings)",
      "Multi-Lingual Press Release Generator", "Historical Identification Rate Analyzer", "UIDB Handling SOP/Protocol Trainer", "Mortuary DB Server Health Monitor",
      "Imminent Match/Family Locate Alert", "Serial Killer Victim Signature Profiler", "High-Profile/VIP Deceased Classifier", "AI Assisted Inquest Report Drafter",
      "High-Res Forensic Image Storage Forecaster", "Secure Informant Link Protector", "Integration with Aadhar/Biometric APIs", "Citizen UIDB Public Portal Sync",
      "Mass Casualty/Riot Victim Modeler", "Disaster/Calamity Mortuary Coordinator", "Forensic DNA/Burial Budget Tracker", "Custom Workflow for Cremation/Burial Approval",
      "AI Driven Origin/Hometown Predictor", "Predictive Need for Advanced DNA Profiling", "Custom Alert Trigger for SP/SSP", "UIDB Identification & Disposal Timeline Tracker"
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

console.log('All 5 Missing Persons & Identification Modules files generated successfully.');
