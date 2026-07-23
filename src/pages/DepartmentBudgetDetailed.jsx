import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Building, Briefcase
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "CID Budget Allocator AI", "Cyber Cell Funder Bot", "Traffic Police Budget AI",
  "Special Task Force Funder", "Forensics Wing Budget AI", "Women Cell Grant Allocator",
  "Anti-Terrorism Squad Funder", "Economic Offenses Funder", "State Intel Bureau Budget",
  "Narcotics Control Funder", "Highway Patrol Budget AI", "Railway Police Funder Bot",
  "Marine Police Allocation AI", "Border Wing Funder Bot", "Mounted Police Upkeep AI",
  "K9 Unit Wing Budget AI", "Aviation/Helicopter Funder", "VVIP Security Budget AI",
  "Armed Constabulary Funder", "Riot Control Wing Budget", "Training Academy Budget AI",
  "Recruit Center Funder Bot", "Police Hospital Fund Router", "Welfare Wing Budget AI",
  "Sports Control Board Funder", "Communication Wing Budget", "IT Cell Allocation Bot",
  "Radio Headquarters Funder", "Logistics & Supply Budget AI", "Armory Wing Funder Bot",
  "Fleet Management Wing AI", "Building Maintenance Budget", "Housing Board Funder Bot",
  "Legal Cell Budget Allocator", "Prosecution Wing Funder", "RTI & Public Info Budget",
  "Social Media Cell Funder", "PR & Media Wing Budget", "Innovation Lab Allocation AI",
  "Inter-Department Sync Bot", "Horizontal Slicing AI", "Wing-wise CapEx Predictor",
  "Department Deficit Alert", "Budget Transfer Validator", "Reappropriation Approver AI",
  "Wing Fund Diversion Monitor", "Surplus Fund Sweeper AI", "Department ROI Analyzer Bot",
  "Equipment Depreciation AI", "Consumables Forecasting Bot", "Ammunition Wing Budget AI",
  "Stationery & Print Funder", "Telecom Wing Payment AI", "Electricity Budget Router",
  "Water & Utilities Funder", "Specialized Ops Funder AI", "Hostage Rescue Wing Budget",
  "Bomb Disposal Squad Funder", "SDRF/Disaster Wing Budget", "Dog Squad Pension Funder"
];

const financeModules = [
  {
    title: "Wing-wise Slicing",
    icon: <Briefcase size={20} />,
    items: ["CID & Intel Budgets", "Cyber Cell Funding", "Traffic Wing Allocations", "Forensic Lab Slicing"]
  },
  {
    title: "Armed & Special Forces",
    icon: <ShieldAlert size={20} />,
    items: ["ATS/STF Budgets", "Armed Constabulary (PAC)", "Bomb Disposal Squads", "Riot Control Funds"]
  },
  {
    title: "Logistics & Tech Wing",
    icon: <Building size={20} />,
    items: ["IT & Cyber Budgets", "Fleet Management", "Armory & Weapons", "Communication/Radio Wing"]
  },
  {
    title: "Welfare & Medical",
    icon: <Activity size={20} />,
    items: ["Police Hospital Funds", "Training Academy Budgets", "Housing & Quarters", "Sports Control Board"]
  },
  {
    title: "Inter-Wing Reappropriation",
    icon: <Network size={20} />,
    items: ["Fund Transfers", "Surplus Sweeping", "Deficit Alerts", "Emergency Slicing"]
  }
];

const aiFeatures = [
  "AI Automated Surplus Sweeping", "AI Wing-wise CapEx Forecasting", "AI Fraud Diversion Monitoring",
  "AI Inter-Department Budget Balancing", "AI ROI Analysis per Specialized Wing", "AI Utility Cost Prediction"
];

const databases = [
  "Wing_Allocation_Ledger", "Special_Forces_Budgets", "Logistics_Expenditure_DB", "Reappropriation_Logs", 
  "Surplus_Deficit_Tracker", "Medical_Fund_Vault", "Training_Academy_Budgets", "CapEx_ROI_Index"
];

const dashboards = [
  "DGP Master Wing Overview", "Specialized Forces Budget Board", "Logistics & IT CapEx", 
  "Welfare & Training Board", "Live Reappropriation Tracker", "Surplus & Deficit Heatmap"
];

const apis = [
  "State Finance Sync APIs", "Internal Reappropriation Gateways", "Hospital/Medical Billing APIs", 
  "Vendor Logistics Sync", "Utility Billing Webhooks", "Armory Inventory Sync"
];

const reports = [
  "Monthly Wing-wise Expenditure", "Special Forces ROI Report", "Surplus Sweep Summary", 
  "Training & Welfare Audit", "IT & Cyber CapEx Log", "Utility & Maintenance Report"
];

const security = [
  "Wing-Commander RBAC Limits", "Encrypted Reappropriation", "Immutable Transfer Logs", 
  "Zero-Trust Fund Slicing", "Strict Maker-Checker Approvals", "Anti-Siphoning Algorithms"
];

const futureScope = [
  "Autonomous Cross-Wing Rebalancing", "Real-time Blockchain Tracing", "Predictive Threat-Based Slicing",
  "AI Auto-Approval for Minor Transfers", "Smart Contract Utility Payments", "Fully Decentralized Wing Ledgers"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Department Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Wing Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Budget Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const DepartmentBudgetDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Building className="inline-icon" size={28} /> AI Department (Wing) Budget
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Department Budget</strong> focuses on the horizontal slicing of the state budget into specialized wings (e.g., Traffic, Cyber, Forensics, STF). It prevents siloed inefficiencies by automatically sweeping surplus funds from one department and reappropriating them to another department facing a deficit.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Briefcase className="inline-icon" color="#3b82f6" /> Wing-wise Horizontal Slicing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Intelligently divides the global state budget across 40+ specialized wings based on historical expenditure, current threat levels, and priority goals.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#10b981" /> Automated Reappropriation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If the Traffic Wing exhausts its budget but the Training Academy has a massive surplus, the AI suggests and executes seamless intra-department fund transfers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Special Forces CapEx</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides dedicated, highly secure funding silos for elite units like the ATS and Bomb Disposal Squads, ensuring rapid procurement of critical gear.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Welfare & Logistics Tracker</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Separates operational budgets from human-centric budgets like police hospitals, recruit training academies, and sports control boards.</p>
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
            <Building size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI DEPARTMENT <span>BUDGET</span></h1>
            <p className="cyber-subtitle">Wing-wise Allocations, Reappropriation & Specialized Funding</p>
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

export default DepartmentBudgetDetailed;
