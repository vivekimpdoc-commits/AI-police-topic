import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, FlaskConical, Stethoscope
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Sample Tracker Bot", "Lab Capacity Analyzer", "DNA Matcher AI", 
  "Chemical Inventory Bot", "Instrument Calibrator", "Turnaround Predictor", 
  "Toxicology Analyzer AI", "Quality Assurance Bot", "Accreditation Sync AI",
  "Bio-Hazard Alert Bot", "Evidentiary Chain Tracker", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const labModules = [
  {
    title: "Sample & Evidence Tracking",
    icon: <Database size={20} />,
    items: ["AI Forensics Analyzer", "Chain of Custody Blockchain", "Cold Storage Temperature Monitor", "Automated Case Linking"]
  },
  {
    title: "Forensic Analysis",
    icon: <FlaskConical size={20} />,
    items: ["AI DNA Matcher", "Digital Forensics Queue", "Toxicology Report Auto-Gen", "Ballistics Image Recognition"]
  },
  {
    title: "Lab Operations & QA",
    icon: <Activity size={20} />,
    items: ["AI Ballistics Predictor", "Chemical Reagent Inventory", "NABL Quality Assurance Sync", "Bio-waste Disposal Logs"]
  },
  {
    title: "Reporting & Legal",
    icon: <FileText size={20} />,
    items: ["e-Signature Court Reports", "Turnaround Time (TAT) Analytics", "Virtual Court Testimony Link", "Expert Witness Roster"]
  }
];

const aiFeatures = [
  "AI Deep Learning for matching Ballistic Striations on Bullets", "AI Prediction of DNA Degradation based on Storage Temps", "AI Automated Generation of Medico-Legal Reports",
  "AI Analysis of Toxicology Spectrometer Data", "AI Optimization of Sample Batching for Maximum Throughput", "AI Detection of Tampering in Digital Evidence Files",
  "AI Chatbot for IOs (Investigating Officers) to check Sample Status", "AI Forecasting of Reagent Shortages"
];

const databases = [
  "Evidence_RFID_Ledger", "DNA_Profile_Index", "Toxicology_Spectra_Lake", "Instrument_Calibration_Logs", "Reagent_Inventory_DB", 
  "Court_Report_Archive", "BioHazard_Disposal_Logs", "NABL_Audit_Trails"
];

const dashboards = [
  "State-wide Lab Capacity", "Sample Turnaround Time (TAT)", "DNA Match Success Rate", 
  "Instrument Uptime/Downtime", "Pending Court Reports", "Cold Storage Integrity"
];

const apis = [
  "CCTNS (Crime & Criminal Tracking Network)", "e-Courts Integration API", "NABL (National Accreditation Board) Sync", "Hospital Medico-Legal Gateway",
  "IoT Sensors API (Fridges/Storage)", "Digital Signature Gateway (e-Hastakshar)"
];

const reports = [
  "Monthly Forensic TAT Report", "Equipment Calibration Audit", "Quality Assurance (QA) Scorecard", 
  "Inventory Expiry Alerts", "District-wise Evidence Submission", "Bio-waste Compliance Report"
];

const security = [
  "Immutable Blockchain Chain of Custody", "Air-Gapped Networks for Digital Forensics", "Biometric Access Control to Lab Zones", 
  "Strict Data Masking (Blinded Samples)", "Anti-Tamper Digital Signatures on Reports", 
  "IoT Alerts for Fridge Temperature Drops", "Hardware Security Modules for DNA Data", "Zero-Trust API Sync with Courts"
];

const futureScope = [
  "Robotic Process Automation (RPA) for Sample Sorting", "Mobile AI Forensic Vans with Edge Computing", "Holographic Reconstruction of Crime Scenes",
  "Quantum Computing for Complex Cryptographic Breaking", "Brain Fingerprinting Integration", "Global Interpol DNA Database Sync"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Lab Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Forensic Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Lab Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceLaboratoriesDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <FlaskConical className="inline-icon" size={28} /> AI Forensic Laboratories
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Forensic Laboratories</strong> digitizes the entire lifecycle of physical and digital evidence. From the moment an IO seals a sample with an RFID tag at the crime scene, to the AI-assisted DNA analysis, to the digitally signed court report, the chain of custody is unbroken and transparent.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#3b82f6" /> Blockchain Chain of Custody</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Samples are tracked via RFID. Every handover (Officer -&gt; Transport -&gt; Lab Reception -&gt; Scientist) is logged on an immutable blockchain, eliminating allegations of evidence tampering in court.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FlaskConical className="inline-icon" color="#10b981" /> AI Forensic Matchers</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of manual comparison, AI algorithms instantly match ballistic striations on fired bullets and run rapid probabilistic genotyping on complex, mixed DNA samples to find suspects.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> IoT Storage Integrity</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>IoT sensors in lab refrigerators constantly monitor temperature and humidity. If a freezer holding biological evidence fails, AI instantly alerts technicians and predicts the time until sample degradation.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#ef4444" /> Automated Court Reports</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Once a test is complete, the system auto-generates the Medico-Legal report in the required judicial format. The scientist e-signs it, and it is instantly pushed to the e-Courts portal, reducing delays.</p>
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
            {labModules.map((mod, i) => (
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
            <FlaskConical size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">FORENSIC <span>LABORATORIES</span></h1>
            <p className="cyber-subtitle">Evidence Tracking, DNA Matching & IoT Cold Storage</p>
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

export default PoliceLaboratoriesDetailed;
