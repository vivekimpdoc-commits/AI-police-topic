import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Heart, Trophy
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Family Emergency Bot", "Scholarship Tracker AI", "Retirement Counselor", 
  "Mentorship Matcher AI", "Sports Talent Spotter", "Cultural Activity AI", 
  "Recognition Wall Bot", "Welfare Camp Planner", "Grievance Redressal AI",
  "PTSD Support Chatbot", "Legal Aid Advisor Bot", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const welfareModules = [
  {
    title: "Family & Emergency Support",
    icon: <Heart size={20} />,
    items: ["AI Health Camp Scheduler", "Martyrdom Benefit Processing", "Medical Emergency Fund", "Housing Assistance Portal"]
  },
  {
    title: "Education & Scholarships",
    icon: <Trophy size={20} />,
    items: ["AI Loan Eligibility Checker", "Police School Admissions", "Higher Education Loans", "Sports Excellence Awards"]
  },
  {
    title: "Retirement & Counselling",
    icon: <Activity size={20} />,
    items: ["AI Merit Scholarship Selector", "Pension Calculation AI", "Post-Retirement Knowledge Repo", "Second Career Guidance"]
  },
  {
    title: "Recognition & Community",
    icon: <Shield size={20} />,
    items: ["Officer Recognition Wall", "Cultural Activity Management", "Sports Tournament Manager", "Officer Mentorship Program"]
  }
];

const aiFeatures = [
  "AI Prediction of Officer Burnout based on Duty Roster Patterns", "AI Automated Screening of Scholarship Applications", "AI NLP for processing Family Grievance Petitions",
  "AI Sentiment Analysis for detecting PTSD in Officer Communications", "AI Matching of Retiring Officers to Second-Career opportunities", "AI Sports Talent Identification from Physical Test Records",
  "AI Automated Calculation of Martyr Family Benefits", "AI Cultural Event Logistics Optimizer"
];

const databases = [
  "Officer_Welfare_Lake", "Scholarship_Applications", "Martyrdom_Benefits_DB", "Retirement_Profiles", "Mentorship_Pool", 
  "Sports_Achievements', 'Recognition_Awards", "Family_Grievances"
];

const dashboards = [
  "Welfare Scheme Utilization", "Scholarship Disbursement Status", "Pending Family Grievances", 
  "Retirement Pipeline", "Sports Talent Matrix", "Officer Mental Health Index"
];

const apis = [
  "State Finance (Pension) Dept API", "School/University Admission Portals", "Medical Claims Insurance Gateway", "Sports Authority of India Feeds",
  "Second Career Job Portals", "Welfare Fund Banking Gateway"
];

const reports = [
  "Annual Welfare Expenditure Audit", "Scholarship Beneficiary List", "Martyr Family Support Status", 
  "Retirement Benefits Dispensed', 'Sports Achievement Report", "Recognition Awards Summary"
];

const security = [
  "Strict PII Protection for Family Data", "Encrypted Medical Records", "Secure Grievance Submission Portal", 
  "Anonymized Mental Health Data Analysis", "Consent-based Data Sharing", 
  "Biometric Access to Martyr Benefits Module", "Audit Log of Welfare Fund Disbursements", "Anti-Fraud Duplicate Claim Detection"
];

const futureScope = [
  "AI Mental Health Companion Chatbot for Officers", "VR Retirement Preparation Simulations", "Blockchain Pension Smart Contracts",
  "AI Career DNA matching Officers to Post-retirement Roles", "Gamified Fitness & Wellness Programs", "Wearable Health Monitors for Deployed Personnel"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Welfare Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Welfare Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Welfare Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceWelfareUniqueDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Heart className="inline-icon" size={28} /> AI Police Welfare (Unique)
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Welfare</strong> recognizes that a happy officer is an effective officer. This module goes beyond standard HR to provide a dedicated AI-powered welfare ecosystem — from tracking children's scholarships and managing martyr family benefits, to identifying officer burnout before it leads to tragedy.
            </p>
            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Heart className="inline-icon" color="#3b82f6" /> Martyr Family Support</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>When an officer is martyred, the AI instantly initiates the entire benefit disbursement workflow — ex-gratia payments, pension conversion, dependent employment priority, and housing allocation — reducing the family's administrative burden during grief.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Trophy className="inline-icon" color="#10b981" /> AI Scholarship Tracker</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI scans children's academic results and cross-references available government and department scholarships, automatically generating applications and tracking disbursements — ensuring no eligible child misses out.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Burnout Early Warning</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>By analyzing duty roster patterns (consecutive night shifts, overextended deployments), the AI identifies officers at high risk of burnout or PTSD, proactively triggering a counselling referral before a crisis emerges.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Recognition Wall</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A living digital memorial and recognition platform celebrating gallantry, community service, and innovative policing. AI curates stories and nominations based on FIR outcomes and public commendations.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan">
                <Bot className="card-icon" /><h4>{expert}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {welfareModules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">{mod.icon}<h3>{mod.title}</h3></div>
                <div className="module-tags">{mod.items.map((item, j) => <span key={j} className="module-tag">{item}</span>)}</div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid">
            {aiFeatures.map((feat, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple">
                <Cpu className="card-icon" /><h4>{feat}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel"><h3><Database className="inline-icon" color="#06b6d4" /> Database Tables</h3><div className="tag-cloud">{databases.map((db, i) => <span key={i} className="tech-tag">{db}</span>)}</div></div>
              <div className="panel"><h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3><div className="tag-cloud">{apis.map((api, i) => <span key={i} className="tech-tag tech-tag-alt">{api}</span>)}</div></div>
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel"><h3><LayoutDashboard className="inline-icon" color="#3b82f6" /> Dashboards</h3><ul className="premium-list">{dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>)}</ul></div>
              <div className="panel"><h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3><ul className="premium-list">{reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>)}</ul></div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel highlight-red"><h3><ShieldAlert className="inline-icon" color="#ef4444" /> Security Protocols</h3><ul className="premium-list">{security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}</ul></div>
              <div className="panel highlight-green"><h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3><ul className="premium-list">{futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}</ul></div>
            </div>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="hrms-detailed-page">
      <div className="hrms-bg-fx"></div>
      <div className="hrms-grid-overlay"></div>
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn"><ArrowLeft size={20} /> BACK TO MODULES</button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><Heart size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">POLICE <span>WELFARE</span></h1><p className="cyber-subtitle">Martyr Benefits, Scholarship Tracking & Burnout AI</p></div>
        </div>
      </header>
      <div className="hrms-layout">
        <nav className="hrms-sidebar">
          {tabs.map(tab => (
            <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.icon} {tab.label}</button>
          ))}
        </nav>
        <main className="hrms-content-area">
          <AnimatePresence mode="wait"><div key={activeTab}>{renderContent()}</div></AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default PoliceWelfareUniqueDetailed;
