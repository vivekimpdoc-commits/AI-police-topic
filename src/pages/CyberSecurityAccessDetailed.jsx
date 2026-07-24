import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Lock, Key, Fingerprint
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Zero-Trust Architecture Enforcer AI", "CCTNS Role-Based Access AI", "Biometric Terminal Login AI",
  "Phishing Attack Simulator Bot", "Ransomware Behavior Alerter", "DDoS Mitigation Tracker AI",
  "Rogue USB/Drive Detector AI", "Unauthorized IP Geofencing AI", "Police Intranet Proxy Firewall AI",
  "Data Exfiltration (Leak) Detector", "Malware Sandbox Analyzer", "Dark Web Credential Leak Scanner",
  "Multi-Factor Authentication (MFA) AI", "Suspended Officer Revocation AI", "Retired Personnel Access Wiper",
  "Inter-State Database Key Exchange AI", "Decentralized Identity Vault AI", "API Rate Limiting Guard AI",
  "Email Spoofing/DMARC Enforcer", "Encrypted Case Diary Cloud Sync", "Malkhana (Evidence) Blockchain Auditor",
  "Forensic Lab Network Isolation AI", "Cyber Cell Deep-Web Access VPN AI", "Wireless Radio Comm Encryption AI",
  "CCTV Network Hijack Detector", "Drone Telemetry Encryption AI", "Body-Cam Footage Tamper Alert",
  "GPS Tracking Spoofer Detector", "Officer Social Media Phishing AI", "VIP Itinerary Encryption AI",
  "Election Control Room Cyber Guard", "Dial 112 Dispatch Server Defender", "Biometric Database (AFIS) Security",
  "Arms License Portal Intrusion AI", "Passport Verification Portal Guard", "RTI Portal DoS Protector AI",
  "Insider Threat Behavioral Profiler", "Midnight Mass-Download Alerter", "SQL Injection Protection AI",
  "Cross-Site Scripting (XSS) Shield", "Police Email Server Defender", "Wi-Fi Rogue Access Point Hunter",
  "Mobile Device Management (MDM) AI", "Lost/Stolen Police Tablet Wiper", "Secure Messaging (Chat) Audit AI",
  "Video Conferencing (Court) Shield", "Cyber Threat Intelligence Feeder", "Interpol Notice Gateway Security",
  "MHA Intelligence Sharing Firewall", "State Secretariat VPN Tunnel AI", "Financial Fraud DB Encryption AI",
  "Cryptocurrency Seizure Wallet Guard", "Cyber Forensics Tool Sandbox", "Third-Party Vendor Access Auditor",
  "Traffic Camera Network Firewall", "E-Challan Payment Gateway Shield", "Police Recruitment Portal Guard",
  "Admit Card Leak Prevention AI", "OMR Grading System Isolation AI", "Cyber Security Training Scorer"
];

const modules = [
  {
    title: "Access & Identity (IAM)",
    icon: <Fingerprint size={20} />,
    items: ["Biometric Terminals", "MFA Enforcement", "Suspended Officer Wipes", "Role-Based CCTNS"]
  },
  {
    title: "Threat & Intrusion",
    icon: <ShieldAlert size={20} />,
    items: ["Ransomware Alerts", "DDoS Mitigation", "Malware Sandboxing", "SQL Injection Shields"]
  },
  {
    title: "Data Leak & Insider Threats",
    icon: <Lock size={20} />,
    items: ["Data Exfiltration Detectors", "Rogue USB Hunters", "Insider Threat Profiling", "Midnight Download Alerts"]
  },
  {
    title: "Network & Hardware Security",
    icon: <Network size={20} />,
    items: ["Intranet Proxies", "Rogue Wi-Fi Hunters", "CCTV Hijack Detectors", "Mobile Device Wiper (MDM)"]
  },
  {
    title: "Encrypted Operations",
    icon: <Key size={20} />,
    items: ["Case Diary Cloud Sync", "Blockchain Evidence", "VIP Itinerary Encryption", "Crypto Wallet Guards"]
  }
];

const aiFeatures = [
  "Zero-Trust Architecture for Police Intranet", "Behavioral Profiling for Insider Threat Detection", "Automated Device Wipe for Lost Police Tablets",
  "Deep-Web Scanning for Leaked Police Credentials", "Blockchain-Verified Tamper Alerts for Body Cams", "Real-time AI Sandboxing of Suspicious Files"
];

const databases = [
  "Zero_Trust_Access_Ledger", "Cyber_Threat_Intel_Feeds", "MDM_Device_Registry", "Biometric_Auth_Vault", 
  "Intrusion_Detection_Logs", "Encrypted_VIP_Itineraries", "CCTNS_Audit_Trails", "Blockchain_Evidence_Ledger"
];

const dashboards = [
  "State-wide Cyber Threat Map", "Active Intrusion Alerts", "Insider Threat Heatmap", 
  "CCTNS Access & Authentication", "Rogue Device & Wi-Fi Alerts", "Network DDoS Mitigation"
];

const apis = [
  "CERT-In Threat Intelligence Sync", "Interpol Cyber Gateway", "MHA Intelligence Tunnels", 
  "Cloud Provider (AWS/Azure) WAF", "Biometric Identity Providers", "MDM Vendor Webhooks"
];

const reports = [
  "Monthly Cyber Penetration Test", "Unauthorized Access Attempts", "Insider Threat Flag Audit", 
  "Data Exfiltration Risk Report", "Phishing Simulation Success Rates", "Recruitment Portal Uptime & Security"
];

const security = [
  "Strict Zero-Trust Enforcement", "Hardware Security Modules (HSM)", "Air-Gapped Forensic Labs", 
  "Military-Grade Radio Encryption", "Quantum-Safe Key Exchanges", "Ephemeral Access Tokens"
];

const futureScope = [
  "Quantum Computing Cryptography", "AI-Driven Autonomous Counter-Hacking", "Decentralized Mesh Networks for Patrols",
  "Neuromorphic Chips for Instant Threat Detection", "Holographic Cyber Command Centers", "Predictive Global Cyber Warfare Modeling"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Cyber Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Security Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'SOC Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CyberSecurityAccessDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Shield className="inline-icon" size={28} /> Cyber Security & Access AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Cyber Security & Access AI</strong> is the digital fortress protecting police data. Implementing strict Zero-Trust architecture, it prevents ransomware, mitigates DDoS attacks, and uses behavioral profiling to stop insider threats. It guarantees that sensitive CCTNS data, VIP itineraries, and forensic evidence remain impenetrable.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Fingerprint className="inline-icon" color="#3b82f6" /> Zero-Trust Access</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Enforces multi-factor biometric authentication for CCTNS logins. Automatically revokes network access the moment an officer is suspended or retires.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Lock className="inline-icon" color="#10b981" /> Insider Threat Profiling</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes user behavior to detect anomalies, such as a constable attempting a midnight mass-download of sensitive case diaries or inserting a rogue USB drive.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Intrusion & Ransomware</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Actively sandboxes suspicious files and shields police recruitment portals, Dial 112 servers, and e-Challan gateways from DDoS and SQL injection attacks.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Key className="inline-icon" color="#ef4444" /> Encryption & Hardware</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Secures IoT endpoints, detecting CCTV hijacks and encrypting drone telemetry. Uses MDM to remotely wipe lost or stolen police tablets instantly.</p>
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
            {modules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  {mod.icon}
                  <h3>{mod.title}</h3>
                </div>
                <div className="module-tags">
                  {mod.items.map((item, j) => (
                    <span key={j} className="tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="features-grid">
            {aiFeatures.map((feature, i) => (
              <div key={i} className="premium-feature-card">
                <Cpu className="feature-icon" color="#06b6d4" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="architecture-panel premium-module-panel">
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Data Ledgers</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> Integration APIs</h3>
            <div className="tags-container">
              {apis.map((api, i) => <span key={i} className="cyber-tag highlight-green">{api}</span>)}
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="reports-panel premium-module-panel">
            <div className="split-section">
              <div className="report-list">
                <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" /> SOC Dashboards</h3>
                <ul>
                  {dashboards.map((dash, i) => (
                    <li key={i}><CheckCircle size={16} color="#f59e0b" /> {dash}</li>
                  ))}
                </ul>
              </div>
              <div className="report-list">
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Audit Reports</h3>
                <ul>
                  {reports.map((rep, i) => (
                    <li key={i}><FileText size={16} color="#3b82f6" /> {rep}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="security-panel premium-module-panel">
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Infrastructure Defenses</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {security.map((sec, i) => <span key={i} className="cyber-tag highlight-red">{sec}</span>)}
            </div>
            
            <h3 style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}><Rocket className="inline-icon" /> Future Roadmap</h3>
            <div className="tags-container">
              {futureScope.map((scope, i) => <span key={i} className="cyber-tag highlight-purple">{scope}</span>)}
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
            <Shield size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">CYBER SECURITY & <span>ACCESS AI</span></h1>
            <p className="cyber-subtitle">Zero-Trust CCTNS, Insider Threat Flags & MDM Control</p>
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
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default CyberSecurityAccessDetailed;
