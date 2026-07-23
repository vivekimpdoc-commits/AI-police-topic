import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Building, Calendar
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Room Booking Optimizer", "Visitor Queue Manager", "Asset Reservation Bot", 
  "Digital Notice Board AI", "Office Consumables Tracker", "Vehicle Booking AI", 
  "Intercom Directory Bot", "Seating Allocation AI", "Conference Scheduler",
  "Stationery Stock Bot", "Facility Maintenance AI"
];

const adminModules = [
  {
    title: "Space & Resource Booking",
    icon: <Calendar size={20} />,
    items: ["AI Canteen Inventory", "Conference Hall Scheduler", "Official Vehicle Booking", "Office Asset Reservation"]
  },
  {
    title: "Visitor & Queue Management",
    icon: <Activity size={20} />,
    items: ["AI Uniform Issuance Tracker", "AI-based Queue Token System", "VIP/Senior Officer Fast Track", "Digital Reception Dashboard"]
  },
  {
    title: "Digital Office Tools",
    icon: <FileText size={20} />,
    items: ["AI Departmental Leave Manager", "AI Intercom Directory", "Digital Memo/Circular System", "Department-wise Calendar"]
  },
  {
    title: "Consumables & Stationery",
    icon: <Database size={20} />,
    items: ["Office Consumables Tracking", "AI Stationery Distribution", "Auto-replenishment Alerts", "Budget Consumption Reports"]
  }
];

const aiFeatures = [
  "AI Conflict Detection for Double-booked Rooms", "AI Predictive Scheduling of High-demand Meeting Rooms", "AI Voice-command Interface for Room Bookings",
  "AI Visitor Queue Wait-time Predictions", "AI Automated Meeting Minutes Generation", "AI Smart Notice Board with Personalized Content",
  "AI Energy Efficiency Monitoring for Office Spaces", "AI Stationery Consumption Forecasting per Department"
];

const databases = [
  "Room_Booking_Ledger", "Visitor_Log_Archive", "Asset_Reservation_DB", "Office_Consumables_Inventory", "Notice_Board_Content", 
  "Vehicle_Booking_Queue", "Intercom_Directory", "Department_Calendar_DB"
];

const dashboards = [
  "Room Utilization Heatmap", "Visitor Traffic Analytics", "Asset Availability Board", 
  "Consumables Burn Rate", "Vehicle Fleet Usage", "Dept-wise Stationery Cost"
];

const apis = [
  "MS Teams/Google Meet Integration", "Vehicle GPS Tracking API", "Smart Building IoT Sensors", "Email/SMS Notification Gateway",
  "Biometric Visitor Registration", "Digital Signature (e-Sign) for Memos"
];

const reports = [
  "Monthly Room Utilization Report", "Visitor Foot Traffic Analysis", "Asset Maintenance Status", 
  "Stationery Budget Audit", "Vehicle Usage Efficiency", "Office Energy Consumption"
];

const security = [
  "Visitor ID Verification via Aadhar", "Access Control Badges for Sensitive Zones", "CCTV Sync with Visitor Log", 
  "Encrypted Digital Memos", "Data Privacy for Visitor Records (30-day purge)", 
  "Tamper-proof Booking Records", "Role-Based Posting for Notice Board", "Audit Logs for Asset Allocation"
];

const futureScope = [
  "AI Autonomous Meeting Room Climate Control", "Facial Recognition based Visitor Check-in", "Blockchain Facility Management Records",
  "Smart Desk Booking for Hot-desking Officers", "AI Personal Office Assistant Bot", "Robotic Process Automation for Stationery Requests"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Office Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Admin Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Usage Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const InternalAdminDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Building className="inline-icon" size={28} /> AI Internal Administration
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Internal Administration</strong> digitizes the day-to-day operations of police headquarters and zonal offices. From booking a conference room to managing visitor queues, AI eliminates manual coordination overhead, so officers can focus on policing rather than paperwork.
            </p>
            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Calendar className="inline-icon" color="#3b82f6" /> Smart Room Booking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI detects scheduling conflicts, recommends alternative rooms and automatically sets up video conferencing links for hybrid meetings, ensuring maximum utilization of office infrastructure.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Visitor Queue AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI manages walk-in visitor queues, issuing digital tokens and predicting wait times. Senior citizens and officers in uniform are automatically fast-tracked, improving the public's experience.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#f59e0b" /> Digital Notice Board</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Replaces physical notice boards with an AI-powered digital system. Officers see only the notices relevant to their rank, unit and department, reducing information overload.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#ef4444" /> Stationery Intelligence</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI tracks consumption of office supplies per department and triggers auto-replenishment orders before stock runs out, preventing the classic 'out of printer paper' situation at critical moments.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan">
                <Bot className="card-icon" /><h4>{expert}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {adminModules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">{mod.icon}<h3>{mod.title}</h3></div>
                <div className="module-tags">{mod.items.map((item, j) => <span key={j} className="module-tag">{item}</span>)}</div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid">
            {aiFeatures.map((feat, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple">
                <Cpu className="card-icon" /><h4>{feat}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel"><h3><Database className="inline-icon" color="#06b6d4" /> Database Tables</h3><div className="tag-cloud">{databases.map((db, i) => <span key={i} className="tech-tag">{db}</span>)}</div></div>
              <div className="panel"><h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3><div className="tag-cloud">{apis.map((api, i) => <span key={i} className="tech-tag tech-tag-alt">{api}</span>)}</div></div>
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel"><h3><LayoutDashboard className="inline-icon" color="#3b82f6" /> Dashboards</h3><ul className="premium-list">{dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>)}</ul></div>
              <div className="panel"><h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3><ul className="premium-list">{reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>)}</ul></div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel highlight-red"><h3><ShieldAlert className="inline-icon" color="#ef4444" /> Security Protocols</h3><ul className="premium-list">{security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}</ul></div>
              <div className="panel highlight-green"><h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3><ul className="premium-list">{futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}</ul></div>
            </div>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="hrms-detailed-page">
      <div className="hrms-bg-fx"></div>
      <div className="hrms-grid-overlay"></div>
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn"><ArrowLeft size={20} /> BACK TO MODULES</button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><Building size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">INTERNAL <span>ADMINISTRATION</span></h1><p className="cyber-subtitle">Smart Office, Room Booking & Queue Management</p></div>
        </div>
      </header>
      <div className="hrms-layout">
        <nav className="hrms-sidebar">
          {tabs.map(tab => (
            <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.icon} {tab.label}</button>
          ))}
        </nav>
        <main className="hrms-content-area">
          <AnimatePresence mode="wait"><div key={activeTab}>{renderContent()}</div></AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default InternalAdminDetailed;
