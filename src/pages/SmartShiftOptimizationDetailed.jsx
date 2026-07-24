import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Clock, Calendar, Map
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Predictive Crime Hotspot Shift AI", "Minimum Strength Enforcer Bot", "Fatigue & Overwork Predictor",
  "8-Hour Shift Compliance AI", "Night Patrol Rotation Balancer", "Traffic Peak Hour Allocator",
  "VIP Route Dynamic Scheduler", "Festival Crowd Deployment AI", "Riot Rapid Response Standby AI",
  "Dial 112 Dispatch Shift Optimizer", "Cyber Cell 24/7 Roster AI", "Forensic Lab On-Call Scheduler",
  "Women Helpdesk Continuous Roster", "Highway Checkpost Rotation AI", "Railway Police Shift Balancer",
  "Airport Security Shift Optimizer", "Armoury Guard Roster AI", "Prison Escort Duty Predictor",
  "Court Summon Appearance Scheduler", "Leave Deficit Compensator AI", "Sick Leave Auto-Replacement",
  "Maternity/Pregnancy Light Duty AI", "Senior Citizen Helpdesk Roster", "K9 Unit Rest-Shift Balancer",
  "Mounted Police Fatigue Tracker", "Band Unit Practice Scheduler", "Double-Shift Prevention AI",
  "Commute Distance Optimizer", "Carpool Shift Synchronizer AI", "Officer Skill-to-Crime Matcher",
  "Linguistic Skill Duty Assigner", "Inter-Station Duty Swapper AI", "Emergency Riot Mobilizer AI",
  "Election Booth Threat Allocator", "Border Smuggling Night Patrol AI", "Poaching/Forest Duty Roster AI",
  "Marine Police Tidal Shift AI", "Aviation Wing Pilot Roster", "Bomb Squad Rotational Rest AI",
  "Tear Gas Unit Standby AI", "CCTNS Data Entry Shift AI", "Social Media Monitoring Roster",
  "Undercover Ops Disguised Shift AI", "Informant Meeting Scheduler AI", "Weapon Audit Duty Assigner",
  "Station House Officer (SHO) Planner", "Sub-Inspector Case Load Balancer", "Constabulary Beat Allocation AI",
  "Age-based Duty Intensity AI", "Weather-Condition Duty Adapator", "Monsoon Disaster Standby AI",
  "Heatwave Traffic Shift Reducer", "Winter Fog Highway Patrol AI", "Female Officer Night Safety AI",
  "Biometric Shift Check-in AI", "Geo-Fenced Shift Start Enforcer", "AWOL Instant Alerter AI",
  "Overtime Compensation Tracker", "Weekly Rest Day Guaranteed AI", "Post-Night Shift Recovery AI"
];

const modules = [
  {
    title: "Predictive & Dynamic Shifts",
    icon: <Clock size={20} />,
    items: ["Crime Hotspot Rosters", "Traffic Peak Hour", "Weather-Based Adapters", "Dial 112 Dispatch"]
  },
  {
    title: "Well-being & Fatigue",
    icon: <Activity size={20} />,
    items: ["8-Hour Compliance", "Double-Shift Prevention", "Heatwave Shift Reducers", "Post-Night Recovery"]
  },
  {
    title: "Skill & Logistics Matching",
    icon: <Map size={20} />,
    items: ["Commute Distance Sync", "Linguistic Skill Matching", "Carpool Synchronizer", "Female Officer Safety"]
  },
  {
    title: "Specialized Unit Rosters",
    icon: <ShieldAlert size={20} />,
    items: ["K9 & Mounted Rest", "Cyber Cell 24/7", "Undercover Ops shifts", "Marine Tidal Shifts"]
  },
  {
    title: "Compliance & Audits",
    icon: <FileText size={20} />,
    items: ["Minimum Strength Locks", "Geo-Fenced Check-in", "AWOL Alerters", "Overtime Tracking"]
  }
];

const aiFeatures = [
  "Predictive Algorithm for Crime vs Shift Strength", "Geo-Fenced Biometric Shift Check-ins", "Automated Double-Shift Prevention",
  "Dynamic Weather-Based Shift Reductions (Heatwaves)", "Carpool & Commute Distance Optimization", "Linguistic Skill-to-Beat Matching"
];

const databases = [
  "Dynamic_Roster_Ledger", "Shift_Fatigue_Telemetry", "Crime_Hotspot_Matrix", "Geo_Fence_Checkins", 
  "Skill_Linguistic_DB", "Weather_API_Logs", "Specialized_Unit_Rosters", "AWOL_Overtime_Vault"
];

const dashboards = [
  "Live Station Strength Map", "Predictive Crime Hotspot Roster", "Fatigue & Overtime Alerts", 
  "Women Officer Safety Board", "Special Ops (K9/Cyber) Status", "Geo-Fenced Absence Tracker"
];

const apis = [
  "CCTNS Crime Heatmap Sync", "Meteorological Weather API", "Biometric Attendance Gateway", 
  "Dial 112 Dispatch Sync", "Google Maps Commute API", "State Election Protocol Sync"
];

const reports = [
  "Monthly Shift Equity Audit", "8-Hour Shift Compliance Log", "Fatigue vs Crime Resolution Rate", 
  "Overtime Payout Estimates", "AWOL & Geo-Fence Breaches", "Specialized Unit Utilization"
];

const security = [
  "Anti-Tamper Roster Lockdowns", "Biometric/GPS Spoofing Detection", "Immutable Shift Swapping Logs", 
  "Role-Based Manual Overrides", "Encrypted Informant Meeting Shifts", "Secure VIP Routing Logic"
];

const futureScope = [
  "Autonomous Drone Patrol Handoffs", "Wearable IoT Vitals-Based Shift Relief", "AI Traffic Flow Predictive Rostering",
  "Blockchain Verified Overtime Payouts", "Quantum Computing for Mega-Event Rosters", "Voice-Activated Duty Swaps"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Shift Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Rostering Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Shift Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const SmartShiftOptimizationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Clock className="inline-icon" size={28} /> Smart Shift Optimization AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Smart Shift Optimization AI</strong> replaces outdated manual duty registers with a highly dynamic, predictive scheduling engine. It aligns force strength with real-time crime hotspots, strictly enforces 8-hour work limits, prevents illegal double-shifts, and optimizes commute distances to ensure peak officer performance.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Map className="inline-icon" color="#3b82f6" /> Crime-Predictive Rosters</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Syncs with CCTNS to deploy maximum strength during predicted high-crime windows. Matches officers with specific linguistic skills to corresponding demographic beats.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Fatigue & Well-being</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Algorithmically blocks the assignment of illegal double-shifts. Reduces shift hours automatically during extreme heatwaves or monsoon disasters.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Clock className="inline-icon" color="#f59e0b" /> Geo-Fenced Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Officers clock in via biometric, GPS-verified apps. Instantly alerts command if an officer is AWOL or abandons a designated VIP route early.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Specialized Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Optimizes rest periods for K9 units, aligns Marine police shifts with coastal tidal patterns, and maintains strict 24/7 overlapping rosters for Dial 112 dispatchers.</p>
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
            {modules.map((mod, i) => (
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
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Data Ledgers</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> Integration APIs</h3>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Audit Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Roster Integrity</h3>
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
            <Clock size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">SMART SHIFT <span>OPTIMIZATION AI</span></h1>
            <p className="cyber-subtitle">Crime-Predictive Rosters, Fatigue Alarms & Geo-Fenced Duty</p>
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

export default SmartShiftOptimizationDetailed;
