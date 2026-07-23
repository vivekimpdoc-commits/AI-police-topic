import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, IndianRupee, TrendingUp
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "E-Challan Revenue AI", "Traffic Fine Recovery Bot", "Passport Fee Collection AI",
  "Arms License Fee Tracker", "Event Security Billing AI", "IPL Match Police Billing",
  "VIP Convoy Cost Recovery AI", "Toll Fee Police Share Bot", "Foreigner Registration Fee AI",
  "Character Certificate Fee Bot", "Govt Department Guard Billing", "Bank Cash Escort Billing AI",
  "Film Shooting Security Fee", "Drone License Registration", "Cyber Forensics Service Fee",
  "Towing & Crane Charge Recovery", "Impounded Vehicle Auction AI", "Abandoned Asset Liquidation",
  "Scrap Material Auction Bot", "Old Vehicle Fleet Auction AI", "Online Payment Gateway AI",
  "UPI Transaction Validator", "Bounced Cheque Alert Bot", "Revenue Reconciliation AI",
  "Treasury Deposit Sync Bot", "Daily Cash Collection AI", "Fake Receipt Detector",
  "Revenue Deficit Predictor", "Zone-wise Collection Analyzer", "Pending Fine Follow-up AI",
  "Traffic Court Settlement AI", "Lok Adalat Fine Recovery Bot", "Defaulter SMS Reminder AI",
  "Commercial Vehicle Tax Sync", "Inter-State Border Tax Sync", "Excise Department Penalty Sync",
  "Mining Mafia Penalty Recovery", "Illegal Sand Mining Fine AI", "Overloaded Truck Fine Bot",
  "Public Event Permission Fee", "Loudspeaker License Fee", "Hotel/Bar License NOC Fee",
  "Private Detective License Fee", "Security Agency NOC Fee", "Police Clearance Cert (PCC) Fee",
  "RTI Application Fee Tracker", "Court Summons Delivery Fee", "Non-Bailable Warrant Fee Recovery",
  "Absconder Property Attachment", "Seized Asset Interest AI", "Fixed Deposit Tracker AI",
  "Police Welfare Fund Interest", "Dividend & ROI Predictor", "Sponsorship & CSR Revenue AI",
  "Police Band Booking Fee AI", "Police Ground Rental Fee", "Police Guest House Billing",
  "Canteen Sales Revenue Bot", "Gas Station (Police Owned) AI", "Hospital Pharmacy Revenue AI"
];

const financeModules = [
  {
    title: "Traffic & Penalties",
    icon: <TrendingUp size={20} />,
    items: ["E-Challan Collections", "Towing Fees", "Court Settlements", "Lok Adalat Recoveries"]
  },
  {
    title: "Licensing & NOC Fees",
    icon: <FileText size={20} />,
    items: ["Passport Verifications", "Arms Licenses", "Security Agency NOCs", "PCC Fees"]
  },
  {
    title: "Commercial Security Services",
    icon: <ShieldAlert size={20} />,
    items: ["IPL/Event Security", "Bank Cash Escorts", "Film Shooting Protection", "Govt Guard Billing"]
  },
  {
    title: "Auctions & Liquidation",
    icon: <Activity size={20} />,
    items: ["Impounded Vehicles", "Scrap Materials", "Property Attachment", "Old Fleet Auction"]
  },
  {
    title: "Welfare & Commercial Ops",
    icon: <Landmark size={20} />,
    items: ["Police Canteens", "Guest House Rentals", "Police Gas Stations", "Band Bookings"]
  }
];

const aiFeatures = [
  "AI Auto-Billing for Commercial Security", "AI Predictive Fine Defaulter Identification", "AI Real-time Treasury Reconciliation",
  "AI Bounced Cheque & Fake Receipt Detection", "AI E-Challan to Court Settlement Sync", "AI Auction Price Optimization for Seized Assets"
];

const databases = [
  "E_Challan_Ledger", "Commercial_Security_Billing", "License_NOC_Fees_DB", "Treasury_Deposit_Logs", 
  "Auction_Liquidation_Vault", "Welfare_Commercial_Sales", "Defaulter_Blacklist", "Payment_Gateway_Sync"
];

const dashboards = [
  "Live State-wide Revenue Heatmap", "Traffic Fine Collection Board", "Commercial Billing & Recovery", 
  "Daily Treasury Deposit Status", "Auction & Liquidation Tracker", "Pending Dues & Defaulters"
];

const apis = [
  "State Treasury Receipt APIs", "UPI / Bank Payment Gateways", "Vahan / RTO Sync APIs", 
  "Passport Seva Webhooks", "Court e-Filing Sync", "Auction Portal Gateways"
];

const reports = [
  "Daily Revenue Collection Report", "Monthly E-Challan Recovery", "Commercial Security Dues", 
  "Auction Profitability Analysis", "License & NOC Fee Log", "Treasury Reconciliation Audit"
];

const security = [
  "Zero-Cash Digital Mandate", "Encrypted Payment Gateways", "Blockchain Revenue Logs", 
  "Anti-Embezzlement AI", "Multi-Sig Auction Approvals", "Automated Refund Security"
];

const futureScope = [
  "Autonomous Crypto-Asset Seizure Liquidation", "AI Dynamic Fine Adjustment", "Smart Contract Commercial Billing",
  "Decentralized E-Challan Ledgers", "Real-time CBDC (e-Rupee) Integration", "Drone-based Event Security Billing"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Revenue Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Revenue Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Collection Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const RevenueManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <IndianRupee className="inline-icon" size={28} /> AI Revenue Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Revenue Management</strong> centralizes and secures all incoming funds to the police department. From traffic e-challans and passport verification fees to commercial billings for IPL security, the AI ensures 100% recovery, eliminates cash leakage, and auto-reconciles daily collections directly with the State Treasury.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingUp className="inline-icon" color="#3b82f6" /> Traffic & Penalty Recovery</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks millions of e-challans, sends automated SMS reminders to defaulters, and syncs unresolved fines directly with Lok Adalats and traffic courts.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Commercial Guard Billing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically generates and follows up on invoices for police deployments at private events, film shoots, IPL matches, and bank cash escorts.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Treasury Auto-Reconciliation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Eliminates manual accounting errors by mapping every online UPI/Card payment and bank deposit directly to the respective treasury head of account in real-time.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Landmark className="inline-icon" color="#ef4444" /> Auctions & Asset Liquidation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Manages the transparent auctioning of abandoned vehicles, seized sand/minerals, and scrap materials, predicting the optimal reserve price using AI.</p>
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
            <IndianRupee size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI REVENUE <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">E-Challans, Commercial Billing & Treasury Reconciliation</p>
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

export default RevenueManagementDetailed;
