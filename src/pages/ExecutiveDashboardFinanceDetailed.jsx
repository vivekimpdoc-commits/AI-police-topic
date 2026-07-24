import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Globe, Maximize, TrendingUp
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "DGP Master Finance Synthesizer", "State-wide Burn Rate Monitor", "Real-Time Liquidity Alerter",
  "Treasury Fund Status AI", "Mega-Project CapEx Visualizer", "Payroll Disbursal Tracker",
  "Pension Liability Visualizer", "E-Challan Revenue Mapper", "Commercial Billing Dashboard AI",
  "Central Grant Utilization Tracker", "Nirbhaya Fund Heatmap", "CSR Sponsorship Dashboard",
  "Vendor Default Risk Mapper", "Fuel & Utilities Burn Board", "Election Budget Bleed Viewer",
  "Smart City ROI Dashboard", "Drone & Fleet Asset Visualizer", "Hardware Lifecycle Heatmap",
  "Scrap & Liquidation Status AI", "Audit Discrepancy Alert Board", "CVC Guideline Breach Viewer",
  "Taxation Remittance Status AI", "SS Fund Encrypted Viewer", "Seized Asset Value Board",
  "Narcotics Vault Value Tracker", "Bail Bond Forfeiture Visualizer", "Lok Adalat Settlement Board",
  "Court Mandated Payout Tracker", "Medical Claim Fraud Dashboard", "TA/DA Travel Expense Mapper",
  "Zone-wise Expenditure Compare", "District-wise Revenue Compare", "Predictive Deficit Heatmap",
  "Macro-Economic Inflation Board", "GeM Vendor Quota Compliance", "MSME Vendor Spend Visualizer",
  "Green Energy Savings Board", "EV Fleet ROI Visualizer", "Carbon Footprint Financials",
  "Aviation Fuel Expense Board", "Marine Fleet Logistics Viewer", "Cyber Security CapEx Monitor",
  "Data Center Cloud Billing AI", "Software License Usage Heatmap", "Building Maintenance Spend AI",
  "Quarters Repair Cost Viewer", "Hospital Supply Chain Board", "Training Academy Spend Tracker",
  "K9 & Mounted Unit Dashboard", "Armory Ammo Value Board", "Riot Gear Lifecycle Visualizer",
  "Emergency Disaster Fund Board", "Flood Relief Ops Tracker", "VIP Security Logistics Cost",
  "Event (IPL/Fest) Profitability", "Police Welfare Society Board", "Canteen/Mess P&L Dashboard",
  "Guest House Revenue Viewer", "Blockchain Audit Trail Viewer", "Global Defense Pricing Radar"
];

const financeModules = [
  {
    title: "Macro Financial Health",
    icon: <Globe size={20} />,
    items: ["State-wide Burn Rate", "Treasury Fund Status", "Central Grant Heatmaps", "Liquidity Alerts"]
  },
  {
    title: "CapEx & Mega-Projects",
    icon: <Database size={20} />,
    items: ["Smart City ROI", "HQ Construction Progress", "Fleet Asset Depreciation", "Cyber Security CapEx"]
  },
  {
    title: "Operational Logistics",
    icon: <Activity size={20} />,
    items: ["Fuel & Utility Board", "Payroll Disbursal Maps", "Ammunition Vault Value", "Event Logistics Cost"]
  },
  {
    title: "Revenue & Recoveries",
    icon: <TrendingUp size={20} />,
    items: ["E-Challan Visualizer", "Commercial Security Billing", "Auction & Scrap Proceeds", "Bail Forfeitures"]
  },
  {
    title: "Compliance & Risk",
    icon: <ShieldAlert size={20} />,
    items: ["Audit Breach Viewer", "Vendor Default Risk Map", "Taxation Status", "SS Fund Encrypted Viewer"]
  }
];

const aiFeatures = [
  "AI Holographic 3D Budget Heatmapping", "AI Natural Language Voice Querying (Ask DGP Bot)", "AI Predictive Deficit Spotlighting",
  "AI Deep-Dive Drill-down (State -> Zone -> Station)", "AI Real-time Treasury & RBI Integration", "AI Auto-Redaction of Encrypted Data"
];

const databases = [
  "Master_Executive_Data_Lake", "Visual_Telemetry_Cache", "Geospatial_Finance_DB", "Live_Treasury_Sync", 
  "Real_Time_Payroll_Logs", "CapEx_Progress_Index", "Audit_Alert_Cache", "Risk_Prediction_Models"
];

const dashboards = [
  "DGP Master Command Center", "Zone/District Drill-down Map", "Live Revenue vs Expense", 
  "Mega-Project Escrow Board", "Compliance & Audit Threat Map", "Green Tech & ROI Visualizer"
];

const apis = [
  "State Finance Dept Real-Time APIs", "Geographic Information Systems (GIS)", "Power BI / Tableau Embedding", 
  "Banking & RBI Data Streams", "GeM Vendor Webhooks", "CCTNS Operational Sync"
];

const reports = [
  "Daily Morning Financial Briefing", "Weekly DGP Flash Report", "Zone-wise Performance Export", 
  "Executive CapEx Summary", "Risk & Deficit Warning Brief", "Revenue Target Achievement"
];

const security = [
  "Biometric Retina Login", "Anti-Screenshot & Watermarking", "Role-Based Geo-Fencing", 
  "Zero-Trust Dashboard Encryption", "Immutable View Logs", "Encrypted Voice Command Auth"
];

const futureScope = [
  "Augmented Reality (AR) Financial War Rooms", "Sentient Predictive Policy Recommender", "Brain-Computer Interface (BCI) Navigation",
  "Global Police Benchmarking Sync", "Decentralized DGP DAO Voting", "Real-Time Satellite CapEx Verification"
];


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Dashboard Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Dashboard Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Command Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ExecutiveDashboardFinanceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Maximize className="inline-icon" size={28} /> AI Executive Dashboard (Finance)
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Executive Dashboard</strong> is the financial nerve center for the Director General of Police (DGP) and top brass. It aggregates billions of data points—from state-wide payroll and GeM procurement to live e-challan revenues—into a highly visual, interactive 3D command center, enabling split-second strategic decisions.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Globe className="inline-icon" color="#3b82f6" /> State-wide Financial Heatmap</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Visualizes burn-rates across all zones. If the Northern Zone is burning fuel budget 40% faster than average, it glows red on the DGP's map.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> NLP Voice Querying</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Executives can simply ask the AI: "What is the remaining budget in the Nirbhaya Fund?" or "Show me pending payments to IT vendors," and instantly get charts.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#f59e0b" /> Mega-Project Drill Down</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Allows deep-dives from a macro state-view down to the exact escrow payout status of a specific Rs 50-Crore forensic lab construction project.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> Live Risk & Compliance Alerts</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly highlights critical threats like impending CAG audit breaches, tender cartel formations, or liquidity crises requiring immediate treasury intervention.</p>
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
            <Maximize size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI EXECUTIVE DASHBOARD <span>(FINANCE)</span></h1>
            <p className="cyber-subtitle">DGP Command Center, 3D Heatmaps & Real-time Analytics</p>
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

export default ExecutiveDashboardFinanceDetailed;
