import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Settings, Code, FileText, CheckCircle, LayoutDashboard, Shield, Zap, Target, BookOpen, Layers
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
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
              <Bot className="inline-icon" size={28} /> AGENT OVERVIEW & NECESSITY
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              The <strong>Police Budget Planner AI</strong> is a highly specialized autonomous agent designed to revolutionize the financial operations of state police departments. Traditionally, police budgeting relies on static spreadsheets, historical averages, and manual audits, leading to fund deficits during critical times (like unexpected riots or VVIP movements) and unutilized funds at the end of the financial year. This AI eliminates these inefficiencies by introducing dynamic, predictive financial intelligence.
            </p>

            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PieChart size={20}/> Why is this AI Needed?
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.8rem' }}>• <strong>Unpredictable Expenses:</strong> Law enforcement faces sudden crises (natural disasters, emergency deployments) that shatter standard budgets.</p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.8rem' }}>• <strong>Complex Grant Management:</strong> Managing central government grants (like Modernization of Police Forces) requires strict compliance and utilization certificates (UCs) which are often delayed.</p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>• <strong>Leakage & Fraud:</strong> Manual checking of thousands of vendor bills for fuel, vehicle repairs, and mess supplies is prone to human error and corruption.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldAlert size={20}/> The AI Solution
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.8rem' }}>• <strong>Predictive Forecasting:</strong> Analyzes 10+ years of historical data against upcoming event calendars to forecast required budget dynamically.</p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.8rem' }}>• <strong>Automated Auditing:</strong> Instantly cross-checks vendor invoices against approved rate contracts and flags anomalies like duplicate billing.</p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>• <strong>Zero-Based Budgeting (ZBB):</strong> AI helps shift from incremental budgeting to ZBB, ensuring every rupee requested is justified by current operational needs.</p>
              </div>
            </div>
          </motion.div>
        );
      
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Zap className="inline-icon" size={28} /> DEEP CAPABILITIES
            </h2>
            <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>This AI is not just a dashboard; it is an active reasoning engine that performs complex financial tasks previously requiring a team of accountants.</p>
            
            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem', borderLeft: '4px solid #06b6d4' }}>
                <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Fleet & Fuel Expense Optimizer</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  Police fleets consume a massive portion of the budget. The AI integrates with GPS data and fuel card APIs. It analyzes the mileage (KMPL) of every PCR van. If a vehicle's fuel consumption suddenly spikes compared to its historical average or peer vehicles, the AI immediately alerts the Motor Transport Officer (MTO) for potential fuel theft or urgent maintenance needs.
                </p>
              </div>
              <div className="panel" style={{ padding: '1.5rem', borderLeft: '4px solid #8b5cf6' }}>
                <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Election & Mega-Event Budgeting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  When elections or mega-festivals (like Kumbh Mela) approach, the AI automatically drafts a comprehensive supplementary budget. It calculates exact requirements for Central Armed Police Forces (CAPF) accommodation, daily allowances (DA), transport logistics, and temporary infrastructure based on force deployment size.
                </p>
              </div>
            </div>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem', borderLeft: '4px solid #06b6d4' }}>
                <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Automated CAG Compliance & UCs</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  The AI is trained on Comptroller and Auditor General (CAG) rules via a Vector Database. It ensures that funds are spent under the correct sub-heads. At the end of the quarter, it automatically generates mathematically accurate Fund Utilization Certificates (UCs), preventing future funding from being blocked by the Home Ministry.
                </p>
              </div>
              <div className="panel" style={{ padding: '1.5rem', borderLeft: '4px solid #8b5cf6' }}>
                <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Conversational Financial Analytics</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  The DGP or SP doesn't need to read complex ledgers. They can type: <em>"How much budget is left in the 'Arms & Ammunition' head for the current quarter?"</em> or <em>"Show me the top 3 police stations exceeding their stationary allowance."</em> The AI executes SQL queries in the background and returns a simple, conversational answer with generated charts.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Target className="inline-icon" size={28} /> REAL-WORLD SCENARIOS
            </h2>
            
            <div className="timeline-container">
              <div className="panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#06b6d4', marginBottom: '0.8rem' }}>Scenario 1: The March Rush (March Loot) Prevention</h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>
                  <strong>The Problem:</strong> Historically, police departments realize in February that they have 30% of their annual budget unspent. This leads to hasty, low-quality procurements just to exhaust the budget before the financial year ends on March 31st.
                </p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  <strong>AI Intervention:</strong> The AI monitors the burn rate dynamically. In October (mid-year), it alerts the Finance Head: <em>"Warning: Uniform Procurement head is only 15% utilized. Recommend initiating tenders immediately to prevent year-end lapsing."</em> It then auto-drafts the tender requirement document.
                </p>
              </div>

              <div className="panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '0.8rem' }}>Scenario 2: Fake Vehicle Repair Bills</h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>
                  <strong>The Problem:</strong> A police station submits frequent bills for 'Clutch Plate Replacement' for the same Bolero jeep from a local garage.
                </p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  <strong>AI Intervention:</strong> The AI's Anomaly Detection model flags the invoice before treasury approval. It states: <em>"Fraud Alert: Vehicle MP-03-XXXX had its clutch plate replaced 45 days ago. Average lifecycle is 18 months. The vendor pricing is also 22% higher than authorized service center rates."</em> The payment is frozen.
                </p>
              </div>

              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#06b6d4', marginBottom: '0.8rem' }}>Scenario 3: Secret Service (Informant) Fund Management</h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>
                  <strong>The Problem:</strong> Managing the highly confidential Secret Service (SS) fund used for paying informants is notoriously difficult to audit due to lack of receipts, leading to misuse.
                </p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  <strong>AI Intervention:</strong> The AI correlates SS fund withdrawals by specific officers with the number of successful drug busts or intelligence leads logged in the central crime database. It creates an 'ROI (Return on Investment) Confidence Score' for the officer's expenditure without needing to know the informant's identity, ensuring accountability in classified budgets.
                </p>
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel">
            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem', borderTop: '3px solid #06b6d4' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', marginBottom: '1rem' }}>
                  <Code color="#06b6d4" size={20} /> Core Framework
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#06b6d4' }}>LangChain / LlamaIndex:</strong> Orchestrates the AI agent's multi-step reasoning workflow and tool utilization.</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#06b6d4' }}>Python (FastAPI):</strong> High-performance, asynchronous backend API handling concurrent financial data streams.</p>
                </div>
              </div>
              
              <div className="panel" style={{ padding: '1.5rem', borderTop: '3px solid #8b5cf6' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', marginBottom: '1rem' }}>
                  <Cpu color="#8b5cf6" size={20} /> AI & Models
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#8b5cf6' }}>LLM:</strong> GPT-4 (for complex logic) or local Llama-3 (fine-tuned on financial/accounting structures for data privacy).</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#8b5cf6' }}>Anomaly Models:</strong> Scikit-Learn Isolation Forests for detecting statistically abnormal vendor billing.</p>
                </div>
              </div>
            </div>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem', borderTop: '3px solid #06b6d4' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', marginBottom: '1rem' }}>
                  <Database color="#06b6d4" size={20} /> Data & Storage
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#06b6d4' }}>PostgreSQL:</strong> Primary relational database storing historical ledgers, transactions, and budgets securely.</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#06b6d4' }}>PGVector / Milvus:</strong> Vector database used for fast semantic retrieval of compliance documents and auditing rules.</p>
                </div>
              </div>

              <div className="panel" style={{ padding: '1.5rem', borderTop: '3px solid #8b5cf6' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', marginBottom: '1rem' }}>
                  <LayoutDashboard color="#8b5cf6" size={20} /> Frontend UI
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#8b5cf6' }}>React + Vite:</strong> Provides a highly responsive, modern single-page application experience.</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#8b5cf6' }}>Recharts / Chart.js:</strong> Used for rendering dynamic budget allocation donuts and expenditure trend lines.</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
             <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <Terminal className="inline-icon" size={28} /> IMPLEMENTATION ROADMAP
            </h2>
            
            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', padding: '0.8rem 1.2rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>1</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Data Integration Phase</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Establish secure API gateways connecting the state's central treasury system, Police HRMS (payroll data), and GeM (Government e-Marketplace) procurement logs into the PostgreSQL data warehouse using Apache Airflow ETLs.</p>
                  </div>
                </div>

                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', padding: '0.8rem 1.2rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>2</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>RAG & Rule Engine Setup</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Digitize thousands of pages of state financial manuals, DGP circulars on expenditure, and CAG auditing standards. Process these into text chunks, generate embeddings, and load them into PGVector for the AI to query.</p>
                  </div>
                </div>
            </div>

            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', padding: '0.8rem 1.2rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>3</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Agent Tooling & LLM Prompts</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Develop a LangChain ReAct (Reason + Act) agent. Equip it with custom Python functions like <code>execute_sql_query()</code>, <code>run_anomaly_model()</code>, and <code>generate_pdf_report()</code>. Apply strict system prompts to prevent mathematical hallucinations.</p>
                  </div>
                </div>

                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', padding: '0.8rem 1.2rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>4</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Security & RBAC Deployment</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Implement strict Role-Based Access Control (RBAC). A Sub-Inspector can only query budget for their station, while the ADG Finance can query statewide. Deploy the solution inside a sovereign government cloud (NIC or state data center).</p>
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
            <p className="cyber-subtitle">Comprehensive Knowledge Base & System Architecture</p>
          </div>
        </div>
      </header>

      <div className="hrms-layout">
        <nav className="hrms-sidebar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
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

export default PoliceBudgetPlannerAgent;
