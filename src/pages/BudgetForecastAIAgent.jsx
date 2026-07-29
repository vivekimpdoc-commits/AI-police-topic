import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, ArrowLeft, Terminal, Cpu, ShieldAlert, PieChart, Database, Network, Server, Zap, CheckCircle, Search, Mic, Activity, Clock, FileSpreadsheet, Lock, TrendingUp, BarChart3, AlertTriangle, Calendar
} from "lucide-react";

// -------------------------------------------------------------
// Component: CyberCard (Re-used for feature grid)
// -------------------------------------------------------------
const CyberCard = ({ title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}
    style={{
      background: 'rgba(15, 23, 42, 0.6)',
      border: '1px solid rgba(16, 185, 129, 0.3)',
      borderRadius: '12px',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'rgba(16, 185, 129, 0.1)', filter: 'blur(30px)', borderRadius: '50%' }}></div>
    <h3 style={{ color: '#10b981', fontSize: '1.1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Zap size={18} /> {title}
    </h3>
    <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
      {description}
    </p>
  </motion.div>
);

// -------------------------------------------------------------
// MAIN PAGE COMPONENT: Budget Forecast AI
// -------------------------------------------------------------
const BudgetForecastAIAgent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Voice Command State
  const [isListening, setIsListening] = useState(false);
  const [voiceInput, setVoiceInput] = useState("");
  const [aiResponse, setAiResponse] = useState(null);

  // Generate Report State
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);

  const steps = [
    { label: "Analyzing Historical Spending Trends...", duration: 1500 },
    { label: "Correlating Inflation & Macroeconomic Factors...", duration: 2000 },
    { label: "Evaluating Upcoming Procurement Requirements...", duration: 1800 },
    { label: "Running Predictive Machine Learning Models...", duration: 2200 },
    { label: "Finalizing 5-Year Budget Forecast Report...", duration: 1000 }
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
          if (type === 'inflation') {
            response = {
              title: "Inflation Impact Analysis",
              data: "Fuel & Transportation costs projected to rise 8.4% next fiscal year. Recommended +10% allocation buffer for logistics.",
              success: "Macroeconomic index applied to transport budget successfully."
            };
          } else if (type === 'maintenance') {
            response = {
              title: "Fleet Maintenance Forecast",
              data: "Based on vehicle aging data, maintenance costs for standard PCR vans will spike by Q3 2027. Early replacement suggested.",
              success: "Lifecycle cost prediction generated."
            };
          } else if (type === 'contingency') {
            response = {
              title: "Contingency Fund Modeling",
              data: "Simulating high-alert election year scenarios requires a 22% increase in the emergency reserve fund.",
              success: "Stress-test parameters applied to reserve pools."
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
          alert("✓ AI 5-Year Budget Forecast Report Generated Successfully & Saved to Encrypted Vault.");
        }, 500);
      }
    };
    
    processNextStep();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#020617', // Very dark blue/black
      color: '#f8fafc',
      fontFamily: "'Inter', sans-serif",
      padding: '2rem'
    }}>
      {/* Background Tech Elements */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.05), transparent 40%)',
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
                color: '#10b981', padding: '0.8rem', borderRadius: '10px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.color = '#000'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)'; e.currentTarget.style.color = '#10b981'; }}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>
                BUDGET FORECAST <span style={{ color: '#10b981' }}>AI AGENT</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(16, 185, 129, 0.5)' }}>
                  NEURAL PREDICTION ACTIVE
                </span>
                <span style={{ color: '#64748b', fontSize: '0.9rem' }}><Terminal size={12} style={{display:'inline', marginRight:'5px'}}/> Agent ID: FRC-7709-X</span>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end', marginBottom: '5px' }}>
              <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', animation: 'pulse 1.5s infinite' }}></div>
              <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>SYSTEM ONLINE</span>
            </div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>Predictive Analytics & Forecasting</p>
          </div>
        </div>

        {/* Custom Animation Styles */}
        <style>
          {`
            @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
            @keyframes scan { 0% { top: 0; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
            @keyframes spin { 100% { transform: rotate(360deg); } }
            .glow-text { text-shadow: 0 0 10px rgba(16,185,129,0.7); }
            
            /* Scrollbar for tables */
            .custom-scroll::-webkit-scrollbar { width: 8px; height: 8px; }
            .custom-scroll::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.6); borderRadius: 4px; }
            .custom-scroll::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.4); borderRadius: 4px; }
            .custom-scroll::-webkit-scrollbar-thumb:hover { background: rgba(16, 185, 129, 0.7); }
          `}
        </style>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          {[
            { id: 'dashboard', label: 'Forecast Dashboard', icon: <Activity size={18} /> },
            { id: 'demo', label: 'AI Prediction Demo', icon: <Mic size={18} /> },
            { id: 'usecases', label: 'Strategic Use-cases', icon: <Database size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                border: `1px solid ${activeTab === tab.id ? '#10b981' : 'transparent'}`,
                color: activeTab === tab.id ? '#10b981' : '#94a3b8',
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
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>5-Year Inflated Deficit Risk</p>
                    <h2 className="glow-text" style={{ margin: 0, fontSize: '2rem', color: '#10b981' }}>- 12.4%</h2>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#ef4444', fontSize: '0.8rem' }}>↑ High Logistics Cost Variance</p>
                  </div>
                  <TrendingUp size={40} color="#10b981" opacity={0.5} />
                </div>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Salary & Pension Projection (2030)</p>
                    <h2 className="glow-text" style={{ margin: 0, fontSize: '2rem', color: '#10b981' }}>₹4,250 Cr</h2>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#10b981', fontSize: '0.8rem' }}>✓ Adjusted for 8th Pay Commission</p>
                  </div>
                  <BarChart3 size={40} color="#10b981" opacity={0.5} />
                </div>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ margin: '0 0 0.5rem 0', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Forecast Accuracy Rate</p>
                    <h2 className="glow-text" style={{ margin: 0, fontSize: '2rem', color: '#10b981' }}>96.8%</h2>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#10b981', fontSize: '0.8rem' }}>Based on Historical Backtesting</p>
                  </div>
                  <ShieldAlert size={40} color="#10b981" opacity={0.5} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                {/* Forecast Timeline Table */}
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ margin: 0, color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Calendar color="#10b981" /> 3-Year Projection Model
                    </h3>
                    <button 
                      onClick={startReportGeneration}
                      style={{ background: '#10b981', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                    >
                      <FileSpreadsheet size={16} /> GENERATE LONG-TERM REPORT
                    </button>
                  </div>

                  <div className="custom-scroll" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', fontSize: '0.9rem' }}>
                          <th style={{ padding: '1rem 0.5rem' }}>Expense Category</th>
                          <th style={{ padding: '1rem 0.5rem' }}>Current FY</th>
                          <th style={{ padding: '1rem 0.5rem' }}>FY + 1 Forecast</th>
                          <th style={{ padding: '1rem 0.5rem' }}>FY + 2 Forecast</th>
                          <th style={{ padding: '1rem 0.5rem' }}>AI Confidence</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { cat: 'Personnel Salaries', curr: '₹3,100 Cr', fy1: '₹3,348 Cr (+8%)', fy2: '₹3,615 Cr (+16%)', conf: '99%' },
                          { cat: 'Fleet Operations (Fuel)', curr: '₹145 Cr', fy1: '₹162 Cr (+12%)', fy2: '₹185 Cr (+27%)', conf: '88%' },
                          { cat: 'Tech & IT Upgrades', curr: '₹80 Cr', fy1: '₹115 Cr (+43%)', fy2: '₹150 Cr (+87%)', conf: '91%' },
                          { cat: 'Arms & Ammunition', curr: '₹220 Cr', fy1: '₹235 Cr (+6%)', fy2: '₹240 Cr (+9%)', conf: '95%' },
                          { cat: 'Infrastructure Maintenance', curr: '₹95 Cr', fy1: '₹105 Cr (+10%)', fy2: '₹120 Cr (+26%)', conf: '92%' },
                        ].map((row, idx) => (
                          <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#cbd5e1' }}>
                            <td style={{ padding: '1rem 0.5rem' }}>{row.cat}</td>
                            <td style={{ padding: '1rem 0.5rem' }}>{row.curr}</td>
                            <td style={{ padding: '1rem 0.5rem', color: row.fy1.includes('(+43%)') ? '#ef4444' : '#f8fafc' }}>{row.fy1}</td>
                            <td style={{ padding: '1rem 0.5rem', color: row.fy2.includes('(+87%)') || row.fy2.includes('(+27%)') ? '#ef4444' : '#f8fafc' }}>{row.fy2}</td>
                            <td style={{ padding: '1rem 0.5rem' }}>
                              <span style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#10b981', fontSize: '0.8rem' }}>{row.conf}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Risk Predictor Alerts */}
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '1.5rem' }}>
                  <h3 style={{ margin: '0 0 1.5rem 0', color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <AlertTriangle color="#ef4444" /> AI Risk Predictions
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                      <p style={{ margin: '0 0 0.5rem 0', color: '#ef4444', fontWeight: 'bold', fontSize: '0.9rem' }}>WARNING: Tech Budget Deficit</p>
                      <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem' }}>Cloud storage and AI surveillance costs expected to outgrow current budget by 43% next year due to massive data influx.</p>
                    </div>
                    
                    <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                      <p style={{ margin: '0 0 0.5rem 0', color: '#f59e0b', fontWeight: 'bold', fontSize: '0.9rem' }}>ALERT: Fleet Depreciation</p>
                      <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem' }}>30% of standard PCR vans reaching end of lifecycle in FY+2. Prepare ₹40 Cr capital expenditure plan.</p>
                    </div>

                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '0 8px 8px 0' }}>
                      <p style={{ margin: '0 0 0.5rem 0', color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem' }}>OPPORTUNITY: Fuel Savings</p>
                      <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.85rem' }}>Transitioning 15% of city fleet to EVs in FY+1 will yield a compounding saving of ₹12 Cr by FY+3.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'demo' && (
            <motion.div key="demo" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{ 
                    width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', 
                    border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    margin: '0 auto 1rem auto', boxShadow: isListening ? '0 0 30px rgba(16, 185, 129, 0.6)' : '0 0 10px rgba(16, 185, 129, 0.2)',
                    transition: 'all 0.3s'
                  }}>
                    <Mic size={40} color="#10b981" />
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Predictive Voice Queries</h3>
                  <p style={{ color: '#94a3b8', margin: 0 }}>Ask the AI to run future financial simulations and cost impact analyses.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                  <button onClick={() => handleVoiceCommand("Calculate inflation impact on logistics budget for next year.", "inflation")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(16,185,129,0.4)', color: '#cbd5e1', padding: '1rem', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(16,185,129,0.1)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                    <strong style={{color:'#10b981', display:'block', marginBottom:'5px'}}>Simulation 1</strong>
                    "Calculate inflation impact on logistics budget for next year."
                  </button>
                  <button onClick={() => handleVoiceCommand("Forecast fleet maintenance costs for the next 3 years.", "maintenance")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(16,185,129,0.4)', color: '#cbd5e1', padding: '1rem', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(16,185,129,0.1)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                    <strong style={{color:'#10b981', display:'block', marginBottom:'5px'}}>Simulation 2</strong>
                    "Forecast fleet maintenance costs for the next 3 years."
                  </button>
                  <button onClick={() => handleVoiceCommand("Model contingency fund requirements for election year.", "contingency")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(16,185,129,0.4)', color: '#cbd5e1', padding: '1rem', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(16,185,129,0.1)'} onMouseOut={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                    <strong style={{color:'#10b981', display:'block', marginBottom:'5px'}}>Simulation 3</strong>
                    "Model contingency fund requirements for election year."
                  </button>
                </div>

                <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '1.5rem', minHeight: '150px' }}>
                  {!voiceInput && !aiResponse && (
                    <div style={{ color: '#64748b', textAlign: 'center', marginTop: '40px' }}>Select a simulation query above...</div>
                  )}
                  {voiceInput && (
                    <div style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: '#10b981' }}>❯</span> {voiceInput}
                      {isListening && <span style={{ width: '10px', height: '20px', background: '#10b981', animation: 'pulse 1s infinite' }}></span>}
                    </div>
                  )}
                  {aiResponse && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1rem', borderRadius: '8px' }}>
                      <h4 style={{ color: '#10b981', margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '8px' }}><Cpu size={16}/> {aiResponse.title}</h4>
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
                <h2 style={{ color: '#fff', fontSize: '1.8rem', margin: '0 0 1rem 0' }}>Strategic Forecasting Scenarios</h2>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '800px' }}>
                  The <strong>Budget Forecast AI</strong> is vital for long-term strategic planning. It helps police departments avoid financial crises by accurately projecting future costs based on highly complex variables that humans cannot easily correlate.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <CyberCard 
                  delay={0.1}
                  title="The 8th Pay Commission Shock"
                  description="When a new Pay Commission is announced, the AI automatically recalculates the entire salary, pension, and gratuity liability for the next 10 years, factoring in expected DA hikes and promotions, allowing the HQ to request accurate budget supplements from the government."
                />
                <CyberCard 
                  delay={0.2}
                  title="Infrastructure Aging Predictor"
                  description="The AI analyzes the age and condition of all police stations, barracks, and training academies. It forecasts exactly when roofs will need replacement, when plumbing systems will fail, and budgets for phased renovations before critical failures happen."
                />
                <CyberCard 
                  delay={0.3}
                  title="Technology Obsolescence Curve"
                  description="Servers, body-cams, and software licenses become obsolete rapidly. The AI creates a 'Tech Refresh Forecast', predicting exactly when capital expenditure is required to replace legacy systems without causing a sudden massive dent in a single year's budget."
                />
                <CyberCard 
                  delay={0.4}
                  title="Fuel Price Volatility Buffer"
                  description="By scraping global oil price indices and linking them to historical fleet usage patterns, the AI projects high/low scenarios for the fuel budget. If it predicts a massive spike, it recommends strict usage protocols or early EV adoption strategies."
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
            background: '#0f172a', border: '1px solid #10b981', borderRadius: '12px', padding: '2rem', width: '90%', maxWidth: '500px',
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.2)'
          }}>
            <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '2rem' }}>Compiling Long-Term AI Forecast</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {steps.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {generationStep > idx ? (
                    <CheckCircle color="#10b981" size={20} />
                  ) : generationStep === idx ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Zap color="#f59e0b" size={20} />
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
                style={{ height: '100%', background: '#10b981' }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BudgetForecastAIAgent;
