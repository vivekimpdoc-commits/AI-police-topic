import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, FlaskConical, Lightbulb
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Prototype Tester Bot", "Startup Synergy AI", "Tech Evaluation Scorer", 
  "Patent & Paper Tracker", "Pilot Project Manager", "University Liaison Bot", 
  "Innovation Challenge Host", "Future Roadmap Modeler", "Hackathon Sync AI",
  "Technology Assessment Bot", "Research Fund Allocator"
];

const researchModules = [
  {
    title: "Startup & University Collaboration",
    icon: <Network size={20} />,
    items: ["AI Matchmaking for Defense Tech", "University Grant Tracker", "Hackathon Platform Sync", "Startup NDA Automation"]
  },
  {
    title: "Pilot Project Management",
    icon: <Rocket size={20} />,
    items: ["Real-time Pilot ROI Tracker", "Field Test Telemetry", "Automated Feedback Loops", "Go/No-Go Decision Engine"]
  },
  {
    title: "Patent & Tech Evaluator",
    icon: <FileText size={20} />,
    items: ["Global Patent Scraping (Govt/Defense)", "Tech Viability Scoring", "Vendor Capability Analysis", "Open Source Tech Repository"]
  },
  {
    title: "Prototype Testing Lab",
    icon: <FlaskConical size={20} />,
    items: ["Virtual Hardware Stress Tests", "Simulation Environment Builder", "IoT Telemetry Intake", "Robotics Integration Checks"]
  },
  {
    title: "Innovation Challenges",
    icon: <Lightbulb size={20} />,
    items: ["Automated Problem Statement Broadcaster", "Crowdsourced Solution Vetting", "Winner Leaderboard", "Prize Disbursement API"]
  }
];

const aiFeatures = [
  "AI Semantic Search across Global Patents", "AI Success Probability Prediction for Startups", "AI Automated Contract Vetting (NDAs)",
  "AI Simulated Stress Testing for IoT", "AI Future Capability Gap Analysis", "AI Dynamic Hackathon Scoring",
  "AI Sentiment Analysis on Tech Feedback", "AI Threat Modeling for Prototypes"
];

const databases = [
  "Innovation_Portal_Startups", "University_Research_Grants", "Patent_Scrape_Lake", "Pilot_Project_Telemetry", "Hackathon_Submissions", 
  "Tech_Evaluation_Scores", "Prototype_IoT_Logs", "Future_Roadmap_Vectors", "Vendor_Capability_Matrix"
];

const dashboards = [
  "Active Pilot Projects Hub", "Startup Collaboration Radar", "Global Tech Trend Tracker", 
  "Prototype Success Metrics", "Innovation Challenge Leaderboard", "R&D Budget Allocation"
];

const apis = [
  "Startup India Portal Sync", "Global Patent Office APIs", "GitHub/GitLab Integration (Hackathons)", "IoT Testing MQTT Brokers",
  "University Grant Commission API", "Digital Signature APIs for NDAs"
];

const reports = [
  "Quarterly R&D Impact Report", "Startup Collaboration Success Rate", "Pilot Project Final Verdict", 
  "Tech Stack Vulnerability Assessment", "Global Policing Tech Trends", "Innovation Fund Audit"
];

const security = [
  "Zero-Knowledge Proofs for Startup IP", "Air-Gapped Prototype Testing Enclaves", "Strict Sandbox for Vendor Code", 
  "Automated Source Code Vulnerability Scans", "Encrypted NDA Vaults", 
  "Biometric Access to R&D Servers", "Hardware Tamper Detection", "DDoS Protected Innovation Portal"
];

const futureScope = [
  "AI Generating its Own Patents", "Fully Autonomous Drone Swarm R&D", "Quantum Internet Prototyping",
  "Brain-Computer Interface (BCI) Pilot", "Predictive Crime Algorithms Testing", "Automated Robot Ethics Arbitrator"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'R&D Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Innovation Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'R&D Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ResearchInnovationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <FlaskConical className="inline-icon" size={28} /> AI Research & Innovation Center
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Research & Innovation (R&D)</strong> is the futuristic incubator for the Police Force. By collaborating with startups, universities, and tech giants, this AI orchestrates pilot projects, hackathons, and prototype testing to bring tomorrow's defense technology into the hands of today's officers.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#3b82f6" /> Startup Synergy</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>An automated matching engine that connects specific police problem statements (e.g., Drone Interception) with the most capable defense-tech startups across the country.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Rocket className="inline-icon" color="#10b981" /> Pilot Project Sandbox</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks live metrics from experimental technology deployed in the field. AI calculates ROI and operational success, generating an automated "Go/No-Go" decision for state-wide rollout.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Lightbulb className="inline-icon" color="#f59e0b" /> Innovation Challenges</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hosts virtual hackathons for engineering students. The AI automatically grades submitted algorithms (like predictive policing code) for speed, accuracy, and bias.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#ef4444" /> Patent Intelligence</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuously scrapes global patent databases to alert police leadership about emerging disruptive technologies (like Quantum Decryption or Micro-Robotics) before they are weaponized.</p>
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
            {researchModules.map((mod, i) => (
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
            <FlaskConical size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">RESEARCH & <span>INNOVATION</span></h1>
            <p className="cyber-subtitle">Startup Collab, Pilot Testing & Tech Scouting</p>
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

export default ResearchInnovationDetailed;
