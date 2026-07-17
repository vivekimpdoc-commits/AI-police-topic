import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Server, Radio, Video
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "CCTV Health Auto-Healer", "Radio Tower Power Optimizer", "Data Center Cooling AI", 
  "Bandwidth Allocation Bot", "Mobile Command Router AI", "Network Anomaly Detector", 
  "Equipment Calibration Tracker", "Uptime Prediction Model", "Ransomware Air-gapper AI",
  "Frequency Jamming Analyzer", "Cable Fault Locator", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const techModules = [
  {
    title: "Police Data Center & Servers",
    icon: <Server size={20} />,
    items: ["AI Server Load Balancing", "Predictive Cooling/Thermal Maps", "Automated Database Failovers", "Storage Degeneration Alerts"]
  },
  {
    title: "Telecom & Radio Towers",
    icon: <Radio size={20} />,
    items: ["Repeater Station Health", "Remote Battery Backup Monitor", "Spectrum Usage Optimization", "Tower Structural Integrity (Drone Sync)"]
  },
  {
    title: "CCTV & Equipment Health",
    icon: <Video size={20} />,
    items: ["Camera Lens Blur Detection", "Network Switch Port Status", "PTZ Motor Failure Prediction", "Vandalism Detection"]
  },
  {
    title: "Mobile Command Vehicles",
    icon: <Activity size={20} />,
    items: ["Satellite Uplink Status", "On-board Power Generator Tracking", "Mobile Cell-Tower (COW) Range", "Live Video Streaming Health"]
  },
  {
    title: "Network Security & Uptime",
    icon: <Network size={20} />,
    items: ["DDoS Mitigation AI", "Intranet Bandwidth Throttling", "Unauthorized Node Isolation", "Zero-Day Vulnerability Patching"]
  }
];

const aiFeatures = [
  "AI Predictive Hardware Failure (SMART data)", "AI Automated Root Cause Analysis", "AI Dynamic Video Bitrate Encoding",
  "AI Thermal Load Forecasting", "AI Software-Defined Networking (SDN)", "AI Ping/Latency Optimization",
  "AI Intrusion Detection System (IDS)", "AI Encrypted Payload Inspection"
];

const databases = [
  "DataCenter_Telemetry_DB", "CCTV_Health_Ledger", "Radio_Tower_Metrics", "Command_Vehicle_Logs", "Network_Topology_Graph", 
  "Hardware_Asset_Registry", "Bandwidth_Usage_Stats", "Incident_Response_Vault", "ISP_Outage_History", "Configuration_Backups"
];

const dashboards = [
  "Data Center Thermal Map", "State-wide CCTV Uptime", "Radio Tower Battery Status", 
  "Mobile Command Fleet Tracking", "Network Threat Radar", "Hardware Lifecycle Matrix"
];

const apis = [
  "State Wide Area Network (SWAN)", "National Informatics Centre (NIC)", "ISP Backbone Monitoring", "Cisco/Juniper SNMP Traps",
  "Cloud Provider (AWS/Azure) Sync", "VMS (Video Management System) APIs"
];

const reports = [
  "Monthly System Uptime (99.99%)", "Hardware Replacement Forecast", "Bandwidth Utilization Audit", 
  "Cyber Attack Mitigation Log", "CCTV Blind-Spot Analysis", "Data Center PUE (Power Usage Effectiveness)"
];

const security = [
  "Air-Gapped Core Servers", "Automated Ransomware Isolation", "Physical Biometric Data Center Entry", 
  "Deep Packet Inspection (DPI)", "Hardware Root of Trust", 
  "Multi-Path Redundancy", "Strict Port/MAC Binding", "Automated Config Rollbacks"
];

const futureScope = [
  "Underwater Server Pods", "Quantum Internet Nodes", "AI Self-Healing Fiber Networks",
  "Holographic Network Topology", "Satellite-based Edge Computing", "Nano-bot Hardware Repair"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Tech Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Tech Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'NOC Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const TechServicesDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Server className="inline-icon" size={28} /> AI Police Technical Services
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Police Technical Services</strong> manages the critical IT backbone. From monitoring the cooling of massive data centers to predicting when a remote radio tower's battery will fail, this AI ensures the police network operates at 99.99% uptime.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Server className="inline-icon" color="#3b82f6" /> Data Center & Servers</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuously monitors server racks for thermal anomalies and CPU loads. Automatically shifts database workloads to backup servers before a crash occurs.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Video className="inline-icon" color="#10b981" /> CCTV Health Monitoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of manual checks, AI pings every city CCTV daily. It detects if a camera feed is blocked by a tree branch, intentionally moved, or suffering from network latency.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Radio className="inline-icon" color="#f59e0b" /> Radio Towers & Telecom</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors the state-wide network of VHF/UHF repeater stations. Analyzes backup generator fuel levels and automatically dispatches technical teams before a tower goes dark.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Network Operations Center (NOC)</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Acts as a fully autonomous NOC. Blocks DDoS attacks on police portals in real-time and dynamically reroutes bandwidth to Mobile Command Vehicles during major riots or VIP events.</p>
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
            <h1 className="cyber-title">TECHNICAL <span>SERVICES</span></h1>
            <p className="cyber-subtitle">NOC, Data Center Optimization & CCTV Telemetry</p>
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

export default TechServicesDetailed;
