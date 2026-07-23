import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Target, Zap, Radio
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Sleeper Cell Network Mapper", "Crypto-Terror Funding Tracer", "Dark Web Radicalization Bot", 
  "Explosives Chemical Precursor Tracker", "Intercepted Audio Decoder", "Lone-Wolf Threat Predictor", 
  "Deep Packet Inspection AI", "Biometric Alias Matcher", "Hostage Rescue Tactics Bot",
  "Social Media Propaganda Scraper", "High-Value Target Profiler"
];

const terrorModules = [
  {
    title: "Sleeper Cell Tracking",
    icon: <Target size={20} />,
    items: ["Graph Database of Known Associates", "Travel Pattern Anomalies (Syria/Iraq)", "Alias Cross-Matching", "Encrypted Comms Frequency Alerts"]
  },
  {
    title: "Terror Financing & Crypto",
    icon: <Activity size={20} />,
    items: ["Hawala Route Mapping", "Bitcoin Mixer Tracing", "NGO Fake Donation Flags", "Dark Net Weapon Purchases"]
  },
  {
    title: "Radicalization Monitoring",
    icon: <Radio size={20} />,
    items: ["Hate-Speech NLP on Telegram", "Jihadi Propaganda Video Fingerprinting", "Lone-Wolf Behavior Prediction", "Prison Radicalization Sync"]
  },
  {
    title: "Explosives & CBRN Threats",
    icon: <Zap size={20} />,
    items: ["Fertilizer/Chemical Purchase Tracking", "Radiation Sensor IoT Integration", "Bomb-making Material Flags", "CBRN Evacuation Models"]
  },
  {
    title: "Tactical Operations Support",
    icon: <ShieldAlert size={20} />,
    items: ["Hostage Negotiation NLP", "SWAT Drone Reconnaissance", "3D Building Breach Planning", "Sniper Line-of-Sight Calculation"]
  }
];

const aiFeatures = [
  "AI Network Graph Theory Algorithms", "AI Blockchain Ledger Heuristics", "AI Multi-Lingual NLP (Arabic/Urdu/Pashto)",
  "AI Deepfake/Propaganda Video Hashing", "AI Zero-Day Exploit Detection (Cyber-Terror)", "AI Predictive Targeting Models",
  "AI Acoustic Signature Matching (Explosions)", "AI Open-Source Intelligence (OSINT) Scraping"
];

const databases = [
  "Global_Terrorist_Watchlist", "Crypto_Wallet_Blacklist", "Intercepted_Comms_Transcripts", "Chemical_Precursor_Sales", "Radical_Propaganda_Hashes", 
  "Known_Sleeper_Cell_Graphs", "Interpol_Red_Notices", "Hawala_Operator_Network", "Tactical_Operation_Logs", "CBRN_Sensor_Telemetry"
];

const dashboards = [
  "National Threat Level Matrix", "Crypto Terror-Funding Flow", "Sleeper Cell Link-Graph", 
  "Radicalization Hotspots", "High-Value Target Locations", "Tactical Raid Live-Feed"
];

const apis = [
  "NIA / MAC (Multi-Agency Centre) APIs", "Interpol & Europol Sync", "Blockchain Analytics (Chainalysis) APIs", "Telecom Lawful Intercept (CALEA)",
  "Financial Intelligence Unit (FIU) APIs", "Aviation PNR (Passenger Name Record) APIs"
];

const reports = [
  "Imminent Threat Intelligence Brief", "Terror Financing Disruption Audit", "Radicalization Trend Analytics", 
  "Sleeper Cell Bust Post-Mortem", "Chemical/Explosive Precursor Tracking", "Joint Task Force ROI"
];

const security = [
  "Top-Secret Clearance Access Only", "Air-Gapped Intranet Servers", "Quantum Key Distribution (QKD)", 
  "Strict 'Need to Know' Compartmentalization", "Self-Destructing Data Payloads", 
  "Biometric + Retina 3FA", "Hardware Security Modules (HSM)", "Zero-Knowledge Proofs for Informants"
];

const futureScope = [
  "AI Predictive Pre-Crime Intercepts", "Micro-Drone Swarm Assassins", "Brain-Computer Interrogation",
  "Automated Cyber-Warfare Retaliation", "Quantum Decoding of Encrypted Comms", "Satellite Directed-Energy Defense"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Intel Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Anti-Terror Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Command Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const AntiTerrorDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Target className="inline-icon" size={28} /> AI Anti-Terrorism & Intelligence
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Anti-Terror Intelligence</strong> is a military-grade counter-terrorism suite. It intercepts encrypted communications, tracks terror financing through cryptocurrency mixers, and maps sleeper cell networks using advanced graph-theory algorithms before an attack happens.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#3b82f6" /> Sleeper Cell Graphing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ingests flight records, telecom metadata, and hotel bookings to draw invisible links between radicalized individuals, automatically exposing hidden sleeper cells.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Crypto & Hawala Tracing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Follows the money. Uses blockchain heuristics to trace Bitcoin/Monero funding from international terror groups to local operatives or dark web weapon purchases.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Radio className="inline-icon" color="#f59e0b" /> Radicalization & OSINT</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuously scrapes Telegram, deep web forums, and social media. AI flags "lone-wolf" attackers based on sudden shifts in sentiment or downloads of bomb-making manuals.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Zap className="inline-icon" color="#ef4444" /> CBRN & Precursor Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Flags suspicious bulk purchases of agricultural fertilizers or chemicals used in IEDs. Integrates with IoT radiation sensors in major cities to detect dirty bombs.</p>
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
            {terrorModules.map((mod, i) => (
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
            <Target size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI ANTI-TERROR <span>INTELLIGENCE</span></h1>
            <p className="cyber-subtitle">Sleeper Cell Graphing, Crypto Tracking & Radicalization Alerts</p>
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

export default AntiTerrorDetailed;
