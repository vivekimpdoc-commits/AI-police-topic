import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Wrench, Droplet, Zap
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Utilities Monitor AI", "Water Quality Analyst", "Power Grid Predictor", 
  "Waste Management Bot", "Plumbing Diagnostics AI", "Smart Meter Reader", 
  "Resource Efficiency Bot", "Sewer Line Sentinel", "Energy Auditor AI"
];

const utilityModules = [
  {
    title: "Water & Sanitation",
    icon: <Droplet size={20} />,
    items: ["AI Drinking Water Quality Compliance","AI Sewer Line Maintenance","AI Rainwater Drain Inspection"]
  },
  {
    title: "Power & Electrical",
    icon: <Zap size={20} />,
    items: ["Uninterrupted Power Ops", "Solar Grid Integration", "Electrical Load Balancing AI"]
  },
  {
    title: "Maintenance & Fixes",
    icon: <Wrench size={20} />,
    items: ["Automated Utility Repair Ticketing", "HVAC Lifecycle Monitor", "Facilities Management Sync"]
  },
  {
    title: "Resource Auditing",
    icon: <FileText size={20} />,
    items: ["Utility Expense Analyzer", "Green Audit Readiness", "Wastage Detection Alerts"]
  }
];

const aiFeatures = [
  "Predictive Equipment Failure", "Anomaly Detection in Water Flow", "Automated Load Shedding",
  "Smart HVAC Optimization", "Real-Time Utility Usage Analytics", "Carbon Credit Tracking"
];

const databases = [
  "Utility_Consumption_Logs", "Maintenance_Ticket_DB", "Water_Quality_Metrics", 
  "Power_Grid_Stats", "Green_Energy_Records"
];

const apis = [
  "Municipal Water Board Sync", "State Electricity Grid API", "Smart Meter IoT Gateway", 
  "Weather APIs (for Solar/HVAC)", "Public Works Dept Hook"
];

const dashboards = [
  "Live Utility Dash", "Energy Expense Map", "Water Quality Index", 
  "Maintenance SLAs"
];

const reports = [
  "Monthly Utility Consumption Audit", "Renewable Energy ROI", "Plumbing/Electrical Faults",
  "Facility Health Scorecard"
];

const security = [
  "IoT Network Sandboxing", "Encrypted Smart Meter Data", "Failover Grid Protocols",
  "Unauthorized Tap Detection"
];

const futureScope = [
  "Fully Autonomous Utility Grids", "AI Robot Plumbers/Electricians", "Zero-Waste Closed Loop Systems",
  "Blockchain Utility Trading"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Utility Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Systems Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceUtilities96Detailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Wrench className="inline-icon" size={28} /> AI Police Utilities Management
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Utilities Module</strong> transforms static buildings into smart, self-regulating facilities. Using IoT and AI, it monitors drinking water quality, balances electrical grids, and predicts plumbing or HVAC failures before they disrupt critical police operations.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Power/Water Monitor</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Auto</div>
                <div className="stat-label">Repair Ticketing</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Eco</div>
                <div className="stat-label">Green Optimization</div>
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
            {utilityModules.map((mod, i) => (
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
            <Wrench size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>UTILITIES</span></h1>
            <p className="cyber-subtitle">Smart Grids, Plumbing AI & Eco Facilities</p>
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

export default PoliceUtilities96Detailed;
