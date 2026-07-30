import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"Big Data Architect AI", "ETL Pipeline Optimizer", "Unstructured Data Parser AI", 
  "Metadata Tagging Engine", "Data Governance Auditor AI", "Dark Data Miner AI", 
  "Cross-Schema Query Optimizer", "Cold-Storage Archival Bot", "Data Lake Security Enforcer",
  "Anomaly Detection Agent AI", "Semantic Lake Search AI", "Batch Ingestion Coordinator",
  "Real-Time Stream Processor AI", "Telecom CDR Parsing Bot", "Social Media Firehose Sync",
  "Interrogation Audio Indexer", "Handwritten OCR Extraction AI", "Video Metadata Indexing Agent",
  "Cross-DB Unified Search Bot", "Natural Language to SQL Agent", "Graph-Relational Join Optimizer",
  "Millisecond Query Executor", "Automated Data Redaction AI", "PII Masking & Hashing Bot",
  "Access Audit Logger AI", "Court-ordered Data Purge Bot", "Closed Case Archival AI",
  "Automated Glacier Tiering Bot", "Data Compression Optimizer", "Digital Evidence Hashing AI",
  "Auto-Schema Inference Bot", "PII Auto-Masking Coordinator", "Unstructured Text Structuring AI",
  "Video Frame Indexing Bot", "Duplicate Record Merging AI", "Cold-Data Retrieval Predictor",
  "Cross-lingual Metadata Translator", "Automated Data Quality Scorer", "NLP Database Query Agent",
  "Hadoop Cluster Manager AI", "S3 Bucket Cost Optimizer", "Elasticsearch Index Manager",
  "Vector Database Sync AI", "Relational CCTNS Bridge AI", "Graph DB Neo4j Integrator",
  "Time-Series IoT Data Miner", "Metadata Catalog Organizer", "Ingestion Pipeline Monitor",
  "Storage Cost Optimization Bot", "Cross-Department Access Auditor", "CCTNS State DB Sync AI",
  "Telecom Bulk CDR Uploader", "Forensic Lab Integration Bot", "Transport RTO API Bridge",
  "Bank Transaction Webhook AI", "OSINT Data Harvester Bot", "Federated GraphQL Resolver",
  "Data Lake Health Indexer", "Zero-Trust Data Governor", "Blockchain Evidence Hasher"
];


const expertRoutes = {
  "Big Data Architect AI": "/big-data-architect-ai-agent",
  "ETL Pipeline Optimizer": "/etl-pipeline-optimizer-agent",
  "Unstructured Data Parser AI": "/unstructured-data-parser-ai-agent",
  "Metadata Tagging Engine": "/metadata-tagging-engine-agent",
  "Data Governance Auditor AI": "/data-governance-auditor-ai-agent",
  "Dark Data Miner AI": "/dark-data-miner-ai-agent",
  "Cross-Schema Query Optimizer": "/cross-schema-query-optimizer-agent",
  "Cold-Storage Archival Bot": "/cold-storage-archival-bot-agent",
  "Data Lake Security Enforcer": "/data-lake-security-enforcer-agent",
  "Anomaly Detection Agent AI": "/anomaly-detection-agent-ai-agent",
  "Semantic Lake Search AI": "/semantic-lake-search-ai-agent",
  "Batch Ingestion Coordinator": "/batch-ingestion-coordinator-agent",
  "Real-Time Stream Processor AI": "/real-time-stream-processor-ai-agent",
  "Telecom CDR Parsing Bot": "/telecom-cdr-parsing-bot-agent",
  "Social Media Firehose Sync": "/social-media-firehose-sync-agent",
  "Interrogation Audio Indexer": "/interrogation-audio-indexer-agent",
  "Handwritten OCR Extraction AI": "/handwritten-ocr-extraction-ai-agent",
  "Video Metadata Indexing Agent": "/video-metadata-indexing-agent-agent",
  "Cross-DB Unified Search Bot": "/cross-db-unified-search-bot-agent",
  "Natural Language to SQL Agent": "/natural-language-to-sql-agent-agent",
  "Graph-Relational Join Optimizer": "/graph-relational-join-optimizer-agent",
  "Millisecond Query Executor": "/millisecond-query-executor-agent",
  "Automated Data Redaction AI": "/automated-data-redaction-ai-agent",
  "PII Masking & Hashing Bot": "/pii-masking-hashing-bot-agent",
  "Access Audit Logger AI": "/access-audit-logger-ai-agent",
  "Court-ordered Data Purge Bot": "/court-ordered-data-purge-bot-agent",
  "Closed Case Archival AI": "/closed-case-archival-ai-agent",
  "Automated Glacier Tiering Bot": "/automated-glacier-tiering-bot-agent",
  "Data Compression Optimizer": "/data-compression-optimizer-agent",
  "Digital Evidence Hashing AI": "/digital-evidence-hashing-ai-agent",
  "Auto-Schema Inference Bot": "/auto-schema-inference-bot-agent",
  "PII Auto-Masking Coordinator": "/pii-auto-masking-coordinator-agent",
  "Unstructured Text Structuring AI": "/unstructured-text-structuring-ai-agent",
  "Video Frame Indexing Bot": "/video-frame-indexing-bot-agent",
  "Duplicate Record Merging AI": "/duplicate-record-merging-ai-agent",
  "Cold-Data Retrieval Predictor": "/cold-data-retrieval-predictor-agent",
  "Cross-lingual Metadata Translator": "/cross-lingual-metadata-translator-agent",
  "Automated Data Quality Scorer": "/automated-data-quality-scorer-agent",
  "NLP Database Query Agent": "/nlp-database-query-agent-agent",
  "Hadoop Cluster Manager AI": "/hadoop-cluster-manager-ai-agent",
  "S3 Bucket Cost Optimizer": "/s3-bucket-cost-optimizer-agent",
  "Elasticsearch Index Manager": "/elasticsearch-index-manager-agent",
  "Vector Database Sync AI": "/vector-database-sync-ai-agent",
  "Relational CCTNS Bridge AI": "/relational-cctns-bridge-ai-agent",
  "Graph DB Neo4j Integrator": "/graph-db-neo4j-integrator-agent",
  "Time-Series IoT Data Miner": "/time-series-iot-data-miner-agent",
  "Metadata Catalog Organizer": "/metadata-catalog-organizer-agent",
  "Ingestion Pipeline Monitor": "/ingestion-pipeline-monitor-agent",
  "Storage Cost Optimization Bot": "/storage-cost-optimization-bot-agent",
  "Cross-Department Access Auditor": "/cross-department-access-auditor-agent",
  "CCTNS State DB Sync AI": "/cctns-state-db-sync-ai-agent",
  "Telecom Bulk CDR Uploader": "/telecom-bulk-cdr-uploader-agent",
  "Forensic Lab Integration Bot": "/forensic-lab-integration-bot-agent",
  "Transport RTO API Bridge": "/transport-rto-api-bridge-agent",
  "Bank Transaction Webhook AI": "/bank-transaction-webhook-ai-agent",
  "OSINT Data Harvester Bot": "/osint-data-harvester-bot-agent",
  "Federated GraphQL Resolver": "/federated-graphql-resolver-agent",
  "Data Lake Health Indexer": "/data-lake-health-indexer-agent",
  "Zero-Trust Data Governor": "/zero-trust-data-governor-agent",
  "Blockchain Evidence Hasher": "/blockchain-evidence-hasher-agent"
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

const DataLakeDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI POLICE DATA LAKE
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI POLICE DATA LAKE</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in unified big data storage, federated search & intelligence mining.
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
            <h1 className="cyber-title">AI POLICE <span>DATA LAKE</span></h1>
            <p className="cyber-subtitle">Unified Big Data Storage, Federated Search & Intelligence Mining</p>
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

export default DataLakeDetailed;
