import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  Briefcase, Calendar, Calculator, Target, BookOpen, Heart,
  Smartphone, HardDrive, Bell, CheckCircle, ShieldAlert,
  Search, ClipboardCheck, Scale, FileSearch, PieChart
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Fraud Detection AI", "Station Audit Expert AI", "Asset Verification AI", 
  "Compliance Checker AI", "Disciplinary Auditor AI", "Cyber Forensics Auditor AI", 
  "Risk Management AI", "Fund Utilization Auditor AI", "Armoury Inspector AI",
  "Legal Audit Bot AI", "Evidence Chain Auditor AI", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const auditModules = [
  {
    title: "Financial Audits",
    icon: <Calculator size={20} />,
    items: ["Secret Fund (SS Fund) Audit", "Expense Claims Verification", "Payroll Audits", "Budget Utilization Auditing", "Tender & Procurement Audit"]
  },
  {
    title: "Armoury & Logistics Audits",
    icon: <Target size={20} />,
    items: ["Weapon Issue & Return Logs", "Ammunition Depletion Audits", "Vehicle Mileage vs Fuel Checks", "Uniform Stock Auditing"]
  },
  {
    title: "Disciplinary & Admin Audits",
    icon: <Scale size={20} />,
    items: ["Suspension Records Audit", "ACR Fairness Verification", "Departmental Enquiry Logs", "Leave Abuse Detection"]
  },
  {
    title: "Station & Malkhana (Evidence) Audits",
    icon: <ShieldAlert size={20} />,
    items: ["Seized Asset Verification", "Evidence Chain of Custody", "Station Register Auditing", "Lock-up Logs Compliance"]
  },
  {
    title: "Cyber & IT Audits",
    icon: <Network size={20} />,
    items: ["Data Access Logs", "CCTNS Entry Timeliness", "Network Vulnerability Scans", "Hardware Lifecycle Audits"]
  },
  {
    title: "Compliance Management",
    icon: <ClipboardCheck size={20} />,
    items: ["Police Act Compliance", "Human Rights (NHRC) Guidelines", "Court Order Execution Tracking", "CAG Directives"]
  }
];

const aiFeatures = [
  "AI Expense Fraud Detection", "AI Malkhana (Evidence) Tamper Alert", "AI Anomalous Fuel Consumption Flag",
  "AI Ghost Employee/Pensioner Detection", "AI Biased ACR (Performance Report) Flagging", "AI Automated Risk Profiling",
  "AI NLP for FIR & Register Auditing", "AI Tender Cartelization Detection", "AI Predictive Audit Scheduling",
  "AI Facial Recognition for Auditor Access", "AI Legal Precedent Matcher for Audits"
];

const databases = [
  "AuditTrails", "ExpenseLogs", "MalkhanaRecords", "EvidenceChains", "DutyRosters", 
  "ArmouryLogs", "FuelLogs", "TenderBids", "DisciplinaryFiles", "ACRs", 
  "ComplianceRules", "Inspections", "AuditorProfiles", "CaseFiles"
];

const dashboards = [
  "DGP Audit Command Center", "Zone-wise Risk & Compliance Board", "Fraud Detection Heatmap", 
  "Station Inspection Tracker", "Pending Audit Exceptions", "Evidence (Malkhana) Discrepancy Dashboard"
];

const apis = [
  "Treasury & Banking Sync APIs", "CCTNS Audit APIs", "Armoury RFID Sync APIs", "Fuel Station APIs",
  "Court Case Sync APIs", "Biometric Audit Auth APIs", "AI Anomaly Detection APIs"
];

const reports = [
  "Annual Departmental Audit Report", "Malkhana Inspection Report", "Financial Irregularity Report", 
  "Armoury Discrepancy Report", "Compliance Exception Report", "CAG Submission Formats", 
  "Station Readiness Audit", "Disciplinary Action Review"
];

const security = [
  "Immutable Blockchain Audit Logs", "Gov-Grade JWT Authentication", "Strict Segregation of Duties", 
  "Auditor Biometric MFA", "End-to-End Encryption (AES-256)", 
  "Zero-Trust Access Control", "Data Masking for Sensitive Cases", "Digital Signatures (DSC)"
];

const futureScope = [
  "Drone-based Physical Asset Verification", "Continuous Real-time AI Auditing", "Smart Contracts for Vendor Clearances",
  "Predictive Corruption Mapping", "Automated Compliance Rectification Workflows", "VR Station Inspection Training"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Audit AI Agents', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Audit Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const AuditDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <FileSearch className="inline-icon" size={28} /> AI Audit & Compliance Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Police Audit Management</strong> is a robust, continuous monitoring system designed to enforce total transparency and accountability within the police force. From tracking secret investigation funds to verifying seized assets in the Malkhana, this AI-driven platform flags anomalies before they become liabilities.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Search className="inline-icon" color="#3b82f6" /> Smart Anomaly Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI continuously scans millions of data points—fuel logs, ammunition use, and expense claims—to instantly detect fraud, waste, or abuse without manual intervention.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Malkhana & Evidence Audits</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Digitizes the Chain of Custody. Uses AI and RFID integration to ensure that seized cash, drugs, or weapons match the exact quantities logged in FIRs.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ClipboardCheck className="inline-icon" color="#10b981" /> Regulatory Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically verifies police actions against CAG directives, Police Act rules, and NHRC human rights guidelines, ensuring total legal compliance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Immutable Trails</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Every edit, approval, and transaction is secured on an immutable digital ledger, ensuring that audit trails can never be tampered with or deleted.</p>
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
            {auditModules.map((mod, i) => (
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
            <FileSearch size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI AUDIT <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">Next-Generation Transparency & Compliance powered by AI</p>
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

export default AuditDetailed;
