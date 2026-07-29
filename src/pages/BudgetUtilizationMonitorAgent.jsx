import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Code, FileText, LayoutDashboard, Zap, Target, MessageSquare, Send, AlertTriangle, CheckCircle2, TrendingUp, Activity, FileSpreadsheet, Mic, Download, Loader2, Search, Eye, Fingerprint
} from "lucide-react";
import '../styles/hrmsDetailed.css'; 

const tabs = [
  { id: 'overview', label: 'Agent Overview', icon: <FileText size={18} /> },
  { id: 'dashboard', label: 'Live Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'ledger', label: 'Utilization Ledger', icon: <FileSpreadsheet size={18} /> },
  { id: 'demo', label: 'Oversight Commands', icon: <MessageSquare size={18} /> },
  { id: 'features', label: 'Deep Capabilities', icon: <Zap size={18} /> },
  { id: 'use-cases', label: 'Real-World Scenarios', icon: <Target size={18} /> },
  { id: 'architecture', label: 'Architecture', icon: <Database size={18} /> },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Cpu size={18} /> },
  { id: 'implementation', label: 'Implementation', icon: <Terminal size={18} /> }
];

const predefinedResponses = {
  "scan fraud": {
    text: "Scanning all vendor payments across 75 districts for this month...",
    alert: "Fraud Alert: Invoice #88493 from 'TechSafe Solutions' submitted in Zone 3 was already paid by Zone 1 last week. Duplicate billing detected. Payment halted."
  },
  "lapse check": {
    text: "Analyzing burn rates and fund lapse deadlines...",
    alert: "Lapse Warning: District Superintendent X has only utilized 12% of the 'Women Safety Nirbhaya Fund'. The remaining ₹1.2 Cr will lapse in 45 days. Auto-escalating to DGP."
  },
  "generate audit": {
    text: "Compiling live expenditure data and cross-referencing with Treasury APIs.",
    success: "Live Utilization Audit generated. District-wise UCs (Utilization Certificates) cryptographically signed and emailed to Home Ministry."
  },
  "voice input": {
    text: "Voice Command Recognized. Analyzing fleet fuel consumption...",
    alert: "Burn Rate Alert: Fleet fuel consumption in Urban districts is exceeding the monthly limit by 24%. Investigating GPS logs of PCR vans."
  },
  "default": {
    text: "I am the Budget Utilization Monitor AI. I continuously scan for duplicate invoices, prevent fund lapsing, auto-generate utilization certificates, and detect financial leakage. Click one of the suggested prompts to see my capabilities."
  }
};

const BudgetUtilizationMonitorAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Chat Demo State
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'System Online. Secure connection established to State Treasury API and e-Procurement Portal. Ready for financial oversight.' }
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
      
      if (lowerText.includes("fraud") || lowerText.includes("scan") || lowerText.includes("vendor")) {
        response = predefinedResponses["scan fraud"];
      } else if (lowerText.includes("lapse") || lowerText.includes("underutilization") || lowerText.includes("risk")) {
        response = predefinedResponses["lapse check"];
      } else if (lowerText.includes("audit") || lowerText.includes("uc") || lowerText.includes("report")) {
        response = predefinedResponses["generate audit"];
      } else if (lowerText.includes("fuel") || lowerText.includes("voice")) {
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
      handleSendMessage("Voice input: Analyze fleet fuel consumption across all districts.");
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
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(245, 158, 11,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', textShadow: '0 0 20px rgba(245, 158, 11,0.5)' }}>Budget Utilization <span style={{ color: '#f59e0b' }}>Monitor AI</span></h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
                  An autonomous financial oversight agent that continuously monitors police department expenditures across all districts and zones. It cross-references GeM (Government e-Marketplace) invoices, tracks fund burn rates, and prevents massive financial leakage.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(245, 158, 11,0.1)', borderLeft: '4px solid #f59e0b', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#f59e0b', margin: '0 0 0.5rem 0' }}>Zero-Trust Audit</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Every invoice is verified against state treasury records before clearance.</p>
                  </div>
                  <div style={{ background: 'rgba(16,185,129,0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                     <h4 style={{ color: '#10b981', margin: '0 0 0.5rem 0' }}>Anti-Lapse Protocol</h4>
                     <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Forces paced utilization to prevent the chaotic "March Rush" spending.</p>
                  </div>
                </div>
              </div>
              <div style={{ width: '400px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '250px', height: '250px', border: '2px dashed rgba(245, 158, 11,0.3)', borderRadius: '50%' }} />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', width: '200px', height: '200px', border: '2px solid rgba(245, 158, 11,0.1)', borderRadius: '50%' }} />
                <div style={{ width: '120px', height: '120px', background: 'rgba(15,23,42,0.9)', border: '2px solid #f59e0b', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(245, 158, 11,0.5)', zIndex: 2 }}>
                  <Eye size={50} color="#f59e0b" />
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'dashboard':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(245, 158, 11, 0.3)', paddingBottom: '1rem' }}>
              <h2 style={{ color: '#f59e0b', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity className="inline-icon" size={28} /> AI MONITORING DASHBOARD
              </h2>
              <button onClick={handleGenerateReport} style={{ background: '#f59e0b', color: '#000', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <Download size={18} /> Export Utilization Audit
              </button>
            </div>
            
            {/* Top Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(245, 158, 11,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><PieChart size={20} color="#f59e0b" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Overall Utilization (Q2)</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  42.8% <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}><TrendingUp size={16}/> On Track</span>
                </div>
                <div style={{ marginTop: '1rem', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: '42.8%' }} transition={{ duration: 1.5, ease: "easeOut" }} style={{ height: '100%', background: 'linear-gradient(90deg, #f59e0b, #ef4444)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(239,68,68,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><ShieldAlert size={20} color="#ef4444" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Anomalies Detected</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  14 <span style={{ fontSize: '1rem', color: '#cbd5e1' }}>Flags Active</span>
                </div>
                <p style={{ color: '#fca5a5', fontSize: '0.85rem', marginTop: '0.5rem' }}>Immediate Action Required by DDO</p>
              </div>

              <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(16,185,129,0.2)', padding: '0.5rem', borderBottomLeftRadius: '12px' }}><CheckCircle2 size={20} color="#10b981" /></div>
                <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Funds Blocked (Leakage)</h4>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  ₹4.2 Cr <span style={{ fontSize: '1rem', color: '#10b981', display: 'flex', alignItems: 'center' }}>Saved</span>
                </div>
                <p style={{ color: '#6ee7b7', fontSize: '0.85rem', marginTop: '0.5rem' }}>Prevented duplicate vendor billing.</p>
              </div>
            </div>

            {/* Department Breakdown */}
            <div className="panel" style={{ padding: '2rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={20} color="#f59e0b"/> District-wise Live Utilization
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Cyber Crime Investigation (₹25 Cr)</span>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>43.2% Burned (Optimal)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '43.2%' }} transition={{ duration: 1 }} style={{ height: '100%', background: '#10b981' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Spending pacing perfectly with Q2 projections.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>VIP Security Expenses (₹15 Cr)</span>
                    <span style={{ color: '#ef4444', fontWeight: 'bold' }}>98.7% Burned (Critical)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '98.7%' }} transition={{ duration: 1, delay: 0.2 }} style={{ height: '100%', background: '#ef4444', boxShadow: '0 0 10px #ef4444' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Initiated fund freeze alert. Requesting supplementary budget approval.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 'bold' }}>Station Upkeep - Urban (₹40 Cr)</span>
                    <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>8.8% Burned (Underutilized)</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: '8.8%' }} transition={{ duration: 1, delay: 0.4 }} style={{ height: '100%', background: '#f59e0b' }} />
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>AI Action: Issued lapse warning to DDOs. Funds must be committed by Q3.</p>
                </div>
              </div>
            </div>

            {/* Report Modal */}
            <AnimatePresence>
              {showReportModal && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ background: '#0f172a', border: '1px solid #f59e0b', borderRadius: '16px', padding: '2rem', width: '90%', maxWidth: '500px', position: 'relative' }}>
                    <h3 style={{ color: '#f59e0b', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText size={24}/> Generating Live Utilization Audit</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 1 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 1 ? <CheckCircle2 size={18}/> : <Loader2 size={18} className="spin-anim" />}
                        <span>Scanning real-time expenditure across 75 districts...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 2 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 2 ? <CheckCircle2 size={18}/> : reportStep === 1 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Cross-referencing vendor invoices with bank APIs...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 3 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 3 ? <CheckCircle2 size={18}/> : reportStep === 2 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Detecting anomalies & unauthorized drawdowns...</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: reportStep >= 4 ? '#10b981' : '#64748b' }}>
                        {reportStep >= 4 ? <CheckCircle2 size={18}/> : reportStep === 3 ? <Loader2 size={18} className="spin-anim" /> : <div style={{width:'18px'}}/>}
                        <span>Finalizing District-wise UCs...</span>
                      </div>
                    </div>
                    
                    {reportStep >= 4 && (
                      <button onClick={() => setShowReportModal(false)} style={{ width: '100%', background: '#f59e0b', color: '#000', border: 'none', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '1.5rem', borderBottom: '1px solid rgba(245, 158, 11,0.3)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <FileSpreadsheet className="inline-icon" size={28} /> AI UTILIZATION LEDGER
            </h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Live transaction stream being monitored by the AI in real-time.</p>
            
            <div style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                <thead>
                  <tr style={{ background: 'rgba(245, 158, 11,0.1)', textAlign: 'left', borderBottom: '1px solid rgba(245, 158, 11,0.3)' }}>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#f59e0b' }}>Date</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#f59e0b' }}>Vendor / Head</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#f59e0b' }}>Amount</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#f59e0b' }}>District</th>
                    <th style={{ padding: '1rem', fontWeight: '600', color: '#f59e0b' }}>AI Insight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Oct 12, 2023</td>
                    <td style={{ padding: '1rem' }}>SVS Construction</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹1,45,00,000</td>
                    <td style={{ padding: '1rem' }}>Lucknow</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> Clearance Passed</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(239,68,68,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Oct 11, 2023</td>
                    <td style={{ padding: '1rem' }}>TechSafe Solutions</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹14,50,000</td>
                    <td style={{ padding: '1rem' }}>Kanpur</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><AlertTriangle size={16}/> Duplicate Invoice Flag</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Oct 10, 2023</td>
                    <td style={{ padding: '1rem' }}>Global Arms Ltd</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹52,00,000</td>
                    <td style={{ padding: '1rem' }}>HQ</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={16}/> GeM Matched</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(245,158,11,0.05)' }}>
                    <td style={{ padding: '1rem', color: '#94a3b8' }}>Oct 08, 2023</td>
                    <td style={{ padding: '1rem' }}>Rapid Travels</td>
                    <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#e2e8f0' }}>₹4,50,000</td>
                    <td style={{ padding: '1rem' }}>Agra</td>
                    <td style={{ padding: '1rem' }}><span style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Loader2 size={16} className="spin-anim"/> High Burn Rate Warn</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'demo':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="overview-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            {isListening && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse 1.5s infinite' }}>
                  <Mic size={40} color="#f59e0b" />
                </div>
                <h3 style={{ color: '#f59e0b', fontWeight: 'normal' }}>Listening to Voice Command...</h3>
              </div>
            )}
            
            <div style={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative' }}>
              
              {/* Chat Header */}
              <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(245, 158, 11, 0.05)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 10px #ef4444' }}></div>
                <h3 style={{ margin: 0, color: '#e2e8f0', fontSize: '1.1rem' }}>Utilization Monitor - Interactive Terminal</h3>
              </div>

              {/* Chat Messages */}
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: msg.sender === 'user' ? '#fcd34d' : '#f59e0b', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {msg.sender === 'user' ? 'Auditor Officer' : <><Bot size={14}/> Audit AI</>}
                      </div>
                      <div style={{ lineHeight: '1.6' }}>
                        {msg.text.includes("Voice input:") ? (
                           <span><Mic size={14} style={{ marginRight: '5px', verticalAlign: 'middle', color: '#fcd34d' }}/> {msg.text.replace("Voice input: ", "")}</span>
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

              {/* Chat Input Area */}
              <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                   <button onClick={() => handleSendMessage("Scan all vendor payments this month for anomalies")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(245, 158, 11,0.1)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '20px', color: '#fcd34d', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Fraud Scan
                   </button>
                   <button onClick={() => handleSendMessage("Identify funds that are at risk of lapsing due to underutilization")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(245, 158, 11,0.1)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '20px', color: '#fcd34d', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Lapse Check
                   </button>
                   <button onClick={() => handleSendMessage("Generate Live Utilization Audit")} style={{ whiteSpace: 'nowrap', padding: '0.5rem 1rem', background: 'rgba(245, 158, 11,0.1)', border: '1px solid rgba(245, 158, 11,0.4)', borderRadius: '20px', color: '#fcd34d', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                     Generate Audit
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
                    placeholder="Type a command for the Audit AI..." 
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Zap size={28}/> Core Monitoring Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11,0.2)' }}>
                <Fingerprint size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Duplicate Bill Scanner</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Using advanced OCR and invoice fingerprinting, the AI ensures no vendor is paid twice for the same service across different districts.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11,0.2)' }}>
                <ShieldAlert size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Zero-Trust Releases</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Subsequent fund tranches are locked by smart-contract logic until 80% of the previous tranche has verifiable utilization records.</p>
              </div>
              <div className="feature-card" style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11,0.2)' }}>
                <TrendingDown size={32} color="#f59e0b" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', marginBottom: '1rem' }}>March Rush Preventer</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Identifies and flags 'panic spending' in Q4 designed to prevent fund lapsing, forcing paced quality procurements all year.</p>
              </div>
            </div>
          </motion.div>
        );

      case 'use-cases':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Target size={28}/> Deployment Scenarios</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #f59e0b', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>1. Mega-Event Budget Tracking</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  During massive deployments like Kumbh Mela or State Elections, funds are rapidly drained across hundreds of temporary cost centers (tents, food, fuel). The AI aggregates these micro-transactions in real-time, instantly alerting command if a specific sector exceeds its daily burn limit, preventing massive budget overruns.
                </p>
              </div>

              <div style={{ background: 'linear-gradient(90deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4))', borderLeft: '4px solid #f59e0b', padding: '2rem', borderRadius: '12px' }}>
                <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>2. Vehicle Maintenance Fraud Detection</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                  A common leakage point is fraudulent fleet maintenance billing. The AI correlates GPS mileage logs of PCR vans with their repair invoices. If a vehicle claiming an engine overhaul hasn't moved 100km in the last month, the invoice is automatically flagged and blocked for investigation.
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Database size={28}/> System Architecture</h2>
            <div style={{ background: 'rgba(15,23,42,0.8)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(245, 158, 11,0.2)', textAlign: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                  
                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', padding: '1.5rem', borderRadius: '8px' }}>
                      <Database color="#3b82f6" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>State Treasury DB</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>Live Sync</p>
                    </div>
                  </div>

                  <div style={{ color: '#f59e0b' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '250px' }}>
                    <div style={{ background: 'rgba(245, 158, 11,0.1)', border: '2px solid #f59e0b', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(245, 158, 11,0.2)' }}>
                      <Cpu color="#f59e0b" size={40} style={{marginBottom:'1rem'}}/>
                      <h3 style={{color:'#fff', margin:0}}>Utilization Engine</h3>
                      <p style={{color:'#cbd5e1', fontSize:'0.85rem', marginTop:'0.5rem'}}>Anomaly Detection Layer</p>
                    </div>
                  </div>

                  <div style={{ color: '#f59e0b' }}>
                    <ArrowLeft size={32} style={{ transform: 'rotate(180deg)' }}/>
                  </div>

                  <div style={{ width: '200px' }}>
                    <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '8px' }}>
                      <FileText color="#10b981" size={32} style={{marginBottom:'1rem'}}/>
                      <h4 style={{color:'#fff', margin:0}}>Audit Output</h4>
                      <p style={{color:'#94a3b8', fontSize:'0.8rem', marginTop:'0.5rem'}}>Auto-Generated UCs</p>
                    </div>
                  </div>

               </div>
               <p style={{ color: '#94a3b8', marginTop: '3rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                 The architecture ensures that the Utilization Engine sits completely isolated between the Treasury output and the Procurement input, acting as an unbypassable gateway that scans all financial data passing through it in real-time.
               </p>
            </div>
          </motion.div>
        );

      case 'tech-stack':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Cpu size={28}/> Technologies Used</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
               {['Python FastAPI', 'TensorFlow (Anomaly)', 'Tesseract OCR', 'Blockchain Ledger', 'PostgreSQL', 'Redis (Caching)', 'React.js', 'WebSockets (Live)'].map((tech, i) => (
                 <div key={i} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', transition: 'all 0.2s', cursor: 'default' }} onMouseOver={e=>e.currentTarget.style.borderColor='#f59e0b'} onMouseOut={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'}>
                   <h4 style={{ color: '#e2e8f0', margin: 0 }}>{tech}</h4>
                 </div>
               ))}
            </div>
          </motion.div>
        );

      case 'implementation':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel" style={{ border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><Terminal size={28}/> Technical Implementation</h2>
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ background: '#1e293b', padding: '0.8rem 1.5rem', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginLeft: '1rem', fontFamily: 'monospace' }}>anomaly_detector.py</span>
              </div>
              <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
                <pre style={{ margin: 0, color: '#e2e8f0', fontSize: '0.9rem', fontFamily: "'Fira Code', monospace", lineHeight: '1.5' }}>
                  <code dangerouslySetInnerHTML={{__html: `
<span style="color: #c678dd">from</span> fastapi <span style="color: #c678dd">import</span> FastAPI, HTTPException
<span style="color: #c678dd">from</span> ml_models <span style="color: #c678dd">import</span> InvoiceAnomalyForest
<span style="color: #c678dd">import</span> treasury_api

app = FastAPI()
detector = InvoiceAnomalyForest.load(<span style="color: #98c379">"v4.2_fraud_weights.h5"</span>)

<span style="color: #61afef">@app.post</span>(<span style="color: #98c379">"/api/v1/audit/transaction"</span>)
<span style="color: #c678dd">async def</span> <span style="color: #61afef">audit_transaction</span>(tx_data: dict):
    <span style="color: #5c6370"># Cross-reference with existing DB</span>
    history = treasury_api.get_vendor_history(tx_data[<span style="color: #98c379">'vendor_id'</span>])
    
    <span style="color: #5c6370"># Run ML inference</span>
    risk_score, flags = detector.predict(tx_data, history)
    
    <span style="color: #c678dd">if</span> risk_score > <span style="color: #d19a66">0.85</span>:
        <span style="color: #c678dd">return</span> {
            <span style="color: #98c379">"status"</span>: <span style="color: #98c379">"BLOCKED"</span>,
            <span style="color: #98c379">"reason"</span>: flags,
            <span style="color: #98c379">"action"</span>: <span style="color: #98c379">"Sent to DDO for manual review"</span>
        }
    
    <span style="color: #c678dd">return</span> {<span style="color: #98c379">"status"</span>: <span style="color: #98c379">"CLEARED"</span>, <span style="color: #98c379">"uc_generated"</span>: <span style="color: #d19a66">True</span>}
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
        background: 'radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.05), transparent 40%)',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid rgba(245, 158, 11, 0.2)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(245, 158, 11, 0.4)',
                color: '#f59e0b', padding: '0.8rem', borderRadius: '10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#f59e0b'; e.currentTarget.style.color = '#000'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)'; e.currentTarget.style.color = '#f59e0b'; }}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                BUDGET UTILIZATION <span style={{ color: '#f59e0b' }}>MONITOR</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(245, 158, 11, 0.5)' }}>
                  LIVE AUDIT ACTIVE
                </span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}><Terminal size={12} style={{display:'inline', marginRight:'5px'}}/> Agent ID: UTI-9012-X</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', marginBottom: '5px' }}>
              <div style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 10px #ef4444', animation: 'pulse 1.5s infinite' }}></div>
              <span style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>OVERSIGHT ON</span>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>Fraud & Leakage Detection</p>
          </div>
        </div>

        <style>
          {`
            @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
            .glow-text-amber { text-shadow: 0 0 10px rgba(245,158,11,0.7); }
            .custom-scroll-amber::-webkit-scrollbar { width: 8px; height: 8px; }
            .custom-scroll-amber::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.6); borderRadius: 4px; }
            .custom-scroll-amber::-webkit-scrollbar-thumb { background: rgba(245, 158, 11, 0.4); borderRadius: 4px; }
            .custom-scroll-amber::-webkit-scrollbar-thumb:hover { background: rgba(245, 158, 11, 0.7); }
          `}
        </style>

        {/* Dynamic Nav Menu */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'rgba(245, 158, 11, 0.2)' : 'rgba(15,23,42,0.6)',
                border: `1px solid ${activeTab === tab.id ? '#f59e0b' : 'rgba(255,255,255,0.1)'}`,
                color: activeTab === tab.id ? '#f59e0b' : '#94a3b8',
                padding: '0.8rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { if(activeTab !== tab.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.3)'; } }}
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

export default BudgetUtilizationMonitorAgent;
