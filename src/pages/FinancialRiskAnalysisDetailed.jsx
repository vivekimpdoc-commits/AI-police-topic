import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, AlertTriangle, Crosshair
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Budget Deficit Risk AI", "Insolvency Predictor Bot", "Liquidity Crisis Alerter",
  "Pension Default Risk AI", "Vendor Default Risk Modeler", "Inflation Shock Absorber",
  "Fuel Price Spike Modeler", "Supply Chain Collapse Risk", "CapEx Cost Overrun AI",
  "Smart Contract Escrow Risk", "Grant Lapse Warning AI", "Unspent Balance Risk Bot",
  "E-Challan Recovery Failure AI", "Tax Audit Penalty Risk", "RTI Financial Liability AI",
  "Court Payout Mandate Risk", "Election Budget Bleed AI", "Riot Logistics Cash Burn AI",
  "Disaster Relief Fund Risk", "Ammunition Expiry Loss Bot", "Vehicle Fleet Scrappage Risk",
  "Cloud Billing Spike Alerter", "Software License Audit Risk", "Cyber Ransom Financial Risk",
  "Data Breach Liability AI", "Green Tech Transition Risk", "EV Battery Degradation Loss",
  "Hardware Obsolescence Risk", "Real Estate Encroachment Loss", "Lease Yield Default AI",
  "Hospital Supply Chain Risk", "Pharmacy Expiry Loss AI", "Tender Bidding Cartel Risk",
  "GeM Vendor Blacklist Risk", "SS Fund Audit Exposure AI", "Informant ROI Failure AI",
  "Foreign Exchange (Forex) Risk", "UN Grant Compliance Risk", "Blockchain Ledger Fork Risk",
  "Zero-Trust Breach Financial Loss", "Insurance Claim Rejection AI", "Premium Hike Modeler",
  "Petty Cash Siphoning Risk", "Payroll Ghost Employee Risk", "Biometric Fraud Liability AI",
  "Suspension Pay Recovery Risk", "Bail Bond Default Risk", "Confiscated Asset Loss AI",
  "Seized Narcotics Vault Risk", "Treasury Sync Failure AI", "Bank Reconciliation Lag Risk",
  "Central Grant Denial Predictor", "CSR Fund Pullout Risk", "Event Security Billing Default",
  "Toll Exemption Revenue Loss", "Auction Bidding Fraud Risk", "Defective Batch Replacement Cost",
  "Logistics Delay Penalty Risk", "Aviation Maintenance Cost Shock", "Drone Fleet Crash Liability AI"
];

const financeModules = [
  {
    title: "Liquidity & Deficits",
    icon: <Activity size={20} />,
    items: ["Budget Deficit Modeler", "Grant Lapse Alerter", "Pension Default Risk", "Treasury Lag Risk"]
  },
  {
    title: "Macro & Vendor Risks",
    icon: <AlertTriangle size={20} />,
    items: ["Inflation Shocks", "Vendor Insolvency", "Supply Chain Collapse", "Cartel Bidding Risk"]
  },
  {
    title: "Operational Cash Burn",
    icon: <TrendingDown size={20} />,
    items: ["Election Budget Bleeds", "Riot Logistics Burn", "Fuel Spike Modeler", "CapEx Overruns"]
  },
  {
    title: "Cyber & Compliance",
    icon: <ShieldAlert size={20} />,
    items: ["Ransomware Liability", "Tax Audit Penalties", "SS Fund Exposure", "UN Grant Compliance"]
  },
  {
    title: "Asset & Insurance",
    icon: <Database size={20} />,
    items: ["Asset Confiscation Loss", "Claim Rejection Risk", "Hardware Obsolescence", "EV Battery Degradation"]
  }
];

const aiFeatures = [
  "AI Black Swan Event Financial Simulator", "AI Vendor Insolvency & Supply Chain Collapse Prediction", "AI Real-Time Liquidity Crisis Alerter",
  "AI Cyber Breach Financial Liability Modeler", "AI Grant Lapse & Fund Surrender Warning", "AI Auto-Adjustment of Risk Hedging"
];

const databases = [
  "Master_Risk_Telemetry_DB", "Vendor_Insolvency_Index", "Macro_Volatility_Logs", "CapEx_Overrun_Tracker", 
  "Cyber_Liability_Vault", "Grant_Lapse_Warning_DB", "Insurance_Rejection_Logs", "Liquidity_Crisis_Models"
];

const dashboards = [
  "Live Financial Threat Heatmap", "Liquidity & Burn Rate Warning", "Vendor Default Risk Board", 
  "Compliance & Penalty Risk", "Tactical Event Cash Bleed", "Cyber & Asset Liability"
];

const apis = [
  "Global Economic Volatility APIs", "MCA Vendor Insolvency Webhooks", "State Treasury Alert APIs", 
  "Cyber Insurance Gateways", "Logistics Disruption Feeds", "Forex & Commodity Pricing Sync"
];

const reports = [
  "Monthly Financial Risk Matrix", "Black Swan Scenario Plan", "Vendor Default Assessment", 
  "CapEx Overrun Forecast", "Compliance Penalty Audit", "Insurance Risk & Liability Log"
];

const security = [
  "Zero-Trust Risk Dashboard", "Encrypted Liability Ledgers", "Role-Based Threat Disclosure", 
  "Blockchain Risk Hashing", "Air-Gapped Simulation Models", "Multi-Sig Hedging Approval"
];

const futureScope = [
  "Autonomous Risk Hedging via Smart Contracts", "Predictive Quantum Risk Modeling", "DeFi Liquidity Pools for Emergency",
  "Global Interpol Financial Threat Sync", "Real-time Crypto-Ransom Hedging", "AI Sentient Budget Rebalancing"
];

// Helper icon
function TrendingDown({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>;
}


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Risk Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Risk Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Threat Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const FinancialRiskAnalysisDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <AlertTriangle className="inline-icon" size={28} /> AI Financial Risk Analysis
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Financial Risk Analysis</strong> is the early warning radar for the state's police budget. It detects looming liquidity crises, predicts if a mega-vendor is about to go bankrupt, models the financial devastation of a cyber ransomware attack, and warns if federal grants are at risk of lapsing due to under-utilization.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Liquidity & Burn Crises</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Detects if massive unforeseen events (like sudden state-wide riots or floods) are draining the contingency fund too fast, triggering early warnings for treasury bailouts.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Crosshair className="inline-icon" color="#f59e0b" /> Vendor Insolvency Scans</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Constantly scans corporate financial health APIs to warn if a contractor building a Rs 100-Crore police HQ is on the verge of bankruptcy, protecting the escrow.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#10b981" /> Grant Lapse Prevention</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks expiration dates of Central Government funds (e.g., Nirbhaya Fund). If the state hasn't spent it by February, the AI triggers a critical "Use It or Lose It" alert.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#3b82f6" /> Cyber & Legal Liability</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Models the exact financial damage of a CCTNS data breach (lawsuits, IT recovery, ransom demands) forcing command to allocate proactive cybersecurity CapEx.</p>
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
            <AlertTriangle size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI FINANCIAL RISK <span>ANALYSIS</span></h1>
            <p className="cyber-subtitle">Liquidity Crises, Vendor Insolvency & Liability Modeling</p>
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

export default FinancialRiskAnalysisDetailed;
