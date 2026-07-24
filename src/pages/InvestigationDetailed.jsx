import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Users, Search, BookOpen, Scale
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

const investigationModules = [
  {
    title: "AI FIR Drafting",
    icon: <FileText size={20} />,
    items: ["Voice-to-FIR Dictation", "Automatic IPC/BNS Section Mapping", "Keyword Extraction", "Multi-lingual FIR Translation"]
  },
  {
    title: "Case Summarization",
    icon: <BookOpen size={20} />,
    items: ["10,000-page Charge-sheet NLP Summary", "Timeline Reconstruction", "Entity Extraction (Suspects/Victims)", "Contradiction Detection"]
  },
  {
    title: "Legal & Court Intel",
    icon: <Scale size={20} />,
    items: ["Historical Supreme Court Precedents", "Bail Rejection Probability", "Judge Sentencing Analytics", "Prosecution Strategy Prompts"]
  },
  {
    title: "Evidence Correlation",
    icon: <Search size={20} />,
    items: ["Modus Operandi (MO) Clustering", "Forensic Lab Report Parser", "Weapon Ballistics Matching", "Digital Evidence Timestamps"]
  },
  {
    title: "Interrogation Analysis",
    icon: <Activity size={20} />,
    items: ["Micro-Expression Analysis (CCTV)", "Voice Stress Analysis", "Statement Contradiction Flagging", "Lie Detection Metrics"]
  }
];

const aiFeatures = [
  "AI Natural Language Generation (NLG) for FIRs", "AI Semantic Search across Case Files", "AI Legal Code Recommendation Engine",
  "AI Audio Transcription & Translation", "AI Temporal Graphing of Events", "AI Automated Evidence Tagging",
  "AI Predictive Case Solvability Scoring", "AI Emotion/Stress Classification", "AI Witness Sentiment Analysis"
];

const databases = [
  "FIR_Transcripts", "IPC_BNS_Codes", "SupremeCourt_Precedents", "Charge_Sheets", "Witness_Statements", 
  "Interrogation_Audio", "Evidence_Logs", "Cold_Case_Vault", "Forensic_Matches", "Bail_Records"
];

const dashboards = [
  "Investigating Officer (IO) Workspace", "Active Case Timeline View", "Legal Precedent Search Board", 
  "Evidence Correlation Matrix", "Pending Charge-sheet Tracker", "Court Hearing Schedule"
];

const apis = [
  "e-Courts Integration APIs", "CCTNS FIR Sync APIs", "Forensic Science Lab APIs", "National Crime Records (NCRB) APIs",
  "Legal Database (Manupatra/SCC) APIs", "Speech-to-Text (Bhashini) APIs", "Digital Forensics Tool APIs"
];

const reports = [
  "Automated Case Summary Brief", "Pre-Trial Prosecution Readiness", "Interrogation Insights Report", 
  "Cold Case Re-open Probability", "Evidence Chain of Custody Audit", "Officer Case Clearance Rates"
];

const security = [
  "Case File Watermarking", "Investigator Fingerprint Auth", "Evidence Hashing (SHA-256)", 
  "Redaction of Victim Identities", "Strict IO Assignment Control", 
  "Immutable FIR Edits", "Zero-Trust Legal Access", "Court-Approved Audit Trails"
];

const futureScope = [
  "Holographic Crime Scene Recreation", "Autonomous Robo-Lawyer Counter-Arguments", "Brainwave Interrogation Sync",
  "Global Interpol Legal Matching", "Quantum-Safe Case Vaults", "Predictive Jury/Judge Bias Modeling"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Investigation Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Case Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'IO Dashboards', icon: <PieChart size={18} /> },
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
              <Search className="inline-icon" size={28} /> AI Investigation Assistant
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Investigation Assistant</strong> is designed to be the ultimate digital partner for Investigating Officers (IOs). It drastically reduces paperwork by auto-drafting FIRs from voice dictation, suggesting the exact legal IPC/BNS sections to apply, and summarizing massive 10,000-page charge-sheets into readable timelines in seconds.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#3b82f6" /> Smart FIR Drafting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>An officer dictates the victim's statement in Hindi/English. The AI translates it, formats it into a legal FIR, and auto-suggests applicable penal codes based on the keywords (e.g., "knife" + "wallet" = Armed Robbery).</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><BookOpen className="inline-icon" color="#10b981" /> Charge-sheet Summarization</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of spending weeks reading old files, the AI reads thousands of pages of testimonies and forensic reports, instantly generating a chronological timeline of the crime.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Scale className="inline-icon" color="#f59e0b" /> Legal & Precedent Matching</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Before filing the charge-sheet in court, the AI scans historical Supreme Court judgments to find identical past cases, helping the prosecution build a watertight argument.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Interrogation Insights</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>During interrogations, the AI runs voice stress analysis on the suspect's audio and flags exactly which statements contradict the forensic timeline.</p>
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
            {investigationModules.map((mod, i) => (
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
            <Search size={40} color="#06b6d4" />
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
