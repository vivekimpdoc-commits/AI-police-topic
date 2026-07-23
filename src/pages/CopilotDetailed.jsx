import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, MessageSquare, Mic, Smartphone
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Beat Patrol Voice Copilot", "Traffic Stops Query Agent", "Suspect Verification Bot", 
  "Real-time Translator AI", "Emergency SOS Trigger Bot", "Warrant Database Fetcher", 
  "Vehicle Registration AI", "Mobile Fingerprint Matcher", "On-Scene Evidence Logger",
  "Officer Shift Coordinator AI", "Mental Health Assessor Bot", "Hands-Free Plate Scanner AI",
  "AR Suspect Profiling Agent", "Secure Field Chatbot", "Conversational Roster AI",
  "Gang Territory Intel Bot", "Crime Proximity Alert AI", "Stolen Vehicle History Bot",
  "Live Interrogation Translator", "Cross-State Dialect Interpreter", "Tourist Complaint Copilot",
  "Audio-to-Text Transcription AI", "Heart-Rate Monitor Sync Bot", "Automatic Gun-Drawn Alert AI",
  "Dead-Zone GPS Tracker AI", "Backup Triangulation Bot", "Offline Edge Query AI",
  "Whisper-Level Voice Recognizer", "Environmental Noise Canceler", "Automated Context Gatherer",
  "De-escalation Strategy Bot", "Emotion Detection Assistant", "Real-Time Legal Advisor Bot",
  "Field Note Dictation AI", "Crime Scene Perimeter AI", "Witness Statement Logger",
  "Miranda Rights Prompter AI", "Traffic Ticket Auto-Drafter", "Body-Cam Sync Assistant",
  "Drone Launch Coordinator Bot", "Highway Pursuit Nav AI", "Hostage Situation Whisperer",
  "Riot Crowd Size Estimator", "Biometric Face-Match Assistant", "Fake ID Detector Bot",
  "Substance Abuse Symptom AI", "Domestic Violence Protocol Bot", "Missing Child Alert Bot",
  "Amber Alert Broadcaster AI", "Parolee Proximity Warner", "Off-Duty Threat Alert AI",
  "Weapon Concealment Detector", "Suspicious Activity Logger", "Street-Cam Sync Copilot",
  "Field Evidence Tagger AI", "First-Aid Guidance Bot", "K9 Unit Deployment Assessor",
  "Multi-Lingual Miranda Bot", "Digital Evidence Uploader AI", "Virtual Partner AI"
];

const copilotModules = [
  {
    title: "Voice-Command Operations",
    icon: <Mic size={20} />,
    items: ["Hands-free License Plate Check", "Vocal Suspect Description Match", "Voice-Activated SOS", "Dictated Field Notes"]
  },
  {
    title: "Mobile Field Assistance",
    icon: <Smartphone size={20} />,
    items: ["Offline Maps & Routing", "AR Suspect Profiling", "Secure Chat with Headquarters", "Shift & Duty Rosters"]
  },
  {
    title: "Context-Aware Queries",
    icon: <MessageSquare size={20} />,
    items: ["Conversational Warrant Search", "Local Gang Territory Intel", "Similar Crime Proximity Alerts", "Stolen Vehicle History"]
  },
  {
    title: "Real-time Translation",
    icon: <Activity size={20} />,
    items: ["Live Interrogation Translation", "Tourist Complaint Processing", "Cross-State Dialect Support", "Audio-to-Text Transcripts"]
  },
  {
    title: "Officer Safety & SOS",
    icon: <ShieldAlert size={20} />,
    items: ["Heart-rate Monitor Sync", "Automatic Gun-Drawn Alert", "Dead-zone GPS Last Known Location", "Backup Request Triangulation"]
  }
];

const aiFeatures = [
  "AI NLP Conversational Interface", "AI Edge Computing for Offline Mode", "AI Whisper-Level Voice Recognition",
  "AI Environmental Noise Cancellation", "AI Automated Context Gathering", "AI AR (Augmented Reality) Overlays",
  "AI Biometric Match from Mobile Camera", "AI Emotion Detection for De-escalation"
];

const databases = [
  "Warrant_DBs", "Vehicle_RTO_Records", "Wanted_Posters", "Field_Notes_Vault", "Officer_Duty_Logs", 
  "Translation_Corpus", "Gang_Territories", "CCTV_Location_Pins", "Beat_Patrol_Routes", "SOS_Event_Logs"
];

const dashboards = [
  "Copilot Usage Metrics", "Officer Field Query Logs", "Live SOS Dashboard", 
  "Voice Recognition Accuracy Board", "Device Battery & Health Monitor", "Real-time Patrol Tracker"
];

const apis = [
  "RTO Vehicle Registration APIs", "CCTNS Warrant Sync APIs", "Google Maps / GPS APIs", "Weather & Traffic APIs",
  "Wearable Health Monitor APIs", "Voice-to-Text Inference APIs", "Secure Encrypted Chat APIs"
];

const reports = [
  "Officer Copilot Engagement Report", "Field Query Resolution Time", "Most Searched Hot-spots", 
  "SOS Incident Audit Trail", "Language Translation Usage Logs", "Hardware Wear & Tear Metrics"
];

const security = [
  "Biometric App Unlock", "Encrypted Offline Storage", "Remote Device Wipe", 
  "Push-to-Talk Encryption", "Zero-Trust Device Registration", 
  "VPN-tunneled Queries", "Tamper-Proof Field Notes", "Bluetooth Proximity Lock"
];

const futureScope = [
  "Robotic K9 Sync Copilot", "HUD Smart Glasses Integration", "Neural-Link Command Feeds",
  "Autonomous Drone Backup Request", "Pre-Crime Proximity Buzzers", "Holographic Suspect Renderings"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Copilot Bots (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Field Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Copilot Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CopilotDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <MessageSquare className="inline-icon" size={28} /> AI Copilot for Officers
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Copilot</strong> is a mobile, voice-activated AI assistant for officers on patrol. Much like a virtual partner, the Copilot can instantly run license plates, check warrants, and translate languages completely hands-free, allowing officers to maintain situational awareness in the field.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Mic className="inline-icon" color="#3b82f6" /> Voice-Command Queries</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Officer: "Copilot, run UP32 XY 1234." AI instantly searches the RTO database and reads back the vehicle owner's details and any flagged stolen reports through the earpiece.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Smartphone className="inline-icon" color="#10b981" /> Mobile Field Intelligence</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Equipped with Edge AI, the Copilot app can match a suspect's photo against the criminal database directly from the phone camera, even in low-network areas.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Live Translation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If an officer encounters a non-local victim, the Copilot listens to the audio and provides real-time translated text/audio, instantly breaking language barriers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Officer Safety Auto-SOS</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Integrated with smartwatch biometrics. If an officer's heart rate spikes and they fall, the Copilot automatically broadcasts an SOS with GPS coordinates to the command center.</p>
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
            {copilotModules.map((mod, i) => (
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
            <MessageSquare size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI COPILOT <span>FOR OFFICERS</span></h1>
            <p className="cyber-subtitle">Voice-activated Field Assistant, Real-time Intel & Safety Over-watch</p>
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

export default CopilotDetailed;
