import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Car, Map, Wrench
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Fleet GPS Tracker Bot", "Dashcam Anomaly Detector", "Predictive Maintenance AI", 
  "Fuel Efficiency Analyzer", "Driver Behavior Scorer", "Spare Parts Optimizer", 
  "Accident Damage Estimator", "Route Optimization Bot", "Lifecycle Planner AI",
  "Emergency Dispatch Router", "Service Scheduler Bot", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const vehicleModules = [
  {
    title: "GPS & Telemetry Tracking",
    icon: <Map size={20} />,
    items: ["Real-time Geo-fencing", "Speed Compliance Monitoring", "Idle Time Analytics", "Historical Route Playback"]
  },
  {
    title: "Dashcam & Video Monitoring",
    icon: <Activity size={20} />,
    items: ["Live Feed Streaming", "AI Accident Detection", "Driver Drowsiness Alerts", "Traffic Violation Recording"]
  },
  {
    title: "Maintenance & Repairs",
    icon: <Wrench size={20} />,
    items: ["Predictive Engine Failure Alerts", "Automated Service Scheduling", "Accident Repair Workflow", "Spare Parts Inventory"]
  },
  {
    title: "Fuel & Efficiency",
    icon: <PieChart size={20} />,
    items: ["Emergency Fuel Approval", "Mileage Drop Alerts", "Fuel Card Integration", "Carbon Footprint Tracking"]
  },
  {
    title: "Fleet Lifecycle Management",
    icon: <Car size={20} />,
    items: ["Vehicle Depreciation Scorer", "Replacement Planning", "Spare Vehicle Allocation", "Auction & Disposal Workflow"]
  }
];

const aiFeatures = [
  "AI Computer Vision for Dashcam Feeds", "AI Telemetry Pattern Recognition", "AI Driver Fatigue Detection Models",
  "AI Predictive Maintenance Algorithms", "AI Optimal Patrol Route Generation", "AI Damage Assessment from Photos",
  "AI Fuel Theft Anomaly Detection", "AI Fleet Lifecycle Forecasting"
];

const databases = [
  "GPS_Telemetry_Lake", "Dashcam_Video_Archive", "Vehicle_Health_Ledger", "Driver_Behavior_Scores", "Fuel_Consumption_Logs", 
  "Maintenance_Tickets", "Spare_Parts_Inventory", "Accident_Reports", "Fleet_Depreciation_Matrix"
];

const dashboards = [
  "Live Fleet Location Radar", "Driver Safety Leaderboard", "Predictive Maintenance Alerts", 
  "Fuel Efficiency Trends", "Active Breakdown Heatmap", "Vehicle Availability Matrix"
];

const apis = [
  "OBD-II Telemetry Streams", "Fuel Station Card Networks", "Traffic Density APIs", "Weather Forecast APIs",
  "Insurance Claim Gateways", "OEM Diagnostics APIs"
];

const reports = [
  "Monthly Fleet Operations Summary", "Driver Risk Profile Report", "Maintenance Cost Analysis", 
  "Fuel Consumption Audit", "Vehicle Lifecycle Status", "Accident & Incident Log"
];

const security = [
  "Encrypted GPS Telemetry Channels", "Tamper-Proof OBD Sensors", "Strict RBAC for Dashcam Feeds", 
  "Blockchain Audit for Fuel Approvals", "Biometric Ignition Interlocks", 
  "Geofenced Immobilization", "Anonymized Driver Data", "DDoS Protection on Video Streams"
];

const futureScope = [
  "Autonomous Patrol Vehicles", "Drone-Assisted Fleet Escorts", "V2X (Vehicle-to-Everything) Communication",
  "AI Holographic Dashboard Displays", "Zero-Emission Fleet Optimization", "Self-Healing Vehicle Diagnostics"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Fleet Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Vehicle Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Fleet Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceVehiclesDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Car className="inline-icon" size={28} /> AI Police Vehicles & Fleet Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Vehicles Management</strong> turns the entire police fleet into a connected, intelligent network. By ingesting live GPS telemetry, dashcam feeds, and OBD-II engine data, the AI ensures vehicles are always operational, drivers are safe, and response times are minimized.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#3b82f6" /> GPS & Telemetry</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Live tracking of all vehicles with intelligent geo-fencing. The AI automatically flags vehicles that leave their designated jurisdiction or exceed speed limits during non-emergencies.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Dashcam & Safety AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes inward-facing dashcam video to detect driver drowsiness or distraction, issuing real-time audio warnings. Outward cameras automatically log severe traffic violations.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Wrench className="inline-icon" color="#f59e0b" /> Predictive Maintenance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Reads engine diagnostic codes (OBD-II) to predict mechanical failures before they happen. Automatically schedules the vehicle for service and allocates a spare replacement.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><PieChart className="inline-icon" color="#ef4444" /> Fuel & Lifecycle</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references GPS mileage with fuel card transactions to detect anomalies or theft. The AI calculates vehicle depreciation to recommend optimal retirement and auction dates.</p>
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
            {vehicleModules.map((mod, i) => (
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
            <Car size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>VEHICLES</span></h1>
            <p className="cyber-subtitle">Fleet GPS, Predictive Maintenance & Dashcam AI</p>
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

export default PoliceVehiclesDetailed;
