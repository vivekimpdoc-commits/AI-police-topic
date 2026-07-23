import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, FileWarning, SearchCode, Send
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "e-FIR NLP Classifier AI", "Complaint Routing Bot", "Legal Precedent Matcher AI", 
  "Zero-FIR Triangulator", "Fake Complaint Detector", "Urgency Scorer AI", 
  "Cyber Crime Keyword Extractor", "Station Jurisdiction Mapper", "FIR Translation Agent",
  "Victim Sentiment Analyzer", "Evidence Checklist Generator"
];

const complaintModules = [
  {
    title: "AI e-FIR Generation",
    icon: <FileWarning size={20} />,
    items: ["Natural Language to Legal Text", "BNS Section Auto-Tagging", "Multilingual FIR Translation", "Voice-to-FIR Drafting"]
  },
  {
    title: "Intelligent Routing",
    icon: <Send size={20} />,
    items: ["Jurisdiction Auto-Assign (Zero-FIR)", "Department Routing (Cyber vs Thana)", "Officer Workload Balancing", "VIP/Sensitive Case Escalation"]
  },
  {
    title: "Fraud & Fake Complaint Detection",
    icon: <SearchCode size={20} />,
    items: ["Repeat Offender/Complainant Flag", "Inconsistent Narrative Detection", "Cross-Station Duplicate Check", "IP/Location Spoofing Alert"]
  },
  {
    title: "Analytics & Triage",
    icon: <PieChart size={20} />,
    items: ["Urgency Scoring (1 to 10)", "Predictive Case Duration", "Crime Category Trend Analysis", "Pending Investigation Alerts"]
  },
  {
    title: "Victim Communication",
    icon: <Users size={20} />,
    items: ["Auto-Status Updates (SMS/WhatsApp)", "IO Assignment Notification", "Court Date Reminders", "Victim Protection Trigger"]
  }
];

const aiFeatures = [
  "AI Legal NER (Named Entity Recognition)", "AI Geospatial Jurisdiction Mapping", "AI Text Plagiarism & Fraud Detection",
  "AI Automated BNS Section Suggestion", "AI Priority Queue Sorting", "AI Speech-to-Text Transcription",
  "AI Case Law Cross-Referencing", "AI Automated IO Briefing Generation"
];

const databases = [
  "FIR_Master_Registry", "Complaint_Drafts", "BNS_Legal_Codes", "Jurisdiction_Polygons", "Officer_Workload_Status", 
  "Fake_Complaint_Blacklist", "Victim_Contacts", "Evidence_Attachments", "Audit_Trail_Logs", "Court_Hearing_Schedules"
];

const dashboards = [
  "Live FIR Registration Heatmap", "Pending Complaints by Thana", "Zero-FIR Transfer Matrix", 
  "Crime Category Distribution", "IO Workload & Efficiency", "Fake/Rejected FIR Analytics"
];

const apis = [
  "CCTNS Core Sync APIs", "Supreme Court Database APIs", "GIS Mapping APIs", "UIDAI (Aadhaar) Auth APIs",
  "WhatsApp/SMS Gateway APIs", "Vahan/Sarathi DB APIs", "Telecom CDR Request APIs"
];

const reports = [
  "Daily Crime Rate by Category", "FIR Turnaround Time (TAT)", "Top Jurisdictional Conflicts", 
  "Officer Investigation Efficiency", "Monthly Zero-FIR Conversions", "False Prosecution Audit"
];

const security = [
  "Immutable FIR Hashes (Blockchain)", "Complainant Anonymity Modes", "Strict Access Logs (IO Level)", 
  "Aadhaar e-KYC Verification", "Data Encryption in Transit", 
  "Tamper-Proof Timestamps", "IP Logging & Geo-fencing", "Approval Workflow Enforcements"
];

const futureScope = [
  "Brainwave Lie Detection at Desk", "Holographic Crime Scene Recreations", "Autonomous Robo-Cop FIR Stations",
  "Predictive Retaliation Alerts", "Quantum-Secured Victim Identities", "Global Interpol Auto-Flagging"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Legal AI Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Complaint Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'FIR Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ComplaintDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <FileWarning className="inline-icon" size={28} /> AI Complaint & e-FIR Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Complaint & e-FIR Management</strong> modernizes the first step of justice. Using advanced Natural Language Processing (NLP), it allows citizens to draft complaints in plain text or voice, automatically translates them into legal terminology, applies correct BNS sections, and routes them to the correct jurisdiction instantly.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><SearchCode className="inline-icon" color="#3b82f6" /> AI-Assisted FIR Drafting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>The AI scans the citizen's complaint (e.g., "My phone was snatched") and automatically tags the relevant Bharatiya Nyaya Sanhita (BNS) sections for robbery or theft.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Send className="inline-icon" color="#10b981" /> Smart Jurisdiction Routing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Eliminates jurisdictional disputes (Zero-FIR). The AI reads the incident location and automatically routes the FIR to the exact Police Station and IO responsible.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Fake Complaint Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references past complaints across the state to detect serial fake complainants, contradictory statements, or politically motivated mass-filings.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Urgency Triage</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically reads the text and assigns an urgency score (1-10). A complaint involving "kidnapping" or "weapon" bypasses the queue and triggers alarms at the Command Center.</p>
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
            {complaintModules.map((mod, i) => (
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
            <FileWarning size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI COMPLAINT <span>& e-FIR</span></h1>
            <p className="cyber-subtitle">Automated Legal Drafting, Triage & Jurisdiction Routing</p>
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

export default ComplaintDetailed;
