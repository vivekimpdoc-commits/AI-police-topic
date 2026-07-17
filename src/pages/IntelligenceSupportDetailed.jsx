import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Search, Crosshair
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "OSINT Web Scraper Bot", "Subject Dossier Compiler", "Geographic Intel Mapper", 
  "Anonymous Tip Verifier", "Social Graph Analyzer", "Event Correlation Engine", 
  "Dark Web Monitor Bot", "Threat Assessment AI", "Source Reliability Scorer",
  "Intel Brief Generator", "NLP Language Translator", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const intelligenceModules = [
  {
    title: "OSINT Workspace",
    icon: <Search size={20} />,
    items: ["AI Web & Social Media Scraping", "Dark Web Chatter Monitor", "Sentiment-to-Threat Analysis", "Open Source Image Recon"]
  },
  {
    title: "Anonymous Tip Management",
    icon: <ShieldAlert size={20} />,
    items: ["AI Information Reliability Scoring", "NLP Tip Categorization", "Encrypted Informer Sync", "Reward Allocation Logic"]
  },
  {
    title: "Subject Dossier Generator",
    icon: <FileText size={20} />,
    items: ["Automated 360-Degree Suspect Profile", "Financial Link Extraction", "Associates Graphing", "Historical Crime Overlay"]
  },
  {
    title: "Geographic Intelligence",
    icon: <Crosshair size={20} />,
    items: ["AI Hotspot Forecasting", "Gang Territory Mapping", "Border Movement Overlay", "High-Risk Zones Tracking"]
  },
  {
    title: "Cross-Agency Intel Exchange",
    icon: <Network size={20} />,
    items: ["Encrypted MACPRO Sync", "Inter-State Gang Alerts", "Automated Intelligence Briefs", "Joint-Task Force Comm"]
  }
];

const aiFeatures = [
  "AI Entity Extraction (NER) from Tips", "AI Image EXIF Data Analyzer", "AI Social Graph Link Prediction",
  "AI Geo-Spatial Density Clustering", "AI Multilingual Sentiment Threat Scoring", "AI Automated Timeline Builder",
  "AI Zero-Knowledge Encryption Tunnels", "AI Fake Tip Detection"
];

const databases = [
  "OSINT_Data_Lake", "Anonymous_Tips_Vault", "Subject_Dossier_DB", "Geo_Intelligence_Vectors", "Inter_Agency_Intel_Hashes", 
  "Dark_Web_Chatter_Logs", "Informer_Reliability_Scores", "Event_Correlation_Graphs", "Threat_Assessment_Metrics"
];

const dashboards = [
  "Live Threat Assessment Map", "OSINT Sentiment Radar", "Anonymous Tip Triage", 
  "Subject Dossier Network Graph", "Geo-Intelligence Hotspots", "Inter-Agency Sync Status"
];

const apis = [
  "Twitter/Telegram Scraper APIs", "MACPRO Inter-State API", "CCTNS Secure Data Bridge", "Encrypted Tip Portal Webhooks",
  "Geo-Spatial Mapping APIs", "Dark Web Node Proxies"
];

const reports = [
  "Daily Intelligence Brief (DIB)", "Subject 360 Dossier PDF", "Threat Level Escalation Report", 
  "OSINT Viral Trend Analysis", "Tip Reliability & Action Report", "Gang Territory Expansion Analysis"
];

const security = [
  "Zero-Trust OSINT Browsers", "End-to-End Encrypted Informer Tunnels", "Strict Need-to-Know Access Controls", 
  "Audit Trails on Dossier Access", "Self-Destructing Intel Briefs", 
  "On-Premise AI Model Execution", "Air-Gapped Sync Servers", "Data Masking for Sub-Inspectors"
];

const futureScope = [
  "AI Predictive Assassination Prevention", "Global Interpol Real-time Graphing", "Satellite Imagery Intel Extraction",
  "Cognitive Interrogation AI Models", "Quantum Secure Intel Tunnels", "Fully Autonomous Threat Neutralization Routing"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Intel Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Intel Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Intel Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const IntelligenceSupportDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Crosshair className="inline-icon" size={28} /> AI Intelligence Support & OSINT
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Intelligence Support</strong> acts as the central brain for proactive policing. By harvesting Open Source Intelligence (OSINT), managing anonymous tips, and generating comprehensive Subject Dossiers, this AI ensures the force is always one step ahead of organized crime and terror threats.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Search className="inline-icon" color="#3b82f6" /> OSINT Workspace</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Autonomous bots scrape public social media, forums, and dark web nodes to identify brewing threats, viral hate speech, and gang chatter before incidents occur.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Anonymous Tip Manager</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Processes thousands of tips via a secure portal. The AI cross-references details to assign a 'Reliability Score', filtering out fake reports and highlighting high-probability leads.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#f59e0b" /> Subject Dossier Generator</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly compiles a 360-degree profile of a suspect by combining CCTNS records, OSINT data, financial footprints, and known associates into a single comprehensive PDF.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Cross-Agency Exchange</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Securely shares formatted intelligence briefs with MACPRO, IB, and neighboring state police to coordinate takedowns of inter-state syndicates.</p>
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
            {intelligenceModules.map((mod, i) => (
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
            <h1 className="cyber-title">INTELLIGENCE <span>SUPPORT</span></h1>
            <p className="cyber-subtitle">OSINT, Anonymous Tips & Dossier Generation</p>
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

export default IntelligenceSupportDetailed;
