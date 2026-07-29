import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Settings, Code, FileText, CheckCircle
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const PoliceBudgetPlannerAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="detailed-page-container">
      {/* Background Effects */}
      <div className="cyber-grid"></div>
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
      <div className="scan-line"></div>

      <div className="detailed-content-wrapper">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="back-button-container"
        >
          <button className="cyber-button-small" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} />
            <span>BACK TO MODULE</span>
          </button>
        </motion.div>

        <header className="detailed-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="header-icon-container"
          >
            <div className="icon-glow-ring">
              <Bot size={40} className="main-icon text-cyan" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="header-text"
          >
            <h1 className="cyber-title">POLICE BUDGET PLANNER <span>AI AGENT</span></h1>
            <p className="subtitle text-cyan">Advanced AI Architecture for Financial Intelligence & Allocation</p>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="stats-row"
        >
          <div className="stat-card">
            <Cpu className="stat-icon text-cyan" />
            <div className="stat-info">
              <span className="stat-value">v2.4.0</span>
              <span className="stat-label">Model Version</span>
            </div>
          </div>
          <div className="stat-card">
            <Database className="stat-icon text-purple" />
            <div className="stat-info">
              <span className="stat-value">PostgreSQL + PGVector</span>
              <span className="stat-label">Core Database</span>
            </div>
          </div>
          <div className="stat-card">
            <Network className="stat-icon text-blue" />
            <div className="stat-info">
              <span className="stat-value">LangChain</span>
              <span className="stat-label">Agent Framework</span>
            </div>
          </div>
          <div className="stat-card">
            <ShieldAlert className="stat-icon text-red" />
            <div className="stat-info">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Audit Accuracy</span>
            </div>
          </div>
        </motion.div>

        <div className="content-tabs">
          {['overview', 'architecture', 'tech-stack', 'implementation'].map((tab) => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="tab-content-area">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="overview-section"
              >
                <div className="info-card premium-glass">
                  <h3>Agent Description</h3>
                  <p>
                    The <strong>Police Budget Planner AI</strong> is a specialized autonomous agent designed to handle the complex financial operations of a state police department. It analyzes historical spending, predicts future requirements based on upcoming events (elections, festivals), and allocates funds optimally across districts and zones.
                  </p>
                  <p>
                    It also functions as an automated auditor, scanning vendor bills and procurement logs to detect overpricing, duplicate invoices, and non-compliance with treasury rules.
                  </p>
                </div>

                <div className="feature-grid">
                  <div className="feature-card highlight-cyan">
                    <PieChart className="f-icon" />
                    <h4>Predictive Allocation</h4>
                    <p>Uses historical data and upcoming event calendars to forecast required budget for fuel, overtime, and logistics.</p>
                  </div>
                  <div className="feature-card highlight-purple">
                    <ShieldAlert className="f-icon" />
                    <h4>Anomaly Detection</h4>
                    <p>Instantly flags duplicate bills, unusual vendor pricing, and irregular fund utilization patterns.</p>
                  </div>
                  <div className="feature-card highlight-blue">
                    <FileText className="f-icon" />
                    <h4>Automated CAG Reports</h4>
                    <p>Generates compliance-ready financial reports and Fund Utilization Certificates for government treasury.</p>
                  </div>
                  <div className="feature-card highlight-cyan">
                    <Terminal className="f-icon" />
                    <h4>NLP Financial Queries</h4>
                    <p>Allows executives to ask natural language questions like "What is our current deficit in the vehicle maintenance fund?"</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'architecture' && (
              <motion.div 
                key="architecture"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="architecture-section"
              >
                <div className="architecture-diagram premium-glass">
                  <h3>System Architecture</h3>
                  <div className="arch-flow">
                    <div className="arch-node input-node">
                      <Database size={24} />
                      <span>Data Sources<br/><small>Treasury, Payroll, Procurement</small></span>
                    </div>
                    <div className="arch-arrow">→</div>
                    <div className="arch-node processing-node">
                      <Server size={24} />
                      <span>Data Ingestion & Cleaning<br/><small>ETL Pipeline (Apache Airflow)</small></span>
                    </div>
                    <div className="arch-arrow">→</div>
                    <div className="arch-node core-node">
                      <Cpu size={24} />
                      <span>AI Reasoning Engine<br/><small>LangChain Agent + LLM</small></span>
                    </div>
                    <div className="arch-arrow">→</div>
                    <div className="arch-node output-node">
                      <PieChart size={24} />
                      <span>Outputs<br/><small>Dashboards, Alerts, Reports</small></span>
                    </div>
                  </div>
                </div>

                <div className="arch-details-grid">
                  <div className="arch-detail-card">
                    <h4>Vector Database (RAG)</h4>
                    <p>Stores government financial manuals, police acts, and CAG guidelines as embeddings. The AI retrieves these rules to ensure every allocation suggestion is compliant.</p>
                  </div>
                  <div className="arch-detail-card">
                    <h4>Agentic Workflow</h4>
                    <p>The AI operates as an agent with access to tools (SQL Tool for DB queries, Python REPL for complex math, PDF generator for reports).</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tech-stack' && (
              <motion.div 
                key="tech-stack"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="tech-stack-section"
              >
                <div className="tech-category-grid">
                  <div className="tech-card">
                    <div className="t-icon-wrapper"><Code /></div>
                    <h3>Core Framework</h3>
                    <ul>
                      <li><CheckCircle size={14}/> <strong>LangChain / LlamaIndex:</strong> Orchestrates the agent workflow and tool calling.</li>
                      <li><CheckCircle size={14}/> <strong>Python (FastAPI):</strong> High-performance backend API serving the AI responses.</li>
                    </ul>
                  </div>
                  
                  <div className="tech-card">
                    <div className="t-icon-wrapper"><Cpu /></div>
                    <h3>AI & Models</h3>
                    <ul>
                      <li><CheckCircle size={14}/> <strong>LLM:</strong> GPT-4 or local Llama-3 (fine-tuned on financial data).</li>
                      <li><CheckCircle size={14}/> <strong>Embeddings:</strong> OpenAI text-embedding-3 or local HuggingFace embeddings for RAG.</li>
                      <li><CheckCircle size={14}/> <strong>Anomaly Detection:</strong> Isolation Forest & Autoencoders (Scikit-Learn).</li>
                    </ul>
                  </div>

                  <div className="tech-card">
                    <div className="t-icon-wrapper"><Database /></div>
                    <h3>Data & Storage</h3>
                    <ul>
                      <li><CheckCircle size={14}/> <strong>PostgreSQL:</strong> Primary relational database for transactions and logs.</li>
                      <li><CheckCircle size={14}/> <strong>PGVector / Pinecone:</strong> Vector database for storing financial rule embeddings.</li>
                      <li><CheckCircle size={14}/> <strong>Redis:</strong> Caching layer for fast response times.</li>
                    </ul>
                  </div>

                  <div className="tech-card">
                    <div className="t-icon-wrapper"><Network /></div>
                    <h3>Frontend</h3>
                    <ul>
                      <li><CheckCircle size={14}/> <strong>React + Vite:</strong> Dynamic, fast UI components.</li>
                      <li><CheckCircle size={14}/> <strong>Framer Motion:</strong> For smooth, premium cyber-themed animations.</li>
                      <li><CheckCircle size={14}/> <strong>Recharts/Chart.js:</strong> Financial data visualization.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'implementation' && (
              <motion.div 
                key="implementation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="implementation-section"
              >
                <div className="timeline-container">
                  <div className="timeline-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Data Integration Phase</h3>
                      <p>Connect the backend (Python/FastAPI) to existing state treasury APIs, HRMS (for payroll data), and procurement portals. Establish ETL pipelines to clean and structure historical budget data into PostgreSQL.</p>
                    </div>
                  </div>
                  <div className="timeline-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>RAG System Setup</h3>
                      <p>Digitize and chunk all state financial manuals, police procurement guidelines, and CAG audit rules. Embed these chunks and store them in a Vector Database (PGVector) for the AI to reference.</p>
                    </div>
                  </div>
                  <div className="timeline-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Agent Tooling & Prompts</h3>
                      <p>Configure a LangChain agent. Provide it with tools like <code>query_database()</code>, <code>calculate_deficit()</code>, and <code>generate_pdf()</code>. Write strict system prompts enforcing accuracy and compliance over hallucination.</p>
                    </div>
                  </div>
                  <div className="timeline-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3>Frontend & Dashboard</h3>
                      <p>Build the React interface (like this platform) where executives can view dashboards or use a chat interface to communicate with the Agent.</p>
                    </div>
                  </div>
                  <div className="timeline-step">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h3>Security & Deployment</h3>
                      <p>Implement Role-Based Access Control (RBAC). Ensure sensitive financial data is encrypted at rest and in transit. Deploy on secure state data centers or sovereign cloud.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PoliceBudgetPlannerAgent;
