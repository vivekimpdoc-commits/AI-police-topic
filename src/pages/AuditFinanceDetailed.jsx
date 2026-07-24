import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Search, FileSignature
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "CAG Audit Predictor AI", "Internal Audit Automation Bot", "Fraud Triangle Analyzer",
  "Expense Anomaly Detector AI", "Ghost Vendor Audit Bot", "Duplicate Invoice Scanner",
  "Payroll Fraud Auditor", "Petty Cash Reconciliation AI", "Tender Cartel Audit AI",
  "Procurement Price Benchmarker", "SS Fund Encrypted Auditor", "Grant Utilization Auditor",
  "Fund Diversion Detector AI", "Taxation (TDS/GST) Audit Bot", "Asset Depreciation Auditor",
  "Inventory Shrinkage Audit AI", "Station Level Audit Bot", "Headquarters Audit Sweeper",
  "Treasury Discrepancy Finder", "Bank Reconciliation AI", "Digital Signature Validator",
  "Biometric Audit Trail AI", "Blockchain Ledger Auditor", "Zero-Trust Access Auditor",
  "Audit Query Auto-Responder", "Compliance Deviation Alerter", "SOP Breach Audit AI",
  "Medical Claim Fraud Auditor", "TA/DA Travel Audit Bot", "Fuel Log Anomaly Detector",
  "Logistics & Shipping Auditor", "Weaponry Stock Audit AI", "Ammunition Discrepancy Bot",
  "Riot Gear Inventory Auditor", "Confiscated Asset Audit AI", "Seized Cash Vault Auditor",
  "Narcotics Seizure Audit Bot", "Forensic Lab Audit AI", "Cyber Cell CapEx Auditor",
  "IT Hardware Lifespan Audit", "Software License Usage Audit", "Cloud Server Billing Auditor",
  "Smart City CCTV Audit AI", "Drone Flight Log Auditor", "Marine Fuel Audit Bot",
  "Aviation Maintenance Auditor", "K9 Unit Expense Audit AI", "Welfare Fund Audit Bot",
  "Hospital Pharmacy Auditor", "Canteen Sales Audit AI", "Guest House Revenue Audit",
  "Event Security Billing Audit", "Traffic Fine Collection Audit", "Lok Adalat Settlement Audit",
  "Vendor SLA Breach Auditor", "Penalty Deduction Audit AI", "Insurance Claim Audit Bot",
  "Construction CapEx Auditor", "Housing Maintenance Audit", "Green Energy ROI Auditor"
];

const financeModules = [
  {
    title: "Core Financial Audits",
    icon: <Search size={20} />,
    items: ["Internal Audits", "CAG Pre-Audits", "Bank Reconciliation", "Treasury Sync Audits"]
  },
  {
    title: "Fraud & Anomaly",
    icon: <ShieldAlert size={20} />,
    items: ["Expense Anomalies", "Ghost Vendor Detection", "Duplicate Invoices", "Tender Cartels"]
  },
  {
    title: "Operational Audits",
    icon: <Activity size={20} />,
    items: ["Fuel Log Audits", "TA/DA Travel Audits", "Petty Cash Audits", "Medical Claim Fraud"]
  },
  {
    title: "Tactical & Inventory",
    icon: <Database size={20} />,
    items: ["Armory Stock Audits", "Seized Asset Audits", "Narcotics Vault Audits", "SS Fund Audits"]
  },
  {
    title: "Compliance & Queries",
    icon: <FileSignature size={20} />,
    items: ["SOP Breach Alerts", "Audit Query Auto-Responder", "Digital Signature Validity", "Taxation Compliance"]
  }
];

const aiFeatures = [
  "AI Continuous Internal Audit Automation", "AI CAG Query Predictive Auto-Response", "AI Ghost Vendor & Duplicate Invoice Scanner",
  "AI Deep-scan for Fund Diversion", "AI End-to-End Blockchain Ledger Verification", "AI Biometric Audit Trail Analysis"
];

const databases = [
  "Master_Audit_Ledger", "CAG_Query_Archive", "Fraud_Anomaly_Logs", "Seized_Asset_Vault", 
  "Bank_Reconciliation_DB", "Biometric_Audit_Trails", "Vendor_Discrepancy_Logs", "Tax_Compliance_DB"
];

const dashboards = [
  "Live Audit Deviation Board", "Fraud & Anomaly Heatmap", "CAG Compliance Tracker", 
  "Seized Asset Audit Status", "Pending Audit Queries", "Treasury Discrepancy Monitor"
];

const apis = [
  "CAG Audit Portal Webhooks", "State Treasury Gateways", "Banking Reconciliation APIs", 
  "Income Tax (TDS) Sync", "Blockchain Audit Oracles", "Vigilance Department Sync"
];

const reports = [
  "Monthly Internal Audit Summary", "Fraud Triangle Risk Report", "CAG Pre-Audit Compliance", 
  "Seized Asset Verification", "Vendor & Procurement Audit", "Utility & Fuel Discrepancy Log"
];

const security = [
  "Immutable Blockchain Audit Logs", "Zero-Knowledge Proofs for SS Funds", "Biometric Auditor Login", 
  "End-to-End Encrypted Ledgers", "Role-Based Audit Masking", "Anti-Tamper Database Locks"
];

const futureScope = [
  "Autonomous Real-Time CAG Auditing", "Quantum-Safe Audit Ledgers", "AI Predictive Fraud Modeling",
  "Decentralized Validator Nodes", "Smart Contract Audit Execution", "Global Anti-Money Laundering Sync"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Audit Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Audit Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const AuditFinanceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Search className="inline-icon" size={28} /> AI Audit Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Audit Management</strong> completely transforms financial oversight. Instead of retroactive annual checks, the AI performs continuous, real-time auditing across all transactions, instantly flagging ghost vendors, duplicate invoices, and fund diversions while automatically preparing compliance reports for the CAG (Comptroller and Auditor General).
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Fraud & Anomaly Engine</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Deploys deep learning to cross-reference millions of invoices, detecting duplicate payments, inflated vendor bills, and 'ghost' employees on the payroll.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileSignature className="inline-icon" color="#3b82f6" /> CAG Pre-Audit Automation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes transaction ledgers exactly as a government auditor would, auto-generating compliance reports and flagging SOP breaches before the official CAG audit begins.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Tactical Vault Auditing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Performs strict, highly secure digital audits on confiscated assets, seized cash, narcotics vaults, and armory stockpiles to ensure zero shrinkage.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#10b981" /> Blockchain Ledger Verification</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Guarantees the integrity of financial data by storing audit trails on an immutable blockchain, ensuring that no transaction history can be deleted or altered by corrupt entities.</p>
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
            <Search size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI AUDIT <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">Continuous Oversight, Fraud Detection & CAG Pre-Audits</p>
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

export default AuditFinanceDetailed;
