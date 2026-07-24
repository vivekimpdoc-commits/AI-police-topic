import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, TrendingDown, Briefcase
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Hawala Network Mapper AI", "Shell Company Detector", "Crypto Wallet Tracer", 
  "Bank Fraud Anomaly Bot", "Money Laundering Predictor", "Tax Evasion Cross-Checker", 
  "Dark Web Financial Scraper", "Ponzi Scheme Modeler", "Insider Trading Analyzer",
  "Extortion Flow Tracker", "Forged Document AI"
];

const financialModules = [
  {
    title: "Money Laundering & Hawala",
    icon: <Activity size={20} />,
    items: ["Unregulated Cash Flow Tracking", "Hawala Operator Link-Analysis", "Trade-Based Laundering Flags", "Cross-Border Remittance Anomalies"]
  },
  {
    title: "Corporate Fraud & Shell Cos.",
    icon: <Briefcase size={20} />,
    items: ["MCA Database Graphing", "Ghost Director Identification", "Tax Haven Fund Routing", "Balance Sheet Deep-Learning"]
  },
  {
    title: "Cryptocurrency Tracing",
    icon: <TrendingDown size={20} />,
    items: ["Bitcoin/Tether Blockchain Heuristics", "Mixer & Tumbler Deanonymization", "Dark Net Market Sync", "Ransomware Payment Tracking"]
  },
  {
    title: "Bank & Digital Fraud",
    icon: <Landmark size={20} />,
    items: ["UPI Phishing Ring Takedown", "Loan Defaulter Flight-Risk", "Credit Card Cloning syndicates", "Mule Account Detection"]
  },
  {
    title: "Economic Offence Wing (EOW)",
    icon: <ShieldAlert size={20} />,
    items: ["Ponzi Scheme Early Warning", "Real-Estate Fraud Mapping", "Fake Currency (FICN) Detection", "Asset Recovery Predictions"]
  }
];

const aiFeatures = [
  "AI Graph Theory for Money Trails", "AI NLP on Corporate Filings (MCA)", "AI Blockchain Heuristics",
  "AI Benford's Law Anomaly Detection", "AI Optical Character Recognition (Bank Statements)", "AI Social Network Analysis (Mule Accounts)",
  "AI Machine Learning Fraud Scoring", "AI Cross-Database Entity Resolution"
];

const databases = [
  "Bank_Transaction_Logs", "MCA_Corporate_Registry", "Crypto_Wallet_Blacklist", "Hawala_Suspect_DB", "Tax_Returns_ITD", 
  "UPI_Fraud_Signatures", "Property_Registrations_Vault", "Ransomware_Addresses", "Known_Shell_Companies", "Loan_Defaulter_DB"
];

const dashboards = [
  "National Money Laundering Heatmap", "Shell Company Graph", "Crypto Ransomware Flows", 
  "UPI Fraud Syndicate Map", "Asset Attachment Progress", "Ponzi Scheme Alert Matrix"
];

const apis = [
  "Financial Intelligence Unit (FIU-IND)", "Ministry of Corporate Affairs (MCA)", "Reserve Bank (RBI) / NPCI", "Income Tax Dept (ITD) APIs",
  "Chainalysis / Elliptic APIs", "SWIFT Network Alerts"
];

const reports = [
  "Monthly EOW Seizure Value", "Crypto Tracing Success Rate", "Shell Company Bust Audit", 
  "UPI Fraud Recovery Analytics", "Bank Mule Account Takedown", "High-Net-Worth Flight Risk Brief"
];

const security = [
  "Strict Financial Data Masking", "Role-Based Access Control (RBAC)", "Immutable Audit Trails for Queries", 
  "End-to-End Encryption of Bank Statements", "Zero-Knowledge Proofs", 
  "Secure API Gateways to RBI", "Watermarked Dossier Downloads", "Biometric Terminal Auth"
];

const futureScope = [
  "Quantum Computing Cryptanalysis", "Autonomous Asset Seizure Bots", "Real-time CBDC (E-Rupee) Tracking",
  "AI Virtual Financial Auditors", "Predictive Stock Market Manipulation Alerts", "Holographic Money Trails"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Fin-Intel Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'EOW Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Financial Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const FinancialCrimeDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Landmark className="inline-icon" size={28} /> AI Financial Crime & EOW Intelligence
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Financial Crime Intelligence</strong> gives the Economic Offences Wing (EOW) superpowers to track dirty money. It uses graph-theory to expose shell companies, traces Bitcoin ransomware payments across the dark web, and detects Hawala money laundering routes instantly.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Briefcase className="inline-icon" color="#3b82f6" /> Shell Company Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references MCA (Corporate Affairs) data to expose "ghost directors" who sit on the boards of 50+ fake companies used purely for routing black money to tax havens.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingDown className="inline-icon" color="#10b981" /> Crypto & Ransomware Tracing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes the blockchain ledger to de-anonymize Bitcoin transactions. Traces extorted funds through "mixers" and alerts authorities the moment a criminal tries to cash out at an exchange.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Hawala & Money Laundering</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses advanced link-analysis to map underground hawala networks. Detects trade-based money laundering by flagging massive price discrepancies in import/export manifests.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> UPI & Bank Fraud Rings</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Identifies organized cyber-fraud syndicates (like Jamtara) by clustering thousands of micro-transactions into "mule accounts" and freezing them automatically via RBI APIs.</p>
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
            {financialModules.map((mod, i) => (
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
            <Landmark size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI FINANCIAL <span>CRIME</span></h1>
            <p className="cyber-subtitle">Hawala Tracing, Shell Company Detection & Crypto Intel</p>
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

export default FinancialCrimeDetailed;
