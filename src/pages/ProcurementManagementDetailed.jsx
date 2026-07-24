import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, ShoppingCart, Box, FileCheck
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "GeM Portal Integration AI", "L1 Vendor Selection Bot", "Reverse Auction AI",
  "Tender Drafting AI", "RFP Analyzer Bot", "Bid Evaluation Matrix AI",
  "Supplier Risk Assessor", "Vendor Blacklist Monitor", "Cartel Bidding Detector",
  "Procurement Price Benchmarker", "Purchase Order Generator AI", "Invoice Matching Bot",
  "GST & Tax Compliance AI", "Smart Contract Disburser", "Procurement Audit Trail AI",
  "Ammunition Sourcing Expert", "Riot Gear Procurement Bot", "Vehicle Fleet Buyer AI",
  "Drone Fleet Purchaser AI", "IT Hardware Sourcing AI", "Software License Buyer Bot",
  "Cloud Server Procurement AI", "CCTV & Surveillance Buyer", "Forensic Lab Equipment AI",
  "K9 Unit Sourcing Bot", "Uniform & Kit Procurement AI", "Winter Gear Purchaser Bot",
  "Bulletproof Jacket Sourcing", "Helmet Procurement AI", "Weaponry Import Sync AI",
  "Customs Clearance Tracking AI", "Federal Import Tax Bot", "Capital Equipment Depreciation",
  "Inventory Replenishment AI", "Just-in-Time Sourcing Bot", "Bulk Order Discount Analyzer",
  "Regional Sourcing Optimizer", "Contract Renewal Alerter", "Penalty Clause Auto-Enforcer",
  "Vendor Performance Scorer", "Quality Check (QC) Audit Bot", "Defective Goods Return AI",
  "Warranty Expiry Tracker", "Service Level Agreement (SLA) AI", "Logistics & Shipping Tracker",
  "Warehouse Delivery Validator", "Material Receipt Note (MRN) AI", "Fake Supplier Detector",
  "MSME Quota Funder AI", "Startup Tech Procurement Bot", "Green Procurement AI",
  "EV Fleet Sourcing Bot", "Solar Equipment Purchaser", "Emergency Procurement Bot",
  "Disaster Relief Goods Buyer", "Election Material Sourcing AI", "VIP Security Tech Buyer",
  "Counter-Terrorism Sourcing AI", "Strategic Defense Buyer Bot", "Global Weaponry Monitor AI"
];

const financeModules = [
  {
    title: "Tendering & Bidding",
    icon: <FileText size={20} />,
    items: ["RFP Drafting", "L1 Vendor Evaluation", "GeM Portal Sync", "Cartel Detection"]
  },
  {
    title: "Tactical Sourcing",
    icon: <ShieldAlert size={20} />,
    items: ["Ammunition & Weapons", "Riot Gear", "Bulletproof Vests", "Surveillance Tech"]
  },
  {
    title: "Order & Invoice Sync",
    icon: <ShoppingCart size={20} />,
    items: ["PO Generation", "Invoice Matching", "Smart Contract Payouts", "GST Validation"]
  },
  {
    title: "Vendor & Contract Mgmt",
    icon: <Activity size={20} />,
    items: ["Vendor Scoring", "SLA Enforcement", "Penalty Auto-Calculation", "Warranty Tracking"]
  },
  {
    title: "Logistics & Inventory",
    icon: <Box size={20} />,
    items: ["MRN Verification", "Warehouse Delivery", "Defective Returns", "Just-in-Time Replenishment"]
  }
];

const aiFeatures = [
  "AI Cartel & Syndicate Bidding Detection", "AI Real-time Price Benchmarking (vs Amazon/GeM)", "AI Automated L1 Vendor Scoring",
  "AI Warranty Expiry Prediction", "AI Smart Contract Payment Escrow", "AI Defective Goods Return Automation"
];

const databases = [
  "Tender_RFP_Vault", "GeM_Vendor_Registry", "Purchase_Orders_Ledger", "Invoice_Matching_DB", 
  "Tactical_Inventory_Logs", "SLA_Penalty_Ledger", "Blacklisted_Vendors", "Warranty_Expiry_Tracker"
];

const dashboards = [
  "Live Tender Bidding Board", "GeM Portal Procurement Sync", "Vendor Performance Scorer", 
  "Pending PO & Invoice Payment", "Tactical Goods Delivery Tracker", "Warranty & SLA Monitor"
];

const apis = [
  "GeM (Govt e-Marketplace) APIs", "Customs & Excise Duty Sync", "Vendor Bank Payment Gateways", 
  "GST & Taxation Webhooks", "Logistics & Shipping Tracking", "State Treasury CapEx APIs"
];

const reports = [
  "Monthly Procurement Spend", "L1 Vendor Savings Analysis", "Vendor Penalty Deduction Log", 
  "Tactical Sourcing Timeline", "Warranty & SLA Breach Report", "GeM Quota Compliance Audit"
];

const security = [
  "Zero-Trust Vendor Onboarding", "Encrypted RFP Evaluation", "Blockchain Tender Audit Trail", 
  "Multi-Sig Purchase Approvals", "Anti-Bribery Sentiment AI", "Vendor KYC Biometrics"
];

const futureScope = [
  "Autonomous Emergency Replenishment", "Global Defense Pricing Hedging", "AI Drone Warehouse QC Scanning",
  "Smart Contract SLA Penalties", "Decentralized Vendor Verification", "Predictive Material Shortage Alerter"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Procurement Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Procurement Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Purchasing Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ProcurementManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShoppingCart className="inline-icon" size={28} /> AI Procurement Management
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Procurement Management</strong> brings corporate-level efficiency and zero-tolerance transparency to police purchasing. It interfaces directly with GeM, auto-evaluates L1 bidders, detects vendor cartelization, and uses Smart Contracts to release payments only when goods pass AI-driven quality checks.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#3b82f6" /> Tender Cartel Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes historical bidding data across the state to detect if a syndicate of vendors is artificially inflating prices for police tenders.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShoppingCart className="inline-icon" color="#10b981" /> GeM L1 Automation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Directly integrates with the Government e-Marketplace (GeM) to instantly find the lowest (L1) compliant bidder for everything from stationery to riot gear.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> SLA Penalty Auto-Deduction</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a vendor delivers ammunition 10 days late or fails to maintain CCTNS servers, the AI automatically calculates and deducts the SLA penalty from their invoice.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Box className="inline-icon" color="#ef4444" /> Smart Contract Escrow</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Funds are locked in a digital escrow and only released to the vendor when the Material Receipt Note (MRN) is digitally signed by the warehouse quartermaster.</p>
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
            <ShoppingCart size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI PROCUREMENT <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">GeM Integration, Cartel Detection & Smart Escrow Payouts</p>
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

export default ProcurementManagementDetailed;
