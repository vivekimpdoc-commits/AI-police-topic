const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');
const templateFile = path.join(pagesDir, 'StateBorderCheckDetailed.jsx');
let template = fs.readFileSync(templateFile, 'utf8');

const pagesData = [
  {
    fileName: 'VIPLoungeManagementDetailed.jsx',
    compName: 'VIPLoungeManagementDetailed',
    mainTitle: 'AI VIP LOUNGE',
    subTitle: 'MANAGEMENT',
    desc: 'Real-time Occupancy, Protocol Service Coordination, Access Control & Dignitary Preference Profiles',
    experts: [
      "Real-Time Lounge Occupancy Tracker AI", "Dignitary Dietary/Preference Profiler", "Protocol Access Control (Facial Rec) Bot", "VIP Wait-Time & Service Optimizer",
      "Automated High-Tea/Snack Requisition AI", "Geo-Spatial Secure Zone Mapper", "VIP Fleet/Arrival Sync Engine", "Dedicated Steward Task Allocator",
      "VIP Lounge Dashboard", "Voice-Command Protocol Query Bot", "Automated Daily VIP Footfall Report", "State Protocol Department Sync",
      "Uninvited/Unauthorized Entry Alert", "Dietary Restriction/Allergy Predictor", "Service Delay/Bottleneck Identifier", "VIP Lounge Cleanliness/Hygiene Monitor",
      "AI Evaluator for Protocol Efficiency", "Audit/Access Log Generator", "Data Privacy/VIP Preference Scrubber", "Security/Intelligence Branch Sync",
      "Lounge Manager/Protocol Officer App", "Historical Dignitary Visit Correlator", "PRO/Chief Security Officer Briefing AI", "Housekeeping/Catering Notification Engine",
      "Blockchain Immutable Access Log Hash", "Anti-Tamper VIP Profile Shield", "Mobile App for Instant Service Request", "Lounge-wise Service Speed Benchmarker",
      "Automated Alert for Impending VIP Arrival", "Historical Hospitality Cost Analyzer", "Hospitality/Protocol SOP Trainer", "Lounge IoT/Access Control Health Monitor",
      "Imminent Protocol Breach/Embarrassment Alert", "Habitual Unauthorized Loiterer Profiler", "High-Risk VIP (Z+ Security) Classifier", "AI Assisted Protocol Review Drafter",
      "VIP Data/Profile Storage Forecaster", "Secure Dignitary Itinerary Protector", "Integration with Airport/Railway VIP Rooms", "External Agency (MHA) VIP Sync",
      "Election Observer/ECI Visit Modeler", "Disaster Emergency Meeting Lounge Coordinator", "Hospitality/Refreshment Budget Tracker", "Custom Workflow for Head of State Visits",
      "AI Driven Peak Protocol Hour Predictor", "Predictive Need for Extra Staffing", "Custom Alert Trigger for IG Protocol", "VIP Arrival to Departure Service Timeline"
    ]
  },
  {
    fileName: 'ConferenceHospitalityPlannerDetailed.jsx',
    compName: 'ConferenceHospitalityPlannerDetailed',
    mainTitle: 'AI CONFERENCE HOSPITALITY',
    subTitle: 'PLANNER',
    desc: 'Catering Headcount Prediction, Break/Tea-Time Sync, Special Diet Requests & Vendor Management',
    experts: [
      "Dynamic Headcount/Catering Predictor", "Tea/Coffee Break Synchronization AI", "Special Diet (Vegan/Diabetic) Aggregator", "External Vendor/Caterer Coordinator Bot",
      "Table Seating & Protocol Arrangement AI", "Menu Cost vs Budget Optimizer", "Geo-Spatial Conference Hall/Dining Mapper", "Food Wastage/Excess Predictor",
      "Conference Hospitality Dashboard", "Voice-Command Menu Query Bot", "Automated Post-Conference Hospitality Report", "Logistics/Estate Department Sync",
      "Last-Minute RSVP/Change Adapter", "Water/Beverage Depletion Alert", "Vendor Delay/No-Show Predictor", "Menu Repetition/Variety Analyzer",
      "AI Evaluator for Delegate Satisfaction", "Audit/Catering Expense Log Generator", "Data Privacy/Delegate Profile Scrubber", "Finance/Accounts Department Sync",
      "Hospitality Manager Mobile App", "Historical Conference Consumption Correlator", "Event Nodal Officer Briefing AI", "Wait-Staff/Usher Task Allocator",
      "Blockchain Immutable Vendor Invoice Hash", "Anti-Tamper Delegate Feedback Shield", "Mobile App for Live Catering Updates", "Vendor-wise Quality Benchmarker",
      "Automated Reminder for Vendor Setup", "Historical Event Cost-Per-Head Analyzer", "Event Hospitality/Etiquette SOP Trainer", "Conference Hall Utility Health Monitor",
      "Imminent Food Shortage (During Break) Alert", "Substandard Caterer/Vendor Profiler", "High-Profile (DGP/CM level) Event Classifier", "AI Assisted Vendor Penalty Drafter",
      "Event Analytics Storage Forecaster", "Secure VIP Delegate List Protector", "Integration with State Guest Houses", "Tender/Empanelment Portal Sync",
      "Election Briefing (Mass Headcount) Modeler", "Disaster Response Briefing Coordinator", "Event/Conference Budget Tracker", "Custom Workflow for Multi-Day Seminars",
      "AI Driven Food Consumption Predictor", "Predictive Need for Menu Modification", "Custom Alert Trigger for Event Commander", "Event Setup to Wrap-up Timeline Tracker"
    ]
  },
  {
    fileName: 'GuestRefreshmentInventoryDetailed.jsx',
    compName: 'GuestRefreshmentInventoryDetailed',
    mainTitle: 'AI GUEST REFRESHMENT',
    subTitle: 'INVENTORY',
    desc: 'Smart Pantry Management, Expiry Alerts, Automated Reordering & Pilferage Detection',
    experts: [
      "Smart Pantry/Stock Depletion Tracker", "Perishable Expiry/Spoilage Alert Bot", "Automated Reorder/Indent Generator", "Pilferage/Siphoning Detection AI",
      "Seasonal Demand/Beverage Optimizer", "Brand/Quality Specification Validator", "Geo-Spatial Pantry/Store Mapper", "Cost-Per-Serving Analytics Engine",
      "Refreshment Inventory Dashboard", "Voice-Command Stock Query Bot", "Automated Monthly Consumption Audit", "Quartermaster/Stores Department Sync",
      "Unusual Consumption Surge Detector", "Rodent/Pest Vulnerability Predictor", "Fake/Substandard Supply Identifier", "Shelf-Life/FIFO (First-In-First-Out) Enforcer",
      "AI Evaluator for Pantry Efficiency", "Audit/Stock-Out Log Generator", "Data Privacy/Indent Log Scrubber", "Finance/Accounts (Audit) Sync",
      "Pantry Manager/Steward Mobile App", "Historical Summer/Winter Demand Correlator", "Estate Officer/SP Admin Briefing AI", "Restocking Task Allocator",
      "Blockchain Immutable Supply Hash", "Anti-Tamper Inventory Ledger Shield", "Mobile App for Delivery Barcode Scan", "Pantry-wise Efficiency Benchmarker",
      "Automated Alert for Critical Low Stock", "Historical Refreshment Expenditure Analyzer", "Pantry Hygiene/Stocking SOP Trainer", "Cold Storage/Fridge Health Monitor",
      "Imminent Stock Exhaustion (VIP Visit) Alert", "Habitual Pilferer/Wastage Profiler", "Premium/VIP (Imported) Goods Classifier", "AI Assisted Vendor Replenishment Drafter",
      "Inventory Ledger Storage Forecaster", "Secure Vendor Pricing Protector", "Integration with Police Canteen (CSD)", "E-Tendering/Procurement Sync",
      "Election Control Room 24x7 Stock Modeler", "Disaster Emergency Ration Coordinator", "Hospitality/Refreshment Budget Tracker", "Custom Workflow for Bulk Procurement",
      "AI Driven Monthly Indent Predictor", "Predictive Need for Deep Cleaning", "Custom Alert Trigger for IG Provisioning", "Stock Receipt to Consumption Timeline"
    ]
  },
  {
    fileName: 'OfficialCateringCoordinationDetailed.jsx',
    compName: 'OfficialCateringCoordinationDetailed',
    mainTitle: 'AI OFFICIAL CATERING',
    subTitle: 'COORDINATION',
    desc: 'Inter-Departmental Meeting Lunches, Mess Sync, Packed Meal Logistics & Dietitian Linkages',
    experts: [
      "Meeting Lunch/Catering Requirement Aggregator", "Police Mess/Canteen Sync Engine", "Packed Meal/Field Duty Logistics Bot", "Dietitian/Nutrition Profile Linker AI",
      "Vendor Dispatch/Delivery Time Tracker", "Temperature/Food Quality Assurance AI", "Geo-Spatial Field Delivery Route Mapper", "Last-Minute Headcount Adjustment Bot",
      "Catering Coordination Dashboard", "Voice-Command Catering Query Bot", "Automated Weekly Catering Expense Report", "District Police Mess/Lines Sync",
      "Delivery Delay/Traffic Block Predictor", "Spoilage/Stale Food Alert AI", "Vendor Over-Billing/Discrepancy Detector", "Menu Fatigue/Repetition Analyzer",
      "AI Evaluator for Field Meal Satisfaction", "Audit/Catering Invoice Log Generator", "Data Privacy/Dietary Need Scrubber", "Finance/Accounts Department Sync",
      "Field Commander Meal App", "Historical Riot/Election Deployment Correlator", "SP (Lines/Admin) Briefing AI", "Mess/Vendor Task Allocator",
      "Blockchain Immutable Delivery Receipt Hash", "Anti-Tamper Catering Invoice Shield", "Mobile App for Food Quality Sign-off", "Vendor/Mess Delivery Speed Benchmarker",
      "Automated Reminder for Meal Dispatches", "Historical Catering Cost Analyzer", "Field Catering/Hygiene SOP Trainer", "Mess Kitchen Utility Health Monitor",
      "Imminent Delivery Failure (Field Ops) Alert", "Substandard Caterer/Vendor Profiler", "High-Priority (VIP/CM Duty) Meal Classifier", "AI Assisted Disputed Bill Drafter",
      "Catering Analytics Storage Forecaster", "Secure Force Deployment Route Protector", "Integration with Health/Medical Department", "Dietary Feedback Portal Sync",
      "Election Phase Mega-Catering Modeler", "Disaster Relief Camp Meal Coordinator", "Field Rations/Catering Budget Tracker", "Custom Workflow for Emergency Dry Rations",
      "AI Driven Deployment Meal Predictor", "Predictive Need for Mobile Kitchens", "Custom Alert Trigger for IG (Armed Battalion)", "Catering Order to Field Delivery Timeline"
    ]
  },
  {
    fileName: 'GovernmentGuestReceptionDetailed.jsx',
    compName: 'GovernmentGuestReceptionDetailed',
    mainTitle: 'AI GOVERNMENT GUEST',
    subTitle: 'RECEPTION',
    desc: 'Escort Allocation, Welcome Protocol Automation, Itinerary Sync & Local Liaison Management',
    experts: [
      "VIP Escort/Pilot Allocation AI", "Welcome Protocol/Garland Automation Bot", "Guest Itinerary/Flight Sync Engine", "Local Liaison Officer (LO) Matchmaker",
      "Convoy Route Security/Traffic Analyzer", "Hotel/Guest House Check-in Optimizer", "Geo-Spatial VIP Movement/Convoy Mapper", "Cultural/Dietary Preference Profiler",
      "Guest Reception Dashboard", "Voice-Command Itinerary Query Bot", "Automated Post-Visit Protocol Report", "State Protocol/General Administration (GAD) Sync",
      "Flight Delay/Schedule Change Alert", "Route Protest/Traffic Blockade Predictor", "Escort Vehicle Breakdown Identifier", "Liaison Officer Language/Skill Matcher",
      "AI Evaluator for Reception Flawlessness", "Audit/Convoy Log Generator", "Data Privacy/VIP Itinerary Scrubber", "Security/Intelligence Branch Sync",
      "Liaison Officer Protocol App", "Historical VIP Visit Disruption Correlator", "SP (Protocol/Security) Briefing AI", "Pilot/Escort Task Allocator",
      "Blockchain Immutable Itinerary Hash", "Anti-Tamper VIP Schedule Shield", "Mobile App for Convoy Live Tracking", "Liaison Officer Performance Benchmarker",
      "Automated Alert for Imminent Arrival", "Historical Protocol Expenditure Analyzer", "VIP Security/Reception SOP Trainer", "Convoy Radio/GPS Gateway Health Monitor",
      "Imminent Security Threat/Route Breach Alert", "Inefficient Liaison/Driver Profiler", "High-Risk (Z+) Protectee Reception Classifier", "AI Assisted Protocol Revision Drafter",
      "Visit Analytics Storage Forecaster", "Secure VVIP Safe-House Protector", "Integration with Airport Authority/ATC", "Zero Public Exposure Policy Sync",
      "Election Observer Reception Modeler", "Disaster Central Team Visit Coordinator", "Protocol/Hospitality Budget Tracker", "Custom Workflow for Unscheduled VIP Stops",
      "AI Driven Convoy ETA Predictor", "Predictive Need for Extra Pilot Vehicles", "Custom Alert Trigger for DGP/ADG Security", "VIP Arrival to Safe Departure Timeline"
    ]
  },
  {
    fileName: 'AccommodationPreparationChecklistDetailed.jsx',
    compName: 'AccommodationPreparationChecklistDetailed',
    mainTitle: 'AI ACCOMMODATION',
    subTitle: 'PREPARATION CHECKLIST',
    desc: 'Room Readiness Audits, Amenity Replenishment, HVAC/Plumbing Checks & Housekeeping Scores',
    experts: [
      "Room Readiness/Inspection Audit AI", "Amenity (Toiletries/Linen) Replenishment Bot", "HVAC/Plumbing Preventive Check Engine", "Housekeeping Performance Scorer",
      "Pest Control/Sanitization Scheduler", "VIP Room Customization/Preference AI", "Geo-Spatial Guest House Layout Mapper", "Maintenance Ticket Auto-Routing",
      "Accommodation Prep Dashboard", "Voice-Command Room Status Bot", "Automated Daily Readiness Report", "State Police Housing/Estate Sync",
      "AC/Geyser Malfunction Predictor", "Stale Linen/Poor Odor Alert AI", "False 'Room Ready' Tagging Detector", "Occupancy Turnover/Cleaning Optimizer",
      "AI Evaluator for Guest Comfort Index", "Audit/Inspection Log Generator", "Data Privacy/Guest Occupancy Scrubber", "Logistics/PWD Sync",
      "Housekeeping Supervisor Mobile App", "Historical VIP Complaint Correlator", "Estate Officer/Manager Briefing AI", "Cleaning/Maintenance Task Allocator",
      "Blockchain Immutable Inspection Hash", "Anti-Tamper Maintenance Log Shield", "Mobile App for Room Photo Verification", "Staff-wise Cleaning Speed Benchmarker",
      "Automated Alert for Overdue Cleaning", "Historical Maintenance Cost Analyzer", "Guest House Housekeeping SOP Trainer", "Room IoT (Thermostat) Gateway Monitor",
      "Imminent Room Unavailability (VIP arrival) Alert", "Habitual Shirkers (Housekeeping) Profiler", "Presidential/CM Suite Classifier", "AI Assisted Vendor Penalty Drafter",
      "Inspection Image Storage Forecaster", "Secure Guest Ledger Protector", "Integration with State Tourism/Guest Houses", "Guest Feedback Portal Sync",
      "Election Central Force Accommodation Modeler", "Disaster Relief Staff Billeting Coordinator", "Guest House Maintenance Budget Tracker", "Custom Workflow for Deep Cleaning/Renovation",
      "AI Driven Room Turnaround Predictor", "Predictive Need for Linen Replacement", "Custom Alert Trigger for SP Admin", "Checkout to Next-Check-In Readiness Timeline"
    ]
  },
  {
    fileName: 'ProtocolDiningPlannerDetailed.jsx',
    compName: 'ProtocolDiningPlannerDetailed',
    mainTitle: 'AI PROTOCOL DINING',
    subTitle: 'PLANNER',
    desc: 'Seating Arrangements, Menu Translation, Wait-Staff Allocation & Dietary Restriction Flags',
    experts: [
      "Hierarchical Seating Arrangement AI", "Menu Translation/Localization Engine", "Wait-Staff to VIP Ratio Allocator", "Dietary Restriction/Allergy Flagging Bot",
      "Course-Timing/Service Flow Optimizer", "Cultural/Religious Food Sentiment Analyzer", "Geo-Spatial Banquet Hall Layout Mapper", "Beverage/Wine Protocol Sync",
      "Protocol Dining Dashboard", "Voice-Command Seating Query Bot", "Automated Post-Banquet Analytics Report", "State Protocol/MHA Sync",
      "Seating Faux-Pas/Conflict Detector", "Cross-Contamination Risk Alert", "Wait-Staff Delay/Inefficiency Predictor", "VIP Early Departure Flow Adjuster",
      "AI Evaluator for Dining Elegance Index", "Audit/Service Log Generator", "Data Privacy/VIP Diet Scrubber", "Catering/Mess Department Sync",
      "Banquet Manager/Maitre D' Mobile App", "Historical State Banquet Correlator", "Event Commander/PRO Briefing AI", "Course Serving Notification Engine",
      "Blockchain Immutable Menu/Seating Hash", "Anti-Tamper Protocol Layout Shield", "Mobile App for Live Table Status", "Table-wise Service Speed Benchmarker",
      "Automated Reminder for Course Changes", "Historical Banquet Expense Analyzer", "Fine Dining/Protocol SOP Trainer", "Banquet Kitchen IoT Health Monitor",
      "Imminent VIP Dissatisfaction/Delay Alert", "Clumsy/Inefficient Staff Profiler", "High-Stakes (Foreign Dignitary) Classifier", "AI Assisted Protocol Apology/Correction Drafter",
      "Banquet Layout/Analytics Storage Forecaster", "Secure VIP Guest List Protector", "Integration with External Premium Caterers", "Zero Public Exposure Policy Sync",
      "Election Observer Farewell Dinner Modeler", "Disaster Emergency Working Lunch Coordinator", "Protocol/Banquet Budget Tracker", "Custom Workflow for Last-Minute VIP Additions",
      "AI Driven Course Duration Predictor", "Predictive Need for Extra Wait-Staff", "Custom Alert Trigger for IG Protocol", "Appetizer to Dessert Service Timeline Tracker"
    ]
  },
  {
    fileName: 'KitchenHygieneAuditDetailed.jsx',
    compName: 'KitchenHygieneAuditDetailed',
    mainTitle: 'AI KITCHEN HYGIENE',
    subTitle: 'AUDIT',
    desc: 'CCTV Scrubbing for Hairnets/Gloves, Pest Detection, Sanitation Scores & FSSAI Standard Checks',
    experts: [
      "CCTV Hairnet/Glove Compliance AI", "Automated Pest/Rodent Detection Vision", "FSSAI Standard/Checklist Validator", "Sanitation/Cleanliness Scoring Engine",
      "Temperature/Cold Storage Monitor AI", "Dishwashing/Sterilization Effectiveness Bot", "Geo-Spatial Kitchen Zone Mapper", "Cross-Contamination Vector Analyzer",
      "Kitchen Hygiene Dashboard", "Voice-Command Audit Query Bot", "Automated Weekly Hygiene Report", "Police Mess/Canteen Department Sync",
      "Raw/Cooked Meat Separation Violation Detector", "Spoiled/Rotting Ingredient Alert", "Staff Hand-Washing Frequency Predictor", "Garbage Disposal Delay Analyzer",
      "AI Evaluator for Mess Hygiene Index", "Audit/Compliance Log Generator", "Data Privacy/Staff Identity Scrubber", "Health/Medical Officer Sync",
      "Mess Commander Inspection Mobile App", "Historical Food Poisoning Event Correlator", "SP (Lines/Admin) Briefing AI", "Deep Cleaning Task Allocator",
      "Blockchain Immutable Audit Video Hash", "Anti-Tamper Kitchen CCTV Shield", "Mobile App for Spot Fine/Notice", "Mess-wise Hygiene Benchmarker",
      "Automated Alert for FSSAI Violation", "Historical Mess Cleaning Material Expense Analyzer", "Food Safety/Hygiene SOP Trainer", "Kitchen CCTV/Sensor Gateway Monitor",
      "Imminent Foodborne Illness Outbreak Alert", "Habitual Hygiene Violator (Staff) Profiler", "High-Capacity (Training Academy) Mess Classifier", "AI Assisted Show-Cause Notice Drafter",
      "Audit Video/Image Storage Forecaster", "Secure Health Inspection Protector", "Integration with Food Safety Department", "Force Welfare/Health Portal Sync",
      "Election Mega-Kitchen Hygiene Modeler", "Disaster Relief Camp Kitchen Coordinator", "Sanitation/Cleaning Material Budget Tracker", "Custom Workflow for Pest Extermination",
      "AI Driven Bacteria/Spoilage Risk Predictor", "Predictive Need for Kitchen Equipment Overhaul", "Custom Alert Trigger for IG Provisioning", "Ingredient Prep to Service Hygiene Timeline"
    ]
  },
  {
    fileName: 'FoodSafetyComplianceDetailed.jsx',
    compName: 'FoodSafetyComplianceDetailed',
    mainTitle: 'AI FOOD SAFETY',
    subTitle: 'COMPLIANCE',
    desc: 'Ingredient Sourcing Verification, Sample Testing Logs, Expiry Management & Nutritional Analytics',
    experts: [
      "Ingredient Sourcing/Traceability AI", "Sample Testing/Lab Report Log Engine", "Perishable Expiry/FIFO Management Bot", "Nutritional/Caloric Value Analytics",
      "Adulteration/Contamination Risk Scorer", "Vendor Certification/License Validator", "Geo-Spatial Supply Chain Origin Mapper", "Dietary Need (Force Health) Optimizer",
      "Food Safety Dashboard", "Voice-Command Nutrition Query Bot", "Automated Monthly Safety & Health Report", "State Food & Drug Administration (FDA) Sync",
      "Counterfeit/Substandard Brand Detector", "Cold-Chain Breach (Transit) Alert", "Repetitive Menu Nutrient Deficit Predictor", "Supplier Monopoly/Cartelization Analyzer",
      "AI Evaluator for Force Nutrition Index", "Audit/Testing Log Generator", "Data Privacy/Vendor Pricing Scrubber", "Police Hospital/Medical Department Sync",
      "Mess Officer Sourcing Mobile App", "Historical Sickness/Fitness Correlator", "Commandant/SP Briefing AI", "Lab Testing/Sampling Task Allocator",
      "Blockchain Immutable Supply/Test Hash", "Anti-Tamper Lab Report Shield", "Mobile App for Barcode Verification", "Vendor-wise Quality & Safety Benchmarker",
      "Automated Alert for Expired Ingredients", "Historical Ration Expense vs Nutrition Analyzer", "Mess Sourcing/Safety SOP Trainer", "Cold Storage IoT Health Monitor",
      "Imminent Adulteration/Poisoning Alert", "Corrupt Ration Supplier Profiler", "High-Energy (Commando/ATS) Diet Classifier", "AI Assisted Vendor Blacklisting Drafter",
      "Testing/Certification Storage Forecaster", "Secure Dietary/Health Record Protector", "Integration with Food Safety Labs", "Constabulary Welfare/Feedback Sync",
      "Election Duty Field Ration Safety Modeler", "Disaster Relief Food Packet Coordinator", "Ration/Nutrition Budget Tracker", "Custom Workflow for Emergency Recalls",
      "AI Driven Caloric Need (Winter/Summer) Predictor", "Predictive Need for Diet Menu Overhaul", "Custom Alert Trigger for IG Welfare", "Farm/Supplier to Plate Safety Timeline"
    ]
  },
  {
    fileName: 'HospitalityFeedbackDashboardDetailed.jsx',
    compName: 'HospitalityFeedbackDashboardDetailed',
    mainTitle: 'AI HOSPITALITY FEEDBACK',
    subTitle: 'DASHBOARD',
    desc: 'Guest Sentiment Analysis, Complaint Auto-Routing, Vendor Rating & Continuous Improvement Metrics',
    experts: [
      "Guest Sentiment/NLP Analysis AI", "Automated Complaint/Grievance Router", "Vendor/Caterer Rating & Scorecard Engine", "Continuous Improvement (Kaizen) Metric Bot",
      "QR Code/Tablet Feedback Aggregator", "Fake/Biased Review Detector AI", "Geo-Spatial Guest House/Lounge Satisfaction Mapper", "Recurring Issue/Root Cause Identifier",
      "Hospitality Feedback Dashboard", "Voice-Command Sentiment Query Bot", "Automated Monthly Hospitality Quality Report", "State Tourism/Estate Department Sync",
      "Unresolved Complaint Escalation Alert", "Vague/Generic Feedback Categorizer", "Drop in Quality/Service Predictor", "Cost vs Satisfaction (ROI) Analyzer",
      "AI Evaluator for Hospitality Excellence Index", "Audit/Resolution Log Generator", "Data Privacy/VIP Guest ID Scrubber", "Admin/Lines Department Sync",
      "Hospitality Manager Resolution App", "Historical Event/Conference Feedback Correlator", "SP (Protocol/Admin) Briefing AI", "Maintenance/Service Task Allocator",
      "Blockchain Immutable Feedback Hash", "Anti-Tamper Guest Review Shield", "Mobile App for Instant Action Taken (ATR)", "Facility-wise Satisfaction Benchmarker",
      "Automated Alert for Critical Negative Feedback", "Historical Vendor Rating Trend Analyzer", "Customer Service/Hospitality SOP Trainer", "Feedback Kiosk/Tablet Health Monitor",
      "Imminent VIP Escalation/Embarrassment Alert", "Habitual Complainer/Frivolous Profiler", "High-Priority (Foreign Delegate) Feedback Classifier", "AI Assisted Vendor Warning Notice Drafter",
      "Sentiment Analytics Storage Forecaster", "Secure Dignitary Feedback Protector", "Integration with HRMS (for staff rewards)", "Public/Civilian Guest Portal Sync",
      "Election Observer Feedback Modeler", "Disaster Relief Staff Satisfaction Coordinator", "Hospitality Training/Upgrade Budget Tracker", "Custom Workflow for Service Recovery (Apology)",
      "AI Driven Future Rating Predictor", "Predictive Need for Staff Soft-Skills Training", "Custom Alert Trigger for DGP/ADG Admin", "Feedback Receipt to Resolution Timeline"
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

console.log('All 10 Police Hospitality Modules files generated successfully.');
