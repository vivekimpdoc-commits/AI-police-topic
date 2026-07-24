import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Mail, Mailbox
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Dak Dispatch Bot", "Receipt Classifier AI", "eOffice Integration AI", 
  "Confidential Mail Router", "Reminder Escalation Bot", "Pending Letter Scorer", 
  "Metadata Extractor NLP", "Gov Communication Tracker", "Memorandum Generator",
  "Letter Sentiment Analyzer", "Priority Tagging AI"
];

const correspondenceModules = [
  {
    title: "Dak (Mail) Management",
    icon: <Mailbox size={20} />,
    items: ["Automated Dispatch Register", "OCR Receipt Scanning", "Barcode/QR Stamping", "Digital Mail Sorting"]
  },
  {
    title: "eOffice Integration",
    icon: <Network size={20} />,
    items: ["Seamless NIC eOffice Sync", "Digital Signature Support", "Cross-Department Routing", "Green Governance Analytics"]
  },
  {
    title: "Government Comms Tracker",
    icon: <Activity size={20} />,
    items: ["Chief Minister Office (CMO) Flags", "Ministry Letter Escalation", "Deadline Prediction", "Read-Receipt Analytics"]
  },
  {
    title: "Confidential Letter Vault",
    icon: <Shield size={20} />,
    items: ["Top Secret Red-Flagging", "Role-Based Inbox", "Tamper-Proof Audit Logs", "Auto-Destruct Read Tokens"]
  },
  {
    title: "Reminder & Pendency",
    icon: <FileText size={20} />,
    items: ["Automated Nudge Emails", "Pendency Heatmap by Officer", "WhatsApp Reminder Sync", "Action Taken Reports (ATR)"]
  }
];

const aiFeatures = [
  "AI NLP for Auto-Categorizing Incoming Letters", "AI OCR for Hand-written Hindi/English Dak", "AI Urgency Scoring (0-100) based on Sender",
  "AI Draft Response Suggestions", "AI Automatic Duplicate Detection", "AI Metadata Extraction (Date, Ref No., Subject)",
  "AI Semantic Search across millions of letters", "AI Signature Verification"
];

const databases = [
  "Dispatch_Register_Logs", "Receipt_Register_Scans", "Confidential_Vault", "eOffice_Token_Cache", "CMO_Correspondence_DB", 
  "Officer_Pendency_Metrics", "Reminder_Ledger", "OCR_Extracted_Text", "Letter_Metadata_Index"
];

const dashboards = [
  "Live Dak Movement Radar", "Officer Pendency Leaderboard", "CMO & VIP Letter Status", 
  "eOffice Adoption Metrics", "Confidential Access Audits", "Daily Dispatch Volume"
];

const apis = [
  "NIC eOffice API", "India Post Tracking API", "State Secretariat Gateway", "SMS/WhatsApp Gateway (Reminders)",
  "Digital Signature (DSC) Validator", "Cloud Vision OCR API"
];

const reports = [
  "Monthly Pendency Analysis", "Dak Turnaround Time (TAT) Report", "VIP Letter Compliance", 
  "Digital vs Paper Ratio", "Departmental Efficiency Scorecard", "Confidential Breach Attempts"
];

const security = [
  "Hardware Token (USB) for eOffice", "End-to-End Encryption for Comms", "Strict PII Redaction in Public Search", 
  "Watermarked Document Downloads", "Audit Trails for Every Letter View", 
  "Biometric Access for Confidential Vault", "Time-Restricted Viewing Links", "Intrusion Detection on API Gateways"
];

const futureScope = [
  "Fully Autonomous AI Drafting Assistants", "Blockchain Immutable Dispatch Logs", "Holographic Letter Review",
  "Predictive Administrative Bottlenecks", "Voice-Command Mail Routing", "Automated Drone Dak Delivery within HQ"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Dak Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Mail Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Pendency Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CorrespondenceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Mail className="inline-icon" size={28} /> AI Police Correspondence & Dak
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Correspondence</strong> revolutionizes the traditional 'Dak' system. By integrating deeply with NIC eOffice and utilizing AI OCR, it completely digitizes the flow of government letters, ensuring zero lost files and drastically reducing response pendency.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Mailbox className="inline-icon" color="#3b82f6" /> AI Dak Management</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Incoming physical mail is scanned. AI instantly performs OCR (Hindi/English), extracts the Subject and Reference Number, and auto-populates the Digital Receipt Register.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#10b981" /> eOffice Integration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Seamlessly bridges with the government's eOffice portal. Dispatched letters are digitally signed and routed electronically to other departments, eliminating physical transit delays.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> CMO / VIP Letter Tracker</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Letters originating from the Chief Minister's Office or VIPs are automatically detected via sender metadata and red-flagged for immediate escalation and priority drafting.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#ef4444" /> Pendency & Reminders</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Calculates the Turnaround Time (TAT) for every officer. If a letter sits in an inbox beyond the SLA, the AI autonomously sends WhatsApp and email reminders to the concerned officer.</p>
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
            {correspondenceModules.map((mod, i) => (
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
            <Mail size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>CORRESPONDENCE</span></h1>
            <p className="cyber-subtitle">Dak Management, eOffice Sync & Pendency Routing</p>
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

export default CorrespondenceDetailed;
