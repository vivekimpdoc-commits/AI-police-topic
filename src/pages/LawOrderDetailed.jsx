import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, Megaphone, MapPin
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Riot Risk Predictor AI", "Protest Sentiment Analyzer", "Drone Swarm Commander", 
  "Crowd Density Estimator", "VVIP Threat Profiler", "Rumor Control Bot", 
  "Tear Gas Inventory Manager", "Curfew Zone Enforcer", "Fake News Fact-Checker",
  "Weapon Detection CCTV AI", "Social Media Radicalization Bot", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const lawOrderModules = [
  {
    title: "Riot & Unrest Prediction",
    icon: <Megaphone size={20} />,
    items: ["Social Media Sentiment (Hate Speech)", "Festival Sensitivity Mapping", "Protest Route Tracking", "Communal Tension Alerts"]
  },
  {
    title: "Crowd Control Analytics",
    icon: <Users size={20} />,
    items: ["CCTV Density Counting", "Stampede Risk Algorithms", "Drone Surveillance Integration", "Loudspeaker Auto-Warnings"]
  },
  {
    title: "VVIP & Election Security",
    icon: <ShieldAlert size={20} />,
    items: ["Polling Booth Threat Modeling", "Convoy Anti-Sabotage Router", "Rally Perimeter Breach Detection", "Candidate Threat Index"]
  },
  {
    title: "Weapon & Threat Detection",
    icon: <Activity size={20} />,
    items: ["Gun & Knife Object Detection (CCTV)", "Abandoned Baggage Alerts", "Gunshot Audio Triangulation", "Masked Face Flagging"]
  },
  {
    title: "Curfew & Section 144 Mgmt",
    icon: <MapPin size={20} />,
    items: ["Automated Geo-fencing", "E-Pass Issuance System", "Illegal Gathering Alerts", "Drone-based Announcement Systems"]
  }
];

const aiFeatures = [
  "AI Multi-modal Sentiment Analysis", "AI Object Detection (Weapons/Luggage)", "AI Swarm Drone Coordination",
  "AI Stampede Kinematics Prediction", "AI Acoustic Gunshot Recognition", "AI Rumor/Fake News Propagation Graphing",
  "AI Automated E-Pass Approval via OCR", "AI Facial Disguise Penetration"
];

const databases = [
  "Historical_Riots_DB", "Election_Booth_Sensitivity", "Weapon_Signatures", "Social_Media_Hate_Speech", "Drone_Flight_Logs", 
  "Curfew_E_Pass_Ledger", "VVIP_Threat_Dossiers", "Festival_Calendar_Risk", "Riot_Gear_Inventory", "Geo_Fenced_Zones"
];

const dashboards = [
  "Live City Threat Heatmap", "Protest & Rally Tracker", "Drone Swarm Live Feed", 
  "Social Media Tension Index", "Curfew Zone Violations", "Election Booth Security Status"
];

const apis = [
  "Twitter/Meta Firehose APIs", "Election Commission Intel APIs", "National Disaster Management (NDMA) APIs", "Drone GCS (Ground Control) APIs",
  "Telecom Internet Kill-Switch APIs", "Smart City PA System APIs"
];

const reports = [
  "Pre-Election Vulnerability Audit", "Festival Deployment Strategy", "Riot Post-Mortem Analytics", 
  "Weapon Detection Accuracy Rate", "Fake News Takedown Summary", "Curfew Economic Impact"
];

const security = [
  "Encrypted Drone Feeds", "Zero-Latency Edge Computing", "Classified VVIP Itineraries", 
  "Social Media Takedown Authority", "Deep Packet Inspection (DPI) for Internet Bans", 
  "Command Center Biometric Auth", "Redundant Radio Comms", "Tamper-Proof Audit Logs"
];

const futureScope = [
  "Non-Lethal Microwave Crowd Dispersion", "Autonomous Robo-Dogs for Patrol", "Pre-Crime Behavioral Precincts",
  "Holographic Barricades", "Real-time Brainwave Aggression Monitoring", "Smart Dust Surveillance"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Tactical Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Law & Order Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Tactical Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const LawOrderDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI Law & Order Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Law & Order Management</strong> is the ultimate tactical command tool. It prevents riots by detecting hate speech on social media, calculates stampede risks during festivals using drone swarms, and uses CCTV to instantly detect weapons and abandoned bags in crowded areas.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Megaphone className="inline-icon" color="#3b82f6" /> Riot & Protest Prediction</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scans millions of social media posts to detect sudden spikes in communal hate speech. Warns commanders days before a planned violent protest can materialize.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#10b981" /> Drone Swarm Crowd Control</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Deploys tethered and free-flying drones over mega-festivals (like Kumbh Mela). AI calculates crowd density per square meter to predict and prevent stampedes.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Weapon & Threat CCTV</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Turns ordinary CCTVs into smart sentries. If a person pulls out a firearm, a knife, or leaves a bag unattended at a railway station, an alarm triggers instantly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MapPin className="inline-icon" color="#ef4444" /> Curfew & E-Pass Automation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>During Section 144 or lockdowns, AI automatically processes thousands of E-Pass requests using OCR, rejecting invalid ones and approving emergency medical passes in seconds.</p>
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
            {lawOrderModules.map((mod, i) => (
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
            <ShieldAlert size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI LAW <span>& ORDER</span></h1>
            <p className="cyber-subtitle">Riot Prediction, Drone Crowd Control & Threat Detection</p>
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

export default LawOrderDetailed;
