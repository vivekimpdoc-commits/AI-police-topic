import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, AlertOctagon, Gavel
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Preliminary Inquiry Streamliner", "First Information Report (Internal) AI", "Show Cause Notice Drafter AI",
  "Reply Extension Evaluator", "Charge Sheet (Departmental) Generator", "Witness Summons (Internal) AI",
  "Documentary Evidence Compiler", "Oral Deposition Transcript Analyzer", "Cross-Examination NLP Flag AI",
  "Inquiry Officer (IO) Neutrality Scorer", "Bias/Conflict of Interest Detector", "Ex-Parte Proceeding Trigger AI",
  "Suspension Duration Monitor", "Revocation of Suspension Modeler", "Subsistence Allowance Sync AI",
  "Major Penalty (Dismissal) Auditor", "Minor Penalty (Censure) Tracker", "Withholding of Increments AI",
  "Demotion/Reduction in Rank AI", "Compulsory Retirement Calculator", "Recovery of Financial Loss AI",
  "Appellate Authority Escalator AI", "Mercy Petition Parser AI", "State Admin Tribunal (SAT) Sync",
  "High Court Writ Petition Defender AI", "Central Vigilance (CVC) Sync AI", "Anti-Corruption Bureau Sync AI",
  "Criminal vs Departmental Proceeding AI", "Acquittal/Reinstatement Protocol AI", "Arrears Calculation (Post-Acquittal) AI",
  "Notional Promotion Restorer AI", "Seniority List Correction AI", "Disciplinary Record Vault AI",
  "Service Book Black-Mark Enforcer", "Medal Forfeiture AI", "Gallantry Award Withdrawal Alert",
  "Police Manual Precedent Searcher", "Disproportionate Punishment Flag AI", "Similar Offense/Penalty Matcher AI",
  "Sexual Harassment (POSH) Fast-Track AI", "Custodial Death Inquiry AI", "Fake Encounter Allegation Tracker",
  "Escape of Prisoner Penalty AI", "Weapon Loss/Theft Inquiry AI", "Drunkenness on Duty Tracker",
  "Insubordination Evidence Analyzer", "AWOL (Absent Without Leave) Inquiry AI", "Misuse of Authority Alerter",
  "Bribery Trap/Sting Operation Sync", "E-Challan Fraud Inquiry AI", "Fuel Siphoning Disciplinary AI",
  "Cyber/Data Leak Penalty Tracker", "Social Media Misconduct Inquiry AI", "Media Leak Confidentially Breach AI",
  "Disciplinary Dashboard Predictor", "Pendency & Delay Escalator AI", "Retiring Officer Pending Inquiry Flag",
  "Post-Retirement Pension Withhold AI", "Grievance vs Vengeance Filter AI", "Anonymous Complaint Verifier AI"
];

const modules = [
  {
    title: "Inquiry & Investigation",
    icon: <Gavel size={20} />,
    items: ["Show Cause Drafter", "Departmental Charge Sheets", "IO Neutrality Scoring", "Cross-Examination NLP"]
  },
  {
    title: "Penalties & Punishments",
    icon: <AlertOctagon size={20} />,
    items: ["Major Penalty (Dismissal)", "Increment Withholding", "Demotions", "Compulsory Retirement"]
  },
  {
    title: "Appeals & Reinstatement",
    icon: <Scale size={20} />,
    items: ["SAT & High Court Sync", "Notional Promotions", "Acquittal Arrears", "Appellate Escalation"]
  },
  {
    title: "Specific Offense Tracks",
    icon: <ShieldAlert size={20} />,
    items: ["POSH Fast-Track", "Custodial Death Inquiries", "Bribery Trap Sync", "AWOL Inquiries"]
  },
  {
    title: "Service Record Impacts",
    icon: <FileText size={20} />,
    items: ["Service Book Black-Marks", "Medal Forfeiture", "Pension Withholding", "Seniority Corrections"]
  }
];

const aiFeatures = [
  "NLP-Based Show Cause & Charge Sheet Drafting", "Algorithmic Matching of Similar Offenses vs Penalties", "Automated Suspension & Subsistence Pay Sync",
  "Predictive Bias & Conflict-of-Interest Detection", "Zero-Delay High Court / Tribunal Synchronization", "Post-Acquittal Notional Promotion Algorithms"
];

const databases = [
  "Disciplinary_Action_Ledger", "Inquiry_Transcript_Vault", "Penalty_Precedent_DB", "Service_Book_Blackmarks", 
  "Suspension_Subsistence_Sync", "Tribunal_Appeals_Log", "Special_Offense_Archive", "Vigilance_ACB_Sync"
];

const dashboards = [
  "State-wide Disciplinary Pendency", "Suspension & Reinstatement Board", "Major/Minor Penalty Analytics", 
  "Tribunal Appeals & Reversals", "Specific Offenses (Bribery/AWOL)", "IO (Inquiry Officer) Performance"
];

const apis = [
  "State Administrative Tribunal (SAT) API", "Vigilance/Anti-Corruption Gateway", "HRMS Service Book Sync", 
  "Payroll (Subsistence Pay) Webhooks", "E-Courts Writ Petition Sync", "Digital Signature (DSC) Approval"
];

const reports = [
  "Annual Disciplinary Action Summary", "Inquiry Delay & Pendency Audit", "Disproportionate Punishment Alert", 
  "Acquittal & Arrears Financial Impact", "POSH & Custodial Death Fast-Track", "Retiring Officer Inquiry Clearance"
];

const security = [
  "Strict Confidentiality Tunnels", "Role-Based Appellate Access", "Immutable Inquiry Transcripts", 
  "Blockchain Service Book Entries", "Anti-Tamper Precedent Matching", "Digital Signature Verification"
];

const futureScope = [
  "AI Generated Legal Defense Strategy for the Department", "Voice-Stress Analysis on Oral Depositions", "Predictive Officer Misconduct Profiling",
  "Smart Contracts for Automatic Subsistence Pay", "Decentralized Disciplinary Juries", "Real-Time VR Reconstructions of Misconduct"
];

function Scale({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>;
}

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Disciplinary Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Inquiry Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Pendency Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const DisciplinaryActionTrackerDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <AlertOctagon className="inline-icon" size={28} /> Disciplinary Action Tracker AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Disciplinary Action Tracker AI</strong> digitizes and accelerates internal police investigations. By auto-drafting charge sheets, matching penalties to past precedents, and syncing with payroll for suspension allowances, it ensures punishments are fair, timely, and legally defensible in tribunals.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Gavel className="inline-icon" color="#3b82f6" /> Inquiry & Drafting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Utilizes NLP to auto-draft show-cause notices and internal charge sheets. Evaluates Inquiry Officers (IOs) to flag potential bias or conflict of interest.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><AlertOctagon className="inline-icon" color="#10b981" /> Penalties & Service Book</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Directly updates the officer's Service Book with 'black marks', handles medal forfeitures, and syncs minor/major penalties (like increment withholding or dismissal).</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Scale className="inline-icon" color="#f59e0b" /> Reinstatement & Appeals</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If an officer is acquitted, the AI automatically calculates arrears, restores notional promotions, and corrects seniority lists without manual delays.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Special Fast-Tracks</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Creates priority escalation tracks for severe offenses like Custodial Deaths, POSH (Sexual Harassment), and Anti-Corruption Bureau (ACB) bribery traps.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Audit Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Inquiry Integrity</h3>
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
            <AlertOctagon size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">DISCIPLINARY ACTION <span>TRACKER AI</span></h1>
            <p className="cyber-subtitle">Internal Inquiries, Penalty Sync & High Court Reinstatements</p>
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

export default DisciplinaryActionTrackerDetailed;
