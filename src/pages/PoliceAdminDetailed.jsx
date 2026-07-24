import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Briefcase, Mail
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Office Order Generator Bot", "Circular Dispatch AI", "Meeting Agenda NLP", 
  "File Movement Tracker", "Gov Letter Priority Scorer", "Record Retention AI", 
  "RTI Query Auto-Responder", "Productivity Analytics Bot", "Attendance Tracking AI",
  "Action Taken Report (ATR) AI", "Document Classifier Bot"
];

const adminModules = [
  {
    title: "Office Orders & Circulars",
    icon: <FileText size={20} />,
    items: ["AI Draft Generation", "Automated Circulation Matrix", "Digital Signature Verification", "Read-Receipt Analytics"]
  },
  {
    title: "File & Letter Tracking",
    icon: <Briefcase size={20} />,
    items: ["Barcode File Movement", "Government Letter Priority Sorting", "Pendency Alerts (Red-flagging)", "Inter-Department Sync"]
  },
  {
    title: "Meeting Management",
    icon: <Activity size={20} />,
    items: ["AI Agenda Generator", "Voice-to-Text Minutes", "Action Taken Report (ATR) Tracking", "Meeting Attendance Stats"]
  },
  {
    title: "RTI Assistance System",
    icon: <Mail size={20} />,
    items: ["NLP Query Understanding", "Automated Record Retrieval", "RTI Deadline Alarms", "Draft Response Generation"]
  },
  {
    title: "Record Retention AI",
    icon: <Database size={20} />,
    items: ["Automated Archiving Schedule", "Destruction Compliance Checks", "Historical Search Engine", "Digital Migration Tracking"]
  }
];

const aiFeatures = [
  "AI NLP for RTI Query Interpretation", "AI OCR for Legacy Paper Records", "AI Priority Sorting for Incoming Mail",
  "AI Voice-to-Text Meeting Transcription", "AI Pendency Prediction Models", "AI Document Categorization (Confidential/Public)",
  "AI Automated Action Taken Report (ATR) Parsing", "AI Signature Forgery Detection"
];

const databases = [
  "Office_Order_Registry", "File_Movement_Logs", "RTI_Requests_DB", "Meeting_Minutes_Lake", "Gov_Letter_Tracking", 
  "Digital_Archives", "Employee_Read_Receipts", "Action_Taken_Reports", "Record_Retention_Schedules"
];

const dashboards = [
  "Live Pendency Tracker", "RTI Compliance Dashboard", "File Movement Heatmap", 
  "Meeting Productivity Stats", "Departmental Efficiency Score", "Incoming Mail Triage"
];

const apis = [
  "State Govt Secretariat Sync", "E-Office Integration APIs", "RTI Central Portal Webhooks", "Digital Signature (DSC) APIs",
  "Email Gateway (SMTP) APIs", "Barcode/QR Scanner APIs"
];

const reports = [
  "Monthly File Pendency Report", "RTI Deadline Breach Alerts", "Meeting ROI Analysis", 
  "Circular Readership Metrics", "Record Destruction Audit Log", "Departmental ATR Status"
];

const security = [
  "Role-Based Access for Top Secret Files", "Digital Signature (DSC) Enforcements", "Tamper-Proof File Movement Logs", 
  "Automatic Redaction of PII in RTIs", "Audit Trails for Every File Click", 
  "Biometric Login for E-Office", "Encrypted Internal Mail Servers", "Watermarked PDF Downloads"
];

const futureScope = [
  "Fully Autonomous E-Office Routing", "Holographic Virtual Meeting Rooms", "Predictive Administrative Bottleneck Resolution",
  "Blockchain-based File Movement Logs", "AI Legal Vetting of All Office Orders", "Quantum-Safe Document Archives"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Admin Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Admin Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Pendency Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceAdminDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Briefcase className="inline-icon" size={28} /> AI Police Administration & E-Office
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Administration</strong> transforms bureaucratic red tape into a streamlined, AI-driven E-Office. From tracking physical files to automatically drafting responses for RTI queries, the system ensures zero pendency and maximum operational transparency.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Briefcase className="inline-icon" color="#3b82f6" /> File & Letter Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Every government letter and physical file is barcoded. AI predicts bottlenecks, red-flags files stuck on a desk for over 48 hours, and automatically escalates to senior officers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Mail className="inline-icon" color="#10b981" /> RTI Assistance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses NLP to read incoming Right to Information (RTI) queries, automatically searches the digital archives, and generates a draft response for the Public Information Officer (PIO).</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Meeting Intelligence</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Records voice during HQ meetings, transcribes minutes automatically, and extracts Action Items. It then emails the Action Taken Report (ATR) templates to the responsible officers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#ef4444" /> Record Retention</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors the lifecycle of old documents. When a document's legal retention period expires, the AI automatically schedules it for secure digital and physical destruction.</p>
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
            {adminModules.map((mod, i) => (
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
            <Briefcase size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>ADMINISTRATION</span></h1>
            <p className="cyber-subtitle">File Tracking, RTI Assistance & E-Office</p>
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

export default PoliceAdminDetailed;
