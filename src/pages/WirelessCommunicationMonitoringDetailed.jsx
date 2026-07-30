import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"TETRA Network Signal Strength AI",
  "VHF/UHF Spectrum Interference Detector",
  "Wireless Jammer Detection Bot",
  "Radio Tower Handover Optimization AI",
  "Dead-Zone/Black-Spot Mapper AI",
  "Cross-Border Radio Frequency Tracker",
  "Illegal/Pirate Radio Broadcast Alert",
  "Encrypted Channel Traffic Monitor",
  "Automated Antenna Tilt Optimizer",
  "Base Station Battery/Power Predictor",
  "Mobile Comm Van (MCV) Signal Linker",
  "Weather/Fog Impact on RF Signal AI",
  "Dynamic Frequency Allocation Bot",
  "Bandwidth Congestion Predictor",
  "Radio Handset Battery Drain AI",
  "Emergency SOS Button Signal Booster",
  "Network Packet Loss/Drop Analyzer",
  "VIP Convoy Mobile Signal Sanitizer",
  "High-Altitude Drone Signal Relay Bot",
  "Mountain/Hilly Terrain Signal Modeler",
  "Underground/Metro Signal Extender AI",
  "Riot/Crowd Cell-Network Choke Predictor",
  "Cross-State Radio Frequency Sync",
  "Automated Comm Log Archive Sync",
  "Hardware Malfunction Predictor AI",
  "Microwave Link Line-of-Sight Monitor",
  "Satellite Backhaul Switchover AI",
  "Radio Interference Source Triangulator",
  "Smart City Mesh Network Linker",
  "Coastal/Maritime VHF Range Optimizer",
  "Railway/Train Radio Network Sync AI",
  "Airport/Aviation Band Conflict Detector",
  "Election Booth Comm Health Monitor",
  "Festival/Event Ad-hoc Tower Planner",
  "Radio Firmware/Software Patch Audit",
  "Hardware Encryption Key Rotation Sync",
  "Inter-Agency Radio Patching Validator",
  "Voice Call Clarity/QoS Scorer AI",
  "Automated Daily Radio Health Report",
  "Cyber Attack/DDoS on VoIP Network Alert",
  "Radio Network Access Control AI",
  "Unauthorized Handset Logon Flag",
  "Stolen/Lost Radio Handset Kill-Switch",
  "Dispatch Console Uptime Analyzer",
  "Remote Base Station Tamper Alert",
  "Solar-Powered Repeater Efficiency AI",
  "Lightning Strike/Surge Predictor",
  "Network Load Balancing Router AI",
  "Multi-Cast/Broadcast Efficiency AI",
  "Radio Signal Reflection/Multipath Modeler",
  "Disaster/Earthquake Comm Resilience Scorer",
  "Historical Network Outage Correlator",
  "Command Center Real-time RF Dashboard",
  "Officer Geolocation via Radio Triangulation",
  "Radio Comm API Integration Checker",
  "Vendor SLA Compliance Monitor AI",
  "Public Wi-Fi Interference Tracker",
  "Automated Frequency Licensing Audit",
  "RF Spectrum Auction/Usage Scorer AI",
  "Next-Gen 5G/LTE Police Network Modeler"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Core AI Topics', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Advanced Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const WirelessCommunicationMonitoringDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI WIRELESS COMM MONITORING
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI WIRELESS COMM MONITORING</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in tetra network health, vhf/uhf spectrum interference & signal strength heatmaps.
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
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan" onClick={() => navigate(`/agent/${encodeURIComponent(expert)}`)} style={{cursor: 'pointer'}}>
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
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple" onClick={() => navigate(`/agent/${encodeURIComponent(expert)}`)} style={{cursor: 'pointer'}}>
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
            <h1 className="cyber-title">AI WIRELESS COMM <span>MONITORING</span></h1>
            <p className="cyber-subtitle">TETRA Network Health, VHF/UHF Spectrum Interference & Signal Strength Heatmaps</p>
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

export default WirelessCommunicationMonitoringDetailed;
