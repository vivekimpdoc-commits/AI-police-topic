import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, TrendingUp, Lightbulb
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Crime Trend Forecaster", "Budget Optimizer AI", "Policy Gap Analyzer", 
  "Innovation Scraper Bot", "Scheme Compliance Tracker", "Demographics Modeler", 
  "Resource Allocator AI", "Inter-Dept Coordinator", "Modernization Tracker",
  "Threat Landscape Analyzer", "Public Sentiment Modeler"
];

const adminModules = [
  {
    title: "Annual Crime Review",
    icon: <PieChart size={20} />,
    items: ["AI Automated Data Aggregation", "Predictive Crime Mapping", "Zone-wise Performance Grading", "Historical Trend Analysis"]
  },
  {
    title: "Strategic Planning",
    icon: <TrendingUp size={20} />,
    items: ["5-Year Vision Roadmap", "Budget Forecasting Models", "Manpower Requirement Predictor", "Infrastructure Expansion Plans"]
  },
  {
    title: "Innovation & Reforms",
    icon: <Lightbulb size={20} />,
    items: ["Global Best Practices Repo", "Officer Idea Crowdsourcing", "Modernization Project Tracking", "Tech Evaluation Sandbox"]
  },
  {
    title: "Government Coordination",
    icon: <Network size={20} />,
    items: ["MHA Scheme Compliance", "Inter-Department Sync (Health/Transport)", "Legislative Assembly QA Bot", "Audit Objection Resolution"]
  }
];

const aiFeatures = [
  "AI Forecasting of Crime Rates based on Economic Indicators", "AI NLP to Draft Responses to Legislative Assembly Questions", "AI Budget Optimization for Max ROI on Tech Spend",
  "AI Analysis of Global Police Reforms for Local Adoption", "AI Automated Generation of the Annual Crime Report", "AI Demographic Shift Modeling for New Police Stations",
  "AI Sentiment Analysis on Force Morale Surveys", "AI Anomaly Detection in Departmental Spending"
];

const databases = [
  "Strategic_Vision_DB", "Annual_Crime_Stats_Lake", "Modernization_Projects", "Innovation_Proposals", "MHA_Guidelines_Archive", 
  "Budget_Ledger", "Assembly_Questions_DB", "Global_Best_Practices"
];

const dashboards = [
  "State-wide Readiness Scorecard", "Crime Forecasting Map", "Budget vs Expenditure", 
  "Modernization Project Status", "Innovation ROI", "Legislative QA Pendency"
];

const apis = [
  "Ministry of Home Affairs (MHA) Portal", "State Finance Dept Gateway", "CCTNS Analytics API", "Global Interpol/Europol RSS Feeds",
  "State Legislative Assembly Portal", "NITI Aayog Data Hub"
];

const reports = [
  "Annual Crime Review Book", "5-Year Strategic Roadmap", "Modernization Fund Audit", 
  "Zone Performance Scorecard", "Legislative Assembly Report", "Innovation Implementation Status"
];

const security = [
  "Executive Dashboard (DGP Level) Encryption", "Strict RBAC for Budget Editing", "Air-gapped Storage for Strategic Plans", 
  "Audit Log of Policy Modifications", "Data Masking for External Vendors", 
  "DLP to Prevent Plan Leaks", "Blockchain Verification of Financial Approvals", "Multi-Factor Authentication (MFA)"
];

const futureScope = [
  "AI Digital Twin of the State Police Force", "Simulated Wargaming for Resource Allocation", "Quantum Computing for Cryptanalysis Strategy",
  "Automated Drafting of State Police Bills", "Predictive Modeling for Climate-Induced Crime", "Metaverse Command Briefings"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Strategy Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Admin Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Exec Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const StrategicAdminDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <TrendingUp className="inline-icon" size={28} /> AI Strategic Administration
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Strategic Administration</strong> is the brain trust of the police force. Designed for DGP and ADG level officers, it leverages AI to analyze long-term crime trends, forecast budget requirements, and map out the 5-year modernization roadmap.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><PieChart className="inline-icon" color="#3b82f6" /> Annual Crime Review</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automates the exhaustive process of compiling the state's Annual Crime Report. AI aggregates data from all 1000+ stations to generate heatmaps, conviction rates, and zone-wise performance gradings.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingUp className="inline-icon" color="#10b981" /> 5-Year Master Planning</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Models population growth, economic indicators, and urbanization rates to predict where new police stations will be needed, and forecasts the necessary budget and manpower.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Lightbulb className="inline-icon" color="#f59e0b" /> Innovation & Best Practices</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A crowdsourcing platform for junior officers to submit innovative tech ideas. AI evaluates global policing best practices (e.g., from NYPD or Scotland Yard) for local implementation viability.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Legislative QA Bot</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>When politicians ask complex data questions in the Legislative Assembly (Vidhan Sabha), the AI NLP engine instantly mines state databases to draft highly accurate, data-backed responses for the Home Minister.</p>
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
            {adminModules.map((mod, i) => (
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
            <TrendingUp size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">STRATEGIC <span>ADMINISTRATION</span></h1>
            <p className="cyber-subtitle">Crime Forecasting, Budgets & 5-Year Masterplans</p>
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

export default StrategicAdminDetailed;
