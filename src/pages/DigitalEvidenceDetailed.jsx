import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, HardDrive, FileSearch, Fingerprint
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Deepfake Detection AI", "Audio Noise Reduction Bot", "EXIF Data Analyzer", 
  "Blockchain Chain-of-Custody Bot", "Steganography Extractor", "OCR Handwriting Decoder", 
  "Video Object Tracking AI", "Deleted File Recovery Agent", "Malware Sandbox AI",
  "Cloud Storage Scraper", "Digital Watermark Validator", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const evidenceModules = [
  {
    title: "AI Image & Video Forensics",
    icon: <FileSearch size={20} />,
    items: ["Deepfake Video Detection", "License Plate Enhancement", "Facial De-blurring AI", "Automated Video Transcription"]
  },
  {
    title: "Chain of Custody (Blockchain)",
    icon: <Shield size={20} />,
    items: ["Immutable Hash Generation (SHA-256)", "Evidence Handover Logs", "Tamper Evident Audit Trails", "Digital Seal Issuance"]
  },
  {
    title: "Audio & Voice Forensics",
    icon: <Activity size={20} />,
    items: ["Background Noise Cancellation", "Voice Spectrogram Matching", "Dialect/Accent Classification", "Stress & Emotion Analysis"]
  },
  {
    title: "Metadata & EXIF Extraction",
    icon: <HardDrive size={20} />,
    items: ["GPS Coordinates Recovery", "Device ID & Camera Model Profiling", "Timestamp Tampering Detection", "Social Media Artifact Scraping"]
  },
  {
    title: "OCR & Document Analysis",
    icon: <FileText size={20} />,
    items: ["Handwritten Note Digitization", "Forged Signature Detection", "Bulk Email/PDF Text Mining", "Translation of Seized Documents"]
  }
];

const aiFeatures = [
  "AI Zero-Shot Object Detection in Video", "AI Generative Adversarial Network (GAN) Detection", "AI Spectrographic Voice ID",
  "AI Distributed Ledger (Blockchain) Consensus", "AI Natural Language Document Summarization", "AI Steganography Pixel Analysis",
  "AI Cloud-Sync Pcap Packet Inspection", "AI File Carving (Deleted Data)"
];

const databases = [
  "Blockchain_Evidence_Ledger", "Seized_Hard_Drives_Vault", "Audio_Voice_Samples", "Deepfake_Signature_DB", "OCR_Document_Index", 
  "Malware_Sandbox_Logs", "EXIF_Geospatial_Data", "Court_Admissibility_Logs", "Suspect_Device_Profiles", "Encrypted_Cloud_Backups"
];

const dashboards = [
  "Digital Evidence Processing Queue", "Blockchain Custody Ledger", "Deepfake Detection Heatmap", 
  "Audio Forensics Enhancement Status", "Bulk OCR Translation Progress", "Malware Sandbox Threat Level"
];

const apis = [
  "State Forensic Science Lab (FSL) APIs", "Hyperledger Fabric Blockchain APIs", "Google Vision / AWS Rekognition APIs", "CCTNS Digital Vault APIs",
  "Telecom Law Enforcement Agency (LEA) Portals", "Cloud Provider (AWS/Azure) Subpoena APIs"
];

const reports = [
  "Forensic Audio/Video Enhancement Report", "Blockchain Chain of Custody Certificate", "Document Forgery Analysis", 
  "Seized Device Metadata Extraction", "Deepfake Probability Index", "Digital Evidence Court Readiness"
];

const security = [
  "SHA-256 Cryptographic Hashing", "Air-gapped Processing Nodes", "WORM (Write Once Read Many) Storage", 
  "Biometric Access for Evidence Rooms", "Faraday Cage Hardware Vaults", 
  "Strict Need-to-Know Compartmentalization", "Anti-Ransomware Immutable Backups", "Audit Logging of File Views"
];

const futureScope = [
  "Quantum Evidence Decryption", "Holographic Crime Scene Rendering from Photos", "AI Mind-Upload Forensics",
  "Autonomous Forensic Drones", "DNA-encoded Digital Storage", "Global Interpol Decentralized Vault"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Forensic Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Evidence Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Lab Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const DigitalEvidenceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <HardDrive className="inline-icon" size={28} /> AI Digital Evidence Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Digital Evidence Management</strong> digitizes the entire forensic lifecycle. It guarantees 100% tamper-proof evidence handling via Blockchain, while deploying military-grade AI to enhance blurry CCTV footage, detect political deepfakes, and extract hidden metadata from seized smartphones.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#3b82f6" /> Blockchain Chain of Custody</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>The moment a digital file is seized, a SHA-256 hash is generated and logged on an immutable blockchain ledger, making it impossible for defense lawyers to claim evidence tampering in court.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileSearch className="inline-icon" color="#10b981" /> Deepfake & Media Forensics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes pixel-level artifacts to determine if a video was AI-generated (Deepfake) or if an image was Photoshopped. Automatically de-blurs license plates from moving CCTV cameras.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Audio & Voice ID</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Isolates suspect voices from noisy ransom calls. Uses voice spectrogram matching against a known criminal database to identify the caller with 99.8% accuracy.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#ef4444" /> Metadata & Hidden Data</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Extracts hidden EXIF data (GPS location, camera model, exact timestamp) from seized photos, and uses AI Steganography detectors to find secret messages hidden inside image files.</p>
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
            {evidenceModules.map((mod, i) => (
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
            <HardDrive size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI DIGITAL <span>EVIDENCE</span></h1>
            <p className="cyber-subtitle">Blockchain Custody, Audio Forensics & Deepfake Detection</p>
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

export default DigitalEvidenceDetailed;
