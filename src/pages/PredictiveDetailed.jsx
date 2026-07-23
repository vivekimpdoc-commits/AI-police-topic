import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Route, Radar, Target
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Patrol Route Optimizer AI", "Riot Risk Assessor", "Event Crowd Modeler", 
  "Festival Deployment Planner", "Weather-Crime Correlator", "VVIP Convoy Simulator", 
  "Emergency Response Router", "Manpower Fatigue Predictor", "Supply Chain Disruption AI",
  "Election Security Analyst", "Historical Crime Trend Bot"
];

const predictiveModules = [
  {
    title: "AI Patrol Planning",
    icon: <Route size={20} />,
    items: ["Dynamic Route Generation", "Blind-Spot Coverage Algorithm", "Real-time Traffic Rerouting", "Geo-fenced Beat Check-ins"]
  },
  {
    title: "Incident Forecasting",
    icon: <Radar size={20} />,
    items: ["Riot/Unrest Probability Score", "Festival Stampede Risk", "Weekend Drunk Driving Zones", "Theft Prediction by Weather"]
  },
  {
    title: "Resource Optimization",
    icon: <Target size={20} />,
    items: ["Fleet Deployment Strategy", "Shift Roster balancing", "Emergency Reserve Allocation", "Ammunition & Riot Gear Stocking"]
  },
  {
    title: "Election & VVIP Security",
    icon: <ShieldAlert size={20} />,
    items: ["Booth Sensitivity Modeling", "Convoy Anti-Ambush Routing", "Crowd Density Heatmaps", "Political Clashes Predictor"]
  },
  {
    title: "Response Time Minimization",
    icon: <Activity size={20} />,
    items: ["Dial-112 ETA Optimization", "Nearest Interceptor Dispatch", "Ambulance/Fire Co-routing", "Hospital Bed Availability Sync"]
  }
];

const aiFeatures = [
  "AI Deep Reinforcement Learning for Routing", "AI Spatial Auto-Correlation", "AI Time-Series Forecasting (ARIMA/LSTM)",
  "AI Crowd Flow Kinematics", "AI Sentiment-to-Violence Predictor", "AI Multi-Objective Optimization",
  "AI Drone Fleet Pathfinding", "AI Automated Risk Profiling"
];

const databases = [
  "Historical_Crime_Coordinates", "Patrol_GPS_Logs", "City_Traffic_Flows", "Event_Calendars", "Weather_Patterns", 
  "Election_Past_Violence", "VVIP_Itineraries", "Hospital_Resource_Sync", "Resource_Inventory", "Dial_112_Latencies"
];

const dashboards = [
  "Live City Risk Heatmap", "Active Patrol Coverage Map", "Fleet & Manpower Status", 
  "Upcoming Event Risk Matrix", "Dial-112 Response Time ETA", "VVIP Convoy Live Tracker"
];

const apis = [
  "Google Maps / ISRO Bhuvan APIs", "State Meteorological Dept APIs", "Election Commission Sync APIs", "Traffic Control Room APIs",
  "Dial-112 CAD System APIs", "Smart City Camera APIs", "Hospital Management APIs"
];

const reports = [
  "Patrol Coverage Efficiency Report", "Predicted vs Actual Incidents", "Response Time Audit (TAT)", 
  "Festival Security Blueprint", "Election Booth Vulnerability", "Resource Shortage Forecast"
];

const security = [
  "VVIP Route Encryption", "Radio Frequency (RF) Jamming Zones", "GPS Spoofing Detection", 
  "Secure Cloud Architectures", "Disaster Recovery Failover", 
  "Zero-Trust Fleet Access", "Command Center Authentication", "Audit Logging for Route Changes"
];

const futureScope = [
  "Pre-Crime Autonomous Interception", "Orbital Satellite Crowd Tracking", "Predictive Behavior via Smart Dust",
  "AI Swarm Riot Control Drones", "Instant Holographic Barricades", "Mind-reading Risk Assessment"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Predictive Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Predictive Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Strategy Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PredictiveDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Radar className="inline-icon" size={28} /> AI Predictive Policing & Resource Planning
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Predictive Policing</strong> shifts law enforcement from reactive to proactive. By analyzing vast datasets—including weather, historical crime, traffic, and public events—the AI predicts where crimes are most likely to occur and optimizes patrol routes to prevent them before they happen.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Route className="inline-icon" color="#3b82f6" /> Dynamic Patrol Planning</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Moves away from static beats. AI generates dynamic daily patrol routes for PRVs (Police Response Vehicles) ensuring maximum coverage of high-risk blind spots.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Radar className="inline-icon" color="#10b981" /> Riot & Event Forecasting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes upcoming festivals, political rallies, and social media sentiment to forecast crowd density, stampede risks, and potential communal clashes.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#f59e0b" /> Resource Optimization</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tells commanders exactly how many officers, tear gas shells, and barricades are needed at a specific location, preventing both under-deployment and resource wastage.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> VVIP & Election Security</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Generates anti-ambush routes for VVIP convoys and models polling booth vulnerability during elections to prevent booth capturing and violence.</p>
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
            {predictiveModules.map((mod, i) => (
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
            <Radar size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI PREDICTIVE <span>POLICING</span></h1>
            <p className="cyber-subtitle">Dynamic Patrol Routing, Riot Forecasting & VVIP Security</p>
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

export default PredictiveDetailed;
