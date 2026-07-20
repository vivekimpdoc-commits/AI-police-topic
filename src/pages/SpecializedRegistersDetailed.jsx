import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, BookOpen, MapPin
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Lost Children AI", "Unknown Vehicle Tracker", "Property Marking Bot", 
  "Repeat Incident Analyzer", "Encroachment Detector", "Hazard Zone Mapper", 
  "Asset Registry Bot", "Incident Pattern AI", "Register Auditor AI",
  "Livestock Tracker Bot", "Infrastructure Monitor AI", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const registerModules = [
  {
    title: "Missing & Lost Tracking",
    icon: <MapPin size={20} />,
    items: ["AI Lost Children Register", "Missing Livestock Report", "Unknown/Abandoned Vehicle Register", "Amnesia/Unknown Persons"]
  },
  {
    title: "Property & Assets",
    icon: <Database size={20} />,
    items: ["AI Property Marking Registry", "Critical Asset Register", "Seized Property Tracking", "Unclaimed Property Auction"]
  },
  {
    title: "Incident & Hazard Zones",
    icon: <ShieldAlert size={20} />,
    items: ["Repeat Incident Location Register", "Hazardous Location Register", "Disaster-Prone Area Register", "Illegal Encroachment Complaints"]
  },
  {
    title: "Infrastructure & Public",
    icon: <Activity size={20} />,
    items: ["Public Infrastructure Incidents", "Damaged Roads/Signals Alerts", "Public Utilities Failure Log", "Community Safety Mapping"]
  }
];

const aiFeatures = [
  "AI Facial Recognition to identify lost children from uploaded photos", "AI ANPR matching of unknown vehicles against stolen vehicle databases", "AI Predictive Risk Mapping of Repeat Incident Locations",
  "AI Automated Alerts when livestock strays into highway zones", "AI Satellite Imagery for detecting illegal encroachments", "AI Pattern Recognition of recurring hazardous locations",
  "AI Text Mining of FIRs to update repeat incident registers", "AI Automated Reminder for Time-Bound Register Maintenance"
];

const databases = [
  "Lost_Children_Index", "Unknown_Vehicle_Registry", "Property_Marking_DB", "Repeat_Incident_Map", "Hazardous_Zone_Index", 
  "Encroachment_Complaints", "Critical_Asset_Ledger", "Livestock_Report_DB"
];

const dashboards = [
  "State-wide Missing Persons Map", "Unknown Vehicle Heatmap", "Repeat Incident Hotspots", 
  "Hazard Zone Risk Levels", "Encroachment Complaint Status", "Register Compliance Audit"
];

const apis = [
  "CCTNS (Crime Tracking Network)", "UIDAI (Aadhar for Missing Persons)", "ANPR (Auto Number Plate Recognition)", "Municipal Corporations (Encroachment)",
  "Animal Husbandry Dept APIs", "Public Infrastructure Departments"
];

const reports = [
  "Annual Missing Persons Resolution", "Unknown Vehicle Investigation Status", "Encroachment Action Taken", 
  "Hazard Zone Risk Report", "Register Maintenance Compliance", "Critical Asset Loss Report"
];

const security = [
  "PII Protection for Missing Children Data", "Strict Access Control for Sensitive Registers", "Tamper-proof Digital Register Signatures", 
  "Blockchain Audit of Property Transfers", "Data Retention Policy Enforcement", 
  "Encrypted Cloud Backup of All Registers", "Zero-Trust API Sync with External Depts", "Anomaly Alerts on Register Manipulation"
];

const futureScope = [
  "AI Pet Microchip National Registry", "Blockchain-based Immutable Land Encroachment Registry", "Drone Surveys for Hazard Zone Mapping",
  "Computer Vision for Auto-detecting Road Hazards via CCTV", "National Missing Persons Facial Recognition Grid", "IoT Sensors for Structural Infrastructure Health"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Registry Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Register Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const SpecializedRegistersDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <BookOpen className="inline-icon" size={28} /> AI Specialized Police Registers
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Specialized Registers</strong> digitizes the dozens of mandatory physical registers maintained at every police station. AI automates data entry, cross-references entries against state-wide databases, and flags compliance gaps — eliminating the risk of missing a critical entry in a dusty physical register.
            </p>
            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MapPin className="inline-icon" color="#3b82f6" /> AI Lost Children Register</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI facial recognition matches photos of found children against the missing persons database in real-time. Parents receive instant alerts, drastically reducing reunification time from months to hours.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#10b981" /> Property Marking Registry</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Citizens can register serial numbers of valuables (phones, laptops, jewellery). If stolen property is recovered at any station in the state, the AI instantly cross-references it and alerts the owner.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Repeat Incident Mapping</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI analyzes FIR data to identify specific streets or locations with recurring incidents (chain snatching, accidents, fights). These 'hot spots' are auto-added to the Repeat Incident Register and flagged for targeted patrolling.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Encroachment Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Integrates with satellite imagery APIs to automatically detect new unauthorized construction on public land. Complaints are logged, and the system tracks the municipality's action-taken status to follow up.</p>
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
            {registerModules.map((mod, i) => (
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
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><BookOpen size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">SPECIALIZED <span>REGISTERS</span></h1><p className="cyber-subtitle">Lost Children, Property Marking & Hazard Mapping</p></div>
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

export default SpecializedRegistersDetailed;
