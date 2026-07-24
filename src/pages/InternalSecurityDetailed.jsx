import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, UserX, Scale, Search
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Internal Complaint Analyzer", "Misconduct Pattern Finder", "Departmental Inquiry Bot", 
  "Anonymous Tip Verifier", "Social Media Ethics Auditor", "Whistleblower Protection AI", 
  "Bribery Risk Profiler", "Evidence Tamper Detector", "Suspension Tracker Bot",
  "Confidential Report Analyzer", "Financial Anomaly Flag"
];

const vigilanceModules = [
  {
    title: "Internal Complaint Cell",
    icon: <UserX size={20} />,
    items: ["Anonymous Whistleblowing", "Complaint NLP Triage", "Harassment Case Tracking", "Automated Action Taken Reports"]
  },
  {
    title: "Misconduct & Ethics",
    icon: <Search size={20} />,
    items: ["Social Media Policy Audits", "Use-of-Force Anomaly Detection", "Body-Cam De-activation Flags", "Bias/Discrimination Analysis"]
  },
  {
    title: "Departmental Inquiries",
    icon: <Scale size={20} />,
    items: ["Inquiry Timeline Tracking", "Digital Evidence Collation", "Automated Show-Cause Drafting", "Hearing Schedule Sync"]
  },
  {
    title: "Disciplinary Action",
    icon: <ShieldAlert size={20} />,
    items: ["Suspension Roster Tracker", "Reinstatement Eligibility", "Pay-Cut Automation (HRMS Sync)", "Legal Appeal Tracking"]
  },
  {
    title: "Integrity & Confidentiality",
    icon: <Shield size={20} />,
    items: ["Annual Confidential Reports (ACR)", "Asset Declaration Discrepancies", "Dark Web Credential Leaks", "Information Leak Tracing"]
  }
];

const aiFeatures = [
  "AI Behavioral Risk Profiling", "AI Speech-to-Text Inquiry Transcripts", "AI Body-Cam Metadata Analysis",
  "AI Deep Web PII Scanning", "AI Disproportionate Asset Calculation", "AI Bias Detection in Arrests",
  "AI Legal Precedent Matcher (Inquiries)", "AI Sentiment Analysis of Complaints"
];

const databases = [
  "Vigilance_Complaint_Ledger", "Officer_Disciplinary_History", "ACR_Confidential_Vault", "Asset_Declaration_DB", "BodyCam_Audit_Logs", 
  "Inquiry_Tribunal_Records", "Whistleblower_Anonymized_DB", "Suspension_Registry", "Social_Media_Alias_Meta", "Ethics_Violation_Flags"
];

const dashboards = [
  "Vigilance & Integrity Scorecard", "Pending Departmental Inquiries", "Suspension & Reinstatement Board", 
  "Misconduct Heatmap (Zone-wise)", "Whistleblower Tip Triage", "Asset Discrepancy Radar"
];

const apis = [
  "State Anti-Corruption Bureau (ACB)", "HRMS/Payroll Sync (Pay-Cuts)", "Bank APIs (Asset Verification)", "Social Media Public Graph APIs",
  "e-Courts (Appellate Tribunals)", "Central Vigilance Commission (CVC)"
];

const reports = [
  "Annual Departmental Integrity Index", "Pending Inquiry Bottleneck Report", "Use-of-Force Audit", 
  "Officer Asset Declaration Discrepancies", "Suspension Financial Impact", "Anonymous Complaint Resolution Rate"
];

const security = [
  "Zero-Knowledge Proofs for Whistleblowers", "Strict Compartmentalization of Inquiries", "Audit Logs on Viewing ACRs", 
  "End-to-End Encryption on Evidence", "Watermarking of Confidential Files", 
  "Blockchain-backed Show-Cause Notices", "Hardware Security Keys for ACB", "Automated Redaction of Informant PII"
];

const futureScope = [
  "Neural-link Polygraph Alternatives", "AI Continuous Background Vetting", "Predictive Corruption Modeling",
  "Holographic Inquiry Hearings", "Automated Blockchain Expungement", "Decentralized Ethics Voting"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Vigilance Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Security Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Integrity Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const InternalSecurityDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI Internal Security & Vigilance
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Internal Security & Vigilance</strong> maintains the highest ethical standards within the police force. It provides a secure vault for whistleblowers, automates departmental inquiries, and uses AI to detect anomalies in officer asset declarations.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><UserX className="inline-icon" color="#3b82f6" /> Whistleblower & Complaints</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Allows citizens and junior officers to report misconduct anonymously. The AI analyzes the text, assigns a credibility score, and routes it to the Anti-Corruption Bureau without revealing the source.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Search className="inline-icon" color="#10b981" /> Disproportionate Assets AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references an officer's declared salary (from HRMS) with their declared assets and properties. Instantly flags statistical anomalies that may indicate bribery or corruption.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Scale className="inline-icon" color="#f59e0b" /> Departmental Inquiries</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Digitizes the entire disciplinary process. Generates automated Show-Cause notices, transcripts inquiry hearings using Speech-to-Text, and ensures legal timelines are not breached.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Misconduct Analytics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes metadata from Body-Worn Cameras. If an officer repeatedly turns off their camera right before a use-of-force incident, the AI raises a red flag to the zone commander.</p>
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
            {vigilanceModules.map((mod, i) => (
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
            <ShieldAlert size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">INTERNAL SECURITY <span>& VIGILANCE</span></h1>
            <p className="cyber-subtitle">Ethics Tracking, Departmental Inquiries & Whistleblower AI</p>
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

export default InternalSecurityDetailed;
