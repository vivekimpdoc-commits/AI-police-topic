import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity, FileSpreadsheet, Mic, Download, Loader2, ShoppingCart, Briefcase, FileSignature, BarChart3, TrendingDown
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'ledger', label: 'Tender Ledger', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'Vendor Terminal', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const predefinedResponses = {
  "draft rfp": {
    text: "Drafting RFP for '200 Tactical Drones (Thermal Capable)'...",
    success: "RFP Document Generated. Past vendor historical quotes suggest a baseline budget of ₹4.2 Cr. Sent to IG (Provisioning) for approval."
  },
  "analyze vendor": {
    text: "Analyzing Vendor V-982 (Alpha Tech Solutions)...",
    alert: "Warning: Alpha Tech Solutions has a 45% delay rate in delivery over the last 3 years, and their quoted price for Kevlar Vests is 12% higher than the market median."
  },
  "compare bids": {
    text: "Comparing 14 bids for 'Winter Jackets - Northern Range'...",
    success: "Optimal Bid Identified: Vendor V-104 (₹1.8 Cr). Saving of ₹22 Lakhs against standard estimates. Quality certification (ISO-9001) verified."
  },
  "voice input": {
    text: "Voice Command Recognized. Checking status of pending Purchase Orders (POs)...",
    success: "3 POs are pending approval. The bulk ammunition order for Training Academy has been flagged for bulk-discount negotiation."
  },
  "default": {
    text: "I am the Procurement Planning AI. I automate the drafting of RFPs, evaluate vendor bids using historical pricing data, and run reverse auctions to guarantee the department secures the best equipment at the lowest cost. Type a prompt to begin."
  }
};

const ProcurementPlanningAIAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Chat Demo State
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Procurement Engine Online. Syncing with e-Marketplace (GeM) and Internal Vendor DB. Ready for strategic sourcing.' }
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
      
      if (lowerText.includes("draft") || lowerText.includes("rfp")) {
        response = predefinedResponses["draft rfp"];
      } else if (lowerText.includes("vendor") || lowerText.includes("analyze")) {
        response = predefinedResponses["analyze vendor"];
      } else if (lowerText.includes("compare") || lowerText.includes("bid")) {
        response = predefinedResponses["compare bids"];
      } else if (lowerText.includes("pending") || lowerText.includes("voice")) {
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
      handleSendMessage("Voice input: Check status of pending POs.");
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(245, 158, 11,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div style={{ width: '400px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '250px', height: '250px', border: '2px dashed rgba(245, 158, 11,0.3)', borderRadius: '50%' }} />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '200px', height: '200px', border: '2px solid rgba(245, 158, 11,0.1)', borderRadius: '50%' }} />
                <div style={{ width: '120px', height: '120px', background: 'rgba(15,23,42,0.9)', border: '2px solid #f59e0b', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(245, 158, 11,0.5)', zIndex: 2 }}>
                  <ShoppingCart size={50} color="#f59e0b" />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', textShadow: '0 0 20px rgba(245, 158, 11,0.5)' }}>Procurement Planning <span style={{ color: '#fbbf24' }}>AI</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
                  The Procurement Planning AI Platform transforms how the department buys equipment, vehicles, and services. It predicts required inventory, automates Request For Proposal (RFP) creation, evaluates vendor bids against historical market data, and flags cartelization or overpricing.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(245, 158, 11,0.1)', borderLeft: '4px solid #f59e0b', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#fbbf24', margin: '0 0 0.5rem 0' }}>Smart Bidding Analysis</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Analyzes technical & financial bids instantly to recommend L1 vendors.</p>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#10b981', margin: '0 0 0.5rem 0' }}>Cost Optimization</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Identifies bulk purchase opportunities to trigger volume discounts.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(245, 158, 11,0.3)', paddingBottom: '1rem' }}>
              <h2 style={{ color: '#fbbf24', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity className="inline-icon" size={28} /> SOURCING DASHBOARD
              </h2>
              <button onClick={handleGenerateReport} style={{ background: '#f59e0b', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Download size={18} /> Export Tender Report
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(245, 158, 11,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><Briefcase size={20} color="#f59e0b" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Active Tenders</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  14 <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> +2 this week</span>
                </div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ height: '100%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }} />
                </div>
                <p style={{ color: '#fbbf24', fontSize: '0.85rem', marginTop: '0.5rem' }}>Total Value: ₹45.2 Cr</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(16,185,129,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><TrendingDown size={20} color="#10b981" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>AI Cost Savings</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  ₹3.4 Cr <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>YTD</span>
                </div>
                <p style={{ color: '#6ee7b7', fontSize: '0.85rem', marginTop: '0.5rem' }}>Via AI Bulk Discount Negotiation</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(239,68,68,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><ShieldAlert size={20} color="#ef4444" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Flagged Bids</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  2 <span style={{ fontSize: '1rem', color: '#ef4444', display: 'flex', alignItems: 'center' }}>Bids</span>
                </div>
                <p style={{ color: '#fca5a5', fontSize: '0.85rem', marginTop: '0.5rem' }}>Cartelization / Overpricing detected</p>
              </div>
            </div>

            <div className="panel" style={{ padding: '2rem', border: '1px solid rgba(245, 158, 11,0.3)' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileSignature size={20} color="#f59e0b"/> Contract Lifecycle
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Tender T-192: 400 Body Cameras</span>
                    <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>Technical Evaluation</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Validating IP67 water-resistance certificates for 8 vendors.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Tender T-185: Riot Gear Replenishment</span>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>Financial Bid Opened</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#10b981' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: L1 Bidder identified. Generating automated Purchase Order (PO).</p>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showReportModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ background: '#0f172a', border: '1px solid #f59e0b', borderRadius: '16px', padding: '2rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
                    <h3 style={{ color: '#fbbf24', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={24}/> Compiling Tender Report</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 1 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 1 ? <CheckCircle2 size={18}/> : <Loader2 size={18} className="spin-anim" />}
                        <span>Aggregating Technical Bids...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 2 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 2 ? <CheckCircle2 size={18}/> : reportStep === 1 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Cross-referencing GeM pricing data...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 3 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 3 ? <CheckCircle2 size={18}/> : reportStep === 2 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Applying L1/L2 matrix formulas...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 4 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 4 ? <CheckCircle2 size={18}/> : reportStep === 3 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Finalizing PDF Comparative Statement...</span>
                      </div>
                    </div>
                    
                    {reportStep >= 4 && (
                      <button onClick={() => setShowReportModal(false)} style={{ width: '100%', background: '#f59e0b', color: '#000', border: 'none', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Download Comparative Statement (.PDF)
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11,0.3)' }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '1.5rem', borderBottom: '1px solid rgba(245, 158, 11,0.3)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FileSpreadsheet className="inline-icon" size={28} /> PROCUREMENT LEDGER
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Real-time tracking of active tenders, winning vendors, and estimated vs actual costs.</p>
            
            <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                <thead>
                  <tr style={{ background: 'rgba(245, 158, 11,0.1)', textAlign: 'left', borderBottom: '1px solid rgba(245, 158, 11,0.3)' }}>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#fbbf24' }}>Tender ID / Item</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#fbbf24' }}>Est. Cost</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#fbbf24' }}>L1 Bid (Vendor)</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#fbbf24' }}>AI Cost Variance</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#fbbf24' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>T-102 (Patrol SUVs)</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace' }}>₹12.5 Cr</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#cbd5e1' }}>₹11.8 Cr (Tata Motors)</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}><span style={{ color: '#10b981' }}>-5.6% (Saved)</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> PO Issued</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>T-144 (CCTV Nodes)</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace' }}>₹4.2 Cr</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#cbd5e1' }}>₹4.6 Cr (SecureTech)</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}><span style={{ color: '#ef4444' }}>+9.5% (Overpriced)</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><AlertTriangle size={16}/> Hold/Review</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>T-185 (Riot Gear)</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace' }}>₹1.8 Cr</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#cbd5e1' }}>Evaluating</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem' }}><span style={{ color: '#64748b' }}>Pending</span></td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Loader2 size={16} className="spin-anim"/> Financial Eval</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(245, 158, 11,0.3)' }}>
            {isListening && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 1.5s infinite' }}>
                  <Mic size={40} color="#fbbf24" />
                </div>
                <h3 style={{ color: '#fbbf24', fontWeight: 'normal' }}>Listening to Voice Command...</h3>
              </div>
            )}
            
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(245, 158, 11,0.3)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative' }}>
              
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(245, 158, 11,0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 10px #f59e0b' }}></div>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Sourcing Agent - Interactive Terminal</h3>
              </div>

              <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map((msg, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{ 
                      maxWidth: '80%', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '12px',
                      background: msg.sender === 'user' ? 'rgba(245, 158, 11,0.2)' : 'rgba(245, 158, 11,0.05)',
                      border: `1px solid ${msg.sender === 'user' ? 'rgba(245, 158, 11,0.4)' : 'rgba(245, 158, 11,0.3)'}`,
                      color: '#f8fafc',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '12px',
                      borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: msg.sender === 'user' ? '#fbbf24' : '#f59e0b', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {msg.sender === 'user' ? 'Provisioning Officer' : <><Bot size={14}/> Sourcing AI</>}
                      </div>
                      <div style={{ lineHeight: '1.6' }}>
                        {msg.text.includes("Voice input:") ? (
                           <span><Mic size={14} style={{ marginRight: '5px', verticalAlign: 'middle', color: '#fbbf24' }}/> {msg.text.replace("Voice input: ", "")}</span>
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
                     <div style={{ padding: '1rem 1.5rem', borderRadius: '12px', background: 'rgba(245, 158, 11,0.05)', border: '1px solid rgba(245, 158, 11,0.2)'}}>
                        <div className="typing-indicator" style={{ display: 'flex', gap: '0.4rem' }}>
                           <span style={{ width: '8px', height: '8px', background: '#f59e0b', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.32s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#f59e0b', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '-0.16s' }}></span>
                           <span style={{ width: '8px', height: '8px', background: '#f59e0b', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both' }}></span>
                        </div>
                     </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                   <button onClick={() => handleSendMessage("Draft RFP for tactical drones")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(245, 158, 11,0.1)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '20px', color: '#fbbf24', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Draft RFP
                   </button>
                   <button onClick={() => handleSendMessage("Compare bids for Winter Jackets")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(245, 158, 11,0.1)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '20px', color: '#fbbf24', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Compare Bids
                   </button>
                   <button onClick={() => handleSendMessage("Analyze vendor V-982")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(245, 158, 11,0.1)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '20px', color: '#fbbf24', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Vendor Analysis
                   </button>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button onClick={handleVoiceCommand} style={{ background: 'rgba(245, 158, 11,0.2)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#f59e0b', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(245, 158, 11,0.4)'} onMouseOut={e=>e.currentTarget.style.background='rgba(245, 158, 11,0.2)'}>
                    <Mic size={20} />
                  </button>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Type a procurement query..." 
                    style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' }}
                    onFocus={e => e.target.style.border = '1px solid rgba(245, 158, 11,0.5)'}
                    onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                  />
                  <button onClick={() => handleSendMessage(inputValue)} style={{ background: '#f59e0b', color: '#000', border: 'none', borderRadius: '12px', padding: '0 1.5rem', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold' }}>
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11,0.3)' }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Zap size={28}/> Sourcing Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11,0.2)' }}>
                <FileSignature size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Generative RFP Drafting</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Automatically compiles technical specifications, legal clauses, and GFR rules to draft comprehensive Request for Proposals in seconds.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11,0.2)' }}>
                <BarChart3 size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Bid Analytics Matrix</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Ingests financial and technical bids, scraping GeM (Gov e-Marketplace) to highlight whether the L1 bid is genuinely cost-effective or artificially inflated.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11,0.2)' }}>
                <ShieldAlert size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Cartel & Fraud Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Identifies suspicious bidding patterns across tenders, flagging syndicates of vendors who systematically rotate winning bids.</p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11,0.3)' }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Target size={28}/> Procurement Scenarios</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #f59e0b', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>1. Uncovering Vendor Overpricing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  Three vendors submit bids for replacing 500 computers. The AI compares their quotes against live Amazon Business / GeM prices. It discovers the L1 bid is still 15% above standard retail and alerts the procurement committee to trigger a reverse auction, ultimately saving ₹35 Lakhs.
                </p>
              </div>

              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #f59e0b', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>2. Vendor Performance Indexing</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  A vendor submits the lowest bid for Kevlar helmets, but the AI references historical ERP data to show this vendor delivered sub-standard goods 2 years ago, leading to high return rates. The AI automatically adjusts their "Technical Score" downward, protecting the force from faulty equipment.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11,0.3)' }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Database size={28}/> Data Flow Architecture</h2>
            <div style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11,0.2)', textAlign: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                  
                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', padding: '1.5rem', borderRadius: '8px' }}>
                      <Network color="#3b82f6" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Govt e-Marketplace</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>Live Price Scraping</p>
                    </div>
                  </div>

                  <div style={{ color: '#f59e0b' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '250px' }}>
                    <div style={{ background: 'rgba(245, 158, 11,0.1)', border: '2px solid #f59e0b', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(245, 158, 11,0.2)' }}>
                      <Cpu color="#f59e0b" size={40} style={{marginBottom:'1rem'}}/>
                      <h3 style={{color:'#fff', margin:0}}>Procurement AI</h3>
                      <p style={{color:'#cbd5e1', fontSize:'0.85rem', marginTop:'0.5rem'}}>Bid Evaluation Engine</p>
                    </div>
                  </div>

                  <div style={{ color: '#f59e0b' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '8px' }}>
                      <Server color="#10b981" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Internal ERP</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>PO Generation & Ledger</p>
                    </div>
                  </div>

               </div>
               <p style={{ color: '#94a3b8', marginTop: '3rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                 The Bid Evaluation Engine acts as middleware between external marketplaces (GeM) and the internal ERP. By cross-referencing live market rates with historical internal vendor data, it outputs an objective L1 recommendation while flagging anomalies.
               </p>
            </div>
          </motion.div>
        );

      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11,0.3)' }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Cpu size={28}/> Technologies Used</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
               {['Python (BeautifulSoup)', 'NLP (Doc2Vec)', 'Neo4j (Graph DB)', 'Node.js (API)', 'PostgreSQL', 'Redis Caching', 'React (Tailwind)', 'Docker'].map((tech, i) => (
                 <div key={i} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', transition: 'all 0.2s', cursor: 'default' }} onMouseOver={e=>e.currentTarget.style.borderColor='#f59e0b'} onMouseOut={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}>
                   <h4 style={{ color: '#e2e8f0', margin: 0 }}>{tech}</h4>
                 </div>
               ))}
            </div>
          </motion.div>
        );

      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11,0.3)' }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Terminal size={28}/> Technical Implementation</h2>
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#1e293b', padding: '0.8rem 1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginLeft: '1rem', fontFamily: 'monospace' }}>bid_evaluator.py</span>
              </div>
              <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
                <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.9rem', fontFamily: "'Fira Code', monospace", lineHeight: '1.5' }}>
                  <code dangerouslySetInnerHTML={{__html: `
<span style="color: #c678dd">import</span> gem_scraper
<span style="color: #c678dd">from</span> vendor_db <span style="color: #c678dd">import</span> get_historical_score

<span style="color: #c678dd">def</span> <span style="color: #61afef">evaluate_bids</span>(tender_id, submitted_bids):
    market_median_price = gem_scraper.get_item_price(tender_id.item_code)
    
    evaluated_results = []
    
    <span style="color: #c678dd">for</span> bid <span style="color: #c678dd">in</span> submitted_bids:
        <span style="color: #5c6370"># 1. Check against market rate</span>
        price_variance = (bid.price - market_median_price) / market_median_price
        
        <span style="color: #5c6370"># 2. Fetch vendor reliability score (0 to 100)</span>
        trust_score = get_historical_score(bid.vendor_id)
        
        <span style="color: #5c6370"># 3. Penalize if overpriced or low trust</span>
        <span style="color: #c678dd">if</span> price_variance > <span style="color: #d19a66">0.15</span> <span style="color: #c678dd">or</span> trust_score < <span style="color: #d19a66">50</span>:
            bid.status = <span style="color: #98c379">"FLAGGED"</span>
            bid.reason = <span style="color: #98c379">f"High variance: {price_variance:.2%} | Trust: {trust_score}"</span>
        <span style="color: #c678dd">else</span>:
            <span style="color: #5c6370"># Standard composite scoring (60% weight to price, 40% to trust)</span>
            bid.composite_score = ( (<span style="color: #d19a66">1</span> - bid.price/max_price) * <span style="color: #d19a66">60</span> ) + ( (trust_score/<span style="color: #d19a66">100</span>) * <span style="color: #d19a66">40</span> )
            
        evaluated_results.append(bid)
        
    <span style="color: #5c6370"># Sort by composite score to find optimal L1</span>
    <span style="color: #c678dd">return</span> <span style="color: #e5c07b">sorted</span>(evaluated_results, key=<span style="color: #c678dd">lambda</span> x: x.composite_score, reverse=<span style="color: #d19a66">True</span>)
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
        background: 'radial-gradient(circle at 50% 80%, rgba(245, 158, 11,0.05), transparent 40%)',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid rgba(245, 158, 11,0.2)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(245, 158, 11,0.4)',
                color: '#fbbf24', padding: '0.8rem', borderRadius: '10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.color = '#000'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)'; e.currentTarget.style.color = '#fbbf24'; }}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                PROCUREMENT PLANNING <span style={{ color: '#f59e0b' }}>AI</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                <span style={{ background: 'rgba(245, 158, 11,0.2)', color: '#fde68a', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(245, 158, 11,0.5)' }}>
                  SOURCING ENGINE ACTIVE
                </span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}><Terminal size={12} style={{display:'inline', marginRight:'5px'}}/> Agent ID: PR-441-A</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', marginBottom: '5px' }}>
              <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 1.5s infinite' }}></div>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>VENDOR DB SYNCED</span>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>GeM Portal Hook Online</p>
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
                background: activeTab === tab.id ? 'rgba(245, 158, 11,0.2)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${activeTab === tab.id ? '#f59e0b' : 'rgba(255,255,255,0.1)'}`,
                color: activeTab === tab.id ? '#fbbf24' : '#94a3b8',
                padding: '0.8rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { if(activeTab !== tab.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(245, 158, 11,0.3)'; } }}
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

export default ProcurementPlanningAIAgent;
