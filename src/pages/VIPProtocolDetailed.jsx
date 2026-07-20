import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Star, Car
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Protocol AI Assistant", "VIP Route Planner", "Convoy Scheduler Bot", 
  "Venue Readiness Auditor", "Escort Rotation AI", "Threat Level Assessor", 
  "Guest Profiling Bot", "Security Zone Manager", "Movement Tracker AI",
  "Foreign Intel Sync Bot", "Counter-Surveillance AI", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const vipModules = [
  {
    title: "Movement & Convoy Planning",
    icon: <Car size={20} />,
    items: ["AI VVIP Route Optimizer", "Dynamic Convoy Formation", "Alternate Route Planner", "ETA Prediction Engine"]
  },
  {
    title: "Venue & Zone Security",
    icon: <Shield size={20} />,
    items: ["AI Threat Level Assessor", "Temporary Security Zone Setup", "Access Control Points", "CCTV Coverage Mapper"]
  },
  {
    title: "Guest Management",
    icon: <Star size={20} />,
    items: ["AI Convoy Security Sync", "Foreign Delegate Briefings", "Accommodation Security", "Medical Readiness Sync"]
  },
  {
    title: "Escort & Protocol",
    icon: <Activity size={20} />,
    items: ["Escort Team Rotation AI", "Protocol Compliance Checker", "Motorcade Management", "Post-Visit Security Debrief"]
  }
];

const aiFeatures = [
  "AI Real-time Risk Scoring of VIP Movement Routes", "AI Automated Protocol Schedule from Historical Data", "AI Crowd Density Prediction along VIP Corridors",
  "AI OSINT Profiling of Incoming Foreign Delegates", "AI Cross-referencing of Guest Invitees against Watchlists", "AI Anomaly Detection in Escort Team Behavior",
  "AI Automated Venue Clearance Certification", "AI Coordination between Air, Road and Rail Assets"
];

const databases = [
  "VIP_Profile_Index", "Convoy_Route_Archive", "Escort_Team_Roster", "Venue_Security_Audit_DB", "Foreign_Guest_Profiles", 
  "Threat_Assessment_Logs", "Protocol_Schedule_DB", "Movement_Tracker_Ledger"
];

const dashboards = [
  "Live Convoy Tracker Map", "Venue Readiness Score", "Escort Team Availability", 
  "VIP Threat Level Matrix", "Accommodation Security Status", "Protocol Compliance Rate"
];

const apis = [
  "SPG (Special Protection Group) Feeds", "MHA Security Clearance API", "Airport ATC Integration", "Railway Security Gateway",
  "Google Maps Traffic API", "Foreign Ministry (MEA) Guest Profiles"
];

const reports = [
  "VIP Visit Security Assessment", "Convoy Risk Report", "Venue Clearance Certificate", 
  "Escort Team Performance", "Protocol Compliance Audit", "Post-Visit Debrief"
];

const security = [
  "Top-Secret Clearance for VIP Route Data", "Encrypted Radio Comms for Convoys", "Anti-Drone Jamming Coordination", 
  "Biometric Access to Escort Vehicle Systems", "Compartmentalized Information Sharing", 
  "Real-time Counter-Surveillance Feeds", "Blockchain Log of All Protocol Changes", "Zero-Trust Architecture"
];

const futureScope = [
  "AI Autonomous Escort Drones", "Predictive Route Optimization using Live Traffic & Threat Feeds", "AI Deepfake Detection for Impostor Alerts",
  "Wearable Biometric Monitors for VIP Health", "Holographic Security Briefings", "Satellite-guided Convoy Management"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Protocol Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'VIP Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Security Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const VIPProtocolDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Star className="inline-icon" size={28} /> AI VIP & Protocol Security
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>VIP & Protocol</strong> manages the complex, high-stakes choreography of protecting heads of state, foreign dignitaries, and senior officials. AI generates real-time threat assessments for movement routes, automates convoy scheduling, and cross-references all guests against national security watchlists.
            </p>
            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Car className="inline-icon" color="#3b82f6" /> AI Route Risk Scoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI continuously analyzes real-time traffic data, known threat locations, and historical incident patterns to score every possible VIP route and recommend the safest option.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#10b981" /> Venue Clearance AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Before a VIP visit, AI generates a comprehensive venue audit checklist, cross-referencing CCTV coverage maps, entry/exit choke points, and roof access, certifying the venue as secure.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Star className="inline-icon" color="#f59e0b" /> Guest OSINT Profiling</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>For foreign delegations, AI scrapes OSINT (Open Source Intelligence) to generate a threat profile, checking for any extremist affiliations or past security incidents linked to members of the entourage.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Dynamic Escort Rotation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI schedules and rotates escort teams to prevent fatigue-related lapses in security. It ensures no single officer is overextended during prolonged VIP visits.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan">
                <Bot className="card-icon" /><h4>{expert}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {vipModules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">{mod.icon}<h3>{mod.title}</h3></div>
                <div className="module-tags">{mod.items.map((item, j) => <span key={j} className="module-tag">{item}</span>)}</div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid">
            {aiFeatures.map((feat, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple">
                <Cpu className="card-icon" /><h4>{feat}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel"><h3><Database className="inline-icon" color="#06b6d4" /> Database Tables</h3><div className="tag-cloud">{databases.map((db, i) => <span key={i} className="tech-tag">{db}</span>)}</div></div>
              <div className="panel"><h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3><div className="tag-cloud">{apis.map((api, i) => <span key={i} className="tech-tag tech-tag-alt">{api}</span>)}</div></div>
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel"><h3><LayoutDashboard className="inline-icon" color="#3b82f6" /> Dashboards</h3><ul className="premium-list">{dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>)}</ul></div>
              <div className="panel"><h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3><ul className="premium-list">{reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>)}</ul></div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel highlight-red"><h3><ShieldAlert className="inline-icon" color="#ef4444" /> Security Protocols</h3><ul className="premium-list">{security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}</ul></div>
              <div className="panel highlight-green"><h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3><ul className="premium-list">{futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}</ul></div>
            </div>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="hrms-detailed-page">
      <div className="hrms-bg-fx"></div>
      <div className="hrms-grid-overlay"></div>
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn"><ArrowLeft size={20} /> BACK TO MODULES</button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><Star size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">VIP & <span>PROTOCOL</span></h1><p className="cyber-subtitle">Convoy AI, Venue Clearance & Escort Rotation</p></div>
        </div>
      </header>
      <div className="hrms-layout">
        <nav className="hrms-sidebar">
          {tabs.map(tab => (
            <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.icon} {tab.label}</button>
          ))}
        </nav>
        <main className="hrms-content-area">
          <AnimatePresence mode="wait"><div key={activeTab}>{renderContent()}</div></AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default VIPProtocolDetailed;
