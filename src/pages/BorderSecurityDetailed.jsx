import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Crosshair, Radar, Ship
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Coastal Radar Integrator AI", "Drone Swarm Border Patrol", "Satellite Encampment Detector", 
  "Submarine Signature Analyzer", "Smuggling Route Predictor", "Tunnel Detection Bot", 
  "Vessel Tracking ID Matcher", "Night-Vision Anomaly Detector", "Cross-Border Comms Interceptor",
  "Refugee Flow Analyzer", "Marine Wildlife vs Threat AI", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const borderModules = [
  {
    title: "Marine & Coastal Security",
    icon: <Ship size={20} />,
    items: ["AI Marine Border Patrol", "Unregistered Boat Detection", "Sonar Sub-surface Scanning", "Coastal Radar Integration"]
  },
  {
    title: "Drone Perimeter Defense",
    icon: <Crosshair size={20} />,
    items: ["AI Smuggler Route Predictor", "Thermal Human Detection (Night)", "Anti-Drone Jamming AI", "Laser Fence Breach Alerts"]
  },
  {
    title: "Satellite & Terrain Intelligence",
    icon: <Radar size={20} />,
    items: ["AI Coastal Radar Sync", "Cross-Border Tunnel Detection", "Deforestation (Smuggling Trails)", "Topographical Advantage Mapping"]
  },
  {
    title: "Signal Intelligence (SIGINT)",
    icon: <Activity size={20} />,
    items: ["Radio Frequency Interception", "Encrypted Comms Cracking", "Cell-Tower Triangulation", "Language/Dialect ID AI"]
  },
  {
    title: "Smuggling & Infiltration",
    icon: <ShieldAlert size={20} />,
    items: ["Fake Passport/ID Detection", "Cargo X-Ray AI Analysis", "Contraband Weight Discrepancy", "Predictive Crossing Times"]
  }
];

const aiFeatures = [
  "AI Synthetic Aperture Radar (SAR) Processing", "AI Acoustic Signature Matching", "AI Infrared/Thermal Computer Vision",
  "AI RF Spectrum Analysis", "AI Automated X-Ray Anomaly Detection", "AI Swarm Drone Coordination Logic",
  "AI Natural Language Translation (Border Dialects)", "AI Geospatial Trajectory Prediction"
];

const databases = [
  "Global_Vessel_Registry (AIS)", "Known_Smuggler_Biometrics", "Satellite_Terrain_Vault", "Drone_Patrol_Logs", "Radar_Track_Histories", 
  "Intercepted_Comms_DB", "Cargo_Manifest_Ledger", "Border_Incident_Reports", "Tunnel_Seismic_Signatures", "Fake_ID_Templates"
];

const dashboards = [
  "Live Coastal Radar Map", "UAV Swarm Telemetry feed", "Infiltration Threat Heatmap", 
  "Intercepted Signals Analysis", "Cargo Screening Anomalies", "Marine Patrol Vessel Status"
];

const apis = [
  "Indian Navy / Coast Guard AIS Feeds", "ISRO Satellite Imagery APIs", "Meteorological Sea-State APIs", "Customs & Immigration DB Sync",
  "Aviation Anti-Drone Radar APIs", "Seismic Sensor IoT Gateways"
];

const reports = [
  "Monthly Intrusion Attempt Stats", "Contraband Seizure Valuations", "Drone Patrol Coverage Area", 
  "Coastal Vulnerability Index", "Signal Interception Decrypt Rate", "Border Outpost Readiness"
];

const security = [
  "Military-Grade End-to-End Encryption", "Air-Gapped Command Center Networks", "Quantum-Safe Key Exchange", 
  "Anti-Jamming Drone Frequencies", "Strict Need-to-Know Access Logs", 
  "Zero-Trust Architecture", "Self-Destructing Intelligence Briefs", "Biometric Terminal Authentication"
];

const futureScope = [
  "Autonomous Unmanned Surface Vessels (USV)", "Space-based Laser Targeting", "Robo-Dog Border Sentinels",
  "Subterranean AI Burrowers", "Holographic Decoy Patrols", "Neural-Link Command Centers"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Defense Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Security Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Command Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const BorderSecurityDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI Border & Marine Security
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Border & Marine Security</strong> provides an impenetrable digital shield across land and sea. It integrates coastal radars, satellite topography, and drone swarms to detect illegal intrusions, smuggling tunnels, and hostile vessels before they breach the perimeter.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Ship className="inline-icon" color="#3b82f6" /> Marine Anomaly Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references live radar feeds with the global AIS (Automatic Identification System). If a boat turns off its transponder near the coast, AI instantly flags it as a "Dark Vessel".</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Crosshair className="inline-icon" color="#10b981" /> Drone & Thermal Patrols</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Deploys autonomous drones equipped with FLIR (Forward Looking Infrared) to patrol porous borders at night, distinguishing between wildlife and human infiltrators.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Radar className="inline-icon" color="#f59e0b" /> Satellite & Tunnel Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes ISRO satellite imagery for sudden terrain changes (encampments) and uses seismic IoT sensors to detect the acoustic signatures of underground tunnel digging.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Smuggling & X-Ray AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>At border checkpoints, AI scans cargo X-ray images in milliseconds, highlighting hidden compartments, weapons, or contraband that the human eye might miss.</p>
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
            {borderModules.map((mod, i) => (
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
            <ShieldAlert size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI BORDER <span>& MARINE</span></h1>
            <p className="cyber-subtitle">Coastal Radars, Drone Sentinels & Smuggling Detection</p>
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

export default BorderSecurityDetailed;
