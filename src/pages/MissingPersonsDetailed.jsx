import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, UserSearch, ScanFace, Scan
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Facial Recognition AI", "Age Progression Modeler", "Unidentified Corpse Matcher", 
  "CCTV Crowd Scanner Bot", "Amber Alert Broadcaster", "Social Media Image Scraper", 
  "Tattoo & Scars Matching AI", "Dental Record Analyzer", "Biometric Gait Analysis Bot",
  "Family DNA Profiler", "Trafficking Route Predictor"
];

const missingModules = [
  {
    title: "AI Facial Recognition",
    icon: <ScanFace size={20} />,
    items: ["Real-time CCTV Crowd Scanning", "Low-Resolution Enhancer", "Multi-Angle Face Matching", "Disguise Penetration AI"]
  },
  {
    title: "Age Progression (Long-term)",
    icon: <Activity size={20} />,
    items: ["AI Aging Simulation (5/10/20 yrs)", "Generative Face Construction", "Genetic Trait Modeling", "Public Broadcasting Integration"]
  },
  {
    title: "Unknown Person ID",
    icon: <UserSearch size={20} />,
    items: ["Tattoo & Birthmark Matching", "Gait (Walking) Analysis", "Amnesia Patient Matching", "Vagrant Identity Check"]
  },
  {
    title: "Dead Body Identification",
    icon: <Scan size={20} />,
    items: ["Post-Mortem Facial Reconstruction", "Dental Record AI Cross-check", "DNA Profiling Sync", "Automated FIR Autopsy Link"]
  },
  {
    title: "Amber Alerts & Public Sync",
    icon: <Network size={20} />,
    items: ["Geo-Targeted Mobile Alerts", "Social Media Rapid Scraping", "Railway/Airport Kiosk Sync", "Bhashini Multilingual Alerts"]
  }
];

const aiFeatures = [
  "AI 3D Facial Reconstruction", "AI Kinematic Gait Analysis", "AI Generative Age Progression (GANs)",
  "AI Cross-State Database Matching", "AI Dental Radiograph Matching", "AI Zero-Shot Image Classification",
  "AI Geospatial Alert Targeting", "AI Mass-CCTV Parallel Processing"
];

const databases = [
  "Missing_Persons_National_Registry", "Unidentified_Corpses_DB", "CCTV_Live_Feeds", "Tattoo_And_Scars_Index", "Age_Progression_Renders", 
  "Aadhaar_Biometric_Sync", "Dental_Records_Vault", "Public_Sighting_Tips", "Amber_Alert_Logs", "DNA_Profiles"
];

const dashboards = [
  "Live CCTV Recognition Feed", "National Missing Persons Map", "Unidentified Bodies Triage", 
  "Amber Alert Reach Metrics", "Age Progression Processing Queue", "Public Tip-off Verification"
];

const apis = [
  "CCTNS / TrackChild APIs", "UIDAI (Aadhaar) Verification APIs", "Smart City Surveillance APIs", "Telecom Cell Broadcast APIs",
  "Interpol Yellow Notice APIs", "Hospital Mortuary Sync APIs"
];

const reports = [
  "Monthly Recovery Rate Analytics", "Facial Recognition Accuracy Audit", "Unidentified Corpse Resolution", 
  "Amber Alert Conversion Rate", "Inter-State Trafficking Routes", "Public Tip-off Reliability"
];

const security = [
  "Strict Privacy Law Compliance", "Data Masking for Minors", "End-to-End Encrypted Tips", 
  "Court-Admissible Log Hashing", "Role-Based CCTV Access", 
  "Automated Data Purge (Post-Recovery)", "Anti-Spoofing Biometrics", "Audit Trails for Search Queries"
];

const futureScope = [
  "Satellite-based Heat Signatures", "Autonomous Drone Search Swarms", "Holographic Missing Posters",
  "Rapid DNA Sequencing Integration", "Metaverse Crowd Search", "Neural Match Predictions"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Search Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Identity Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Tracking Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const MissingPersonsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <UserSearch className="inline-icon" size={28} /> AI Missing Persons & Identification
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Missing Persons & Identification</strong> uses state-of-the-art biometrics to bring people home. By analyzing live CCTV feeds, predicting how a child might look 10 years later (Age Progression), and matching unidentified bodies using tattoos and dental records, it drastically accelerates recoveries.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ScanFace className="inline-icon" color="#3b82f6" /> Live Facial Recognition</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hooks into railway and airport CCTVs. The AI scans thousands of faces per minute in a crowd to spot a missing child, even if the child is wearing a mask or a hat.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> AI Age Progression (GANs)</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>For long-term cold cases, Generative AI simulates how a child abducted 5 years ago would look today, updating the database and public alerts automatically.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Scan className="inline-icon" color="#f59e0b" /> Unidentified Dead Bodies</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Matches John/Jane Does against the national missing persons registry using advanced tattoo matching, dental x-ray comparison, and post-mortem facial reconstruction.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Amber Alerts & Social Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly geo-fences the abduction area and blasts Amber Alerts to all smartphones, digital billboards, and social media feeds within a 50km radius.</p>
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
            {missingModules.map((mod, i) => (
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
            <UserSearch size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI MISSING <span>PERSONS</span></h1>
            <p className="cyber-subtitle">Facial Recognition, Age Progression & Body Identification</p>
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

export default MissingPersonsDetailed;
