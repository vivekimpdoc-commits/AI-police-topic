import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Mic, Tv, Share2
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Press Release Gen-AI", "Media Sentiment Analyst", "Fake News Detector", 
  "Interview Scheduler", "Social Media Monitoring Bot", "Crisis Comms Planner", 
  "PR Impact Assessor", "Spokesperson Avatar Bot", "Trend Forecaster AI"
];

const mediaModules = [
  {
    title: "Public Relations & Press",
    icon: <Mic size={20} />,
    items: ["AI Media Query Register", "Press Release Generator", "Interview Request Manager"]
  },
  {
    title: "Social Media & Sentiment",
    icon: <Share2 size={20} />,
    items: ["Public Sentiment Analyzer", "Viral Fake News Predictor", "Automated Citizen Advisories"]
  },
  {
    title: "Broadcasting & Outreach",
    icon: <Tv size={20} />,
    items: ["AI Police Podcast Studio", "Crisis Comms Broadcast", "Digital Billboard Sync"]
  },
  {
    title: "Analytics & Monitoring",
    icon: <Activity size={20} />,
    items: ["PR Campaign Impact Tracker", "Spokesperson Performance AI", "Brand Health Monitor"]
  }
];

const aiFeatures = [
  "NLP-based Sentiment Analysis across 100+ platforms", "Generative AI for instant PR drafts", "Deepfake Video Detection",
  "Automated Fact-Checking of News Articles", "Crisis Alert Broadcast Automation", "Spokesperson Keyword Analysis"
];

const databases = [
  "Media_Query_Logs", "Press_Release_Archive", "Sentiment_Analytics_DB", 
  "Fake_News_Blacklist", "PR_Campaign_Metrics"
];

const apis = [
  "X (Twitter)/Meta Graph APIs", "News Aggregator Hook", "Fact-Checking API (e.g. AltNews)", 
  "Digital Billboard Gateway", "SMS/WhatsApp Broadcaster"
];

const dashboards = [
  "Live Brand Sentiment Map", "Fake News Alert Dashboard", "Media Query SLA Tracker", 
  "Crisis Comms Command Center"
];

const reports = [
  "Monthly PR Impact Report", "Social Media Engagement Stats", "Fake News Mitigation Audit",
  "Press Conference Sentiment Analysis"
];

const security = [
  "Strict RBAC for Press Release Publishing", "Anti-Bot Scraping Protection", "Encrypted Internal Media Strategies",
  "Social Media Account Takeover Prevention"
];

const futureScope = [
  "AI Deepfake Spokesperson for 24/7 Updates", "Predictive Virality Modeling", "Real-Time NLP Fact-Correction during Live TV",
  "Virtual Reality Press Briefings"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Media Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'PR Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceMedia98Detailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Mic className="inline-icon" size={28} /> AI Police Media Cell
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Media Cell Module</strong> acts as the digital voice of the force. Using advanced NLP and Generative AI, it drafts press releases, analyzes public sentiment on social media, instantly flags deepfakes/fake news, and manages crisis communications at scale.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">Live</div>
                <div className="stat-label">Sentiment Scan</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">GenAI</div>
                <div className="stat-label">Press Drafting</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Zero</div>
                <div className="stat-label">Fake News Lag</div>
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
            {mediaModules.map((mod, i) => (
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
      
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> BACK TO MODULES
        </button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper">
            <Mic size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>MEDIA CELL</span></h1>
            <p className="cyber-subtitle">PR Automation, Sentiment Analysis & Crisis Comms</p>
          </div>
        </div>
      </header>

      <div className="hrms-layout">
        <aside className="hrms-sidebar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </aside>
        <main className="hrms-main-content scrollbar-hide">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default PoliceMedia98Detailed;
