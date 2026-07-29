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
  { id: 'ledger', label: 'Operations Ledger', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'Interactive Terminal', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const FleetExpenseAIAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Fleet Expense System Online. Ready for operational queries.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (activeTab === 'demo') scrollToBottom();
  }, [messages, isTyping, activeTab]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'ai', text: `Processing "${text}"... Generating advanced insights and operational metrics based on real-time data integration.` }]);
      setIsTyping(false);
    }, 1500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Fleet Expense <span style={{ color: '#10b981' }}>AI</span></h2>
            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8' }}>
              The Fleet Expense AI is designed to automate and optimize workflows, providing real-time analytics, predictive modeling, and absolute transparency across administrative and financial protocols.
            </p>
          </motion.div>
        );
      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <h2 style={{ color: '#34d399', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Activity size={28} /> LIVE DASHBOARD
            </h2>
            <div style={{ padding: '2rem', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16, 185, 129,0.4)', borderRadius: '12px' }}>
              <p style={{ color: '#94a3b8' }}>Real-time metrics, anomaly detection, and automated compliance charts will be displayed here.</p>
            </div>
          </motion.div>
        );
      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <div style={{ background: 'rgba(15,23,42,0.9)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(16, 185, 129, 0.05)' }}>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Interactive Terminal</h3>
              </div>
              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ padding: '1rem 1.5rem', borderRadius: '12px', background: msg.sender === 'user' ? 'rgba(16, 185, 129,0.2)' : 'rgba(16, 185, 129,0.05)', border: `1px solid ${msg.sender === 'user' ? 'rgba(16, 185, 129,0.4)' : 'rgba(16, 185, 129,0.3)'}`, color: '#f8fafc' }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && <div style={{ color: '#10b981' }}>Agent is typing...</div>}
                <div ref={chatEndRef} />
              </div>
              <div style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)} placeholder="Type a command..." style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: '#fff', outline: 'none' }} />
                  <button onClick={() => handleSendMessage(inputValue)} style={{ background: '#10b981', color: '#000', border: 'none', borderRadius: '12px', padding: '0 1.5rem', cursor: 'pointer', fontWeight: 'bold' }}>
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="overview-panel">
            <h2 style={{ color: '#34d399' }}>{tabs.find(t => t.id === activeTab)?.label}</h2>
            <p style={{ color: '#94a3b8' }}>Advanced AI module components for {activeTab} will be integrated in the upcoming deployment phase.</p>
          </motion.div>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#020617', color: '#f8fafc', fontFamily: "'Inter', sans-serif", padding: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <button onClick={() => navigate(-1)} style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399', padding: '0.8rem', borderRadius: '10px', cursor: 'pointer' }}>
            <ArrowLeft size={20} />
          </button>
          <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
            FLEET EXPENSE <span style={{ color: '#10b981' }}>AI</span>
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ background: activeTab === tab.id ? 'rgba(16, 185, 129, 0.2)' : 'rgba(15,23,42,0.6)', border: `1px solid ${activeTab === tab.id ? '#10b981' : 'rgba(255,255,255,0.1)'}`, color: activeTab === tab.id ? '#34d399' : '#94a3b8', padding: '0.8rem 1.2rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
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

export default FleetExpenseAIAgent;
