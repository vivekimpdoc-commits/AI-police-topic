import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Heart, TrendingUp, Dumbbell
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "BMI (Body Mass Index) Tracker AI", "Annual Physical Efficiency Scorer", "Cardiovascular Health Predictor",
  "Diabetes Risk Stratification AI", "Hypertension & BP Alert Bot", "Daily Step Count Synchronizer",
  "Dietary Recommendation Engine AI", "Cholesterol Profiling AI", "Physical Agility Decline Detector",
  "Post-Injury Rehab Tracker AI", "Weight Loss Goal Setter Bot", "Fitness to Duty (FTD) Certifier",
  "Weapon Recoil Handling Fitness AI", "Night Shift Fatigue Assessor", "Heat Stroke Susceptibility AI",
  "Cold Weather Adaptation AI", "Age-Specific Workout Planner AI", "Yoga Routine Prescriber AI",
  "Mandatory PT (Physical Training) Tracker", "Sedentary Duty Flagging AI", "Obesity Warning Escalator",
  "Fitness Grade (SHAPE) Classifier", "Treadmill Test (TMT) Analyzer", "ECG/EKG Report Parser AI",
  "Vision Acuity Degradation AI", "Color Blindness Late-Onset Tracker", "Hearing Loss (Range Fire) AI",
  "Lung Capacity Scorer AI", "Asthma & Respiratory Risk AI", "Joint & Knee Wear Tracker",
  "Lower Back Pain (Belt Load) AI", "Pregnancy Light Duty Evaluator", "Post-Pregnancy Fitness Tracker",
  "Marathon & Sports Quota Scorer", "All-India Police Games Shortlister", "Substance Abuse Recovery Tracker",
  "Alcohol Dependency Liver Profiler", "Smoking Habit Respiratory AI", "Blood Donation Registry AI",
  "Vaccination & Booster Compliance AI", "Endurance Running Pace Scorer", "Obstacle Course (PET) Scorer AI",
  "Riot Gear Load-Bearing Fitness AI", "Commandos (SWAT/ATS) Elite Fitness AI", "Snipers Breathing Control AI",
  "Mountaineering Expedition Fitness AI", "Marine Police Swimming Stamina AI", "Canine Handler Physical Agility AI",
  "Dietician Tele-Consult Matcher", "Medical Leave Over-Utilization AI", "Fake Medical Certificate Flag AI",
  "Fitness Improvement Incentivizer", "Gym Subscription Subsidy AI", "Departmental Sports Event AI",
  "Officer Hydration Reminder Bot", "Mental-Physical Health Correlation AI", "Sleep Apnea Detector (Wearables)",
  "Cholesterol & BP Medicine Adherence AI", "Annual Health Checkup Scheduler", "VIP Security Escort Stamina AI"
];

const modules = [
  {
    title: "Health Metrics & Wearables",
    icon: <Activity size={20} />,
    items: ["BMI & BP Tracking", "Sleep Apnea Alerts", "Daily Step Sync", "ECG/TMT Analysis"]
  },
  {
    title: "Duty-Specific Fitness",
    icon: <ShieldAlert size={20} />,
    items: ["Riot Gear Load Fitness", "SWAT/ATS Elite Metrics", "Weapon Recoil Agility", "Sniper Breathing Control"]
  },
  {
    title: "Rehab & Recovery",
    icon: <Heart size={20} />,
    items: ["Post-Injury Rehab", "Substance Recovery Tracker", "Lower Back Pain Logic", "Joint Wear & Tear"]
  },
  {
    title: "Diet & Lifestyle",
    icon: <TrendingUp size={20} />,
    items: ["Dietary Recommendations", "Yoga Prescriptions", "Hydration Reminders", "Obesity Warnings"]
  },
  {
    title: "Compliance & Audits",
    icon: <FileText size={20} />,
    items: ["Annual Health Checkups", "Fake Medical Flags", "Fitness-to-Duty (FTD)", "SHAPE Classification"]
  }
];

const aiFeatures = [
  "IoT Wearable Sync for Real-Time Cardiac Monitoring", "Automated Fitness-to-Duty (FTD) Certification", "Predictive Knee/Joint Wear Modeling",
  "Algorithmic Medical Leave Fraud Detection", "Personalized Caloric & Yoga Diet Plans", "Elite Commando Physical Profiling"
];

const databases = [
  "Officer_Health_Ledger", "Wearable_Telemetry_Vault", "Annual_Checkup_DB", "Rehab_Injury_Logs", 
  "Diet_Nutrition_Matrix", "SHAPE_Classification_DB", "Medical_Leave_Audit", "Elite_Sports_Roster"
];

const dashboards = [
  "State-wide Force Health Heatmap", "Obesity & Hypertension Alerts", "Elite Commando Fitness Roster", 
  "Medical Leave vs Fitness Correlation", "Upcoming Annual Health Checks", "Departmental Sports Standings"
];

const apis = [
  "Apple Health / Google Fit Sync", "State Empanelled Hospitals API", "CGHS Medical Records Gateway", 
  "Tele-Dietician Video Consult", "Smart Gym Check-in Sync", "Blood Bank Live Inventory"
];

const reports = [
  "Annual Force BMI & Fitness Audit", "Sedentary Duty Impact Report", "Fake Medical Leave Defaulters", 
  "Elite Unit (ATS) Readiness", "Preventative Health Savings ROI", "Officer Substance Recovery Progress"
];

const security = [
  "HIPAA & BNS Health Privacy Compliance", "Encrypted Wearable Telemetry", "Decoupled Health vs Identity DB", 
  "Role-Based Access for Chief Medical Officer", "Anti-Tamper Fitness Certifications", "Biometric Gym/Checkup Verification"
];

const futureScope = [
  "Exoskeleton Load Bearing Integration", "Genetic/DNA Profiling for Disease Prediction", "Autonomous Rescue Drones with Officer Vitals",
  "VR-Based Physical Rehabilitation", "Decentralized Medical Wallets", "AI Voice-Stress vs Heart Rate Analysis"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Fitness Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Health Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Fitness Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PhysicalFitnessTrackerDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Dumbbell className="inline-icon" size={28} /> Physical Fitness Tracker AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Physical Fitness Tracker AI</strong> is a holistic health ecosystem. It syncs with smart wearables to monitor cardiac health, combats obesity with personalized dietary plans, and rigorously evaluates Elite Commandos (SWAT/ATS) for extreme operational readiness, ensuring a combat-fit police force.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Wearables & Vitals</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Integrates with Apple Health/Google Fit to track daily steps, sleep apnea, and ECGs. Issues proactive alerts for hypertension and diabetes risks.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Combat & Elite Readiness</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors specialized metrics like sniper breathing control, riot gear load-bearing capacity, and commando obstacle course endurance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Heart className="inline-icon" color="#f59e0b" /> Rehab & Fake Leave Audit</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks post-injury physiotherapy. Flags suspicious, recurring medical leaves by cross-referencing injury data with off-duty physical activities.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingUp className="inline-icon" color="#ef4444" /> Diet & Lifestyle</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Prescribes AI-generated yoga routines and diet plans. Intervenes in cases of severe obesity or alcohol dependency to restore officer health.</p>
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
                <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" /> Health Dashboards</h3>
                <ul>
                  {dashboards.map((dash, i) => (
                    <li key={i}><CheckCircle size={16} color="#f59e0b" /> {dash}</li>
                  ))}
                </ul>
              </div>
              <div className="report-list">
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Medical Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Health Privacy</h3>
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
            <Dumbbell size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">PHYSICAL FITNESS <span>TRACKER AI</span></h1>
            <p className="cyber-subtitle">Wearable Integration, Elite Combat Readiness & Medical Audits</p>
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

export default PhysicalFitnessTrackerDetailed;
