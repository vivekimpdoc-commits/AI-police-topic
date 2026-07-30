import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity, FileSpreadsheet, Mic, Download, Loader2, Users, Star, UserX, ShieldCheck
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'ledger', label: 'Vendor Directory', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'Onboarding Bot', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const predefinedResponses = {
  "onboard vendor": {
    text: "Initiating digital KYC for Vendor: 'Himalayan Shield Corp'...",
    success: "KYC Complete. Corporate Identity (CIN), GSTIN, and Bank Mandate verified. Vendor assigned ID: V-9942. Added to 'Tier-2 Suppliers'."
  },
  "check rating": {
    text: "Fetching performance metrics for Vendor 'Rapid Auto Repairs'...",
    alert: "Warning: Rating is 2.4/5. Defect rate in last 3 deliveries exceeded 15%. Late delivery average: 4 days. Not recommended for critical contracts."
  },
  "blacklist": {
    text: "Cross-referencing vendor database with National Defaulters Registry...",
    success: "Found 1 match. Vendor 'Alpha Solutions' has been blacklisted by State Transport Dept. Freezing their procurement portal access instantly."
  },
  "voice input": {
    text: "Voice Command Recognized. Checking compliance renewals...",
    success: "3 Vendors have expiring ISO certifications this month. Automated warning emails have been dispatched."
  },
  "default": {
    text: "I am the Vendor Management AI. I handle automated onboarding (KYC), track performance metrics, flag underperforming contractors, and synchronize blacklists across departments. Type a prompt to begin."
  }
};

const VendorManagementAIAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Chat Demo State
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Vendor Orchestration Engine Online. National Registry Sync Complete. Ready to process contractors.' }
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
      
      if (lowerText.includes("onboard") || lowerText.includes("kyc")) {
        response = predefinedResponses["onboard vendor"];
      } else if (lowerText.includes("rating") || lowerText.includes("performance") || lowerText.includes("check")) {
        response = predefinedResponses["check rating"];
      } else if (lowerText.includes("blacklist") || lowerText.includes("defaulter")) {
        response = predefinedResponses["blacklist"];
      } else if (lowerText.includes("pending") || lowerText.includes("voice") || lowerText.includes("compliance")) {
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
      handleSendMessage("Voice input: Check compliance renewals.");
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(139, 92, 246, 0.4)', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139, 92, 246,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div style={{ width: '400px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '250px', height: '250px', border: '2px dashed rgba(139, 92, 246,0.3)', borderRadius: '50%' }} />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '200px', height: '200px', border: '2px solid rgba(139, 92, 246,0.1)', borderRadius: '50%' }} />
                <div style={{ width: '120px', height: '120px', background: 'rgba(15,23,42,0.9)', border: '2px solid #8b5cf6', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(139, 92, 246,0.5)', zIndex: 2 }}>
                  <Users size={50} color="#8b5cf6" />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', textShadow: '0 0 20px rgba(139, 92, 246,0.5)' }}>Vendor Management <span style={{ color: '#a78bfa' }}>AI</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
                  The Vendor Management AI automates the entire lifecycle of supplier interactions. From digital KYC and automated onboarding to real-time performance scoring (quality, delays) and cross-departmental blacklisting, it ensures the department only works with top-tier, compliant contractors.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(139, 92, 246,0.1)', borderLeft: '4px solid #8b5cf6', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#a78bfa', margin: '0 0 0.5rem 0' }}>Dynamic Rating</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Scores vendors out of 5 based on delivery time and defect rates.</p>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#10b981', margin: '0 0 0.5rem 0' }}>KYC Automation</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>API integration with MCA and GSTIN for instant verification.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139, 92, 246,0.3)', paddingBottom: '1rem' }}>
              <h2 style={{ color: '#a78bfa', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity className="inline-icon" size={28} /> VENDOR ECOSYSTEM DASHBOARD
              </h2>
              <button onClick={handleGenerateReport} style={{ background: '#8b5cf6', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Download size={18} /> Export Vendor Matrix
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(139, 92, 246,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(139, 92, 246,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Users size={20} color="#8b5cf6" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Active Vendors</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  1,245 <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> +12 this week</span>
                </div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' }} />
                </div>
                <p style={{ color: '#a78bfa', fontSize: '0.85rem', marginTop: '0.5rem' }}>85% Verified Tier-1</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(16,185,129,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Star size={20} color="#10b981" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Average KPI Score</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  4.2 <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>/ 5.0</span>
                </div>
                <p style={{ color: '#6ee7b7', fontSize: '0.85rem', marginTop: '0.5rem' }}>Based on Quality & Timeliness</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(239,68,68,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><UserX size={20} color="#ef4444" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Blacklisted</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  32 <span style={{ fontSize: '1rem', color: '#ef4444', display: 'flex', alignItems: 'center' }}>Contractors</span>
                </div>
                <p style={{ color: '#fca5a5', fontSize: '0.85rem', marginTop: '0.5rem' }}>Blocked from Bidding Portal</p>
              </div>
            </div>

            <div className="panel" style={{ padding: '2rem', border: '1px solid rgba(139, 92, 246,0.3)' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} color="#8b5cf6"/> Compliance Alerts
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Vendor V-819 (Garg Traders)</span>
                    <span style={{ color: '#ef4444', fontWeight: 'bold' }}>ISO Expiring in 2 Days</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#ef4444', boxShadow: '0 0 10px #ef4444' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Issued final warning email. Profile will be suspended automatically on Friday.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Vendor V-221 (Alpha Solutions)</span>
                    <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Performance Drop</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#f59e0b' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Defect rate increased to 12% on latest delivery. Rating downgraded from 4.1 to 3.2.</p>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showReportModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ background: '#0f172a', border: '1px solid #8b5cf6', borderRadius: '16px', padding: '2rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
                    <h3 style={{ color: '#a78bfa', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={24}/> Generating Vendor Matrix</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 1 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 1 ? <CheckCircle2 size={18}/> : <Loader2 size={18} className="spin-anim" />}
                        <span>Compiling vendor scoring history...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 2 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 2 ? <CheckCircle2 size={18}/> : reportStep === 1 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Cross-checking active compliance flags...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 3 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 3 ? <CheckCircle2 size={18}/> : reportStep === 2 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Applying clustering for Top-Tier identification...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 4 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 4 ? <CheckCircle2 size={18}/> : reportStep === 3 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Finalizing PDF Master Registry...</span>
                      </div>
                    </div>
                    
                    {reportStep >= 4 && (
                      <button onClick={() => setShowReportModal(false)} style={{ width: '100%', background: '#8b5cf6', color: '#fff', border: 'none', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Download Vendor Matrix (.PDF)
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ border: '1px solid rgba(139, 92, 246,0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139, 92, 246,0.3)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FileSpreadsheet className="inline-icon" size={28} /> VENDOR DIRECTORY
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Real-time listing of active contractors, their performance scores, and compliance status.</p>
            
            <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                <thead>
                  <tr style={{ background: 'rgba(139, 92, 246,0.1)', textAlign: 'left', borderBottom: '1px solid rgba(139, 92, 246,0.3)' }}>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#a78bfa' }}>Vendor ID</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#a78bfa' }}>Company Name</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#a78bfa' }}>Category</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#a78bfa' }}>AI Score (Out of 5)</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#a78bfa' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>V-4421</td>
                    <td style={{ padding: '1rem' }}>Sentinel Armor Inc.</td>
                    <td style={{ padding: '1rem', color: '#cbd5e1' }}>Tactical Gear</td>
                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>4.8 <Star size={14}/></span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> Preferred</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>V-2210</td>
                    <td style={{ padding: '1rem' }}>Rapid Auto Repairs</td>
                    <td style={{ padding: '1rem', color: '#cbd5e1' }}>Fleet Maintenance</td>
                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}><span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px' }}>2.4 <Star size={14}/></span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><AlertTriangle size={16}/> Probation</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>V-1099</td>
                    <td style={{ padding: '1rem' }}>Alpha Solutions</td>
                    <td style={{ padding: '1rem', color: '#cbd5e1' }}>IT Hardware</td>
                    <td style={{ padding: '1rem', fontSize: '0.9rem' }}><span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px' }}>1.2 <Star size={14}/></span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><UserX size={16}/> Blacklisted</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(139, 92, 246,0.3)' }}>
            {isListening && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 1.5s infinite' }}>
                  <Mic size={40} color="#a78bfa" />
                </div>
                <h3 style={{ color: '#a78bfa', fontWeight: 'normal' }}>Listening to Voice Command...</h3>
              </div>
            )}
            
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(139, 92, 246,0.3)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative' }}>
              
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(139, 92, 246,0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#8b5cf6', boxShadow: '0 0 10px #8b5cf6' }}></div>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Vendor Orchestrator Bot</h3>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ 
                      maxWidth: '80%', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '12px',
                      background: msg.sender === 'user' ? 'rgba(139, 92, 246,0.2)' : 'rgba(139, 92, 246,0.05)',
                      border: `1px solid ${msg.sender === 'user' ? 'rgba(139, 92, 246,0.4)' : 'rgba(139, 92, 246,0.3)'}`,
                      color: '#f8fafc',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '12px',
                      borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: msg.sender === 'user' ? '#a78bfa' : '#8b5cf6', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {msg.sender === 'user' ? 'Procurement Officer' : <><Bot size={14}/> Orchestrator AI</>}
                      </div>
                      <div style={{ lineHeight: '1.6' }}>
                        {msg.text.includes("Voice input:") ? (
                           <span><Mic size={14} style={{ marginRight: '5px', verticalAlign: 'middle', color: '#a78bfa' }}/> {msg.text.replace("Voice input: ", "")}</span>
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
                     <div style={{ padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(139, 92, 246,0.05)', border: '1px solid rgba(139, 92, 246,0.2)'}}>
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
                   <button onClick={() => handleSendMessage("Onboard vendor Himalayan Shield")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246,0.1)', border: '1px solid rgba(139, 92, 246,0.4)', borderRadius: '20px', color: '#a78bfa', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Run KYC (Onboard)
                   </button>
                   <button onClick={() => handleSendMessage("Check rating for Rapid Auto")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246,0.1)', border: '1px solid rgba(139, 92, 246,0.4)', borderRadius: '20px', color: '#a78bfa', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Check Performance
                   </button>
                   <button onClick={() => handleSendMessage("Cross-reference blacklist")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246,0.1)', border: '1px solid rgba(139, 92, 246,0.4)', borderRadius: '20px', color: '#a78bfa', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Scan Defaulters
                   </button>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button onClick={handleVoiceCommand} style={{ background: 'rgba(139, 92, 246,0.2)', border: '1px solid rgba(139, 92, 246,0.4)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#8b5cf6', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(139, 92, 246,0.4)'} onMouseOut={e=>e.currentTarget.style.background='rgba(139, 92, 246,0.2)'}>
                    <Mic size={20} />
                  </button>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Type a vendor query..." 
                    style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
                    onFocus={e => e.target.style.border = '1px solid rgba(139, 92, 246,0.5)'}
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139, 92, 246,0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Zap size={28}/> Vendor Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246,0.2)' }}>
                <ShieldCheck size={32} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Zero-Touch KYC</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Vendors upload their documents to a portal. The AI instantly queries the Ministry of Corporate Affairs and GST APIs to validate authenticity without human intervention.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246,0.2)' }}>
                <Star size={32} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Dynamic Scoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Every completed PO is fed back into the system. If a vendor is late, or goods fail Quality Control, their AI rating drops, affecting their chance to win future tenders.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246,0.2)' }}>
                <UserX size={32} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Syndicate Prevention</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Analyzes director names and IP addresses during registration to prevent blacklisted contractors from simply re-registering under a new shell company.</p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139, 92, 246,0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Target size={28}/> Vendor Scenarios</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #8b5cf6', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>1. Blocking Shell Companies</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  A 'new' vendor attempts to bid for a lucrative IT hardware contract. The AI scans their PAN and Director Details, finding that the director was previously blacklisted under a different company name for supplying counterfeit toners. The bid is automatically rejected.
                </p>
              </div>

              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #8b5cf6', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>2. Rewarding High Performers</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  A vendor consistently delivers riot-gear 5 days ahead of schedule with 0% defects over 2 years. The AI automatically elevates their status to 'Tier-1 Preferred', giving them a 5% weighted advantage in technical bid evaluations for future contracts.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139, 92, 246,0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Database size={28}/> System Architecture</h2>
            <div style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(139, 92, 246,0.2)', textAlign: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                  
                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', padding: '1.5rem', borderRadius: '8px' }}>
                      <Users color="#3b82f6" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Vendor Portal</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>Self-Service Upload</p>
                    </div>
                  </div>

                  <div style={{ color: '#8b5cf6' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '250px' }}>
                    <div style={{ background: 'rgba(139, 92, 246,0.1)', border: '2px solid #8b5cf6', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(139, 92, 246,0.2)' }}>
                      <Cpu color="#8b5cf6" size={40} style={{marginBottom:'1rem'}}/>
                      <h3 style={{color:'#fff', margin:0}}>Management AI</h3>
                      <p style={{color:'#cbd5e1', fontSize:'0.85rem', marginTop:'0.5rem'}}>Scoring & Verification</p>
                    </div>
                  </div>

                  <div style={{ color: '#8b5cf6' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '8px' }}>
                      <Server color="#10b981" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Gov APIs</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>MCA, PAN, GSTIN</p>
                    </div>
                  </div>

               </div>
               <p style={{ color: '#94a3b8', marginTop: '3rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                 When a vendor registers, the Management AI acts as the central router, verifying documents via external Govt APIs while maintaining a continuous internal rating based on past Purchase Orders (POs) and defect logs from the ERP.
               </p>
            </div>
          </motion.div>
        );

      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139, 92, 246,0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Cpu size={28}/> Technologies Used</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
               {['Node.js (Backend)', 'Python (ML Scoring)', 'MongoDB (Documents)', 'Redis (Caching)', 'Govt Auth APIs', 'React (Frontend)', 'AWS S3 (Storage)', 'GraphQL'].map((tech, i) => (
                 <div key={i} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', transition: 'all 0.2s', cursor: 'default' }} onMouseOver={e=>e.currentTarget.style.borderColor='#8b5cf6'} onMouseOut={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}>
                   <h4 style={{ color: '#e2e8f0', margin: 0 }}>{tech}</h4>
                 </div>
               ))}
            </div>
          </motion.div>
        );

      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(139, 92, 246,0.3)' }}>
            <h2 style={{ color: '#a78bfa', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Terminal size={28}/> Technical Implementation</h2>
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#1e293b', padding: '0.8rem 1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginLeft: '1rem', fontFamily: 'monospace' }}>vendor_scoring.py</span>
              </div>
              <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
                <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.9rem', fontFamily: "'Fira Code', monospace", lineHeight: '1.5' }}>
                  <code dangerouslySetInnerHTML={{__html: `
<span style="color: #c678dd">import</span> datetime
<span style="color: #c678dd">from</span> erp_db <span style="color: #c678dd">import</span> get_vendor_history

<span style="color: #c678dd">def</span> <span style="color: #61afef">calculate_vendor_rating</span>(vendor_id):
    history = get_vendor_history(vendor_id)
    
    <span style="color: #c678dd">if not</span> history:
        <span style="color: #c678dd">return</span> <span style="color: #d19a66">2.5</span>  <span style="color: #5c6370"># Base neutral score for new vendors</span>
        
    total_deliveries = <span style="color: #e5c07b">len</span>(history)
    on_time_count = <span style="color: #d19a66">0</span>
    defect_free_count = <span style="color: #d19a66">0</span>
    
    <span style="color: #c678dd">for</span> order <span style="color: #c678dd">in</span> history:
        <span style="color: #5c6370"># Check timeliness</span>
        <span style="color: #c678dd">if</span> order.delivery_date <= order.expected_date:
            on_time_count += <span style="color: #d19a66">1</span>
            
        <span style="color: #5c6370"># Check quality</span>
        <span style="color: #c678dd">if</span> order.qc_pass_rate > <span style="color: #d19a66">0.95</span>:
            defect_free_count += <span style="color: #d19a66">1</span>
            
    time_score = (on_time_count / total_deliveries) * <span style="color: #d19a66">2.5</span>
    quality_score = (defect_free_count / total_deliveries) * <span style="color: #d19a66">2.5</span>
    
    final_score = time_score + quality_score
    
    <span style="color: #5c6370"># Penalty for critical failures</span>
    <span style="color: #c678dd">if</span> <span style="color: #e5c07b">any</span>(order.status == <span style="color: #98c379">'BLACKLISTED'</span> <span style="color: #c678dd">for</span> order <span style="color: #c678dd">in</span> history):
        final_score = <span style="color: #d19a66">0.0</span>
        
    <span style="color: #c678dd">return</span> <span style="color: #e5c07b">round</span>(final_score, <span style="color: #d19a66">1</span>)
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
        background: 'radial-gradient(circle at 50% 80%, rgba(139, 92, 246,0.05), transparent 40%)',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid rgba(139, 92, 246,0.2)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(139, 92, 246,0.4)',
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
                VENDOR MANAGEMENT <span style={{ color: '#8b5cf6' }}>AI</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                <span style={{ background: 'rgba(139, 92, 246,0.2)', color: '#ddd6fe', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(139, 92, 246,0.5)' }}>
                  VENDOR KYC ENGINE ACTIVE
                </span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}><Terminal size={12} style={{display:'inline', marginRight:'5px'}}/> Agent ID: VM-110-B</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', marginBottom: '5px' }}>
              <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 1.5s infinite' }}></div>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>MCA REGISTRY SYNCED</span>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>Live Verification Online</p>
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
                background: activeTab === tab.id ? 'rgba(139, 92, 246,0.2)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${activeTab === tab.id ? '#8b5cf6' : 'rgba(255,255,255,0.1)'}`,
                color: activeTab === tab.id ? '#a78bfa' : '#94a3b8',
                padding: '0.8rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { if(activeTab !== tab.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(139, 92, 246,0.3)'; } }}
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

export default VendorManagementAIAgent;
