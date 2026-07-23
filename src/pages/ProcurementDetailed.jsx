import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  Briefcase, Calendar, Calculator, Target, BookOpen, Heart,
  Smartphone, HardDrive, Bell, CheckCircle, ShieldAlert,
  ShoppingCart, Package, Truck, Box, PieChart
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Procurement Planning AI", "Vendor Management AI", "Tender Analysis AI", 
  "Vendor Scoring AI", "Bid Evaluation AI", "Inventory Forecasting AI", 
  "Supply Chain Optimization AI", "Price Benchmarking AI", "Cost Optimization AI", 
  "Armoury Procurement Expert AI", "Vehicle Sourcing Expert AI", "Legal Compliance Bot AI", 
  "Contract Risk Assessor AI", "Procurement Fraud Detection AI", "Procurement Analytics AI", 
  "Executive Procurement Dashboard AI", "AI Procurement Copilot", "Asset Lifecycle Management AI", 
  "Quality Control AI"
];

const procurementModules = [
  {
    title: "E-Tendering & Bidding",
    icon: <ShoppingCart size={20} />,
    items: ["RFP/RFQ Generation", "Automated Tender Floating", "Bid Evaluation", "E-Auction Management", "Vendor Shortlisting"]
  },
  {
    title: "Weapon & Ammo Sourcing",
    icon: <Target size={20} />,
    items: ["Firearms Procurement", "Ammunition Re-stocking", "Riot Gear Sourcing", "Import Compliance", "Quality Assurance"]
  },
  {
    title: "Uniform & Kit Procurement",
    icon: <Package size={20} />,
    items: ["Winter/Summer Uniforms", "Boots & Belts", "Protective Gear", "Size & Inventory Matching", "Bulk Ordering"]
  },
  {
    title: "Vehicle & Fleet Sourcing",
    icon: <Truck size={20} />,
    items: ["PCR Van Purchases", "Two-Wheeler Procurement", "Armored Vehicle Specs", "Maintenance Contracts (AMC)"]
  },
  {
    title: "Tech & IT Hardware",
    icon: <Cpu size={20} />,
    items: ["Computers & Servers", "Radio & Walkie-Talkies", "Body Cameras", "CCTV Infrastructure", "Software Licenses"]
  },
  {
    title: "Vendor Management",
    icon: <Users size={20} />,
    items: ["Vendor Registration", "Performance Scoring", "Blacklisting Workflow", "Contract Renewals"]
  },
  {
    title: "Warehouse & Logistics",
    icon: <Box size={20} />,
    items: ["Central Store Management", "District Dispatching", "Inventory Tracking", "Stock Audits"]
  }
];

const aiFeatures = [
  "AI Tender Document Generator", "AI Bid Price Anomaly Detection", "AI Vendor Reliability Score",
  "AI Cartelization Detector (Bid Rigging)", "AI Inventory Depletion Forecaster", "AI Automated Reorder Alerts",
  "AI Contract Clause Analyzer", "AI Supplier Risk Prediction", "AI Invoice Matching & OCR",
  "AI Predictive Supply Chain Delays", "AI Procurement Policy Chatbot"
];

const databases = [
  "Tenders", "Bids", "Vendors", "Contracts", "PurchaseOrders", "Invoices", 
  "Inventory", "Warehouses", "Weapons", "Vehicles", "Uniforms", "ITAssets", 
  "Logistics", "Inspections", "AuditTrails", "Approvals"
];

const dashboards = [
  "Procurement Command Dashboard", "Live Tender Status Board", "Vendor Performance Dashboard", 
  "Central Store Inventory Dashboard", "Budget vs Expenditure Board", "Supply Chain Tracking Map"
];

const apis = [
  "GeM (Gov E-Marketplace) Sync APIs", "Vendor Portal APIs", "E-Tendering Gateway APIs", "Logistics Tracking APIs",
  "Banking Payment APIs", "Inventory Sync APIs", "Quality Inspection APIs", "AI Vendor Scoring APIs"
];

const reports = [
  "Annual Procurement Plan", "Tender Evaluation Report", "Vendor Scorecard Report", 
  "Stock Depletion Report", "Asset Lifecycle Report", "Cartelization Risk Report", 
  "Budget Utilization Report", "Audit & Compliance Report"
];

const security = [
  "Zero-Trust Procurement Network", "Gov-Grade JWT Authentication", "Multi-signature Tender Approval", 
  "Blockchain Bid Immutability", "End-to-End Encryption (AES-256)", 
  "Vendor KYC Compliance", "Anti-Fraud Audit Trails", "Secure E-Bidding Vaults"
];

const futureScope = [
  "Drone-based Warehouse Audits", "Smart Contracts for Vendor Payments", "AI Automated Quality Control",
  "Global Supplier Market Scraping", "Real-time Predictive Inflation Adjustment", "IoT Asset Tracking via RFID"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Procurement AI Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Procurement Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Procurement Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ProcurementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShoppingCart className="inline-icon" size={28} /> AI Procurement & Supply Chain
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Police Procurement</strong> is a next-generation smart supply chain platform that digitizes the entire lifecycle of acquiring weapons, vehicles, uniforms, and IT assets. It leverages AI to ensure transparency in e-tendering, prevent cartelization, and optimize inventory across all police districts.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileText className="inline-icon" color="#3b82f6" /> Smart E-Tendering</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI automates the creation of RFPs and tender documents, evaluates incoming bids, and scores vendors based on historical performance and compliance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Cartelization Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Machine learning algorithms analyze bidding patterns across multiple vendors to detect price rigging, collusion, or fraudulent syndicates instantly.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Box className="inline-icon" color="#10b981" /> Predictive Inventory</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI predicts when central stores will run out of critical supplies (like ammunition or tear gas) and automatically triggers re-order workflows.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Truck className="inline-icon" color="#f59e0b" /> Transparent Logistics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>End-to-end digital tracking of assets from the central warehouse down to individual police stations and officers.</p>
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
            <h1 className="cyber-title">AI PROCUREMENT <span>PLATFORM</span></h1>
            <p className="cyber-subtitle">Next-Generation Smart Sourcing & Supply Chain powered by AI</p>
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

export default ProcurementDetailed;
