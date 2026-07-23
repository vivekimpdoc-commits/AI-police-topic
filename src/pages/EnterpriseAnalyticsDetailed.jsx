import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Users, LineChart, BarChart
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Predictive Crime Modeler AI", "Resource Allocation Optimizer", "Budget Deficit Predictor Bot",
  "Fleet Maintenance Forecaster", "Workforce Attrition Predictor", "Retirement Wave Analyst AI",
  "Crime Trend Visualizer Bot", "Temporal Hotspot Mapper AI", "Sentencing Pattern Analyst",
  "Conviction Rate Optimizer", "Prosecution Success Predictor", "Grant Funding ROI Analyzer",
  "Public Sentiment Scorer AI", "Media Sentiment Tracker Bot", "Overtime Spend Optimizer",
  "Station Response Time Analyst", "Call Triage Efficiency Bot", "Patrol Route Density Analyzer",
  "Weapons Inventory Forecaster", "Ammunition Burn Rate Bot", "Body-Cam Storage Optimizer",
  "Cloud Cost Management AI", "Data Center Load Predictor", "Energy Consumption Analyst",
  "Fuel Usage Optimization Bot", "K9 Unit Effectiveness Scorer", "Cyber-Attack Cost Analyst",
  "Insurance Claim Fraud Detector", "Pension Fund Growth Predictor", "Training Program ROI Analyst",
  "Recruit Success Probability AI", "Officer Burnout Predictor Bot", "Sick Leave Trend Analyzer",
  "Promotion Bottleneck Modeler", "Equipment Lifespan Predictor", "IT Hardware Depreciation AI",
  "Software License Optimizer", "Vendor Contract Risk Assessor", "Supply Chain Disruption Bot",
  "Procurement Price Predictor", "Court Hearing Delay Analyst", "Evidence Processing Bottleneck",
  "Forensic Lab Turnaround AI", "DNA Backlog Predictor Bot", "Ballistics Match Rate Analyst",
  "Arrest-to-Conviction Tracker", "Bail Default Probability AI", "Jail Overcrowding Forecaster",
  "Inmate Recidivism Modeler", "Parole Violation Predictor", "Traffic Accident Hotspot AI",
  "Challan Revenue Forecaster", "Smart City Traffic Flow Bot", "Roadblock Efficiency Analyst",
  "Toll Plaza Evasion Predictor", "Riot Escalation Probability AI", "Protest Size Forecaster Bot",
  "Weather Impact on Crime AI", "Holiday Crime Surge Predictor", "Enterprise Data Fabric Sync Bot"
];

const analyticsModules = [
  {
    title: "Crime Trend Analytics",
    icon: <LineChart size={20} />,
    items: ["Temporal Hotspot Mapping", "Holiday Surge Predictions", "Conviction Rate Analysis", "Arrest-to-Conviction Tracking"]
  },
  {
    title: "Financial & ROI Analytics",
    icon: <PieChart size={20} />,
    items: ["Overtime Spend Optimization", "Grant Funding ROI", "Cloud Storage Costs", "Fleet Fuel Predictions"]
  },
  {
    title: "Workforce & HR Analytics",
    icon: <Users size={20} />,
    items: ["Burnout & Attrition Prediction", "Retirement Forecasting", "Training ROI", "Promotion Bottlenecks"]
  },
  {
    title: "Operational Bottlenecks",
    icon: <Activity size={20} />,
    items: ["Forensic Lab Turnaround", "Evidence Processing Delays", "Court Hearing Backlogs", "Call Dispatch Efficiency"]
  },
  {
    title: "Logistics & Supply Chain",
    icon: <Database size={20} />,
    items: ["Vendor Risk Scoring", "Procurement Price Predictions", "Equipment Depreciation", "Ammunition Burn Rates"]
  }
];

const aiFeatures = [
  "AI Multi-Dimensional Crime Forecasting", "AI Automated Financial ROI Scoring", "AI Burnout & Sick Leave Prediction",
  "AI Cloud Cost Optimization (FinOps)", "AI Forensic Backlog Extrapolation", "AI Court Delay Root-Cause Analysis"
];

const databases = [
  "Historical_Crime_Data", "Financial_Ledgers", "HR_Attrition_Logs", "Procurement_Contracts", 
  "Fleet_Telematics", "Forensic_Lab_Timestamps", "Court_Hearing_Records", "Cloud_Billing_Data"
];

const dashboards = [
  "Executive DGP Master Dashboard", "Financial Health & Budget Burn", "Workforce Readiness Index", 
  "Crime Forecasting Heatmap", "Logistics & Supply Chain Hub", "Judicial Pipeline Bottlenecks"
];

const apis = [
  "Finance Dept Webhooks", "State Court API Sync", "AWS/Azure Billing APIs", 
  "HRMS Payroll Integration", "Smart City Weather Feeds", "Vendor Procurement Portal APIs"
];

const reports = [
  "Annual Department ROI Report", "Quarterly Crime Trend Forecast", "Workforce Attrition Warning Log", 
  "Budget Deficit Alert System", "Forensic Lab Efficiency Summary", "Fleet Maintenance Depreciation"
];

const security = [
  "Data Lake Row-Level Security", "Encrypted Dashboard Access", "Anonymized Analytics Aggregation", 
  "Executive View MFA Enforcement", "Automated Data Masking", "Third-Party Audit API Access"
];

const futureScope = [
  "Predictive GDP & Crime Correlation", "Fully Automated Budget Reallocation", "Quantum-Powered Trend Simulation",
  "Holographic Data Visualization", "Real-time Public Sentiment AI", "Macro-Economic Police Funding AI"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Analytics Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Analytics Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'BI Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const EnterpriseAnalyticsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <LineChart className="inline-icon" size={28} /> AI Enterprise Analytics (BI)
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Enterprise Analytics</strong> is the Business Intelligence (BI) core of the police department. It ingests massive amounts of data from all departments (HR, Finance, Operations, Forensics) and uses predictive modeling to identify trends, forecast budgets, predict officer burnout, and optimize the overall efficiency of the entire police enterprise.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Crime Trend Forecasting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses historical data, weather patterns, and economic indicators to predict where and when specific types of crimes will surge in the next 30-90 days.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><PieChart className="inline-icon" color="#10b981" /> Financial & Resource ROI</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes overtime payouts, fuel consumption, and cloud storage costs to identify financial waste and suggest AI-driven budget reallocations.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Users className="inline-icon" color="#f59e0b" /> Workforce Predictions</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Identifies systemic issues like impending retirement waves, officer burnout rates, and training bottlenecks before they critically impact the force.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Database className="inline-icon" color="#ef4444" /> Operational Bottlenecks</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Tracks the entire lifecycle of a case, instantly flagging backlogs in forensic DNA processing or systemic delays in court hearing schedules.</p>
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
            {analyticsModules.map((mod, i) => (
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
            <h1 className="cyber-title">AI ENTERPRISE <span>ANALYTICS</span></h1>
            <p className="cyber-subtitle">Predictive Modeling, Financial BI, and Process Optimization</p>
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

export default EnterpriseAnalyticsDetailed;
