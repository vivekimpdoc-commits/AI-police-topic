import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
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


const expertRoutes = {
  "Model Drift Detector AI": "/model-drift-detector-ai-agent",
  "Weight Encryption Specialist": "/weight-encryption-specialist-agent",
  "Hyperparameter Tuning Bot": "/hyperparameter-tuning-bot-agent",
  "Bias & Fairness Auditor AI": "/bias-fairness-auditor-ai-agent",
  "Edge Deployment Coordinator": "/edge-deployment-coordinator-agent",
  "Federated Learning Sync Agent": "/federated-learning-sync-agent-agent",
  "A/B Testing Evaluator AI": "/a-b-testing-evaluator-ai-agent",
  "GPU Resource Allocator": "/gpu-resource-allocator-agent",
  "Synthetic Data Generator AI": "/synthetic-data-generator-ai-agent",
  "Model Rollback Agent": "/model-rollback-agent-agent",
  "Adversarial Attack Defender": "/adversarial-attack-defender-agent",
  "Concept Drift Alert Bot": "/concept-drift-alert-bot-agent",
  "Accuracy Degradation Monitor": "/accuracy-degradation-monitor-agent",
  "Real-world Metrics Validator": "/real-world-metrics-validator-agent",
  "Automated Retraining Trigger AI": "/automated-retraining-trigger-ai-agent",
  "Hardware-aware Quantization Bot": "/hardware-aware-quantization-bot-agent",
  "Demographic Bias Scanner": "/demographic-bias-scanner-agent",
  "False-Positive Rate Tester": "/false-positive-rate-tester-agent",
  "Legal Compliance Checker AI": "/legal-compliance-checker-ai-agent",
  "Explainability (XAI) Reporter": "/explainability-xai-reporter-agent",
  "Model Weight Hashing Agent": "/model-weight-hashing-agent-agent",
  "OTA Drone Update Coordinator": "/ota-drone-update-coordinator-agent",
  "Bodycam Edge Sync AI": "/bodycam-edge-sync-ai-agent",
  "Smart CCTV Deployment Bot": "/smart-cctv-deployment-bot-agent",
  "LLM Fine-tuning Assistant": "/llm-fine-tuning-assistant-agent",
  "NLP Pipeline Optimizer": "/nlp-pipeline-optimizer-agent",
  "Computer Vision Retraining Agent": "/computer-vision-retraining-agent-agent",
  "Zero-Downtime Hot Swapper": "/zero-downtime-hot-swapper-agent",
  "Data Privacy Auditor AI": "/data-privacy-auditor-ai-agent",
  "Anonymization Pipeline Bot": "/anonymization-pipeline-bot-agent",
  "Pipeline Telemetry Collector": "/pipeline-telemetry-collector-agent",
  "Model Registry Webhook AI": "/model-registry-webhook-ai-agent",
  "Kubernetes GPU Scaler Bot": "/kubernetes-gpu-scaler-bot-agent",
  "Triton Inference Optimizer": "/triton-inference-optimizer-agent",
  "HuggingFace Hub Sync Bot": "/huggingface-hub-sync-bot-agent",
  "Poisoned Data Detector AI": "/poisoned-data-detector-ai-agent",
  "Zero-Trust Edge Sync Agent": "/zero-trust-edge-sync-agent-agent",
  "Immutable Version Logger": "/immutable-version-logger-agent",
  "Air-gapped Training Supervisor": "/air-gapped-training-supervisor-agent",
  "Cloud-to-Edge Bridge AI": "/cloud-to-edge-bridge-ai-agent",
  "Self-Evolving Model Monitor": "/self-evolving-model-monitor-agent",
  "Predictive Maintenance AI (GPU)": "/predictive-maintenance-ai-gpu-agent",
  "TensorRT Optimization Agent": "/tensorrt-optimization-agent-agent",
  "Sparsity & Pruning Specialist": "/sparsity-pruning-specialist-agent",
  "Dataset Balancing Bot": "/dataset-balancing-bot-agent",
  "Out-of-Distribution Detector": "/out-of-distribution-detector-agent",
  "Multi-tenant Model Router": "/multi-tenant-model-router-agent",
  "Latency Benchmark Tester": "/latency-benchmark-tester-agent",
  "Memory Leak Detector AI": "/memory-leak-detector-ai-agent",
  "Model API Rate Limiter": "/model-api-rate-limiter-agent",
  "Feature Store Sync Agent": "/feature-store-sync-agent-agent",
  "Training Cost Estimator AI": "/training-cost-estimator-ai-agent",
  "Energy Efficiency Optimizer": "/energy-efficiency-optimizer-agent",
  "Gradient Vanishing Alert Bot": "/gradient-vanishing-alert-bot-agent",
  "Overfitting Detection AI": "/overfitting-detection-ai-agent",
  "Continuous Integration (CI) Bot": "/continuous-integration-ci-bot-agent",
  "Artifact Registry Manager": "/artifact-registry-manager-agent",
  "Data Lineage Tracker": "/data-lineage-tracker-agent",
  "Sandbox Testing Coordinator": "/sandbox-testing-coordinator-agent",
  "MLOps Workflow Orchestrator": "/mlops-workflow-orchestrator-agent"
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

const ModelManagementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI MODEL MANAGEMENT
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI MODEL MANAGEMENT</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in mlops, edge deployment, bias auditing & drift monitoring.
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
              <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: i * 0.03 }} 
                    key={i} 
                    className={`premium-card highlight-cyan ${isClickable(expert) ? 'clickable-agent-card' : ''}`}
                    onClick={() => { if (isClickable(expert)) navigate(expertRoutes[expert]); }}
                    style={isClickable(expert) ? { cursor: 'pointer', border: '1px solid #00f0ff', boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' } : {}}
                  >
                    <Bot className="card-icon" />
                    <h4>{expert}</h4>
                    {isClickable(expert) && <div style={{ fontSize: '0.75rem', color: '#00f0ff', marginTop: '5px' }}>Click to view Agent details</div>}
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
