import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Settings, Code, FileText, CheckCircle, LayoutDashboard, Shield
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const PoliceBudgetPlannerAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Bot className="inline-icon" size={28} /> AGENT OVERVIEW
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              The <strong>Police Budget Planner AI</strong> is a specialized autonomous agent designed to handle the complex financial operations of a state police department. It analyzes historical spending, predicts future requirements based on upcoming events (elections, festivals), and allocates funds optimally across districts and zones.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PieChart size={20}/> Predictive Allocation
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses historical data and upcoming event calendars to forecast required budget for fuel, overtime, and logistics.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldAlert size={20}/> Anomaly Detection
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Instantly flags duplicate bills, unusual vendor pricing, and irregular fund utilization patterns.</p>
              </div>
            </div>

            <div className="split-section" style={{ gap: '1.5rem', marginTop: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={20}/> Automated CAG Reports
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Generates compliance-ready financial reports and Fund Utilization Certificates for government treasury.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Terminal size={20}/> NLP Financial Queries
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Allows executives to ask natural language questions like "What is our current deficit in the vehicle maintenance fund?"</p>
              </div>
            </div>
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
             <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Network className="inline-icon" size={28} /> SYSTEM ARCHITECTURE
            </h2>
            
            <div className="panel" style={{ padding: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ color: '#cbd5e1', marginBottom: '2rem' }}>Data Flow Diagram</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#06b6d4' }}>
                   <div style={{ padding: '1rem', border: '1px solid #334155', borderRadius: '8px', background: 'rgba(15, 23, 42, 0.6)' }}>
                      <Database size={32} style={{ margin: '0 auto', marginBottom: '0.5rem' }}/>
                      <div style={{ fontSize: '0.9rem' }}>Data Sources<br/><span style={{ color: '#64748b', fontSize: '0.75rem' }}>Treasury, Payroll</span></div>
                   </div>
                   <div>→</div>
                   <div style={{ padding: '1rem', border: '1px solid #334155', borderRadius: '8px', background: 'rgba(15, 23, 42, 0.6)' }}>
                      <Server size={32} style={{ margin: '0 auto', marginBottom: '0.5rem' }}/>
                      <div style={{ fontSize: '0.9rem' }}>ETL Pipeline<br/><span style={{ color: '#64748b', fontSize: '0.75rem' }}>Airflow</span></div>
                   </div>
                   <div>→</div>
                   <div style={{ padding: '1rem', border: '1px solid #06b6d4', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.1)', boxShadow: '0 0 15px rgba(6,182,212,0.2)' }}>
                      <Cpu size={32} style={{ margin: '0 auto', marginBottom: '0.5rem' }}/>
                      <div style={{ fontSize: '0.9rem' }}>AI Reasoning Engine<br/><span style={{ color: '#64748b', fontSize: '0.75rem' }}>LangChain + LLM</span></div>
                   </div>
                   <div>→</div>
                   <div style={{ padding: '1rem', border: '1px solid #334155', borderRadius: '8px', background: 'rgba(15, 23, 42, 0.6)' }}>
                      <PieChart size={32} style={{ margin: '0 auto', marginBottom: '0.5rem' }}/>
                      <div style={{ fontSize: '0.9rem' }}>Outputs<br/><span style={{ color: '#64748b', fontSize: '0.75rem' }}>Dashboards, Alerts</span></div>
                   </div>
                </div>
            </div>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Vector Database (RAG)</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Stores government financial manuals, police acts, and CAG guidelines as embeddings. The AI retrieves these rules to ensure every allocation suggestion is compliant.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Agentic Workflow</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>The AI operates as an agent with access to tools (SQL Tool for DB queries, Python REPL for complex math, PDF generator for reports).</p>
              </div>
            </div>
          </motion.div>
        );
      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            <div className="premium-card highlight-cyan" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <Code className="card-icon" />
              <h4 style={{ marginBottom: '1rem' }}>Core Framework</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong style={{ color: '#e2e8f0' }}>LangChain:</strong> Orchestrates the agent workflow.</p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}><strong style={{ color: '#e2e8f0' }}>FastAPI:</strong> High-performance backend API.</p>
            </div>
            
            <div className="premium-card highlight-purple" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <Cpu className="card-icon" />
              <h4 style={{ marginBottom: '1rem' }}>AI & Models</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong style={{ color: '#e2e8f0' }}>LLM:</strong> GPT-4 or fine-tuned Llama-3.</p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}><strong style={{ color: '#e2e8f0' }}>Embeddings:</strong> HuggingFace embeddings for RAG.</p>
            </div>

            <div className="premium-card highlight-cyan" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <Database className="card-icon" />
              <h4 style={{ marginBottom: '1rem' }}>Data & Storage</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong style={{ color: '#e2e8f0' }}>PostgreSQL:</strong> Primary relational database.</p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}><strong style={{ color: '#e2e8f0' }}>PGVector:</strong> Vector database for financial rules.</p>
            </div>

            <div className="premium-card highlight-purple" style={{ textAlign: 'left', padding: '1.5rem' }}>
              <LayoutDashboard className="card-icon" />
              <h4 style={{ marginBottom: '1rem' }}>Frontend UI</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong style={{ color: '#e2e8f0' }}>React + Vite:</strong> Dynamic, fast UI components.</p>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}><strong style={{ color: '#e2e8f0' }}>Recharts:</strong> Financial data visualization.</p>
            </div>
          </motion.div>
        );
      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
             <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Terminal className="inline-icon" size={28} /> IMPLEMENTATION ROADMAP
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', padding: '1rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.5rem' }}>1</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Data Integration Phase</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Connect backend APIs to state treasury, HRMS, and procurement portals. Establish ETL pipelines.</p>
                  </div>
                </div>

                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', padding: '1rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.5rem' }}>2</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>RAG System Setup</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Digitize financial manuals and CAG audit rules. Embed chunks into PGVector for compliance checks.</p>
                  </div>
                </div>

                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', padding: '1rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.5rem' }}>3</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Agent Tooling & Prompts</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Configure LangChain agent with tools like `query_database()` and strict system prompts preventing hallucination.</p>
                  </div>
                </div>

                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', padding: '1rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.5rem' }}>4</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Frontend Dashboard</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Build the React interface where executives can view dashboards or use natural language queries.</p>
                  </div>
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

      <header className="hrms-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          <span>Back to Module</span>
        </button>
        
        <div className="header-titles">
          <div className="icon-wrapper">
            <Bot size={40} className="text-cyan" />
          </div>
          <div>
            <h1 className="cyber-title">POLICE BUDGET PLANNER <span>AI AGENT</span></h1>
            <p className="cyber-subtitle">Advanced AI Architecture for Financial Intelligence & Allocation</p>
          </div>
        </div>
      </header>

      <div className="hrms-layout">
        <aside className="hrms-sidebar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`sidebar-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
          
          <div className="module-stats-box" style={{ marginTop: '2rem' }}>
            <h4 style={{ color: '#06b6d4', marginBottom: '1rem' }}>Agent Specs</h4>
            <div className="stat-item">
              <span className="stat-label">Model Version</span>
              <span className="stat-value">v2.4.0</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Core DB</span>
              <span className="stat-value">PGVector</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Framework</span>
              <span className="stat-value">LangChain</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Accuracy</span>
              <span className="stat-value">99.9%</span>
            </div>
          </div>
        </aside>

        <main className="hrms-main-content">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default PoliceBudgetPlannerAgent;
