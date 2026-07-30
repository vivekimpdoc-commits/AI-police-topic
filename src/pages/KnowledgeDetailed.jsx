import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"Entity Resolution AI", "Entity Extraction AI", "Semantic Entity Linking AI",
  "Relationship Discovery AI", "Multi-Hop Relationship Explorer AI", "Graph Embedding AI",
  "Knowledge Graph Builder AI", "Ontology Management AI", "Knowledge Base Manager AI",
  "Criminal Network Analyzer AI", "Criminal Link Prediction AI", "Association Rule Mining AI",
  "Community Detection AI", "Network Centrality Analyzer AI", "Influence Analysis AI",
  "Unknown Entity Discovery AI", "Suspicious Cluster Detection AI", "Hidden Pattern Discovery AI",
  "Graph Pattern Matching AI", "Graph Similarity AI", "Identity Resolution AI",
  "Cross-Database Entity Matching AI", "Multi-Source Data Fusion AI", "Intelligence Fusion AI",
  "Event Correlation AI", "Timeline Correlation AI", "Behavioral Pattern Analysis AI",
  "Criminal Profile Builder AI", "Organization Relationship Mapper AI", "Social Network Intelligence AI",
  "Communication Network Intelligence AI", "Financial Network Intelligence AI", "Location Intelligence AI",
  "Mobility Pattern Analysis AI", "Device Correlation AI", "Digital Identity Correlation AI",
  "Risk Scoring AI", "Threat Prediction AI", "Criminal Activity Prediction AI",
  "Network Evolution Prediction AI", "AI Graph Search Assistant", "Natural Language Graph Query AI",
  "Graph Recommendation Engine AI", "Graph Visualization AI", "Interactive Link Explorer AI",
  "Explainable AI for Link Prediction", "Graph Analytics AI", "Knowledge Graph Quality Validator AI",
  "Graph Consistency Checker AI", "Real-Time Knowledge Graph Update AI", "Streaming Data Correlation AI",
  "Graph Version Control AI", "Knowledge Graph Governance AI", "Metadata Intelligence AI",
  "Data Lineage AI", "AI Investigation Copilot", "Case Intelligence AI",
  "Decision Support AI", "Strategic Intelligence AI", "Executive Knowledge Graph Dashboard AI"
];


const expertRoutes = {
  "Entity Resolution AI": "/entity-resolution-ai-agent",
  "Entity Extraction AI": "/entity-extraction-ai-agent",
  "Semantic Entity Linking AI": "/semantic-entity-linking-ai-agent",
  "Relationship Discovery AI": "/relationship-discovery-ai-agent",
  "Multi-Hop Relationship Explorer AI": "/multi-hop-relationship-explorer-ai-agent",
  "Graph Embedding AI": "/graph-embedding-ai-agent",
  "Knowledge Graph Builder AI": "/knowledge-graph-builder-ai-agent",
  "Ontology Management AI": "/ontology-management-ai-agent",
  "Knowledge Base Manager AI": "/knowledge-base-manager-ai-agent",
  "Criminal Network Analyzer AI": "/criminal-network-analyzer-ai-agent",
  "Criminal Link Prediction AI": "/criminal-link-prediction-ai-agent",
  "Association Rule Mining AI": "/association-rule-mining-ai-agent",
  "Community Detection AI": "/community-detection-ai-agent",
  "Network Centrality Analyzer AI": "/network-centrality-analyzer-ai-agent",
  "Influence Analysis AI": "/influence-analysis-ai-agent",
  "Unknown Entity Discovery AI": "/unknown-entity-discovery-ai-agent",
  "Suspicious Cluster Detection AI": "/suspicious-cluster-detection-ai-agent",
  "Hidden Pattern Discovery AI": "/hidden-pattern-discovery-ai-agent",
  "Graph Pattern Matching AI": "/graph-pattern-matching-ai-agent",
  "Graph Similarity AI": "/graph-similarity-ai-agent",
  "Identity Resolution AI": "/identity-resolution-ai-agent",
  "Cross-Database Entity Matching AI": "/cross-database-entity-matching-ai-agent",
  "Multi-Source Data Fusion AI": "/multi-source-data-fusion-ai-agent",
  "Intelligence Fusion AI": "/intelligence-fusion-ai-agent",
  "Event Correlation AI": "/event-correlation-ai-agent",
  "Timeline Correlation AI": "/timeline-correlation-ai-agent",
  "Behavioral Pattern Analysis AI": "/behavioral-pattern-analysis-ai-agent",
  "Criminal Profile Builder AI": "/criminal-profile-builder-ai-agent",
  "Organization Relationship Mapper AI": "/organization-relationship-mapper-ai-agent",
  "Social Network Intelligence AI": "/social-network-intelligence-ai-agent",
  "Communication Network Intelligence AI": "/communication-network-intelligence-ai-agent",
  "Financial Network Intelligence AI": "/financial-network-intelligence-ai-agent",
  "Location Intelligence AI": "/location-intelligence-ai-agent",
  "Mobility Pattern Analysis AI": "/mobility-pattern-analysis-ai-agent",
  "Device Correlation AI": "/device-correlation-ai-agent",
  "Digital Identity Correlation AI": "/digital-identity-correlation-ai-agent",
  "Risk Scoring AI": "/risk-scoring-ai-agent",
  "Threat Prediction AI": "/threat-prediction-ai-agent",
  "Criminal Activity Prediction AI": "/criminal-activity-prediction-ai-agent",
  "Network Evolution Prediction AI": "/network-evolution-prediction-ai-agent",
  "AI Graph Search Assistant": "/ai-graph-search-assistant-agent",
  "Natural Language Graph Query AI": "/natural-language-graph-query-ai-agent",
  "Graph Recommendation Engine AI": "/graph-recommendation-engine-ai-agent",
  "Graph Visualization AI": "/graph-visualization-ai-agent",
  "Interactive Link Explorer AI": "/interactive-link-explorer-ai-agent",
  "Explainable AI for Link Prediction": "/explainable-ai-for-link-prediction-agent",
  "Graph Analytics AI": "/graph-analytics-ai-agent",
  "Knowledge Graph Quality Validator AI": "/knowledge-graph-quality-validator-ai-agent",
  "Graph Consistency Checker AI": "/graph-consistency-checker-ai-agent",
  "Real-Time Knowledge Graph Update AI": "/real-time-knowledge-graph-update-ai-agent",
  "Streaming Data Correlation AI": "/streaming-data-correlation-ai-agent",
  "Graph Version Control AI": "/graph-version-control-ai-agent",
  "Knowledge Graph Governance AI": "/knowledge-graph-governance-ai-agent",
  "Metadata Intelligence AI": "/metadata-intelligence-ai-agent",
  "Data Lineage AI": "/data-lineage-ai-agent",
  "AI Investigation Copilot": "/ai-investigation-copilot-agent",
  "Case Intelligence AI": "/case-intelligence-ai-agent",
  "Decision Support AI": "/decision-support-ai-agent",
  "Strategic Intelligence AI": "/strategic-intelligence-ai-agent",
  "Executive Knowledge Graph Dashboard AI": "/executive-knowledge-graph-dashboard-ai-agent"
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

const KnowledgeDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI KNOWLEDGE GRAPH
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI KNOWLEDGE GRAPH</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in advanced semantic network mapping & criminal link prediction.
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
            <h1 className="cyber-title">AI KNOWLEDGE <span>GRAPH</span></h1>
            <p className="cyber-subtitle">Advanced Semantic Network Mapping & Criminal Link Prediction</p>
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

export default KnowledgeDetailed;
