import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, BookOpen, GraduationCap
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Case Law Matcher AI", "SOP Version Controller", "Training Video Recommender", 
  "Circular NLP Analyzer", "Subject Expert Finder", "Reading Progress Bot", 
  "Legal Citation Checker", "Knowledge Graph AI", "Query Resolution Bot",
  "Summarization Engine AI", "Plagiarism Checker AI"
];

const libraryModules = [
  {
    title: "Digital Library & Archives",
    icon: <BookOpen size={20} />,
    items: ["AI Case Law Search", "Historical Circular Archive", "Digitized Police Magazines", "Judgement Repository"]
  },
  {
    title: "SOP & Policy Control",
    icon: <FileText size={20} />,
    items: ["AI Legal Precedent Bot", "Drafting & Approval Workflow", "Policy Dissemination Alerts", "Compliance Acknowledgement"]
  },
  {
    title: "Training & Knowledge",
    icon: <GraduationCap size={20} />,
    items: ["AI Digital Book Archive", "Interactive Case Studies", "Skill-based Reading Lists", "Virtual Simulation Scenarios"]
  },
  {
    title: "Expert Network",
    icon: <Network size={20} />,
    items: ["Subject Matter Expert Directory", "Peer-to-Peer Query Forum", "Mentorship Matchmaking", "Research Paper Publication"]
  }
];

const aiFeatures = [
  "AI Natural Language Search across 50 years of Supreme Court Judgements", "AI Automatic Summarization of 100-page Legal Rulings", "AI Recommendation of Training Videos based on Officer's Current Case",
  "AI Knowledge Graph mapping relationships between different SOPs", "AI Detection of Contradictions in newly drafted Policies against old ones", "AI Translation of Legal Jargon to Simple Regional Languages",
  "AI Identification of Subject Matter Experts within the Force", "AI Plagiarism Detection in Departmental Research Papers"
];

const databases = [
  "Case_Law_Index", "SOP_Version_Ledger", "Training_Video_Lake", "Circulars_Archive", "Expert_Directory_DB", 
  "Judgement_Summaries", "Officer_Reading_Logs", "Police_Magazine_Archive"
];

const dashboards = [
  "Force-wide Knowledge Consumption", "SOP Compliance Rates", "Top Searched Legal Topics", 
  "Most Active Subject Experts", "New Judgement Alerts", "Training Content Engagement"
];

const apis = [
  "e-Courts (Supreme/High Court) RSS Feeds", "BPR&D (Bureau of Police R&D) Knowledge Sync", "National Police Academy (NPA) Portal", "State Law Dept API",
  "Video Streaming CDN", "SSO (Single Sign-On) Gateway"
];

const reports = [
  "Monthly Knowledge Consumption Report", "SOP Dissemination Audit", "Top Contributors to Knowledge Base", 
  "Legal Query Trend Analysis", "Training Video ROI", "Policy Gap Analysis"
];

const security = [
  "Digital Rights Management (DRM) on Training Videos", "Watermarking of Confidential SOPs", "Role-Based Access for Secret Circulars", 
  "Audit Log of Document Downloads", "Data Loss Prevention (DLP)", 
  "End-to-End Encrypted Peer Forums", "Off-grid Access for Field Officers", "Zero-Trust Document Viewer"
];

const futureScope = [
  "AI Conversational Tutor for Indian Penal Code (BNS)", "Holographic Crime Scene Reconstructions for Training", "Neural-link based rapid learning interfaces",
  "Global Interpol Best Practice Auto-Translation", "Gamified Legal Knowledge Tournaments", "Automated Policy Drafting using Generative AI"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Knowledge Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Library Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Usage Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceLibraryDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <BookOpen className="inline-icon" size={28} /> AI Police Library & Knowledge Hub
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Library & Knowledge Hub</strong> is the intellectual backbone of the force. It uses AI to parse through decades of case laws, SOPs, and training manuals, delivering byte-sized, highly relevant knowledge directly to the Investigating Officer's mobile device exactly when they need it.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><BookOpen className="inline-icon" color="#3b82f6" /> AI Case Law Summarizer</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of reading 100-page Supreme Court judgements, IOs can ask the AI questions. The NLP engine instantly searches the archive and provides a 3-bullet summary with exact legal citations.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#10b981" /> SOP Version Control</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Maintains a strict version history of all police circulars and Standard Operating Procedures. AI alerts officers if they are referencing an outdated policy and highlights exactly what changed in the new version.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><GraduationCap className="inline-icon" color="#f59e0b" /> Contextual Training</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If an officer is assigned their first cyber-crime case, the AI automatically recommends a curated playlist of training videos and case studies specific to digital forensics and crypto-tracking.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Subject Expert Directory</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Creates a dynamic 'Yellow Pages' of the force. Need someone who speaks fluent Pashto or an expert in defusing IEDs? The AI searches officer profiles and connects you instantly.</p>
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
            {libraryModules.map((mod, i) => (
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
            <BookOpen size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">LIBRARY & <span>KNOWLEDGE</span></h1>
            <p className="cyber-subtitle">Case Law NLP, SOP Tracking & Expert Directory</p>
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

export default PoliceLibraryDetailed;
