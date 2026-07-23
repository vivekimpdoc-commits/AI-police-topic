import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Scale, FileSignature
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "State Finance Code Validator", "FRBM Act Compliance Bot", "CVC Guideline Auditor AI",
  "GST Return Filing Bot", "TDS Remittance Tracker AI", "Income Tax Compliance Bot",
  "FCRA Grant Compliance AI", "Nirbhaya Fund SOP Auditor", "CSR Fund Utilization Bot",
  "PF & NPS Deposit Validator", "GeM Quota Compliance AI", "MSME Prompt Payment Bot",
  "RTI Financial Query Auto-Responder", "Lokayukta Query Sync AI", "Anti-Corruption SOP Validator",
  "Zero-Tolerance Bribe Detector", "Fund Diversion Alerter AI", "Surplus Surrender Compliance",
  "March-Rush Expenditure Validator", "Unspent Balance Auditor", "State Treasury Receipt Sync",
  "Treasury Bill (T-Bill) Tracker", "Escrow Account Guideline Bot", "Contingency Fund SOP AI",
  "Secret Service (SS) Fund Masker", "Informant Identity Protector AI", "Asset Confiscation Compliance",
  "NDPS Asset Forfeiture AI", "UAPA Terror Funding Audit AI", "PMLA Compliance Tracker",
  "ED & CBI Joint Audit Sync", "International Grant Compliance (UN/Interpol)", "Foreign Currency Conversion AI",
  "Cyber Security CapEx Compliance", "Data Privacy (DPDP) Financial Audit", "Hardware Procurement SOP Bot",
  "Software License Audit Sync", "Cloud Storage Data Localisation AI", "Ammunition Disposal Compliance",
  "Vehicle Scrap Policy Validator", "Green Energy Audit AI", "E-Waste Disposal Financial AI",
  "Hazardous Material Storage Compliance", "Building Code CapEx Auditor", "Fire Safety Budget Compliance",
  "Medical Camp Expenditure SOP", "Hospital Bio-Waste Budget AI", "Band/Sports Fund SOP Bot",
  "Welfare Society Audit Sync", "Police Mess/Canteen Compliance", "Martyr Fund Disbursement AI",
  "Pension Payout SOP Validator", "Family Pension Sync Bot", "Court Mandated Payout AI",
  "Legal Cell Advocate Fee Compliance", "Traffic E-Challan Transfer AI", "Auction Proceeds Deposit Bot",
  "Lok Adalat Fee Settlement", "Bail Bond Forfeiture Compliance", "FEMA Compliance Sync AI"
];

const financeModules = [
  {
    title: "Statutory & Taxation",
    icon: <Scale size={20} />,
    items: ["GST & TDS Remittance", "Income Tax Compliance", "FRBM Act Guidelines", "FCRA & CSR Rules"]
  },
  {
    title: "Regulatory & Vigilance",
    icon: <ShieldAlert size={20} />,
    items: ["CVC Guideline Audits", "Anti-Corruption SOPs", "Lokayukta & RTI Sync", "PMLA & NDPS Asset Checks"]
  },
  {
    title: "Fund Utilization SOPs",
    icon: <Activity size={20} />,
    items: ["March-Rush Validation", "Surplus Surrender", "Nirbhaya Fund SOPs", "Contingency Fund Rules"]
  },
  {
    title: "Disposal & Green Audits",
    icon: <Database size={20} />,
    items: ["Vehicle Scrap Policy", "E-Waste Disposal SOP", "Bio-Waste Budgeting", "Green Energy Audits"]
  },
  {
    title: "Welfare & Court Payouts",
    icon: <FileSignature size={20} />,
    items: ["Pension SOP Compliance", "Martyr Fund Rules", "Court Mandated Payouts", "Bail Forfeiture Sync"]
  }
];

const aiFeatures = [
  "AI March-Rush Expenditure Validation", "AI CVC (Central Vigilance) Guideline Enforcement", "AI Real-time GST & TDS Sync",
  "AI Secret Service (SS) Fund Masking & Compliance", "AI Predictive Asset Forfeiture Legal Checks", "AI E-Waste & Scrap Policy Enforcer"
];

const databases = [
  "Regulatory_Compliance_Vault", "Taxation_Remittance_Logs", "CVC_Vigilance_DB", "SS_Fund_SOP_Ledger", 
  "Asset_Forfeiture_Archive", "Grant_Utilization_SOPs", "Court_Payout_DB", "E_Waste_Disposal_Logs"
];

const dashboards = [
  "Live Compliance Health Board", "Tax & Statutory Remittance", "Fund Utilization vs SOP", 
  "Vigilance & RTI Query Tracker", "Asset Confiscation Compliance", "Green & Scrap Policy Audits"
];

const apis = [
  "Income Tax Dept Webhooks", "GSTN Sync APIs", "CVC / Lokayukta Gateways", 
  "Court e-Filing Payout Sync", "State Finance Dept (FRBM) Sync", "Environmental Board Sync"
];

const reports = [
  "Monthly Statutory Compliance", "CVC Guideline Breach Log", "Taxation Remittance Status", 
  "March-Rush Expenditure Audit", "Welfare & Pension Compliance", "Scrap Policy Conformance"
];

const security = [
  "Zero-Trust Compliance Overrides", "Encrypted Informant Ledgers", "Blockchain Compliance Hashing", 
  "Role-Based RTI Disclosures", "Maker-Checker Tax Filing", "Immutable SOP Breach Logs"
];

const futureScope = [
  "Autonomous Tax Filing & Remittance", "AI Global AML (Anti-Money Laundering) Sync", "Decentralized FCRA Verification",
  "Smart Contract Court Payouts", "Predictive Vigilance Alerting", "Real-Time DPDP Data Localisation Checks"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Compliance Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Compliance Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Compliance Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const FinancialComplianceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Scale className="inline-icon" size={28} /> AI Financial Compliance
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Financial Compliance</strong> acts as the digital guardian of the police department's finances. It ensures every rupee spent or received strictly adheres to State Finance Codes, CVC (Vigilance) guidelines, and Taxation laws (GST/TDS), preventing illegal fund diversion and "March-Rush" wastage.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileSignature className="inline-icon" color="#3b82f6" /> Taxation & Remittance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically calculates, deducts, and files GST, TDS, and PF returns without human intervention, ensuring the department never faces statutory penalties.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Vigilance & SOP Enforcer</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references every procurement and payment against Central Vigilance Commission (CVC) guidelines to instantly block corrupt practices or tender cartelization.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> March-Rush Prevention</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Detects and flags the historical trend of departments recklessly spending unutilized funds in March to prevent budget cuts in the next fiscal year.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#ef4444" /> Special Fund Masking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ensures compliance for Secret Service (SS) funds and informant payouts by maintaining completely encrypted, zero-knowledge proof ledgers.</p>
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
            <Scale size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI FINANCIAL <span>COMPLIANCE</span></h1>
            <p className="cyber-subtitle">CVC Guidelines, Taxation Sync & Statutory Audits</p>
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

export default FinancialComplianceDetailed;
