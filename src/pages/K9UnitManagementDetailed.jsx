import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Dog, Search, Syringe
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Explosive Detection (Sniffer) Roster AI", "Narcotics Sniffer Deployment AI", "Search & Rescue Tracker Dog AI",
  "Cadaver (Dead Body) Search Dog AI", "VIP Anti-Sabotage Check AI", "Riot Crowd Control Dog Deployer",
  "Airport/Railway K9 Roster AI", "Border Smuggling K9 Patrol AI", "K9 Handler Pairing Algorithm",
  "Handler Transfer Sync AI", "K9 Pregnancy & Breeding AI", "Puppy Aptitude Testing AI",
  "Basic Obedience Training Scorer", "Agility Course Scorer AI", "False Positive Scent Alert AI",
  "Daily Diet & Nutrition AI", "K9 Caloric Burn Tracker", "Raw Meat Procurement Auditor",
  "K9 Vaccination & Deworming AI", "Tick & Flea Prevention Alert", "Veterinary Checkup Scheduler",
  "Heat Stroke Susceptibility AI (K9)", "Winter Coat/Gear Allocator AI", "Paw Injury & Rehab Tracker",
  "Canine Dental Health Scorer", "Age-Based Retirement Predictor", "Post-Retirement Adoption Matcher",
  "K9 Kennel Temp/Humidity Control", "Kennel Sanitation Auditor", "Transport Van Climate AI (K9)",
  "Travel Sickness/Anxiety AI", "K9 Rest & Fatigue Balancer", "Overwork/Burnout Predictor",
  "Noise Phobia (Gunfire/Cracker) AI", "Behavioral Aggression Profiler", "K9 Bite Incident Justification AI",
  "Handler Leave/Absence Sync AI", "Cross-District K9 Requisition AI", "Election Duty K9 Allocator",
  "Bomb Threat Live Dispatch AI", "Narcotic Seizure Corroborator AI", "Bloodhound Tracking Success AI",
  "DNA Evidence Scent Profiler", "K9 Purchase & Procurement AI", "Pedigree & Lineage Verifier",
  "Handler Training Refresher AI", "Canine First-Aid Coaching Bot", "K9 Duty Log Blockchain Notary",
  "Malkhana Scent Training Sync", "Contraband Training Sample Tracker", "Explosive Training Sample Expiry",
  "Fake Scent Planting Fraud AI", "K9 Mortality/Death Investigator", "Post-Mortem Record Sync AI",
  "K9 Commendation/Medal Evaluator", "Public Demonstration Scheduler", "School Visit/PR Engagement AI",
  "Foreign Breed Acclimatization AI", "Indigenous Breed (Mudhol) Tracker", "K9 Expenditure vs ROI Analyzer"
];

const modules = [
  {
    title: "Deployment & Special Ops",
    icon: <Search size={20} />,
    items: ["Explosive Sniffer Rosters", "Narcotics Detection", "Search & Rescue", "VIP Anti-Sabotage"]
  },
  {
    title: "Health & Veterinary",
    icon: <Syringe size={20} />,
    items: ["Vaccination Schedules", "Diet & Nutrition", "Heat Stroke Alerts", "Paw/Dental Rehab"]
  },
  {
    title: "Training & Handlers",
    icon: <Activity size={20} />,
    items: ["Puppy Aptitude Testing", "Handler Pairing Logic", "Agility Scoring", "False Alert Analytics"]
  },
  {
    title: "Logistics & Welfare",
    icon: <ShieldAlert size={20} />,
    items: ["Kennel Climate Control", "Raw Meat Audits", "Rest & Fatigue Balance", "Retirement Adoption"]
  },
  {
    title: "Compliance & Audits",
    icon: <FileText size={20} />,
    items: ["Contraband Sample Tracking", "Bite Incident Audits", "Mortality Investigations", "Pedigree Verification"]
  }
];

const aiFeatures = [
  "Algorithmic Optimal Handler-Canine Pairing", "Predictive Veterinary Health & Heat Stroke Alerts", "IoT Climate Control for Kennels & Transport Vans",
  "Blockchain Tracking of Training Explosive/Narcotic Samples", "False-Positive Scent Alert Analytics", "Automated Post-Retirement Adoption Matching"
];

const databases = [
  "K9_Master_Registry", "Veterinary_Medical_Vault", "Scent_Training_Logs", "Handler_Pairing_Matrix", 
  "Diet_Procurement_Ledger", "Deployment_Success_Rates", "Kennel_IoT_Telemetry", "Retirement_Adoption_DB"
];

const dashboards = [
  "State-wide K9 Availability Map", "Veterinary Health & Vaccination", "Sniffer Success/Seizure Rates", 
  "Handler & K9 Fatigue Alerts", "Kennel & Transport Climate", "Training Sample Expiry Board"
];

const apis = [
  "State Veterinary Dept API", "IoT Kennel Sensor Webhooks", "CCTNS Narcotic Seizure Sync", 
  "Pet Adoption Portal API", "Kennel Club Pedigree Sync", "Weather/Heatwave Alerts API"
];

const reports = [
  "Monthly K9 Operational Success ROI", "Veterinary Expenditure Audit", "Raw Meat Procurement Fraud Check", 
  "Handler-K9 Synchronization Report", "Training Sample Usage Log", "Annual K9 Retirement Roster"
];

const security = [
  "Biometric Handler Access to Kennels", "Encrypted VIP Route Deployment", "Anti-Tamper Training Sample DB", 
  "IoT Alert on Transport Van A/C Failure", "Immutable Bite Incident Logs", "Strict Approval for K9 Euthanasia"
];

const futureScope = [
  "K9 Wearable GPS & Vitals Harnesses", "Bark/Whine Audio Translation via AI", "Drone-K9 Coordinated Search Sweeps",
  "Genetic Profiling for Disease Prediction", "VR Training for Handlers", "Automated Treat Dispensers for Positive Reinforcement"
];


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `K9 Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'K9 Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'K9 Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const K9UnitManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Dog className="inline-icon" size={28} /> K9 Unit Management AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>K9 Unit Management AI</strong> provides absolute oversight for the police canine squad. From puppy aptitude testing and handler pairing to veterinary scheduling and retirement adoptions, it ensures these elite four-legged officers are healthy, well-trained, and optimally deployed for explosive or narcotic detection.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Search className="inline-icon" color="#3b82f6" /> Deployment & Analytics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks the success rate of explosive and narcotic sniffer dogs. Analyzes false-positive scent alerts to recommend retraining for specific K9-Handler pairs.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Syringe className="inline-icon" color="#10b981" /> Veterinary & Welfare</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automates vaccination schedules, tracks paw/dental injuries, and predicts heat stroke susceptibility, ensuring absolute adherence to animal welfare laws.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> IoT Kennel & Logistics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Syncs with IoT sensors in kennels and transport vans to maintain optimal temperature/humidity. Audits the procurement of raw meat to prevent dietary fraud.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Training Sample Custody</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Strictly monitors the chain-of-custody for live explosives and narcotics used as training samples, alerting command before they expire or go missing.</p>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Welfare Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> K9 Unit Security</h3>
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
            <Dog size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">K9 UNIT MANAGEMENT <span>AI</span></h1>
            <p className="cyber-subtitle">Sniffer Deployment, Veterinary Audits & Handler Sync</p>
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

export default K9UnitManagementDetailed;
