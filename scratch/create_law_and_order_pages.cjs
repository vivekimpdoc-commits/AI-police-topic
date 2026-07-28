const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'EventManagementDetailed.jsx',
    compName: 'EventManagementDetailed',
    mainTitle: 'AI EVENT',
    subTitle: 'MANAGEMENT',
    desc: 'Automated NOC Processing, Risk Scoring, Resource Allocation & Geofenced Security Coordination',
    experts: [
      "Event NOC/Permit Workflow Assistant AI", "Crowd Density Risk Predictor Engine", "Traffic Diversion Router Bot", "Social Media Hype Sentiment Analyzer",
      "Fire/Safety Compliance Checker", "Emergency Medical Route Optimizer", "Resource (Force/Barricade) Allocator", "VIP/VVIP Threat Matrix Modeler",
      "Event Command Dashboard", "Voice-Command Permit Query Bot", "Automated Daily Security Brief", "Inter-Department (Civic/Medical) Sync Bot",
      "Geo-Spatial Venue Map Overlay AI", "CCTV/Drone Blind-Spot Analyzer", "Ticket Scalping/Fraud Detector", "Historical Event Precedent Matcher",
      "AI Evaluator for Event Approval", "Audit/Approval Access Log Generator", "Data Privacy/Organizer Detail Scrubber", "Traffic Police Sync Bot",
      "Field Officer Venue Checklist App", "Cold Case Stampede Incident Correlator", "DGP/CP Level Event Briefing AI", "Ticketing/Pass Authorization Allocator",
      "Blockchain Immutable NOC Hash", "Anti-Tamper Permit Shield AI", "Mobile App for Organizers", "Protest/Flash-Mob Geolocation Matcher",
      "Multi-Lingual Guideline Translator", "Historical Event Safety Analyzer", "Event Security SOP Trainer AI", "Event DB Server Health Monitor",
      "Imminent Overcrowding Alert Bot", "Organized Crime Extortion Profiler", "High-Risk Political Rally Classifier", "AI Assisted Deployment Drafter",
      "Venue Layout Storage Forecaster", "Secure Whistleblower Threat Protector", "Integration with Fire/Health Depts", "Citizen Event Feedback Analytics",
      "Communal Tension Flashpoint Modeler", "Disaster Evacuation Coordinator", "Event Security Billing/Expense Tracker", "Custom Workflow for Multi-District Events",
      "AI Driven Incident Probability Predictor", "Predictive Need for Rapid Action Force", "Custom Alert Trigger for Nodal Officers", "Event Lifecycle & Post-Mortem Tracker"
    ]
  },
  {
    fileName: 'CrowdManagementDetailed.jsx',
    compName: 'CrowdManagementDetailed',
    mainTitle: 'AI CROWD',
    subTitle: 'MANAGEMENT',
    desc: 'Real-Time Density Analytics, Surge Prediction, Bottleneck Identification & Automated Evacuation Routing',
    experts: [
      "CCTV Crowd Density Estimator AI", "Drone/UAV Aerial Recon Integrator", "Bottleneck/Chokepoint Predictor", "Panic/Stampede Risk Scoring Engine",
      "Cell Tower (CDR) Mass Gathering Mapper", "Public Transit Overload Correlator", "Social Media Rally Organizer Tracker", "Acoustic/Noise Anomaly Detector",
      "Crowd Analytics Dashboard", "Voice-Command Density Query Bot", "Automated Surge Probability Report", "Rapid Action Force (RAF) Sync Bot",
      "Geo-Fenced Perimeter Breach Alert", "Evacuation Route Optimizer AI", "Face Recognition in Dense Crowds", "Weapon/Contraband Visual Scanner",
      "AI Evaluator for Force Deployment", "Audit/Crowd Video Log Generator", "Data Privacy/Face Blur Engine AI", "Traffic/Transit Authority Sync Bot",
      "Field Patrol Density Alert App", "Historical Stampede Pattern Matcher", "Command Center Briefing Bot", "Barricade/Riot Gear Resource Allocator",
      "Blockchain Immutable Video Hash", "Anti-Tamper Evidence Shield AI", "Mobile App for Field Commanders", "Protest Route Geolocation Matcher",
      "Multi-Lingual PA System Translator", "Historical Crowd Dynamics Analyzer", "Crowd Control SOP Trainer AI", "Analytics Server Health Monitor",
      "Imminent Stampede Alert Bot", "Mob Instigator Profiler Engine", "VIP Movement Disruption Classifier", "AI Assisted Tactical Plan Drafter",
      "Video Stream Storage Forecaster", "Secure Informant Link Protector", "Integration with Metro/Railways", "Citizen Safety Alert Broadcasting",
      "Communal Riot Escalation Modeler", "Disaster Evacuation Crowd Coordinator", "Crowd Management Expense Tracker", "Custom Workflow for Tear Gas/Lathi Charge",
      "AI Driven Escalation Predictor", "Predictive Need for Medical Camps", "Custom Alert Trigger for Riot Police", "Crowd Dispersal Timeline Tracker"
    ]
  },
  {
    fileName: 'RiotIntelligenceDetailed.jsx',
    compName: 'RiotIntelligenceDetailed',
    mainTitle: 'AI RIOT',
    subTitle: 'INTELLIGENCE',
    desc: 'Pre-Emptive Threat Detection, Hate Speech Analytics, Instigator Mapping & Supply Chain Tracking (Stones/Weapons)',
    experts: [
      "Social Media Hate Speech Extractor AI", "Communal Tension Sentiment Scorer", "Instigator/Agitator Network Mapper", "Fake News/Rumor Trajectory Analyzer",
      "Weapon/Stone Stockpiling Detector", "Dark Web Extremist Chatter Monitor", "Financial Funding/Hawala Tracer Bot", "Historical Riot Flashpoint Matcher",
      "Riot Intelligence Dashboard", "Voice-Command Threat Query Bot", "Automated Daily Tension Report", "Inter-Agency (IB/CID) Sync Bot",
      "Geo-Spatial Hotspot Predictor AI", "CCTV/Drone Facial Recognition Integrator", "WhatsApp/Telegram Viral Message Tracer", "Inflammatory Poster/Audio OCR Decoder",
      "AI Evaluator for Riot Probability", "Audit/Intelligence Log Generator", "Data Privacy/Innocent Bypass Scrubber", "State Intelligence Bureau Sync",
      "Field Intel Officer Alert App", "Past Riot Precedent Correlator AI", "DGP/Home Minister Briefing Bot", "Tactical Resource Allocator AI",
      "Blockchain Immutable Intel Hash", "Anti-Tamper Suspect Profile Shield", "Mobile App for Covert Intel Sync", "Flash-Mob Geolocation Coordinator",
      "Multi-Lingual Hate Speech Translator", "Historical Riot Escalation Analyzer", "Anti-Riot SOP Training Assistant", "Intel DB Server Health Monitor",
      "Imminent Mob Violence Alert Bot", "Organized Syndicate Instigator Profiler", "VIP Target Assessment Classifier", "AI Assisted Pre-Emptive Raid Drafter",
      "Social Media Archive Forecaster", "Secure Source/Informer Protector", "Integration with National Security DB", "Citizen Rumor Reporting Analytics",
      "Election Cycle Riot Modeler", "Disaster Scavenger/Riot Coordinator", "Intel Operations Budget Tracker", "Custom Workflow for Curfew/Internet Ban",
      "AI Driven Retaliation Predictor", "Predictive Need for Paramilitary", "Custom Alert Trigger for Cyber Cell", "Riot Lifecycle & Post-Mortem Tracker"
    ]
  },
  {
    fileName: 'DisasterResponseDetailed.jsx',
    compName: 'DisasterResponseDetailed',
    mainTitle: 'AI DISASTER',
    subTitle: 'RESPONSE',
    desc: 'Early Warning Integration, Evacuation Planning, Search & Rescue Mapping and Multi-Agency Coordination',
    experts: [
      "Meteorological/Seismic Early Warning Sync", "Evacuation Route Optimizer Engine", "Drone/Satellite Aerial Damage Mapper", "Social Media SOS Aggregator AI",
      "Casualty/Injury Prediction Modeler", "Hospital Bed/Blood Bank Availability Bot", "Shelter/Relief Camp Capacity Tracker", "Missing Person Visual Matcher AI",
      "Disaster Command Dashboard", "Voice-Command SOS Query Bot", "Automated Daily Relief Report", "NDRF/SDRF Coordination Sync Bot",
      "Geo-Spatial Flood/Fire Polygon Mapper", "Telecom Network Outage Analyzer", "Donation/Relief Material Router AI", "Roadblock/Bridge Collapse Detector",
      "AI Evaluator for Resource Deficit", "Audit/Rescue Action Log Generator", "Data Privacy/Victim Detail Scrubber", "State Disaster Management Authority Sync",
      "Field Rescue Officer Tasking App", "Historical Disaster Precedent Matcher", "CM/Chief Secretary Briefing AI", "Heavy Equipment/Boat Allocator Bot",
      "Blockchain Immutable Relief Hash", "Anti-Tamper Fund Allocation Shield", "Mobile App for Ground Volunteers", "SOS Geolocation Cluster Matcher",
      "Multi-Lingual Rescue Instructions Translator", "Historical Rescue Efficiency Analyzer", "Disaster Response SOP Trainer", "Disaster DB Server Health Monitor",
      "Imminent Secondary Threat (Epidemic) Alert", "Looting/Scavenging Risk Profiler", "VIP Rescue Protocol Classifier", "AI Assisted Rescue Plan Drafter",
      "Aerial Imagery Storage Forecaster", "Secure Volunteer DB Protector", "Integration with Armed Forces (Army/Air Force)", "Citizen Damage Reporting Analytics",
      "Post-Disaster Riot/Law & Order Modeler", "Logistics Supply Chain Coordinator", "Disaster Relief Budget Tracker", "Custom Workflow for Air-Drop Approvals",
      "AI Driven Epidemic Outbreak Predictor", "Predictive Need for Central Assistance", "Custom Alert Trigger for Medical Teams", "Disaster Recovery Timeline Tracker"
    ]
  },
  {
    fileName: 'EmergencyManagementDetailed.jsx',
    compName: 'EmergencyManagementDetailed',
    mainTitle: 'AI EMERGENCY',
    subTitle: 'MANAGEMENT',
    desc: 'Dial 112 Optimization, First Responder Dispatch, Triaging, & Live Incident Tracking',
    experts: [
      "Dial 112 Audio Sentiment/Urgency Scorer", "NLP Caller Intent Extraction AI", "Automated Call Triaging/Sorting Engine", "First Responder GPS Dispatcher Bot",
      "Prank/Fake Call Identifying AI", "Multi-Incident Link/Overlap Detector", "Best Route (Traffic Aware) Optimizer", "Caller Geolocation Triangulator",
      "Emergency Command Dashboard", "Voice-Command Dispatch Query Bot", "Automated Response Time (SLA) Report", "Fire/Ambulance/Police Sync Bot",
      "Geo-Spatial Crime Heatmap Overlay", "Live CCTV Feed Integrator AI", "Gunshot/Scream Acoustic Anomaly Matcher", "Repeat Caller/Victim History Analyzer",
      "AI Evaluator for Unit Deployment", "Audit/Call Recording Log Generator", "Data Privacy/Caller Identity Scrubber", "National Emergency Number Sync",
      "Field PCR Van Alert App", "Historical Emergency Precedent Matcher", "Command Center Supervisor Briefing", "Emergency Vehicle Fleet Allocator",
      "Blockchain Immutable Call Hash", "Anti-Tamper Dispatch Record Shield", "Mobile App for First Responders", "Cell Tower vs Stated Location Matcher",
      "Multi-Lingual Caller Translator", "Historical Response Time Analyzer", "Dispatcher SOP Compliance Trainer", "112 Server/Telecom Health Monitor",
      "Imminent Mass Casualty Alert Bot", "Organized Crime Ambush Profiler", "VIP/VVIP Emergency Classifier", "AI Assisted Tactical Response Drafter",
      "Audio Storage Size Forecaster", "Secure Whistleblower Call Protector", "Integration with Smart City Sensors", "Citizen Feedback & Rating Analytics",
      "Communal Clash Emergency Modeler", "Disaster SOS Overload Coordinator", "Emergency Ops Expense Tracker", "Custom Workflow for SWAT Deployment",
      "AI Driven Escalation Predictor", "Predictive Need for Multi-Jurisdiction Aid", "Custom Alert Trigger for ERV Leads", "Emergency Resolution Timeline Tracker"
    ]
  },
  {
    fileName: 'VIPSecurityDetailed.jsx',
    compName: 'VIPSecurityDetailed',
    mainTitle: 'AI VIP',
    subTitle: 'SECURITY',
    desc: 'Route Sanitization, Threat Assessment, Anti-Drone Surveillance & Convoy Fleet Management',
    experts: [
      "VIP Threat Assessment/Scoring AI", "Route Sanitization & Vulnerability Mapper", "Anti-Drone/UAV Detection Integrator", "Social Media VIP Threat Extractor",
      "Convoy GPS/Telematics Tracker", "CCTV/ANPR Route Stitching Engine", "Crowd Density/Hostility Modeler", "Sniper/Vantage Point Analyzer AI",
      "VIP Security Command Dashboard", "Voice-Command Route Query Bot", "Automated Threat Intel Report Gen", "Inter-District/State Border Sync Bot",
      "Geo-Spatial Safe-House Predictor AI", "Traffic Signal Pre-emption Bot", "Fake Identification/Imposter Detector", "Past VIP Attack Precedent Matcher",
      "AI Evaluator for Force Multiplier", "Audit/Security Protocol Log Gen", "Data Privacy/VIP Itinerary Scrubber", "Special Protection Group (SPG) Sync",
      "Field Escort Tactical App", "Historical Threat Profile Matcher AI", "DGP/Security Chief Briefing Bot", "Tactical Gear/Vehicle Allocator",
      "Blockchain Immutable Itinerary Hash", "Anti-Tamper Security Plan Shield", "Mobile App for Convoy Commanders", "Threat Geolocation Polygon Matcher",
      "Multi-Lingual Threat Translator", "Historical VIP Security Audit Analyzer", "VIP Protection SOP Trainer AI", "Security DB Server Health Monitor",
      "Imminent Route Breach Alert Bot", "Terror/Assassination Syndicate Profiler", "Z+/Z/Y Security Level Classifier", "AI Assisted Contingency Plan Drafter",
      "Surveillance Video Storage Forecaster", "Secure Comm Channel Protector", "Integration with Intelligence Bureau (IB)", "Media Leak Detection Analytics",
      "Riot/Protest Route Interception Modeler", "Disaster Evacuation VIP Coordinator", "VIP Security Expense Tracker", "Custom Workflow for Route Diversion",
      "AI Driven Attack Probability Predictor", "Predictive Need for Air Evacuation", "Custom Alert Trigger for NSG/SWAT", "VIP Movement Timeline Tracker"
    ]
  },
  {
    fileName: 'ElectionDutyManagementDetailed.jsx',
    compName: 'ElectionDutyManagementDetailed',
    mainTitle: 'AI ELECTION',
    subTitle: 'DUTY MANAGEMENT',
    desc: 'Booth Vulnerability Mapping, Force Deployment Optimization, Electoral Violence Prediction & EVM Security',
    experts: [
      "Polling Booth Vulnerability Scorer AI", "Force/Paramilitary Deployment Optimizer", "Electoral Violence History Analyzer", "Social Media Hate Speech/Propaganda Bot",
      "EVM Strong-Room CCTV Monitor", "Political Rivalry Clash Predictor", "Illegal Cash/Liquor Movement Tracker", "Voter Intimidation Sentiment AI",
      "Election Command Dashboard", "Voice-Command Booth Query Bot", "Automated Daily Election Brief", "Election Commission (ECI) Sync Bot",
      "Geo-Spatial Sensitive Booth Mapper", "Border/Checkpost Nakabandi Analyzer", "Fake News/Deepfake Audio Detector", "Historical Rigging/Booth Capturing Matcher",
      "AI Evaluator for Optimal Deployment", "Audit/Force Allocation Log Gen", "Data Privacy/Voter Info Scrubber", "Central Armed Police Forces (CAPF) Sync",
      "Field Sector Magistrate App", "Cold Case Electoral Violence Correlator", "DGP/Chief Electoral Officer Briefing", "Vehicle/Logistics Resource Allocator",
      "Blockchain Immutable EVM Custody Hash", "Anti-Tamper Strong-Room Shield", "Mobile App for Polling Officers", "Incident Geolocation Cluster Matcher",
      "Multi-Lingual Propaganda Translator", "Historical Election Security Analyzer", "Election Code (MCC) SOP Trainer", "Election DB Server Health Monitor",
      "Imminent Booth Capturing Alert Bot", "Organized Syndicate Funding Profiler", "VIP Candidate Security Classifier", "AI Assisted Re-Poll Plan Drafter",
      "Strong-Room Video Storage Forecaster", "Secure Whistleblower Tip Protector", "Integration with Voter Registration DB", "Citizen MCC Violation Analytics",
      "Communal Riot Escalation Modeler", "Disaster/Weather Impact on Voting Coordinator", "Election Security Budget Tracker", "Custom Workflow for MCC Violations",
      "AI Driven Voter Turnout Predictor", "Predictive Need for Aerial Surveillance", "Custom Alert Trigger for Zonal Officers", "Election Phase Timeline Tracker"
    ]
  },
  {
    fileName: 'FestivalSecurityDetailed.jsx',
    compName: 'FestivalSecurityDetailed',
    mainTitle: 'AI FESTIVAL',
    subTitle: 'SECURITY',
    desc: 'Procession Route Mapping, Communal Harmony Analytics, Stampede Prevention & Drone Surveillance',
    experts: [
      "Procession Route/Topography Mapper AI", "Communal Harmony/Tension Scorer", "Stampede/Crowd Crush Predictor", "Social Media Rumor/Hate Speech Extractor",
      "Drone/UAV Aerial Procession Monitor", "Traffic Diversion/Parking Optimizer", "Fire/Safety Hazard Detector AI", "Historical Clash Precedent Correlator",
      "Festival Security Dashboard", "Voice-Command Route Query Bot", "Automated Daily Security Brief", "Inter-Department (Civic/Health) Sync Bot",
      "Geo-Spatial Sensitive Area Overlay", "CCTV Bottleneck Analyzer AI", "Weapon/Contraband Visual Scanner", "Peace Committee Effectiveness Scorer",
      "AI Evaluator for Force Deployment", "Audit/Procession Approval Log Gen", "Data Privacy/Organizer Detail Scrubber", "State Intelligence Bureau Sync",
      "Field Officer Procession Task App", "Past Festival Incident Matcher AI", "DGP/CP Level Festival Briefing Bot", "Barricade/Riot Gear Resource Allocator",
      "Blockchain Immutable Approval Hash", "Anti-Tamper Security Plan Shield", "Mobile App for Procession Organizers", "Flashpoint Geolocation Matcher",
      "Multi-Lingual Guideline Translator", "Historical Festival Security Analyzer", "Festival Security SOP Trainer AI", "Festival DB Server Health Monitor",
      "Imminent Communal Clash Alert Bot", "Organized Crime Pickpocket Profiler", "VIP/VVIP Attendee Security Classifier", "AI Assisted Contingency Plan Drafter",
      "Surveillance Video Storage Forecaster", "Secure Informant Intel Protector", "Integration with Local Municipality", "Citizen Safety Alert Broadcasting",
      "Terror Attack Probability Modeler", "Disaster Evacuation Route Coordinator", "Festival Security Expense Tracker", "Custom Workflow for Volume/DJ Restrictions",
      "AI Driven Escalation Predictor", "Predictive Need for Rapid Action Force", "Custom Alert Trigger for Nodal Officers", "Procession Timeline Tracker"
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

console.log('All 8 Law & Order Modules files generated successfully.');
