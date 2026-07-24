import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Target, TrendingUp
} from "lucide-react";
import '../styles/hrmsDetailed.css';

const aiExperts = ["Annual Calendar AI", "Resource Readiness Scorer", "District Audit Bot", "Strategic Initiative Tracker", "Capability Gap Analyzer", "Innovation Index AI", "Benchmarking Bot", "Mission Dashboard AI", "Preparedness Auditor", "Long-Term Planner AI", "Strategic Review AI"];
const planningModules = [
  { title: "Annual Planning", icon: <Target size={20} />, items: ["AI Annual Policing Calendar", "District Preparedness Audit", "Zone Resource Allocation", "Seasonal Crime Preparation"] },
  { title: "Strategic Initiatives", icon: <TrendingUp size={20} />, items: ["Strategic Initiative Tracker", "Mission Objective Dashboard", "5-Year Vision Roadmap", "Policy Impact Assessment"] },
  { title: "Capability Analysis", icon: <Activity size={20} />, items: ["Capability Gap Analysis", "Long-Term Equipment Planning", "Manpower Requirement Forecasting", "Technology Readiness Index"] },
  { title: "Innovation & Benchmarking", icon: <Rocket size={20} />, items: ["Police Innovation Index", "Organizational Benchmarking", "Strategic Review Repository", "Global Policing Comparisons"] }
];
const aiFeatures = ["AI Simulation of Policing Scenarios for Annual Planning", "AI Automated SWOT Analysis of District Readiness", "AI Benchmarking against National Crime Record Bureau Targets", "AI Long-term Demographic Modeling for Police Expansion", "AI Real-time Strategic Initiative Progress Tracking", "AI Detection of Capability Gaps from Incident Reports", "AI Innovation Idea Scoring and Prioritization", "AI Automated Strategic Review Report Generation"];
const databases = ["Annual_Plan_DB", "Strategic_Initiatives_Lake", "Capability_Gap_Index", "Preparedness_Audit_Logs", "Innovation_Proposals", "Benchmarking_Data", "Mission_Objectives_DB", "Resource_Readiness_Scores"];
const dashboards = ["State Readiness Scorecard", "Strategic Initiative Progress", "Capability Gap Radar", "Innovation Pipeline", "District Preparedness Heatmap", "Mission Achievement Rate"];
const apis = ["NCRB (National Crime Records Bureau) Data", "State Finance Dept Planning API", "NITI Aayog Indicators", "BPR&D Research Gateway", "MHA Annual Report Feeds", "State Planning Commission"];
const reports = ["Annual Policing Action Plan", "Capability Gap Analysis Report", "Innovation ROI Assessment", "Benchmarking Scorecard", "5-Year Strategic Roadmap", "District Preparedness Audit"];
const security = ["Executive-level Encryption for Strategic Plans", "Role-Based Access (ADG/DG level)", "Anti-leak DLP on Strategic Documents", "Watermarking on Sensitive Reports", "Audit Trails for Plan Modifications", "Air-gapped Storage for Classified Plans", "Blockchain Verification of Commitments", "MFA for Strategy Portal Access"];
const futureScope = ["AI Digital Twin of State Police for Scenario Testing", "Quantum-Safe Strategic Planning Infrastructure", "AI Automated Parliamentary Committee Briefings", "Predictive Resource Allocation using ML", "Global Benchmarking via Interpol", "Autonomous Strategic Review Cycles"];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> }, { id: 'experts', label: 'Planning Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Strategy Modules', icon: <LayoutDashboard size={18} /> }, { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> }, { id: 'reports', label: 'Exec Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PlanningStrategyDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
          <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}><Target className="inline-icon" size={28} /> AI Planning & Strategy</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}><strong>Planning & Strategy</strong> is the annual nerve center of police administration. AI transforms the static annual plan into a living, adaptive document — tracking mission achievement in real-time, predicting capability gaps before operations, and benchmarking the force against national standards.</p>
          <div className="split-section" style={{ gap: '1.5rem' }}>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#3b82f6" /> AI Annual Calendar</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>AI generates the annual policing calendar by analyzing historical event data, election schedules, and crime seasonality — automatically pre-allocating forces for festivals, elections, and other high-risk periods.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Capability Gap AI</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Cross-references current force strength, equipment inventory, and historical crime data to pinpoint exactly where the force is under-resourced and generates a prioritized procurement and training plan.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><TrendingUp className="inline-icon" color="#f59e0b" /> Mission Tracking</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Converts high-level strategic goals (e.g., 'Reduce vehicle theft by 20%') into measurable KPIs tracked in real-time. AI alerts DIG/IG when a district is falling behind its committed targets.</p></div>
            <div className="panel" style={{ padding: '1.5rem' }}><h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Rocket className="inline-icon" color="#ef4444" /> Innovation Index</h3><p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Creates a dynamic 'Police Innovation Index' that ranks districts and units on technology adoption, process improvement, and citizen satisfaction — incentivizing innovation across the force.</p></div>
          </div>
        </motion.div>
      );
      case 'experts': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">{aiExperts.map((e, i) => <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan"><Bot className="card-icon" /><h4>{e}</h4></motion.div>)}</motion.div>;
      case 'modules': return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">{planningModules.map((mod, i) => <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel"><div className="module-header">{mod.icon}<h3>{mod.title}</h3></div><div className="module-tags">{mod.items.map((item, j) => <span key={j} className="module-tag">{item}</span>)}</div></motion.div>)}</motion.div>;
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
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper"><Target size={40} color="#06b6d4" /></motion.div>
          <div><h1 className="cyber-title">PLANNING & <span>STRATEGY</span></h1><p className="cyber-subtitle">Annual Calendar, Capability Gap AI & Innovation Index</p></div>
        </div>
      </header>
      <div className="hrms-layout">
        <nav className="hrms-sidebar">{tabs.map(tab => <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.icon} {tab.label}</button>)}</nav>
        <main className="hrms-content-area"><AnimatePresence mode="wait"><div key={activeTab}>{renderContent()}</div></AnimatePresence></main>
      </div>
    </div>
  );
};

export default PlanningStrategyDetailed;
