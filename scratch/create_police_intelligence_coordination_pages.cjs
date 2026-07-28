const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'PoliceInformantRewardManagementDetailed.jsx',
    compName: 'PoliceInformantRewardManagementDetailed',
    mainTitle: 'AI POLICE INFORMANT REWARD',
    subTitle: 'MANAGEMENT',
    desc: 'Anonymous tip scoring, automated bounty allocation, secret-fund (SS Fund) auditing & source reliability tracking',
    experts: [
      "Tip Reliability/Credibility Scorer AI", "Secret Service (SS) Fund Auditor", "Source/Informant Track-Record Analyzer", "Anonymous Identity/Alias Protector",
      "Bounty/Reward ROI Estimator", "Cross-District Informant De-duplicator", "Geo-Spatial Tip Origin Mapper", "False-Flag/Disinformation Detector",
      "Informant/Reward Dashboard", "Voice-Command Fund Query Bot", "Automated Monthly SS Fund Audit Report", "State Intelligence Department Sync",
      "Informant Burn/Exposure Risk Predictor", "Extortion/Double-Cross Risk Analyzer", "Delayed Payment/Grievance Alert", "Value-of-Intelligence (VoI) Scorer",
      "AI Evaluator for Source Network Health", "Audit/Disbursement Log Generator", "Data Privacy/Top-Secret Scrubber", "Finance/Accounts (Confidential) Sync",
      "Handling Officer (HO) Secure App", "Historical Tip-to-Arrest Correlator", "SP (Intelligence) Briefing AI", "Reward Disbursement/Approval Allocator",
      "Blockchain Immutable Disbursement Hash", "Anti-Tamper Identity Shield", "Mobile App for Secure Tip Upload", "District-wise Informant Yield Benchmarker",
      "Automated Alert for High-Value (Terror/Narco) Tip", "Historical Reward Efficacy Analyzer", "Source Handling/Tradecraft SOP Trainer", "Dark-Web/Encrypted Comms API Monitor",
      "Imminent Source Compromise/Assassination Alert", "Fabricated Tip/Rogue Informant Profiler", "High-Stakes (Underworld/Naxal) Source Classifier", "AI Assisted Reward Sanction Drafter",
      "Intelligence Yield/Trend Forecaster", "Secure Source Dossier Protector", "Integration with NIA/IB Watchlists", "Anti-Terrorism Squad (ATS) Sync",
      "Election Money/Liquor Distribution Tip Modeler", "Disaster Hoax/Panic Tip Coordinator", "Secret Service Fund Budget Tracker", "Custom Workflow for Surrendered Militants",
      "AI Driven Next Quarter Fund Requirement Predictor", "Predictive Need for Source Relocation", "Custom Alert Trigger for DGP (Intel)", "Tip Receipt to Reward Disbursement Timeline"
    ]
  },
  {
    fileName: 'SensitivePersonRegistryDetailed.jsx',
    compName: 'SensitivePersonRegistryDetailed',
    mainTitle: 'AI SENSITIVE PERSON',
    subTitle: 'REGISTRY',
    desc: 'Dynamic threat scoring of extremists, political agitators, hate-speech monitors & automated movement alerts',
    experts: [
      "Extremist/Agitator Threat Scorer AI", "Hate-Speech/Social Media NLP Monitor", "Movement/Travel Geo-Fence Alert Engine", "Financial/Hawala Transaction Linker",
      "Associates/Syndicate Network Mapper", "Bail/Parole Violation Detector", "Geo-Spatial Sensitive Person Heatmapper", "Radicalization Trajectory Analyzer",
      "Sensitive Person Intelligence Dashboard", "Voice-Command Dossier Query Bot", "Automated Weekly Threat Assessment Report", "State CID/Intelligence Sync",
      "Absconding/Underground Risk Predictor", "Imminent Protest/Riot Instigation Alert", "Weapon Procurement/Smuggling Predictor", "Inter-State Movement/Coordination Analyzer",
      "AI Evaluator for Individual Threat Index", "Audit/Surveillance Log Generator", "Data Privacy/Classified Dossier Scrubber", "Special Task Force (STF) Sync",
      "Field Intelligence Officer Mobile App", "Historical Modus Operandi Correlator", "IG (Law & Order) Briefing AI", "Surveillance/Shadowing Task Allocator",
      "Blockchain Immutable Dossier Hash", "Anti-Tamper Surveillance Log Shield", "Mobile App for Beat Constable Sighting", "District-wise Agitator Density Benchmarker",
      "Automated Alert for Red-Corner/Lookout Notice Match", "Historical Protest/Damage Cost Analyzer", "Surveillance/Tail SOP Trainer", "Telecom/CDR (Call Detail Record) API Monitor",
      "Imminent Assassination/Terror Attack Alert", "Mastermind/Financier Profiler", "High-Priority (Sleeper Cell/Radical) Classifier", "AI Assisted Preventive Detention Drafter",
      "Threat Evolution/Radicalization Forecaster", "Secure Informant/Surveillance Protector", "Integration with National Intelligence Grid (NATGRID)", "Immigration/Airport Security Sync",
      "Election Booth-Capturing Suspect Modeler", "Disaster Looting/Hoarding Suspect Coordinator", "Covert Surveillance/Tech Budget Tracker", "Custom Workflow for VIP Threat Suspects",
      "AI Driven Preventive Arrest Predictor", "Predictive Need for Inter-Agency Task Force", "Custom Alert Trigger for DGP", "Sighting/Intelligence to Action Timeline"
    ]
  },
  {
    fileName: 'HistoryOfMajorIncidentsRepositoryDetailed.jsx',
    compName: 'HistoryOfMajorIncidentsRepositoryDetailed',
    mainTitle: 'AI HISTORY OF MAJOR INCIDENTS',
    subTitle: 'REPOSITORY',
    desc: 'Case study extraction, tactical failure/success NLP analysis, timeline reconstruction & predictive modeling for anniversaries',
    experts: [
      "Tactical Failure/Success NLP Analyzer", "Incident Timeline/Sequence Reconstructor", "Anniversary/Retaliation Risk Predictor", "Case Study/Lessons Learned Extractor",
      "Modus Operandi (MO) Evolution Tracker", "Media/Public Sentiment (Historical) Correlator", "Geo-Spatial Major Incident Heatmapper", "Court Acquittal vs Investigation Flaw Linker",
      "Historical Incident Intelligence Dashboard", "Voice-Command Archive Query Bot", "Automated Pre-Anniversary Threat Report", "State Crime Records Bureau (SCRB) Sync",
      "Copycat Crime/Syndicate Resurgence Predictor", "Ignored Warning/Intelligence Failure Analyzer", "Socio-Political Fallout Predictor", "Resource/Deployment Shortfall Identifier",
      "AI Evaluator for Tactical Readiness Index", "Audit/Archive Access Log Generator", "Data Privacy/Victim Identity Scrubber", "Police Training Academy Sync",
      "Investigating Officer/Trainee App", "Historical Riot/Terror Attack Correlator", "DGP (Operations) Briefing AI", "Refresher Training/Briefing Allocator",
      "Blockchain Immutable Archive Hash", "Anti-Tamper Case File Shield", "Mobile App for On-the-Go Case Reference", "Range-wise Incident Resolution Benchmarker",
      "Automated Alert for Impending Incident Anniversary", "Historical Riot Compensation/Damage Analyzer", "Crisis Response/Tactical SOP Trainer", "Digitized Record/OCR Health Monitor",
      "Imminent Retaliatory Attack (Post-Verdict) Alert", "Serial Offender/Mastermind Profiler", "High-Impact (Communal/Terror) Incident Classifier", "AI Assisted Tactical Briefing Drafter",
      "Crime Trend/Cyclical Pattern Forecaster", "Secure Classified Case File Protector", "Integration with National Crime Records Bureau (NCRB)", "Judicial/Prosecution Department Sync",
      "Election Historical Violence (Booth-wise) Modeler", "Disaster Historical Flash-Flood/Quake Coordinator", "Digitization/Archival Budget Tracker", "Custom Workflow for Unsolved/Cold Cases",
      "AI Driven Future Flashpoint Predictor", "Predictive Need for Specialized Force Deployment", "Custom Alert Trigger for Home Secretary", "Query to Case Study Generation Timeline"
    ]
  },
  {
    fileName: 'DistrictSecurityAssessmentDetailed.jsx',
    compName: 'DistrictSecurityAssessmentDetailed',
    mainTitle: 'AI DISTRICT SECURITY',
    subTitle: 'ASSESSMENT',
    desc: 'Multi-variable threat modeling (communal, crime, terrain), force-to-population optimization & vulnerability heatmaps',
    experts: [
      "Multi-Variable Threat Modeler (Crime/Communal)", "Force-to-Population/Area Optimizer AI", "Vulnerability/Flashpoint Heatmapper", "Demographic Shift/Migration Analyzer",
      "Industrial/Labor Unrest Risk Scorer", "Terrain/Geography (Forest/Border) Challenge Mapper", "Geo-Spatial Strategic Asset/Vital Inst. Mapper", "Historical Riot/Election Violence Correlator",
      "District Security Assessment Dashboard", "Voice-Command District Query Bot", "Automated Quarterly Security Audit Report", "State Intelligence Bureau Sync",
      "Communal Tension/Polarization Predictor", "Force Depletion/Fatigue Risk Analyzer", "Inadequate Response Time (Remote Area) Alert", "Organized Crime Syndicate Encroachment Detector",
      "AI Evaluator for District Safe-City Index", "Audit/Assessment Log Generator", "Data Privacy/Demographic Scrubber", "Armed Police/Reserve Battalion Sync",
      "SP/SSP (Superintendent) Mobile App", "Historical Budget vs Crime Drop Correlator", "IG (Zone) Briefing AI", "Force Reallocation/Deployment Task Allocator",
      "Blockchain Immutable Assessment Hash", "Anti-Tamper Security Audit Shield", "Mobile App for Field Vulnerability Upload", "District-to-District Security Benchmarker",
      "Automated Alert for Critical Force Shortfall", "Historical Policing/Deployment Cost Analyzer", "Strategic Deployment/Riot Control SOP Trainer", "Crime/CCTNS Data Ingestion API Monitor",
      "Imminent Breakdown of Law & Order Alert", "High-Risk/Volatile District Profiler", "Mission-Critical (Naxal/Border District) Classifier", "AI Assisted Force Augmentation Proposal Drafter",
      "Crime Rate/Demographic Trend Forecaster", "Secure Vital Installation Blueprint Protector", "Integration with Census/Municipal Data", "Central Armed Police Force (CAPF) Sync",
      "Election Hyper-Sensitive District Modeler", "Disaster Proneness (Flood/Seismic) Coordinator", "District Modernization/Equipment Budget Tracker", "Custom Workflow for Tourist/Pilgrimage Districts",
      "AI Driven Next-Year Force Requirement Predictor", "Predictive Need for New Police Stations", "Custom Alert Trigger for DGP/Chief Minister", "Assessment Generation to Deployment Timeline"
    ]
  },
  {
    fileName: 'HighRiskVillageMonitoringDetailed.jsx',
    compName: 'HighRiskVillageMonitoringDetailed',
    mainTitle: 'AI HIGH-RISK VILLAGE',
    subTitle: 'MONITORING',
    desc: 'Caste/factional feud tracking, illicit liquor/arms manufacturing detection, land dispute escalation & rural intelligence',
    experts: [
      "Factional/Caste Feud NLP & Sentiment Tracker", "Illicit Liquor/Arms Manufacturing Geo-Predictor", "Land Dispute Escalation/Violence Scorer", "Rural Intelligence (Chowkidar) Network Analyzer",
      "Agrarian/Crop-Failure Distress Modeler", "Absconder/History-Sheeter Density Heatmapper", "Geo-Spatial Village Vulnerability Mapper", "Panchayat/Local Election Rivalry Tracker",
      "High-Risk Village Intelligence Dashboard", "Voice-Command Village Query Bot", "Automated Monthly Rural Threat Report", "State Revenue/Land Record Department Sync",
      "Imminent Mass Clash/Riot Predictor", "Honor Killing/Khap Panchayat Alert AI", "Illegal Sand/Coal Mining Syndicate Linker", "Beat Constable Visit/Negligence Detector",
      "AI Evaluator for Village Peace Index", "Audit/Rural Intel Log Generator", "Data Privacy/Informant Identity Scrubber", "Local Intelligence Unit (LIU) Sync",
      "SHO/Circle Officer Rural App", "Historical Caste-Violence Correlator", "SP (Rural) Briefing AI", "Preventive Action/Patrol Task Allocator",
      "Blockchain Immutable Land/Dispute Intel Hash", "Anti-Tamper Beat Diary Shield", "Mobile App for Village Chowkidar Reporting", "Tehsil/Block-wise Village Risk Benchmarker",
      "Automated Alert for Armed Mob Mobilization", "Historical Riot Control/Deployment Cost Analyzer", "Rural Policing/Community Outreach SOP Trainer", "Drone/Satellite Imagery (Mining/Liquor) API Monitor",
      "Imminent Caste/Communal Massacre Alert", "Habitual Riot-Instigator/Mafia Profiler", "High-Priority (Dacoit/Naxal-affected) Village Classifier", "AI Assisted Preventive Arrest (CrPC 107/116) Drafter",
      "Rural Crime/Distress Trend Forecaster", "Secure Informant/Chowkidar Network Protector", "Integration with Agrarian/Weather Distress Portals", "Panchayati Raj/Rural Development Sync",
      "Election Booth-Capturing/Violence Modeler", "Disaster (Flood/Drought) Relief Mismanagement Coordinator", "Rural Informant/Patrol Fuel Budget Tracker", "Custom Workflow for Cross-Border Smuggling Villages",
      "AI Driven Peace-Committee Efficacy Predictor", "Predictive Need for Armed Picket Deployment", "Custom Alert Trigger for Range DIG", "Intel Receipt to Preventive Raid Timeline"
    ]
  },
  {
    fileName: 'HighRiskUrbanAreaMonitoringDetailed.jsx',
    compName: 'HighRiskUrbanAreaMonitoringDetailed',
    mainTitle: 'AI HIGH-RISK URBAN AREA',
    subTitle: 'MONITORING',
    desc: 'Slum/ghetto crime syndicate mapping, demographic friction alerts, drug hotspot prediction & rapid mobilization routing',
    experts: [
      "Urban Gang/Syndicate Territory Mapper", "Demographic Friction/Communal Tension Alert", "Drug/Narcotics Peddling Hotspot Predictor", "Rapid Mobilization/Chokepoint Router",
      "Slum/Ghetto Unregistered Tenant/Migrant Analyzer", "CCTV/ANPR Density & Blind-Spot Mapper", "Geo-Spatial Urban Vulnerability Heatmapper", "Youth Unemployment/Radicalization Scorer",
      "High-Risk Urban Intelligence Dashboard", "Voice-Command Area Query Bot", "Automated Weekly Slum/Urban Threat Report", "Municipal Corporation/Urban Planning Sync",
      "Imminent Gang War/Turf Dispute Predictor", "Flash-Mob/Protest Assembly Alert AI", "Illegal Encroachment/Land-Mafia Linker", "Emergency Vehicle/Riot-Control Access Analyzer",
      "AI Evaluator for Urban Safe-City Index", "Audit/Urban Intel Log Generator", "Data Privacy/Citizen PII Scrubber", "Anti-Narcotics Task Force (ANTF) Sync",
      "City SP/ACP Mobile App", "Historical Riot/Curfew Correlator", "Commissioner of Police (CP) Briefing AI", "Area Domination/Flag March Task Allocator",
      "Blockchain Immutable Urban Intel Hash", "Anti-Tamper Informant Log Shield", "Mobile App for Resident Welfare Association (RWA) Tip", "Zone/Ward-wise Urban Crime Benchmarker",
      "Automated Alert for Armed Syndicate Mobilization", "Historical Urban Deployment Cost Analyzer", "Urban Riot Control/CQB (Close Quarters) SOP Trainer", "City Surveillance/CCTV Grid API Monitor",
      "Imminent Urban Terror/Communal Riot Alert", "Drug Lord/Gang Leader Profiler", "High-Priority (Communal Flashpoint) Area Classifier", "AI Assisted Section 144/Curfew Order Drafter",
      "Urban Crime/Migration Trend Forecaster", "Secure Undercover Asset Protector", "Integration with Safe City/Smart City Command Center", "State Intelligence/ATS Sync",
      "Election Urban Voter Intimidation Modeler", "Disaster Slum Fire/Building Collapse Coordinator", "Urban Surveillance/Informant Budget Tracker", "Custom Workflow for Nightlife/Pub Brawls",
      "AI Driven Gang Retaliation Predictor", "Predictive Need for Permanent Police Outpost (Chowki)", "Custom Alert Trigger for DGP/CP", "Tension Detection to Rapid Deployment Timeline"
    ]
  },
  {
    fileName: 'CrossBorderIntelligenceExchangeDashboardDetailed.jsx',
    compName: 'CrossBorderIntelligenceExchangeDashboardDetailed',
    mainTitle: 'AI CROSS-BORDER INTELLIGENCE',
    subTitle: 'EXCHANGE DASHBOARD',
    desc: 'Inter-state criminal tracking, smuggling route coordination, real-time fugitive alerts & secure communication channels',
    experts: [
      "Inter-State Fugitive/Criminal Tracker AI", "Smuggling/Contraband Route Geo-Predictor", "Real-Time Interstate Alert/BOLO Engine", "Secure/Encrypted Cross-Border Comms Bot",
      "Modus Operandi (MO) Cross-Match Analyzer", "Human Trafficking/Missing Person Linker", "Geo-Spatial Border Checkpoint/Porous Route Mapper", "Inter-State Gang/Syndicate Network Analyzer",
      "Cross-Border Intelligence Dashboard", "Voice-Command Interstate Query Bot", "Automated Monthly Joint-Ops Intelligence Report", "Neighboring State Police/CID Sync",
      "Fugitive Border-Crossing/Escape Predictor", "Fake ID/Vehicle Plate Interstate Mismatch Alert", "Weapon/Narcotics Supply Chain Analyzer", "Jurisdictional Dispute/Delay Red-Flagger",
      "AI Evaluator for Inter-State Cooperation Index", "Audit/Data-Exchange Log Generator", "Data Privacy/Classified Intel Scrubber", "National Investigation Agency (NIA) Sync",
      "Nodal Officer (Interstate) Secure App", "Historical Cross-Border Crime Correlator", "IG (Border/Interstate) Briefing AI", "Joint-Raid/Coordination Task Allocator",
      "Blockchain Immutable Intel Exchange Hash", "Anti-Tamper Secure Message Shield", "Mobile App for Border Outpost (BOP) Alerts", "State-to-State Response Time Benchmarker",
      "Automated Alert for High-Value Target Crossing", "Historical Joint-Ops/Extradition Cost Analyzer", "Interstate Arrest/Transit Remand SOP Trainer", "CCTNS/Inter-operable Criminal Justice System API Monitor",
      "Imminent Major Smuggling/Terror Infiltration Alert", "Interstate Kingpin/Smuggler Profiler", "High-Priority (Terror/Arms) Intel Classifier", "AI Assisted Letter Rogatory/Transit Warrant Drafter",
      "Interstate Crime/Migration Trend Forecaster", "Secure Undercover/Joint-Ops Plan Protector", "Integration with BSF/SSB (Border Guarding Forces)", "Narcotics Control Bureau (NCB) Sync",
      "Election Interstate Liquor/Cash Smuggling Modeler", "Disaster Interstate Relief/Refugee Coordinator", "Joint Task Force/Travel Budget Tracker", "Custom Workflow for International Border (Nepal/Bangladesh)",
      "AI Driven Syndicate Expansion Predictor", "Predictive Need for Joint Border Checkposts", "Custom Alert Trigger for DGP", "Intel Receipt to Joint Operation Execution Timeline"
    ]
  },
  {
    fileName: 'MultiAgencyCoordinationCenterDetailed.jsx',
    compName: 'MultiAgencyCoordinationCenterDetailed',
    mainTitle: 'AI MULTI-AGENCY',
    subTitle: 'COORDINATION CENTER',
    desc: 'Unified operational picture, intelligence deduplication across agencies (IB, RAW, ATS, Customs), joint task force tracking & secure data silos',
    experts: [
      "Unified Common Operational Picture (COP) AI", "Inter-Agency Intel Deduplication/Fusion Engine", "Joint Task Force (JTF) Milestone Tracker", "Secure Data Silo/Access Control Bot",
      "Threat Level/Alert Synchronization AI", "Resource/Asset De-confliction Analyzer", "Geo-Spatial Joint Operation Mapper", "Customs/Financial Intel (FIU) Cross-Linker",
      "Multi-Agency Coordination Dashboard", "Voice-Command Joint Ops Query Bot", "Automated Weekly Intelligence Fusion Report", "Central Intelligence (IB/RAW/NIA) Sync",
      "Friendly-Fire/Operation Clash Predictor", "Intelligence Hoarding/Silo Alert", "Communication Breakdown/Latency Analyzer", "Suspect Alias/Identity Resolution Engine",
      "AI Evaluator for Inter-Agency Synergy Index", "Audit/Intel-Sharing Log Generator", "Data Privacy/Need-to-Know Scrubber", "Enforcement Directorate (ED)/Income Tax Sync",
      "Nodal Liaison Officer Secure App", "Historical Inter-Agency Success Correlator", "Multi-Agency Center (MAC) Director Briefing AI", "Joint Surveillance/Raid Task Allocator",
      "Blockchain Immutable Intel Fusion Hash", "Anti-Tamper Classified Ops Shield", "Mobile App for Secure Field Liaison", "Agency-wise Intel Contribution Benchmarker",
      "Automated Alert for Conflicting Agency Actions", "Historical Joint Task Force Cost Analyzer", "Inter-Agency Protocol/SOP Trainer", "Multi-Network/Encrypted Comms API Monitor",
      "Imminent National Security Threat Alert", "Transnational Syndicate/Terror Profiler", "Top-Secret/Classified (Level 4) Intel Classifier", "AI Assisted Joint Ops Protocol Drafter",
      "Strategic Threat/Geopolitical Forecaster", "Secure Source/Informant Identity Protector", "Integration with National Security Council (NSCS)", "Coast Guard/Navy (Coastal Security) Sync",
      "Election Multi-Agency (ECI, Police, IT) Modeler", "Disaster (CBRN) Multi-Agency Coordinator", "Joint Operations/MAC Budget Tracker", "Custom Workflow for Hijacking/Hostage Crisis",
      "AI Driven Terror Attack Probability Predictor", "Predictive Need for specialized JTF", "Custom Alert Trigger for Home Secretary/NSA", "Intel Fusion to Joint Action Timeline"
    ]
  },
  {
    fileName: 'IntelligenceDisseminationWorkflowDetailed.jsx',
    compName: 'IntelligenceDisseminationWorkflowDetailed',
    mainTitle: 'AI INTELLIGENCE',
    subTitle: 'DISSEMINATION WORKFLOW',
    desc: 'Need-to-know based automated routing, decryption key management, read-receipt tracking & leak probability scoring',
    experts: [
      "Need-to-Know/Clearance Level Router AI", "Decryption Key/Access Lifecycle Manager", "Secure Read-Receipt/Acknowledgement Tracker", "Information Leak/Insider Threat Scorer",
      "Time-Sensitive/Flash Intel Prioritizer", "Content Redaction/Sanitization Engine", "Geo-Spatial Threat vs Recipient Mapper", "Burn-After-Reading/Self-Destruct Enforcer",
      "Intelligence Dissemination Dashboard", "Voice-Command Workflow Query Bot", "Automated Daily Dissemination Audit Report", "State/Central Intelligence Branch Sync",
      "Unauthorized Forwarding/Screenshot Predictor", "Action-Delayed/Unread Intel Alert", "Clearance Level Violation/Bypass Analyzer", "Phishing/Social Engineering Compromise Predictor",
      "AI Evaluator for Secure Comms Efficiency", "Audit/Access/Decryption Log Generator", "Data Privacy/Source Protection Scrubber", "Special Branch/CID Sync",
      "Field Commander Secure Inbox App", "Historical Intel-Leak Correlator", "IG (Intelligence) Briefing AI", "Action-Taken Report (ATR) Allocator",
      "Blockchain Immutable Access Log Hash", "Anti-Tamper Watermarking/Fingerprint Shield", "Mobile App for Encrypted Intel View", "Unit-wise Response/Read-Time Benchmarker",
      "Automated Alert for Suspected Insider Leak", "Historical Secure Comms Infrastructure Cost Analyzer", "Information Security/OPSEC SOP Trainer", "Cryptography/VPN API Health Monitor",
      "Imminent Top-Secret Intel Compromise Alert", "Careless/Compromised Officer Profiler", "Flash/Critical (Actionable within Hours) Classifier", "AI Assisted Intelligence Circular Drafter",
      "Information Flow/Bottleneck Forecaster", "Secure Network/Air-Gapped Server Protector", "Integration with National Intelligence Grid", "Telecom/Cyber Security (CERT-In) Sync",
      "Election Sensitive Threat Intel Router", "Disaster Early-Warning Dissemination Coordinator", "Cyber Security/Encryption Budget Tracker", "Custom Workflow for VIP Movement Intel",
      "AI Driven Action Response Time Predictor", "Predictive Need for Clearance Revocation", "Custom Alert Trigger for DGP", "Intel Generation to Field Execution Timeline"
    ]
  },
  {
    fileName: 'ConfidentialSourceAccessControlDetailed.jsx',
    compName: 'ConfidentialSourceAccessControlDetailed',
    mainTitle: 'AI CONFIDENTIAL SOURCE',
    subTitle: 'ACCESS CONTROL',
    desc: 'Biometric/hardware token validation for handlers, compartmentation of dossiers, alias management & handler transition protocols',
    experts: [
      "Biometric/Token Access Validator AI", "Dossier Compartmentation/Silo Engine", "Alias/Fake-Identity Management Bot", "Handler-to-Handler Transition/Handover Protocol AI",
      "Source Burn-Risk/Compromise Scorer", "Unauthorized Dossier Access/Snooping Detector", "Geo-Spatial Handler-Source Meeting Mapper", "Financial/Reward Trail Obfuscator",
      "Source Access Control Dashboard", "Voice-Command Compartment Query Bot", "Automated Monthly Source Security Audit", "State Intelligence/Special Branch Sync",
      "Handler Co-option/Compromise Predictor", "Double-Agent/Turncoat Risk Analyzer", "Suspicious Access Pattern/Data Dump Alert", "Meeting Safe-House Vulnerability Analyzer",
      "AI Evaluator for Source Anonymity Index", "Audit/Dossier Access Log Generator", "Data Privacy/True Identity Scrubber", "Anti-Terrorism Squad (ATS) Sync",
      "Handling Officer Secure Token App", "Historical Source Compromise/Assassination Correlator", "ADG (Intelligence) Briefing AI", "New Handler Allocation/Vetting Task",
      "Blockchain Immutable Access/Audit Hash", "Anti-Tamper Alias Database Shield", "Mobile App for Secure Source Comms", "Handler-wise Source Longevity Benchmarker",
      "Automated Alert for Rogue Access Attempt", "Historical Safe-House/Tradecraft Cost Analyzer", "Source Handling/Tradecraft SOP Trainer", "Biometric/Hardware Security Key API Monitor",
      "Imminent Source Unmasking/Assassination Alert", "Compromised/Rogue Handler Profiler", "High-Value (Deep Cover/Mole) Source Classifier", "AI Assisted Burn-Notice/Relocation Drafter",
      "Source Yield/Lifespan Forecaster", "Secure Air-Gapped Master Database Protector", "Integration with Witness Protection Programs", "Financial Intelligence/Secret Fund Sync",
      "Election Deep-Cover Political Intel Access Modeler", "Disaster (Man-made) Syndicate Source Coordinator", "Source Protection/Relocation Budget Tracker", "Custom Workflow for Foreign/Cross-Border Assets",
      "AI Driven Source Defection Predictor", "Predictive Need for Immediate Extraction", "Custom Alert Trigger for DGP (Intel)", "Suspicious Access to Dossier Lockdown Timeline"
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

console.log('All 10 Police Intelligence & Coordination Modules files generated successfully.');
