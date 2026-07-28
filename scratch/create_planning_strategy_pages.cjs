const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'AnnualPolicingCalendarDetailed.jsx',
    compName: 'AnnualPolicingCalendarDetailed',
    mainTitle: 'AI ANNUAL POLICING',
    subTitle: 'CALENDAR',
    desc: 'Dynamic Event Prediction, Festival/Election Synchronization, Leave Planning & Resource Forecasting',
    experts: [
      "Festival/Holiday Date Prediction AI", "Election Cycle/Political Rally Forecaster", "Peak Crime Season/Weather Modeler", "Force Leave/Rotation Optimizer",
      "Historical VIP Movement Trend Matcher", "Mega-Event (Sports/Concerts) Conflict Detector", "Geo-Spatial Multi-Event Overlap Mapper", "Budget/Expense Phasing Allocator",
      "Annual Calendar Dashboard", "Voice-Command Event Query Bot", "Automated Monthly Forecast Report", "Inter-Department (Civic/Admin) Sync Bot",
      "CCTV/Surveillance Requirement Forecaster", "Traffic Diversion/Congestion Predictor", "Public Exam/School Holiday Correlator", "Resource (Barricade/Vehicles) Booking AI",
      "AI Evaluator for Calendar Conflicts", "Audit/Schedule Change Log Generator", "Data Privacy/Confidential Event Scrubber", "State Home Department Sync",
      "Field Officer Event Reminder App", "Historical Event Disruption Matcher", "DGP/IG Level Strategic Briefing AI", "Reserve Force/Paramilitary Request Drafter",
      "Blockchain Immutable Schedule Hash", "Anti-Tamper Calendar Shield", "Mobile App for Nodal Officers (Planning)", "Jurisdiction/Zone Workload Balancer",
      "Multi-Lingual Circular Generator", "Historical Event Incident Rate Analyzer", "Event Planning SOP Trainer", "Calendar DB Server Health Monitor",
      "Imminent Unplanned VIP Visit Alert", "Syndicate/Protest Flash-Mob Profiler", "High-Risk Event Day Classifier", "AI Assisted Contingency Plan Drafter",
      "Historical Data Storage Forecaster", "Secure Classified Movement Protector", "Integration with E-Courts/Judicial Calendar", "Citizen Traffic/Event Advisory Sync",
      "Riot/Communal Anniversary Modeler", "Disaster/Monsoon Season Coordinator", "Annual Policing Event Budget Tracker", "Custom Workflow for Calendar Amendments",
      "AI Driven Resource Deficit Predictor", "Predictive Need for Inter-State Coordination", "Custom Alert Trigger for SP/SSP", "Calendar Year Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'ResourceReadinessScoreDetailed.jsx',
    compName: 'ResourceReadinessScoreDetailed',
    mainTitle: 'AI RESOURCE READINESS',
    subTitle: 'SCORE',
    desc: 'Real-time Manpower Auditing, Vehicle Fleet Health Metrics, Weaponry Status & Composite Preparedness Scoring',
    experts: [
      "Composite Station Readiness Scorer AI", "Live Manpower/Leave Availability Tracker", "Vehicle Fleet Health/Breakdown Predictor", "Weaponry/Ammo Stock Level Monitor",
      "Riot Gear/Tear Gas Expiry Auditor", "Communication Equipment (Radio) Health AI", "Geo-Spatial Readiness Deficit Mapper", "Cyber/Forensic Kit Availability Checker",
      "Resource Readiness Dashboard", "Voice-Command Readiness Query Bot", "Automated Daily Readiness Report", "Logistics/Procurement Department Sync",
      "CCTV/Surveillance Asset Operational Scorer", "Specialized Skill (SWAT/Sniper) Locator", "Fake Attendance/Availability Predictor", "Medical/First Aid Kit Expiry Tracker",
      "AI Evaluator for Emergency Response", "Audit/Inspection Log Generator", "Data Privacy/Classified Asset Scrubber", "State Police Headquarters Sync",
      "Field Commander Readiness App", "Historical Resource Shortage Correlator", "SHO/Supervisory Officer Briefing AI", "Deficit Reallocation/Transfer Optimizer",
      "Blockchain Immutable Readiness Hash", "Anti-Tamper Resource Record Shield", "Mobile App for Quartermaster Updates", "Jurisdiction/Zone Comparison Matcher",
      "Multi-Lingual Requisition Generator", "Historical Asset Utilization Analyzer", "Readiness/Audit SOP Trainer", "Readiness DB Server Health Monitor",
      "Imminent Critical Shortage Alert", "Election/Festival Surge Demand Profiler", "High-Risk Zone Preparedness Classifier", "AI Assisted Indent/Requisition Drafter",
      "Asset Audit Storage Forecaster", "Secure Strategic Vulnerability Protector", "Integration with CCTNS/HRMS", "Citizen Transparent Policing Score Sync",
      "Riot/Mass Violence Resource Modeler", "Disaster Equipment Readiness Coordinator", "Resource Replacement/Repair Budget Tracker", "Custom Workflow for Emergency Procurement",
      "AI Driven Breakdown Probability Predictor", "Predictive Need for Mutual Aid (Inter-District)", "Custom Alert Trigger for IG/ADG", "Readiness Metric Timeline Tracker"
    ]
  },
  {
    fileName: 'DistrictPreparednessAuditDetailed.jsx',
    compName: 'DistrictPreparednessAuditDetailed',
    mainTitle: 'AI DISTRICT',
    subTitle: 'PREPAREDNESS AUDIT',
    desc: 'Automated SOP Compliance, Infrastructure Audits, Response Time Benchmarking & Vulnerability Mapping',
    experts: [
      "District SOP Compliance Scoring Engine", "Infrastructure (Building/Lockup) Auditor AI", "Emergency Response Time Benchmarker", "Historical Crime Vulnerability Mapper",
      "Training/Firing Practice Backlog Tracker", "Community Policing/Informant Network Scorer", "Geo-Spatial District Threat Heatmapper", "Cyber Security/Data Protection Auditor",
      "Preparedness Audit Dashboard", "Voice-Command Audit Query Bot", "Automated Quarterly Audit Report", "State Crime Records Bureau (SCRB) Sync",
      "CCTV/Command Center Efficiency Scorer", "Traffic/Highway Fatality Reduction Tracker", "Pending Investigation/Charge-sheet Benchmarker", "Public Grievance Resolution Scorer",
      "AI Evaluator for SP/SSP Performance", "Audit/Inspection Log Generator", "Data Privacy/Confidential Audit Scrubber", "State Home Department Sync",
      "Field Audit/Inspection Mobile App", "Historical Riot/Failure Correlator AI", "DGP/ADG Level Audit Briefing Bot", "Remedial Resource/Fund Allocator",
      "Blockchain Immutable Audit Hash", "Anti-Tamper Audit Score Shield", "Mobile App for Audit Compliance Uploads", "Inter-District Peer Comparison Matcher",
      "Multi-Lingual Audit Report Generator", "Historical Audit Improvement Analyzer", "District Policing SOP Trainer", "Audit DB Server Health Monitor",
      "Imminent Systemic Failure Alert Bot", "Organized Crime/Syndicate Dominance Profiler", "High-Risk/Sensitive District Classifier", "AI Assisted Remedial Action Plan Drafter",
      "Audit Image/Video Storage Forecaster", "Secure Whistleblower/Flaw Protector", "Integration with National Crime Records Bureau", "Citizen Satisfaction Survey Sync",
      "Election Preparedness Risk Modeler", "Disaster Resilience/Evacuation Coordinator", "Audit Remediation Budget Tracker", "Custom Workflow for Audit Re-evaluation",
      "AI Driven Crisis Probability Predictor", "Predictive Need for State Intervention", "Custom Alert Trigger for Chief Secretary", "Audit Cycle Timeline Tracker"
    ]
  },
  {
    fileName: 'StrategicInitiativeTrackerDetailed.jsx',
    compName: 'StrategicInitiativeTrackerDetailed',
    mainTitle: 'AI STRATEGIC INITIATIVE',
    subTitle: 'TRACKER',
    desc: 'Project Milestone Monitoring, Budget Utilization AI, Outcome Measurement & Impact Assessment',
    experts: [
      "Strategic Project Milestone Tracker AI", "Budget/Fund Utilization Predictor", "KPI (Key Performance Indicator) Measuring Engine", "Delay/Bottleneck Identification Bot",
      "Vendor/Contractor Performance Scorer", "Resource Allocation vs Utilization Correlator", "Geo-Spatial Initiative Rollout Mapper", "Public Impact/Sentiment Analyzer AI",
      "Strategic Initiative Dashboard", "Voice-Command Project Status Bot", "Automated Monthly Progress Report", "Finance/Planning Department Sync",
      "Hardware/Software Delivery Tracker", "Training/Capacity Building Integrator", "Fake Progress/Inflated Metrics Detector", "Cross-Project Dependency Analyzer",
      "AI Evaluator for Project ROI", "Audit/Milestone Update Log Gen", "Data Privacy/Financial Detail Scrubber", "State Police Housing/Welfare Sync",
      "Field Officer Implementation App", "Historical Project Failure Correlator", "DGP/Nodal Officer Briefing Bot", "Fund Reallocation/Optimization AI",
      "Blockchain Immutable Progress Hash", "Anti-Tamper Milestone Shield", "Mobile App for Vendor Updates", "Jurisdiction-wise Rollout Comparison Matcher",
      "Multi-Lingual Progress Report Generator", "Historical Initiative Success Analyzer", "Project Management SOP Trainer", "Initiative DB Server Health Monitor",
      "Imminent Fund Lapse/Deadline Alert", "Vendor Fraud/Corruption Profiler", "High-Priority/Flagship Project Classifier", "AI Assisted Show-Cause Notice Drafter",
      "Project Document Storage Forecaster", "Secure Internal Audit Protector", "Integration with State Treasury/PFMS", "Citizen Transparency/Impact Portal Sync",
      "Election Code (MCC) Impact Modeler", "Disaster Disrupted Project Coordinator", "Project Contingency/Cost Overrun Tracker", "Custom Workflow for Project Extension",
      "AI Driven Completion Date Predictor", "Predictive Need for External Consultants", "Custom Alert Trigger for Home Secretary", "Initiative Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'MissionObjectiveDashboardDetailed.jsx',
    compName: 'MissionObjectiveDashboardDetailed',
    mainTitle: 'AI MISSION OBJECTIVE',
    subTitle: 'DASHBOARD',
    desc: 'Real-time Goal Tracking, Crime Reduction Targets, Conviction Rate Goals & Executive Summaries',
    experts: [
      "Real-Time Crime Reduction Tracker AI", "Conviction Rate Target Monitor", "Public Grievance Disposal Scorer", "Traffic Fatality Reduction Engine",
      "Drug/Contraband Seizure Goal Tracker", "Cyber Crime Resolution Metric AI", "Geo-Spatial Goal Achievement Mapper", "Women/Child Crime Safety Index Scorer",
      "Mission Objective Executive Dashboard", "Voice-Command Goal Query Bot", "Automated Monthly Target Report", "State Crime Records Bureau Sync",
      "Organized Crime/Gang Neutralization Tracker", "Pending Investigation Backlog Monitor", "Fake Statistic/Data Manipulation Detector", "Community Policing Engagement Scorer",
      "AI Evaluator for Zone/Range Performance", "Audit/Target Modification Log Gen", "Data Privacy/Victim Detail Scrubber", "Ministry of Home Affairs (MHA) Sync",
      "Field Commander Goal Tracking App", "Historical Performance Baseline Correlator", "DGP/Chief Minister Briefing AI", "Incentive/Reward Recommendation Engine",
      "Blockchain Immutable Metric Hash", "Anti-Tamper Target Score Shield", "Mobile App for SP/SSP Updates", "Inter-State Benchmarking Matcher",
      "Multi-Lingual Executive Summary Generator", "Historical Goal Achievement Analyzer", "Objective Setting/KPI SOP Trainer", "Dashboard Server Health Monitor",
      "Imminent Target Failure/Deficit Alert", "Syndicate Activity Spike Profiler", "High-Priority Core Mission Classifier", "AI Assisted Remedial Strategy Drafter",
      "Data Analytics Storage Forecaster", "Secure Performance Appraisal Protector", "Integration with CCTNS/ICJS", "Citizen Transparent Policing Dashboard",
      "Election Year Crime Trend Modeler", "Disaster Disrupted Mission Coordinator", "Performance Incentive Budget Tracker", "Custom Workflow for Target Revision",
      "AI Driven Year-End Achievement Predictor", "Predictive Need for Special Task Forces", "Custom Alert Trigger for DGP/Home Minister", "Mission Objective Timeline Tracker"
    ]
  },
  {
    fileName: 'CapabilityGapAnalysisDetailed.jsx',
    compName: 'CapabilityGapAnalysisDetailed',
    mainTitle: 'AI CAPABILITY GAP',
    subTitle: 'ANALYSIS',
    desc: 'Skill Matrix Assessment, Technology Deficit Identification, Training Need Prediction & Modernization Roadmap',
    experts: [
      "Officer Skill/Training Matrix Analyzer", "Technology/Hardware Deficit Identifier AI", "Cyber/Forensic Capability Scorer", "Future Threat (Drones/Deepfakes) Modeler",
      "Weapons/Tactical Gear Gap Analyzer", "Language/Soft-Skill Requirement Predictor", "Geo-Spatial Capability Disparity Mapper", "Investigation Quality Bottleneck Extractor",
      "Capability Gap Command Dashboard", "Voice-Command Deficit Query Bot", "Automated Annual Modernization Report", "Police Training Academy Sync Bot",
      "New Legislation (BNS/IT Act) Readiness Scorer", "Traffic Management Tech (ANPR/Radar) Auditor", "Fake Certification/Skill Exaggeration Detector", "Digital Literacy/IT Skill Assessment AI",
      "AI Evaluator for Modernization Funds", "Audit/Assessment Log Generator", "Data Privacy/Personnel Detail Scrubber", "Bureau of Police Research & Development (BPR&D) Sync",
      "Field Officer Self-Assessment App", "Historical Failure/Skill Gap Correlator", "DGP/Modernization IG Briefing AI", "Training Program/Fund Allocator",
      "Blockchain Immutable Assessment Hash", "Anti-Tamper Capability Score Shield", "Mobile App for Skill Updates", "Inter-State Capability Benchmarker",
      "Multi-Lingual Training Needs Generator", "Historical Modernization Impact Analyzer", "Capability Assessment SOP Trainer", "Gap Analysis DB Server Health Monitor",
      "Imminent Critical Skill Shortage Alert", "Organized Cyber Syndicate Evolution Profiler", "High-Risk Tech Deficit Classifier", "AI Assisted Modernization Proposal Drafter",
      "Assessment Data Storage Forecaster", "Secure Vulnerability Report Protector", "Integration with National Cyber Crime Portal", "Citizen Feedback on Tech Adoption Sync",
      "Riot/Mass Protest Tactical Gap Modeler", "Disaster Response Capability Coordinator", "Modernization Grant/Budget Tracker", "Custom Workflow for Specialized Hiring",
      "AI Driven Future Threat Predictor", "Predictive Need for Foreign Training", "Custom Alert Trigger for Home Secretary", "Modernization Roadmap Timeline Tracker"
    ]
  },
  {
    fileName: 'LongTermEquipmentPlanningDetailed.jsx',
    compName: 'LongTermEquipmentPlanningDetailed',
    mainTitle: 'AI LONG-TERM EQUIPMENT',
    subTitle: 'PLANNING',
    desc: 'Lifecycle Costing, Obsolescence Prediction, Next-Gen Tech Forecasting & Procurement Phasing',
    experts: [
      "Equipment Lifecycle & Depreciation AI", "Obsolescence/End-of-Life Predictor Engine", "Next-Gen Tech (Drones/Robotics) Forecaster", "Procurement Phasing/Budget Optimizer",
      "Maintenance/AMC Cost Correlator", "Vendor Performance & Reliability Scorer", "Geo-Spatial Equipment Distribution Mapper", "Spare Parts/Consumables Predictor",
      "Equipment Planning Dashboard", "Voice-Command Asset Query Bot", "Automated 5-Year Modernization Plan", "Finance/Procurement Department Sync",
      "Weapons/Ammunition Phase-out Modeler", "Vehicle Fleet (EV Transition) Planner", "Fake/Substandard Quality Detector AI", "Tech Interoperability/Integration Scorer",
      "AI Evaluator for Vendor Bids", "Audit/Procurement Log Generator", "Data Privacy/Classified Asset Scrubber", "State Police Housing & Logistics Sync",
      "Field Quartermaster Needs App", "Historical Procurement Delay Correlator", "DGP/Logistics IG Briefing Bot", "Fund Allocation/Phasing Optimizer",
      "Blockchain Immutable Procurement Hash", "Anti-Tamper Equipment Plan Shield", "Mobile App for Inventory Scans", "National Standard (BIS/BPR&D) Matcher",
      "Multi-Lingual Tender Document Generator", "Historical ROI/Lifespan Analyzer", "Procurement/Planning SOP Trainer", "Planning DB Server Health Monitor",
      "Imminent Asset Obsolescence Alert", "Cyber-Warfare Hardware Deficit Profiler", "High-Priority/Critical Asset Classifier", "AI Assisted Tender/RFP Drafter",
      "Asset Documentation Storage Forecaster", "Secure Classified Tech Specs Protector", "Integration with GeM (Government e-Marketplace)", "Citizen Transparency on Police Spending Sync",
      "Riot/Protest Gear Scalability Modeler", "Disaster Resilience Equipment Coordinator", "Capital Expenditure/CAPEX Budget Tracker", "Custom Workflow for Emergency Purchase",
      "AI Driven Tech Evolution Predictor", "Predictive Need for Foreign Procurement", "Custom Alert Trigger for Home Secretary", "Equipment Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'PoliceInnovationIndexDetailed.jsx',
    compName: 'PoliceInnovationIndexDetailed',
    mainTitle: 'AI POLICE INNOVATION',
    subTitle: 'INDEX',
    desc: 'Idea Crowdsourcing, Hackathon Management, Grassroots Solution Scaling & Global Tech Adoption Scoring',
    experts: [
      "Grassroots Idea/Innovation Scorer AI", "Hackathon/Problem Statement Manager", "Global Policing Tech Adoption Tracker", "Innovation Pilot/Proof-of-Concept Evaluator",
      "Patent/IP Filing Assistant Bot", "Start-up/Vendor Solution Matcher", "Geo-Spatial Innovation Deployment Mapper", "Officer Tech-Savviness/Adoption Scorer",
      "Innovation Index Dashboard", "Voice-Command Idea Query Bot", "Automated Quarterly Innovation Report", "State IT/Science & Tech Department Sync",
      "Duplicate/Redundant Idea Detector", "Implementation Cost vs Impact Modeler", "Fake/Plagiarized Solution Predictor", "Scalability/Interoperability Scorer",
      "AI Evaluator for Innovation Awards", "Audit/Idea Submission Log Gen", "Data Privacy/Proprietary Info Scrubber", "Bureau of Police Research & Development (BPR&D) Sync",
      "Field Officer Idea Pitch App", "Historical Pilot Success Correlator", "DGP/Modernization IG Briefing AI", "Innovation Grant/Seed Fund Allocator",
      "Blockchain Immutable Idea Hash", "Anti-Tamper IP/Patent Shield", "Mobile App for Tech Demonstrations", "Global Best Practice Benchmark Matcher",
      "Multi-Lingual Idea Translation Engine", "Historical Tech Adoption ROI Analyzer", "Innovation Management SOP Trainer", "Innovation DB Server Health Monitor",
      "Imminent Tech Obsolescence Alert Bot", "Cyber/Deepfake Evolution Profiler", "High-Impact/Disruptive Tech Classifier", "AI Assisted MoU/NDA Drafter",
      "Pilot Video/Data Storage Forecaster", "Secure Trade Secret/Source Code Protector", "Integration with Academic/University Labs", "Citizen Policing Innovation Portal Sync",
      "Riot Control Tech Innovation Modeler", "Disaster Rescue Tech Coordinator", "Innovation/R&D Budget Tracker", "Custom Workflow for Start-up Onboarding",
      "AI Driven Tech Trend Predictor", "Predictive Need for Specialized Hackathon", "Custom Alert Trigger for Nodal Officers", "Innovation Idea to Scale Timeline Tracker"
    ]
  },
  {
    fileName: 'OrganizationalBenchmarkingDetailed.jsx',
    compName: 'OrganizationalBenchmarkingDetailed',
    mainTitle: 'AI ORGANIZATIONAL',
    subTitle: 'BENCHMARKING',
    desc: 'Inter-State Performance Comparison, Global Standard (ISO) Mapping, Citizen Trust Scoring & Welfare Audits',
    experts: [
      "Inter-State KPI Comparison Engine AI", "Global Standard (ISO/CALEA) Compliance Mapper", "Citizen Trust/Perception Index Scorer", "Police Welfare/Satisfaction Audit AI",
      "Crime Rate vs Manpower Ratio Analyzer", "Financial/Budget Efficiency Scorer", "Geo-Spatial Performance Heatmapper", "Gender Parity/Diversity Index Monitor",
      "Organizational Benchmarking Dashboard", "Voice-Command Metric Query Bot", "Automated Annual Benchmarking Report", "Ministry of Home Affairs (MHA) Sync",
      "Media/Social Media Sentiment Analyzer", "Response Time (Dial 112) Benchmarker", "Fake Data/Statistical Manipulation Detector", "Conviction Rate/Quality of Investigation Scorer",
      "AI Evaluator for State Ranking", "Audit/Metric Log Generator", "Data Privacy/Classified Metric Scrubber", "National Crime Records Bureau (NCRB) Sync",
      "Field Officer Welfare Feedback App", "Historical Policy Success Correlator", "DGP/Home Minister Briefing AI", "Remedial Fund/Training Allocator",
      "Blockchain Immutable Metric Hash", "Anti-Tamper Benchmark Score Shield", "Mobile App for Citizen Feedback Collection", "International Policing Model Matcher",
      "Multi-Lingual Survey Translation Engine", "Historical Improvement Trend Analyzer", "Benchmarking/Quality SOP Trainer", "Benchmarking DB Server Health Monitor",
      "Imminent Ranking Drop Alert Bot", "Systemic Corruption/Inefficiency Profiler", "High-Priority Reform Area Classifier", "AI Assisted Policy Reform Drafter",
      "Survey Data/Report Storage Forecaster", "Secure Anonymous Feedback Protector", "Integration with NITI Aayog Indices", "Citizen Transparency Dashboard Sync",
      "Riot/Crime Surge Impact Modeler", "Disaster Resilience Benchmarking Coordinator", "Welfare/Reform Budget Tracker", "Custom Workflow for ISO Certification",
      "AI Driven Performance Predictor", "Predictive Need for Systemic Overhaul", "Custom Alert Trigger for Chief Secretary", "Policy Reform Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'StrategicReviewRepositoryDetailed.jsx',
    compName: 'StrategicReviewRepositoryDetailed',
    mainTitle: 'AI STRATEGIC REVIEW',
    subTitle: 'REPOSITORY',
    desc: 'Commission of Inquiry Indexing, Post-Mortem of Major Incidents, Doctrine Evolution & Archival Search',
    experts: [
      "Commission of Inquiry NLP Summarizer", "Major Incident Post-Mortem Extractor", "Strategic Doctrine/Policy Version Control AI", "Semantic Search Engine for Archives",
      "Failure/Success Pattern Correlator", "Recommendation vs Implementation Tracker", "Geo-Spatial Historical Incident Mapper", "Court/Judicial Stricture Indexer",
      "Strategic Review Repository Dashboard", "Voice-Command Archive Query Bot", "Automated Doctrine Evolution Report", "State Archives/Record Room Sync Bot",
      "OCR for Historic/Handwritten Reports", "Cross-Reference/Citation Linker AI", "Fake/Altered Historical Document Detector", "Classified/Secret Clearance Filter AI",
      "AI Evaluator for Policy Relevance", "Audit/Access Log Generator", "Data Privacy/Classified Info Scrubber", "State Home Department Sync",
      "Field Officer Policy Quick-Search App", "Cold Case/Historical Riot Matcher", "DGP/Policy Maker Briefing AI", "Research/Staff Officer Allocator",
      "Blockchain Immutable Archive Hash", "Anti-Tamper Historical Record Shield", "Mobile App for Secure Document Viewing", "National/International Doctrine Matcher",
      "Multi-Lingual Historic Translation Engine", "Historical Policy Effectiveness Analyzer", "Strategic Analysis SOP Trainer", "Archive Server/Storage Health Monitor",
      "Imminent Policy Expiry/Review Alert", "Historical Syndicate Evolution Profiler", "High-Sensitivity/Classified Document Classifier", "AI Assisted New Doctrine Drafter",
      "Massive Archival Storage Forecaster", "Secure Official Secrets Act Protector", "Integration with National Police Memorial/Archives", "Declassified Document Public Portal Sync",
      "Historical Riot/Communal Clash Modeler", "Disaster Relief Evolution Coordinator", "Archival Digitization Budget Tracker", "Custom Workflow for Declassification",
      "AI Driven Policy Trend Predictor", "Predictive Need for Doctrine Overhaul", "Custom Alert Trigger for IG/ADG", "Strategic Policy Evolution Timeline Tracker"
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

console.log('All 10 Planning & Strategy Modules files generated successfully.');
