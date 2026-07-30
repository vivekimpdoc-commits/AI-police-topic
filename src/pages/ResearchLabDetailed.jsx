import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"Quantum Cryptography AI", "Synthetic Criminal Data Generator", "Robotics K9 Pathfinding AI", 
  "Brain-Computer Interface Researcher", "Neuromorphic Vision Analyst", "Autonomous Drone Swarm R&D", 
  "Predictive Pre-Crime Theorist", "Holographic Evidence Mapper", "AI Legal Arbitrator Bot",
  "Metaverse Police Academy Trainer", "Cyber-Warfare Simulation Bot", "Quantum Key Distribution (QKD) Bot",
  "Shor's Algorithm Defense AI", "Unhackable Evidence Chain AI", "Qubit Communication Grid Manager",
  "AI-Generated Riot Simulator", "Deepfake Face Training Set Generator", "Synthetic Voice Clone R&D",
  "Virtual Crime Scene Generator", "Robo-Dog Bomb Detection AI", "Autonomous Swarm Pursuit Modeler",
  "Hostage Rescue Micro-Drone AI", "Bipedal Riot Control Bot R&D", "Brainwave Lie Detection (EEG) AI",
  "Stress Biometric Wearables R&D", "Cognitive Load Monitoring AI", "Neural-Link Command Interface Bot",
  "VR Active Shooter Trainer", "Holographic Forensic Lab Guide", "Global AI Interpol Sync R&D",
  "Virtual Suspect Interrogation AI", "Quantum Probability Modeler", "Neuromorphic Computing Simulator",
  "Holographic Ray-Tracing AI", "Predictive Behavior Theorist Bot", "Autonomous Lethal Decision Tree AI",
  "Metaverse Voxel Rendering AI", "DNA/Genomic Data Integrator R&D", "Quantum-Safe Encryption R&D",
  "Decentralized IPFS Evidence Chain AI", "Brain-Computer Search Interface AI", "Self-Healing Pipeline Theorist",
  "Time-Temporal Policing R&D", "Cybernetic Officer Augmentation AI", "Orbital Command Satellite Sync AI",
  "Telepathic Interrogation Interface", "AGI (Artificial General Intelligence) Sync", "Automated Justice System Simulator",
  "Synthetic Bio-Signature Generator", "Exo-Skeleton Pursuit Enhancer AI", "Drone EMP Hardening R&D",
  "Acoustic Weaponry Simulation AI", "Anti-Gravity Drone R&D", "Invisibility Cloak Metamaterial AI",
  "Sub-dermal Tracker Chip R&D", "Neural Memory Extraction Theorist", "Smart-Bullet Trajectory Modeler",
  "Cyber-Telepathy Comms R&D", "Virtual Reality Empathy Trainer", "Post-Quantum Cryptanalysis AI"
];


const expertRoutes = {
  "Quantum Cryptography AI": "/quantum-cryptography-ai-agent",
  "Synthetic Criminal Data Generator": "/synthetic-criminal-data-generator-agent",
  "Robotics K9 Pathfinding AI": "/robotics-k9-pathfinding-ai-agent",
  "Brain-Computer Interface Researcher": "/brain-computer-interface-researcher-agent",
  "Neuromorphic Vision Analyst": "/neuromorphic-vision-analyst-agent",
  "Autonomous Drone Swarm R&D": "/autonomous-drone-swarm-r-d-agent",
  "Predictive Pre-Crime Theorist": "/predictive-pre-crime-theorist-agent",
  "Holographic Evidence Mapper": "/holographic-evidence-mapper-agent",
  "AI Legal Arbitrator Bot": "/ai-legal-arbitrator-bot-agent",
  "Metaverse Police Academy Trainer": "/metaverse-police-academy-trainer-agent",
  "Cyber-Warfare Simulation Bot": "/cyber-warfare-simulation-bot-agent",
  "Quantum Key Distribution (QKD) Bot": "/quantum-key-distribution-qkd-bot-agent",
  "Shor's Algorithm Defense AI": "/shor-s-algorithm-defense-ai-agent",
  "Unhackable Evidence Chain AI": "/unhackable-evidence-chain-ai-agent",
  "Qubit Communication Grid Manager": "/qubit-communication-grid-manager-agent",
  "AI-Generated Riot Simulator": "/ai-generated-riot-simulator-agent",
  "Deepfake Face Training Set Generator": "/deepfake-face-training-set-generator-agent",
  "Synthetic Voice Clone R&D": "/synthetic-voice-clone-r-d-agent",
  "Virtual Crime Scene Generator": "/virtual-crime-scene-generator-agent",
  "Robo-Dog Bomb Detection AI": "/robo-dog-bomb-detection-ai-agent",
  "Autonomous Swarm Pursuit Modeler": "/autonomous-swarm-pursuit-modeler-agent",
  "Hostage Rescue Micro-Drone AI": "/hostage-rescue-micro-drone-ai-agent",
  "Bipedal Riot Control Bot R&D": "/bipedal-riot-control-bot-r-d-agent",
  "Brainwave Lie Detection (EEG) AI": "/brainwave-lie-detection-eeg-ai-agent",
  "Stress Biometric Wearables R&D": "/stress-biometric-wearables-r-d-agent",
  "Cognitive Load Monitoring AI": "/cognitive-load-monitoring-ai-agent",
  "Neural-Link Command Interface Bot": "/neural-link-command-interface-bot-agent",
  "VR Active Shooter Trainer": "/vr-active-shooter-trainer-agent",
  "Holographic Forensic Lab Guide": "/holographic-forensic-lab-guide-agent",
  "Global AI Interpol Sync R&D": "/global-ai-interpol-sync-r-d-agent",
  "Virtual Suspect Interrogation AI": "/virtual-suspect-interrogation-ai-agent",
  "Quantum Probability Modeler": "/quantum-probability-modeler-agent",
  "Neuromorphic Computing Simulator": "/neuromorphic-computing-simulator-agent",
  "Holographic Ray-Tracing AI": "/holographic-ray-tracing-ai-agent",
  "Predictive Behavior Theorist Bot": "/predictive-behavior-theorist-bot-agent",
  "Autonomous Lethal Decision Tree AI": "/autonomous-lethal-decision-tree-ai-agent",
  "Metaverse Voxel Rendering AI": "/metaverse-voxel-rendering-ai-agent",
  "DNA/Genomic Data Integrator R&D": "/dna-genomic-data-integrator-r-d-agent",
  "Quantum-Safe Encryption R&D": "/quantum-safe-encryption-r-d-agent",
  "Decentralized IPFS Evidence Chain AI": "/decentralized-ipfs-evidence-chain-ai-agent",
  "Brain-Computer Search Interface AI": "/brain-computer-search-interface-ai-agent",
  "Self-Healing Pipeline Theorist": "/self-healing-pipeline-theorist-agent",
  "Time-Temporal Policing R&D": "/time-temporal-policing-r-d-agent",
  "Cybernetic Officer Augmentation AI": "/cybernetic-officer-augmentation-ai-agent",
  "Orbital Command Satellite Sync AI": "/orbital-command-satellite-sync-ai-agent",
  "Telepathic Interrogation Interface": "/telepathic-interrogation-interface-agent",
  "AGI (Artificial General Intelligence) Sync": "/agi-artificial-general-intelligence-sync-agent",
  "Automated Justice System Simulator": "/automated-justice-system-simulator-agent",
  "Synthetic Bio-Signature Generator": "/synthetic-bio-signature-generator-agent",
  "Exo-Skeleton Pursuit Enhancer AI": "/exo-skeleton-pursuit-enhancer-ai-agent",
  "Drone EMP Hardening R&D": "/drone-emp-hardening-r-d-agent",
  "Acoustic Weaponry Simulation AI": "/acoustic-weaponry-simulation-ai-agent",
  "Anti-Gravity Drone R&D": "/anti-gravity-drone-r-d-agent",
  "Invisibility Cloak Metamaterial AI": "/invisibility-cloak-metamaterial-ai-agent",
  "Sub-dermal Tracker Chip R&D": "/sub-dermal-tracker-chip-r-d-agent",
  "Neural Memory Extraction Theorist": "/neural-memory-extraction-theorist-agent",
  "Smart-Bullet Trajectory Modeler": "/smart-bullet-trajectory-modeler-agent",
  "Cyber-Telepathy Comms R&D": "/cyber-telepathy-comms-r-d-agent",
  "Virtual Reality Empathy Trainer": "/virtual-reality-empathy-trainer-agent",
  "Post-Quantum Cryptanalysis AI": "/post-quantum-cryptanalysis-ai-agent"
};
const isClickable = (expert) => !!expertRoutes[expert];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Core AI Topics', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Advanced Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ResearchLabDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI RESEARCH LAB
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI RESEARCH LAB</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in quantum cryptography, synthetic data & robotics r&d.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Real-time Monitoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuous AI-driven surveillance and data collection ensuring immediate anomaly detection and rapid response protocols.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Cpu className="inline-icon" color="#10b981" /> Predictive Analytics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Utilizes machine learning to forecast trends, identify potential risks before they occur, and suggest optimized resource allocation.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Seamless Integration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hooks into existing national and state-level databases, providing a unified, interoperable platform across all departments.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Automated Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ensures all operations strictly adhere to legal and procedural guidelines, generating instant audit trails and compliance reports.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => (
              <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: i * 0.03 }} 
                    key={i} 
                    className={`premium-card highlight-cyan ${isClickable(expert) ? 'clickable-agent-card' : ''}`}
                    onClick={() => { if (isClickable(expert)) navigate(expertRoutes[expert]); }}
                    style={isClickable(expert) ? { cursor: 'pointer', border: '1px solid #00f0ff', boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' } : {}}
                  >
                    <Bot className="card-icon" />
                    <h4>{expert}</h4>
                    {isClickable(expert) && <div style={{ fontSize: '0.75rem', color: '#00f0ff', marginTop: '5px' }}>Click to view Agent details</div>}
                  </motion.div>
            ))}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {[
              { title: "Real-time Monitoring Module", items: ["Live Data Stream", "Alert Engine", "Geospatial Tracking"] },
              { title: "Predictive Analytics Engine", items: ["Risk Forecasting", "Resource Optimization", "Pattern Recognition"] },
              { title: "Automated Reporting System", items: ["Compliance Audits", "Daily Briefings", "Incident Logs"] },
              { title: "Cloud Integration Hub", items: ["State DB Sync", "Third-party API Webhooks", "Encrypted Data Transfer"] }
            ].map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  <LayoutDashboard size={20} color="#3b82f6" />
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
            {[
              "24/7 AI Processing", "Advanced Machine Learning Models", "Real-time Data Sync", 
              "Automated Alerts & Notifications", "Cross-Platform Accessibility", "Role-Based Access Control"
            ].map((feat, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple" onClick={() => navigate(`/agent/${encodeURIComponent(expert)}`)} style={{cursor: 'pointer'}}>
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
                <h3><Database className="inline-icon" color="#06b6d4" /> Database Integration</h3>
                <div className="tag-cloud">
                  {["Primary_Transaction_DB", "Analytics_Data_Warehouse", "Audit_Logs_Archive", "User_Access_Registry", "System_Configuration_DB"].map((db, i) => (
                    <span key={i} className="tech-tag">{db}</span>
                  ))}
                </div>
              </div>
              <div className="panel">
                <h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3>
                <div className="tag-cloud">
                  {["RESTful Core API", "Real-time WebSocket Feed", "Third-party Webhooks", "Authentication Gateway", "Data Export API"].map((api, i) => (
                    <span key={i} className="tech-tag tech-tag-alt">{api}</span>
                  ))}
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
                  {["Executive Overview Dashboard", "Live Operations Monitor", "Historical Trend Analysis", "System Health & Status"].map((d, i) => (
                    <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3>
                <ul className="premium-list">
                  {["Daily Summary Report", "Weekly Performance Analytics", "Monthly Compliance Audit", "System Exception Logs"].map((r, i) => (
                    <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>
                  ))}
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
                  {[
                    "End-to-End Data Encryption (AES-256)", "Multi-Factor Authentication (MFA)", 
                    "Strict Role-Based Access Control (RBAC)", "Tamper-proof Audit Trails", 
                    "Automated Threat Detection", "Regular Security Penetration Testing"
                  ].map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}
                </ul>
              </div>
              <div className="panel highlight-green">
                <h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3>
                <ul className="premium-list">
                  {[
                    "Integration with Advanced LLMs", "Predictive Autonomous Actions", 
                    "Enhanced Mobile Accessibility", "Cross-Agency Data Federation", 
                    "Blockchain-based Immutability", "Next-Gen UI/UX Overhaul"
                  ].map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}
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
            <ShieldAlert size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI RESEARCH <span>LAB</span></h1>
            <p className="cyber-subtitle">Quantum Cryptography, Synthetic Data & Robotics R&D</p>
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

export default ResearchLabDetailed;
