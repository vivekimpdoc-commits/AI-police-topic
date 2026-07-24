import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, TrendingDown, Receipt
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Operational Expense Bot", "Vehicle Fuel Tracker AI", "Electricity Bill Analyzer",
  "Water & Utilities Funder", "Stationery CapEx Predictor", "Telecom Expense Auditor",
  "Travel DA/TA Auto-Approver", "Petty Cash Reconciliation AI", "Informant SS Fund Tracker",
  "Toll & Highway Expense AI", "Fleet Repair Bill Validator", "Ammunition Cost Analyzer AI",
  "Dog Squad Maintenance AI", "Marine Fuel Expense Bot", "Aviation Fuel Tracker AI",
  "Building Maintenance Expense", "Barrack Upkeep Funder", "Police Mess/Canteen Expense",
  "Uniform & Kit Allowance AI", "Cyber Lab Cloud Billing AI", "Software License Renewal Bot",
  "Server Maintenance Expense", "ISP & Network Billing AI", "Forensic Chemical Cost AI",
  "Weapon Maintenance Funder", "Riot Gear Replacement Cost", "Event Security Expense Bot",
  "Election Deployment Cost AI", "VIP Visit Logistics Expense", "Medical Emergency Expense AI",
  "Hospital Supply Cost Bot", "Pharmacy Inventory Expense", "Disaster Relief Operations",
  "Flood Evacuation Expense AI", "Search & Rescue Cost Bot", "Helicopter Maintenance Funder",
  "Band Instrument Repair AI", "Sports Equipment Expense", "Police Guest House Upkeep",
  "Legal Cell Court Fees Bot", "Advocate Payment Tracker AI", "Summons Delivery Cost Bot",
  "Public Relations Campaign AI", "Recruitment Drive Expense", "Training Academy Consumables",
  "Firing Range Upkeep Expense", "Undercover Ops Expense AI", "Narcotics Raid Logistics",
  "Anti-Terror Ops Expense Bot", "Bounty Payout Disburser AI", "Martyr Funeral Expense AI",
  "Pension Fund Arrears Cost AI", "Audit & CAG Compliance Fee", "Insurance Premium Auto-Payer",
  "Police Vehicle Insurance AI", "Medical Insurance Premium", "Building Fire Insurance Fee",
  "Vendor Payment Escrow Fee", "Smart Contract Execution Cost", "Bank Transaction Charge AI"
];

const financeModules = [
  {
    title: "Daily Operations",
    icon: <Activity size={20} />,
    items: ["Fuel & Fleet Repair", "Petty Cash Ledgers", "Stationery & Consumables", "Telecom & ISP Bills"]
  },
  {
    title: "Utilities & Maintenance",
    icon: <Database size={20} />,
    items: ["Electricity Bills", "Water & Municipal Taxes", "Barrack Upkeep", "IT Server Cloud Billing"]
  },
  {
    title: "Travel & Allowances",
    icon: <TrendingDown size={20} />,
    items: ["DA/TA Disbursal", "Toll/Transport Charges", "Uniform & Kit Cost", "VIP Logistics"]
  },
  {
    title: "Specialized Tactical",
    icon: <ShieldAlert size={20} />,
    items: ["SS Funds (Informants)", "Ammunition Costs", "Narcotics Raid Logistics", "Dog/Horse Squad Upkeep"]
  },
  {
    title: "Legal & Insurance",
    icon: <Receipt size={20} />,
    items: ["Court/Advocate Fees", "Vehicle Insurance", "Medical Insurance Premiums", "Bank/Escrow Charges"]
  }
];

const aiFeatures = [
  "AI Utility Bill Anomaly Detection (Theft/Wastage)", "AI Fuel Efficiency Analytics vs Patrol Routes", "AI Duplicate Petty Cash Alert",
  "AI SS Fund Masking & Auditing", "AI Predictive Fleet Repair Budgeting", "AI Telecom & Cloud Billing Optimizer"
];

const databases = [
  "Operational_Expense_Vault", "Utility_Bills_Ledger", "Travel_TA_DA_Logs", "Tactical_Ops_Expenditure", 
  "Petty_Cash_Registry", "Insurance_Premium_DB", "Telecom_Cloud_Billing", "SS_Fund_Encrypted_Ledger"
];

const dashboards = [
  "Live Burn-Rate Dashboard", "Fuel & Fleet Expenditure Map", "Utility Cost Heatmap", 
  "Zone-wise Petty Cash Monitor", "Travel Expense Analytics", "Insurance Renewal Warning"
];

const apis = [
  "State Electricity Board Sync", "Oil PSU Fuel Card APIs", "Banking Transfer Gateways", 
  "Cloud Provider (AWS/Azure) Billing", "Insurance Company APIs", "Telecom Service Provider Sync"
];

const reports = [
  "Monthly OpEx Summary", "Fuel Efficiency vs Cost Report", "Telecom & ISP Audit", 
  "Petty Cash Reconciliation", "Tactical Expense Burn Rate", "Pending Insurance Renewals"
];

const security = [
  "Zero-Trust Petty Cash Release", "Encrypted Informant Payouts", "Maker-Checker Expense Validation", 
  "Fuel Card Geo-Fencing AI", "Utility Bill OCR Verification", "Automated Spend Limit Locks"
];

const futureScope = [
  "Autonomous Utility Payments via Smart Contracts", "Predictive Fuel Pricing Hedging", "Drone Log based Repair Budgets",
  "Decentralized Petty Cash Wallets", "AI Auto-Negotiation for IT Cloud Renewals", "IoT-linked Electricity Budgets"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Expense Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Expense Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Spend Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ExpenseManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <TrendingDown className="inline-icon" size={28} /> AI Expense Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Expense Management</strong> tracks every rupee leaving the department. From massive zone-wide fuel bills and electricity expenditures to encrypted secret service payouts and petty cash registers, the AI analyzes burn rates to detect wastage, prevent fraud, and optimize operational spending.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Fuel & Fleet Analytics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Integrates with PSU Fuel Cards to track petrol/diesel consumption per vehicle, using AI to detect fuel theft or highly inefficient patrol routes.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#10b981" /> Utility Bill Anomaly AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically processes electricity and water bills for hundreds of stations. If a station's power bill suddenly spikes, the AI flags it for potential power theft.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> SS Fund Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Maintains completely encrypted ledgers for Secret Service (SS) informant payouts, ensuring financial audits can occur without compromising tactical operations.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Receipt className="inline-icon" color="#ef4444" /> Zero-Trust Petty Cash</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Digitizes the traditional 'petty cash box'. AI verifies digital receipts before automatically replenishing station-level operational funds.</p>
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
            <TrendingDown size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI EXPENSE <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">Operational Burn-Rates, Fuel Analytics & Petty Cash</p>
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

export default ExpenseManagementDetailed;
