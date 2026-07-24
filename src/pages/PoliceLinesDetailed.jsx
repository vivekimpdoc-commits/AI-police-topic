import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Tent, Users, MapPin
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Barrack Occupancy AI", "Parade Ground Allocator", "Quarter Guard Bot", 
  "Mess Attendance Scorer", "Sports Activity Tracker", "Police Band Manager", 
  "Inventory Optimizer", "Event Scheduler AI", "Sanitation Check Bot",
  "Duty Roster Randomizer", "Line Discipline AI"
];

const linesModules = [
  {
    title: "Barrack & Accommodations",
    icon: <Tent size={20} />,
    items: ["AI Occupancy Forecasting", "Automated Bed Allocation", "Maintenance Request Routing", "Energy Usage Analytics"]
  },
  {
    title: "Parade & Quarter Guard",
    icon: <Users size={20} />,
    items: ["Parade Ground Booking Sync", "Drill Attendance (Facial Rec.)", "Quarter Guard Duty Roster", "Automated Inspection Alarms"]
  },
  {
    title: "Mess & Nutrition",
    icon: <Activity size={20} />,
    items: ["Biometric Mess Attendance", "Caloric Intake Estimates", "Automated Ration Reordering", "Menu Rotation AI"]
  },
  {
    title: "Sports & Police Band",
    icon: <Network size={20} />,
    items: ["Athlete Progress Tracking", "Tournament Selection Bot", "Band Instrument Inventory", "Event Rehearsal Scheduling"]
  },
  {
    title: "Police Line Inventory",
    icon: <MapPin size={20} />,
    items: ["Riot Gear Check-in/out", "Tent & Furniture Tracking", "Sanitation Audit Automation", "Store Depletion Alerts"]
  }
];

const aiFeatures = [
  "AI Facial Recognition for Mess Attendance", "AI Predictive Maintenance for Barracks", "AI Roster Generation for Quarter Guard",
  "AI Ration Depletion Forecasting", "AI Athlete Stamina Analytics", "AI Inventory Barcode Parsing",
  "AI Energy/Water Consumption Modeling", "AI Duty Rest-Period Enforcement"
];

const databases = [
  "Barrack_Occupancy_Ledger", "Parade_Ground_Schedules", "Mess_Attendance_Logs", "Quarter_Guard_Roster", "Athlete_Performance_DB", 
  "Band_Instrument_Inventory", "Line_Store_Stock", "Sanitation_Audit_Trails", "Maintenance_Tickets"
];

const dashboards = [
  "Live Barrack Occupancy", "Quarter Guard Deployment", "Mess Consumption Tracker", 
  "Police Line Inventory Heatmap", "Sports Team Readiness", "Maintenance Pendency"
];

const apis = [
  "Biometric Mess Turnstile APIs", "Smart Meter (Electricity) Sync", "CCTV Facial Recognition Stream", "HRMS Duty Roster Integration",
  "E-Procurement Gateway (Rations)", "Hospital Vitals API (Athletes)"
];

const reports = [
  "Monthly Mess Ration Expenditure", "Barrack Utilization Efficiency", "Quarter Guard Discipline Score", 
  "Sports Tournament Roster", "Inventory Audit (Missing Items)", "Sanitation Compliance Report"
];

const security = [
  "Geo-Fenced Biometric Check-ins", "Strict Access Control for Quarter Guard", "Audit Trails for Riot Gear Issuance", 
  "Automated Alert on Mess Tailgating", "CCTV Dead-Zone Detection", 
  "Encrypted Duty Rosters", "Hardware Tamper Sensors on Armory", "Offline Mode for Mess Entry"
];

const futureScope = [
  "AI Robotic Cleaning Swarms for Barracks", "Automated Drone Quarter Guard Patrols", "VR Parade Rehearsal Systems",
  "Predictive Dietary Customization for Athletes", "Holographic Notice Boards", "IoT Smart Barrack Climate Control"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Line Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Admin Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Line Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceLinesDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Tent className="inline-icon" size={28} /> AI Police Lines Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Lines Management</strong> brings smart-city technology into the police barracks. By automating bed allocations, mess attendance via biometrics, and inventory tracking for riot gear, the AI ensures the reserve force is always rested, well-fed, and fully equipped.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Tent className="inline-icon" color="#3b82f6" /> Smart Barracks</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks real-time bed occupancy across all barracks. When new forces arrive, the AI instantly allocates available beds and monitors electricity/water usage to prevent wastage.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#10b981" /> Parade & Quarter Guard</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automates the booking of the Parade Ground to avoid schedule conflicts. The AI generates randomized, bias-free duty rosters for the critical Quarter Guard detail.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Digital Mess</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Utilizes turnstiles with facial recognition to track exactly who eats at the mess. AI calculates daily consumption and autonomously places purchase orders for depleting rations.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MapPin className="inline-icon" color="#ef4444" /> Line Inventory</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Digital tracking of tents, furniture, and emergency riot gear. A barcode system ensures fast check-out during mass deployments and alerts if items are not returned.</p>
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
            {linesModules.map((mod, i) => (
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
            <Tent size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>LINES</span></h1>
            <p className="cyber-subtitle">Barracks, Mess Management & Quarter Guard</p>
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

export default PoliceLinesDetailed;
