import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, HeartPulse, Route, Box
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Relief Camp Allocation Bot", "Evacuation Route Planner", "Medical Supply Chain AI", 
  "Rescue Team Dispatcher", "Weather Anomaly Predictor", "Shelter Capacity Modeler", 
  "Resource Distribution AI", "Helicopter Path Optimizer", "Volunteer Tracker Bot",
  "Emergency Fund Allocator", "Triage Assistance AI", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const disasterModules = [
  {
    title: "Relief Camp Management",
    icon: <HeartPulse size={20} />,
    items: ["AI Shelter Occupancy Dashboard", "Automated Bed Allocation", "Ration Distribution Tracking", "Camp Hygiene Monitoring"]
  },
  {
    title: "Rescue Team Allocation",
    icon: <Users size={20} />,
    items: ["SDRF/NDRF Deployment Logic", "Dynamic GPS Routing for Rescuers", "Helicopter Airdrop Optimization", "Skill-based Volunteer Dispatch"]
  },
  {
    title: "Emergency Supply Chain",
    icon: <Box size={20} />,
    items: ["AI Medical Response Coordination", "Stock Depletion Prediction", "Water/Food Logistics", "Relief Material Audit Trail"]
  },
  {
    title: "Evacuation Route Planner",
    icon: <Route size={20} />,
    items: ["Flood/Fire Path Modeling", "Traffic Flow Diversion", "Safe Zone Navigation Broadcasts", "Real-time Road Closure Mapping"]
  },
  {
    title: "Disaster Volunteer Portal",
    icon: <Network size={20} />,
    items: ["Instant OSINT Volunteer Vetting", "Geo-Fenced Task Assignment", "Medical Personnel Sync", "Crowdsourced Damage Reports"]
  }
];

const aiFeatures = [
  "AI Flood Inundation Prediction Models", "AI Drone Image Damage Assessment", "AI Dynamic TSP (Traveling Salesperson) for Ambulances",
  "AI Multilingual Distress Call Processing", "AI Social Media SOS Extraction", "AI Logistics Graph Optimization",
  "AI Power Grid Failure Simulation", "AI Relief Fund Fraud Detection"
];

const databases = [
  "Relief_Camp_Registry", "Rescue_Team_Telemetry", "Emergency_Supply_Inventory", "Evacuation_Routes_Graph", "Volunteer_Skills_Matrix", 
  "Distress_Call_Transcripts", "Damage_Assessment_Vectors", "Medical_Triage_Logs", "Airdrop_Coordinates"
];

const dashboards = [
  "Live Disaster Control Room", "Shelter Capacity & Rations", "SDRF Deployment Map", 
  "Supply Chain Chokepoints", "Evacuation Route Status", "Volunteer Activity Radar"
];

const apis = [
  "IMD Weather Forecast APIs", "Google Maps/ISRO Bhuvan Sync", "NDMA Central Portal Sync", "Hospital Bed Availability APIs",
  "Drone Telemetry Streams", "HAM Radio/Satellite Comm APIs"
];

const reports = [
  "Daily Relief Operation Summary", "Resource Distribution Audit", "Rescue Mission Effectiveness", 
  "Structural Damage Assessment", "Emergency Budget Utilization", "Post-Disaster Epidemic Risk Report"
];

const security = [
  "Encrypted Rescuer Comms", "Blockchain Relief Material Tracking", "Strict Access to Medical Triage Data", 
  "DDoS Protection for SOS Portals", "Tamper-Proof Audit Logs", 
  "Offline Mesh Network Failover", "Biometric Camp Entry", "Geofenced Drone Operations"
];

const futureScope = [
  "AI Swarm Drones for Search & Rescue", "Autonomous Relief Delivery Rovers", "Predictive Seismic/Flood Warnings (Minutes Ahead)",
  "Holographic Command Center Tables", "Brain-Computer Interface for Drone Pilots", "Automated Robot Triage Camps"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Rescue Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Logistics Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Control Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const DisasterEmergencyDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <HeartPulse className="inline-icon" size={28} /> AI Disaster & Emergency Logistics
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Disaster Logistics</strong> is the ultimate AI command system for crisis management. Whether facing floods, earthquakes, or mass casualty events, the AI instantly calculates evacuation routes, deploys SDRF teams, and manages the supply chain for relief camps with zero latency.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Route className="inline-icon" color="#3b82f6" /> Evacuation AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Models flood inundation or fire spread in real-time, automatically generating the safest evacuation routes and broadcasting them to citizens' phones via SMS/WhatsApp.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#10b981" /> Rescue Team Dispatch</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes distress calls and social media SOS posts using NLP to pinpoint victims, automatically dispatching the nearest SDRF boats or helicopters using optimized paths.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Box className="inline-icon" color="#f59e0b" /> Relief Camp Logistics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Predicts stock depletion rates for food, water, and medicine at various relief camps, automatically triggering supply requests before shortages occur.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Medical Triage</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Syncs with hospital bed APIs to route ambulances carrying critical patients to the nearest facilities with available ICUs and blood types.</p>
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
            {disasterModules.map((mod, i) => (
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
            <HeartPulse size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">DISASTER & <span>EMERGENCY</span></h1>
            <p className="cyber-subtitle">Rescue Allocation, Evacuation Paths & Relief Camps</p>
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

export default DisasterEmergencyDetailed;
