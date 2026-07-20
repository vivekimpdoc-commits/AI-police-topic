import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Scale, Gavel } from 'lucide-react';
import '../styles/hrmsDetailed.css';

const aiExperts = ["Court Order Compliance AI", "Property Auction Bot", "Magistrate Comms Bot", "Warrant Scheduler AI", "Limitation Period Monitor", "Legal Notice Dispatch AI", "Disposal Tracker Bot", "Judicial Correspondence AI", "Unclaimed Property AI", "Case Property Auditor", "Legal Timeline Bot", "Backend Developer AI", "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"];
const legalModules = [
  { title: "Court Compliance", icon: <Gavel size={20} />, items: ["Court Order Compliance Monitor", "Production Warrant Scheduler", "Magistrate Communication Portal", "Judicial Correspondence Tracker"] },
  { title: "Property Disposal", icon: <Scale size={20} />, items: ["Case Property Auction Management", "Court Property Disposal Monitor", "Seized Vehicle Disposal", "Unclaimed Property Management"] },
  { title: "Legal Notices & Timelines", icon: <FileText size={20} />, items: ["Legal Notice Dispatch Center", "Case Limitation Period Monitor", "Summons & Warrant Tracking", "Bailable/Non-Bailable Status"] },
  { title: "Judicial Audit", icon: <Activity size={20} />, items: ["Pending Court Case Register", "Acquittal Analysis Dashboard", "Prosecution Success Rate", "IO Performance vs Court Outcomes"] }
];
const aiFeatures = ["AI Automated Reminder for Court Date Non-compliance", "AI Optimization of Property Auction Scheduling for Maximum Value", "AI NLP Processing of Court Orders for Action Extraction", "AI Detection of Case Limitation Period Breaches", "AI Matching of Unclaimed Property to Potential Owners", "AI Predictive Analysis of Case Outcomes based on Evidence Quality", "AI Automated Generation of Compliance Reports for High Courts", "AI Anomaly Detection in Property Disposal Pricing"];
const databases = ["Court_Orders_Compliance_DB", "Case_Property_Ledger", "Auction_Management", "Legal_Notice_Archive", "Limitation_Period_Monitor", "Magistrate_Comms_Log", "Disposal_Tracker", "Judicial_Correspondence"];
const dashboards = ["Pending Court Compliance Status", "Property Auction Pipeline", "Limitation Period Breach Alerts", "Magistrate Communication Log", "Seized Vehicle Disposal Rate", "IO Court Performance Scorecard"];
const apis = ["e-Courts Integration API", "State Auction Portal (e-procurement)", "Judicial Academy Case Law", "District Court Management System", "State Public Prosecutor Portal", "Legal Metrology Dept (Valuation)"];
const reports = ["Monthly Court Compliance Audit", "Property Auction Revenue Report", "Limitation Period Breach Analysis", "Prosecution Success Rate", "IO Court Performance", "Unclaimed Property Resolution"];
const security = ["Top-Secret Classification for Sensitive Court Orders", "Tamper-proof Digital Court Order Storage", "Strict RBAC for Property Disposal Approvals", "Blockchain Audit for Auction Pricing", "Encrypted Magistrate Communication", "Immutable Legal Notice Dispatch Logs", "Digital Signatures on Court Submissions", "Audit Trail for All Property Movements"];
const futureScope = ["AI Predictive Case Outcome Modeling for Better Prosecution", "Smart Contracts for Automatic Property Auction Payments", "Blockchain-based Evidence Chain of Custody for Courts", "AI Legal Chatbot for Officers on BNS/BNSS Provisions", "Virtual Court Appearances Integration", "Automated High Court Compliance Reports"];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> }, { id: 'experts', label: 'Legal Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Legal Modules', icon: <LayoutDashboard size={18} /> }, { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> }, { id: 'reports', label: 'Court Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceLegs2Detailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
          <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}><Scale className="inline-icon" size={28} /> AI Police Legal Process</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}><strong>Police Legal Process</strong> manages the complex judicial compliance obligations of the force. AI ensures court orders are acted upon before deadlines, case properties are auctioned at fair value, and no FIR breaches its legal limitation period — preventing procedural acquittals.</p>
          <div className="split-section" style={{ gap: '1.5rem' }}>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Gavel className="inline-icon" color="#3b82f6" /> Court Compliance AI</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI reads all incoming court orders, extracts required actions (e.g., 'produce accused by 15th') and creates automated reminders for the responsible IO, ensuring zero non-compliance that could jeopardize a case.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Scale className="inline-icon" color="#10b981" /> Property Auction Optimizer</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI determines the optimal auction timing for seized assets (vehicles, electronics) based on market price trends, ensuring the state gets maximum value. It cross-references all auction bids for cartel-like patterns.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#f59e0b" /> Limitation Period Guard</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI monitors every case in the FIR register and automatically alerts the SP when a case is approaching its legal limitation period for chargesheeting, preventing technical acquittals due to procedural lapses.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Prosecution Intelligence</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes historical case outcomes to identify patterns — which types of evidence lead to convictions, which IOs have the highest court challenge rates, enabling targeted training and evidence quality improvement.</p></div>
          </div>
        </motion.div>
      );
      case 'experts': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">{aiExperts.map((e, i) => <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan"><Bot className="card-icon" /><h4>{e}</h4></motion.div>)}</motion.div>;
      case 'modules': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">{legalModules.map((mod, i) => <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel"><div className="module-header">{mod.icon}<h3>{mod.title}</h3></div><div className="module-tags">{mod.items.map((item, j) => <span key={j} className="module-tag">{item}</span>)}</div></motion.div>)}</motion.div>;
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
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><Scale size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">POLICE <span>LEGAL PROCESS</span></h1><p className="cyber-subtitle">Court Compliance AI, Property Auctions & Limitation Guard</p></div>
        </div>
      </header>
      <div className="hrms-layout">
        <nav className="hrms-sidebar">{tabs.map(tab => <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.icon} {tab.label}</button>)}</nav>
        <main className="hrms-content-area"><AnimatePresence mode="wait"><div key={activeTab}>{renderContent()}</div></AnimatePresence></main>
      </div>
    </div>
  );
};

export default PoliceLegs2Detailed;
