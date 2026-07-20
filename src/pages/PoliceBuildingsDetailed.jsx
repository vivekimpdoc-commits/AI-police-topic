import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Building2, Wrench } from 'lucide-react';
import '../styles/hrmsDetailed.css';

const aiExperts = ["Structural Inspector AI", "Roof Maintenance Bot", "Water Tank Scheduler", "Lift Safety Monitor", "AC Maintenance AI", "CCTV Pole Inspector", "Boundary Wall AI", "Electrical Safety Bot", "Drainage Inspector AI", "Solar Power Monitor", "Energy Audit AI", "Backend Developer AI", "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"];
const buildingModules = [
  { title: "Structural Maintenance", icon: <Building2 size={20} />, items: ["AI Police Station Layout Planner", "Boundary Wall Inspection", "Roof Maintenance Planner", "Foundation Crack Detector"] },
  { title: "Mechanical & Electrical", icon: <Wrench size={20} />, items: ["AI Maintenance Predictor", "AC Maintenance Planner", "Electrical Safety Inspection", "Generator Health Monitor"] },
  { title: "Utilities & Sanitation", icon: <Activity size={20} />, items: ["AI Energy Efficiency Monitor", "Drainage Inspection AI", "Solar Power Monitoring", "Rainwater Harvesting Tracking"] },
  { title: "Security Infrastructure", icon: <Shield size={20} />, items: ["CCTV Pole Maintenance", "Barricade & Gate Upkeep", "Sentry Post Upkeep", "Perimeter Lighting Audit"] }
];
const aiFeatures = ["AI Structural Health Monitoring via IoT Vibration Sensors", "AI Prediction of AC Failure based on Power Consumption Trends", "AI Solar Panel Efficiency Degradation Forecasting", "AI Water Tank Contamination Detection via IoT Sensors", "AI Drone Inspection of Roof and Boundary Walls", "AI Energy Consumption Anomaly Detection", "AI Automated PPM (Planned Preventive Maintenance) Scheduling", "AI Prioritization of Maintenance Based on Safety Criticality"];
const databases = ["Building_Inspection_Registry", "Maintenance_Work_Orders", "Lift_Safety_Logs", "Electrical_Audit_DB", "Solar_Power_Metrics", "Water_Tank_Schedule", "CCTV_Pole_Status", "Energy_Consumption_Ledger"];
const dashboards = ["Building Health Heatmap", "Maintenance Work Order Status", "Energy Consumption Monitor", "Solar Power Generation", "Lift Safety Compliance", "Water Tank Hygiene Status"];
const apis = ["PWD (Public Works Dept) Portals", "Electricity Boards API", "Solar Meter Integration", "Smart Building IoT Platform", "CPWD Maintenance Standards", "Municipal Water Supply API"];
const reports = ["Annual Building Structural Report", "Electrical Safety Compliance", "Energy Audit Summary", "Lift Inspection Certificate", "Solar ROI Report", "Maintenance Cost Analysis"];
const security = ["Access Control for Sensitive Areas (Server Rooms)", "CCTV Monitoring of All Entry Points", "Visitor Log Integration with Building Access", "IoT Sensor Data Integrity Verification", "Encrypted Building Management System", "Anti-tampering on Smart Meters", "Emergency Power Monitoring with Auto Alerts", "Contractor Background Verification"];
const futureScope = ["AI Autonomous Drone Inspection of Building Exteriors", "Digital Twins of All Police Station Buildings", "Predictive Budget Allocation using ML for Maintenance", "Smart Energy Grid Integration for Cost Optimization", "Robotic Facility Management Automation", "Green Building Certification AI"];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> }, { id: 'experts', label: 'Facility Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Building Modules', icon: <LayoutDashboard size={18} /> }, { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> }, { id: 'reports', label: 'Facility Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PoliceBuildingsDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
          <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}><Building2 className="inline-icon" size={28} /> AI Police Buildings Management</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}><strong>Police Buildings Management</strong> uses IoT sensors and AI to move from reactive to predictive maintenance of thousands of police stations across the state. From detecting structural cracks to optimizing solar panel energy output, AI keeps the infrastructure safe and cost-efficient.</p>
          <div className="split-section" style={{ gap: '1.5rem' }}>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Building2 className="inline-icon" color="#3b82f6" /> Structural Health AI</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>IoT vibration and tilt sensors embedded in buildings continuously stream data. AI analyzes the patterns to predict structural stress, scheduling inspection before a minor crack becomes a safety hazard.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Wrench className="inline-icon" color="#10b981" /> Predictive Maintenance</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI analyzes power consumption of ACs and lifts to predict failures before they occur. For example, if an AC is drawing 15% more power than usual, the AI schedules a service call, avoiding costly breakdown replacements.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#f59e0b" /> Energy Optimization</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI monitors real-time electricity, water, and solar generation across all buildings, identifying high-consumption outliers and generating recommendations to reduce energy bills by up to 30%.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#ef4444" /> Drone Inspections</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instead of risky manual inspection of rooftops and tall boundary walls, AI-guided drones capture high-resolution images that are automatically analyzed by computer vision to identify damage, cracks, or security breaches.</p></div>
          </div>
        </motion.div>
      );
      case 'experts': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">{aiExperts.map((e, i) => <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan"><Bot className="card-icon" /><h4>{e}</h4></motion.div>)}</motion.div>;
      case 'modules': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">{buildingModules.map((mod, i) => <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel"><div className="module-header">{mod.icon}<h3>{mod.title}</h3></div><div className="module-tags">{mod.items.map((item, j) => <span key={j} className="module-tag">{item}</span>)}</div></motion.div>)}</motion.div>;
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
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><Building2 size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">POLICE <span>BUILDINGS</span></h1><p className="cyber-subtitle">IoT Structural Monitoring, Drone Inspections & Energy AI</p></div>
        </div>
      </header>
      <div className="hrms-layout">
        <nav className="hrms-sidebar">{tabs.map(tab => <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.icon} {tab.label}</button>)}</nav>
        <main className="hrms-content-area"><AnimatePresence mode="wait"><div key={activeTab}>{renderContent()}</div></AnimatePresence></main>
      </div>
    </div>
  );
};

export default PoliceBuildingsDetailed;
