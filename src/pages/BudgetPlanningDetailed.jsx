import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"Police Budget Planner AI", "Fund Allocation Expert AI", "Budget Forecast AI", 
  "Budget Utilization Monitor AI", "Financial Planning AI", "Treasury Management AI", 
  "Revenue & Grant Management AI", "Procurement Planning AI", "Vendor Payment Auditor AI", 
  "Salary & Payroll AI", "Pension & Gratuity AI", "Fleet Expense AI", 
  "Ammunition Cost Analyzer AI", "Expense Fraud Auditor AI", "Financial Compliance Bot AI", 
  "Internal Audit AI", "Financial Risk Intelligence AI", "Executive Finance Copilot AI", 
  "Financial Analytics AI", "Risk Allowance Predictor AI", "Station Upkeep Budget AI", 
  "Tax Optimization Expert AI", "Contingency Fund Predictor", "Overtime Spend Forecaster",
  "State Grant ROI Analyzer", "Central Funding Sync Bot", "Uniform & Kit Allowance AI",
  "Travel DA/TA Optimizer", "Investigation Expense Tracker", "Secret Informant (SS Fund) Auditor",
  "PCR Van Fuel Log AI", "Vehicle Maintenance Budget Bot", "Toll & Transport Expense AI",
  "Fuel Card Integration Sync", "Post-Retirement Medical Fund AI", "Family Pension Calculator Bot",
  "CAG Compliance Auditor", "Expense Anomaly Detector", "Fund Utilization Certificate Bot",
  "Budget Deficit Alert AI", "Fake Bill OCR Scanner", "Vendor Overpricing Alert Bot",
  "Multi-currency Forensic AI", "Smart Contract Payment Exec", "Crypto Asset Seizure Valuator",
  "District-wise Allocation Optimizer", "Zone-wise Fund Distrubution AI", "Event Security Cost Predictor",
  "Election Deployment Budget AI", "Specialized Unit Training Cost AI", "K9 Unit Upkeep Forecaster",
  "Drone Fleet Depreciation Modeler", "Cyber Security Investment ROI AI", "Cloud Storage Billing Optimizer",
  "Headquarters Utility Expense AI", "Officer Loan & Advance Tracker", "Financial Hardship Predictor Bot",
  "Station Renovation Budget AI", "Reward & Bounty Payout Bot", "Future Inflation Adjustment AI"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Core AI Topics', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Advanced Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const BudgetPlanningDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI BUDGET PLANNING
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI BUDGET PLANNING</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in next-generation financial management powered by agentic ai.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Real-time Monitoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Continuous AI-driven surveillance and data collection ensuring immediate anomaly detection and rapid response protocols.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Cpu className="inline-icon" color="#10b981" /> Predictive Analytics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Utilizes machine learning to forecast trends, identify potential risks before they occur, and suggest optimized resource allocation.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Seamless Integration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hooks into existing national and state-level databases, providing a unified, interoperable platform across all departments.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Automated Compliance</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ensures all operations strictly adhere to legal and procedural guidelines, generating instant audit trails and compliance reports.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => {
              const expertRoutes = {
      "Police Budget Planner AI": "/police-budget-planner-ai-agent",
      "Fund Allocation Expert AI": "/fund-allocation-expert-ai-agent",
      "Budget Forecast AI": "/budget-forecast-ai-agent",
      "Budget Utilization Monitor AI": "/budget-utilization-monitor-ai-agent",
      "Financial Planning AI": "/financial-planning-ai-agent",
      "Treasury Management AI": "/treasury-management-ai-agent",
      "Revenue & Grant Management AI": "/revenue-grant-management-ai-agent",
      "Procurement Planning AI": "/procurement-planning-ai-agent",
      "Vendor Payment Auditor AI": "/vendor-payment-auditor-ai-agent",
      "Salary & Payroll AI": "/salary-payroll-ai-agent",
      "Pension & Gratuity AI": "/pension-gratuity-ai-agent",
      "Fleet Expense AI": "/fleet-expense-ai-agent",
      "Ammunition Cost Analyzer AI": "/ammunition-cost-analyzer-ai-agent",
      "Expense Fraud Auditor AI": "/expense-fraud-auditor-ai-agent",
      "Financial Compliance Bot AI": "/financial-compliance-bot-ai-agent",
      "Internal Audit AI": "/internal-audit-ai-agent",
      "Financial Risk Intelligence AI": "/financial-risk-intelligence-ai-agent",
      "Executive Finance Copilot AI": "/executive-finance-copilot-ai-agent",
      "Financial Analytics AI": "/financial-analytics-ai-agent",
      "Risk Allowance Predictor AI": "/risk-allowance-predictor-ai-agent",
      "Station Upkeep Budget AI": "/station-upkeep-budget-ai-agent",
      "Tax Optimization Expert AI": "/tax-optimization-expert-ai-agent",
      "Contingency Fund Predictor": "/contingency-fund-predictor-agent",
      "Overtime Spend Forecaster": "/overtime-spend-forecaster-agent",
      "State Grant ROI Analyzer": "/state-grant-roi-analyzer-agent",
      "Central Funding Sync Bot": "/central-funding-sync-bot-agent",
      "Uniform & Kit Allowance AI": "/uniform-kit-allowance-ai-agent",
      "Travel DA/TA Optimizer": "/travel-data-optimizer-agent",
      "Investigation Expense Tracker": "/investigation-expense-tracker-agent",
      "Secret Informant (SS Fund) Auditor": "/secret-informant-ss-fund-auditor-agent",
      "PCR Van Fuel Log AI": "/pcr-van-fuel-log-ai-agent",
      "Vehicle Maintenance Budget Bot": "/vehicle-maintenance-budget-bot-agent",
      "Toll & Transport Expense AI": "/toll-transport-expense-ai-agent",
      "Fuel Card Integration Sync": "/fuel-card-integration-sync-agent",
      "Post-Retirement Medical Fund AI": "/postretirement-medical-fund-ai-agent",
      "Family Pension Calculator Bot": "/family-pension-calculator-bot-agent",
      "CAG Compliance Auditor": "/cag-compliance-auditor-agent",
      "Expense Anomaly Detector": "/expense-anomaly-detector-agent",
      "Fund Utilization Certificate Bot": "/fund-utilization-certificate-bot-agent",
      "Budget Deficit Alert AI": "/budget-deficit-alert-ai-agent",
      "Fake Bill OCR Scanner": "/fake-bill-ocr-scanner-agent",
      "Vendor Overpricing Alert Bot": "/vendor-overpricing-alert-bot-agent",
      "Multi-currency Forensic AI": "/multicurrency-forensic-ai-agent",
      "Smart Contract Payment Exec": "/smart-contract-payment-exec-agent",
      "Crypto Asset Seizure Valuator": "/crypto-asset-seizure-valuator-agent",
      "District-wise Allocation Optimizer": "/districtwise-allocation-optimizer-agent",
      "Zone-wise Fund Distrubution AI": "/zonewise-fund-distrubution-ai-agent",
      "Event Security Cost Predictor": "/event-security-cost-predictor-agent",
      "Election Deployment Budget AI": "/election-deployment-budget-ai-agent",
      "Specialized Unit Training Cost AI": "/specialized-unit-training-cost-ai-agent",
      "K9 Unit Upkeep Forecaster": "/k9-unit-upkeep-forecaster-agent",
      "Drone Fleet Depreciation Modeler": "/drone-fleet-depreciation-modeler-agent",
      "Cyber Security Investment ROI AI": "/cyber-security-investment-roi-ai-agent",
      "Cloud Storage Billing Optimizer": "/cloud-storage-billing-optimizer-agent",
      "Headquarters Utility Expense AI": "/headquarters-utility-expense-ai-agent",
      "Officer Loan & Advance Tracker": "/officer-loan-advance-tracker-agent",
      "Financial Hardship Predictor Bot": "/financial-hardship-predictor-bot-agent",
      "Station Renovation Budget AI": "/station-renovation-budget-ai-agent",
      "Reward & Bounty Payout Bot": "/reward-bounty-payout-bot-agent",
      "Future Inflation Adjustment AI": "/future-inflation-adjustment-ai-agent"
};
const isClickable = !!expertRoutes[expert];
              return (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: i * 0.03 }} 
                  key={i} 
                  className={`premium-card highlight-cyan ${isClickable ? 'clickable-agent-card' : ''}`}
                  onClick={() => { if (isClickable) navigate(expertRoutes[expert]); }}
                  style={isClickable ? { cursor: 'pointer', border: '1px solid #00f0ff', boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' } : {}}
                >
                  <Bot className="card-icon" />
                  <h4>{expert}</h4>
                  {isClickable && <div style={{ fontSize: '0.75rem', color: '#00f0ff', marginTop: '5px' }}>Click to view Agent details</div>}
                </motion.div>
              );
            })}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {[
              { title: "Real-time Monitoring Module", items: ["Live Data Stream", "Alert Engine", "Geospatial Tracking"] },
              { title: "Predictive Analytics Engine", items: ["Risk Forecasting", "Resource Optimization", "Pattern Recognition"] },
              { title: "Automated Reporting System", items: ["Compliance Audits", "Daily Briefings", "Incident Logs"] },
              { title: "Cloud Integration Hub", items: ["State DB Sync", "Third-party API Webhooks", "Encrypted Data Transfer"] }
            ].map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  <LayoutDashboard size={20} color="#3b82f6" />
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
            {[
              "24/7 AI Processing", "Advanced Machine Learning Models", "Real-time Data Sync", 
              "Automated Alerts & Notifications", "Cross-Platform Accessibility", "Role-Based Access Control"
            ].map((feat, i) => (
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
                <h3><Database className="inline-icon" color="#06b6d4" /> Database Integration</h3>
                <div className="tag-cloud">
                  {["Primary_Transaction_DB", "Analytics_Data_Warehouse", "Audit_Logs_Archive", "User_Access_Registry", "System_Configuration_DB"].map((db, i) => (
                    <span key={i} className="tech-tag">{db}</span>
                  ))}
                </div>
              </div>
              <div className="panel">
                <h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3>
                <div className="tag-cloud">
                  {["RESTful Core API", "Real-time WebSocket Feed", "Third-party Webhooks", "Authentication Gateway", "Data Export API"].map((api, i) => (
                    <span key={i} className="tech-tag tech-tag-alt">{api}</span>
                  ))}
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
                  {["Executive Overview Dashboard", "Live Operations Monitor", "Historical Trend Analysis", "System Health & Status"].map((d, i) => (
                    <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>
                  ))}
                </ul>
              </div>
              <div className="panel">
                <h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3>
                <ul className="premium-list">
                  {["Daily Summary Report", "Weekly Performance Analytics", "Monthly Compliance Audit", "System Exception Logs"].map((r, i) => (
                    <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>
                  ))}
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
                  {[
                    "End-to-End Data Encryption (AES-256)", "Multi-Factor Authentication (MFA)", 
                    "Strict Role-Based Access Control (RBAC)", "Tamper-proof Audit Trails", 
                    "Automated Threat Detection", "Regular Security Penetration Testing"
                  ].map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}
                </ul>
              </div>
              <div className="panel highlight-green">
                <h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3>
                <ul className="premium-list">
                  {[
                    "Integration with Advanced LLMs", "Predictive Autonomous Actions", 
                    "Enhanced Mobile Accessibility", "Cross-Agency Data Federation", 
                    "Blockchain-based Immutability", "Next-Gen UI/UX Overhaul"
                  ].map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}
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
            <ShieldAlert size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI BUDGET <span>PLANNING</span></h1>
            <p className="cyber-subtitle">Next-Generation Financial Management powered by Agentic AI</p>
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

export default BudgetPlanningDetailed;
