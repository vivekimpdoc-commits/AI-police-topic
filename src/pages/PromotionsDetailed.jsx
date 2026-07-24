import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, TrendingUp, Award
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "DPC Assistant AI", "Eligibility Calculator", "ACR/APAR Analyzer", 
  "Seniority Roster Bot", "Vacancy Forecaster", "Promotion Order Gen", 
  "Appeal Resolution Bot", "Career Progression AI", "Succession Planner",
  "Medal Recommendation Bot", "Bias Detection AI"
];

const promotionModules = [
  {
    title: "Departmental Promotion Committee (DPC)",
    icon: <Award size={20} />,
    items: ["AI DPC Dossier Generation", "Automated Eligibility Filtering", "Pending Disciplinary Action Sync", "Digital Minutes of Meeting"]
  },
  {
    title: "ACR/APAR Management",
    icon: <FileText size={20} />,
    items: ["NLP Analysis of Annual Appraisals", "Adverse Remark Highlighting", "Automated Grading Calculation", "Self-Appraisal Reminders"]
  },
  {
    title: "Seniority & Vacancy",
    icon: <TrendingUp size={20} />,
    items: ["Dynamic Seniority Register", "Retirement Vacancy Forecasting", "Category-wise Quota Tracking", "Inter-District Seniority Sync"]
  },
  {
    title: "Career & Succession",
    icon: <Activity size={20} />,
    items: ["AI Career Progression Modeling", "Leadership Succession Planning", "Gallantry Medal Tracking", "Promotion Appeal Workflow"]
  }
];

const aiFeatures = [
  "AI NLP to Summarize 10 Years of ACRs in Seconds", "AI Detection of Bias in Officer Appraisals", "AI Predictive Forecasting of Future Vacancies",
  "AI Automated Matching of Skills to Higher Rank Roles", "AI Fraud Detection in Gallantry Claims", "AI Career Path Recommendations for Junior Constables",
  "AI Automated Generation of Promotion Orders", "AI Resolution Suggestion for Promotion Anomalies"
];

const databases = [
  "ACR_APAR_Archive", "Seniority_Ledger", "DPC_Minutes_DB", "Disciplinary_Action_Logs", "Promotion_Orders_Lake", 
  "Vacancy_Forecast_Matrix", "Officer_Skill_Index", "Medal_Gallantry_DB"
];

const dashboards = [
  "DPC Readiness Status", "Vacancy vs Eligible Roster", "ACR Pendency Heatmap", 
  "Diversity & Quota Fulfillment", "Leadership Succession Pipeline", "Promotion Appeal Resolution"
];

const apis = [
  "State HRMS (Manav Sampada) Sync", "CCTNS (Disciplinary/FIR Sync)", "e-Sign Gateway for DPC", "Email/SMS Notification Gateway",
  "State Secretariat Approval API", "Digital Locker (Service Book)"
];

const reports = [
  "Annual DPC Eligibility List", "ACR Grading Distribution (Bell Curve)", "Retirement & Vacancy Forecast", 
  "Promotion Delay Analysis", "Adverse Remark Summary", "Gallantry Medal Recommendations"
];

const security = [
  "Top-Secret Clearance for DPC Dossiers", "Immutable Blockchain Logging of ACR Changes", "Role-Based Access Control (ADG/IG Level)", 
  "Data Masking during Bias Analysis", "End-to-End Encrypted Digital Signatures", 
  "Audit Trails for Seniority Register Edits", "Anti-Tamper Promotion Orders (QR Coded)", "Zero-Trust Architecture"
];

const futureScope = [
  "AI Emotion & Leadership Profiling for IPS Roles", "Blockchain-based Immutable Service Books", "Virtual Reality Leadership Assessments",
  "Predictive Burnout Modeling for Senior Officers", "Automated Salary Increment Sync via Smart Contracts", "Global Policing Skill-gap Analysis"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Promotion Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'HR Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'DPC Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PromotionsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Award className="inline-icon" size={28} /> AI Police Promotions & DPC
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Promotions</strong> digitizes the complex Departmental Promotion Committee (DPC) process. It uses AI to read decades of Annual Confidential Reports (ACR), instantly calculates eligibility based on seniority and vacancies, and ensures a completely unbiased, merit-based career progression.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Award className="inline-icon" color="#3b82f6" /> AI DPC Assistant</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Generates digital dossiers for DPC meetings. AI instantly cross-checks an officer's seniority, minimum tenure, and pending disciplinary actions, filtering out ineligible candidates automatically.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#10b981" /> NLP ACR Analysis</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of humans reading 10 years of physical files, the AI uses Natural Language Processing (NLP) to summarize Annual Appraisals, highlighting adverse remarks, outstanding grades, and gallantry awards.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingUp className="inline-icon" color="#f59e0b" /> Vacancy Forecasting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Predicts upcoming vacancies across all ranks by analyzing retirement dates and newly sanctioned posts, allowing HR to plan promotion cycles months in advance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Leadership Succession</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Identifies high-performing officers for critical leadership roles (e.g., ATS Chief, SSP) by analyzing their career trajectory, specialized training, and past performance in high-pressure zones.</p>
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
            {promotionModules.map((mod, i) => (
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
            <Award size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>PROMOTIONS</span></h1>
            <p className="cyber-subtitle">DPC Automation, ACR NLP Analysis & Seniority Tracking</p>
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

export default PromotionsDetailed;
