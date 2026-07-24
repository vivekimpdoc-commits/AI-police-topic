import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Crosshair, Package, Fingerprint, Radio, RotateCcw, Box, Wrench, Users, Stethoscope, Target, Clock, Droplet, ClipboardCheck, Scan, UserCheck, RefreshCw, Truck, Wind, Zap, AlertTriangle, Share2, Briefcase, Hourglass, Thermometer, AlertOctagon, Maximize, Archive, Siren, Wifi, Scale, Key, Video
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = ["Jamming Probability Modeler","Barrel Wear & Tear AI","Spring Tension Predictor","Maintenance Scheduler Bot","Spare Parts Procurement AI","Armourer Skill Matcher","Rust & Corrosion Forecaster","Recoil Spring Degradation AI","Weapon Lifecycle Analytics","Acoustic Fault Detection Bot","Firing Pin Integrity AI"];
const aiFeatures = ["AI Usage-Based Maintenance Alerts","Acoustic Analysis of Firing Mechanisms","Computer Vision Rust Detection","Automated Spare Parts Requisition","Predictive Jamming Algorithms","Armourer Digital Worklogs","Weapon End-of-Life Prediction","Environmental Wear Adjustments (Dust/Humidity)"];
const databases = ["Weapon_Maintenance_History","Round_Count_Ledger","Spare_Parts_Inventory","Armourer_Worklogs","Jamming_Incident_DB","Acoustic_Firing_Signatures","Corrosion_Telemetry","Weapon_Lifespan_Models","Cleaning_Solvent_Stock","Fault_Analytics_DB"];
const dashboards = ["Overdue Maintenance Alerts","Weapon Health Heatmap","Spare Parts Depletion","Jamming Incident Analytics","Armourer Efficiency Scores","End-of-Life Weapon Forecast"];
const apis = ["Quartermaster ERP","Firing Range Scoring Sync","Acoustic Range Sensors","Armourer Biometrics","Ordnance Factory Spares","State Police Equipment DB"];
const reports = ["Monthly Maintenance Compliance","High-Risk Weapon Jamming Report","Spare Parts Consumption","Armourer Productivity Audit","Weapon Replacement Forecast","Corrosion Impact Study"];
const security = ["Digital Armourer Sign-offs","Blockchain Maintenance Ledger","Part Serial Number Tracking","CCTV Bench Monitoring","Tool Crib Access Control","Encrypted Acoustic Data","Automated Disciplinary Flagging for Skipped Maintenance","Air-Gapped Diagnostics"];
const futureScope = ["Self-Cleaning Nano-Coatings","IoT Smart Rails","AI Robotic Armourers","Real-time Barrel Temp Sensors","3D Printed Spare Parts","Holographic Repair Guides"];

const modules = [
  { title: "Usage Tracking", icon: <Target size={20} />, items: ["Round Counting","Deployment Hours","Environmental Exposure","Recoil Logging"] },
  { title: "Predictive Maintenance", icon: <Wrench size={20} />, items: ["Jamming Forecast","Spring Wear","Barrel Cleaning","End-of-Life Alerts"] },
  { title: "Spare Parts Inventory", icon: <Box size={20} />, items: ["Auto-Requisition","Consumption Rates","Supplier Lead Times","Stock Alerts"] },
  { title: "Armourer Operations", icon: <Users size={20} />, items: ["Workload Balancing","Digital Worklogs","Skill Matching","Bench CCTV Sync"] },
  { title: "Diagnostics & Testing", icon: <Stethoscope size={20} />, items: ["Acoustic Signatures","Visual Rust Scans","Tension Testing","Firing Pin Checks"] }
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

const WeaponMaintenanceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Activity className="inline-icon" size={28} /> AI WEAPON MAINTENANCE
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI WEAPON MAINTENANCE</strong> ensures firearms never fail in the line of duty. By tracking the number of rounds fired, deployment conditions, and historical fault data, the AI predicts exactly when a weapon needs cleaning, spring replacement, or recalibration.
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
            <Activity size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">WEAPON <span>MAINTENANCE</span></h1>
            <p className="cyber-subtitle">Jamming Probability Modeler & Barrel Cleaning AI</p>
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

export default WeaponMaintenanceDetailed;
