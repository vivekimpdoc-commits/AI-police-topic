import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, MessageSquare, Radio
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Daily Bulletin AI", "Morning Brief Generator", "SITREP NLP Engine", 
  "Crime Digest Synthesizer", "Newsletter Formatter Bot", "Knowledge Base Bot", 
  "Command Instruction Router", "Briefing Note Analyzer", "Order Book Digitizer",
  "Voice-to-Text Scribe AI", "Sentiment Analyzer"
];

const commsModules = [
  {
    title: "Daily Bulletins & Briefs",
    icon: <MessageSquare size={20} />,
    items: ["Automated Morning Briefs", "State-wide Crime Digest", "Police Newsletter Generation", "Automated SITREP"]
  },
  {
    title: "Order Book & Directives",
    icon: <FileText size={20} />,
    items: ["Daily Order Book Digitization", "Command Instruction Routing", "Read-Receipt Tracking", "Policy Archive"]
  },
  {
    title: "Internal Knowledge Sharing",
    icon: <Network size={20} />,
    items: ["Best Practice Repository", "Case Study Indexing", "Inter-District Forums", "Expertise Locator"]
  },
  {
    title: "Briefing Notes Generator",
    icon: <Activity size={20} />,
    items: ["Multi-source Data Aggregation", "Executive Summary AI", "VIP Visit Briefings", "Threat Assessment Notes"]
  },
  {
    title: "Radio & Secure Comms",
    icon: <Radio size={20} />,
    items: ["Voice-to-Text Radio Transcription", "Encrypted VoIP Channels", "Emergency Broadcast Alarms", "Comms Dead-Zone Mapping"]
  }
];

const aiFeatures = [
  "AI Extractive Summarization for Morning Briefs", "AI Automated Newsletter Layouts", "AI Semantic Search for Past Orders",
  "AI Voice-to-Text for Radio Logs", "AI Multilingual Translation of Bulletins", "AI Topic Modeling on SITREPs",
  "AI Cross-Reference of Similar Case Studies", "AI Secure Comms Anomaly Detection"
];

const databases = [
  "Daily_Bulletin_Archive", "Morning_Brief_Logs", "SITREP_Database", "Order_Book_Ledger", "Knowledge_Base_Index", 
  "Radio_Transcript_Lake", "Command_Instructions_DB", "Briefing_Notes_Vault", "Inter_District_Forums"
];

const dashboards = [
  "State Command Dashboard", "Order Compliance Heatmap", "Knowledge Sharing Engagement", 
  "Radio Traffic Analytics", "SITREP Submission Tracker", "Bulletin Readership Stats"
];

const apis = [
  "Secure Email Gateways", "SMS/WhatsApp Business API", "Police Radio Network (TETRA)", "News Scraping APIs",
  "Digital Signature (DSC) API", "State Govt Intranet Sync"
];

const reports = [
  "Weekly Crime Digest", "Monthly District Review", "Order Adherence Report", 
  "Knowledge Base Contribution ROI", "Radio Transcription Accuracy", "VIP Briefing Quality Audit"
];

const security = [
  "End-to-End Encryption for Orders", "Auto-Redacting of Classified Briefs", "Strict RBAC for SITREP Access", 
  "Air-Gapped Radio Network Sync", "Watermarked PDF Exports", 
  "Audit Log of Every Briefing Read", "Anti-Screenshot Mobile App Controls", "DDoS Protection on Comms Hub"
];

const futureScope = [
  "AI Generated Podcast for Morning Briefs", "Holographic Command Briefings", "Quantum-Safe Communication Channels",
  "Real-Time Brain-Computer Interface (BCI) Comms", "Predictive Order Generation", "Automated Video Newsletter Avatars"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Comms Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Comms Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Comms Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CommsDocsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Radio className="inline-icon" size={28} /> AI Communication & Documentation
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Communication & Documentation</strong> is the central nervous system for information flow within the force. From synthesizing massive amounts of data into concise Morning Briefs for the DGP, to digitizing the Daily Order Book, AI ensures clarity and speed in command execution.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MessageSquare className="inline-icon" color="#3b82f6" /> Executive Briefs & SITREPs</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI aggregates nightly crime data across all districts and auto-generates a 1-page Morning Brief for senior leadership. Situation Reports (SITREPs) are tracked in real-time during crises.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#10b981" /> Daily Order Book</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Completely digitizes the traditionally physical Order Book. Command instructions are pushed securely to targeted officers, and read-receipts confirm the order has been acknowledged.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Knowledge Sharing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A secure internal repository where officers upload successful case studies (e.g., a novel cybercrime bust). The AI semantic search allows other districts to find and replicate these best practices instantly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Radio className="inline-icon" color="#ef4444" /> Radio Transcription</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Integrates with the police VHF/UHF radio network. AI converts noisy radio chatter into searchable digital text logs in real-time, aiding post-incident analysis.</p>
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
            {commsModules.map((mod, i) => (
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
            <Radio size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">COMMUNICATION & <span>DOCUMENTATION</span></h1>
            <p className="cyber-subtitle">Daily Briefs, Order Book & Knowledge Sharing</p>
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

export default CommsDocsDetailed;
