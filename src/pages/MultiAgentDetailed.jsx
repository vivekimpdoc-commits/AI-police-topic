import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, Briefcase, Calendar, Calculator, Target, BookOpen, Heart, Smartphone, HardDrive, Bell, CheckCircle, ShieldAlert
} from "lucide-react";
import '../styles/hrmsDetailed.css';

const aiExperts = [
  "Multi-Agent Orchestrator AI", "AI Workflow Coordinator AI", "Master Command AI",
  "Mission Planner AI", "Resource Allocation AI", "Dynamic Task Allocation AI",
  "Agent Performance Analyzer AI", "Situation Awareness AI", "Decision Support AI",
  "Predictive Intelligence AI", "AI Collaboration Manager AI", "Communication Hub AI",
  "Intelligence Fusion Center AI", "Human-in-the-Loop AI", "Security Policy AI",
  "Integration Manager AI", "Risk Prediction AI", "Anomaly Detection AI",
  "Executive Command Dashboard AI", "Audit Trail AI"
];

const multiAgentModules = [
  {
    title: "Orchestration & Workflow",
    icon: <Network size={20} />,
    items: ["Multi-Agent Orchestrator AI", "AI Workflow Coordinator AI", "Master Command AI", "Mission Planner AI"]
  },
  {
    title: "Resource & Task Management",
    icon: <Activity size={20} />,
    items: ["Resource Allocation AI", "Dynamic Task Allocation AI", "Agent Performance Analyzer AI"]
  },
  {
    title: "Intelligence & Decision",
    icon: <Target size={20} />,
    items: ["Situation Awareness AI", "Decision Support AI", "Predictive Intelligence AI", "Risk Prediction AI", "Anomaly Detection AI"]
  },
  {
    title: "Collaboration & Communication",
    icon: <Bot size={20} />,
    items: ["AI Collaboration Manager AI", "Communication Hub AI", "Intelligence Fusion Center AI"]
  },
  {
    title: "Security & Control",
    icon: <ShieldAlert size={20} />,
    items: ["Human-in-the-Loop AI", "Security Policy AI", "Integration Manager AI", "Executive Command Dashboard AI", "Audit Trail AI"]
  }
];

const aiFeatures = [
  "Dynamic Agent Spawning", "Cross-Agent Communication Protocol", "Real-Time Resource Optimization",
  "Automated Mission Planning", "Predictive Threat Modeling", "Agent Performance Benchmarking",
  "Semantic Knowledge Fusion", "Human-AI Collaborative Decisioning", "Self-Healing Workflow Execution",
  "Distributed Situation Awareness", "Anomaly Detection & Alerting", "Secure Audit Trailing"
];

const databases = [
  "AgentRegistry", "ActiveMissions", "TaskQueues", "ResourcePools", "IntelligenceGraph", "CommunicationLogs",
  "PerformanceMetrics", "SecurityPolicies", "AuditTrails", "ThreatModels", "DecisionTrees", "KnowledgeBase"
];

const dashboards = [
  "Executive Command Dashboard", "Mission Control Center", "Agent Performance Monitor",
  "Resource Allocation View", "Threat Intelligence Board", "System Health & Audit Dashboard",
  "Human-in-the-Loop Console"
];

const apis = [
  "Agent Spawning APIs", "Task Delegation APIs", "Inter-Agent Comm APIs", "Intelligence Fusion APIs",
  "Resource Management APIs", "Security Enforcement APIs", "Audit Logging APIs", "Mission Status APIs",
  "External System Integration APIs", "Data Lake Sync APIs"
];

const reports = [
  "Mission Success & Efficiency Report", "Agent Utilization & Performance Report", "Threat Intelligence Summary",
  "Resource Allocation Audit", "System Anomaly & Incident Report", "Collaborative Decision Audit",
  "Security Policy Compliance Report"
];

const security = [
  "Zero-Trust Agent Architecture", "Cryptographic Inter-Agent Comms", "Strict Human-in-the-Loop Override",
  "Role-Based Agent Capabilities", "Immutable Blockchain Audit Trail",
  "Real-Time Malicious Agent Detection", "Encrypted State Management", "Secure API Gateways"
];

const futureScope = [
  "Quantum-Safe Agent Communications", "Swarm Intelligence Scaling", "Autonomous Cross-Agency Collaboration",
  "Self-Evolving Threat Models", "Generative Mission Strategies", "Real-Time Edge Deployment",
  "Cognitive Digital Twins Integration", "Global Intelligence Sync"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `Multi-Agent AI Experts (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'Multi-Agent Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Reports & Dashboards', icon: <FileText size={18} /> },
  { id: 'security', label: 'Security & Future', icon: <Shield size={18} /> }
];

const MultiAgentDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Network className="inline-icon" size={28} /> AI Multi-Agent Platform Overview
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Multi-Agent Platform</strong> is an advanced orchestration system that coordinates multiple specialized AI agents. It ensures seamless communication, resource allocation, and mission planning across all intelligence and operational domains.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Bot className="inline-icon" color="#3b82f6" /> Multi-Agent Orchestration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Deploys and synchronizes numerous AI agents for complex operations, ensuring they work collaboratively towards a unified objective.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#10b981" /> Dynamic Task Allocation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically assigns tasks to the most suitable AI expert based on real-time situation awareness and resource availability.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Target className="inline-icon" color="#f59e0b" /> Intelligence Fusion</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Fuses insights from various specialized AI agents to generate a holistic, predictive intelligence overview for command decisions.</p>
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
            {multiAgentModules.map((mod, i) => (
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
                  {dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6" /> {d}</li>)}
                </ul>
              </div>
              <div className="panel">
                <h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3>
                <ul className="premium-list">
                  {reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981" /> {r}</li>)}
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
                  {security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444" /> {s}</li>)}
                </ul>
              </div>
              <div className="panel highlight-green">
                <h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3>
                <ul className="premium-list">
                  {futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981" /> {f}</li>)}
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
            <Network size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI MULTI-AGENT <span>PLATFORM</span></h1>
            <p className="cyber-subtitle">Advanced Orchestration and Dynamic Task Allocation</p>
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

export default MultiAgentDetailed;
