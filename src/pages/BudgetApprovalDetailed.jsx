import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, FileCheck, CheckSquare
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Multi-Tier Approval Bot", "Maker-Checker Audit AI", "Digital Signature Validator",
  "Budget Sanction Predictor", "Over-Budget Flagging AI", "Invoice Approval Automation",
  "Vendor KYC Compliance AI", "CAG Audit Pre-Checker", "Expenditure Authorization Bot",
  "Zero-Trust Payment Approver", "Financial Red Flag AI", "Ghost Employee Payroll Block",
  "Duplicate Bill Spotter AI", "Fake Receipt OCR Scanner", "Procurement Tender Validator",
  "Emergency Fund Sanction Bot", "SS Fund Approval Masking AI", "Reimbursement Policy Checker",
  "Travel Expense Verifier Bot", "Officer Loan Approval AI", "Medical Claim Auto-Approver",
  "Pension Document Validator", "Retirement Gratuity Sanction", "Overtime Approval Analytics",
  "Cross-Department Budget Sync", "Hierarchical Approval Router", "Automated Reminder Bot",
  "Approval Bottleneck Analyzer", "Delegation of Power AI", "Contingency Fund Verifier",
  "Training Budget Sanction AI", "Ammunition Reorder Approver", "Fleet Repair Bill Validator",
  "Fuel Card Limit Increaser", "Station Maintenance Approver", "Informant Bounty Sanction Bot",
  "Secret Service Audit Trail", "Financial Data Watermarker", "Smart Contract Auto-Sanction",
  "Blockchain Audit Logger", "Compliance Policy Cross-Checker", "Biometric Authorization AI",
  "Voice-Command Approval Bot", "Mobile OTP Sanction Verifier", "Legal Dispute Fund Approver",
  "Civil Suit Payment Validator", "Reward Fund Dispatch AI", "VIP Visit Expense Approver",
  "Election Security Budget Bot", "Cyber Security Audit Approver", "Cloud Billing Validator AI",
  "IT Hardware Sanction Bot", "Uniform Allowance Auto-Credit", "Hardship Allowance Verifier",
  "Risk Premium Sanction AI", "Headquarters Expense Approver", "Utility Bill Auto-Payer AI",
  "State Treasury Sync Bot", "RBI Payment Gateway Validator", "Instant Settlement Approval AI"
];

const financeModules = [
  {
    title: "Sanction Workflows",
    icon: <CheckSquare size={20} />,
    items: ["Multi-Tier Authorization", "Maker-Checker Protocols", "Biometric Approvals", "Delegation of Powers"]
  },
  {
    title: "Bill & Invoice Checking",
    icon: <FileCheck size={20} />,
    items: ["Fake Bill OCR", "Duplicate Detection", "Vendor KYC Sync", "Tax Compliance Validation"]
  },
  {
    title: "Employee Claims",
    icon: <Activity size={20} />,
    items: ["Travel DA/TA Approvals", "Medical Reimbursement", "Overtime Sanctions", "Uniform Allowance"]
  },
  {
    title: "Special Funds",
    icon: <ShieldAlert size={20} />,
    items: ["Secret Service (SS) Funds", "Emergency Contingency", "VIP Visit Expenses", "Reward & Bounty"]
  },
  {
    title: "Audit & Compliance",
    icon: <Database size={20} />,
    items: ["CAG Pre-Audit Checks", "Blockchain Audit Trails", "Policy Cross-Checking", "Budget Limit Enforcement"]
  }
];

const aiFeatures = [
  "AI Automated Maker-Checker Workflow", "AI OCR Fake Bill Detection", "AI Budget Limit Predictive Warning",
  "AI Smart Contract Auto-Sanction", "AI Secret Fund Traceability Masking", "AI Approval Bottleneck Analysis"
];

const databases = [
  "Approval_Ledgers", "Pending_Sanctions", "Digital_Signatures_DB", "Vendor_Blacklist", 
  "Expense_Claims_Vault", "Audit_Trails", "Contingency_Funds", "Treasury_Sync_Logs"
];

const dashboards = [
  "DGP Approval Queue", "District SP Sanction Board", "Live Budget Clearance Tracker", 
  "Audit & Compliance Flag Board", "Bottleneck & Delay Analytics", "SS Fund Encrypted View"
];

const apis = [
  "State Treasury Webhooks", "Digital Signature Auth APIs", "Banking Settlement APIs", 
  "Vendor GST/KYC Sync", "HRMS Leave & TA APIs", "CAG Audit Reporting APIs"
];

const reports = [
  "Daily Sanction Clearance Log", "Delayed Approval Metrics", "Rejected Claims Summary", 
  "Budget Overrun Warning Report", "Vendor Payment TAT", "Secret Fund Audit Safe-Report"
];

const security = [
  "Maker-Checker Mandatory Policies", "Gov-Grade Biometric Auth", "Digital Signature (DSC) Enforced", 
  "Role-Based Access Control (RBAC)", "End-to-End Encrypted SS Funds", "Immutable Approval Blockchain"
];

const futureScope = [
  "Autonomous Low-Value Approvals", "Real-time Treasury Settlement Sync", "AI-driven Zero-Trust Network",
  "Retina-scan High Value Sanctions", "Decentralized Finance (DeFi) Logic", "Quantum Safe Encryption"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Approval Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Approval Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Clearance Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const BudgetApprovalDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <CheckSquare className="inline-icon" size={28} /> AI Budget Approval
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Police Budget Approval</strong> modernizes the bureaucratic red tape of financial sanctions. By utilizing automated Maker-Checker workflows, biometric digital signatures, and AI-driven invoice OCR, it securely accelerates the clearance of payroll, vendor bills, and operational expenses while ensuring strict CAG compliance.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#3b82f6" /> Smart Invoice Validation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI automatically reads vendor invoices, cross-checks GST numbers, and detects duplicate or inflated claims before sending them for human authorization.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Maker-Checker Enforcement</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Strictly enforces separation of duties. AI ensures the officer generating a bill cannot be the same officer who approves the final payment.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><CheckSquare className="inline-icon" color="#f59e0b" /> Multi-Tier Sanction Routing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically routes approval requests up the chain of command based on the financial amount, delegating minor approvals to SPs while routing massive budgets to the DGP.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#ef4444" /> SS Fund Masking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Handles Secret Service and informant funds with end-to-end encryption, ensuring fast approvals without leaking sensitive tactical intelligence.</p>
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
            {financeModules.map((mod, i) => (
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
            <CheckSquare size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI BUDGET <span>APPROVAL</span></h1>
            <p className="cyber-subtitle">Automated Sanctions, Maker-Checker Workflows & Digital Signatures</p>
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

export default BudgetApprovalDetailed;
