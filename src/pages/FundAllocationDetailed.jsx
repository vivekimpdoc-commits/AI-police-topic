import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Map, GitBranch
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Zone-wise Fund Router AI", "District Allocation Optimizer", "Station Priority Scorer AI",
  "Crisis Reallocation Bot", "Contingency Fund Dispatcher", "Election Deployment Funder",
  "Riot Control Resource Router", "Cyber Cell Funding Predictor", "Women's Safety Grant Funder",
  "State-level CapEx Predictor", "Modernization Fund Allocator", "Vehicle Procurement Funder AI",
  "Ammunition Reorder Allocator", "Armory Upgrade Fund Router", "Forensic Lab Expansion Funder",
  "Smart City Integration Funder", "Traffic Tech Upgrade Funder", "Drone Fleet Capital Allocator",
  "K9 Unit Expansion Funder", "Marine Patrol Asset Funder", "Border Security Grant Router",
  "Federal Grant Utilization AI", "State Budget Disburser Bot", "Nirbhaya Fund Router AI",
  "Police Welfare Fund Allocator", "Officer Reward Payout Bot", "SS Fund Top-up Dispatcher",
  "Informant Network Funder", "Digital Evidence CapEx Bot", "CCTV Expansion Fund AI",
  "Police Station Renovation AI", "Headquarters Upkeep Funder", "Training Academy Allocator",
  "Recruit Camp Logistics Funder", "VIP Security Resource Router", "Festival Deployment Funder",
  "Religious Event Security Fund", "Disaster Relief Funder Bot", "Flood Evacuation Fund AI",
  "Earthquake Rapid Funder", "Medical Emergency Disburser", "Pension Fund Top-up AI",
  "Salary Deficit Corrector Bot", "Overtime Payout Allocator", "Uniform & Kit Funder AI",
  "Fuel Allocation Optimizer", "Toll & Transport Fund Router", "IT Hardware Upgrade Funder",
  "Cloud Server Fund Allocator", "Software License Renewal Bot", "Telecom Bill Allocator AI",
  "Electricity Arrears Payer Bot", "Aviation Fuel Fund Router", "Helicopter Maintenance Funder",
  "Anti-Terror Ops Fund Dispatch", "Special Task Force Funder", "Narcotics Raid Support Funder",
  "Human Trafficking Intel Funder", "Economic Offenses Wing Funder", "Strategic Reserve Allocator"
];

const allocationModules = [
  {
    title: "Strategic Disbursal",
    icon: <Map size={20} />,
    items: ["Zone-wise Distribution", "District Capital Allocations", "Station Priority Funding", "Modernization Funds"]
  },
  {
    title: "Crisis Reallocation",
    icon: <Activity size={20} />,
    items: ["Disaster Relief Routing", "Riot Control Top-ups", "Election Deployment Funds", "Emergency Medical Funder"]
  },
  {
    title: "Operational CapEx",
    icon: <Database size={20} />,
    items: ["Fleet Expansion Funding", "Armory Upgrades", "IT Hardware Budgets", "Forensic Lab Funding"]
  },
  {
    title: "Specialized Grants",
    icon: <ShieldAlert size={20} />,
    items: ["Nirbhaya Fund Utilization", "Federal Grants Sync", "Women's Safety Funding", "Border Security Allocation"]
  },
  {
    title: "Welfare & Logistics",
    icon: <GitBranch size={20} />,
    items: ["Police Welfare Fund", "Uniform & Kit Disbursal", "Training Academy Budget", "Headquarters Maintenance"]
  }
];

const aiFeatures = [
  "AI Automated Fund Reallocation during Crisis", "AI Priority Scoring for Station Renovation", "AI Federal Grant Utilization Maximizer",
  "AI Election Security Budget Estimation", "AI Drone & IT Fleet Capital Predictor", "AI Dynamic Fuel Budget Routing"
];

const databases = [
  "Fund_Allocation_Ledger", "State_Budget_Reserves", "Federal_Grants_DB", "Contingency_Vaults", 
  "Zone_Expenditure_Logs", "Station_CapEx_Requests", "Welfare_Fund_Balances", "Emergency_Disbursal_Trails"
];

const dashboards = [
  "State-wide Allocation Heatmap", "Live Crisis Fund Dispatch", "Grant Utilization Tracker", 
  "Zone vs District Budget Board", "Modernization ROI Dashboard", "CapEx Request Queue"
];

const apis = [
  "State Finance Ministry Sync", "Federal Grant Webhooks", "Treasury Disbursal APIs", 
  "Smart City Budget Sync", "Banking Transfer Gateways", "Disaster Response Funding APIs"
];

const reports = [
  "Monthly Zone-wise Allocation", "Annual Federal Grant Report", "Crisis Funder Audit", 
  "CapEx ROI Summary", "Welfare Fund Distribution Log", "Election Budget Closing Report"
];

const security = [
  "Treasury Multi-Sig Validation", "Immutable Allocation Hashes", "Encrypted Crisis Fund Routing", 
  "Role-Based Disbursal Limits", "Automated CapEx Fraud Checks", "Zero-Trust Financial Sync"
];

const futureScope = [
  "Autonomous State-wide Deficit Balancing", "Predictive GDP-Linked Allocation", "Blockchain Grant Traceability",
  "Real-time SS Fund Top-ups via DeFi", "AI Macro-Economic Budget Modeler", "Quantum Protected Ledgers"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Allocation Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Allocation Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Disbursal Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const FundAllocationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Map className="inline-icon" size={28} /> AI Fund Allocation
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Fund Allocation</strong> is the intelligent distribution engine of the state police’s finances. It ensures that funds are routed dynamically to zones, districts, and local stations based on predictive crime rates, crisis emergencies, and modernization priorities, completely eliminating static and inefficient budgeting.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Dynamic Crisis Reallocation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>During riots, natural disasters, or elections, the AI instantly redirects non-critical funds to emergency reserves to ensure uninterrupted field operations.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#10b981" /> Zone-wise Predictive Routing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes past expenditure and future crime predictions to automatically suggest optimal budget distributions for every district and police station.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Federal Grant Maximization</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks specialized funds (like the Nirbhaya fund or Modernization grants) to ensure they are fully utilized before expiry, preventing fund lapses.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><GitBranch className="inline-icon" color="#ef4444" /> Operational CapEx Disbursal</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automates the release of funds for long-term capital expenditures, such as building new forensic labs, purchasing drone fleets, or upgrading armories.</p>
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
            {allocationModules.map((mod, i) => (
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
            <Map size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI FUND <span>ALLOCATION</span></h1>
            <p className="cyber-subtitle">Dynamic Routing, Federal Grants & Crisis Budgeting</p>
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

export default FundAllocationDetailed;
