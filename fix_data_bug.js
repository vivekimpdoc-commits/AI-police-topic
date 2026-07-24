import fs from 'fs';
import path from 'path';

const templates = [
  {
    filename: 'WeaponIssueDetailed.jsx',
    title: 'WEAPON ISSUE &',
    spanTitle: 'RETURN',
    subtitle: 'AI Biometric Issue, RFID Tracking & Automated Returns',
    desc: 'digitizes the quartermaster operations. By integrating Biometric Iris Scanners with RFID-enabled weapon racks, the AI ensures zero unauthorized access and tracks every single firearm deployment in real-time across the state.'
  },
  {
    filename: 'AmmunitionDetailed.jsx',
    title: 'AMMUNITION',
    spanTitle: 'ANALYTICS',
    subtitle: 'Predictive Burn-Rates, Batch Expiry & Live Audits',
    desc: 'monitors the entire lifecycle of ammunition. From the moment a bullet batch arrives at the depot to the moment it is fired, the AI tracks usage patterns, predicts shortages, and strictly audits live vs blank round consumption.'
  },
  {
    filename: 'WeaponMaintenanceDetailed.jsx',
    title: 'WEAPON',
    spanTitle: 'MAINTENANCE',
    subtitle: 'Jamming Probability Modeler & Barrel Cleaning AI',
    desc: 'ensures firearms never fail in the line of duty. By tracking the number of rounds fired, deployment conditions, and historical fault data, the AI predicts exactly when a weapon needs cleaning, spring replacement, or recalibration.'
  },
  {
    filename: 'BulletproofJacketDetailed.jsx',
    title: 'BULLETPROOF',
    spanTitle: 'JACKET INVENTORY',
    subtitle: 'Kevlar Integrity Sync & RFID Lifecycle Tracking',
    desc: 'manages the distribution and health of body armor. Kevlar degrades over time and with exposure to moisture or UV light. This AI tracks the exact age, usage conditions, and ballistic integrity of every jacket to ensure officer safety.'
  },
  {
    filename: 'HelmetInventoryDetailed.jsx',
    title: 'HELMET',
    spanTitle: 'INVENTORY',
    subtitle: 'Visor Micro-crack Detection & Damage Replacements',
    desc: 'specializes in the tracking and maintenance of Riot and Ballistic helmets. Using computer vision, it scans returned helmets for structural weaknesses or micro-cracks that would otherwise go unnoticed, preventing fatal failures in the field.'
  },
  {
    filename: 'RiotGearDetailed.jsx',
    title: 'RIOT GEAR',
    spanTitle: 'TRACKING',
    subtitle: 'Mass Deployment Sync & Rapid Gear Recall',
    desc: 'manages non-lethal protective equipment including polycarbonate shields, batons, shin guards, and full body protectors. It optimizes mass deployments during civil unrest, ensuring squads are fully equipped within minutes.'
  },
  {
    filename: 'TearGasDetailed.jsx',
    title: 'TEAR GAS',
    spanTitle: 'INVENTORY',
    subtitle: 'Chemical Expiry Notifier & Safe Storage Audits',
    desc: 'strictly monitors chemical munitions. Tear gas degrades into dangerous toxins past expiry or under wrong temperatures. This AI ensures climate-controlled storage, strict expiry enforcement, and logs every shell fired for human rights compliance.'
  },
  {
    filename: 'ExplosiveStorageDetailed.jsx',
    title: 'EXPLOSIVE',
    spanTitle: 'STORAGE',
    subtitle: 'Air-Gapped Vault Sensors & Vibration Alerts',
    desc: 'is the highest-security module for ordnance depots. Managing C4, detonators, and confiscated explosives, the AI uses vibration sensors, thermal imaging, and air-gapped networks to prevent catastrophic accidents or theft.'
  },
  {
    filename: 'EquipmentCalibrationDetailed.jsx',
    title: 'EQUIPMENT',
    spanTitle: 'CALIBRATION',
    subtitle: 'Sniper Scope AI, Radar Guns & Ballistic Telemetry',
    desc: 'manages the precision tuning of specialized gear. From sniper rifle scopes to traffic radar guns and breathalyzers, this AI ensures every piece of technical equipment is mathematically calibrated to legally defensible standards.'
  },
  {
    filename: 'ArmouryInspectionDetailed.jsx',
    title: 'ARMOURY',
    spanTitle: 'INSPECTION',
    subtitle: 'Multi-Factor Entry, Anti-Tailgating & CCTV Recognition',
    desc: 'is the overarching security and audit brain of the quartermaster. It utilizes continuous multi-factor authentication, anti-tailgating sensors, and automated ledger reconciliation to conduct 24/7 autonomous inspections.'
  }
];

const dir = 'c:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\AI topic for html\\\\AI poilc topic\\\\AI-police-topic\\\\src\\\\pages';

templates.forEach(t => {
  const filepath = path.join(dir, t.filename);
  if (fs.existsSync(filepath)) {
    let code = fs.readFileSync(filepath, 'utf8');
    
    code = code.replace(/\{data\.title\}/g, t.title);
    code = code.replace(/\{data\.spanTitle\}/g, t.spanTitle);
    code = code.replace(/\{data\.subtitle\}/g, t.subtitle);
    code = code.replace(/\{data\.desc\}/g, t.desc);
    
    fs.writeFileSync(filepath, code);
    console.log('Fixed', t.filename);
  }
});
