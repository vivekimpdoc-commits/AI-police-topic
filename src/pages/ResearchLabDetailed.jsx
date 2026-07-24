import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Users, FlaskConical, Microscope, Zap, Eye
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

const researchLabModules = [
  {
    title: "Quantum & Post-Quantum Sec",
    icon: <Shield size={20} />,
    items: ["Quantum Key Distribution (QKD)", "Shor's Algorithm Defense", "Unhackable Evidence Chains", "Qubit Communication Grids"]
  },
  {
    title: "Synthetic Data Generation",
    icon: <Database size={20} />,
    items: ["AI-Generated Riot Scenarios", "Deepfake Face Training Sets", "Synthetic Voice Clones for Stings", "Virtual Crime Scene Generation"]
  },
  {
    title: "Robotics & Autonomous K9s",
    icon: <Activity size={20} />,
    items: ["Robo-Dog Bomb Detection", "Autonomous Swarm Pursuit", "Hostage Rescue Micro-Drones", "Bipedal Riot Control Bots"]
  },
  {
    title: "Neural & Bio-Tech Integration",
    icon: <Eye size={20} />,
    items: ["Brainwave Lie Detection (EEG)", "Stress Biometric Wearables", "Cognitive Load Monitors", "Neural-Link Command Interface"]
  },
  {
    title: "Metaverse Police Academy",
    icon: <Microscope size={20} />,
    items: ["VR Active Shooter Training", "Holographic Forensic Labs", "Global AI Interpol Sync", "Virtual Suspect Interrogation"]
  }
];

const aiFeatures = [
  "AI Quantum Probability Modeling", "AI Synthetic Video/Audio Generation (GANs)", "AI Swarm Kinematics",
  "AI Neuromorphic Computing Simulation", "AI Holographic Ray-Tracing", "AI Predictive Behavior Theory",
  "AI Autonomous Lethal/Non-Lethal Decision Trees", "AI Metaverse Voxel Rendering"
];

const databases = [
  "Synthetic_Datasets", "Quantum_Encryption_Keys", "Robotics_Telemetry", "Neural_Wave_Patterns", "Metaverse_Assets", 
  "R&D_Prototyping_Vault", "Experimental_Algorithms", "VR_Training_Logs", "Hardware_Stress_Tests", "Bio_Metric_Signatures"
];

const dashboards = [
  "R&D Project Status Board", "Quantum Cryptography Health", "Robotics Field-Test Matrix", 
  "Synthetic Data Quality Index", "Metaverse Training Utilization", "Future Tech Blueprint Canvas"
];

const apis = [
  "Quantum Hardware Access APIs", "Boston Dynamics K9 Sync APIs", "VR Headset (Oculus/VisionPro) APIs", "EEG Brainwave Sensor APIs",
  "Generative Adversarial Network (GAN) APIs", "Unreal Engine 5 Server APIs", "IoT Prototyping APIs"
];

const reports = [
  "Quantum Vulnerability Assessment", "Synthetic Data Bias Report", "Robo-Dog Field Performance", 
  "VR Training Retention Metrics", "Neural Interrogation Efficacy", "R&D Budget ROI"
];

const security = [
  "Top Secret Clearance Auth", "Air-Gapped R&D Subnets", "Quantum-Safe Encryption", 
  "Self-Destructing Prototypes", "Biometric Retina Access", 
  "Strict IP Protection Vaults", "Zero-Trust Laboratory Sync", "Adversarial Espionage Defense"
];

const futureScope = [
  "Time-Temporal Predictive Policing", "Full Cybernetic Officer Augmentation", "Orbital AI Command Satellites",
  "Telepathic Interrogation Interfaces", "AGI (Artificial General Intelligence) Integration", "Fully Automated Justice Systems"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `R&D Researchers (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Research Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Lab Dashboards', icon: <PieChart size={18} /> },
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
              <FlaskConical className="inline-icon" size={28} /> AI Research & Innovation Lab (Future Tech)
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Research Lab</strong> is the bleeding edge of police technology. This highly classified module is dedicated to prototyping the future of law enforcement—from Quantum Cryptography and Brain-Computer Interfaces (BCI) to autonomous robotic K9s and Metaverse police academies.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#3b82f6" /> Post-Quantum Cryptography</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Developing encryption algorithms that cannot be broken even by future quantum computers, ensuring that decades-old digital evidence remains secure forever.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#10b981" /> Synthetic Data Generation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Using Generative AI (GANs) to create millions of fake, photorealistic criminal faces and fake riot scenarios to train other AI models without violating public privacy.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Autonomous Robotics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Programming the next generation of robotic police dogs (Robo-Dogs) capable of detecting explosives, navigating collapsed buildings, and running down armed suspects.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Microscope className="inline-icon" color="#ef4444" /> Metaverse Police Academy</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Officers don VR headsets to train in ultra-realistic holographic simulations of active shooter scenarios or complex forensic crime scenes.</p>
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
            {researchLabModules.map((mod, i) => (
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
