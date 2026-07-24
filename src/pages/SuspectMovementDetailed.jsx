import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, FileText, ArrowLeft, Cpu, Activity, Network, Target
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const SuspectMovementDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const aiExperts = [
    "AI Suspect Movement Timeline AI Analyst", "Data Validator Bot", "Risk Scorer Engine", 
    "Pattern Recognizer AI", "Link Analysis Bot", "Predictive Profiler"
  ];

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
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Network className="inline-icon" size={28} /> AI Suspect Movement Timeline
            </h2>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.8' }}>
                The <strong>AI Suspect Movement Timeline</strong> is a highly advanced neural subsystem designed to automate and enhance intelligence gathering, link analysis, and predictive mapping for law enforcement agencies.
              </p>
            </div>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
              <div className="stat-card" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(6,182,212,0.3)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ color: '#06b6d4', fontSize: '2rem', fontWeight: 'bold' }}>99.9%</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>Accuracy Rate</div>
              </div>
              <div className="stat-card" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold' }}>&lt; 50ms</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>Response Time</div>
              </div>
              <div className="stat-card" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid #8b5cf6', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ color: '#8b5cf6', fontSize: '2rem', fontWeight: 'bold' }}>1M+</div>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>Nodes Analyzed</div>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Bot className="inline-icon" size={28} /> AI Bots & Engines
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
              <LayoutDashboard className="inline-icon" size={28} /> System Features
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
          <ArrowLeft size={20} /> Back
        </button>
        <div className="header-titles">
          <h1 className="cyber-title">AI Suspect Movement Timeline <span>ENTERPRISE PLATFORM</span></h1>
        </div>
      </header>

      <div className="hrms-layout">
        <nav className="hrms-sidebar">
          {[{ id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
            { id: 'experts', label: 'AI Bots', icon: <Bot size={18} /> },
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

export default SuspectMovementDetailed;
