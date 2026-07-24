import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Truck, Wrench, Fuel, Users, MapPin
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Predictive Maintenance AI", "Fuel Fraud Detector", "Fleet Routing Optimizer", 
  "Tyre Wear Modeler", "OBD2 Telematics Bot", "Driver Fatigue Analyzer", 
  "Spare Parts Inventory Predictor", "Workshop Queuing AI", "Vehicle Depreciation Bot",
  "Emergency Dispatch Router", "GPS Spoofing Detector"
];

const fleetModules = [
  {
    title: "AI Fleet Maintenance",
    icon: <Wrench size={20} />,
    items: ["OBD2 Sensor Analytics", "Brake/Tyre Wear Prediction", "Automated Workshop Scheduling", "Spare Parts Procurement"]
  },
  {
    title: "Fuel & Fraud Management",
    icon: <Fuel size={20} />,
    items: ["Fuel Card Integration", "Mileage vs Fuel Anomaly Flags", "Unauthorized Stop Detection", "Carbon Footprint Tracker"]
  },
  {
    title: "Driver & Duty Roster",
    icon: <Users size={20} />,
    items: ["Fatigue/Sleep Prediction", "Harsh Braking Scoring", "Automated Shift Rotation", "License Expiry Alerts"]
  },
  {
    title: "Vehicle Tracking (Telematics)",
    icon: <Truck size={20} />,
    items: ["Live GPS Location", "Geo-Fencing (Jurisdiction Limits)", "Idle Time Monitoring", "Speed Limit Violation Alerts"]
  },
  {
    title: "Insurance & Compliance",
    icon: <FileText size={20} />,
    items: ["Automated PUC/Fitness Renewal", "Insurance Claim Analytics", "Accident Reconstruction AI", "Depreciation Calculator"]
  }
];

const aiFeatures = [
  "AI Time-Series Forecasting (Maintenance)", "AI Anomaly Detection (Fuel Drops)", "AI Computer Vision (Accident Damage)",
  "AI Kinematic Scoring (Driver Behavior)", "AI Traveling Salesman Optimization", "AI IoT Sensor Fusion",
  "AI Automated Document OCR (Insurance)", "AI Real-time Route Recalculation"
];

const databases = [
  "Vehicle_Registry_DB", "OBD2_Telematics_Log", "Fuel_Card_Transactions", "Driver_Duty_Roster", "Workshop_Repair_Ledger", 
  "Tyre_Inventory_Meta", "Insurance_Claims_Vault", "PUC_Fitness_Records", "Accident_Meta_DB", "Geo_Fence_Polygons"
];

const dashboards = [
  "Live Fleet Telematics", "Fuel Efficiency & Fraud", "Workshop Repair Queue", 
  "Driver Safety Leaderboard", "Vehicle Fitness Status", "Asset Depreciation Matrix"
];

const apis = [
  "Vahan (National Vehicle Registry)", "Petroleum Company APIs (Fuel Cards)", "Insurance Provider APIs", "Google Maps/NavIC Routing",
  "OBD2 Hardware IoT Gateways", "RTO E-Challan Sync"
];

const reports = [
  "Monthly Fleet Operational Cost", "Fuel Theft/Fraud Suspects", "Predictive Maintenance Schedule", 
  "Driver Behavior Safety Score", "Vehicle Grounding Statistics", "Workshop Efficiency Audit"
];

const security = [
  "Encrypted GPS Telemetry (AES-256)", "Anti-GPS Spoofing Algorithms", "Tamper-proof OBD2 Tokens", 
  "Role-based Dashboard Access", "Immutable Maintenance Logs", 
  "Fuel Card Multi-Factor Auth", "Air-gapped ECU Flashing", "Secure API Rate Limiting"
];

const futureScope = [
  "Autonomous Police Cruisers", "Drone-Escort Integration", "EV Battery Lifecycle AI",
  "Self-healing Paint Technologies", "Robotic Workshop Mechanics", "Neural-link Driver Alerts"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Fleet Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Logistics Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Fleet Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const FleetDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Truck className="inline-icon" size={28} /> AI Fleet & Logistics Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Fleet Management</strong> ensures police cruisers, riot vehicles, and transport trucks are always mission-ready. It tracks fuel consumption to stop theft, predicts engine failures before they happen, and scores driver behavior in real-time.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Fuel className="inline-icon" color="#3b82f6" /> Fuel Fraud Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references GPS mileage with fuel card swipes. If a vehicle travels 50 km but bills for 20 liters of fuel, the AI instantly flags it as potential fuel theft.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MapPin className="inline-icon" color="#10b981" /> Live Routing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses traffic data and historical incident density to dispatch the nearest and most appropriate vehicle (e.g. sending a heavily armored Vajra vs a standard Bolero).</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Driver Behavior Scoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes telematics for harsh braking, rapid acceleration, and sharp turns. Assigns a safety score to each driver to reduce accident rates and maintenance costs.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#ef4444" /> Geo-Fencing & Routing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a patrol car leaves its assigned jurisdiction, the dashboard flashes red. During emergencies, AI calculates the fastest route considering live traffic and road closures.</p>
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
            {fleetModules.map((mod, i) => (
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
            <Truck size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">FLEET & <span>LOGISTICS</span></h1>
            <p className="cyber-subtitle">Predictive Maintenance, Telematics & Fuel Fraud Analytics</p>
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

export default FleetDetailed;
