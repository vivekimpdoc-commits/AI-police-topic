import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity, FileSpreadsheet, Mic, Download, Loader2, LineChart, BarChart3, Binary
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'ledger', label: 'Forecast Ledger', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'Predictive Terminal', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const predefinedResponses = {
  "inflation": {
    text: "Applying 6.5% regional inflation adjustment to POL (Fuel) and Maintenance vectors...",
    alert: "Forecast Deficit: Without a ₹14.5 Cr budget increase in Q3, patrol fleet operations will degrade by 12% due to rising fuel costs."
  },
  "predict fuel": {
    text: "Analyzing historical fuel burn rates and projected VIP movement for next quarter...",
    success: "Q4 Fuel Projection: ₹32.4 Cr required. Suggesting early bulk procurement via PSU oil companies to save ₹2.1 Cr."
  },
  "generate bpe": {
    text: "Simulating 10,000 budget allocation scenarios using Monte Carlo methods...",
    success: "Budget Projection Estimate (BPE) generated. Predicted accuracy: 94.2% based on historical backtesting."
  },
  "voice input": {
    text: "Voice Command Recognized. Forecasting impact of upcoming State Assembly Elections...",
    alert: "Election Overdrive: Projecting an additional ₹45 Cr requirement for CAPF accommodation, transport, and temporary communications. Recommending immediate supplementary demand."
  },
  "default": {
    text: "I am the Budget Forecast AI. I use predictive modeling, historical burn rates, and macroeconomic indicators (like inflation) to forecast exact financial requirements for the next fiscal year. Click a prompt to run a simulation."
  }
};

const BudgetForecastAIAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Chat Demo State
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Predictive Engine Online. Ingesting historical budget data (2018-2023) and live macroeconomic indicators. Ready to simulate.' }
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
      
      if (lowerText.includes("inflation") || lowerText.includes("cost")) {
        response = predefinedResponses["inflation"];
      } else if (lowerText.includes("fuel") || lowerText.includes("predict")) {
        response = predefinedResponses["predict fuel"];
      } else if (lowerText.includes("bpe") || lowerText.includes("report") || lowerText.includes("estimate")) {
        response = predefinedResponses["generate bpe"];
      } else if (lowerText.includes("election") || lowerText.includes("voice")) {
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
      handleSendMessage("Voice input: Forecast budget impact of upcoming state assembly elections.");
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16, 185, 129,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', textShadow: '0 0 20px rgba(16, 185, 129,0.5)' }}>Budget Forecast <span style={{ color: '#10b981' }}>AI Agent</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
                  The Budget Forecast AI replaces manual spreadsheet guesswork with advanced predictive modeling. It analyzes historical spending patterns, factors in real-world macroeconomic variables like inflation, and simulates future operational costs to generate highly accurate financial projections.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(16, 185, 129,0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#34d399', margin: '0 0 0.5rem 0' }}>Predictive Accuracy</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Maintains a 94%+ accuracy rate compared to traditional flat-rate bumps.</p>
                  </div>
                  <div style={{ background: 'rgba(59, 130, 246,0.1)', borderLeft: '4px solid #3b82f6', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#60a5fa', margin: '0 0 0.5rem 0' }}>Macro-Economic Integration</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Automatically adjusts forecasts based on live fuel prices and inflation data.</p>
                  </div>
                </div>
              </div>
              <div style={{ width: '400px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '250px', height: '250px', border: '2px dashed rgba(16, 185, 129,0.3)', borderRadius: '50%' }} />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '200px', height: '200px', border: '2px solid rgba(16, 185, 129,0.1)', borderRadius: '50%' }} />
                <div style={{ width: '120px', height: '120px', background: 'rgba(15,23,42,0.9)', border: '2px solid #10b981', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(16, 185, 129,0.5)', zIndex: 2 }}>
                  <LineChart size={50} color="#10b981" />
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(16, 185, 129, 0.3)', paddingBottom: '1rem' }}>
              <h2 style={{ color: '#34d399', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity className="inline-icon" size={28} /> PREDICTIVE FORECAST DASHBOARD
              </h2>
              <button onClick={handleGenerateReport} style={{ background: '#10b981', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Download size={18} /> Export BPE Report
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16, 185, 129,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(16, 185, 129,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><PieChart size={20} color="#10b981" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Projected Requirement (FY24)</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  ₹1,450 Cr <span style={{ fontSize: '1rem', color: '#ef4444', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> +8.5%</span>
                </div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ height: '100%', background: 'linear-gradient(90deg, #10b981, #ef4444)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(245, 158, 11,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><AlertTriangle size={20} color="#f59e0b" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Inflation Impact</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  ₹42 Cr <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>Deficit Risk</span>
                </div>
                <p style={{ color: '#fcd34d', fontSize: '0.85rem', marginTop: '0.5rem' }}>Driven by rising fuel prices.</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(59,130,246,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Binary size={20} color="#3b82f6" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Simulation Confidence</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#60a5fa', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  94.2% <span style={{ fontSize: '1rem', color: '#3b82f6', display: 'flex', alignItems: 'center' }}>High</span>
                </div>
                <p style={{ color: '#93c5fd', fontSize: '0.85rem', marginTop: '0.5rem' }}>Based on 10,000 Monte Carlo runs.</p>
              </div>
            </div>

            <div className="panel" style={{ padding: '2rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={20} color="#10b981"/> Key Budget Anomalies Forecasted
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Cyber Crime & IT Infrastructure</span>
                    <span style={{ color: '#ef4444', fontWeight: 'bold' }}>Projected +22% Demand</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#ef4444', boxShadow: '0 0 10px #ef4444' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Recommends doubling the software licensing budget due to rising ransomware trends.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Standard Vehicle Fleet Maintenance</span>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Projected -12% Demand</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '35%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#10b981' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Fleet modernization completed last year. Routine maintenance costs will drop.</p>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showReportModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ background: '#0f172a', border: '1px solid #10b981', borderRadius: '16px', padding: '2rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
                    <h3 style={{ color: '#34d399', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={24}/> Generating Forecast BPE</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 1 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 1 ? <CheckCircle2 size={18}/> : <Loader2 size={18} className="spin-anim" />}
                        <span>Pulling 5-Year Historical Burn Rates...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 2 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 2 ? <CheckCircle2 size={18}/> : reportStep === 1 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Applying Inflation & CPI Modifiers...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 3 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 3 ? <CheckCircle2 size={18}/> : reportStep === 2 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Running Monte Carlo Simulations...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 4 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 4 ? <CheckCircle2 size={18}/> : reportStep === 3 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Compiling Final Estimate PDF...</span>
                      </div>
                    </div>
                    
                    {reportStep >= 4 && (
                      <button onClick={() => setShowReportModal(false)} style={{ width: '100%', background: '#10b981', color: '#000', border: 'none', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <h2 style={{ color: '#34d399', marginBottom: '1.5rem', borderBottom: '1px solid rgba(16, 185, 129,0.3)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FileSpreadsheet className="inline-icon" size={28} /> AI FORECAST LEDGER
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Detailed breakdown of forecasted versus historical allocations.</p>
            
            <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                <thead>
                  <tr style={{ background: 'rgba(16, 185, 129,0.1)', textAlign: 'left', borderBottom: '1px solid rgba(16, 185, 129,0.3)' }}>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#34d399' }}>Budget Head</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#34d399' }}>FY23 Actuals</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#34d399' }}>FY24 Forecast</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#34d399' }}>Variance</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#34d399' }}>AI Factor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>POL (Fuel)</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace' }}>₹125 Cr</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#ef4444' }}>₹142 Cr</td>
                    <td style={{ padding: '1rem', color: '#ef4444' }}>+13.6%</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Global Oil Price Hike</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Cyber Training</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace' }}>₹15 Cr</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#10b981' }}>₹25 Cr</td>
                    <td style={{ padding: '1rem', color: '#10b981' }}>+66.6%</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>CCTNS Digitization Push</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Uniform & Kit</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace' }}>₹45 Cr</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹46 Cr</td>
                    <td style={{ padding: '1rem' }}>+2.2%</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}>Standard Inflation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            {isListening && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 1.5s infinite' }}>
                  <Mic size={40} color="#34d399" />
                </div>
                <h3 style={{ color: '#34d399', fontWeight: 'normal' }}>Listening to Voice Command...</h3>
              </div>
            )}
            
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative' }}>
              
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(16, 185, 129, 0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Forecast Engine - Interactive Terminal</h3>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ 
                      maxWidth: '80%', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '12px',
                      background: msg.sender === 'user' ? 'rgba(16, 185, 129,0.2)' : 'rgba(16, 185, 129,0.05)',
                      border: `1px solid ${msg.sender === 'user' ? 'rgba(16, 185, 129,0.4)' : 'rgba(16, 185, 129,0.3)'}`,
                      color: '#f8fafc',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '12px',
                      borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: msg.sender === 'user' ? '#6ee7b7' : '#10b981', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {msg.sender === 'user' ? 'Finance Secretary' : <><Bot size={14}/> Forecast AI</>}
                      </div>
                      <div style={{ lineHeight: '1.6' }}>
                        {msg.text.includes("Voice input:") ? (
                           <span><Mic size={14} style={{ marginRight: '5px', verticalAlign: 'middle', color: '#6ee7b7' }}/> {msg.text.replace("Voice input: ", "")}</span>
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
                     <div style={{ padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(16, 185, 129,0.05)', border: '1px solid rgba(16, 185, 129,0.2)'}}>
                        <div className="typing-indicator" style={{ display: 'flex', gap: '0.4rem' }}>
                           <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.32s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.16s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both' }}></span>
                        </div>
                     </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                   <button onClick={() => handleSendMessage("Apply 6.5% regional inflation adjustment")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129,0.1)', border: '1px solid rgba(16, 185, 129,0.4)', borderRadius: '20px', color: '#6ee7b7', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Inflation Impact
                   </button>
                   <button onClick={() => handleSendMessage("Predict fuel requirements for next quarter")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129,0.1)', border: '1px solid rgba(16, 185, 129,0.4)', borderRadius: '20px', color: '#6ee7b7', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Predict Fuel
                   </button>
                   <button onClick={() => handleSendMessage("Generate BPE Simulation")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129,0.1)', border: '1px solid rgba(16, 185, 129,0.4)', borderRadius: '20px', color: '#6ee7b7', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Generate BPE
                   </button>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button onClick={handleVoiceCommand} style={{ background: 'rgba(16, 185, 129,0.2)', border: '1px solid rgba(16, 185, 129,0.4)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#10b981', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(16, 185, 129,0.4)'} onMouseOut={e=>e.currentTarget.style.background='rgba(16, 185, 129,0.2)'}>
                    <Mic size={20} />
                  </button>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Type a variable to forecast..." 
                    style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
                    onFocus={e => e.target.style.border = '1px solid rgba(16, 185, 129,0.5)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                  />
                  <button onClick={() => handleSendMessage(inputValue)} style={{ background: '#10b981', color: '#000', border: 'none', borderRadius: '12px', padding: '0 1.5rem', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold' }}>
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <h2 style={{ color: '#34d399', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Zap size={28}/> Predictive Capabilities</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129,0.2)' }}>
                <LineChart size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Time-Series Projection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Utilizes LSTM neural networks on 10 years of historical treasury data to identify hidden seasonal spending spikes.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129,0.2)' }}>
                <Network size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Macro Indicators</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Hooks into national APIs for fuel indices, wholesale price index (WPI), and real estate values to adjust operational cost forecasts.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129,0.2)' }}>
                <Binary size={32} color="#10b981" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Monte Carlo Simulations</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Runs thousands of 'What-If' scenarios (e.g. natural disasters, sudden elections) to generate probabilistic budget buffers.</p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <h2 style={{ color: '#34d399', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Target size={28}/> Simulation Scenarios</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #10b981', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>1. The Election Year Deficit</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  During an election year, the mobilization of forces causes massive spikes in travel, lodging, and temporary infrastructure costs. The AI analyzes the past 3 election cycles to inject a precise buffer requirement into the annual budget demand, preventing mid-year cash exhaustion.
                </p>
              </div>

              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #10b981', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>2. Inflationary Fleet Degradation</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  If diesel prices rise by 12% globally, a flat budget means 12% fewer patrols. The AI ingests global oil futures to predict this degradation 6 months in advance, prompting the finance department to either request supplementary funds or shift to electric vehicle procurement strategies.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <h2 style={{ color: '#34d399', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Database size={28}/> System Architecture</h2>
            <div style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129,0.2)', textAlign: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                  
                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(245, 158, 11,0.1)', border: '1px solid #f59e0b', padding: '1.5rem', borderRadius: '8px' }}>
                      <Database color="#f59e0b" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Historical Ledger</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>10 Yrs Data</p>
                    </div>
                  </div>

                  <div style={{ color: '#10b981' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '250px' }}>
                    <div style={{ background: 'rgba(16, 185, 129,0.1)', border: '2px solid #10b981', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(16, 185, 129,0.2)' }}>
                      <Cpu color="#10b981" size={40} style={{marginBottom:'1rem'}}/>
                      <h3 style={{color:'#fff', margin:0}}>Forecast Engine</h3>
                      <p style={{color:'#cbd5e1', fontSize:'0.85rem', marginTop:'0.5rem'}}>LSTM + Monte Carlo</p>
                    </div>
                  </div>

                  <div style={{ color: '#10b981' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', padding: '1.5rem', borderRadius: '8px' }}>
                      <Globe color="#3b82f6" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Macro APIs</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>Inflation/CPI Live</p>
                    </div>
                  </div>

               </div>
               <p style={{ color: '#94a3b8', marginTop: '3rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                 The Forecast Engine operates offline for security but receives one-way datastreams from global economic APIs. It fuses these external variables with internal historical data to generate bounded probability forecasts.
               </p>
            </div>
          </motion.div>
        );

      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <h2 style={{ color: '#34d399', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Cpu size={28}/> Technologies Used</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
               {['Python (Pandas/NumPy)', 'TensorFlow (LSTM)', 'Prophet (Time Series)', 'Snowflake (Data WH)', 'FastAPI', 'React.js', 'Framer Motion', 'Redis'].map((tech, i) => (
                 <div key={i} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', transition: 'all 0.2s', cursor: 'default' }} onMouseOver={e=>e.currentTarget.style.borderColor='#10b981'} onMouseOut={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}>
                   <h4 style={{ color: '#e2e8f0', margin: 0 }}>{tech}</h4>
                 </div>
               ))}
            </div>
          </motion.div>
        );

      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <h2 style={{ color: '#34d399', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Terminal size={28}/> Technical Implementation</h2>
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#1e293b', padding: '0.8rem 1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginLeft: '1rem', fontFamily: 'monospace' }}>forecaster_lstm.py</span>
              </div>
              <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
                <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.9rem', fontFamily: "'Fira Code', monospace", lineHeight: '1.5' }}>
                  <code dangerouslySetInnerHTML={{__html: `
<span style="color: #c678dd">import</span> tensorflow <span style="color: #c678dd">as</span> tf
<span style="color: #c678dd">import</span> pandas <span style="color: #c678dd">as</span> pd
<span style="color: #c678dd">import</span> numpy <span style="color: #c678dd">as</span> np

<span style="color: #c678dd">class</span> <span style="color: #e5c07b">BudgetLSTMModel</span>:
    <span style="color: #c678dd">def</span> <span style="color: #61afef">__init__</span>(self):
        self.model = tf.keras.models.load_model(<span style="color: #98c379">'lstm_budget_v2.h5'</span>)
        
    <span style="color: #c678dd">def</span> <span style="color: #61afef">predict_next_fy</span>(self, historical_data, macro_vars):
        <span style="color: #5c6370"># Combine internal spend history with external variables</span>
        fused_tensor = self.fuse_data(historical_data, macro_vars)
        
        <span style="color: #5c6370"># Generate 12-month projection</span>
        predictions = self.model.predict(fused_tensor)
        
        <span style="color: #5c6370"># Apply Monte Carlo variance bounds (10k iterations)</span>
        bounds = apply_monte_carlo_noise(predictions, iter=<span style="color: #d19a66">10000</span>)
        
        <span style="color: #c678dd">return</span> {
            <span style="color: #98c379">"baseline_estimate"</span>: np.mean(predictions),
            <span style="color: #98c379">"upper_bound_95"</span>: bounds[<span style="color: #98c379">'p95'</span>],
            <span style="color: #98c379">"risk_factors"</span>: extract_highest_variance_nodes(bounds)
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
        background: 'radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.05), transparent 40%)',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#34d399', padding: '0.8rem', borderRadius: '10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.color = '#000'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)'; e.currentTarget.style.color = '#34d399'; }}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                BUDGET FORECAST <span style={{ color: '#10b981' }}>AI</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(16, 185, 129, 0.5)' }}>
                  PREDICTIVE ENGINE ACTIVE
                </span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}><Terminal size={12} style={{display:'inline', marginRight:'5px'}}/> Agent ID: BFC-404-M</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', marginBottom: '5px' }}>
              <div style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', boxShadow: '0 0 10px #3b82f6', animation: 'pulse 1.5s infinite' }}></div>
              <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>SIMULATING</span>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>LSTM Macro Analysis</p>
          </div>
        </div>

        <style>
          {`
            @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
            .glow-text-emerald { text-shadow: 0 0 10px rgba(16, 185, 129,0.7); }
            .custom-scroll-emerald::-webkit-scrollbar { width: 8px; height: 8px; }
            .custom-scroll-emerald::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.6); borderRadius: 4px; }
            .custom-scroll-emerald::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.4); borderRadius: 4px; }
            .custom-scroll-emerald::-webkit-scrollbar-thumb:hover { background: rgba(16, 185, 129, 0.7); }
          `}
        </style>

        {/* Dynamic Nav Menu */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'rgba(16, 185, 129, 0.2)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${activeTab === tab.id ? '#10b981' : 'rgba(255,255,255,0.1)'}`,
                color: activeTab === tab.id ? '#34d399' : '#94a3b8',
                padding: '0.8rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { if(activeTab !== tab.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)'; } }}
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

export default BudgetForecastAIAgent;
