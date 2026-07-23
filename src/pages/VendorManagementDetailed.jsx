import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, Building, FileCheck
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "GeM Vendor Sync Bot", "Blacklist Validator AI", "SLA Penalty Calculator",
  "Contract Expiry Alerter", "Supplier Risk Modeler AI", "Vendor KYC Biometric AI",
  "Smart Contract Auto-Payer", "Invoice Discrepancy Finder", "Fake Vendor Detector AI",
  "Ammunition Supplier AI", "Vehicle Fleet Vendor Bot", "IT Hardware Supplier Sync",
  "Cloud Hosting Vendor AI", "Forensic Consumables AI", "Uniform Supplier Bot",
  "Catering & Mess Vendor AI", "Vendor Satisfaction Scorer", "Cartel Bidding Detector",
  "Geospatial Vendor Locator", "MSME Quota Funder Bot", "Start-up Vendor Qualifier",
  "Vendor Dispute Resolution AI", "Bank Guarantee Tracker AI", "EMD (Earnest Money) Refund Bot",
  "Vendor Taxation (TDS/GST) AI", "Price Benchmarking AI", "Sub-contractor Audit AI",
  "Vendor Background Check Bot", "Vendor History Timeline AI", "Local vs Global Sourcing AI",
  "Raw Material Inflation AI", "Vendor Insolvency Predictor", "Supply Chain Disruption AI",
  "Quality Assurance (QC) Bot", "Defective Batch Tracker", "Warranty Auto-Claim AI",
  "Vendor Onboarding Chatbot", "Supplier Diversity Analyzer", "Green Procurement Vendor AI",
  "EV Tech Supplier Sync", "Drone Tech Vendor AI", "Cyber Security Vendor Audit",
  "Riot Gear Supplier AI", "K9 Unit Nutrition Vendor AI", "Medical Supply Vendor Bot",
  "Pharmacy Supply Sync AI", "Hospital Equipment Vendor", "Construction Contractor AI",
  "Housing Board Vendor Bot", "Telecom Infrastructure Vendor", "Radio Comms Supplier AI",
  "Vendor Rating Engine", "Smart City Tech Vendor Sync", "CCTV Equipment Supplier",
  "Towing & Crane Vendor AI", "Scrap Buyer Verification AI", "Auction Bidder KYC Bot",
  "Escrow Account Sync AI", "Blockchain Vendor Hashing", "Zero-Trust Vendor Login AI"
];

const financeModules = [
  {
    title: "Vendor Onboarding & KYC",
    icon: <Users size={20} />,
    items: ["Biometric KYC Verification", "Background History Checks", "Bank Guarantee Tracking", "GeM Profile Sync"]
  },
  {
    title: "Performance & SLA",
    icon: <Activity size={20} />,
    items: ["SLA Penalty Automation", "Quality Assurance QC", "Warranty Tracking", "Defective Batch Alerts"]
  },
  {
    title: "Risk & Compliance",
    icon: <ShieldAlert size={20} />,
    items: ["Insolvency Prediction", "Taxation (GST/TDS) Sync", "Cartel Detection", "Blacklist Monitoring"]
  },
  {
    title: "Contracts & Payments",
    icon: <FileCheck size={20} />,
    items: ["Smart Contract Auto-Pay", "Invoice Discrepancy Finder", "EMD Refunds", "Escrow Account Sync"]
  },
  {
    title: "Specialized Sourcing",
    icon: <Building size={20} />,
    items: ["Ammunition Suppliers", "IT & Cloud Vendors", "Construction Contractors", "Medical Supply Bots"]
  }
];

const aiFeatures = [
  "AI Deep-Scan Background Checks on Vendors", "AI Cartel Ring Identification across State Tenders", "AI Smart Contract Milestone Payments",
  "AI Automated EMD (Earnest Money) Refunds", "AI Predictive Insolvency Warnings for Mega-Contractors", "AI Defective Batch Auto-Return"
];

const databases = [
  "Master_Vendor_Registry", "SLA_Performance_Index", "Blacklisted_Entities_DB", "GeM_Sync_Logs", 
  "Bank_Guarantee_Vault", "Invoice_Matching_Ledger", "Defective_Goods_Tracker", "Taxation_Compliance_DB"
];

const dashboards = [
  "Live Vendor Performance Board", "SLA Penalty & Deduction Tracker", "Pending Invoice Clearances", 
  "Vendor Risk & Blacklist Map", "EMD Refund Status Board", "GeM Quota Fulfillment"
];

const apis = [
  "GeM Portal Webhooks", "MCA (Ministry of Corporate Affairs) Sync", "GST & Taxation APIs", 
  "Banking Guarantee Verification", "Smart Contract Oracle Sync", "Vigilance DB Sync"
];

const reports = [
  "Monthly Vendor Scorecard", "SLA Breach & Penalty Log", "Vendor Diversity (MSME/Startups)", 
  "Insolvency Risk Assessment", "Blacklisted Vendor Audit", "Pending Warranty Claims"
];

const security = [
  "Zero-Trust Vendor Portals", "Immutable Blockchain Ratings", "Biometric Director Verification", 
  "Escrow Account Segregation", "Anti-Money Laundering Scans", "Encrypted Smart Contracts"
];

const futureScope = [
  "Autonomous Global Supplier Discovery", "IoT-linked Delivery Verification", "DeFi Vendor Escrow Payments",
  "AI Vendor Strike/Union Warning", "Quantum-Protected Vendor Bids", "Predictive Geopolitics Sourcing AI"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Vendor Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Vendor Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Vendor Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const VendorManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Users className="inline-icon" size={28} /> AI Vendor Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Vendor Management</strong> is the ultimate lifecycle tracking system for all state police suppliers. From ammunition manufacturers to IT cloud providers, the AI conducts rigorous background checks, evaluates real-time performance against SLAs, auto-calculates delay penalties, and strictly enforces GeM quotas.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#3b82f6" /> Risk & Blacklist Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Syncs with the Ministry of Corporate Affairs and Vigilance databases to immediately flag or blacklist vendors involved in frauds or cartels.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> SLA Penalty Auto-Execution</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors delivery timelines directly from the warehouse MRN. If a vendor is late, the AI automatically calculates the SLA penalty and deducts it from the payout.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#f59e0b" /> Bank Guarantee Automation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks Performance Bank Guarantees (PBG) and Earnest Money Deposits (EMD), automatically issuing refunds to losing bidders exactly on time.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Building className="inline-icon" color="#ef4444" /> Smart Contract Integration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Connects vendor invoices with Escrow accounts, paying the supplier only when strict IoT and visual AI quality checks are passed at the police arsenal.</p>
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
            {financeModules.map((mod, i) => (
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
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Databases & Storage</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> System APIs</h3>
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
                <h3 style={{ color: '#f59e0b', marginBottom: '1.5rem' }}><LayoutDashboard className="inline-icon" /> Live Dashboards</h3>
                <ul>
                  {dashboards.map((dash, i) => (
                    <li key={i}><CheckCircle size={16} color="#f59e0b" /> {dash}</li>
                  ))}
                </ul>
              </div>
              <div className="report-list">
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Automated Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Security Protocols</h3>
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
            <Users size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI VENDOR <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">SLA Enforcements, Cartel Detection & Smart Contract Escrows</p>
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

export default VendorManagementDetailed;
