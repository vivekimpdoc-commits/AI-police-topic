import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, TrendingUp, LineChart
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Macro-Budget Forecasting AI", "Payroll Inflation Predictor", "DA Hike Impact Modeler",
  "Fuel Price Volatility AI", "Utility Tariff Hike Predictor", "Ammunition Cost Forecaster",
  "Riot Gear Demand Predictor", "Vehicle Fleet Lifecycle AI", "Election Year Budget Modeler",
  "Mega-Event Security Predictor", "Disaster Relief Fund Forecaster", "Capital Expenditure (CapEx) AI",
  "Smart City Tech Deflation AI", "Hardware Obsolescence Predictor", "Cloud Server Cost Forecaster",
  "Software License Inflation AI", "Pension Liability Predictor", "Gratuity Payout Modeler",
  "Recruitment Drive Cost AI", "Training Academy Budget AI", "Hospital Medical Inflation Bot",
  "Pharmacy Supply Cost AI", "Uniform/Kit Raw Material AI", "Construction Cost Indexer Bot",
  "Land Acquisition Price AI", "Scrap Value Deflation AI", "Towing Revenue Forecaster",
  "Traffic E-Challan Target AI", "Commercial Billing Growth AI", "Bank Interest & ROI Forecaster",
  "Treasury Fund Release Modeler", "Central Grant Probability AI", "CSR Funding Trend Analyzer",
  "Zero-Based Budget Forecaster", "Surplus Fund Sweeper AI", "Deficit Blackhole Predictor",
  "Quarterly Burn Rate AI", "March-Rush Expenditure AI", "Geopolitics Arms Pricing AI",
  "Foreign Currency Exchange AI", "Tender Price Cartel AI", "Vendor Insolvency Predictor",
  "Green Energy Savings Forecaster", "Solar ROI Timeline Predictor", "EV Fleet Transition Cost AI",
  "Carbon Credit Revenue AI", "Legal/Advocate Fee Predictor", "Bail Forfeiture Revenue AI",
  "Narcotics Seizure Value AI", "Abandoned Asset Auction AI", "Cyber Threat Ransom Cost AI",
  "Data Breach Penalty Modeler", "Insurance Premium Hike AI", "Station Maintenance Predictor",
  "Housing Quarter Repair AI", "K9 Unit Nutrition Cost AI", "Mounted Police Vet Cost AI",
  "Aviation/Drone Fuel Predictor", "Telecom Infrastructure AI", "AI Hardware Cost Forecaster"
];

const financeModules = [
  {
    title: "Macro & Personnel",
    icon: <Users size={20} />,
    items: ["Payroll Inflation", "DA Hike Impact", "Pension Liability", "Recruitment Drive Costs"]
  },
  {
    title: "Operational Volatility",
    icon: <Activity size={20} />,
    items: ["Fuel Price Hedging", "Utility Tariff Prediction", "Ammunition Pricing", "Fleet Lifecycle Costs"]
  },
  {
    title: "Revenue & Capital",
    icon: <TrendingUp size={20} />,
    items: ["E-Challan Targets", "CapEx Forecasting", "Smart City Tech Deflation", "CSR & Central Grants"]
  },
  {
    title: "Events & Disasters",
    icon: <ShieldAlert size={20} />,
    items: ["Election Year Budgets", "Mega-Event Security", "Disaster Relief Funding", "Riot Gear Demand"]
  },
  {
    title: "Strategic & Green Tech",
    icon: <Rocket size={20} />,
    items: ["EV Transition Costs", "Solar ROI Timelines", "Geopolitics Arms Pricing", "Cyber Threat Costing"]
  }
];

const aiFeatures = [
  "AI Deep Learning Budget Burn-Rate Prediction", "AI Fuel & Utility Macro-Economic Hedging", "AI Pension & Gratuity Liability Actuarial Modeler",
  "AI Election Year & Mega-Event Cost Simulation", "AI Global Arms Price Fluctuation Alerts", "AI Green Energy ROI Timeline Forecasting"
];

const databases = [
  "Historical_Expenditure_Lake", "Macro_Economic_Indicators", "Actuarial_Pension_DB", "Global_Commodity_Pricing", 
  "Event_Simulation_Vault", "Revenue_Target_Models", "Green_Energy_ROI_Logs", "CapEx_Lifecycle_DB"
];

const dashboards = [
  "State Budget 5-Year Forecast", "Payroll & Pension Liability Map", "Fuel & Utility Volatility", 
  "CapEx vs Tech Deflation", "Election / Event Simulator", "Green Tech Transition ROI"
];

const apis = [
  "RBI Economic Indicator Webhooks", "Global Oil & Fuel Pricing APIs", "State Finance Policy Sync", 
  "Actuarial Data Gateways", "Global Defense Market APIs", "Carbon Credit Exchange Sync"
];

const reports = [
  "Annual Budget Forecasting Book", "Quarterly Volatility Warning", "Pension Liability Assessment", 
  "Election/Event Cost Estimate", "EV Fleet Transition Proposal", "Revenue Target Optimization"
];

const security = [
  "Air-Gapped Forecast Models", "Encrypted Financial Simulations", "Role-Based Scenario Access", 
  "Blockchain Anchor for Predictions", "Anti-Tamper Economic Inputs", "Zero-Trust Strategy Vault"
];

const futureScope = [
  "Autonomous Multi-Variant Budgeting", "Quantum Computing Actuarial Models", "Real-Time Geo-Political Risk Sourcing",
  "Decentralized Predictive Markets", "AI Auto-Adjustment of State Grants", "Predictive Cryptography for Costing"
];

// Helper icon
function Users({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
}


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Forecasting Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Forecast Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Prediction Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const AIForecastingDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <LineChart className="inline-icon" size={28} /> AI Financial Forecasting
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Financial Forecasting</strong> moves the police department from reactive accounting to predictive economics. Using deep learning and global macro-economic indicators, it predicts future fuel costs, models massive election-year budgets, calculates exact pension liabilities, and simulates the ROI of transitioning to EV fleets.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Fuel & Inflation Hedging</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Syncs with global crude oil prices and local inflation indices to predict exact budget shortfalls for patrol fleets and electricity tariffs months in advance.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#10b981" /> Pension & DA Liability</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses advanced actuarial models to simulate the cascading financial impact of a 4% DA hike or a massive wave of inspector retirements on the state treasury.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Election & Riot Simulation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Simulates the precise logistical, manpower, and equipment costs required for upcoming mega-events like State Elections or potential civil unrest.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Rocket className="inline-icon" color="#ef4444" /> Green Tech Transition ROI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Predicts the exact break-even point and long-term capital savings of replacing traditional petrol cruisers with Electric Vehicles and solar-powered stations.</p>
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
            <LineChart size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI FINANCIAL <span>FORECASTING</span></h1>
            <p className="cyber-subtitle">Macro-Economics, Pension Liabilities & CapEx Simulation</p>
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

export default AIForecastingDetailed;
