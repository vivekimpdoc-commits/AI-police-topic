import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, Eye, Presentation
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "DGP Master Overview AI", "CM Briefing Auto-Generator", "Chief Minister Protocol Sync",
  "Home Minister Briefing Bot", "Live Force Readiness Scorer", "State-wide Crime Heatmapper",
  "Jurisdictional Threat Indexer", "Public Approval Scorer AI", "Election State Readiness Bot",
  "High-Profile Case Tracker", "VVIP Incident Alert AI", "Media Sentiment Summarizer",
  "Press Conference Prepper Bot", "Crisis Scenario Simulator", "Tabletop Exercise Generator",
  "Emergency Declaration Recommender", "Global Terror DB Sync AI", "Interpol Alert Aggregator",
  "Cross-Border Threat Indexer", "Macro-Economic Crime Predictor", "Budget Utilization Alert AI",
  "Funding Deficit Predictor Bot", "Strategic Resource Allocator", "Fleet Availability Dashboard AI",
  "Cyber-Threat Executive Summary", "Critical Infrastructure Risk Scorer", "Power Grid Threat Analyzer",
  "Telecom Outage Impact Bot", "Social Unrest Predictor AI", "Mass Protest Forecaster",
  "Major Event Security Scorer", "Festival Vulnerability Indexer", "Natural Disaster Impact AI",
  "Flood Evacuation Scorer Bot", "Earthquake Readiness Index", "Top 10 Wanted Tracking AI",
  "Organized Crime Syndicate Mapper", "Cartel Activity Heatmapper", "Smuggling Route Executive View",
  "Border Infiltration Alert AI", "Weapons Stockpile Readiness Bot", "Ammunition Depletion Alert AI",
  "Officer Morale & Attrition Index", "Police Union Sentiment Analyst", "Pension Fund Executive Summary",
  "Legal Liability Risk Scorer", "Use-of-Force Executive Alert", "Civil Rights Lawsuit Predictor",
  "Judicial Backlog Overview AI", "Forensic Lab Bottleneck Alert", "Smart City Integration Scorer",
  "Zero-Trust Compliance Index", "Department Transparency Scorer", "Citizen Grievance Resolution Index",
  "Right-to-Information Audit View", "Social Media Viral Alert Bot", "Fake News Impact Scorer AI",
  "Dark Web Threat Executive View", "DGP Morning Briefing Bot", "AI Strategic Roadmap Planner"
];

const executiveModules = [
  {
    title: "Leadership Briefings",
    icon: <Presentation size={20} />,
    items: ["CM/DGP Daily Briefs", "Press Conference Prep", "High-Profile Case Updates", "Public Approval Scoring"]
  },
  {
    title: "Strategic Readiness",
    icon: <Activity size={20} />,
    items: ["Force Readiness Index", "Weapons Stockpile Status", "Election Security Readiness", "Disaster Impact Scoring"]
  },
  {
    title: "Macro-Threat Intelligence",
    icon: <ShieldAlert size={20} />,
    items: ["State-wide Crime Heatmaps", "Social Unrest Prediction", "Interpol/Global Alerts", "Cyber-Threat Summaries"]
  },
  {
    title: "Financial & HR Health",
    icon: <PieChart size={20} />,
    items: ["Budget Utilization", "Officer Morale Index", "Legal Liability Risks", "Fleet Availability"]
  },
  {
    title: "Public & Media Pulse",
    icon: <Eye size={20} />,
    items: ["Media Sentiment Tracking", "Fake News Impact", "Viral Social Media Alerts", "Transparency Scoring"]
  }
];

const aiFeatures = [
  "AI Automated CM/DGP Briefing Generation", "AI Macro-Economic Crime Prediction", "AI Social Unrest Extrapolation",
  "AI Live Media Sentiment Analysis", "AI Legal Liability Risk Scoring", "AI Crisis Scenario Simulation"
];

const databases = [
  "Executive_Briefing_Logs", "Macro_Threat_Intelligence", "Public_Sentiment_Feeds", "High_Profile_Cases", 
  "State_Readiness_Metrics", "Global_Terror_Alerts", "Financial_Health_Ledgers", "Legal_Liability_DB"
];

const dashboards = [
  "DGP Omni-View Dashboard", "Chief Minister Live Briefing", "State-wide Threat Matrix", 
  "Media & Public Pulse Board", "Strategic Resource Allocator", "Crisis Simulation War-Table"
];

const apis = [
  "Home Ministry Sync APIs", "News/Social Media Firehose", "State Financial Portal Sync", 
  "Interpol/CBI Alert Webhooks", "Smart City Master APIs", "Weather & Disaster Feeds"
];

const reports = [
  "DGP Morning Briefing PDF/Audio", "Weekly State Threat Index", "Public Approval & Sentiment Log", 
  "Quarterly Strategic Readiness", "High-Profile Case Summary", "Media Impact Report"
];

const security = [
  "Biometric Executive Access", "Retina Scan for CM Briefs", "Air-Gapped Tablet Delivery", 
  "Self-Destructing Digital Briefs", "Quantum-Safe Encryption", "Zero-Knowledge Archiving"
];

const futureScope = [
  "Holographic Briefing Rooms", "AI Predictive Geo-Politics", "Brain-Computer Interface for DGP",
  "Real-Time AGI Strategic Advice", "Fully Autonomous Resource Allocation", "Virtual Crisis War-Gaming"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Executive Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Leadership Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Executive Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ExecutiveDashboardDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <LayoutDashboard className="inline-icon" size={28} /> AI Executive Dashboard
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Executive Dashboard</strong> is the top-tier omni-view designed exclusively for the DGP, Chief Minister, and senior leadership. It abstracts away the complex operational data and provides a macro-level, strategic view of the state’s security posture, financial health, public sentiment, and force readiness.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Presentation className="inline-icon" color="#3b82f6" /> Automated Leadership Briefings</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Every morning, the AI compiles a customized 5-minute briefing (audio or text) for the DGP, summarizing overnight critical incidents, media sentiment, and VIP movements.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> State-wide Readiness Index</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides a live 1-100 score on the police force's readiness based on available manpower, weapon stockpiles, and fleet health to handle a state-wide crisis.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Eye className="inline-icon" color="#f59e0b" /> Media & Sentiment Pulse</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks live social media trends, news broadcasts, and viral fake news to gauge public sentiment towards the police department and alert leadership of brewing PR crises.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Macro-Threat Matrix</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Aggregates intelligence from Interpol, cyber-defense grids, and border outposts to give leadership a high-level view of long-term strategic threats.</p>
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
            {executiveModules.map((mod, i) => (
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
            <LayoutDashboard size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI EXECUTIVE <span>DASHBOARD</span></h1>
            <p className="cyber-subtitle">DGP Master Overview & Strategic Leadership Intelligence</p>
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

export default ExecutiveDashboardDetailed;
