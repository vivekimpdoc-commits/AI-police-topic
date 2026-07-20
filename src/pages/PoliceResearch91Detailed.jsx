import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, FlaskConical, Search, BookOpen
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Criminology AI", "Behavioral Analyst", "Global Crime Trend Bot", 
  "Research Grants Coordinator", "Data Scraper AI", "Literature Review Bot", 
  "Case Study Generator", "Policy Formulation AI", "Predictive Analytics Researcher"
];

const researchModules = [
  {
    title: "Crime Pattern Research",
    icon: <Search size={20} />,
    items: ["AI Crime Research Repository","AI Operational Lessons Learned Library","AI Research Grant Tracker"]
  },
  {
    title: "Operational Lessons",
    icon: <BookOpen size={20} />,
    items: ["AI Operational Lessons Learned Library", "Failed Ops Post-Mortem AI", "Success Case Study Generator"]
  },
  {
    title: "Policy & Strategy",
    icon: <FileText size={20} />,
    items: ["AI Policy Impact Simulator", "Draft Legislation Reviewer", "Global Police Doctrine DB"]
  },
  {
    title: "Academic Collaboration",
    icon: <FlaskConical size={20} />,
    items: ["University Research Portal", "Grant Allocation Manager", "Published Papers Archive"]
  }
];

const aiFeatures = [
  "Cross-border Crime Trend Prediction", "Automated Meta-Analysis of Studies", "NLP-based Case Extraction",
  "Policy Loophole Detection", "Sentiment Analysis of Public Reactions", "Data-driven Tactical Shifts"
];

const databases = [
  "Global_Crime_Literature", "Ops_Lessons_Learned", "Policy_Simulation_Logs", 
  "Academic_Grants_DB", "Criminology_Archives"
];

const apis = [
  "Interpol Knowledge Base Hook", "University Research Portals", "Govt Policy Gazettes", 
  "National Crime Bureau API", "Open Source Intelligence (OSINT)"
];

const dashboards = [
  "Live Research Pipeline", "Policy Impact Heatmap", "Academic Grant Utilization", 
  "Global Crime Trends"
];

const reports = [
  "Annual Police Research Digest", "Tactical Doctrine Updates", "Grant ROI Analysis",
  "Crime Correlation Studies"
];

const security = [
  "Anonymized Data for Academics", "Classified Ops Redaction AI", "Encrypted Sandbox for Simulation",
  "Strict NDAs for External Researchers"
];

const futureScope = [
  "Quantum Simulation of Crime Dynamics", "Neural-link for Rapid Learning", "AI Holographic Case Recreations",
  "Autonomous Research Agents"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Research Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Study Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceResearch91Detailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <FlaskConical className="inline-icon" size={28} /> AI Police Research Hub
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Research Module</strong> is the intellectual engine of the force. It bridges the gap between field operations and academic criminology. AI scans global crime trends, extracts lessons from past operations, and helps formulate data-driven policies and tactical doctrines.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">Global</div>
                <div className="stat-label">Crime Data Sync</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Auto</div>
                <div className="stat-label">Lessons Learned</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">AI</div>
                <div className="stat-label">Policy Sandbox</div>
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
            {researchModules.map((mod, i) => (
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
      
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> BACK TO MODULES
        </button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper">
            <FlaskConical size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>RESEARCH</span></h1>
            <p className="cyber-subtitle">Criminology AI, Policy Sandbox & Academic Sync</p>
          </div>
        </div>
      </header>

      <div className="hrms-layout">
        <aside className="hrms-sidebar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </aside>
        <main className="hrms-main-content scrollbar-hide">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default PoliceResearch91Detailed;
