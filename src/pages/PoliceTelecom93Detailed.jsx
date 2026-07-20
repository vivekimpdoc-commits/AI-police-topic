import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Radio, Phone, Satellite
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Spectrum Analyzer AI", "Call Sign Allocator", "Wireless Log Archiver", 
  "Tower Health Predictor", "UHF/VHF Jammer Detector", "Frequency Optimizer", 
  "Telecom Bill Auditor", "Emergency Routing Bot", "Comms Encryption AI"
];

const telecomModules = [
  {
    title: "Radio & Wireless Comms",
    icon: <Radio size={20} />,
    items: ["AI Call Sign Management", "Wireless Call Log Archive", "UHF/VHF Tower Mapping"]
  },
  {
    title: "Telecom & Telephony",
    icon: <Phone size={20} />,
    items: ["Police Telecom Bill Analytics", "CUG (Closed User Group) Optimization", "VoIP Gateway Monitor"]
  },
  {
    title: "Network Infrastructure",
    icon: <Satellite size={20} />,
    items: ["AI Telecom Tower Maintenance", "Satellite Comms Sync", "Dead-Zone Predictor"]
  },
  {
    title: "Comms Auditing",
    icon: <FileText size={20} />,
    items: ["Automated Radio Audit", "Telecom Expense Auditor", "Bandwidth Usage AI"]
  }
];

const aiFeatures = [
  "Predictive Tower Maintenance", "Automated Voice-to-Text for Radio Calls", "Real-Time Dead Zone Mapping",
  "Smart CUG Plan Optimization", "Anomaly Detection in Telecom Billing", "Dynamic Frequency Hopping"
];

const databases = [
  "Radio_Call_Logs", "Telecom_Billing_DB", "Tower_Health_Metrics", 
  "CUG_Directory", "Spectrum_Allocation"
];

const apis = [
  "Telecom Service Provider API", "Satellite Comms Gateway", "National Frequency Registry", 
  "GIS Tower Mapping Sync", "Weather APIs for Signal Loss"
];

const dashboards = [
  "Live Network Health", "Telecom Expense Overview", "Radio Traffic Heatmap", 
  "Tower Maintenance Schedule"
];

const reports = [
  "Monthly Telecom Expenditure", "UHF/VHF Uptime Audit", "CUG Usage Violations",
  "Signal Dead Zone Analysis"
];

const security = [
  "Quantum-Safe Radio Encryption", "Anti-Jamming Failover", "Strict VoIP Firewalling",
  "Unauthorized Frequency Detection"
];

const futureScope = [
  "Low Earth Orbit (LEO) Police Satellites", "AI Holographic Field Comms", "6G Police Private Networks",
  "Telepathic-like BCI Comms"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Comms Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Telecom Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceTelecom93Detailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Radio className="inline-icon" size={28} /> AI Police Telecom & Comms
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Telecom & Communication</strong> manages the critical lifeline of the force. From maintaining UHF/VHF radio networks and predicting tower failures, to optimizing cellular CUG plans and auditing massive telecom bills, this AI ensures the force never goes offline.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Radio Uptime</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Auto</div>
                <div className="stat-label">Dead-Zone Mapping</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">30%</div>
                <div className="stat-label">Telecom Cost Saved</div>
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
            {telecomModules.map((mod, i) => (
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
      
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> BACK TO MODULES
        </button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper">
            <Radio size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>TELECOM</span></h1>
            <p className="cyber-subtitle">Spectrum AI, Tower Mapping & CUG Optimization</p>
          </div>
        </div>
      </header>

      <div className="hrms-layout">
        <aside className="hrms-sidebar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </aside>
        <main className="hrms-main-content scrollbar-hide">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default PoliceTelecom93Detailed;
