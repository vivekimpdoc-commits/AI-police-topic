import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, GlobeLock, Bitcoin, ServerCrash
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Dark Web Scraper AI", "Cryptocurrency Tracker Bot", "Phishing Link Analyzer", 
  "Malware Sandbox Evaluator", "OSINT Data Miner", "Social Media Impersonation Detector", 
  "Ransomware Negotiator AI", "IP Traceback Agent", "Financial Fraud Interceptor",
  "Deepfake Video Auditor", "Cyber Attack Forensics Bot", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const cyberModules = [
  {
    title: "Dark Web Monitoring",
    icon: <GlobeLock size={20} />,
    items: ["Stolen Data Dump Alerts", "Illegal Arms/Drugs Marketplace Scrape", "Hacker Forum Translation", "Threat Actor Profiling"]
  },
  {
    title: "Crypto & Financial Tracking",
    icon: <Bitcoin size={20} />,
    items: ["Blockchain Wallet Tracing", "Ransomware Payment Flow", "Mixer/Tumbler De-anonymization", "UPI/Bank Fraud Freeze Intercepts"]
  },
  {
    title: "Phishing & Malware Analysis",
    icon: <ServerCrash size={20} />,
    items: ["Automated URL Sandboxing", "APK Decompilation & Scan", "Zero-day Exploit Detection", "Mass SMS Phishing Blocks"]
  },
  {
    title: "OSINT & Social Media",
    icon: <Network size={20} />,
    items: ["Fake Profile Takedowns", "Radical Propaganda Flagging", "Impersonation (Catfishing) Detection", "Keyword Trend Analysis"]
  },
  {
    title: "Cyber Forensics Lab",
    icon: <Activity size={20} />,
    items: ["Deepfake Audio/Video Detection", "Steganography Extraction", "Deleted Data Recovery AI", "IoT Device Forensic Imaging"]
  }
];

const aiFeatures = [
  "AI Heuristic Malware Analysis", "AI Blockchain Ledger Graphing", "AI Multilingual Dark Web NLP",
  "AI Computer Vision for Deepfakes", "AI Real-time URL Reputation Scoring", "AI Behavioral Biometrics",
  "AI Automated Abuse Desk Escalation", "AI Synthetic Identity Detection"
];

const databases = [
  "Dark_Web_Index", "Known_Phishing_URLs", "Crypto_Wallet_Blacklist", "Cyber_Fraud_FIRs", "Malware_Signatures_Vault", 
  "Deepfake_Signatures", "OSINT_Dossiers", "Stolen_Credentials_DB", "UPI_Fraud_Accounts", "Botnet_IP_Ranges"
];

const dashboards = [
  "Live Global Cyber Threat Map", "Crypto Seizure & Tracing Graph", "Dark Web Alert Stream", 
  "Social Media Takedown Status", "Financial Fraud Real-time Ticker", "Forensic Lab Processing Queue"
];

const apis = [
  "I4C (Indian Cyber Crime Coordination) APIs", "NPCI UPI Freeze APIs", "Binance/WazirX Law Enforcement APIs", "VirusTotal / MISP Sync",
  "Twitter/Meta Law Enforcement Portals", "Tor Exit Node Tracking APIs", "CERT-In Threat Feeds"
];

const reports = [
  "Monthly Cyber Fraud Loss/Recovery", "Top Trending Phishing Campaigns", "Dark Web Intel Briefing", 
  "Deepfake Origin Analysis", "Ransomware Threat Landscape", "Social Media Radicalization Trends"
];

const security = [
  "Air-Gapped Forensic Environments", "Military-Grade AES-256 Encryption", "Strict Chain of Custody Hashing", 
  "Anti-Reverse Engineering Protections", "Honeypot Decoy Servers", 
  "Zero-Trust Network Architecture", "Hardware MFA (FIDO2)", "Automated Log Auditing"
];

const futureScope = [
  "Autonomous Counter-Hack Back Systems", "Quantum Resistant Decryption", "AI-driven Zero-Day Patching",
  "Metaverse Crime Forensics", "Neural Implant Hacking Defense", "Global Decentralized Cyber-Interpol"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Cyber AI Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Cyber Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Threat Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CyberCrimeDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <GlobeLock className="inline-icon" size={28} /> AI Cyber Crime & Digital Forensics
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Cyber Crime Management</strong> is the ultimate defense against digital threats. From tracing illicit cryptocurrency transactions and monitoring dark web arms bazaars, to detecting deepfakes and instantly freezing fraudulent UPI transfers, this module protects citizens in cyberspace.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Bitcoin className="inline-icon" color="#3b82f6" /> Crypto & Financial Tracing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses blockchain analytics to trace ransomware payments and drug purchases through complex tumblers, unmasking the real-world identities of hackers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><GlobeLock className="inline-icon" color="#10b981" /> Dark Web Intelligence</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Autonomous AI scrapers patrol the Tor network 24/7, translating hacker forums and raising alerts if stolen citizen data or government credentials are put up for sale.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ServerCrash className="inline-icon" color="#f59e0b" /> Malware & Deepfake Forensics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Upload suspicious audio/video or APKs. The AI instantly detects AI-generated voice clones (Deepfakes) or reverse-engineers malware to find the attacker's Command & Control server.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> OSINT & Social Media</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Open Source Intelligence (OSINT) bots scan public social media to detect radical propaganda, coordinate fake-profile takedowns, and track cyber-bullying rings.</p>
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
            {cyberModules.map((mod, i) => (
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
            <GlobeLock size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI CYBER <span>CRIME</span></h1>
            <p className="cyber-subtitle">Dark Web Scrapping, Crypto Tracing & Digital Forensics</p>
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

export default CyberCrimeDetailed;
