import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Scale, FileSignature
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Police Act Violation Flag AI", "Service Manual Amendment Bot", "Supreme Court Ruling Integrator",
  "High Court Order Tracker AI", "Departmental Inquiry Streamliner", "Show-Cause Notice Drafter",
  "Charge Sheet (Internal) Prep AI", "Witness Deposition Parser (Internal)", "Evidence Admissibility Checker",
  "Suspension Period Calculator", "Revocation of Suspension AI", "Major Penalty Audit AI",
  "Minor Penalty Deduction AI", "Dismissal Procedure Verifier", "Compulsory Retirement Evaluator",
  "Right to Information (RTI) Bot", "RTI Compliance Deadline AI", "Appellate Authority Escalator",
  "NHRC (Human Rights) Query Responder", "SHRC Compliance Tracker", "Women Commission Notice AI",
  "SC/ST Commission Query AI", "Minority Commission Tracker", "Central Vigilance (CVC) Sync",
  "State Vigilance Raid Alerts", "Anti-Corruption Bureau Liaison", "Assets & Liabilities Declaration AI",
  "Disproportionate Assets Flag AI", "Annual Property Return Auditor", "Foreign Visit Approval AI",
  "Spouse Business Conflict AI", "Political Neutrality Monitor", "Social Media Conduct Policy AI",
  "Unauthorized Press Briefing Alert", "Official Secrets Act Compliance", "Data Privacy & GDPR Coach",
  "CCTNS Data Entry Compliance AI", "Arrest Memo Compliance Verifier", "Custody Death Protocol AI",
  "Encounter Protocol Auditor", "Use of Force (Lathi/Fire) Justifier", "Weapon Discharge Log Auditor",
  "Prisoner Transit Protocol AI", "Bail Bond Surity Verifier", "Summons Serving Compliance AI",
  "Non-Bailable Warrant Executer", "Property Attachment Legal AI", "Seized Narcotic Destruction Protocol",
  "Explosive Disposal Compliance AI", "Cyber Evidence Chain of Custody", "DNA Profiling Legal Sync",
  "Medical Exam Promptness AI", "Juvenile Justice Act Compliance", "POCSO Act Timeline Tracker",
  "NDPS Act Seizure Verifier", "UAPA Arrest Sanction AI", "MCOCA/Gangster Act Evaluator",
  "NSA (National Security Act) Profiler", "Preventive Detention Log AI", "Habeas Corpus Response Prep"
];

const modules = [
  {
    title: "Internal Discipline",
    icon: <ShieldAlert size={20} />,
    items: ["Departmental Inquiries", "Suspension/Dismissal", "Major/Minor Penalties", "Show-Cause Drafter"]
  },
  {
    title: "Statutory Commissions",
    icon: <Scale size={20} />,
    items: ["NHRC & SHRC Sync", "Women & SC/ST Comm.", "Vigilance & ACB", "RTI Deadlines"]
  },
  {
    title: "Conduct & Assets",
    icon: <FileSignature size={20} />,
    items: ["Property Return Audits", "Disproportionate Assets", "Social Media Conduct", "Foreign Visit Approvals"]
  },
  {
    title: "Procedural Compliance",
    icon: <FileText size={20} />,
    items: ["Arrest Memo Rules", "Custody Death Protocols", "Encounter Protocols", "Weapon Discharge Logs"]
  },
  {
    title: "Special Acts Sync",
    icon: <Landmark size={20} />,
    items: ["POCSO & Juvenile", "NDPS Seizures", "UAPA/NSA Sanctions", "Habeas Corpus Prep"]
  }
];

const aiFeatures = [
  "NLP Parsing of High Court/Supreme Court Orders", "Automated Drafter for Show-Cause & Internal Charge Sheets", "Algorithmic Disproportionate Asset Detection",
  "Zero-Delay RTI Routing & Drafting", "Predictive Compliance Alerts for POCSO/NDPS", "Blockchain Chain-of-Custody for Cyber Evidence"
];

const databases = [
  "Police_Act_Repository", "Disciplinary_Inquiry_Ledger", "RTI_Compliance_Vault", "Officer_Assets_DB", 
  "Human_Rights_Notices", "Encounter_Protocol_Logs", "Special_Acts_Matrix", "Social_Media_Policy_DB"
];

const dashboards = [
  "State-wide Disciplinary Board", "RTI & NHRC Compliance Heatmap", "Property Declaration Tracker", 
  "Encounter & Custody Audit", "Pending Inquiry Backlogs", "Special Acts Timelines"
];

const apis = [
  "E-Courts Integration API", "NHRC/SHRC Webhooks", "State Vigilance Gateway", 
  "RTI Online Portal Sync", "CCTNS Seizure Matrix Sync", "Social Media Scanning API"
];

const reports = [
  "Annual Disciplinary Action Report", "RTI Pendency Analytics", "Human Rights Violation Audit", 
  "Asset Declaration Defaulters", "Use of Force Justification Log", "POCSO/NDPS Timeline Breach"
];

const security = [
  "Strict Role-Based Inquiry Access", "Encrypted Whistleblower Inputs", "Immutable Asset Declarations", 
  "Anti-Tamper Encounter Logs", "Zero-Trust Protocol Access", "Audit Trail for All Notices"
];

const futureScope = [
  "AI Generated Legal Defense for Officers", "Real-Time Body-Cam Protocol Auditing", "Decentralized Smart Contracts for Seized Assets",
  "Predictive Judicial Scrutiny Alerts", "Global Human Rights Benchmarking", "Autonomous Compliance Drones for Crime Scenes"
];


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Compliance Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Legal Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceActComplianceExpertDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Scale className="inline-icon" size={28} /> Police Act & Compliance Expert AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Act & Compliance Expert AI</strong> is the ultimate legal watchdog for internal force operations. It ensures absolute adherence to the Police Act, High Court orders, and human rights guidelines. From drafting flawless show-cause notices to auditing officer assets, it protects the department from judicial reprimands.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileSignature className="inline-icon" color="#3b82f6" /> Internal Discipline</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Streamlines departmental inquiries by auto-drafting charge sheets and calculating exact suspension/revocation dates as per the State Police Manual.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Scale className="inline-icon" color="#10b981" /> Rights & RTI Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks notices from NHRC, Women's Commission, and RTI portals. Uses NLP to draft standardized, legally sound responses before statutory deadlines expire.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Conduct & Assets</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Runs algorithms on Annual Property Returns (APR) to flag disproportionate assets. Monitors officer social media profiles for breaches of political neutrality.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#ef4444" /> Operational Protocols</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Audits sensitive operational logs—like weapon discharge, encounter protocols, and custody death timelines—to ensure immediate compliance with Supreme Court directives.</p>
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
            {modules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  {mod.icon}
                  <h3>{mod.title}</h3>
                </div>
                <div className="module-tags">
                  {mod.items.map((item, j) => (
                    <span key={j} className="tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="features-grid">
            {aiFeatures.map((feature, i) => (
              <div key={i} className="premium-feature-card">
                <Cpu className="feature-icon" color="#06b6d4" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="architecture-panel premium-module-panel">
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Data Ledgers</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> Integration APIs</h3>
            <div className="tags-container">
              {apis.map((api, i) => <span key={i} className="cyber-tag highlight-green">{api}</span>)}
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="reports-panel premium-module-panel">
            <div className="split-section">
              <div className="report-list">
                <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" /> Legal Dashboards</h3>
                <ul>
                  {dashboards.map((dash, i) => (
                    <li key={i}><CheckCircle size={16} color="#f59e0b" /> {dash}</li>
                  ))}
                </ul>
              </div>
              <div className="report-list">
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Compliance Audits</h3>
                <ul>
                  {reports.map((rep, i) => (
                    <li key={i}><FileText size={16} color="#3b82f6" /> {rep}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="security-panel premium-module-panel">
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Audit Integrity</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {security.map((sec, i) => <span key={i} className="cyber-tag highlight-red">{sec}</span>)}
            </div>
            
            <h3 style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}><Rocket className="inline-icon" /> Future Roadmap</h3>
            <div className="tags-container">
              {futureScope.map((scope, i) => <span key={i} className="cyber-tag highlight-purple">{scope}</span>)}
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
            <Scale size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE ACT & COMPLIANCE <span>EXPERT AI</span></h1>
            <p className="cyber-subtitle">Internal Inquiries, Assets Auditing & NHRC Protocols</p>
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
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default PoliceActComplianceExpertDetailed;
