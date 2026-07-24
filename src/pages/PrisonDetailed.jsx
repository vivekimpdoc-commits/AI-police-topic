import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Users, Key, AlertTriangle
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Inmate Facial Recognition AI", "Gang Rivalry Predictor", "Contraband X-Ray Scanner", 
  "Parole Risk Assessor", "Jailbreak Trajectory Bot", "Visitor Background Check AI", 
  "Inmate Sentiment/Aggression Analyzer", "Smart Cell Lock Manager", "Suicide Prevention Bot",
  "Crypto-Smuggling Intercept AI", "Rehabilitation Matcher Bot"
];

const prisonModules = [
  {
    title: "AI Inmate Monitoring",
    icon: <Users size={20} />,
    items: ["Continuous CCTV Facial Tracking", "Aggression/Fight Detection", "Suicide Risk Posture Analysis", "Headcount Automation"]
  },
  {
    title: "Gang & Threat Intelligence",
    icon: <AlertTriangle size={20} />,
    items: ["Rival Gang Proximity Alerts", "Radicalization Detection in Cells", "Extortion Call Interception", "Jailbreak Prediction Models"]
  },
  {
    title: "Contraband & Access Control",
    icon: <Key size={20} />,
    items: ["AI X-Ray for Smuggled Phones", "Drone-drop Interception (Nets/Jammers)", "Biometric Cell Locking", "Visitor Face Verification"]
  },
  {
    title: "Parole & Rehabilitation",
    icon: <Activity size={20} />,
    items: ["Recidivism (Re-offense) Prediction", "Automated Bail Eligibility Checks", "Skill-matching for Jail Factories", "Mental Health Triage AI"]
  },
  {
    title: "Prison Administration",
    icon: <LayoutDashboard size={20} />,
    items: ["Diet & Ration Optimization", "Guard Shift Fatigue Monitoring", "Hospital/Court Escort Routing", "E-Mulaqat (Virtual Visit) Monitoring"]
  }
];

const aiFeatures = [
  "AI Kinematic Aggression Detection", "AI Predictive Recidivism Scoring", "AI Natural Language Call Transcripts",
  "AI Automated Baggage/Body Scanners", "AI Social Graphing of Gang Networks", "AI Drone Defense Automation",
  "AI Biometric Liveness Detection", "AI Semantic Sentiment Analysis (Inmate Letters)"
];

const databases = [
  "E_Prisons_Inmate_DB", "Gang_Affiliation_Ledger", "CCTV_Behavioral_Logs", "Visitor_Aadhaar_Sync", "Contraband_Seizure_Log", 
  "Parole_And_Furlough_DB", "Inmate_Medical_History", "Court_Production_Warrants", "Guard_Shift_Roster", "E_Mulaqat_Call_Records"
];

const dashboards = [
  "Live Prison Block Heatmap", "High-Risk Inmate Tracker", "Gang Tension Index", 
  "Parole Eligibility Pipeline", "Contraband Detection Feed", "Guard Deployment Efficiency"
];

const apis = [
  "National e-Prisons API", "ICJS (Inter-Operable Criminal Justice System)", "Aadhaar / UIDAI (Visitor Verification)", "Telecom Lawful Intercept APIs",
  "Hospital Tele-medicine Sync", "Court e-Filing Sync"
];

const reports = [
  "Monthly Jail Incident/Violence Report", "Contraband Smuggling Trends", "Parole Jump/Violation Rate", 
  "Prison Overcrowding Analytics", "Rehabilitation Program ROI", "Guard Corruption/Collusion Flags"
];

const security = [
  "Air-gapped CCTV Networks", "Biometric + Token 2FA for Guards", "Jamming of Unauthorized RF/Cell Signals", 
  "Automated Lockdown Protocols", "Tamper-Proof Inmate Logs", 
  "Deep Packet Inspection of E-Mulaqat", "Audio Masking for Legal Calls", "Strict Guard Body-cam Sync"
];

const futureScope = [
  "Robotic Prison Guards (Non-Lethal)", "Brainwave Pacification Therapies", "Virtual Reality Solitary Confinement",
  "Sub-dermal Tracking Microchips", "AI Holographic Visitation", "Predictive Pre-Crime Segregation"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Warden Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Prison Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Warden Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PrisonDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Key className="inline-icon" size={28} /> AI Prison & Inmate Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Prison Management</strong> transforms correctional facilities into high-tech, zero-escape environments. It uses computer vision to detect gang fights before they escalate, scans for drones dropping contraband, and predicts which inmates are high flight risks for parole.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#3b82f6" /> AI Behavioral Monitoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>CCTV cameras don't just record; they understand. AI detects aggressive postures (fights) or depressive isolation (suicide risk) and alerts wardens instantly, eliminating manual blind spots.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><AlertTriangle className="inline-icon" color="#10b981" /> Gang Rivalry Prevention</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>The system knows which inmates belong to rival factions. If members of opposing gangs cross paths in the yard, automated doors lock and guards are dispatched to prevent riots.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Contraband & Drone Intercept</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses advanced X-ray AI to spot mobile phones hidden in body cavities. Detects unauthorized drones flying over the prison yard and automatically activates signal jammers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Recidivism & Parole AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes an inmate's behavior, psychological profile, and past criminal record to generate a "Recidivism Score" (likelihood of re-offending) for parole boards.</p>
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
            {prisonModules.map((mod, i) => (
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
            <Key size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI PRISON <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">Gang Tracking, Contraband Scanning & Smart Lockdowns</p>
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

export default PrisonDetailed;
