import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Users, Search, UserCheck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Sub-Inspector Recruitment Bot", "Constable Vacancy Analyzer", "Physical Efficiency Test (PET) Scorer",
  "Written Exam Paper Setter AI", "Exam Center Allocation Optimizer", "Candidature Verification AI",
  "Aadhaar Biometric Matcher AI", "Fake Certificate Detector AI", "Medical Test Result Parser",
  "Color Blindness Assessment AI", "Interview Panel Scheduling AI", "Interview Scoring Normalizer",
  "Background Verification AI", "Criminal Record Scrubber", "Social Media Behavior Analyzer",
  "Caste Certificate Verifier AI", "Domicile Certificate Checker", "NCC Quota Benefit Calculator",
  "Ex-Servicemen Quota Modeler", "Sports Quota Allocation AI", "Women Quota Compliance Checker",
  "EWS Quota Authenticator", "Dependent of Freedom Fighter AI", "Merit List Generator AI",
  "Tie-Breaker Logic Algorithm", "Waitlist Management AI", "Appointment Letter Dispatcher",
  "Join Date Scheduling AI", "Induction Training Allocator", "Recruitment Drive Budgeting AI",
  "Exam Surveillance Video AI", "Impersonation Detector (Face ID)", "Admit Card Generator AI",
  "Recruitment Portal Chatbot", "Helpdesk Ticket Resolution AI", "Candidate Grievance Parser",
  "Exam Paper Leak Predictor", "Secure Question Bank Shuffler", "OMR Sheet Grading AI",
  "CBT (Computer Based Test) Monitor", "Typing Test Speed Evaluator", "Stenography Audio Scorer AI",
  "Driver Trade Test Evaluator", "Dog Handler Aptitude AI", "Mounted Police Skill Grader",
  "Water Police Swim Test AI", "Band Unit Audition Scorer", "Cyber Security Talent Scout",
  "Forensic Science Expert Scout", "Legal Officer Selection AI", "Accounts Officer Recruitment AI",
  "Recruitment Fraud Analytics", "Recruiter Collusion Detector", "Historical Recruitment Trends AI",
  "Future Vacancy Forecaster", "Lateral Entry Assessment AI", "Deputation Screening AI",
  "Contractual Staff Hiring AI", "Outsourcing Vendor Evaluator", "Recruitment Audit Compliance AI"
];

const modules = [
  {
    title: "Exam & Assessment",
    icon: <FileText size={20} />,
    items: ["OMR & CBT Grading", "PET/PST Scoring", "Question Bank Shuffling", "Admit Card Generation"]
  },
  {
    title: "Verification & Fraud",
    icon: <ShieldAlert size={20} />,
    items: ["Fake Certificate Detection", "Biometric/Face Impersonation", "Criminal Record Scrubbing", "Paper Leak Prediction"]
  },
  {
    title: "Quotas & Merit",
    icon: <Users size={20} />,
    items: ["SC/ST/OBC/EWS Logic", "Sports & NCC Quotas", "Tie-Breaker Resolution", "Merit List Generation"]
  },
  {
    title: "Specialized Talent",
    icon: <Search size={20} />,
    items: ["Cyber Cell Scouting", "Forensic Expert Hiring", "Lateral Entry Assessment", "Band & K9 Auditions"]
  },
  {
    title: "Onboarding & Logistics",
    icon: <UserCheck size={20} />,
    items: ["Exam Center Allocation", "Appointment Dispatch", "Training Allocation", "Recruitment Budgeting"]
  }
];

const aiFeatures = [
  "Facial Recognition Impersonation Detection", "AI-Powered OMR & CBT Grading", "Automated Quota & Reservation Logic",
  "Deep-Fake Certificate Analysis", "Predictive Exam Paper Leak Alerts", "Social Media Background Scrubbing"
];

const databases = [
  "Candidate_Master_DB", "Biometric_Face_Vault", "Question_Bank_Encrypted", "Merit_List_Ledgers", 
  "Certificate_Verification_Logs", "Exam_Center_Roster", "Background_Check_DB", "Quota_Compliance_DB"
];

const dashboards = [
  "Live Exam Surveillance Board", "Recruitment Drive Status", "Fraud Detection Heatmap", 
  "Quota & Reservation Stats", "Merit List Analytics", "Vacancy Fulfillment Tracker"
];

const apis = [
  "UIDAI Aadhaar Verification API", "DigiLocker Certificate Sync", "CCTNS Criminal Record API", 
  "Online Payment Gateway Sync", "SMS/Email Dispatch API", "State Education Board API"
];

const reports = [
  "Final Merit List Report", "Fraud & Impersonation Audit", "Category-wise Quota Summary", 
  "Exam Center Attendance Log", "PET/PST Qualification Ratios", "Recruitment Expenditure Report"
];

const security = [
  "End-to-End Encrypted Question Banks", "Biometric Exam Access", "Blockchain Merit Lists", 
  "Anti-Screen Recording in CBT", "Zero-Trust Verification Logic", "Automated Audit Trails"
];

const futureScope = [
  "VR-Based Aptitude Testing", "AI Interview Voice Analysis", "Autonomous Drone Surveillance at Centers",
  "Decentralized Identity Verification", "Predictive Candidate Success Modeling", "Global Talent Scouting APIs"
];


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Recruitment Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Hiring Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Hiring Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const OfficerRecruitmentExpertDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <UserCheck className="inline-icon" size={28} /> Officer Recruitment Expert AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Officer Recruitment Expert AI</strong> revolutionizes the police hiring process by automating end-to-end recruitment drives. It prevents impersonation via biometric matching, scores exams and physical tests without human bias, rigidly enforces complex reservation quotas, and generates immutable merit lists.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Search className="inline-icon" color="#3b82f6" /> Exams & Evaluations</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Handles encrypted question bank generation, CBT monitoring, and automated OMR grading. Also calculates Physical Efficiency Test (PET) scores flawlessly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Anti-Fraud & Verification</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses facial recognition to stop impersonators at exam centers. Syncs with CCTNS and DigiLocker to detect fake certificates and hidden criminal records instantly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#f59e0b" /> Quotas & Merit Lists</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Applies complex state reservation policies (SC/ST/OBC/Women/NCC) strictly mathematically. Resolves tie-breakers and produces blockchain-verified merit lists.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><UserCheck className="inline-icon" color="#ef4444" /> Specialized Scouting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Goes beyond constabulary hiring to scout lateral entry talent for Cyber Cells, Forensic units, and Legal roles using specialized aptitude algorithms.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Audit Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Fraud Prevention</h3>
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
            <UserCheck size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">OFFICER RECRUITMENT <span>EXPERT AI</span></h1>
            <p className="cyber-subtitle">Automated Hiring, Fraud Detection & Merit Generation</p>
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

export default OfficerRecruitmentExpertDetailed;
