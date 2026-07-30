import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
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


const expertRoutes = {
  "Video Analytics Engine AI": "/video-analytics-engine-ai-agent",
  "Audio Forensics AI": "/audio-forensics-ai-agent",
  "Geospatial Threat Mapper": "/geospatial-threat-mapper-agent",
  "Dark Web Scraper Bot": "/dark-web-scraper-bot-agent",
  "Live CCTV Anomaly Detector": "/live-cctv-anomaly-detector-agent",
  "Facial Recognition AI": "/facial-recognition-ai-agent",
  "Gait & Posture Analyzer": "/gait-posture-analyzer-agent",
  "Lip-Reading AI": "/lip-reading-ai-agent",
  "Deepfake Video Detector": "/deepfake-video-detector-agent",
  "Deepfake Audio Detector": "/deepfake-audio-detector-agent",
  "License Plate Recognition AI": "/license-plate-recognition-ai-agent",
  "Crowd Sentiment Analyzer (Visual)": "/crowd-sentiment-analyzer-visual-agent",
  "Social Media Image Scraper": "/social-media-image-scraper-agent",
  "Voice-print Matching Agent": "/voice-print-matching-agent-agent",
  "Drone Video Summarizer": "/drone-video-summarizer-agent",
  "Satellite Imagery Correlator": "/satellite-imagery-correlator-agent",
  "Object Tracking Bot (Across CCTVs)": "/object-tracking-bot-across-cctvs-agent",
  "Weapon Detection AI": "/weapon-detection-ai-agent",
  "Hidden Compartment Identifier (X-Ray AI)": "/hidden-compartment-identifier-x-ray-ai-agent",
  "Traffic Pattern Visualizer": "/traffic-pattern-visualizer-agent",
  "Abandoned Object Detector": "/abandoned-object-detector-agent",
  "Crowd Density Estimator": "/crowd-density-estimator-agent",
  "Thermal Imaging Interpreter": "/thermal-imaging-interpreter-agent",
  "Infrared Night-Vision Enhancer AI": "/infrared-night-vision-enhancer-ai-agent",
  "3D Spatial Reconstruction Bot": "/3d-spatial-reconstruction-bot-agent",
  "Audio Distress Signal Detector": "/audio-distress-signal-detector-agent",
  "Gunshot Acoustic Triangulator": "/gunshot-acoustic-triangulator-agent",
  "Glass-Break Sensor AI": "/glass-break-sensor-ai-agent",
  "Voice Emotion Analyzer": "/voice-emotion-analyzer-agent",
  "Hate Speech Audio Detector": "/hate-speech-audio-detector-agent",
  "Social Network Graph Modeler": "/social-network-graph-modeler-agent",
  "Geolocation Spoofing Detector": "/geolocation-spoofing-detector-agent",
  "Crypto Wallet Transaction Tracer": "/crypto-wallet-transaction-tracer-agent",
  "Dark Web Vendor Linker AI": "/dark-web-vendor-linker-ai-agent",
  "Illicit Marketplace Scraper": "/illicit-marketplace-scraper-agent",
  "Cyber-Threat Intelligence Bot": "/cyber-threat-intelligence-bot-agent",
  "Encrypted Chat Traffic Analyzer": "/encrypted-chat-traffic-analyzer-agent",
  "Phishing Domain Detector": "/phishing-domain-detector-agent",
  "Botnet Traffic Analyzer": "/botnet-traffic-analyzer-agent",
  "Open-Source Intelligence (OSINT) Bot": "/open-source-intelligence-osint-bot-agent",
  "Suspect Route Predictor": "/suspect-route-predictor-agent",
  "Border Infiltration Visualizer": "/border-infiltration-visualizer-agent",
  "Maritime Smuggling Predictor": "/maritime-smuggling-predictor-agent",
  "Cargo Container Scanner AI": "/cargo-container-scanner-ai-agent",
  "Fake Currency Pattern Matcher": "/fake-currency-pattern-matcher-agent",
  "Document Forgery Detector": "/document-forgery-detector-agent",
  "Signature Verification AI": "/signature-verification-ai-agent",
  "Biometric Spoofing Detector": "/biometric-spoofing-detector-agent",
  "Multi-Camera Sync AI": "/multi-camera-sync-ai-agent",
  "Cross-District Video Correlator": "/cross-district-video-correlator-agent",
  "News Broadcast Sentiment Bot": "/news-broadcast-sentiment-bot-agent",
  "Radicalization Content Flagging AI": "/radicalization-content-flagging-ai-agent",
  "Event Ticket Scalping Detector": "/event-ticket-scalping-detector-agent",
  "VIP Proximity Alert AI": "/vip-proximity-alert-ai-agent",
  "Automated Redaction AI (Privacy)": "/automated-redaction-ai-privacy-agent",
  "Visual Evidence Timeline Builder": "/visual-evidence-timeline-builder-agent",
  "Body-Cam Footage Auditor": "/body-cam-footage-auditor-agent",
  "Forensic Blood-Spatter Analyzer AI": "/forensic-blood-spatter-analyzer-ai-agent",
  "Crime Scene Blueprint Generator": "/crime-scene-blueprint-generator-agent",
  "Virtual Reality Reconstruction Agent": "/virtual-reality-reconstruction-agent-agent"
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

const MultimodalDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI MULTIMODAL ANALYTICS
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI MULTIMODAL ANALYTICS</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in vision, voice & text fusion for advanced forensic intelligence.
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
