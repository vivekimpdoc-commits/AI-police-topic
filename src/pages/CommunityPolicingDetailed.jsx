import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, MessageSquare, Handshake
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Gram Chaupal Analyzer NLP", "Citizen Sentiment Scorer", "Police Mitra Vetting Bot", 
  "NGO Coordination AI", "Fake News Debunker Bot", "Community Risk Profiler", 
  "Public Trust Index Modeler", "Social Harmony Tracker", "Awareness Campaign Optimizer",
  "Volunteer Roster AI", "Language Translation Bot"
];

const communityModules = [
  {
    title: "Gram Chaupal & Outreach",
    icon: <Users size={20} />,
    items: ["AI Village Pulse Analytics", "Automated Chaupal Scheduling", "Local Grievance NLP Categorization", "Predictive Tension Mapping"]
  },
  {
    title: "Police Mitra & Volunteers",
    icon: <Handshake size={20} />,
    items: ["AI Background Vetting (OSINT)", "Volunteer Skill Matching", "Digital ID Card Issuance", "Emergency Task Broadcasting"]
  },
  {
    title: "Citizen Feedback & Trust",
    icon: <MessageSquare size={20} />,
    items: ["Public Trust Index (PTI) Score", "Sentiment Analysis on Feedback", "Anonymous Suggestion Portal", "Social Media Sentiment Sync"]
  },
  {
    title: "NGO & RWA Coordination",
    icon: <Network size={20} />,
    items: ["RWA Meeting Calendar", "NGO Resource Mapping", "Community Policing Joint-Patrols", "Neighborhood Watch AI"]
  },
  {
    title: "Awareness Campaigns",
    icon: <Activity size={20} />,
    items: ["Cyber Security Awareness ROI", "Targeted SMS Blasts (Geo-fenced)", "Traffic Rules Gamification", "Fake News Counters"]
  }
];

const aiFeatures = [
  "AI Multilingual NLP (Hindi/Bhojpuri/Awadhi)", "AI Sentiment Trend Prediction", "AI OSINT Vetting for Volunteers",
  "AI Geo-spatial Community Risk Heatmaps", "AI Automated Public Trust Index Calculation", "AI Fake News Propagation Modeling",
  "AI Deepfake Awareness Training", "AI Demographic-based Campaign Targeting"
];

const databases = [
  "Gram_Chaupal_Transcripts", "Police_Mitra_Registry", "Public_Feedback_Lake", "RWA_NGO_Directory", "Trust_Index_Metrics", 
  "Awareness_Campaign_ROI", "Local_Grievance_DB", "Volunteer_Task_Logs", "Social_Harmony_Indicators", "Fake_News_Blacklist"
];

const dashboards = [
  "Live Public Trust Index", "Gram Chaupal Coverage Map", "Volunteer Deployment Radar", 
  "Social Sentiment (District-wise)", "Awareness Campaign Reach", "Grievance Resolution Speed"
];

const apis = [
  "WhatsApp Business API (Outreach)", "State Citizen Portal Sync", "Social Media Graph APIs (Twitter/FB)", "NGO Darpan API",
  "Telecom Operator APIs (SMS Broadcasts)", "Local Panchayat Data Sync"
];

const reports = [
  "Monthly Community Trust Scorecard", "Gram Chaupal Impact Analysis", "Police Mitra Activity Log", 
  "Top Local Grievances by Demography", "Fake News Debunking Efficacy", "RWA Joint Patrol Hours"
];

const security = [
  "Anonymized Feedback Data Vaults", "Strict PII Redaction for Volunteers", "End-to-End Encrypted Tips", 
  "Role-Based Access for RWA Leaders", "Anti-Bot Captcha (Suggestion Portal)", 
  "Immutable Trust Score Ledgers", "API Rate Limiting on SMS", "Secure OAuth for NGO Portals"
];

const futureScope = [
  "AI Holographic Constables for Awareness", "VR Neighborhood Watch Simulations", "Decentralized Autonomous Community Policing",
  "Predictive Harmony Indexes via Brainwaves", "Gamified Citizen Points (Blockchain)", "AI Empathy Training for Beat Officers"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Community Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Outreach Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Trust Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CommunityPolicingDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Handshake className="inline-icon" size={28} /> AI Community Policing & Outreach
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Community Policing</strong> bridges the gap between citizens and the police force. By utilizing NLP to analyze Gram Chaupal meetings and calculating a live 'Public Trust Index', the AI ensures the police remain a friendly, approachable, and proactive community partner.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#3b82f6" /> Gram Chaupal AI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Transcribes rural village meetings (Gram Chaupals) in local dialects (Awadhi, Bhojpuri). AI automatically extracts the top 3 grievances raised by villagers and assigns them to the local Beat Officer.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Handshake className="inline-icon" color="#10b981" /> Police Mitra (Volunteers)</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Citizens can apply to be 'Police Mitras'. The AI conducts a rapid OSINT background check to ensure no criminal history, issues a digital ID, and broadcasts emergency tasks (like crowd control during festivals).</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><PieChart className="inline-icon" color="#f59e0b" /> Public Trust Index</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A dynamic dashboard for the DGP. AI scrapes social media sentiment, feedback from police stations, and community surveys to calculate a live 'Trust Score' for every district.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Fake News & Awareness</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Deploys targeted WhatsApp/SMS campaigns to specific geo-fences to debunk rapidly spreading fake news before it sparks communal tension.</p>
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
            {communityModules.map((mod, i) => (
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
            <Handshake size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">COMMUNITY <span>POLICING</span></h1>
            <p className="cyber-subtitle">Gram Chaupal NLP, Police Mitra & Public Trust Index</p>
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

export default CommunityPolicingDetailed;
