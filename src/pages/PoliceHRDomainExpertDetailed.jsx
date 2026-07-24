import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Users, Briefcase, Award
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "State HR Policy Synthesizer", "Service Rule Implementation AI", "Inter-District Transfer Modeler",
  "Rank & Promotion Evaluator", "Police Act Compliance Checker", "Force Deployment Strategist",
  "Retirement Succession Planner", "Cadre Strength Analyzer", "Manpower Deficit Predictor",
  "Gazetted Officer Roster AI", "Non-Gazetted Roster Optimizer", "Police Manual Amendment Bot",
  "HR Dispute Resolution AI", "Disciplinary Proceedings Analyst", "Suspension & Reinstatement AI",
  "Inter-State Deputation AI", "CBI/NIA Deputation Tracker", "UN Mission Deployment AI",
  "Welfare Fund Allocator", "Compassionate Appointment AI", "Medically Unfit Reassignment AI",
  "VIP Security Deployment HR AI", "Reserve Force Allocation AI", "Election Duty Manpower AI",
  "Riot Response Force Planner", "Women Battalion Deployment AI", "Minority Representation AI",
  "SC/ST Roster Compliance AI", "Home Guard Integration AI", "Special Task Force HR Planner",
  "Anti-Terror Squad HR AI", "Cyber Cell Talent Scout AI", "Forensic Lab HR Allocator",
  "Traffic Police HR Strategist", "Highway Patrol Deployment AI", "Railway Police Manpower AI",
  "Tourist Police Allocation AI", "Border Security Liaison AI", "Intelligence Bureau Deputation AI",
  "RAW Liaison HR Tracker", "Presidential Award Recommendation AI", "Gallantry Award Shortlister AI",
  "Service Medal Evaluator", "Chief Minister Medal AI", "DG Commendation Disc Planner",
  "Foreign Training Deputation AI", "Interpol Deputation Tracker", "Central Armed Police Liaison AI",
  "State Armed Constabulary HR AI", "PAC Battalion Roster AI", "Armed Reserve Profiling AI",
  "Mounted Police HR Tracker", "K9 Handler Deployment AI", "Tear Gas Squad HR Planner",
  "Bomb Disposal Squad HR AI", "Sniper Unit Deployment AI", "Marine Police HR Allocator",
  "Aviation Wing Manpower AI", "Drone Pilot Deployment AI", "Band Unit HR Scheduler"
];

const modules = [
  {
    title: "HR Strategy & Policy",
    icon: <Briefcase size={20} />,
    items: ["Cadre Strength Planning", "Service Rule Amendments", "SC/ST Roster Compliance", "Succession Planning"]
  },
  {
    title: "Deployment & Deputation",
    icon: <Users size={20} />,
    items: ["Inter-State Deputations", "CBI/NIA Tracking", "UN Mission Rosters", "VIP Security Allocation"]
  },
  {
    title: "Specialized Units HR",
    icon: <Target size={20} />,
    items: ["Cyber Cell Talent", "Forensic HR", "STF & ATS Planners", "Bomb Disposal Squads"]
  },
  {
    title: "Awards & Commendations",
    icon: <Award size={20} />,
    items: ["Presidential Awards", "Gallantry Shortlisting", "DG Commendation Discs", "Service Medals"]
  },
  {
    title: "Compliance & Discipline",
    icon: <ShieldAlert size={20} />,
    items: ["Disciplinary Proceedings", "Police Act Compliance", "Suspension Tracking", "HR Dispute Resolution"]
  }
];

const aiFeatures = [
  "Predictive Manpower Deficit Modeling", "Automated Service Rule Interpretation", "Bias-Free Roster Allocation Algorithm",
  "Real-Time Deputation Tracking", "AI-Driven Gallantry Award Verification", "Smart Disciplinary Case Prioritization"
];

const databases = [
  "State_HR_Master_Ledger", "Cadre_Strength_DB", "Deputation_Registry", "Awards_Commendations_Vault", 
  "Special_Units_Roster_DB", "Disciplinary_Action_Logs", "Service_Rule_Amendments", "VIP_Security_Roster"
];

const dashboards = [
  "Global Force Deployment Map", "Cadre Deficit Heatmap", "Specialized Units Strength", 
  "Deputation & Liaison Board", "Disciplinary Action Overview", "Awards & Honours Tracker"
];

const apis = [
  "MHA Deputation Sync API", "State Secretariat HR Gateway", "CBI/NIA Deputation Webhooks", 
  "Interpol Liaison API", "Presidential Award Portal Sync", "Election Commission Duty API"
];

const reports = [
  "Annual Cadre Strength Report", "Monthly Deficit Analytics", "Special Unit Deployment Audit", 
  "Gallantry Award Nominations", "Deputation Status Summary", "Disciplinary Case Backlogs"
];

const security = [
  "Role-Based Cadre Access", "Encrypted Disciplinary Logs", "Immutable Award Nominations", 
  "Zero-Trust HR Policy Edits", "Biometric Approvals for Deputation", "Audit Trail for Roster Changes"
];

const futureScope = [
  "Quantum Computing for Deployment Optimization", "AI Auto-Drafting of Police Manuals", "Predictive Behavioral Disciplinary Alerts",
  "Global Interpol HR Matching", "Decentralized Blockchain Service Books", "Autonomous Drone Pilot Scheduling"
];

function Target({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
}

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `HR Domain Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'HR Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'HR Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceHRDomainExpertDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Briefcase className="inline-icon" size={28} /> Police HR Domain Expert AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police HR Domain Expert AI</strong> is the apex human resource command system. It governs state-wide cadre strength, intricate service rules, specialized unit deployments, and high-level inter-state/central deputations. It replaces archaic manual HR ledgers with an intelligent, predictive, and bias-free ecosystem.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#3b82f6" /> Cadre & Deployment Strategy</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Predicts manpower deficits across districts and automatically models optimal deployment strategies for general law & order, VIP security, and election duties.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Award className="inline-icon" color="#10b981" /> Deputations & Honors</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks intricate deputations to CBI, NIA, and UN Missions. Seamlessly shortlists deserving candidates for Presidential and Gallantry awards using unbiased performance metrics.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Discipline & Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors disciplinary proceedings, suspensions, and reinstatements. Ensures strict adherence to the Police Act, service manuals, and SC/ST roster rules.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#ef4444" /> Specialized Unit Rosters</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scouts talent for elite units like ATS, STF, Cyber Cells, and Forensic Labs, matching officer skillsets with the critical demands of specialized operations.</p>
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
                <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" /> Command Dashboards</h3>
                <ul>
                  {dashboards.map((dash, i) => (
                    <li key={i}><CheckCircle size={16} color="#f59e0b" /> {dash}</li>
                  ))}
                </ul>
              </div>
              <div className="report-list">
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Official Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Access & Security</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {security.map((sec, i) => <span key={i} className="cyber-tag highlight-red">{sec}</span>)}
            </div>
            
            <h3 style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}><Rocket className="inline-icon" /> Evolution Roadmap</h3>
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
            <Briefcase size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE HR DOMAIN <span>EXPERT AI</span></h1>
            <p className="cyber-subtitle">Apex Cadre Governance, Deputations & Service Rules</p>
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

export default PoliceHRDomainExpertDetailed;
