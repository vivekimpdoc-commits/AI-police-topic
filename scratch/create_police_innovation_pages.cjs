const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'IdeaSubmissionPortalDetailed.jsx',
    compName: 'IdeaSubmissionPortalDetailed',
    mainTitle: 'AI IDEA SUBMISSION',
    subTitle: 'PORTAL',
    desc: 'Crowdsourced innovation from field officers, NLP-based deduplication, feasibility scoring & automated reward tracking',
    experts: [
      "NLP Idea Deduplication Engine", "Feasibility/Impact Scoring AI", "Automated Reward/Recognition Tracker", "Field Officer Crowdsourcing Bot",
      "Idea Clustering/Categorization AI", "Plagiarism/Originality Checker", "Geo-Spatial Idea Origin Mapper", "Budget vs Implementation ROI Estimator",
      "Idea Submission Dashboard", "Voice-Command Idea Pitch Bot", "Automated Monthly Innovation Report", "HRMS/Appraisal Sync",
      "Stalled Idea/Bottleneck Predictor", "High-Impact/Low-Cost Idea Identifier", "Cross-District Collaboration Recommender", "Patentability/IP Potential Analyzer",
      "AI Evaluator for Innovation Index", "Audit/Submission Log Generator", "Data Privacy/Anonymity Scrubber", "State DGP (Modernization) Sync",
      "Constable/Officer Pitch Mobile App", "Historical Success/Failure Correlator", "Review Committee Briefing AI", "Feasibility Study Task Allocator",
      "Blockchain Immutable Idea Timestamp", "Anti-Tamper Pitch Record Shield", "Mobile App for Peer Voting/Rating", "District-wise Idea Generation Benchmarker",
      "Automated Alert for High-Potential Pitches", "Historical R&D Cost Analyzer", "Innovation/Pitching SOP Trainer", "Portal/Database Health Monitor",
      "Imminent IP/Idea Theft Risk Alert", "Habitual Spam/Low-Effort Submitter Profiler", "High-Priority (Cyber/Tech) Idea Classifier", "AI Assisted Concept Note Drafter",
      "Pitch Video/Audio Storage Forecaster", "Secure IP Vault Protector", "Integration with Police Welfare Fund", "E-Office/File Movement Sync",
      "Election Security Hack/Idea Modeler", "Disaster Rapid Response Innovation Coordinator", "Innovation/Reward Budget Tracker", "Custom Workflow for Top-Secret/Intel Ideas",
      "AI Driven Adoption Rate Predictor", "Predictive Need for Prototyping Funds", "Custom Alert Trigger for IG Tech", "Idea Pitch to Prototype Timeline"
    ]
  },
  {
    fileName: 'HackathonManagementDetailed.jsx',
    compName: 'HackathonManagementDetailed',
    mainTitle: 'AI HACKATHON',
    subTitle: 'MANAGEMENT',
    desc: 'Problem statement generation, participant skill matching, automated code evaluation & prototype tracking',
    experts: [
      "Automated Problem Statement Generator", "Participant Skill/Team Matcher AI", "Automated Code/Syntax Evaluator", "Prototype/MVP Tracking Engine",
      "Plagiarism/GitHub Code Checker", "Judging Criteria/Score Aggregator", "Geo-Spatial Participant Demographics Mapper", "Sponsor/Prize Money Allocator",
      "Hackathon Management Dashboard", "Voice-Command Event Query Bot", "Automated Post-Event Impact Report", "State IT/Cyber Security Sync",
      "Team Dropout/Disengagement Predictor", "Unfair Means/Cheating Detector", "Hardware/Cloud Resource Provisioning AI", "Scalability/Feasibility Analyzer",
      "AI Evaluator for Solution Viability", "Audit/Judging Log Generator", "Data Privacy/Participant PII Scrubber", "University/Tech Institute Sync",
      "Participant/Mentor Mobile App", "Historical Problem-Solution Correlator", "DGP (Modernization) Briefing AI", "Mentor/Jury Task Allocator",
      "Blockchain Immutable Code Submission Hash", "Anti-Tamper Scorecard Shield", "Mobile App for Live Leaderboard", "Institute-wise Participation Benchmarker",
      "Automated Alert for Server/Cloud Exhaustion", "Historical Event Cost/ROI Analyzer", "Hackathon Logistics/SOP Trainer", "API/Cloud Sandbox Health Monitor",
      "Imminent Event Disruption/DDoS Alert", "Rule-Breaking/Spam Team Profiler", "High-Impact (CCTNS/Cyber) Solution Classifier", "AI Assisted Winner Certificate Drafter",
      "Code Repository Storage Forecaster", "Secure Intellectual Property Protector", "Integration with State Startup Nodal Agency", "Media/PR Promotion Sync",
      "Election Tech Challenge Modeler", "Disaster Tech Hackathon Coordinator", "Event/Sponsorship Budget Tracker", "Custom Workflow for Internal Police Hackathons",
      "AI Driven Solution Commercialization Predictor", "Predictive Need for Incubation Support", "Custom Alert Trigger for SP Cyber", "Problem Statement to MVP Delivery Timeline"
    ]
  },
  {
    fileName: 'PilotDeploymentTrackerDetailed.jsx',
    compName: 'PilotDeploymentTrackerDetailed',
    mainTitle: 'AI PILOT DEPLOYMENT',
    subTitle: 'TRACKER',
    desc: 'Controlled tech testing, real-time KPI monitoring, user friction analysis & Go/No-Go decision modeling',
    experts: [
      "Controlled Environment Test Scheduler", "Real-Time KPI/Metric Monitor", "User Friction/Adoption Scorer", "Go/No-Go Decision Modeling AI",
      "A/B Testing Outcome Analyzer", "Bug/Defect Reporting Integrator", "Geo-Spatial Pilot Location Mapper", "Vendor SLA/Commitment Tracker",
      "Pilot Deployment Dashboard", "Voice-Command Pilot Status Bot", "Automated Monthly Evaluation Report", "State Procurement/Tech Sync",
      "System Crash/Failure Predictor", "False Positive/Error Rate Analyzer", "Training Deficit/Skill Gap Predictor", "Scalability/Infrastructure Load Estimator",
      "AI Evaluator for Pilot Success Probability", "Audit/Test Log Generator", "Data Privacy/Test Data Scrubber", "Finance/Modernization Sync",
      "Field Tester Mobile App", "Historical Pilot Failure Correlator", "Technology Evaluation Committee Briefing AI", "Bug Fix/Iteration Task Allocator",
      "Blockchain Immutable Test Result Hash", "Anti-Tamper KPI Score Shield", "Mobile App for Quick Feedback/Survey", "District-wise Tech Readiness Benchmarker",
      "Automated Alert for Critical System Failure", "Historical Pilot Cost Analyzer", "Technology Testing SOP Trainer", "Test Server/Sandbox Health Monitor",
      "Imminent Pilot Cancellation/Scrap Risk Alert", "Underperforming Vendor/Solution Profiler", "Mission-Critical (Facial Recognition/ANPR) Pilot Classifier", "AI Assisted Evaluation Report Drafter",
      "Test Data/Video Storage Forecaster", "Secure Prototype Intellectual Property Protector", "Integration with National Crime Records Bureau (NCRB)", "Legal/Ethical Compliance Sync",
      "Election Pilot (EVM Tracking) Modeler", "Disaster Comms Pilot Coordinator", "R&D/Pilot Funding Budget Tracker", "Custom Workflow for Lethal/Non-Lethal Weapons",
      "AI Driven State-wide Rollout Predictor", "Predictive Need for Hardware Upgrades", "Custom Alert Trigger for DGP Tech", "Pilot Kickoff to Final Decision Timeline"
    ]
  },
  {
    fileName: 'InnovationScorecardDetailed.jsx',
    compName: 'InnovationScorecardDetailed',
    mainTitle: 'AI INNOVATION',
    subTitle: 'SCORECARD',
    desc: 'District-wise modernization ranking, R&D budget utilization, tech adoption rates & continuous improvement metrics',
    experts: [
      "District-wise Modernization Ranker", "R&D Budget Utilization Analyzer", "Tech Adoption/Usage Rate Scorer", "Continuous Improvement Metric AI",
      "Training vs Implementation Correlator", "Legacy System Phase-out Tracker", "Geo-Spatial Tech Maturity Mapper", "Officer Tech-Literacy Indexer",
      "Innovation Scorecard Dashboard", "Voice-Command Ranking Query Bot", "Automated Quarterly Modernization Report", "DGP/Home Department Sync",
      "Budget Lapse/Underutilization Predictor", "Tech Abandonment/Disuse Alert", "Paper-based Process Relapse Detector", "Inter-District Knowledge Transfer Optimizer",
      "AI Evaluator for Smart Police Index", "Audit/Ranking Log Generator", "Data Privacy/Performance Data Scrubber", "Finance/Planning Department Sync",
      "SP (Superintendent of Police) Dashboard App", "Historical Resistance to Change Correlator", "Home Minister Briefing AI", "Tech Refresher Training Allocator",
      "Blockchain Immutable Scorecard Hash", "Anti-Tamper Ranking Shield", "Mobile App for Best Practice Sharing", "State-to-State Modernization Benchmarker",
      "Automated Alert for Lowest Ranked Districts", "Historical IT Procurement ROI Analyzer", "Change Management/Adoption SOP Trainer", "Data Sync/API Health Monitor",
      "Imminent Funding Cut (Due to Non-Usage) Alert", "Laggard/Tech-Resistant Unit Profiler", "High-Weightage (Cyber/Forensic) Metric Classifier", "AI Assisted Commendation Letter Drafter",
      "Analytics Data Storage Forecaster", "Secure Ranking Algorithm Protector", "Integration with Central Smart Police (CCTNS) KPIs", "Public Relations/Media Sync",
      "Election Tech Readiness Modeler", "Disaster Tech Resilience Coordinator", "Modernization Grant (C/S) Budget Tracker", "Custom Workflow for Specialized Units (ATS/STF)",
      "AI Driven Next Quarter Rank Predictor", "Predictive Need for IT Manpower", "Custom Alert Trigger for DGP Modernization", "Fund Allocation to Successful Adoption Timeline"
    ]
  },
  {
    fileName: 'TechnologyWatchDashboardDetailed.jsx',
    compName: 'TechnologyWatchDashboardDetailed',
    mainTitle: 'AI TECHNOLOGY WATCH',
    subTitle: 'DASHBOARD',
    desc: 'Global policing tech trends, AI research scraping, threat landscape mapping & emerging tech feasibility',
    experts: [
      "Global Policing Tech Scraper AI", "Emerging Tech Feasibility Scorer", "Threat Landscape/Dark Web Mapper", "Academic/Research Paper Summarizer Bot",
      "Competitor/Adversary Capability Analyzer", "Obsolete Tech Identification Engine", "Geo-Spatial Global Innovation Mapper", "Vendor/OEM Product Launch Tracker",
      "Tech Watch Intelligence Dashboard", "Voice-Command Tech Query Bot", "Automated Monthly Horizon Scanning Report", "State Intelligence/Cyber Sync",
      "Disruptive Tech (Quantum/Deepfake) Alert AI", "Vendor Lock-in/Monopoly Predictor", "Hype vs Reality (Gartner Cycle) Analyzer", "Regulatory/Legal Conflict Predictor",
      "AI Evaluator for Tech Future-Proofing", "Audit/Scraping Log Generator", "Data Privacy/Open-Source Intelligence Scrubber", "Central Government (BPR&D) Sync",
      "Senior Officer Tech Briefing App", "Historical Tech Obsolescence Correlator", "DGP (Tech & Telecom) Briefing AI", "Technology Evaluation Task Allocator",
      "Blockchain Immutable Intelligence Hash", "Anti-Tamper Horizon Scan Shield", "Mobile App for Tech News/Alerts", "Country-wise Policing Tech Benchmarker",
      "Automated Alert for Imminent Adversary Tech Leap", "Historical Tech Acquisition Delay Analyzer", "Tech Evaluation/Horizon Scanning SOP Trainer", "OSINT/Scraper API Health Monitor",
      "Imminent Cryptographic/Security Obsolescence Alert", "Overhyped/Vaporware Vendor Profiler", "Classified (SIGINT/Cyber) Tech Classifier", "AI Assisted Procurement Strategy Drafter",
      "OSINT Data/Video Storage Forecaster", "Secure Strategic Tech Roadmap Protector", "Integration with National Security Council (NSCS)", "Interpol/Europol Tech Trend Sync",
      "Election Deepfake/Misinfo Tech Modeler", "Disaster Predictive Analytics Tech Coordinator", "R&D/Tech Watch Subscription Budget Tracker", "Custom Workflow for Covert/Spy Tech",
      "AI Driven Mainstream Adoption Year Predictor", "Predictive Need for Policy/Legal Updates", "Custom Alert Trigger for IG Cyber", "Discovery to Procurement Strategy Timeline"
    ]
  },
  {
    fileName: 'PatentMonitoringDetailed.jsx',
    compName: 'PatentMonitoringDetailed',
    mainTitle: 'AI PATENT',
    subTitle: 'MONITORING',
    desc: 'IP scraping for security tech, patent infringement alerts, indigenous R&D protection & tech transfer tracking',
    experts: [
      "Security Tech Patent Scraper AI", "Patent Infringement/Prior Art Detector", "Indigenous R&D Intellectual Property Protector", "Tech Transfer/Licensing Tracker",
      "Patent Expiry/Public Domain Alert Bot", "Rival Nation/Adversary Patent Mapper", "Geo-Spatial IP Origin/Filing Mapper", "Make-in-India/Indigenization Analyzer",
      "Patent Intelligence Dashboard", "Voice-Command IP Query Bot", "Automated Monthly IP Landscape Report", "Legal/Prosecution Department Sync",
      "Patent Troll/Litigation Risk Predictor", "Dual-Use Tech (Civil/Military) Detector", "Blocking Patent/Monopoly Identifier", "Innovation Gap/White-Space Analyzer",
      "AI Evaluator for Tech Sovereignty", "Audit/Scraping Log Generator", "Data Privacy/Legal Strategy Scrubber", "State IT/Industry Department Sync",
      "Legal Officer/Researcher App", "Historical IP Litigation Correlator", "DGP (Modernization) Briefing AI", "Patent Drafting/Filing Task Allocator",
      "Blockchain Immutable Prior-Art Hash", "Anti-Tamper Patent Record Shield", "Mobile App for Quick Idea IP Check", "OEM-wise IP Dominance Benchmarker",
      "Automated Alert for Threatening Tech Patents", "Historical Licensing/Royalty Cost Analyzer", "Intellectual Property/Patent SOP Trainer", "Global Patent Database API Monitor",
      "Imminent Tech Embargo/Licensing Denial Alert", "Aggressive IP Litigator Profiler", "Strategic (Encryption/Drone) Patent Classifier", "AI Assisted Legal Opposition Drafter",
      "Patent Document/Diagram Storage Forecaster", "Secure R&D Invention Disclosure Protector", "Integration with Indian Patent Office (IPO)", "DRDO/Academic Institute Sync",
      "Election Security IP (EVM Tech) Modeler", "Disaster Rescue Equipment IP Coordinator", "Legal/Patent Filing Budget Tracker", "Custom Workflow for Police-Owned Patents",
      "AI Driven Technology Monopoly Predictor", "Predictive Need for Indigenous Development", "Custom Alert Trigger for IG Tech", "Invention Disclosure to Grant Timeline"
    ]
  },
  {
    fileName: 'StartupPartnershipRegisterDetailed.jsx',
    compName: 'StartupPartnershipRegisterDetailed',
    mainTitle: 'AI STARTUP PARTNERSHIP',
    subTitle: 'REGISTER',
    desc: 'GovTech startup onboarding, capability matching, funding/grant tracking & procurement compliance auditing',
    experts: [
      "GovTech Startup Onboarding/Vetting AI", "Problem-Statement to Startup Capability Matcher", "Funding/Grant Disbursement Tracker", "Procurement/GeM Compliance Auditor",
      "Startup Financial/Burn-Rate Analyzer", "Founder Background/Security Vetting Bot", "Geo-Spatial Startup Hub/Incubator Mapper", "Pilot to Scale-up Viability Scorer",
      "Startup Partnership Dashboard", "Voice-Command Startup Query Bot", "Automated Quarterly Ecosystem Report", "State Startup Nodal Agency Sync",
      "Startup Bankruptcy/Failure Predictor", "IP Conflict/Exclusivity Clause Detector", "Milestone/Deliverable Delay Alert", "Foreign Funding/Influence Analyzer",
      "AI Evaluator for GovTech Ecosystem Index", "Audit/Vetting Log Generator", "Data Privacy/NDA Compliance Scrubber", "Finance/Procurement Sync",
      "Nodal Officer/Incubator Manager App", "Historical Startup Success/Failure Correlator", "DGP (Modernization) Briefing AI", "Mentorship/Evaluation Task Allocator",
      "Blockchain Immutable NDA/Contract Hash", "Anti-Tamper Vetting Record Shield", "Mobile App for Startup Progress Pitch", "Incubator-wise Success Rate Benchmarker",
      "Automated Alert for Critical Milestone Miss", "Historical Startup Grant ROI Analyzer", "Startup Procurement/Exemption SOP Trainer", "GeM (Government e-Marketplace) API Monitor",
      "Imminent Startup Collapse/Abandonment Alert", "Fly-by-Night/Shell Startup Profiler", "High-Priority (Cyber/Drones) Startup Classifier", "AI Assisted Grant Disbursement Drafter",
      "Startup Pitch Deck/Code Storage Forecaster", "Secure Proprietary Algorithm Protector", "Integration with DPIIT (Dept for Promotion of Industry)", "Academic/IIT Incubation Cell Sync",
      "Election Tech (Voter Crowd Control) Startup Modeler", "Disaster Tech (UAV/Comms) Startup Coordinator", "Innovation Grant/Seed Fund Budget Tracker", "Custom Workflow for Equity/Revenue Sharing",
      "AI Driven Product Market Fit (for Police) Predictor", "Predictive Need for Policy/Procurement Exemption", "Custom Alert Trigger for IG Modernization", "Pitch to Procurement/Scale-up Timeline"
    ]
  },
  {
    fileName: 'SandboxEnvironmentManagerDetailed.jsx',
    compName: 'SandboxEnvironmentManagerDetailed',
    mainTitle: 'AI SANDBOX ENVIRONMENT',
    subTitle: 'MANAGER',
    desc: 'Secure API testing, synthetic crime data generation, vulnerability scanning & third-party app isolation',
    experts: [
      "Secure API Gateway/Testbed Manager", "Synthetic Crime/FIR Data Generator AI", "Automated Vulnerability/Penetration Scanner", "Third-Party App Isolation/Containerization Bot",
      "Data Leak/Exfiltration Detector (Sandbox out)", "Resource/Compute Quota Enforcer AI", "Geo-Spatial API Call/Load Mapper", "Compliance/Security Policy Auto-Checker",
      "Sandbox Operations Dashboard", "Voice-Command Environment Query Bot", "Automated Weekly Sandbox Security Report", "State Cyber Security/IT Sync",
      "Container Escape/Zero-Day Risk Predictor", "Malicious Payload/Injection Alert", "API Rate Limit/DDoS Abuse Analyzer", "Synthetic Data Bias/Realism Scorer",
      "AI Evaluator for API Security Index", "Audit/API Access Log Generator", "Data Privacy/PII Masking Engine", "CCTNS/Core Database Architecture Sync",
      "Sandbox Admin/Developer Mobile App", "Historical Vulnerability Exploit Correlator", "Chief Information Security Officer (CISO) Briefing", "API Key Revocation/Reset Allocator",
      "Blockchain Immutable API Log Hash", "Anti-Tamper Sandbox Config Shield", "Mobile App for Quick Dev Approval", "Vendor-wise API Integration Speed Benchmarker",
      "Automated Alert for Unauthorized Production Access", "Historical Cloud Compute Cost Analyzer", "Secure Coding/API Integration SOP Trainer", "Cloud/Server Health & Load Monitor",
      "Imminent Production Database Breach Alert", "Careless/Insecure Developer Profiler", "Classified (Intelligence/Biometric) API Classifier", "AI Assisted Vendor Security Warning Drafter",
      "Synthetic Data/Log Storage Forecaster", "Secure Production API Key Protector", "Integration with National API Exchange (NDEAR)", "Digital Forensics/Cyber Cell Sync",
      "Election Data Integration Sandbox Modeler", "Disaster Real-time API Load Coordinator", "Cloud/Sandbox Infrastructure Budget Tracker", "Custom Workflow for Hackathon/External Devs",
      "AI Driven Peak API Load Predictor", "Predictive Need for Cloud Auto-Scaling", "Custom Alert Trigger for SP Cyber", "Dev Onboarding to Production Go-Live Timeline"
    ]
  },
  {
    fileName: 'ExperimentalPolicyRegisterDetailed.jsx',
    compName: 'ExperimentalPolicyRegisterDetailed',
    mainTitle: 'AI EXPERIMENTAL POLICY',
    subTitle: 'REGISTER',
    desc: 'Trialing new SOPs, legal impact analysis, public feedback sentiment & policy iteration tracking',
    experts: [
      "Experimental SOP/Policy Trial Tracker", "Legal/Constitutional Impact Analyzer AI", "Public Feedback/Social Sentiment NLP", "Policy Iteration/Version Control Bot",
      "Human Rights Violation Risk Scorer", "On-Ground Officer Compliance/Friction Monitor", "Geo-Spatial Policy Rollout Mapper", "Judicial/Court Ruling Conflict Predictor",
      "Policy Experiment Dashboard", "Voice-Command Policy Query Bot", "Automated Monthly Trial Evaluation Report", "State Legal/Prosecution Department Sync",
      "Public Backlash/Protest Predictor", "Media/Press Sentiment Analyzer", "Officer Confusion/Misinterpretation Alert", "Operational Cost vs Benefit Analyzer",
      "AI Evaluator for Policy Success Rate", "Audit/Feedback Log Generator", "Data Privacy/Public Comment Scrubber", "Police Training Academy/SOP Sync",
      "Field Officer Feedback App", "Historical Policy Failure Correlator", "DGP/Home Secretary Briefing AI", "Policy Revision/Drafting Task Allocator",
      "Blockchain Immutable Policy Draft Hash", "Anti-Tamper Feedback Record Shield", "Mobile App for Citizen Opinion Polling", "District-wise Policy Adoption Benchmarker",
      "Automated Alert for Severe Legal Challenges", "Historical Policy Implementation Cost Analyzer", "New SOP/Directive Training Simulator", "Social Media/News Scraping API Monitor",
      "Imminent Supreme/High Court Stay Alert", "Habitual Policy Violator (Officer) Profiler", "High-Sensitivity (Use of Force/Search) Policy Classifier", "AI Assisted Gazette Notification Drafter",
      "Feedback/Sentiment Data Forecaster", "Secure Draft Policy Document Protector", "Integration with State Legislative Assembly Sync", "Human Rights Commission (NHRC) Sync",
      "Election Experimental Security SOP Modeler", "Disaster Evacuation Protocol Trial Coordinator", "Public Awareness/Campaign Budget Tracker", "Custom Workflow for Traffic/Challan Rules",
      "AI Driven Public Acceptance Predictor", "Predictive Need for Legal Amendment", "Custom Alert Trigger for ADG Law & Order", "Drafting to State-wide Notification Timeline"
    ]
  },
  {
    fileName: 'InnovationAdoptionAnalyticsDetailed.jsx',
    compName: 'InnovationAdoptionAnalyticsDetailed',
    mainTitle: 'AI INNOVATION ADOPTION',
    subTitle: 'ANALYTICS',
    desc: 'Change management KPIs, training vs usage correlation, tech-fatigue detection & modernization ROI',
    experts: [
      "Change Management KPI Tracker AI", "Training vs Actual Usage Correlator", "Tech-Fatigue/Burnout Detection AI", "Modernization ROI/Cost-Savings Estimator",
      "Feature Utilization/Abandonment Analyzer", "User Interface (UI) Friction/Click-path Scorer", "Geo-Spatial Tech Adoption Mapper", "Generational (Age-based) Adoption Analyzer",
      "Adoption Analytics Dashboard", "Voice-Command Usage Query Bot", "Automated Quarterly Adoption/ROI Report", "HRMS/Training Directorate Sync",
      "System Relapse (Back to Paper) Predictor", "Password Reset/Login Failure Spike Alert", "Shadow IT/Unauthorized Workaround Detector", "Peer-Influence/Champion Identification Engine",
      "AI Evaluator for Digital Transformation Index", "Audit/Usage Log Generator", "Data Privacy/Officer Activity Scrubber", "IT/Modernization Department Sync",
      "Change Ambassador/Trainer Mobile App", "Historical IT Project Failure Correlator", "DGP (Modernization) Briefing AI", "Refresher Training Task Allocator",
      "Blockchain Immutable Usage Hash", "Anti-Tamper Analytics Record Shield", "Mobile App for Officer Tech-Support/Help", "Unit-wise Digital Fluency Benchmarker",
      "Automated Alert for Near-Zero Usage Rates", "Historical Software License Wastage Analyzer", "Change Management/Digital Literacy SOP Trainer", "Application/Server Log API Monitor",
      "Imminent Project Failure (Due to Non-Adoption) Alert", "Laggard/Tech-Resistant Officer Profiler", "Mission-Critical (CCTNS/Dispatch) App Classifier", "AI Assisted Mandatory Usage Directive Drafter",
      "Usage Trend/Analytics Data Forecaster", "Secure User Activity Log Protector", "Integration with E-Office/Digital India Portals", "Public Grievance Redressal Sync",
      "Election Tech Tools Adoption Modeler", "Disaster Comms App Usage Coordinator", "IT Training/Change Management Budget Tracker", "Custom Workflow for Retiring/Senior Officers",
      "AI Driven Peak Adoption Date Predictor", "Predictive Need for UI/UX Redesign", "Custom Alert Trigger for IG IT", "Software Rollout to 90% Adoption Timeline"
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

console.log('All 10 Police Innovation Modules files generated successfully.');
