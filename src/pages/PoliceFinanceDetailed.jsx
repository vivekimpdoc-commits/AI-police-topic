import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, DollarSign, BarChart2 } from 'lucide-react';
import '../styles/hrmsDetailed.css';

const aiExperts = ["Salary Projection AI", "Overtime Calculator Bot", "Budget Planner AI", "Electricity Analytics Bot", "Fuel Budget Optimizer", "Cost Center AI", "Allowance Manager Bot", "Internet Cost Monitor", "Building Budget AI", "Expenditure Anomaly Detector", "Finance Audit Bot", "Backend Developer AI", "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"];
const financeModules = [
  { title: "Salary & Allowances", icon: <DollarSign size={20} />, items: ["AI Budget Allocator","AI Expenditure Predictor","AI Financial Irregularity Alert"] },
  { title: "Operational Budgets", icon: <BarChart2 size={20} />, items: ["Fuel Budget Planner", "Building Maintenance Budget", "Vehicle Repair Budget Tracker", "Operations Expense Monitor"] },
  { title: "Utility Analytics", icon: <Activity size={20} />, items: ["Electricity Bill Analytics", "Water Bill Analytics", "Telephone Expense Analytics", "Internet Expense Monitoring"] },
  { title: "Financial Controls", icon: <Shield size={20} />, items: ["Cost Center Dashboard", "Budget Variance Analysis", "Expenditure Anomaly Alerts", "Annual Accounts Reconciliation"] }
];
const aiFeatures = ["AI Salary Projection with Upcoming Increment and DA Hike Modeling", "AI Anomaly Detection in Utility Bills (Theft/Wastage)", "AI Optimization of Fuel Budget across Zones based on Crime Pattern", "AI Forecasting of Overtime Expenditure during Elections/Festivals", "AI Automated Budget Variance Reports for PAC (Public Accounts Committee)", "AI Cost Center Benchmarking across Districts", "AI Fraud Detection in Contractor Bills (Duplicate/Inflated)", "AI Real-time Budget Depletion Alerts to DG/ADG"];
const databases = ["Salary_Projection_DB", "Fuel_Consumption_Ledger", "Utility_Bill_Archive", "Budget_Allocation_Matrix", "Allowance_Disbursement", "Cost_Center_Reports", "Overtime_Register", "Expenditure_Audit_Trail"];
const dashboards = ["Real-time Budget Burn Rate", "Salary vs Budget Variance", "Zone-wise Fuel Consumption", "Utility Cost Heatmap", "Overtime Expenditure Trend", "Cost Center Efficiency Score"];
const apis = ["State Treasury (IFMS) Sync", "Pay Commission Circular Updates", "GST Portal for Vendor Bills", "State Electricity Boards", "Bank Reconciliation API", "CAG (Comptroller & Auditor General) Portal"];
const reports = ["Monthly Finance Dashboard Report", "Quarterly Budget Utilization", "Annual Salary Projection", "Utility Cost Reduction Analysis", "Overtime Expenditure Audit", "Cost Center Benchmark Report"];
const security = ["Maker-Checker Workflow for All Payments", "Strict RBAC for Financial Data (AO/DIG level)", "Blockchain Audit for All Budget Transfers", "Anti-Fraud AI on Contractor Bills", "Encrypted Financial Data at Rest and In-Transit", "Real-time Alerts for Unusual Expenditure Patterns", "CAG-compliant Audit Trails", "Multi-level Approval for Large Expenditures"];
const futureScope = ["AI Predictive Budgeting for 5-Year Police Expansion Plans", "Smart Contracts for Automatic Salary Disbursement", "AI Real-time Tax Compliance for Officer Salaries", "Blockchain-based Public Expenditure Transparency Portal", "AI-driven Zero-Based Budgeting for Police", "ML-powered Annual Grant Optimization"];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> }, { id: 'experts', label: 'Finance Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Finance Modules', icon: <LayoutDashboard size={18} /> }, { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> }, { id: 'reports', label: 'Finance Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceFinanceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
          <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}><DollarSign className="inline-icon" size={28} /> AI Police Finance Management</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}><strong>Police Finance</strong> provides complete AI-driven fiscal governance for the force. From projecting salary bills 12 months in advance to detecting anomalies in electricity consumption at remote police posts, it ensures every rupee is accounted for with zero leakage.</p>
          <div className="split-section" style={{ gap: '1.5rem' }}>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><DollarSign className="inline-icon" color="#3b82f6" /> AI Salary Projection</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI models future salary bills by factoring in upcoming promotions, DA hikes, new recruitments, and retirements — allowing finance officers to request accurate annual budget grants with zero under/over-estimation.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><BarChart2 className="inline-icon" color="#10b981" /> Utility Anomaly Detection</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI compares electricity bills across 1,500+ police stations and flags outliers. If a station's bill is 3x the district average, AI triggers an automatic energy audit, often uncovering power theft or faulty equipment.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Fuel Budget Optimizer</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI analyzes crime patterns and election schedules to recommend optimal district-level fuel budget allocations. It prevents situations where one district runs out of fuel for patrolling vehicles while another has a surplus.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Anti-Fraud Controls</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI cross-references contractor invoices against geolocation data, material market rates, and approved work orders. It instantly flags duplicate bills or payments that exceed quoted rates by more than 10% for review.</p></div>
          </div>
        </motion.div>
      );
      case 'experts': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">{aiExperts.map((e, i) => <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan"><Bot className="card-icon" /><h4>{e}</h4></motion.div>)}</motion.div>;
      case 'modules': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">{financeModules.map((mod, i) => <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel"><div className="module-header">{mod.icon}<h3>{mod.title}</h3></div><div className="module-tags">{mod.items.map((item, j) => <span key={j} className="module-tag">{item}</span>)}</div></motion.div>)}</motion.div>;
      case 'features': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid">{aiFeatures.map((f, i) => <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple"><Cpu className="card-icon" /><h4>{f}</h4></motion.div>)}</motion.div>;
      case 'architecture': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><div className="split-section"><div className="panel"><h3><Database className="inline-icon" color="#06b6d4" /> Database Tables</h3><div className="tag-cloud">{databases.map((db, i) => <span key={i} className="tech-tag">{db}</span>)}</div></div><div className="panel"><h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3><div className="tag-cloud">{apis.map((api, i) => <span key={i} className="tech-tag tech-tag-alt">{api}</span>)}</div></div></div></motion.div>;
      case 'reports': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><div className="split-section"><div className="panel"><h3><LayoutDashboard className="inline-icon" color="#3b82f6" /> Dashboards</h3><ul className="premium-list">{dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>)}</ul></div><div className="panel"><h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3><ul className="premium-list">{reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>)}</ul></div></div></motion.div>;
      case 'security': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}><div className="split-section"><div className="panel highlight-red"><h3><ShieldAlert className="inline-icon" color="#ef4444" /> Security Protocols</h3><ul className="premium-list">{security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}</ul></div><div className="panel highlight-green"><h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3><ul className="premium-list">{futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}</ul></div></div></motion.div>;
      default: return null;
    }
  };

  return (
    <div className="hrms-detailed-page">
      <div className="hrms-bg-fx"></div><div className="hrms-grid-overlay"></div>
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn"><ArrowLeft size={20} /> BACK TO MODULES</button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><DollarSign size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">POLICE <span>FINANCE</span></h1><p className="cyber-subtitle">Salary AI, Utility Analytics & Anti-Fraud Controls</p></div>
        </div>
      </header>
      <div className="hrms-layout">
        <nav className="hrms-sidebar">{tabs.map(tab => <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.icon} {tab.label}</button>)}</nav>
        <main className="hrms-content-area"><AnimatePresence mode="wait"><div key={activeTab}>{renderContent()}</div></AnimatePresence></main>
      </div>
    </div>
  );
};

export default PoliceFinanceDetailed;
