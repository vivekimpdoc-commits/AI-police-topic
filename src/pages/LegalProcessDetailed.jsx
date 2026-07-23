import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Scale, FileSignature, Gavel
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Bail Default Predictor", "Warrant Execution Router", "Judicial Order Parser NLP", 
  "Prisoner Escort Allocator", "Summons OCR Scanner", "Court Deadline Tracker AI", 
  "Remand Expiry Alert Bot", "Habeas Corpus Prioritizer", "Legal Precedent Matcher",
  "Evidence Chain Verifier", "Charge-sheet Drafter AI"
];

const legalModules = [
  {
    title: "Warrants & Summons",
    icon: <FileSignature size={20} />,
    items: ["AI Summons Generator", "Geotagged Summons Delivery", "Non-Bailable Warrant (NBW) Alerts", "Absconder Analytics"]
  },
  {
    title: "Bail & Remand Compliance",
    icon: <Scale size={20} />,
    items: ["AI Warrant Execution Tracker", "Max Remand Period Tracker", "Surety Verification AI", "Default Bail Prevention Alerts"]
  },
  {
    title: "Court Production & Escort",
    icon: <Gavel size={20} />,
    items: ["AI Court Outcome Predictor", "High-Risk Prisoner Escort Planner", "Court Date Sync (e-Courts)", "Vehicle Ambush Risk Modeling"]
  },
  {
    title: "Judicial Orders & Notices",
    icon: <FileText size={20} />,
    items: ["NLP Parsing of Court Orders", "Contempt of Court Warning", "Automated Compliance Reports", "RTI / Human Rights Notices"]
  },
  {
    title: "Charge-sheet & Evidence",
    icon: <Database size={20} />,
    items: ["FSL Report Delay Tracking", "Charge-sheet Drafting Assistant", "Digital Evidence Integrity Check", "Witness Protection Roster"]
  }
];

const aiFeatures = [
  "AI Legal Document NLP Extraction", "AI Flight Risk Scoring (Bail)", "AI Optimized Route Planning (Escorts)",
  "AI Automated Charge-sheet Translation", "AI Deadline Predictor (CrPC)", "AI Semantic Search across Judgments",
  "AI Facial Recognition (Absconders)", "AI Voice Analytics for Witness Tampering"
];

const databases = [
  "Warrant_Execution_Ledger", "eCourts_Sync_DB", "Bail_Condition_Tracker", "Prisoner_Escort_Roster", "Judicial_Order_Meta", 
  "FSL_Report_Queue", "Charge_sheet_Drafts", "Absconder_Biometrics", "Notice_Compliance_Logs", "Surety_Verification_DB"
];

const dashboards = [
  "Pending NBWs (Non-Bailable Warrants)", "Upcoming Court Productions", "Bail Condition Violators", 
  "FSL & Charge-sheet Delays", "Contempt Risk Radar", "Prisoner Escort Live Map"
];

const apis = [
  "e-Courts National Portal", "ICJS (Inter-operable Criminal Justice System)", "Prison Management System (e-Prisons)", "Forensic Science Labs (FSL)",
  "State Prosecution Dept Sync", "CCTNS (Crime & Criminal Tracking Network)"
];

const reports = [
  "Monthly Warrant Execution Rate", "Default Bail Grants due to Delay", "Prisoner Escort Cost Analytics", 
  "Court Compliance Penalty Audit", "FSL Turnaround Time", "Charge-sheet Filing Efficiency"
];

const security = [
  "Digital Signatures on Charge-sheets", "Role-Based Access (IO vs Prosecutor)", "Immutable Audit Trails for Summons", 
  "End-to-End Encrypted Video (Virtual Court)", "Watermarked Evidence PDFs", 
  "Strict Log of Judicial Order Views", "Automated PII Redaction", "Blockchain Timestamping"
];

const futureScope = [
  "AI Virtual Judges for Traffic Challans", "Holographic Crime Scene Recreations in Court", "Predictive Jury/Judge Bias Analytics",
  "Smart-Contracts for Bail Bonds", "Neural-link Witness Memory Scans", "Autonomous Prisoner Transport Pods"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Legal Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Judicial Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Compliance Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const LegalProcessDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Scale className="inline-icon" size={28} /> AI Legal Process & Compliance
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Legal Process</strong> bridges the gap between the police force and the judiciary. It prevents criminals from getting 'default bail' due to delayed paperwork, tracks the execution of warrants, and uses NLP to instantly parse complex court orders.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileSignature className="inline-icon" color="#3b82f6" /> Warrant & Summons</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically downloads Non-Bailable Warrants (NBWs) from e-Courts, routes them to the correct Investigating Officer (IO), and mandates geo-tagged photos as proof of summons delivery.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Scale className="inline-icon" color="#10b981" /> Bail & Remand Tracker</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks the exact expiry hour of police remand. Automatically calculates the 60/90 day charge-sheet deadline to ensure accused do not get default statutory bail due to police delay.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Gavel className="inline-icon" color="#f59e0b" /> Court Escort & Production</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes the daily court roster. For high-risk criminals (like gangsters), the AI recommends virtual court production via video link. If physical transport is mandatory, it plans a randomized, secure route.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#ef4444" /> NLP Order Parsing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Reads 50-page PDF court orders using Natural Language Processing (NLP). Extracts the exact actionable items for the police (e.g., "Submit FSL report by Friday") and sets automated alarms.</p>
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
            <h1 className="cyber-title">LEGAL <span>PROCESS</span></h1>
            <p className="cyber-subtitle">Warrant Tracking, Bail Predictor & NLP Court Orders</p>
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

export default LegalProcessDetailed;
