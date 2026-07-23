import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Zap, Glasses, Drone
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Quantum Encryption Integrator", "AR Crime Scene Constructor", "VR Hostage Simulator", 
  "Swarm Drone Coordinator AI", "Edge Computing Node Balancer", "Blockchain Evidence Hasher", 
  "Offline AI Sync Bot", "Brain-Computer Interface Modeler", "Robotics K9 Handler AI",
  "Smart Sensor Fusion Engine", "Predictive Algorithm Auditor"
];

const emergingModules = [
  {
    title: "Quantum & Blockchain Security",
    icon: <Shield size={20} />,
    items: ["Post-Quantum Cryptography Readiness", "Immutable Evidence Blockchain", "Zero-Knowledge Interrogations", "Decentralized ID Verification"]
  },
  {
    title: "AR / VR Police Training",
    icon: <Glasses size={20} />,
    items: ["VR Active-Shooter Simulation", "AR Crime Scene Tagging", "Virtual Courtroom Testimonies", "Holographic Suspect Lineups"]
  },
  {
    title: "Autonomous Robotics & Drones",
    icon: <Rocket size={20} />,
    items: ["Swarm Drone Perimeter Defense", "Bomb-Disposal Robo-Dogs", "Automated Riot-Control Drones", "Underwater Search ROVs"]
  },
  {
    title: "Edge AI & Offline Ops",
    icon: <Cpu size={20} />,
    items: ["Jungle/Remote Area Offline NLP", "Edge Node Face Recognition", "Peer-to-Peer Mesh Comms", "Battery-Optimized AI Models"]
  },
  {
    title: "Next-Gen Cyber & Sensors",
    icon: <Zap size={20} />,
    items: ["Smart-Dust Micro-Sensors", "Predictive Pre-Crime Modeling", "Neuromorphic Computing Chips", "Deepfake Reversal Algorithms"]
  }
];

const aiFeatures = [
  "AI Generative VR Environments", "AI Post-Quantum Key Exchange", "AI Decentralized Swarm Logic",
  "AI Edge Device Pruning/Quantization", "AI Multi-Modal Sensor Fusion", "AI Augmented Reality Overlay Alignment",
  "AI Haptic Feedback Simulation", "AI Autonomous Pathfinding"
];

const databases = [
  "Blockchain_Evidence_Ledger", "VR_Simulation_Telemetries", "Drone_Swarm_Coordinates", "Edge_Node_Sync_Logs", "Quantum_Key_Vault", 
  "AR_Crime_Scene_3D_Models", "Robotic_K9_Sensors", "Mesh_Network_Topology", "Deepfake_Signature_DB", "Smart_Dust_Data_Lake"
];

const dashboards = [
  "Quantum Security Threat Matrix", "Live Drone Swarm Radar", "VR Training ROI Analytics", 
  "Edge Node Uptime Map", "Blockchain Custody Ledger", "Robotic Unit Status"
];

const apis = [
  "National Quantum Mission APIs", "Web3 Storage (IPFS) for Evidence", "DGCA Drone Regulation Sync", "ARKit / ARCore Integration",
  "Mesh Network Gateways", "Neuromorphic Hardware SDKs"
];

const reports = [
  "Quantum Vulnerability Assessment", "Blockchain Evidence Integrity", "Drone Autonomous Flight Hours", 
  "VR Training Graduation Rates", "Edge AI Latency Metrics", "Robotics Deployment ROI"
];

const security = [
  "Lattice-Based Quantum Crypto", "Byzantine Fault Tolerant Blockchains", "Hardware Security Enclaves (Edge)", 
  "Anti-EMP (Electromagnetic Pulse) Shielding", "Strict Robotics Kill-Switches", 
  "Holographic Watermarking", "Decentralized Identifiers (DIDs)", "Air-Gapped VR Servers"
];

const futureScope = [
  "Brain-Computer Interface (BCI) Interrogations", "Telepathic Officer Comms", "Nanobot Forensics",
  "Sentient Crime-Prediction Mainframes", "Exoskeletons for Riot Police", "Space-Based Command Centers"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Future Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Tech Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Innovation Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const EmergingTechDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Zap className="inline-icon" size={28} /> AI Emerging Technologies & Future Labs
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Emerging Technologies</strong> is the bleeding edge of police innovation. It future-proofs the force by integrating Quantum Cryptography, Augmented Reality (AR) crime scenes, Blockchain evidence lockers, and autonomous robotic K9 units.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#3b82f6" /> Quantum & Blockchain</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Prepares the department for the post-quantum era. Uses lattice-based cryptography to encrypt classified files and a decentralized blockchain to guarantee digital evidence is never tampered with.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Glasses className="inline-icon" color="#10b981" /> AR / VR Immersion</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Officers wear VR headsets to train in hyper-realistic, AI-generated active shooter scenarios. Detectives use AR glasses at crime scenes to overlay trajectory lines and tag evidence digitally.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Rocket className="inline-icon" color="#f59e0b" /> Autonomous Swarms</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Deploys decentralized drone swarms that communicate with each other (without a central server) to map forests, alongside robotic dogs (Robo-K9s) used for bomb disposal and perimeter defense.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Cpu className="inline-icon" color="#ef4444" /> Edge AI & Offline Ops</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>When commandos operate in deep jungles with zero internet, AI models run locally on their Edge devices. Facial recognition, NLP translation, and mesh-networking work completely offline.</p>
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
            {emergingModules.map((mod, i) => (
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
            <Zap size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">EMERGING <span>TECHNOLOGIES</span></h1>
            <p className="cyber-subtitle">Quantum Security, VR Interrogations & Edge AI</p>
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

export default EmergingTechDetailed;
