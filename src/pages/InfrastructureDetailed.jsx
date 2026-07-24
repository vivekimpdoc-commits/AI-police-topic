import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Building, Zap, Droplet
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Building Energy Optimizer", "Smart Water Meter AI", "Generator Auto-Start Bot", 
  "Fire Compliance Auditor", "Barrack Hygiene Tracker", "Campus Access Controller", 
  "HVAC Thermal Balancer", "Structural Health Monitor", "Solar Grid Sync AI",
  "Rainwater Harvesting Bot", "Carbon Footprint Calculator"
];

const infraModules = [
  {
    title: "Building & Campus Security",
    icon: <Building size={20} />,
    items: ["AI Perimeter Intrusion Maps", "Automated Boom Barriers (ANPR)", "Visitor Tailgating Alerts", "Drone Roof Inspections"]
  },
  {
    title: "Energy & HVAC Management",
    icon: <Zap size={20} />,
    items: ["Smart Grid Energy Throttling", "AI AC/Heating Load Balancing", "Solar Panel Output Sync", "Phantom Power Drain Alerts"]
  },
  {
    title: "Water & Utilities Monitoring",
    icon: <Droplet size={20} />,
    items: ["IoT Pipeline Leak Detection", "Overhead Tank Level Predictor", "Smart Water Metering", "Sewage Blockage Alerts"]
  },
  {
    title: "Generator & Backup Power",
    icon: <Activity size={20} />,
    items: ["DG Set Fuel Level Tracker", "Battery UPS Degradation Curve", "Auto-switchover Latency Log", "Maintenance Cycle Predictor"]
  },
  {
    title: "Fire Safety & Compliance",
    icon: <ShieldAlert size={20} />,
    items: ["Smoke Detector Health Pings", "Fire Extinguisher Expiry Alerts", "Automated Evacuation Routing", "Sprinkler Pressure Drops"]
  }
];

const aiFeatures = [
  "AI Structural Resonance Analysis", "AI Demand-Response Energy Algorithms", "AI Computer Vision (ANPR for HQ)",
  "AI IoT Acoustic Leak Detection (Pipes)", "AI Fire Spread Prediction Models", "AI Occupancy-Based Lighting",
  "AI Predictive Generator Failure", "AI Carbon Credits Auditing"
];

const databases = [
  "HQ_Energy_Consumption_Log", "Water_Meter_Telemetry", "Generator_Fuel_Ledger", "Fire_Safety_Audit_DB", "ANPR_Access_Logs", 
  "HVAC_Temperature_Matrix", "Solar_Inverter_Stats", "Barrack_Occupancy_Ledger", "Structural_Sensors_DB", "Maintenance_Ticket_Queue"
];

const dashboards = [
  "Live HQ Energy Consumption", "Water Grid & Leak Radar", "Backup Power Readiness", 
  "Fire & Life Safety Status", "Barrack/Campus Hygiene Index", "Solar Energy ROI"
];

const apis = [
  "State Electricity Board Grid API", "Municipal Water Supply Sync", "Smart Building BMS (BACnet)", "Solar Inverter IoT Cloud",
  "Fire Brigade Emergency Sync", "National Green Tribunal (NGT) Compliance"
];

const reports = [
  "Monthly Electricity/Fuel Savings", "Building Carbon Footprint Index", "Fire Drill & Evacuation Compliance", 
  "Generator Uptime vs Outages", "Water Conservation Metrics", "Barrack Maintenance Audit"
];

const security = [
  "Air-Gapped BMS (Building Mgmt System)", "Encrypted IoT Sensor Payloads", "Biometric/RFID Zone Zoning", 
  "Anti-Tailgating Turnstiles", "Tamper-Proof Energy Meters", 
  "Firewall on SCADA Networks", "Drone-Free Geofence over HQ", "Strict Physical Key Audits"
];

const futureScope = [
  "Self-cleaning Windows (Nanotech)", "Piezoelectric Floors (Power Gen)", "AI Robotic Janitors",
  "Bioluminescent Campus Lighting", "Zero-Carbon Police HQ", "Holographic Evacuation Guides"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Infra Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Utility Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Facility Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const InfrastructureDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Building className="inline-icon" size={28} /> AI Police Infrastructure & HQ
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Police Infrastructure</strong> converts traditional Police Headquarters and Barracks into smart, self-monitoring buildings. It slashes electricity bills through AI HVAC control, predicts water pipe leaks, and guarantees backup generators are always ready.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Zap className="inline-icon" color="#3b82f6" /> Smart Energy & HVAC</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>The AI dynamically adjusts air conditioning based on the number of people in a room (using CCTV metadata) and outdoor weather, reducing the police headquarters' carbon footprint by 30%.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Droplet className="inline-icon" color="#10b981" /> Water & Utility Leaks</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Acoustic sensors on pipelines listen for high-frequency drips. AI pinpoints the exact location of a hidden water leak behind a wall and automatically generates a maintenance ticket.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Generator Readiness</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Critical for command centers: AI tracks the diesel levels in backup generators and runs automated 'no-load' test cycles weekly to ensure they start within 3 seconds of a blackout.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Fire & Safety Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of checking fire extinguishers manually, IoT sensors flag when a cylinder loses pressure or expires. During a fire, AI calculates the safest evacuation route based on smoke spread.</p>
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
            {infraModules.map((mod, i) => (
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
            <Building size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>INFRASTRUCTURE</span></h1>
            <p className="cyber-subtitle">Smart HQ, Energy Grid & Asset Health AI</p>
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

export default InfrastructureDetailed;
