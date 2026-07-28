const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  // Module 44: Police Administration
  {
    fileName: 'OfficeOrderManagementDetailed.jsx',
    compName: 'OfficeOrderManagementDetailed',
    mainTitle: 'AI OFFICE ORDER',
    subTitle: 'MANAGEMENT',
    desc: 'Automated Drafting, Policy Distribution, Compliance Tracking & Digital Acknowledgment',
    experts: [
      "Office Order NLP Drafting Assistant", "Policy/Regulation Cross-Reference AI", "Digital Signature/Approval Workflow Bot", "Officer Acknowledgment Tracker",
      "Historical Precedent Search Engine", "Contradiction/Conflict Detector AI", "Geo-Spatial Order Impact Mapper", "Urgency/Priority Routing AI",
      "Order Management Dashboard", "Voice-Command Order Query Bot", "Automated Daily Compliance Report", "State Home Department Sync Bot",
      "Multi-Lingual Order Translation (English/Hindi)", "Read-Receipt/View Tracking Engine", "Fake/Forged Order Detector", "Archive & Retrieval Bot",
      "AI Evaluator for Implementation Speed", "Audit/Distribution Log Generator", "Data Privacy/Classified Order Scrubber", "Personnel/HRMS Sync",
      "Field Officer Mobile Notification App", "Historical Order Revision Correlator", "DGP/IG Level Order Briefing AI", "Task/Action Item Extractor",
      "Blockchain Immutable Order Hash", "Anti-Tamper Document Shield", "Mobile App for Immediate Acknowledgment", "Jurisdiction-Specific Order Routing",
      "Automated Reminder for Pending Actions", "Historical Compliance Rate Analyzer", "Order Drafting SOP Trainer", "Document Server Health Monitor",
      "Imminent Deadline/Default Alert", "Serial Defaulter Profiler", "High-Priority/Top-Secret Order Classifier", "AI Assisted Corrigendum Drafter",
      "Order Data Storage Forecaster", "Secure Classified Order Protector", "Integration with E-Office/NIC", "Citizen Facing Order Portal Sync (if public)",
      "Election (MCC) Order Compliance Modeler", "Disaster/Emergency Order Coordinator", "Printing/Paper Savings Tracker", "Custom Workflow for Verbal Order Formalization",
      "AI Driven Policy Impact Predictor", "Predictive Need for Legal Vetting", "Custom Alert Trigger for Nodal Officers", "Order Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'CircularDistributionDetailed.jsx',
    compName: 'CircularDistributionDetailed',
    mainTitle: 'AI CIRCULAR',
    subTitle: 'DISTRIBUTION SYSTEM',
    desc: 'Targeted Dissemination, Read-Receipt Analytics, Standing Order Updates & Searchable Archives',
    experts: [
      "Targeted Audience/Rank Selector AI", "Read-Receipt Analytics Engine", "Standing Order/SOP Update Tracker", "Semantic Search Engine for Circulars",
      "Categorization & Tagging Bot", "Obsolete/Superseded Circular Detector", "Geo-Spatial Distribution Heatmapper", "Bandwidth-Optimized Delivery (for remote stations)",
      "Circular Dashboard", "Voice-Command Circular Query Bot", "Automated Weekly Readership Report", "Police Training Academy Sync Bot",
      "Multi-Lingual Circular Translation", "Attachment/Annexure Malware Scanner", "Fake/Phishing Circular Predictor", "Summary/TL;DR Generator AI",
      "AI Evaluator for Information Penetration", "Audit/Delivery Log Generator", "Data Privacy/Internal Only Scrubber", "CCTNS/Intranet Sync",
      "Field Officer Mobile Circular App", "Historical Circular Correlator AI", "Supervisory Officer Briefing Bot", "Actionable Directive Extractor",
      "Blockchain Immutable Circular Hash", "Anti-Tamper Record Shield", "Mobile App for Quick Reference", "Zone/Range specific Routing",
      "Automated Reminder for Unread Circulars", "Historical Relevance/Search Rate Analyzer", "Information Dissemination SOP Trainer", "Intranet Server Health Monitor",
      "Imminent Policy Change Alert", "Non-Compliance/Ignorance Profiler", "Urgent/Flash Message Classifier", "AI Assisted Reminder Drafter",
      "Archival Storage Forecaster", "Secure Official Secrets Protector", "Integration with WhatsApp/SMS Gateways (Internal)", "Public Advisory Portal Sync (if public)",
      "Election Guideline Distribution Modeler", "Disaster Protocol Dissemination Coordinator", "Communication Expense Budget Tracker", "Custom Workflow for Clarification Requests",
      "AI Driven Policy Awareness Predictor", "Predictive Need for Briefing/Workshop", "Custom Alert Trigger for SP/SSP", "Circular Validity Timeline Tracker"
    ]
  },
  {
    fileName: 'MeetingAgendaGeneratorDetailed.jsx',
    compName: 'MeetingAgendaGeneratorDetailed',
    mainTitle: 'AI MEETING AGENDA',
    subTitle: 'GENERATOR',
    desc: 'Pending Action Item Integration, Crime Trend Summarization, Priority Scheduling & Minute Drafting',
    experts: [
      "Pending Action/ATR Extractor AI", "Crime Trend/Stat Summarizer Bot", "Priority/Urgency Schedular", "Automated Minutes of Meeting (MoM) Drafter",
      "Participant Availability/Calendar Sync", "Previous MoM Continuity Checker", "Geo-Spatial Hotspot Discussion Prompter", "Resource Deficit Highlight AI",
      "Agenda Dashboard", "Voice-Command Agenda Query Bot", "Automated Pre-Meeting Briefing Pack", "Video Conference (NIC/Zoom) Sync",
      "Speech-to-Text Transcription Integration", "Action Item/Task Delegator Bot", "Irrelevant/Off-Topic Detector", "Duration/Time-boxing Enforcer AI",
      "AI Evaluator for Meeting Efficiency", "Audit/Agenda Modification Log", "Data Privacy/Classified Discussion Scrubber", "State Command Center Sync",
      "Officer Pre-Read Mobile App", "Historical Meeting Decision Correlator", "Chairperson/DGP Briefing AI", "Follow-up Task Allocator",
      "Blockchain Immutable MoM Hash", "Anti-Tamper Agenda Shield", "Mobile App for Live Updates", "Jurisdiction-Specific Agenda Tailoring",
      "Multi-Lingual Minutes Translation", "Historical Decision Implementation Analyzer", "Meeting Protocol SOP Trainer", "Agenda Server Health Monitor",
      "Imminent Unresolved Issue Alert", "Chronic Defaulter/Delay Profiler", "High-Stakes/Crisis Meeting Classifier", "AI Assisted Show-Cause Drafter (for absentees)",
      "Meeting Recording/Transcript Storage Forecaster", "Secure Classified Meeting Protector", "Integration with E-Office/File Tracking", "Media Briefing Generator Sync",
      "Election Preparedness Meeting Modeler", "Disaster Review Meeting Coordinator", "Meeting/Travel Expense Budget Tracker", "Custom Workflow for Emergency Agenda Approval",
      "AI Driven Discussion Outcome Predictor", "Predictive Need for Expert Invitee", "Custom Alert Trigger for Nodal Officers", "Agenda Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'MeetingAttendanceTrackerDetailed.jsx',
    compName: 'MeetingAttendanceTrackerDetailed',
    mainTitle: 'AI MEETING ATTENDANCE',
    subTitle: 'TRACKER',
    desc: 'Facial Recognition Sign-in, Virtual Attendance Sync, Proxy Detection & Punctuality Analytics',
    experts: [
      "Facial Recognition Sign-in AI", "Virtual Meeting (VC) Attendance Sync", "Proxy/Impersonation Detector", "Late Arrival/Early Departure Tracker",
      "Absentee/Leave Cross-Reference Bot", "Location/Geo-fenced Attendance Validator", "Geo-Spatial Absentees Mapper", "Habitual Tardy/Absentee Profiler",
      "Attendance Dashboard", "Voice-Command Attendance Query Bot", "Automated Monthly Punctuality Report", "HRMS/Leave Management Sync",
      "QR Code/Biometric Integrator", "Meeting Attention/Engagement Scorer (VC)", "Fake/Spoofed GPS Detector", "Excuse/Reason NLP Analyzer",
      "AI Evaluator for Officer Discipline", "Audit/Attendance Log Generator", "Data Privacy/Biometric Scrubber", "State Police Headquarters Sync",
      "Officer Self-Check-in Mobile App", "Historical Attendance Correlator", "Chairperson Briefing Bot (Defaulters)", "Show-Cause Notice Allocator",
      "Blockchain Immutable Attendance Hash", "Anti-Tamper Record Shield", "Mobile App for Proxy Authorization", "Rank-Wise Attendance Analyzer",
      "Multi-Lingual Notice Generator", "Historical Meeting Quorum Analyzer", "Attendance Protocol SOP Trainer", "Biometric/Attendance Server Health Monitor",
      "Imminent Quorum Failure Alert", "Chronic Defaulter Profiler", "Mandatory/Statutory Meeting Classifier", "AI Assisted Disciplinary Note Drafter",
      "Attendance Data Storage Forecaster", "Secure Officer Location Protector", "Integration with E-Office/Payroll", "Citizen Interface (if applicable) Sync",
      "Election Meeting Attendance Modeler", "Disaster Briefing Roll-Call Coordinator", "Travel Allowance (TA/DA) Fraud Tracker", "Custom Workflow for Exemption Approval",
      "AI Driven Quorum Predictor", "Predictive Need for Rescheduling", "Custom Alert Trigger for IG/ADG", "Attendance Trend Timeline Tracker"
    ]
  },
  {
    fileName: 'ActionTakenReportManagerDetailed.jsx',
    compName: 'ActionTakenReportManagerDetailed',
    mainTitle: 'AI ACTION TAKEN REPORT',
    subTitle: 'MANAGER',
    desc: 'Deadline Tracking, Evidence Verification, Automated Escalation & Pending Task Dashboards',
    experts: [
      "ATR Deadline/Timeline Tracker AI", "Evidence/Document Verification Bot", "Automated Escalation (to higher ranks) Engine", "Pending Task/Bottleneck Identifier",
      "Vague/Incomplete Report Detector", "Semantic Similarity Matcher (for generic replies)", "Geo-Spatial Pending ATR Mapper", "Cross-Department Dependency Analyzer",
      "ATR Dashboard", "Voice-Command Task Query Bot", "Automated Weekly Defaulter Report", "Meeting Minutes (MoM) Sync Bot",
      "Multi-Lingual ATR Translation", "Attachment/Photo Authenticity Checker", "Fake/Fabricated ATR Predictor", "Task Completion Percentage Estimator",
      "AI Evaluator for Action Effectiveness", "Audit/ATR Submission Log Gen", "Data Privacy/Classified Info Scrubber", "E-Office/File Tracking Sync",
      "Field Officer Task Update App", "Historical Delay/Excuse Correlator", "Supervisory Officer Briefing AI", "Re-Investigation/Follow-up Allocator",
      "Blockchain Immutable ATR Hash", "Anti-Tamper Report Shield", "Mobile App for Evidence Upload", "Jurisdiction-wise Compliance Benchmarker",
      "Automated Reminder for Overdue ATRs", "Historical Compliance Quality Analyzer", "ATR Drafting SOP Trainer", "ATR DB Server Health Monitor",
      "Imminent Deadline Default Alert", "Chronic Defaulter/Evasive Officer Profiler", "High-Priority/Court-Mandated ATR Classifier", "AI Assisted Show-Cause Notice Drafter",
      "Document Storage Forecaster", "Secure Internal Inquiry Protector", "Integration with Judicial/Court Portals", "Public Grievance Resolution Sync",
      "Election Commission Order ATR Modeler", "Disaster Relief Action Coordinator", "Task Execution Expense Budget Tracker", "Custom Workflow for ATR Rejection/Revision",
      "AI Driven Compliance Probability Predictor", "Predictive Need for Resource Allocation", "Custom Alert Trigger for DGP/Home Secretary", "ATR Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'FileMovementTrackerDetailed.jsx',
    compName: 'FileMovementTrackerDetailed',
    mainTitle: 'AI FILE MOVEMENT',
    subTitle: 'TRACKER',
    desc: 'Barcode/RFID File Tracking, Delay Bottleneck Detection, E-Office Sync & Lost File Prediction',
    experts: [
      "Barcode/RFID Physical File Tracker", "Delay/Bottleneck Detection AI", "E-Office (Digital File) Integrator", "Lost/Misplaced File Predictor",
      "Desk-by-Desk Transit Time Analyzer", "Urgency/Priority Routing Engine", "Geo-Spatial File Location Mapper", "File Content/Metadata NLP Extractor",
      "File Movement Dashboard", "Voice-Command File Query Bot", "Automated Daily Pending File Report", "Departmental Record Room Sync",
      "Multi-Lingual File Noting Translator", "Physical-to-Digital Discrepancy Checker", "Fake/Tampered Noting Predictor", "Automated Forwarding Suggestion Bot",
      "AI Evaluator for Processing Speed", "Audit/Transit Log Generator", "Data Privacy/Classified File Scrubber", "State Secretariat Sync Bot",
      "Officer Pending File Mobile App", "Historical Bottleneck Correlator AI", "Supervisory Officer Briefing AI", "Re-routing/Escalation Allocator",
      "Blockchain Immutable Transit Hash", "Anti-Tamper Noting Shield", "Mobile App for File Handover/Takeover", "Section-wise Efficiency Benchmarker",
      "Automated Reminder for Stalled Files", "Historical File Loss Rate Analyzer", "File Handling SOP Trainer", "Tracking DB Server Health Monitor",
      "Imminent Deadline/Default Alert", "Habitual File Hoarder Profiler", "High-Priority/Court-Bound File Classifier", "AI Assisted Explanation Call Drafter",
      "Physical Storage/Compactor Forecaster", "Secure Classified File Protector", "Integration with National E-Vidhaan/E-Office", "RTI Applicant Portal Sync",
      "Election Related File Modeler", "Disaster Relief Fund File Coordinator", "File Digitization Budget Tracker", "Custom Workflow for Reconstructing Lost Files",
      "AI Driven Approval Time Predictor", "Predictive Need for Additional Staff (Clerical)", "Custom Alert Trigger for Nodal Officers", "File Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'GovernmentLetterTrackingDetailed.jsx',
    compName: 'GovernmentLetterTrackingDetailed',
    mainTitle: 'AI GOVERNMENT LETTER',
    subTitle: 'TRACKING',
    desc: 'VIP Reference (VIP Ref) Monitoring, Assembly Question Tracking, Court Notice Deadlines & Priority Sorting',
    experts: [
      "VIP Reference/DO Letter Priority Engine", "Assembly/Parliament Question Tracker AI", "Court Notice/Summons Deadline Monitor", "NLP Topic/Subject Extractor Bot",
      "Auto-Assign/Routing to Relevant Branch", "Sentiment/Tone Analysis of Govt Letters", "Geo-Spatial Origin/Issue Mapper", "Cross-Reference Previous Correspondence AI",
      "Govt Letter Tracking Dashboard", "Voice-Command Letter Query Bot", "Automated Daily Pending Reply Report", "State Secretariat/MHA Sync Bot",
      "Multi-Lingual Translation (State Language to English)", "Attachment/Enclosure Verification Bot", "Fake/Forged Letterhead Detector", "Draft Reply/Noting Generator AI",
      "AI Evaluator for Reply Quality/Speed", "Audit/Correspondence Log Generator", "Data Privacy/Confidential Scrubber", "E-Courts/Legislative Assembly Sync",
      "Nodal Officer Alert Mobile App", "Historical Delayed Reply Correlator", "DGP/Home Secretary Briefing AI", "Drafting Task Allocator",
      "Blockchain Immutable Receipt Hash", "Anti-Tamper Correspondence Shield", "Mobile App for Draft Approval", "Department-wise Pendency Benchmarker",
      "Automated Reminder for Imminent Deadlines", "Historical Legislative Question Trend Analyzer", "Govt Correspondence SOP Trainer", "Tracking DB Server Health Monitor",
      "Imminent Contempt of Court/Privilege Motion Alert", "Chronic Defaulter Branch Profiler", "High-Sensitivity/Secret Letter Classifier", "AI Assisted Apology/Extension Drafter",
      "Archival Storage Forecaster", "Secure Official Secrets Act Protector", "Integration with E-Office", "Citizen Portal (for public notices) Sync",
      "Election Commission Letter Modeler", "Disaster/NDMA Directive Coordinator", "Correspondence Translation Budget Tracker", "Custom Workflow for Top-Secret Handling",
      "AI Driven Assembly Question Predictor", "Predictive Need for Legal/Expert Consultation", "Custom Alert Trigger for Chief Secretary", "Letter Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'RecordRetentionSchedulerDetailed.jsx',
    compName: 'RecordRetentionSchedulerDetailed',
    mainTitle: 'AI RECORD RETENTION',
    subTitle: 'SCHEDULER',
    desc: 'Statutory Deletion Deadlines, Weeding-out Recommendations, Archival Digitization & Storage Optimization',
    experts: [
      "Statutory Retention Schedule (Police Rules) Engine", "Automated Weeding-Out/Destruction Recommender", "Archival Digitization Priority Scorer", "Physical Storage/Compactor Optimizer",
      "Case Property/Malkhana Record Sync Bot", "Historical Value/Significance Classifier", "Geo-Spatial Record Room Mapper", "Duplicate/Redundant File Detector",
      "Record Retention Dashboard", "Voice-Command Record Query Bot", "Automated Monthly Weeding Report", "State Archives Department Sync",
      "OCR/Text Extraction for Old Records", "Condition/Decay (Termite/Moisture) Predictor", "Fake/Tampered Historical Record Detector", "Digital Storage Cost Calculator",
      "AI Evaluator for Record Room Efficiency", "Audit/Destruction Log Generator", "Data Privacy/Expungement Scrubber", "CCTNS/ICJS Sync",
      "Record Room Staff Task App", "Historical File Loss/Damage Correlator", "Supervisory Officer Briefing AI", "Digitization Vendor Task Allocator",
      "Blockchain Immutable Destruction Hash", "Anti-Tamper Archival Shield", "Mobile App for Barcode Scanning", "Category-wise Retention Matcher",
      "Multi-Lingual Indexing Translation", "Historical Digitization ROI Analyzer", "Record Management SOP Trainer", "Archive Server Health Monitor",
      "Imminent Unlawful Retention Alert", "Termite/Pest Infestation Threat Profiler", "Permanent/Historical Record Classifier", "AI Assisted Destruction Certificate Drafter",
      "Digital Archival Storage Forecaster", "Secure Classified Record Protector", "Integration with National Archives", "RTI Portal (for available records) Sync",
      "Election Record Retention Modeler", "Disaster (Fire/Flood) Record Rescue Coordinator", "Digitization/Storage Budget Tracker", "Custom Workflow for Historic Preservation",
      "AI Driven Storage Exhaustion Predictor", "Predictive Need for Pest Control", "Custom Alert Trigger for Nodal Officers", "Record Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'RTIAssistanceSystemDetailed.jsx',
    compName: 'RTIAssistanceSystemDetailed',
    mainTitle: 'AI RTI ASSISTANCE',
    subTitle: 'SYSTEM',
    desc: 'Automated RTI Drafting, Exemption (Section 8) Checking, Precedent Search & First Appellate Tracking',
    experts: [
      "RTI Query NLP Intent Extractor", "RTI Act (Section 8/9) Exemption Checker AI", "Automated Draft Reply Generator", "Previous Similar RTI Precedent Searcher",
      "First Appellate Authority (FAA) Tracker", "Information Gathering/Routing Engine", "Geo-Spatial RTI Hotspot Mapper", "Vexatious/Repeat Applicant Profiler",
      "RTI Assistance Dashboard", "Voice-Command RTI Query Bot", "Automated Monthly Pendency Report", "State Information Commission (SIC) Sync",
      "Multi-Lingual RTI Translation (Hindi/Local to English)", "Attachment/Information Verification Bot", "Fake/Fraudulent Applicant Detector", "Cost/Fee Calculator for Information",
      "AI Evaluator for Reply Accuracy", "Audit/Response Log Generator", "Data Privacy/Third-Party Info Scrubber", "E-Office/Record Room Sync",
      "PIO (Public Information Officer) Task App", "Historical Penalty/Adverse Order Correlator", "Appellate Authority Briefing AI", "Information Retrieval Allocator",
      "Blockchain Immutable Reply Hash", "Anti-Tamper RTI Record Shield", "Mobile App for Draft Approval", "Department-wise Pendency Benchmarker",
      "Automated Reminder for 30-Day Deadline", "Historical RTI Trend/Topic Analyzer", "RTI Handling SOP Trainer", "RTI DB Server Health Monitor",
      "Imminent 30-Day Deadline Alert", "Serial Litigant/Activist Profiler", "High-Sensitivity/Scandal RTI Classifier", "AI Assisted Penalty Defense Drafter",
      "RTI Document Storage Forecaster", "Secure Whistleblower/Informant Protector", "Integration with National RTI Portal", "Citizen RTI Status Portal Sync",
      "Election Expenditure RTI Modeler", "Disaster Relief Fund RTI Coordinator", "RTI Penalty/Compensation Budget Tracker", "Custom Workflow for Third-Party Notice",
      "AI Driven Information Availability Predictor", "Predictive Need for Legal Opinion", "Custom Alert Trigger for SP/SSP", "RTI Application Lifecycle Tracker"
    ]
  },
  {
    fileName: 'OfficeProductivityDashboardDetailed.jsx',
    compName: 'OfficeProductivityDashboardDetailed',
    mainTitle: 'AI OFFICE PRODUCTIVITY',
    subTitle: 'DASHBOARD',
    desc: 'Clerical Output Measurement, Pendency Heatmaps, Leave vs Workload Analytics & Workflow Optimization',
    experts: [
      "Clerical/Desk Output Measuring Engine", "Pendency/Backlog Heatmap Generator", "Leave vs Workload Correlator AI", "Workflow/Process Bottleneck Optimizer",
      "Dak/Receipt Processing Speed Tracker", "Typing/Drafting Efficiency Scorer", "Geo-Spatial Office Workload Mapper", "Overtime/Burnout Predictor AI",
      "Productivity Executive Dashboard", "Voice-Command Metric Query Bot", "Automated Weekly Efficiency Report", "HRMS/Payroll Sync Bot",
      "Computer Usage/Idle Time Monitor", "Error/Correction Rate Analyzer", "Fake Output/Manipulated Log Detector", "Skill-to-Task Matcher AI",
      "AI Evaluator for Staff Appraisals (ACR)", "Audit/Productivity Log Generator", "Data Privacy/Personal Metric Scrubber", "State Police Headquarters Sync",
      "Staff Self-Assessment Mobile App", "Historical Inefficiency Correlator", "Supervisory Officer Briefing AI", "Task Reallocation/Load Balancing Engine",
      "Blockchain Immutable Appraisal Hash", "Anti-Tamper Productivity Shield", "Mobile App for Task Updates", "Inter-Branch Efficiency Benchmarker",
      "Automated Reminder for Stalled Tasks", "Historical Seasonal Workload Analyzer", "Office Procedure SOP Trainer", "Productivity DB Server Health Monitor",
      "Imminent Systemic Backlog Alert", "Chronic Underperformer Profiler", "High-Value/Critical Desk Classifier", "AI Assisted Reward/Reprimand Drafter",
      "Productivity Data Storage Forecaster", "Secure Appraisal Protector", "Integration with E-Office", "Citizen Grievance Resolution Speed Sync",
      "Election Duty Staff Shortage Modeler", "Disaster Emergency Desk Setup Coordinator", "Overtime/Incentive Budget Tracker", "Custom Workflow for Process Re-engineering",
      "AI Driven Burnout/Attrition Predictor", "Predictive Need for Additional Staff/Automation", "Custom Alert Trigger for IG/ADG", "Task Completion Lifecycle Tracker"
    ]
  },
  // Module 88: Police Administration (Part 2)
  {
    fileName: 'OfficeShiftCalendarDetailed.jsx',
    compName: 'OfficeShiftCalendarDetailed',
    mainTitle: 'AI OFFICE SHIFT',
    subTitle: 'CALENDAR',
    desc: 'Dynamic 24/7 Rostering, Fatigue Management, Skill-based Shift Allocation & Duty Swapping AI',
    experts: [
      "Dynamic 24/7 Shift Optimizer AI", "Fatigue/Rest Gap Manager", "Skill-based (Cyber/Comms) Shift Allocator", "Automated Duty Swapping Approver",
      "Leave/Absence Conflict Resolver", "Peak Workload/Crime Trend Sync", "Geo-Spatial Staff Commute Mapper", "Overtime/Comp-Off Balance Tracker",
      "Shift Calendar Dashboard", "Voice-Command Roster Query Bot", "Automated Weekly Roster Publisher", "HRMS/Payroll Sync Bot",
      "Predictive Absenteeism Modeler", "Gender/Special Need Shift Accommodator", "Fake Medical Leave Predictor", "Emergency Surge Staffing AI",
      "AI Evaluator for Roster Fairness", "Audit/Roster Change Log Generator", "Data Privacy/Staff Detail Scrubber", "State Police Headquarters Sync",
      "Officer Shift/Swap Mobile App", "Historical Staff Shortage Correlator", "Supervisory Officer Briefing AI", "Reserve/Standby Staff Allocator",
      "Blockchain Immutable Roster Hash", "Anti-Tamper Shift Shield", "Mobile App for Instant Shift Alerts", "Jurisdiction-wise Shift Benchmarker",
      "Multi-Lingual Shift Notification", "Historical Fatigue-Incident Analyzer", "Shift Policy/SOP Trainer", "Roster DB Server Health Monitor",
      "Imminent Under-staffing Alert", "Habitual Shift Evader Profiler", "Critical/Night Shift Classifier", "AI Assisted Disciplinary Note Drafter",
      "Roster Data Storage Forecaster", "Secure Officer Schedule Protector", "Integration with Dial 112/Command Center", "Citizen Facing Desk Availability Sync",
      "Election/Festival Surge Shift Modeler", "Disaster Extended Shift Coordinator", "Overtime/Allowance Budget Tracker", "Custom Workflow for VIP Duty Reallocation",
      "AI Driven Burnout/Stress Predictor", "Predictive Need for Recruitment", "Custom Alert Trigger for SP/SSP", "Officer Shift Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'HolidayDutyRotationDetailed.jsx',
    compName: 'HolidayDutyRotationDetailed',
    mainTitle: 'AI HOLIDAY DUTY',
    subTitle: 'ROTATION',
    desc: 'Equitable Festival Deployment, Predictive Leave Approval, Rest-Day Tracking & Sentiment Analysis',
    experts: [
      "Equitable Festival/Holiday Allocator AI", "Predictive Leave Approval Engine", "Weekly Rest-Day (Off) Tracker", "Force Morale/Sentiment Analyzer",
      "Religious/Cultural Preference Matcher", "Peak Festival Demand Sync (Diwali/Eid)", "Geo-Spatial Hometown Commute Mapper", "Compensatory Off (Comp-Off) Manager",
      "Holiday Duty Dashboard", "Voice-Command Duty Query Bot", "Automated Festival Roster Publisher", "HRMS/Leave Management Sync",
      "Predictive Mass Leave Modeler", "Family Emergency/Compassionate Leave Prioritizer", "Fake Medical Certificate Predictor", "Reserve/Standby Rotation AI",
      "AI Evaluator for Roster Fairness", "Audit/Leave Approval Log Generator", "Data Privacy/Staff Detail Scrubber", "State Police Welfare Dept Sync",
      "Officer Leave Request Mobile App", "Historical Leave Denial Correlator", "Supervisory Officer Briefing AI", "Emergency Duty Re-Allocator",
      "Blockchain Immutable Leave Hash", "Anti-Tamper Duty Shield", "Mobile App for Instant Approvals", "Jurisdiction-wise Morale Benchmarker",
      "Multi-Lingual Holiday Notification", "Historical Burnout/Resignation Analyzer", "Leave Policy/SOP Trainer", "Duty Rotation DB Server Health Monitor",
      "Imminent Force Depletion Alert", "Habitual Festival Leave Profiler", "Critical Festival/VIP Duty Classifier", "AI Assisted Welfare Counseling Drafter",
      "Roster Data Storage Forecaster", "Secure Officer Schedule Protector", "Integration with CCTNS/Command Center", "Citizen Facing Desk Availability Sync",
      "Election Coinciding with Festival Modeler", "Disaster Leave Cancellation Coordinator", "Holiday Pay/Allowance Budget Tracker", "Custom Workflow for Exceptional Leave",
      "AI Driven Mutiny/Strike Predictor", "Predictive Need for Central Forces (CAPF)", "Custom Alert Trigger for IG/ADG", "Officer Leave Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'OfficialDiaryManagementDetailed.jsx',
    compName: 'OfficialDiaryManagementDetailed',
    mainTitle: 'AI OFFICIAL DIARY',
    subTitle: 'MANAGEMENT',
    desc: 'Digital General Diary (GD) Entries, NLP Summarization, Tamper-proof Logging & Searchable Archives',
    experts: [
      "Digital General Diary (GD) Logger AI", "NLP Daily Event Summarizer", "Tamper-Proof Timestamping Engine", "Semantic Search for Historical GDs",
      "Voice-to-Text Dictation Bot", "Auto-Categorization (Crime/Law & Order/Admin)", "Geo-Spatial Event Mapper", "Cross-Reference with FIR/CCTNS AI",
      "Official Diary Dashboard", "Voice-Command Diary Query Bot", "Automated Daily/Weekly Summary Report", "CCTNS/ICJS Sync Bot",
      "Multi-Lingual Translation (Local to English)", "Attachment/Photo Verification Bot", "Fake/Backdated Entry Predictor", "Pending Action Item Extractor",
      "AI Evaluator for Entry Accuracy", "Audit/Edit History Log Generator", "Data Privacy/Victim Detail Scrubber", "State Crime Records Bureau Sync",
      "Officer Voice Dictation Mobile App", "Historical Event Precedent Correlator", "SHO/Supervisory Officer Briefing AI", "Follow-up Task Allocator",
      "Blockchain Immutable GD Hash", "Anti-Tamper Digital Shield", "Mobile App for Quick Reference", "Police Station-wise Workload Benchmarker",
      "Automated Reminder for Pending Tasks", "Historical GD Volume Analyzer", "GD Writing SOP/Legal Trainer", "GD Server Health Monitor",
      "Imminent Unreported Crime Alert", "Incomplete/Vague Entry Profiler", "High-Priority/Heinous Crime Classifier", "AI Assisted Clarification Request Drafter",
      "Archival Storage Forecaster", "Secure Official Secrets Protector", "Integration with E-Courts", "RTI Portal (for public GD excerpts) Sync",
      "Election Incident GD Modeler", "Disaster Log/Response Coordinator", "Digital Infrastructure Budget Tracker", "Custom Workflow for Expunging Entries (Court Order)",
      "AI Driven Crime Trend Predictor (from GD)", "Predictive Need for Supervisory Intervention", "Custom Alert Trigger for SP/SSP", "Diary Entry Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'DigitalAttendanceBoardDetailed.jsx',
    compName: 'DigitalAttendanceBoardDetailed',
    mainTitle: 'AI DIGITAL ATTENDANCE',
    subTitle: 'BOARD',
    desc: 'Live Duty Status, Geo-fenced Beat Tracking, Availability Prediction & Smart Roll-Call',
    experts: [
      "Live Duty/Availability Status AI", "Geo-Fenced Beat/Patrol Tracker", "Smart Roll-Call/Briefing Automator", "Officer Availability/ETA Predictor",
      "Court Duty/Summons Cross-Reference Bot", "VIP Duty/Deployment Integrator", "Geo-Spatial Force Distribution Mapper", "Real-Time Absentee/Missing Staff Alert",
      "Attendance Board Dashboard", "Voice-Command Staff Status Bot", "Automated Daily Roll-Call Report", "HRMS/Payroll Sync Bot",
      "Facial Recognition/Biometric Sign-in", "Vehicle (GPS) vs Officer Location Correlator", "Fake GPS/Spoofing Detector", "Leave/Medical Absence Sync AI",
      "AI Evaluator for Beat Coverage", "Audit/Attendance Log Generator", "Data Privacy/Officer Location Scrubber", "State Police Control Room Sync",
      "Officer Geo-Check-in Mobile App", "Historical Absenteeism Correlator", "SHO/Duty Officer Briefing AI", "Dynamic Beat Re-allocator",
      "Blockchain Immutable Attendance Hash", "Anti-Tamper Location Record Shield", "Mobile App for Supervisory Dashboard", "Police Station-wise Discipline Benchmarker",
      "Automated Reminder for Missed Check-ins", "Historical Punctuality Trend Analyzer", "Attendance/Beat SOP Trainer", "Biometric Server Health Monitor",
      "Imminent Area Uncovered Alert", "Habitual Latecomer Profiler", "Critical/Armed Duty Classifier", "AI Assisted Absentee Notice Drafter",
      "Location Data Storage Forecaster", "Secure Officer Identity Protector", "Integration with Dial 112 Dispatch", "Citizen Facing Police Station Display Sync",
      "Election Booth Deployment Modeler", "Disaster Emergency Roll-Call Coordinator", "Biometric Infrastructure Budget Tracker", "Custom Workflow for Special Duty Assignment",
      "AI Driven Response Time Predictor", "Predictive Need for Force Augmentation", "Custom Alert Trigger for SP/SSP", "Daily Officer Duty Lifecycle Tracker"
    ]
  },
  {
    fileName: 'OfficeSeatingPlanDetailed.jsx',
    compName: 'OfficeSeatingPlanDetailed',
    mainTitle: 'AI OFFICE SEATING',
    subTitle: 'PLAN',
    desc: 'Space Optimization, Hierarchy-based Allocation, Pandemic/Distancing Protocols & Resource Mapping',
    experts: [
      "Space/Floor Plan Optimization AI", "Hierarchy/Rank-based Allocator", "Inter-Department Synergy Mapper", "Pandemic/Social Distancing Protocol Engine",
      "IT/Network Resource (LAN/Power) Mapper", "Visitor Flow/Security Zoning AI", "3D Geo-Spatial Office Mapper", "Meeting/Conference Room Usage Predictor",
      "Seating Plan Dashboard", "Voice-Command Desk Query Bot", "Automated Space Utilization Report", "State Police Housing/Estate Sync",
      "Hot-Desking/Flexible Seating Manager", "Ergonomic/Lighting Assessment Bot", "Unauthorized Access/Zone Breach Detector", "Department Relocation/Shift Planner",
      "AI Evaluator for Space Efficiency", "Audit/Allocation Log Generator", "Data Privacy/VVIP Location Scrubber", "Fire/Emergency Safety Protocol Sync",
      "Officer Desk Navigator Mobile App", "Historical Space Shortage Correlator", "Estate Officer/Administration Briefing AI", "Maintenance/Cleaning Task Allocator",
      "Blockchain Immutable Floor Plan Hash", "Anti-Tamper Layout Shield", "Mobile App for Resource Requests (AC/IT)", "Headquarters-wise Space Benchmarker",
      "Automated Reminder for Maintenance", "Historical Occupancy Trend Analyzer", "Office Layout/Security SOP Trainer", "Facilities Server Health Monitor",
      "Imminent Overcrowding/Fire Hazard Alert", "Resource (Power/Network) Failure Profiler", "High-Security/Confidential Zone Classifier", "AI Assisted Relocation Notice Drafter",
      "3D Model Storage Forecaster", "Secure Blueprint/Floor Plan Protector", "Integration with CCTV/Access Control", "Citizen Visitor Pass Route Sync",
      "Election Control Room Setup Modeler", "Disaster Evacuation Route Coordinator", "Office Furniture/IT Budget Tracker", "Custom Workflow for VIP Expansion",
      "AI Driven Future Space Requirement Predictor", "Predictive Need for New Building/Wing", "Custom Alert Trigger for Nodal Officers", "Office Layout Evolution Timeline Tracker"
    ]
  },
  {
    fileName: 'DepartmentContactDirectoryDetailed.jsx',
    compName: 'DepartmentContactDirectoryDetailed',
    mainTitle: 'AI DEPARTMENT CONTACT',
    subTitle: 'DIRECTORY',
    desc: 'Auto-updating Designations, CUG Number Mapping, Role-based Search & Emergency Contact Sync',
    experts: [
      "Auto-Updating Designation/Posting AI", "CUG (Closed User Group) Number Mapper", "Role/Skill-based Semantic Search Engine", "Transfer/Promotion Sync Bot",
      "Emergency/Nodal Officer Highlight Engine", "Retired/Suspended Officer Filter", "Geo-Spatial Officer Location Mapper", "Inter-Department (Civic/Admin) Contact Sync",
      "Contact Directory Dashboard", "Voice-Command Contact Query Bot", "Automated Monthly Update Report", "HRMS/Personnel Department Sync",
      "Multi-Lingual Directory Generation", "Duplicate/Obsolete Number Detector", "Fake/Scammer Caller ID Predictor (for public)", "VCard/Contact Card Generator AI",
      "AI Evaluator for Directory Accuracy", "Audit/Update Log Generator", "Data Privacy/Personal Number Scrubber", "State Police Headquarters Sync",
      "Officer Contact Search Mobile App", "Historical Posting Precedent Correlator", "Supervisory Officer Briefing AI", "Telecom/CUG Vendor Task Allocator",
      "Blockchain Immutable Contact Hash", "Anti-Tamper Directory Shield", "Mobile App for Instant Call/Message", "Jurisdiction-wise Contact Benchmarker",
      "Automated Reminder for Number Update", "Historical Search/Query Trend Analyzer", "Communication SOP Trainer", "Directory Server Health Monitor",
      "Imminent Unreachable Key Officer Alert", "Unresponsive/Switched Off Number Profiler", "VVIP/Top-Secret Contact Classifier", "AI Assisted CUG Number Reallocation Drafter",
      "Database Storage Forecaster", "Secure Classified Contact Protector", "Integration with Dial 112/Command Center", "Citizen Facing Public Directory Sync",
      "Election Observer Contact Modeler", "Disaster Nodal Agency Contact Coordinator", "CUG Telecom Bill Budget Tracker", "Custom Workflow for Undercover Number Issuance",
      "AI Driven Skill Search Predictor", "Predictive Need for Dedicated Helplines", "Custom Alert Trigger for Telecom SP", "Officer Contact Evolution Timeline Tracker"
    ]
  },
  {
    fileName: 'InternalTelephoneDirectoryDetailed.jsx',
    compName: 'InternalTelephoneDirectoryDetailed',
    mainTitle: 'AI INTERNAL TELEPHONE',
    subTitle: 'DIRECTORY',
    desc: 'Intercom Extension Mapping, EPABX Integration, Call Routing Rules & VoIP Directory Services',
    experts: [
      "Intercom Extension/Desk Mapper AI", "EPABX/PBX System Integrator Bot", "Call Routing/Forwarding Rule Engine", "VoIP/Softphone Directory Services AI",
      "Auto-Attendant/IVR Menu Optimizer", "Desk Relocation/Shift Sync Bot", "Geo-Spatial Desk/Extension Mapper", "Conference Bridge/Meeting Number Manager",
      "Telephone Directory Dashboard", "Voice-Command Extension Query Bot", "Automated Call Volume/Analytics Report", "IT/Telecom Department Sync",
      "Multi-Lingual IVR Generation", "Dead/Inactive Extension Detector", "Unauthorized Toll/ISD Call Predictor", "Call Recording/Transcription Indexer (where legal)",
      "AI Evaluator for Call Routing Efficiency", "Audit/Update Log Generator", "Data Privacy/Personal Number Scrubber", "State Police Control Room Sync",
      "Officer Intercom Search Mobile App", "Historical Call Bottleneck Correlator", "Telecom/IT Officer Briefing AI", "Maintenance/Repair Task Allocator",
      "Blockchain Immutable Extension Hash", "Anti-Tamper Routing Rule Shield", "Mobile App for Softphone Calling", "Department-wise Call Volume Benchmarker",
      "Automated Reminder for Faulty Lines", "Historical Call Peak Trend Analyzer", "Internal Communication SOP Trainer", "EPABX Server Health Monitor",
      "Imminent Switchboard Overload Alert", "Faulty Line/Hardware Failure Profiler", "Emergency/Hotline Classifier", "AI Assisted Telecom Upgrade Proposal Drafter",
      "Call Log/Database Storage Forecaster", "Secure Hotline/Encrypted Line Protector", "Integration with National Police Telecom Network", "Public Helpline Routing Sync",
      "Election Control Room Extension Modeler", "Disaster Emergency Helpline Coordinator", "Telecom/Intercom Maintenance Budget Tracker", "Custom Workflow for Encrypted Line Setup",
      "AI Driven Call Wait Time Predictor", "Predictive Need for Switchboard Upgrade", "Custom Alert Trigger for IT/Telecom SP", "Extension Allocation Lifecycle Tracker"
    ]
  },
  {
    fileName: 'OfficialNoticeAutomationDetailed.jsx',
    compName: 'OfficialNoticeAutomationDetailed',
    mainTitle: 'AI OFFICIAL NOTICE',
    subTitle: 'AUTOMATION',
    desc: 'Template-based Drafting, Mass Email/SMS Broadcasting, Notice Board Digital Signage & Compliance Tracking',
    experts: [
      "Template-based NLP Drafting Assistant", "Mass Email/SMS Broadcast Engine", "Digital Signage/Notice Board Controller", "Read-Receipt/Compliance Tracking AI",
      "Urgency/Priority Classification Bot", "Attachment/Enclosure Integrator", "Geo-Spatial Targeted Dissemination Mapper", "Multi-Channel (WhatsApp/Email/Intranet) Router",
      "Notice Automation Dashboard", "Voice-Command Notice Query Bot", "Automated Daily Broadcast Report", "HRMS/Personnel Department Sync",
      "Multi-Lingual Notice Translation (Auto)", "Spam/Bounce/Failure Detector AI", "Fake/Phishing Notice Predictor", "Summary/TL;DR Generator AI",
      "AI Evaluator for Reach/Penetration", "Audit/Broadcast Log Generator", "Data Privacy/Confidential Info Scrubber", "State Home Department Sync",
      "Officer Notice Alert Mobile App", "Historical Notice Impact Correlator", "Supervisory Officer Briefing AI", "Follow-up/Reminder Task Allocator",
      "Blockchain Immutable Notice Hash", "Anti-Tamper Broadcast Shield", "Mobile App for Quick Acknowledgment", "Target Audience Refinement Benchmarker",
      "Automated Reminder for Unread Notices", "Historical Broadcast Success Analyzer", "Official Communication SOP Trainer", "Broadcast Server Health Monitor",
      "Imminent Broadcast Failure Alert", "Chronic Ignorer/Non-Compliant Profiler", "Flash/Emergency Notice Classifier", "AI Assisted Retraction/Corrigendum Drafter",
      "Archival Storage Forecaster", "Secure Official Secrets Protector", "Integration with E-Office", "Citizen Public Advisory Portal Sync",
      "Election Guideline Broadcast Modeler", "Disaster Early Warning Broadcast Coordinator", "SMS/Email Gateway Budget Tracker", "Custom Workflow for Top-Secret Dissemination",
      "AI Driven Information Absorption Predictor", "Predictive Need for Physical Briefing", "Custom Alert Trigger for PRO/SP", "Notice Lifecycle Timeline Tracker"
    ]
  },
  {
    fileName: 'OfficeWorkflowDesignerDetailed.jsx',
    compName: 'OfficeWorkflowDesignerDetailed',
    mainTitle: 'AI OFFICE WORKFLOW',
    subTitle: 'DESIGNER',
    desc: 'Drag-and-Drop Process Mapping, Approval Matrix Automation, Bottleneck Simulation & Rule-based Routing',
    experts: [
      "Drag-and-Drop Process Mapping AI", "Approval Matrix/Hierarchy Automator", "Workflow Bottleneck/Delay Simulator", "Rule-based Conditional Routing Engine",
      "Redundant Step/Duplicate Form Detector", "Time-and-Motion Study Analyzer", "Geo-Spatial Workflow Node Mapper", "Parallel Processing/Task Splitter AI",
      "Workflow Designer Dashboard", "Voice-Command Process Query Bot", "Automated Workflow Efficiency Report", "E-Office/IT Department Sync",
      "Form/Data Field Suggestion Bot", "Infinite Loop/Deadlock Predictor", "Unauthorized Bypass/Override Detector", "SOP to Workflow Auto-Converter",
      "AI Evaluator for Process Optimization", "Audit/Workflow Change Log Gen", "Data Privacy/Access Control Scrubber", "State Administrative Reform Dept Sync",
      "Officer Workflow Testing Mobile App", "Historical Process Failure Correlator", "DGP/IG Administration Briefing AI", "Process Implementation Task Allocator",
      "Blockchain Immutable Process Hash", "Anti-Tamper Rule Engine Shield", "Mobile App for Workflow Approvals", "Inter-Department Process Benchmarker",
      "Automated Suggestion for Optimization", "Historical Turnaround Time Analyzer", "Business Process Re-engineering Trainer", "Workflow Server Health Monitor",
      "Imminent Process Deadlock Alert", "Chronic Delaying Desk/Node Profiler", "High-Priority/VIP Process Classifier", "AI Assisted SOP Revision Drafter",
      "Workflow Metadata Storage Forecaster", "Secure Approval Matrix Protector", "Integration with HRMS/Finance Portals", "Citizen Service Guarantee (RTS) Sync",
      "Election Fast-Track Process Modeler", "Disaster Emergency Procurement Workflow Coordinator", "Process Automation Software Budget Tracker", "Custom Workflow for Ad-hoc Approvals",
      "AI Driven Process Completion Time Predictor", "Predictive Need for Policy Change", "Custom Alert Trigger for Chief Secretary", "Workflow Evolution Timeline Tracker"
    ]
  },
  {
    fileName: 'OfficeProcessAutomationDetailed.jsx',
    compName: 'OfficeProcessAutomationDetailed',
    mainTitle: 'AI OFFICE PROCESS',
    subTitle: 'AUTOMATION',
    desc: 'RPA (Robotic Process Automation) for Data Entry, Form Auto-Fill, Legacy System Integration & Error Reduction',
    experts: [
      "RPA (Robotic Process Automation) Engine", "Data Entry/Form Auto-Fill AI", "Legacy System (DOS/Old DB) Integrator", "Data Validation/Error Reduction Bot",
      "OCR/Document Parsing Automator", "Cross-Platform Data Sync (HRMS to CCTNS)", "Geo-Spatial Data Processing Mapper", "Repetitive Task Identification AI",
      "Process Automation Dashboard", "Voice-Command Task Status Bot", "Automated Daily RPA Output Report", "IT/Cyber Department Sync Bot",
      "Multi-Lingual Data Auto-Translation", "System Timeout/Crash Recovery Predictor", "Anomalous/Fraudulent Data Entry Detector", "Task Scheduling/Batch Processing Bot",
      "AI Evaluator for Man-Hours Saved", "Audit/RPA Execution Log Generator", "Data Privacy/PII Masking Engine", "National Informatics Centre (NIC) Sync",
      "Officer Bot Control Mobile App", "Historical Data Entry Error Correlator", "Supervisory Officer Briefing AI", "Manual Exception Handling Allocator",
      "Blockchain Immutable Bot Action Hash", "Anti-Tamper Script/Code Shield", "Mobile App for Exception Alerts", "RPA Efficiency vs Manual Benchmarker",
      "Automated Reminder for Script Updates", "Historical ROI/Cost Saving Analyzer", "Digital Transformation/RPA SOP Trainer", "RPA Server/VM Health Monitor",
      "Imminent Bot Failure/Crash Alert", "Legacy System Bottleneck Profiler", "High-Volume/Critical Process Classifier", "AI Assisted Automation Expansion Drafter",
      "Log/Data Storage Forecaster", "Secure API/Credential Protector", "Integration with State Treasury/PFMS", "Citizen Portal Auto-Update Sync",
      "Election Data Processing Surge Modeler", "Disaster Relief Beneficiary Auto-Fill Coordinator", "RPA Software Licensing Budget Tracker", "Custom Workflow for Bot Auditing",
      "AI Driven Processing Capacity Predictor", "Predictive Need for Cloud Migration", "Custom Alert Trigger for Nodal IT Officer", "Bot Script Lifecycle Timeline Tracker"
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

console.log('All 20 Police Administration Modules files generated successfully.');
