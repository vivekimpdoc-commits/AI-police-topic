import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, FileText, Activity, Network, ArrowLeft, Terminal, Cpu, CheckCircle, ShieldAlert, PieChart, Map, Truck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
"Riot Prediction AI", "Force Deployment Scorer", "Real-Time Threat Assessor", 
  "Public Sentiment Analyst AI", "Event Security Planner AI", "Tactical Evacuation Agent", 
  "Emergency Triage Coordinator", "Resource Optimization AI", "Weather & Disaster Impact AI",
  "VIP Route Security AI", "Crowd Density Analyzer AI", "Flash Mob Predictor AI",
  "Election Violence Heatmapper", "Festival Crowd Surge Forecaster", "Optimal Station Staffing AI",
  "Anti-Riot Gear Allocator", "Rapid Action Force Dispatcher", "Beat Patrol Routing Optimizer",
  "Emergency Call Prioritization Agent", "Active Shooter Triangulator AI", "Hostage Situation Modeler",
  "Simultaneous Attack Correlator", "VVIP Route Vulnerability Assessor", "Convoy Speed Optimizer",
  "Stadium Crowd Dynamics Modeler", "Sniper Over-watch Positioning AI", "Flood Evacuation Routing Agent",
  "Earthquake Triage AI", "Hospital Bed Sync Coordinator", "Relief Material Supply Chain AI",
  "Multi-Variable Threat Scorer", "Sentiment Shift Trigger AI", "Route Vulnerability Indexer",
  "Optimal Pathfinding AI", "Automatic Escalation Protocol AI", "Drone Recon Deployment AI",
  "Gunfire Acoustic Triangulator", "Predictive Force Exhaustion AI", "Legal Use-of-Force Prompter",
  "DGP Decision Support Matrix AI", "Live Threat Heatmap Generator", "Force Readiness Board AI",
  "VVIP Convoy Tracker AI", "Disaster Command Board AI", "Pre-Event Risk Assessor",
  "Riot Post-Mortem Analyst", "Force Deployment Efficiency AI", "VVIP Security Auditor",
  "Emergency Response Time Profiler", "Resource Depletion Forecaster", "Rank-Based Override Validator",
  "Encrypted Tactical Comm Router", "Decision Audit Trail Analyzer", "Anti-Tamper Sensor Feed AI",
  "Zero-Trust API Gateway Monitor", "Offline Fail-safe Mode Trigger", "Holographic Tactical Table Manager",
  "Neural-Link Command Parser", "Autonomous Drone Coordinator", "Pre-Crime Legal Arbitrator"
];


const expertRoutes = {
  "Riot Prediction AI": "/riot-prediction-ai-agent",
  "Force Deployment Scorer": "/force-deployment-scorer-agent",
  "Real-Time Threat Assessor": "/real-time-threat-assessor-agent",
  "Public Sentiment Analyst AI": "/public-sentiment-analyst-ai-agent",
  "Event Security Planner AI": "/event-security-planner-ai-agent",
  "Tactical Evacuation Agent": "/tactical-evacuation-agent-agent",
  "Emergency Triage Coordinator": "/emergency-triage-coordinator-agent",
  "Resource Optimization AI": "/resource-optimization-ai-agent",
  "Weather & Disaster Impact AI": "/weather-disaster-impact-ai-agent",
  "VIP Route Security AI": "/vip-route-security-ai-agent",
  "Crowd Density Analyzer AI": "/crowd-density-analyzer-ai-agent",
  "Flash Mob Predictor AI": "/flash-mob-predictor-ai-agent",
  "Election Violence Heatmapper": "/election-violence-heatmapper-agent",
  "Festival Crowd Surge Forecaster": "/festival-crowd-surge-forecaster-agent",
  "Optimal Station Staffing AI": "/optimal-station-staffing-ai-agent",
  "Anti-Riot Gear Allocator": "/anti-riot-gear-allocator-agent",
  "Rapid Action Force Dispatcher": "/rapid-action-force-dispatcher-agent",
  "Beat Patrol Routing Optimizer": "/beat-patrol-routing-optimizer-agent",
  "Emergency Call Prioritization Agent": "/emergency-call-prioritization-agent-agent",
  "Active Shooter Triangulator AI": "/active-shooter-triangulator-ai-agent",
  "Hostage Situation Modeler": "/hostage-situation-modeler-agent",
  "Simultaneous Attack Correlator": "/simultaneous-attack-correlator-agent",
  "VVIP Route Vulnerability Assessor": "/vvip-route-vulnerability-assessor-agent",
  "Convoy Speed Optimizer": "/convoy-speed-optimizer-agent",
  "Stadium Crowd Dynamics Modeler": "/stadium-crowd-dynamics-modeler-agent",
  "Sniper Over-watch Positioning AI": "/sniper-over-watch-positioning-ai-agent",
  "Flood Evacuation Routing Agent": "/flood-evacuation-routing-agent-agent",
  "Earthquake Triage AI": "/earthquake-triage-ai-agent",
  "Hospital Bed Sync Coordinator": "/hospital-bed-sync-coordinator-agent",
  "Relief Material Supply Chain AI": "/relief-material-supply-chain-ai-agent",
  "Multi-Variable Threat Scorer": "/multi-variable-threat-scorer-agent",
  "Sentiment Shift Trigger AI": "/sentiment-shift-trigger-ai-agent",
  "Route Vulnerability Indexer": "/route-vulnerability-indexer-agent",
  "Optimal Pathfinding AI": "/optimal-pathfinding-ai-agent",
  "Automatic Escalation Protocol AI": "/automatic-escalation-protocol-ai-agent",
  "Drone Recon Deployment AI": "/drone-recon-deployment-ai-agent",
  "Gunfire Acoustic Triangulator": "/gunfire-acoustic-triangulator-agent",
  "Predictive Force Exhaustion AI": "/predictive-force-exhaustion-ai-agent",
  "Legal Use-of-Force Prompter": "/legal-use-of-force-prompter-agent",
  "DGP Decision Support Matrix AI": "/dgp-decision-support-matrix-ai-agent",
  "Live Threat Heatmap Generator": "/live-threat-heatmap-generator-agent",
  "Force Readiness Board AI": "/force-readiness-board-ai-agent",
  "VVIP Convoy Tracker AI": "/vvip-convoy-tracker-ai-agent",
  "Disaster Command Board AI": "/disaster-command-board-ai-agent",
  "Pre-Event Risk Assessor": "/pre-event-risk-assessor-agent",
  "Riot Post-Mortem Analyst": "/riot-post-mortem-analyst-agent",
  "Force Deployment Efficiency AI": "/force-deployment-efficiency-ai-agent",
  "VVIP Security Auditor": "/vvip-security-auditor-agent",
  "Emergency Response Time Profiler": "/emergency-response-time-profiler-agent",
  "Resource Depletion Forecaster": "/resource-depletion-forecaster-agent",
  "Rank-Based Override Validator": "/rank-based-override-validator-agent",
  "Encrypted Tactical Comm Router": "/encrypted-tactical-comm-router-agent",
  "Decision Audit Trail Analyzer": "/decision-audit-trail-analyzer-agent",
  "Anti-Tamper Sensor Feed AI": "/anti-tamper-sensor-feed-ai-agent",
  "Zero-Trust API Gateway Monitor": "/zero-trust-api-gateway-monitor-agent",
  "Offline Fail-safe Mode Trigger": "/offline-fail-safe-mode-trigger-agent",
  "Holographic Tactical Table Manager": "/holographic-tactical-table-manager-agent",
  "Neural-Link Command Parser": "/neural-link-command-parser-agent",
  "Autonomous Drone Coordinator": "/autonomous-drone-coordinator-agent",
  "Pre-Crime Legal Arbitrator": "/pre-crime-legal-arbitrator-agent"
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

const DecisionDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <ShieldAlert className="inline-icon" size={28} /> AI DECISION SUPPORT SYSTEM
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI DECISION SUPPORT SYSTEM</strong> provides advanced enterprise capabilities. By leveraging predictive analytics, real-time data sync, and multi-modal AI sensors, this module ensures total dominance in real-time predictive analytics & tactical force deployment.
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
            <h1 className="cyber-title">AI DECISION <span>SUPPORT SYSTEM</span></h1>
            <p className="cyber-subtitle">Real-time Predictive Analytics & Tactical Force Deployment</p>
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

export default DecisionDetailed;
