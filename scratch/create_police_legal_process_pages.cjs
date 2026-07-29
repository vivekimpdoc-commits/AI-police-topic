const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'CasePropertyAuctionManagementDetailed.jsx',
    compName: 'CasePropertyAuctionManagementDetailed',
    mainTitle: 'AI CASE PROPERTY AUCTION',
    subTitle: 'MANAGEMENT',
    desc: 'Automated valuation estimation, auction catalogue generation, bidding trend analytics & transparent disposal tracking',
    experts: [
      "Property Valuation Estimator AI", "Automated E-Auction Catalogue Generator", "Bidding Fraud/Cartel Detector", "Court Approval Document Mapper",
      "Reserve Price Optimizer", "Depreciation/Obsolescence Calculator", "Geo-Spatial Auction Yard Mapper", "Public Notification/Advertisement Bot",
      "Property Auction Dashboard", "Voice-Command Lot Query Bot", "Automated Monthly Revenue Generation Report", "State Treasury/Finance Sync",
      "Unsold/Stagnant Lot Predictor", "Bidder Background Check/Risk Analyzer", "Under-Pricing/Corruption Flagging AI", "Auction Delay/Pendency Estimator",
      "AI Evaluator for Auction Transparency Index", "Audit/Bidding Log Generator", "Data Privacy/Case Detail Scrubber", "E-Courts Property Disposal Sync",
      "Malkhana In-Charge/Auction Officer Mobile App", "Historical Revenue/Bid Success Correlator", "SP (Administration) Briefing AI", "Lot Preparation/Assessment Task Allocator",
      "Blockchain Immutable Bidding/Auction Hash", "Anti-Tamper Auction Result Shield", "Mobile App for Live Auction Tracking", "District-wise Auction Revenue Benchmarker",
      "Automated Alert for Suspiciously Low Bids", "Historical Advertisement/Storage Cost Analyzer", "Property Disposal/Auction SOP Trainer", "E-Auction Portal API Health Monitor",
      "Imminent Space Exhaustion (Due to Delayed Auctions) Alert", "Habitual Cartel/Syndicate Bidder Profiler", "High-Value (Jewelry/Cash) Asset Classifier", "AI Assisted Final Sale Deed/Certificate Drafter",
      "Auction Revenue/Turnover Forecaster", "Secure Bidder Identity/Financial Protector", "Integration with Government e-Marketplace (GeM)", "State Malkhana (Evidence Room) Sync",
      "Election (Seized Liquor/Cash) Fast-Track Disposal Modeler", "Disaster (Abandoned Property) Auction Coordinator", "Property Storage/Security Budget Tracker", "Custom Workflow for Narcotics/Contraband Destruction",
      "AI Driven Optimal Auction Date Predictor", "Predictive Need for Larger Storage Yards", "Custom Alert Trigger for IG Legal", "Court Order to Final Auction Completion Timeline"
    ]
  },
  {
    fileName: 'CourtPropertyDisposalMonitoringDetailed.jsx',
    compName: 'CourtPropertyDisposalMonitoringDetailed',
    mainTitle: 'AI COURT PROPERTY DISPOSAL',
    subTitle: 'MONITORING',
    desc: 'Judicial order parsing, disposal compliance tracking, destruction protocol validation & evidence room decongestion analytics',
    experts: [
      "Judicial Order/Judgment Parsing NLP", "Disposal Protocol (CrPC/BNSS) Validator", "Malkhana Decongestion Optimizer AI", "Automated Destruction Certificate Generator",
      "Hazardous/Bio-Waste Disposal Tracker", "Cross-Reference with Appeal/Higher Court Status", "Geo-Spatial Malkhana Capacity Mapper", "Pending Disposal Priority Scorer",
      "Property Disposal Dashboard", "Voice-Command Disposal Query Bot", "Automated Monthly Malkhana Decongestion Report", "Directorate of Prosecution Sync",
      "Illegal/Premature Disposal Risk Predictor", "Court Contempt (Due to Delay) Alert", "Environmental Hazard (Chemical/Drug Burn) Analyzer", "Missing/Misplaced Property Flagging AI",
      "AI Evaluator for Malkhana Efficiency Index", "Audit/Disposal Log Generator", "Data Privacy/Victim PII Scrubber", "Pollution Control Board Sync",
      "Malkhana Officer/Magistrate Mobile App", "Historical Decongestion Success Correlator", "District Judge/SP Briefing AI", "Destruction/Handover Task Allocator",
      "Blockchain Immutable Disposal/Destruction Hash", "Anti-Tamper Judicial Order Shield", "Mobile App for Video-Recording Destruction", "Station-wise Disposal Rate Benchmarker",
      "Automated Alert for Overdue Disposals (Post-Judgment)", "Historical Storage/Maintenance Cost Analyzer", "Property Destruction/Handover SOP Trainer", "E-Courts API Health Monitor",
      "Imminent Malkhana Collapse (Due to Overcrowding) Alert", "Negligent Malkhana In-charge Profiler", "High-Security (Arms/Explosives) Property Classifier", "AI Assisted Compliance Report Drafter",
      "Malkhana Space Recovery Forecaster", "Secure Video/Photographic Evidence Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "State Crime Records Bureau (SCRB) Sync",
      "Election Seizure (Liquor/Arms) Mass Disposal Modeler", "Disaster Bio-Hazard Evidence Disposal Coordinator", "Disposal/Incinerator Vendor Budget Tracker", "Custom Workflow for Counterfeit Currency Destruction",
      "AI Driven Next Congestion Crisis Date Predictor", "Predictive Need for Specialized Disposal Units", "Custom Alert Trigger for High Court Registrar", "Judgment Date to Actual Disposal Timeline"
    ]
  },
  {
    fileName: 'SeizedVehicleDisposalManagementDetailed.jsx',
    compName: 'SeizedVehicleDisposalManagementDetailed',
    mainTitle: 'AI SEIZED VEHICLE DISPOSAL',
    subTitle: 'MANAGEMENT',
    desc: 'Chassis/Engine number OCR validation, RTO ownership cross-matching, depreciation calculation & automated release/auction routing',
    experts: [
      "Chassis/Engine Number OCR Extractor", "RTO Vahan Database Cross-Matcher AI", "Vehicle Depreciation/Scrap Value Calculator", "Automated Release/Auction Routing Engine",
      "Stolen Vehicle Database (NCRB) Linker", "Insurance/Financier Claim Analyzer", "Geo-Spatial Police Station Yard Overcrowding Mapper", "Fake Registration/Forged Document Detector",
      "Vehicle Disposal Dashboard", "Voice-Command Vehicle Query Bot", "Automated Monthly Yard Decongestion Report", "Regional Transport Office (RTO) Sync",
      "Vehicle Rot/Total Loss Predictor", "Unclaimed/Abandoned Vehicle Alert", "Illegitimate Claimant/Fraud Predictor", "Environmental Hazard (Oil Leak/Rust) Analyzer",
      "AI Evaluator for Yard Decongestion Index", "Audit/Release Log Generator", "Data Privacy/Owner Detail Scrubber", "State Traffic Directorate Sync",
      "Traffic/Malkhana Officer Mobile App", "Historical Scrap-Value vs Time Correlator", "SP (Traffic/City) Briefing AI", "Valuation/RTO Verification Task Allocator",
      "Blockchain Immutable Vehicle Disposal Hash", "Anti-Tamper Release Order Shield", "Mobile App for On-Site Vehicle Assessment", "Station-wise Vehicle Clearance Benchmarker",
      "Automated Alert for Vehicles Parked > 1 Year", "Historical Towing/Storage Cost Analyzer", "Vehicle Release/Auction SOP Trainer", "Vahan/Sarathi API Health Monitor",
      "Imminent Station Yard Overcrowding Alert", "Habitual Fake Claimant/Scrap Mafia Profiler", "High-Value (Luxury/Commercial) Vehicle Classifier", "AI Assisted Superdari/Release Bond Drafter",
      "Vehicle Rust/Depreciation Forecaster", "Secure Confiscation/Challan Detail Protector", "Integration with CCTNS/E-Challan System", "Insurance Regulatory (IRDAI) Sync",
      "Election (Cash/Liquor Transport) Vehicle Confiscation Modeler", "Disaster (Flood Damaged) Abandoned Vehicle Coordinator", "Scrap/Towing Vendor Payment Budget Tracker", "Custom Workflow for Narcotics (NDPS) Smuggling Vehicles",
      "AI Driven Scrap vs Auction Probability Predictor", "Predictive Need for Centralized Vehicle Dumping Yards", "Custom Alert Trigger for DGP", "Seizure Date to Final Release/Auction Timeline"
    ]
  },
  {
    fileName: 'UnclaimedPropertyManagementDetailed.jsx',
    compName: 'UnclaimedPropertyManagementDetailed',
    mainTitle: 'AI UNCLAIMED PROPERTY',
    subTitle: 'MANAGEMENT',
    desc: 'Missing persons database cross-referencing, automated public notice generation, statutory waiting period tracking & state treasury handover',
    experts: [
      "Missing Persons (Zonal/National) Cross-Matcher", "Automated Public Notice/Gazette Generator", "Statutory Waiting Period (Section 102/459 BNSS) Tracker", "State Treasury Handover/Routing Bot",
      "Valuables (Gold/Cash) Assessment AI", "Lost & Found Portal Matching Engine", "Geo-Spatial Unclaimed Asset Concentration Mapper", "Facial/Image Recognition for Lost Items",
      "Unclaimed Property Dashboard", "Voice-Command Asset Query Bot", "Automated Quarterly Treasury Deposit Report", "State Crime Records Bureau (SCRB) Sync",
      "False Claim/Fraudulent Owner Predictor", "Property Degradation/Perishable Alert", "Storage Overflow/Space Crisis Estimator", "Match Probability Scorer (Item vs FIR)",
      "AI Evaluator for Unclaimed Asset Clearance", "Audit/Handover Log Generator", "Data Privacy/Finder Identity Scrubber", "State Treasury/Finance Department Sync",
      "Station House Officer (SHO) Mobile App", "Historical Claim Success/Failure Correlator", "District Magistrate/SP Briefing AI", "Public Notice/Advertisement Task Allocator",
      "Blockchain Immutable Treasury Handover Hash", "Anti-Tamper Asset Valuation Shield", "Mobile App for Finder/Citizen Reporting", "District-wise Asset Deposit Benchmarker",
      "Automated Alert for Expiring Waiting Periods", "Historical Public Advertisement Cost Analyzer", "Unclaimed Property Handling (Police Act) SOP Trainer", "Citizen Portal/Lost&Found API Monitor",
      "Imminent Valuables Theft/Misplacement (Internal) Alert", "Habitual Fraudulent Claimant Profiler", "High-Value (Jewelry/Electronics) Asset Classifier", "AI Assisted Magisterial Final Order Drafter",
      "Treasury Revenue/Deposit Forecaster", "Secure Finder/Informant Detail Protector", "Integration with National Missing Persons Portal", "Public Relations/Media Cell Sync",
      "Election (Unclaimed Cash/Liquor) Fast-Track Disposal Modeler", "Disaster (Earthquake/Train Crash) Luggage Matching Coordinator", "Storage/Valuation Expert Budget Tracker", "Custom Workflow for Unclaimed Livestock/Animals",
      "AI Driven True Owner Identification Probability Predictor", "Predictive Need for Inter-State Notice Publication", "Custom Alert Trigger for District Magistrate", "Date of Finding to Final Treasury Deposit Timeline"
    ]
  },
  {
    fileName: 'CourtOrderComplianceMonitorDetailed.jsx',
    compName: 'CourtOrderComplianceMonitorDetailed',
    mainTitle: 'AI COURT ORDER COMPLIANCE',
    subTitle: 'MONITORING',
    desc: 'Contempt of court risk scoring, automated directive parsing, deadline tracking & multi-departmental coordination workflow',
    experts: [
      "Contempt of Court Risk Scorer AI", "Judicial Directive/Order Parsing NLP", "Statutory Deadline/Timeline Tracker", "Multi-Department Coordination Engine",
      "High Court/Supreme Court Precedent Linker", "Bail Condition/Surety Verification Monitor", "Geo-Spatial Non-Compliance Hotspot Mapper", "Action Taken Report (ATR) Generator Bot",
      "Compliance Monitor Dashboard", "Voice-Command Order Query Bot", "Automated Weekly Contempt Risk Report", "Directorate of Prosecution Sync",
      "Imminent Deadline Breach/Contempt Predictor", "Misinterpretation of Judicial Order Alert", "Departmental Bottleneck/Delay Analyzer", "Frivolous/Repeated Adjournment Flagging AI",
      "AI Evaluator for Judicial Compliance Index", "Audit/ATR Submission Log Generator", "Data Privacy/Juvenile Identity Scrubber", "E-Courts/National Judicial Data Grid Sync",
      "Nodal/Legal Officer Mobile App", "Historical Contempt Fine/Stricture Correlator", "IG (Legal/Law & Order) Briefing AI", "Compliance Execution/Verification Allocator",
      "Blockchain Immutable Order Receipt Hash", "Anti-Tamper Action Taken Report Shield", "Mobile App for Immediate Field Compliance Upload", "Unit-wise Compliance Promptness Benchmarker",
      "Automated Alert for Supreme Court/High Court Directives", "Historical Litigation/Contempt Penalty Cost Analyzer", "Legal Compliance/Affidavit Drafting SOP Trainer", "Judicial IT System API Health Monitor",
      "Imminent DGP/SP Personal Appearance (Summons) Alert", "Habitual Delaying/Non-Compliant Officer Profiler", "High-Sensitivity (Habeas Corpus/Human Rights) Order Classifier", "AI Assisted Compliance Affidavit Drafter",
      "Compliance Workload/Litigation Forecaster", "Secure Protected Witness/Whistleblower Detail Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "State Legal Services Authority Sync",
      "Election (ECI/Court Mandated) Security Compliance Modeler", "Disaster (Compensation Disbursement) Court Order Coordinator", "Legal Defense/Advocate Fee Budget Tracker", "Custom Workflow for CBI/NIA Handover Orders",
      "AI Driven Court Satisfaction/Acceptance Predictor", "Predictive Need for Legal Cell Expansion", "Custom Alert Trigger for DGP/Home Secretary", "Order Pronouncement to Final Compliance Timeline"
    ]
  },
  {
    fileName: 'MagistrateCommunicationPortalDetailed.jsx',
    compName: 'MagistrateCommunicationPortalDetailed',
    mainTitle: 'AI MAGISTRATE COMMUNICATION',
    subTitle: 'PORTAL',
    desc: 'Secure digital remand requests, section 164 CrPC statement scheduling, autopsy authorization routing & fast-track digital signatures',
    experts: [
      "Digital Remand/Extension Request AI", "Section 164 (BNSS) Statement Scheduler", "Autopsy/Inquest Authorization Router", "Fast-Track Digital Signature (DSC) Verifier",
      "Statutory 24-Hour Production Tracker", "Magisterial Jurisdiction/Duty Roster Mapper", "Geo-Spatial Police Station to Court Distance Estimator", "Automated Case Summary/Brief Generator",
      "Magistrate Communication Dashboard", "Voice-Command Request Status Bot", "Automated Daily Remand/Production Report", "District Judiciary/E-Courts Sync",
      "Imminent 24-Hour Expiry (Illegal Detention) Alert", "Jurisdictional Dispute/Routing Error Predictor", "Incomplete/Defective Remand Paper Flagging AI", "Magistrate Unavailability/Leave Conflict Analyzer",
      "AI Evaluator for Magisterial Coordination Index", "Audit/Communication Log Generator", "Data Privacy/Accused Rights Scrubber", "Directorate of Prosecution Sync",
      "Investigating Officer/Court Munshi App", "Historical Remand Rejection/Bail Correlator", "Chief Judicial Magistrate (CJM) Briefing Interface", "Duty Magistrate Allocation/Roster Sync",
      "Blockchain Immutable Remand Request Hash", "Anti-Tamper Digital Signature Shield", "Mobile App for Urgent Night-Duty Approvals", "Station-wise Remand Acceptance Benchmarker",
      "Automated Alert for Impending Habeas Corpus Risk", "Historical Travel/Escort Cost Analyzer (to Court)", "Remand Drafting/CrPC Compliance SOP Trainer", "E-Courts/DSC API Health Monitor",
      "Imminent Illegal Custody/Rights Violation Alert", "Habitual Defective-Drafter (IO) Profiler", "High-Stakes (Terror/Murder) Remand Classifier", "AI Assisted Application for Police Custody Drafter",
      "Magisterial Workload/Pending Request Forecaster", "Secure Confidential Confession (Sec 164) Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "Prison/Jail Management System Sync",
      "Election Preventive Arrest (151 CrPC) Mass Approval Modeler", "Disaster Mass-Inquest/Autopsy Approval Coordinator", "Legal/IT Infrastructure Budget Tracker", "Custom Workflow for Juvenile Justice Board (JJB) Routing",
      "AI Driven Remand Approval Probability Predictor", "Predictive Need for Additional Duty Magistrates (Festivals/Elections)", "Custom Alert Trigger for SP City", "Arrest to Magisterial Production Timeline"
    ]
  },
  {
    fileName: 'JudicialCorrespondenceTrackerDetailed.jsx',
    compName: 'JudicialCorrespondenceTrackerDetailed',
    mainTitle: 'AI JUDICIAL CORRESPONDENCE',
    subTitle: 'TRACKER',
    desc: 'Automated summons/warrant inward sorting, priority tagging, IO response deadline monitoring & legal language simplification',
    experts: [
      "Inward Summons/Warrant Sorting NLP", "Priority/Urgency Tagging Engine", "Investigating Officer (IO) Response Deadline Monitor", "Legal/Judicial Language Simplifier AI",
      "Non-Bailable Warrant (NBW) Execution Tracker", "Bailable Warrant (BW)/Summons Delivery Scorer", "Geo-Spatial Warrant Execution Hotspot Mapper", "Automated Acknowledgment/Service Report Router",
      "Judicial Correspondence Dashboard", "Voice-Command Warrant Query Bot", "Automated Weekly Unexecuted Warrant Report", "District Court/Registry Sync",
      "Statutory Deadline/Hearing Date Breach Predictor", "Absconder/Fugitive Flight Risk Analyzer", "Incorrect Address/Fake Surety Flagging AI", "Process Server/Constable Delay Estimator",
      "AI Evaluator for Process Execution Index", "Audit/Correspondence Log Generator", "Data Privacy/Witness Address Scrubber", "Prosecution Department Sync",
      "Process Server/Summons Constable Mobile App", "Historical Non-Execution/Contempt Correlator", "SP (Legal/Warrants) Briefing AI", "Warrant Execution/Serving Task Allocator",
      "Blockchain Immutable Service/Delivery Hash", "Anti-Tamper Court Notice Shield", "Mobile App for Geo-Tagged Summons Delivery", "Police Station-wise Warrant Execution Benchmarker",
      "Automated Alert for Long-Pending NBWs (High-Profile)", "Historical Postal/Dispatch Cost Analyzer", "Summons Service/Legal Process SOP Trainer", "E-Courts CIS (Case Information System) API Monitor",
      "Imminent SP/SHO Personal Appearance (Due to NBW Pendency) Alert", "Habitual Evader/Absconder Profiler", "High-Priority (CBI/CID/Supreme Court) Notice Classifier", "AI Assisted Non-Execution/Absconder Report (Sec 82/83) Drafter",
      "Warrant Execution/Pendency Trend Forecaster", "Secure Whistleblower/Protected Witness Detail Protector", "Integration with CCTNS/ICJS", "State Crime Records Bureau (SCRB) Sync",
      "Election (History-Sheeter NBW Execution) Mass Drive Modeler", "Disaster (Missing Accused/Witness) Address Verification Coordinator", "Process Server Travel/TA Budget Tracker", "Custom Workflow for Inter-State/International Extradition Notices",
      "AI Driven Successful Execution Probability Predictor", "Predictive Need for Special Warrant Execution Teams", "Custom Alert Trigger for SP Headquarters", "Receipt from Court to Final Execution Timeline"
    ]
  },
  {
    fileName: 'ProductionWarrantSchedulerDetailed.jsx',
    compName: 'ProductionWarrantSchedulerDetailed',
    mainTitle: 'AI PRODUCTION WARRANT',
    subTitle: 'SCHEDULER',
    desc: 'Jail to court transit optimization, high-risk prisoner escort allocation, virtual hearing (VC) vs physical routing & clash resolution',
    experts: [
      "Jail-to-Court Transit Route Optimizer", "High-Risk Prisoner/Gang Escort Allocator", "Virtual (Video Conferencing) vs Physical Routing AI", "Hearing Date/Time Clash Resolution Engine",
      "Escort Force (Guards/Vehicles) Requirement Calculator", "Gang Rivalry/Transit Ambush Risk Scorer", "Geo-Spatial Court/Prison/Hospital Mapper", "Medical Emergency/Hospital Production Scheduler",
      "Production Warrant Dashboard", "Voice-Command Escort Query Bot", "Automated Daily Prisoner Movement Report", "Prison Management System (E-Prisons) Sync",
      "Transit Ambush/Escape Attempt Predictor", "Escort Shortage/Force Depletion Alert", "Hearing Adjournment (Due to Non-Production) Estimator", "Hostile Crowd/Media Mob Risk Analyzer",
      "AI Evaluator for Escort Efficiency & Safety Index", "Audit/Transit Log Generator", "Data Privacy/Medical Status Scrubber", "State Armed Police (Reserve Lines) Sync",
      "Escort Commander/Jailer Mobile App", "Historical Custody Escape/Attack Correlator", "Reserve Inspector (RI)/SP Lines Briefing AI", "Vehicle & Armed Guard Task Allocator",
      "Blockchain Immutable Prisoner Handover Hash", "Anti-Tamper Warrant/Production Shield", "Mobile App for Live GPS Transit Tracking", "District-wise Virtual Hearing Adoption Benchmarker",
      "Automated Alert for High-Risk (Terror/Underworld) Movements", "Historical Fuel/Escort Deployment Cost Analyzer", "Prisoner Escort/Handcuffing SOP Trainer", "Video Conferencing/E-Courts API Health Monitor",
      "Imminent Gang War/Shootout During Transit Alert", "Flight-Risk/Desperate Prisoner Profiler", "High-Security (Category A/B) Prisoner Classifier", "AI Assisted Virtual Hearing Request Drafter",
      "Escort Force Demand/Shortfall Forecaster", "Secure Route/Timing/Vehicle Detail Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "Traffic Police/Control Room Sync",
      "Election (Force Diversion) Virtual Hearing Maximization Modeler", "Disaster (Flooded Routes) Transit Re-routing Coordinator", "Escort Fleet/Fuel & VC Infrastructure Budget Tracker", "Custom Workflow for Inter-State Prisoner Transfer",
      "AI Driven Ambush/Escape Vulnerability Predictor", "Predictive Need for Bullet-Proof Vehicles", "Custom Alert Trigger for SP City/Jail Superintendent", "Warrant Receipt to Court Production Timeline"
    ]
  },
  {
    fileName: 'LegalNoticeDispatchCenterDetailed.jsx',
    compName: 'LegalNoticeDispatchCenterDetailed',
    mainTitle: 'AI LEGAL NOTICE DISPATCH',
    subTitle: 'CENTER',
    desc: 'Section 41A (BNSS) notice automation, mass email/SMS delivery tracking, postal API integration & response timeline logging',
    experts: [
      "Section 35 (CrPC 41A) Notice Automation AI", "Mass Email/SMS Delivery & Read-Receipt Tracker", "India Post/Courier API Integrator", "Statutory Response Timeline Logging Engine",
      "Language Translation/Formatting Bot", "Bounced/Undelivered Notice Analyzer", "Geo-Spatial Notice Distribution/Compliance Mapper", "Digital Signature/Authentication Validator",
      "Notice Dispatch Dashboard", "Voice-Command Dispatch Query Bot", "Automated Weekly Notice Compliance Report", "Directorate of Prosecution Sync",
      "Non-Compliance/Absconder Risk Predictor", "Invalid Address/Fake Contact Alert", "Statutory Deadline (14 days) Breach Predictor", "Systemic Postal/Courier Delay Analyzer",
      "AI Evaluator for Dispatch/Service Efficiency", "Audit/Delivery Log Generator", "Data Privacy/Suspect Contact Scrubber", "Telecom/ISP Data Sync (for Digital Delivery)",
      "Investigating Officer/Desk Officer Mobile App", "Historical Non-Compliance to Arrest Correlator", "SP (Crime/Cyber) Briefing AI", "Follow-up/Verification Task Allocator",
      "Blockchain Immutable Dispatch/Delivery Hash", "Anti-Tamper Delivery Receipt Shield", "Mobile App for Field Verification of Address", "Unit-wise Digital Service Adoption Benchmarker",
      "Automated Alert for High-Profile Non-Compliance (Action Required)", "Historical Postal/SMS API Cost Analyzer", "Legal Drafting/Notice Issuance SOP Trainer", "SMS Gateway/Postal API Health Monitor",
      "Imminent Legal Challenge (Due to Defective Service) Alert", "Habitual Evader/Non-Responder Profiler", "High-Priority (Cyber/Economic Offence) Notice Classifier", "AI Assisted Non-Bailable Warrant (NBW) Request Drafter",
      "Notice Volume/Dispatch Cost Forecaster", "Secure Target Identity/Case Detail Protector", "Integration with CCTNS/ICJS", "State Cyber Crime Coordination Center Sync",
      "Election (Preventive Binding Down) Mass Notice Modeler", "Disaster (Evacuation/Requisition) Urgent Notice Coordinator", "Postal/Digital Communication Budget Tracker", "Custom Workflow for Foreign National/Interpol Notices",
      "AI Driven Compliance/Appearance Probability Predictor", "Predictive Need for Physical Raid/Arrest", "Custom Alert Trigger for IG Legal", "Notice Generation to Acknowledgment/Compliance Timeline"
    ]
  },
  {
    fileName: 'CaseLimitationPeriodMonitorDetailed.jsx',
    compName: 'CaseLimitationPeriodMonitorDetailed',
    mainTitle: 'AI CASE LIMITATION PERIOD',
    subTitle: 'MONITORING',
    desc: 'Statutory charge-sheet deadline (60/90/180 days) tracking, default bail risk alerts, sanction-for-prosecution delay analysis & IO performance scoring',
    experts: [
      "Statutory Deadline (60/90/180 Days) Tracker AI", "Default/Statutory Bail Risk Alert Engine", "Sanction-for-Prosecution Delay Analyzer", "Investigating Officer (IO) Performance Scorer",
      "Section/Offence to Limitation Mapping NLP", "FSL/Medical Report Dependency Tracker", "Geo-Spatial Pendency/Delay Hotspot Mapper", "Automated Deadline Extension Request Drafter",
      "Limitation Period Dashboard", "Voice-Command Deadline Query Bot", "Automated Weekly Imminent Default Bail Report", "Directorate of Prosecution Sync",
      "Imminent Default Bail/Case Collapse Predictor", "Government Sanction Bottleneck Alert", "Forensic Lab (FSL) Delay Impact Estimator", "Investigation Stagnation/Inertia Flagging AI",
      "AI Evaluator for IO Timeliness Index", "Audit/Deadline Log Generator", "Data Privacy/Accused Identity Scrubber", "Home Department (Sanction Branch) Sync",
      "Investigating Officer/SHO Mobile App", "Historical Default Bail to Acquittal Correlator", "SP (Crime)/SSP Briefing AI", "Expedited Investigation/Charge-sheeting Allocator",
      "Blockchain Immutable Timestamp/FIR Hash", "Anti-Tamper Charge-sheet Date Shield", "Mobile App for Red-Flagged Pending Cases", "Police Station-wise Default Bail Rate Benchmarker",
      "Automated Alert for 10 Days to Statutory Deadline", "Historical Legal Setback/Litigation Cost Analyzer", "Time-Bound Investigation/CrPC SOP Trainer", "CCTNS/Court Diary API Health Monitor",
      "Imminent Release of High-Risk Criminal (Due to Delay) Alert", "Habitual Slow/Negligent IO Profiler", "High-Stakes (UAPA/NDPS/Murder) Case Classifier", "AI Assisted Sanction Reminder/Escalation Drafter",
      "Charge-sheet Filing/Pendency Trend Forecaster", "Secure Case Diary/Evidence Protector", "Integration with Inter-operable Criminal Justice System (ICJS)", "Central Forensic Science Lab (CFSL) Sync",
      "Election Fast-Track (MCC Violation) Limitation Modeler", "Disaster (Mass FIR) Investigation Coordination", "Overtime/Investigation Support Budget Tracker", "Custom Workflow for Economic Offences/Complex Fraud",
      "AI Driven Investigation Completion Date Predictor", "Predictive Need for Transfer to Specialized Agency (CID/SIT)", "Custom Alert Trigger for DGP/ADG Law & Order", "FIR Registration to Final Charge-sheet Timeline"
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

console.log('All 10 Police Legal Process Modules files generated successfully.');
