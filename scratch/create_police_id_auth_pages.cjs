const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'PoliceIdentityLifecycleManagementDetailed.jsx',
    compName: 'PoliceIdentityLifecycleManagementDetailed',
    mainTitle: 'AI POLICE IDENTITY',
    subTitle: 'LIFECYCLE MANAGEMENT',
    desc: 'Onboarding to Retirement ID Tracking, Rank Promotion Sync, and Credential Security Audits',
    experts: [
      "ID Issuance/Onboarding Automator AI", "Rank Promotion/Transfer Sync Engine", "Retirement/Suspension ID Revocation Bot", "Credential Security/Audit Log Analyzer",
      "Biometric Enrollment Quality Checker", "Duplicate/Fake ID Detector", "Geo-Spatial ID Usage Mapper", "Digital Signature (DSC) Linker AI",
      "Identity Lifecycle Dashboard", "Voice-Command Identity Query Bot", "Automated Monthly Credential Audit Report", "HRMS/Personnel Department Sync",
      "Data Manipulation/Tamper Alert", "ID Card Expiry/Renewal Predictor", "Unauthorized Rank Upgrade Identifier", "Lifecycle Phase Transition Optimizer",
      "AI Evaluator for Credential Integrity", "Audit/Issuance Trail Generator", "Data Privacy/PII Scrubber", "State Intelligence/Security Branch Sync",
      "Identity Verification Mobile App", "Historical Credential Fraud Correlator", "DGP (Administration) Briefing AI", "ID Printing/Dispatch Task Allocator",
      "Blockchain Immutable Identity Hash", "Anti-Tamper Digital Credential Shield", "Mobile App for Rank Update Request", "Branch-wise Issuance Speed Benchmarker",
      "Automated Alert for Expired Credentials", "Historical ID Replacement Cost Analyzer", "Identity Verification SOP Trainer", "Central ID Database Health Monitor",
      "Imminent Impersonation/Breach Alert", "Habitual ID Loser (Careless Officer) Profiler", "High-Stakes (Intelligence/ATS) ID Classifier", "AI Assisted Suspension Notice Drafter",
      "Credential Image/Data Forecaster", "Secure Master Key/Certificate Protector", "Integration with National Databases (CCTNS)", "Force Welfare Portal Sync",
      "Election Deputation ID Modeler", "Disaster Emergency Access Authorization Coordinator", "Smart Card/Printing Budget Tracker", "Custom Workflow for Covert/Alias IDs",
      "AI Driven Next-Year Enrollment Predictor", "Predictive Need for ID Format Upgrade", "Custom Alert Trigger for IG Admin", "Onboarding to Retirement Timeline Tracker"
    ]
  },
  {
    fileName: 'SmartAccessPassManagementDetailed.jsx',
    compName: 'SmartAccessPassManagementDetailed',
    mainTitle: 'AI SMART ACCESS PASS',
    subTitle: 'MANAGEMENT',
    desc: 'RFID/NFC Card Provisioning, Zone-Based Access Control, and Tailgating Detection',
    experts: [
      "RFID/NFC Pass Provisioning Engine", "Zone-Based Access Control AI", "Tailgating/Piggybacking Detection Vision", "Time-Bound Access Expiry Bot",
      "Multi-Campus/Site Roaming Linker", "Lost/Stolen Pass Blacklist Automator", "Geo-Spatial Access Event Mapper", "Pass Duplication/Cloning Predictor",
      "Smart Access Pass Dashboard", "Voice-Command Access Query Bot", "Automated Daily Entry/Exit Audit", "Campus Security/Sentry Sync",
      "Unauthorized Zone Entry Alert", "Pass Handover/Sharing Identifier", "Unusual After-Hours Access Analyzer", "Access Point Congestion Optimizer",
      "AI Evaluator for Physical Security Index", "Audit/Access Event Log Generator", "Data Privacy/Movement History Scrubber", "IT/Server Room Security Sync",
      "Access Control Admin App", "Historical Security Breach Correlator", "Chief Security Officer Briefing AI", "Sentry/Guard Deployment Allocator",
      "Blockchain Immutable Access Event Hash", "Anti-Tamper Access Card Shield", "Mobile App for Pass Requisition", "Gate-wise Clearance Speed Benchmarker",
      "Automated Alert for Blacklisted Card Use", "Historical Card Replacement Cost Analyzer", "Campus Access/Security SOP Trainer", "RFID Reader/Controller Health Monitor",
      "Imminent Perimeter Breach Alert", "Suspicious Movement/Wandering Profiler", "High-Security (Armory/Control Room) Pass Classifier", "AI Assisted Security Violation Notice Drafter",
      "Access Log/Video Storage Forecaster", "Secure Encryption Key Protector", "Integration with HRMS/Attendance", "External Vendor/Contractor Portal Sync",
      "Election Counting Center Access Modeler", "Disaster Relief Camp Access Coordinator", "Access Control Infrastructure Budget Tracker", "Custom Workflow for VIP Escort Access",
      "AI Driven Peak Gate Traffic Predictor", "Predictive Need for Additional Turnstiles", "Custom Alert Trigger for SP Security", "Card Issuance to Revocation Timeline"
    ]
  },
  {
    fileName: 'BiometricDeviceAdministrationDetailed.jsx',
    compName: 'BiometricDeviceAdministrationDetailed',
    mainTitle: 'AI BIOMETRIC DEVICE',
    subTitle: 'ADMINISTRATION',
    desc: 'Device Health Monitoring, Remote Template Sync, Spoof Detection & Fingerprint/Iris Lifecycle',
    experts: [
      "Device Health/Uptime Monitor AI", "Remote Template Sync/Distribution Engine", "Spoofing/Fake Fingerprint Detection Vision", "Fingerprint/Iris Quality Scorer",
      "Offline Mode/Buffer Auto-Sync Bot", "Device Tamper/Vandalism Alert AI", "Geo-Spatial Device Location Mapper", "Network/Connectivity Drop Analyzer",
      "Biometric Device Dashboard", "Voice-Command Device Status Bot", "Automated Weekly Device Uptime Report", "IT/Network Department Sync",
      "Dry/Wet Fingerprint Enhancement AI", "Template Corruption/Duplicate Detector", "Unauthorized Device Relocation Predictor", "Firmware/Software Update Automator",
      "AI Evaluator for Biometric Accuracy", "Audit/Sync Event Log Generator", "Data Privacy/Biometric Template Scrubber", "HRMS/Attendance System Sync",
      "Field Technician/Admin Mobile App", "Historical Device Failure Correlator", "SP (Computer/IT) Briefing AI", "Repair/Replacement Task Allocator",
      "Blockchain Immutable Template Hash", "Anti-Tamper Device Hardware Shield", "Mobile App for Manual Attendance (Fallback)", "Station-wise Device Reliability Benchmarker",
      "Automated Alert for Offline Terminals", "Historical Maintenance Expense Analyzer", "Biometric Enrollment/Usage SOP Trainer", "Central Biometric Server Health Monitor",
      "Imminent Server Storage Exhaustion Alert", "Habitual Device Vandal/Tamperer Profiler", "Critical (Jail/Armory) Device Classifier", "AI Assisted Vendor SLA Penalty Drafter",
      "Biometric Template Storage Forecaster", "Secure Cryptographic Key Protector", "Integration with CCTNS/AFIS (Automated Fingerprint Identification System)", "Citizen Verification Portal Sync",
      "Election Duty Remote Verification Modeler", "Disaster Field Camp Biometric Coordinator", "Biometric Hardware Budget Tracker", "Custom Workflow for Device Condemnation",
      "AI Driven Device Lifespan Predictor", "Predictive Need for Facial Recognition Upgrade", "Custom Alert Trigger for IG IT", "Device Installation to Decommission Timeline"
    ]
  },
  {
    fileName: 'OfficerDigitalIdentityWalletDetailed.jsx',
    compName: 'OfficerDigitalIdentityWalletDetailed',
    mainTitle: 'AI OFFICER DIGITAL',
    subTitle: 'IDENTITY WALLET',
    desc: 'Smartphone-Based Credentials, Zero-Trust Authentication, Digital Badges & Secure Single Sign-On (SSO)',
    experts: [
      "Smartphone-Based Digital ID Provisioner", "Zero-Trust/Context-Aware Authentication Engine", "Secure Single Sign-On (SSO) Linker", "Digital Badge/Award Sync Bot",
      "Geo-Fenced Login Validator AI", "Device Jailbreak/Root Detection AI", "Geo-Spatial Authentication Attempt Mapper", "Bluetooth/NFC Contactless Access Enabler",
      "Digital Wallet Admin Dashboard", "Voice-Command Auth Query Bot", "Automated Monthly SSO Usage Report", "IT/Cyber Security Sync",
      "Suspicious Login/Brute-Force Alert", "Stolen Device/Remote Wipe Trigger", "Phishing/Session Hijack Predictor", "Passwordless/Passkey Adoption Analyzer",
      "AI Evaluator for Cyber Security Posture", "Audit/Login Trail Generator", "Data Privacy/Wallet Encryption Scrubber", "HRMS/Training Academy Sync",
      "Officer Digital Wallet App", "Historical Cyber Breach/Compromise Correlator", "Chief Information Security Officer (CISO) Briefing", "Account Recovery/Reset Task Allocator",
      "Blockchain Immutable Auth Event Hash", "Anti-Tamper Digital Wallet Shield", "Mobile App for QR Code Verification", "App-wise Authentication Speed Benchmarker",
      "Automated Alert for Compromised Credentials", "Historical MFA (Multi-Factor) Cost Analyzer", "Cyber Hygiene/Digital ID SOP Trainer", "SSO/Identity Provider (IdP) Health Monitor",
      "Imminent Massive Credential Leak Alert", "Habitual Password Loser Profiler", "High-Privilege (Admin/Commander) Wallet Classifier", "AI Assisted Cyber Incident Report Drafter",
      "Authentication Log Storage Forecaster", "Secure Private Key/Enclave Protector", "Integration with E-Office/CCTNS Apps", "Public Servant Verification Sync",
      "Election Observer Digital Pass Modeler", "Disaster Rescue Team Verification Coordinator", "Cyber Security/License Budget Tracker", "Custom Workflow for Emergency Access Revocation",
      "AI Driven Adoption Rate Predictor", "Predictive Need for Hardware Security Keys", "Custom Alert Trigger for DGP (Modernization)", "App Provisioning to Access Timeline Tracker"
    ]
  },
  {
    fileName: 'SecureVisitorIdentityExchangeDetailed.jsx',
    compName: 'SecureVisitorIdentityExchangeDetailed',
    mainTitle: 'AI SECURE VISITOR',
    subTitle: 'IDENTITY EXCHANGE',
    desc: 'DigiLocker Integration, Instant Background Verification, Pre-Approved QR Codes & Escort Handover',
    experts: [
      "DigiLocker/Aadhaar API Integrator AI", "Instant Background/CCTNS Verification Engine", "Pre-Approved QR Code Generator", "Escort Handover/Chain of Custody Bot",
      "Visitor Face-Match/Liveness Detection AI", "Overstay/Unauthorized Wandering Alert", "Geo-Spatial Visitor Path Mapper", "Purpose of Visit Categorizer",
      "Visitor Identity Exchange Dashboard", "Voice-Command Visitor Query Bot", "Automated Daily Visitor Vetting Report", "PHQ Security/Reception Sync",
      "Fake/Forged ID Document Predictor", "Wanted Person/Suspect Match Alert", "Repeat/Vexatious Visitor Identifier", "Reception Desk Congestion Optimizer",
      "AI Evaluator for Reception Security Index", "Audit/Verification Log Generator", "Data Privacy/Visitor PII Scrubber", "State Intelligence/CID Sync",
      "Receptionist/Sentry Verification App", "Historical Security Incident Correlator", "Chief Security Officer Briefing AI", "Escort/Liaison Task Allocator",
      "Blockchain Immutable Verification Hash", "Anti-Tamper Visitor Log Shield", "Mobile App for Escort Acknowledgment", "Gate-wise Vetting Speed Benchmarker",
      "Automated Reminder for Visitor Check-out", "Historical Verification Cost Analyzer", "Visitor Management/Courtesy SOP Trainer", "API/Gateway Connectivity Health Monitor",
      "Imminent Infiltration/Breach Alert", "Suspicious Intermediary/Broker Profiler", "High-Security Area Visitor Classifier", "AI Assisted Barring/Blacklist Order Drafter",
      "Visitor Data/Image Storage Forecaster", "Secure VIP Guest Itinerary Protector", "Integration with State Grievance Portal (CM Helpline)", "Zero Public Exposure Policy Sync (for restricted zones)",
      "Election Media/Observer Vetting Modeler", "Disaster Relief Volunteer Vetting Coordinator", "Security Kiosk/Hardware Budget Tracker", "Custom Workflow for Media/Press Accreditation",
      "AI Driven Peak Visitor Volume Predictor", "Predictive Need for Extra Reception Staff", "Custom Alert Trigger for SP Security", "Visitor Check-in to Escorted Exit Timeline"
    ]
  },
  {
    fileName: 'TemporaryDutyPassGeneratorDetailed.jsx',
    compName: 'TemporaryDutyPassGeneratorDetailed',
    mainTitle: 'AI TEMPORARY DUTY',
    subTitle: 'PASS GENERATOR',
    desc: 'Contractor Verification, Expiry Automation, Geo-Fenced Access & Rapid Mass Issuance',
    experts: [
      "Contractor/Labor Background Vetting AI", "Automated Pass Expiry/Revocation Engine", "Geo-Fenced/Zone-Restricted Access Linker", "Rapid Mass Issuance/Batch Processor Bot",
      "Work Order/Tender Validity Sync AI", "Biometric/Face-Match Verification AI", "Geo-Spatial Labor Movement Mapper", "Duplicate/Fake Pass Detector",
      "Temporary Duty Pass Dashboard", "Voice-Command Contractor Query Bot", "Automated Weekly Vendor Access Report", "Estate/PWD Department Sync",
      "Overstay/After-Hours Presence Alert", "Criminal Record/Watchlist Match Alert", "Pass Sharing/Handover Predictor", "Contractor Labor Turnover Analyzer",
      "AI Evaluator for Contractor Security Index", "Audit/Pass Issuance Log Generator", "Data Privacy/Labor Identity Scrubber", "Security/Sentry Branch Sync",
      "Gate Sentry Verification Mobile App", "Historical Labor-Related Incident Correlator", "SP (Estate/Admin) Briefing AI", "Security Escort Task Allocator",
      "Blockchain Immutable Pass Hash", "Anti-Tamper Temporary Pass Shield", "Mobile App for Contractor Indent Request", "Batch Processing Speed Benchmarker",
      "Automated Reminder for Pass Renewal", "Historical Pass Printing/Card Cost Analyzer", "Contractor Security/Access SOP Trainer", "Access Gateway Health Monitor",
      "Imminent Sabotage/Theft Risk Alert", "Blacklisted Contractor/Labor Profiler", "High-Security Zone (Armory) Labor Classifier", "AI Assisted Vendor Penalty Notice Drafter",
      "Pass Image/Data Storage Forecaster", "Secure Facility Blueprint Protector", "Integration with E-Tendering/Procurement", "Labor Welfare/Wage Compliance Sync",
      "Election Polling Staff Temporary Pass Modeler", "Disaster Relief Worker Pass Coordinator", "Card Printing/Consumables Budget Tracker", "Custom Workflow for Emergency Repair Access",
      "AI Driven Labor Requirement Predictor", "Predictive Need for Extra Sentry Checks", "Custom Alert Trigger for Chief Security Officer", "Pass Request to Automated Expiry Timeline"
    ]
  },
  {
    fileName: 'LostIDCardRecoveryWorkflowDetailed.jsx',
    compName: 'LostIDCardRecoveryWorkflowDetailed',
    mainTitle: 'AI LOST ID CARD',
    subTitle: 'RECOVERY WORKFLOW',
    desc: 'Automated Blacklisting, FIR/General Diary Sync, Remote Wipe (Digital IDs) & Re-issuance Tracking',
    experts: [
      "Automated Card Blacklisting/Deactivation AI", "FIR/General Diary (GD) Entry Sync Bot", "Remote Wipe/Digital Revocation Engine", "Re-issuance Progress/Tracking AI",
      "Fraud/Misuse Attempt Detector", "Penalty/Fine Calculation Engine", "Geo-Spatial Loss Location Mapper", "Duplicate Request/Hoarding Analyzer",
      "Lost ID Recovery Dashboard", "Voice-Command Status Query Bot", "Automated Monthly Lost Asset Report", "HRMS/Personnel Department Sync",
      "Suspicious Frequency of Loss Predictor", "Found/Recovered Card Alert AI", "Identity Theft Risk Scorer", "Temporary/Provisional Pass Issuer",
      "AI Evaluator for Recovery/Replacement Speed", "Audit/Blacklist Log Generator", "Data Privacy/Compromised ID Scrubber", "State Intelligence/Security Sync",
      "Officer Loss Reporting Mobile App", "Historical Loss/Theft Correlator (by Area)", "SP (Administration) Briefing AI", "Printing/Dispatch Task Allocator",
      "Blockchain Immutable Blacklist Hash", "Anti-Tamper Revocation Record Shield", "Mobile App for Found Card Scanning", "Re-issuance Turnaround Time Benchmarker",
      "Automated Alert for Unauthorized Use Attempt", "Historical Replacement Cost/Penalty Analyzer", "Lost Asset Reporting/Security SOP Trainer", "Blacklist Database Sync Monitor",
      "Imminent Impersonation/Breach Alert", "Habitual Loser/Careless Officer Profiler", "High-Security (Commando/Intel) ID Classifier", "AI Assisted Show-Cause Notice Drafter",
      "Blacklist Data Storage Forecaster", "Secure Master Access Control Protector", "Integration with CCTNS (for Lost Article Report)", "Public Found Item Portal Sync",
      "Election Duty Lost ID Rapid Replacement Modeler", "Disaster Deployment Lost ID Coordinator", "Smart Card/Printing Budget Tracker", "Custom Workflow for Stolen Wallet/Badge",
      "AI Driven Monthly Replacement Predictor", "Predictive Need for Lanyard/Holder Redesign", "Custom Alert Trigger for IG Security", "Report of Loss to New Card Issuance Timeline"
    ]
  },
  {
    fileName: 'MultiFactorAccessComplianceDetailed.jsx',
    compName: 'MultiFactorAccessComplianceDetailed',
    mainTitle: 'AI MULTI-FACTOR',
    subTitle: 'ACCESS COMPLIANCE',
    desc: 'OTP, Biometric & Hardware Key Policy Enforcement, Risk-Based Step-Up Authentication & Audit Trails',
    experts: [
      "MFA Policy Enforcement Engine AI", "Risk-Based Step-Up Authentication Bot", "OTP/SMS Gateway Integrator", "Hardware Token (FIDO2) Validator AI",
      "Context-Aware (Location/Device) Auth Scorer", "Failed Attempt/Brute-Force Detector", "Geo-Spatial Authentication Heatmapper", "Bypass/Exception Log Analyzer",
      "MFA Compliance Dashboard", "Voice-Command Security Query Bot", "Automated Weekly Compliance/Breach Report", "IT/Cyber Security Sync",
      "Phishing/Man-in-the-Middle (MitM) Predictor", "Token/Device Loss Alert AI", "Sim-Swap/Fraudulent OTP Detector", "User Adoption/Friction Analyzer",
      "AI Evaluator for Zero-Trust Maturity", "Audit/Auth Event Log Generator", "Data Privacy/Token ID Scrubber", "Network/Firewall Operations Sync",
      "User Authenticator Mobile App", "Historical Cyber Attack Correlator", "Chief Information Security Officer (CISO) Briefing", "Helpdesk/Token Reset Task Allocator",
      "Blockchain Immutable Auth Log Hash", "Anti-Tamper MFA Configuration Shield", "Mobile App for Push Notification Approval", "Department-wise MFA Compliance Benchmarker",
      "Automated Alert for Persistent Login Failures", "Historical MFA SMS/Gateway Cost Analyzer", "Cyber Hygiene/Zero-Trust SOP Trainer", "OTP Gateway/IdP Health Monitor",
      "Imminent Account Takeover Alert", "MFA Evader/Non-Compliant User Profiler", "High-Privilege (Database Admin) Account Classifier", "AI Assisted Security Violation Notice Drafter",
      "Authentication Log Storage Forecaster", "Secure Encryption/Signing Key Protector", "Integration with E-Office/CCTNS Applications", "Cyber Cell Threat Intel Sync",
      "Election Control Room Secure Access Modeler", "Disaster Remote Access/VPN Coordinator", "MFA/Token Licensing Budget Tracker", "Custom Workflow for Emergency Break-Glass Access",
      "AI Driven Authentication Delay Predictor", "Predictive Need for Passwordless Rollout", "Custom Alert Trigger for IG IT", "Authentication Request to Success/Denial Timeline"
    ]
  },
  {
    fileName: 'AccessPrivilegeReviewSystemDetailed.jsx',
    compName: 'AccessPrivilegeReviewSystemDetailed',
    mainTitle: 'AI ACCESS PRIVILEGE',
    subTitle: 'REVIEW SYSTEM',
    desc: 'Automated Access Recertification, Separation of Duties (SoD) Checks, Orphaned Account Detection & Role-Based Mapping',
    experts: [
      "Automated Access Recertification/Review Engine", "Separation of Duties (SoD) Conflict Detector", "Orphaned/Dormant Account Identifier", "Role-Based Access Control (RBAC) Mapper",
      "Over-Privilege/Creep Detection AI", "Transfer/Promotion Privilege Adjuster", "Geo-Spatial Physical Access Reviewer", "Entitlement/License Cost Optimizer",
      "Privilege Review Dashboard", "Voice-Command Entitlement Query Bot", "Automated Quarterly Recertification Report", "HRMS/Personnel Department Sync",
      "Unauthorized Escalation of Privilege Predictor", "Peer-Group Outlier (Excess Access) Analyzer", "Toxic Combination (Maker-Checker) Alert", "Temporary Access Expiry Enforcer",
      "AI Evaluator for Least Privilege Compliance", "Audit/Recertification Log Generator", "Data Privacy/Access Matrix Scrubber", "IT/Cyber Security Department Sync",
      "Manager/Approver Mobile App", "Historical Insider Threat Correlator", "Chief Information Security Officer (CISO) Briefing", "Revocation/Deprovisioning Task Allocator",
      "Blockchain Immutable Review Hash", "Anti-Tamper Entitlement Matrix Shield", "Mobile App for Quick Access Approval", "Branch-wise Recertification Speed Benchmarker",
      "Automated Alert for Overdue Reviews", "Historical License/Entitlement Cost Analyzer", "Identity & Access Management (IAM) SOP Trainer", "Identity Provider (IdP) Health Monitor",
      "Imminent Insider Data Exfiltration Alert", "Habitual Over-Privileged User Profiler", "Critical (Financial/Intelligence) System Classifier", "AI Assisted Disciplinary Action Drafter",
      "Audit Log/Entitlement Storage Forecaster", "Secure IAM Database Protector", "Integration with State Treasury/E-Office", "Cyber Crime Investigation (Digital Forensics) Sync",
      "Election Special Task Force Access Modeler", "Disaster Command Center Access Coordinator", "IAM Software Licensing Budget Tracker", "Custom Workflow for Emergency Access Grant",
      "AI Driven Review Fatigue Predictor", "Predictive Need for Role Redefinition", "Custom Alert Trigger for DGP Admin", "Access Grant to Recertification/Revocation Timeline"
    ]
  },
  {
    fileName: 'IdentityRevocationManagerDetailed.jsx',
    compName: 'IdentityRevocationManagerDetailed',
    mainTitle: 'AI IDENTITY REVOCATION',
    subTitle: 'MANAGER',
    desc: 'Rapid Offboarding, Cross-System Disable, Physical Pass Invalidation & Asset Return Tracking',
    experts: [
      "Rapid Offboarding/Disablement Engine", "Cross-System (Active Directory/Apps) Terminator", "Physical Pass/RFID Invalidation Bot", "Asset/Device Return Tracking AI",
      "Suspension/Dismissal Trigger Integrator", "Data Exfiltration/Download Alert (Pre-Departure)", "Geo-Spatial Facility Lockout Mapper", "Pending Investigation/Clearance Linker",
      "Identity Revocation Dashboard", "Voice-Command Status Query Bot", "Automated Daily Offboarding Report", "HRMS/Personnel Department Sync",
      "Incomplete Disablement/Lingering Access Detector", "Ghost Account/Post-Termination Login Alert", "Unauthorized Email Forwarding Predictor", "Final Settlement/NOC (No Objection) Automator",
      "AI Evaluator for Offboarding Security", "Audit/Revocation Trail Generator", "Data Privacy/Former Employee Data Scrubber", "IT/Cyber Security Department Sync",
      "Clearance/NOC Processing Mobile App", "Historical Post-Termination Breach Correlator", "SP (Admin) / CISO Briefing AI", "Asset Recovery/Quartermaster Task Allocator",
      "Blockchain Immutable Revocation Hash", "Anti-Tamper Offboarding Record Shield", "Mobile App for Exit Interview/Clearance", "Department-wise Offboarding Speed Benchmarker",
      "Automated Alert for Unreturned Assets (Laptop/Weapon)", "Historical Asset Loss/Write-off Analyzer", "Offboarding/Exit Protocol SOP Trainer", "IAM/Directory Server Health Monitor",
      "Imminent Sabotage/Revenge Attack Alert", "High-Risk Departing Employee Profiler", "Critical Access (Database/Intel) Revocation Classifier", "AI Assisted Legal/Recovery Notice Drafter",
      "Revocation Log/Audit Storage Forecaster", "Secure Master Directory Protector", "Integration with State Pension/Treasury Sync", "Police Welfare/Alumni Portal Sync",
      "Election Deputation End Reversion Modeler", "Disaster Volunteer Demobilization Coordinator", "Asset Recovery/Replacement Budget Tracker", "Custom Workflow for Deceased Personnel Settlement",
      "AI Driven Asset Recovery Delay Predictor", "Predictive Need for Legal Intervention", "Custom Alert Trigger for IG Admin", "Termination Trigger to Complete Lockout Timeline"
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

console.log('All 10 Police Identification & Authentication Modules files generated successfully.');
