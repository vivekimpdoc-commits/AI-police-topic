import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, FileCheck, Calendar
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Digitization Bot", "NLP Register Parser", "Compliance Calendar AI", 
  "Audit Trail Tracker", "Auto-Redaction Bot", "Retention Policy Enforcer", 
  "Historical Data Miner", "Regulatory Report Gen", "e-Signature Validator",
  "Policy Gap Analyzer", "Data Masking Bot"
];

const docsModules = [
  {
    title: "Manual Register Digitization",
    icon: <Database size={20} />,
    items: ["AI OCR for Handwriting", "Legacy Data Ingestion", "Automated Metadata Tagging", "Digital Twin Creation"]
  },
  {
    title: "Compliance Calendar",
    icon: <Calendar size={20} />,
    items: ["Regulatory Deadline Alerts", "Automated Task Assignments", "Pending Audit Reminders", "Policy Renewal Tracking"]
  },
  {
    title: "e-Signature & Approvals",
    icon: <FileCheck size={20} />,
    items: ["Multi-tier Approval Workflows", "Aadhar e-Sign Integration", "Digital Watermarking", "Tamper-proof Archiving"]
  },
  {
    title: "Regulatory Reporting",
    icon: <Activity size={20} />,
    items: ["Automated State Govt Reports", "MHA Compliance Sync", "RTI Query Auto-Assembler", "Data Anonymization Engine"]
  }
];

const aiFeatures = [
  "AI Handwriting Recognition for Old FIRs (OCR/ICR)", "AI NLP to Extract Entities from Scanned Docs", "AI Automated Anonymization of Victim Details",
  "AI Prediction of Compliance Bottlenecks", "AI Semantic Search across Decades of Records", "AI Plagiarism/Forgery Detection in Reports",
  "AI Sentiment Analysis of RTI Queries", "AI Automated Summarization of Thick Case Files"
];

const databases = [
  "Digitized_Registers_Lake", "Compliance_Deadlines_DB", "e_Signature_Ledger", "Regulatory_Reports_Archive", "RTI_Responses_DB", 
  "Metadata_Index", "Audit_Logs", "Anonymized_Public_Records"
];

const dashboards = [
  "Digitization Progress Tracker", "State Compliance Heatmap", "RTI Pendency Radar", 
  "e-Signature Workflow Status", "Regulatory Audit Readiness", "Legacy Data Mining Efficacy"
];

const apis = [
  "DigiLocker Issuance API", "CCTNS Document Sync", "State Secretariat Reporting API", "UIDAI e-Sign Gateway",
  "National Archives Sync API", "RTI Online Portal Integration"
];

const reports = [
  "Monthly Digitization Output", "Compliance Failure Analysis", "RTI Resolution SLA", 
  "Data Anonymization Audit", "e-Signature Adoption Rate", "Legacy Record Preservation Status"
];

const security = [
  "Zero-Knowledge Encryption for Archived Files", "Strict RBAC based on Officer Rank", "Automated PII Redaction before Export", 
  "Blockchain Timestamps for e-Signatures", "Immutable Audit Trails for Document Views", 
  "Watermarked Downloads", "DLP (Data Loss Prevention) Integration", "Air-gapped Storage for Top Secret Docs"
];

const futureScope = [
  "AI Legal Sentience for Drafting Reports", "Quantum-Safe Document Vaults", "Holographic Visualization of Case Timelines",
  "Automated Robotic Retrieval of Physical Files", "Decentralized IPFS Storage for Public Records", "Brain-Computer Interface for Dictation"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Doc Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Compliance Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const DocumentationComplianceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <FileCheck className="inline-icon" size={28} /> AI Documentation & Compliance
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Documentation & Compliance</strong> marks the end of the paper era. By utilizing advanced AI Optical Character Recognition (OCR) to ingest decades of handwritten registers, and enforcing strict digital compliance calendars, it transforms a bureaucratic nightmare into a streamlined, searchable digital vault.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#3b82f6" /> Register Digitization</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scans and ingests decades of physical police station registers. Specialized AI reads cursive police handwriting (ICR) and extracts metadata (names, dates, crimes) to make 100-year-old records instantly searchable.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Calendar className="inline-icon" color="#10b981" /> Compliance Calendar</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A state-wide digital calendar that tracks every regulatory deadline, court submission, and audit date. AI automatically assigns tasks to officers and escalates impending breaches to senior command.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#f59e0b" /> Digital Workflows & e-Sign</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Replaces physical file movement with transparent digital workflows. Documents are approved using Aadhar-based e-Signatures, permanently logged on a tamper-proof ledger.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Regulatory & RTI Reporting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>When a complex RTI query or Ministry of Home Affairs (MHA) report is due, the AI instantly mines the database, auto-redacts sensitive PII, and compiles a draft response in minutes.</p>
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
            {docsModules.map((mod, i) => (
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
            <FileCheck size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">DOCUMENTATION & <span>COMPLIANCE</span></h1>
            <p className="cyber-subtitle">Register Digitization, e-Signatures & RTI Automation</p>
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

export default DocumentationComplianceDetailed;
