import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Users, Bot, LayoutDashboard, Database, Shield, Rocket,
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  Briefcase, Calendar, Calculator, Target, BookOpen, Heart,
  Smartphone, HardDrive, Bell, CheckCircle, ShieldAlert
} from 'lucide-react';
import '../styles/hrmsDetailed.css';

const aiExperts = [
  "Police HR Domain Expert AI", "Officer Recruitment Expert AI", "Duty & Leave Expert AI",
  "Payroll & Allowances Expert AI", "Performance & Medals Expert AI", "Police Training Expert AI",
  "Force Engagement Expert AI", "Police Act & Compliance Expert AI", "Armoury Management AI",
  "Software Architect AI", "UI/UX Designer AI", "Frontend Developer AI",
  "Backend Developer AI", "Database Engineer AI", "AI/ML Engineer AI",
  "Cyber Security Engineer AI", "QA Engineer AI", "DevOps Engineer AI"
];

const hrModules = [
  {
    title: "Core Police Admin",
    icon: <Users size={20} />,
    items: ["Officer Management", "Battalion Structure", "Police Station Management", "Rank & Badge Management", "Zone & Range Management", "Service Record (Service Book)"]
  },
  {
    title: "Recruitment & Selection",
    icon: <Briefcase size={20} />,
    items: ["Constable/SI Job Posting", "Police Recruitment Portal", "Physical Test Scheduling", "Background Verification (AI)", "Medical Exam Workflow", "Joining Letters"]
  },
  {
    title: "Duty & Attendance",
    icon: <Calendar size={20} />,
    items: ["Duty Roster Management", "Beat Shift Management", "Biometric Station Attendance", "GPS Beat Tracking", "Geo-fencing", "Emergency Deployment"]
  },
  {
    title: "Leave Management",
    icon: <Heart size={20} />,
    items: ["Casual/Earned Leave", "Station Leave Approval", "Reserve Force Balance", "Gazetted Holiday Calendar", "Emergency Cancellation"]
  },
  {
    title: "Salary & Allowances",
    icon: <Calculator size={20} />,
    items: ["Rank-based Salary Structure", "Risk & Hardship Allowance", "Uniform Allowance", "Payslip Generation", "PF & Pension", "Travel Reimbursement"]
  },
  {
    title: "Performance & Medals",
    icon: <Target size={20} />,
    items: ["ACR (Annual Confidential Report)", "Medal Recommendations", "Disciplinary Actions", "Gallantry Award Workflow", "Promotion Board Processing"]
  },
  {
    title: "Police Academy & Training",
    icon: <BookOpen size={20} />,
    items: ["Weapon Training Management", "Cyber Crime Investigation Courses", "Forensic Certifications", "Firing Practice Logs", "AI Skill Matrix"]
  },
  {
    title: "Force Engagement",
    icon: <Activity size={20} />,
    items: ["Welfare Surveys", "Grievance Redressal", "Mental Health Monitoring", "Internal Force Announcements"]
  },
  {
    title: "Armoury & Assets",
    icon: <HardDrive size={20} />,
    items: ["Weapon Assignment", "Police Vehicle Tracking", "Radio/Walkie-Talkie Issue", "Uniform Kit Distribution", "Asset Return Audit"]
  },
  {
    title: "Travel & Transfer",
    icon: <Rocket size={20} />,
    items: ["Transfer Orders", "Out-of-Station Duty Requests", "TA/DA Claims", "Approval Workflow"]
  },
  {
    title: "Force Helpdesk",
    icon: <Bell size={20} />,
    items: ["IT Support Tickets", "Barrack Maintenance Requests", "Admin Complaints", "Resolution Tracking"]
  }
];

const aiFeatures = [
  "AI Constable Application Screening", "AI Physical Test Result Analysis", "AI Duty Roster Optimization",
  "AI Station Leave Anomaly Detection", "AI Salary & Pension Error Detection", "AI Officer Performance Prediction",
  "AI Medal & Promotion Recommendation", "AI Force Attrition/Stress Prediction", "AI Cyber Skill Gap Analysis",
  "AI Weapon Issue Error Detection", "AI Police Act Policy Chatbot", "AI FIR Document OCR",
  "AI Face Recognition Station Attendance", "AI Voice-based Duty Assistant"
];

const databases = [
  "Officers", "Battalions", "Ranks", "Stations", "Zones", "DutyRosters",
  "Permissions", "Attendance", "Leaves", "Holidays", "Payroll", "Allowances",
  "Recruits", "Candidates", "PhysicalTests", "MedicalTests", "ACRs",
  "Medals", "DisciplinaryActions", "Trainings", "Weapons", "Vehicles", "AuditLogs"
];

const dashboards = [
  "DGP Master Dashboard", "SP/SSP Command Dashboard", "SHO Station Dashboard",
  "Armoury & Logistics Dashboard", "Police Recruitment Dashboard", "Force Deployment Dashboard",
  "Officer Self-Service Portal"
];

const apis = [
  "Authentication APIs", "Officer Profile APIs", "Recruitment APIs", "Duty Roster APIs",
  "Leave & Transfer APIs", "Salary APIs", "ACR APIs", "Armoury APIs", "Vehicle APIs",
  "Crime Sync APIs", "Notification APIs", "AI Prediction APIs"
];

const reports = [
  "Force Strength Report", "Station Attendance Report", "Leave & Absentee Report",
  "Payroll & Allowance Report", "Recruitment Progress Report", "ACR & Medal Report",
  "Weapon Inventory Report", "Disciplinary Action Report", "Monthly Zone HR Report"
];

const security = [
  "Zero-Trust Architecture", "Gov-Grade JWT Authentication", "Biometric MFA",
  "Rank-Based Access Control (RBAC)", "End-to-End Encryption (AES-256)",
  "Immutable Audit Trails", "Secure Intranet Backup", "Police Data Compliance"
];

const futureScope = [
  "Mobile Police HRMS App", "Secure Police Radio Integration", "CCTNS Database Sync",
  "Emergency SOS Integration", "AI Predictive Force Deployment", "AI Anti-Riot Workforce Planning",
  "Predictive Crime-to-Force Analytics", "Multilingual Voice Assistant", "Offline Field Mode"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Police AI Agents', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Police Admin Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Reports & Dashboards', icon: <FileText size={18} /> },
  { id: 'security', label: 'Security & Future', icon: <Shield size={18} /> }
];

const HrmsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI Police HRMS Overview
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Police HRMS</strong> is a next-generation 'Digital Nervous System' designed specifically to automate and optimize administrative and HR operations within the Police Force. It replaces traditional files and registers with Artificial Intelligence to manage officer deployment, duties, weapons, leaves, and performance in real-time.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Calendar className="inline-icon" color="#3b82f6" /> Smart Deployment</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI analyzes crime heatmaps and officer fatigue to allocate the right personnel to the right beats. Features GPS tracking and biometric station attendance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><HardDrive className="inline-icon" color="#10b981" /> Armoury & Assets</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Real-time audit and error detection for weapon issuance, PCR van tracking, and uniform kit distribution.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#f59e0b" /> Performance & Medals</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Data-driven ACRs based on actual cases solved. AI identifies outstanding officers for Gallantry Awards and promotions without bias.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Zero-Trust Security</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Gov-Grade Encryption, Rank-Based Access Control, and Biometric MFA ensure sensitive police data is never compromised.</p>
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
            {hrModules.map((mod, i) => (
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
                  {dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6" /> {d}</li>)}
                </ul>
              </div>
              <div className="panel">
                <h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3>
                <ul className="premium-list">
                  {reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981" /> {r}</li>)}
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
                  {security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444" /> {s}</li>)}
                </ul>
              </div>
              <div className="panel highlight-green">
                <h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3>
                <ul className="premium-list">
                  {futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981" /> {f}</li>)}
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
            <h1 className="cyber-title">AI HRMS <span>ENTERPRISE PLATFORM</span></h1>
            <p className="cyber-subtitle">Next-Generation Workforce Management powered by Agentic AI</p>
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

export default HrmsDetailed;
