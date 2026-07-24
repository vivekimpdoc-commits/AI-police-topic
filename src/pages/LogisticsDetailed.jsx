import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Truck, PackageOpen, Crosshair
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Fleet Allocation AI", "Weapon Tracking Bot", "Predictive Maintenance Agent", 
  "Fuel Consumption Analyzer", "Ammunition Expiry Tracker", "Drone Asset Manager", 
  "Uniform & Gear Distributor", "Route Fuel Optimizer", "Armory Security Sentinel",
  "Riot Gear Stock Predictor", "Radio Network Diagnostic Bot"
];

const logisticsModules = [
  {
    title: "AI Vehicle Fleet Management",
    icon: <Truck size={20} />,
    items: ["PRV Predictive Maintenance", "Fuel Theft Detection", "GPS Fleet Tracking", "Accident & Repair Logging"]
  },
  {
    title: "Smart Armory & Weapons",
    icon: <Crosshair size={20} />,
    items: ["RFID Gun Tracking", "Ammunition Usage Audit", "Biometric Armory Access", "Expiry/Rust Prediction"]
  },
  {
    title: "Asset & Inventory Control",
    icon: <PackageOpen size={20} />,
    items: ["Drone Fleet Inventory", "Riot Gear Auto-restock", "Uniform Issue Ledger", "Barcode/RFID Scanning"]
  },
  {
    title: "Communication Equipments",
    icon: <Network size={20} />,
    items: ["VHF/UHF Radio Allocation", "Battery Life Degradation Prediction", "Body-Cam Storage Sync", "Lost Device Bricking"]
  },
  {
    title: "Resource Allocation AI",
    icon: <Activity size={20} />,
    items: ["Event-based Resource Prediction", "Dynamic Fleet Re-routing", "Inter-District Equipment Transfer", "Budget Burn-rate Analytics"]
  }
];

const aiFeatures = [
  "AI Time-Series Maintenance Forecasting", "AI Fuel Anomaly Detection (Isolation Forest)", "AI RFID Spatial Tracking",
  "AI Supply Chain Optimization", "AI Automated Budgeting Algorithms", "AI Biometric Authentication Sync",
  "AI Weather-Based Gear Recommendation", "AI Edge Analytics for Fleet Telematics"
];

const databases = [
  "Vehicle_Registry_DB", "Weapon_RFID_Logs", "Ammunition_Audit_Ledger", "Asset_Barcodes", "Fuel_Consumption_Records", 
  "Repair_And_Maintenance_Logs", "Radio_Device_Allocations", "Officer_Uniform_Sizes", "Drone_Telemetry_Vault", "Armory_Access_Logs"
];

const dashboards = [
  "Live PRV Fleet Status", "Armory Weapon Inventory", "Predictive Maintenance Alerts", 
  "Fuel Efficiency vs Theft", "Riot Gear Stock Level", "Body-Cam Status Board"
];

const apis = [
  "Automotive Telematics (OBD2) APIs", "RFID Reader Integrations", "Fuel Card (HPCL/IOCL) Sync", "ERP System Hooks",
  "CCTNS Asset Module APIs", "Radio Network Diagnostic APIs"
];

const reports = [
  "Monthly Fleet Operations Cost", "Ammunition Expenditure Audit", "Lost & Damaged Asset Report", 
  "Vehicle Downtime Analysis", "Fuel Theft & Anomaly Flagging", "Armory Compliance Certificate"
];

const security = [
  "Geo-Fenced Asset Alerts", "Biometric + RFID 2FA for Weapons", "Remote Radio Bricking", 
  "Tamper-Proof OBD2 Sensors", "Air-Gapped Armory Networks", 
  "Strict Access Auditing", "Immutable Inventory Hashes", "Encrypted Drone Telemetry"
];

const futureScope = [
  "Autonomous PRV Refueling", "Smart Guns (Biometric Firing)", "Nanotech Self-Repairing Armor",
  "Predictive 3D Printing of Spares", "Drone-based Asset Delivery", "Quantum Resource Allocation"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Logistics Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Resource Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Logistics Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const LogisticsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <PackageOpen className="inline-icon" size={28} /> AI Resources & Logistics
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Resources & Logistics</strong> digitizes the backbone of the police force. From tracking every single bullet via RFID and predicting when a patrol car will break down, to catching fuel thieves, it ensures the department operates at maximum efficiency.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Truck className="inline-icon" color="#3b82f6" /> AI Fleet Management</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors real-time OBD2 sensor data from patrol vehicles. Predicts engine failures before they happen and flags suspicious fuel drops (theft) using anomaly detection algorithms.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Crosshair className="inline-icon" color="#10b981" /> Smart Armory & Weapons</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Every weapon and ammunition box is tagged with RFID. An officer must use biometric auth to check out a gun. The AI tracks ammunition expenditure and alerts if guns aren't returned post-shift.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Comms & Body-Cam Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks the assignment of expensive VHF radios and body-worn cameras. Automatically predicts battery degradation and schedules replacements.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Event Resource Prediction</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Planning for a major election? The AI calculates exactly how many barricades, tear gas shells, drones, and transport buses you need based on historical data.</p>
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
            {logisticsModules.map((mod, i) => (
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
            <PackageOpen size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI RESOURCES <span>& LOGISTICS</span></h1>
            <p className="cyber-subtitle">Smart Armory, Predictive Fleet Maintenance & Asset Tracking</p>
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

export default LogisticsDetailed;
