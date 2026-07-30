import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"Crowdsourced Policing Idea Aggregator",
  "Anonymous Tip-Off Validator AI",
  "Community Policy Input Summarizer",
  "Suggestion Sentiment & Urgency Scorer",
  "Fake/Spam Suggestion Filter Bot",
  "Multi-Lingual Suggestion Translator AI",
  "Traffic/Congestion Solution Extractor",
  "Crime Prevention Idea Pattern Matcher",
  "Women/Child Safety Suggestion Prioritizer",
  "Cyber-Crime Modus Operandi Tip Analyzer",
  "Automated Suggestion Categorization Bot",
  "Actionable Insight Drafter for SP/SSP",
  "Reward/Commendation Recommender for Tips",
  "Public Trust Index Impact Modeler AI",
  "Suggestion Duplicate/Plagiarism Checker",
  "Historical Suggestion ROI Correlator",
  "NGO/Civil Society Idea Sync AI",
  "RWA/Neighborhood Watch Suggestion Link",
  "Gram Chaupal/Rural Feedback Aggregator",
  "Informant/Source Code-Word Decoder Bot",
  "Automated Read-Receipt/Thank You Sender",
  "Suggestion Implementation Tracker AI",
  "Command Center Idea Dashboard Sync",
  "Voice-Note Suggestion Transcriber AI",
  "Election Security Idea Extractor Bot",
  "Festival/Event Crowd Management Tips AI",
  "Disaster Preparedness Public Ideas Link",
  "Stray Animal/Wildlife Menace Solutions AI",
  "Police Misconduct/Bribery Tip Flag AI",
  "Officer Commendation/Praise Extractor",
  "Interactive Suggestion Poll Generator Bot",
  "Blockchain Immutable Log for Tips/Ideas",
  "Inter-Agency (Civic Body) Idea Router",
  "Budget/Resource Feasibility Scorer AI",
  "Public Awareness Campaign Idea Matcher",
  "Community Risk Survey Gap Filler AI",
  "Mobile App Push Notification for Ideas",
  "Youth/Student Innovation Sync Bot",
  "Senior Citizen Friendly Policing Ideas AI",
  "Tourist/Foreigner Assistance Suggestions",
  "Weapon/Arms Control Public Inputs AI",
  "Protest/Mob De-escalation Idea Modeler",
  "Drug/Narcotics Hotspot Tip-Off Analyzer",
  "Traffic E-Challan System Improvement Tips",
  "AI Generated Policy Draft from Suggestions",
  "Suggestion Gamification & Leaderboard AI",
  "Local Slang/Dialect NLP Parser Bot",
  "AI Protocol for Whistleblower Protection",
  "Suggestion Anomaly & Trend Spike Alert",
  "Central PHQ Master Suggestion Sync",
  "AI Evaluator for Best Citizen Idea Award",
  "Inter-District Idea Cross-Pollinator Bot",
  "Police Infrastructure/Station Setup Ideas",
  "Jansunwai (Grievance) Overlap Checker AI",
  "Emergency 112 Response Improvement Tips",
  "Cyber-Mitra/Digital Volunteer Suggestion Link",
  "AI Driven Focus Group Topic Suggester",
  "Voice-Command Suggestion Query Assistant",
  "Social Media Hashtag/Idea Scraper Bot",
  "AI Driven Community Hackathon Planner"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Core AI Topics', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Advanced Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CitizenSuggestionPortalDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI CITIZEN SUGGESTION PORTAL
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI CITIZEN SUGGESTION PORTAL</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in crowdsourced policing ideas, anonymous tip validation & community-driven policy inputs.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Real-time Monitoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuous AI-driven surveillance and data collection ensuring immediate anomaly detection and rapid response protocols.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Cpu className="inline-icon" color="#10b981" /> Predictive Analytics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Utilizes machine learning to forecast trends, identify potential risks before they occur, and suggest optimized resource allocation.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Seamless Integration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hooks into existing national and state-level databases, providing a unified, interoperable platform across all departments.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Automated Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ensures all operations strictly adhere to legal and procedural guidelines, generating instant audit trails and compliance reports.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan" onClick={() => navigate(`/agent/${encodeURIComponent(expert)}`)} style={{cursor: 'pointer'}}>
                <Bot className="card-icon" />
                <h4>{expert}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {[
              { title: "Real-time Monitoring Module", items: ["Live Data Stream", "Alert Engine", "Geospatial Tracking"] },
              { title: "Predictive Analytics Engine", items: ["Risk Forecasting", "Resource Optimization", "Pattern Recognition"] },
              { title: "Automated Reporting System", items: ["Compliance Audits", "Daily Briefings", "Incident Logs"] },
              { title: "Cloud Integration Hub", items: ["State DB Sync", "Third-party API Webhooks", "Encrypted Data Transfer"] }
            ].map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  <LayoutDashboard size={20} color="#3b82f6" />
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
            {[
              "24/7 AI Processing", "Advanced Machine Learning Models", "Real-time Data Sync", 
              "Automated Alerts & Notifications", "Cross-Platform Accessibility", "Role-Based Access Control"
            ].map((feat, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple" onClick={() => navigate(`/agent/${encodeURIComponent(expert)}`)} style={{cursor: 'pointer'}}>
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
                <h3><Database className="inline-icon" color="#06b6d4" /> Database Integration</h3>
                <div className="tag-cloud">
                  {["Primary_Transaction_DB", "Analytics_Data_Warehouse", "Audit_Logs_Archive", "User_Access_Registry", "System_Configuration_DB"].map((db, i) => (
                    <span key={i} className="tech-tag">{db}</span>
                  ))}
                </div>
              </div>
              <div className="panel">
                <h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3>
                <div className="tag-cloud">
                  {["RESTful Core API", "Real-time WebSocket Feed", "Third-party Webhooks", "Authentication Gateway", "Data Export API"].map((api, i) => (
                    <span key={i} className="tech-tag tech-tag-alt">{api}</span>
                  ))}
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
                  {["Executive Overview Dashboard", "Live Operations Monitor", "Historical Trend Analysis", "System Health & Status"].map((d, i) => (
                    <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3>
                <ul className="premium-list">
                  {["Daily Summary Report", "Weekly Performance Analytics", "Monthly Compliance Audit", "System Exception Logs"].map((r, i) => (
                    <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>
                  ))}
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
                  {[
                    "End-to-End Data Encryption (AES-256)", "Multi-Factor Authentication (MFA)", 
                    "Strict Role-Based Access Control (RBAC)", "Tamper-proof Audit Trails", 
                    "Automated Threat Detection", "Regular Security Penetration Testing"
                  ].map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}
                </ul>
              </div>
              <div className="panel highlight-green">
                <h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3>
                <ul className="premium-list">
                  {[
                    "Integration with Advanced LLMs", "Predictive Autonomous Actions", 
                    "Enhanced Mobile Accessibility", "Cross-Agency Data Federation", 
                    "Blockchain-based Immutability", "Next-Gen UI/UX Overhaul"
                  ].map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}
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
            <ShieldAlert size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI CITIZEN SUGGESTION <span>PORTAL</span></h1>
            <p className="cyber-subtitle">Crowdsourced Policing Ideas, Anonymous Tip Validation & Community-Driven Policy Inputs</p>
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

export default CitizenSuggestionPortalDetailed;
