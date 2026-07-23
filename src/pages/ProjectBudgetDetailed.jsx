import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Target, Wrench, FileCheck
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "New HQ Construction Funder", "Forensic Lab Rollout Bot", "Smart City Surveillance Funder",
  "Drone Fleet Project AI", "Armory Upgrade Project Funder", "Data Center Build Funder",
  "CCTNS Phase-II Project AI", "Traffic Tech Rollout Funder", "Women Safety Kiosk Funder",
  "Dial 112 Expansion Bot", "Marine Patrol Fleet Project", "Border Outpost Build Funder",
  "Police Housing Project AI", "Cyber Lab Establishment AI", "Mobile Command Vehicle Funder",
  "K9 Training Center Build AI", "Aviation Hangar Construction", "Biometric DB Expansion Fund",
  "Digital Evidence Vault Funder", "Facial Recognition Rollout", "Taser Procurement Project AI",
  "Body-Cam Implementation AI", "Cloud Migration Project Fund", "Disaster Command Center Build",
  "Solar Power Transition Project", "EV Charging Infra Funder", "Zero-Carbon Station Project",
  "Armored Vehicle Fleet Fund", "Riot Control Gear Rollout", "Highway Outpost Network Fund",
  "Undercover Ops Tech Funder", "Counter-Terrorism Infra AI", "Recruit Academy Expansion",
  "Shooting Range Upgrade Funder", "Hospital Modernization Project", "Sports Complex Build Fund",
  "Telecom Tower Erection Funder", "Radio Comms Upgrade AI", "Prison Security Overhaul Fund",
  "Juvenile Center Build AI", "Forensic Van Rollout Bot", "Command Center Video Wall",
  "AI Server Farm Construction", "Cyber Security SOC Funder", "Blockchain Evidence Rollout",
  "Public Portal Upgrade AI", "Digital Signature Infra AI", "ERP Software Rollout Fund",
  "Vendor Payment Milestone AI", "Contractor Escrow Funder", "Project Cost Overrun Bot",
  "Time-Delay Penalty Calculator", "Smart Contract Dispenser", "Raw Material Cost Indexer",
  "Project Deficit Alerter", "Capital Expenditure Sweeper", "Sub-contractor Audit Bot",
  "Compliance Milestone Funder", "Green Clearance Funder AI", "Land Acquisition Payout AI"
];

const financeModules = [
  {
    title: "Capital Expenditure",
    icon: <Wrench size={20} />,
    items: ["HQ Construction", "Data Center Builds", "Housing Projects", "Training Academies"]
  },
  {
    title: "Tech Modernization",
    icon: <Cpu size={20} />,
    items: ["CCTNS Expansion", "Drone Fleet Rollouts", "Cyber Labs", "Smart City Surveillance"]
  },
  {
    title: "Project Milestones",
    icon: <Target size={20} />,
    items: ["Milestone Payments", "Smart Contract Escrow", "Time-Delay Penalties", "Cost Overrun Alerts"]
  },
  {
    title: "Fleet & Tactical",
    icon: <ShieldAlert size={20} />,
    items: ["Armored Vehicles", "Marine Patrol Boats", "Aviation Hangars", "Riot Control Gear"]
  },
  {
    title: "Green Initiatives",
    icon: <Activity size={20} />,
    items: ["EV Charging Infra", "Solar Power Transition", "Zero-Carbon Stations", "Green Clearances"]
  }
];

const aiFeatures = [
  "AI Smart Contract Milestone Payouts", "AI Project Cost Overrun Predictor", "AI Time-Delay Penalty Calculator",
  "AI Drone & Vehicle Fleet Capital Modeler", "AI Vendor Escrow Management", "AI Compliance-based Funding Release"
];

const databases = [
  "Project_Master_Ledger", "Milestone_Contracts", "Vendor_Escrow_Vaults", "CapEx_Disbursal_Logs", 
  "Tech_Rollout_Budgets", "Construction_Audit_Trails", "Overrun_Alert_DB", "Green_Initiative_Funding"
];

const dashboards = [
  "DGP Master Project Board", "Live CapEx Disbursal Tracker", "Milestone & Delay Heatmap", 
  "Tech Modernization ROI", "Construction Progress vs Budget", "Smart Contract Release Queue"
];

const apis = [
  "Public Works Dept (PWD) Sync", "Vendor Bank Gateways", "Smart Contract Oracles", 
  "Smart City Infra APIs", "State Finance CapEx Sync", "Green Clearance Webhooks"
];

const reports = [
  "Monthly Project CapEx Burn", "Delayed Project Penalties", "Milestone Compliance Audit", 
  "Tech Modernization Rollout Status", "Escrow Payout Summary", "Cost Overrun Forecast"
];

const security = [
  "Blockchain Smart Contracts", "Multi-Sig Payout Authorization", "Escrow Wallet Isolation", 
  "Vendor Background KYC AI", "Immutable Audit Hashing", "Geo-fenced Milestone Verification"
];

const futureScope = [
  "Autonomous Drone Progress Scanning", "IoT-linked Escrow Payouts", "Decentralized CapEx Funding",
  "AI Real-Time Material Cost Indexing", "Quantum-Safe Vendor Ledgers", "Digital Twin Project Simulators"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Project Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Project Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'CapEx Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ProjectBudgetDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Target className="inline-icon" size={28} /> AI Project Budget
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Project Budget</strong> handles massive capital expenditure (CapEx) for multi-year modernization projects like building new forensic labs, rolling out smart city surveillance, or constructing police housing. It utilizes smart contracts to release funds strictly based on physical milestone completion, completely eradicating project fund siphoning.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#3b82f6" /> Smart Contract Escrow</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Vendor funds are held in secure escrow and only released when the AI verifies that a specific construction or tech-rollout milestone has been physically completed.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Cost Overrun Prediction</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes raw material inflation and labor delays to predict project cost overruns months in advance, allowing DGPs to arrange contingency funding early.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Cpu className="inline-icon" color="#f59e0b" /> Tech Modernization CapEx</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Dedicated tracking for high-tech rollouts like CCTNS Phase-II, Drone Fleets, and SOC Data Centers, ensuring technology investments yield high ROI.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#ef4444" /> Delay Penalty Automation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a contractor misses a deadline for building a police station, the AI automatically calculates and deducts time-delay penalties from their next invoice.</p>
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
            <Target size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI PROJECT <span>BUDGET</span></h1>
            <p className="cyber-subtitle">CapEx Tracking, Smart Contracts & Milestone Disbursals</p>
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

export default ProjectBudgetDetailed;
