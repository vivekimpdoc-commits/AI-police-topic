import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Users, Zap, Map
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Field Operation Dispatcher AI", "Live Incident Commander Bot", "Tactical Team Router AI",
  "Patrol Shift Optimizer AI", "Real-time Force Tracker Bot", "K9 Unit Coordinator AI",
  "SWAT Deployment Strategist AI", "Air-Support Sync Agent", "Marine Patrol Router AI",
  "Border Outpost Comm Link AI", "VVIP Security Route Planner", "Convoy Threat Assessor Bot",
  "High-Speed Pursuit Predictor", "Foot Patrol Activity Monitor", "Undercover Operative Sync AI",
  "Hostage Negotiation Analyst AI", "Riot Control Formations Bot", "Crowd Dispersal Tactician AI",
  "Traffic Checkpoint Optimizer", "DUI Checkpoint Predictor AI", "Wanted Vehicle Spotter AI",
  "Fugitive Tracking Coordinator", "Gunfire Triangulation Sync Bot", "Live Evidence Logger AI",
  "Officer Vital Signs Monitor", "Mobile Command Post Router", "Disaster Evacuation Planner AI",
  "Flood Rescue Coordinator Bot", "Earthquake Response Tracker", "Fire-Grid Over-watch AI",
  "HAZMAT Incident Sync Bot", "Bomb Squad Dispatcher AI", "Sniper Positioning Calculator",
  "Tactical Breach Timing AI", "Drone Surveillance Router", "CCTV Target Handoff Agent",
  "Facial Recognition Alert Bot", "Suspicious Activity Flagging AI", "Public Tip-Line Triage Bot",
  "Informant Rendezvous Planner", "Sting Operation Over-watch AI", "Decoy Deployment Strategist",
  "Gang Territory Activity Monitor", "Narcotics Raid Coordinator AI", "Human Trafficking Rescue Sync",
  "Cyber-Patrol Field Sync Bot", "Dark Web Lead Router AI", "Social Media Protest Monitor",
  "Flash Mob Convergence Alert", "Stadium Security Assessor", "Festival Crowd Control AI",
  "VIP Event Credential Scanner", "Weapon Smuggling Route Bot", "Cross-Border Pursuit Coordinator",
  "Inter-Agency Comms Bridge AI", "Federal Agency Sync Agent", "Local Precinct Workload Balancer",
  "Emergency Blood Delivery Router", "Tactical Medical Response AI", "Field Operation Debrief Bot"
];

const operationsModules = [
  {
    title: "Tactical Dispatch",
    icon: <Zap size={20} />,
    items: ["Real-time PCR Routing", "SWAT Readiness Sync", "Air-Support Coordination", "Marine Patrol Tracking"]
  },
  {
    title: "Live Event Over-watch",
    icon: <Activity size={20} />,
    items: ["Riot Control Monitoring", "VVIP Convoy Tracking", "Stadium Crowd Density", "Festival Security Zones"]
  },
  {
    title: "Incident Response",
    icon: <ShieldAlert size={20} />,
    items: ["Active Shooter Protocols", "Hostage Rescue Logistics", "Bomb Squad Deployment", "HAZMAT Clearances"]
  },
  {
    title: "Field Asset Management",
    icon: <Map size={20} />,
    items: ["Mobile Command Post Location", "Drone Swarm Patrolling", "K9 Unit Status", "Armoured Vehicle Tracking"]
  },
  {
    title: "Inter-Agency Sync",
    icon: <Network size={20} />,
    items: ["Federal Agency Comms", "Border Security Handoff", "Traffic Police Sync", "Medical Rescue Routing"]
  }
];

const aiFeatures = [
  "AI Live Force Tracking", "AI Pursuit Route Prediction", "AI Tactical Breach Optimization",
  "AI Multi-Agency Comms Bridging", "AI Automated Event Debriefing", "AI Medical Response Triage"
];

const databases = [
  "Live_Officer_GPS", "Tactical_Unit_Rosters", "Active_Pursuit_Logs", "Drone_Flight_Paths", 
  "VVIP_Route_Maps", "Event_Permit_DB", "Inter-Agency_Comms_Logs", "Incident_Response_Vault"
];

const dashboards = [
  "Live Tactical Operations Map", "SWAT & Special Forces Readiness", "Live Event Security Board", 
  "Inter-Agency Sync Hub", "Active Pursuits Monitor", "Field Asset Utilization"
];

const apis = [
  "GPS Tracking APIs", "Drone Telemetry Sync", "Federal Comms Bridge APIs", 
  "Medical Dispatch Webhooks", "Weather & Traffic Live Feeds", "Smart City Camera Sync"
];

const reports = [
  "Daily Operations Summary", "Tactical Response Time Metrics", "VVIP Security Post-Action", 
  "Riot Control Effectiveness", "Inter-Agency Hand-off Audit", "Drone Fleet Usage Report"
];

const security = [
  "End-to-End Encrypted Comms", "Dynamic Clearance Levels", "Live Feed Watermarking", 
  "Geo-Fenced Access Controls", "Immutable Operations Audit", "Kill-Switch for Lost Devices"
];

const futureScope = [
  "Autonomous Robocop Dispatch", "Predictive Riot Formations", "Holographic Field Mapping",
  "Satellite Sync Precision Tracking", "Brain-Wave Officer Comms", "Instant Multi-lingual Debriefs"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Operations Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Tactical Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Operations Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const OperationsCommandDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Zap className="inline-icon" size={28} /> AI Operations Command Center
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Operations Command Center</strong> is specifically designed for real-time tactical execution and field management. While the ICCC provides global over-watch, the Operations Center focuses on coordinating boots on the ground, directing SWAT units, managing live pursuits, and ensuring seamless inter-agency communication during high-stakes incidents.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#3b82f6" /> Live Force Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks the exact GPS location of every patrol car, K9 unit, and foot officer, deploying the optimal mix of assets to an active crime scene instantly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Tactical Incident Response</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides live routing for SWAT teams and hostage negotiators, using AI to predict suspect movements and calculate optimal breach timings.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Live Event Over-watch</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Manages massive deployments for VIP visits, stadium events, and protests, dynamically adjusting officer perimeters based on real-time crowd density.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Inter-Agency Synchronization</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Acts as a bridge during federal operations, syncing communication channels between local police, border security, and federal agencies seamlessly.</p>
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
            {operationsModules.map((mod, i) => (
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
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Databases & Storage</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> System APIs</h3>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Automated Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Security Protocols</h3>
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
            <Zap size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI OPERATIONS <span>COMMAND CENTER</span></h1>
            <p className="cyber-subtitle">Tactical Field Dispatch & Real-Time Force Coordination</p>
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

export default OperationsCommandDetailed;
