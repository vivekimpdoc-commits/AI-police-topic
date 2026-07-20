import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Eye, Search
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Informant Network AI", "Threat Level Predictor", "Cross-Border Intel Bot", 
  "High-Risk Zone Analyzer", "Multi-Agency Router", "Confidential Source AI", 
  "Extremism Sentiment Bot", "Financial Trail Analyzer", "Dissemination AI",
  "Riot Probability Modeler", "Dark Web Scraper", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const intelModules = [
  {
    title: "Informant & Source Management",
    icon: <Search size={20} />,
    items: ["AI Undercover Ops Sync","AI Informant Verifier","AI Inter-Agency Intel Sharing"]
  },
  {
    title: "Threat & Zone Monitoring",
    icon: <Eye size={20} />,
    items: ["High-Risk Village/Urban Mapping", "Radicalization Heatmaps", "VIP Threat Assessment", "Communal Tension Radar"]
  },
  {
    title: "Multi-Agency Coordination",
    icon: <Network size={20} />,
    items: ["IB/RAW Intel Sync", "Cross-Border Smuggling Alerts", "NIA Terror Watchlist Sync", "Joint Operation Dashboards"]
  },
  {
    title: "Intel Dissemination",
    icon: <Activity size={20} />,
    items: ["Automated 'Need-to-Know' Routing", "Encrypted Intel Dossiers", "Field Officer Actionable Alerts", "Dissemination Audit Logs"]
  }
];

const aiFeatures = [
  "AI Deep Web Scraping for Extremist Activity", "AI Predictive Modeling of Riot Probabilities during Festivals", "AI Financial Trail Analysis for Terror Funding",
  "AI Cross-Referencing of Smuggling Routes with Border Force (BSF) Data", "AI Sentiment Analysis of Encrypted Chat Intercepts", "AI Automated Grading of Intelligence Reliability (A1 to F6)",
  "AI Facial Recognition on CCTV for Watchlisted Suspects", "AI Automated Redaction of Source Identities in Shared Dossiers"
];

const databases = [
  "Confidential_Informants_DB", "Threat_Assessment_Lake", "Multi_Agency_Intel_Pool", "Extremist_Watchlist", "Financial_Trail_Ledger", 
  "High_Risk_Zone_Map", "Intercept_Transcripts", "Dissemination_Logs"
];

const dashboards = [
  "Live State Threat Level", "Communal Tension Heatmap", "Informant Network ROI", 
  "Cross-Border Smuggling Routes", "Multi-Agency Intel Overlap", "Radicalization Hotspots"
];

const apis = [
  "NATGRID (National Intelligence Grid)", "CCTNS / ICJS Portal", "Financial Intelligence Unit (FIU) API", "Telecom Intercept Gateways",
  "BSF/SSB Border Intel Feeds", "Interpol Secure Network"
];

const reports = [
  "Weekly State Security Assessment", "Informant Reward Audit", "Communal Harmony Index", 
  "Terror Funding Flow Analysis", "VIP Security Threat Matrix", "Joint Task Force Effectiveness"
];

const security = [
  "Air-Gapped Classified Networks", "Hardware Tokens for DB Access", "Self-Destructing Encrypted Intel Messages", 
  "Strict 'Need-to-Know' RBAC", "Quantum-Resistant Encryption", 
  "Biometric + Retina Scan Logins", "DLP (Data Loss Prevention) against USBs", "Audit Log of Every Search Query"
];

const futureScope = [
  "AI Swarm Drones for Border Reconnaissance", "Predictive Pre-Crime Modeling (Minority Report style)", "Satellite Imagery AI for Illegal Deforestation/Mining",
  "Real-time Neural Translation of Intercepted Dialects", "Deepfake Detection in Propoganda Videos", "Automated Cyber-Warfare Defense"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Intel Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Spy Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Threat Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceIntelligenceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Eye className="inline-icon" size={28} /> AI Police Intelligence & Coordination
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Intelligence (CID/Special Branch)</strong> is the silent shield of the state. This highly classified module uses AI to process terabytes of intercepts, manage confidential informants, and predict communal riots before they happen by syncing data with central agencies like IB and NIA.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Search className="inline-icon" color="#3b82f6" /> Informant Network AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Manages the registry of Confidential Informants (Mukhbirs). AI tracks the accuracy of their tips over time, automatically assigning a reliability score and suggesting reward payouts while keeping their identities cryptographically hidden.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Eye className="inline-icon" color="#10b981" /> Riot & Threat Prediction</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>By analyzing social media sentiment, dark web chatter, and historical FIRs, the AI generates predictive heatmaps of high-risk urban and rural areas prone to communal tension during specific festivals.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Multi-Agency Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Breaks down silos between State Police, BSF, and NATGRID. If the BSF flags a cross-border drone dropping arms, the AI instantly cross-references local vehicle movements to identify the smugglers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Smart Dissemination</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>When a raw intelligence report is processed, the AI determines exactly which field officers 'need to know'. It auto-redacts the source's name and sends self-destructing alerts to the relevant SPs.</p>
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
            {intelModules.map((mod, i) => (
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
            <Eye size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">INTELLIGENCE & <span>COORDINATION</span></h1>
            <p className="cyber-subtitle">Informant Networks, Riot Prediction & Agency Sync</p>
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

export default PoliceIntelligenceDetailed;
