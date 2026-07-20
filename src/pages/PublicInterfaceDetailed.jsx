import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, MessageSquare
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Citizen Query Chatbot", "Lost Property Matcher", "Grievance Classifier AI", 
  "Appointment Scheduler Bot", "Safety Advisory Gen AI", "Survey Sentiment Analyst", 
  "Kiosk Assistant Bot", "Emergency NLP Router", "Awareness Campaign Optimizer",
  "Social Media Helpdesk Bot", "Multilingual Translator AI", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const interfaceModules = [
  {
    title: "Grievance & Queries",
    icon: <MessageSquare size={20} />,
    items: ["AI Chatbot for Citizen Queries", "Automated Grievance Classification", "Multilingual Public Helpdesk", "RTI Query Status Tracker"]
  },
  {
    title: "Lost & Found Property",
    icon: <FileText size={20} />,
    items: ["Lost Item Image Matching", "Found Property Registry", "Automated Return Alerts", "Digital Claim Filing"]
  },
  {
    title: "Citizen Appointments",
    icon: <Users size={20} />,
    items: ["Station Officer Appointment Booking", "Virtual Video Consultation", "Queue Management System", "Passport Verification Booking"]
  },
  {
    title: "Community Outreach",
    icon: <Activity size={20} />,
    items: ["Local Safety Advisory Push", "Neighborhood Survey Platform", "Cyber Crime Awareness Portal", "Emergency Contact Directory"]
  }
];

const aiFeatures = [
  "AI NLP for Auto-Routing Public Grievances to Right Dept", "AI Image Recognition to Match Lost & Found Items", "AI Multilingual Chatbot (Hindi/English/Regional)",
  "AI Sentiment Analysis on Public Feedback Surveys", "AI Generation of Hyper-Local Safety Advisories", "AI Voice-to-Text for Illiterate Citizens at Kiosks",
  "AI Prediction of Appointment No-Shows", "AI Spam Filtering for Public Portals"
];

const databases = [
  "Public_Grievance_Lake", "Lost_Property_Index", "Citizen_Appointment_DB", "Community_Survey_Data", "Safety_Advisory_Logs", 
  "Chatbot_Conversation_Archive", "Emergency_Directory", "Kiosk_Interaction_Logs"
];

const dashboards = [
  "Citizen Satisfaction Radar", "Grievance Resolution TAT", "Lost Property Recovery Rate", 
  "Station Appointment Queue", "Community Outreach Impact", "Chatbot Efficacy Metrics"
];

const apis = [
  "WhatsApp Business API (Chatbot)", "Gov Grievance Portal (CPGRAMS) Sync", "SMS Gateway (Advisories)", "Video KYC/Call API",
  "Social Media Sync (Twitter/FB)", "Smart City Public Kiosk API"
];

const reports = [
  "Monthly Grievance Resolution Report", "Lost vs Found Analytics", "Public Sentiment Scorecard", 
  "Station Visitor Demographics", "Awareness Campaign Reach", "Digital vs Physical Footfall"
];

const security = [
  "Strict PII Masking in Grievances", "End-to-End Encrypted Video Consults", "OTP Based Citizen Login", 
  "Captcha & Rate Limiting (Anti-Spam)", "Audit Log of Officer Responses", 
  "Data Localization (Data Stays in State)", "Blockchain Verified Claim Receipts", "DDoS Protection on Public Portal"
];

const futureScope = [
  "AI Avatar Holograms at Police Stations", "Metaverse Virtual Police Station", "Voice Biometric Citizen Authentication",
  "Predictive Policing based on Citizen Tips", "Gamified Cyber Security Awareness", "Wearable Panic Buttons Sync"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Public Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Interface Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Public Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PublicInterfaceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Users className="inline-icon" size={28} /> AI Police Public Interface
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Public Interface</strong> is the digital bridge between citizens and the police force. It uses conversational AI chatbots, automated grievance routing, and a digital lost-and-found system to provide 24/7 transparent, citizen-friendly services without requiring station visits.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><MessageSquare className="inline-icon" color="#3b82f6" /> AI Citizen Chatbot</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A multilingual WhatsApp and web bot that answers FAQs, helps citizens track FIRs, and guides them on how to file complaints. It uses NLP to instantly classify grievances and route them to the correct department.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#10b981" /> Lost & Found Matcher</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Citizens can upload photos of lost items. The AI automatically scans the 'Found Property' database of all police stations using image recognition, alerting the owner if a match is found.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#f59e0b" /> Digital Appointments</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Eliminates long queues at police stations. Citizens can book physical or virtual video appointments with the Station House Officer (SHO) for passport verifications, counseling, or non-emergency reporting.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Hyper-Local Outreach</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>The platform analyzes local crime trends to generate automated safety advisories (e.g., 'Spike in chain snatching in Sector 4'). These are pushed via SMS and social media to residents of that specific pin code.</p>
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
            {interfaceModules.map((mod, i) => (
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
            <Users size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">PUBLIC <span>INTERFACE</span></h1>
            <p className="cyber-subtitle">Citizen Chatbot, Grievances & Digital Appointments</p>
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

export default PublicInterfaceDetailed;
