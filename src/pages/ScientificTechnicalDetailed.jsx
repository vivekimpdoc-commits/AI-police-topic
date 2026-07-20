import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Zap, Wifi
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Drone Fleet Manager AI", "IoT Device Monitor", "Satellite Comms Coordinator", 
  "Edge AI Deployer", "Certificate Lifecycle Bot", "Sensor Calibrator AI", 
  "Network Coverage Analyst", "Robot Register Bot", "Power Backup Monitor",
  "Secure Hardware Auditor", "Digital Twin Modeler", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const techModules = [
  {
    title: "Drone & Robot Fleet",
    icon: <Zap size={20} />,
    items: ["Drone Fleet Maintenance AI", "Robot Equipment Register", "Mission Payload Tracker", "Autonomous Vehicle Registry"]
  },
  {
    title: "IoT & Sensor Networks",
    icon: <Wifi size={20} />,
    items: ["IoT Device Management", "Sensor Calibration Monitoring", "Edge Device Health Dashboard", "Smart City Sensor Sync"]
  },
  {
    title: "Communications",
    icon: <Network size={20} />,
    items: ["Satellite Comms Coordination", "Mobile Network Coverage Assessment", "Radio Frequency Management", "Encrypted Mesh Network"]
  },
  {
    title: "Security & Certification",
    icon: <Shield size={20} />,
    items: ["Digital Certificate Lifecycle", "Secure Hardware Inventory", "Emergency Power Monitoring", "Cryptographic Key Management"]
  }
];

const aiFeatures = [
  "AI Predictive Maintenance for Police Drones (Battery life, Rotor health)", "AI Coverage Optimization for CCTV and IoT Sensor Placement", "AI Automated Management of SSL/TLS Certificate Renewals",
  "AI Edge Computing Deployment for Remote Police Posts", "AI Monitoring of Satellite Bandwidth Usage during Operations", "AI Detection of Rogue IoT Devices on Police Networks",
  "AI Power Failure Prediction for Critical Communication Towers", "AI Digital Twin Simulation of Communication Network Failures"
];

const databases = [
  "Drone_Fleet_Registry", "IoT_Device_Inventory", "Satellite_Comms_Log", "Edge_Device_Health", "Digital_Certs_Ledger", 
  "Sensor_Calibration_DB", "Network_Coverage_Map", "Hardware_Audit_Trail"
];

const dashboards = [
  "Drone Fleet Status Board", "IoT Network Health Map", "Satellite BW Utilization", 
  "Certificate Expiry Alerts", "Edge Device Uptime", "Power Backup Status"
];

const apis = [
  "DGCA (Drone Regulatory Authority) API", "ISRO Satellite Services API", "Telecom Regulatory Authority (TRAI)", "IoT Platform (AWS IoT/Azure IoT)",
  "CERT-In (Cyber Emergency Response)", "DigiLocker (Device Certificates)"
];

const reports = [
  "Quarterly Drone Airworthiness Report", "IoT Device Security Audit", "Network Coverage Gap Analysis", 
  "Certificate Lifecycle Status', 'Edge Deployment Performance", "Hardware Asset Verification"
];

const security = [
  "Air-gapped Networks for Classified Drone Ops", "Hardware Security Modules (HSM) for Key Storage", "Zero-Trust IoT Network Architecture", 
  "Anti-spoofing for GPS on Police Drones", "Encrypted Firmware Updates for IoT Devices", 
  "FIPS 140-2 Certified Cryptographic Modules', 'Regular Penetration Testing of OT Networks", "Physical Anti-tamper Seals on Hardware"
];

const futureScope = [
  "Fully Autonomous AI Drone Swarms for Crowd Surveillance", "Quantum Key Distribution for Police Communications", "Neural Interface for Drone Control",
  "AI-powered Satellite Image Analysis in Real-time", "6G Network Integration for Ultra-low Latency", "Digital Twin of Entire State Police Communication Network"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Tech Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Tech Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Tech Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ScientificTechnicalDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Zap className="inline-icon" size={28} /> AI Scientific & Technical Unit
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Scientific & Technical</strong> is the technology command center of the police force. It manages the entire lifecycle of advanced assets — from drone fleets and robot units to satellite communication nodes and IoT sensor networks — ensuring every device is operational, calibrated, and secure.
            </p>
            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Zap className="inline-icon" color="#3b82f6" /> AI Drone Predictive Maintenance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI analyzes motor vibration data, battery discharge cycles, and flight hours to predict when a drone component will fail, scheduling maintenance proactively to ensure 100% fleet readiness for critical operations.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Wifi className="inline-icon" color="#10b981" /> IoT Network Security</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI continuously scans the police IoT network for unauthorized or rogue devices. Using behavioral analysis, it detects abnormal data transmission patterns from compromised sensors and quarantines them instantly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Satellite Comms Management</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>During large operations where terrestrial networks are overwhelmed, AI dynamically allocates satellite bandwidth to prioritize the most critical communication links (HQ to Field Commander vs. logistics).</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Certificate Lifecycle AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI tracks the expiry dates of hundreds of SSL/TLS digital certificates used to secure police portals and APIs. It automates renewals 30 days before expiry, preventing the security failures caused by expired certificates.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan">
                <Bot className="card-icon" /><h4>{expert}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {techModules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">{mod.icon}<h3>{mod.title}</h3></div>
                <div className="module-tags">{mod.items.map((item, j) => <span key={j} className="module-tag">{item}</span>)}</div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid">
            {aiFeatures.map((feat, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple">
                <Cpu className="card-icon" /><h4>{feat}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel"><h3><Database className="inline-icon" color="#06b6d4" /> Database Tables</h3><div className="tag-cloud">{databases.map((db, i) => <span key={i} className="tech-tag">{db}</span>)}</div></div>
              <div className="panel"><h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3><div className="tag-cloud">{apis.map((api, i) => <span key={i} className="tech-tag tech-tag-alt">{api}</span>)}</div></div>
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel"><h3><LayoutDashboard className="inline-icon" color="#3b82f6" /> Dashboards</h3><ul className="premium-list">{dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>)}</ul></div>
              <div className="panel"><h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3><ul className="premium-list">{reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>)}</ul></div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel highlight-red"><h3><ShieldAlert className="inline-icon" color="#ef4444" /> Security Protocols</h3><ul className="premium-list">{security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}</ul></div>
              <div className="panel highlight-green"><h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3><ul className="premium-list">{futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}</ul></div>
            </div>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="hrms-detailed-page">
      <div className="hrms-bg-fx"></div>
      <div className="hrms-grid-overlay"></div>
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn"><ArrowLeft size={20} /> BACK TO MODULES</button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><Zap size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">SCIENTIFIC & <span>TECHNICAL</span></h1><p className="cyber-subtitle">Drone Fleets, IoT Networks & Satellite Comms</p></div>
        </div>
      </header>
      <div className="hrms-layout">
        <nav className="hrms-sidebar">
          {tabs.map(tab => (
            <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.icon} {tab.label}</button>
          ))}
        </nav>
        <main className="hrms-content-area">
          <AnimatePresence mode="wait"><div key={activeTab}>{renderContent()}</div></AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ScientificTechnicalDetailed;
