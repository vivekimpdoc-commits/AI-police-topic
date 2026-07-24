import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Users, Zap, TrendingUp, AlertOctagon
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Riot Prediction AI", "Force Deployment Scorer", "Real-Time Threat Assessor", 
  "Public Sentiment Analyst AI", "Event Security Planner AI", "Tactical Evacuation Agent", 
  "Emergency Triage Coordinator", "Resource Optimization AI", "Weather & Disaster Impact AI",
  "VIP Route Security AI", "Crowd Density Analyzer AI", "Flash Mob Predictor AI",
  "Election Violence Heatmapper", "Festival Crowd Surge Forecaster", "Optimal Station Staffing AI",
  "Anti-Riot Gear Allocator", "Rapid Action Force Dispatcher", "Beat Patrol Routing Optimizer",
  "Emergency Call Prioritization Agent", "Active Shooter Triangulator AI", "Hostage Situation Modeler",
  "Simultaneous Attack Correlator", "VVIP Route Vulnerability Assessor", "Convoy Speed Optimizer",
  "Stadium Crowd Dynamics Modeler", "Sniper Over-watch Positioning AI", "Flood Evacuation Routing Agent",
  "Earthquake Triage AI", "Hospital Bed Sync Coordinator", "Relief Material Supply Chain AI",
  "Multi-Variable Threat Scorer", "Sentiment Shift Trigger AI", "Route Vulnerability Indexer",
  "Optimal Pathfinding AI", "Automatic Escalation Protocol AI", "Drone Recon Deployment AI",
  "Gunfire Acoustic Triangulator", "Predictive Force Exhaustion AI", "Legal Use-of-Force Prompter",
  "DGP Decision Support Matrix AI", "Live Threat Heatmap Generator", "Force Readiness Board AI",
  "VVIP Convoy Tracker AI", "Disaster Command Board AI", "Pre-Event Risk Assessor",
  "Riot Post-Mortem Analyst", "Force Deployment Efficiency AI", "VVIP Security Auditor",
  "Emergency Response Time Profiler", "Resource Depletion Forecaster", "Rank-Based Override Validator",
  "Encrypted Tactical Comm Router", "Decision Audit Trail Analyzer", "Anti-Tamper Sensor Feed AI",
  "Zero-Trust API Gateway Monitor", "Offline Fail-safe Mode Trigger", "Holographic Tactical Table Manager",
  "Neural-Link Command Parser", "Autonomous Drone Coordinator", "Pre-Crime Legal Arbitrator"
];

const decisionModules = [
  {
    title: "Predictive Law & Order",
    icon: <TrendingUp size={20} />,
    items: ["Riot Probability Scoring", "Flash Mob Prediction", "Election Violence Heatmaps", "Festival Crowd Surge Forecasting"]
  },
  {
    title: "Tactical Force Deployment",
    icon: <Users size={20} />,
    items: ["Optimal Station Staffing", "Anti-Riot Gear Allocation", "Rapid Action Force (RAF) Dispatching", "Beat Patrol Routing"]
  },
  {
    title: "Real-Time Threat Triage",
    icon: <AlertOctagon size={20} />,
    items: ["100/112 Call Prioritization", "Active Shooter Triangulation", "Hostage Situation Modeling", "Simultaneous Attack Correlation"]
  },
  {
    title: "Event & VIP Security",
    icon: <Shield size={20} />,
    items: ["VVIP Route Vulnerability", "Convoy Speed Optimization", "Stadium Crowd Dynamics", "Sniper Over-watch Positioning"]
  },
  {
    title: "Disaster Response",
    icon: <Zap size={20} />,
    items: ["Flood Evacuation Routing", "Earthquake Triage", "Hospital Bed Availability Sync", "Relief Material Supply Chains"]
  }
];

const aiFeatures = [
  "AI Multi-Variable Threat Scoring", "AI Sentiment Shift Trigger (Social Media)", "AI Route Vulnerability Index",
  "AI Optimal Pathfinding (Traffic/Weather)", "AI Automatic Escalation Protocols", "AI Drone Recon Deployment",
  "AI Gunfire Acoustic Triangulation", "AI Crowd Density Estimation via CCTV", "AI Predictive Force Exhaustion",
  "AI Legal Use-of-Force Guideline Prompts"
];

const databases = [
  "ThreatModels", "HistoricalRiots", "EventCalendars", "VIP_Itineraries", "DeploymentGrids", 
  "EmergencyContacts", "HospitalCapacities", "AcousticSignatures", "SocialSentiment", "WeatherLogs"
];

const dashboards = [
  "DGP Decision Support Matrix", "Live Threat Heatmap", "Force Readiness & Depletion Board", 
  "VVIP Convoy Tracker", "112 Emergency Triage Screen", "Disaster Response Command Board"
];

const apis = [
  "Weather & Seismic APIs", "Telecom Cell-Tower Density APIs", "Social Media Firehose APIs", "Traffic Grid APIs",
  "Hospital Infrastructure APIs", "Smart City CCTV APIs", "Gunshot Detection Sensor APIs"
];

const reports = [
  "Pre-Event Risk Assessment", "Riot Post-Mortem Analysis", "Force Deployment Efficiency", 
  "VVIP Security Audit", "Emergency Response Time Metrics", "Resource Depletion Forecast"
];

const security = [
  "Rank-Based Decision Overrides", "Gov-Grade JWT Authentication", "Encrypted Tactical Comms", 
  "Decision Audit Trails", "Anti-Tamper Sensor Feeds", 
  "Immutable ML Model Weights", "Zero-Trust API Gateways", "Offline Fail-safe Modes"
];

const futureScope = [
  "Holographic Tactical Tables", "Neural-Link Command Decisions", "Autonomous Riot-Control Drones",
  "Pre-Crime Legal Arbitration", "Global Terror DB Real-time Sync", "Quantum Probability Modeling"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Tactical AI Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Decision Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Decision Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const DecisionDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Zap className="inline-icon" size={28} /> AI Decision Support System (DSS)
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Decision Support System (DSS)</strong> acts as the digital brain for high-ranking police officials during critical operations. By processing thousands of real-time variables—from social media anger to traffic gridlocks and weather—the AI provides actionable, statistically-backed recommendations for force deployment and threat neutralization.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingUp className="inline-icon" color="#3b82f6" /> Predictive Riots & Unrest</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>The AI scans local news, dark web chatter, and social media sentiment to predict exactly when and where a peaceful protest might turn violent.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#10b981" /> Tactical Force Deployment</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Calculates the exact number of riot police, tear gas units, and water cannons required based on real-time crowd density estimations from CCTVs.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><AlertOctagon className="inline-icon" color="#f59e0b" /> Emergency Triage</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>During natural disasters or terror attacks, the AI triages incoming 112 calls, automatically routing ambulances and rescue forces to the most critical zones.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> VIP Route Security</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes 3D city topography, sniper sightlines, and traffic choke-points to dynamically generate the safest, most unpredictable routes for VVIP convoys.</p>
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
            {decisionModules.map((mod, i) => (
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
            <Zap size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI DECISION <span>SUPPORT SYSTEM</span></h1>
            <p className="cyber-subtitle">Real-time Predictive Analytics & Tactical Force Deployment</p>
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

export default DecisionDetailed;
