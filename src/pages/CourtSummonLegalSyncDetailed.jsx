import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Scale, Gavel
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "E-Courts Summon Parser AI", "Investigating Officer (IO) Appearance Scheduler", "Virtual Court Hearing Linker AI",
  "Summons Delivery Geofence Tracker", "Non-Bailable Warrant (NBW) Executer AI", "Bailable Warrant Sync AI",
  "Court Fine/Challan Sync AI", "Case Adjournment Predictor AI", "Witness Deposition Scheduler",
  "Medical Examiner Court Sync AI", "Forensic Expert Deposition AI", "Cyber Cell Expert Witness AI",
  "Bail Application Flagging AI", "Bail Cancellation Petitioner AI", "Surety/Guarantor Verification AI",
  "Habeas Corpus Rapid Alert AI", "Charge Sheet Deadline (60/90 Days) AI", "FIR Quashing Alert Bot",
  "Contempt of Court Warning AI", "Officer Testimony NLP Prep AI", "Hostile Witness Flagging AI",
  "Section 164 CrPC Statement Sync AI", "Judicial Custody Expiry Alerter", "Police Custody Remand Tracker",
  "Juvenile Justice Board Sync AI", "POCSO Court Fast-Track AI", "SC/ST Atrocities Court Sync",
  "NDPS Special Court Alerter", "NIA/CBI Court Liaison AI", "High Court Writ Petition Tracker",
  "Supreme Court SLP (Special Leave) AI", "Public Prosecutor Liaison AI", "Legal Aid Counsel Matcher",
  "Case Property/Malkhana Sync AI", "Seized Vehicle Release Protocol AI", "Document Production Order Sync",
  "Bank Account Freeze/Unfreeze Sync AI", "Passport Impounding Order AI", "Look Out Circular (LOC) Sync AI",
  "Fugitive Economic Offender Sync", "Extradition Order Tracker AI", "Inter-State Transit Remand AI",
  "Search Warrant Execution Tracker", "Arrest Memo Judicial Sync AI", "Custodial Death Magisterial Inquiry AI",
  "Legal Expense/Fee Reimbursement AI", "BNS (New Criminal Law) Citation AI", "Draft Affidavit Generator AI",
  "Counter Affidavit Deadline Tracker", "Case Diary (CD) Judicial Sync AI", "Police Manual Legal Precedent AI",
  "Officer Legal Representation Assigner", "False Implication Defense AI", "RTI & Legal Notice Sync AI",
  "Arbitration & Tribunal Sync AI", "Motor Accident Claims (MACT) AI", "Consumer Court Police Sync AI",
  "Cyber Crime Appellate Tribunal AI", "Armed Forces Tribunal (AFT) Sync", "Legal Glossary Translator Bot"
];

const modules = [
  {
    title: "Summons & Warrants",
    icon: <FileText size={20} />,
    items: ["E-Courts Summon Sync", "NBW Execution Tracking", "Geofenced Delivery", "Look Out Circulars"]
  },
  {
    title: "Officer Court Duties",
    icon: <Gavel size={20} />,
    items: ["IO Appearance Scheduler", "Virtual Hearing Links", "Testimony NLP Prep", "Contempt Warnings"]
  },
  {
    title: "Remand & Custody",
    icon: <ShieldAlert size={20} />,
    items: ["Charge Sheet Deadlines", "Custody Expiry Alerts", "Bail Application Flags", "Transit Remands"]
  },
  {
    title: "Special Courts Sync",
    icon: <Landmark size={20} />,
    items: ["POCSO Fast-Track", "NDPS/NIA Courts", "Juvenile Justice Sync", "High/Supreme Court Appeals"]
  },
  {
    title: "Evidence & Affidavits",
    icon: <Scale size={20} />,
    items: ["Case Property Sync", "Draft Affidavit Gen", "Section 164 Sync", "Case Diary E-Filing"]
  }
];

const aiFeatures = [
  "Zero-Delay E-Courts API Synchronization", "Predictive Alerts for 60/90 Day Charge Sheet Deadlines", "NLP-Based Officer Testimony Preparation",
  "Automated Counter-Affidavit Generation", "Real-time Bail & Parole Flagging", "Geofenced Verification of Warrant Execution"
];

const databases = [
  "E_Courts_Summon_Ledger", "Warrant_Execution_Vault", "Custody_Remand_DB", "Affidavit_Drafting_Lake", 
  "IO_Appearance_Matrix", "Case_Property_Malkhana", "Bail_Surety_Registry", "Special_Courts_Archive"
];

const dashboards = [
  "State-wide Summon Compliance", "Charge Sheet Deadline Heatmap", "Pending Warrants (NBW/BW)", 
  "IO Virtual Court Calendar", "Bail & Custody Tracker", "High Court Petition Alerts"
];

const apis = [
  "National E-Courts API", "CCTNS Malkhana Gateway", "Public Prosecutor Sync Webhooks", 
  "Digital Signature (DSC) API", "Immigration (LOC) API", "Virtual Court Video Sync (Webex/NIC)"
];

const reports = [
  "Monthly Court Appearance Defaulters", "NBW Execution Success Rate", "Charge Sheet Deadline Breaches", 
  "Contempt of Court Risk Audit", "Bail Cancellation Petitions", "Malkhana Property Release Log"
];

const security = [
  "End-to-End Encrypted Case Diaries", "Biometric DSC for E-Filing", "Strict Role-Based Court Access", 
  "Immutable Warrant Execution Logs", "Anti-Tamper Affidavit Vaults", "Zero-Trust Virtual Hearing Links"
];

const futureScope = [
  "AI Legal Precedent Prediction Modeling", "Blockchain Based Digital Evidence Custody", "Holographic Court Appearances for Experts",
  "Real-time BNS/CrPC Code Recommendation via Earpiece", "Decentralized Bail Surety Verification", "Autonomous Drone Warrant Delivery"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Legal Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Court Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Judicial Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CourtSummonLegalSyncDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Gavel className="inline-icon" size={28} /> Court Summon & Legal Sync AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Court Summon & Legal Sync AI</strong> seamlessly bridges the gap between police stations and the judiciary. By directly syncing with E-Courts, it automates IO appearance schedules, tracks critical charge sheet deadlines (60/90 days), and generates draft affidavits, ensuring zero contempt-of-court risks and faster trial resolutions.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#3b82f6" /> Summons & Warrants</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Parses digital summons from E-Courts and maps non-bailable warrants (NBWs). Uses geofencing to verify that beat officers physically visit the accused's location for execution.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Remand & Deadlines</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Triggers absolute-priority alerts for impending 60/90-day charge sheet deadlines and tracks police/judicial custody expiry to prevent illegal detentions or default bails.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Gavel className="inline-icon" color="#f59e0b" /> Officer Appearances</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Schedules Investigating Officer (IO) and Forensic Expert court appearances, providing secure NIC virtual hearing links and NLP-generated testimony prep notes.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Scale className="inline-icon" color="#ef4444" /> Legal Drafting Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Utilizes generative AI to auto-draft counter-affidavits for High Court writ petitions and syncs Case Property (Malkhana) release orders instantly.</p>
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
                <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" /> Live Dashboards</h3>
                <ul>
                  {dashboards.map((dash, i) => (
                    <li key={i}><CheckCircle size={16} color="#f59e0b" /> {dash}</li>
                  ))}
                </ul>
              </div>
              <div className="report-list">
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Compliance Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> E-Filing Security</h3>
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
            <Gavel size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">COURT SUMMON & <span>LEGAL SYNC AI</span></h1>
            <p className="cyber-subtitle">E-Courts Integration, IO Scheduling & NBW Execution</p>
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

export default CourtSummonLegalSyncDetailed;
