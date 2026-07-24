import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, GraduationCap, FileCheck, Glasses
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "VR Combat Simulator AI", "SOP Search Bot", "Legal Code Tutor AI", 
  "Cyber Security Trainer Bot", "Interrogation Tactics Coach", "Marksmanship Analyzer", 
  "Stress Inoculation AI", "New Recruit Onboarding Agent", "Policy Update Broadcaster",
  "Riot Formation Simulator", "Forensic Collection Tutor"
];

const trainingModules = [
  {
    title: "AI Knowledge Hub",
    icon: <FileCheck size={20} />,
    items: ["Centralized SOP Database", "Semantic Policy Search", "Circular & Ordinance Archive", "BNS/BNSS Transition Guides"]
  },
  {
    title: "e-Learning & Certifications",
    icon: <GraduationCap size={20} />,
    items: ["Role-based Curriculum", "Automated Grading via AI", "Cyber Crime Investigation Certs", "Micro-learning Modules (5-min)"]
  },
  {
    title: "Virtual Reality (VR) Academy",
    icon: <Glasses size={20} />,
    items: ["Active Shooter VR Drills", "Hostage Negotiation Simulator", "Crime Scene Walkthroughs", "Crowd Control Tactics"]
  },
  {
    title: "Performance & Marksmanship",
    icon: <Activity size={20} />,
    items: ["AI Target Range Scoring", "Recruit Fatigue Monitoring", "Leadership Trait Assessment", "Physical Fitness Tracking"]
  },
  {
    title: "SOP Assistant Bot",
    icon: <Bot size={20} />,
    items: ["In-field Procedural Queries", "Arrest Rights Checklist", "Evidence Packing Guidelines", "Jurisdictional Rule Lookups"]
  }
];

const aiFeatures = [
  "AI Natural Language Knowledge Graph", "AI Adaptive Learning Paths", "AI VR Scenario Generation",
  "AI Cognitive Load Monitoring", "AI Biometric Stress Analysis", "AI Automated Quiz Generation",
  "AI Multilingual Translation of Manuals", "AI Pose Estimation for Shooting Stance"
];

const databases = [
  "Police_SOP_Vault", "BNS_Training_Modules", "Officer_Certification_Records", "VR_Combat_Scenarios", "Recruit_Assessment_Logs", 
  "Marksmanship_Scores", "Circulars_And_Notices", "Interrogation_Transcripts_Repo", "Cyber_Sec_Curriculum", "Fitness_Metrics_DB"
];

const dashboards = [
  "Academy Training Progress", "BNS Certification Completion", "Top Performing Recruits", 
  "SOP Search Analytics (What are officers searching?)", "VR Simulation Success Rates", "Fitness & Marksmanship Leaderboard"
];

const apis = [
  "BPR&D (Bureau of Police Research) APIs", "National Police Academy (SVPNPA) Sync", "VR Headset Telemetry APIs", "LMS (Learning Management System) APIs",
  "Smart Range Scoring APIs", "Govt Circular RSS Feeds"
];

const reports = [
  "Monthly Academy Graduation Report", "SOP Compliance Audit", "VR Training ROI", 
  "New Law (BNS) Readiness Score", "Officer Skills Gap Analysis", "Training Budget Utilization"
];

const security = [
  "Classified Training Material DRM", "Biometric Login for Exams", "Anti-Cheat AI Proctoring", 
  "Role-Based SOP Access", "Encrypted VR Telemetry Data", 
  "Secure Offline Sync for Field Bots", "Watermarked Document Downloads", "Audit Trails for Policy Views"
];

const futureScope = [
  "Neural-ink Knowledge Uploads", "Holographic Interrogation Suspects", "AI Mindset Prediction for Promotions",
  "Metaverse Police Academy", "Robotic Sparring Partners", "Brainwave Focused Accelerated Learning"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Training Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Academy Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Learning Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const TrainingDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <GraduationCap className="inline-icon" size={28} /> AI Knowledge & Training Academy
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Knowledge & Training</strong> transforms the police force into a highly skilled, constantly learning organization. From Virtual Reality (VR) riot simulations to a ChatGPT-like SOP assistant that guides officers in the field, it ensures the force is always ready for modern challenges.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Glasses className="inline-icon" color="#3b82f6" /> Virtual Reality (VR) Drills</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Officers use VR headsets to practice high-stress scenarios like active shooters, hostage negotiations, or riot crowd control safely before facing them in the real world.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Bot className="inline-icon" color="#10b981" /> AI SOP Assistant</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>A mobile-friendly AI bot that answers procedural questions instantly. (e.g. "What is the SOP for collecting a digital hard drive?" or "Under which BNS section should I book this crime?")</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#f59e0b" /> Central Knowledge Hub</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Digitizes decades of dusty police manuals, circulars, and laws into a single, semantic search engine. No more flipping through files to find the right ordinance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> AI Marksmanship & Fitness</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses pose-estimation computer vision to analyze a recruit's shooting stance at the firing range and suggests micro-adjustments to improve accuracy.</p>
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
            {trainingModules.map((mod, i) => (
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
            <GraduationCap size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI KNOWLEDGE & <span>TRAINING</span></h1>
            <p className="cyber-subtitle">VR Combat Drills, SOP Assistants & Law Certifications</p>
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

export default TrainingDetailed;
