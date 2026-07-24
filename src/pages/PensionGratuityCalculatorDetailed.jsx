import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Banknote, Calculator
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Old Pension Scheme (OPS) Calculator", "New Pension Scheme (NPS) Sync AI", "Gratuity Corpus Estimator AI",
  "Leave Encashment Payout AI", "Commutation of Pension Calculator", "Family Pension Eligibility AI",
  "Unmarried Daughter Pension Sync", "Martyr (Ex-Gratia) Payout AI", "Disability Pension Assessor",
  "Service Book Verification AI", "No Dues Certificate (NDC) Automator", "Quarter Vacation Sync AI",
  "Pending Disciplinary Withhold AI", "PF (Provident Fund) Settlement AI", "DA (Dearness Allowance) Arrear AI",
  "Pay Commission Revision AI", "Tax Deduction at Source (TDS) AI", "Form 16/ITR Auto-Generator",
  "Jeevan Pramaan (Life Certificate) Sync", "Biometric Pensioner Verification", "Overseas Pensioner Sync AI",
  "Spouse Name Correction AI", "Divorce/Legal Heir Disputer AI", "Treasury Office Gateway AI",
  "PPO (Pension Payment Order) Generator", "E-PPO DigiLocker Sync AI", "Bank Account Freeze Alerter",
  "Post-Retirement Medical (CGHS) AI", "State Health Insurance Sync AI", "Pension Anomaly Grievance Bot",
  "VRS (Voluntary Retirement) Calculator", "Compulsory Retirement Payout AI", "Provisional Pension Trigger AI",
  "Death in Harness Pension AI", "Compassionate Appointment Sync", "Dependent Financial Counseling AI",
  "Loan Deduction Settlement AI", "Police Welfare Society Dues AI", "Cooperatives Bank Dues AI",
  "Missing Person (7 Years) Pension AI", "Conviction/Jail Pension Stop AI", "Re-Employment Pension Offset AI",
  "Gallantry Award Monetary Sync AI", "President Police Medal Arrears", "Onerous Duty Pay Settlement",
  "State Finance Dept Budget AI", "Pension Fund Deficit Predictor", "Actuarial Valuation Modeler",
  "Fraudulent Life Certificate Flag", "Ghost Pensioner Detector AI", "Centenarian (100+ Age) Bonus AI",
  "Age-based Additional Pension AI", "Bank Merger IFSC Correction AI", "Direct Benefit Transfer (DBT) AI",
  "SMS/WhatsApp Payout Alert Bot", "Pension Adalat (Court) Sync", "Legal Notice Compliance AI",
  "Accountant General (AG) API Sync", "Pay Fixation Anomaly Rectifier", "Superannuation Countdown Alerter"
];

const modules = [
  {
    title: "Retirement & Payouts",
    icon: <Calculator size={20} />,
    items: ["OPS/NPS Calculation", "Gratuity Estimation", "Leave Encashment", "PPO (Pension Order) Gen"]
  },
  {
    title: "Verification & Clearance",
    icon: <CheckCircle size={20} />,
    items: ["No Dues Certificates (NDC)", "Quarter Vacation Sync", "Disciplinary Withholds", "Loan Settlements"]
  },
  {
    title: "Life Cert & Compliance",
    icon: <Fingerprint size={20} />,
    items: ["Jeevan Pramaan Sync", "Ghost Pensioner Flags", "Biometric Verification", "TDS & Form 16"]
  },
  {
    title: "Family & Special Pensions",
    icon: <Heart size={20} />,
    items: ["Ex-Gratia (Martyrs)", "Disability Pension", "Death in Harness", "Unmarried Daughter Sync"]
  },
  {
    title: "Treasury & Revisions",
    icon: <Landmark size={20} />,
    items: ["AG Office API Sync", "Pay Commission Revisions", "DA Arrears", "Re-employment Offsets"]
  }
];

const aiFeatures = [
  "Zero-Touch PPO (Pension Payment Order) Generation", "Facial/Biometric Jeevan Pramaan (Life Cert) Sync", "Predictive Detection of Ghost Pensioners",
  "Automated 'No Dues' Clearance across 15 Departments", "Instant Ex-Gratia Payout routing for Martyrs", "Algorithmic Pay Commission Arrear Calculation"
];

const databases = [
  "Pension_Master_Ledger", "Treasury_Payout_Vault", "Life_Certificate_Archive", "No_Dues_Clearance_DB", 
  "Family_Heir_Registry", "Disability_Medical_Board", "NPS_Corpus_Lake", "Tax_TDS_Ledger"
];

const dashboards = [
  "State-wide Pension Disbursement", "Pending 'No Dues' Heatmap", "Ghost Pensioner/Fraud Alerts", 
  "Martyr Family Ex-Gratia Tracker", "Jeevan Pramaan Compliance", "NPS vs OPS Financial Load"
];

const apis = [
  "Accountant General (AG) Gateway", "Jeevan Pramaan (NIC) Sync", "DigiLocker PPO Push API", 
  "RBI/Bank DBT Gateway", "Income Tax Dept (TDS) API", "State Treasury Sync"
];

const reports = [
  "Monthly Disbursement Audit", "Retiring Officer Clearance Pendency", "Ghost Pensioner Financial Savings", 
  "Pay Commission Revision Backlog", "Martyr Family Financial Support ROI", "Life Certificate Defaulters"
];

const security = [
  "Biometric PPO Authorization", "Blockchain Financial Ledgers", "Role-Based Treasury Access", 
  "Encrypted Legal Heir Docs", "Strict DBT Verification Limits", "Fraudulent Account Freeze Sync"
];

const futureScope = [
  "Smart Contracts for Instant Gratuity Payouts", "AI Financial Planning Avatars for Retirees", "Blockchain-Verified Digital Wills",
  "Predictive Actuarial Modeling for State Budgets", "Voice-Authenticated Life Certificates", "Decentralized Pension Wallets"
];

function Fingerprint({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 11.5a6 6 0 0 1 12.01-6"></path><path d="M8.5 22c0-4.5 1-9.5 3.5-12a3.5 3.5 0 0 1 6 .01"></path><path d="M12 22v-3.5a3.5 3.5 0 0 1 3.5-3.5c1.5 0 3-1.5 3-3"></path><path d="M16 22v-2a2 2 0 0 1 2-2c1.5 0 2.5-1.5 2.5-3"></path></svg>;
}

function Heart({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>;
}

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Financial Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Payout Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Disbursement Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PensionGratuityCalculatorDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Banknote className="inline-icon" size={28} /> Pension & Gratuity Calculator AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Pension & Gratuity Calculator AI</strong> eliminates post-retirement financial harassment. It automates "No Dues Certificates," calculates complex OPS/NPS payouts instantly, generates digital PPOs via DigiLocker, and uses biometric Life Certificates (Jeevan Pramaan) to prevent ghost-pensioner fraud, ensuring dignity for retired personnel.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Calculator className="inline-icon" color="#3b82f6" /> Financial Payouts</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Calculates Gratuity, Leave Encashment, and Commutation of Pension flawlessly. Automatically adjusts payouts based on new Pay Commission revisions or DA arrears.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><CheckCircle className="inline-icon" color="#10b981" /> No Dues & Clearance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Triggers an automated clearance workflow 6 months before retirement, syncing with Quarter Allocation, Malkhana, and Disciplinary boards to issue a zero-delay NDC.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Heart className="inline-icon" color="#f59e0b" /> Ex-Gratia & Martyrs</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides a priority fast-track for Martyr families, instantly processing Death-in-Harness pensions, ex-gratia payouts, and compassionate appointment paperwork.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Fraud & Life Certs</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Integrates with NIC's Jeevan Pramaan for biometric life verification. Deploys AI to detect ghost pensioners and halts payments for convicted retirees.</p>
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
            {modules.map((mod, i) => (
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
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Data Ledgers</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> Integration APIs</h3>
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
                <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" /> Financial Dashboards</h3>
                <ul>
                  {dashboards.map((dash, i) => (
                    <li key={i}><CheckCircle size={16} color="#f59e0b" /> {dash}</li>
                  ))}
                </ul>
              </div>
              <div className="report-list">
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Disbursement Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Treasury Security</h3>
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
            <Banknote size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">PENSION & GRATUITY <span>CALCULATOR AI</span></h1>
            <p className="cyber-subtitle">Zero-Delay PPOs, Life Certificate Sync & Ghost Pensioner Fraud AI</p>
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

export default PensionGratuityCalculatorDetailed;
