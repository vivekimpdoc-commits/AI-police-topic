import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Building, MapPin, Hammer
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Structural Analyst AI", "Green Building Evaluator", "Seismic Readiness Bot", 
  "Blueprint Generator", "Construction Cost Estimator", "Maintenance Predictor", 
  "Land Record Authenticator", "Fire Safety Auditor", "Utilities Sync AI"
];

const infraModules = [
  {
    title: "Structural Health & Safety",
    icon: <Activity size={20} />,
    items: ["AI Building Structural Health Index", "Earthquake Safety Inspection", "Fire Hazard Prediction"]
  },
  {
    title: "Construction & Expansion",
    icon: <Hammer size={20} />,
    items: ["AI Earthquake Safety Inspection", "Construction Progress Tracker", "Material Cost Estimator"]
  },
  {
    title: "Land & Real Estate",
    icon: <MapPin size={20} />,
    items: ["AI Fire Exit Readiness Monitor", "Title Deed Verification DB", "Geo-Fencing Police Lands"]
  },
  {
    title: "Smart Maintenance",
    icon: <Building size={20} />,
    items: ["Predictive Plumbing/Electrical", "Solar Panel Efficiency Monitor", "Campus Waste Management"]
  }
];

const aiFeatures = [
  "IoT-based Structural Strain Detection", "Drone-assisted Construction Auditing", "Satellite Encroachment Detection",
  "Automated Energy Efficiency Scoring", "Predictive Lifecycle Maintenance", "BIM (Building Info Modeling) Sync"
];

const databases = [
  "Police_Land_Registry", "Structural_Health_Logs", "Blueprint_Archives", 
  "Construction_Contracts", "Facility_Maintenance_DB"
];

const apis = [
  "Municipal Corporation API", "PWD (Public Works) Sync Hook", "Satellite Imaging (ISRO)", 
  "Smart City IoT Gateway", "Disaster Management APIs"
];

const dashboards = [
  "Live Structural Health Map", "Encroachment Alerts", "Construction Budget Tracker", 
  "Green Campus Index"
];

const reports = [
  "Annual Facility Audit", "Seismic Vulnerability Report", "Land Asset Valuation",
  "Maintenance Cost Savings"
];

const security = [
  "Encrypted Land Deed Storage", "Drone Jamming at Sensitive Sites", "Strict RBAC for Blueprint Access",
  "Tamper-proof IoT Sensor Networks"
];

const futureScope = [
  "3D Printed Outposts", "Self-Healing Concrete Tech", "Digital Twin for every Station",
  "Zero-Carbon Police HQs"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Infra Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Engineering Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceInfrastructure95Detailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Building className="inline-icon" size={28} /> AI Police Infrastructure Engineering
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Infrastructure Engineering</strong> manages the vast physical footprint of the police force. Using satellite imagery, IoT sensors, and advanced civil engineering AI, it tracks structural health, predicts maintenance needs, and protects police lands from encroachment.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">IoT</div>
                <div className="stat-label">Structural Sensors</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Zero</div>
                <div className="stat-label">Encroachment</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">AI</div>
                <div className="stat-label">Blueprint Gen</div>
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
            {infraModules.map((mod, i) => (
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
            <Building size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>INFRASTRUCTURE</span></h1>
            <p className="cyber-subtitle">Structural AI, Asset Mapping & Smart Facilities</p>
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

export default PoliceInfrastructure95Detailed;
