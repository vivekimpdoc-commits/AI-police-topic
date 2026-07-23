import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Map, Plane, Navigation
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "3D Map Renderer AI", "Drone Flight Path Optimizer", "Satellite Heatmap Analyzer", 
  "Geo-Fence Trigger Bot", "Smart Streetlight Sync Agent", "Flood Risk Modeler", 
  "Urban Density Predictor", "Evacuation Route Planner", "Public WiFi Scraping Bot",
  "Traffic Signal Sync Bot", "Infrastructure Defect AI"
];

const smartCityModules = [
  {
    title: "AI GIS Platform (3D)",
    icon: <Map size={20} />,
    items: ["3D Crime Scene Mapping", "Underground Utility Tracing", "Topographic Riot Simulation", "Building Blueprint Overlays"]
  },
  {
    title: "Drone Surveillance Fleet",
    icon: <Plane size={20} />,
    items: ["Autonomous Patrol Routes", "Thermal Encampment Scanning", "Tethered Crowd Monitoring", "Rooftop Sniper Spotting"]
  },
  {
    title: "Satellite Intelligence",
    icon: <Navigation size={20} />,
    items: ["Illegal Mining Detection", "Deforestation/Encroachment Tracking", "Border Infiltration Heatmaps", "Disaster Impact Assessment"]
  },
  {
    title: "Dynamic Geo-Fencing",
    icon: <ShieldAlert size={20} />,
    items: ["Ankle-Monitor Boundary Alerts", "VIP Zone Proximity Triggers", "Drone No-Fly Zone Enforcement", "Protest Containment Rings"]
  },
  {
    title: "Smart City Infrastructure Sync",
    icon: <Network size={20} />,
    items: ["Smart Streetlight Auto-Brightening", "Public PA System Overrides", "Hospital Bed Availability Sync", "Smart Parking Crime Scans"]
  }
];

const aiFeatures = [
  "AI Photogrammetry (2D to 3D rendering)", "AI Swarm Drone Logic", "AI Synthetic Aperture Radar (SAR) Analysis",
  "AI Geo-Spatial Clustering (DBSCAN)", "AI IoT Sensor Fusion", "AI Flood/Fire Propagation Models",
  "AI Edge Computing for Drones", "AI Real-time Coordinate Translation"
];

const databases = [
  "3D_City_Models_DB", "Drone_Telemetry_Logs", "Satellite_Imagery_Vault", "Geo_Fence_Polygons", "Smart_City_IoT_Sensors", 
  "Underground_Utilities_Map", "VIP_Movement_Coordinates", "Evacuation_Routes", "Crime_Hotspot_GIS", "Public_WiFi_Logs"
];

const dashboards = [
  "Live 3D City Digital Twin", "Drone Fleet Radar", "Satellite Anomaly Heatmap", 
  "Active Geo-Fence Breaches", "Smart Infrastructure Status", "Disaster Evacuation Progress"
];

const apis = [
  "ISRO Bhuvan / Google Earth Engine APIs", "Smart City Command (ICCC) APIs", "DGCA Drone Regulation APIs", "Meteorological/Weather APIs",
  "IoT Device Gateways (MQTT)", "Municipal Corporation Utility APIs"
];

const reports = [
  "Urban Crime Density Report", "Drone Patrol Coverage Analytics", "Satellite Encroachment Audit", 
  "Geo-Fence Violation Log", "Smart Infrastructure Uptime", "Disaster Preparedness Simulation"
];

const security = [
  "GPS Spoofing Detection", "Drone Signal Hijack Defense", "Military-Grade Satellite Feed Encryption", 
  "Strict API Rate Limiting", "Classified Blueprint Access Logs", 
  "Zero-Trust IoT Networks", "Quantum-Resistant Telemetry", "Air-Gapped GIS Servers"
];

const futureScope = [
  "Space-based Continuous Surveillance", "Subterranean Robo-Snakes", "Holographic City Projections",
  "Weather Modification Intercepts", "Smart Dust Sensor Networks", "AI Automated City Lockdowns"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Spatial Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'GIS Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'City Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const SmartCityDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Map className="inline-icon" size={28} /> AI GIS & Smart City Integration
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI GIS & Smart City Integration</strong> turns the entire urban landscape into a digital twin for law enforcement. It combines satellite imagery, autonomous drone swarms, and smart-city IoT sensors to provide commanders with a God's-eye 3D view of the battlefield.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#3b82f6" /> 3D Digital Twin Mapping</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Creates a 3D replica of the city. Before raiding a building, SWAT teams can view blueprint overlays, exit points, and even underground sewage tunnels to plan their entry.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Plane className="inline-icon" color="#10b981" /> Autonomous Drone Fleets</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Drones automatically launch from charging docks to patrol dark alleys. Uses thermal imaging to detect hidden suspects on rooftops or dense forests at night.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Navigation className="inline-icon" color="#f59e0b" /> Satellite Intelligence</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes weekly satellite feeds from ISRO to detect illegal sand mining operations, forest encroachments, or sudden militant encampments near borders.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Smart Infrastructure Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a gunshot is detected, the AI automatically brightens all smart streetlights in that sector and overrides digital billboards to display emergency evacuation routes.</p>
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
            {smartCityModules.map((mod, i) => (
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
            <Map size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI GIS & <span>SMART CITY</span></h1>
            <p className="cyber-subtitle">3D Digital Twins, Drone Swarms & Satellite Analytics</p>
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

export default SmartCityDetailed;
