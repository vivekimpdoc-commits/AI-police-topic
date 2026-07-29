import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity, FileSpreadsheet, Mic, Download, Loader2, Landmark, Compass, BrainCircuit
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'ledger', label: 'Planning Ledger', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'Strategic Terminal', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const predefinedResponses = {
  "simulate shift": {
    text: "Simulating macro budget shift: -10% from Admin to +10% Cyber Operations...",
    alert: "Strategic Impact: Shifting ₹12 Cr will increase Cyber Crime conviction rates by projected 14%, but degrade HQ maintenance SLA by 3 days. Proceed?"
  },
  "long term": {
    text: "Analyzing 5-year capital expenditure (CapEx) projections for new police lines...",
    success: "CapEx Plan Approved. Phased funding over 5 years reduces annual fiscal burden by 32% while maintaining construction milestones."
  },
  "generate blueprint": {
    text: "Compiling strategic objectives, risk matrices, and multi-year funding pipelines...",
    success: "Strategic Financial Blueprint generated. Ready for Home Ministry presentation."
  },
  "voice input": {
    text: "Voice Command Recognized. Analyzing fiscal deficit mitigation strategies...",
    alert: "Deficit Warning: Current procurement pipeline exceeds Q3 limits. Suggesting deferment of non-lethal weapon upgrades to Q1 of next fiscal year."
  },
  "default": {
    text: "I am the Financial Planning AI. I help formulate long-term fiscal strategies, balance multi-year capital expenditures, and align financial resources with departmental strategic goals. Type a prompt to begin planning."
  }
};

const FinancialPlanningAIAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Chat Demo State
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Strategic Planning Core Online. Connected to State Fiscal Policy DB and 5-Year Vision nodes.' }
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
      
      if (lowerText.includes("shift") || lowerText.includes("simulate")) {
        response = predefinedResponses["simulate shift"];
      } else if (lowerText.includes("long term") || lowerText.includes("capex")) {
        response = predefinedResponses["long term"];
      } else if (lowerText.includes("blueprint") || lowerText.includes("plan") || lowerText.includes("strategy")) {
        response = predefinedResponses["generate blueprint"];
      } else if (lowerText.includes("deficit") || lowerText.includes("voice")) {
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
      handleSendMessage("Voice input: Suggest mitigation strategies for Q3 fiscal deficit.");
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59, 130, 246, 0.4)', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59, 130, 246,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div style={{ width: '400px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '250px', height: '250px', border: '2px dashed rgba(59, 130, 246,0.3)', borderRadius: '50%' }} />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '200px', height: '200px', border: '2px solid rgba(59, 130, 246,0.1)', borderRadius: '50%' }} />
                <div style={{ width: '120px', height: '120px', background: 'rgba(15,23,42,0.9)', border: '2px solid #3b82f6', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(59, 130, 246,0.5)', zIndex: 2 }}>
                  <Landmark size={50} color="#3b82f6" />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', textShadow: '0 0 20px rgba(59, 130, 246,0.5)' }}>Financial Planning <span style={{ color: '#60a5fa' }}>AI</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
                  The Financial Planning AI serves as the strategic brain for long-term fiscal policy. Unlike short-term allocators, this agent focuses on multi-year Capital Expenditure (CapEx), debt mitigation, and aligning budget pipelines with 5-year state security goals.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(59, 130, 246,0.1)', borderLeft: '4px solid #3b82f6', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0' }}>Multi-Year CapEx</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Structures massive infrastructure projects across multiple fiscal years to avoid debt traps.</p>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#10b981', margin: '0 0 0.5rem 0' }}>Strategic Alignment</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Ensures funding mathematically aligns with the DGP's long-term vision directives.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(59, 130, 246,0.3)', paddingBottom: '1rem' }}>
              <h2 style={{ color: '#60a5fa', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity className="inline-icon" size={28} /> STRATEGIC PLANNING DASHBOARD
              </h2>
              <button onClick={handleGenerateReport} style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Download size={18} /> Export Blueprint
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59, 130, 246,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(59, 130, 246,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Compass size={20} color="#3b82f6" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>5-Year CapEx Target</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  ₹8,200 Cr <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> Aligned</span>
                </div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ height: '100%', background: 'linear-gradient(90deg, #3b82f6, #93c5fd)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(139,92,246,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><BrainCircuit size={20} color="#8b5cf6" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Strategic Alignment Score</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#c4b5fd', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  98.1% <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>Optimal</span>
                </div>
                <p style={{ color: '#a78bfa', fontSize: '0.85rem', marginTop: '0.5rem' }}>Budgets match DGP Vision 2030</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(239,68,68,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><ShieldAlert size={20} color="#ef4444" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Fiscal Risk Exposure</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  Medium <span style={{ fontSize: '1rem', color: '#ef4444', display: 'flex', alignItems: 'center' }}>Watch</span>
                </div>
                <p style={{ color: '#fca5a5', fontSize: '0.85rem', marginTop: '0.5rem' }}>Pension liabilities rising YoY.</p>
              </div>
            </div>

            <div className="panel" style={{ padding: '2rem', border: '1px solid rgba(59, 130, 246,0.3)' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={20} color="#3b82f6"/> Long-Term Strategy Pipeline
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Vision 2030: Cyber Grid Expansion</span>
                    <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>Phased Allocation: ₹250 Cr</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#3b82f6', boxShadow: '0 0 10px #3b82f6' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>Status: Year 2 of 5. Funding secured for next tranche.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Legacy Fleet Electric Phase-out</span>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Phased Allocation: ₹120 Cr</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#10b981' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>Status: Year 4 of 5. Yielding ₹12 Cr/yr in fuel savings.</p>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showReportModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ background: '#0f172a', border: '1px solid #3b82f6', borderRadius: '16px', padding: '2rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
                    <h3 style={{ color: '#60a5fa', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={24}/> Generating Strategic Blueprint</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 1 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 1 ? <CheckCircle2 size={18}/> : <Loader2 size={18} className="spin-anim" />}
                        <span>Aligning with State Fiscal Policy...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 2 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 2 ? <CheckCircle2 size={18}/> : reportStep === 1 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Structuring 5-Year CapEx Phasing...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 3 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 3 ? <CheckCircle2 size={18}/> : reportStep === 2 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Calculating Long-term Liability Risks...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 4 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 4 ? <CheckCircle2 size={18}/> : reportStep === 3 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Finalizing Master Plan PDF...</span>
                      </div>
                    </div>
                    
                    {reportStep >= 4 && (
                      <button onClick={() => setShowReportModal(false)} style={{ width: '100%', background: '#3b82f6', color: '#fff', border: 'none', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Download Blueprint (.PDF)
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ border: '1px solid rgba(59, 130, 246,0.3)' }}>
            <h2 style={{ color: '#60a5fa', marginBottom: '1.5rem', borderBottom: '1px solid rgba(59, 130, 246,0.3)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FileSpreadsheet className="inline-icon" size={28} /> MACRO PLANNING LEDGER
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Tracking long-term strategic shifts and their multi-year impacts.</p>
            
            <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                <thead>
                  <tr style={{ background: 'rgba(59, 130, 246,0.1)', textAlign: 'left', borderBottom: '1px solid rgba(59, 130, 246,0.3)' }}>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#93c5fd' }}>Strategic Shift</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#93c5fd' }}>Horizon</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#93c5fd' }}>Capital Required</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#93c5fd' }}>ROI / Impact</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#93c5fd' }}>AI Approval</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>State-wide Drone Network</td>
                    <td style={{ padding: '1rem' }}>3 Years</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#3b82f6' }}>₹85 Cr</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>-15% Riot Response Time</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> Cleared</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(239,68,68,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Bulk Ammunition Purchase</td>
                    <td style={{ padding: '1rem' }}>1 Year</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#3b82f6' }}>₹250 Cr</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Stockpile Buffer</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><AlertTriangle size={16}/> Deferred to Q3</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>New Police HQ Construction</td>
                    <td style={{ padding: '1rem' }}>5 Years</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#3b82f6' }}>₹400 Cr</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Centralized C2</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> Phased</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(59, 130, 246,0.3)' }}>
            {isListening && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 1.5s infinite' }}>
                  <Mic size={40} color="#60a5fa" />
                </div>
                <h3 style={{ color: '#60a5fa', fontWeight: 'normal' }}>Listening to Voice Command...</h3>
              </div>
            )}
            
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(59, 130, 246,0.3)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative' }}>
              
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(59, 130, 246,0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 10px #3b82f6' }}></div>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Planning AI - Strategic Terminal</h3>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ 
                      maxWidth: '80%', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '12px',
                      background: msg.sender === 'user' ? 'rgba(59, 130, 246,0.2)' : 'rgba(59, 130, 246,0.05)',
                      border: `1px solid ${msg.sender === 'user' ? 'rgba(59, 130, 246,0.4)' : 'rgba(59, 130, 246,0.3)'}`,
                      color: '#f8fafc',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '12px',
                      borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: msg.sender === 'user' ? '#93c5fd' : '#3b82f6', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {msg.sender === 'user' ? 'Policy Director' : <><Bot size={14}/> Planning AI</>}
                      </div>
                      <div style={{ lineHeight: '1.6' }}>
                        {msg.text.includes("Voice input:") ? (
                           <span><Mic size={14} style={{ marginRight: '5px', verticalAlign: 'middle', color: '#93c5fd' }}/> {msg.text.replace("Voice input: ", "")}</span>
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
                     <div style={{ padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(59, 130, 246,0.05)', border: '1px solid rgba(59, 130, 246,0.2)'}}>
                        <div className="typing-indicator" style={{ display: 'flex', gap: '0.4rem' }}>
                           <span style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.32s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.16s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both' }}></span>
                        </div>
                     </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                   <button onClick={() => handleSendMessage("Simulate macro shift: -10% Admin to Cyber Ops")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246,0.1)', border: '1px solid rgba(59, 130, 246,0.4)', borderRadius: '20px', color: '#93c5fd', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Simulate Shift
                   </button>
                   <button onClick={() => handleSendMessage("Analyze 5-year CapEx for new police lines")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246,0.1)', border: '1px solid rgba(59, 130, 246,0.4)', borderRadius: '20px', color: '#93c5fd', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Long-term CapEx
                   </button>
                   <button onClick={() => handleSendMessage("Generate Strategic Financial Blueprint")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246,0.1)', border: '1px solid rgba(59, 130, 246,0.4)', borderRadius: '20px', color: '#93c5fd', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Generate Blueprint
                   </button>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button onClick={handleVoiceCommand} style={{ background: 'rgba(59, 130, 246,0.2)', border: '1px solid rgba(59, 130, 246,0.4)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#3b82f6', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(59, 130, 246,0.4)'} onMouseOut={e=>e.currentTarget.style.background='rgba(59, 130, 246,0.2)'}>
                    <Mic size={20} />
                  </button>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Type a strategic planning command..." 
                    style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
                    onFocus={e => e.target.style.border = '1px solid rgba(59, 130, 246,0.5)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                  />
                  <button onClick={() => handleSendMessage(inputValue)} style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '12px', padding: '0 1.5rem', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold' }}>
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(59, 130, 246,0.3)' }}>
            <h2 style={{ color: '#60a5fa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Zap size={28}/> Core Planning Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(59, 130, 246,0.2)' }}>
                <BrainCircuit size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Vision Alignment</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ingests the State DGP's strategic goals and automatically checks if proposed department budgets functionally support those goals.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(59, 130, 246,0.2)' }}>
                <Landmark size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>CapEx Phasing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Breaks down massive infrastructure costs into absorbable multi-year tranches, preventing single-year budget paralysis.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(59, 130, 246,0.2)' }}>
                <Activity size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Trade-off Simulator</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Shows the operational butterfly effect of budget cuts. (e.g. "Cutting vehicle budget by 10% drops response time by 2 minutes").</p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(59, 130, 246,0.3)' }}>
            <h2 style={{ color: '#60a5fa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Target size={28}/> Macro Scenarios</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #3b82f6', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>1. Balancing Manpower vs Tech</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  A core planning dilemma is hiring more officers versus buying better surveillance tech. The AI models a 5-year timeline, showing that investing ₹50 Cr in a smart CCTV grid yields the same crime-deterrent effect as hiring 500 new officers, but saves ₹120 Cr in long-term pension liabilities.
                </p>
              </div>

              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #3b82f6', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>2. Grant Matching Strategies</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  The Central Government offers modernizations grants, but they require a 40% State match. The AI scans the state budget, identifies low-priority, slow-moving projects, and temporarily diverts their funds to secure the massive Central grant before the deadline expires.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(59, 130, 246,0.3)' }}>
            <h2 style={{ color: '#60a5fa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Database size={28}/> System Architecture</h2>
            <div style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(59, 130, 246,0.2)', textAlign: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                  
                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '8px' }}>
                      <FileText color="#10b981" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Policy Docs</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>RAG Vector DB</p>
                    </div>
                  </div>

                  <div style={{ color: '#3b82f6' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '250px' }}>
                    <div style={{ background: 'rgba(59, 130, 246,0.1)', border: '2px solid #3b82f6', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(59, 130, 246,0.2)' }}>
                      <BrainCircuit color="#3b82f6" size={40} style={{marginBottom:'1rem'}}/>
                      <h3 style={{color:'#fff', margin:0}}>Planning Core</h3>
                      <p style={{color:'#cbd5e1', fontSize:'0.85rem', marginTop:'0.5rem'}}>LLM + Solver</p>
                    </div>
                  </div>

                  <div style={{ color: '#3b82f6' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid #f59e0b', padding: '1.5rem', borderRadius: '8px' }}>
                      <Database color="#f59e0b" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Fiscal DB</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>Current Assets</p>
                    </div>
                  </div>

               </div>
               <p style={{ color: '#94a3b8', marginTop: '3rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                 The Planning Core uses a two-step process: First, a Retrieval-Augmented Generation (RAG) system ingests policy documents to understand constraints. Second, a deterministic solver crunches the numbers to ensure the math works over a 5-year horizon.
               </p>
            </div>
          </motion.div>
        );

      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(59, 130, 246,0.3)' }}>
            <h2 style={{ color: '#60a5fa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Cpu size={28}/> Technologies Used</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
               {['LangChain (Agents)', 'Pinecone (Vector DB)', 'OpenAI GPT-4o', 'Python Pulp (Solver)', 'PostgreSQL', 'FastAPI', 'React.js', 'AWS ECS'].map((tech, i) => (
                 <div key={i} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', transition: 'all 0.2s', cursor: 'default' }} onMouseOver={e=>e.currentTarget.style.borderColor='#3b82f6'} onMouseOut={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}>
                   <h4 style={{ color: '#e2e8f0', margin: 0 }}>{tech}</h4>
                 </div>
               ))}
            </div>
          </motion.div>
        );

      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(59, 130, 246,0.3)' }}>
            <h2 style={{ color: '#60a5fa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Terminal size={28}/> Technical Implementation</h2>
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#1e293b', padding: '0.8rem 1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginLeft: '1rem', fontFamily: 'monospace' }}>strategic_solver.py</span>
              </div>
              <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
                <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.9rem', fontFamily: "'Fira Code', monospace", lineHeight: '1.5' }}>
                  <code dangerouslySetInnerHTML={{__html: `
<span style="color: #c678dd">from</span> langchain.chains <span style="color: #c678dd">import</span> RetrievalQA
<span style="color: #c678dd">from</span> pulp <span style="color: #c678dd">import</span> LpProblem, LpMaximize, LpVariable, lpSum
<span style="color: #c678dd">import</span> vector_store

<span style="color: #c678dd">def</span> <span style="color: #61afef">evaluate_capex_plan</span>(projects, max_yearly_budget):
    <span style="color: #5c6370"># Setup MILP Solver for Capital Projects</span>
    prob = LpProblem(<span style="color: #98c379">"CapEx_Optimization"</span>, LpMaximize)
    
    <span style="color: #5c6370"># Variables: Should we fund project i in year t?</span>
    fund_vars = {(i, t): LpVariable(<span style="color: #98c379">f"fund_{i}_{t}"</span>, cat=<span style="color: #98c379">"Binary"</span>) 
                 <span style="color: #c678dd">for</span> i <span style="color: #c678dd">in</span> projects <span style="color: #c678dd">for</span> t <span style="color: #c678dd">in</span> <span style="color: #e5c07b">range</span>(<span style="color: #d19a66">5</span>)}
    
    <span style="color: #5c6370"># Objective: Maximize strategic alignment score</span>
    prob += lpSum([projects[i].strategic_score * fund_vars[i, t] 
                   <span style="color: #c678dd">for</span> i <span style="color: #c678dd">in</span> projects <span style="color: #c678dd">for</span> t <span style="color: #c678dd">in</span> <span style="color: #e5c07b">range</span>(<span style="color: #d19a66">5</span>)])
                   
    <span style="color: #5c6370"># Constraint: Yearly budget limits</span>
    <span style="color: #c678dd">for</span> t <span style="color: #c678dd">in</span> <span style="color: #e5c07b">range</span>(<span style="color: #d19a66">5</span>):
        prob += lpSum([projects[i].cost * fund_vars[i, t] <span style="color: #c678dd">for</span> i <span style="color: #c678dd">in</span> projects]) <= max_yearly_budget[t]
        
    prob.solve()
    <span style="color: #c678dd">return</span> extract_phasing(prob, projects)
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
        background: 'radial-gradient(circle at 50% 80%, rgba(59, 130, 246,0.05), transparent 40%)',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid rgba(59, 130, 246,0.2)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246,0.4)',
                color: '#60a5fa', padding: '0.8rem', borderRadius: '10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.color = '#fff'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)'; e.currentTarget.style.color = '#60a5fa'; }}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                FINANCIAL PLANNING <span style={{ color: '#3b82f6' }}>AI</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                <span style={{ background: 'rgba(59, 130, 246,0.2)', color: '#93c5fd', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(59, 130, 246,0.5)' }}>
                  STRATEGY CORE ACTIVE
                </span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}><Terminal size={12} style={{display:'inline', marginRight:'5px'}}/> Agent ID: FPA-770-S</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', marginBottom: '5px' }}>
              <div style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', boxShadow: '0 0 10px #3b82f6', animation: 'pulse 1.5s infinite' }}></div>
              <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>LONG TERM PLANNER</span>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>Multi-year Projections</p>
          </div>
        </div>

        <style>
          {`
            @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
            .glow-text-blue { text-shadow: 0 0 10px rgba(59, 130, 246,0.7); }
          `}
        </style>

        {/* Dynamic Nav Menu */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'rgba(59, 130, 246,0.2)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${activeTab === tab.id ? '#3b82f6' : 'rgba(255,255,255,0.1)'}`,
                color: activeTab === tab.id ? '#93c5fd' : '#94a3b8',
                padding: '0.8rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { if(activeTab !== tab.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(59, 130, 246,0.3)'; } }}
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

export default FinancialPlanningAIAgent;
