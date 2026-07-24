import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Landmark, Users, Briefcase, GraduationCap
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Corporate Security Job Matcher AI", "Bank Guard Deployment Sync", "Private Detective Agency Licenser",
  "Veteran Skill-to-Resume Translator", "Post-Retirement Psychological Counseling", "Pensioner Loan Settlement Negotiator",
  "Veteran Entrepreneurship Fund AI", "Small Business Registration Bot", "Ex-Servicemen Quota Govt Job Sync",
  "Martyr Family Child Education AI", "Police School Admission Sync", "Widow Skill Development Matcher",
  "Widow Pension Grievance AI", "Old Age Home/Care Verification AI", "Veteran Health Scheme (CGHS) Sync",
  "Chronic Illness Drug Subsidy AI", "Wheelchair/Prosthetics Fund AI", "Veteran Canteen Smart Card AI",
  "Canteen Liquor Quota Tracker AI", "Grocery Subsidy Fraud Detector", "Police Housing Society Allotment AI",
  "Veteran Land Dispute Priority AI", "Legal Aid for Retired Officers", "NGO & CSR Fund Router AI",
  "Veteran Suicide Prevention NLP", "Loneliness & Depression Support Bot", "Police Foundation Donation Sync",
  "Veteran Commemoration Event Planner", "Obituary & Honor Guard Sync", "Funeral Expense Ex-Gratia AI",
  "Retiree Mentorship Network Matcher", "Guest Lecturer (Academy) Sync", "Cold Case Veteran Consultant AI",
  "Traffic Warden Volunteer Sync", "Cyber Crime Citizen Volunteer AI", "Neighborhood Watch Veteran Lead AI",
  "Election Special Police Officer (SPO)", "Disaster Management Reserve AI", "VVIP Event Crowd Control Reserve",
  "Veteran Identity Card (DigiLocker)", "Weapon License Renewal (Veteran)", "Retiree Armory Deposit Sync",
  "Veteran Vehicle Purchase Tax Subsidy", "Toll Tax Exemption Card AI", "Railway Concession Pass Sync",
  "Elder Abuse Grievance Fast-Track", "Property Grabbing Dispute AI", "Financial Fraud/Scam Victim Support",
  "Veteran Income Tax Filing Bot", "Digital Literacy Coaching Bot", "Smart Smartphone Usage Trainer",
  "Spouse Survivor Benefit Sync", "Orphaned Child Stipend AI", "Special Needs Child Pension AI",
  "Veteran Co-operative Society Auditor", "Police Petrol Pump Allotment AI", "Gas Agency Allotment Sync AI",
  "Retiree Grievance Adalat Sync", "DGP Veteran Townhall Q&A AI", "Veteran History & Memoirs Archiver"
];

const modules = [
  {
    title: "Second Career & Skills",
    icon: <Briefcase size={20} />,
    items: ["Corporate Security Match", "Resume Translators", "SPO/Volunteer Sync", "Entrepreneurship Funds"]
  },
  {
    title: "Martyr & Family Support",
    icon: <GraduationCap size={20} />,
    items: ["Child Education Quotas", "Widow Skill Dev", "Orphan Stipends", "Spouse Survivor Benefits"]
  },
  {
    title: "Health & Welfare",
    icon: <Activity size={20} />,
    items: ["CGHS Medical Sync", "Chronic Drug Subsidies", "Depression Support", "Prosthetics Funds"]
  },
  {
    title: "Canteen & Subsidies",
    icon: <CheckCircle size={20} />,
    items: ["Canteen Smart Cards", "Liquor Quota Trackers", "Vehicle Tax Subsidies", "Toll Exemptions"]
  },
  {
    title: "Legal & Crisis Support",
    icon: <ShieldAlert size={20} />,
    items: ["Elder Abuse Fast-Track", "Land Dispute Priority", "Fraud Victim Support", "Funeral Ex-Gratia"]
  }
];

const aiFeatures = [
  "Algorithmic Resume Translation (Police Skills to Corporate)", "Predictive Suicide & Depression Monitoring for Veterans", "Zero-Delay Routing of Martyr Family Education Funds",
  "AI-Driven Smart Card Fraud Detection (Canteen)", "Automated Matchmaking for Cold-Case Veteran Consultants", "Priority Geofenced SOS for Elder Abuse"
];

const databases = [
  "Veteran_Master_Registry", "Martyr_Family_Ledger", "Corporate_Job_Matrix", "Canteen_Subsidy_Vault", 
  "Medical_CGHS_Archive", "Skill_Development_DB", "Grievance_Legal_Lake", "Volunteer_Reserve_Force"
];

const dashboards = [
  "Veteran Welfare & Health Map", "Martyr Family Fund Status", "Second Career Placements", 
  "Canteen & Subsidy Usage", "Elderly Grievance Pendency", "Veteran Volunteer Force Status"
];

const apis = [
  "Corporate Job Portals (LinkedIn/Naukri)", "CGHS Hospital Gateway", "State Education Board (Quotas)", 
  "DigiLocker Identity Sync", "Police Canteen PoS API", "NGO/CSR Funding Webhooks"
];

const reports = [
  "Annual Veteran Rehabilitation Success", "Martyr Family Education Impact", "Canteen Quota Fraud Audit", 
  "Elderly Abuse Case Resolution", "Reserve Force (SPO) Deployment", "Health Subsidy Expenditure"
];

const security = [
  "Biometric Canteen Card Auth", "Encrypted Medical Records", "Strict Verification for Martyr Funds", 
  "Anti-Tamper Job Referral Logs", "Secure DigiLocker IDs", "Role-Based Grievance Access"
];

const futureScope = [
  "VR-Based Mental Health Therapy for PTSD", "Decentralized Autonomous Welfare Funds (DAOs)", "AI Avatars for Financial Literacy Training",
  "Drone Delivery of Chronic Medicines to Elderly", "Blockchain Voting for Police Welfare Societies", "Automated DNA/Genealogy for Lost Heirs"
];


const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Veteran Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Support Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Welfare Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ResettlementVeteranSupportDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Users className="inline-icon" size={28} /> Resettlement & Veteran Support AI
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Resettlement & Veteran Support AI</strong> honors the service of retired officers and martyrs. It translates police skills into corporate jobs, completely manages canteen and health subsidies, and provides an absolute safety net for martyr families—ensuring zero bureaucratic delays for child education and widow support.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Briefcase className="inline-icon" color="#3b82f6" /> Second Careers</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Translates a veteran's service record into a corporate resume, matchmaking them with roles in private security, cyber consultancy, or as Special Police Officers (SPOs) during elections.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><GraduationCap className="inline-icon" color="#10b981" /> Martyr Family Safety Net</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Provides end-to-end routing for martyr families, tracking school/college admission quotas for children and skill development programs for widows.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Legal & Crisis Protection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Establishes a priority SOS fast-track for veterans facing elder abuse, property grabbing, or financial scams, instantly dispatching local jurisdiction police.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Health & Subsidies</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors Canteen Smart Card usage to prevent quota fraud. Syncs with CGHS to ensure chronic illness drug subsidies and post-retirement psychological counseling.</p>
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
            {modules.map((mod, i) => (
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
            <h3 style={{ color: '#06b6d4', marginBottom: '1.5rem' }}><Database className="inline-icon" /> Data Ledgers</h3>
            <div className="tags-container" style={{ marginBottom: '2.5rem' }}>
              {databases.map((db, i) => <span key={i} className="cyber-tag">{db}</span>)}
            </div>
            
            <h3 style={{ color: '#10b981', marginBottom: '1.5rem' }}><Network className="inline-icon" /> Integration APIs</h3>
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
                <h3 style={{ color: '#3b82f6', marginBottom: '1.5rem' }}><FileText className="inline-icon" /> Impact Reports</h3>
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
            <h3 style={{ color: '#ef4444', marginBottom: '1.5rem' }}><Shield className="inline-icon" /> Data Security</h3>
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
            <Users size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">RESETTLEMENT & VETERAN <span>SUPPORT AI</span></h1>
            <p className="cyber-subtitle">Second Careers, Martyr Family Care & Welfare Subsidies</p>
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

export default ResettlementVeteranSupportDetailed;
