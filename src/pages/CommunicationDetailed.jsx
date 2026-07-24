import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Megaphone, Share2, MessageSquare
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Press Note Generator AI", "Social Media Broadcaster", "Fake News Takedown Bot", 
  "Public Sentiment Analyzer", "Crisis Comm Strategist", "Rumor Control Agent", 
  "Multilingual Alert Translator", "Citizen Engagement Bot", "Troll Farm Detector",
  "Media Impact Scorer", "Influencer Outreach Bot"
];

const communicationModules = [
  {
    title: "AI Media & Press Management",
    icon: <FileText size={20} />,
    items: ["Automated Press Release Drafts", "Media Sentiment Tracking", "Interview Prep (Anticipated Questions)", "Journalist Query Auto-response"]
  },
  {
    title: "Social Media Broadcasting",
    icon: <Share2 size={20} />,
    items: ["Multi-platform Sync (X, FB, Insta)", "Optimal Posting Time AI", "Viral Campaign Tracking", "Graphic/Infographic Generator"]
  },
  {
    title: "Fake News & Rumor Control",
    icon: <ShieldAlert size={20} />,
    items: ["Deepfake Exposure Alerts", "WhatsApp Forward Fact-checking", "Bot-network Takedown Coordination", "Counter-narrative Drafting"]
  },
  {
    title: "Public Alert Systems",
    icon: <Megaphone size={20} />,
    items: ["Geo-targeted SMS Blasts", "Smart Billboard Overrides", "Multilingual Voice Alerts", "Disaster Evacuation Broadcasts"]
  },
  {
    title: "Public Engagement & Feedback",
    icon: <MessageSquare size={20} />,
    items: ["Community Sentiment Score", "Automated Comment Moderation", "Citizen Poll Analytics", "Interactive Q&A Bots"]
  }
];

const aiFeatures = [
  "AI Generative Language Models (Press Notes)", "AI Social Graph Analysis", "AI Image Manipulation Detection",
  "AI Topic Modeling & Trend Prediction", "AI Multilingual Sentiment Polarity", "AI Real-time Translation",
  "AI Toxicity/Hate Speech Filtering", "AI Content Reach Optimization"
];

const databases = [
  "Press_Release_Archive", "Social_Media_Handles_DB", "Fact_Check_Database", "Journalist_Contact_List", "Public_Alert_Logs", 
  "Fake_News_Signatures", "Viral_Content_Tracker", "Citizen_Feedback_Logs", "Disaster_Broadcast_Templates", "Troll_Account_Blacklist"
];

const dashboards = [
  "Live Social Media Sentiment", "Fake News Outbreak Map", "Press Release Reach Analytics", 
  "Active Public Alerts", "Citizen Engagement Score", "Troll Network Activity"
];

const apis = [
  "Twitter/X Enterprise APIs", "Meta Graph APIs (Facebook/Insta)", "Telecom Bulk SMS APIs", "WhatsApp Business APIs",
  "Google Fact Check Tools API", "News Aggregator RSS Feeds"
];

const reports = [
  "Monthly PR Impact Analysis", "Social Media Viral Trends", "Fake News Takedown Audit", 
  "Public Alert Delivery Success Rate", "Community Trust Index", "Media Coverage Sentiment"
];

const security = [
  "OAuth2 Strict Scope Tokens", "Multi-Factor Approval for Broadcasts", "Tamper-Proof Audit Logs", 
  "Automated Redaction of Sensitive Data", "DDoS Protection for Public Portals", 
  "Role-Based Publishing Rights", "Watermarking for Official Images", "Encrypted Internal Comms"
];

const futureScope = [
  "AI Holographic Press Conferences", "Real-time Neural Translation Earpieces", "Autonomous Drone Billboards",
  "Metaverse Community Policing Hubs", "Predictive Virality Models", "Brainwave Driven Sentiment Maps"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'PR & Media Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Comm Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Engagement Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CommunicationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Megaphone className="inline-icon" size={28} /> AI Public Communication & Media
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Communication & Media Management</strong> is the voice of the police department. It uses Generative AI to instantly draft press notes, detects and dismantles fake news networks on social media, and broadcasts critical emergency alerts to citizens in their native languages.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#3b82f6" /> AI Press Note Generator</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of officers spending hours writing, the AI takes the core facts of a successful raid or operation and instantly generates a professional, legally-sound press release in English and Hindi.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Fake News & Troll Control</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Detects highly-shared fake WhatsApp forwards or manipulated images. Automatically drafts counter-narratives and flags coordinated troll farms to social media platforms for takedown.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Share2 className="inline-icon" color="#f59e0b" /> Social Media Broadcasting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A unified dashboard to publish updates simultaneously across X (Twitter), Facebook, and Instagram. AI predicts the optimal time to post for maximum citizen reach.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Public Alerts & Sentiment</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Sends geo-targeted SMS blasts during curfews or disasters. Continuously monitors public comments to gauge community sentiment and trust in local law enforcement.</p>
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
            {communicationModules.map((mod, i) => (
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
            <Megaphone size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI PUBLIC <span>COMMUNICATION</span></h1>
            <p className="cyber-subtitle">Press Note AI, Fake News Control & Social Media Broadcast</p>
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

export default CommunicationDetailed;
