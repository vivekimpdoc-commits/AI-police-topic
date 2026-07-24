import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Target, Dumbbell
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Firing Range Scorer Bot", "Physical Fitness Analyzer", "Mock Drill Evaluator", 
  "Course Recommendation AI", "Instructor Performance Modeler", "Certification Expiry Tracker", 
  "Skill Assessment AI", "VR Range Simulator Bot", "Trainee Retention Scorer",
  "Riot Control VR Instructor", "Weapon Recoil Analyzer"
];

const trainingModules = [
  {
    title: "Shooting Range Management",
    icon: <Target size={20} />,
    items: ["AI Bullet Impact Tracking", "Weapon Recoil & Stance Analysis", "Live Firing Scorecards", "Ammunition Allotment Link"]
  },
  {
    title: "Physical Fitness Assessment",
    icon: <Dumbbell size={20} />,
    items: ["Computer Vision Posture Analysis", "Biometric Vitals Sync", "BMI & Stamina Tracking", "Personalized Diet & Workout Plans"]
  },
  {
    title: "Drill & Mock Exercise",
    icon: <Activity size={20} />,
    items: ["Riot Control Formation Evaluator", "Response Time Analytics", "Hostage Rescue VR Scores", "Command Synchronization Checks"]
  },
  {
    title: "Course Recommendation",
    icon: <Network size={20} />,
    items: ["Skill Gap Analysis", "Automated Cyber-Crime Course Prompt", "Promotional Exam Prep", "Leadership Training Allocation"]
  },
  {
    title: "Instructor Dashboard",
    icon: <PieChart size={20} />,
    items: ["Batch Performance Heatmap", "Trainee Dropout Risk Scoring", "Instructor Effectiveness Metrics", "Certification Issuance"]
  }
];

const aiFeatures = [
  "AI Computer Vision for Target Scoring", "AI Pose Estimation for Physical Drills", "AI Multimodal (Audio/Video) Drill Evaluation",
  "AI Trainee Cognitive Load Analysis", "AI Dynamic Learning Path Generation", "AI Automated Certification Chains",
  "AI Biometric Authentication for Exams", "AI VR Scenario Rendering"
];

const databases = [
  "Firing_Range_Scores", "Physical_Fitness_Metrics", "Mock_Drill_Evaluations", "Course_Catalog", "Instructor_Profiles", 
  "Trainee_Biometrics", "Certification_Ledger", "VR_Simulation_Logs", "Skill_Gap_Matrix"
];

const dashboards = [
  "Live Firing Range Telemetry", "Academy Fitness Leaderboard", "Mock Drill Success Rates", 
  "Course Enrollment vs Completion", "Instructor Effectiveness Score", "Upcoming Certification Expiries"
];

const apis = [
  "Smart Target Hardware APIs", "Wearable Fitness Tracker APIs", "VR Headset (Oculus) APIs", "National Police Academy (NPA) Sync",
  "E-Learning Platform Webhooks", "Digital Certificate (DigiLocker) APIs"
];

const reports = [
  "Batch Graduation Analysis", "Weapon Proficiency Report", "Physical Fitness Cohort Study", 
  "Drill Response Time Benchmarks", "Training Budget ROI", "Top Performing Instructors"
];

const security = [
  "Biometric Login for Exams", "Anti-Cheating Gaze Tracking (Exams)", "Encrypted Physical Health Data", 
  "Tamper-Proof Blockchain Certificates", "Role-Based Access for Instructors", 
  "Offline Mode for Remote Firing Ranges", "Secure Vitals Data Sync", "Strict CCTV Audit Logs"
];

const futureScope = [
  "AI Holographic Instructors", "Neuro-Feedback for Stress Inoculation", "Haptic Suits for Combat Training",
  "Global Interpol Standardized VR Drills", "Predictive Trainee Career Pathing", "Autonomous Robot Sparring Partners"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Trainer Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Academy Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Performance Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const TrainingQualityDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Target className="inline-icon" size={28} /> AI Training Academy & Quality Control
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Training & Quality</strong> digitizes the Police Academy. Using Computer Vision and VR, this module tracks an officer's physical fitness, weapon proficiency, and tactical decision-making, ensuring a world-class, highly capable police force.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#3b82f6" /> Smart Shooting Range</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Computer Vision cameras instantly calculate bullet impact coordinates, while AI analyzes the shooter's stance and weapon recoil to provide real-time corrective feedback.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Dumbbell className="inline-icon" color="#10b981" /> Physical Fitness Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Syncs with biometric wearables to track resting heart rate and stamina during physical drills. Uses Pose Estimation to grade the form of pushups and obstacle courses.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> VR Tactical Drills</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Evaluates an officer's response during Virtual Reality (VR) hostage rescue or riot control scenarios, scoring their decision-making under high cognitive load.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Skill Gap Analytics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically identifies officers lacking in modern skills (e.g., Cyber Crime Investigation) and mandates enrollment into digital crash courses via the AI portal.</p>
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
            <Target size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">TRAINING & <span>QUALITY</span></h1>
            <p className="cyber-subtitle">Smart Firing Ranges, VR Drills & Fitness Telemetry</p>
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

export default TrainingQualityDetailed;
