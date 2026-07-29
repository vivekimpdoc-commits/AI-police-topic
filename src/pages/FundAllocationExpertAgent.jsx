import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity, FileSpreadsheet, Mic, Download, Loader2, Compass, Layers, Globe
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'ledger', label: 'Allocation Ledger', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'AI Simulations', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const predefinedResponses = {
  "crime rate": {
    text: "Analyzing recent crime wave in Zone 4 (Armed Robberies)...",
    alert: "Dynamic Allocation Active: Shifting ₹1.2 Cr from 'General Maintenance' to 'Rapid Response Fuel & Arms' for Zone 4 effective immediately."
  },
  "population": {
    text: "Correlating latest census data with current station capacities...",
    success: "New Urban District (Pop: 1.2M) identified as under-funded by 34%. Proposing ₹4.5 Cr budget adjustment for Q3."
  },
  "generate fajr": {
    text: "Compiling multi-variable threat indices, crime rates, and demographic shifts.",
    success: "Fund Allocation Justification Report (FAJR) generated and cryptographically signed."
  },
  "voice input": {
    text: "Voice Command Recognized. Processing emergency disaster fund allocation...",
    alert: "Flood Response Activated: Diverting ₹5.5 Cr from 'Stationery & Admin' directly to 'Emergency Logistics & Rescue' in Coastal Districts."
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
    { sender: 'ai', text: 'Fund Allocation Engine Online. Hooked into State Crime Records Bureau (SCRB) and Census APIs. Awaiting allocation parameters.' }
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
      
      if (lowerText.includes("crime") || lowerText.includes("wave")) {
        response = predefinedResponses["crime rate"];
      } else if (lowerText.includes("population") || lowerText.includes("demographic")) {
        response = predefinedResponses["population"];
      } else if (lowerText.includes("fajr") || lowerText.includes("report") || lowerText.includes("justification")) {
        response = predefinedResponses["generate fajr"];
      } else if (lowerText.includes("flood") || lowerText.includes("voice") || lowerText.includes("emergency")) {
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
      handleSendMessage("Voice input: Allocate emergency disaster funds for coastal districts.");
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div style={{ width: '400px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '250px', height: '250px', border: '2px dashed rgba(139,92,246,0.3)', borderRadius: '50%' }} />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '200px', height: '200px', border: '2px solid rgba(139,92,246,0.1)', borderRadius: '50%' }} />
                <div style={{ width: '120px', height: '120px', background: 'rgba(15,23,42,0.9)', border: '2px solid #8b5cf6', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(139,92,246,0.5)', zIndex: 2 }}>
                  <Compass size={50} color="#8b5cf6" />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', textShadow: '0 0 20px rgba(139,92,246,0.5)' }}>Fund Allocation <span style={{ color: '#a78bfa' }}>Expert AI</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
                  The Fund Allocation Expert AI completely transforms how state police budgets are distributed. Instead of politically motivated or static historical allocations, this AI uses real-time crime data, population metrics, and threat intelligence to dynamically dispatch funds exactly where they are needed most.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(139,92,246,0.1)', borderLeft: '4px solid #8b5cf6', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#c4b5fd', margin: '0 0 0.5rem 0' }}>Dynamic Re-routing</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Shifts funds mid-year based on sudden crime waves.</p>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#10b981', margin: '0 0 0.5rem 0' }}>Data-Backed Justification</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Every allocation comes with a cryptographically signed FAJR report.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139,92,246,0.3)', paddingBottom: '1rem' }}>
              <h2 style={{ color: '#a78bfa', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity className="inline-icon" size={28} /> DYNAMIC ALLOCATION DASHBOARD
              </h2>
              <button onClick={handleGenerateReport} style={{ background: '#8b5cf6', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Download size={18} /> Export FAJR Report
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(139,92,246,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Layers size={20} color="#8b5cf6" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Re-allocated (Q3)</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  ₹18.5 Cr <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> Dynamic</span>
                </div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #c4b5fd)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(239,68,68,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><ShieldAlert size={20} color="#ef4444" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Under-funded Zones</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  3 <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>Zones</span>
                </div>
                <p style={{ color: '#fca5a5', fontSize: '0.85rem', marginTop: '0.5rem' }}>Deficit: ₹4.2 Cr (Auto-adjusting)</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(16,185,129,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Globe size={20} color="#10b981" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Demographic Parity</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  94.2% <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}>Aligned</span>
                </div>
                <p style={{ color: '#6ee7b7', fontSize: '0.85rem', marginTop: '0.5rem' }}>Budget per capita optimized.</p>
              </div>
            </div>

            <div className="panel" style={{ padding: '2rem', border: '1px solid rgba(139,92,246,0.3)' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={20} color="#8b5cf6"/> AI Fund Re-Routing (Live)
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>West Zone (Crime Spike: +15%)</span>
                    <span style={{ color: '#ef4444', fontWeight: 'bold' }}>+ ₹2.5 Cr (Emergency Route)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#ef4444', boxShadow: '0 0 10px #ef4444' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Diverting funds from HQ unutilized capital to West Zone operational fund.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>South Zone (Population Growth: +8%)</span>
                    <span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>+ ₹1.2 Cr (Structural Route)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '55%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#8b5cf6' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Permanent budget baseline increased for next fiscal year.</p>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showReportModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ background: '#0f172a', border: '1px solid #8b5cf6', borderRadius: '16px', padding: '2rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
                    <h3 style={{ color: '#c4b5fd', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={24}/> Generating FAJR Report</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 1 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 1 ? <CheckCircle2 size={18}/> : <Loader2 size={18} className="spin-anim" />}
                        <span>Pulling CCTNS Crime Density Data...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 2 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 2 ? <CheckCircle2 size={18}/> : reportStep === 1 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Correlating with Demographic Shifts...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 3 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 3 ? <CheckCircle2 size={18}/> : reportStep === 2 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Calculating Parity Formulas...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 4 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 4 ? <CheckCircle2 size={18}/> : reportStep === 3 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Signing Final Justification PDF...</span>
                      </div>
                    </div>
                    
                    {reportStep >= 4 && (
                      <button onClick={() => setShowReportModal(false)} style={{ width: '100%', background: '#8b5cf6', color: '#fff', border: 'none', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Download Report (.PDF)
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ border: '1px solid rgba(139,92,246, 0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139,92,246,0.3)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FileSpreadsheet className="inline-icon" size={28} /> AI ALLOCATION LEDGER
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Dynamic fund shifts recorded immutably on the ledger.</p>
            
            <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                <thead>
                  <tr style={{ background: 'rgba(139,92,246,0.1)', textAlign: 'left', borderBottom: '1px solid rgba(139,92,246,0.3)' }}>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>Date</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>From Node</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>To Node</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>Amount</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#c4b5fd' }}>AI Justification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Oct 12, 2023</td>
                    <td style={{ padding: '1rem' }}>HQ Admin</td>
                    <td style={{ padding: '1rem' }}>Zone 4 (Armed)</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#10b981' }}>+ ₹1,20,00,000</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Crime Spike (+15%)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Oct 11, 2023</td>
                    <td style={{ padding: '1rem' }}>Central Pool</td>
                    <td style={{ padding: '1rem' }}>Coastal Dist.</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#10b981' }}>+ ₹5,50,00,000</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Flood Emergency</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Oct 10, 2023</td>
                    <td style={{ padding: '1rem' }}>Zone 2</td>
                    <td style={{ padding: '1rem' }}>Central Pool</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#ef4444' }}>- ₹45,00,000</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Underutilization Reclaim</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(139,92,246, 0.3)' }}>
            {isListening && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(139,92,246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 1.5s infinite' }}>
                  <Mic size={40} color="#a78bfa" />
                </div>
                <h3 style={{ color: '#a78bfa', fontWeight: 'normal' }}>Listening to Voice Command...</h3>
              </div>
            )}
            
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(139,92,246, 0.3)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative' }}>
              
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(139,92,246, 0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#8b5cf6', boxShadow: '0 0 10px #8b5cf6' }}></div>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Allocation Expert - Interactive Terminal</h3>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ 
                      maxWidth: '80%', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '12px',
                      background: msg.sender === 'user' ? 'rgba(139,92,246,0.2)' : 'rgba(139,92,246,0.05)',
                      border: `1px solid ${msg.sender === 'user' ? 'rgba(139,92,246,0.4)' : 'rgba(139,92,246,0.3)'}`,
                      color: '#f8fafc',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '12px',
                      borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: msg.sender === 'user' ? '#c4b5fd' : '#8b5cf6', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {msg.sender === 'user' ? 'Strategy Officer' : <><Bot size={14}/> Allocation AI</>}
                      </div>
                      <div style={{ lineHeight: '1.6' }}>
                        {msg.text.includes("Voice input:") ? (
                           <span><Mic size={14} style={{ marginRight: '5px', verticalAlign: 'middle', color: '#c4b5fd' }}/> {msg.text.replace("Voice input: ", "")}</span>
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

              <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                   <button onClick={() => handleSendMessage("Correlate crime rates in Zone 4 for budget shifts.")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '20px', color: '#c4b5fd', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Crime Rate Shift
                   </button>
                   <button onClick={() => handleSendMessage("Analyze population data for under-funded districts.")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '20px', color: '#c4b5fd', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Population Parity
                   </button>
                   <button onClick={() => handleSendMessage("Generate FAJR Report")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '20px', color: '#c4b5fd', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Generate FAJR
                   </button>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button onClick={handleVoiceCommand} style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#a78bfa', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(139,92,246,0.4)'} onMouseOut={e=>e.currentTarget.style.background='rgba(139,92,246,0.2)'}>
                    <Mic size={20} />
                  </button>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Type a command for the Allocation AI..." 
                    style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
                    onFocus={e => e.target.style.border = '1px solid rgba(139,92,246,0.5)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                  />
                  <button onClick={() => handleSendMessage(inputValue)} style={{ background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '12px', padding: '0 1.5rem', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold' }}>
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139,92,246, 0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Zap size={28}/> Core Allocation Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(139,92,246,0.2)' }}>
                <Globe size={32} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Demographic Scaling</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically adjusts district budgets based on rapid population influx, ensuring growing urban centers are never under-funded.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(139,92,246,0.2)' }}>
                <ShieldAlert size={32} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Crime-Linked Routing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hooks into CCTNS. If cybercrime spikes in a zone by 20%, the AI automatically routes additional funds to cyber-training heads in that specific zone.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(139,92,246,0.2)' }}>
                <FileText size={32} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>FAJR Generation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Produces Fund Allocation Justification Reports mathematically proving why one district received more funds than another, ensuring political neutrality.</p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139,92,246, 0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Target size={28}/> Real-World Parity</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #8b5cf6', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>1. The Urban Expansion Problem</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  Historically, police stations in rapidly growing tech hubs receive the same static budget increment as rural stations, leading to severe resource crunches. The AI dynamically links the allocation algorithm to municipal tax data and telecom population density, automatically correcting the budget baseline.
                </p>
              </div>

              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #8b5cf6', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>2. Emergency Re-allocation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  During a natural disaster, DDOs struggle with red tape to move funds. The AI operates an 'Emergency Route' protocol, temporarily freezing non-essential budgets (like office renovation) across the state to instantly inject liquidity into disaster response units.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139,92,246, 0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Database size={28}/> System Architecture</h2>
            <div style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(139,92,246,0.2)', textAlign: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                  
                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444', padding: '1.5rem', borderRadius: '8px' }}>
                      <Database color="#ef4444" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>CCTNS Data</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>Crime Density</p>
                    </div>
                  </div>

                  <div style={{ color: '#8b5cf6' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '250px' }}>
                    <div style={{ background: 'rgba(139,92,246,0.1)', border: '2px solid #8b5cf6', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(139,92,246,0.2)' }}>
                      <Cpu color="#8b5cf6" size={40} style={{marginBottom:'1rem'}}/>
                      <h3 style={{color:'#fff', margin:0}}>Allocation Engine</h3>
                      <p style={{color:'#cbd5e1', fontSize:'0.85rem', marginTop:'0.5rem'}}>Multi-variable Optimization</p>
                    </div>
                  </div>

                  <div style={{ color: '#8b5cf6' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '8px' }}>
                      <FileText color="#10b981" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Treasury API</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>Automated Dispatch</p>
                    </div>
                  </div>

               </div>
               <p style={{ color: '#94a3b8', marginTop: '3rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                 The Allocation Engine utilizes a weighted graph algorithm, ingesting real-time nodes from CCTNS and Census data to solve a multi-objective optimization problem, maximizing utility while maintaining baseline operational budgets.
               </p>
            </div>
          </motion.div>
        );

      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139,92,246, 0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Cpu size={28}/> Technologies Used</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
               {['Python Scipy (Optimization)', 'PyTorch (Forecasting)', 'Neo4j (Graph DB)', 'Kafka (Event Stream)', 'PostgreSQL', 'GraphQL API', 'React.js', 'Docker/K8s'].map((tech, i) => (
                 <div key={i} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', transition: 'all 0.2s', cursor: 'default' }} onMouseOver={e=>e.currentTarget.style.borderColor='#8b5cf6'} onMouseOut={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}>
                   <h4 style={{ color: '#e2e8f0', margin: 0 }}>{tech}</h4>
                 </div>
               ))}
            </div>
          </motion.div>
        );

      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139,92,246, 0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Terminal size={28}/> Technical Implementation</h2>
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#1e293b', padding: '0.8rem 1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginLeft: '1rem', fontFamily: 'monospace' }}>allocation_optimizer.py</span>
              </div>
              <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
                <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.9rem', fontFamily: "'Fira Code', monospace", lineHeight: '1.5' }}>
                  <code dangerouslySetInnerHTML={{__html: `
<span style="color: #c678dd">from</span> scipy.optimize <span style="color: #c678dd">import</span> linprog
<span style="color: #c678dd">import</span> numpy <span style="color: #c678dd">as</span> np

<span style="color: #c678dd">def</span> <span style="color: #61afef">optimize_distribution</span>(districts, total_budget):
    <span style="color: #5c6370"># Multi-variable objective function: Maximize utility based on crime & pop</span>
    weights = []
    bounds = []
    
    <span style="color: #c678dd">for</span> d <span style="color: #c678dd">in</span> districts:
        crime_weight = d.crime_index * <span style="color: #d19a66">0.6</span>
        pop_weight = d.population_density * <span style="color: #d19a66">0.4</span>
        weights.append(-(crime_weight + pop_weight))
        
        <span style="color: #5c6370"># Baseline operational bound vs Max capacity</span>
        bounds.append((d.baseline_budget, d.max_absorbable))

    A_eq = [np.ones(<span style="color: #e5c07b">len</span>(districts))]
    b_eq = [total_budget]

    res = linprog(weights, A_eq=A_eq, b_eq=b_eq, bounds=bounds, method=<span style="color: #98c379">'highs'</span>)
    
    <span style="color: #c678dd">return</span> res.x <span style="color: #5c6370"># Optimized allocation array</span>
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
        background: 'radial-gradient(circle at 50% 80%, rgba(139,92,246, 0.05), transparent 40%)',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid rgba(139,92,246, 0.2)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(139,92,246, 0.4)',
                color: '#a78bfa', padding: '0.8rem', borderRadius: '10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#8b5cf6'; e.currentTarget.style.color = '#fff'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)'; e.currentTarget.style.color = '#a78bfa'; }}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                FUND ALLOCATION <span style={{ color: '#a78bfa' }}>EXPERT</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                <span style={{ background: 'rgba(139,92,246, 0.2)', color: '#c4b5fd', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(139,92,246, 0.5)' }}>
                  NEURAL OPTIMIZER ACTIVE
                </span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}><Terminal size={12} style={{display:'inline', marginRight:'5px'}}/> Agent ID: FAE-1120-Z</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', marginBottom: '5px' }}>
              <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 1.5s infinite' }}></div>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>SYSTEM ONLINE</span>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>Mathematical Parity Matrix</p>
          </div>
        </div>

        <style>
          {`
            @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
            .glow-text-purple { text-shadow: 0 0 10px rgba(139,92,246,0.7); }
            .custom-scroll-purple::-webkit-scrollbar { width: 8px; height: 8px; }
            .custom-scroll-purple::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.6); borderRadius: 4px; }
            .custom-scroll-purple::-webkit-scrollbar-thumb { background: rgba(139,92,246, 0.4); borderRadius: 4px; }
            .custom-scroll-purple::-webkit-scrollbar-thumb:hover { background: rgba(139,92,246, 0.7); }
          `}
        </style>

        {/* Dynamic Nav Menu */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'rgba(139,92,246, 0.2)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${activeTab === tab.id ? '#8b5cf6' : 'rgba(255,255,255,0.1)'}`,
                color: activeTab === tab.id ? '#c4b5fd' : '#94a3b8',
                padding: '0.8rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { if(activeTab !== tab.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(139,92,246, 0.3)'; } }}
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

export default FundAllocationExpertAgent;
