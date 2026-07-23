import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Users, CreditCard
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Constable Salary Auto-Disburser", "Inspector Level Payroll AI", "IPS Officer Salary Bot",
  "DA Increment Calculator AI", "HRA Revision Predictor", "Overtime Payout Validator",
  "Festival Bonus Calculator", "Uniform Allowance Creditor", "Hardship Allowance AI",
  "Risk Premium Payout Bot", "Night Duty Allowance AI", "Election Duty Payout AI",
  "Riot Duty Compensation Bot", "Medical Leave Deduction AI", "Half-Pay Leave Calculator",
  "Unpaid Leave Tracker AI", "Income Tax Auto-Deductor", "TDS Filing Sync Bot",
  "PF (Provident Fund) Router", "NPS (Pension) Contribution AI", "Loan EMI Deductor Bot",
  "Housing Loan Recovery AI", "Salary Advance Settlement Bot", "Arrears Auto-Calculator",
  "Suspension Pay (Subsistence) AI", "Reinstatement Arrears Bot", "Gratuity Auto-Sanction AI",
  "Leave Encashment Payout Bot", "Post-Retirement Pension AI", "Family Pension Disburser",
  "Martyr Family Compensation AI", "Insurance Premium Deductor", "Police Welfare Society Dues AI",
  "Mess/Canteen Bill Deductor", "Sports Board Contribution AI", "Ghost Employee Detector AI",
  "Biometric Attendance Sync Bot", "Shift-wise Pay Modeler AI", "Transfer TA/DA Disburser",
  "Promotional Increment AI", "Annual Increment Batch Payer", "Pay Commission Revision AI",
  "Court Attachment Pay Deductor", "Alimony Pay Router AI", "Bank Account Matcher AI",
  "Salary Slip Auto-Generator", "Form 16 Tax Document AI", "Financial Year End Audit Bot",
  "Treasury Salary Sync Webhook", "State Budget Pay Validator", "Fund Deficit Alert AI",
  "Grievance Pay Resolution Bot", "Contractual Staff Payroll AI", "Home Guard Wage Disburser",
  "Daily Wager Payment Bot", "Part-time Sweeper Wage AI", "Informant SS Fund Payoff AI",
  "Payroll Fraud Anomaly AI", "Multi-currency Payroll (UN Ops)", "CBDC (e-Rupee) Salary Router"
];

const financeModules = [
  {
    title: "Core Salary & Increments",
    icon: <Users size={20} />,
    items: ["Basic Pay Calculation", "DA/HRA Revisions", "Annual Increments", "Pay Commission Sync"]
  },
  {
    title: "Allowances & Overtime",
    icon: <Activity size={20} />,
    items: ["Night Duty Allowance", "Hardship/Risk Premium", "Overtime Payouts", "Election Duty Pay"]
  },
  {
    title: "Deductions & Taxation",
    icon: <Database size={20} />,
    items: ["Income Tax / TDS", "PF / NPS Routing", "Loan EMI Deductions", "Canteen Bill Recovery"]
  },
  {
    title: "Retirement & Pensions",
    icon: <ShieldAlert size={20} />,
    items: ["Gratuity Calculation", "Leave Encashment", "Monthly Pension Sync", "Martyr Compensation"]
  },
  {
    title: "Temporary & Contractual",
    icon: <CreditCard size={20} />,
    items: ["Home Guard Wages", "Daily Wager Payouts", "Contractual Sweepers", "Suspension Subsistence"]
  }
];

const aiFeatures = [
  "AI Ghost Employee Detection via Biometrics", "AI Pay Commission Arrears Auto-Calculator", "AI Tax Optimization & Form 16 Generation",
  "AI Automated Suspension Pay Reduction", "AI Instant TA/DA Disbursal upon Transfer", "AI State Treasury Integration"
];

const databases = [
  "Master_Payroll_Vault", "Taxation_Deduction_Ledger", "Pension_Gratuity_DB", "Loan_Recovery_Logs", 
  "Allowance_Overtime_Tracker", "Biometric_Attendance_Sync", "HomeGuard_Wage_Ledger", "Suspension_Pay_Logs"
];

const dashboards = [
  "State-wide Payroll Disbursal", "Tax & Deduction Summary", "Overtime & Allowance Heatmap", 
  "Pension & Gratuity Release Queue", "Home Guard Wage Tracker", "Ghost Employee Flag Board"
];

const apis = [
  "State Treasury Webhooks", "Banking (Salary) Gateways", "Income Tax Dept (TDS) Sync", 
  "EPFO / NPS Portals", "HRMS Leave & Attendance API", "Canteen POS Billing Sync"
];

const reports = [
  "Monthly Salary Disbursal Log", "Annual Tax & TDS Report", "Overtime Spend Analytics", 
  "Pension Payout Summary", "Loan & Advance Recovery Log", "Arrears & Increment Audit"
];

const security = [
  "Biometric Wage Authorization", "Zero-Trust Account Matching", "Anti-Siphoning Payroll AI", 
  "Encrypted Tax Form Vault", "Role-Based Payroll Editing", "Blockchain Audit Hashing"
];

const futureScope = [
  "Autonomous CBDC (e-Rupee) Salary Transfers", "Smart Contract Daily Wage Payouts", "Predictive Income Tax Hedging",
  "Decentralized Pension Verification (Life Cert)", "Real-time AI Financial Health Advice", "Quantum-Safe Payroll Ledgers"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Payroll Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Payroll Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Disbursal Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PayrollIntegrationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <CreditCard className="inline-icon" size={28} /> AI Payroll Integration
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Payroll Integration</strong> is an enterprise-grade wage disburser for massive state police forces. It seamlessly connects with the HRMS to calculate biometric-based overtime, applies state-specific tax and loan deductions, routes NPS contributions, and detects 'ghost employees' to ensure zero payroll fraud.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#3b82f6" /> HRMS Biometric Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Directly integrates with the HRMS to read biometric attendance, automatically calculating unpaid leave deductions, half-pay, and overtime for election duties.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#10b981" /> Automated Deductions</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically subtracts loan EMIs, income tax (TDS), police welfare society dues, and even mess/canteen bills before depositing the final salary.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Arrears & Pay Commissions</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly calculates complex DA (Dearness Allowance) hikes, promotion arrears, and state pay commission revisions for hundreds of thousands of officers without manual errors.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Ghost Employee Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references payroll with live CCTV, biometric scans, and patrol logs to flag salaries being drawn by retired, suspended, or non-existent (ghost) officers.</p>
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
            <CreditCard size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI PAYROLL <span>INTEGRATION</span></h1>
            <p className="cyber-subtitle">Automated Salaries, HRMS Sync & Zero-Fraud Disbursal</p>
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

export default PayrollIntegrationDetailed;
