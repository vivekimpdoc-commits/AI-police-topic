import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Lock, UserX
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Lockup CCTV Monitor", "Medical Check Tracker", "High-Risk Profiler", 
  "Court Escort Router", "Escape Predictor AI", "Custody Meal Bot", 
  "Visitor Background Scanner", "Biometric Identity Guard", "Transfer Workflow Sync",
  "Torture Prevention Bot", "Suicide Risk Analyst", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const custodyModules = [
  {
    title: "Lockup Security & CCTV",
    icon: <Lock size={20} />,
    items: ["AI Motion Anomaly Detection", "Automated Headcount", "Self-Harm/Suicide Prevention", "Unauthorized Access Alerts"]
  },
  {
    title: "Prisoner Lifecycle",
    icon: <UserX size={20} />,
    items: ["Arrest to Remand Tracking", "Mandatory Medical Check Alerts", "Diet & Meal Logging", "Custody Transfer Protocols"]
  },
  {
    title: "Court Escort & Transport",
    icon: <Activity size={20} />,
    items: ["Automated Escort Roster", "GPS Prison Van Tracking", "High-Risk Ambush Alerts", "Court Appearance Reminders"]
  },
  {
    title: "Visitor & Compliance Management",
    icon: <Shield size={20} />,
    items: ["Visitor Biometric KYC", "Interrogation Audio Logs", "NHRC Compliance Tracking", "Digital Custody Registers"]
  }
];

const aiFeatures = [
  "AI Deep Learning for Self-Harm Detection in CCTV", "AI Predictive Modeling for Escape Risks", "AI Facial Recognition for Visitors",
  "AI Audio Sentiment Analysis in Interrogation Rooms", "AI Optimal Routing for High-Risk Prison Vans", "AI Automated NHRC Compliance Reports",
  "AI Duty Allocation for Court Escorts", "AI Bio-metric Cross-Verification of Prisoners"
];

const databases = [
  "Custody_Register_DB", "Lockup_CCTV_Archive", "Medical_Check_Logs", "Court_Escort_Roster", "Visitor_KYC_Ledger", 
  "High_Risk_Profiles", "Interrogation_Audio_Lake", "Custody_Meal_Ledger"
];

const dashboards = [
  "Live Lockup Command Center", "Court Appearance Queue", "High-Risk Prisoner Heatmap", 
  "Medical Check Pendency", "Escort Van Live Tracking", "NHRC Compliance Radar"
];

const apis = [
  "eCourts Sync API", "Hospital Medical Records Sync", "NHRC/SHRC Reporting Gateway", "CCTNS Arrest Record Sync",
  "GPS Telemetry (Prison Vans)", "Automated Fingerprint Identification System (AFIS)"
];

const reports = [
  "Daily Lockup Headcount", "Medical Compliance Audit", "Court Escort Duty Log", 
  "High-Risk Transfer Summary", "Visitor Background Check Report", "Interrogation Duration Logs"
];

const security = [
  "End-to-End Encrypted CCTV Streams", "Strict Physical Air-Gapping of Lockup Feeds", "Biometric Dual-Authentication for Transfers", 
  "Blockchain Immutable Custody Timestamps", "Anti-Tamper Audio Recording", 
  "Hardware Security Modules for Biometrics", "Role-Based View Access for Inspectors", "Zero-Trust Architecture"
];

const futureScope = [
  "Robotic Lockup Patrols", "AI Emotion Detection via Thermal Cameras", "Automated Drone Escorts for Prison Vans",
  "Blockchain-based Bail & Remand Warrants", "Virtual Reality Interrogation Training", "Smart Cells with Bio-vitals Monitoring"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Custody Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Management Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Custody Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PrisonerCustodyDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Lock className="inline-icon" size={28} /> AI Prisoner & Custody Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Prisoner & Custody Management</strong> replaces archaic manual lockup registers with an intelligent, bio-metric, and CCTV-integrated digital fortress. It ensures absolute compliance with human rights laws while using predictive AI to prevent escapes, self-harm, and ambushes during transport.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Lock className="inline-icon" color="#3b82f6" /> Smart Lockup Monitoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuous AI analysis of lockup CCTV feeds. Instantly detects anomalies such as sudden motion (clashes) or prolonged stillness, alerting officers to potential self-harm attempts before they happen.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><UserX className="inline-icon" color="#10b981" /> Prisoner Lifecycle & Rights</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks the exact timestamp of arrest. Automates reminders for mandatory 24-hour medical checkups and court productions, ensuring 100% compliance with NHRC/Supreme Court guidelines.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Escort & Transport Security</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>For high-risk prisoners, the AI generates unpredictable escort routes to court. Prison vans are tracked via GPS, and any unplanned halt triggers a red alert for potential ambush or escape.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Interrogation & Visitors</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>All visitors are biometrically logged and cross-referenced with criminal databases. Interrogation rooms feature automated audio logging to protect officers against false allegations of torture.</p>
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
            {custodyModules.map((mod, i) => (
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
            <Lock size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">CUSTODY <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">Lockup AI, Court Escorts & Prisoner Rights Compliance</p>
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

export default PrisonerCustodyDetailed;
