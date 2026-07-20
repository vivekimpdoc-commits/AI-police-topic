import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Trophy, Medal, HeartPulse
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Athlete Scout AI", "Diet Plan Generator", "Injury Predictor Bot", 
  "Tournament Scheduler", "Performance Analyst AI", "Match Statistics Bot", 
  "Equipment Tracker AI", "Training Regime Optimizer", "Fitness Level Monitor"
];

const sportsModules = [
  {
    title: "Event & Tournament Ops",
    icon: <Trophy size={20} />,
    items: ["AI Police Sports Tournament Manager", "Automated Fixture Generator", "Venue Availability Tracker"]
  },
  {
    title: "Athlete Performance",
    icon: <Activity size={20} />,
    items: ["AI Sports Team Selection Assistant", "Player Metric Analytics", "Fitness Regimen Generator"]
  },
  {
    title: "Health & Nutrition",
    icon: <HeartPulse size={20} />,
    items: ["AI Diet Planner", "Sports Injury Prediction", "Recovery Phase Monitor"]
  },
  {
    title: "Logistics & Equipment",
    icon: <Medal size={20} />,
    items: ["Sports Gear Inventory", "Event Logistics AI", "Team Travel Coordination"]
  }
];

const aiFeatures = [
  "Predictive Injury Modeling", "Automated Talent Scouting via Stats", "Real-time Match Analytics",
  "Optimized Training Load Balancing", "Nutritional Gap Analysis", "Dynamic Bracket Generation"
];

const databases = [
  "Athlete_Performance_DB", "Tournament_Fixtures", "Injury_Recovery_Logs", 
  "Sports_Gear_Inventory", "Nutritional_Profiles"
];

const apis = [
  "Wearable Fitness Sync API", "Sports Equipment Vendor Hook", "Hospital/Physio Connect API", 
  "Live Match Scoring Gateway", "National Sports Registry Sync"
];

const dashboards = [
  "Athlete Vitals Dashboard", "Tournament Bracket Overview", "Sports Budget & Expense", 
  "Injury Heatmap"
];

const reports = [
  "Quarterly Police Sports Report", "Athlete Progress Cards", "Tournament Expense Audit",
  "Equipment Wear & Tear Analysis"
];

const security = [
  "Athlete Medical Data Encryption", "RBAC for Selection Committees", "Immutable Match Result Logs",
  "Secure Doping Control Records"
];

const futureScope = [
  "VR-based Tactical Sports Training", "Computer Vision Referee Assist", "AI Biomechanical Analysis",
  "Smart Stadium Crowd Management"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Sports Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Athletic Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceSportsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Trophy className="inline-icon" size={28} /> AI Police Sports Overview
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Sports Module</strong> uses advanced AI to foster a culture of fitness and competitive sports within the department. It tracks athlete performance metrics, predicts potential injuries using wearable data, and completely automates the logistics of managing inter-departmental tournaments.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">360°</div>
                <div className="stat-label">Athlete Profiling</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">AI</div>
                <div className="stat-label">Diet & Recovery</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Live</div>
                <div className="stat-label">Fixture Tracking</div>
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
            {sportsModules.map((mod, i) => (
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
      
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> BACK TO MODULES
        </button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper">
            <Trophy size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>SPORTS</span></h1>
            <p className="cyber-subtitle">Athlete Analytics, Injury Prediction & Tournaments</p>
          </div>
        </div>
      </header>

      <div className="hrms-layout">
        <aside className="hrms-sidebar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </aside>
        <main className="hrms-main-content scrollbar-hide">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default PoliceSportsDetailed;
