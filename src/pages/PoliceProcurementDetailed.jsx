import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, ShoppingCart, Target
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Tender Evaluator AI", "Vendor Risk Profiler", "Stock Replenishment Bot", 
  "Price Anomaly Detector", "Contract Expiry Tracker", "Budget Optimizer AI", 
  "Logistics Router AI", "Quality Check AI", "Procurement KPI Monitor",
  "Fraud Ring Detector", "Inventory Decay Predictor", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const procurementModules = [
  {
    title: "Tender & Requisition",
    icon: <ShoppingCart size={20} />,
    items: ["AI Tender Document Parsing", "Automated Requisition Approval", "Global Price Benchmarking", "Bidder Background Check"]
  },
  {
    title: "Inventory & Replenishment",
    icon: <Database size={20} />,
    items: ["Predictive Ammo Restocking", "Uniform & Gear Sizing DB", "Perishable Stock Decay Alerts", "Barcode/RFID Goods Receipt"]
  },
  {
    title: "Vendor Management",
    icon: <Target size={20} />,
    items: ["Vendor Risk Scoring", "Automated SLA Tracking", "Blacklist Syndicate Detection", "Digital Payment Sync"]
  },
  {
    title: "Contracts & Audits",
    icon: <FileText size={20} />,
    items: ["Smart Contract Auto-renewals", "Procurement Budget Consumption", "Zero-Trust Financial Audits", "Digital Signature Workflows"]
  }
];

const aiFeatures = [
  "AI Detection of Cartel Bidding in Tenders", "AI Predictive Forecasting for Riot Gear based on Election Calendars", "AI Optical Character Recognition (OCR) for Invoice Processing",
  "AI Optimization of Delivery Routes for Station Supplies", "AI Sentiment Analysis of Vendor Communications", "AI Matching of Technical Specs in Bids",
  "AI Automated Flagging of Abnormal Price Variations", "AI Budget Depletion Prediction"
];

const databases = [
  "Tender_Submissions_Lake", "Vendor_Master_Index", "Inventory_Stock_Ledger", "Rate_Contract_DB", "Procurement_Budget_Matrix", 
  "Goods_Receipt_Archive", "Blacklisted_Entities", "Supplier_SLA_Logs"
];

const dashboards = [
  "Live Tender Evaluation", "Inventory Depletion Radar", "Vendor Risk Heatmap", 
  "Budget Consumption Rate", "Procurement Bottlenecks", "Logistics Delivery ETA"
];

const apis = [
  "GeM (Government e-Marketplace) Portal", "State Treasury (IFMS) Sync", "GSTN (Vendor Tax Validation)", "Bank Payment Gateways",
  "Logistics Carrier Tracking APIs", "Digital Signature Gateway (eMudra)"
];

const reports = [
  "Quarterly Procurement Spend", "Tender Competitiveness Analysis", "Vendor Performance (SLA)", 
  "Inventory Shelf-life Audit", "Cartel/Fraud Detection Report", "Rate Contract Savings"
];

const security = [
  "Double-Blind Bid Encryption", "Blockchain Immutable Audit Trails for Tenders", "Strict Role-Based Access for Approvals", 
  "Maker-Checker Financial Controls", "Digital Watermarking on RFPs", 
  "Data Masking during Technical Eval", "Hardware Security Modules (HSM)", "AI Anomaly Detection in Payments"
];

const futureScope = [
  "Smart Contracts executing auto-payments on GPS Delivery", "Drone Delivery of Emergency Ammo/Medical Supplies", "Predictive 3D Printing of Spare Parts",
  "Global AI Supply Chain Risk Monitoring", "Virtual Reality Warehouse Management", "Quantum Cryptography for Secret Tenders"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Procurement Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Logistics Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Audit Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceProcurementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShoppingCart className="inline-icon" size={28} /> AI Police Procurement & Logistics
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Police Procurement</strong> transforms the complex logistics of arming and equipping a massive state police force. AI ensures zero corruption in tenders, predicts inventory shortages before they happen, and integrates directly with the Government e-Marketplace (GeM).
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShoppingCart className="inline-icon" color="#3b82f6" /> Smart Tendering</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI parses hundreds of bid documents in seconds, matching technical specifications and flagging cartel-like bidding patterns to ensure the lowest price and highest quality.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#10b981" /> Predictive Replenishment</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Predicts when a police line will run out of ammunition, tear gas, or vehicle fuel based on historical usage and upcoming events (e.g., elections), triggering auto-restock alerts.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#f59e0b" /> Vendor Risk Scoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically cross-references vendors against GST portals and criminal databases to prevent blacklisted entities or shell companies from winning sensitive police contracts.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Budget Optimization</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks the burn rate of the department's annual procurement budget in real-time. AI recommends delaying or expediting non-critical purchases to maximize fiscal efficiency.</p>
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
            {procurementModules.map((mod, i) => (
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
            <ShoppingCart size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">POLICE <span>PROCUREMENT</span></h1>
            <p className="cyber-subtitle">Smart Tendering, Predictive Logistics & Vendor AI</p>
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

export default PoliceProcurementDetailed;
