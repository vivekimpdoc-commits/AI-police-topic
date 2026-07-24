import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Building, UserCheck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "DGP Workflow Optimizer", "ADG/IG Priority Scorer", "Visitor Pass Automator", 
  "HQ Meeting Scheduler AI", "Approval Chain Bot", "Circular Monitor AI", 
  "File Room Locator", "VIP Security Routing", "Press Release Generator",
  "Event Management AI", "Protocol Officer Bot"
];

const hqModules = [
  {
    title: "Senior Officer Workflow (DGP/ADG)",
    icon: <Building size={20} />,
    items: ["AI Mail Summarization", "Priority Agenda Stacking", "Automated Action Item Extraction", "Secure Comms Portal"]
  },
  {
    title: "HQ Visitor Management",
    icon: <UserCheck size={20} />,
    items: ["Facial Recognition Entry", "Digital Visitor Pass (QR)", "Background OSINT Vetting", "Overstay Alerts within HQ"]
  },
  {
    title: "Approval Workflow Automation",
    icon: <CheckCircle size={20} />,
    items: ["Multi-Tier e-Signatures", "Pendency Red-Flagging", "Automated Follow-ups", "Audit Trail Preservation"]
  },
  {
    title: "Police File Room Manager",
    icon: <FileText size={20} />,
    items: ["RFID Physical File Tracking", "Automated Digitization Queue", "Historical Record Retrieval", "Dampness/Fire Sensor Sync"]
  },
  {
    title: "Circular & Protocol Monitoring",
    icon: <Activity size={20} />,
    items: ["Read-Receipt Analytics for Districts", "VIP Visit Protocol Orchestration", "Press Briefing Fact-checker", "Event Calendar Sync"]
  }
];

const aiFeatures = [
  "AI Extractive Summarization for 100-page Files", "AI Sentiment Scoring on Incoming HQ Mail", "AI Dynamic Routing for Fast-Track Approvals",
  "AI Predictive Scheduling for DGP", "AI Facial Liveness Detection for Visitors", "AI Anomaly Detection in File Movements",
  "AI Multi-lingual Press Release Generation", "AI Automated Protocol Briefings"
];

const databases = [
  "Senior_Officer_Inboxes", "Visitor_Access_Logs", "Approval_Chain_Ledger", "RFID_File_Tracking", "HQ_Meeting_Schedules", 
  "Circular_Read_Receipts", "VIP_Protocol_Plans", "Press_Release_Archive", "Physical_File_Index"
];

const dashboards = [
  "DGP Command Dashboard", "HQ Security & Visitor Radar", "State-wide Circular Compliance", 
  "File Pendency Heatmap", "VIP Movement Tracker", "HQ Meeting Room Utilization"
];

const apis = [
  "State Secretariat e-Office Sync", "Vahan/Aadhar API (Visitor Vetting)", "CCTV Facial Recognition Feeds", "Digital Signature (DSC) Gateways",
  "SMS/Email Notification Engines", "Smart Building IoT Sensors"
];

const reports = [
  "Daily HQ Operations Summary", "Visitor Footfall & Security Audit", "Senior Officer Pendency Report", 
  "Circular Adherence Metrics", "File Digitization Progress", "VIP Event Execution Report"
];

const security = [
  "Biometric + MFA for Top Secret Files", "Air-Gapped DGP Terminal", "Anti-Tailgating Sensors at Entry", 
  "Strict RFID Zoning within HQ", "Tamper-Evident Digital Logs", 
  "Encrypted VoIP for Inter-Office Comms", "Faraday Cage Meeting Rooms", "Automated Drone Defense over HQ"
];

const futureScope = [
  "AI Holographic Briefing Rooms", "Telepresence Robots for Remote Officers", "Quantum-Safe HQ Intranet",
  "Predictive Administrative Bottleneck AI", "Fully Paperless Zero-Touch HQ", "Autonomous VIP Convoy Routing"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'HQ Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Workflow Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Command Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceHQDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Building className="inline-icon" size={28} /> AI Police Headquarters Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Headquarters Management</strong> digitalizes the core operational hub of the state police. From optimizing the DGP's daily workflow to securing physical premises via AI visitor tracking, this module ensures the HQ runs with corporate efficiency and military-grade security.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Building className="inline-icon" color="#3b82f6" /> DGP/ADG Workflow</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI summarizes 100-page reports into 3-point action items for senior officers, auto-schedules meetings based on priority, and flags urgent communications from the State Secretariat.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><UserCheck className="inline-icon" color="#10b981" /> Smart Visitor Pass</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Replaces paper passes with a digital QR system linked to Aadhar and Facial Recognition. The AI performs an instant OSINT background check before granting HQ access.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#f59e0b" /> RFID File Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>All physical files in the Central Record Room are RFID-tagged. A digital dashboard shows the exact physical location of any file within the HQ building to prevent loss.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><CheckCircle className="inline-icon" color="#ef4444" /> Circular Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>When a new policy circular is dispatched, the AI tracks read-receipts across all districts and auto-generates compliance reports, highlighting SPs who have not yet acknowledged the order.</p>
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
            {hqModules.map((mod, i) => (
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
            <Building size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>HEADQUARTERS</span></h1>
            <p className="cyber-subtitle">DGP Workflow, Visitor Access & HQ File Tracking</p>
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

export default PoliceHQDetailed;
