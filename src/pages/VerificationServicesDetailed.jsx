import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, Key, Briefcase
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Tenant Verifier AI", "Domestic Help Scrutiny Bot", "Employee Vetting AI", 
  "Passport Clearance Bot", "Vendor Background Bot", "Contractor Risk Assessor", 
  "Student Cert Validator", "Forgery Detection AI", "Cross-State Sync Bot",
  "Biometric Matcher AI", "Criminal Record Scraper", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const verificationModules = [
  {
    title: "Tenant & Domestic Help",
    icon: <Users size={20} />,
    items: ["Aadhar/UIDAI API Sync", "Automated Criminal Record Check", "Digital Verification Certificate", "Landlord Reminder Alerts"]
  },
  {
    title: "Passport Clearance Workflow",
    icon: <Shield size={20} />,
    items: ["mPassport Seva Integration", "Geo-tagged Police Verification", "Automated Pendency Escalation", "Citizen Update SMS/WhatsApp"]
  },
  {
    title: "Employee & Security Guard",
    icon: <Briefcase size={20} />,
    items: ["Corporate Bulk Uploads", "Private Security Agency Sync", "Cross-state Offense Check", "Digital KYC Validation"]
  },
  {
    title: "Vendor & Contractor Vetting",
    icon: <Key size={20} />,
    items: ["Financial Fraud History Check", "Government Blacklist Sync", "Automated Character Certificate", "Biometric Signature Storage"]
  },
  {
    title: "Student & Character Cert",
    icon: <FileText size={20} />,
    items: ["University Database Sync", "Automated NOC Generation", "AI Document Forgery Detection", "QR-Coded E-Certificates"]
  }
];

const aiFeatures = [
  "AI Face Matching for Passport Verification", "AI Automated Extraction of UIDAI Data", "AI Multi-state Criminal Record Scraping",
  "AI Risk Scoring for Security Guard Applicants", "AI Tamper Detection on Uploaded ID Proofs", "AI Chatbot for Citizen Queries",
  "AI Deepfake Detection for Video KYC", "AI Verification Pendency Prediction"
];

const databases = [
  "Tenant_Verification_Lake", "Passport_Clearance_Ledger", "Criminal_History_DB", "Bulk_Employee_Uploads", "Vendor_Blacklist_Index", 
  "Character_Cert_Archive", "Biometric_Signatures", "Forged_Document_Logs", "Citizen_Interaction_DB"
];

const dashboards = [
  "Passport Clearance SLA Tracker", "Tenant Verification Heatmap", "Bulk Employee Vetting Queue", 
  "Forgery Attempt Radar", "Citizen Satisfaction Index", "Inter-State Criminal Hits"
];

const apis = [
  "UIDAI (Aadhar) Authentication Gateway", "MEA (mPassport Seva) API", "CCTNS Inter-state Gateway", "DigiLocker Integration",
  "SMS/WhatsApp Push Notification API", "Banking KYC Gateways"
];

const reports = [
  "Passport Turnaround Time (TAT) Report", "Monthly Verification Success Rate", "Top Forgery Detection Incidents", 
  "Private Security Compliance", "Revenue from Verification Fees", "Citizen Grievance Resolution"
];

const security = [
  "Strict PII (Personally Identifiable Info) Masking", "End-to-End Encryption for UIDAI Sync", "Blockchain Verified Certificates", 
  "Audit Log of Every Officer Query", "Time-Expiring View Links for Corporates", 
  "Biometric Login for Verification Officers", "Rate Limiting on Bulk API Access", "Automated Malware Scans on Uploads"
];

const futureScope = [
  "Instant 1-Second AI Verification", "Blockchain Decentralized Identity Wallets", "Fully Automated Drone Address Verification",
  "Global Interpol Sync for Expats", "Voice Biometric Authentication", "Predictive Behavioral Profiling"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Vetting Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Verification Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Clearance Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const VerificationServicesDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Key className="inline-icon" size={28} /> AI Tenant & Verification Services
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Verification Services</strong> is a high-speed digital clearance engine. Using AI document parsing and deep CCTNS integration, it brings down the turnaround time for Passport, Tenant, and Employee verifications from weeks to mere hours, ensuring public safety without bureaucratic delays.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#3b82f6" /> Tenant & Domestic Help</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Citizens can upload details of new tenants or maids via a mobile app. The AI instantly checks the ID against national crime databases and issues a digital verification certificate.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#10b981" /> Passport Clearance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Integrates with mPassport Seva. Investigating officers use a geo-tagged app at the applicant's address. AI facial recognition matches the applicant to the passport photo to prevent fraud.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Briefcase className="inline-icon" color="#f59e0b" /> Employee Bulk Vetting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Corporates and Private Security Agencies can upload Excel files of 1000+ employees. The AI batch-processes background checks overnight, red-flagging individuals with criminal histories.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#ef4444" /> Digital Character Certs</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automates the issuance of Character Certificates for students and vendors. Certificates feature a cryptographic QR code that universities or employers can scan to verify authenticity instantly.</p>
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
            {verificationModules.map((mod, i) => (
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
            <Key size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">VERIFICATION <span>SERVICES</span></h1>
            <p className="cyber-subtitle">Tenant Vetting, Passport Clearance & Background Checks</p>
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

export default VerificationServicesDetailed;
