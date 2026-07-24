const fs = require('fs');
const path = require('path');

const templates = [
  {
    filename: 'WeaponIssueDetailed.jsx',
    title: 'WEAPON ISSUE &',
    spanTitle: 'RETURN',
    subtitle: 'AI Biometric Issue, RFID Tracking & Automated Returns',
    desc: 'digitizes the quartermaster operations. By integrating Biometric Iris Scanners with RFID-enabled weapon racks, the AI ensures zero unauthorized access and tracks every single firearm deployment in real-time across the state.',
    iconMain: 'Crosshair',
    aiExperts: [
      "Biometric Checkout Bot", "RFID Triangulation AI", "Automated Return Reminder", 
      "Missing Firearm Alert Bot", "Unauthorized Access Sentinel", "Shift-Weapon Sync AI", 
      "Liveness Detection Modeler", "Iris Matching Algorithm", "Duty Roster Validation AI",
      "Weapon Deployment Heatmap AI", "Emergency Lockdown Enforcer"
    ],
    features: [
      "AI Liveness Detection for Fingerprints/Iris", "Real-time RFID Gateway Tracking", "Automated Discrepancy Alerts",
      "Integration with HRMS Duty Rosters", "Geo-Fencing for HQ Weapons", "Predictive Deployment Analytics",
      "Automated Disciplinary Flagging for Late Returns", "Digital Two-Man Rule Enforcement"
    ],
    databases: [
      "RFID_Firearm_Ledger", "Biometric_Access_Logs", "Duty_Roster_Sync_DB", "Missing_Asset_Telemetry", 
      "Weapon_Condition_History", "GeoFence_Alert_Records", "Checkout_Timestamp_DB", "Shift_Commander_Approvals", 
      "Armoury_Visitor_Logs", "Weapon_Tag_Registry"
    ],
    dashboards: [
      "Live Weapon Deployment Map", "Missing/Overdue Firearms", "Officer Checkout Frequencies", 
      "Unauthorized Access Attempts", "RFID Gateway Health", "Armoury Footfall Analytics"
    ],
    apis: [
      "State HRMS (Officer DB)", "Central Firearm Registry", "IoT RFID Antennas", "Iris Scanner SDKs",
      "HQ Geo-Fencing System", "Police Comms (SMS Alerts)"
    ],
    reports: [
      "Daily Weapon Audit Reconciliation", "Overdue Firearm Disciplinary Report", "Weekly Shift Checkout Patterns", 
      "Biometric Scanner Failure Logs", "RFID Tag Battery Status", "Missing Weapon Incident Report"
    ],
    security: [
      "AES-256 Encrypted Biometrics", "Air-Gapped RFID Local Servers", "Anti-Tailgating Sensors", 
      "Hardware Security Modules (HSM)", "Multi-Factor Authentication", "Blockchain Issue Ledger",
      "Tamper-proof RFID Tags", "Automated Vault Lockdown API"
    ],
    futureScope: [
      "Smart-Guns (Biometric Triggers)", "Drone-based Weapon Retrieval", "AI Holographic Firing Ranges",
      "Nano-tracker Embedding", "Blockchain Cross-State Registry", "Robotic Armoury Arms"
    ],
    modules: [
      { title: "Biometric Verification", icon: "Fingerprint", items: ["Iris Scanning", "Fingerprint Validation", "Liveness Detection", "Face Match"] },
      { title: "RFID Tracking", icon: "Radio", items: ["Live Gateway Scans", "Indoor Triangulation", "Tamper Alerts", "Exit Geo-fencing"] },
      { title: "Automated Returns", icon: "RotateCcw", items: ["SMS Reminders", "Overdue Flagging", "Condition Assessment", "Shift-End Sync"] },
      { title: "Security Protocols", icon: "ShieldAlert", items: ["Two-Man Rule", "Vault Lockdown", "Anti-Tailgating", "CCTV Sync"] },
      { title: "Audit & Compliance", icon: "FileCheck", items: ["Blockchain Ledger", "Daily Reconciliation", "Missing Asset DB", "HRMS Sync"] }
    ]
  },
  {
    filename: 'AmmunitionDetailed.jsx',
    title: 'AMMUNITION',
    spanTitle: 'ANALYTICS',
    subtitle: 'Predictive Burn-Rates, Batch Expiry & Live Audits',
    desc: 'monitors the entire lifecycle of ammunition. From the moment a bullet batch arrives at the depot to the moment it is fired, the AI tracks usage patterns, predicts shortages, and strictly audits live vs blank round consumption.',
    iconMain: 'PieChart',
    aiExperts: [
      "Ammunition Burn-Rate Forecaster", "Batch Expiry Predictor", "Live vs Blank Auditor", 
      "Missing Ammo Alert Bot", "Firing Range Sync AI", "Depot Replenishment AI", 
      "Explosive Humidity Monitor", "Corrosion Risk Modeler", "Officer Consumption Analytics",
      "Strategic Reserve Calculator", "Ballistic Lot Tracking AI"
    ],
    features: [
      "AI Predictive Modeling for Ammo Depletion", "Automated Batch Expiry Warnings", "Firing Range RFID Sync",
      "Computer Vision Counting of Returned Casings", "Live Ammo Count per Officer Dashboard", "Temperature/Humidity Analytics",
      "Automated Requisition Generation", "Ammunition Cartel Diversion Detection"
    ],
    databases: [
      "Ammunition_Batch_Vault", "Officer_Firing_Logs", "Spent_Casing_Ledger", "Depot_Climate_DB", 
      "Procurement_Pipeline_DB", "Live_Round_Audits", "Blank_Round_Usage", "Expiry_Prediction_Models", 
      "Strategic_Reserves", "Lot_Number_Registry"
    ],
    dashboards: [
      "Live Ammunition Reserves", "Depletion Rate Forecast", "Expiring Batch Alerts", 
      "Firing Range Consumption", "Officer Ammo Allocation", "Missing Round Discrepancies"
    ],
    apis: [
      "National Ballistics DB", "Firing Range Scoring Systems", "Depot HVAC Sensors", "Quartermaster ERP",
      "Ordnance Factory Supply Chain", "State Police HRMS"
    ],
    reports: [
      "Monthly Ammunition Consumption", "Expiring Batch Destruction Log", "Spent Casing Reconciliation", 
      "Top Consuming Officers", "Strategic Reserve Deficits", "Firing Range Qualification Ammo"
    ],
    security: [
      "Strict Batch Number Tracking", "Dual-Approval for Live Rounds", "CCTV Weighing Scale Sync", 
      "Climate Control Fail-safes", "Encrypted Procurement Comms", "Tamper-Evident Seals Registry",
      "Auditor Biometric Sign-off", "Automated Diversion Flagging"
    ],
    futureScope: [
      "Micro-stamped Ammunition", "Laser-guided Smart Bullets", "Drone Ammo Resupply",
      "AI Robotic Counting Arms", "Quantum Supply Chain Logs", "Self-Destructing Blank Rounds"
    ],
    modules: [
      { title: "Batch Management", icon: "Package", items: ["Lot Tracking", "Expiry Prediction", "Storage Climate", "Batch Recalls"] },
      { title: "Consumption Analytics", icon: "TrendingUp", items: ["Burn-Rate Modeling", "Officer Usage", "Firing Range Logs", "Deficit Forecast"] },
      { title: "Live vs Blank Audits", icon: "CheckSquare", items: ["Casing Counts", "Weight Validation", "Discrepancy Alerts", "Visual Verification"] },
      { title: "Strategic Reserves", icon: "Database", items: ["Minimum Thresholds", "Auto-Requisition", "Crisis Allocation", "Depot Distribution"] },
      { title: "Security & Tracking", icon: "Lock", items: ["Diversion Detection", "Tamper Seals", "Biometric Audits", "CCTV Integration"] }
    ]
  },
  {
    filename: 'WeaponMaintenanceDetailed.jsx',
    title: 'WEAPON',
    spanTitle: 'MAINTENANCE',
    subtitle: 'Jamming Probability Modeler & Barrel Cleaning AI',
    desc: 'ensures firearms never fail in the line of duty. By tracking the number of rounds fired, deployment conditions, and historical fault data, the AI predicts exactly when a weapon needs cleaning, spring replacement, or recalibration.',
    iconMain: 'Activity',
    aiExperts: [
      "Jamming Probability Modeler", "Barrel Wear & Tear AI", "Spring Tension Predictor", 
      "Maintenance Scheduler Bot", "Spare Parts Procurement AI", "Armourer Skill Matcher", 
      "Rust & Corrosion Forecaster", "Recoil Spring Degradation AI", "Weapon Lifecycle Analytics",
      "Acoustic Fault Detection Bot", "Firing Pin Integrity AI"
    ],
    features: [
      "AI Usage-Based Maintenance Alerts", "Acoustic Analysis of Firing Mechanisms", "Computer Vision Rust Detection",
      "Automated Spare Parts Requisition", "Predictive Jamming Algorithms", "Armourer Digital Worklogs",
      "Weapon End-of-Life Prediction", "Environmental Wear Adjustments (Dust/Humidity)"
    ],
    databases: [
      "Weapon_Maintenance_History", "Round_Count_Ledger", "Spare_Parts_Inventory", "Armourer_Worklogs", 
      "Jamming_Incident_DB", "Acoustic_Firing_Signatures", "Corrosion_Telemetry", "Weapon_Lifespan_Models", 
      "Cleaning_Solvent_Stock", "Fault_Analytics_DB"
    ],
    dashboards: [
      "Overdue Maintenance Alerts", "Weapon Health Heatmap", "Spare Parts Depletion", 
      "Jamming Incident Analytics", "Armourer Efficiency Scores", "End-of-Life Weapon Forecast"
    ],
    apis: [
      "Quartermaster ERP", "Firing Range Scoring Sync", "Acoustic Range Sensors", "Armourer Biometrics",
      "Ordnance Factory Spares", "State Police Equipment DB"
    ],
    reports: [
      "Monthly Maintenance Compliance", "High-Risk Weapon Jamming Report", "Spare Parts Consumption", 
      "Armourer Productivity Audit", "Weapon Replacement Forecast", "Corrosion Impact Study"
    ],
    security: [
      "Digital Armourer Sign-offs", "Blockchain Maintenance Ledger", "Part Serial Number Tracking", 
      "CCTV Bench Monitoring", "Tool Crib Access Control", "Encrypted Acoustic Data",
      "Automated Disciplinary Flagging for Skipped Maintenance", "Air-Gapped Diagnostics"
    ],
    futureScope: [
      "Self-Cleaning Nano-Coatings", "IoT Smart Rails", "AI Robotic Armourers",
      "Real-time Barrel Temp Sensors", "3D Printed Spare Parts", "Holographic Repair Guides"
    ],
    modules: [
      { title: "Usage Tracking", icon: "Target", items: ["Round Counting", "Deployment Hours", "Environmental Exposure", "Recoil Logging"] },
      { title: "Predictive Maintenance", icon: "Wrench", items: ["Jamming Forecast", "Spring Wear", "Barrel Cleaning", "End-of-Life Alerts"] },
      { title: "Spare Parts Inventory", icon: "Box", items: ["Auto-Requisition", "Consumption Rates", "Supplier Lead Times", "Stock Alerts"] },
      { title: "Armourer Operations", icon: "Users", items: ["Workload Balancing", "Digital Worklogs", "Skill Matching", "Bench CCTV Sync"] },
      { title: "Diagnostics & Testing", icon: "Stethoscope", items: ["Acoustic Signatures", "Visual Rust Scans", "Tension Testing", "Firing Pin Checks"] }
    ]
  },
  {
    filename: 'BulletproofJacketDetailed.jsx',
    title: 'BULLETPROOF',
    spanTitle: 'JACKET INVENTORY',
    subtitle: 'Kevlar Integrity Sync & RFID Lifecycle Tracking',
    desc: 'manages the distribution and health of body armor. Kevlar degrades over time and with exposure to moisture or UV light. This AI tracks the exact age, usage conditions, and ballistic integrity of every jacket to ensure officer safety.',
    iconMain: 'Shield',
    aiExperts: [
      "Kevlar Degradation Modeler", "UV/Moisture Exposure AI", "RFID Lifecycle Tracker", 
      "Damage Assessment Bot", "Auto-Replenishment AI", "Size/Fit Optimization AI", 
      "Expiration Notifier Bot", "Ballistic Plate Integrity Scanner", "Cleaning Schedule Enforcer",
      "Asset Distribution Modeler", "Recalled Batch Alert Bot"
    ],
    features: [
      "AI Predictive Degradation Modeling", "RFID Gate Tracking for Issued Armor", "Computer Vision for Fabric Tears",
      "Automated Expiry Replenishment", "Officer Sizing/Fit Analytics", "Environmental Exposure Logging",
      "Digital Two-Man Audit for Destruction", "Integration with Ballistic Testing Labs"
    ],
    databases: [
      "Jacket_RFID_Ledger", "Kevlar_Degradation_Models", "Officer_Sizing_DB", "Environmental_Exposure_Logs", 
      "Damage_Incident_Reports", "Ballistic_Plate_Integrity", "Expiry_Timeline_DB", "Replenishment_Pipeline", 
      "Cleaning_Logs", "Destruction_Certificates"
    ],
    dashboards: [
      "Live Armor Distribution", "Expiring Jacket Alerts", "Damage/Tear Heatmap", 
      "Size Shortage Predictor", "Environmental Risk Factors", "Replenishment Pipeline"
    ],
    apis: [
      "Quartermaster ERP", "State HRMS (Officer Sizes)", "RFID Wash/Clean Gateways", "Ballistic Lab Results",
      "Supplier Procurement DB", "Weather/Climate Sensors (UV)"
    ],
    reports: [
      "Annual Jacket Expiry Audit", "Damage and Replacement Costs", "Officer Sizing Deficits", 
      "Supplier Defect Analytics", "Kevlar Degradation Study", "Destruction Compliance Report"
    ],
    security: [
      "Tamper-proof RFID Sewing", "Blockchain Destruction Logs", "Strict Batch Recalls", 
      "Biometric Checkout", "Auditor Digital Signatures", "CCTV Storage Sync",
      "Encrypted Fitment Data", "Automated Hoarding Alerts"
    ],
    futureScope: [
      "Graphene Body Armor", "Smart Fabric Vital Sensors", "Self-healing Polymers",
      "Drone Battlefield Resupply", "Liquid Armor Upgrades", "Real-time Impact Telemetry"
    ],
    modules: [
      { title: "Lifecycle & Expiry", icon: "Clock", items: ["Age Tracking", "Degradation Models", "Auto-Replenishment", "Safe Destruction"] },
      { title: "Integrity Tracking", icon: "Activity", items: ["UV Exposure", "Moisture Logs", "Tear Detection", "Plate Scanning"] },
      { title: "Distribution & Fit", icon: "Users", items: ["Size Matching", "RFID Checkout", "Unit Allocation", "Deficit Prediction"] },
      { title: "Maintenance & Care", icon: "Droplet", items: ["Cleaning Schedules", "Wash Gateways", "Storage Climate", "Repair Logs"] },
      { title: "Audit & Procurement", icon: "ClipboardCheck", items: ["Batch Defects", "Supplier SLAs", "Budget Forecasting", "Compliance Checks"] }
    ]
  },
  {
    filename: 'HelmetInventoryDetailed.jsx',
    title: 'HELMET',
    spanTitle: 'INVENTORY',
    subtitle: 'Visor Micro-crack Detection & Damage Replacements',
    desc: 'specializes in the tracking and maintenance of Riot and Ballistic helmets. Using computer vision, it scans returned helmets for structural weaknesses or micro-cracks that would otherwise go unnoticed, preventing fatal failures in the field.',
    iconMain: 'ShieldAlert',
    aiExperts: [
      "Visor Micro-crack Scanner AI", "Strapping Integrity Bot", "Ballistic Helmet Lifecycle AI", 
      "Damage Replacement Scheduler", "Helmet Sizing Predictor", "Riot Squad Distribution AI", 
      "Cushion Degradation Modeler", "Impact Telemetry Analyzer", "Batch Defect Identifier",
      "Cleaning Audit Bot", "Inventory Deficit Forecaster"
    ],
    features: [
      "AI Computer Vision Micro-crack Detection", "Automated Impact Logging", "Officer Head-Sizing Analytics",
      "RFID Tracking of Specialized Ballistic Helmets", "Predictive Inner-cushion Replacement", "Visor Scratch/Visibility Assessment",
      "Automated Procurement Requisitions", "Batch Defect Flagging"
    ],
    databases: [
      "Helmet_RFID_Registry", "Visor_Damage_Logs", "Impact_Telemetry_DB", "Cushion_Degradation_Models", 
      "Officer_Sizing_DB", "Riot_Deployment_History", "Procurement_Pipeline", "Cleaning_Sanitation_Logs", 
      "Defect_Analytics_DB", "Ballistic_Rating_Ledger"
    ],
    dashboards: [
      "Helmet Readiness Score", "Micro-crack Detection Alerts", "Visor Visibility Heatmap", 
      "Size Availability", "Riot Unit Deployment Sync", "Damage vs Supplier Analytics"
    ],
    apis: [
      "Computer Vision Kiosks", "Quartermaster ERP", "State HRMS (Sizing)", "Riot Unit Duty Rosters",
      "Supplier Defect Portals", "Ballistic Testing Labs"
    ],
    reports: [
      "Monthly Helmet Damage Audit", "Visor Scratch Visibility Study", "Cushion Replacement Costs", 
      "Supplier Defect Rates", "Riot Unit Readiness Report", "Annual Asset Write-offs"
    ],
    security: [
      "Tamper-Evident RFID Tags", "Biometric Kiosk Scans", "Blockchain Damage Logs", 
      "Air-Gapped CV Scanners", "Encrypted Sizing Data", "Dual-Audit for Write-offs",
      "Strict Storage Access", "CCTV Armoury Integration"
    ],
    futureScope: [
      "AR Heads-Up Displays (HUD)", "Built-in Neural Sensors", "IoT Impact Accelerometers",
      "Self-tinting Visors", "Drone Helmet Delivery", "3D Printed Custom Fits"
    ],
    modules: [
      { title: "Damage Detection", icon: "Scan", items: ["Visor Scans", "Micro-crack AI", "Scratch Visibility", "Shell Integrity"] },
      { title: "Fit & Ergonomics", icon: "UserCheck", items: ["Head Sizing", "Cushion Wear", "Strap Tension", "Custom Allocations"] },
      { title: "Lifecycle Management", icon: "RefreshCw", items: ["Age Tracking", "Ballistic Rating", "Auto-Replenishment", "Safe Disposal"] },
      { title: "Deployment Sync", icon: "Truck", items: ["Riot Unit Rosters", "Mass Issue Flow", "Return Tracking", "Deficit Alerts"] },
      { title: "Audit & Hygiene", icon: "Wind", items: ["Sanitation Logs", "Supplier Defects", "Budget Sync", "Inventory Reconciliation"] }
    ]
  },
  {
    filename: 'RiotGearDetailed.jsx',
    title: 'RIOT GEAR',
    spanTitle: 'TRACKING',
    subtitle: 'Mass Deployment Sync & Rapid Gear Recall',
    desc: 'manages non-lethal protective equipment including polycarbonate shields, batons, shin guards, and full body protectors. It optimizes mass deployments during civil unrest, ensuring squads are fully equipped within minutes.',
    iconMain: 'ShieldAlert',
    aiExperts: [
      "Mass Deployment Optimizer", "Shield Integrity Scanner", "Baton Distribution Log AI", 
      "Rapid Recall Coordinator", "Squad Readiness Modeler", "Gear Shortage Predictor", 
      "Polycarbonate Fatigue AI", "Kit Assembly Bot", "Damage Liability Assessor",
      "Vehicle Loadout Sync AI", "Emergency Requisition Bot"
    ],
    features: [
      "AI Predictive Squad Loadouts", "Mass RFID Scan Checkouts", "Computer Vision Shield Integrity",
      "Automated Rapid Recall Broadcasts", "Vehicle-to-Gear Synchronization", "Damage Assessment Algorithms",
      "Dynamic Shortage Re-routing", "Inter-District Resource Sharing"
    ],
    databases: [
      "Riot_Gear_Inventory", "Shield_Integrity_Logs", "Baton_Distribution_DB", "Squad_Loadout_Templates", 
      "Mass_Checkout_Logs", "Vehicle_Assignment_Sync", "Damage_Liability_DB", "Polycarbonate_Fatigue_Models", 
      "Emergency_Requisitions", "Inter_District_Transfers"
    ],
    dashboards: [
      "Live Riot Squad Readiness", "Mass Checkout Timers", "Shield Damage Heatmap", 
      "Inter-District Resource Map", "Vehicle Loadout Status", "Gear Deficit Alerts"
    ],
    apis: [
      "Command Center Dispatch", "Fleet Management (Vehicles)", "Mass RFID Gateways", "State Police HRMS",
      "Quartermaster ERP", "Emergency Broadcast SMS"
    ],
    reports: [
      "Post-Riot Gear Damage Audit", "Squad Checkout Efficiency", "Resource Sharing Logistics", 
      "Polycarbonate Lifespan Study", "Baton Loss/Breakage Report", "Vehicle Loadout Compliance"
    ],
    security: [
      "High-Throughput Encrypted RFID", "CCTV Mass Scan Verification", "Biometric Squad Leader Sign-off", 
      "Blockchain Damage/Liability Ledger", "Anti-Hoarding Algorithms", "Tamper-Evident Storage",
      "Air-Gapped Mobile Scanners", "Dual-Factor Recall Auth"
    ],
    futureScope: [
      "Exoskeleton Integration", "Smart Batons (Impact Sensors)", "Electrified Shield Sync",
      "Drone-Assisted Drop Pods", "Holographic Squad Training", "Self-Deploying Barricades"
    ],
    modules: [
      { title: "Mass Deployment", icon: "Zap", items: ["Rapid RFID Scans", "Squad Loadouts", "Vehicle Sync", "Checkout Timers"] },
      { title: "Integrity & Damage", icon: "AlertTriangle", items: ["Shield Scans", "Polycarbonate Fatigue", "Baton Breakage", "Liability Assessment"] },
      { title: "Resource Sharing", icon: "Share2", items: ["Inter-District Sync", "Shortage Re-routing", "Emergency Requisitions", "Logistics Map"] },
      { title: "Kit Management", icon: "Briefcase", items: ["Pre-assembled Kits", "Component Tracking", "Sanitation Logs", "Missing Item Alerts"] },
      { title: "Command Sync", icon: "Radio", items: ["Rapid Recall", "Dispatch Integration", "Readiness Scoring", "Broadcast Alerts"] }
    ]
  },
  {
    filename: 'TearGasDetailed.jsx',
    title: 'TEAR GAS',
    spanTitle: 'INVENTORY',
    subtitle: 'Chemical Expiry Notifier & Safe Storage Audits',
    desc: 'strictly monitors chemical munitions. Tear gas degrades into dangerous toxins past expiry or under wrong temperatures. This AI ensures climate-controlled storage, strict expiry enforcement, and logs every shell fired for human rights compliance.',
    iconMain: 'Package',
    aiExperts: [
      "Chemical Expiry Notifier", "Temperature/Humidity AI", "Safe Storage Auditor", 
      "Munition Burn-Rate Modeler", "Batch Recall Coordinator", "Toxicity Degradation AI", 
      "Usage Compliance Tracker", "Disposal Scheduler Bot", "Climate Sensor Triangulator",
      "Strategic Stockpile Forecaster", "Ventilation Health AI"
    ],
    features: [
      "AI Predictive Toxicity Modeling", "Automated Expiry Lockdown", "IoT Climate Sensor Integration",
      "Human Rights Usage Auditing", "Strict Batch Isolation Protocols", "Automated Safe Disposal Scheduling",
      "Depot Ventilation Monitoring", "Rapid Chemical Recall Broadcasts"
    ],
    databases: [
      "Chemical_Munition_Ledger", "Expiry_Toxicity_Models", "Depot_Climate_Telemetry", "Usage_Compliance_DB", 
      "Batch_Recall_Logs", "Disposal_Certificates", "Ventilation_Health_DB", "Strategic_Stockpile_Reserves", 
      "Human_Rights_Audits", "Procurement_Pipeline"
    ],
    dashboards: [
      "Live Storage Climate Health", "Expiring Batch Countdown", "Usage vs Compliance Map", 
      "Ventilation System Status", "Stockpile Readiness Score", "Safe Disposal Queue"
    ],
    apis: [
      "IoT Climate Sensors (Depots)", "Quartermaster ERP", "Human Rights Commission Portal", "Hazardous Waste Disposal SLAs",
      "Depot HVAC Control", "National Chemical Registry"
    ],
    reports: [
      "Annual Chemical Degradation Audit", "Usage Compliance & Justification", "Hazardous Disposal Certificates", 
      "Climate Control Failure Logs", "Supplier Batch Defect Rates", "Strategic Stockpile Deficits"
    ],
    security: [
      "Strict Temperature/Humidity Alarms", "Biometric Vault Access", "CCTV Chemical Weighing", 
      "Blockchain Disposal Logs", "Dual-Approval for Checkouts", "Hazmat Protocol Enforcement",
      "Encrypted IoT Telemetry", "Automated Exhaust Activation"
    ],
    futureScope: [
      "Drone Tear Gas Deployment", "Smart-Shells (Usage Telemetry)", "Bio-degradable Munitions",
      "Targeted Drone Dispersion", "AI Crowd-Wind Vectoring", "Nano-Toxin Neutralizers"
    ],
    modules: [
      { title: "Chemical Lifecycles", icon: "Hourglass", items: ["Expiry Tracking", "Toxicity Models", "Batch Lockdown", "Safe Disposal"] },
      { title: "Climate Storage", icon: "Thermometer", items: ["Temp/Humidity Alerts", "Ventilation Sync", "HVAC Controls", "Sensor Triangulation"] },
      { title: "Usage & Compliance", icon: "FileText", items: ["Human Rights Audit", "Justification Logs", "Firing Geolocation", "Discrepancy Flags"] },
      { title: "Stockpile Logistics", icon: "Database", items: ["Strategic Reserves", "Auto-Replenishment", "Supplier SLAs", "Batch Recalls"] },
      { title: "Hazmat Security", icon: "AlertOctagon", items: ["Biometric Vaults", "Exhaust Automation", "CCTV Integration", "Dual-Approval"] }
    ]
  },
  {
    filename: 'ExplosiveStorageDetailed.jsx',
    title: 'EXPLOSIVE',
    spanTitle: 'STORAGE',
    subtitle: 'Air-Gapped Vault Sensors & Vibration Alerts',
    desc: 'is the highest-security module for ordnance depots. Managing C4, detonators, and confiscated explosives, the AI uses vibration sensors, thermal imaging, and air-gapped networks to prevent catastrophic accidents or theft.',
    iconMain: 'Network',
    aiExperts: [
      "Vibration Alert AI", "Thermal Signature Bot", "Air-Gapped Vault Sentinel", 
      "Chemical Degeneration AI", "Detonator Isolation Tracker", "Seismic Anomaly Detector", 
      "Anti-Static Environment AI", "Confiscated Ordnance Auditor", "Blast Radius Modeler",
      "Evacuation Protocol Bot", "Electromagnetic Pulse (EMP) Monitor"
    ],
    features: [
      "AI Seismic & Vibration Analysis", "Thermal/Infrared Anomaly Detection", "Air-Gapped Security Architecture",
      "Strict Detonator/Charge Isolation Enforcer", "Predictive Blast Radius Modeling", "Anti-Static Humidity Control",
      "Automated Depot Lockdown", "Confiscated IED Tracking"
    ],
    databases: [
      "Explosive_Inventory_Vault", "Seismic_Vibration_Telemetry", "Thermal_Imaging_Logs", "Detonator_Isolation_DB", 
      "Confiscated_IED_Registry", "Blast_Radius_Simulations", "AntiStatic_Climate_DB", "Vault_Access_Ledger", 
      "Degeneration_Chemistry_Models", "Evacuation_Routes"
    ],
    dashboards: [
      "Vault Seismic Health", "Thermal Anomaly Alerts", "Isolation Protocol Status", 
      "Confiscated Explosives Queue", "Anti-Static Climate", "Blast Radius Projections"
    ],
    apis: [
      "Seismic/Vibration IoT", "Thermal CCTV Cameras", "Bomb Disposal Squad (BDS) Dispatch", "Depot HVAC (Anti-Static)",
      "National Ordnance DB", "Emergency Siren Systems"
    ],
    reports: [
      "Monthly Seismic Stability Audit", "Thermal Fluctuation Logs", "Isolation Compliance Report", 
      "Confiscated IED Disposal Certificates", "Vault Security Penetration Test", "Climate Control Efficacy"
    ],
    security: [
      "100% Air-Gapped Local Networks", "EMP-Shielded Architecture", "Multi-Factor Biometrics + Weight Sensors", 
      "Blockchain Confiscation Ledger", "Automated Foam Suppression Integration", "CCTV Object/Motion Recognition",
      "Strict Radio Silence Zones", "Dual-Key Encryption"
    ],
    futureScope: [
      "Quantum Sensor Detection", "Robotic Bomb Handlers", "Laser-Cooling Storage Pods",
      "AI Molecular Analyzers", "Drone-based Evacuation Over-watch", "Subterranean Mag-Lev Storage"
    ],
    modules: [
      { title: "Seismic & Thermal", icon: "Activity", items: ["Vibration Alerts", "Thermal Imaging", "Anomaly Detection", "Blast Modeling"] },
      { title: "Isolation Protocols", icon: "Maximize", items: ["Detonator Separation", "Anti-Static Climate", "Radio Silence", "Charge Tracking"] },
      { title: "Confiscated Ordnance", icon: "Archive", items: ["IED Registry", "Safe Disposal", "BDS Dispatch", "Evidence Logging"] },
      { title: "Air-Gapped Security", icon: "Shield", items: ["Offline Networks", "Biometric Weight", "EMP Shielding", "CCTV Integration"] },
      { title: "Emergency Response", icon: "Siren", items: ["Automated Lockdown", "Evacuation Routing", "Foam Suppression", "Siren Broadcast"] }
    ]
  },
  {
    filename: 'EquipmentCalibrationDetailed.jsx',
    title: 'EQUIPMENT',
    spanTitle: 'CALIBRATION',
    subtitle: 'Sniper Scope AI, Radar Guns & Ballistic Telemetry',
    desc: 'manages the precision tuning of specialized gear. From sniper rifle scopes to traffic radar guns and breathalyzers, this AI ensures every piece of technical equipment is mathematically calibrated to legally defensible standards.',
    iconMain: 'Cpu',
    aiExperts: [
      "Sniper Scope Calibration AI", "Radar Gun Tuner Bot", "Breathalyzer Accuracy Tracker", 
      "Laser Sight Alignment AI", "Ballistic Telemetry Modeler", "Legal Compliance Auditor", 
      "Drift Degradation Predictor", "Acoustic Sensor Calibrator", "Optical Clarity Analyzer",
      "Night-Vision Phosphor AI", "Drone Gimbal Stabilizer"
    ],
    features: [
      "AI Predictive Sensor Drift Modeling", "Automated Court-Defensible Calibration Logs", "Sniper Ballistic Telemetry Sync",
      "Optical Scanners for Night-Vision/Scopes", "Radar Gun Doppler Frequency Checks", "Breathalyzer Fuel-Cell Expiry Alerts",
      "Automated Decommissioning of Out-of-Spec Gear", "Integration with Metrology Labs"
    ],
    databases: [
      "Calibration_Master_Ledger", "Sensor_Drift_Telemetry", "Sniper_Ballistic_Profiles", "Radar_Frequency_Logs", 
      "Breathalyzer_FuelCell_DB", "Legal_Compliance_Certificates", "Optical_Clarity_Scans", "NightVision_Phosphor_DB", 
      "Metrology_Lab_Results", "Decommission_Archive"
    ],
    dashboards: [
      "Overdue Calibration Alerts", "Equipment Accuracy Scores", "Sensor Drift Analytics", 
      "Sniper Scope Readiness", "Legal Defensibility Index", "Metrology Lab Pipeline"
    ],
    apis: [
      "National Metrology Standards API", "Court Evidence Management Sync", "Optical Testing Rigs", "Traffic Department Radar DB",
      "Quartermaster ERP", "Supplier Diagnostic Portals"
    ],
    reports: [
      "Monthly Calibration Compliance", "Court-Defensible Accuracy Certificates", "Sensor Drift Degradation Study", 
      "Sniper Unit Ballistic Readiness", "Breathalyzer Failure Rates", "Supplier Defect Analytics"
    ],
    security: [
      "Blockchain Immutable Certificates", "Digital Metrologist Signatures", "Tamper-Evident Digital Seals", 
      "Air-Gapped Testing Rigs", "Encrypted Ballistic Profiles", "Biometric Lab Access",
      "Automated Evidence Flagging (Uncalibrated Use)", "Strict Version Control"
    ],
    futureScope: [
      "Self-Calibrating Smart Scopes", "Quantum Doppler Radars", "AI Optical Restoration",
      "Cloud-based Ballistic Sync", "Drone Laser Metrology", "Neural-Linked Optics"
    ],
    modules: [
      { title: "Precision Optics", icon: "Crosshair", items: ["Sniper Scopes", "Laser Alignment", "Night-Vision Scans", "Optical Clarity"] },
      { title: "Traffic & Sensors", icon: "Wifi", items: ["Radar Doppler Tuning", "Breathalyzer Cells", "Acoustic Sensors", "Drift Prediction"] },
      { title: "Legal Compliance", icon: "Scale", items: ["Defensible Logs", "Immutable Certificates", "Evidence Flagging", "Metrology Sync"] },
      { title: "Lifecycle & Diagnostics", icon: "Stethoscope", items: ["Decommissioning", "Supplier Defects", "Automated Testing", "Usage Telemetry"] },
      { title: "Advanced Ballistics", icon: "Target", items: ["Telemetry Sync", "Profile Matching", "Drone Gimbals", "Recoil Adjustments"] }
    ]
  },
  {
    filename: 'ArmouryInspectionDetailed.jsx',
    title: 'ARMOURY',
    spanTitle: 'INSPECTION',
    subtitle: 'Multi-Factor Entry, Anti-Tailgating & CCTV Recognition',
    desc: 'is the overarching security and audit brain of the quartermaster. It utilizes continuous multi-factor authentication, anti-tailgating sensors, and automated ledger reconciliation to conduct 24/7 autonomous inspections.',
    iconMain: 'CheckCircle',
    aiExperts: [
      "Automated Audit Reconciler", "Anti-Tailgating Sentinel", "CCTV Object Recognition Bot", 
      "Multi-Factor Entry Controller", "Digital Twin Armoury Modeler", "Suspicious Behavior Analyzer", 
      "Inventory Discrepancy Hunter", "Night-Watch Cyber Guard", "Physical Penetration Tester",
      "Visitor Escort Tracker", "Compliance Score Generator"
    ],
    features: [
      "AI Continuous Ledger Reconciliation", "CCTV Weapon Object Detection", "Infrared Anti-Tailgating Corridors",
      "Automated Discrepancy Lockdown", "Digital Twin 3D Inspection Mapping", "Officer Behavior Analytics (Linger Time)",
      "Automated VIP/Auditor Escort Tracking", "Randomized Spot-Check Generation"
    ],
    databases: [
      "Master_Audit_Ledger", "Discrepancy_Incident_DB", "CCTV_Object_Detection_Logs", "Tailgating_Alert_Registry", 
      "Access_Control_Logs", "Behavioral_Analytics_DB", "Spot_Check_History", "Digital_Twin_Mappings", 
      "Visitor_Escort_DB", "Compliance_Scores"
    ],
    dashboards: [
      "Live Armoury Security Score", "Active Discrepancies", "CCTV Object Alerts", 
      "Access Corridor Heatmap", "Spot-Check Compliance", "Digital Twin Status"
    ],
    apis: [
      "IoT Vault Locks", "CCTV Video Analytics Engine", "State HQ Command Center", "RFID Gateway Master Sync",
      "HRMS (Auditor Clearance)", "Emergency Lockdown Sirens"
    ],
    reports: [
      "Zero-Discrepancy Daily Audit", "Unauthorized Access Attempts", "Spot-Check Pass/Fail Rates", 
      "CCTV Behavioral Flag Report", "Visitor Escort Compliance", "Monthly Security Scorecard"
    ],
    security: [
      "Zero-Trust Architecture", "Multi-Factor (Biometric+RFID+PIN)", "Blockchain Audit Hashes", 
      "Dual-Commander Override Keys", "Air-Gapped Core Servers", "Tamper-proof Server Racks",
      "Automated Trap-Door Enclosures", "EMP & Fire Hardening"
    ],
    futureScope: [
      "Drone Indoor Patrols", "Robotic Audit Swarms", "Holographic Perimeter Fences",
      "Quantum Cryptography Vaults", "AI Predictive Penetration Testing", "Laser Tripwire Grids"
    ],
    modules: [
      { title: "Automated Auditing", icon: "FileText", items: ["Ledger Reconciliation", "Spot-Checks", "Discrepancy Hunter", "Blockchain Hashes"] },
      { title: "Access Control", icon: "Key", items: ["Multi-Factor Entry", "Anti-Tailgating", "Zero-Trust", "Trap-Door Enclosures"] },
      { title: "CCTV & Behavior", icon: "Video", items: ["Object Recognition", "Linger Analytics", "Visitor Tracking", "Night-Watch Guard"] },
      { title: "Digital Twin", icon: "Box", items: ["3D Inspection Map", "Heatmaps", "Simulated Penetration", "Sensor Sync"] },
      { title: "Emergency Protocols", icon: "AlertTriangle", items: ["Automated Lockdown", "Siren Integration", "Command Center Sync", "Dual-Override"] }
    ]
  }
];

const templateCode = (data) => `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Crosshair, Package,
  Fingerprint, Radio, RotateCcw, Box, Wrench, Users, Stethoscope, Target, 
  Clock, Droplet, ClipboardCheck, Scan, UserCheck, RefreshCw, Truck, Wind,
  Zap, AlertTriangle, Share2, Briefcase, Hourglass, Thermometer, AlertOctagon,
  Maximize, Archive, Siren, Wifi, Scale, Key, Video
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = ${JSON.stringify(data.aiExperts)};
const aiFeatures = ${JSON.stringify(data.features)};
const databases = ${JSON.stringify(data.databases)};
const dashboards = ${JSON.stringify(data.dashboards)};
const apis = ${JSON.stringify(data.apis)};
const reports = ${JSON.stringify(data.reports)};
const security = ${JSON.stringify(data.security)};
const futureScope = ${JSON.stringify(data.futureScope)};

const modules = [
  ${data.modules.map(m => `{ title: "${m.title}", icon: <${m.icon} size={20} />, items: ${JSON.stringify(m.items)} }`).join(',\n  ')}
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'AI Agents', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Core Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ${data.filename.split('.')[0]} = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <${data.iconMain} className="inline-icon" size={28} /> AI ${data.title} ${data.spanTitle}
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI ${data.title} ${data.spanTitle}</strong> ${data.desc}
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              {modules.slice(0,4).map((mod, i) => (
                <div key={i} className="panel" style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>{mod.icon} {mod.title}</h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Advanced AI algorithms and neural networks power the {mod.title.toLowerCase()} systems, ensuring highly precise and real-time operational efficiency.</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan">
                <Bot className="card-icon" />
                <h4>{expert}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {modules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  {mod.icon}
                  <h3>{mod.title}</h3>
                </div>
                <div className="module-tags">
                  {mod.items.map((item, j) => (
                    <span key={j} className="module-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid">
            {aiFeatures.map((feat, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple">
                <Cpu className="card-icon" />
                <h4>{feat}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel">
                <h3><Database className="inline-icon" color="#06b6d4" /> Database Tables</h3>
                <div className="tag-cloud">
                  {databases.map((db, i) => <span key={i} className="tech-tag">{db}</span>)}
                </div>
              </div>
              <div className="panel">
                <h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3>
                <div className="tag-cloud">
                  {apis.map((api, i) => <span key={i} className="tech-tag tech-tag-alt">{api}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
             <div className="split-section">
              <div className="panel">
                <h3><LayoutDashboard className="inline-icon" color="#3b82f6" /> Dashboards</h3>
                <ul className="premium-list">
                  {dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>)}
                </ul>
              </div>
              <div className="panel">
                <h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3>
                <ul className="premium-list">
                  {reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
             <div className="split-section">
              <div className="panel highlight-red">
                <h3><ShieldAlert className="inline-icon" color="#ef4444" /> Security Protocols</h3>
                <ul className="premium-list">
                  {security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}
                </ul>
              </div>
              <div className="panel highlight-green">
                <h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3>
                <ul className="premium-list">
                  {futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="hrms-detailed-page">
      <div className="hrms-bg-fx"></div>
      <div className="hrms-grid-overlay"></div>
      
      {/* Header */}
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> BACK TO MODULES
        </button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper">
            <${data.iconMain} size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">{data.title} <span>{data.spanTitle}</span></h1>
            <p className="cyber-subtitle">{data.subtitle}</p>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="hrms-layout">
        {/* Sidebar Nav */}
        <nav className="hrms-sidebar">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={\`tab-btn \${activeTab === tab.id ? 'active' : ''}\`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="hrms-content-area">
          <AnimatePresence mode="wait">
            <div key={activeTab}>
              {renderContent()}
            </div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ${data.filename.split('.')[0]};
`;

const dir = 'c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic\\src\\pages';

templates.forEach(t => {
  fs.writeFileSync(path.join(dir, t.filename), templateCode(t));
  console.log('Generated:', t.filename);
});
