import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Crosshair, Package, Fingerprint, Radio, RotateCcw, Box, Wrench, Users, Stethoscope, Target, Clock, Droplet, ClipboardCheck, Scan, UserCheck, RefreshCw, Truck, Wind, Zap, AlertTriangle, Share2, Briefcase, Hourglass, Thermometer, AlertOctagon, Maximize, Archive, Siren, Wifi, Scale, Key, Video
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = ["Sniper Scope Calibration AI","Radar Gun Tuner Bot","Breathalyzer Accuracy Tracker","Laser Sight Alignment AI","Ballistic Telemetry Modeler","Legal Compliance Auditor","Drift Degradation Predictor","Acoustic Sensor Calibrator","Optical Clarity Analyzer","Night-Vision Phosphor AI","Drone Gimbal Stabilizer"];
const aiFeatures = ["AI Predictive Sensor Drift Modeling","Automated Court-Defensible Calibration Logs","Sniper Ballistic Telemetry Sync","Optical Scanners for Night-Vision/Scopes","Radar Gun Doppler Frequency Checks","Breathalyzer Fuel-Cell Expiry Alerts","Automated Decommissioning of Out-of-Spec Gear","Integration with Metrology Labs"];
const databases = ["Calibration_Master_Ledger","Sensor_Drift_Telemetry","Sniper_Ballistic_Profiles","Radar_Frequency_Logs","Breathalyzer_FuelCell_DB","Legal_Compliance_Certificates","Optical_Clarity_Scans","NightVision_Phosphor_DB","Metrology_Lab_Results","Decommission_Archive"];
const dashboards = ["Overdue Calibration Alerts","Equipment Accuracy Scores","Sensor Drift Analytics","Sniper Scope Readiness","Legal Defensibility Index","Metrology Lab Pipeline"];
const apis = ["National Metrology Standards API","Court Evidence Management Sync","Optical Testing Rigs","Traffic Department Radar DB","Quartermaster ERP","Supplier Diagnostic Portals"];
const reports = ["Monthly Calibration Compliance","Court-Defensible Accuracy Certificates","Sensor Drift Degradation Study","Sniper Unit Ballistic Readiness","Breathalyzer Failure Rates","Supplier Defect Analytics"];
const security = ["Blockchain Immutable Certificates","Digital Metrologist Signatures","Tamper-Evident Digital Seals","Air-Gapped Testing Rigs","Encrypted Ballistic Profiles","Biometric Lab Access","Automated Evidence Flagging (Uncalibrated Use)","Strict Version Control"];
const futureScope = ["Self-Calibrating Smart Scopes","Quantum Doppler Radars","AI Optical Restoration","Cloud-based Ballistic Sync","Drone Laser Metrology","Neural-Linked Optics"];

const modules = [
  { title: "Precision Optics", icon: <Crosshair size={20} />, items: ["Sniper Scopes","Laser Alignment","Night-Vision Scans","Optical Clarity"] },
  { title: "Traffic & Sensors", icon: <Wifi size={20} />, items: ["Radar Doppler Tuning","Breathalyzer Cells","Acoustic Sensors","Drift Prediction"] },
  { title: "Legal Compliance", icon: <Scale size={20} />, items: ["Defensible Logs","Immutable Certificates","Evidence Flagging","Metrology Sync"] },
  { title: "Lifecycle & Diagnostics", icon: <Stethoscope size={20} />, items: ["Decommissioning","Supplier Defects","Automated Testing","Usage Telemetry"] },
  { title: "Advanced Ballistics", icon: <Target size={20} />, items: ["Telemetry Sync","Profile Matching","Drone Gimbals","Recoil Adjustments"] }
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

const EquipmentCalibrationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Cpu className="inline-icon" size={28} /> AI EQUIPMENT CALIBRATION
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI EQUIPMENT CALIBRATION</strong> manages the precision tuning of specialized gear. From sniper rifle scopes to traffic radar guns and breathalyzers, this AI ensures every piece of technical equipment is mathematically calibrated to legally defensible standards.
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
            <Cpu size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">EQUIPMENT <span>CALIBRATION</span></h1>
            <p className="cyber-subtitle">Sniper Scope AI, Radar Guns & Ballistic Telemetry</p>
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

export default EquipmentCalibrationDetailed;
