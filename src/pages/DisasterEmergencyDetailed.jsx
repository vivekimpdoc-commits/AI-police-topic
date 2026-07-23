import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, AlertTriangle, Wind
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "NDRF Coordinator AI", "Evacuation Route Planner", "Convoy Security Bot", 
  "Resource Inventory Bot", "Shelter Security AI", "Weather Prediction Sync", 
  "Civil Defence Deployer", "Casualty Tracker AI", "Relief Distribution AI",
  "Crowd Panic Predictor", "Telecom Outage Bot"
];

const disasterModules = [
  {
    title: "Agency Coordination",
    icon: <Network size={20} />,
    items: ["AI Disaster Evacuation Router", "Civil Defence Volunteer Call-up", "Home Guard Mobilization", "Multi-Agency Comms Bridge"]
  },
  {
    title: "Evacuation & Shelters",
    icon: <Wind size={20} />,
    items: ["AI Resource Mobilization", "Emergency Shelter Security", "Refugee Registration Portal", "Stampede Prevention Grid"]
  },
  {
    title: "Resource & Relief",
    icon: <Database size={20} />,
    items: ["AI Relief Material Tracker", "Relief Convoy Escort Routing", "Food/Medical Drop Coordination", "Helicopter Landing Zone Sec"]
  },
  {
    title: "Casualty & Comms",
    icon: <Activity size={20} />,
    items: ["Missing Persons Tracker", "Hospital Bed Availability Sync", "Disaster Communication Log", "Public Emergency Broadcasts"]
  }
];

const aiFeatures = [
  "AI Prediction of Flood Inundation Zones using Satellite Data", "AI Dynamic Routing for Ambulances avoiding Debris", "AI Drone Swarm Coordination for Search & Rescue",
  "AI Facial Recognition to Identify Unconscious Casualties", "AI Sentiment Analysis of SOS Calls for Prioritization", "AI Detection of Relief Material Black-Marketing",
  "AI Automated Translation of Multi-Lingual Distress Signals", "AI Optimization of Civil Defence Volunteer Deployment based on Skills"
];

const databases = [
  "Evacuation_Status_Board", "Shelter_Occupancy_Ledger", "NDRF_SDRF_Deployment_Map", "Relief_Inventory_DB", "Missing_Persons_Index", 
  "Casualty_Tracking_DB", "Emergency_Comms_Archive", "Volunteer_Roster"
];

const dashboards = [
  "Live Disaster Theater Map", "Evacuation Progress Tracker", "Relief Supply Burn Rate", 
  "Multi-Agency Asset Locations", "Hospital Capacity Heatmap", "Network Outage Radar"
];

const apis = [
  "IMD (Indian Meteorological Dept) API", "NDMA (National Disaster Mgmt) Sync", "Google Crisis Response Maps", "Hospital Management Systems (HMIS)",
  "Telecom Providers (Cell Tower Status)", "Ambulance GPS Gateways"
];

const reports = [
  "Disaster Response Turnaround Time", "Evacuation Efficacy Report", "Relief Distribution Audit", 
  "Agency Coordination Scorecard", "Missing Persons Resolution", "Asset Loss Estimation"
];

const security = [
  "Resilient Mesh-Network Comms (Off-grid)", "Encrypted Satellite Phone Linkages", "Strict RBAC for Broadcast Alerts", 
  "Anti-Spoofing on SOS Signals", "Data Redaction of Casualty Identities", 
  "DDoS Protection for Relief Portals", "Blockchain Logging of Relief Funds", "Failover Servers in Safe Zones"
];

const futureScope = [
  "AI Robot Dogs for Navigating Rubble", "Holographic Triaging in Field Hospitals", "Low-Earth Orbit Satellite (Starlink) Integration",
  "Predictive Digital Twins of Vulnerable Dams/Bridges", "Automated Airdrop Pathing algorithms", "Subterranean Sonar AI mapping"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Rescue Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Emergency Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Crisis Dashboards', icon: <PieChart size={18} /> },
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
              <AlertTriangle className="inline-icon" size={28} /> AI Disaster & Emergency Coordination
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Disaster & Emergency Coordination</strong> acts as the central nervous system during cyclones, floods, or mass casualty events. It seamlessly synchronizes the State Police with NDRF, SDRF, and Civil Defence, using AI to route rescue convoys and track missing persons in real-time.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#3b82f6" /> Multi-Agency Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Eliminates chaos by providing a single pane of glass for Police, NDRF, SDRF, and Home Guards. AI tracks the live GPS locations of all rescue assets to prevent duplicated efforts in disaster zones.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Wind className="inline-icon" color="#10b981" /> Smart Evacuations</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Integrates with meteorological data to predict flood or cyclone paths. AI automatically maps out the safest evacuation routes avoiding collapsed bridges, and manages security at relief shelters.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Relief Convoy Escorts</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>During disasters, relief trucks are often looted. The AI dynamically assigns armed police escorts to relief convoys, optimizing routes to ensure food and medicine reach the most critical zones safely.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Missing & Casualty Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A centralized portal where rescue workers upload photos of found individuals. AI facial recognition matches them against the 'Missing Persons' database, instantly notifying frantic families.</p>
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
            <AlertTriangle size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">DISASTER & <span>EMERGENCY</span></h1>
            <p className="cyber-subtitle">NDRF Sync, Evacuation Routes & Relief Management</p>
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
