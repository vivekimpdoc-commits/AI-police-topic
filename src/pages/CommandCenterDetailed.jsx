import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, MonitorPlay, Zap, Radio
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "ICCC Operations Commander AI", "Emergency Dispatch Priority AI", "City-wide Sensor Aggregator AI", 
  "Live Threat Triangulation AI", "Drone Fleet Over-watch AI", "Public Broadcast Controller AI", 
  "VIP Convoy Coordinator AI", "Riot Control Logistics AI", "Weather/Traffic Impact Analyzer",
  "Cyber-Command Defense Bot", "Force Readiness Optimizer AI"
];

const commandCenterModules = [
  {
    title: "112 Emergency Dispatch",
    icon: <Radio size={20} />,
    items: ["AI Call Triage", "Location Triangulation", "Nearest PCR Van Dispatch", "Ambulance/Fire Co-routing"]
  },
  {
    title: "Smart City Integration",
    icon: <MonitorPlay size={20} />,
    items: ["Traffic Light Control Overrides", "Public Address System Sync", "Smart Streetlight Dimming", "Environmental Sensor Alerts"]
  },
  {
    title: "Live Tactical Feeds",
    icon: <Activity size={20} />,
    items: ["Drone Video Streams", "Officer Body-Cam Feeds", "Helicopter FLIR (Thermal)", "Sniper Scope Feeds"]
  },
  {
    title: "Critical Incident Management",
    icon: <ShieldAlert size={20} />,
    items: ["Hostage Situation Command", "Active Shooter Tracking", "Terrorist Siege Logistics", "Natural Disaster War-Room"]
  },
  {
    title: "Executive Dashboards",
    icon: <LayoutDashboard size={20} />,
    items: ["DGP State-wide View", "CM Briefing Mode", "Media/Press Release Control", "Jurisdiction Heatmaps"]
  }
];

const aiFeatures = [
  "AI Multi-Screen Video Analytics", "AI SOS Voice Stress Analysis", "AI Automated Dispatch Routing",
  "AI Crowd Panic Detection (CCTV)", "AI Predictive Force Depletion Alerts", "AI Live Multi-lingual Translation for 112",
  "AI VIP Route Threat Dynamic Scoring", "AI Drone Swarm Target Locking", "AI Gunshot Acoustic Triangulation"
];

const databases = [
  "Live_CCTV_Feeds", "112_DispatchLogs", "Officer_GPS_Tracks", "Drone_Telemetry", "Emergency_Contacts", 
  "Hospital_Beds_Live", "SmartCity_Sensors", "Threat_Intel_Feeds", "Resource_Availability", "Action_Audit_Trails"
];

const dashboards = [
  "ICCC Master Video Wall", "112 Triage & Dispatch Queue", "Live Force Deployment Map", 
  "City-wide Sensor & Traffic Grid", "Critical Incident War-Room", "Executive Briefing Summary"
];

const apis = [
  "112 Telecom Provider APIs", "Smart City Command APIs", "Hospital/Ambulance Sync APIs", "Fire Department APIs",
  "Drone Fleet Management APIs", "Traffic Control System APIs", "National Intel Grid Sync APIs"
];

const reports = [
  "Daily 112 Response Time Metrics", "Critical Incident After-Action Report", "Resource Utilization Summary", 
  "Smart City Sensor Anomaly Log", "DGP Morning Briefing", "Public Broadcast Audit"
];

const security = [
  "Biometric ICCC Access", "Air-Gapped War-Room Network", "Gov-Grade Video Stream Encryption", 
  "Kill-Switch Command Override", "Immutable Dispatch Audit Logs", 
  "EMP & Failover Redundancy", "Zero-Trust Integration", "Anti-Jamming Comms Protocols"
];

const futureScope = [
  "Holographic Tactical City Table", "Orbital Satellite Live Feeds", "Neural-Link Commander Interface",
  "Autonomous Robocop Dispatch", "Global Terror DB Instant Sync", "Predictive Pre-Crime Dispatching"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Command Agents', icon: <Bot size={18} /> },
  { id: 'modules', label: 'ICCC Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'War-Room Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CommandCenterDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <MonitorPlay className="inline-icon" size={28} /> Integrated Command & Control Center (ICCC)
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Integrated Command & Control Center (ICCC)</strong> is the ultimate nerve center for modern policing. Powered by AI, this system aggregates live feeds from drones, officer body-cams, smart city sensors, and 112 emergency calls onto a massive unified video wall. It acts as the ultimate War-Room during terror attacks, riots, or natural disasters.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Radio className="inline-icon" color="#3b82f6" /> Smart 112 Dispatch</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI analyzes voice stress on emergency calls, triages incidents by severity, and automatically routes the nearest available PCR vans and ambulances via GPS.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Live Tactical Over-watch</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Commanders can instantly patch into the live body-cam of any officer on the ground, or take manual control of overhead surveillance drones during a chase.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Zap className="inline-icon" color="#f59e0b" /> Smart City Overrides</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>During an emergency, the ICCC can turn all traffic lights green for an ambulance (Green Corridor), or broadcast evacuation orders through city-wide public address speakers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> War-Room Mode</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly converts the dashboard into a crisis-management interface, pulling up 3D building blueprints, hospital bed availability, and SWAT team readiness in seconds.</p>
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
            {commandCenterModules.map((mod, i) => (
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
            <MonitorPlay size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">INTEGRATED <span>COMMAND CENTER</span></h1>
            <p className="cyber-subtitle">Real-time City-Wide Over-watch & Tactical War-Room</p>
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

export default CommandCenterDetailed;
