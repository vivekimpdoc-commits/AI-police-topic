import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Radio, RadioTower, Mic
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Tetra Radio Intercept AI", "Emergency Broadcast Optimizer", "Signal Jamming Detector", 
  "Voice Stress Analyzer", "Background Noise Filter AI", "Call Dispatch Router", 
  "Multi-Channel Translator", "Dead-Zone Mapper", "Internal Messaging Auditor",
  "Frequency Hopping Predictor", "Code-Word Decryptor", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const commsModules = [
  {
    title: "Wireless & Tetra Radio",
    icon: <RadioTower size={20} />,
    items: ["VHF/UHF Network Monitoring", "Automated Frequency Hopping", "Dead-Zone Heatmaps", "Signal Jamming Alerts"]
  },
  {
    title: "Radio Log Analysis (NLP)",
    icon: <Mic size={20} />,
    items: ["Speech-to-Text Transcriptions", "Voice Stress/Panic Detection", "Automated Keyword Flagging", "Background Gunshot Detection"]
  },
  {
    title: "Emergency Broadcasts",
    icon: <Radio size={20} />,
    items: ["All-Unit Panic Overrides", "Geo-fenced Alerts (Sector-wise)", "Automated Weather Warnings", "Multi-lingual Synthesizer"]
  },
  {
    title: "Call Dispatch Optimization",
    icon: <Activity size={20} />,
    items: ["Nearest Unit Routing", "Unit Capability Matching", "Traffic-aware ETA", "Pre-arrival Briefing AI"]
  },
  {
    title: "Secure Internal Messaging",
    icon: <ShieldAlert size={20} />,
    items: ["Quantum-Safe Chat App", "Self-Destructing Intelligence", "Media Watermarking", "Data Leak Prevention (DLP)"]
  }
];

const aiFeatures = [
  "AI Audio Denoising (Siren Filtering)", "AI Natural Language Understanding (Slang)", "AI Geospatial Routing",
  "AI Emotion/Stress Recognition in Voice", "AI Dynamic Spectrum Allocation", "AI Automated Call Triage",
  "AI Deepfake Voice Detection", "AI Predictive Network Maintenance"
];

const databases = [
  "Tetra_Radio_Logs", "Dispatch_Event_History", "Voice_Stress_Meta", "Dead_Zone_Coordinates", "Encrypted_Chat_Ledger", 
  "Emergency_Broadcast_Audit", "Unit_Location_Telemetry", "Known_Jammer_Signatures", "Keyword_Flag_DB", "Shift_Commander_Roster"
];

const dashboards = [
  "Live Spectrum & Network Health", "Active Dispatch Map", "Voice Panic/Stress Alerts", 
  "Sector-wise Broadcast Status", "Signal Dead-Zone Heatmap", "Secure Comms Audit"
];

const apis = [
  "TETRA / APCO P25 Network APIs", "Telecom Cell-Tower Triangulation", "Meteorological Dept (Weather Alerts)", "Local Traffic / NavIC Sync",
  "IoT Network Status Gateways", "State Emergency (112) Sync"
];

const reports = [
  "Monthly Radio Uptime Analytics", "Dispatch Response Time ROI", "Dead-Zone Mitigation Progress", 
  "Signal Interference/Jamming Incidents", "Officer Panic Button Audits", "Voice Transcription Accuracy"
];

const security = [
  "AES-256 Over-The-Air (OTA) Encryption", "Quantum Key Distribution", "Biometric PTT (Push-To-Talk) Auth", 
  "Strict Data Leak Prevention (DLP)", "Air-gapped Log Servers", 
  "Automated Rogue Device Disconnect", "Time-stamped Blockchain Logs", "Anti-Replay Attack Protocols"
];

const futureScope = [
  "Satellite Direct-to-Device PTT", "Neural-link Silent Communication", "AI Holographic Dispatch",
  "Sub-dermal Panic Buttons", "Quantum Entanglement Radios", "Swarm Drone Signal Relays"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Comms Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Radio Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dispatch Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const RadioCommsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <RadioTower className="inline-icon" size={28} /> AI Radio & Communication Systems
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Radio & Communication Systems</strong> acts as the central nervous system for field officers. It transcribes wireless radio chatter in real-time, detects panic in an officer's voice, and optimizes the dispatch of backup units with mathematical precision.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Mic className="inline-icon" color="#3b82f6" /> Voice Stress Analysis</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a field officer calls in but sounds panicked, the AI detects the micro-tremors in their voice or background gunshots, instantly upgrading the priority and auto-dispatching SWAT.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Radio className="inline-icon" color="#10b981" /> Radio Log NLP</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Every word spoken over the VHF/UHF radio is converted to text (even through siren noise) and logged. The AI flags code-words or specific suspect descriptions automatically.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Dispatch Optimization</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Replaces manual radio dispatch. AI looks at live GPS of all cruisers, traffic conditions, and the required skill (e.g., riot gear needed) to auto-assign the best unit.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Network Dead-Zones</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuously maps radio signal strength from all patrolling vehicles to build a live 'Dead-Zone Heatmap', allowing commanders to deploy mobile signal boosters during VIP events.</p>
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
            {commsModules.map((mod, i) => (
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
            <RadioTower size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">RADIO & <span>COMMUNICATIONS</span></h1>
            <p className="cyber-subtitle">Voice Stress Analysis, Smart Dispatch & Network Mapping</p>
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

export default RadioCommsDetailed;
