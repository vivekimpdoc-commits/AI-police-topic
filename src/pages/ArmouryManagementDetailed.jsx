import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Crosshair, Lock
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Biometric Weapon Issue AI", "Ammunition Inventory Predictor", "RFID Weapon Tracking Bot",
  "Weapon Life-Cycle Analyzer AI", "Routine Maintenance Scheduler", "Firearm Jamming Risk Predictor",
  "Barrel Wear & Tear Analyst", "Ammunition Expiry Alerter", "Used Cartridge Audit AI",
  "Lost/Stolen Weapon Flag AI", "Weapon Custody Chain Ledger", "Gun Powder Moisture Sensor AI",
  "Armoury Access Control AI", "Midnight Stock Reconciliation AI", "Weapon Discharge Justifier AI",
  "Anti-Smuggling Geofence Alert", "Armoury Temp/Humidity Control", "Tear Gas Shelf-Life Tracker",
  "Riot Gear Condition Evaluator", "Bulletproof Vest Expiry AI", "Sniper Rifle Calibration Coach",
  "K9 Explosive Detection Sync AI", "Seized Illegal Arms Cataloger", "Malkhana (Evidence) Arms AI",
  "Weapon Condemnation Assessor", "Scrap & Disposal Protocol AI", "Inter-District Arms Transfer AI",
  "Election Deployment Arms Planner", "VIP Security Weapon Allocator", "Armourer Skill Assessment AI",
  "Mobile Armoury GPS Tracker", "Night Patrol Arms Dispatcher", "Emergency Reserve Issue AI",
  "Weapon Familiarity Grader AI", "Firing Range Ammunition Auditor", "Cross-Border Arms Smuggling Profiler",
  "3D Printed Gun Detection AI", "Drone EMP (Electromagnetic) Arms AI", "Non-Lethal Weapon Assigner",
  "Rubber Bullet Inventory AI", "Water Cannon Maintenance AI", "Vehicle Mounted Weapon Sync",
  "Helicopter Aviation Arms AI", "Marine Patrol Naval Arms Tracker", "Underwater Weapon Rust AI",
  "Body-Cam & Weapon Sync AI", "Holster Quick-Draw Analytics", "Concealed Carry Authorization AI",
  "Civilian Gun License Auditor", "Gun House Inspection Flag AI", "Renewed License Background AI",
  "VIP Guard Ammunition Check", "Cash Van Security Arms AI", "Bank Guard Weapon Audit AI",
  "Weapon Malfunction Legal Defenser", "Ballistics Lab Evidence Sync AI", "Stray Bullet Trajectory AI",
  "Officer Firearm Confiscation AI", "Suspended Officer Arms Return AI", "Retirement Arms Surrender AI"
];

const modules = [
  {
    title: "Inventory & Lifecycle",
    icon: <Database size={20} />,
    items: ["RFID Tracking", "Ammunition Expiry", "Barrel Wear Analysis", "Scrap & Condemnation"]
  },
  {
    title: "Issue & Audit",
    icon: <Crosshair size={20} />,
    items: ["Biometric Issue", "Used Cartridge Audit", "Midnight Reconciliation", "Suspended Officer Return"]
  },
  {
    title: "Specialized Gear",
    icon: <Shield size={20} />,
    items: ["Bulletproof Vest Expiry", "Tear Gas Shelf-Life", "Riot Gear Evaluation", "Non-Lethal Assignment"]
  },
  {
    title: "Security & Custody",
    icon: <Lock size={20} />,
    items: ["Armoury Access Control", "Mobile Armoury GPS", "Seized Arms (Malkhana)", "Stolen Weapon Flags"]
  },
  {
    title: "Civilian & Licensing",
    icon: <FileText size={20} />,
    items: ["Gun License Audits", "Gun House Inspections", "Concealed Carry Checks", "Bank Guard Audits"]
  }
];

const aiFeatures = [
  "Biometric & RFID Zero-Theft Weapon Issue", "Predictive Firearm Jamming & Maintenance", "Automated Used-Cartridge vs Issued Ammo Math",
  "IoT Humidity & Temperature Control in Vaults", "Blockchain Chain of Custody for Seized Arms", "Algorithmic Civilian Gun License Audits"
];

const databases = [
  "Central_Armoury_Ledger", "RFID_Weapon_Telemetry", "Ammo_Expiry_Vault", "Seized_Malkhana_Arms", 
  "Civilian_License_Registry", "Officer_Weapon_Familiarity", "Maintenance_Wear_Logs", "Firing_Range_Audits"
];

const dashboards = [
  "State-wide Arsenal Inventory", "Weapon Maintenance & Expiry", "Live Biometric Issue Log", 
  "Stolen/Missing Arms Heatmap", "Civilian License Backlog", "Seized Illegal Arms Vault"
];

const apis = [
  "NDAL (National Database of Arms Licenses)", "IoT RFID Scanner Gateway", "Biometric Access Control API", 
  "CCTNS Malkhana Sync", "Forensic Ballistics API", "Weather/Humidity Sensor Webhooks"
];

const reports = [
  "Daily Midnight Stock Reconciliation", "Ammo Consumption vs Discharge Log", "Upcoming Expiry (Tear Gas/Ammo)", 
  "Condemnation & Scrap Audit", "Stolen Weapon Alert Dossier", "Armourer Certification Status"
];

const security = [
  "Dual-Biometric Armoury Access", "Immutable Blockchain Issue Logs", "GPS Geofenced Mobile Vaults", 
  "Zero-Trust Malkhana Entry", "Anti-Tamper IoT Sensors", "Automated Lockdown on Mismatch"
];

const futureScope = [
  "Smart Guns with Biometric Trigger Locks", "Drone-based Emergency Ammo Resupply", "AI Trajectory Reconstruction via Bodycam",
  "Real-time Holster Draw Alerts", "Nano-Tagging of Gunpowder", "Predictive Smuggling Route Mapping"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Armoury Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Arsenal Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Arsenal Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ArmouryManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Crosshair className="inline-icon" size={28} /> Armoury Management AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Armoury Management AI</strong> completely secures the issuance, lifecycle, and tracking of lethal and non-lethal state weaponry. By replacing manual registers with RFID, biometrics, and IoT sensors, it guarantees zero theft, exact ammunition reconciliation, and prevents the issuance of expired tear gas or degraded bulletproof vests.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Lock className="inline-icon" color="#3b82f6" /> Biometric Issue & Audit</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Weapons are issued exclusively via dual-biometric authentication. The AI automatically reconciles midnight stocks and strictly audits used cartridges against issued ammunition.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Lifecycle & Expiry</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Predicts barrel wear-and-tear based on firing range logs. Issues alerts months before bulletproof vests degrade or tear gas shells expire.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Malkhana & Seizures</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Maintains an immutable blockchain ledger for illegal weapons seized from criminals, preventing evidence tampering or weapons leaking back into the black market.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#ef4444" /> Civilian Licensing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-checks civilian gun license applications against national criminal databases (NDAL) and schedules automated inspections for private gun houses and bank guards.</p>
              </div>
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
                    <span key={j} className="tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="features-grid">
            {aiFeatures.map((feature, i) => (
              <div key={i} className="premium-feature-card">
                <Cpu className="feature-icon" color="#06b6d4" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="architecture-panel premium-module-panel">
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Data Ledgers</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> Integration APIs</h3>
            <div className="tags-container">
              {apis.map((api, i) => <span key={i} className="cyber-tag highlight-green">{api}</span>)}
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="reports-panel premium-module-panel">
            <div className="split-section">
              <div className="report-list">
                <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" /> Live Dashboards</h3>
                <ul>
                  {dashboards.map((dash, i) => (
                    <li key={i}><CheckCircle size={16} color="#f59e0b" /> {dash}</li>
                  ))}
                </ul>
              </div>
              <div className="report-list">
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Audit Reports</h3>
                <ul>
                  {reports.map((rep, i) => (
                    <li key={i}><FileText size={16} color="#3b82f6" /> {rep}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="security-panel premium-module-panel">
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Arsenal Security</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {security.map((sec, i) => <span key={i} className="cyber-tag highlight-red">{sec}</span>)}
            </div>
            
            <h3 style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}><Rocket className="inline-icon" /> Future Roadmap</h3>
            <div className="tags-container">
              {futureScope.map((scope, i) => <span key={i} className="cyber-tag highlight-purple">{scope}</span>)}
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
            <Crosshair size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">ARMOURY MANAGEMENT <span>EXPERT AI</span></h1>
            <p className="cyber-subtitle">RFID Weapon Issue, Ammunition Audits & Predictive Maintenance</p>
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
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="hrms-content-area">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ArmouryManagementDetailed;
