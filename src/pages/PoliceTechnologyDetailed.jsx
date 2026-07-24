import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Laptop, QrCode, Monitor
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Asset Tracker AI", "IT Support Bot", "Hardware Diagnostic AI", 
  "QR Code Generator AI", "Inventory Replenishment Bot", "Network Status Monitor", 
  "License Compliance AI", "Tech Deployment Bot", "Downtime Predictor AI"
];

const techModules = [
  {
    title: "Asset & Inventory Management",
    icon: <QrCode size={20} />,
    items: ["AI QR Asset Labeling", "AI Barcode Inventory", "Hardware Lifecycle Tracker"]
  },
  {
    title: "IT Support & Maintenance",
    icon: <Monitor size={20} />,
    items: ["AI Barcode Inventory", "Automated Issue Routing", "Remote Diagnostic AI"]
  },
  {
    title: "Deployment & Distribution",
    icon: <Laptop size={20} />,
    items: ["AI RFID Equipment Tracking", "Field Tech Deployment Map", "AI Hardware Replenishment"]
  },
  {
    title: "Network & Compliance",
    icon: <Network size={20} />,
    items: ["AI Network Uptime Monitor", "Software License Tracker", "Automated Tech Audit"]
  }
];

const aiFeatures = [
  "Predictive Hardware Failure Analysis", "Automated Ticket Resolution", "Real-time Asset Geolocating",
  "Smart License Renewal Alerts", "Network Anomaly Detection", "Seamless QR Auditing"
];

const databases = [
  "Tech_Asset_Registry", "IT_Support_Tickets", "Software_Licenses", 
  "Network_Status_Logs", "Hardware_Lifecycles"
];

const apis = [
  "ITSM Helpdesk API", "Network Monitoring Hook", "QR Generation Service", 
  "Vendor Warranty Sync", "Asset Tracking Gateway"
];

const dashboards = [
  "Live IT Asset Map", "Helpdesk SLA Monitor", "Hardware Health Overview", 
  "License Compliance Dashboard"
];

const reports = [
  "Monthly Tech Asset Audit", "IT Support Resolution Times", "Network Uptime Logs",
  "Hardware Depreciation Report"
];

const security = [
  "Zero-Trust Network Access", "End-to-End Asset Encryption", "Strict RBAC for IT Admins",
  "Automated Rogue Device Detection"
];

const futureScope = [
  "AR-based Hardware Repair Assist", "Autonomous Network Healing", "Blockchain Asset Tracking",
  "Predictive IT Budgeting"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'IT Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Tech Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceTechnologyDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Laptop className="inline-icon" size={28} /> AI Police Technology Overview
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Technology Module</strong> manages the entire lifecycle of IT assets, from laptops and radios to software licenses. It utilizes AI to predict hardware failures, automate helpdesk ticketing, and track physical assets using advanced QR/Barcode mechanisms.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Asset Visibility</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Auto</div>
                <div className="stat-label">Ticket Resolution</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Network Uptime</div>
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
            {techModules.map((mod, i) => (
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
            <Laptop size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>TECHNOLOGY</span></h1>
            <p className="cyber-subtitle">IT Asset Management, Helpdesk AI & Infrastructure</p>
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

export default PoliceTechnologyDetailed;
