import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Scale, BookOpen, Gavel
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "BNS Section Analyzer AI", "Case Precedent Matcher", "Charge-sheet Auto-Drafter", 
  "Court Hearing Scheduler", "Bail Prediction Bot", "Witness Testimony Cross-Checker", 
  "Judicial Bias Analyzer", "Evidentiary Value Scorer", "FIR Loophole Detector",
  "Summons Dispatch Agent", "Lawyer Profiling AI", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const legalModules = [
  {
    title: "AI Legal Research",
    icon: <BookOpen size={20} />,
    items: ["Supreme Court Case Law Search", "BNS/BNSS Cross-Referencing", "Legal Precedent Recommendations", "Automated Case Summaries"]
  },
  {
    title: "Prosecution Support",
    icon: <Gavel size={20} />,
    items: ["Charge-sheet Gap Analysis", "Witness Statement Inconsistencies", "Evidence Admissibility Check", "Conviction Probability Score"]
  },
  {
    title: "Court Case Tracking",
    icon: <Activity size={20} />,
    items: ["Automated Hearing Reminders", "e-Courts Portal Sync", "Summons/Warrant Delivery Tracking", "Pending Case Dashboards"]
  },
  {
    title: "Bail & Custody Analytics",
    icon: <Scale size={20} />,
    items: ["Bail Risk Assessment Scoring", "Remand Expiry Alerts", "Parole Violation Tracking", "Habeas Corpus Deadlines"]
  },
  {
    title: "Legal Document Automation",
    icon: <FileText size={20} />,
    items: ["Auto-Drafting Affidavits", "Multilingual Translation (Court language)", "RTI Response Generator", "Digital Signature Workflows"]
  }
];

const aiFeatures = [
  "AI Natural Language Legal Search", "AI Transformer Models for Case Law Summaries", "AI Bayesian Networks for Conviction Probability",
  "AI Semantic Similarity for Loophole Detection", "AI Automated Document Structuring", "AI Witness Testimony Sentiment Analysis",
  "AI E-Courts OCR Scraping", "AI Voice-to-Text Court Dictation"
];

const databases = [
  "Supreme_Court_Judgments_DB", "BNS_BNSS_Code_Vault", "Pending_Trials_Ledger", "Charge_Sheets_Drafts", "Witness_Statements_DB", 
  "Bail_Applications_Index", "Warrant_Tracking_Log", "Prosecutor_Success_Rates", "Defense_Lawyer_Profiles", "RTI_Queries_DB"
];

const dashboards = [
  "Conviction Rate by District", "Pending Court Hearings (Next 7 Days)", "Bail Risk Assessment Heatmap", 
  "Charge-sheet Filing Delays", "Top Cited Legal Precedents", "Summons Delivery Success Rate"
];

const apis = [
  "National Judicial Data Grid (NJDG) APIs", "e-Courts Services APIs", "Inter-Operable Criminal Justice System (ICJS)", "Bhashini Translation APIs",
  "Digital India E-Sign APIs", "Prisons Management Sync APIs"
];

const reports = [
  "Monthly Prosecution Success Report", "Officer Court Attendance Audit", "Charge-sheet Quality Index", 
  "Bail Default (CrPC 167) Alerts", "Pending Warrants Execution Rate", "Legal Fees Expenditure"
];

const security = [
  "Legally Binding Digital Signatures", "Immutable Audit Trails for Affidavits", "Role-Based Access for Prosecutors", 
  "Confidential Informant Data Masking", "Secure API Tunnels to e-Courts", 
  "Tamper-Proof Timestamps", "Data Leak Prevention (DLP)", "End-to-End Encrypted Case Sharing"
];

const futureScope = [
  "AI Virtual Mock-Trial Simulations", "Predictive Judicial Outcome Models", "Holographic Evidence Presentation",
  "Blockchain-Secured Smart Contracts for Bail", "Autonomous AI Public Prosecutors", "Brain-Computer Interface Lie Detection"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Legal AI Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Court Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Justice Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const LegalCourtDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Scale className="inline-icon" size={28} /> AI Legal & Court Assistant
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Legal & Court Assistant</strong> bridges the gap between policing and the judiciary. It acts as an elite digital prosecutor—analyzing charge-sheets for legal loopholes, predicting bail risks, and finding the perfect Supreme Court precedents to secure a conviction.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Gavel className="inline-icon" color="#3b82f6" /> Prosecution Support</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Before a charge-sheet is filed, AI scans it for missing evidence, contradictory witness statements, and procedural errors that a defense lawyer might exploit in court.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><BookOpen className="inline-icon" color="#10b981" /> AI Legal Research</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Investigating Officers can ask questions in plain English (e.g., "What are the latest rulings on digital evidence admissibility?"). The AI searches decades of case law instantly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> ICJS & e-Courts Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically syncs with the e-Courts system to update hearing dates. Sends WhatsApp reminders to IOs and witnesses so they never miss a court appearance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Scale className="inline-icon" color="#ef4444" /> Bail & Remand Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Alerts officers 5 days before the 60/90-day charge-sheet filing deadline expires (preventing default bail). Predicts the probability of a suspect jumping bail.</p>
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
            {legalModules.map((mod, i) => (
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
            <Scale size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI LEGAL & <span>COURT ASSIST</span></h1>
            <p className="cyber-subtitle">Prosecution Support, Case Precedent Search & e-Courts Sync</p>
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

export default LegalCourtDetailed;
