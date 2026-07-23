import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, Camera, Video, Mic, Scan
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Video Analytics Engine AI", "Audio Forensics AI", "Geospatial Threat Mapper", 
  "Dark Web Scraper Bot", "Live CCTV Anomaly Detector", "Facial Recognition AI", 
  "Gait & Posture Analyzer", "Lip-Reading AI", "Deepfake Video Detector",
  "Deepfake Audio Detector", "License Plate Recognition AI", "Crowd Sentiment Analyzer (Visual)",
  "Social Media Image Scraper", "Voice-print Matching Agent", "Drone Video Summarizer",
  "Satellite Imagery Correlator", "Object Tracking Bot (Across CCTVs)", "Weapon Detection AI",
  "Hidden Compartment Identifier (X-Ray AI)", "Traffic Pattern Visualizer", "Abandoned Object Detector",
  "Crowd Density Estimator", "Thermal Imaging Interpreter", "Infrared Night-Vision Enhancer AI",
  "3D Spatial Reconstruction Bot", "Audio Distress Signal Detector", "Gunshot Acoustic Triangulator",
  "Glass-Break Sensor AI", "Voice Emotion Analyzer", "Hate Speech Audio Detector",
  "Social Network Graph Modeler", "Geolocation Spoofing Detector", "Crypto Wallet Transaction Tracer",
  "Dark Web Vendor Linker AI", "Illicit Marketplace Scraper", "Cyber-Threat Intelligence Bot",
  "Encrypted Chat Traffic Analyzer", "Phishing Domain Detector", "Botnet Traffic Analyzer",
  "Open-Source Intelligence (OSINT) Bot", "Suspect Route Predictor", "Border Infiltration Visualizer",
  "Maritime Smuggling Predictor", "Cargo Container Scanner AI", "Fake Currency Pattern Matcher",
  "Document Forgery Detector", "Signature Verification AI", "Biometric Spoofing Detector",
  "Multi-Camera Sync AI", "Cross-District Video Correlator", "News Broadcast Sentiment Bot",
  "Radicalization Content Flagging AI", "Event Ticket Scalping Detector", "VIP Proximity Alert AI",
  "Automated Redaction AI (Privacy)", "Visual Evidence Timeline Builder", "Body-Cam Footage Auditor",
  "Forensic Blood-Spatter Analyzer AI", "Crime Scene Blueprint Generator", "Virtual Reality Reconstruction Agent"
];

const multimodalModules = [
  {
    title: "Video & CCTV Analytics",
    icon: <Video size={20} />,
    items: ["Real-time Facial Recognition", "Cross-camera Suspect Tracking", "Abandoned Object Detection", "ANPR (Number Plate Reading)"]
  },
  {
    title: "Audio Forensics",
    icon: <Mic size={20} />,
    items: ["Wiretap Keyword Flagging", "Voice ID Matching", "Background Noise Isolation", "Dialect/Language Identification"]
  },
  {
    title: "Image & Biometric Scan",
    icon: <Camera size={20} />,
    items: ["Tattoo/Scar Database Matching", "Latent Fingerprint Enhancement", "Shoe-print Classification", "Retina/Iris Matching"]
  },
  {
    title: "Document OCR & Text",
    icon: <Scan size={20} />,
    items: ["Handwritten Note Parsing", "Burnt Document Reconstruction", "Multi-lingual Pamphlet Translation", "Fake Currency Detection"]
  },
  {
    title: "Deepfake & Cyber-Vision",
    icon: <ShieldAlert size={20} />,
    items: ["AI-Generated Video Detection", "Voice Cloning Identification", "Metadata Forgery Checks", "Social Media Image Scraping"]
  }
];

const aiFeatures = [
  "AI Multimodal Fusion (Audio + Video)", "AI Zero-Shot Object Detection", "AI Semantic Video Search (e.g., 'Red car 2PM')",
  "AI Deep-learning Super Resolution", "AI Crowd Behavioral Anomaly Detection", "AI Temporal Audio Synchronization",
  "AI Gun/Knife Pose Estimation", "AI Cross-lingual Audio Transcription"
];

const databases = [
  "CCTV_Archives", "Biometric_Face_Vault", "Tattoo_Signatures", "Audio_Voiceprints", "ANPR_Logs", 
  "Deepfake_Models", "Fingerprint_AFIS", "Forensic_Images", "Translated_Transcripts", "Suspect_Gait_Profiles"
];

const dashboards = [
  "Live City-wide CCTV Grid", "Facial Recognition Hit Board", "Audio Interrogation Timeline", 
  "Deepfake Analysis Report", "Multimodal Fusion Canvas", "ANPR Tracking Map"
];

const apis = [
  "Smart City CCTV Feeds", "National AFIS (Fingerprint) APIs", "RTO Vahan APIs (ANPR)", "Telecom Wiretap APIs",
  "Forensic Lab LIMS APIs", "Deepfake Detection Engine APIs", "Open-Source Image Scraping APIs"
];

const reports = [
  "CCTV Suspect Tracking Timeline", "Audio Voice-Match Confidence Report", "Deepfake Forgery Audit", 
  "Tattoo Match Case Linkage", "ANPR Movement History", "Crowd Density Heatmap"
];

const security = [
  "Facial Data Hash Encryption", "Strict Court-Order Access Control", "Dynamic Video Redaction (Blurring)", 
  "Immutable Forensic Hashes", "Zero-Trust Biometric Vaults", 
  "Audio-Stream Encryption", "API Rate Limiting", "Deepfake Model Weight Protection"
];

const futureScope = [
  "Real-time Holographic Video Reconstruction", "Brainwave Lie Detection", "Satellite Thermal Imaging Sync",
  "Predictive Micro-expression Flags", "Autonomous Drone Camera Handoffs", "Quantum Image Processing"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Multimodal Analysts (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Multimodal Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Forensic Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const MultimodalDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Scan className="inline-icon" size={28} /> AI Multimodal Analytics (Vision, Audio & OCR)
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Multimodal Analytics</strong> is the sensory engine of the police department. It processes structured and unstructured data simultaneously—analyzing live CCTV video for facial recognition, transcribing wiretapped audio, reading license plates (ANPR), and detecting deepfakes, all through a unified AI framework.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Video className="inline-icon" color="#3b82f6" /> Semantic Video Search</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of watching hours of CCTV footage, an officer types "man in red shirt with a backpack." The AI instantly scans 50 cameras and returns all matching timestamps.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Mic className="inline-icon" color="#10b981" /> Voice-Print Forensics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>The AI matches a kidnapper's ransom call against millions of voice records in the database, while simultaneously filtering out background noise to identify the location.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Camera className="inline-icon" color="#f59e0b" /> Cross-Camera Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a suspect's face is obscured, the AI uses "Gait Analysis" (the way they walk) and clothing patterns to automatically track them as they move from one CCTV to another.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Deepfake Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scans viral political videos or extortion audio clips, using adversarial AI models to detect pixel-level distortions and voice cloning, proving them to be fake.</p>
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
            {multimodalModules.map((mod, i) => (
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
            <Scan size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI MULTIMODAL <span>ANALYTICS</span></h1>
            <p className="cyber-subtitle">Vision, Voice & Text Fusion for Advanced Forensic Intelligence</p>
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

export default MultimodalDetailed;
