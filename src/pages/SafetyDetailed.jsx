import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Heart, Siren, Baby
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "SOS Audio Classifier AI", "Human Trafficking Network Mapper", "Domestic Violence Sentiment Bot", 
  "Child Pornography (CSAM) Scanner", "Senior Citizen Check-in Agent", "Safe Route Generator", 
  "Dark Web Escort Ad Scraper", "School Zone Threat Monitor", "Gender Violence Predictor",
  "Distress Signal Triangulator", "Victim Anonymizer Bot"
];

const safetyModules = [
  {
    title: "Women's Safety SOS",
    icon: <Siren size={20} />,
    items: ["Wearable/App Panic Button", "Shake-to-Alert Gestures", "Live Audio Stream Analysis", "Nearest PRV Auto-Dispatch"]
  },
  {
    title: "Child Safety & Anti-Trafficking",
    icon: <Baby size={20} />,
    items: ["CSAM (Child Exploitation) Detection", "Railway Station Facial Checks", "Runaway Child Tracker", "Dark Web Trafficking Rings"]
  },
  {
    title: "Domestic Violence Support",
    icon: <Heart size={20} />,
    items: ["Silent Chatbot Reporting", "Keyword Flagging in Calls", "Repeat Offense Escalation", "Shelter Home Sync"]
  },
  {
    title: "Senior Citizen Welfare",
    icon: <Shield size={20} />,
    items: ["Daily AI Voice Check-ins", "Medical Emergency Fall Detection", "Maid/Servant Verification", "Property Fraud Alerts"]
  },
  {
    title: "Safe Routing (Night Travel)",
    icon: <Network size={20} />,
    items: ["AI Safe-Path Suggestions", "CCTV Density Mapping", "Live Location Sharing to Control Room", "Cab Driver Background Checks"]
  }
];

const aiFeatures = [
  "AI Audio Emotion Recognition (Fear/Scream)", "AI Kinematic Fall Detection via Smartwatches", "AI Semantic Chatbots for Silent Victims",
  "AI Deep Web Escort Ad Scraping", "AI Pedophile Network Graphing", "AI Dark Area Heatmap Generation",
  "AI Automated Vahan Database Sync", "AI Zero-Click SOS Activation"
];

const databases = [
  "Registered_Women_Seniors", "Sex_Offender_Registry", "SOS_Event_Logs", "CCTV_Safe_Zones", "Shelter_Home_Capacity", 
  "Domestic_Abuse_FIRs", "CSAM_Hash_Database", "Verified_Cab_Drivers", "Emergency_Contacts", "Trafficking_Routes"
];

const dashboards = [
  "Live SOS Triggers Map", "Women & Child Crime Trends", "Senior Citizen Active Check-ins", 
  "Human Trafficking Intel Board", "Safe City CCTV Coverage", "Emergency Response ETA Matrix"
];

const apis = [
  "Women Helpline (1090) APIs", "Childline (1098) Sync", "Uber/Ola Driver Verification APIs", "Smartwatch Health APIs (Apple/Garmin)",
  "Interpol ICSE Database (CSAM)", "NGO Shelter Management APIs"
];

const reports = [
  "Monthly Crime Against Women Audit", "SOS Response Time (TAT)", "Human Trafficking Ring Busts", 
  "Domestic Violence Hotspots", "Senior Citizen Outreach Metrics", "Safe City Infrastructure Gaps"
];

const security = [
  "Complete Victim Anonymity", "End-to-End Encrypted SOS Feeds", "Strict Court-Order Access Only", 
  "DPDP Law Privacy Compliance", "Self-Destructing Chat Logs (DV)", 
  "Geo-fenced Server Storage", "Anti-Stalking Protections", "Secure OAuth2 Cab Integrations"
];

const futureScope = [
  "AI Autonomous Escort Drones (Night)", "Neural Threat Implants", "Predictive Abuse Intercepts",
  "Holographic Decoys for Stalkers", "Metaverse Safe Spaces", "Quantum-Secured Victim Identities"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Protection Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Safety Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Safety Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const SafetyDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Heart className="inline-icon" size={28} /> AI Women, Child & Senior Safety
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Safety Management</strong> focuses on protecting the most vulnerable citizens. It integrates smartwatch SOS triggers, domestic violence silent-reporting chatbots, and deep-web scraping to bust human trafficking rings—ensuring a 24/7 digital shield.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Siren className="inline-icon" color="#3b82f6" /> SOS & Audio Analysis</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a woman presses the panic button or shakes her phone, the mic opens. AI analyzes the audio for screams or struggle noises and auto-dispatches the nearest PRV in under 3 minutes.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Baby className="inline-icon" color="#10b981" /> Anti-Human Trafficking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scrapes the dark web and backpage ads to identify trafficked children. AI facial recognition flags matches across railway and bus station CCTVs to intercept traffickers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Heart className="inline-icon" color="#f59e0b" /> Domestic Violence Support</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides a "silent" chatbot disguised within other apps for victims of domestic abuse to report crimes or request immediate extraction without alerting the abuser.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Senior Citizen Protection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>An automated AI voice bot calls registered senior citizens daily to check on their well-being. Smartwatch integration alerts police instantly in case of a medical fall or distress.</p>
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
            {safetyModules.map((mod, i) => (
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
            <Heart size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI WOMEN & CHILD <span>SAFETY</span></h1>
            <p className="cyber-subtitle">SOS Triangulation, Anti-Trafficking & Domestic Violence Support</p>
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

export default SafetyDetailed;
