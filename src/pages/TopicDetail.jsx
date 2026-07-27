import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, LayoutDashboard, Database, Shield, FileText, 
  ArrowLeft, Cpu, Activity, Network, Target, Zap
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const TopicDetail = () => {
  const { topicName } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use the topicName directly, as it is passed via encodeURIComponent from ModulePage
  const formattedTopic = topicName || "Advanced AI Subsystem";
  const isHighway = formattedTopic.toLowerCase().includes("highway check post") || formattedTopic.includes("राजमार्ग चेक पोस्ट");
  const isStateBorder = formattedTopic.toLowerCase().includes("state border check") || formattedTopic.includes("राज्य सीमा जांच");
  const isCustomHeader = isHighway || isStateBorder;

  const highwayCheckPostExperts = [
    "Highway Interceptor AI", "Fugitive Routing Predictor", "High-Speed ANPR Analyst", "Dynamic Nakabandi Bot", 
    "Automated Barricade Deployer", "Stolen Vehicle Matcher", "Traffic Choke-point Manager", "Suspicious Halt Detector", 
    "Convoy Escort Tracker", "Multi-Lane Sync Agent", "Weather/Visibility Analyst", "Driver Fatigue Scanner", 
    "SOS Distress Listener", "Ghost Vehicle Flagging Bot", "Fake Registration AI", "VIP Green Corridor Agent", 
    "Emergency Bypass Coordinator (Ambulance/Fire)", "Evasion Attempt Logger", "High-Speed Pursuit Strategist", "Cross-Border Handover AI", 
    "Hit-and-Run Tracker Bot", "Suspicious Cargo Profiler", "Heavy Vehicle Weighbridge Sync", "Driver Facial Recognition Bot", 
    "Smuggling Route Analyst", "Off-Road Evasion Predictor", "Radio Frequency Jammer Controller", "Drone Highway Surveillance AI", 
    "Night-Vision Plate Reader", "Toll Plaza Sync Bot", "FASTag Anomaly Detector", "E-Waybill Verification Agent", 
    "Wanted Criminal Watchlist AI", "Missing Person Transit Matcher", "Speed Violation E-Challan Bot", "Lane Discipline Enforcer", 
    "Hydraulic Barrier Health Monitor", "Checkpoint Queue Optimizer", "Overload Penalty Calculator", "Hazardous Material Transit AI", 
    "Livestock Smuggling Detector", "Interstate Warrant Sync Bot", "Checkpost Duty Roster AI", "Officer Performance Scorer", 
    "Bodycam Sync & Audit AI", "Fake ID / License Verifier", "CCTNS Crime Link AI", "Highway Robbery Predictor", 
    "Mobile Checkpoint Van Coordinator", "Suspicious Loitering Detector", "Audio Screech / Crash Listener", "Weapon / Contraband X-Ray Bot", 
    "Cyber Interference Sentinel (Anti-Hacking)", "Regional Traffic Divert AI", "Riot / Protest Blockade Planner", "Highway Illumination & Fog Sync AI", 
    "Tire Burst / Accident First-Responder Bot", "Bribery & Corruption Auditor AI", "Abandoned Vehicle Identifier", "Central Command Webhook Agent"
  ];

  const stateBorderExperts = [
    "Interstate Fugitive Tracker AI", "Cross-Border Smuggling Predictor", "E-Waybill Anomaly Detector Bot", "Commercial Vehicle Overload Sync AI",
    "Interstate Permit Verification Agent", "Multi-State ANPR Data Linker", "State Boundary Handover Coordinator", "Illegal Liquor Transit Scanner",
    "Narcotics Supply Chain Profiler", "Border Checkpost Queue Optimizer", "Suspect Vehicle Pattern Analyzer", "Driver Identity Cross-Reference Bot",
    "Human Trafficking Alert System AI", "Stolen Vehicle Interstate Matcher", "Fake Registration Plate Detector", "Suspicious Cargo X-Ray Analyst",
    "Weapons / Firearms Transit Bot", "High-Speed Evasion Attempt Logger", "Agricultural Smuggling Tracker", "Checkpost Duty Roster Optimizer AI",
    "Corrupt Practice Auditor Bot", "Border CCTV Sync & Analysis AI", "Remote Night-Vision Plate Reader", "Inter-Agency Alert Broadcaster",
    "VIP Convoy Interstate Escort AI", "Border Weather/Fog Safety Coordinator", "Hazardous Materials (Hazmat) Tracker", "Border Toll Integration Agent",
    "Off-Road Smuggling Route Predictor", "Mobile Checkpoint Van Deployer AI", "Suspect Mobile Tower Ping Tracker", "Regional Dialect Audio Listener Bot",
    "Absconder Facial Recognition Sync", "Missing Person Cross-Border Matcher", "Checkpost Hydraulic Barrier Automator", "Drone Border Surveillance Analyst",
    "Anti-Bribery Surveillance Bot", "Livestock Smuggling Detector AI", "Interstate Arrest Warrant Sync", "Cyber Interference & Jammer AI",
    "High-Value Cargo Escort Monitor", "Border Incident Threat Scorer", "Riot/Protest Border Blockade Planner", "State Checkpost Performance Scorer",
    "Fake ID / License Interstate Verifier", "Real-time CCTNS Border Link", "Suspicious Loitering Profiler", "Border Post Energy/Illumination Sync",
    "Officer Bodycam Audit AI", "Accident First-Responder Dispatch AI", "Border Epidemic/Health Check Sync", "Interstate Tax Evasion Profiler",
    "Convoy Sync & Multi-Lane Agent", "State Intelligence Bureau Linker", "Checkpost Radio Frequency Scanner", "Deep-Fake Document Validator",
    "Border Post Ammunition Tracker", "Highway Patrol Handoff Sync AI", "Suspicious Halt & Wait Analyst", "Central Command Webhook Bot"
  ];

  const defaultExperts = [
    `${formattedTopic.split(' ')[0]} Analyst AI`, 
    "Data Validator Bot", 
    "Risk Scorer Engine", 
    "Pattern Recognizer AI", 
    "Neural Link Bot", 
    "Predictive Profiler"
  ];

  const aiExperts = isHighway ? highwayCheckPostExperts : 
                    isStateBorder ? stateBorderExperts : 
                    defaultExperts;

  const features = [
    {
      title: "Core Operations",
      icon: <Network size={20} />,
      items: ["Real-time Data Sync", "Automated Link Extraction", "Cross-Reference Engine"]
    },
    {
      title: "Intelligence & Insights",
      icon: <Target size={20} />,
      items: ["Deep Pattern Recognition", "Predictive Threat Scoring", "Visual Graph Analysis"]
    },
    {
      title: "Security & Auditing",
      icon: <Shield size={20} />,
      items: ["Immutable Audit Trails", "Role-Based Access Control", "Zero-Trust Architecture"]
    }
  ];

  const getCustomTitle = () => {
    if (isHighway) return { main: "AI HIGHWAY", sub: "CHECK POST OPERATIONS", desc: "Toll Plaza Sync, ANPR & Smuggling Interception" };
    if (isStateBorder) return { main: "AI STATE BORDER", sub: "CHECK MANAGEMENT", desc: "Interstate Verification, Contraband & Security Sync" };
    return { main: formattedTopic.toUpperCase(), sub: "", desc: "Advanced AI Operations" };
  };
  const customTitle = getCustomTitle();

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Network className="inline-icon" size={28} /> {formattedTopic}
            </h2>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.8' }}>
                The <strong>{formattedTopic}</strong> is a highly advanced neural subsystem designed to automate and enhance intelligence operations, predictive analytics, and situational awareness for modern law enforcement agencies.
              </p>
            </div>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              <div className="stat-card" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(6,182,212,0.3)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ color: '#06b6d4', fontSize: '2rem', fontWeight: 'bold' }}>99.9%</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>System Accuracy</div>
              </div>
              <div className="stat-card" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold' }}>&lt; 50ms</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>Response Time</div>
              </div>
              <div className="stat-card" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid #8b5cf6', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ color: '#8b5cf6', fontSize: '2rem', fontWeight: 'bold' }}>24/7</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>Autonomous Operation</div>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Bot className="inline-icon" size={28} /> {isCustomHeader ? "Border Bots" : "Dedicated AI Bots"}
            </h2>
            <div className="experts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {aiExperts.map((expert, idx) => (
                <div key={idx} className="expert-card" style={{ background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(6,182,212,0.2)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Cpu size={24} color="#06b6d4" />
                  <span style={{ color: '#e2e8f0', fontWeight: '500' }}>{expert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <LayoutDashboard className="inline-icon" size={28} /> Core Features
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {features.map((mod, idx) => (
                <div key={idx} className="module-card glass-card" style={{ padding: '1.5rem' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', marginBottom: '1rem' }}>
                    {mod.icon} {mod.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {mod.items.map((item, i) => (
                      <li key={i} style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.2)', marginBottom: '0.5rem', borderRadius: '6px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ width: '6px', height: '6px', background: '#06b6d4', borderRadius: '50%' }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="hrms-detailed-page">
      <div className="hrms-bg-fx"></div>
      <div className="hrms-grid-overlay"></div>
      
      <header className="hrms-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} /> {isCustomHeader ? "BACK TO MODULES" : "Back"}
        </button>
        <div className="header-titles">
          {isCustomHeader ? (
            <>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper">
                <Shield size={40} color="#06b6d4" />
              </motion.div>
              <div>
                <h1 className="cyber-title">{customTitle.main} <span>{customTitle.sub}</span></h1>
                <p className="cyber-subtitle">{customTitle.desc}</p>
              </div>
            </>
          ) : (
            <h1 className="cyber-title" style={{ fontSize: '2rem' }}>{formattedTopic}</h1>
          )}
        </div>
      </header>

      <div className="hrms-layout">
        <nav className="hrms-sidebar">
          {[{ id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
            { id: 'experts', label: isCustomHeader ? 'Border Bots' : 'AI Bots', icon: <Bot size={18} /> },
            { id: 'modules', label: 'Features', icon: <LayoutDashboard size={18} /> }
          ].map((tab) => (
            <button key={tab.id} className={`sidebar-btn ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>

        <main className="hrms-content-area">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default TopicDetail;
