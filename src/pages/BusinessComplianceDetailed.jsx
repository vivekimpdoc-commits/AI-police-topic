import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Briefcase, Key
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Pawn Shop Scraper", "Scrap Dealer Auditor", "Stolen Goods Matcher", 
  "Bank Security Profiler", "ATM Compliance Bot", "Cash Van Router AI", 
  "Warehouse Safety Analyst", "Critical Infra Guard", "Business NOC Bot",
  "Threat Intelligence Bot", "Forgery Detector AI"
];

const businessModules = [
  {
    title: "Second-Hand Goods & Pawn Shops",
    icon: <Briefcase size={20} />,
    items: ["Stolen Mobile IMEI Sync", "Jewellery Pawn Alerts", "Scrap Dealer Inventory Scraping", "Automated Suspension"]
  },
  {
    title: "Bank & ATM Security",
    icon: <ShieldAlert size={20} />,
    items: ["ATM Guard Compliance", "Hidden Camera Detection Audits", "Cash Van Route Tracking", "Panic Button Testing Logs"]
  },
  {
    title: "Critical Infrastructure",
    icon: <Activity size={20} />,
    items: ["Power Grid Security Audit", "Fuel Depot Fire Readiness", "Water Treatment Plant Access Logs", "Drone No-Fly Zone Fencing"]
  },
  {
    title: "Private Security Agencies",
    icon: <Key size={20} />,
    items: ["PSARA License Tracking", "Guard Antecedent Sync", "Armory Verification", "Digital NOC Processing"]
  }
];

const aiFeatures = [
  "AI Pattern Matching for Stolen Jewellery", "AI Automated Extraction of IMEI from Pawn Registers", "AI Optimal Routing for Cash Transit Vans",
  "AI Computer Vision to check ATM Guard Sleepiness", "AI Risk Profiling of Scrap Dealers", "AI Vulnerability Scanning of Critical Infra",
  "AI Predictive Maintenance of Bank Panic Buttons", "AI Document Forgery Detection for PSARA"
];

const databases = [
  "Pawn_Shop_Registers", "Stolen_Goods_Index", "Bank_Security_Audits", "Cash_Van_GPS_Logs", "Critical_Infra_Blueprints", 
  "PSARA_License_Ledger", "Scrap_Dealer_Inventory", "ATM_Compliance_Scores"
];

const dashboards = [
  "Stolen Goods Recovery Radar", "ATM Vulnerability Heatmap", "Cash Van Transit Security", 
  "Critical Infra Threat Level", "Business Compliance Score", "PSARA Agency Pendency"
];

const apis = [
  "CEIR (Stolen Mobile IMEI) Gateway", "RBI Bank Security Portal Sync", "Private Security Agency Portal", "Smart City Camera Grids",
  "Aadhar/UIDAI (Guard Verification)", "Telecom KYC APIs"
];

const reports = [
  "Monthly Stolen Goods Recovery", "Bank & ATM Security Audit", "Cash Transit Incident Log", 
  "Critical Infrastructure Vulnerability", "Scrap Dealer Compliance", "Private Security Agency ROI"
];

const security = [
  "Strict RBAC for Critical Infra Blueprints", "End-to-End Encrypted Cash Van GPS", "Zero-Knowledge Proofs for Pawn Shop Data", 
  "Blockchain Audit of Seized Goods", "Watermarked PDF Audit Reports", 
  "Biometric Login for Inspecting Officers", "Air-Gapped Vaults for Security Data", "DDoS Protection on NOC Portals"
];

const futureScope = [
  "AI Drone Inspections of Scrap Yards", "Blockchain-based Digital Receipts for Second-Hand Goods", "Predictive Sabotage Modeling for Power Grids",
  "Autonomous Robotic Guards for ATMs", "Smart Vault Sensors linked directly to Police HQ", "AI Voice Stress Analysis for Guard Vetting"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Compliance Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Business Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const BusinessComplianceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Briefcase className="inline-icon" size={28} /> AI Licensing & Business Compliance
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Business Compliance</strong> is the digital auditor for the city's commercial and critical infrastructure. It uses AI to cross-reference pawn shop inventories against stolen goods databases, audits ATM security, and tracks the movement of multi-million dollar cash transit vans.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Briefcase className="inline-icon" color="#3b82f6" /> Second-Hand Goods</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Pawn shops and scrap dealers digitize their daily intake. AI instantly cross-checks IMEIs and jewellery descriptions against police FIR databases to automatically flag stolen property.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Bank & Cash Transit</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automates the auditing of ATM security (cameras, panic buttons). Cash Transit Vans are GPS-tracked, and AI generates unpredictable routes to thwart planned robberies.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Critical Infrastructure</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Maintains security blueprints for power grids, fuel depots, and water plants. AI audits physical access logs and ensures fire and safety compliances are strictly met to prevent sabotage.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Key className="inline-icon" color="#ef4444" /> Private Security Agencies</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors PSARA license compliance. AI automatically vets the criminal antecedents of thousands of private security guards before they are deployed to sensitive commercial venues.</p>
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
            {businessModules.map((mod, i) => (
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
            <Briefcase size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">BUSINESS <span>COMPLIANCE</span></h1>
            <p className="cyber-subtitle">Pawn Shop Sync, ATM Security & Critical Infra Audits</p>
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

export default BusinessComplianceDetailed;
