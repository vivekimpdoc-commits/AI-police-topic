import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, Target, TrendingUp
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "5-Year Plan Modeler AI", "Budget Forecaster Bot", "Recruitment Analyzer", 
  "Smart Police Scorer", "Maturity Assessor Bot", "Modernization Tracker", 
  "Infrastructure Planner AI", "Innovation Sync Bot", "Policy Simulator",
  "Demographic Analyst AI", "Risk Forecaster Bot", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const planningModules = [
  {
    title: "Long-Term Force Planning",
    icon: <Target size={20} />,
    items: ["5-Year Strategic Goals", "Demographic Shift Projections", "Recruitment Wave Planning", "Retirement Gap Analysis"]
  },
  {
    title: "Budget & Modernization",
    icon: <TrendingUp size={20} />,
    items: ["Budget Utilization Forecasting", "Modernization Fund Tracking", "ROI on Tech Investments", "Grant Proposal Generator"]
  },
  {
    title: "Infrastructure Expansion",
    icon: <LayoutDashboard size={20} />,
    items: ["New Police Station Locator", "Crime-to-Station Distance Mapping", "Barrack Expansion Planner", "Land Acquisition Tracker"]
  },
  {
    title: "Smart Police Indexing",
    icon: <Activity size={20} />,
    items: ["District-wise SMART Scoring", "Organizational Maturity Assessment", "Citizen Trust Index Tracker", "Digital Adoption Rate"]
  },
  {
    title: "Innovation & Policy Simulation",
    icon: <Cpu size={20} />,
    items: ["AI Policy Impact Simulator", "New Tech Adoption Tracking", "Global Policing Trends", "Strategic Risk Assessment"]
  }
];

const aiFeatures = [
  "AI Forecasting of Budget Deficits", "AI Simulation of Station Relocation Impact", "AI Demographic-Driven Crime Forecasting",
  "AI Analysis of Global Tech Trends", "AI Automated Generation of Annual Plans", "AI Sentiment Analysis on Trust Index",
  "AI Identification of Skill Gaps", "AI Resource Misallocation Detection"
];

const databases = [
  "Strategic_Five_Year_Plans", "Budget_Allocation_Ledger", "Demographic_Projections", "Infrastructure_Expansion_DB", "Smart_Police_Index_Scores", 
  "Innovation_Adoption_Tracker", "Retirement_Schedules", "Global_Trend_Lake", "Trust_Index_Surveys"
];

const dashboards = [
  "Strategic Plan Execution Radar", "Budget vs Actuals Tracker", "SMART Police District Rankings", 
  "Infrastructure Gap Heatmap", "Force Strength Projections", "Modernization ROI"
];

const apis = [
  "State Finance Dept (Treasury) APIs", "Census Bureau Data Feeds", "Public Sentiment Scraping APIs", "Real Estate (Land) APIs",
  "HRMS Payroll & Retirement Sync", "CCTNS Crime Density Sync"
];

const reports = [
  "Annual Strategic Achievements", "10-Year Recruitment Forecast", "Modernization Budget Audit", 
  "Infrastructure Vulnerability Report", "SMART Police Progress Card", "Policy Simulation Verdict"
];

const security = [
  "Executive-Only Access (DGP/Home Sec)", "Data Obfuscation for Future Plans", "Immutable Budget Ledgers", 
  "Air-Gapped Simulation Engines", "Tamper-Evident Policy Drafts", 
  "Biometric Strategic Briefing Locks", "Role-Based Budget Viewing", "Encrypted Finance Transmissions"
];

const futureScope = [
  "AI Fully Autonomous Budget Allocation", "Digital Twin of the Entire State Police", "Predictive Citizen Uprising Modeling",
  "Quantum Computing for Complex Planning", "Virtual Reality Infrastructure Walkthroughs", "Real-Time AI Policy Redrafting"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Strategy Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Planning Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Strategy Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const StrategicPlanningDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Target className="inline-icon" size={28} /> AI Strategic Planning & Modernization
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>Strategic Planning</strong> is the brain of the police department's future. It uses AI to forecast demographic shifts, simulate policy impacts, optimize billion-dollar budgets, and plan the physical and digital expansion of the force over the next decade.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingUp className="inline-icon" color="#3b82f6" /> Budget Forecasting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ingests historical expenditure and predicts future budget requirements. The AI optimizes the allocation of the Police Modernization Fund to yield the highest ROI on new technology.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><LayoutDashboard className="inline-icon" color="#10b981" /> Infrastructure Planner</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Overlays crime density maps with current police station locations to mathematically pinpoint where the next 5 police stations should be built to minimize emergency response times.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#f59e0b" /> Workforce Projection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes current age demographics of the force to predict mass retirements. Automatically generates 5-year recruitment plans to ensure zero gap in operational strength.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Cpu className="inline-icon" color="#ef4444" /> Policy Simulator</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Before deploying a new state-wide directive, the AI runs a 'Digital Twin' simulation to predict potential bottlenecks, financial costs, and public reception.</p>
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
            {planningModules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  {mod.icon}
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
            {aiFeatures.map((feat, i) => (
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
                <h3><Database className="inline-icon" color="#06b6d4" /> Database Tables</h3>
                <div className="tag-cloud">
                  {databases.map((db, i) => <span key={i} className="tech-tag">{db}</span>)}
                </div>
              </div>
              <div className="panel">
                <h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3>
                <div className="tag-cloud">
                  {apis.map((api, i) => <span key={i} className="tech-tag tech-tag-alt">{api}</span>)}
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
                  {dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>)}
                </ul>
              </div>
              <div className="panel">
                <h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3>
                <ul className="premium-list">
                  {reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>)}
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
                  {security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}
                </ul>
              </div>
              <div className="panel highlight-green">
                <h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3>
                <ul className="premium-list">
                  {futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}
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
            <Target size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">STRATEGIC <span>PLANNING</span></h1>
            <p className="cyber-subtitle">Budget Forecast, 5-Year Masterplans & Policy Sim</p>
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

export default StrategicPlanningDetailed;
