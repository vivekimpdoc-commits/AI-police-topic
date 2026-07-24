import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Building, Folder, Users
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Voice-to-Text GD Assistant", "Malkhana RFID Tracker", "Duty Roster Optimizer", 
  "Property Release Predictor", "Visitor Sentiment Scanner", "Office File Auto-Router", 
  "Station Health Scorer", "Utility Consumption Monitor", "Weapon Checkout Biometrics",
  "Interrogation NLP Analyzer", "Beat Patrol Scheduler"
];

const stationModules = [
  {
    title: "AI General Diary (GD)",
    icon: <FileText size={20} />,
    items: ["Voice-dictated GD Entries", "Automated IPC Section Suggestions", "Digital Signature Hash", "Cross-station Search"]
  },
  {
    title: "Malkhana (Evidence) Room",
    icon: <Database size={20} />,
    items: ["RFID Evidence Tracking", "Automated Court Release Alerts", "Chain of Custody Blockchain", "Narcotics Expiry Flags"]
  },
  {
    title: "Station Health & Maintenance",
    icon: <Activity size={20} />,
    items: ["IoT Electricity/Water Tracking", "Housekeeping Duty Roster", "Vehicle Parking Management", "Emergency Power Switchover"]
  },
  {
    title: "Visitor & Reception Desk",
    icon: <Users size={20} />,
    items: ["Aadhaar Kiosk Integration", "Waiting Time Predictor", "Aggression Detection at Desk", "Automated Token Dispenser"]
  },
  {
    title: "File & Dak Management",
    icon: <Folder size={20} />,
    items: ["OCR on Handwritten Daks", "Pending File Alerts to SHO", "Auto-routing to IOs", "Digital Archival System"]
  }
];

const aiFeatures = [
  "AI Multilingual Speech-to-Text (GD)", "AI Optical Character Recognition (Dak/Files)", "AI Blockchain Chain of Custody",
  "AI Queue Management Algorithms", "AI Predictive Maintenance (Station Utilities)", "AI Shift Fatigue Prediction",
  "AI Biometric Liveness Check (Malkhana)", "AI Semantic Search for Case Files"
];

const databases = [
  "General_Diary_Digital_Log", "Malkhana_RFID_Ledger", "Visitor_Kiosk_Sync", "Station_Utilities_IoT", "Dak_File_Routing_Table", 
  "Duty_Officer_Roster", "FIR_IPC_Mappings", "Evidence_Disposal_Queue", "Station_CCTV_Meta", "Housekeeping_Logs"
];

const dashboards = [
  "SHO Command Dashboard", "Live Malkhana Inventory", "Pending Files / Dak Status", 
  "Visitor Queue Analytics", "Station Health (Utilities)", "Duty Roster Live Map"
];

const apis = [
  "CCTNS (Crime & Criminal Tracking Network)", "UIDAI (Visitor Auth)", "Smart Meter IoT Gateways", "e-Courts Evidence Sync",
  "State Police HRMS Sync", "Local Hospital Bed Sync (Medicolegal)"
];

const reports = [
  "Daily SHO Health Report", "Malkhana Audit Discrepancies", "Average Visitor Wait Time", 
  "File Disposal Rate", "Station Electricity/Fuel Usage", "GD Entry NLP Sentiment"
];

const security = [
  "CCTNS Air-Gapped Sync", "Blockchain for Evidence Hashes", "Biometric Terminal Login", 
  "Role-Based GD View Rights", "Tamper-Proof Audit Trails", 
  "Automated Redaction of Victim Details", "End-to-End Encryption of Dak", "Hardware Security Modules"
];

const futureScope = [
  "AI Holographic Receptionists", "Autonomous Cleaning Bots", "Smart Holding Cells (Vital Monitoring)",
  "Predictive Crime-Wave Staffing", "Drone Docking on Station Roof", "Neural Interrogation Rooms"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Station Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Admin Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'SHO Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceStationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Building className="inline-icon" size={28} /> AI Police Station Administration
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Police Station Administration</strong> digitizes the ground-zero of law enforcement. It eliminates manual paperwork with Voice-to-Text General Diaries (GD), tracks seized evidence using RFID, and monitors station health to ensure optimal performance.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#3b82f6" /> AI General Diary (GD)</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Duty officers can simply dictate events. The AI converts speech to text, automatically suggests relevant IPC sections based on the narrative, and logs it immutably on the blockchain.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#10b981" /> Smart Malkhana (Evidence)</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Every seized item gets an RFID tag. If an officer checks out a weapon for court, the system tracks the chain of custody. It automatically alerts the SHO when narcotics are due for destruction.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#f59e0b" /> Visitor Kiosk & Routing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Citizens authenticate via Aadhaar at an iPad kiosk, select their issue (e.g., Passport Verification), and are auto-routed to the correct desk. AI predicts wait times and flags aggressive behavior.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Folder className="inline-icon" color="#ef4444" /> Digital Dak & File Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scans incoming letters (Dak) using OCR, extracts key entities, and automatically forwards the digital file to the assigned Investigating Officer (IO). Flags the SHO if a file is pending &gt; 48 hours.</p>
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
            {stationModules.map((mod, i) => (
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
            <Building size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">STATION <span>ADMINISTRATION</span></h1>
            <p className="cyber-subtitle">Smart Malkhana, Voice GDs & Digital Dak Tracking</p>
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

export default PoliceStationDetailed;
