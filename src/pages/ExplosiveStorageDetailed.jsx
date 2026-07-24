import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Crosshair, Package, Fingerprint, Radio, RotateCcw, Box, Wrench, Users, Stethoscope, Target, Clock, Droplet, ClipboardCheck, Scan, UserCheck, RefreshCw, Truck, Wind, Zap, AlertTriangle, Share2, Briefcase, Hourglass, Thermometer, AlertOctagon, Maximize, Archive, Siren, Wifi, Scale, Key, Video
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = ["Vibration Alert AI","Thermal Signature Bot","Air-Gapped Vault Sentinel","Chemical Degeneration AI","Detonator Isolation Tracker","Seismic Anomaly Detector","Anti-Static Environment AI","Confiscated Ordnance Auditor","Blast Radius Modeler","Evacuation Protocol Bot","Electromagnetic Pulse (EMP) Monitor"];
const aiFeatures = ["AI Seismic & Vibration Analysis","Thermal/Infrared Anomaly Detection","Air-Gapped Security Architecture","Strict Detonator/Charge Isolation Enforcer","Predictive Blast Radius Modeling","Anti-Static Humidity Control","Automated Depot Lockdown","Confiscated IED Tracking"];
const databases = ["Explosive_Inventory_Vault","Seismic_Vibration_Telemetry","Thermal_Imaging_Logs","Detonator_Isolation_DB","Confiscated_IED_Registry","Blast_Radius_Simulations","AntiStatic_Climate_DB","Vault_Access_Ledger","Degeneration_Chemistry_Models","Evacuation_Routes"];
const dashboards = ["Vault Seismic Health","Thermal Anomaly Alerts","Isolation Protocol Status","Confiscated Explosives Queue","Anti-Static Climate","Blast Radius Projections"];
const apis = ["Seismic/Vibration IoT","Thermal CCTV Cameras","Bomb Disposal Squad (BDS) Dispatch","Depot HVAC (Anti-Static)","National Ordnance DB","Emergency Siren Systems"];
const reports = ["Monthly Seismic Stability Audit","Thermal Fluctuation Logs","Isolation Compliance Report","Confiscated IED Disposal Certificates","Vault Security Penetration Test","Climate Control Efficacy"];
const security = ["100% Air-Gapped Local Networks","EMP-Shielded Architecture","Multi-Factor Biometrics + Weight Sensors","Blockchain Confiscation Ledger","Automated Foam Suppression Integration","CCTV Object/Motion Recognition","Strict Radio Silence Zones","Dual-Key Encryption"];
const futureScope = ["Quantum Sensor Detection","Robotic Bomb Handlers","Laser-Cooling Storage Pods","AI Molecular Analyzers","Drone-based Evacuation Over-watch","Subterranean Mag-Lev Storage"];

const modules = [
  { title: "Seismic & Thermal", icon: <Activity size={20} />, items: ["Vibration Alerts","Thermal Imaging","Anomaly Detection","Blast Modeling"] },
  { title: "Isolation Protocols", icon: <Maximize size={20} />, items: ["Detonator Separation","Anti-Static Climate","Radio Silence","Charge Tracking"] },
  { title: "Confiscated Ordnance", icon: <Archive size={20} />, items: ["IED Registry","Safe Disposal","BDS Dispatch","Evidence Logging"] },
  { title: "Air-Gapped Security", icon: <Shield size={20} />, items: ["Offline Networks","Biometric Weight","EMP Shielding","CCTV Integration"] },
  { title: "Emergency Response", icon: <Siren size={20} />, items: ["Automated Lockdown","Evacuation Routing","Foam Suppression","Siren Broadcast"] }
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'AI Agents', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Core Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ExplosiveStorageDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Network className="inline-icon" size={28} /> AI EXPLOSIVE STORAGE
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI EXPLOSIVE STORAGE</strong> is the highest-security module for ordnance depots. Managing C4, detonators, and confiscated explosives, the AI uses vibration sensors, thermal imaging, and air-gapped networks to prevent catastrophic accidents or theft.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              {modules.slice(0,4).map((mod, i) => (
                <div key={i} className="panel" style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>{mod.icon} {mod.title}</h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Advanced AI algorithms and neural networks power the {mod.title.toLowerCase()} systems, ensuring highly precise and real-time operational efficiency.</p>
                </div>
              ))}
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
            {modules.map((mod, i) => (
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
            <Network size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">EXPLOSIVE <span>STORAGE</span></h1>
            <p className="cyber-subtitle">Air-Gapped Vault Sensors & Vibration Alerts</p>
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

export default ExplosiveStorageDetailed;
