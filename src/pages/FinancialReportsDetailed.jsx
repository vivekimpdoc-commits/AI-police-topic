import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, BarChart, Printer, FileCheck
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "DGP Master Finance Reporter", "Zone-wise Budget Visualizer", "Daily Spend Burn-Rate Bot",
  "Treasury Sync Report AI", "E-Challan Revenue Generator", "Payroll Expense Detailer",
  "Procurement CapEx Reporter", "Asset Depreciation Statement AI", "Grant Utilization Cert (UC) Bot",
  "CVC Compliance Reporter", "Audit Finding Summarizer AI", "Taxation (TDS/GST) Report Bot",
  "Pension Payout Statement AI", "SS Fund Encrypted Reporter", "Fuel & Fleet Expenditure Bot",
  "Utility Cost Heatmap AI", "Ammunition Stock Value Reporter", "Riot Gear Financial Audit Bot",
  "Smart City CCTV ROI Reporter", "Medical Emergency Expense AI", "Welfare Society Balance Sheet",
  "Canteen/Mess P&L Reporter", "Guest House Revenue Statement", "Event Security Billing Log AI",
  "Auction & Scrap Proceeds Bot", "Confiscated Asset Valuation Log", "Bail Bond Forfeiture Reporter",
  "Court Settlement Financial Bot", "Vigilance Penalty Log AI", "GeM Vendor Spend Analytics",
  "MSME Quota Compliance Report", "Green Energy CapEx Statement", "Carbon Footprint Financials AI",
  "Drone Fleet Maintenance Cost Bot", "Helicopter/Aviation P&L AI", "Marine Boat Fleet Expense AI",
  "Cyber Security Infrastructure Cost", "Hardware Lifespan Deprecation", "Software License Renewal Log",
  "Telecom & ISP Expense Reporter", "Petty Cash Reconciliation AI", "TA/DA Travel Expense Heatmap",
  "VIP Convoy Logistics Reporter", "Election Deployment Cost Bot", "Disaster Relief Fund Statement",
  "NDPS Seizure Financial Log", "RTI Financial Disclosure AI", "Lokayukta Query Response AI",
  "State Finance Ministry Sync Bot", "Home Ministry Budget Request AI", "Annual Police Budget Book AI",
  "Quarterly Financial Review Bot", "Mid-Year Deficit Warning AI", "Zero-Based Budget Proposal AI",
  "Multi-currency Procurement Log", "Foreign Grant (UN) Reporter", "Blockchain Audit Trail Extractor",
  "Executive Summary Synthesizer", "Media/PR Financial Digest AI", "Interactive 3D Finance Map AI"
];

const financeModules = [
  {
    title: "Executive Summaries",
    icon: <BarChart size={20} />,
    items: ["DGP Finance Dashboards", "Zone-wise Heatmaps", "Annual Budget Book", "Quarterly Reviews"]
  },
  {
    title: "Expenditure & CapEx",
    icon: <TrendingDown size={20} />,
    items: ["Payroll & Pension Logs", "Procurement & GeM Spend", "Fuel & Utility Burn Rate", "Infrastructure ROI"]
  },
  {
    title: "Revenue & Assets",
    icon: <TrendingUp size={20} />,
    items: ["E-Challan Collections", "Event Security Billings", "Auction Proceeds", "Asset Depreciation"]
  },
  {
    title: "Compliance & Audits",
    icon: <ShieldAlert size={20} />,
    items: ["Grant Utilization (UC)", "CVC & Vigilance Logs", "Taxation Remittance", "Audit Finding Summaries"]
  },
  {
    title: "Specialized & Tactical",
    icon: <Activity size={20} />,
    items: ["SS Fund Encrypted Logs", "Ammunition Valuations", "Disaster Relief Costs", "Confiscated Asset Sync"]
  }
];

const aiFeatures = [
  "AI One-Click Utilization Certificate (UC) Generation", "AI Natural Language Financial Querying", "AI Zero-Based Budget Proposal Drafting",
  "AI Interactive 3D Budget Heatmapping", "AI Real-time Translation of Finance Logs", "AI Automated RTI & Lokayukta Responses"
];

const databases = [
  "Master_Financial_Data_Lake", "UC_Generation_Archive", "Executive_Summary_Vault", "Taxation_Audit_Logs", 
  "Revenue_CapEx_Ledgers", "Asset_Valuation_DB", "Encrypted_SS_Fund_Logs", "Annual_Budget_Books"
];

const dashboards = [
  "State-wide Finance Command Center", "Zone-level Spend vs Budget", "Live Revenue vs Expense", 
  "Grant Utilization Progress", "Pending Audit & Compliance", "Tactical & CapEx ROI Board"
];

const apis = [
  "State Finance Dept Gateways", "Treasury Receipt Sync", "CAG Audit Portal Webhooks", 
  "Power BI / Tableau Integration", "Blockchain Ledger Sync", "Automated Email & SMS Dispatch"
];

const reports = [
  "Daily DGP Briefing Note", "Monthly Zone-wise P&L", "Quarterly Compliance Audit", 
  "Annual Police Budget Book", "Utilization Certificate (UC)", "GeM Vendor Spend Analytics"
];

const security = [
  "Role-Based Dashboard Masking", "Encrypted PDF/Excel Exports", "Blockchain Watermarked Reports", 
  "Zero-Trust Query Validation", "Anti-Screenshot UI Modes", "Biometric Report Authorization"
];

const futureScope = [
  "Autonomous Predictive Budget Presentations", "Holographic Financial Command Centers", "AI Voice-Interactive Finance Briefings",
  "Decentralized Public Transparency Portals", "Real-time CBDC Ledger Extraction", "Global Police Cost Benchmarking"
];

// Helper components for Icons
function TrendingDown({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>;
}
function TrendingUp({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>;
}


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Reporting Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Report Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Visual Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const FinancialReportsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <BarChart className="inline-icon" size={28} /> AI Financial Reports
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Financial Reports</strong> consolidates billions of data points into perfectly formatted, actionable intelligence. It replaces manual spreadsheet compilation by auto-generating mandatory Utilization Certificates (UCs), DGP briefing notes, CAG audit summaries, and the Annual Police Budget Book with zero human error.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><FileCheck className="inline-icon" color="#3b82f6" /> Auto-UC Generation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly compiles and formats Utilization Certificates for Central Grants (like Nirbhaya Fund or CCTNS) ensuring the state never loses its next funding tranche.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><LayoutDashboard className="inline-icon" color="#10b981" /> DGP Command Dashboards</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides top police executives with real-time, highly visual heatmaps of state-wide budget burn rates, revenue collections, and critical fund deficits.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Printer className="inline-icon" color="#f59e0b" /> Budget Book Automation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses NLP to automatically draft the massive "Annual Police Budget Book" complete with zero-based budgeting proposals, justifications, and historical comparisons.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#ef4444" /> RTI & Compliance Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically extracts and sanitizes financial data to respond to RTI (Right to Information) queries or Lokayukta investigations within seconds.</p>
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
            <BarChart size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI FINANCIAL <span>REPORTS</span></h1>
            <p className="cyber-subtitle">Automated UC Generation, Budget Books & DGP Dashboards</p>
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

export default FinancialReportsDetailed;
