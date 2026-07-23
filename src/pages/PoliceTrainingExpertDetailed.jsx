import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, BookOpen, GraduationCap, Target
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Induction Training Curriculum AI", "Constable Basic Training Planner", "Sub-Inspector Drill Scheduler",
  "IPS Probationer Module AI", "Weapon Handling Simulator AI", "Virtual Reality Firing Range Scorer",
  "Riot Control VR Trainer", "Tear Gas Deployment Simulator", "Hostage Rescue Tactics AI",
  "First Aid & Trauma Response AI", "Cyber Crime Investigation Trainer", "Digital Forensics Virtual Lab AI",
  "Financial Fraud Investigation Coach", "Dark Web Monitoring Trainer", "Crypto Seizure Simulator AI",
  "Advanced Interrogation Tactics AI", "Human Rights Compliance Coach", "CCTNS Operation Trainer",
  "FIR Drafting Assistant AI", "Charge Sheet Preparation Coach", "Court Deposition Simulator",
  "Mob Psychology & Crowd Control AI", "VVIP Security Protocol Trainer", "Anti-Terrorism Drill Planner",
  "IED Identification & Disposal Trainer", "K9 Handler Basics Coach", "Mounted Police Riding Simulator",
  "Drone Piloting & Surveillance AI", "Traffic Management VR Trainer", "Breathalyzer Operation Coach",
  "Narcotics Detection & Seizure AI", "Crime Scene Preservation Coach", "Fingerprint Lifting Simulator",
  "DNA Evidence Handling AI", "Sexual Assault Case Sensitivity AI", "Child Rights & POCSO Trainer",
  "Women Helpdesk Empathy Coach", "Community Policing Strategies AI", "Social Media OSINT Trainer",
  "Media Relations & Briefing Coach", "Stress Management Workshop AI", "Yoga & Physical Fitness Coach",
  "Unarmed Combat (Krav Maga) Trainer", "Martial Arts Proficiency Scorer", "Swimming & Water Rescue Trainer",
  "Disaster Management & Relief AI", "Earthquake Evacuation Drill AI", "Flood Rescue Boat Handling Coach",
  "High Altitude Survival Trainer", "Jungle Warfare Tactics AI", "Naxal Area Operation Simulator",
  "Night Vision & Thermal Combat AI", "Sniper Rifle Accuracy Coach", "Ammunition Conservation Trainer",
  "Foreign Language Basic Coach (Tourism)", "Sign Language for Police AI", "Legal Amendment Refresher AI",
  "Supreme Court Judgment Summarizer", "New Criminal Laws (BNS) Trainer", "Promotional Exam Preparation AI"
];

const modules = [
  {
    title: "Tactical & Weaponry VR",
    icon: <Target size={20} />,
    items: ["VR Firing Range", "Hostage Rescue Tactics", "Mob Control Simulators", "Sniper Accuracy"]
  },
  {
    title: "Cyber & Forensics",
    icon: <Terminal size={20} />,
    items: ["Dark Web Monitoring", "Crypto Seizures", "DNA Handling", "Digital Forensics Lab"]
  },
  {
    title: "Law & Investigation",
    icon: <BookOpen size={20} />,
    items: ["New Criminal Laws (BNS)", "Court Deposition Sim", "Charge Sheet Prep", "POCSO & Human Rights"]
  },
  {
    title: "Physical & Specialized",
    icon: <Activity size={20} />,
    items: ["Krav Maga Unarmed Combat", "High Altitude Survival", "K9 & Mounted", "Disaster Rescue"]
  },
  {
    title: "Soft Skills & Sensitivity",
    icon: <GraduationCap size={20} />,
    items: ["Victim Empathy Coaching", "Social Media OSINT", "Media Relations", "Sign/Foreign Languages"]
  }
];

const aiFeatures = [
  "Immersive VR Riot Control Simulators", "Algorithmic Firing Range Accuracy Scoring", "Real-Time Cyber Crime Sandbox",
  "NLP-Based Legal Amendment Refreshers", "Biometric Stress Feedback during Drills", "Automated Promotional Exam Tutoring"
];

const databases = [
  "Training_Curriculum_Ledger", "VR_Simulation_Scores", "Cyber_Range_Sandbox", "Legal_Amendments_DB", 
  "Physical_Fitness_Metrics", "Weapons_Proficiency_Logs", "Officer_Skill_Matrix", "BNS_Case_Studies"
];

const dashboards = [
  "Academy Performance Heatmap", "Live VR Firing Scores", "Cyber Training Progress", 
  "Physical Fitness Tracking", "Legal Knowledge Compliance", "Promotional Exam Readiness"
];

const apis = [
  "State Police Academy Sync", "BPR&D Curriculum Webhooks", "VR Headset Telemetry API", 
  "E-Courts Judgment Sync", "Forensic Lab Training API", "Cyber Security Certification API"
];

const reports = [
  "Batch-wise Graduation Analytics", "Firing Range Proficiency Log", "Cyber Skills Audit", 
  "Physical Combat Readiness", "Legal Refresher Compliance", "Academy Budget Utilization"
];

const security = [
  "Encrypted Training Sandboxes", "Biometric Academy Access", "Immutable Assessment Scores", 
  "Isolated Cyber Threat Labs", "Anti-Cheat in Promo Exams", "Role-Based Course Access"
];

const futureScope = [
  "Haptic Feedback Combat Suits", "AI Generated Dynamic Crime Scenes in VR", "Predictive Officer Skill Profiling",
  "Global Interpol Training Sync", "Neural-Link Knowledge Transfer (Theoretical)", "Autonomous Drone Combat Training"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Training Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Curriculum Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Academy Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceTrainingExpertDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <GraduationCap className="inline-icon" size={28} /> Police Training Expert AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Training Expert AI</strong> modernizes police academies by replacing outdated chalk-and-board methods with Virtual Reality (VR) combat simulations, live cyber-crime sandboxes, and AI-driven legal refreshers. It ensures every officer is tactically proficient and legally updated with the latest criminal laws.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#3b82f6" /> VR Combat & Weaponry</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Deploys VR headsets to simulate high-stress environments like hostage rescues, riot control, and night-vision jungle warfare, scoring officers on reaction time and accuracy.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Terminal className="inline-icon" color="#10b981" /> Cyber & Forensics Lab</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides an isolated sandbox for officers to practice tracking dark web transactions, tracing crypto-wallets, and preserving fragile digital/DNA evidence.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><BookOpen className="inline-icon" color="#f59e0b" /> Legal & Investigation Coaching</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses NLP to automatically generate training modules on new Supreme Court judgments and the Bharatiya Nyaya Sanhita (BNS), simulating court depositions.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Sensitivity & Soft Skills</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Trains front-desk officers on victim empathy, particularly for POCSO and sexual assault cases, and provides modules on sign language and media relations.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Academy Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Sandbox Security</h3>
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
            <GraduationCap size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE TRAINING <span>EXPERT AI</span></h1>
            <p className="cyber-subtitle">VR Combat Simulations, Cyber Sandboxes & Legal Coaching</p>
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

export default PoliceTrainingExpertDetailed;
