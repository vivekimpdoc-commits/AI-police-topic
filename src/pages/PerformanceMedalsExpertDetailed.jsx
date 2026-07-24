import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Star, Medal, Target
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Annual Confidential Report (ACR) AI", "360-Degree Peer Evaluator", "Case Solved vs Assigned Ratio AI",
  "Conviction Rate Scorer", "Public Feedback Sentiment Scorer", "Riot Control Efficiency Grader",
  "Traffic Management Metric AI", "Cyber Crime Resolution Grader", "Forensic Evidence Quality Scorer",
  "Arrest Quality (Acquittal Rate) AI", "FIR Registration Promptness AI", "Charge Sheet Filing Speed AI",
  "Investigative Flaw Detector AI", "Physical Fitness Maintenence Scorer", "Weapon Handling Proficiency AI",
  "Firing Range Accuracy Grader", "Leadership & Command Scorer", "Disciplinary Deductions AI",
  "Leave vs Duty Commitment Grader", "Bravery Incident Authenticator", "President's Police Medal Evaluator",
  "Police Medal for Gallantry AI", "Meritorious Service Medal AI", "Distinguished Service Medal AI",
  "Antrik Suraksha Seva Padak AI", "Parakram Padak Recommendation AI", "Chief Minister's Excellence Medal AI",
  "DGP Commendation Disc Scorer", "Best Police Station Grader", "Best Investigating Officer Scorer",
  "Top Cyber Cop Evaluator", "Best Traffic Cop Rating AI", "Best Dog Handler Grader",
  "Medal Fraud & Bias Detector", "Caste/Religion Bias Auditor (Promotions)", "Regional Favouritism Detector",
  "Promotion Board Shortlister", "Out-of-Turn Promotion Evaluator", "Posthumous Honor Recommendation AI",
  "Martyr Family Support Tracker", "Reward Money (Inaam) Disburser", "Sports Medal Recognition AI",
  "All India Police Games Scorer", "Duty Under Fire Assessor", "Hostage Rescue Efficiency AI",
  "VVIP Security Flawless Grader", "Election Duty Excellence AI", "Disaster Relief Bravery Scorer",
  "Informant Network Quality AI", "Contraband Seizure Volume Grader", "Illegal Arms Recovery Scorer",
  "Missing Persons Found Ratio AI", "Human Trafficking Rescue Scorer", "Financial Fraud Recovery Rate AI",
  "Social Media Outreach Grader", "Community Policing Success AI", "Women Helpdesk Empathy Scorer",
  "Senior Citizen Assistance Rating AI", "Body-Worn Camera Conduct Analyzer", "Public Misbehavior Penalty AI"
];

const modules = [
  {
    title: "Performance Metrics",
    icon: <Target size={20} />,
    items: ["Conviction Rate Scoring", "Charge Sheet Promptness", "360-Degree ACR", "Public Sentiment"]
  },
  {
    title: "Medals & Gallantry",
    icon: <Medal size={20} />,
    items: ["President's Police Medal", "Gallantry Verification", "DGP Commendation", "Antrik Suraksha"]
  },
  {
    title: "Promotions & Rewards",
    icon: <Star size={20} />,
    items: ["Out-of-Turn Promotions", "Reward Money (Inaam)", "Best IO/Station", "Bias-Free Shortlisting"]
  },
  {
    title: "Specialized Evaluations",
    icon: <Activity size={20} />,
    items: ["Cyber & Forensic Quality", "Contraband Seizures", "Hostage Rescue Efficiency", "Body-Cam Conduct"]
  },
  {
    title: "Compliance & Bias Audits",
    icon: <ShieldAlert size={20} />,
    items: ["Promotion Bias Detection", "Medal Fraud Checks", "Disciplinary Deductions", "Misbehavior Penalties"]
  }
];

const aiFeatures = [
  "NLP-Based ACR (Annual Confidential Report) Parsing", "Unbiased Conviction vs Acquittal Matrix", "Automated Bravery Incident Corroboration",
  "Sentiment Analysis on Citizen Feedback", "Algorithmic Favouritism & Bias Detection", "Predictive Leadership Potential Scoring"
];

const databases = [
  "Officer_Performance_Ledger", "ACR_Encrypted_Vault", "Medal_Nominations_DB", "Conviction_Rate_Matrix", 
  "Bravery_Incident_Logs", "Disciplinary_Deductions_DB", "Public_Feedback_Lake", "Seizure_Recovery_Stats"
];

const dashboards = [
  "State-wide Performance Heatmap", "Gallantry Nominations Board", "Conviction & Case Success Rates", 
  "Bias & Favouritism Alerts", "Top Performers (District-wise)", "Disciplinary Penalty Tracker"
];

const apis = [
  "E-Courts Conviction Data Sync", "MHA Medal Recommendation API", "CCTNS FIR/Charge Sheet Sync", 
  "Social Media Sentiment Webhooks", "Citizen Portal Feedback API", "Body-Worn Cam Analytics Integration"
];

const reports = [
  "Annual Promotion Shortlist", "Gallantry Award Dossiers", "Bottom 10% Performers Audit", 
  "Station-wise Crime Resolution Rates", "Bias Detection Audit Trail", "Community Policing Impact"
];

const security = [
  "Double-Blind ACR Processing", "Immutable Medal Nominations", "Role-Based Access for DG/IG", 
  "Blockchain Performance Logs", "Anti-Tamper Conviction Stats", "Algorithmic Fairness Auditing"
];

const futureScope = [
  "Real-Time Body-Cam Empathy Scoring", "Predictive Policing Success Correlation", "Global Interpol Officer Benchmarking",
  "VR-Based Leadership Assessments", "Decentralized Public Voting for Best Cop", "Neuro-Linguistic Officer Stress vs Performance Analysis"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Performance Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Evaluation Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Scoring Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PerformanceMedalsExpertDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Star className="inline-icon" size={28} /> Performance & Medals Expert AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Performance & Medals Expert AI</strong> replaces subjective, nepotism-prone appraisals with hard, data-backed performance metrics. It evaluates officers based on conviction rates, prompt charge-sheet filings, public sentiment, and verified acts of bravery to recommend promotions and prestigious medals.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#3b82f6" /> Data-Driven ACRs</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Syncs with e-Courts and CCTNS to measure an Investigating Officer's actual conviction rate and case resolution speed, bypassing subjective supervisor biases.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Medal className="inline-icon" color="#10b981" /> Gallantry & Honors</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes encounter logs, hostage rescues, and disaster relief actions to mathematically corroborate bravery incidents for President's Medals and DGP Commendations.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Conduct & Empathy</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Parses citizen feedback from Jansunwai portals and applies NLP to body-cam footage to grade officers on public empathy and professional misbehavior.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Nepotism & Bias Audits</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuously scans promotion shortlists to detect statistical anomalies indicating caste, religion, or regional favouritism by superior officers.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Appraisal Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Appraisal Integrity</h3>
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
            <Star size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">PERFORMANCE & MEDALS <span>EXPERT AI</span></h1>
            <p className="cyber-subtitle">Unbiased ACRs, Conviction Metrics & Gallantry Validation</p>
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

export default PerformanceMedalsExpertDetailed;
