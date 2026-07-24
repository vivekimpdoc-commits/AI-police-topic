import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Truck, Droplets, MapPin
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "GPS Route Optimization AI", "Fuel Siphoning Alert Bot", "Mileage Degradation Tracker",
  "Engine Idling Anomaly AI", "Vehicle Maintenance Scheduler", "Tire Wear & Tear Predictor",
  "Oil Change Due Alerter", "Brake Pad Replacement AI", "Driver Fatigue & Dashcam AI",
  "Harsh Braking & Speeding AI", "Accident/Crash Reconstruction AI", "VIP Convoy Speed Sync AI",
  "Riot Vehicle Standby AI", "Water Cannon Refill Tracker", "Mobile Command Center Planner",
  "Police Bus (Force Transport) AI", "Prisoner Van Security AI", "Cash Escort Vehicle Tracker",
  "Highway Interceptor Speed AI", "Ambulance/Medical Van Dispatch", "Tow Truck Deployment AI",
  "Patrol Car Rotation Balancer", "Off-Road Vehicle Deployment AI", "Bulletproof Vehicle Armour AI",
  "Tear Gas Van Readiness AI", "K9 Transport Van Climate AI", "Helicopter Fuel & Flight AI",
  "Drone Battery Lifespan Tracker", "Marine Boat Fuel/Hull AI", "Electric Vehicle (EV) Charge AI",
  "EV Battery Degradation AI", "Fuel Card Fraud Detector", "Unauthorized Route Deviation AI",
  "Border Patrol Vehicle Planner", "Weapon Mount Stability AI", "Siren/PA System Defect AI",
  "Radio/Comms Battery AI", "Dashcam Storage Wiper AI", "Toll Plaza Sync/Pass AI",
  "Stolen Police Vehicle Geo-Lock", "Vehicle Condemnation Assessor", "Scrap Auction Pricing AI",
  "Insurance Renewal Tracker AI", "PUC (Pollution) Expiry Alerter", "Workshop Billing Fraud AI",
  "Spare Parts Inventory Predictor", "Mechanic Efficiency Scorer AI", "Emergency Breakdown Dispatch",
  "Fuel Station Empanelment AI", "Winter Tire/Chain Allocator", "Night Vision Windshield AI",
  "Motorcycle Patrol Route AI", "Bicycle Squad Dispatcher", "Vehicle Requisition (Elections)",
  "Requisitioned Vehicle Payout AI", "Convoy Jam Clearence AI", "Green Corridor Sync AI",
  "Driver Vision/Medical Check AI", "Driver Breathalyzer Sync AI", "Vehicle Decal/Paint Audit AI"
];

const modules = [
  {
    title: "Fuel & Route Optimization",
    icon: <Droplets size={20} />,
    items: ["Fuel Siphoning Alerts", "Fuel Card Fraud", "Route Optimization", "Engine Idling Logs"]
  },
  {
    title: "Maintenance & Diagnostics",
    icon: <Activity size={20} />,
    items: ["Tire/Brake Pad Wear", "Oil Change Scheduling", "PUC & Insurance", "Workshop Billing Fraud"]
  },
  {
    title: "Driver & Telematics",
    icon: <Truck size={20} />,
    items: ["Harsh Braking Flags", "Dashcam Fatigue AI", "Speeding Alerts", "Breathalyzer Sync"]
  },
  {
    title: "Specialized Fleet",
    icon: <ShieldAlert size={20} />,
    items: ["VIP Convoy Sync", "Water Cannons", "K9 Climate Vans", "Helicopter/Drone Fuel"]
  },
  {
    title: "Security & Dispatch",
    icon: <MapPin size={20} />,
    items: ["Unauthorized Deviation", "Stolen Vehicle Geo-Lock", "Emergency Breakdown", "Green Corridors"]
  }
];

const aiFeatures = [
  "IoT OBD2 Sensor Integration for Live Diagnostics", "Predictive Fuel Siphoning & Fraud Detection", "AI Dashcam for Driver Sleep/Fatigue Alerts",
  "Algorithmic Vehicle Condemnation & Scrapping", "Dynamic VIP Convoy & Green Corridor Sync", "EV Battery Degradation Analytics"
];

const databases = [
  "Fleet_Master_Ledger", "Fuel_Consumption_Telemetry", "OBD2_Diagnostic_Logs", "Driver_Behavior_Matrix", 
  "Workshop_Billing_Vault", "Insurance_PUC_Registry", "Specialized_Vehicle_Roster", "GPS_Route_Archive"
];

const dashboards = [
  "State-wide Live Fleet Map", "Fuel Fraud & Idling Alerts", "Maintenance Due Heatmap", 
  "Driver Safety & Dashcam Alerts", "VIP & Emergency Dispatch", "EV Charging Station Sync"
];

const apis = [
  "State Transport Auth (Vahan) Sync", "Fuel Retailer (IOCL/BPCL) Gateway", "Fastag Toll Plaza API", 
  "Google Maps Traffic API", "IoT Dashcam Webhooks", "Automobile OEM Diagnostic API"
];

const reports = [
  "Monthly Fuel Consumption & Savings", "Fleet Maintenance Expenditure", "Top Speeding/Harsh Braking Drivers", 
  "Vehicle Condemnation Shortlist", "Workshop Fraud Audit Trail", "Election Vehicle Requisition Payouts"
];

const security = [
  "Remote Engine Kill-Switch Sync", "Geofenced Route Locks", "Biometric Ignition Authentication", 
  "Immutable Fuel Transaction Ledgers", "Anti-Tamper GPS Tracking", "Encrypted VIP Convoy Comms"
];

const futureScope = [
  "Fully Autonomous Patrol Vehicles", "V2X (Vehicle to Everything) Traffic Light Override", "Predictive Crash Avoidance Breaking",
  "Hydrogen Fuel Cell Integration", "Drone-Deployed Spike Strips from Vehicles", "AI Automated Accident Reconstruction"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Fleet Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Transport Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Telematics Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const FleetFuelManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Truck className="inline-icon" size={28} /> Fleet & Fuel Management AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Fleet & Fuel Management AI</strong> modernizes police transport logistics. By integrating IoT OBD2 sensors and GPS telematics, it stops fuel siphoning, predicts maintenance breakdowns before they happen, and monitors driver behavior to ensure the safety and readiness of everything from patrol cars to VIP convoys.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Droplets className="inline-icon" color="#3b82f6" /> Fuel & Idling Fraud</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references GPS mileage with fuel card transactions to instantly flag fuel siphoning or excessive AC engine idling during night shifts.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Predictive Maintenance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Reads OBD2 telemetry to predict tire wear, brake pad failures, and oil changes, preventing patrol cars from breaking down during critical emergency pursuits.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MapPin className="inline-icon" color="#f59e0b" /> Geo-Fencing & Security</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Triggers alerts if a police vehicle deviates from its assigned patrol sector or VIP route. Features a remote engine kill-switch for stolen police vehicles.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Driver Telematics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI dashcams monitor driver fatigue, eye-closure, and harsh braking, ensuring the safety of officers, prisoners in transit, and the public.</p>
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
            {modules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  {mod.icon}
                  <h3>{mod.title}</h3>
                </div>
                <div className="module-tags">
                  {mod.items.map((item, j) => (
                    <span key={j} className="tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="features-grid">
            {aiFeatures.map((feature, i) => (
              <div key={i} className="premium-feature-card">
                <Cpu className="feature-icon" color="#06b6d4" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="architecture-panel premium-module-panel">
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Data Ledgers</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> Integration APIs</h3>
            <div className="tags-container">
              {apis.map((api, i) => <span key={i} className="cyber-tag highlight-green">{api}</span>)}
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="reports-panel premium-module-panel">
            <div className="split-section">
              <div className="report-list">
                <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" /> Live Dashboards</h3>
                <ul>
                  {dashboards.map((dash, i) => (
                    <li key={i}><CheckCircle size={16} color="#f59e0b" /> {dash}</li>
                  ))}
                </ul>
              </div>
              <div className="report-list">
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Fleet Reports</h3>
                <ul>
                  {reports.map((rep, i) => (
                    <li key={i}><FileText size={16} color="#3b82f6" /> {rep}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="security-panel premium-module-panel">
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Transport Security</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {security.map((sec, i) => <span key={i} className="cyber-tag highlight-red">{sec}</span>)}
            </div>
            
            <h3 style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}><Rocket className="inline-icon" /> Future Roadmap</h3>
            <div className="tags-container">
              {futureScope.map((scope, i) => <span key={i} className="cyber-tag highlight-purple">{scope}</span>)}
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
            <h1 className="cyber-title">FLEET & FUEL MANAGEMENT <span>AI</span></h1>
            <p className="cyber-subtitle">IoT Telematics, Fuel Fraud Prevention & Predictive Maintenance</p>
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
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default FleetFuelManagementDetailed;
