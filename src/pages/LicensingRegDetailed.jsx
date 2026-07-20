import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, FileSignature, Volume2
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Arms License Bot", "Background Vetting AI", "Explosives Audit Bot", 
  "Event Permission Router", "Loudspeaker Monitor AI", "Hotel DB Sync Bot", 
  "Procession Safety Analyst", "Cinema Security Evaluator", "Renewal Predictor",
  "Forgery Detector AI", "Risk Profiling Engine", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const licensingModules = [
  {
    title: "Arms & Explosives License",
    icon: <ShieldAlert size={20} />,
    items: ["Automated Background Vetting", "Arms Dealer Inventory Sync", "Explosives Transport Tracking", "Digital Renewal Workflows"]
  },
  {
    title: "Event & Procession Permission",
    icon: <Activity size={20} />,
    items: ["Route Clash Detection", "Crowd Density Forecasting", "Traffic Diversion Generator", "Automated NOC Routing"]
  },
  {
    title: "Loudspeaker & Noise Regulation",
    icon: <Volume2 size={20} />,
    items: ["Decibel Limit Monitoring", "Time-Restricted Permissions", "Automated Violation Alarms", "Public Complaint Sync"]
  },
  {
    title: "Hotel & Guest Verification",
    icon: <Network size={20} />,
    items: ["Real-time Guest Register Sync", "Watchlist Cross-matching", "Overstay Alerts", "Foreigner (C-Form) Integration"]
  },
  {
    title: "Cinema & Public Venue Security",
    icon: <FileSignature size={20} />,
    items: ["Fire Safety Audit Sync", "Evacuation Route Mapping", "CCTV Coverage Evaluation", "Automated Renewal Suspension"]
  }
];

const aiFeatures = [
  "AI Route-Clash Detection for Processions", "AI OSINT Vetting for Arms Applicants", "AI Anomaly Detection in Hotel Check-ins",
  "AI Decibel Pattern Recognition (Audio)", "AI Verification of Fire Audit Signatures", "AI Risk Profiling of Mass Events",
  "AI Geofencing for Explosives Trucks", "AI Automated Document Forgery Detection"
];

const databases = [
  "Arms_License_Registry", "Hotel_Guest_Ledger", "Procession_Routes_DB", "Explosives_Manifests", "Loudspeaker_Permissions", 
  "Event_NOC_Archive", "Fire_Safety_Audits", "Arms_Dealer_Inventory", "Rejected_Applicants_Index"
];

const dashboards = [
  "Live Event & Procession Radar", "Arms License Pendency", "Hotel Watchlist Hits", 
  "Explosive Transit Map", "Noise Violation Heatmap", "Venue Safety Compliance"
];

const apis = [
  "NDAL (National Database of Arms Licenses)", "BoI (Immigration) C-Form API", "Fire Department NOC Gateway", "State Transport (Vahan) API",
  "Smart City Noise Sensors", "Digital India e-Sign API"
];

const reports = [
  "Monthly Arms License Approvals", "Event Security Resource Audit", "Hotel Compliance Scorecard", 
  "Noise Pollution Violation Trends", "Explosives Transit Safety", "Revenue from Licensing Fees"
];

const security = [
  "Strict RBAC for Arms Approval", "Blockchain Timestamped NOCs", "Encrypted Guest Data Transmission", 
  "Biometric Login for Arms Dealers", "Watermarked PDF Licenses", 
  "Audit Trail for Permission Rejections", "Anti-Scraping Rate Limiters", "Zero-Knowledge Proofs for PII"
];

const futureScope = [
  "Drone-based Crowd Density Scanning", "AI Sound-Cancelation perimeters for Events", "Blockchain Decentralized Arms Ledger",
  "Facial Recognition at Hotel Desks", "Predictive Riot Modeling via Event Routes", "Automated Decibel Fine Deduction"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'License Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Regulation Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Compliance Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const LicensingRegDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <FileSignature className="inline-icon" size={28} /> AI Police Licensing & Regulation
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Licensing & Regulation</strong> automates the massive public interface of the police. From vetting arms licenses and tracking explosives to instantly processing event NOCs and verifying hotel guests against watchlists, AI brings speed and airtight security to public permissions.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#3b82f6" /> Arms & Explosives</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automates background checks via CCTNS for arms license applicants. Integrates with arms dealers to track bullet inventory, and geofences trucks carrying industrial explosives.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Event & Procession NOC</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Applicants map their proposed procession route on an interactive map. The AI instantly checks for route clashes with other events or sensitive zones, automatically suggesting traffic diversions.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Hotel Guest Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hotels push their daily guest registers via API. The AI instantly cross-references names and IDs against criminal watchlists and Interpol databases, alerting the nearest station if a match is found.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Volume2 className="inline-icon" color="#ef4444" /> Loudspeaker Enforcement</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Digitizes loudspeaker permissions with strict time boundaries. Connects with Smart City IoT decibel sensors to automatically register violations if noise levels exceed the legal limit.</p>
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
            {licensingModules.map((mod, i) => (
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
            <FileSignature size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">LICENSING & <span>REGULATION</span></h1>
            <p className="cyber-subtitle">Arms Permits, Event NOCs & Hotel Watchlist Sync</p>
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

export default LicensingRegDetailed;
