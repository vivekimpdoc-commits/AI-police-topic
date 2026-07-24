import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Users, Settings, GitBranch, RefreshCw
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "Model Drift Detector AI", "Weight Encryption Specialist", "Hyperparameter Tuning Bot", 
  "Bias & Fairness Auditor AI", "Edge Deployment Coordinator", "Federated Learning Sync Agent", 
  "A/B Testing Evaluator AI", "GPU Resource Allocator", "Synthetic Data Generator AI",
  "Model Rollback Agent", "Adversarial Attack Defender", "Concept Drift Alert Bot",
  "Accuracy Degradation Monitor", "Real-world Metrics Validator", "Automated Retraining Trigger AI",
  "Hardware-aware Quantization Bot", "Demographic Bias Scanner", "False-Positive Rate Tester",
  "Legal Compliance Checker AI", "Explainability (XAI) Reporter", "Model Weight Hashing Agent",
  "OTA Drone Update Coordinator", "Bodycam Edge Sync AI", "Smart CCTV Deployment Bot",
  "LLM Fine-tuning Assistant", "NLP Pipeline Optimizer", "Computer Vision Retraining Agent",
  "Zero-Downtime Hot Swapper", "Data Privacy Auditor AI", "Anonymization Pipeline Bot",
  "Pipeline Telemetry Collector", "Model Registry Webhook AI", "Kubernetes GPU Scaler Bot",
  "Triton Inference Optimizer", "HuggingFace Hub Sync Bot", "Poisoned Data Detector AI",
  "Zero-Trust Edge Sync Agent", "Immutable Version Logger", "Air-gapped Training Supervisor",
  "Cloud-to-Edge Bridge AI", "Self-Evolving Model Monitor", "Predictive Maintenance AI (GPU)",
  "TensorRT Optimization Agent", "Sparsity & Pruning Specialist", "Dataset Balancing Bot",
  "Out-of-Distribution Detector", "Multi-tenant Model Router", "Latency Benchmark Tester",
  "Memory Leak Detector AI", "Model API Rate Limiter", "Feature Store Sync Agent",
  "Training Cost Estimator AI", "Energy Efficiency Optimizer", "Gradient Vanishing Alert Bot",
  "Overfitting Detection AI", "Continuous Integration (CI) Bot", "Artifact Registry Manager",
  "Data Lineage Tracker", "Sandbox Testing Coordinator", "MLOps Workflow Orchestrator"
];

const modelManagementModules = [
  {
    title: "Model Training & Fine-Tuning",
    icon: <Settings size={20} />,
    items: ["Custom LLM Fine-tuning (BNS Data)", "Facial Recognition Retraining", "Hyperparameter Optimization", "GPU Cluster Management"]
  },
  {
    title: "Edge Deployment (IoT)",
    icon: <Network size={20} />,
    items: ["Model Compression (Quantization)", "OTA Updates to Drones", "Deploy to Officer Bodycams", "Smart CCTV Edge Sync"]
  },
  {
    title: "Bias & Fairness Auditing",
    icon: <ShieldAlert size={20} />,
    items: ["Demographic Bias Scanning", "False-Positive Rate Testing", "Legal Compliance Checks", "Explainability (XAI) Reports"]
  },
  {
    title: "Drift & Performance Monitoring",
    icon: <Activity size={20} />,
    items: ["Concept Drift Alerts", "Accuracy Degradation Tracking", "Real-world vs Validation Metrics", "Automated Retraining Triggers"]
  },
  {
    title: "Version Control & Rollback",
    icon: <GitBranch size={20} />,
    items: ["A/B Testing Models", "Instant Model Rollback", "Model Weight Hashing", "Staging to Production Pipeline"]
  }
];

const aiFeatures = [
  "AI Automated Hyperparameter Tuning", "AI Federated Learning (Decentralized Sync)", "AI Zero-Downtime Hot Swapping",
  "AI Explainable AI (LIME/SHAP)", "AI Synthetic Crime Data Generation", "AI Hardware-aware Quantization",
  "AI Automated Bias Neutralization", "AI Adversarial Robustness Testing"
];

const databases = [
  "Model_Weights_Registry", "Training_Hyperparameters", "Validation_Datasets", "Bias_Audit_Logs", "Edge_Device_Manifests", 
  "A_B_Test_Metrics", "Drift_Alert_History", "GPU_Utilization_Stats", "Rollback_Snapshots", "Synthetic_Data_Vault"
];

const dashboards = [
  "Global Model Registry", "Active Training GPU Cluster", "Edge Deployment Topology", 
  "Bias & Fairness Scorecard", "Live Model Accuracy (Drift)", "A/B Testing Arena"
];

const apis = [
  "NVIDIA Triton Inference APIs", "Kubernetes GPU Scaling APIs", "Edge Device OTA APIs", "HuggingFace Hub Sync APIs",
  "CCTV Node Deployment APIs", "Model Registry Webhooks", "Telemetry Collection APIs"
];

const reports = [
  "Model Fairness & Bias Audit", "Edge Deployment Success Rate", "GPU Utilization Efficiency", 
  "Drift Degradation Alert Log", "A/B Test Winner Report", "Synthetic Data Quality Metrics"
];

const security = [
  "Model Weight Encryption (AES-256)", "Adversarial Attack Filtering", "Gov-Grade JWT Auth for Deployment", 
  "Immutable Version Hashes", "Air-gapped Training Environments", 
  "Model Poisoning Detection", "Zero-Trust Edge Sync", "Strict Approval Workflows"
];

const futureScope = [
  "Self-Evolving Autonomous Models", "Quantum Neural Network Training", "Global Interpol Federated Sync",
  "Neuromorphic Chip Deployment", "Instant Edge Retraining via Swarm", "Zero-Shot Universal Models"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: `MLOps Agents (${aiExperts.length})`, icon: <Bot size={18} /> },
  { id: 'modules', label: 'MLOps Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'ML Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const ModelManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <GitBranch className="inline-icon" size={28} /> AI Model Management (MLOps)
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Model Management (MLOps)</strong> is the engine room of the police AI ecosystem. It allows data scientists and AI engineers to securely train, audit, deploy, and monitor custom law-enforcement models (like facial recognition or predictive policing) across thousands of edge devices, ensuring zero bias and maximum accuracy.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Settings className="inline-icon" color="#3b82f6" /> Custom Model Training</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Train localized Large Language Models (LLMs) on highly classified state police data (like local slang or regional BNS codes) in completely air-gapped GPU clusters.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><RefreshCw className="inline-icon" color="#10b981" /> Over-The-Air (OTA) Edge Deployment</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly push compressed, optimized AI models (Quantization) to thousands of officer body-cams, drones, and smart CCTVs simultaneously without downtime.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><ShieldAlert className="inline-icon" color="#f59e0b" /> Bias & Fairness Auditing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Before any model goes live, AI Auditors strictly test it for demographic bias, ensuring the facial recognition algorithm does not unfairly target specific communities.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Activity className="inline-icon" color="#ef4444" /> Model Drift Monitoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Constantly monitors live models. If a predictive riot model's accuracy drops below 90% due to changing crowd behaviors (Concept Drift), it automatically triggers a rollback.</p>
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
            {modelManagementModules.map((mod, i) => (
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
            <GitBranch size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">AI MODEL <span>MANAGEMENT</span></h1>
            <p className="cyber-subtitle">MLOps, Edge Deployment, Bias Auditing & Drift Monitoring</p>
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

export default ModelManagementDetailed;
