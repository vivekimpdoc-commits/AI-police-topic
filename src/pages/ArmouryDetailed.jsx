import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Crosshair, Package, Navigation
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Weapon RFID Tracker", "Ammunition Forecaster AI", "Armoury Biometric Auth", 
  "Explosive Degeneration Bot", "Riot Gear Inventory Sync", "Ballistic Calibration AI", 
  "Tear Gas Expiry Notifier", "Firearm Maintenance Scheduler", "Missing Weapon Alert Bot",
  "Armoury Audit Reconciler", "Officer Firearm Proficiency AI", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const armouryModules = [
  {
    title: "Weapon Issue & Return",
    icon: <Crosshair size={20} />,
    items: ["Biometric Checkout (Iris/Fingerprint)", "RFID Live Weapon Tracking", "Automated Return Reminders", "Missing Firearm Lockdown"]
  },
  {
    title: "Ammunition & Explosives",
    icon: <Package size={20} />,
    items: ["Live Ammo Count per Officer", "Explosive Storage Temp Monitor", "Batch Expiry Prediction", "Blank vs Live Round Audits"]
  },
  {
    title: "Riot Gear & Protective Armor",
    icon: <Shield size={20} />,
    items: ["Bulletproof Jacket Integrity Sync", "Helmet Inventory Mapping", "Tear Gas Shell Expiry", "Riot Shield Micro-crack Detection"]
  },
  {
    title: "Maintenance & Calibration",
    icon: <Activity size={20} />,
    items: ["Barrel Cleaning Scheduler", "Sniper Scope Calibration AI", "Jamming Probability Modeler", "Spare Parts Procurement"]
  },
  {
    title: "Armoury Security & Access",
    icon: <ShieldAlert size={20} />,
    items: ["Multi-Factor Armoury Entry", "Anti-Tailgating Vault Sensors", "CCTV Object Recognition", "Air-Gapped Vault Networks"]
  }
];

const aiFeatures = [
  "AI Micro-crack Detection in Armor (Computer Vision)", "AI RFID Signal Triangulation (Indoor)", "AI Ammunition Burn-Rate Forecasting",
  "AI Biometric Liveness Detection", "AI Barometric/Thermal Sensor Fusion (Explosives)", "AI Preventive Maintenance Logic",
  "AI Ballistic Lifecycle Tracking", "AI Automated Audit Reconciliation"
];

const databases = [
  "Firearm_RFID_Ledger", "Ammunition_Batch_Vault", "Officer_Proficiency_Scores", "Riot_Gear_Inventory", "Explosive_Telemetry_DB", 
  "Armoury_Access_Logs", "Weapon_Maintenance_History", "Bulletproof_Jacket_Meta", "Missing_Asset_Flags", "Calibration_Matrix"
];

const dashboards = [
  "Live Armoury Inventory (RFID)", "Weapon Deployment Heatmap", "Ammunition Depletion Rate", 
  "Riot Gear Readiness Score", "Explosive Storage Health", "Overdue Weapon Returns"
];

const apis = [
  "State HRMS (Officer Auth)", "Central Firearm Registry Sync", "IoT RFID Gateways", "Smart Climate Sensors (Explosives)",
  "Quartermaster Procurement ERP", "National Ballistics DB"
];

const reports = [
  "Daily Weapon Checkout Audit", "Monthly Ammunition Consumption", "Expiring Riot Gear Report", 
  "Weapon Jamming/Failure Analytics", "Officer Firing Range Qualification", "Armoury Physical Security Audit"
];

const security = [
  "Two-Man Rule (Digital Enforcement)", "Blockchain-backed Issue Logs", "Air-Gapped RFID Local Servers", 
  "EMP-Shielded Vaults", "Biometric Vault Locks", 
  "Automated Geofence Alerts (Weapons leaving HQ)", "Hardware Security Modules (HSM)", "Strict API Rate Limiting"
];

const futureScope = [
  "Smart-Guns (Biometric Trigger Locks)", "Drone-based Ammo Resupply", "AI Holographic Firing Ranges",
  "Self-cleaning Firearm Nano-coatings", "Robotic Armoury Retrieval Arms", "Real-time Bullet Trajectory Sensors"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Armoury Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Gear Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Quartermaster Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ArmouryDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Crosshair className="inline-icon" size={28} /> AI Arms, Equipment & Armoury
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Armoury Management</strong> digitizes the police quartermaster. Using RFID tags and Biometrics, the AI tracks every single weapon, bullet, and bulletproof jacket in real-time, completely eliminating the risk of lost firearms.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Crosshair className="inline-icon" color="#3b82f6" /> Biometric Weapon Issue</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Replaces paper registers. An officer scans their iris; the AI verifies their duty roster and training qualifications before automatically unlocking the rack to issue a specific RFID-tagged rifle.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Package className="inline-icon" color="#10b981" /> Ammunition Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Logs the exact batch numbers of ammunition issued. If 30 rounds are issued and 28 are returned, the AI instantly flags the discrepancy for the shift commander's review.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#f59e0b" /> Riot Gear & Armor</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks the expiration dates of Kevlar vests and tear gas shells. Uses Computer Vision to scan returned riot shields for micro-cracks, automatically ordering replacements.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Maintenance Calibration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Predicts when a firearm needs barrel cleaning or spring replacement based on the number of rounds fired, drastically reducing the probability of a weapon jamming during a firefight.</p>
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
            {armouryModules.map((mod, i) => (
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
            <Crosshair size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">ARMS & <span>EQUIPMENT</span></h1>
            <p className="cyber-subtitle">RFID Weapon Tracking, Ammo Logistics & Riot Gear AI</p>
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
            <div key={activeTab}>
              {renderContent()}
            </div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ArmouryDetailed;
