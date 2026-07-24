import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Calendar, Clock, Map
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "General Duty Roster AI", "Night Patrol Scheduler AI", "Traffic Point Duty Allocator",
  "VIP Route Duty Assigner", "Court Evidence Duty AI", "Station House Guard Allocator",
  "Escort Duty (Prisoners) AI", "Cash Escort Scheduler AI", "Emergency Reserve Duty AI",
  "Festival Deployment Optimizer", "Riot Control Standby AI", "Election Booth Duty Planner",
  "Sick Leave Approval AI", "Casual Leave Allocator", "Earned Leave Balancer AI",
  "Maternity/Paternity Leave AI", "Study Leave Assessor", "Half-Pay Leave Calculator",
  "Compensatory Off Tracker", "Weekly Rest Day Scheduler", "Festival Holiday Rotator",
  "Leave Encashment Auditor", "Unauthorized Absence Flag AI", "AWOL (Absent Without Leave) Tracker",
  "Medical Certificate Verifier", "Leave Extension Negotiator", "Station Minimum Strength AI",
  "District Border Seal Duty AI", "Highway Checkpost Duty AI", "Railway Station Patrolling AI",
  "Airport Security Roster AI", "Religious Site Guard AI", "Hospital Duty Assigner",
  "Control Room Shift AI", "CCTNS Operator Scheduler", "Dial 112 Dispatcher Roster AI",
  "K9 Handler Duty Rotator", "Mounted Police Duty Planner", "Cyber Cell Shift Optimizer",
  "Forensic Team Call-out AI", "Bomb Squad Standby AI", "Tear Gas Unit Scheduler",
  "Armed Reserve Roster AI", "Battalion Quarter Guard AI", "Armoury Issue/Deposit Duty AI",
  "Duty Swap Facilitator AI", "Overtime Fatigue Predictor", "Sleep Deprivation Alerter",
  "Double Shift Prevention AI", "Commute Distance Optimizer", "Seniority Based Duty Assigner",
  "Female Officer Shift Safety AI", "Pregnancy Light Duty AI", "Medical Ground Light Duty AI",
  "Suspension Leave Calculator", "Deputation Duty Tracker", "Training Course Leave AI",
  "Sports Meet Duty Exemption AI", "Voter List Verification Duty AI", "Disaster Relief Duty AI"
];

const modules = [
  {
    title: "Shift & Patrol Planning",
    icon: <Clock size={20} />,
    items: ["Night Patrol Rosters", "Traffic Point Allocation", "Control Room Shifts", "Double Shift Prevention"]
  },
  {
    title: "Leave Management",
    icon: <Calendar size={20} />,
    items: ["Casual/Earned Leaves", "Maternity/Paternity", "Leave Encashment", "Medical Verifications"]
  },
  {
    title: "Special & Emergency Duties",
    icon: <ShieldAlert size={20} />,
    items: ["VIP Routes", "Riot Control Standby", "Prisoner Escort", "Election Booths"]
  },
  {
    title: "Force Well-being",
    icon: <Activity size={20} />,
    items: ["Fatigue Prediction", "Weekly Rest Rotator", "Pregnancy Light Duty", "Commute Optimization"]
  },
  {
    title: "Compliance & Absence",
    icon: <FileText size={20} />,
    items: ["AWOL Tracking", "Unauthorized Absence", "Station Minimum Strength", "Duty Swap Audits"]
  }
];

const aiFeatures = [
  "Predictive Fatigue & Burnout Modeling", "Automated Minimum Strength Enforcement", "Smart Commute-Distance Duty Allocation",
  "Real-Time AWOL & Absence Flagging", "Equitable Festival Holiday Rotation", "Dynamic Duty Swapping with Approvals"
];

const databases = [
  "Duty_Roster_Ledger", "Leave_Balance_Vault", "Shift_Fatigue_Telemetry", "Special_Duty_Logs", 
  "Medical_Certificate_DB", "AWOL_Tracking_Registry", "Station_Strength_Matrix", "VIP_Duty_Archive"
];

const dashboards = [
  "Live Station Strength Map", "Statewide Patrol Roster", "Leave Deficit Heatmap", 
  "Fatigue & Overtime Alerts", "VIP & Emergency Deployments", "Absence & AWOL Tracker"
];

const apis = [
  "Biometric Attendance Sync", "Dial 112 Duty Gateway", "E-Hospital Medical Sync", 
  "SMS/WhatsApp Duty Alerts", "Court Summon Sync API", "State Election Commission API"
];

const reports = [
  "Monthly Shift Equitability Report", "Station-wise Leave Audit", "Overtime & Fatigue Analytics", 
  "Special Duty Utilization", "AWOL & Disciplinary Triggers", "Women Officer Safety & Shift Report"
];

const security = [
  "Geo-Fenced Duty Check-ins", "Encrypted Medical Records", "Immutable Leave Balances", 
  "Approval Hierarchy Enforcement", "Anti-Tamper Duty Rosters", "Biometric Duty Swaps"
];

const futureScope = [
  "Wearable IoT Fatigue Monitoring", "Autonomous Patrol Drone Handoffs", "Predictive Sickness Leave Modeling",
  "Blockchain Verified Shift Logs", "AI Voice-Activated Leave Requests", "Real-time Traffic-based Duty Re-routing"
];


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Duty Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Duty Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Roster Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const DutyLeaveExpertDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Calendar className="inline-icon" size={28} /> Duty & Leave Expert AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Duty & Leave Expert AI</strong> is a highly equitable scheduling engine. It eradicates human bias in assigning grueling night patrols or lucrative festival duties. It balances station strength requirements with officer well-being, predicting fatigue and auto-approving leaves without compromising law and order.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Clock className="inline-icon" color="#3b82f6" /> Dynamic Rostering</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically generates night patrol, traffic point, and VIP escort rosters, ensuring no officer is subjected to illegal double shifts or excessive commute distances.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Calendar className="inline-icon" color="#10b981" /> Smart Leave Approval</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Evaluates casual and earned leave requests against minimum station strength. Rotates festival holidays equitably so the same personnel aren't deployed every year.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Well-being & Fatigue</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Predicts sleep deprivation and physical burnout based on shift history. Assigns light duty for pregnant officers or those returning from medical leave.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Absence & Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly flags Unauthorized Absence (AWOL) and integrates with biometric scanners to verify actual physical presence at assigned geo-fenced duty locations.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Analytical Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Integrity & Safety</h3>
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
            <Calendar size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">DUTY & LEAVE <span>EXPERT AI</span></h1>
            <p className="cyber-subtitle">Equitable Rostering, Fatigue Prediction & Smart Approvals</p>
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

export default DutyLeaveExpertDetailed;
