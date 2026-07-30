import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity, FileSpreadsheet, Mic, Download, Loader2, CheckSquare, Search, Receipt
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'ledger', label: 'Data Ledger', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'Interactive Terminal', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const MirandaRightsPrompterAIAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Miranda Rights Prompter AI Engine Online. Systems synchronized. Ready for queries.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportStep, setReportStep] = useState(0);

  const scrollToBottom = () => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); };
  useEffect(() => { if (activeTab === 'demo') scrollToBottom(); }, [messages, isTyping, activeTab]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let response = { text: "Processing your request through the AI engine..." };
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("scan") || lowerText.includes("analyze")) {
        response = { text: "Scan initiated...", success: "Analysis complete. No anomalies detected in the current dataset." };
      } else if (lowerText.includes("fraud") || lowerText.includes("detect")) {
        response = { text: "Running anomaly detection matrix...", alert: "Warning: Suspicious patterns detected in recent transactions. Flagged for manual review." };
      } else if (lowerText.includes("voice")) {
        response = { text: "Voice Command Recognized.", success: "Executing verbal protocol. System parameters updated." };
      } else {
        response = { text: "I am the Miranda Rights Prompter AI. I automate complex workflows, provide real-time analytics, and ensure 100% compliance. How can I assist you further?" };
      }

      setMessages(prev => [...prev, { sender: 'ai', ...response }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceCommand = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      handleSendMessage("Voice input: Execute primary protocol.");
    }, 2500);
  };

  const handleGenerateReport = () => {
    setShowReportModal(true);
    setReportStep(1);
    setTimeout(() => setReportStep(2), 1500);
    setTimeout(() => setReportStep(3), 3000);
    setTimeout(() => setReportStep(4), 4500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid #06b6d466', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div style={{ width: '400px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '250px', height: '250px', border: '2px dashed #06b6d466', borderRadius: '50%' }} />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '200px', height: '200px', border: '2px solid #06b6d433', borderRadius: '50%' }} />
                <div style={{ width: '120px', height: '120px', background: 'rgba(15,23,42,0.9)', border: '2px solid #06b6d4', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px #06b6d480', zIndex: 2 }}>
                  <Cpu size={50} color="#06b6d4" />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', textShadow: '0 0 20px #06b6d480' }}>Miranda Rights Prompter AI</h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
                  The Miranda Rights Prompter AI provides enterprise-grade automation and predictive analytics. It seamlessly integrates into existing workflows to eliminate manual bottlenecks, detect anomalies in real-time, and enforce strict regulatory compliance.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(6,182,212,0.2)', borderLeft: '4px solid #06b6d4', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#67e8f9', margin: '0 0 0.5rem 0' }}>Real-time Intelligence</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Processes massive datasets instantly to provide actionable insights.</p>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#10b981', margin: '0 0 0.5rem 0' }}>Automated Compliance</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Ensures every action adheres to strict legal and financial guidelines.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #06b6d466', paddingBottom: '1rem' }}>
              <h2 style={{ color: '#67e8f9', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity className="inline-icon" size={28} /> SYSTEM DASHBOARD
              </h2>
              <button onClick={handleGenerateReport} style={{ background: '#06b6d4', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <Download size={18} /> Export Analytics
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid #06b6d466', borderRadius: '12px', padding: '1.5rem', position: 'relative' }}>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Active Processes</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff' }}>1,432</div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1.5 }} style={{ height: '100%', background: '#06b6d4' }} />
                </div>
                <p style={{ color: '#67e8f9', fontSize: '0.85rem', marginTop: '0.5rem' }}>Operational Efficiency: 85%</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative' }}>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Anomalies Prevented</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>87</div>
                <p style={{ color: '#6ee7b7', fontSize: '0.85rem', marginTop: '0.5rem' }}>Threats mitigated this month</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative' }}>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Flags Pending Review</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444' }}>4</div>
                <p style={{ color: '#fca5a5', fontSize: '0.85rem', marginTop: '0.5rem' }}>Requires manual oversight</p>
              </div>
            </div>

            <div className="panel" style={{ padding: '2rem', border: '1px solid #06b6d466' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Recent Operations Log</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1' }}>Dataset Analysis #8841</span>
                    <span style={{ color: '#10b981' }}>COMPLETED</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#10b981' }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1' }}>Risk Assessment Matrix</span>
                    <span style={{ color: '#06b6d4' }}>IN PROGRESS</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#06b6d4' }} />
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showReportModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ background: '#0f172a', border: '1px solid #06b6d4', borderRadius: '16px', padding: '2rem', width: '90%', maxWidth: '500px' }}>
                    <h3 style={{ color: '#67e8f9', marginTop: 0, marginBottom: '1.5rem' }}>Generating Report...</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ color: reportStep >= 1 ? '#10b981' : '#64748b' }}>1. Compiling analytics data...</div>
                      <div style={{ color: reportStep >= 2 ? '#10b981' : '#64748b' }}>2. Cross-referencing logs...</div>
                      <div style={{ color: reportStep >= 3 ? '#10b981' : '#64748b' }}>3. Formatting document...</div>
                    </div>
                    {reportStep >= 4 && (
                      <button onClick={() => setShowReportModal(false)} style={{ width: '100%', background: '#06b6d4', color: '#fff', border: 'none', padding: '0.8rem', borderRadius: '8px', cursor: 'pointer' }}>
                        Download PDF
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );

      case 'ledger':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ border: '1px solid #06b6d466' }}>
            <h2 style={{ color: '#67e8f9', marginBottom: '1.5rem', borderBottom: '1px solid #06b6d466', paddingBottom: '1rem' }}>
              DATA LEDGER
            </h2>
            <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                <thead>
                  <tr style={{ background: 'rgba(6,182,212,0.2)', textAlign: 'left', borderBottom: '1px solid #06b6d466' }}>
                    <th style={{ padding: '1rem', color: '#67e8f9' }}>ID Reference</th>
                    <th style={{ padding: '1rem', color: '#67e8f9' }}>Category</th>
                    <th style={{ padding: '1rem', color: '#67e8f9' }}>AI Confidence</th>
                    <th style={{ padding: '1rem', color: '#67e8f9' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem' }}>REC-9923</td>
                    <td style={{ padding: '1rem' }}>Standard Operation</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981' }}>98.5%</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981' }}>Verified</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem' }}>REC-9924</td>
                    <td style={{ padding: '1rem' }}>Complex Analysis</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#f59e0b' }}>74.2%</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#f59e0b' }}>Needs Review</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem' }}>REC-9925</td>
                    <td style={{ padding: '1rem' }}>Security Protocol</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#ef4444' }}>12.1%</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#ef4444' }}>Flagged</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid #06b6d466' }}>
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid #06b6d466', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(6,182,212,0.2)' }}>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Interactive AI Terminal</h3>
              </div>
              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ maxWidth: '80%', padding: '1rem', borderRadius: '12px', background: msg.sender === 'user' ? 'rgba(6,182,212,0.2)' : 'rgba(255,255,255,0.05)', border: `1px solid ${msg.sender === 'user' ? '#06b6d466' : 'rgba(255,255,255,0.1)'}`, color: '#f8fafc' }}>
                      <div style={{ color: msg.sender === 'user' ? '#67e8f9' : '#06b6d4', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                        {msg.sender === 'user' ? 'Operator' : 'Miranda Rights Prompter AI'}
                      </div>
                      <div>{msg.text}</div>
                      {msg.alert && <div style={{ marginTop: '1rem', color: '#fca5a5' }}>{msg.alert}</div>}
                      {msg.success && <div style={{ marginTop: '1rem', color: '#a7f3d0' }}>{msg.success}</div>}
                    </div>
                  </div>
                ))}
                {isTyping && <div style={{ color: '#06b6d4' }}>AI is typing...</div>}
                <div ref={chatEndRef} />
              </div>
              <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)} placeholder="Type a command..." style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: '#fff', outline: 'none' }} />
                  <button onClick={() => handleSendMessage(inputValue)} style={{ background: '#06b6d4', color: '#fff', border: 'none', borderRadius: '12px', padding: '0 1.5rem', height: '50px', cursor: 'pointer', fontWeight: 'bold' }}>Send</button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid #06b6d466' }}>
            <h2 style={{ color: '#67e8f9', marginBottom: '2rem' }}>AI Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid #06b6d433' }}>
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Predictive Modeling</h3>
                <p style={{ color: '#94a3b8' }}>Utilizes historical data to forecast trends and optimize resource allocation proactively.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid #06b6d433' }}>
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Anomaly Detection</h3>
                <p style={{ color: '#94a3b8' }}>Continuous scanning of data streams to flag inconsistencies, preventing fraud and errors.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid #06b6d433' }}>
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Workflow Automation</h3>
                <p style={{ color: '#94a3b8' }}>Eliminates manual data entry by routing approvals and triggering actions automatically.</p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid #06b6d466' }}>
            <h2 style={{ color: '#67e8f9', marginBottom: '2rem' }}>Scenarios</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #06b6d4', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>1. Automated Exception Handling</h3>
                <p style={{ color: '#94a3b8', margin: 0 }}>When standard protocols fail, the AI intervenes to resolve bottlenecks without human input, escalating only critical issues.</p>
              </div>
              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #06b6d4', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>2. Compliance Auditing</h3>
                <p style={{ color: '#94a3b8', margin: 0 }}>The system continuously checks operations against government mandates, generating instant audit trails.</p>
              </div>
            </div>
          </motion.div>
        );

      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid #06b6d466' }}>
            <h2 style={{ color: '#67e8f9', marginBottom: '2rem' }}>System Architecture</h2>
            <div style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid #06b6d433', textAlign: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                  <div style={{ width: '200px' }}><div style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', padding: '1.5rem', borderRadius: '8px' }}><h4 style={{color:'#fff', margin:0}}>Data Ingestion</h4></div></div>
                  <div style={{ color: '#06b6d4' }}>→</div>
                  <div style={{ width: '250px' }}><div style={{ background: 'rgba(6,182,212,0.2)', border: '2px solid #06b6d4', padding: '2rem', borderRadius: '12px' }}><h3 style={{color:'#fff', margin:0}}>AI Core</h3></div></div>
                  <div style={{ color: '#06b6d4' }}>→</div>
                  <div style={{ width: '200px' }}><div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '8px' }}><h4 style={{color:'#fff', margin:0}}>Central ERP</h4></div></div>
               </div>
            </div>
          </motion.div>
        );

      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid #06b6d466' }}>
            <h2 style={{ color: '#67e8f9', marginBottom: '2rem' }}>Technologies Used</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
               {['Python', 'TensorFlow', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'].map((tech, i) => (
                 <div key={i} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                   <h4 style={{ color: '#e2e8f0', margin: 0 }}>{tech}</h4>
                 </div>
               ))}
            </div>
          </motion.div>
        );

      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid #06b6d466' }}>
            <h2 style={{ color: '#67e8f9', marginBottom: '2rem' }}>Code Implementation</h2>
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
                <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.9rem', fontFamily: "'Fira Code', monospace" }}>
                  <code dangerouslySetInnerHTML={{__html: `
def process_data(input_stream):
    # Analyze stream for anomalies
    model = load_ai_model()
    predictions = model.predict(input_stream)
    
    for item in predictions:
        if item.confidence < 0.8:
            flag_for_review(item)
        else:
            commit_to_ledger(item)
            
    return {"status": "success", "processed": len(predictions)}
                  `}} />
                </pre>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#020617', color: '#f8fafc', fontFamily: "'Inter', sans-serif", padding: '2rem' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 80%, rgba(6,182,212,0.2), transparent 40%)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid #06b6d433', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button onClick={() => navigate(-1)} style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #06b6d466', color: '#67e8f9', padding: '0.8rem', borderRadius: '10px', cursor: 'pointer' }}><ArrowLeft size={20} /></button>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase' }}>MIRANDA RIGHTS PROMPTER AI</h1>
              <div style={{ marginTop: '0.5rem', color: '#67e8f9', fontSize: '0.9rem' }}>INTELLIGENCE CORE ACTIVE</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ background: activeTab === tab.id ? 'rgba(6,182,212,0.2)' : 'rgba(15,23,42,0.6)', border: `1px solid ${activeTab === tab.id ? '#06b6d4' : 'rgba(255,255,255,0.1)'}`, color: activeTab === tab.id ? '#67e8f9' : '#94a3b8', padding: '0.8rem 1.2rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </div>
    </div>
  );
};
export default MirandaRightsPrompterAIAgent;
