import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Crosshair, Map
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Raid Planner AI", "Search Grid Optimizer", "QRT Router Bot", 
  "Sniper Nest Calculator", "Hostage Situation Analyzer", "Cordon & Search Bot", 
  "Tactical Gear Allocator", "Debrief Synthesizer", "Drone Swarm Coordinator",
  "Blueprint Analyzer AI", "Suspect Behavior Predictor", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const opsModules = [
  {
    title: "Raid & Search Planning",
    icon: <Crosshair size={20} />,
    items: ["3D Building Blueprint Analysis", "Stealth Approach Routing", "Exit Choke-Point Mapping", "Suspect Flight Path Prediction"]
  },
  {
    title: "Cordon & Area Domination",
    icon: <Map size={20} />,
    items: ["Dynamic Perimeter Generation", "Troop Density Optimization", "Civilian Evacuation Routes", "Riot Control Staging"]
  },
  {
    title: "Quick Reaction Teams (QRT)",
    icon: <Rocket size={20} />,
    items: ["Live GPS Dispatching", "ETA Calculation Traffic-Sync", "Tactical Gear Loadout Matcher", "Inter-Unit Comm Bridges"]
  },
  {
    title: "Mission Debrief & Analytics",
    icon: <Activity size={20} />,
    items: ["Bodycam Video Syncing", "Ammunition Expenditure Logs", "Casualty & Injury Reporting", "AI Tactical Flaw Detection"]
  }
];

const aiFeatures = [
  "AI 3D Spatial Analysis for Sniper Placement", "AI Acoustic Gunshot Triangulation via IoT", "AI Live Bodycam Threat Identification",
  "AI Optimal Route Generation for QRT under Heavy Traffic", "AI Automated Generation of Post-Action Reports", "AI Thermal Drone Feed Analysis",
  "AI Behavioral Profiling of Barricaded Suspects", "AI Resource Depletion Prediction (Ammo/Fuel)"
];

const databases = [
  "Tactical_Ops_Blueprints", "QRT_Deployment_Logs", "Bodycam_Video_Lake", "Raid_Planning_Matrix", "Ammunition_Expenditure_DB", 
  "Suspect_Flight_Risk_Index", "Post_Action_Debriefs", "Tactical_Asset_Inventory"
];

const dashboards = [
  "Live Command & Control Tactical Map", "QRT Unit Status Board", "Drone Swarm Live Feeds", 
  "Area Domination Heatmap", "Mission Readiness Index", "Debrief Analytics"
];

const apis = [
  "Smart City CCTV Feeds", "Municipal Blueprint Database", "Telecom Cell Tower Triangulation (CID)", "Weather Forecast APIs (Wind for Tear Gas)",
  "Hospital Trauma Center Sync", "Drone Telemetry Gateway"
];

const reports = [
  "Post-Raid Tactical Audit", "QRT Response Time (SLA)", "Ammunition & Gear Reconciliation", 
  "Area Domination Efficacy", "Civilian Impact Assessment", "Bodycam Compliance Report"
];

const security = [
  "Top-Secret Clearance (TS/SCI) Access Only", "Air-Gapped Operation Planning Servers", "Self-Destructing Digital Raid Briefings", 
  "Jamming-Resistant Tactical Radios", "End-to-End Encrypted Drone Feeds", 
  "Biometric Mission Authorization", "Decoy Data Generation to Thwart Spies", "Zero-Trace Logging for Covert Ops"
];

const futureScope = [
  "AI Swarm Intelligence for Micro-Drones", "Augmented Reality (AR) Tactical Visors for SWAT", "Exoskeleton Loadout Management",
  "Predictive Hostage Negotiation Chatbots", "Brain-Computer Interface for Silent Comms", "Real-time 3D Holographic Sand-tables"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Tactical Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Ops Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Command Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const SpecialOperationsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Crosshair className="inline-icon" size={28} /> AI Special Operations & Tactical Planning
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Special Operations</strong> provides SWAT, ATS, and STF units with military-grade tactical software. AI analyzes 3D building blueprints for raid planning, coordinates drone swarms, and dispatches Quick Reaction Teams (QRTs) with optimal stealth routing.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Crosshair className="inline-icon" color="#3b82f6" /> Raid & Search Planner</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ingests municipal building blueprints to map out entry points, blind spots, and exit choke-points. AI predicts suspect flight paths and optimally positions perimeter units.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Rocket className="inline-icon" color="#10b981" /> Quick Reaction Teams (QRT)</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly dispatches the nearest heavily armed QRT to an active shooter or riot zone. AI overrides smart-city traffic lights to ensure zero delay in reaching the crisis point.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#f59e0b" /> Area Domination</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>During communal tension, the AI generates a 'Cordon & Search' perimeter. It calculates exactly how many troops are needed per square kilometer to establish total psychological dominance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Post-Action Debrief</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Syncs all officer bodycams post-mission. AI automatically transcribes audio, logs ammunition fired, and generates a visual timeline of the raid to detect tactical errors for future training.</p>
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
            {opsModules.map((mod, i) => (
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
            <Crosshair size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">SPECIAL <span>OPERATIONS</span></h1>
            <p className="cyber-subtitle">Raid Planning, QRT Dispatch & Tactical Analytics</p>
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

export default SpecialOperationsDetailed;
