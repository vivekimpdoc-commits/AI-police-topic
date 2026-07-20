import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Map, Truck
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Highway Patrol AI", "Border Crossing Profiler", "Commercial Inspection Bot", 
  "Toll Plaza Sync AI", "Smuggling Predictor", "Mobile Checkpoint Router", 
  "ANPR (Plate Reader) Bot", "Interstate Alert Sync", "Goods Waybill Verifier",
  "Traffic Density Analyst", "Border Clash Predictor", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const borderModules = [
  {
    title: "Highway Patrol & Toll Sync",
    icon: <Activity size={20} />,
    items: ["Automated Toll Plaza Integration", "Highway Patrol GPS Routing", "Hit & Run Vehicle Tracking", "Speed Camera Sync"]
  },
  {
    title: "Commercial & Goods Transit",
    icon: <Truck size={20} />,
    items: ["E-Waybill Verification API", "Overloading Detection", "Hazardous Material Tracking", "Livestock Smuggling Alerts"]
  },
  {
    title: "State Border Security",
    icon: <Shield size={20} />,
    items: ["Interstate Criminal Alert Exchange", "Border Checkpoint Duty Roster", "Suspect Vehicle ANPR", "Drone Border Surveillance"]
  },
  {
    title: "Dynamic Mobile Checkpoints",
    icon: <Map size={20} />,
    items: ["AI Nakabandi Point Suggestions", "Temporary Barricade Deployment Logs", "Search & Seizure Register", "Surprise Audit Trails"]
  }
];

const aiFeatures = [
  "AI Automatic Number Plate Recognition (ANPR) at Tolls", "AI E-Waybill Forgery Detection", "AI Predictive Routing for Highway Patrols",
  "AI Smuggling Pattern Recognition", "AI Facial Recognition for Wanted Criminals at Borders", "AI Optimal Placement of Mobile Checkpoints",
  "AI Anomaly Detection in Commercial Freight Weights", "AI Real-time Translation for Interstate Drivers"
];

const databases = [
  "Border_Transit_Logs", "Commercial_E_Waybills", "ANPR_Read_Archive", "Highway_Patrol_GPS", "Interstate_Alert_DB", 
  "Seizure_Manifests", "Mobile_Checkpoint_History", "Toll_Plaza_Crossings"
];

const dashboards = [
  "Live Border Crossing Radar", "Highway Patrol Density Map", "Commercial Transit Heatmap", 
  "Interstate Alert Hits", "Mobile Checkpoint Efficacy", "Toll Plaza Choke Points"
];

const apis = [
  "NHAI (FASTag) API Integration", "GSTN E-Waybill API", "Vahan/Sarathi (RTO) Database", "Inter-State Police Networks (CCTNS)",
  "Weighbridge IoT Sensors", "Smart City Surveillance Grids"
];

const reports = [
  "Daily Border Transit Volume", "Highway Smuggling Seizure Report", "Commercial Vehicle Compliance", 
  "Interstate Alert Success Rate", "Mobile Checkpoint ROI", "Hit & Run Resolution Rate"
];

const security = [
  "End-to-End Encryption for ANPR Feeds", "Strict RBAC for Interstate Alerts", "Tamper-proof Digital Seizure Logs", 
  "Geofencing for Highway Patrol Vehicles", "Blockchain for Inter-State Evidence Transfer", 
  "Zero-Trust API Gateways for FASTag", "Rate Limiting on Vehicle Queries", "Hardware Security Modules at Border Servers"
];

const futureScope = [
  "Fully Autonomous Highway Patrol Drones", "X-Ray Scanning Gantries for Trucks", "AI Multi-lingual Voice Assistants for Checkposts",
  "Predictive Cross-Border Terrorism Models", "Blockchain Verified Digital Driver Licenses", "V2X Integration for Pursuit Modes"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Border Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Check Post Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Border Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const BorderCheckPostDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI Border & Check Post Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Border & Check Post Management</strong> secures the state's perimeter. By integrating ANPR cameras, FASTag toll APIs, and E-Waybill systems, the AI creates an invisible net that catches escaping criminals, intercepts smuggled goods, and optimizes highway patrols.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#3b82f6" /> Interstate Alert Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a crime occurs in a neighboring state, the AI instantly syncs the suspect's vehicle plate across all border ANPR cameras, triggering automatic barricades if the vehicle attempts to cross.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Truck className="inline-icon" color="#10b981" /> Commercial Freight Scrutiny</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically verifies GST E-Waybills against Vahan databases. AI detects mismatches in declared goods vs truck weight, flagging potential smuggling of liquor, arms, or narcotics.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Toll Plaza Integration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hooks into the National FASTag network. If a stolen vehicle passes a toll booth, the Highway Patrol is instantly routed via GPS to intercept the vehicle further down the highway.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Dynamic Nakabandi</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses predictive crime data to suggest optimal locations for temporary, surprise check posts (Nakabandis), preventing criminals from bypassing known, static border stations.</p>
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
            <h1 className="cyber-title">BORDER & <span>CHECK POSTS</span></h1>
            <p className="cyber-subtitle">Toll Plaza Sync, ANPR & Smuggling Interception</p>
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

export default BorderCheckPostDetailed;
