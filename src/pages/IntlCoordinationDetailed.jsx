import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Globe, Plane
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Interpol Notice Sync Bot", "Embassy Liaison AI", "Border Crossing Analyst", 
  "Foreign National Case Manager", "Extradition Tracker Bot", "Cross-Border Intel Miner", 
  "Immigration Sync AI", "Global Crime Trend Scraper", "Mutual Legal Assist (MLAT) Bot",
  "Language Translator NLP", "Cyber Espionage Monitor"
];

const intlModules = [
  {
    title: "Interpol Notice Tracker",
    icon: <Globe size={20} />,
    items: ["Live Red/Blue Notice Sync", "Facial Recognition on Ports", "Automated Lookout Circulars (LOC)", "Suspect Movement Alerts"]
  },
  {
    title: "Embassy Liaison & Nationals",
    icon: <Shield size={20} />,
    items: ["Foreign National Overstay Alerts", "Consular Access Automator", "Diplomatic Security Routing", "Visa Violation Profiling"]
  },
  {
    title: "Cross-Border Intelligence",
    icon: <Network size={20} />,
    items: ["Neighboring State Gang Sync", "Smuggling Route Heatmaps", "Dark Web Terror Funding Tracing", "Global Threat Sentiment"]
  },
  {
    title: "Immigration & Border",
    icon: <Plane size={20} />,
    items: ["Passenger Manifest NLP", "Suspicious Travel Patterns", "Fake Passport Detection Model", "No-Fly List Integration"]
  },
  {
    title: "Legal Assistance (MLAT)",
    icon: <FileText size={20} />,
    items: ["Extradition Paperwork Generator", "International Warrant Tracking", "Treaty Compliance Checks", "Cross-Jurisdiction Evidence"]
  }
];

const aiFeatures = [
  "AI Multi-lingual Translation for Dossiers", "AI Facial Recognition for Interpol Notices", "AI Smuggling Pattern Detection",
  "AI Automated E-Visa Verification", "AI Threat Intelligence Aggregation", "AI Passenger Name Record (PNR) Profiling",
  "AI Extradition Likelihood Scorer", "AI Financial Link Extraction across Borders"
];

const databases = [
  "Interpol_Notice_Cache", "Foreign_National_Registry", "Embassy_Communications", "Border_Check_Telemetry", "MLAT_Request_Ledger", 
  "Immigration_Visa_Logs", "Global_Crime_Trends", "Cross_Border_Intel", "Extradition_Case_Files"
];

const dashboards = [
  "Global Threat Radar", "Live Border Activity", "Foreign National Density Map", 
  "Interpol Notice Action Status", "Embassy Request Pendency", "Smuggling Network Graph"
];

const apis = [
  "Interpol Secure Webhook", "Ministry of External Affairs (MEA) API", "Bureau of Immigration (BoI) Sync", "Airlines PNR Push API",
  "Customs & Border Control API", "Global Watchlist Feeds"
];

const reports = [
  "Monthly Foreign Overstay Analysis", "Cross-Border Smuggling Trends", "Interpol Notice Execution Rate", 
  "MLAT Pendency Report", "Global Cyber Crime Impact", "Diplomatic Security Audit"
];

const security = [
  "End-to-End Encryption (E2EE) for MEA Sync", "Air-Gapped Interpol Cache", "Strict PII Redaction for PNRs", 
  "Zero-Trust Architecture for Border Terminals", "Audit Trails for Red Notice Access", 
  "Biometric Auth for Extradition Files", "Anti-Spoofing on Passport Scans", "DDoS Protection on Intel Hub"
];

const futureScope = [
  "Global Interpol Holographic Conferences", "AI Predictive Smuggling Interception", "Quantum Encrypted Diplomatic Comms",
  "Autonomous Border Patrol Drones", "Real-time Voice Translation during Interrogations", "Decentralized Global Warrant Blockchain"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Global Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Coordination Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Global Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const IntlCoordinationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Globe className="inline-icon" size={28} /> AI International & Coordination
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>International & Coordination</strong> is the global nervous system of the Police Force. By synchronizing with Interpol, embassies, and immigration portals, the AI tracks fugitive movements, manages extradition paperwork, and predicts cross-border crime syndicates.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Globe className="inline-icon" color="#3b82f6" /> Interpol & Watchlists</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly ingests Interpol Red/Blue notices and cross-references facial data against state CCTV grids to detect international fugitives moving through local jurisdictions.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Plane className="inline-icon" color="#10b981" /> Immigration Integration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes Passenger Name Records (PNR) and Visa data from the Bureau of Immigration. The AI automatically flags foreign nationals who have overstayed their visas.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#f59e0b" /> Embassy Liaison</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Streamlines communication with foreign embassies. Automates consular access requests and routes VIP diplomatic security protocols during state visits.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#ef4444" /> Mutual Legal Assistance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Generates complex Extradition and MLAT (Mutual Legal Assistance Treaty) paperwork using NLP, ensuring compliance with international law and specific country treaties.</p>
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
            {intlModules.map((mod, i) => (
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
            <Globe size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">INTERNATIONAL <span>COORDINATION</span></h1>
            <p className="cyber-subtitle">Interpol Sync, Immigration Profiling & Embassy Liaison</p>
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

export default IntlCoordinationDetailed;
