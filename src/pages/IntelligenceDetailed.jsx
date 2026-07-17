import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, Map, Crosshair, Fingerprint
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Hotspot Prediction AI", "Gang Network Mapper", "Financial Crime Tracker", 
  "Repeat Offender Analyst", "Modus Operandi (MO) Matcher", "Dark Web Chatter Monitor", 
  "Telecom CDR Analyzer", "Terrorism Funding Tracker", "Social Media Radicalization Bot",
  "Arms Smuggling Predictor", "Criminal Profiler Agent", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const intelligenceModules = [
  {
    title: "AI Crime Mapping & Hotspots",
    icon: <Map size={20} />,
    items: ["GIS Predictive Heatmaps", "Real-time Incident Overlays", "Seasonal Crime Correlation", "Event-based Risk Zones"]
  },
  {
    title: "Gang & Organized Crime",
    icon: <Users size={20} />,
    items: ["Syndicate Hierarchy Mapping", "Rivalry Outbreak Prediction", "Extortion Ring Tracking", "Prison-to-Street Comm Links"]
  },
  {
    title: "Criminal Network Analysis",
    icon: <Network size={20} />,
    items: ["Telecom CDR Link Analysis", "Financial Flow Tracing", "Associate Discovery (Knowledge Graph)", "Alias Resolution"]
  },
  {
    title: "Repeat Offender Tracking",
    icon: <Fingerprint size={20} />,
    items: ["Bail Out Monitoring", "Ankle Monitor Geo-fencing", "Modus Operandi Clustering", "Re-offense Probability Score"]
  },
  {
    title: "Intelligence Fusion Center",
    icon: <Crosshair size={20} />,
    items: ["Inter-Agency Data Sync (CBI/NIA)", "Tip-off Validation Agent", "Threat Level Dashboard", "Classified Intel Vault"]
  }
];

const aiFeatures = [
  "AI Spatial-Temporal Crime Prediction", "AI Graph Neural Networks (GNN)", "AI Voice/Face Alias Matching",
  "AI Financial Ledger Anomaly Detection", "AI Semantic Tip-off Parsing", "AI Prison Call NLP Intercepts",
  "AI Satellite Imagery Encampment Detection", "AI Automated Dossier Generation"
];

const databases = [
  "Crime_Hotspot_Polygons", "Gang_Member_Dossiers", "Telecom_CDR_Graph", "Financial_Transactions_Graph", "Modus_Operandi_Signatures", 
  "Prison_Release_Logs", "Classified_Informant_Tips", "Wanted_Fugitives_DB", "Inter_Agency_Intel", "Radicalization_Watchlist"
];

const dashboards = [
  "Live Threat & Hotspot Map", "Gang Syndicate Hierarchy View", "Financial Money Trail Graph", 
  "Top 100 Most Wanted Tracker", "Inter-State Smuggling Routes", "Upcoming High-Risk Events"
];

const apis = [
  "NATGRID Sync APIs", "Telecom Service Provider APIs", "Bank Financial Intelligence Unit (FIU) APIs", "Prison Management System APIs",
  "Social Media Graph APIs", "CCTNS State Database APIs", "GIS Spatial APIs"
];

const reports = [
  "Monthly Organized Crime Threat Brief", "Top Active Gangs & Territories", "Predictive Crime Hotspot Zones", 
  "Financial Seizure Analytics", "Informant Reliability Index", "Bail Violators Alert Log"
];

const security = [
  "Top Secret Security Clearance", "Air-gapped Intel Vaults", "Zero-Knowledge Proofs for Informants", 
  "Hardware Security Keys (YubiKey)", "Strict Need-to-Know Compartmentalization", 
  "Deep Packet Inspection", "Insider Threat Detection", "Data Exfiltration Blockers"
];

const futureScope = [
  "AI Pre-Crime Precog Algorithms", "Global Interpol Graph Sync", "Quantum Financial Tracing",
  "Drone Swarm Covert Surveillance", "Autonomous Deep Web Infiltration", "Brainwave Intel Extraction"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Intel Analysts', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Intel Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Intel Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const IntelligenceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Crosshair className="inline-icon" size={28} /> AI Crime Intelligence & Network Analysis
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Crime Intelligence</strong> is the strategic brain of the department. It digests billions of data points—from telecom CDRs, financial records, past FIRs, and prison logs—to map organized crime syndicates, predict future crime hotspots, and expose hidden criminal networks using Graph Neural Networks (GNN).
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#3b82f6" /> Predictive Hotspot Mapping</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes 10 years of historical crime data against weather, festivals, and economic indicators to predict exactly where and when the next chain-snatching or riot will occur.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#10b981" /> Criminal Graph Analysis</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly generates a visual web connecting a suspect to accomplices, front companies, and burner phones by cross-referencing Call Detail Records (CDRs) and financial transfers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#f59e0b" /> Gang & Syndicate Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Maintains active dossiers on organized crime groups. Monitors rivalries, territory expansions, and intercepts prison communications to prevent hits ordered from behind bars.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Fingerprint className="inline-icon" color="#ef4444" /> Modus Operandi (MO) Matcher</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>When a new crime occurs, the AI reads the FIR and searches the database for repeat offenders who use the exact same unique methods (e.g., specific lock-picking tools or escape routes).</p>
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
            <h1 className="cyber-title">AI CRIME <span>INTELLIGENCE</span></h1>
            <p className="cyber-subtitle">Predictive Mapping, Gang Networks & CDR Analytics</p>
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

export default IntelligenceDetailed;
