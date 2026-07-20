import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Heart, GraduationCap
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Martyr Family Support Bot", "Scholarship AI", "Medical Claim Processor", 
  "Stress Analysis NLP", "Insurance Liaison Bot", "Welfare Fund Allocator", 
  "Emergency Family Alert AI", "Therapist Matchmaker", "Financial Advisory Bot",
  "Pension Sync AI", "Housing Allocation Bot", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const welfareModules = [
  {
    title: "Martyr & Family Support",
    icon: <Heart size={20} />,
    items: ["Automated Ex-Gratia Processing", "Family Contact Management", "Emergency SMS Blasts", "Memorial Event Invites"]
  },
  {
    title: "Education & Scholarships",
    icon: <GraduationCap size={20} />,
    items: ["Police Public School Sync", "Automated Scholarship Grading", "Higher Education Loans", "Student Mentorship AI"]
  },
  {
    title: "Medical & Insurance",
    icon: <Activity size={20} />,
    items: ["Cashless Hospital Sync", "AI Medical Reimbursement", "Group Health Insurance (GHI) Claims", "Annual Health Check Alerts"]
  },
  {
    title: "Mental Health & Stress",
    icon: <Network size={20} />,
    items: ["Anonymous Stress NLP Surveys", "Burnout Risk Scoring", "Virtual Counseling Router", "Duty Rest Mandates"]
  },
  {
    title: "Welfare Funds & Housing",
    icon: <FileText size={20} />,
    items: ["Police Welfare Fund Audits", "Transparent Housing Allotment", "Canteen Card Limits", "Retirement Financial Planning"]
  }
];

const aiFeatures = [
  "AI OCR for Hospital Bills & Prescriptions", "AI NLP Sentiment Analysis on Stress Surveys", "AI Fair Grading for Scholarships",
  "AI Burnout Prediction from Duty Rosters", "AI Fraud Detection in Medical Claims", "AI Personalized Financial Advice",
  "AI Automated Chatbot for Pension Queries", "AI Housing Allotment Transparency"
];

const databases = [
  "Martyr_Family_Registry", "Scholarship_Applications", "Medical_Claims_DB", "Stress_Survey_NLP_Lake", "Welfare_Fund_Ledger", 
  "GHI_Insurance_Policies", "Housing_Allotment_Queue", "Canteen_Purchases", "Anonymized_Therapy_Logs"
];

const dashboards = [
  "State-wide Stress & Burnout Heatmap", "Medical Claim Processing Speed", "Welfare Fund Utilization", 
  "Scholarship Disbursement Tracker", "Martyr Family Outreach", "Housing Allotment Status"
];

const apis = [
  "Insurance Provider Gateways (TPA)", "Hospital Billing Networks", "Education Board Result Scrapers", "Bank Payment Gateways (NEFT/RTGS)",
  "SMS/Voice Call Emergency Broadcast", "State Housing Portal Sync"
];

const reports = [
  "Annual Force Health & Stress Index", "Welfare Fund Audit Report", "Medical Claim Denial Analysis", 
  "Scholarship Impact Report", "Housing Allotment Transparency Audit", "Pension Clearance Speed"
];

const security = [
  "HIPAA-Compliant Medical Data Storage", "Strict Anonymization of Mental Health Data", "End-to-End Encryption for Therapy Sessions", 
  "Blockchain Audit for Welfare Funds", "Multi-Factor Authentication for Claims", 
  "Role-Based Access for Family Records", "Secure Payment Gateway Integration", "Data Masking on Public Leaderboards"
];

const futureScope = [
  "AI Virtual Therapists for PTSD", "Wearable Bio-Sensors for Stress Tracking", "Blockchain-based Smart Contracts for Pensions",
  "Automated Robotic Pharmacies in Police Hospitals", "VR Relaxation Environments in Barracks", "Predictive Disease Modeling"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Welfare Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Support Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Welfare Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceWelfareDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Heart className="inline-icon" size={28} /> AI Police Welfare & Support
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Welfare</strong> ensures the mental, physical, and financial well-being of the force and their families. From rapidly processing medical claims via OCR to utilizing NLP surveys for detecting burnout, this AI acts as a dedicated guardian for those who guard the state.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Medical & Insurance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI reads uploaded hospital bills using OCR and automatically cross-checks against the Group Health Insurance policy, instantly approving valid medical reimbursements without bureaucratic delays.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#10b981" /> Mental Health & Stress</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Deploys anonymous NLP-based conversational surveys to officers. The AI detects signs of PTSD or burnout and autonomously suggests mandatory rest or connects them to virtual therapists.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Heart className="inline-icon" color="#f59e0b" /> Martyr Family Support</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A dedicated portal ensuring the families of fallen heroes receive their ex-gratia funds, pensions, and educational support autonomously, tracking touchpoints to ensure they are never forgotten.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><GraduationCap className="inline-icon" color="#ef4444" /> Education Scholarships</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automates the Police Welfare Scholarship process. AI scrapes public board results and automatically grades applications, disbursing funds directly to the children of police personnel.</p>
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
            {welfareModules.map((mod, i) => (
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
            <Heart size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>WELFARE</span></h1>
            <p className="cyber-subtitle">Medical Claims, Stress NLP & Martyr Support</p>
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

export default PoliceWelfareDetailed;
