import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, SearchCheck, ClipboardCheck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Surprise Audit Scheduler", "Deficiency Tracker AI", "Compliance Verification Bot", 
  "Vehicle Fleet Scorer", "Armoury Inspector Bot", "Cleanliness Evaluator", 
  "Record Room Auditor", "Scoring Engine NLP", "Historical Audit Analyzer",
  "Roster Randomizer AI", "Officer Readiness Bot"
];

const inspectionModules = [
  {
    title: "Surprise Inspection System",
    icon: <SearchCheck size={20} />,
    items: ["AI Randomized Station Selection", "Automated Auditor Rostering", "Geo-fenced Audit Check-ins", "Tamper-Proof Timestamps"]
  },
  {
    title: "Station & Line Audit",
    icon: <ClipboardCheck size={20} />,
    items: ["Computer Vision Cleanliness Scoring", "Barrack Hygiene Metrics", "Lock-up Security Checks", "Public Waiting Area Audit"]
  },
  {
    title: "Equipment & Vehicle Checks",
    icon: <Activity size={20} />,
    items: ["Fleet Readiness Percentage", "Weapon Maintenance Logs", "Riot Gear Inventory Sync", "Radio Comms Testing"]
  },
  {
    title: "Record & File Inspection",
    icon: <FileText size={20} />,
    items: ["Malkhana (Evidence) Audits", "FIR Register Compliance", "History Sheeter Tracking Checks", "Warrant Execution Ratios"]
  },
  {
    title: "Deficiency Resolution",
    icon: <ShieldAlert size={20} />,
    items: ["Automated Show-Cause Drafts", "Deadline-Driven Remediation", "Photographic Evidence Upload", "Re-Inspection Scheduling"]
  }
];

const aiFeatures = [
  "AI Computer Vision for Dirt/Damage Detection", "AI Anomaly Detection in Malkhana Logs", "AI Bias-Free Audit Randomization",
  "AI Predictive Maintenance Scoring for Fleet", "AI Automated Grading (A/B/C/D) Engine", "AI Discrepancy Highlighting",
  "AI Voice-to-Text Inspector Notes", "AI NLP Sentiment on Public Interactions"
];

const databases = [
  "Annual_Inspection_Roster", "Surprise_Audit_Logs", "Station_Scoring_Matrix", "Vehicle_Health_Ledger", "Malkhana_Audit_Trails", 
  "Deficiency_Action_Reports", "Officer_Compliance_Scores", "Photographic_Evidence_Lake", "Equipment_Readiness_DB"
];

const dashboards = [
  "State-wide Station Rankings", "Live Audit Check-in Map", "Deficiency Remediation Tracker", 
  "Fleet & Armoury Readiness", "Malkhana Compliance Heatmap", "Inspector Activity Radar"
];

const apis = [
  "CCTNS Evidence Sync API", "Vahan (Vehicle) Database Sync", "Geo-Fencing Location APIs", "Cloud Storage API (Photos)",
  "Digital Signature (DSC) Gateway", "HRMS Leave/Roster Sync"
];

const reports = [
  "Annual Station Performance Review", "Critical Deficiency Alerts", "Malkhana (Evidence) Discrepancy", 
  "Fleet Maintenance ROI", "Inspector Bias Analysis Report", "District-wise Compliance Scorecard"
];

const security = [
  "Geo-fenced App Access for Inspectors", "Blockchain Timestamps on Audit Photos", "Strict Access to Informer Records", 
  "Encrypted Transmission of Deficiencies", "Audit Trail of Scored Changes", 
  "Biometric Sign-off by SHO", "Offline-first App Architecture", "Watermarked Audit PDFs"
];

const futureScope = [
  "Autonomous Audit Drones for Police Lines", "IoT Sensors in Malkhana (Weight/Temp)", "Wearable Bodycam AI Auditing",
  "Predictive Failure Analysis for Weapons", "Virtual Reality (VR) Pre-Inspection Walkthroughs", "Crowdsourced Public Cleanliness Scoring"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Audit Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Inspection Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Compliance Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const InspectionDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <SearchCheck className="inline-icon" size={28} /> AI Police Inspection & Audits
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Inspection</strong> brings transparency and accountability to police stations. By randomizing surprise audits, utilizing Computer Vision for cleanliness checks, and tracking Malkhana (evidence room) discrepancies, the AI ensures absolute operational readiness across the state.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><SearchCheck className="inline-icon" color="#3b82f6" /> Surprise Inspection Bot</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses unbiased randomization algorithms to select police stations for surprise audits. Alerts the inspecting officer via a geo-fenced mobile app only when they are within 1km of the target.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ClipboardCheck className="inline-icon" color="#10b981" /> Station & Line Audits</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Inspectors upload photos of barracks, lock-ups, and public waiting areas. AI Computer Vision analyzes the images to instantly score cleanliness and infrastructural damage.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#f59e0b" /> Malkhana & Record Checks</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references CCTNS digital records with physical evidence stored in the Malkhana. Any missing items or overdue warrant executions are instantly flagged as Critical Deficiencies.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Deficiency Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically generates a deadline (e.g., 7 days) to fix identified issues. If the SHO fails to upload proof of remediation, the AI drafts an automated Show-Cause notice.</p>
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
            {inspectionModules.map((mod, i) => (
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
            <SearchCheck size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>INSPECTION</span></h1>
            <p className="cyber-subtitle">Surprise Audits, Cleanliness AI & Deficiency Tracking</p>
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

export default InspectionDetailed;
