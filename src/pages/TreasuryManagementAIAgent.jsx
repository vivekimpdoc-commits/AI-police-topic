import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity, FileSpreadsheet, Mic, Download, Loader2, Coins, Vault, Lock
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'ledger', label: 'Treasury Ledger', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'Vault Terminal', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const predefinedResponses = {
  "release funds": {
    text: "Initiating multi-signature validation for ₹12 Cr release to Central Armory...",
    alert: "Hold: Central Armory has not submitted Utilization Certificates (UC) for Q1. Funds frozen until compliance is met."
  },
  "audit": {
    text: "Scanning state-wide treasury drawdowns against approved vendor contracts...",
    success: "Audit Complete. Found 1 duplicate invoice attempt from Vendor ID #4492. Automatically blocked and flagged for investigation."
  },
  "liquidity": {
    text: "Calculating current liquidity across 42 district headquarters...",
    success: "Total Liquid Reserve: ₹450 Cr. Sufficient to cover current month's payroll and emergency operations without central drawdown."
  },
  "voice input": {
    text: "Voice Command Recognized. Checking status of emergency riot control fund...",
    alert: "Emergency Fund at 80% utilization. Recommending immediate transfer of ₹5 Cr from contingency reserve to maintain readiness."
  },
  "default": {
    text: "I am the Treasury Management AI. I act as the autonomous vault guard, ensuring all fund drawdowns are compliant, authorized, and backed by valid utilization certificates before releasing a single rupee. Type a command to proceed."
  }
};

const TreasuryManagementAIAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Chat Demo State
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Treasury Vault Online. Biometric and smart-contract verification active. Ready to process secure disbursements.' }
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
    
    const newMsg = { sender: 'user', text };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let response = predefinedResponses["default"];
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("release") || lowerText.includes("transfer")) {
        response = predefinedResponses["release funds"];
      } else if (lowerText.includes("audit") || lowerText.includes("scan")) {
        response = predefinedResponses["audit"];
      } else if (lowerText.includes("liquidity") || lowerText.includes("reserve")) {
        response = predefinedResponses["liquidity"];
      } else if (lowerText.includes("riot") || lowerText.includes("voice")) {
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
      handleSendMessage("Voice input: Check status of emergency riot control funds.");
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(20, 184, 166, 0.4)', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(20, 184, 166,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', textShadow: '0 0 20px rgba(20, 184, 166,0.5)' }}>Treasury Management <span style={{ color: '#14b8a6' }}>AI</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
                  The Treasury Management AI acts as an autonomous digital vault. It sits between the state treasury and the police department, ensuring that every rupee drawn is backed by smart contracts, valid utilization certificates (UC), and multi-signature authorization to prevent leakage and fraud.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(20, 184, 166,0.1)', borderLeft: '4px solid #14b8a6', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#2dd4bf', margin: '0 0 0.5rem 0' }}>Smart-Contract Disbursement</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Funds are locked in escrow and only released when vendors meet verifiable KPIs.</p>
                  </div>
                  <div style={{ background: 'rgba(239,68,68,0.1)', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#f87171', margin: '0 0 0.5rem 0' }}>Leakage Prevention</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Identifies duplicate invoices, unapproved vendors, and anomalies before payment processing.</p>
                  </div>
                </div>
              </div>
              <div style={{ width: '400px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '250px', height: '250px', border: '2px dashed rgba(20, 184, 166,0.3)', borderRadius: '50%' }} />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '200px', height: '200px', border: '2px solid rgba(20, 184, 166,0.1)', borderRadius: '50%' }} />
                <div style={{ width: '120px', height: '120px', background: 'rgba(15,23,42,0.9)', border: '2px solid #14b8a6', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(20, 184, 166,0.5)', zIndex: 2 }}>
                  <Vault size={50} color="#14b8a6" />
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(20, 184, 166, 0.3)', paddingBottom: '1rem' }}>
              <h2 style={{ color: '#2dd4bf', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity className="inline-icon" size={28} /> TREASURY COMMAND CENTER
              </h2>
              <button onClick={handleGenerateReport} style={{ background: '#14b8a6', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Download size={18} /> Export Audit Log
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(20, 184, 166,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(20, 184, 166,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Coins size={20} color="#14b8a6" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Current Liquidity</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  ₹450 Cr <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> Optimal</span>
                </div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ height: '100%', background: 'linear-gradient(90deg, #14b8a6, #2dd4bf)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(239,68,68,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><ShieldAlert size={20} color="#ef4444" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Frozen Funds (Missing UC)</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  ₹22 Cr <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>Blocked</span>
                </div>
                <p style={{ color: '#fca5a5', fontSize: '0.85rem', marginTop: '0.5rem' }}>Awaiting compliance from 3 districts.</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(59,130,246,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Lock size={20} color="#3b82f6" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Security Status</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#60a5fa', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  Secure <span style={{ fontSize: '1rem', color: '#3b82f6', display: 'flex', alignItems: 'center' }}>No breaches</span>
                </div>
                <p style={{ color: '#93c5fd', fontSize: '0.85rem', marginTop: '0.5rem' }}>Multi-sig enabled on all outgoing TXs.</p>
              </div>
            </div>

            <div className="panel" style={{ padding: '2rem', border: '1px solid rgba(20, 184, 166, 0.3)' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={20} color="#14b8a6"/> Pending Disbursals Queue
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Vendor Payment: TechMahindra (CCTNS)</span>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Approved: ₹5.2 Cr</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Validated against Master Contract SLA. Processing.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>District Allocation: North Zone HQ</span>
                    <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Blocked: ₹12 Cr</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#ef4444' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Previous quarter Utilization Certificate (UC) missing. Funds frozen.</p>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showReportModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ background: '#0f172a', border: '1px solid #14b8a6', borderRadius: '16px', padding: '2rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
                    <h3 style={{ color: '#2dd4bf', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={24}/> Generating Treasury Audit</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 1 ? '#14b8a6' : '#64748b' }}>
                        {reportStep >= 1 ? <CheckCircle2 size={18}/> : <Loader2 size={18} className="spin-anim" />}
                        <span>Verifying Smart Contract Executions...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 2 ? '#14b8a6' : '#64748b' }}>
                        {reportStep >= 2 ? <CheckCircle2 size={18}/> : reportStep === 1 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Cross-referencing Utilization Certificates...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 3 ? '#14b8a6' : '#64748b' }}>
                        {reportStep >= 3 ? <CheckCircle2 size={18}/> : reportStep === 2 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Scanning for Anomalous Vendor Payments...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 4 ? '#14b8a6' : '#64748b' }}>
                        {reportStep >= 4 ? <CheckCircle2 size={18}/> : reportStep === 3 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Compiling Audit PDF...</span>
                      </div>
                    </div>
                    
                    {reportStep >= 4 && (
                      <button onClick={() => setShowReportModal(false)} style={{ width: '100%', background: '#14b8a6', color: '#000', border: 'none', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Download Audit Report (.PDF)
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ border: '1px solid rgba(20, 184, 166, 0.3)' }}>
            <h2 style={{ color: '#2dd4bf', marginBottom: '1.5rem', borderBottom: '1px solid rgba(20, 184, 166,0.3)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FileSpreadsheet className="inline-icon" size={28} /> AI ESCROW LEDGER
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Real-time state of funds held in AI-managed smart contracts.</p>
            
            <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                <thead>
                  <tr style={{ background: 'rgba(20, 184, 166,0.1)', textAlign: 'left', borderBottom: '1px solid rgba(20, 184, 166,0.3)' }}>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#2dd4bf' }}>Transaction ID</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#2dd4bf' }}>Beneficiary</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#2dd4bf' }}>Amount</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#2dd4bf' }}>Condition</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#2dd4bf' }}>AI Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8', fontFamily: 'monospace' }}>TXN-9982-A</td>
                    <td style={{ padding: '1rem' }}>Cyber Cell Dept</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹2.5 Cr</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Hardware Delivery Proof</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}> Escrow (Pending)</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8', fontFamily: 'monospace' }}>TXN-9983-B</td>
                    <td style={{ padding: '1rem' }}>TATA Motors</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹14.0 Cr</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Vehicle RC Transfer</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> Released</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(239,68,68,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8', fontFamily: 'monospace' }}>TXN-9984-C</td>
                    <td style={{ padding: '1rem' }}>South District HQ</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹5.0 Cr</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Q2 Util. Certificate</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><AlertTriangle size={16}/> Frozen</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(20, 184, 166, 0.3)' }}>
            {isListening && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(20, 184, 166, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 1.5s infinite' }}>
                  <Mic size={40} color="#2dd4bf" />
                </div>
                <h3 style={{ color: '#2dd4bf', fontWeight: 'normal' }}>Listening to Voice Command...</h3>
              </div>
            )}
            
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(20, 184, 166, 0.3)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative' }}>
              
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(20, 184, 166, 0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#14b8a6', boxShadow: '0 0 10px #14b8a6' }}></div>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Treasury AI - Vault Terminal</h3>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ 
                      maxWidth: '80%', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '12px',
                      background: msg.sender === 'user' ? 'rgba(20, 184, 166,0.2)' : 'rgba(20, 184, 166,0.05)',
                      border: `1px solid ${msg.sender === 'user' ? 'rgba(20, 184, 166,0.4)' : 'rgba(20, 184, 166,0.3)'}`,
                      color: '#f8fafc',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '12px',
                      borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: msg.sender === 'user' ? '#5eead4' : '#14b8a6', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {msg.sender === 'user' ? 'Chief Finance Officer' : <><Bot size={14}/> Treasury AI</>}
                      </div>
                      <div style={{ lineHeight: '1.6' }}>
                        {msg.text.includes("Voice input:") ? (
                           <span><Mic size={14} style={{ marginRight: '5px', verticalAlign: 'middle', color: '#5eead4' }}/> {msg.text.replace("Voice input: ", "")}</span>
                        ) : msg.text}
                      </div>
                      
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
                     <div style={{ padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(20, 184, 166,0.05)', border: '1px solid rgba(20, 184, 166,0.2)'}}>
                        <div className="typing-indicator" style={{ display: 'flex', gap: '0.4rem' }}>
                           <span style={{ width: '8px', height: '8px', background: '#14b8a6', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.32s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#14b8a6', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.16s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#14b8a6', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both' }}></span>
                        </div>
                     </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                   <button onClick={() => handleSendMessage("Release ₹12 Cr to Central Armory")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(20, 184, 166,0.1)', border: '1px solid rgba(20, 184, 166,0.4)', borderRadius: '20px', color: '#5eead4', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Release Funds
                   </button>
                   <button onClick={() => handleSendMessage("Audit state-wide vendor contracts")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(20, 184, 166,0.1)', border: '1px solid rgba(20, 184, 166,0.4)', borderRadius: '20px', color: '#5eead4', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Run Audit
                   </button>
                   <button onClick={() => handleSendMessage("Calculate current liquidity")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(20, 184, 166,0.1)', border: '1px solid rgba(20, 184, 166,0.4)', borderRadius: '20px', color: '#5eead4', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Check Liquidity
                   </button>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button onClick={handleVoiceCommand} style={{ background: 'rgba(20, 184, 166,0.2)', border: '1px solid rgba(20, 184, 166,0.4)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#14b8a6', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(20, 184, 166,0.4)'} onMouseOut={e=>e.currentTarget.style.background='rgba(20, 184, 166,0.2)'}>
                    <Mic size={20} />
                  </button>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Type a treasury command..." 
                    style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
                    onFocus={e => e.target.style.border = '1px solid rgba(20, 184, 166,0.5)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                  />
                  <button onClick={() => handleSendMessage(inputValue)} style={{ background: '#14b8a6', color: '#000', border: 'none', borderRadius: '12px', padding: '0 1.5rem', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold' }}>
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(20, 184, 166, 0.3)' }}>
            <h2 style={{ color: '#2dd4bf', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Zap size={28}/> Vault Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(20, 184, 166,0.2)' }}>
                <Lock size={32} color="#14b8a6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Smart Contract Escrow</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Vendor payments are held in digital escrow. The AI releases funds only when integrated systems (like logistics) confirm delivery of goods.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(20, 184, 166,0.2)' }}>
                <FileText size={32} color="#14b8a6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Automated UC Enforcement</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Districts cannot draw new funds without submitting Utilization Certificates for previous tranches. The AI auto-freezes non-compliant accounts.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(20, 184, 166,0.2)' }}>
                <ShieldAlert size={32} color="#14b8a6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Fraud / Duplicate Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Scans millions of invoices using NLP to flag double-billing attempts, shell companies, or inflated pricing models.</p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(20, 184, 166, 0.3)' }}>
            <h2 style={{ color: '#2dd4bf', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Target size={28}/> Enforcement Scenarios</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #14b8a6', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>1. The Double-Billing Vendor</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  A vendor submits an invoice for 500 riot shields to District A, and identical paperwork a week later to District B. The AI's OCR catches the duplicate invoice number and halts payment, flagging the vendor for human audit and saving ₹12 Lakhs.
                </p>
              </div>

              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #14b8a6', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>2. Enforcing Central Guidelines</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  A local station tries to use funds earmarked for "Women's Safety" to purchase standard petrol for patrol vehicles. The AI reads the budget head rules, detects the mismatch in the purchase order, and rejects the drawdown, ensuring compliance with Central Ministry rules.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(20, 184, 166, 0.3)' }}>
            <h2 style={{ color: '#2dd4bf', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Database size={28}/> System Architecture</h2>
            <div style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(20, 184, 166,0.2)', textAlign: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                  
                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px' }}>
                      <FileText color="#ef4444" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Invoice / UC</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>OCR & Extraction</p>
                    </div>
                  </div>

                  <div style={{ color: '#14b8a6' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '250px' }}>
                    <div style={{ background: 'rgba(20, 184, 166,0.1)', border: '2px solid #14b8a6', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(20, 184, 166,0.2)' }}>
                      <Vault color="#14b8a6" size={40} style={{marginBottom:'1rem'}}/>
                      <h3 style={{color:'#fff', margin:0}}>Treasury Guard</h3>
                      <p style={{color:'#cbd5e1', fontSize:'0.85rem', marginTop:'0.5rem'}}>Smart Contract Engine</p>
                    </div>
                  </div>

                  <div style={{ color: '#14b8a6' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', padding: '1.5rem', borderRadius: '8px' }}>
                      <Database color="#3b82f6" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>State Treasury</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>Core Banking API</p>
                    </div>
                  </div>

               </div>
               <p style={{ color: '#94a3b8', marginTop: '3rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                 The Treasury Guard AI uses a blockchain-inspired smart contract engine. Invoices are scanned via OCR, rules are validated locally, and only if 100% compliant does the AI sign the payload to trigger the state's Core Banking API for actual disbursal.
               </p>
            </div>
          </motion.div>
        );

      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(20, 184, 166, 0.3)' }}>
            <h2 style={{ color: '#2dd4bf', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Cpu size={28}/> Technologies Used</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
               {['Hyperledger Fabric', 'AWS Textract (OCR)', 'Python (FastAPI)', 'Node.js', 'PostgreSQL', 'React.js', 'Framer Motion', 'Redis (Caching)'].map((tech, i) => (
                 <div key={i} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', transition: 'all 0.2s', cursor: 'default' }} onMouseOver={e=>e.currentTarget.style.borderColor='#14b8a6'} onMouseOut={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}>
                   <h4 style={{ color: '#e2e8f0', margin: 0 }}>{tech}</h4>
                 </div>
               ))}
            </div>
          </motion.div>
        );

      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(20, 184, 166, 0.3)' }}>
            <h2 style={{ color: '#2dd4bf', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Terminal size={28}/> Technical Implementation</h2>
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#1e293b', padding: '0.8rem 1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginLeft: '1rem', fontFamily: 'monospace' }}>treasury_guard.js</span>
              </div>
              <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
                <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.9rem', fontFamily: "'Fira Code', monospace", lineHeight: '1.5' }}>
                  <code dangerouslySetInnerHTML={{__html: `
<span style="color: #c678dd">async function</span> <span style="color: #61afef">processDisbursement</span>(request) {
  <span style="color: #5c6370">// 1. Check Utilization Certificate Compliance</span>
  <span style="color: #c678dd">const</span> isCompliant = <span style="color: #c678dd">await</span> checkUCStatus(request.districtId);
  <span style="color: #c678dd">if</span> (!isCompliant) {
    <span style="color: #c678dd">return</span> { <span style="color: #98c379">status</span>: <span style="color: #98c379">'FROZEN'</span>, <span style="color: #98c379">reason</span>: <span style="color: #98c379">'Missing previous Q UC'</span> };
  }

  <span style="color: #5c6370">// 2. AI OCR Fraud Check on Invoice</span>
  <span style="color: #c678dd">const</span> fraudScore = <span style="color: #c678dd">await</span> aiInvoiceScanner.analyze(request.invoice);
  <span style="color: #c678dd">if</span> (fraudScore > <span style="color: #d19a66">0.8</span>) {
    flagForAudit(request);
    <span style="color: #c678dd">return</span> { <span style="color: #98c379">status</span>: <span style="color: #98c379">'REJECTED'</span>, <span style="color: #98c379">reason</span>: <span style="color: #98c379">'High probability of duplicate/fraud'</span> };
  }

  <span style="color: #5c6370">// 3. Escrow Smart Contract Execution</span>
  <span style="color: #c678dd">const</span> txHash = <span style="color: #c678dd">await</span> smartContract.executePayment({
    <span style="color: #98c379">vendorId</span>: request.vendorId,
    <span style="color: #98c379">amount</span>: request.amount,
    <span style="color: #98c379">signatures</span>: [DGP_KEY, FINANCE_SEC_KEY, AI_ORACLE_KEY]
  });

  <span style="color: #c678dd">return</span> { <span style="color: #98c379">status</span>: <span style="color: #98c379">'RELEASED'</span>, <span style="color: #98c379">tx</span>: txHash };
}
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
    <div style={{
      minHeight: '100vh',
      background: '#020617',
      color: '#f8fafc',
      fontFamily: "'Inter', sans-serif",
      padding: '2rem'
    }}>
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at 50% 80%, rgba(20, 184, 166,0.05), transparent 40%)',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid rgba(20, 184, 166,0.2)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(20, 184, 166,0.4)',
                color: '#2dd4bf', padding: '0.8rem', borderRadius: '10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#14b8a6'; e.currentTarget.style.color = '#000'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)'; e.currentTarget.style.color = '#2dd4bf'; }}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                TREASURY MANAGEMENT <span style={{ color: '#14b8a6' }}>AI</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                <span style={{ background: 'rgba(20, 184, 166,0.2)', color: '#5eead4', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(20, 184, 166,0.5)' }}>
                  VAULT PROTOCOL ACTIVE
                </span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}><Terminal size={12} style={{display:'inline', marginRight:'5px'}}/> Agent ID: TMA-001-V</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', marginBottom: '5px' }}>
              <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 1.5s infinite' }}></div>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>FUNDS SECURE</span>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>Multi-Sig Required</p>
          </div>
        </div>

        <style>
          {`
            @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
          `}
        </style>

        {/* Dynamic Nav Menu */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'rgba(20, 184, 166,0.2)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${activeTab === tab.id ? '#14b8a6' : 'rgba(255,255,255,0.1)'}`,
                color: activeTab === tab.id ? '#5eead4' : '#94a3b8',
                padding: '0.8rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { if(activeTab !== tab.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(20, 184, 166,0.3)'; } }}
              onMouseOut={(e) => { if(activeTab !== tab.id) { e.currentTarget.style.background = 'rgba(15,23,42,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; } }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default TreasuryManagementAIAgent;
