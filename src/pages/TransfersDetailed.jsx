import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Repeat, Map
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Transfer Policy AI", "Tenure Monitor Bot", "Vacancy Matcher AI", 
  "Hard Area Rotator", "Mutual Transfer Bot", "Relieving Tracker AI", 
  "Skill-to-Zone Matcher", "Corruption Predictor AI", "Order Generation Bot",
  "Grievance Redressal Bot", "Spouse Posting Aligner"
];

const transferModules = [
  {
    title: "Transfer Requests & Policy",
    icon: <Repeat size={20} />,
    items: ["AI Transfer Policy Compliance", "Spouse Posting Alignment", "Mutual Transfer Matchmaking", "Digital Transfer Requests"]
  },
  {
    title: "Tenure & Hard Area Posting",
    icon: <Map size={20} />,
    items: ["Automated 3-Year Tenure Alerts", "Naxal/Hard Area Rotation Tracking", "Cooling-off Period Enforcement", "Home District Bar Check"]
  },
  {
    title: "Vacancy & Skill Matching",
    icon: <Cpu size={20} />,
    items: ["AI Skill-to-Role Mapping", "Zone-wise Vacancy Heatmap", "Cyber/Forensic Specialist Routing", "Mass Transfer Optimization"]
  },
  {
    title: "Relieving & Joining",
    icon: <Activity size={20} />,
    items: ["Digital Relieving Orders", "Automated Salary Account Transfer", "Pending Joining Alerts", "Service Book Sync"]
  }
];

const aiFeatures = [
  "AI Optimization for Mass Transfers (Election Season)", "AI Detection of Political Favoritism Patterns", "AI Matching of Officer Skills to High-Crime Zones",
  "AI Automated Calculation of Hard Area Tenure Points", "AI Identification of Officers Overstaying in Sensitive Posts", "AI Mutual Transfer Matchmaking (Tinder for Transfers)",
  "AI NLP for Processing Compassionate Ground Requests", "AI Automated Generation of Transfer Orders"
];

const databases = [
  "Transfer_Request_Queue", "Officer_Tenure_Logs", "Hard_Area_Postings_DB", "Zone_Vacancy_Matrix", "Skill_Specialization_Index", 
  "Transfer_Orders_Archive", "Joining_Relieving_Ledger", "Mutual_Transfer_Pool"
];

const dashboards = [
  "State-wide Transfer Matrix", "Tenure Violation Radar", "Hard Area Rotation Equity", 
  "Skill Gap vs Posting Match", "Relieving/Joining Pendency", "Election Commission Transfer Compliance"
];

const apis = [
  "Election Commission of India (ECI) Portal", "State Finance (Payroll) Sync", "Human Resource Management System (HRMS)", "CCTNS Station Mapping",
  "Digital Signature (e-Sign) API", "SMS/Email Notification Gateway"
];

const reports = [
  "Annual Transfer Policy Audit", "Hard Area Posting Compliance", "Mass Transfer Impact Analysis", 
  "Skill Mismatch Report", "Compassionate Ground Resolution", "Officer Satisfaction Survey"
];

const security = [
  "Multi-Tier Approval Cryptography", "Audit Logs of Denied Requests", "Strict RBAC for Establishment Board", 
  "Anti-Tamper Digital Transfer Orders (QR Code)", "Data Masking of Medical Ground Requests", 
  "Blockchain Immutable Tenure Records", "Rate Limiting on Transfer DB Queries", "Zero-Trust API Sync with Treasury"
];

const futureScope = [
  "AI Game Theory for Optimal Force Distribution", "Smart Contracts for Automated Travel Allowance Release", "Predictive Attrition via Transfer Dissatisfaction",
  "Blockchain Decentralized Identity for Inter-State Deputation", "Virtual Reality Station Tours before Joining", "Fully Autonomous Non-Executive Transfers"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Transfer Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'HR Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Transfer Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const TransfersDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Repeat className="inline-icon" size={28} /> AI Police Transfers & Postings
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Transfers & Postings</strong> brings total transparency to force mobility. AI ensures strict adherence to Election Commission guidelines, enforces equitable rotation in hard/naxal areas, and optimally matches an officer's specialized skills with the right geographical zone.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#3b82f6" /> Tenure & Hard Area Enforcement</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI automatically flags officers who have completed their 3-year tenure in a district. It ensures fair rotation, making sure no officer avoids mandatory postings in hard/naxal-affected areas.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Cpu className="inline-icon" color="#10b981" /> Skill-to-Zone Optimization</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of random postings, AI analyzes an officer's past successes (e.g., solving cyber crimes) and automatically recommends transferring them to districts currently experiencing a spike in those specific crimes.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Repeat className="inline-icon" color="#f59e0b" /> Mutual & Compassionate Transfers</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Features an AI matchmaking system that pairs officers looking for mutual inter-district transfers. It also uses NLP to prioritize transfers based on medical or spouse-alignment grounds.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Election Commission Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>During election season, the AI executes mass transfer algorithms, ensuring no officer is posted in their home district or has served in the current district for more than 3 of the last 4 years, generating compliant orders instantly.</p>
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
            {transferModules.map((mod, i) => (
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
            <Repeat size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>TRANSFERS</span></h1>
            <p className="cyber-subtitle">Tenure Enforcement, Mass Transfers & Mutual Matches</p>
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

export default TransfersDetailed;
