import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  Briefcase, Calendar, Calculator, Target, BookOpen, Heart,
  Smartphone, HardDrive, Bell, CheckCircle, ShieldAlert,
  Search, ClipboardCheck, Scale, FileSearch, Folders, Lock, PieChart
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Document Classification AI", "Smart OCR & Handwriting Recognition AI", 
  "Intelligent Document Indexing AI", "Digital File Organizer AI", 
  "Document Approval Workflow AI", "Document Access Control AI", 
  "Document Lifecycle Management AI", "Record Archival AI", 
  "Archive Retrieval AI", "Duplicate Document Detection AI", 
  "Digital Signature Verification AI", "Chain of Custody Tracker AI", 
  "Court Document Management AI", "Data Loss Prevention AI", 
  "Tamper Detection AI", "AI Document Chat Assistant", "Knowledge Base AI", 
  "Document Analytics AI", "Executive Document Dashboard AI", "Document KPI Dashboard AI",
  "FIR Digitization Expert AI", "Case File Summarization AI", "Confidential Vault Guardian AI", 
  "Semantic Search Assistant AI", "Old Records Restoration AI", "Forensic Document Analyst AI", 
  "Multi-lingual Translator AI", "Document Redaction Bot AI", "Cross-Reference Engine AI",
  "Legal Act Cross-Checker AI", "Evidence Integrity Validator AI"
];

const documentModules = [
  {
    title: "FIR & Case Digitization",
    icon: <FileText size={20} />,
    items: ["FIR Scanning & OCR", "Charge-sheet Archival", "Witness Statement Storage", "Digital Evidence Attachments", "Legacy File Bulk Upload"]
  },
  {
    title: "Confidential Vault",
    icon: <Lock size={20} />,
    items: ["Intelligence Reports Vault", "Undercover Ops Files", "Sealed Court Orders", "Classified Internal Memos"]
  },
  {
    title: "Semantic AI Search",
    icon: <Search size={20} />,
    items: ["Keyword-free Context Search", "Cross-Case Link Analysis", "Face/Image Search in PDFs", "Handwritten Notes Search"]
  },
  {
    title: "Records Retention",
    icon: <Database size={20} />,
    items: ["Automated Archival Policies", "Secure Deletion Logs", "Court-ordered Preservation", "Digital Signature Verification"]
  },
  {
    title: "File Sharing & Workflows",
    icon: <Network size={20} />,
    items: ["Inter-Station File Transfer", "Court E-Filing Export", "Prosecutor Sharing Portal", "DGP Approval Workflows"]
  },
  {
    title: "Document Forensics",
    icon: <ShieldAlert size={20} />,
    items: ["Digital Forgery Detection", "Metadata Extraction", "Watermarking", "Document Version Control"]
  }
];

const aiFeatures = [
  "AI Handwritten FIR Transcription", "AI Case Summary Generator", "AI Translation of Witness Statements",
  "AI Auto-Redaction of Victim Identities", "AI Modus Operandi (MO) Pattern Matcher", "AI Automated File Categorization",
  "AI Voice-to-Text Dictation for IOs", "AI Fake Document Detection", "AI Predictive Case Linkage",
  "AI Suspect Graph Generation from Text", "AI Legal Sections (BNS/CrPC) Auto-Tagger"
];

const databases = [
  "FIR_Documents", "ChargeSheets", "WitnessStatements", "IntelligenceMemos", "CourtOrders", 
  "InternalCirculars", "ServiceBooks", "AuditLogs", "AccessTokens", "VectorEmbeddings", 
  "MetadataIndexes", "ArchivedFiles", "RedactedCopies", "DigitalSignatures"
];

const dashboards = [
  "Central Records Command Board", "Digitization Progress Tracker", "Search Analytics Dashboard", 
  "Classified Access Audit Board", "Station-wise Document Upload Status", "Storage Optimization Dashboard"
];

const apis = [
  "CCTNS Document Sync APIs", "Court E-Filing APIs", "Forensic Lab Report APIs", "Inter-State Police DB APIs",
  "UIDAI (Aadhar) Verification APIs", "AI OCR & Translation APIs", "Secure Vault Access APIs"
];

const reports = [
  "Daily Digitization Report", "Document Access Audit Trail", "Classified Vault Breach Attempts", 
  "Pending Charge-sheet Uploads", "Storage Utilization Report", "Archival & Deletion Logs", 
  "Translation Accuracy Report"
];

const security = [
  "AES-256 Document Encryption", "Gov-Grade JWT Authentication", "Dynamic Watermarking", 
  "Rank & Need-to-Know Access Control", "Document View/Print/Download DRM", 
  "Immutable Access Audit Trails", "Anti-Screenshot Protections", "Air-Gapped Backup Sync"
];

const futureScope = [
  "Holographic Document Verification", "Quantum-Safe Encryption Vaults", "Decentralized IPFS Storage",
  "Global Interpol DB Sync", "Real-time Video-to-Text Indexing", "Brain-Computer Interface Search"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Document AI Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'DMS Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'DMS Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const DocumentDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Folders className="inline-icon" size={28} /> AI Document Management System (DMS)
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Police DMS</strong> is a highly secure, centralized digital vault for the entire police force. It replaces decaying physical file rooms with an intelligent, searchable database. Utilizing advanced Optical Character Recognition (OCR) and Natural Language Processing (NLP), it turns decades of handwritten FIRs and case files into instantly searchable, actionable intelligence.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Search className="inline-icon" color="#3b82f6" /> Semantic AI Search</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of exact keyword matches, Investigating Officers can ask questions in plain language (e.g., "Show me all cases involving a red motorcycle in 2021") and the AI will find relevant case files instantly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#10b981" /> Handwritten OCR & Translation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Proprietary AI models designed to read messy, handwritten police diaries and FIRs in multiple regional languages and accurately translate them into English.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Lock className="inline-icon" color="#f59e0b" /> Confidential Vault</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A military-grade encrypted storage area for sensitive intelligence reports, undercover operations, and protected witness identities, governed by strict "Need-to-Know" access protocols.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Auto-Redaction</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI automatically detects and black-outs (redacts) sensitive information like victim names, adhaar numbers, or classified locations before a document is shared with lower ranks or courts.</p>
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
            {documentModules.map((mod, i) => (
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
            <Folders size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI DOCUMENT <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">Next-Generation Secure Digital Vault powered by AI</p>
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

export default DocumentDetailed;
