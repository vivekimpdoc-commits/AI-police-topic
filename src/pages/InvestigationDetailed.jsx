import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"FIR Drafting Assistant AI", "Legal Code Matcher AI", "Charge-sheet Summarizer", 
  "Pre-Trial Evidence Scorer", "Interrogation Insight AI", "Cold-Case Correlation Bot", 
  "Witness Testimony Analyzer", "Jurisdiction Mapper AI", "Alibi Verification Agent",
  "Court Precedent Search AI", "Bail Risk Assessor AI", "Voice-to-FIR Dictation AI",
  "IPC/BNS Section Suggester", "Multi-lingual Statement Translator", "Suspect Entity Extractor",
  "Timeline Reconstruction Agent", "Testimony Contradiction Detector", "Historical Judgement Analyzer",
  "Bail Rejection Predictor AI", "Prosecution Strategy Prompter", "Modus Operandi Profiler",
  "Forensic Report Parser AI", "Ballistics Pattern Matcher", "Digital Evidence Timestamp Analyzer",
  "Micro-Expression Detector AI", "Voice Stress Analysis Bot", "Polygraph Data Interpreter",
  "Case Solvability Scorer", "Audio Transcription Agent", "Emotion Classification AI",
  "Witness Sentiment Analyzer", "Automated Evidence Tagger", "Cross-Case Similarity Matcher",
  "Defense Argument Predictor", "Crime Scene Photo Analyzer", "Missing Persons Correlator",
  "Unidentified Body Matcher AI", "Bank Statement Fraud Finder", "Cyber-Footprint Tracer AI",
  "Deepfake Audio Detector", "Threat Letter Authorship AI", "Handwriting Analysis Assistant",
  "Sketch-to-Mugshot AI", "Criminal Nickname Resolver", "Call Data Record (CDR) Summarizer",
  "GPS Ping Triangulation AI", "Drone Footage Analyst AI", "Victim Vulnerability Scorer",
  "Parole Violation Predictor", "Jailhouse Informant Credibility AI", "Evidence Chain-of-Custody Auditor",
  "Post-Mortem Report Interpreter", "DNA Match Probability Calculator", "Surveillance Video Summarizer",
  "Social Media Confession Scraper", "Dark Web Credential Searcher", "Legal Loophole Flagging AI",
  "Judge Sentencing Trend Analyzer", "Warrant Application Drafter", "Virtual Jury Bias Modeler"
];


const expertRoutes = {
  "FIR Drafting Assistant AI": "/fir-drafting-assistant-ai-agent",
  "Legal Code Matcher AI": "/legal-code-matcher-ai-agent",
  "Charge-sheet Summarizer": "/charge-sheet-summarizer-agent",
  "Pre-Trial Evidence Scorer": "/pre-trial-evidence-scorer-agent",
  "Interrogation Insight AI": "/interrogation-insight-ai-agent",
  "Cold-Case Correlation Bot": "/cold-case-correlation-bot-agent",
  "Witness Testimony Analyzer": "/witness-testimony-analyzer-agent",
  "Jurisdiction Mapper AI": "/jurisdiction-mapper-ai-agent",
  "Alibi Verification Agent": "/alibi-verification-agent-agent",
  "Court Precedent Search AI": "/court-precedent-search-ai-agent",
  "Bail Risk Assessor AI": "/bail-risk-assessor-ai-agent",
  "Voice-to-FIR Dictation AI": "/voice-to-fir-dictation-ai-agent",
  "IPC/BNS Section Suggester": "/ipc-bns-section-suggester-agent",
  "Multi-lingual Statement Translator": "/multi-lingual-statement-translator-agent",
  "Suspect Entity Extractor": "/suspect-entity-extractor-agent",
  "Timeline Reconstruction Agent": "/timeline-reconstruction-agent-agent",
  "Testimony Contradiction Detector": "/testimony-contradiction-detector-agent",
  "Historical Judgement Analyzer": "/historical-judgement-analyzer-agent",
  "Bail Rejection Predictor AI": "/bail-rejection-predictor-ai-agent",
  "Prosecution Strategy Prompter": "/prosecution-strategy-prompter-agent",
  "Modus Operandi Profiler": "/modus-operandi-profiler-agent",
  "Forensic Report Parser AI": "/forensic-report-parser-ai-agent",
  "Ballistics Pattern Matcher": "/ballistics-pattern-matcher-agent",
  "Digital Evidence Timestamp Analyzer": "/digital-evidence-timestamp-analyzer-agent",
  "Micro-Expression Detector AI": "/micro-expression-detector-ai-agent",
  "Voice Stress Analysis Bot": "/voice-stress-analysis-bot-agent",
  "Polygraph Data Interpreter": "/polygraph-data-interpreter-agent",
  "Case Solvability Scorer": "/case-solvability-scorer-agent",
  "Audio Transcription Agent": "/audio-transcription-agent-agent",
  "Emotion Classification AI": "/emotion-classification-ai-agent",
  "Witness Sentiment Analyzer": "/witness-sentiment-analyzer-agent",
  "Automated Evidence Tagger": "/automated-evidence-tagger-agent",
  "Cross-Case Similarity Matcher": "/cross-case-similarity-matcher-agent",
  "Defense Argument Predictor": "/defense-argument-predictor-agent",
  "Crime Scene Photo Analyzer": "/crime-scene-photo-analyzer-agent",
  "Missing Persons Correlator": "/missing-persons-correlator-agent",
  "Unidentified Body Matcher AI": "/unidentified-body-matcher-ai-agent",
  "Bank Statement Fraud Finder": "/bank-statement-fraud-finder-agent",
  "Cyber-Footprint Tracer AI": "/cyber-footprint-tracer-ai-agent",
  "Deepfake Audio Detector": "/deepfake-audio-detector-agent",
  "Threat Letter Authorship AI": "/threat-letter-authorship-ai-agent",
  "Handwriting Analysis Assistant": "/handwriting-analysis-assistant-agent",
  "Sketch-to-Mugshot AI": "/sketch-to-mugshot-ai-agent",
  "Criminal Nickname Resolver": "/criminal-nickname-resolver-agent",
  "Call Data Record (CDR) Summarizer": "/call-data-record-cdr-summarizer-agent",
  "GPS Ping Triangulation AI": "/gps-ping-triangulation-ai-agent",
  "Drone Footage Analyst AI": "/drone-footage-analyst-ai-agent",
  "Victim Vulnerability Scorer": "/victim-vulnerability-scorer-agent",
  "Parole Violation Predictor": "/parole-violation-predictor-agent",
  "Jailhouse Informant Credibility AI": "/jailhouse-informant-credibility-ai-agent",
  "Evidence Chain-of-Custody Auditor": "/evidence-chain-of-custody-auditor-agent",
  "Post-Mortem Report Interpreter": "/post-mortem-report-interpreter-agent",
  "DNA Match Probability Calculator": "/dna-match-probability-calculator-agent",
  "Surveillance Video Summarizer": "/surveillance-video-summarizer-agent",
  "Social Media Confession Scraper": "/social-media-confession-scraper-agent",
  "Dark Web Credential Searcher": "/dark-web-credential-searcher-agent",
  "Legal Loophole Flagging AI": "/legal-loophole-flagging-ai-agent",
  "Judge Sentencing Trend Analyzer": "/judge-sentencing-trend-analyzer-agent",
  "Warrant Application Drafter": "/warrant-application-drafter-agent",
  "Virtual Jury Bias Modeler": "/virtual-jury-bias-modeler-agent"
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

const InvestigationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI INVESTIGATION ASSISTANT
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI INVESTIGATION ASSISTANT</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in automated case profiling, fir drafting & legal precedent matching.
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
            <h1 className="cyber-title">AI INVESTIGATION <span>ASSISTANT</span></h1>
            <p className="cyber-subtitle">Automated Case Profiling, FIR Drafting & Legal Precedent Matching</p>
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

export default InvestigationDetailed;
