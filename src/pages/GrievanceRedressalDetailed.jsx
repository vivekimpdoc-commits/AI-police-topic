import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Scale, MessageSquare, AlertTriangle, TrendingUp
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Anonymous Harassment Reporter AI", "Sexual Harassment (POSH) Flag AI", "Caste-Based Discrimination Bot",
  "Religious Bias Reporter AI", "Senior-Subordinate Toxic Profiler", "Unpaid Allowances Claim Escaler",
  "Denied Leave Escalation AI", "Transfer Nepotism Alerter", "Promotion Bias Grievance AI",
  "Corrupt Order Refusal Shield AI", "Illegal Detention Command Flag AI", "Misuse of Orderlies (Batmen) AI",
  "Duty Roster Favoritism Scorer", "Mess/Food Quality Grievance AI", "Quarters Allocation Bias AI",
  "Uniform & Gear Shortage AI", "Medical Claim Delay Escaler", "Pension Document Delay AI",
  "Martyr Family Unresolved Claim AI", "Fake Grievance Filter AI", "Malicious Intent Detector",
  "Whistleblower Anonymity Shield AI", "Grievance Translation Bot", "Voice-Note Grievance Parser AI",
  "Emotional Distress NLP Analyzer", "Suicide Threat NLP Escalator", "Direct-to-DGP Routing Protocol AI",
  "IG/DIG Zone Jurisdiction Router", "Grievance Redressal SLA Tracker", "Time-Barred Grievance Auto-Escaler",
  "Retaliation Protection Monitor AI", "Officer Suspension Unjust Flag AI", "Arbitrary Punishment Reverser AI",
  "Women Officer Specific Issue Bot", "Maternity Leave Denial Escaler", "Childcare Grievance AI",
  "Minority Officer Grievance AI", "Reserve Police Neglect Alerter", "Traffic Cop Heat/Pollution Issue AI",
  "Highway Patrol Risk Grievance", "Armourer Equipment Complaint AI", "K9 Handler Ration Grievance AI",
  "Fleet Driver Maintenance Grievance", "Cyber Cell Overwork Escalator", "Forensic Team Equipment Shortage",
  "Dial 112 Dispatcher Stress Issue", "Sub-Inspector Burnout Alerter", "Constabulary Voice Amplifier AI",
  "DGP Townhall Q&A Extractor", "Union/Association Demands Parser", "Grievance Data Trend Predictor",
  "Officer Morale Sentiment Scorer", "Unit Commander Empathy Grader", "Station House Officer (SHO) Toxicity AI",
  "Compulsory Retirement Challenge AI", "False Departmental Inquiry Shield", "Internal Affairs Liaison AI",
  "Grievance Mediation Chatbot AI", "Resolution Satisfaction Scorer AI", "Closed Grievance Re-Opener AI"
];

const modules = [
  {
    title: "Harassment & Bias",
    icon: <ShieldAlert size={20} />,
    items: ["POSH Complaints", "Caste/Religion Bias", "Senior Toxicity", "Retaliation Protection"]
  },
  {
    title: "Service & Financial",
    icon: <FileText size={20} />,
    items: ["Leave/Promotion Denial", "Unpaid Allowances", "Medical Claim Delays", "Quarters Nepotism"]
  },
  {
    title: "Whistleblowing",
    icon: <AlertTriangle size={20} />,
    items: ["Illegal Command Flags", "Misuse of Orderlies", "Corrupt Order Shields", "Anonymous Tunnels"]
  },
  {
    title: "Routing & Escalation",
    icon: <Network size={20} />,
    items: ["Direct-to-DGP Routing", "SLA Deadline Tracking", "Voice-Note Parsing", "Suicide Threat Escalation"]
  },
  {
    title: "Trends & Morale",
    icon: <TrendingUp size={20} />,
    items: ["Unit Toxicity Scoring", "Resolution Satisfaction", "Morale Sentiment", "DGP Townhall Q&A"]
  }
];

const aiFeatures = [
  "NLP Voice-Note Grievance Translation", "Zero-Knowledge Encryption for Whistleblowers", "Algorithmic Escalation (Direct to DGP)",
  "Sentiment Analysis for Imminent Suicide Risk", "Automated SLA (Service Level Agreement) Deadlines", "Predictive Unit Commander Toxicity Scoring"
];

const databases = [
  "Grievance_Encrypted_Ledger", "Whistleblower_Identity_Vault", "SLA_Escalation_DB", "POSH_Complaint_Logs", 
  "Toxicity_Sentiment_Lake", "Internal_Inquiry_Shields", "Resolution_Feedback_DB", "Voice_Audio_Transcripts"
];

const dashboards = [
  "State-wide Grievance Heatmap", "Pending SLA Escalations", "Unit Toxicity & Bias Alerts", 
  "POSH & Harassment Board", "Whistleblower Action Tracker", "Morale & Satisfaction Index"
];

const apis = [
  "Anonymous SMS/WhatsApp Gateway", "State Human Rights Webhooks", "DGP Dashboard Sync API", 
  "Voice-to-Text Translation AI", "Digital Signature Verification", "Pension/Treasury Status Sync"
];

const reports = [
  "Monthly Redressal Pendency Report", "Top 10 Toxic Commands/Stations", "Harassment & Bias Audit", 
  "Retaliation Incident Log", "Financial Grievance Backlogs", "Grievance Satisfaction ROI"
];

const security = [
  "Absolute Anonymity Shields", "Blockchain Tamper-Proof Lodging", "Decoupled Whistleblower Keys", 
  "Strict Need-to-Know Access", "Automated Retaliation Tracking", "Encrypted Audio Parsers"
];

const futureScope = [
  "AI Avatar Mediators for Dispute Resolution", "Blockchain Verified Anonymous Voting", "Predictive Mutiny/Strike Alarms",
  "Real-Time Body-Cam Corroboration of Harassment", "Decentralized Grievance Juries", "Brain-Computer Interface Stress Validation"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Redressal Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Resolution Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Escalation Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const GrievanceRedressalDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Scale className="inline-icon" size={28} /> Grievance Redressal AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Grievance Redressal AI</strong> empowers the constabulary with a fearless, anonymous voice. It bypasses toxic chain-of-command blockages, instantly escalating critical issues—like sexual harassment (POSH), caste bias, illegal orders, or denied leaves—directly to the DGP or relevant authorities, protected by zero-knowledge encryption.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#3b82f6" /> Whistleblowing & Harassment</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides an untraceable tunnel to report senior officer toxicity, misuse of orderlies, or illegal detention orders without fear of career retaliation.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MessageSquare className="inline-icon" color="#10b981" /> Voice & NLP Parsing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Officers can lodge complaints via anonymous WhatsApp voice notes. The AI translates dialects, extracts the core issue, and gauges emotional distress (e.g., suicide risk).</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Smart SLA Escalation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors response deadlines (SLAs). If an SP ignores a valid grievance about unpaid allowances, the AI auto-escalates it to the IG or DGP dashboard.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingUp className="inline-icon" color="#ef4444" /> Unit Toxicity Scoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Aggregates grievance patterns to algorithmically grade Station House Officers (SHOs) or Battalion Commanders on empathy and bias, exposing toxic leadership.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Audit Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Whistleblower Security</h3>
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
            <Scale size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">GRIEVANCE REDRESSAL <span>AI</span></h1>
            <p className="cyber-subtitle">Whistleblower Protection, Bias Alarms & Direct Escalation</p>
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

export default GrievanceRedressalDetailed;
