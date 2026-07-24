import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Lock, Stamp
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Seal Guardian Bot", "Digital Stamp Authenticator", "Confidential Locker AI", 
  "Gazette Miner NLP", "Record Weeding AI", "Preservation Recommender", 
  "File Digitization Automator", "Access Rights Arbiter", "Historical Search Engine",
  "Forgery Detector AI", "Audit Trail Keeper"
];

const docsModules = [
  {
    title: "Seal & Stamp Register",
    icon: <Stamp size={20} />,
    items: ["RFID Tracked Physical Seals", "Digital Sign (DSC) Vault", "Unauthorized Stamp Use Alarms", "Usage Audit Trails"]
  },
  {
    title: "Confidential Locker",
    icon: <Lock size={20} />,
    items: ["Top Secret Document Encryption", "Biometric Access Gates", "Time-Restricted File Opening", "Auto-Redaction of PII"]
  },
  {
    title: "Record Weeding & Archiving",
    icon: <Activity size={20} />,
    items: ["Legal Expiry Automation", "Digital Shredding Protocols", "Historical Preservation Checks", "Cloud Migration Scripts"]
  },
  {
    title: "Government Gazette",
    icon: <Network size={20} />,
    items: ["Automated Gazette Scraping", "Policy NLP Extraction", "Inter-Department Sync", "Keyword-based Officer Alerts"]
  },
  {
    title: "Digitization Queue",
    icon: <FileText size={20} />,
    items: ["OCR Scanning of Legacy Files", "Metadata Auto-Tagging", "Dampness/Fire Sensor Logs", "Digital Twin Generation"]
  }
];

const aiFeatures = [
  "AI Forgery Detection on Digital Signatures", "AI NLP Extraction of Gazette Policies", "AI Automated Document Classification",
  "AI Retention Period Prediction", "AI Image Enhancement for Old Records", "AI Semantic Search across Decades",
  "AI Physical-to-Digital Twin Mapping", "AI PII Masking on Public Releases"
];

const databases = [
  "Seal_Usage_Ledger", "Confidential_Locker_DB", "Weeding_Schedules", "Gazette_Archive", "Digitized_Legacy_Files", 
  "Digital_Signature_Keys", "Document_Access_Logs", "Officer_Clearance_Levels", "Historical_Index"
];

const dashboards = [
  "Seal & Stamp Usage Radar", "Confidential Access Live", "Record Weeding Pipeline", 
  "Gazette Policy Updates", "Digitization Progress", "Unauthorized Access Alerts"
];

const apis = [
  "National e-Gov Signature APIs", "State Printing Press Webhooks", "Cloud Vision OCR APIs", "Smart Vault IoT Sensors",
  "Blockchain Audit Log Sync", "Identity Management Gateway"
];

const reports = [
  "Monthly Seal Audit Report", "Record Destruction Certificate", "Top Secret Access Log", 
  "Gazette Compliance Summary", "Digitization ROI", "Security Breach Attempts"
];

const security = [
  "Multi-Factor Biometrics for Locker Access", "Blockchain Immutable Audit Trails", "Air-Gapped Confidential Servers", 
  "Faraday Cage Physical Vaults", "Zero-Knowledge Encryption", 
  "Hardware Security Modules (HSM) for DSC", "Watermarked Document viewing", "Self-Destructing Decryption Keys"
];

const futureScope = [
  "Quantum-Safe Encryption Lockers", "DNA-Based Document Tagging", "Holographic Seal Projection",
  "AI Legal Sentience for Document Weeding", "Decentralized Sovereign Cloud", "Autonomous Robot Vault Guards"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Doc Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Document Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Vault Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const OfficialDocsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Lock className="inline-icon" size={28} /> AI Control of Official Documents
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Control of Official Documents</strong> transforms the traditional record room into an impenetrable digital and physical fortress. The AI manages the lifecycle of Top Secret files, tracks the usage of physical stamps, and automates the weeding of expired historical records.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Stamp className="inline-icon" color="#3b82f6" /> Seal & Stamp Tracker</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Physical brass seals are tagged with RFID. The AI logs exactly when a seal is removed from the vault and by whom. Digital signatures (DSC) are heavily encrypted and tracked.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Lock className="inline-icon" color="#10b981" /> Confidential Locker</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A Zero-Trust digital vault for classified intelligence. Access requires dual-officer biometric authentication, and documents can only be viewed in time-restricted windows.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#f59e0b" /> Digital Weeding</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors the legal retention policy of millions of records. When a file expires (e.g., 10 years for certain non-heinous crime records), the AI initiates a secure digital shredding protocol.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Gazette Intelligence</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically ingests the State Government Gazette. NLP models extract new legal amendments and instantly alert the relevant police departments regarding policy changes.</p>
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
            {docsModules.map((mod, i) => (
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
            <Lock size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">OFFICIAL <span>DOCUMENTS</span></h1>
            <p className="cyber-subtitle">Seal Register, Confidential Lockers & Record Weeding</p>
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

export default OfficialDocsDetailed;
