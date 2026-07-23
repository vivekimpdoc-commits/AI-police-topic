import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, Scale, FileCheck
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "AI Ethics Auditor Bot", "Bias Detection AI Model", "Algorithm Fairness Scorer",
  "Policy Compliance Tracker", "Data Privacy Guardian AI", "Regulatory Sync Agent",
  "Use-of-Force Audit AI", "Internal Investigation Bot", "Officer Misconduct Predictor",
  "Racial Profiling Analyst AI", "Body-Cam Compliance AI", "Video Audit Scrubber Bot",
  "Whistleblower Anonymity AI", "Digital Evidence Chain Auditor", "Legal Precedent Sync Bot",
  "GDPR / DPDP Compliance AI", "Citizen Complaint Auditor", "Public Transparency Bot",
  "Audit Log Immutable Hasher", "Smart Contract Governor AI", "Vendor Code Auditor Bot",
  "Cyber-Security Compliance AI", "Network Access Governor", "Zero-Trust Policy Enforcer",
  "Biometric Data Purge Bot", "Facial Recognition Auditor", "False-Positive Rate Monitor",
  "Algorithm Explainability AI", "Model Drift Detector Bot", "AI Training Data Scrubber",
  "PII Masking Compliance AI", "Record Retention Enforcer", "Court Mandate Tracker Bot",
  "Subpoena Auto-Responder AI", "Search Warrant Validator", "Wiretap Compliance Auditor",
  "Asset Forfeiture Ledger AI", "Budget Expenditure Auditor", "Grant Compliance Sync Bot",
  "Interrogation Rights Monitor", "Miranda Warning Audit Bot", "Juvenile Record Sealer AI",
  "Bail/Parole Algorithm Auditor", "Recidivism Bias Checker AI", "Hiring Diversity Analyst Bot",
  "Promotion Equity Scorer AI", "Overtime Fraud Detector", "Fleet Fuel Compliance Bot",
  "Armory Inventory Auditor", "Ammunition Usage Tracker", "Disciplinary Action Tracker",
  "Public Record Request AI", "FOIA Auto-Redaction Bot", "Press Release Fact-Checker",
  "Social Media Conduct AI", "Officer Moonlighting Alert", "Gift & Conflict of Interest AI",
  "Station Cleanliness Auditor", "Jail Cell Capacity Monitor", "Inmate Rights Compliance AI"
];

const governanceModules = [
  {
    title: "AI Ethics & Fairness",
    icon: <Scale size={20} />,
    items: ["Bias Detection", "Algorithm Explainability", "Racial Profiling Audits", "False-Positive Monitoring"]
  },
  {
    title: "Regulatory Compliance",
    icon: <FileCheck size={20} />,
    items: ["DPDP/GDPR Adherence", "Data Retention Policies", "Search Warrant Audits", "FOIA Request Handling"]
  },
  {
    title: "Internal Affairs",
    icon: <ShieldAlert size={20} />,
    items: ["Use-of-Force Reviews", "Misconduct Prediction", "Body-Cam Auditing", "Conflict of Interest Tracking"]
  },
  {
    title: "System Governance",
    icon: <Database size={20} />,
    items: ["Zero-Trust Enforcement", "Access Log Auditing", "Vendor Code Reviews", "Immutable Hash Logging"]
  },
  {
    title: "Public Transparency",
    icon: <Users size={20} />,
    items: ["Transparency Dashboards", "Citizen Complaint Audits", "Press Release Verifiers", "Whistleblower Protection"]
  }
];

const aiFeatures = [
  "AI Automated Use-of-Force Auditing", "AI Bias Detection in Predictive Policing", "AI FOIA Auto-Redaction",
  "AI Immutable Audit Trails", "AI Automated DPDP Compliance", "AI False-Positive Correction"
];

const databases = [
  "Use_of_Force_Logs", "Body_Cam_Audit_Trails", "AI_Bias_Scores", "FOIA_Requests_DB", 
  "Internal_Investigations", "Compliance_Certificates", "Immutable_Hash_Ledger", "Misconduct_Records"
];

const dashboards = [
  "Department Transparency Board", "AI Fairness & Bias Index", "Internal Affairs Dashboard", 
  "Compliance & Regulation Tracker", "Data Privacy Status", "Use-of-Force Analytics"
];

const apis = [
  "State Legal Database Sync", "DPDP Regulator Webhooks", "Courthouse Subpoena APIs", 
  "Body-Cam Metadata Sync", "Vendor Audit APIs", "Public Transparency Portal Sync"
];

const reports = [
  "Quarterly Ethics & Bias Report", "Annual Transparency Review", "Use-of-Force Breakdown", 
  "Data Privacy Compliance Audit", "Internal Affairs Summary", "Algorithm Accuracy Log"
];

const security = [
  "Blockchain Audit Trails", "Zero-Knowledge Proofs", "Strict PII Masking", 
  "Multi-Sig Approval Workflows", "Tamper-Evident Logging", "Air-Gapped Investigation Vaults"
];

const futureScope = [
  "Real-time Court Compliance Sync", "Fully Autonomous Internal Affairs AI", "Global AI Ethics Standards Sync",
  "Quantum-Secured Audit Ledgers", "Public Blockchain Transparency", "Predictive Misconduct Prevention"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Governance Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Compliance Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const GovernanceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Scale className="inline-icon" size={28} /> AI Governance & Compliance
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Governance & Compliance</strong> acts as the digital Internal Affairs and regulatory watchdog of the police force. It ensures that all AI systems (like facial recognition) operate fairly, without racial or gender bias. It also automatically audits body-cam footage for use-of-force compliance and ensures citizen data privacy laws are strictly followed.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#3b82f6" /> Algorithm Fairness</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Constantly tests predictive policing models and facial recognition systems to detect and eliminate systemic bias and false positives.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Use-of-Force Audits</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI automatically scans thousands of hours of body-cam footage to flag instances where officers drew weapons or used physical force, ensuring protocol adherence.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#f59e0b" /> DPDP & Privacy Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ensures strict compliance with Data Protection laws by automatically purging old records, masking PII, and logging every database query made by officers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#ef4444" /> Public Transparency</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically processes Right to Information (FOIA) requests, using AI to accurately redact sensitive information before releasing public documents.</p>
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
            {governanceModules.map((mod, i) => (
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
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Databases & Storage</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> System APIs</h3>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Automated Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Security Protocols</h3>
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
            <Scale size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI GOVERNANCE <span>& COMPLIANCE</span></h1>
            <p className="cyber-subtitle">Ethics, Algorithm Fairness, and Internal Auditing</p>
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

export default GovernanceDetailed;
