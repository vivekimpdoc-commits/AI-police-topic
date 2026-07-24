import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Heart, Users, MessageSquare
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Police Morale Heatmap AI", "Anonymous Grievance Redressal AI", "Officer Suicide Prevention AI",
  "Family Housing Allocation AI", "Police Quarters Maintenance Bot", "Children Education Fund Allocator",
  "Spouse Employment Portal AI", "Subsidized Canteen Supply AI", "Canteen Card Fraud Detector",
  "Health Insurance Claim Expediter", "Cashless Medical Network AI", "Duty-Related Injury Support AI",
  "Martyr Family Liaison AI", "Veterans Pension Helpdesk", "Retirement Transition Coach",
  "Post-Retirement Job Matcher", "Financial Literacy Coach AI", "Debt & Loan Trap Alerter",
  "Peer Support Network Matcher", "Mental Health Survey Analyzer", "PTSD Symptom Flagging AI",
  "Alcohol/Substance Abuse Intervention AI", "Work-Life Balance Scorer", "Station Recreation Planner",
  "Sports Meet Organizer AI", "Inter-Battalion Tournament AI", "Talent & Hobby Showcaser AI",
  "Police Symphony Band Scheduler", "Cultural Event Management AI", "Force Diet & Nutrition Coach",
  "Mess Menu Optimizer AI", "Food Quality Sentiment Analyzer", "Sanitation & Hygiene Auditor",
  "Uniform Quality Feedback AI", "Winter Gear Distribution AI", "Bulletproof Vest Fitting AI",
  "Weapon Ergonomics Feedback AI", "Transport/Bus Pass Allocator", "Holiday Home Booking AI",
  "Rest House Availability Tracker", "Female Officer Hygiene Support AI", "Creche/Daycare Management AI",
  "Maternity Support Coordinator", "Paternity Duty Adjuster AI", "In-house Legal Aid AI",
  "False Allegation Defense AI", "Social Media Trolling Protection AI", "Media Defamation Tracker",
  "Anonymous Whistleblower AI", "Corruption Coercion Alerter", "Senior Subordinate Harassment AI",
  "Gender Sensitization Tracker", "Caste Discrimination Alerter", "Unit Command Empathy Scorer",
  "SP/DGP Direct Connect Bot", "Townhall Q&A Synthesizer", "Force Survey Sentiment Analyzer",
  "Appreciation & Shoutout Board AI", "Birthday/Anniversary Greeter AI", "Unit Cohesion Metric AI"
];

const modules = [
  {
    title: "Grievance & Well-being",
    icon: <Heart size={20} />,
    items: ["Anonymous Grievances", "Suicide Prevention", "PTSD Flagging", "Debt Trap Alerts"]
  },
  {
    title: "Welfare & Families",
    icon: <Users size={20} />,
    items: ["Martyr Family Liaison", "Children Education Funds", "Spouse Employment", "Creche Management"]
  },
  {
    title: "Logistics & Amenities",
    icon: <Database size={20} />,
    items: ["Quarters Allocation", "Canteen Card Management", "Mess Menu Optimization", "Holiday Homes"]
  },
  {
    title: "Legal & Protection",
    icon: <ShieldAlert size={20} />,
    items: ["False Allegation Defense", "Trolling Protection", "Whistleblower AI", "Harassment Alerters"]
  },
  {
    title: "Culture & Engagement",
    icon: <MessageSquare size={20} />,
    items: ["Sports Tournaments", "Direct DGP Connect", "Appreciation Boards", "Unit Cohesion Metrics"]
  }
];

const aiFeatures = [
  "NLP-Based Anonymous Grievance Parsing", "Predictive Officer Suicide Risk Algorithms", "Automated Canteen Supply Chain Optimization",
  "Sentiment Analysis on Mess/Food Quality", "Algorithmic Quarters & Housing Allocation", "Deep-Web Scan for Social Media Defamation"
];

const databases = [
  "Force_Morale_Telemetry", "Grievance_Redressal_Vault", "Canteen_Supply_Ledger", "Housing_Allocation_DB", 
  "Medical_Insurance_Logs", "Whistleblower_Encrypted_DB", "Sports_Cultural_Roster", "Martyr_Family_Support"
];

const dashboards = [
  "State-wide Morale Heatmap", "Grievance Resolution Board", "Housing & Quarters Vacancy", 
  "Medical Claims Tracker", "Harassment & Bias Alerts", "Unit Cohesion & Sports Board"
];

const apis = [
  "CGHS/State Medical Portal Sync", "Canteen Stores Department (CSD) API", "State Housing Board Sync", 
  "Anonymous SMS Gateway", "Social Media Scraping API", "Banking API for Education Funds"
];

const reports = [
  "Monthly Grievance Resolution Audit", "Force Morale & Sentiment Index", "Canteen Subsidies Report", 
  "Housing Allocation Fairness Log", "Martyr Support Disbursement", "False Allegation Defense Stats"
];

const security = [
  "End-to-End Anonymous Tunnels", "Encrypted Whistleblower Logs", "Zero-Knowledge Grievance DB", 
  "Anti-Tamper Housing Roster", "Biometric Canteen Access", "Strict DGP-Only Access for Sensitive Cases"
];

const futureScope = [
  "AI Chatbot Therapists for Night Patrols", "Smart Wearables for Stress Detection", "Decentralized Voting for Mess Menus",
  "Virtual Reality Townhalls with DGP", "Blockchain Protected Identity for Whistleblowers", "Algorithmic Nutriton Plans per Officer"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Engagement Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Welfare Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Morale Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ForceEngagementExpertDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Heart className="inline-icon" size={28} /> Force Engagement & Welfare AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Force Engagement & Welfare AI</strong> shifts the focus from policing the public to caring for the police. It manages anonymous grievances, flags severe stress/suicide risks, optimizes mess food quality via sentiment analysis, and ensures absolute fairness in allocating police quarters and canteen benefits.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MessageSquare className="inline-icon" color="#3b82f6" /> Grievances & Whistleblowers</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides an encrypted channel for constabulary to report harassment, bias, or corruption by superiors directly to the DGP without fear of retaliation.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Heart className="inline-icon" color="#10b981" /> Mental Health & Morale</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes leave requests, duty hours, and peer feedback to identify officers at risk of PTSD or suicide, triggering immediate, discreet intervention.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#f59e0b" /> Housing & Amenities</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Eliminates nepotism in the allocation of Police Quarters and Holiday Homes using a strict, seniority-and-need based mathematical algorithm.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Legal & Family Protection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks and defends officers against false allegations and social media trolling. Provides dedicated liaison AI for Martyr families to ensure timely pension payouts.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Welfare Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Identity Protection</h3>
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
            <Heart size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">FORCE ENGAGEMENT <span>EXPERT AI</span></h1>
            <p className="cyber-subtitle">Grievance Redressal, Morale Tracking & Welfare Automation</p>
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

export default ForceEngagementExpertDetailed;
