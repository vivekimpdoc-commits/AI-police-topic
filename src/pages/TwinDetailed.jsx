import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Users, Eye, Map, Box
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "3D City Simulator AI", "Traffic Grid Modeler AI", "Virtual Station Load Tester", 
  "Crowd Physics Simulator", "Disaster Impact Modeler AI", "VVIP Route Simulation Agent", 
  "Cyber-Twin Vulnerability Tester", "Emergency Response Optimizer", "Riot Control Simulator AI",
  "Spatial Analytics Expert AI", "Tactical Breach Planner AI", "Flood Dynamics Simulator AI",
  "Earthquake Structural Integrity AI", "Drone Swarm Sandbox Modeler", "Autonomous Vehicle Traffic AI",
  "Sniper Line-of-Sight Calculator", "Blast Radius Physics Engine", "Acoustic Reverberation Modeler",
  "Tear-Gas Dispersion Physics AI", "Virtual VIP Decoy Simulator", "Escape Route Viability Tester",
  "Cyber-Attack Tabletop Exerciser", "Subterranean Network Modeler", "Hospital Surge Capacity Simulator",
  "Emergency Call Center Load Tester", "Evacuation Bottleneck Analyzer", "Cell-Block Capacity Predictor",
  "Smart City Sensor Virtualizer", "Green-Corridor Timing Simulator", "Stadium Stampede Modeler",
  "Festival Crowd Flow Predictor", "Flash-Mob Convergence AI", "Riot Gear Efficacy Tester",
  "Active Shooter VR Scenario AI", "Hostage Negotiation VR Trainer", "Airborne Toxin Drift Modeler",
  "Radio-Frequency Shadow Mapper", "CCTV Blind-Spot Identifier AI", "Telecom Network Overload Modeler",
  "Power Grid Failure Simulator", "Virtual Interrogation Room AI", "Evidence Tampering Simulator",
  "Crime Scene Recreation AI", "Bullet Trajectory Simulator", "High-Speed Chase Physics AI",
  "Virtual Perimeter Security AI", "Facial Recognition Load Tester", "Border Infiltration Modeler",
  "Smuggling Route Simulator AI", "Maritime Port Logistics Twin", "Airspace Violation Modeler AI",
  "Weapon Issue Bottleneck AI", "Shift Handover Optimization AI", "Supply Chain Disruption Twin",
  "Ransomware Blast Radius AI", "Multi-Agency Coordination Twin", "Real-Time Resource Mirror AI",
  "Geolocation Spoofing Simulator", "Virtual Commando Trainer AI", "Future Crime Scenario Generator"
];

const twinModules = [
  {
    title: "City & Traffic Simulation",
    icon: <Map size={20} />,
    items: ["3D Real-time Traffic Mapping", "Gridlock Prediction", "Evacuation Route Testing", "Green-Corridor Simulation"]
  },
  {
    title: "Crowd Physics & Riots",
    icon: <Users size={20} />,
    items: ["Stadium Stampede Simulation", "Flash-Mob Chokepoint Analysis", "Tear-Gas Dispersion Physics", "Protest March Routing"]
  },
  {
    title: "Virtual Station Testing",
    icon: <Box size={20} />,
    items: ["FIR Load Stress Testing", "Cell-Block Capacity Simulation", "Weapon Issue Bottlenecks", "Shift Handover Optimization"]
  },
  {
    title: "Tactical Breach Modeling",
    icon: <ShieldAlert size={20} />,
    items: ["Hostage Rescue 3D Mapping", "Sniper Line-of-Sight Calculation", "Blast Radius Simulation", "Drone Entry Routing"]
  },
  {
    title: "Cyber-Twin Network Security",
    icon: <Network size={20} />,
    items: ["Simulated Ransomware Attacks", "CCTNS Load Balancing Tests", "Firewall Penetration Sims", "Data Center Failover"]
  }
];

const aiFeatures = [
  "AI Photorealistic 3D Rendering", "AI Real-time Physics Engine", "AI Autonomous Civilian NPCs",
  "AI Weather & Lighting Simulation", "AI Generative Scenario Creation", "AI Traffic Flow Interpolation",
  "AI Structural Vulnerability Scanning", "AI Radio-Frequency (RF) Shadow Mapping", "AI Automated Risk Output Reports",
  "AI VR/AR Headset Integration for Training"
];

const databases = [
  "3D_CityModels", "TopographicalMaps", "TrafficPatterns", "SimulatedNPCs", "PhysicsEngines", 
  "WeatherHistorical", "EventScenarios", "TacticalBlueprints", "CCTV_Feeds", "CyberTopologies"
];

const dashboards = [
  "Digital Twin Master Command", "Active Simulation Canvas", "Traffic Gridlock Forecast", 
  "Virtual Threat Stress-Test Board", "Station Resource Bottleneck Matrix", "City-wide Sensor Overlay"
];

const apis = [
  "Smart City IoT Sensor APIs", "Google Maps/GIS APIs", "Meteorological Weather APIs", "CCTV Stream APIs",
  "Traffic Light Control APIs", "Unity/Unreal Engine WebGL APIs", "Telecom Cell-Tower APIs"
];

const reports = [
  "VVIP Route Simulation Report", "Stadium Evacuation Bottleneck Analysis", "Riot Control Strategy Matrix", 
  "Cyber-Security Stress Test Results", "Green Corridor Timing Logs", "Resource Depletion Forecast"
];

const security = [
  "Air-Gapped Simulation Engines", "Gov-Grade JWT Authentication", "Classified Blueprint Encryption", 
  "Role-based Simulation Access", "Anti-Tamper Spatial Data", 
  "Immutable Test-Run Logs", "Zero-Trust API Sync", "Secure VR/AR Streaming"
];

const futureScope = [
  "Full Metaverse Police Academy", "Real-time Holographic Tables", "Neural-Link Command Integration",
  "Global Interpol Twin Sharing", "Autonomous Drone Swarm Sync in 3D", "Quantum Physics Processing"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Simulation Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Twin Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Simulation Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const TwinDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Eye className="inline-icon" size={28} /> AI Digital Twin of Police Operations
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Digital Twin</strong> is a highly advanced 3D virtual replica of the entire city and police infrastructure. Connected to live IoT sensors, CCTVs, and traffic grids, it allows commanders to simulate massive riots, VVIP convoys, or natural disasters in a virtual space *before* they happen in the real world, predicting outcomes with pinpoint accuracy.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#3b82f6" /> 3D City & Traffic Modeler</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Simulate closing a major bridge or highway. The AI instantly calculates traffic ripple effects, allowing police to proactively redirect vehicles and prevent gridlock.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#10b981" /> Crowd Physics & Riots</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Spawn thousands of AI 'NPCs' to simulate a protest. Test where police barricades will fail, where stampedes might occur, and how tear gas will drift based on real-time weather.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Tactical Breach Simulation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Load the 3D blueprints of a hijacked building. Commandos can use VR headsets to walk through the exact layout, calculating sniper angles and blast radiuses before breaching.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Cyber-Twin Vulnerability</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A parallel virtual clone of the police IT network that constantly bombards itself with simulated ransomware and DDoS attacks to find weaknesses before hackers do.</p>
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
            {twinModules.map((mod, i) => (
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
            <Eye size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI DIGITAL <span>TWIN</span></h1>
            <p className="cyber-subtitle">3D City Simulation & Virtual Tactical Stress-Testing</p>
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

export default TwinDetailed;
