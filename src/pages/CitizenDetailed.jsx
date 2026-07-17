import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, Smartphone, MessageCircle, HeartHandshake
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Jansunwai NLP Router AI", "Multilingual Voice Bot", "Citizen Feedback Sentiment AI", 
  "Emergency SOS Triangulator", "Public Portal Chatbot", "Lost & Found Matching Bot", 
  "Senior Citizen Well-being Checker", "RTI Query Automated Responder", "Traffic Challan Query Bot",
  "Community Outreach Analyzer", "Verification Certificate Agent", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const citizenModules = [
  {
    title: "AI Jansunwai (Grievance)",
    icon: <Users size={20} />,
    items: ["Automated Complaint Routing", "NLP Intent Classification", "Duplicate Grievance Merging", "Resolution Time Predictor"]
  },
  {
    title: "Multilingual Voice Bot",
    icon: <MessageCircle size={20} />,
    items: ["24/7 Helpline Support (112)", "Dialect Recognition (Awadhi, Bhojpuri)", "Emotional Distress Detection", "Auto-Ticket Generation from Calls"]
  },
  {
    title: "Citizen Mobile App",
    icon: <Smartphone size={20} />,
    items: ["Geo-fenced SOS Button", "E-Challan Payment Portal", "Lost & Found Image Search", "Local Police Station Locator"]
  },
  {
    title: "Feedback & Sentiment",
    icon: <HeartHandshake size={20} />,
    items: ["Social Media Sentiment Scraping", "Police Station Rating Analysis", "Public Survey Text Mining", "Trust Index Score Dashboard"]
  },
  {
    title: "E-Verification & Certificates",
    icon: <FileText size={20} />,
    items: ["Tenant Verification Automation", "Character Certificate OCR Checks", "Domestic Help Background Scans", "Digital Signature Issuance"]
  }
];

const aiFeatures = [
  "AI Deep NLP for Indian Languages", "AI Voice Stress Analysis for Emergency Calls", "AI Automated Document OCR Validation",
  "AI Geospatial Nearest-Unit Dispatch", "AI Sentiment Polarity Scoring", "AI Generative FAQ Responses",
  "AI Face Match for Missing Persons Portal", "AI Zero-Click Complaint Triage"
];

const databases = [
  "Jansunwai_Complaints", "Citizen_App_Users", "Emergency_Call_Transcripts", "Feedback_Surveys", "Tenant_Verifications", 
  "Missing_Persons_Public", "Lost_Found_Assets", "Social_Media_Mentions", "Character_Certificates", "Public_Alerts"
];

const dashboards = [
  "Jansunwai Resolution Tracker", "Public Trust & Sentiment Board", "112 Helpline Call Volume", 
  "Citizen App Active Users", "Verification Pendency Matrix", "Emergency Response Heatmap"
];

const apis = [
  "State Jansunwai Portal APIs", "CCTNS Public Sync APIs", "Bhashini Translation APIs", "SMS Gateway (NIC) APIs",
  "Payment Gateway APIs (Challan)", "WhatsApp Business APIs (Chatbot)", "Social Media Scraping APIs"
];

const reports = [
  "Monthly Grievance Redressal Audit", "Police Station Trust Index Ranking", "Voice Bot Call Deflection Rate", 
  "App SOS Incident Log", "Top Citizen Complaints by Category", "Verification TAT (Turnaround Time)"
];

const security = [
  "Citizen Data Anonymization", "OTP & Aadhaar e-KYC Verification", "End-to-End Encrypted Chat", 
  "Rate Limiting on Portal", "Data Privacy Law (DPDP) Compliance", 
  "Secure Payment Tunnels", "Bot-net Attack Defense", "Role-Based Access for IOs"
];

const futureScope = [
  "Metaverse Virtual Police Station", "Holographic Avatar Assistants", "Predictive Public Unrest Alerts",
  "Brainwave-Integrated Accessibility", "Smart City Kiosk Integration", "Autonomous Drone Escort for SOS"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Public Service Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Citizen Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Trust Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CitizenDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <HeartHandshake className="inline-icon" size={28} /> AI Citizen Services & Jansunwai
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Citizen Services</strong> acts as the digital bridge between the police and the public. It leverages Natural Language Processing (NLP) to read Jansunwai grievances, voice AI to handle 112 emergency calls in regional dialects, and sentiment analysis to measure public trust, ensuring 100% transparent and accessible policing.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#3b82f6" /> Smart Jansunwai (Grievance)</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Citizens submit complaints in broken Hindi or English. The AI understands the context, categorizes it (e.g., Cyber Fraud vs Property Dispute), and automatically routes it to the exact jurisdictional officer.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MessageCircle className="inline-icon" color="#10b981" /> Multilingual Voice Bot</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of waiting on hold, citizens speak to an AI that understands local dialects (Awadhi, Bhojpuri). It answers routine queries (e.g., "Where is my passport verification?") and escalates emergencies instantly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Smartphone className="inline-icon" color="#f59e0b" /> Digital Citizen App</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A unified mobile app for women's SOS, tenant verification uploads, e-challan payments, and a lost-and-found portal powered by AI image matching.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Public Trust & Sentiment</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scrapes Twitter/X, Facebook, and feedback forms to generate a 'Trust Index Score' for every police station, helping top brass identify community relations issues early.</p>
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
            {citizenModules.map((mod, i) => (
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
            <HeartHandshake size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI CITIZEN <span>SERVICES</span></h1>
            <p className="cyber-subtitle">Jansunwai Routing, Multilingual Bots & Public Trust Analytics</p>
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

export default CitizenDetailed;
