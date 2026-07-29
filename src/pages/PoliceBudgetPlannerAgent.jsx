import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'demo', label: 'Live AI Demo', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const predefinedResponses = {
  "analyze budget": {
    text: "Analyzing Q3 expenditures against the approved treasury budget...",
    table: true
  },
  "check vehicles": {
    text: "Scanning all vehicle maintenance bills from local vendors in District HQ. Found 1 anomaly.",
    alert: "Fraud Alert: Invoice #4409 for UP-32-BG-1021 claims 2 clutch replacements in 40 days. Vendor rate is 25% above GeM approved rates."
  },
  "generate cag": {
    text: "Compiling financial utilization data for the past 6 months. CAG compliant format verified.",
    success: "Fund Utilization Certificate (UC) successfully generated and cryptographically signed."
  },
  "default": {
    text: "I am the Police Budget Planner AI. I can analyze financial trends, detect invoice fraud, generate CAG reports, and forecast election deployment costs. Click one of the suggested prompts to see my capabilities."
  }
};

const PoliceBudgetPlannerAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Chat Demo State
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'System Online. Secure connection established to State Treasury API and Police Procurement DB. How can I assist you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (activeTab === 'demo') {
      scrollToBottom();
    }
  }, [messages, isTyping, activeTab]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const newMsg = { sender: 'user', text };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      let response = predefinedResponses["default"];
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("budget") || lowerText.includes("analyze")) {
        response = predefinedResponses["analyze budget"];
      } else if (lowerText.includes("vehicle") || lowerText.includes("fraud") || lowerText.includes("repair")) {
        response = predefinedResponses["check vehicles"];
      } else if (lowerText.includes("cag") || lowerText.includes("report") || lowerText.includes("uc")) {
        response = predefinedResponses["generate cag"];
      }

      setMessages(prev => [...prev, { sender: 'ai', ...response }]);
      setIsTyping(false);
    }, 1500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Activity className="inline-icon" size={28} /> AI COMMAND CENTER
            </h2>
            
            {/* Top Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(6,182,212,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(6,182,212,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><PieChart size={20} color="#06b6d4" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Budget Utilized</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  62% <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> +2% from Q2</span>
                </div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '62%' }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ height: '100%', background: 'linear-gradient(90deg, #06b6d4, #3b82f6)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(239,68,68,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><ShieldAlert size={20} color="#ef4444" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Anomalies Detected</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  142 <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>Invoices Flagged</span>
                </div>
                <p style={{ color: '#fca5a5', fontSize: '0.85rem', marginTop: '0.5rem' }}>Estimated Savings: ₹1.2 Cr</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(139,92,246,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><CheckCircle2 size={20} color="#8b5cf6" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>CAG Compliance Score</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#c4b5fd', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  99.8% <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> Perfect</span>
                </div>
                <p style={{ color: '#a78bfa', fontSize: '0.85rem', marginTop: '0.5rem' }}>Next audit ready in 14 days.</p>
              </div>
            </div>

            {/* Department Breakdown */}
            <div className="panel" style={{ padding: '2rem' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={20} color="#06b6d4"/> Sub-Head Allocation Burn Rate
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Fuel (POL) for PCR Fleet</span>
                    <span style={{ color: '#ef4444', fontWeight: 'bold' }}>94% Burned (Warning)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '94%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#ef4444', boxShadow: '0 0 10px #ef4444' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Initiated alert to DGP for supplementary ₹5 Cr budget request before Diwali deployment.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Arms, Ammunition & Riot Gear</span>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>32% Burned (Safe)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '32%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#10b981' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Analyzed current stock levels. Recommends delaying new tear-gas procurement until Q4 to maximize fund liquidity.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Cyber Crime Training & Software</span>
                    <span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>78% Burned (Optimal)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '78%' }} transition={{ duration: 1, delay: 0.4 }} style={{ height: '100%', background: '#8b5cf6' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Approved ₹45 Lakhs for new forensic software licenses. Utilization certificate (UC) auto-generated for Home Ministry.</p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
              
              {/* Chat Header */}
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(6,182,212,0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Budget Planner Agent - Interactive Terminal</h3>
              </div>

              {/* Chat Messages */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ 
                      maxWidth: '80%', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '12px',
                      background: msg.sender === 'user' ? 'rgba(139,92,246,0.2)' : 'rgba(6,182,212,0.1)',
                      border: `1px solid ${msg.sender === 'user' ? 'rgba(139,92,246,0.4)' : 'rgba(6,182,212,0.3)'}`,
                      color: '#f8fafc',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '12px',
                      borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: msg.sender === 'user' ? '#c4b5fd' : '#67e8f9', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {msg.sender === 'user' ? 'Authorized Officer' : <><Bot size={14}/> Budget AI</>}
                      </div>
                      <div style={{ lineHeight: '1.6' }}>{msg.text}</div>
                      
                      {msg.table && (
                        <div style={{ marginTop: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>
                            <span>Category</span><span>Allocated</span><span>Spent</span><span>Status</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                            <span>Fuel (POL)</span><span>₹12.5 Cr</span><span style={{ color: '#ef4444' }}>₹11.8 Cr</span><span>94%</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem' }}>
                            <span>Arms & Ammo</span><span>₹4.2 Cr</span><span style={{ color: '#10b981' }}>₹1.1 Cr</span><span>26%</span>
                          </div>
                        </div>
                      )}

                      {msg.alert && (
                        <div style={{ marginTop: '1rem', background: 'rgba(239,68,68,0.1)', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '4px', display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                          <AlertTriangle color="#ef4444" size={20} style={{ flexShrink: 0, marginTop: '2px' }}/>
                          <span style={{ color: '#fca5a5', fontSize: '0.95rem', lineHeight: '1.5' }}>{msg.alert}</span>
                        </div>
                      )}

                      {msg.success && (
                        <div style={{ marginTop: '1rem', background: 'rgba(16,185,129,0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '4px', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                          <CheckCircle2 color="#10b981" size={20} style={{ flexShrink: 0 }}/>
                          <span style={{ color: '#a7f3d0', fontSize: '0.95rem' }}>{msg.success}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                     <div style={{ padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.2)'}}>
                        <div className="typing-indicator" style={{ display: 'flex', gap: '0.4rem' }}>
                           <span style={{ width: '8px', height: '8px', background: '#06b6d4', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.32s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#06b6d4', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.16s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#06b6d4', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both' }}></span>
                        </div>
                     </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Area */}
              <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                   <button onClick={() => handleSendMessage("Analyze Q3 budget expenditure")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '20px', color: '#c4b5fd', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Analyze Q3 Budget
                   </button>
                   <button onClick={() => handleSendMessage("Check vehicle repair bills for anomalies")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '20px', color: '#c4b5fd', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Scan Repair Bills
                   </button>
                   <button onClick={() => handleSendMessage("Generate CAG compliance report")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '20px', color: '#c4b5fd', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Generate CAG Report
                   </button>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Ask the Budget AI (e.g., 'What is the fuel budget deficit?')"
                    style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: '8px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', fontSize: '1rem' }}
                  />
                  <button 
                    onClick={() => handleSendMessage(inputValue)}
                    style={{ padding: '0 1.5rem', background: '#06b6d4', border: 'none', borderRadius: '8px', color: '#000', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
            <style>{`
              @keyframes bounce {
                0%, 80%, 100% { transform: scale(0); }
                40% { transform: scale(1); }
              }
            `}</style>
          </motion.div>
        );

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
