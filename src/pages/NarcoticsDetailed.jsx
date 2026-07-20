import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Syringe, TreePine, Biohazard
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Dark Net Silk-Road Scraper", "Courier Routing Predictor", "Synthetic Drug Formula Matcher", 
  "Poacher Network Mapper", "Wildlife Trafficking AI", "Crypto-Payment Tracing Bot", 
  "Chemical Precursor Monitor", "Container X-Ray Scanner", "Deforestation Satellite Analyzer",
  "Addict Demographics Modeler", "Informant Reliability Scorer", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const narcoticsModules = [
  {
    title: "Narcotics Supply Chain",
    icon: <Syringe size={20} />,
    items: ["AI Drug Syndicate Mapper", "Courier/Mule Travel Patterns", "Chemical Precursor Tracking", "Seizure Purity Analytics"]
  },
  {
    title: "Wildlife Crime Intelligence",
    icon: <TreePine size={20} />,
    items: ["AI Dark Web Drug Cartel Scanner", "Social Media Exotic Pet Scraper", "Poacher Acoustic Triangulation", "Forest Drone Patrols"]
  },
  {
    title: "Environmental Crime",
    icon: <Biohazard size={20} />,
    items: ["AI Chemical Precursor Tracker", "Toxic Waste Dumping Heatmaps", "Satellite Deforestation Tracking", "Water Pollution IoT Sensors"]
  },
  {
    title: "Organized Crime Syndicates",
    icon: <Network size={20} />,
    items: ["Cartel Link-Analysis", "Money Laundering Intersection", "Encrypted App Decryption", "Kingpin Proximity Alerts"]
  },
  {
    title: "Rehabilitation & Demographics",
    icon: <Activity size={20} />,
    items: ["Addiction Hotspot Mapping", "Overdose Spikes Alert", "De-addiction Center Bed Sync", "Youth Vulnerability Index"]
  }
];

const aiFeatures = [
  "AI Deep Web Onion Scraping", "AI Mass-Spectrometry Data Matching", "AI Acoustic Poacher Detection (Gunshots)",
  "AI Geo-spatial Synthetic Aperture Radar (SAR)", "AI Cryptographic Ledger Tracing", "AI Social Media Image Classification (Wildlife)",
  "AI Automated Cargo Risk Profiling", "AI Multi-Agency Entity Resolution"
];

const databases = [
  "Narcotics_Seizure_Registry", "Wildlife_Offender_DB", "Dark_Net_Vendor_Hashes", "Chemical_Import_Ledgers", "Satellite_Forest_Vault", 
  "Rehab_Patient_Stats", "IoT_Pollution_Sensors", "Known_Cartel_Biometrics", "Cargo_Manifest_Logs", "Informant_Tip_Ledger"
];

const dashboards = [
  "Drug Trafficking Route Map", "Wildlife Poaching Hotspots", "Dark Web Active Listings", 
  "Chemical Precursor Imports", "Illegal Mining Satellite Feed", "Overdose/Rehab Metrics"
];

const apis = [
  "NCB (Narcotics Control Bureau) APIs", "Wildlife Crime Control Bureau (WCCB)", "Customs ICEGATE System", "Ministry of Environment & Forests",
  "Dark Web Intelligence Feeds", "Interpol Environmental Crime Sync"
];

const reports = [
  "Monthly Contraband Seizure Value", "Forest Cover Depletion Rate", "Dark Net Vendor Takedowns", 
  "Addiction Demographic Shifts", "Wildlife Seizure Audit", "Chemical Diversion Flags"
];

const security = [
  "Covert Ops Data Compartmentalization", "Anonymized Informant Vaults", "Blockchain Chain of Custody for Drugs", 
  "Secure API Tunnels to Customs", "Zero-Trace Intelligence Queries", 
  "Biometric Evidence Room Access", "Watermarked Undercover Docs", "Encrypted Radio Networks (Forests)"
];

const futureScope = [
  "AI Sniffer Robo-Dogs", "Satellite Real-time Carbon Emission Flags", "Autonomous Forest Patrol Drones",
  "Brain-Computer Addiction Therapy", "DNA Tagging of Synthetic Drugs", "Holographic Cartel Mapping"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Intel Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Cartel Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Operations Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const NarcoticsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Syringe className="inline-icon" size={28} /> AI Narcotics & Wildlife Crime
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Narcotics & Organized Crime Intelligence</strong> breaks the backbone of global cartels. It scraps dark net marketplaces for synthetic drug shipments, uses acoustic sensors to catch poachers in dense forests, and analyzes satellite imagery to stop illegal sand mining.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Syringe className="inline-icon" color="#3b82f6" /> Dark Web & Narcotics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Autonomous bots scrape Tor networks (dark web) to map drug vendors. AI tracks the import of raw chemical precursors to predict where illicit synthetic drug labs are operating.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TreePine className="inline-icon" color="#10b981" /> Wildlife Poaching Intel</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>IoT acoustic sensors in tiger reserves listen for gunshots or chainsaws. AI triangulates the sound and dispatches forest guards and drones instantly to intercept poachers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Biohazard className="inline-icon" color="#f59e0b" /> Environmental & Mining</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes ISRO satellite SAR imagery weekly to detect the unauthorized disappearance of forest cover or illegal sand mining operations along riverbeds.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#ef4444" /> Cartel Link-Analysis</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Connects the dots between a low-level drug peddler, a wildlife smuggler, and a hawala operator to map the entire organized crime syndicate hierarchy.</p>
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
            {narcoticsModules.map((mod, i) => (
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
            <Biohazard size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI NARCOTICS <span>& WILDLIFE</span></h1>
            <p className="cyber-subtitle">Dark Web Scraping, Poacher Detection & Cartel Mapping</p>
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

export default NarcoticsDetailed;
