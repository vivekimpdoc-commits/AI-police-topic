import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"CAG Audit Predictor AI", "Internal Audit Automation Bot", "Fraud Triangle Analyzer",
  "Expense Anomaly Detector AI", "Ghost Vendor Audit Bot", "Duplicate Invoice Scanner",
  "Payroll Fraud Auditor", "Petty Cash Reconciliation AI", "Tender Cartel Audit AI",
  "Procurement Price Benchmarker", "SS Fund Encrypted Auditor", "Grant Utilization Auditor",
  "Fund Diversion Detector AI", "Taxation (TDS/GST) Audit Bot", "Asset Depreciation Auditor",
  "Inventory Shrinkage Audit AI", "Station Level Audit Bot", "Headquarters Audit Sweeper",
  "Treasury Discrepancy Finder", "Bank Reconciliation AI", "Digital Signature Validator",
  "Biometric Audit Trail AI", "Blockchain Ledger Auditor", "Zero-Trust Access Auditor",
  "Audit Query Auto-Responder", "Compliance Deviation Alerter", "SOP Breach Audit AI",
  "Medical Claim Fraud Auditor", "TA/DA Travel Audit Bot", "Fuel Log Anomaly Detector",
  "Logistics & Shipping Auditor", "Weaponry Stock Audit AI", "Ammunition Discrepancy Bot",
  "Riot Gear Inventory Auditor", "Confiscated Asset Audit AI", "Seized Cash Vault Auditor",
  "Narcotics Seizure Audit Bot", "Forensic Lab Audit AI", "Cyber Cell CapEx Auditor",
  "IT Hardware Lifespan Audit", "Software License Usage Audit", "Cloud Server Billing Auditor",
  "Smart City CCTV Audit AI", "Drone Flight Log Auditor", "Marine Fuel Audit Bot",
  "Aviation Maintenance Auditor", "K9 Unit Expense Audit AI", "Welfare Fund Audit Bot",
  "Hospital Pharmacy Auditor", "Canteen Sales Audit AI", "Guest House Revenue Audit",
  "Event Security Billing Audit", "Traffic Fine Collection Audit", "Lok Adalat Settlement Audit",
  "Vendor SLA Breach Auditor", "Penalty Deduction Audit AI", "Insurance Claim Audit Bot",
  "Construction CapEx Auditor", "Housing Maintenance Audit", "Green Energy ROI Auditor"
];


const expertRoutes = {
  "CAG Audit Predictor AI": "/cag-audit-predictor-ai-agent",
  "Internal Audit Automation Bot": "/internal-audit-automation-bot-agent",
  "Fraud Triangle Analyzer": "/fraud-triangle-analyzer-agent",
  "Expense Anomaly Detector AI": "/expense-anomaly-detector-ai-agent",
  "Ghost Vendor Audit Bot": "/ghost-vendor-audit-bot-agent",
  "Duplicate Invoice Scanner": "/duplicate-invoice-scanner-agent",
  "Payroll Fraud Auditor": "/payroll-fraud-auditor-agent",
  "Petty Cash Reconciliation AI": "/petty-cash-reconciliation-ai-agent",
  "Tender Cartel Audit AI": "/tender-cartel-audit-ai-agent",
  "Procurement Price Benchmarker": "/procurement-price-benchmarker-agent",
  "SS Fund Encrypted Auditor": "/ss-fund-encrypted-auditor-agent",
  "Grant Utilization Auditor": "/grant-utilization-auditor-agent",
  "Fund Diversion Detector AI": "/fund-diversion-detector-ai-agent",
  "Taxation (TDS/GST) Audit Bot": "/taxation-tds-gst-audit-bot-agent",
  "Asset Depreciation Auditor": "/asset-depreciation-auditor-agent",
  "Inventory Shrinkage Audit AI": "/inventory-shrinkage-audit-ai-agent",
  "Station Level Audit Bot": "/station-level-audit-bot-agent",
  "Headquarters Audit Sweeper": "/headquarters-audit-sweeper-agent",
  "Treasury Discrepancy Finder": "/treasury-discrepancy-finder-agent",
  "Bank Reconciliation AI": "/bank-reconciliation-ai-agent",
  "Digital Signature Validator": "/digital-signature-validator-agent",
  "Biometric Audit Trail AI": "/biometric-audit-trail-ai-agent",
  "Blockchain Ledger Auditor": "/blockchain-ledger-auditor-agent",
  "Zero-Trust Access Auditor": "/zero-trust-access-auditor-agent",
  "Audit Query Auto-Responder": "/audit-query-auto-responder-agent",
  "Compliance Deviation Alerter": "/compliance-deviation-alerter-agent",
  "SOP Breach Audit AI": "/sop-breach-audit-ai-agent",
  "Medical Claim Fraud Auditor": "/medical-claim-fraud-auditor-agent",
  "TA/DA Travel Audit Bot": "/ta-da-travel-audit-bot-agent",
  "Fuel Log Anomaly Detector": "/fuel-log-anomaly-detector-agent",
  "Logistics & Shipping Auditor": "/logistics-shipping-auditor-agent",
  "Weaponry Stock Audit AI": "/weaponry-stock-audit-ai-agent",
  "Ammunition Discrepancy Bot": "/ammunition-discrepancy-bot-agent",
  "Riot Gear Inventory Auditor": "/riot-gear-inventory-auditor-agent",
  "Confiscated Asset Audit AI": "/confiscated-asset-audit-ai-agent",
  "Seized Cash Vault Auditor": "/seized-cash-vault-auditor-agent",
  "Narcotics Seizure Audit Bot": "/narcotics-seizure-audit-bot-agent",
  "Forensic Lab Audit AI": "/forensic-lab-audit-ai-agent",
  "Cyber Cell CapEx Auditor": "/cyber-cell-capex-auditor-agent",
  "IT Hardware Lifespan Audit": "/it-hardware-lifespan-audit-agent",
  "Software License Usage Audit": "/software-license-usage-audit-agent",
  "Cloud Server Billing Auditor": "/cloud-server-billing-auditor-agent",
  "Smart City CCTV Audit AI": "/smart-city-cctv-audit-ai-agent",
  "Drone Flight Log Auditor": "/drone-flight-log-auditor-agent",
  "Marine Fuel Audit Bot": "/marine-fuel-audit-bot-agent",
  "Aviation Maintenance Auditor": "/aviation-maintenance-auditor-agent",
  "K9 Unit Expense Audit AI": "/k9-unit-expense-audit-ai-agent",
  "Welfare Fund Audit Bot": "/welfare-fund-audit-bot-agent",
  "Hospital Pharmacy Auditor": "/hospital-pharmacy-auditor-agent",
  "Canteen Sales Audit AI": "/canteen-sales-audit-ai-agent",
  "Guest House Revenue Audit": "/guest-house-revenue-audit-agent",
  "Event Security Billing Audit": "/event-security-billing-audit-agent",
  "Traffic Fine Collection Audit": "/traffic-fine-collection-audit-agent",
  "Lok Adalat Settlement Audit": "/lok-adalat-settlement-audit-agent",
  "Vendor SLA Breach Auditor": "/vendor-sla-breach-auditor-agent",
  "Penalty Deduction Audit AI": "/penalty-deduction-audit-ai-agent",
  "Insurance Claim Audit Bot": "/insurance-claim-audit-bot-agent",
  "Construction CapEx Auditor": "/construction-capex-auditor-agent",
  "Housing Maintenance Audit": "/housing-maintenance-audit-agent",
  "Green Energy ROI Auditor": "/green-energy-roi-auditor-agent"
};
const isClickable = (expert) => !!expertRoutes[expert];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Core AI Topics', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Advanced Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const AuditFinanceDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI AUDIT MANAGEMENT
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI AUDIT MANAGEMENT</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in continuous oversight, fraud detection & cag pre-audits.
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
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan" onClick={() => navigate(`/agent/${encodeURIComponent(expert)}`)} style={{cursor: 'pointer'}}>
                <Bot className="card-icon" />
                <h4>{expert}</h4>
              </motion.div>
            ))}
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
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple" onClick={() => navigate(`/agent/${encodeURIComponent(expert)}`)} style={{cursor: 'pointer'}}>
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
            <h1 className="cyber-title">AI AUDIT <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">Continuous Oversight, Fraud Detection & CAG Pre-Audits</p>
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

export default AuditFinanceDetailed;
