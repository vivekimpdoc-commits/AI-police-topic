import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Car, Camera, AlertTriangle
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "ANPR Number Plate Bot", "Traffic Density Predictor", "Automated Challan Dispatcher", 
  "Hit & Run Trajectory AI", "Ambulance Green-Corridor AI", "Drunk Driving Camera AI", 
  "Pothole & Road Defect Scanner", "Toll Plaza Sync Agent", "Vehicle Registration Verifier",
  "VIP Convoy Router", "Helmet/Seatbelt Detection Bot"
];

const trafficModules = [
  {
    title: "AI ANPR & Challans",
    icon: <Camera size={20} />,
    items: ["High-speed Number Plate Recognition", "No-Helmet/Seatbelt Detection", "Red Light Violation Tracking", "Auto e-Challan SMS Dispatch"]
  },
  {
    title: "Smart Traffic Signals",
    icon: <Activity size={20} />,
    items: ["Adaptive Signal Timings", "Emergency Vehicle Preemption (Green Corridor)", "Gridlock Prevention AI", "Pedestrian Crossing Safety"]
  },
  {
    title: "Accident Analytics",
    icon: <AlertTriangle size={20} />,
    items: ["Black-spot (Accident Zone) Mapping", "Hit & Run Vehicle Tracing", "Weather-induced Crash Prediction", "Auto-alert to Nearest Hospital"]
  },
  {
    title: "Stolen Vehicle Tracking",
    icon: <Car size={20} />,
    items: ["Inter-state Toll Booth Sync", "Fake Number Plate Detection", "Chop-shop (Scrap yard) Monitoring", "Vahan DB Instant Cross-check"]
  },
  {
    title: "Highway Management",
    icon: <Network size={20} />,
    items: ["Over-speeding Trajectory", "Lane Discipline Monitoring", "Fatigue/Drowsy Driver CCTVs", "Fog/Low Visibility Alerts"]
  }
];

const aiFeatures = [
  "AI Computer Vision (YOLOv8) for Vehicles", "AI Adaptive Reinforcement Learning for Signals", "AI Optical Character Recognition (ANPR)",
  "AI Trajectory Prediction", "AI Multi-Camera Vehicle Re-identification", "AI Deep Learning Edge Analytics",
  "AI Weather API Integration", "AI Fuzzy Logic for Congestion"
];

const databases = [
  "Vahan_Vehicle_Registry", "Sarathi_Driver_License_DB", "E_Challan_Ledger", "Stolen_Vehicle_Hotlist", "Traffic_Camera_Feeds", 
  "Accident_Blackspots", "Toll_Plaza_Logs", "VIP_Convoy_Schedules", "Hospital_Trauma_Centers", "Road_Infrastructure_Defects"
];

const dashboards = [
  "Live City Congestion Map", "Real-time e-Challan Revenue", "Stolen Vehicle Alerts", 
  "Ambulance Green Corridors Active", "Accident Heatmap", "Signal Efficiency Metrics"
];

const apis = [
  "MoRTH Vahan & Sarathi APIs", "FASTag Toll APIs", "Google Maps Traffic APIs", "Smart City Camera APIs",
  "Payment Gateway (BillDesk/PayGov)", "Meteorological Weather APIs"
];

const reports = [
  "Monthly Traffic Violation Analytics", "Top Accident Blackspots Report", "Signal Waiting Time Reduction", 
  "Stolen Vehicle Recovery Rate", "e-Challan Collection Status", "Highway Over-speeding Trends"
];

const security = [
  "Camera Feed End-to-End Encryption", "Edge Computing Privacy Filters", "Strict Access Control to Vahan Data", 
  "Tamper-Proof e-Challan Logs", "Automated Number Plate Blur (Civilian)", 
  "DDoS Protection for Challan Portal", "Secure API Gateways", "Audit Logs for Cancelled Challans"
];

const futureScope = [
  "V2X (Vehicle-to-Everything) Comm Sync", "Autonomous Police Interceptors", "Holographic Traffic Signals",
  "Drone-based Highway Patrols", "AI Dynamic Congestion Pricing", "Predictive Tire-blowout Sensors"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Traffic Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Mobility Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Traffic Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const TrafficDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Car className="inline-icon" size={28} /> AI Traffic Intelligence & ANPR
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Traffic Intelligence</strong> transforms city mobility. By linking smart cameras with the Vahan database, it fully automates e-Challans for violations, dynamically adjusts traffic lights to clear gridlocks, and instantly creates "Green Corridors" for approaching ambulances.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Camera className="inline-icon" color="#3b82f6" /> ANPR & Auto e-Challan</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Computer vision detects over-speeding, red-light jumps, and missing helmets. It reads the number plate, checks the Vahan DB, and sends an SMS challan to the owner within seconds.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Adaptive Smart Signals</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Traffic lights are no longer static. The AI counts the number of cars waiting at a junction and automatically extends the green light for the most congested lane.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><AlertTriangle className="inline-icon" color="#f59e0b" /> Accident & Blackspot Prediction</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Maps historical crash data to identify "blackspots". If a crash is detected on CCTV, AI instantly alerts the nearest trauma center and dispatches an ambulance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Stolen Vehicle Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a vehicle reported stolen in the FIR database crosses any smart toll plaza or city intersection, patrol cars in a 5km radius receive an immediate intercept alert.</p>
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
            {trafficModules.map((mod, i) => (
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
            <h1 className="cyber-title">AI TRAFFIC <span>INTELLIGENCE</span></h1>
            <p className="cyber-subtitle">ANPR Challans, Smart Signals & Stolen Vehicle Tracking</p>
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

export default TrafficDetailed;
