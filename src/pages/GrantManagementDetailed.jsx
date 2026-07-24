import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, FileCheck, Award
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Federal Grant Discovery AI", "Nirbhaya Fund Optimizer", "CCTNS Grant Tracker AI",
  "Modernization Fund Auditor", "Utilization Certificate (UC) Bot", "Grant Lapse Predictor",
  "Central Scheme Sync AI", "State Matching Fund Calculator", "NGO & CSR Fund Router",
  "Disaster Relief Grant Funder", "Women's Safety Grant Monitor", "Cyber Security Grant AI",
  "Traffic Tech Grant Allocator", "Smart City Grant Integrator", "Grant Proposal Drafter AI",
  "Milestone Completion Auditor", "Fund Diversion Alert Bot", "CAG Grant Compliance AI",
  "Border Infrastructure Grant AI", "Anti-Terrorism Fund Tracker", "Narcotics Control Grant AI",
  "Forensic Lab Upgrade Grant AI", "K9 Unit Central Grant Bot", "Drone Fleet Subsidy Tracker",
  "Body-Cam Procurement Grant AI", "Aviation/Helicopter Grant Bot", "Housing Subsidy Grant AI",
  "Welfare Fund Matching Bot", "International Aid Sync AI", "Interpol Collaboration Grant",
  "Training Academy Grant Monitor", "Recruit Infrastructure Fund AI", "Digital Evidence Grant Router",
  "AI & ML Research Grant Bot", "Start-up Innovation Fund AI", "Public-Private Partnership Fund",
  "Community Policing Grant AI", "Rural Station Upgrade Grant", "Coastal Security Grant AI",
  "Marine Patrol Subsidy Tracker", "Railway Police Grant Sync", "Metro Security Fund Allocator",
  "Election Security Grant AI", "VVIP Protection Grant Monitor", "Prison Modernization Grant AI",
  "Rehabilitation Program Funder", "Juvenile Justice Grant AI", "Human Trafficking Grant Router",
  "Economic Offenses Grant AI", "Fake Currency Intel Grant", "Wildlife Crime Grant Allocator",
  "Environment Protection Grant", "Green Energy Police Grant AI", "Solar Panel Subsidy Tracker",
  "EV Fleet Transition Grant AI", "Zero-Emission Station Funder", "Mental Health Program Grant",
  "Officer PTSD Therapy Grant AI", "Widow Pension Grant Integrator", "Martyr Family Fund Allocator"
];

const financeModules = [
  {
    title: "Grant Discovery & Sync",
    icon: <Award size={20} />,
    items: ["Federal Scheme Sync", "CSR Fund Discovery", "State Matching Calculation", "Proposal Drafting"]
  },
  {
    title: "Utilization & Compliance",
    icon: <FileCheck size={20} />,
    items: ["Automated UC Generation", "Milestone Auditing", "Fund Diversion Alerts", "CAG Compliance Sync"]
  },
  {
    title: "Specialized Grants",
    icon: <ShieldAlert size={20} />,
    items: ["Nirbhaya Fund Tracking", "CCTNS Modernization", "Cyber Security Funding", "Coastal Defense Grants"]
  },
  {
    title: "Infrastructure & CapEx",
    icon: <Database size={20} />,
    items: ["EV Fleet Transition", "Green Energy Grants", "Forensic Lab Expansion", "Housing Subsidies"]
  },
  {
    title: "Welfare & Community",
    icon: <Activity size={20} />,
    items: ["Martyr Family Funds", "Mental Health Grants", "Community Policing Aid", "NGO Collaborations"]
  }
];

const aiFeatures = [
  "AI Automated Utilization Certificate (UC) Generation", "AI Predictive Grant Lapse Alerts", "AI CSR Fund Matching Algorithm",
  "AI Grant Proposal Auto-Drafting", "AI Smart Contract Milestone Auditing", "AI Fund Diversion Detection"
];

const databases = [
  "Federal_Grants_Index", "UC_Submission_Logs", "CSR_Partnership_DB", "Modernization_Fund_Vault", 
  "State_Matching_Ledger", "Project_Milestone_Tracker", "Audit_Compliance_Trails", "Grant_Proposal_Archives"
];

const dashboards = [
  "Federal Grant Overview Board", "Utilization & Lapse Warning", "CSR & NGO Partnership Tracker", 
  "CCTNS & Tech Grant Monitor", "Infrastructure Subsidy View", "Audit & CAG Compliance Board"
];

const apis = [
  "Home Ministry Grant APIs", "Finance Ministry Sync", "CSR Portal Webhooks", 
  "Smart City Scheme Sync", "Banking Ledger APIs", "State Treasury Sync"
];

const reports = [
  "Monthly Grant Utilization Log", "Annual Modernization Report", "Lapsing Fund Alert Summary", 
  "CSR Fund Impact Analysis", "UC Submission Status Report", "Federal Audit Compliance"
];

const security = [
  "End-to-End Fund Traceability", "Smart Contract Escrow", "Immutable UC Hashing", 
  "Zero-Trust Grant Access", "Gov-Grade Multi-Sig Approvals", "Anti-Money Laundering Checks"
];

const futureScope = [
  "Autonomous Global Grant Discovery", "Blockchain-based UC Generation", "Predictive CSR Fund Matching",
  "Real-time CAG Audit Dashboards", "Decentralized Grant Distribution", "AI Policy Formulation Feedback"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Grant Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Grant Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Grant Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const GrantManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Award className="inline-icon" size={28} /> AI Grant Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Grant Management</strong> ensures that federal schemes, state modernization funds, and CSR donations are fully utilized. It tracks the entire lifecycle of a grant, prevents funds from lapsing, and automatically generates flawless Utilization Certificates (UCs) for strict CAG compliance.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Fund Lapse Prevention</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Proactively flags unutilized grants months before their expiry, suggesting actionable projects where the funds can be deployed to prevent lapse.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#10b981" /> Automated UC Generation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Collates hundreds of invoices and progress reports to automatically generate legally compliant Utilization Certificates (UCs) for the central government.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Award className="inline-icon" color="#f59e0b" /> Specialized Scheme Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tightly manages highly scrutinized funds like the Nirbhaya Fund for women's safety and CCTNS grants, ensuring zero diversion of specialized capital.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#ef4444" /> CSR & NGO Discovery</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scans corporate CSR portals and international aid databases to discover and auto-draft proposals for new community policing grants.</p>
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
            <Award size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI GRANT <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">Federal Schemes, CSR Funds & Automated Utilization Certificates</p>
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

export default GrantManagementDetailed;
