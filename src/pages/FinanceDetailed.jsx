import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  Briefcase, Calendar, Calculator, Target, BookOpen, Heart,
  Smartphone, HardDrive, Bell, CheckCircle, ShieldAlert,
  CreditCard, DollarSign, TrendingUp, PieChart, Landmark
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Police Budget Planner AI", "Fund Allocation Expert AI", "Risk Allowance Predictor AI", 
  "Expense Fraud Auditor AI", "Pension & Gratuity Calculator AI", "Salary Disbursement AI", 
  "Station Upkeep Budget AI", "Ammunition Cost Analyzer AI", "Fuel & Vehicle Expense AI",
  "Financial Compliance Bot AI", "Tax Optimization Expert AI", "Vendor Payment Auditor AI", 
  "Backend Developer AI", "Database Engineer AI", "AI/ML Engineer AI", 
  "Cyber Security Engineer AI", "QA Engineer AI", "DevOps Engineer AI"
];

const financeModules = [
  {
    title: "State Police Budgeting",
    icon: <Landmark size={20} />,
    items: ["Annual Budget Planning", "DGP Budget Forecasting", "District Allocation", "Zone-wise Fund Distribution", "Contingency Funds"]
  },
  {
    title: "Payroll & Allowances",
    icon: <Calculator size={20} />,
    items: ["Rank-based Salary processing", "Risk & Hardship Allowances", "Uniform & Kit Allowances", "Travel DA/TA", "Overtime Compensation"]
  },
  {
    title: "Station Expenses",
    icon: <DollarSign size={20} />,
    items: ["Station Maintenance Funds", "Investigation Expenses", "Secret Informant Funds (SS Fund)", "Stationery & Consumables"]
  },
  {
    title: "Fleet & Fuel Management",
    icon: <Rocket size={20} />,
    items: ["PCR Van Fuel Logs", "Vehicle Maintenance Budget", "Toll & Transport Expenses", "Fuel Card Integration"]
  },
  {
    title: "Pension & Retirement",
    icon: <Briefcase size={20} />,
    items: ["Gratuity Calculation", "Pension Disbursement", "Post-Retirement Medical Funds", "Family Pension Management"]
  },
  {
    title: "Vendor Payments",
    icon: <CreditCard size={20} />,
    items: ["Uniform Supplier Payments", "Ammunition Vendor Invoices", "Tech Equipment Procurement", "Contractor Billing"]
  },
  {
    title: "Financial Audits",
    icon: <Target size={20} />,
    items: ["Internal Financial Audits", "CAG Report Compliance", "Expense Anomaly Detection", "Fund Utilization Certificates"]
  }
];

const aiFeatures = [
  "AI Budget Shortfall Prediction", "AI Expense Fraud Detection", "AI Fuel Theft Recognition",
  "AI Fake Bill OCR Scanner", "AI Risk Allowance Miscalculation Alert", "AI Predictive Fleet Maintenance Cost",
  "AI Secret Fund Utilization Analysis", "AI Auto-Categorization of Station Expenses", "AI Vendor Overpricing Alert",
  "AI Pension Disbursement Delay Predictor", "AI Compliance Chatbot", "AI Multi-currency Forensics"
];

const databases = [
  "Budgets", "Allocations", "Expenses", "Invoices", "Vendors", "Salaries", 
  "Allowances", "Pensions", "FuelLogs", "MaintenanceCosts", "AuditTrails", "TaxRecords", 
  "InformantFunds", "Tenders", "Receipts", "Transactions"
];

const dashboards = [
  "DGP Financial Overview Dashboard", "District SP Budget Dashboard", "Station SHO Expense Dashboard", 
  "Payroll & Pension Dashboard", "Audit & Compliance Dashboard", "Real-time Fund Utilization Tracker"
];

const apis = [
  "Treasury Sync APIs", "Banking Payment Gateway APIs", "Salary Disbursement APIs", "Fuel Card APIs",
  "Vendor Invoice APIs", "Audit Log APIs", "Expense Submission APIs", "Tax Calculation APIs",
  "Budget Forecasting AI APIs"
];

const reports = [
  "Annual Budget Report", "District-wise Fund Utilization", "Monthly Salary Register", 
  "Fuel Consumption Audit", "Vendor Payment Status", "Pension Disbursal Report", 
  "Secret Fund Audit Report", "CAG Compliance Report"
];

const security = [
  "Zero-Trust Financial Architecture", "Gov-Grade JWT Authentication", "Maker-Checker Approval Workflow", 
  "Rank-Based Financial Access Control", "End-to-End Encryption (AES-256)", 
  "Immutable Financial Audit Trails", "Secure Banking VPN Integration", "RBI/Gov Data Compliance"
];

const futureScope = [
  "Blockchain-based Secret Fund Ledger", "CBDC (Digital Rupee) Integration", "AI Automated Tax Filing",
  "Voice-Based Expense Claims for Officers", "Real-time Predictive Inflation Adjustment", "Offline Financial Sync for Remote Stations"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Finance AI Agents', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Finance Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Financial Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const FinanceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Landmark className="inline-icon" size={28} /> AI Finance & Budget Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Police Finance & Budget</strong> is an enterprise-grade financial nervous system designed to handle the complex budgeting, payroll, and procurement funding of state police departments. It leverages AI to ensure zero fund leakage, predictive budgeting, and real-time audit compliance.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><DollarSign className="inline-icon" color="#3b82f6" /> Predictive Budgeting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI forecasts annual funding requirements by analyzing historical crime data, upcoming elections, and expected recruitments to prevent budget shortfalls.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Expense Anomaly Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Machine learning algorithms scan millions of invoices and fuel logs to instantly flag fake bills, overpriced vendor contracts, or fuel theft.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#f59e0b" /> Secret Fund Auditing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Secure, encrypted ledgers for managing confidential investigation funds (SS Funds) with automated, pattern-based internal auditing.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Zero-Trust Security</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Gov-Grade Encryption and Maker-Checker workflows ensure that no financial transaction can be executed without verified, multi-level authorization.</p>
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
            <h1 className="cyber-title">AI FINANCE <span>BUDGET PLATFORM</span></h1>
            <p className="cyber-subtitle">Next-Generation Financial Management powered by Agentic AI</p>
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

export default FinanceDetailed;
