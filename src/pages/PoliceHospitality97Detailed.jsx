import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Coffee, Users, Utensils
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "VIP Lounge Manager AI", "Event Catering Predictor", "Guest Profiler Bot", 
  "Inventory Forecaster AI", "Allergy Analyzer Bot", "Venue Allocation AI", 
  "Expense Auditor Bot", "Protocol Assistant", "Feedback Sentiment Analyzer"
];

const hospitalityModules = [
  {
    title: "Event & Conference Hosting",
    icon: <Users size={20} />,
    items: ["AI VIP Lounge Management", "Seating Arrangement Optimizer", "Event Check-in Kiosks"]
  },
  {
    title: "Catering & Mess Management",
    icon: <Utensils size={20} />,
    items: ["AI Conference Hospitality Planner", "Automated Menu Planner", "Nutritional Value Tracker"]
  },
  {
    title: "VIP Lounge & Accommodations",
    icon: <Coffee size={20} />,
    items: ["AI Guest Refreshment Inventory", "Guest House Booking System", "Room Service Automation"]
  },
  {
    title: "Billing & Feedback",
    icon: <FileText size={20} />,
    items: ["Hospitality Expense Auditor", "Guest Sentiment Analysis", "Vendor Billing Sync"]
  }
];

const aiFeatures = [
  "Predictive Food Waste Reduction", "Automated VIP Preference Matching", "Real-Time Mess Inventory Tracking",
  "Facial Recognition Guest Check-ins", "Dynamic Menu Pricing & Auditing", "Sentiment-based Feedback Loops"
];

const databases = [
  "VIP_Guest_Preferences", "Mess_Inventory_Logs", "Event_Booking_DB", 
  "Vendor_Billing_Records", "Hospitality_Feedback"
];

const apis = [
  "Catering Vendor API", "Govt Accommodation Sync Hook", "Event Management Gateway", 
  "Payment Processing API", "Weather Hook (for outdoor events)"
];

const dashboards = [
  "Live Guest House Occupancy", "Mess Expense Tracker", "Event Readiness Map", 
  "VIP Lounge Status"
];

const reports = [
  "Monthly Hospitality Expense Audit", "Food Wastage Report", "Guest Satisfaction Index",
  "Vendor Performance Scorecard"
];

const security = [
  "Redacted VIP Itineraries", "Secure Payment Gateway Integrations", "CCTV Sync in Public Areas",
  "Biometric Access for Mess Staff"
];

const futureScope = [
  "Robotic Waitstaff for Mess Facilities", "Holographic Concierge for VIPs", "Zero-Waste AI Catering",
  "Predictive Culinary Preferences using Genomics"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Hospitality Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Hosting Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceHospitality97Detailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Coffee className="inline-icon" size={28} /> AI Police Hospitality Management
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Hospitality Module</strong> brings AI-driven efficiency to managing police mess facilities, VIP lounges, and large-scale conferences. It optimizes food inventory to reduce waste, remembers VIP preferences, and streamlines the booking of police guest houses.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">Zero</div>
                <div className="stat-label">Food Wastage Target</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">AI</div>
                <div className="stat-label">Guest Profiling</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Audit Transparency</div>
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
            {hospitalityModules.map((mod, i) => (
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
            <Coffee size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>HOSPITALITY</span></h1>
            <p className="cyber-subtitle">VIP Lounges, Mess Inventory & Event AI</p>
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

export default PoliceHospitality97Detailed;
