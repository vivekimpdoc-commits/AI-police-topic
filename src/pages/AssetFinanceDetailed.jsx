import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Truck, Home
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Asset Depreciation Predictor", "Fleet Capital Analyzer AI", "Real Estate Valuation Bot",
  "Armory Asset Valuator AI", "Drone Fleet ROI Analyzer", "Data Center CapEx Tracker",
  "Hardware Lifespan Predictor", "Software License Capital AI", "Scrap Value Estimator Bot",
  "Station Renovation ROI AI", "Insurance Claim Assessor AI", "Asset Write-off Approver Bot",
  "Land Encroachment Cost AI", "Property Lease Yield Bot", "Guest House Revenue Analyzer",
  "Canteen Asset Valuation AI", "Police Hospital CapEx Bot", "Training Academy Asset AI",
  "Marine Fleet Depreciation", "Aviation/Helicopter CapEx AI", "K9 Unit Lifecycle Cost AI",
  "Mounted Police Asset Tracker", "Forensic Lab Equipment ROI", "Cyber Cell Tech Valuation",
  "Weaponry Amortization AI", "Radio Comms Infra Valuator", "Telecom Tower Asset Bot",
  "Smart City CCTV ROI AI", "E-Challan Machine CapEx Bot", "Traffic Signal Infra Valuator",
  "Disaster Equipment Asset AI", "SDRF Boat Fleet CapEx AI", "Medical Equipment Valuator",
  "Pharmacy Inventory Asset Bot", "Housing Board Asset Analyzer", "Quarters Maintenance CapEx",
  "Sports Complex Asset AI", "Fitness Gear Depreciation Bot", "Band Instrument Value AI",
  "Riot Gear Lifecycle AI", "Bulletproof Vest Expiry Bot", "Body-Cam Hardware ROI AI",
  "Taser Equipment Asset AI", "Undercover Fleet Valuator", "VIP Convoy CapEx AI",
  "Election Asset Deployment AI", "Cloud Storage CapEx Bot", "AI Server Farm Valuator",
  "Green Energy Solar ROI AI", "EV Fleet Battery Lifespan AI", "Charging Station Asset Bot",
  "Zero-Carbon Infra Valuator", "Asset Theft Prediction AI", "Missing Inventory Valuator",
  "Barcode/RFID Asset Sync Bot", "Warehouse Goods Valuation", "Surplus Asset Sweeper AI",
  "Liquidation Value Forecaster", "Global Hardware Price Sync", "Blockchain Asset Tokenizer"
];

const financeModules = [
  {
    title: "Depreciation & Lifespan",
    icon: <TrendingDown size={20} />,
    items: ["Fleet Depreciation", "Hardware Lifespan", "Armory Amortization", "Riot Gear Expiry"]
  },
  {
    title: "Capital Return (ROI)",
    icon: <PieChart size={20} />,
    items: ["Drone Fleet ROI", "Smart City CCTV Yield", "Solar Energy ROI", "Cyber Lab Investments"]
  },
  {
    title: "Real Estate & Housing",
    icon: <Home size={20} />,
    items: ["Police Station Valuation", "Quarters Maintenance", "Lease Yield Analysis", "Land Encroachment Loss"]
  },
  {
    title: "Insurance & Liquidation",
    icon: <ShieldAlert size={20} />,
    items: ["Insurance Claim Assessor", "Scrap Value Estimator", "Asset Write-offs", "Liquidation Forecasting"]
  },
  {
    title: "Specialized Assets",
    icon: <Activity size={20} />,
    items: ["Aviation/Helicopters", "Marine Patrol Boats", "Forensic Lab Tech", "K9 & Mounted Units"]
  }
];

const aiFeatures = [
  "AI Fleet Depreciation & Battery Lifespan Predictor", "AI Automated Asset Write-off Recommendations", "AI Drone & CCTV ROI Analytics",
  "AI Scrap & Liquidation Value Forecasting", "AI Blockchain Tokenization of High-Value Assets", "AI Real Estate Encroachment Costing"
];

const databases = [
  "Master_Asset_Ledger", "Depreciation_Logs", "Real_Estate_Valuation_DB", "Fleet_Lifespan_Tracker", 
  "Insurance_Claims_Vault", "Scrap_Liquidation_DB", "CapEx_ROI_Index", "RFID_Inventory_Sync"
];

const dashboards = [
  "State-wide Asset Valuation Map", "Fleet & Hardware Depreciation", "CapEx ROI Performance", 
  "Insurance Claims & Write-offs", "Scrap & Auction Pipeline", "Real Estate & Housing Yield"
];

const apis = [
  "RFID / Barcode Inventory Sync", "State Land & Revenue APIs", "Insurance Provider Webhooks", 
  "Market Scrap Valuation APIs", "RTO Vehicle Valuation Sync", "Blockchain Token Ledgers"
];

const reports = [
  "Annual Asset Depreciation Report", "Mega-Project ROI Summary", "Pending Insurance Claims", 
  "Asset Write-off & Liquidation", "Real Estate Maintenance Audit", "Green Energy Capital Yield"
];

const security = [
  "Immutable Asset Registration", "Zero-Trust Write-off Approvals", "RFID Geo-fencing Alerts", 
  "Blockchain Asset Hashing", "Role-Based Valuation Editing", "Encrypted Insurance Data"
];

const futureScope = [
  "Autonomous Drone Asset Scanning", "DeFi Collateralization of State Assets", "Predictive Obsolescence Alerts",
  "Digital Twin Asset Simulators", "Smart Contract Auto-Insurance Claims", "Global Defense Tech Valuations"
];

// Helper icon component for Rendering
function TrendingDown({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
      <polyline points="16 17 22 17 22 11"></polyline>
    </svg>
  );
}


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Asset Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Asset Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Valuation Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const AssetFinanceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Landmark className="inline-icon" size={28} /> AI Asset Finance & Valuation
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Asset Finance</strong> provides enterprise-level capital management for billions of dollars in state police assets. It tracks the real-time depreciation of vehicle fleets, calculates the ROI of smart city camera networks, handles insurance claims, and predicts the exact scrap value of obsolete tactical gear.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingDown size={20} className="inline-icon" color="#3b82f6" /> Dynamic Depreciation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Moves away from flat-rate depreciation. The AI calculates asset value drops based on real-world usage data, like kilometers driven or drone flight hours.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><PieChart className="inline-icon" color="#10b981" /> Tech Investment ROI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Quantifies the financial return on modern investments, proving whether replacing petrol SUVs with EV fleets is generating the forecasted savings.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Auto-Insurance & Claims</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>When a police vehicle crashes, the AI interfaces directly with insurance provider APIs to instantly draft the claim and calculate the expected payout.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Scrap & Write-off Prediction</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes global metal and hardware markets to advise exactly when obsolete equipment (like old servers or seized vehicles) should be auctioned for maximum return.</p>
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
            <Landmark size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI ASSET <span>FINANCE</span></h1>
            <p className="cyber-subtitle">Dynamic Depreciation, Hardware ROI & Real Estate Valuation</p>
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

export default AssetFinanceDetailed;
