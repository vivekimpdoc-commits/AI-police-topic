import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, HeartPulse, Brain, Smile
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "PTSD Risk Profiler AI", "Trauma Exposure Tracker", "Anonymous Counseling Bot",
  "Officer Suicide Predictor AI", "Burnout & Fatigue Scorer", "Anger Management Coach AI",
  "De-escalation Virtual Trainer", "Sleep Deprivation Analyzer", "Substance Abuse Flag AI",
  "Alcohol Dependency Intervention AI", "Marital Stress Counselor AI", "Family Counseling Matcher",
  "Financial Debt Stress Alerter", "Grief Counseling (Martyrs) AI", "Post-Encounter Psychological Check",
  "Disaster Rescue Trauma Scorer", "POCSO Investigator Stress AI", "Cyber Cell Horrific Media Trauma AI",
  "Traffic Cop Pollution Stress AI", "Night Shift Circadian Rhythm AI", "Diet & Nutrition Mental Health AI",
  "Mindfulness & Meditation Guide", "Yoga & Wellness Rotator AI", "Peer Support Group Matcher",
  "Anonymous Venting Wall AI", "Supervisor Toxicity Scorer", "Bullying & Harassment Alerter",
  "Work-Life Balance Metric AI", "Compulsory Leave Enforcer AI", "Mandatory Therapy Scheduler",
  "Psychiatric Evaluation Parser", "Fitness-to-Duty Assessment AI", "Light Duty Reassignment AI",
  "Weapon Confiscation Trigger AI", "Social Media Isolation Detector", "Behavioral Anomaly Scanner",
  "Aggressive Tone (Body-Cam) NLP", "Citizen Complaint Stress Linker", "Transfer & Relocation Stress AI",
  "Promotion Denial Frustration AI", "Disciplinary Action Stress AI", "Suspension Mental Health Tracker",
  "Retirement Anxiety Coach AI", "Female Officer Specific Stress AI", "Pregnancy & Postpartum Health AI",
  "Childcare Anxiety Counselor AI", "Rural Posting Isolation AI", "VIP Duty High-Stress Profiler",
  "Election Duty Fatigue Analyzer", "Festival Deployment Burnout AI", "Resilience Training Optimizer",
  "Positive Reinforcement Bot", "Mental Health Survey Analyzer", "Stigma Reduction Campaign AI",
  "Therapist Availability Router", "Tele-Psychiatry Connection AI", "Crisis Hotline Immediate Dispatch",
  "Geo-Fenced Suicide Hotspot Alert", "Officer GPS Isolation Alert", "Prescription Medication Tracker AI"
];

const modules = [
  {
    title: "Trauma & PTSD",
    icon: <Brain size={20} />,
    items: ["Post-Encounter Checks", "POCSO/Cyber Trauma", "PTSD Risk Profiling", "Grief Counseling"]
  },
  {
    title: "Stress & Burnout",
    icon: <Activity size={20} />,
    items: ["Sleep Deprivation", "Fatigue Scoring", "Night Shift Impacts", "Compulsory Leave Enforcer"]
  },
  {
    title: "Intervention & Support",
    icon: <HeartPulse size={20} />,
    items: ["Anonymous Counseling", "Crisis Hotline Router", "Peer Support Matcher", "Weapon Confiscation Triggers"]
  },
  {
    title: "Workplace & Toxicity",
    icon: <ShieldAlert size={20} />,
    items: ["Supervisor Toxicity", "Bullying Alerters", "Body-Cam Aggression", "Disciplinary Stress"]
  },
  {
    title: "Wellness & Lifestyle",
    icon: <Smile size={20} />,
    items: ["Financial Debt Stress", "Marital Counseling", "Mindfulness Guides", "Substance Abuse Flags"]
  }
];

const aiFeatures = [
  "Predictive Officer Suicide Risk Modeling", "NLP Analysis of Body-Cam Aggression", "Automated Weapon Confiscation Triggers",
  "Anonymous AI Therapy & Venting Chatbots", "Circadian Rhythm Tracking for Night Shifts", "Deep-Web Scanning for Officer Social Isolation"
];

const databases = [
  "Psychological_Profile_Vault", "Trauma_Exposure_Ledger", "Counseling_Session_Encrypted", "BodyCam_Sentiment_Logs", 
  "Fatigue_Telemetry_DB", "Peer_Support_Network", "Disciplinary_Stress_Matrix", "Substance_Abuse_Flags"
];

const dashboards = [
  "State-wide Stress Heatmap", "Suicide Risk Intervention Board", "Unit Toxicity & Morale", 
  "Therapy Utilization Stats", "Trauma Exposure Alerts", "Work-Life Balance Index"
];

const apis = [
  "State Tele-Psychiatry Portal", "Crisis Hotline Dispatch Sync", "Wearable Sleep Tracker API", 
  "Body-Cam NLP Webhooks", "Anonymous Therapy App Gateway", "Financial Credit Score Check (Consent based)"
];

const reports = [
  "Annual Force Mental Health Index", "Unit-wise Toxicity & Burnout", "Intervention Success Rates", 
  "Specialized Unit Trauma Audit", "Mandatory Leave Compliance", "Stigma Reduction Campaign ROI"
];

const security = [
  "Absolute Zero-Knowledge Therapy Logs", "HIPAA/BNS Mental Health Privacy", "Decoupled Identity for Venting", 
  "Strict Need-to-Know Triggers", "Encrypted Tele-Psychiatry Feeds", "Anti-Retaliation Toxicity Flags"
];

const futureScope = [
  "Smartwatch Biometric Stress Detection", "AI Voice Stress Analysis on Radio Comms", "VR Nature Therapy Enclosures in Stations",
  "Predictive DNA Stress Markers", "Global Police Mental Health Benchmarking", "Autonomous Therapy Drones for Remote Outposts"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Mental Health Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Wellness Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Wellness Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const MentalHealthStressDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <HeartPulse className="inline-icon" size={28} /> Mental Health & Stress AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Mental Health & Stress AI</strong> is a compassionate, strictly confidential ecosystem designed to combat the hidden epidemic of officer depression, PTSD, and suicide. It proactively identifies burnout, offers anonymous AI counseling, and legally enforces leave for highly traumatized personnel while protecting their careers.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Brain className="inline-icon" color="#3b82f6" /> PTSD & Trauma Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically logs severe trauma exposure—such as fatal encounters, investigating horrific POCSO cases, or handling disaster casualties—triggering mandatory, stigma-free counseling.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Suicide Risk Prevention</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Aggregates data on disciplinary actions, massive financial debts, and marital stress to predict severe depression, instantly alerting crisis intervention teams and temporarily withholding service weapons.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Toxicity & Burnout</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes body-cam audio for increasing verbal aggression and parses shift logs to identify sleep deprivation, holding supervisors accountable for unit toxicity.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Smile className="inline-icon" color="#10b981" /> Anonymous Intervention</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides officers with completely anonymous AI chat therapists and matches them with peer-support networks, entirely disconnected from their official Service Books.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Confidential Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Absolute Privacy</h3>
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
            <HeartPulse size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">MENTAL HEALTH & <span>STRESS AI</span></h1>
            <p className="cyber-subtitle">Suicide Prevention, PTSD Tracking & Anonymous Therapy</p>
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

export default MentalHealthStressDetailed;
