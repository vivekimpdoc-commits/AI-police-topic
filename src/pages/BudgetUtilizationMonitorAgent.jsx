import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Search, Mic, Activity, CheckCircle, TrendingDown, AlertCircle, Eye, FileSearch, Fingerprint
} from "lucide-react";

// -------------------------------------------------------------
// Component: CyberCard
// -------------------------------------------------------------
const CyberCard = ({ title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)' }}
    style={{
      background: 'rgba(15, 23, 42, 0.6)',
      border: '1px solid rgba(245, 158, 11, 0.3)',
      borderRadius: '12px',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(245, 158, 11, 0.1)', filter: 'blur(30px)', borderRadius: '50%' }}></div>
    <h3 style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Eye size={18} /> {title}
    </h3>
    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
      {description}
    </p>
  </motion.div>
);

// -------------------------------------------------------------
// MAIN PAGE COMPONENT: Budget Utilization Monitor AI
// -------------------------------------------------------------
const BudgetUtilizationMonitorAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Voice Command State
  const [isListening, setIsListening] = useState(false);
  const [voiceInput, setVoiceInput] = useState("");
  const [aiResponse, setAiResponse] = useState(null);

  // Generate Audit Report State
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);

  const steps = [
    { label: "Scanning real-time expenditure across 75 districts...", duration: 1500 },
    { label: "Cross-referencing vendor invoices with bank APIs...", duration: 1800 },
    { label: "Detecting anomalies & unauthorized drawdowns...", duration: 2200 },
    { label: "Generating District-wise Utilization Certificates (UCs)...", duration: 1600 },
    { label: "Finalizing Live Utilization Audit...", duration: 1000 }
  ];

  const handleVoiceCommand = (command, type) => {
    setIsListening(true);
    setAiResponse(null);
    let currentText = "";
    const targetText = command;
    let i = 0;

    const typeInterval = setInterval(() => {
      currentText += targetText[i];
      setVoiceInput(currentText);
      i++;
      if (i >= targetText.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsListening(false);
          let response = {};
          if (type === 'fraud') {
            response = {
              title: "Suspicious Transaction Alert",
              data: "Identified a duplicate invoice payment of ₹14.5 Lakhs for riot gear in Zone 3. Payment halted.",
              success: "Transaction blocked pending manual verification."
            };
          } else if (type === 'underutilization') {
            response = {
              title: "Underutilization Warning",
              data: "The 'Women Safety Nirbhaya Fund' in District X is only 12% utilized. Q3 deadline approaching.",
              success: "Automated alert sent to District Superintendent."
            };
          } else if (type === 'overspend') {
            response = {
              title: "Over-spending Detection",
              data: "Fleet maintenance fuel logs are exceeding the monthly limit by 24%. Investigating PCR Van GPS logs.",
              success: "Auditor protocol initiated."
            };
          }
          setAiResponse(response);
        }, 1000);
      }
    }, 50);
  };

  const startReportGeneration = () => {
    setIsGenerating(true);
    setGenerationStep(0);
    
    let currentStep = 0;
    const processNextStep = () => {
      if (currentStep < steps.length) {
        setGenerationStep(currentStep);
        setTimeout(() => {
          currentStep++;
          processNextStep();
        }, steps[currentStep].duration);
      } else {
        setTimeout(() => {
          setIsGenerating(false);
          alert("✓ Live Utilization Audit Generated Successfully.");
        }, 500);
      }
    };
    
    processNextStep();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#020617',
      color: '#f8fafc',
      fontFamily: "'Inter', sans-serif",
      padding: '2rem'
    }}>
      {/* Background Tech Elements */}
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

        {/* Custom Animation Styles */}
        <style>
          {`
            @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
            .glow-text-amber { text-shadow: 0 0 10px rgba(245,158,11,0.7); }
            
            /* Scrollbar for tables */
            .custom-scroll-amber::-webkit-scrollbar { width: 8px; height: 8px; }
            .custom-scroll-amber::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.6); borderRadius: 4px; }
            .custom-scroll-amber::-webkit-scrollbar-thumb { background: rgba(245, 158, 11, 0.4); borderRadius: 4px; }
            .custom-scroll-amber::-webkit-scrollbar-thumb:hover { background: rgba(245, 158, 11, 0.7); }
          `}
        </style>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          {[
            { id: 'dashboard', label: 'Monitoring Dashboard', icon: <Activity size={18} /> },
            { id: 'demo', label: 'Oversight Commands', icon: <Mic size={18} /> },
            { id: 'usecases', label: 'Monitoring Use-cases', icon: <Search size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                border: `1px solid ${activeTab === tab.id ? '#f59e0b' : 'transparent'}`,
                color: activeTab === tab.id ? '#f59e0b' : '#94a3b8',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div key="dashboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              
              {/* Stats Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Overall Utilization (Q2)</p>
                    <h2 className="glow-text-amber" style={{ margin: 0, fontSize: '2rem', color: '#f59e0b' }}>42.8%</h2>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#10b981', fontSize: '0.8rem' }}>On track for financial year end</p>
                  </div>
                  <PieChart size={40} color="#f59e0b" opacity={0.5} />
                </div>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Anomalies Detected</p>
                    <h2 className="glow-text-amber" style={{ margin: 0, fontSize: '2rem', color: '#ef4444' }}>14 Flags</h2>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#ef4444', fontSize: '0.8rem' }}>Action required by DDO</p>
                  </div>
                  <AlertCircle size={40} color="#ef4444" opacity={0.5} />
                </div>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Funds Blocked (Leakage)</p>
                    <h2 className="glow-text-amber" style={{ margin: 0, fontSize: '2rem', color: '#10b981' }}>₹4.2 Cr</h2>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#10b981', fontSize: '0.8rem' }}>Saved from duplicate billing</p>
                  </div>
                  <ShieldAlert size={40} color="#10b981" opacity={0.5} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                {/* Live Expenditure Tracking Table */}
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ margin: 0, color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Activity color="#f59e0b" /> Live District Utilization
                    </h3>
                    <button 
                      onClick={startReportGeneration}
                      style={{ background: '#f59e0b', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                    >
                      <FileSearch size={16} /> AUDIT NOW
                    </button>
                  </div>

                  <div className="custom-scroll-amber" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(245, 158, 11, 0.3)', color: '#f59e0b', fontSize: '0.9rem' }}>
                          <th style={{ padding: '1rem 0.5rem' }}>Head of Account</th>
                          <th style={{ padding: '1rem 0.5rem' }}>Total Allocated</th>
                          <th style={{ padding: '1rem 0.5rem' }}>Spent</th>
                          <th style={{ padding: '1rem 0.5rem' }}>Remaining</th>
                          <th style={{ padding: '1rem 0.5rem' }}>Burn Rate Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { acc: 'Cyber Crime Investigation', alloc: '₹25.0 Cr', spent: '₹14.2 Cr', rem: '43.2%', stat: 'Optimal' },
                          { acc: 'VIP Security Expenses', alloc: '₹15.0 Cr', spent: '₹14.8 Cr', rem: '1.3%', stat: 'Critical' },
                          { acc: 'Station Upkeep (Urban)', alloc: '₹40.0 Cr', spent: '₹3.5 Cr', rem: '91.2%', stat: 'Underutilized' },
                          { acc: 'Modernization Grants', alloc: '₹110.0 Cr', spent: '₹62.0 Cr', rem: '43.6%', stat: 'Optimal' },
                          { acc: 'Informant (SS) Fund', alloc: '₹5.0 Cr', spent: '₹4.9 Cr', rem: '2.0%', stat: 'Critical' },
                        ].map((row, idx) => (
                          <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#cbd5e1' }}>
                            <td style={{ padding: '1rem 0.5rem' }}>{row.acc}</td>
                            <td style={{ padding: '1rem 0.5rem' }}>{row.alloc}</td>
                            <td style={{ padding: '1rem 0.5rem' }}>{row.spent}</td>
                            <td style={{ padding: '1rem 0.5rem', color: parseFloat(row.rem) < 10 ? '#ef4444' : '#f8fafc' }}>{row.rem}</td>
                            <td style={{ padding: '1rem 0.5rem' }}>
                              <span style={{ 
                                background: row.stat === 'Optimal' ? 'rgba(16, 185, 129, 0.2)' : row.stat === 'Critical' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.2)', 
                                padding: '4px 8px', borderRadius: '4px', 
                                color: row.stat === 'Optimal' ? '#10b981' : row.stat === 'Critical' ? '#ef4444' : '#f59e0b', 
                                fontSize: '0.8rem', fontWeight: 'bold' 
                              }}>{row.stat}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* AI Oversight Actions */}
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ margin: '0 0 1.5rem 0', color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Fingerprint color="#f59e0b" /> Recent AI Interventions
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                      <p style={{ margin: '0 0 0.5rem 0', color: '#ef4444', fontWeight: 'bold', fontSize: '0.9rem' }}>PAYMENT HALTED: Duplicate Bill</p>
                      <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem' }}>System caught Invoice #88493 submitted twice by Vendor 'TechSafe Solutions'. Action logged.</p>
                    </div>
                    
                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                      <p style={{ margin: '0 0 0.5rem 0', color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem' }}>AUTO-UC GENERATED</p>
                      <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem' }}>Utilization Certificates for Q1 Modernization Grants automatically compiled and signed via E-Sign.</p>
                    </div>

                    <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                      <p style={{ margin: '0 0 0.5rem 0', color: '#f59e0b', fontWeight: 'bold', fontSize: '0.9rem' }}>LAPSE WARNING ISSUED</p>
                      <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem' }}>Notified 3 districts that their assigned 'Building Maintenance' funds will lapse in 45 days if unused.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'demo' && (
            <motion.div key="demo" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '12px', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{ 
                    width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)', 
                    border: '2px solid #f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    margin: '0 auto 1rem auto', boxShadow: isListening ? '0 0 30px rgba(245, 158, 11, 0.6)' : '0 0 10px rgba(245, 158, 11, 0.2)',
                    transition: 'all 0.3s'
                  }}>
                    <Mic size={40} color="#f59e0b" />
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Oversight & Query Engine</h3>
                  <p style={{ color: '#94a3b8', margin: 0 }}>Command the AI to scan for anomalies or summarize budget utilization.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                  <button onClick={() => handleVoiceCommand("Scan all vendor payments this month for anomalies.", "fraud")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245, 158, 11,0.4)', color: '#cbd5e1', padding: '1rem', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(245, 158, 11,0.1)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                    <strong style={{color:'#f59e0b', display:'block', marginBottom:'5px'}}>Fraud Scan</strong>
                    "Scan all vendor payments this month for anomalies."
                  </button>
                  <button onClick={() => handleVoiceCommand("Identify funds that are at risk of lapsing due to underutilization.", "underutilization")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245, 158, 11,0.4)', color: '#cbd5e1', padding: '1rem', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(245, 158, 11,0.1)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                    <strong style={{color:'#f59e0b', display:'block', marginBottom:'5px'}}>Lapse Check</strong>
                    "Identify funds that are at risk of lapsing..."
                  </button>
                  <button onClick={() => handleVoiceCommand("Analyze fleet fuel consumption across all districts.", "overspend")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245, 158, 11,0.4)', color: '#cbd5e1', padding: '1rem', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(245, 158, 11,0.1)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                    <strong style={{color:'#f59e0b', display:'block', marginBottom:'5px'}}>Burn Rate</strong>
                    "Analyze fleet fuel consumption across all districts."
                  </button>
                </div>

                <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '1.5rem', minHeight: '150px' }}>
                  {!voiceInput && !aiResponse && (
                    <div style={{ color: '#64748b', textAlign: 'center', marginTop: '40px' }}>Select an oversight query above...</div>
                  )}
                  {voiceInput && (
                    <div style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#f59e0b' }}>❯</span> {voiceInput}
                      {isListening && <span style={{ width: '10px', height: '20px', background: '#f59e0b', animation: 'pulse 1s infinite' }}></span>}
                    </div>
                  )}
                  {aiResponse && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <h4 style={{ color: '#f59e0b', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '8px' }}><Cpu size={16}/> {aiResponse.title}</h4>
                      <p style={{ color: '#cbd5e1', margin: '0 0 1rem 0', lineHeight: '1.6' }}>{aiResponse.data}</p>
                      <div style={{ color: '#10b981', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <CheckCircle size={14} /> {aiResponse.success}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'usecases' && (
            <motion.div key="usecases" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>Why Monitor Utilization?</h2>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '800px' }}>
                  The <strong>Budget Utilization Monitor AI</strong> acts as an unblinking eye on every rupee spent. It prevents corruption, ensures timely usage of government funds before they lapse, and removes the massive paperwork burden of manual audits.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <CyberCard 
                  delay={0.1}
                  title="The 'March Rush' Preventer"
                  description="Government departments often rush to spend unused funds in March to prevent them from lapsing. This AI tracks spending velocity year-round and forces paced utilization, stopping low-quality 'rush' procurements."
                />
                <CyberCard 
                  delay={0.2}
                  title="Duplicate Bill AI Scanner"
                  description="Using Optical Character Recognition (OCR) and NLP, it scans every vendor invoice. If a vendor tries to submit the same bill for car repairs in two different districts, the AI blocks the payment instantly."
                />
                <CyberCard 
                  delay={0.3}
                  title="Automated UC Generation"
                  description="Generating Utilization Certificates (UCs) for Central Government grants takes months manually. The AI generates cryptographically signed UCs in real-time as the funds are drawn from the state treasury."
                />
                <CyberCard 
                  delay={0.4}
                  title="Zero-Trust Fund Release"
                  description="Smart-contract style execution. District SPs only receive the next tranche of their operational budget when the AI confirms that 80% of the previous tranche has been legitimately utilized and logged."
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Generation Progress Modal */}
      {isGenerating && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
        }}>
          <div style={{
            background: '#0f172a', border: '1px solid #f59e0b', borderRadius: '12px', padding: '2rem', width: '90%', maxWidth: '500px',
            boxShadow: '0 0 30px rgba(245, 158, 11, 0.2)'
          }}>
            <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '2rem' }}>Running Enterprise AI Audit</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {steps.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {generationStep > idx ? (
                    <CheckCircle color="#10b981" size={20} />
                  ) : generationStep === idx ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Activity color="#f59e0b" size={20} />
                    </motion.div>
                  ) : (
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #334155' }}></div>
                  )}
                  <span style={{ 
                    color: generationStep > idx ? '#10b981' : generationStep === idx ? '#fff' : '#64748b',
                    fontWeight: generationStep === idx ? 'bold' : 'normal'
                  }}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '2rem', height: '6px', background: '#334155', borderRadius: '3px', overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ width: `${((generationStep + 1) / steps.length) * 100}%` }}
                style={{ height: '100%', background: '#f59e0b' }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BudgetUtilizationMonitorAgent;
