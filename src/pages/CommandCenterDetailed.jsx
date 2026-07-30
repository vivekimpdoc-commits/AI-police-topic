import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"ICCC Operations Commander AI", "Emergency Dispatch Priority AI", "City-wide Sensor Aggregator AI", 
  "Live Threat Triangulation AI", "Drone Fleet Over-watch AI", "Public Broadcast Controller AI", 
  "VIP Convoy Coordinator AI", "Riot Control Logistics AI", "Weather/Traffic Impact Analyzer",
  "Cyber-Command Defense Bot", "Force Readiness Optimizer AI", "112 Call Triage Bot",
  "SOS Voice Stress Analyzer", "Nearest PCR Van Dispatcher", "Ambulance/Fire Co-routing AI",
  "Traffic Light Override Manager", "Smart Streetlight Dimming AI", "Environmental Sensor Alert Bot",
  "Body-Cam Feed Analyzer", "Helicopter FLIR (Thermal) Sync AI", "Sniper Scope Feed Integrator",
  "Hostage Situation Command Bot", "Active Shooter Tracker AI", "Terrorist Siege Logistics Agent",
  "Natural Disaster War-Room AI", "CM/DGP Briefing Mode Auto-Generator", "Multi-Screen Video Analytics Bot",
  "Crowd Panic Detection AI", "Force Depletion Alert Agent", "112 Multi-lingual Live Translator",
  "VIP Route Dynamic Threat Scorer", "Drone Swarm Target Locking AI", "Gunshot Acoustic Triangulator",
  "Real-time Hospital Bed Sync AI", "City-wide Evacuation Router", "Cyber-Attack Tabletop AI",
  "Fire Spread Predictor AI", "Flood Level Monitoring Agent", "High-Speed Chase Over-watch Bot",
  "Automated Press Release Drafter", "Social Media Panic Assuager Bot", "Rogue Drone Interceptor AI",
  "Subway/Metro System Sync Bot", "Power Grid Failure Over-watch", "Mobile Cell-Tower Deployment AI",
  "SWAT Team Gear Readiness Bot", "Hostage Negotiation Prompter", "Airborne Bio-Threat Sensor AI",
  "Radiation Leak Heatmapper", "Maritime Port Over-watch AI", "Airport Security Sync Agent",
  "Border Checkpoint Integrator", "Public Sentiment Radar (Real-Time)", "Crisis Volunteer Coordinator AI",
  "Automated Kill-Switch Executor", "ICCC EMP Failover AI", "Multi-agency Intel Fusion Bot",
  "Geofence Breach Alert Agent", "Suspicious Vehicle Tracker AI", "City-wide Lockdown Coordinator"
];

const agentRoutes = {
  "ICCC Operations Commander AI": "/command-center/icccoperationscommanderaiagent",
  "Emergency Dispatch Priority AI": "/command-center/emergencydispatchpriorityaiagent",
  "City-wide Sensor Aggregator AI": "/command-center/citywidesensoraggregatoraiagent",
  "Live Threat Triangulation AI": "/command-center/livethreattriangulationaiagent",
  "Drone Fleet Over-watch AI": "/command-center/dronefleetoverwatchaiagent",
  "Public Broadcast Controller AI": "/command-center/publicbroadcastcontrolleraiagent",
  "VIP Convoy Coordinator AI": "/command-center/vipconvoycoordinatoraiagent",
  "Riot Control Logistics AI": "/command-center/riotcontrollogisticsaiagent",
  "Weather/Traffic Impact Analyzer": "/command-center/weathertrafficimpactanalyzeragent",
  "Cyber-Command Defense Bot": "/command-center/cybercommanddefensebotagent",
  "Force Readiness Optimizer AI": "/command-center/forcereadinessoptimizeraiagent",
  "112 Call Triage Bot": "/command-center/one12calltriagebotagent",
  "SOS Voice Stress Analyzer": "/command-center/sosvoicestressanalyzeragent",
  "Nearest PCR Van Dispatcher": "/command-center/nearestpcrvandispatcheragent",
  "Ambulance/Fire Co-routing AI": "/command-center/ambulancefirecoroutingaiagent",
  "Traffic Light Override Manager": "/command-center/trafficlightoverridemanageragent",
  "Smart Streetlight Dimming AI": "/command-center/smartstreetlightdimmingaiagent",
  "Environmental Sensor Alert Bot": "/command-center/environmentalsensoralertbotagent",
  "Body-Cam Feed Analyzer": "/command-center/bodycamfeedanalyzeragent",
  "Helicopter FLIR (Thermal) Sync AI": "/command-center/helicopterflirthermalsyncaiagent",
  "Sniper Scope Feed Integrator": "/command-center/sniperscopefeedintegratoragent",
  "Hostage Situation Command Bot": "/command-center/hostagesituationcommandbotagent",
  "Active Shooter Tracker AI": "/command-center/activeshootertrackeraiagent",
  "Terrorist Siege Logistics Agent": "/command-center/terroristsiegelogisticsagent",
  "Natural Disaster War-Room AI": "/command-center/naturaldisasterwarroomaiagent",
  "CM/DGP Briefing Mode Auto-Generator": "/command-center/cmdgpbriefingmodeautogeneratoragent",
  "Multi-Screen Video Analytics Bot": "/command-center/multiscreenvideoanalyticsbotagent",
  "Crowd Panic Detection AI": "/command-center/crowdpanicdetectionaiagent",
  "Force Depletion Alert Agent": "/command-center/forcedepletionalertagent",
  "112 Multi-lingual Live Translator": "/command-center/one12multilinguallivetranslatoragent",
  "VIP Route Dynamic Threat Scorer": "/command-center/viproutedynamicthreatscoreragent",
  "Drone Swarm Target Locking AI": "/command-center/droneswarmtargetlockingaiagent",
  "Gunshot Acoustic Triangulator": "/command-center/gunshotacoustictriangulatoragent",
  "Real-time Hospital Bed Sync AI": "/command-center/realtimehospitalbedsyncaiagent",
  "City-wide Evacuation Router": "/command-center/citywideevacuationrouteragent",
  "Cyber-Attack Tabletop AI": "/command-center/cyberattacktabletopaiagent",
  "Fire Spread Predictor AI": "/command-center/firespreadpredictoraiagent",
  "Flood Level Monitoring Agent": "/command-center/floodlevelmonitoringagent",
  "High-Speed Chase Over-watch Bot": "/command-center/highspeedchaseoverwatchbotagent",
  "Automated Press Release Drafter": "/command-center/automatedpressreleasedrafteragent",
  "Social Media Panic Assuager Bot": "/command-center/socialmediapanicassuagerbotagent",
  "Rogue Drone Interceptor AI": "/command-center/roguedroneinterceptoraiagent",
  "Subway/Metro System Sync Bot": "/command-center/subwaymetrosystemsyncbotagent",
  "Power Grid Failure Over-watch": "/command-center/powergridfailureoverwatchagent",
  "Mobile Cell-Tower Deployment AI": "/command-center/mobilecelltowerdeploymentaiagent",
  "SWAT Team Gear Readiness Bot": "/command-center/swatteamgearreadinessbotagent",
  "Hostage Negotiation Prompter": "/command-center/hostagenegotiationprompteragent",
  "Airborne Bio-Threat Sensor AI": "/command-center/airbornebiothreatsensoraiagent",
  "Radiation Leak Heatmapper": "/command-center/radiationleakheatmapperagent",
  "Maritime Port Over-watch AI": "/command-center/maritimeportoverwatchaiagent",
  "Airport Security Sync Agent": "/command-center/airportsecuritysyncagent",
  "Border Checkpoint Integrator": "/command-center/bordercheckpointintegratoragent",
  "Public Sentiment Radar (Real-Time)": "/command-center/publicsentimentradarrealtimeagent",
  "Crisis Volunteer Coordinator AI": "/command-center/crisisvolunteercoordinatoraiagent",
  "Automated Kill-Switch Executor": "/command-center/automatedkillswitchexecutoragent",
  "ICCC EMP Failover AI": "/command-center/icccempfailoveraiagent",
  "Multi-agency Intel Fusion Bot": "/command-center/multiagencyintelfusionbotagent",
  "Geofence Breach Alert Agent": "/command-center/geofencebreachalertagent",
  "Suspicious Vehicle Tracker AI": "/command-center/suspiciousvehicletrackeraiagent",
  "City-wide Lockdown Coordinator": "/command-center/citywidelockdowncoordinatoragent",
};


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Core AI Topics', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Advanced Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dashboards', icon: <PieChart size={18} /> },
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
              <ShieldAlert className="inline-icon" size={28} /> AI COMMAND & CONTROL CENTER
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI COMMAND & CONTROL CENTER</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in real-time city-wide over-watch & tactical war-room.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Real-time Monitoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuous AI-driven surveillance and data collection ensuring immediate anomaly detection and rapid response protocols.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Cpu className="inline-icon" color="#10b981" /> Predictive Analytics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Utilizes machine learning to forecast trends, identify potential risks before they occur, and suggest optimized resource allocation.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Seamless Integration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hooks into existing national and state-level databases, providing a unified, interoperable platform across all departments.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Automated Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ensures all operations strictly adhere to legal and procedural guidelines, generating instant audit trails and compliance reports.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan" onClick={() => agentRoutes[expert] && navigate(agentRoutes[expert])} style={{cursor: 'pointer'}}>
                <Bot className="card-icon" />
                <h4>{expert}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {[
              { title: "Real-time Monitoring Module", items: ["Live Data Stream", "Alert Engine", "Geospatial Tracking"] },
              { title: "Predictive Analytics Engine", items: ["Risk Forecasting", "Resource Optimization", "Pattern Recognition"] },
              { title: "Automated Reporting System", items: ["Compliance Audits", "Daily Briefings", "Incident Logs"] },
              { title: "Cloud Integration Hub", items: ["State DB Sync", "Third-party API Webhooks", "Encrypted Data Transfer"] }
            ].map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  <LayoutDashboard size={20} color="#3b82f6" />
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
            {[
              "24/7 AI Processing", "Advanced Machine Learning Models", "Real-time Data Sync", 
              "Automated Alerts & Notifications", "Cross-Platform Accessibility", "Role-Based Access Control"
            ].map((feat, i) => (
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
                <h3><Database className="inline-icon" color="#06b6d4" /> Database Integration</h3>
                <div className="tag-cloud">
                  {["Primary_Transaction_DB", "Analytics_Data_Warehouse", "Audit_Logs_Archive", "User_Access_Registry", "System_Configuration_DB"].map((db, i) => (
                    <span key={i} className="tech-tag">{db}</span>
                  ))}
                </div>
              </div>
              <div className="panel">
                <h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3>
                <div className="tag-cloud">
                  {["RESTful Core API", "Real-time WebSocket Feed", "Third-party Webhooks", "Authentication Gateway", "Data Export API"].map((api, i) => (
                    <span key={i} className="tech-tag tech-tag-alt">{api}</span>
                  ))}
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
                  {["Executive Overview Dashboard", "Live Operations Monitor", "Historical Trend Analysis", "System Health & Status"].map((d, i) => (
                    <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3>
                <ul className="premium-list">
                  {["Daily Summary Report", "Weekly Performance Analytics", "Monthly Compliance Audit", "System Exception Logs"].map((r, i) => (
                    <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>
                  ))}
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
                  {[
                    "End-to-End Data Encryption (AES-256)", "Multi-Factor Authentication (MFA)", 
                    "Strict Role-Based Access Control (RBAC)", "Tamper-proof Audit Trails", 
                    "Automated Threat Detection", "Regular Security Penetration Testing"
                  ].map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}
                </ul>
              </div>
              <div className="panel highlight-green">
                <h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3>
                <ul className="premium-list">
                  {[
                    "Integration with Advanced LLMs", "Predictive Autonomous Actions", 
                    "Enhanced Mobile Accessibility", "Cross-Agency Data Federation", 
                    "Blockchain-based Immutability", "Next-Gen UI/UX Overhaul"
                  ].map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}
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
            <h1 className="cyber-title">AI COMMAND & <span>CONTROL CENTER</span></h1>
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
