import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Scissors, Zap, ShoppingCart
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Fleet Fuel Optimizer AI", "Electricity Tarff Optimizer", "Telecom Spend Reducer AI",
  "Cloud Server Auto-Scaler", "Stationery Bulk Buyer AI", "Ammunition Bulk Discount Bot",
  "Vehicle Repair Cost Negotiator", "Hardware Refurbishment AI", "Scrap Recovery Optimizer",
  "Manpower Overtime Reducer", "Travel TA/DA Optimizer AI", "VIP Logistics Spend Slicer",
  "Election Deployment Optimizer", "Riot Gear Procurement Slicer", "Drug Seizure Storage AI",
  "Medical Pharmacy Bulk Buyer", "Hospital Supply Optimizer", "Training Academy Food Cost AI",
  "K9 Diet Cost Optimizer", "Mounted Police Vet Cost AI", "Software License Consolidator",
  "Redundant DB Storage Slicer", "CCTV Storage Auto-Archive", "Evidence Vault Cloud Optimizer",
  "Water Harvesting Savings AI", "Solar Grid Savings Calculator", "EV Fleet Charging Optimizer",
  "Zero-Carbon Savings Modeler", "Weapon Maintenance Optimizer", "Undercover Fleet Leaser AI",
  "Contractor Escrow Optimizer", "Tender L1 Price Benchmarker", "GeM Wholesale Purchaser AI",
  "Inter-State Tax Optimizer AI", "Insurance Premium Negotiator", "Pension Fund ROI Optimizer",
  "SS Fund Leakage Reducer", "Informant ROI Analyzer Bot", "Auction Price Maximizer AI",
  "Fine Recovery Cost Optimizer", "Legal Cell Fee Negotiator", "Bail Bond Recovery Slicer",
  "Event Security Margin Optimizer", "Band Booking Revenue Optimizer", "Guest House Cost Reducer",
  "Canteen Supply Chain Optimizer", "Traffic Toll Exemption AI", "Aviation Fuel Optimizer AI",
  "Drone Fleet Repair Optimizer", "Marine Patrol Fuel Slicer", "Smart City Tech Bulk AI",
  "Building Maintenance Slicer", "Police Quarters Upkeep AI", "Hardware Depreciation Delay AI",
  "SLA Penalty Recovery Optimizer", "Vendor Delay Cost Slicer", "Logistics & Shipping Optimizer",
  "Warehouse Storage Cost AI", "Forensic Chemical Bulk AI", "Cyber Tool Subscription AI"
];

const financeModules = [
  {
    title: "Operational Efficiency",
    icon: <Zap size={20} />,
    items: ["Fuel Routing Optimization", "Electricity Grid Savings", "Telecom Expense Slicing", "Travel TA/DA Cuts"]
  },
  {
    title: "Procurement & IT",
    icon: <Database size={20} />,
    items: ["Software License Consolidation", "Cloud Auto-Scaling", "GeM Wholesale Discounts", "Hardware Refurbishment"]
  },
  {
    title: "Green Tech & Fleet",
    icon: <Rocket size={20} />,
    items: ["Solar Grid Savings", "EV Charging Optimization", "Water Harvesting Yield", "Aviation/Drone Fuel Cuts"]
  },
  {
    title: "Welfare & Commercial",
    icon: <Landmark size={20} />,
    items: ["Canteen Supply Chain", "K9/Horse Diet Costing", "Pharmacy Bulk Buying", "Guest House Cost Reductions"]
  },
  {
    title: "Legal & Insurance",
    icon: <ShieldAlert size={20} />,
    items: ["Insurance Premium Negotiation", "Advocate Fee Slicing", "SLA Penalty Recovery", "Pension ROI Yields"]
  }
];

const aiFeatures = [
  "AI Cloud & Data Center Storage De-duplication", "AI Bulk Procurement Margin Negotiator", "AI Smart Grid Energy Optimization",
  "AI Fleet Route vs Fuel Analytics", "AI Software License Usage Monitoring (To drop unused seats)", "AI Scrap vs Refurbish Decision Engine"
];

const databases = [
  "Cost_Optimization_Ledger", "Cloud_Billing_Telemetry", "Fleet_Fuel_Analytics_DB", "Green_Energy_Yield_Logs", 
  "Vendor_Discount_Vault", "Telecom_Usage_DB", "Pharmacy_Supply_Chain", "SLA_Penalty_Recovery_DB"
];

const dashboards = [
  "Live State-wide Cost Slicer", "IT & Cloud Optimization Board", "Fuel & Energy Savings Map", 
  "Procurement Discount Yields", "Green Tech ROI Tracker", "Legal & Insurance Cuts"
];

const apis = [
  "AWS/Azure Billing Sync", "State Power Grid Webhooks", "GeM Wholesale Discount API", 
  "Insurance Broker Gateways", "Telecom Provider Usage API", "Vehicle Telemetry (GPS/Fuel)"
];

const reports = [
  "Monthly Cost Slicing Yield", "Cloud & IT Expense Audit", "Fuel Efficiency vs Savings", 
  "Green Energy Financial Yield", "Vendor Wholesale Discount Log", "Unused Software License Report"
];

const security = [
  "Role-Based Optimization Targets", "Encrypted Cloud Billing Data", "Anti-Tamper Savings Logs", 
  "Immutable ROI Hashing", "Zero-Trust Vendor Negotiations", "Biometric Savings Approval"
];

const futureScope = [
  "Autonomous Cloud Server Bidding", "AI Auto-switch of Telecom Providers", "IoT Smart Building Power Control",
  "Decentralized Energy Grids", "Real-time Commodity Hedging", "Quantum Logistics Routing"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Optimization Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Cost Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Savings Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const CostOptimizationDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Scissors className="inline-icon" size={28} /> AI Cost Optimization
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Cost Optimization</strong> actively slices departmental bloat without reducing operational capability. It auto-scales cloud servers, cancels unused software licenses, optimizes patrol routes to slash fuel bills, and bulk-negotiates with GeM vendors to stretch the state budget further.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Zap className="inline-icon" color="#3b82f6" /> Fuel & Utilities Slicing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses GPS telemetry to redesign patrol routes for maximum fuel efficiency, and integrates with smart meters to auto-shut down unused ACs/lights in massive police HQs.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#10b981" /> IT & Cloud Auto-Scaling</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors CCTNS server usage and automatically scales down cloud bandwidth during non-peak hours, while cancelling software licenses (like Office365) assigned to retired officers.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShoppingCart className="inline-icon" color="#f59e0b" /> Bulk Procurement Margin</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of individual stations buying A4 paper, the AI consolidates state-wide demand and triggers a reverse-auction on GeM for massive wholesale discounts.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Fleet Refurbish vs Scrap</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Runs a financial algorithm on every damaged vehicle, calculating whether it's mathematically cheaper to refurbish the engine or immediately auction it for scrap.</p>
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
            <Scissors size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI COST <span>OPTIMIZATION</span></h1>
            <p className="cyber-subtitle">Cloud Scaling, Fuel Slicing & Bulk GeM Margin Algorithms</p>
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

export default CostOptimizationDetailed;
