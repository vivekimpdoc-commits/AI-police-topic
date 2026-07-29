import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity, FileSpreadsheet, Mic, Download, Loader2, DollarSign, Map
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'ledger', label: 'Allocation Ledger', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'Live AI Demo', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const predefinedResponses = {
  "distribute funds": {
    text: "Analyzing crime density and population data across 75 districts for Q4 allocation...",
    table: true
  },
  "emergency allocation": {
    text: "Emergency protocol initiated. Analyzing rapid deployment fund requirements for Coastal Districts.",
    alert: "Priority Alert: Cyclone Warning active. Re-routing ₹12.5 Cr from 'Stationary & Admin' to 'Disaster Relief & Logistics' for Coastal Zone."
  },
  "generate audit": {
    text: "Compiling allocation rationale and predictive models for DGP review. Verification complete.",
    success: "Fund Allocation Justification Report (FAJR) generated and cryptographically signed."
  },
  "voice input": {
    text: "Voice Command Recognized. Processing high-priority allocation for Anti-Naxal Operations...",
    alert: "Allocation Approved: ₹5.5 Crore dispersed to LWE (Left Wing Extremism) affected districts for immediate procurement of Mine Protected Vehicles (MPVs)."
  },
  "default": {
    text: "I am the Fund Allocation Expert AI. I optimize the distribution of state police budgets across districts based on real-time crime rates, population density, and emergency requirements. Click a prompt to test my capabilities."
  }
};

const FundAllocationExpertAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Chat Demo State
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'System Online. Secure connection established to State Treasury and Crime Records Bureau (NCRB). How can I optimize allocations today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef(null);

  // Report Modal State
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportStep, setReportStep] = useState(0);

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
      
      if (lowerText.includes("distribute") || lowerText.includes("district")) {
        response = predefinedResponses["distribute funds"];
      } else if (lowerText.includes("emergency") || lowerText.includes("cyclone")) {
        response = predefinedResponses["emergency allocation"];
      } else if (lowerText.includes("audit") || lowerText.includes("report")) {
        response = predefinedResponses["generate audit"];
      } else if (lowerText.includes("naxal") || lowerText.includes("voice")) {
        response = predefinedResponses["voice input"];
      }

      setMessages(prev => [...prev, { sender: 'ai', ...response }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceCommand = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      handleSendMessage("Voice input: Allocate emergency funds for Anti-Naxal operations in affected districts.");
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
      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139,92,246,0.3)', paddingBottom: '1rem' }}>
              <h2 style={{ color: '#c4b5fd', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity className="inline-icon" size={28} color="#c4b5fd"/> ALLOCATION COMMAND CENTER
              </h2>
              <button onClick={handleGenerateReport} style={{ background: '#8b5cf6', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Download size={18} /> Export Allocation Strategy
              </button>
            </div>
            
            {/* Top Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(139,92,246,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><DollarSign size={20} color="#c4b5fd" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Distributable Funds</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  ₹450 Cr <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> Q4 Influx</span>
                </div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(6,182,212,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(6,182,212,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Map size={20} color="#06b6d4" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Districts Optimized</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#67e8f9', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  75/75 <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>Statewide</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI mapped 100% of spatial crime data.</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(239,68,68,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><AlertTriangle size={20} color="#ef4444" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Under-funded High-Risk Zones</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fca5a5', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  3 <span style={{ fontSize: '1rem', color: '#ef4444', display: 'flex', alignItems: 'center' }}>Critical Deficit</span>
                </div>
                <p style={{ color: '#fca5a5', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI is re-routing ₹25 Cr to cover deficits.</p>
              </div>
            </div>

            {/* Department Breakdown */}
            <div className="panel" style={{ padding: '2rem' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={20} color="#8b5cf6"/> Live District Allocation Priorities
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>District A (High Cyber Crime Density)</span>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>₹42 Cr (Allocated)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Increased IT budget by 22% due to 40% spike in financial frauds last quarter.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>District B (Border/Smuggling Prone)</span>
                    <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>₹28 Cr (Allocating...)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#f59e0b' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Directing funds specifically to Night-Vision Drone procurement and Checkpost modernization.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>District C (Low Crime / Rural)</span>
                    <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>₹12 Cr (Optimized)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '25%' }} transition={{ duration: 1, delay: 0.4 }} style={{ height: '100%', background: '#3b82f6' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Reduced VIP security budget. Redirected surplus ₹3 Cr to District A.</p>
                </div>
              </div>
            </div>
            
            {/* Report Modal */}
            <AnimatePresence>
              {showReportModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ background: '#0f172a', border: '1px solid #8b5cf6', borderRadius: '16px', padding: '2rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
                    <h3 style={{ color: '#c4b5fd', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={24}/> Generating Allocation Strategy Report</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 1 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 1 ? <CheckCircle2 size={18}/> : <Loader2 size={18} className="spin-anim" />}
                        <span>Ingesting State Crime Records (NCRB)...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 2 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 2 ? <CheckCircle2 size={18}/> : reportStep === 1 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Running Resource Distribution Algorithm...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 3 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 3 ? <CheckCircle2 size={18}/> : reportStep === 2 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Validating Home Ministry Equity Rules...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 4 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 4 ? <CheckCircle2 size={18}/> : reportStep === 3 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Generating District-wise PDF...</span>
                      </div>
                    </div>
                    
                    {reportStep >= 4 && (
                      <button onClick={() => setShowReportModal(false)} style={{ width: '100%', background: '#8b5cf6', color: '#fff', border: 'none', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Download Strategy (.PDF)
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <style>{`
              .spin-anim { animation: spin 1s linear infinite; }
              @keyframes spin { 100% { transform: rotate(360deg); } }
            `}</style>
          </motion.div>
        );

      case 'ledger':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <h2 style={{ color: '#c4b5fd', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139,92,246,0.3)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FileSpreadsheet className="inline-icon" size={28} /> DYNAMIC ALLOCATION LEDGER
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Real-time fund dispatch log managed autonomously by the AI.</p>
            
            <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                <thead>
                  <tr style={{ background: 'rgba(139,92,246,0.1)', textAlign: 'left', borderBottom: '1px solid rgba(139,92,246,0.3)' }}>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>Dispatch Date</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>Target District</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>Allocated Amount</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>Primary Purpose</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>AI Justification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Nov 02, 2023</td>
                    <td style={{ padding: '1rem' }}>Varanasi (Zone 1)</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹15,00,00,000</td>
                    <td style={{ padding: '1rem' }}><span style={{ padding: '0.3rem 0.6rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem' }}>Mega Event</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> High Crowd Density</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Nov 01, 2023</td>
                    <td style={{ padding: '1rem' }}>Bastar Region</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹8,50,00,000</td>
                    <td style={{ padding: '1rem' }}><span style={{ padding: '0.3rem 0.6rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem' }}>Tactical Gear</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><AlertTriangle size={16}/> Critical Threat Level</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Oct 28, 2023</td>
                    <td style={{ padding: '1rem' }}>Gurugram City</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹22,00,00,000</td>
                    <td style={{ padding: '1rem' }}><span style={{ padding: '0.3rem 0.6rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem' }}>Cyber Infra</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> IT Crime Spike</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Oct 25, 2023</td>
                    <td style={{ padding: '1rem' }}>District Rural-3</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>-₹3,00,00,000</td>
                    <td style={{ padding: '1rem' }}><span style={{ padding: '0.3rem 0.6rem', background: 'rgba(239,68,68,0.2)', color: '#fca5a5', borderRadius: '20px', fontSize: '0.8rem' }}>Fund Recall</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> Surplus Unused</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
            {isListening && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 1.5s infinite' }}>
                  <Mic size={40} color="#c4b5fd" />
                </div>
                <h3 style={{ color: '#c4b5fd', fontWeight: 'normal' }}>Listening to Voice Command...</h3>
              </div>
            )}
            
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative' }}>
              
              {/* Chat Header */}
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(139,92,246,0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Allocation Expert - Interactive Terminal</h3>
              </div>

              {/* Chat Messages */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ 
                      maxWidth: '80%', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '12px',
                      background: msg.sender === 'user' ? 'rgba(14,165,233,0.2)' : 'rgba(139,92,246,0.1)',
                      border: `1px solid ${msg.sender === 'user' ? 'rgba(14,165,233,0.4)' : 'rgba(139,92,246,0.3)'}`,
                      color: '#f8fafc',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '12px',
                      borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: msg.sender === 'user' ? '#7dd3fc' : '#c4b5fd', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {msg.sender === 'user' ? 'DGP Finance' : <><Bot size={14}/> Allocation AI</>}
                      </div>
                      <div style={{ lineHeight: '1.6' }}>
                        {msg.text.includes("Voice input:") ? (
                           <span><Mic size={14} style={{ marginRight: '5px', verticalAlign: 'middle', color: '#c4b5fd' }}/> {msg.text.replace("Voice input: ", "")}</span>
                        ) : msg.text}
                      </div>
                      
                      {msg.table && (
                        <div style={{ marginTop: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>
                            <span>Target Zone</span><span>Requested</span><span>AI Allocated</span><span>Priority</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                            <span>Metro City IT Cell</span><span>₹15 Cr</span><span style={{ color: '#10b981' }}>₹15 Cr</span><span>High</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.9rem' }}>
                            <span>Rural Station Dev</span><span>₹10 Cr</span><span style={{ color: '#f59e0b' }}>₹6 Cr</span><span>Med</span>
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
                     <div style={{ padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.2)'}}>
                        <div className="typing-indicator" style={{ display: 'flex', gap: '0.4rem' }}>
                           <span style={{ width: '8px', height: '8px', background: '#8b5cf6', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.32s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#8b5cf6', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.16s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#8b5cf6', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both' }}></span>
                        </div>
                     </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Area */}
              <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                   <button onClick={() => handleSendMessage("Distribute Q4 funds across 75 districts")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.4)', borderRadius: '20px', color: '#7dd3fc', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Distribute Q4 Funds
                   </button>
                   <button onClick={() => handleSendMessage("Need emergency allocation for coastal cyclone")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.4)', borderRadius: '20px', color: '#7dd3fc', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Cyclone Emergency
                   </button>
                   <button onClick={() => handleSendMessage("Generate audit report for allocations")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.4)', borderRadius: '20px', color: '#7dd3fc', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Generate Justification Audit
                   </button>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button 
                    onClick={handleVoiceCommand}
                    title="Use Voice Command"
                    style={{ padding: '1rem', background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.3)', borderRadius: '50%', color: '#7dd3fc', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(14,165,233,0.3)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(14,165,233,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    <Mic size={20} />
                  </button>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Ask Allocation AI (e.g., 'Allocate funds to District X')"
                    style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: '8px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', fontSize: '1rem' }}
                  />
                  <button 
                    onClick={() => handleSendMessage(inputValue)}
                    style={{ padding: '0 1.5rem', height: '100%', background: '#8b5cf6', border: 'none', borderRadius: '8px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
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
              @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(139,92,246,0.4); }
                70% { box-shadow: 0 0 0 20px rgba(139,92,246,0); }
                100% { box-shadow: 0 0 0 0 rgba(139,92,246,0); }
              }
            `}</style>
          </motion.div>
        );

      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#c4b5fd', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139,92,246,0.3)', paddingBottom: '1rem' }}>
              <Bot className="inline-icon" size={28} /> AGENT OVERVIEW & NECESSITY
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              The <strong>Fund Allocation Expert AI</strong> completely transforms how state police budgets are distributed across different districts, stations, and operational heads. Instead of politically motivated or static historical allocations, this AI uses real-time crime data, population metrics, and threat intelligence to dynamically dispatch funds exactly where they are needed most.
            </p>

            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#3b82f6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Map size={20}/> Why is this AI Needed?
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.8rem' }}>• <strong>Inequitable Distribution:</strong> Historically, influential districts get surplus funds while high-crime rural belts suffer from shortages.</p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.8rem' }}>• <strong>Static Models:</strong> Current allocation relies on last year's spending, ignoring newly emerged cyber-crime hubs or riot-prone zones.</p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>• <strong>Emergency Delays:</strong> Disbursing disaster relief or anti-terror operation funds takes weeks of paperwork.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#3b82f6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldAlert size={20}/> The AI Solution
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.8rem' }}>• <strong>Spatial Crime Mapping:</strong> Integrates with NCRB data to identify crime hotspots and automatically allocates more budget for patrols and CCTV.</p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '0.8rem' }}>• <strong>Dynamic Re-routing:</strong> Auto-recalls unutilized funds from peaceful districts to fund sudden deployments (e.g., Election duties).</p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>• <strong>Algorithmic Fairness:</strong> Ensures fund equity per capita and per FIR registered, creating an unbiased financial ecosystem.</p>
              </div>
            </div>
          </motion.div>
        );
      
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#c4b5fd', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139,92,246,0.3)', paddingBottom: '1rem' }}>
              <Zap className="inline-icon" size={28} /> DEEP CAPABILITIES
            </h2>
            <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>The AI acts as an impartial, high-speed Financial Commissioner for the Police Force.</p>
            
            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem', borderLeft: '4px solid #8b5cf6' }}>
                <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Crime-Density Indexed Funding</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  The AI doesn't allocate patrol fuel equally. If District X sees a 30% rise in highway robberies, the AI automatically increases its Motor Transport (MT) and Night Patrol allocation, while slightly reducing MT funds for District Y where crime has dropped.
                </p>
              </div>
              <div className="panel" style={{ padding: '1.5rem', borderLeft: '4px solid #3b82f6' }}>
                <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Rapid Emergency Dispatch</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  During a natural disaster (e.g., Floods) or severe riots, the DGP can command the AI to "Fund emergency deployment". The AI instantly pauses non-essential procurement across the state and unlocks ₹50 Crore in liquid funds for immediate SDRF operations.
                </p>
              </div>
            </div>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem', borderLeft: '4px solid #8b5cf6' }}>
                <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Predictive Resource Exhaustion</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  Using Machine Learning on past financial years, the AI predicts exactly which Police Station will run out of 'Stationary & Admin' funds by November and proactively allocates a supplementary budget before their operations stall.
                </p>
              </div>
              <div className="panel" style={{ padding: '1.5rem', borderLeft: '4px solid #3b82f6' }}>
                <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Sovereign Fairness Audit</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  Every time funds are dispatched, the AI generates a "Justification Score". If a political leader requests ₹10 Cr for a low-crime area, the AI flags it with a low justification score, ensuring transparency for CAG and Home Ministry auditors.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#c4b5fd', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139,92,246,0.3)', paddingBottom: '1rem' }}>
              <Target className="inline-icon" size={28} /> REAL-WORLD SCENARIOS
            </h2>
            
            <div className="timeline-container">
              <div className="panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '0.8rem' }}>Scenario 1: The Cyber Crime Hub Shift</h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>
                  <strong>The Problem:</strong> A small Tier-2 city suddenly becomes a massive hub for Jamtara-style cyber frauds. The local police station lacks the budget for forensic software and high-speed internet.
                </p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  <strong>AI Intervention:</strong> The AI detects a 300% spike in IT-Act FIRs from that city via the CCTNS database. It autonomously reallocates ₹2 Crore from the "Rural Traffic" budget of a peaceful district directly to this city's "Cyber Cell Setup" fund.
                </p>
              </div>

              <div className="panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#3b82f6', marginBottom: '0.8rem' }}>Scenario 2: Pre-Election Force Deployment</h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>
                  <strong>The Problem:</strong> State elections require the sudden movement of 50,000 CAPF personnel. Calculating their accommodation, food, and transport budget district-by-district takes manual accountants months.
                </p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  <strong>AI Intervention:</strong> The DGP uses Voice Command: *"Allocate funds for Phase 1 Elections"*. The AI ingests the Election Commission's deployment plan, calculates per-diem costs, and instantly deposits accurate funds into the accounts of 25 District SPs in seconds.
                </p>
              </div>

              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '0.8rem' }}>Scenario 3: Preventing Fund Lapsing</h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1rem' }}>
                  <strong>The Problem:</strong> District A has ₹5 Crore unspent for 'Police Quarters Construction', which will lapse and return to the center on March 31st if unused.
                </p>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  <strong>AI Intervention:</strong> In January, the AI realizes District A hasn't even floated tenders. It legally 'recalls' that ₹5 Crore and allocates it to District B, which has pending approved bills for 'Barrack Repairs', saving the state's budget from lapsing.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
             <h2 style={{ color: '#c4b5fd', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139,92,246,0.3)', paddingBottom: '1rem' }}>
              <Network className="inline-icon" size={28} /> SYSTEM ARCHITECTURE
            </h2>
            
            <div className="panel" style={{ padding: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ color: '#cbd5e1', marginBottom: '2rem' }}>Decision Flow Diagram</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#8b5cf6' }}>
                   <div style={{ padding: '1rem', border: '1px solid #334155', borderRadius: '8px', background: 'rgba(15, 23, 42, 0.6)' }}>
                      <Database size={32} style={{ margin: '0 auto', marginBottom: '0.5rem' }}/>
                      <div style={{ fontSize: '0.9rem' }}>CCTNS Crime Data<br/><span style={{ color: '#64748b', fontSize: '0.75rem' }}>FIRs, Threat Intel</span></div>
                   </div>
                   <div>→</div>
                   <div style={{ padding: '1rem', border: '1px solid #334155', borderRadius: '8px', background: 'rgba(15, 23, 42, 0.6)' }}>
                      <Server size={32} style={{ margin: '0 auto', marginBottom: '0.5rem' }}/>
                      <div style={{ fontSize: '0.9rem' }}>Allocation Rules<br/><span style={{ color: '#64748b', fontSize: '0.75rem' }}>Vector DB (RAG)</span></div>
                   </div>
                   <div>→</div>
                   <div style={{ padding: '1rem', border: '1px solid #8b5cf6', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.1)', boxShadow: '0 0 15px rgba(139,92,246,0.2)' }}>
                      <Cpu size={32} style={{ margin: '0 auto', marginBottom: '0.5rem' }}/>
                      <div style={{ fontSize: '0.9rem' }}>Resource Optimizer AI<br/><span style={{ color: '#64748b', fontSize: '0.75rem' }}>Deep Q-Learning</span></div>
                   </div>
                   <div>→</div>
                   <div style={{ padding: '1rem', border: '1px solid #334155', borderRadius: '8px', background: 'rgba(15, 23, 42, 0.6)' }}>
                      <Activity size={32} style={{ margin: '0 auto', marginBottom: '0.5rem' }}/>
                      <div style={{ fontSize: '0.9rem' }}>Treasury Dispatch<br/><span style={{ color: '#64748b', fontSize: '0.75rem' }}>API to State Bank</span></div>
                   </div>
                </div>
            </div>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Reinforcement Learning (RL)</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>The AI uses RL (Deep Q-Networks) to learn optimal allocations. If allocating funds to Cyber Cells leads to a drop in cyber-crime over 6 months, the AI's algorithm rewards itself, improving future decisions.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Treasury API Integration</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Once an allocation is approved by the DGP, the AI communicates directly with the state's IFMS (Integrated Financial Management System) via secure REST APIs to execute the fund transfer.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel">
            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem', borderTop: '3px solid #8b5cf6' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', marginBottom: '1rem' }}>
                  <Code color="#8b5cf6" size={20} /> Core Framework
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#8b5cf6' }}>Ray RLlib:</strong> Distributed reinforcement learning framework for training the allocation algorithms.</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#8b5cf6' }}>Django (Python):</strong> High-security backend to process financial transfers and manage RBAC.</p>
                </div>
              </div>
              
              <div className="panel" style={{ padding: '1.5rem', borderTop: '3px solid #3b82f6' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', marginBottom: '1rem' }}>
                  <Cpu color="#3b82f6" size={20} /> AI & Models
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#3b82f6' }}>LLM:</strong> GPT-4 (used purely for parsing Voice Commands and explaining logic in natural language).</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#3b82f6' }}>XGBoost:</strong> Predictive model to forecast future crime spikes based on historical trends.</p>
                </div>
              </div>
            </div>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem', borderTop: '3px solid #8b5cf6' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', marginBottom: '1rem' }}>
                  <Database color="#8b5cf6" size={20} /> Data & Storage
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#8b5cf6' }}>Apache Cassandra:</strong> Distributed NoSQL database capable of handling real-time nationwide crime telemetry.</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#8b5cf6' }}>Redis:</strong> In-memory caching for lightning-fast dashboard metrics.</p>
                </div>
              </div>

              <div className="panel" style={{ padding: '1.5rem', borderTop: '3px solid #3b82f6' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', marginBottom: '1rem' }}>
                  <LayoutDashboard color="#3b82f6" size={20} /> Frontend UI
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#3b82f6' }}>React + Vite:</strong> Ultra-fast client rendering for the Allocation Command Center.</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}><strong style={{ color: '#3b82f6' }}>Framer Motion:</strong> Provides the premium, high-tech animations for the Voice Demo and Ledger.</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
             <h2 style={{ color: '#c4b5fd', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139,92,246,0.3)', paddingBottom: '1rem' }}>
              <Terminal className="inline-icon" size={28} /> IMPLEMENTATION ROADMAP
            </h2>
            
            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', padding: '0.8rem 1.2rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>1</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Data Pipeline Setup (Month 1)</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Connect the AI to the CCTNS (Crime and Criminal Tracking Network) via APIs to receive daily FIR data. Establish a read-only link to the State Treasury IFMS.</p>
                  </div>
                </div>

                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', padding: '0.8rem 1.2rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>2</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Model Training (Month 2-3)</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Train the XGBoost predictive models on the last 15 years of crime statistics vs. budget spending to establish correlations and optimal funding thresholds.</p>
                  </div>
                </div>
            </div>

            <div className="split-section" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', padding: '0.8rem 1.2rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>3</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Shadow Testing (Month 4)</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Run the AI in 'Shadow Mode'. It will generate allocation suggestions but will not execute transfers. Human finance officers will validate its logic and fairness scores.</p>
                  </div>
                </div>

                <div className="panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', padding: '0.8rem 1.2rem', borderRadius: '50%', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>4</div>
                  <div>
                    <h3 style={{ color: '#e2e8f0', marginBottom: '0.5rem' }}>Live Deployment (Month 5)</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Grant the AI read-write access to the Treasury. Implement the Voice Command interface for the DGP's tablet for emergency dispatch overrides.</p>
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
      <div className="hrms-bg-fx" style={{ background: 'radial-gradient(circle at top right, rgba(139,92,246,0.15) 0%, transparent 40%)' }}></div>
      <div className="hrms-grid-overlay"></div>

      <header className="hrms-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          <span>Back to Module</span>
        </button>
        
        <div className="header-titles">
          <div className="icon-wrapper" style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)' }}>
            <Map size={40} color="#c4b5fd" />
          </div>
          <div>
            <h1 className="cyber-title" style={{ color: '#fff' }}>FUND ALLOCATION EXPERT <span style={{ color: '#c4b5fd' }}>AI AGENT</span></h1>
            <p className="cyber-subtitle">Dynamic Resource Optimizer & Treasury Integration</p>
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
          
          <div className="module-stats-box" style={{ marginTop: '2rem', borderTopColor: 'rgba(139,92,246,0.3)' }}>
            <h4 style={{ color: '#c4b5fd', marginBottom: '1rem' }}>System Specs</h4>
            <div className="stat-item">
              <span className="stat-label">Logic Core</span>
              <span className="stat-value">Deep Q-Learning</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Crime Data Sync</span>
              <span className="stat-value">Real-time CCTNS</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Treasury Bridge</span>
              <span className="stat-value">IFMS API v3</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Equity Score</span>
              <span className="stat-value">98.5%</span>
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

export default FundAllocationExpertAgent;
