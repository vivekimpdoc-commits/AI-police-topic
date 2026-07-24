import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Server, MonitorSmartphone
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "License Tracker Bot", "Software Asset AI", "Hardware Lifecycle Predictor", 
  "Printer Fleet Optimizer", "UPS Power Monitor AI", "Server Room Climate Bot", 
  "Backup Verification AI", "IT Helpdesk NLP", "Password Policy Enforcer",
  "Device Inventory Sync", "Threat Surface Analyzer"
];

const techModules = [
  {
    title: "Server Room & Infrastructure",
    icon: <Server size={20} />,
    items: ["IoT Temperature/Humidity Sensors", "UPS Battery Health AI", "Automated Cooling Adjustments", "Physical Intrusion Alerts"]
  },
  {
    title: "Asset & Device Lifecycle",
    icon: <MonitorSmartphone size={20} />,
    items: ["Hardware Depreciation Tracking", "Barcode Device Inventory", "Printer Ink/Toner Alerts", "E-Waste Disposal Logs"]
  },
  {
    title: "Software & License Management",
    icon: <Database size={20} />,
    items: ["License Expiry Alarms", "Pirated Software Scans", "Enterprise App Utilization", "Cloud Subscription Costs"]
  },
  {
    title: "IT Helpdesk & Support",
    icon: <Activity size={20} />,
    items: ["AI Chatbot for T1 Tickets", "Automated Password Resets", "Network Outage Heatmaps", "SLA Breach Escalations"]
  },
  {
    title: "Data Backup & Compliance",
    icon: <Shield size={20} />,
    items: ["Automated Cloud Sync", "Backup Integrity Verification", "Ransomware Air-gapping", "Password Policy Audits"]
  }
];

const aiFeatures = [
  "AI Predictive Failure for Servers/UPS", "AI NLP Helpdesk Ticket Categorization", "AI Automated Software License Reconciliation",
  "AI Network Topology Mapping", "AI Anomaly Detection in Backup Sizes", "AI Power Consumption Optimization",
  "AI Rogue Device Detection on Police Wi-Fi", "AI Printer Fleet Maintenance Scoring"
];

const databases = [
  "Hardware_Inventory_DB", "Software_License_Ledger", "Server_Telemetry_Lake", "IT_Helpdesk_Tickets", "UPS_Battery_Logs", 
  "Backup_Verification_Hashes", "Network_Topology_Graph", "E-Waste_Manifests", "Password_Audit_Trails"
];

const dashboards = [
  "Live Data Center Health", "IT Helpdesk Pendency", "License Compliance Radar", 
  "Hardware Lifecycle Matrix", "Network Outage Map", "UPS & Power Telemetry"
];

const apis = [
  "SNMP Network Polling", "Cloud Service Provider Billing (AWS/Azure)", "Active Directory (AD) Sync", "IoT Environmental Sensors",
  "Zendesk/ServiceNow ITIL APIs", "MDM (Mobile Device Management) Gateway"
];

const reports = [
  "Monthly IT Uptime Report", "Software Asset ROI", "Server Room Climate Audit", 
  "Helpdesk Resolution SLA", "Hardware Depreciation Forecast", "Quarterly Backup Integrity Certificate"
];

const security = [
  "Zero Trust Network Access (ZTNA)", "MAC Address Whitelisting", "Air-Gapped Cold Backups", 
  "Automated Penetration Testing Scripts", "Multi-Factor Admin Logins", 
  "Faraday Cage for Critical Servers", "Encrypted SNMP v3", "Biometric Server Rack Locks"
];

const futureScope = [
  "Autonomous Network Self-Healing", "Quantum Resistant Cryptography Upgrades", "AI Holographic Network Visualizers",
  "Robotic Server Maintenance Arms", "Immersion Cooling Data Centers", "Predictive Cybersecurity Threat Hunting"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Tech Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Admin Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Tech Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const TechAdminDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Server className="inline-icon" size={28} /> AI Technical Administration
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Technical Administration</strong> is the IT backbone of the Police Force. It ensures 99.99% uptime by using AI to monitor server room climates, predict hardware failures, manage software licenses, and autonomously resolve tier-1 helpdesk tickets.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Server className="inline-icon" color="#3b82f6" /> Smart Server Rooms</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>IoT sensors monitor temperature and humidity. AI dynamically adjusts cooling and monitors UPS battery health, predicting power grid failures before servers go offline.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#10b981" /> Software & Licenses</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scans the network for unauthorized software installs. Automatically tracks enterprise license expiry dates and calculates utilization to optimize cloud and SaaS budgets.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MonitorSmartphone className="inline-icon" color="#f59e0b" /> Hardware Lifecycle</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks every PC, printer, and mobile device. AI predicts hardware death based on age and usage, automating procurement requests and managing e-waste disposal logs.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> AI Helpdesk</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>An NLP chatbot handles basic queries like password resets and printer connectivity, escalating only complex network issues to human IT engineers, drastically reducing SLA times.</p>
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
      
      {/* Header */}
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> BACK TO MODULES
        </button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper">
            <Server size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">TECHNICAL <span>ADMINISTRATION</span></h1>
            <p className="cyber-subtitle">Hardware Lifecycle, Server Telemetry & IT Helpdesk</p>
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

export default TechAdminDetailed;
