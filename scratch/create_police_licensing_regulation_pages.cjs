const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'ArmsLicenseAdministrationDetailed.jsx',
    compName: 'ArmsLicenseAdministrationDetailed',
    mainTitle: 'AI ARMS LICENSE',
    subTitle: 'ADMINISTRATION',
    desc: 'Criminal record integration, medical fitness verification, threat perception assessment & digital license issuance',
    experts: [
      "Criminal Antecedent (CCTNS) Cross-Matcher", "Threat Perception/Need Assessment AI", "Medical/Psychological Fitness Validator", "Digital License/UIN Generator Bot",
      "Address/Police Verification Routing Engine", "Geo-Spatial License Density Mapper", "Ammunition Quota Allocation Calculator", "Fake Document/Forged Signature Detector",
      "Arms License Dashboard", "Voice-Command Application Query Bot", "Automated Monthly Arms Registration Report", "National Database of Arms Licenses (NDAL) Sync",
      "Concealed Criminal History Alert", "Political/Election Influencer Profiler", "Unjustified Threat Claim Analyzer", "Verification Delay/Pendency Estimator",
      "AI Evaluator for License Processing Index", "Audit/Approval Log Generator", "Data Privacy/Applicant Identity Scrubber", "State Intelligence Bureau Sync",
      "Licensing Officer/DM Mobile App", "Historical License Misuse/Crime Correlator", "District Magistrate (DM)/SP Briefing AI", "Field Verification Task Allocator",
      "Blockchain Immutable Approval Hash", "Anti-Tamper Digital License Shield", "Mobile App for Quick Verification Uploads", "District-wise Approval Time Benchmarker",
      "Automated Alert for High-Profile (VIP) Applications", "Historical Administrative Cost Analyzer", "Arms Act/Licensing SOP Trainer", "NDAL/ALIS API Health Monitor",
      "Imminent NDAL Portal Sync Failure Alert", "Habitual Gun-Culture/Display Offender Profiler", "Prohibited Bore/Restricted Weapon Classifier", "AI Assisted Final Approval/Rejection Order Drafter",
      "License Application/Renewal Volume Forecaster", "Secure Weapon Serial Number Protector", "Integration with E-District/Citizen Portal", "Local Intelligence Unit (LIU) Sync",
      "Election (Code of Conduct) Mass Weapon Deposit Modeler", "Disaster/Riot Weapon Surrender Coordinator", "Licensing Branch Infrastructure Budget Tracker", "Custom Workflow for Sports/Shooter Quotas",
      "AI Driven Application Approval/Rejection Predictor", "Predictive Need for Specialized Licensing Camps", "Custom Alert Trigger for Home Department", "Application Submission to Final Issuance Timeline"
    ]
  },
  {
    fileName: 'ArmsDealerInspectionDetailed.jsx',
    compName: 'ArmsDealerInspectionDetailed',
    mainTitle: 'AI ARMS DEALER',
    subTitle: 'INSPECTION',
    desc: 'Stock register auditing, ammunition sales tracking, physical security assessment & discrepancy flagging',
    experts: [
      "Stock Register/Inventory Auditing AI", "Ammunition Sales/Quota Validation Engine", "Physical Security (Vault/CCTV) Assessment Bot", "Discrepancy/Missing Weapon Flagging AI",
      "Buyer License (UIN) Verification Engine", "Geo-Spatial Dealer Location/Proximity Mapper", "Suspicious Bulk Purchase Analyzer", "License Expiry/Renewal Tracker (Dealer)",
      "Dealer Inspection Dashboard", "Voice-Command Stock Query Bot", "Automated Quarterly Dealer Audit Report", "National Database of Arms Licenses (NDAL) Sync",
      "Black-Market Diversion Risk Predictor", "Unregistered Sale/Fake Entry Alert", "Security Vulnerability (Vault/Alarm) Analyzer", "Inspection Overdue/Pendency Estimator",
      "AI Evaluator for Dealer Compliance Index", "Audit/Inspection Log Generator", "Data Privacy/Buyer Detail Scrubber", "State Arms Cell/Home Department Sync",
      "Inspecting Officer/SHO Mobile App", "Historical Dealer Infraction Correlator", "City Magistrate/SP (City) Briefing AI", "Surprise Inspection Task Allocator",
      "Blockchain Immutable Stock Verification Hash", "Anti-Tamper Audit Report Shield", "Mobile App for On-Site Video/Photo Upload", "Station-wise Inspection Compliance Benchmarker",
      "Automated Alert for Discrepant Ammunition Sales", "Historical Dealer Profit/Tax Correlation Analyzer", "Arms Rules Compliance/Inspection SOP Trainer", "Dealer Inventory Portal API Monitor",
      "Imminent Stock Audit Deadline Alert", "Habitual Rule-Breaking Dealer Profiler", "High-Risk (Bulk/Restricted Ammunition) Classifier", "AI Assisted Show-Cause Notice Drafter",
      "Weapon Sales/Trend Forecaster", "Secure Confidential Informant Protector", "Integration with Commercial Tax/GST Data", "Local Intelligence Unit (LIU) Sync",
      "Election Fast-Track Dealer Stock Sealing Modeler", "Disaster/Riot Immediate Dealer Closure Coordinator", "Inspection Team Transport Budget Tracker", "Custom Workflow for Gunsmith/Repair Workshop Audits",
      "AI Driven Infraction Probability Predictor", "Predictive Need for Inter-State Dealer Coordination", "Custom Alert Trigger for District Magistrate", "Inspection Date to Compliance Resolution Timeline"
    ]
  },
  {
    fileName: 'ArmsRenewalMonitoringDetailed.jsx',
    compName: 'ArmsRenewalMonitoringDetailed',
    mainTitle: 'AI ARMS RENEWAL',
    subTitle: 'MONITORING',
    desc: 'Automated expiry alerts, fresh verification routing, weapon inspection tracking & late fee calculation',
    experts: [
      "Automated License Expiry Alert Engine", "Fresh Police/LIU Verification Router", "Physical Weapon Inspection (Bore/Condition) Tracker", "Late Fee/Penalty Calculation AI",
      "Ammunition Consumption/Usage Analyzer", "Criminal Involvement (Post-Issuance) Cross-Matcher", "Geo-Spatial Pending Renewal Mapper", "Senior Citizen/Medical Re-evaluation Trigger",
      "Renewal Monitoring Dashboard", "Voice-Command Renewal Status Bot", "Automated Monthly Expired License Report", "National Database of Arms Licenses (NDAL) Sync",
      "Weapon Loss/Misplacement Predictor", "Fake Medical Certificate (Renewal) Alert", "Prolonged Non-Renewal (Absconder Risk) Analyzer", "Verification Bottleneck/Delay Estimator",
      "AI Evaluator for Renewal Efficiency Index", "Audit/Renewal Log Generator", "Data Privacy/Licensee Identity Scrubber", "District Magistrate Licensing Office Sync",
      "Verification Officer/SHO Mobile App", "Historical Non-Renewal vs Crime Involvement Correlator", "SP/DM Briefing Interface", "Verification/Inspection Task Allocator",
      "Blockchain Immutable Renewal/Inspection Hash", "Anti-Tamper Weapon Photo Shield", "Mobile App for Geo-tagged Weapon Inspection", "District-wise Renewal Clearance Benchmarker",
      "Automated Alert for 30-Days to Expiry", "Historical Penalty Revenue Cost Analyzer", "License Renewal Processing SOP Trainer", "Citizen Portal/NDAL API Health Monitor",
      "Imminent Mass Expiry (Year-End) Alert", "Habitual Late-Renewing Citizen Profiler", "High-Priority (VIP/Security Guard) Renewal Classifier", "AI Assisted License Cancellation/Suspension Drafter",
      "Renewal Volume/Workload Forecaster", "Secure Health/Medical Detail Protector", "Integration with E-District Service Portal", "Traffic/Challan Database (for Character checks) Sync",
      "Election Weapon Deposit Tracking (Expired Licenses) Modeler", "Disaster Relocation (Address Change) Renewal Coordinator", "Licensing Cell Staff Overtime Budget Tracker", "Custom Workflow for Inherited/Transferred Weapons",
      "AI Driven Renewal Rejection Probability Predictor", "Predictive Need for Renewal Camps (Melas)", "Custom Alert Trigger for Home Secretary", "Expiry Alert to Final Renewal Timeline"
    ]
  },
  {
    fileName: 'ExplosivesLicenseCoordinationDetailed.jsx',
    compName: 'ExplosivesLicenseCoordinationDetailed',
    mainTitle: 'AI EXPLOSIVES LICENSE',
    subTitle: 'COORDINATION',
    desc: 'PESO database integration, Magazine site security auditing, route mapping for transit & hazard zone analysis',
    experts: [
      "PESO (Petroleum & Explosives Safety Org) Data Sync AI", "Magazine Site Security/Vulnerability Auditor", "Transit Route Risk Mapping Engine", "Hazard Zone/Blast Radius Analyzer",
      "Quantity/Capacity Compliance Tracker", "Fire NOC/Emergency Access Validator", "Geo-Spatial Explosive Storage Density Mapper", "Automated Renewal/Inspection Alert Bot",
      "Explosives License Dashboard", "Voice-Command Magazine Query Bot", "Automated Quarterly Hazard/Compliance Report", "State Disaster Management Authority Sync",
      "Pilferage/Black-Market Diversion Predictor", "Unauthorized Expansion/Storage Alert", "Urban Encroachment (near Magazine) Analyzer", "Transit Delay/Hijack Risk Estimator",
      "AI Evaluator for Explosives Safety Index", "Audit/Inspection Log Generator", "Data Privacy/Transporter Identity Scrubber", "Fire Brigade/Emergency Services Sync",
      "Explosives Inspector/SHO Mobile App", "Historical Accidental Blast Correlator", "District Magistrate (DM)/SP Briefing AI", "Joint Inspection (Police + Fire + Admin) Allocator",
      "Blockchain Immutable Site Audit Hash", "Anti-Tamper NOC/Approval Shield", "Mobile App for On-Site Perimeter Video Upload", "District-wise Explosives Safety Benchmarker",
      "Automated Alert for Approaching Storage Limit", "Historical Inspection/Travel Cost Analyzer", "Explosives Rules Compliance SOP Trainer", "PESO API/Database Health Monitor",
      "Imminent Heatwave/Weather Hazard Alert (for Magazines)", "Habitual Compliance Defaulter Profiler", "High-Risk (Detonators/Gelatin) Storage Classifier", "AI Assisted Cancellation/Seizure Order Drafter",
      "Mining/Construction Explosive Demand Forecaster", "Secure Transport Route/Schedule Protector", "Integration with Mining/Geology Department Data", "Highway Patrol/Traffic Control Room Sync",
      "Election Strict Monitoring/Audit Modeler", "Disaster (Fire/Earthquake) Magazine Evacuation Coordinator", "Specialized Hazmat Training Budget Tracker", "Custom Workflow for Ammonium Nitrate Storage",
      "AI Driven Blast/Accident Vulnerability Predictor", "Predictive Need for Relocation of Aging Magazines", "Custom Alert Trigger for DGP/Chief Secretary", "Application/NOC Request to Final Clearance Timeline"
    ]
  },
  {
    fileName: 'FireworksPermissionManagementDetailed.jsx',
    compName: 'FireworksPermissionManagementDetailed',
    mainTitle: 'AI FIREWORKS PERMISSION',
    subTitle: 'MANAGEMENT',
    desc: 'Festival shop location assessment, fire safety compliance tracking, green cracker validation & temporary license routing',
    experts: [
      "Festival Shop Location Risk Assessor", "Fire Safety/Clearance Compliance Tracker", "Green Cracker (NEERI) Validation Engine", "Temporary License/Stall Routing AI",
      "Crowd Density/Congestion Analyzer", "Distance from Hazardous Site (Petrol Pumps) Calculator", "Geo-Spatial Fireworks Market Mapper", "Automated Police/Fire/Traffic NOC Router",
      "Fireworks Permission Dashboard", "Voice-Command Application Query Bot", "Automated Diwali/Festival Readiness Report", "Fire Department/Chief Fire Officer Sync",
      "Illegal Storage/Stockpiling Risk Predictor", "Fake Green-Cracker Certification Alert", "Traffic Chokepoint (Near Market) Estimator", "Application Bottleneck/Pendency Analyzer",
      "AI Evaluator for Festival Safety Index", "Audit/Approval Log Generator", "Data Privacy/Vendor Details Scrubber", "Pollution Control Board Sync",
      "Beat Officer/Fire Inspector Mobile App", "Historical Fire Accident/Casualty Correlator", "City Magistrate/SP City Briefing Interface", "Joint Physical Verification Task Allocator",
      "Blockchain Immutable Approval/NOC Hash", "Anti-Tamper Temporary License Shield", "Mobile App for Geo-tagged Stall Verification", "Station-wise Safety Clearance Benchmarker",
      "Automated Alert for Unlicensed/Roadside Sales", "Historical Festival Deployment Cost Analyzer", "Explosives/Fireworks SOP Trainer", "E-District/Citizen Portal API Monitor",
      "Imminent AQI/Pollution Emergency Alert", "Habitual Illegal Vendor/Stockist Profiler", "High-Congestion (Wholesale Market) Classifier", "AI Assisted Seizure/Cancellation Order Drafter",
      "Fireworks Sales Volume/Stall Demand Forecaster", "Secure Whistleblower (Illegal Stock) Protector", "Integration with Local Municipality/Corporation", "Traffic Police Sync (for Market Diversions)",
      "Election (Victory Celebration) Rapid NOC Modeler", "Disaster (Market Fire) Emergency Response Coordinator", "Fire Tender/Emergency Equipment Deployment Tracker", "Custom Workflow for Permanent Magazine/Godowns",
      "AI Driven Fire Incident Probability Predictor", "Predictive Need for Decentralized Sale Venues", "Custom Alert Trigger for District Magistrate", "Application Receipt to Final NOC Issuance Timeline"
    ]
  },
  {
    fileName: 'LoudspeakerPermissionManagementDetailed.jsx',
    compName: 'LoudspeakerPermissionManagementDetailed',
    mainTitle: 'AI LOUDSPEAKER PERMISSION',
    subTitle: 'MANAGEMENT',
    desc: 'Noise pollution limit tracking, proximity to silent zones (hospitals/schools), festival time-limit enforcement & complaint correlation',
    experts: [
      "Silent Zone (Hospital/School) Proximity Calculator", "Noise Pollution (Decibel) Limit Tracker", "Festival/Event Time-Limit Enforcement Engine", "Public Complaint/Dial 112 Correlation AI",
      "Religious/Political Event Profiler", "Automated Permission/NOC Generator", "Geo-Spatial Loudspeaker/DJ Mapping Bot", "Communal Sensitivity/Tension Assessor",
      "Loudspeaker Permission Dashboard", "Voice-Command Noise Query Bot", "Automated Monthly Noise Compliance Report", "Pollution Control Board (SPCB) Sync",
      "Time-Limit Violation/Night-Time Breach Predictor", "Communal Flashpoint (Overlapping Events) Alert", "Repeated Defaulter (DJ/Organizer) Analyzer", "Fake Permission/Forged NOC Detector",
      "AI Evaluator for Noise Control Index", "Audit/Permission Log Generator", "Data Privacy/Applicant Detail Scrubber", "State Intelligence/LIU Sync",
      "Beat Constable/Traffic Police Mobile App", "Historical Clash/Riot (due to noise) Correlator", "Sub-Divisional Magistrate (SDM)/CO Briefing AI", "Decibel Meter Measurement/Verification Allocator",
      "Blockchain Immutable NOC Hash", "Anti-Tamper Digital Permission Shield", "Mobile App for On-Site Decibel Logging", "Station-wise Noise Complaint Redressal Benchmarker",
      "Automated Alert for 10 PM Deadline Violations", "Historical Law & Order Deployment Cost Analyzer", "Noise Pollution Rules (2000) SOP Trainer", "Emergency Response (Dial 112) API Health Monitor",
      "Imminent Communal Standoff (Processions meeting) Alert", "Habitual Noise Violator/DJ Operator Profiler", "High-Sensitivity (Exam Time/Hospital) Zone Classifier", "AI Assisted Challan/Seizure Order Drafter",
      "Festival Volume/Permission Demand Forecaster", "Secure Informant/Complainant Protector", "Integration with Local Intelligence Data", "Traffic Police/Control Room Sync",
      "Election Rally/Public Address Approval Modeler", "Disaster/Emergency Broadcast Exemption Coordinator", "Decibel Meter/Equipment Procurement Budget Tracker", "Custom Workflow for Permanent Installations (Religious Sites)",
      "AI Driven Violation/Conflict Probability Predictor", "Predictive Need for Peace Committee Meetings", "Custom Alert Trigger for SP/SSP", "Application Receipt to Final Approval Timeline"
    ]
  },
  {
    fileName: 'ProcessionRoutePermissionDetailed.jsx',
    compName: 'ProcessionRoutePermissionDetailed',
    mainTitle: 'AI PROCESSION ROUTE',
    subTitle: 'PERMISSION',
    desc: 'Traffic diversion modeling, communal sensitivity mapping, force deployment estimation & multi-agency NOC coordination',
    experts: [
      "Traffic Diversion/Congestion Modeler AI", "Communal Sensitivity/Hotspot Mapping Engine", "Police Force Deployment Estimator", "Multi-Agency (Fire/Health/Municipality) NOC Coordinator",
      "Historical Route Precedent/Dispute Analyzer", "Overlap/Clash Detector (Multiple Processions)", "Geo-Spatial Route & Checkpoint Mapper", "Crowd Density/Flow Rate Predictor",
      "Procession Route Dashboard", "Voice-Command Route Query Bot", "Automated Festival Readiness/Route Report", "State Intelligence/Local Intelligence Unit Sync",
      "Chokepoint/Stampede Vulnerability Predictor", "Communal Flashpoint/Provocation Alert", "Unauthorized Route Deviation Estimator", "Inadequate Force Allocation Flagging AI",
      "AI Evaluator for Procession Safety Index", "Audit/NOC Clearance Log Generator", "Data Privacy/Organizer Background Scrubber", "Traffic/Highway Police Sync",
      "Sector Magistrate/Zonal Officer Mobile App", "Historical Riot/Clash Correlator (on specific routes)", "District Magistrate/SP Briefing Interface", "Drone/CCTV Monitoring Task Allocator",
      "Blockchain Immutable Route Approval Hash", "Anti-Tamper Permission/Condition Shield", "Mobile App for Live Procession Tracking", "District-wise Event Management Benchmarker",
      "Automated Alert for Sudden Route Deviations", "Historical Force Deployment/Barricading Cost Analyzer", "Crowd Management/Procession SOP Trainer", "Google Maps/Traffic API Health Monitor",
      "Imminent Stampede/Overcrowding Emergency Alert", "Habitual Rule-Breaking Organizer Profiler", "High-Risk (Religious/Political) Procession Classifier", "AI Assisted Preventive Action (Sec 107/116) Drafter",
      "Procession Volume/Crowd Forecaster", "Secure Intelligence/Threat Input Protector", "Integration with Safe City/CCTV Network", "Emergency Medical Services (Ambulance) Sync",
      "Election Roadshow/Rally Route Modeler", "Disaster (Evacuation during Procession) Coordinator", "Barricade/Drone/Video-graphy Budget Tracker", "Custom Workflow for VVIP/Protest Marches",
      "AI Driven Clash/Riot Probability Predictor", "Predictive Need for Rapid Action Force (RAF)", "Custom Alert Trigger for ADG Law & Order", "Application to Final Route Clearance Timeline"
    ]
  },
  {
    fileName: 'TemporaryEventPermissionDetailed.jsx',
    compName: 'TemporaryEventPermissionDetailed',
    mainTitle: 'AI TEMPORARY EVENT',
    subTitle: 'PERMISSION',
    desc: 'Exhibition/concert capacity planning, structural safety certification tracking, emergency exit validation & security screening planning',
    experts: [
      "Venue Capacity/Crowd Density Calculator", "Structural/Tent Safety Certification Tracker", "Emergency Exit/Evacuation Route Validator", "Security Screening/DFMD Placement Planner",
      "Fire NOC/Electrical Safety Coordinator", "Traffic/Parking Capacity Analyzer", "Geo-Spatial Event Venue Layout Mapper", "Automated Risk Category (Low/Med/High) Scorer",
      "Event Permission Dashboard", "Voice-Command Application Query Bot", "Automated Event Readiness/Safety Report", "Municipal Corporation/Fire Department Sync",
      "Overcrowding/Stampede Risk Predictor", "Fake Safety Certificate (PWD/Fire) Alert", "VIP Movement/Protocol Clash Analyzer", "Evacuation Bottleneck/Chokepoint Estimator",
      "AI Evaluator for Event Safety Index", "Audit/Clearance Log Generator", "Data Privacy/Event Organizer Details Scrubber", "Traffic/Transport Department Sync",
      "Event Nodal Officer/SHO Mobile App", "Historical Event Mishap/Failure Correlator", "City Magistrate/SP (City) Briefing AI", "Pre-Event Joint Inspection Allocator",
      "Blockchain Immutable NOC/Approval Hash", "Anti-Tamper Digital Permission Shield", "Mobile App for On-Site Safety Checklist Verification", "Venue-wise Incident History Benchmarker",
      "Automated Alert for Unauthorized Ticket Over-selling", "Historical Event Deployment/Security Cost Analyzer", "Public Event/Concert Security SOP Trainer", "E-District/Single Window API Health Monitor",
      "Imminent Structural Collapse/Fire Hazard Alert", "Habitual Defaulter (Event Management Co.) Profiler", "High-Stakes (International Artist/Sports) Event Classifier", "AI Assisted Cancellation/Stop-Event Order Drafter",
      "Event Frequency/Tourist Influx Forecaster", "Secure VVIP Itinerary/Threat Protector", "Integration with State Disaster Response Force (SDRF)", "Emergency Medical Services/Hospital Sync",
      "Election Public Meeting/Rally Ground Modeler", "Disaster (Sudden Weather/Storm) Event Cancellation Coordinator", "Security Equipment (DFMD/HHMD) Rental Budget Tracker", "Custom Workflow for Protests/Dharna Permissions",
      "AI Driven Disaster/Stampede Probability Predictor", "Predictive Need for Specialized Crowd Control Units", "Custom Alert Trigger for District Magistrate", "Application to Multi-Agency Clearance Timeline"
    ]
  },
  {
    fileName: 'CinemaSecurityCoordinationDetailed.jsx',
    compName: 'CinemaSecurityCoordinationDetailed',
    mainTitle: 'AI CINEMA SECURITY',
    subTitle: 'COORDINATION',
    desc: 'Multiplex fire safety auditing, controversial release threat perception, crowd management routing & midnight show compliance',
    experts: [
      "Multiplex Fire Safety/Exit Auditor AI", "Controversial Film/Release Threat Assessor", "Crowd Management/Queue Routing Modeler", "Midnight/Late Show Compliance Tracker",
      "Ticketing/Black-Marketing Fraud Detector", "Parking/Traffic Congestion Analyzer", "Geo-Spatial Cinema Hall Vulnerability Mapper", "Automated Show-time/Beat Patrol Scheduler",
      "Cinema Security Dashboard", "Voice-Command Hall Query Bot", "Automated Weekly Multiplex Safety Report", "Fire Department/Entertainment Tax Sync",
      "Protest/Vandalism Risk Predictor (for Controversial Films)", "Blocked Emergency Exit Alert", "Overcrowding/Stampede Flagging AI", "Public Nuisance/Brawl Estimator",
      "AI Evaluator for Cinema Safety Index", "Audit/Inspection Log Generator", "Data Privacy/Viewer/CCTV Scrubber", "Local Intelligence Unit (LIU) Sync",
      "Beat Constable/Fire Inspector Mobile App", "Historical Cinema Protest/Clash Correlator", "Entertainment Tax Officer/SP Briefing Interface", "Surprise Check/Night Patrol Task Allocator",
      "Blockchain Immutable Safety Audit Hash", "Anti-Tamper NOC/Clearance Shield", "Mobile App for Quick Fire-Exit Video Upload", "Multiplex-wise Security Compliance Benchmarker",
      "Automated Alert for Flash Protests/Mob Gathering", "Historical Law & Order Deployment Cost Analyzer", "Multiplex Regulation/Safety SOP Trainer", "Entertainment/Ticketing Portal API Monitor",
      "Imminent Riot/Vandalism Emergency Alert", "Habitual Defaulter (Cinema Owner) Profiler", "High-Sensitivity (Political/Religious Movie) Classifier", "AI Assisted Show-Cancellation/Notice Drafter",
      "Blockbuster Weekend Crowd Forecaster", "Secure Intelligence/Threat Input Protector", "Integration with Safe City/CCTV Network", "Traffic Police Sync (for Mall Intersections)",
      "Election (Propaganda Film) Code of Conduct Modeler", "Disaster (Fire in Mall) Evacuation Coordinator", "Multiplex Safety Drill Budget Tracker", "Custom Workflow for Film Festivals/Premiere Shows",
      "AI Driven Vandalism/Protest Probability Predictor", "Predictive Need for Riot Gear/QRT Deployment", "Custom Alert Trigger for SP City/DM", "Routine Audit Expiry to Renewal Timeline"
    ]
  },
  {
    fileName: 'HotelVerificationManagementDetailed.jsx',
    compName: 'HotelVerificationManagementDetailed',
    mainTitle: 'AI HOTEL VERIFICATION',
    subTitle: 'MANAGEMENT',
    desc: 'Automated guest list scraping, suspicious foreigner stay flagging, CCTNS criminal matching & CCTV/security compliance auditing',
    experts: [
      "Guest List/ID Automated Scraper AI", "Foreigner (C-Form/FRRO) Stay Flagging Engine", "CCTNS/Criminal Database Cross-Matcher", "CCTV/Physical Security Compliance Auditor",
      "Frequent Room-Changer/Suspicious Stay Analyzer", "Fake ID/Forged Aadhaar Detector", "Geo-Spatial Hotel/Lodge Mapping Bot", "Automated Daily Guest Upload Verifier",
      "Hotel Verification Dashboard", "Voice-Command Guest Query Bot", "Automated Daily Suspicious Stay Report", "Foreigners Regional Registration Office (FRRO) Sync",
      "Criminal Hideout/Safe-house Predictor", "Unreported/Off-the-Books Stay Alert", "Human Trafficking/Escort Ring Flagging AI", "Non-Compliance/Data Delay Estimator",
      "AI Evaluator for Hotel Compliance Index", "Audit/Verification Log Generator", "Data Privacy/Innocent Guest Identity Scrubber", "State Intelligence Bureau Sync",
      "Beat Officer/LIU Agent Mobile App", "Historical Arrest/Raid (in Hotels) Correlator", "SP (City)/LIU In-Charge Briefing AI", "Surprise Raid/Inspection Task Allocator",
      "Blockchain Immutable Guest Entry Hash", "Anti-Tamper Digital Register Shield", "Mobile App for Instant ID/Face Scanning", "Hotel-wise Compliance & Reporting Benchmarker",
      "Automated Alert for Wanted Criminal Check-in", "Historical Surveillance/Intelligence Cost Analyzer", "Sarai Act/Hotel Regulation SOP Trainer", "Hotel Booking/FRRO API Health Monitor",
      "Imminent Terror/Underworld Meeting Alert", "Habitual Non-Compliant Lodge Owner Profiler", "High-Risk (Near Airport/Border) Hotel Classifier", "AI Assisted License Cancellation/Seizure Drafter",
      "Tourist/Guest Influx (Festival/Season) Forecaster", "Secure Confidential Informant Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "Cyber Crime Cell Sync (for online booking frauds)",
      "Election (Cash/Liquor Distribution Hub) Modeler", "Disaster (Earthquake) Guest Accountability Coordinator", "Surveillance/Analytics Software Budget Tracker", "Custom Workflow for Homestays/Airbnb Verification",
      "AI Driven Illicit Activity Probability Predictor", "Predictive Need for Plainclothes Surveillance", "Custom Alert Trigger for IG/ADG Intelligence", "Guest Check-in to Police Verification Timeline"
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

console.log('All 10 Police Licensing Regulation Modules files generated successfully.');
