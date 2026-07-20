import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Globe, Handshake } from 'lucide-react';
import '../styles/hrmsDetailed.css';

const aiExperts = ["Intl Training Coordinator", "Exchange Program Bot", "Delegation Manager AI", "UN Standards Tracker", "Bilateral Cooperation AI", "Diplomacy Dashboard Bot", "Conference Manager AI", "Foreign Study Visit AI", "Research Hub Bot", "Global Best Practices AI", "Police Attaché Bot", "Backend Developer AI", "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"];
const intlModules = [
  { title: "Training & Exchange", icon: <Globe size={20} />, items: ["AI Interpol Sync Bot", "Police Exchange Program", "Foreign Study Visit Management", "Joint Simulation Exercises"] },
  { title: "Delegation Management", icon: <Handshake size={20} />, items: ["AI Extradition Tracker", "State Guest Intel Briefs", "Protocol Management", "Foreign Delegate Profiling"] },
  { title: "Knowledge & Standards", icon: <FileText size={20} />, items: ["AI Global Terror Database", "UN Policing Standards Repository", "Interpol Working Group Sync", "Global Security Research Hub"] },
  { title: "Diplomacy & Cooperation", icon: <Activity size={20} />, items: ["Bilateral Cooperation Tracker", "International Conference Management", "Police Diplomacy Dashboard", "Treaty Compliance Monitoring"] }
];
const aiFeatures = ["AI NLP Translation for International Police Reports", "AI Matching of Indian Officers to UN Peacekeeping Roles", "AI Profiling of Visiting Foreign Delegations for Protocol", "AI Knowledge Extraction from Interpol Research Papers", "AI Automated Compliance Check against UN Policing Standards", "AI Conference Agenda Optimization from Past Proceedings", "AI Tracking of International Obligations and Deadlines", "AI Recommending Global Training Opportunities for Specialists"];
const databases = ["Intl_Training_Registry", "Exchange_Program_DB", "Delegation_Visit_Logs", "Bilateral_Cooperation_Tracker", "UN_Standards_Archive", "Global_Best_Practices", "Conference_Proceedings", "Diplomacy_Activity_DB"];
const dashboards = ["Active International Partnerships", "Exchange Officer Status", "UN Commitment Compliance", "Delegation Visit Calendar", "Global Training Opportunities", "International Conference Pipeline"];
const apis = ["Interpol Secure Network", "UN Policing Division API", "Ministry of External Affairs (MEA)", "Commonwealth Police Network", "SAARC Police Chiefs Network", "State Dept Intelligence Sharing Gateway"];
const reports = ["Annual International Cooperation Report", "Exchange Program ROI Analysis", "UN Compliance Scorecard", "Delegation Visit Impact Assessment", "Global Training Participation", "Bilateral Agreement Status"];
const security = ["Top-Secret Clearance for Foreign Intel Sharing", "Encrypted Diplomatic Communication Channels", "Strict Compartmentalization of Bilateral Data", "Zero-Trust for International API Access", "Anti-Espionage Protocol for Foreign Delegates", "Secure Video Conferencing with End-to-End Encryption", "DLP on International Research Documents", "Biometric Access for Sensitive Foreign Intel Portals"];
const futureScope = ["AI Real-time Translation for Live International Meetings", "Blockchain-based Treaty Compliance Tracking", "Virtual Reality International Police Academy", "AI Predictive Analysis of Global Crime Trends for Local Prep", "Automated UN Report Generation", "AI Diplomacy Simulation Training"];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> }, { id: 'experts', label: 'Intl Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Global Modules', icon: <LayoutDashboard size={18} /> }, { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> }, { id: 'reports', label: 'Diplomacy Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const InternationalRelationsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
          <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}><Globe className="inline-icon" size={28} /> AI International & External Relations</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}><strong>International Relations</strong> manages the global footprint of the police force. AI handles everything from coordinating officer exchanges with Scotland Yard to tracking India's compliance with UN Policing Standards, ensuring the force benefits from the best global practices.</p>
          <div className="split-section" style={{ gap: '1.5rem' }}>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Globe className="inline-icon" color="#3b82f6" /> Officer Exchange AI</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI matches officer profiles (specialization, language skills, rank) with international exchange opportunities from Interpol, Scotland Yard, and FBI, and manages the entire application and travel logistics workflow.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Handshake className="inline-icon" color="#10b981" /> Delegation Protocol AI</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>When a foreign police delegation visits, AI generates a comprehensive briefing pack — including OSINT profiles of all members, protocol schedules, security clearances, and interpreter assignments.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#f59e0b" /> UN Standards Compliance</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks India's commitments under UN Human Rights Council guidelines and Interpol standards. AI generates a gap analysis report and suggests policy changes to achieve full compliance.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Global Research Hub</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI scrapes and summarizes the latest global policing research — from body camera effectiveness studies to community policing impact assessments — delivering actionable insights in simple regional language summaries.</p></div>
          </div>
        </motion.div>
      );
      case 'experts': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">{aiExperts.map((e, i) => <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan"><Bot className="card-icon" /><h4>{e}</h4></motion.div>)}</motion.div>;
      case 'modules': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">{intlModules.map((mod, i) => <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel"><div className="module-header">{mod.icon}<h3>{mod.title}</h3></div><div className="module-tags">{mod.items.map((item, j) => <span key={j} className="module-tag">{item}</span>)}</div></motion.div>)}</motion.div>;
      case 'features': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid">{aiFeatures.map((f, i) => <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple"><Cpu className="card-icon" /><h4>{f}</h4></motion.div>)}</motion.div>;
      case 'architecture': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><div className="split-section"><div className="panel"><h3><Database className="inline-icon" color="#06b6d4" /> Database Tables</h3><div className="tag-cloud">{databases.map((db, i) => <span key={i} className="tech-tag">{db}</span>)}</div></div><div className="panel"><h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3><div className="tag-cloud">{apis.map((api, i) => <span key={i} className="tech-tag tech-tag-alt">{api}</span>)}</div></div></div></motion.div>;
      case 'reports': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><div className="split-section"><div className="panel"><h3><LayoutDashboard className="inline-icon" color="#3b82f6" /> Dashboards</h3><ul className="premium-list">{dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>)}</ul></div><div className="panel"><h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3><ul className="premium-list">{reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>)}</ul></div></div></motion.div>;
      case 'security': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><div className="split-section"><div className="panel highlight-red"><h3><ShieldAlert className="inline-icon" color="#ef4444" /> Security Protocols</h3><ul className="premium-list">{security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}</ul></div><div className="panel highlight-green"><h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3><ul className="premium-list">{futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}</ul></div></div></motion.div>;
      default: return null;
    }
  };

  return (
    <div className="hrms-detailed-page">
      <div className="hrms-bg-fx"></div><div className="hrms-grid-overlay"></div>
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn"><ArrowLeft size={20} /> BACK TO MODULES</button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><Globe size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">INTERNATIONAL <span>RELATIONS</span></h1><p className="cyber-subtitle">Officer Exchange, UN Compliance & Delegation Management</p></div>
        </div>
      </header>
      <div className="hrms-layout">
        <nav className="hrms-sidebar">{tabs.map(tab => <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.icon} {tab.label}</button>)}</nav>
        <main className="hrms-content-area"><AnimatePresence mode="wait"><div key={activeTab}>{renderContent()}</div></AnimatePresence></main>
      </div>
    </div>
  );
};

export default InternationalRelationsDetailed;
