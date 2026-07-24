import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, DollarSign, Calculator, TrendingUp
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "7th Pay Commission Matrix AI", "DA (Dearness Allowance) Calculator", "HRA (House Rent Allowance) Modeler",
  "City Compensatory Allowance AI", "Uniform Allowance Creditor AI", "Washing Allowance Tracker",
  "Ration Money Allowance AI", "Diet Allowance (Emergency) AI", "Hazard Pay Calculator",
  "Naxal/Anti-Terror Area Allowance AI", "High Altitude Allowance AI", "Overtime Pay Calculator",
  "Travel TA/DA Claim Scrubber", "LTC (Leave Travel) Verifier", "Medical Reimbursement Scrubber",
  "Cash Reward/Bounty Creditor", "Increment Anomaly Detector", "Step-Up Increment Modeler",
  "Stagnation Increment AI", "Arrears Calculator AI", "GPF (General Provident Fund) Modeler",
  "NPS (National Pension System) Deductor", "Group Insurance Scheme AI", "Income Tax TDS Calculator",
  "Professional Tax Deductor", "Festival Advance Approver AI", "Vehicle Loan Deductor AI",
  "Computer/Housing Loan AI", "Suspension Subsistence Pay AI", "Reinstatement Arrears AI",
  "Deputation Allowance Calculator", "Training Allowance AI", "Special Task Force Pay AI",
  "Cyber Cell Specialist Pay AI", "Forensic Expert Remuneration AI", "Legal Officer Fee Modeler",
  "Contractual Staff Payout AI", "Home Guard Daily Wage AI", "Informant Fund Allocator",
  "Secret Service Fund (SS Fund) Pay AI", "Post-Retirement Benefit Calculator", "Gratuity Modeler AI",
  "Leave Encashment Payout AI", "Family Pension Calculator", "Disability Pension AI",
  "Gallantry Award Monetary Benefit AI", "Police Welfare Fund Deductor", "Martyr Fund Disbursement AI",
  "Ex-Gratia Payout AI", "Payroll Fraud Detection AI", "Ghost Employee Detector AI",
  "Bank Account Name Mismatch AI", "Salary Stop/Hold AI", "Court Attachment Deductor AI",
  "Alimony/Maintenance Deductor", "Recovery of Dues Calculator", "No Dues Certificate (NDC) AI",
  "PFMS (Public Financial Management) Sync AI", "State Treasury Sync API Bot", "Audit Query Resolution AI"
];

const modules = [
  {
    title: "Core Salary & Allowances",
    icon: <Calculator size={20} />,
    items: ["7th Pay Matrix", "HRA & DA", "Hazard & Naxal Pay", "Ration & Uniform Allowances"]
  },
  {
    title: "Claims & Reimbursements",
    icon: <FileText size={20} />,
    items: ["TA/DA Scrubber", "LTC Verification", "Medical Claims", "Festival Advances"]
  },
  {
    title: "Deductions & Taxation",
    icon: <TrendingUp size={20} />,
    items: ["TDS & Professional Tax", "GPF & NPS", "Loan Recoveries", "Court Attachments"]
  },
  {
    title: "Pensions & Benefits",
    icon: <Landmark size={20} />,
    items: ["Gratuity Modeler", "Family Pension", "Leave Encashment", "Ex-Gratia Payouts"]
  },
  {
    title: "Fraud & Compliance",
    icon: <ShieldAlert size={20} />,
    items: ["Ghost Employee Checks", "Bank Mismatch Flags", "Payroll Audit Scrubber", "PFMS Sync"]
  }
];

const aiFeatures = [
  "Automated Step-Up & Stagnation Increment Logic", "Deep Learning Medical Claim Fraud Detection", "Real-Time TDS Tax Slab Optimization",
  "Zero-Click PFMS Treasury Synchronization", "Predictive Arrears & Gratuity Modeling", "Ghost Employee Biometric Verification"
];

const databases = [
  "Payroll_Master_Ledger", "Allowances_Rule_Engine", "Tax_Deduction_Vault", "Pension_Gratuity_DB", 
  "Loan_Recovery_Ledger", "Claims_Audit_Logs", "SS_Fund_Encrypted", "PFMS_Transaction_DB"
];

const dashboards = [
  "State-wide Payroll Disbursement", "Allowances & Arrears Board", "Tax & GPF Analytics", 
  "Pensioner Live Tracker", "Fraud & Exception Alerts", "Treasury Sync Heatmap"
];

const apis = [
  "State Treasury (PFMS) Sync", "Income Tax Dept E-Filing API", "NPS Trust Gateway", 
  "Banking Partner Bulk Payouts", "UIDAI Aadhaar Linked Accounts", "CCTNS Informant Pay Sync"
];

const reports = [
  "Monthly Salary Bill (District-wise)", "Increment Anomaly Audit", "TDS & Statutory Compliance", 
  "Pension Disbursement Logs", "Unsettled Medical Claims", "Ghost Employee Flag Report"
];

const security = [
  "End-to-End Encrypted Salary Slips", "Maker-Checker Approvals", "Biometric Payroll Run", 
  "Anti-Tamper Arrears Logic", "Zero-Trust Financial Gateways", "Blockchain Audit Trails"
];

const futureScope = [
  "AI Smart Tax Saving Recommendations for Officers", "Real-time Crypto Salary Disbursal (Optional)", "Predictive State Budget Deficit Modeling",
  "Automated RBI Regulatory Compliance", "Decentralized Pension Verification via Liveness Check", "Voice-Activated Salary Slip Queries"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Payroll Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Finance Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Payroll Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PayrollAllowancesExpertDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <DollarSign className="inline-icon" size={28} /> Payroll & Allowances Expert AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Payroll & Allowances Expert AI</strong> is a highly secure financial engine designed to eliminate manual delays and calculation errors in the salaries of millions of officers. It handles complex rules like Naxal hazard pay, suspension subsistence allowances, automated TDS, and flawless syncing with state treasuries.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Calculator className="inline-icon" color="#3b82f6" /> Complex Allowances</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically credits highly specific allowances based on posting data—such as Naxal area pay, high altitude allowances, and specialized ATS/STF incentives.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#10b981" /> Claim Scrubbing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scans TA/DA and medical reimbursement bills for inflated claims, duplicate entries, or policy violations before routing them for immediate approval.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingUp className="inline-icon" color="#f59e0b" /> Taxation & Deductions</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Dynamically calculates TDS based on chosen tax regimes, deducts NPS/GPF, and strictly enforces court-ordered attachments or alimony recoveries.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Fraud & Ghost Employees</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Runs continuous cross-checks against biometric attendance and casualty reports to instantly halt salaries for ghost employees or unauthorized absentees.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Compliance Reports</h3>
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
            <DollarSign size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">PAYROLL & ALLOWANCES <span>EXPERT AI</span></h1>
            <p className="cyber-subtitle">Automated Treasuries, Increments & Fraud-Free Remuneration</p>
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

export default PayrollAllowancesExpertDetailed;
