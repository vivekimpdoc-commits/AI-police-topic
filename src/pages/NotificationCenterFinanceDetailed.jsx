import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Landmark, Bell, MessageSquare
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Critical Deficit Pinger AI", "Treasury Bounce Alerter", "GeM Vendor Escalation Bot",
  "SLA Penalty SMS Alerter", "Smart Contract Escrow Pinger", "Payroll Disbursal Notifier",
  "Pension Delay Escalator AI", "Tax Audit Red-Flag Bot", "GST Filing Deadline Alerter",
  "Grant Lapse Countdown AI", "Nirbhaya Fund Unspent Pinger", "March-Rush Spend Blocker",
  "Fuel Burn-Rate Spike Alerter", "Utility Theft SMS Notifier", "Duplicate Invoice Alerter",
  "Ghost Vendor Red-Flag Bot", "Tender Cartel SMS Warning", "Asset Confiscation Update Bot",
  "Scrap Auction Bid Alerter", "E-Challan Target Deficit Pinger", "Bounced Cheque SMS Alerter",
  "VIP Event Billing Notifier", "Commercial Guard Dues Alerter", "Bank Reconciliation Lag Bot",
  "Cyber Ransom Threat Notifier", "Data Breach Financial Alerter", "Insurance Premium Expiry Bot",
  "Hardware Warranty Lapse Alerter", "Fleet Scrappage Deadline Bot", "Cloud Server Scale-up Alerter",
  "SS Fund Approver Pinger", "Informant Payout Encrypted Alert", "Court Mandated Payout Deadline",
  "Bail Bond Forfeiture Alerter", "RTI Financial Query Deadline", "Lokayukta Summons Pinger",
  "State Finance Ministry Update AI", "Macro-Inflation Spike Alerter", "Global Arms Price Drop Pinger",
  "Green Energy Subsidy Alerter", "Carbon Credit Sale Notifier", "EV Charging Station CapEx Alert",
  "Drone Fleet Crash Cost Alerter", "Marine Patrol Logistics Pinger", "Medical Supply Shortage Alert",
  "Pharmacy Expiry Financial Bot", "Band/Sports Revenue Update AI", "Housing Board Repair Escalator",
  "Canteen Supply Delay Alerter", "Vendor Dispute Escalation AI", "Bank Guarantee Expiry Pinger",
  "EMD Refund Delay Escalator", "Audit Query Auto-Forwarder", "CVC Guideline Breach Pinger",
  "Zero-Trust Login Block Alerter", "Biometric Fraud Attempt Pinger", "Blockchain Ledger Sync Error Bot",
  "API Gateway Timeout Alerter", "Executive Summary Push Bot", "Daily Morning Briefing Alerter"
];

const financeModules = [
  {
    title: "Critical Financial Alerts",
    icon: <AlertTriangle size={20} />,
    items: ["Treasury Bounce Alerts", "Deficit & Burn Warnings", "Grant Lapse Countdowns", "Payroll Disbursal Errors"]
  },
  {
    title: "Fraud & Compliance",
    icon: <ShieldAlert size={20} />,
    items: ["Ghost Vendor Red-Flags", "Tender Cartel Warnings", "CVC Guideline Breaches", "Tax Filing Deadlines"]
  },
  {
    title: "Operational Notifications",
    icon: <Activity size={20} />,
    items: ["Fuel Spike Alerter", "Utility Theft SMS", "Warranty Lapse Alerts", "Medical Supply Shortages"]
  },
  {
    title: "Vendor & Contracts",
    icon: <FileText size={20} />,
    items: ["Escrow Payout Pings", "SLA Penalty SMS", "Guarantee Expiry Alerts", "EMD Refund Delays"]
  },
  {
    title: "Executive Summaries",
    icon: <MessageSquare size={20} />,
    items: ["Daily Morning Brief Push", "RTI Deadline Escalation", "Macro-Inflation Pings", "Global Price Drops"]
  }
];

const aiFeatures = [
  "AI Omnichannel Alert Routing (SMS, WhatsApp, Email, Dash)", "AI Escalation Matrix (Station -> Zone -> DGP)", "AI Encrypted Ping for SS Funds",
  "AI False-Positive Alert Suppression", "AI Actionable Notifications (1-Click Approve/Deny)", "AI Threat Prioritization Engine"
];

const databases = [
  "Notification_Log_Vault", "Escalation_Matrix_DB", "Encrypted_Dispatch_Ledger", "User_Preference_Registry", 
  "Actionable_Click_Logs", "False_Positive_Cache", "SMS_Gateway_Delivery_DB", "Audit_Trail_Pings"
];

const dashboards = [
  "Live Alert Dispatch Center", "Escalation & Resolution Map", "False-Positive Suppression Log", 
  "DGP Priority Notification Inbox", "System Health & Gateway Sync", "Pending Actionable Approvals"
];

const apis = [
  "NIC SMS Gateways", "WhatsApp Business API", "Secure Email SMTP Sync", 
  "Push Notification (FCM/APNS)", "State Treasury Alert Webhooks", "Vigilance DB Sync"
];

const reports = [
  "Daily Alert Dispatch Summary", "Escalation Response Time Audit", "Critical Threat Ping Log", 
  "Vendor Dispute Escalation", "False-Positive Filtration Stats", "Executive Action Turnaround"
];

const security = [
  "End-to-End Encrypted Notifications", "Zero-Trust Approval Links", "Biometric Action Auth", 
  "Anti-Spoofing SMS Headers", "Role-Based Alert Masking", "Air-Gapped Critical Pings"
];

const futureScope = [
  "Autonomous Smartwatch/Wearable Pings", "Holographic AR Alert Interventions", "AI Voice Call Escalation (Robocall)",
  "Decentralized Alert Relays", "Predictive Threat Pre-Alerting", "Quantum-Encrypted Comm Channels"
];

// Helper Icon
function AlertTriangle({ size }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
}


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Notification Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Alert Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dispatch Boards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const NotificationCenterFinanceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Bell className="inline-icon" size={28} /> AI Notification Center (Finance)
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Notification Center</strong> is the central nervous system for financial alerts. It actively monitors all 600+ financial modules and dispatches prioritized, actionable alerts—ranging from a routine SMS about an EMD refund to an encrypted DGP-level warning about an impending Rs 100-Crore grant lapse.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><AlertTriangle className="inline-icon" color="#ef4444" /> Critical Threat Alerter</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly pings top brass if the AI detects tender cartelization, ghost vendor invoices, or a severe liquidity crisis looming in the treasury.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#3b82f6" /> Actionable Approvals</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Alerts aren't just text; they contain secure, 1-click 'Approve' or 'Deny' buttons for fast-tracking smart contract payouts or travel DA sanctions.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#10b981" /> Escalation Matrix Sync</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>If a Station House Officer ignores a 'Fuel Burn-Rate Spike' alert for 24 hours, the AI automatically escalates the notification to the Zonal IG via WhatsApp and Email.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Encrypted SS Fund Pings</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Handles highly sensitive Secret Service (informant) payout approvals using end-to-end encrypted push notifications that auto-destruct after viewing.</p>
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
            <Bell size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI NOTIFICATION <span>CENTER</span></h1>
            <p className="cyber-subtitle">Escalation Matrix, Threat Alerts & Smart Approvals</p>
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

export default NotificationCenterFinanceDetailed;
