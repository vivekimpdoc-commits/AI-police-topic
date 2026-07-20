import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, FileCheck
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Applicant Screener AI", "Document Verifier Bot", "Physical Test Scheduler", 
  "Exam Cheating Predictor", "Merit List Generator", "Medical Exam Tracker", 
  "Background Vetting Bot", "Joining Formalities AI", "Recruitment Audit AI",
  "Interview Sentiment Analyzer", "Impersonation Detector", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const recruitmentModules = [
  {
    title: "Application Screening",
    icon: <Users size={20} />,
    items: ["AI Form Auto-Rejection (Eligibility)", "Document OCR Verification", "Duplicate Profile Detection", "Admit Card Auto-Generation"]
  },
  {
    title: "Physical & Written Exams",
    icon: <Activity size={20} />,
    items: ["RFID Physical Test Tracking", "Exam Center Duty Roster", "CCTV Anti-Cheating Sync", "OMR/Digital Answer Key Sync"]
  },
  {
    title: "Medical & Vetting",
    icon: <Shield size={20} />,
    items: ["Medical Board Workflow", "Automated Criminal Record Check", "Digital Character Verification", "Biometric Identity Match"]
  },
  {
    title: "Merit & Onboarding",
    icon: <FileCheck size={20} />,
    items: ["AI Merit List Calculation (Category-wise)", "Digital Joining Letters", "Police Training Academy Allocation", "Initial Kit Allocation"]
  }
];

const aiFeatures = [
  "AI Deepfake/Impersonation Detection during Exams", "AI Automated Extraction of Academic Marks via OCR", "AI Predictive Scheduling for Physical Tests based on Weather",
  "AI Sentiment Analysis during Panel Interviews", "AI Merit Calculation respecting complex State Reservation Laws", "AI Fraud Pattern Detection across thousands of applicants",
  "AI Facial Recognition matching Application Photo to Exam Hall Photo", "AI Automated Generation of Joining Dossiers"
];

const databases = [
  "Applicant_Lake", "Exam_Scores_Ledger", "Physical_Test_RFID_Logs", "Medical_Clearance_DB", "Background_Check_Archive", 
  "Merit_List_DB", "Biometric_Signatures", "Training_Academy_Roster"
];

const dashboards = [
  "Live Recruitment Progress", "Exam Center Integrity Heatmap", "Category-wise Applicant Demographics", 
  "Medical/Vetting Pendency", "Physical Test Pass/Fail Ratios", "Onboarding Status Board"
];

const apis = [
  "DigiLocker (Academic Certs) API", "State Education Board APIs", "UIDAI (Aadhar) Authentication", "CCTNS (Criminal Records)",
  "Hospital Medical Board Gateway", "RFID Gateway (Physical Tests)"
];

const reports = [
  "Recruitment Cycle Turnaround Time", "Exam Integrity Audit Report", "Diversity & Category Fulfillment", 
  "Physical Test Standard Deviations", "Background Verification Failures", "Academy Intake Summary"
];

const security = [
  "End-to-End Encryption of Applicant PII", "Air-Gapped Processing for Written Exam Results", "Hardware Security Modules for Merit List Generation", 
  "Biometric Login for Examiners", "Anti-Tamper Digital Admit Cards (QR)", 
  "Blockchain Audit of Category Changes", "DDoS Protection for Application Portals", "Strict Rate Limiting on Result APIs"
];

const futureScope = [
  "Virtual Reality (VR) Aptitude Testing", "AI Voice Stress Analysis during Interviews", "Blockchain-based Immutable Service Records from Day 1",
  "Predictive Attrition Modeling of New Recruits", "Smart Wearables for Physical Endurance Tests", "Automated Career Trajectory Prediction"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Recruitment Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Hiring Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Hiring Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const RecruitmentEcosystemDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Users className="inline-icon" size={28} /> AI Police Recruitment Ecosystem
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Recruitment Ecosystem</strong> manages the mammoth task of hiring thousands of police personnel. It utilizes AI to screen millions of applications, prevents exam impersonation via facial recognition, and ensures absolute transparency in merit list generation.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#3b82f6" /> AI Applicant Screening</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly processes millions of applications. AI uses OCR to verify uploaded mark sheets against DigiLocker, automatically rejecting underage, overage, or unqualified candidates without human bias.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Anti-Impersonation Tests</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>At physical test grounds and written exam centers, AI facial recognition compares the live candidate to their application photo and Aadhar database, instantly red-flagging 'Munna Bhais' (impersonators).</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#f59e0b" /> Automated Vetting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Once a candidate clears the exams, the AI automatically pings the CCTNS database to check for pending criminal cases across India, streamlining the agonizingly slow police verification process.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#ef4444" /> Unbiased Merit Lists</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI calculates the final merit list, factoring in complex state reservation quotas (SC/ST/OBC/Women) with zero human intervention. Results are published simultaneously on a transparent blockchain ledger.</p>
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
            {recruitmentModules.map((mod, i) => (
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
            <h1 className="cyber-title">RECRUITMENT <span>ECOSYSTEM</span></h1>
            <p className="cyber-subtitle">Applicant Screening, Exam Integrity & AI Merit Lists</p>
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

export default RecruitmentEcosystemDetailed;
