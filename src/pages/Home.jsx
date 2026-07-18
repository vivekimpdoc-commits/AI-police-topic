import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ShieldAlert, Fingerprint, Database, Cpu, Activity, GlobeLock, FolderKanban, Zap, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { modules } from '../data/modules';

// A dynamic sub-component for the live telemetry bar
const LiveTelemetry = () => {
  const [nodes, setNodes] = useState(1042);
  const [latency, setLatency] = useState(12);
  const [processed, setProcessed] = useState(8459200);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev + Math.floor(Math.random() * 5) - 2);
      setLatency(Math.floor(Math.random() * 10) + 8);
      setProcessed(prev => prev + Math.floor(Math.random() * 150));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '1.5rem', background: 'var(--color-panel)', backdropFilter: 'blur(10px)', border: '1px solid var(--glass-border)', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '15px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
        <Network size={32} color="var(--color-primary)" />
        <div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Active AI Nodes</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', textShadow: '0 0 10px var(--glass-border)' }}>{nodes.toLocaleString()}</div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '15px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
        <Zap size={32} color="#10b981" />
        <div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Network Latency</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', textShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}>{latency} ms</div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Database size={32} color="#3b82f6" />
        <div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Data Processed (TB)</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3b82f6', textShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}>{(processed / 1000).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [searchTerm, setSearchTerm] = useState('');

  const getIcon = (id) => {
    switch (id) {
      case 'module-01': return <Activity size={24} />;
      case 'module-02': return <GlobeLock size={24} />;
      case 'module-03': return <Database size={24} />;
      case 'module-04': return <Fingerprint size={24} />;
      case 'module-05': return <Cpu size={24} />;
      default: return <ShieldAlert size={24} />;
    }
  };

  const getDirectRoute = (id) => {
    switch(id) {
      case 'module-32': return '/hrms';
      case 'module-33':
      case 'module-85': return '/finance';
      case 'module-71': return '/procurement';
      case 'module-99': return '/audit';
      case 'module-52': return '/document';
      case 'module-06': return '/command-center';
      case 'module-07': return '/citizen-services';
      case 'module-08': return '/complaint-fir';
      case 'module-10': return '/intelligence';
      case 'module-11': return '/predictive-policing';
      case 'module-13': return '/cyber-crime';
      case 'module-14': return '/digital-evidence';
      case 'module-15': return '/missing-persons';
      case 'module-16': return '/women-child-safety';
      case 'module-17': return '/traffic';
      case 'module-18': return '/law-order';
      case 'module-19': return '/legal-court';
      case 'module-20': return '/training-academy';
      case 'module-21': return '/logistics';
      case 'module-22': return '/smart-city';
      case 'module-23': return '/communication';
      case 'module-29': return '/police-station';
      case 'module-30': return '/fleet-logistics';
      case 'module-31': return '/radio-comms';
      case 'module-34': return '/public-safety';
      case 'module-35': return '/emerging-tech';
      case 'module-36': return '/tech-services';
      case 'module-37': return '/infrastructure';
      case 'module-38': return '/internal-security';
      case 'module-39': return '/armoury';
      case 'module-40': return '/legal-process';
      case 'module-41': return '/community-policing';
      case 'module-42': return '/intelligence-support';
      case 'module-43': return '/disaster-logistics';
      case 'module-44': return '/police-admin';
      case 'module-45': return '/training-quality';
      case 'module-46': return '/international-coordination';
      case 'module-47': return '/research-innovation';
      case 'module-48': return '/police-hq';
      case 'module-49': return '/correspondence';
      case 'module-50': return '/police-inspection';
      default: return `/module/${id}`;
    }
  };

  const sortedModules = [...modules].sort((a, b) => {
    const nameA = language === 'en' ? a.nameEn : a.nameHi;
    const nameB = language === 'en' ? b.nameEn : b.nameHi;
    return nameA.localeCompare(nameB);
  });

  const filteredModules = sortedModules.filter(mod => {
    const term = searchTerm.toLowerCase();
    const nameEn = mod.nameEn.toLowerCase();
    const nameHi = mod.nameHi.toLowerCase();
    return nameEn.includes(term) || nameHi.includes(term);
  });

  return (
    <div style={{ position: 'relative', minHeight: '100%', padding: '1rem', maxWidth: '1600px', margin: '0 auto' }}>
      
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h1 className="neon-text" style={{ fontSize: '3rem', margin: 0, letterSpacing: '2px', textShadow: '0 0 20px var(--glass-border)' }}>
              CENTRAL COMMAND
            </h1>
            <div style={{ color: 'var(--color-primary)', fontSize: '1rem', marginTop: '0.5rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%', marginRight: '10px', boxShadow: '0 0 10px var(--color-primary)' }}></span>
              NEURAL NETWORK SUBSYSTEMS
            </div>
          </div>
          
          <div style={{ position: 'relative', width: '400px' }}>
            <Search size={20} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-primary)' }} />
            <input 
              type="text" 
              placeholder={language === 'en' ? "Search 106 AI Modules..." : "106 एआई मॉड्यूल खोजें..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3.5rem',
                borderRadius: '30px',
                border: '1px solid var(--glass-border)',
                background: 'var(--color-panel)',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.boxShadow = '0 0 20px var(--glass-border)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--glass-border)'; e.target.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)'; }}
            />
          </div>
        </div>

        <LiveTelemetry />

        {/* Modules Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
          gap: '2rem', 
          marginBottom: '4rem' 
        }}>
          {filteredModules.length > 0 ? (
            filteredModules.map((mod, index) => (
              <motion.div 
                key={mod.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
              >
                <Link to={getDirectRoute(mod.id)} style={{ display: 'block', textDecoration: 'none' }}>
                  <div 
                    style={{ 
                      padding: '2rem', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column',
                      background: 'var(--color-panel)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '16px',
                      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                      e.currentTarget.style.boxShadow = '0 15px 40px var(--glass-border)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
                    }}
                  >
                    {/* Glowing background accent */}
                    <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', background: 'var(--color-primary-glow)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', zIndex: 1 }}>
                      <div style={{ 
                        width: '50px', height: '50px', 
                        borderRadius: '12px', 
                        background: 'rgba(56, 189, 248, 0.1)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--color-primary)',
                        marginRight: '15px',
                        border: '1px solid var(--color-primary-glow)',
                        boxShadow: '0 0 15px var(--color-primary-glow)'
                      }}>
                        {getIcon(mod.id)}
                      </div>
                      <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff', flex: 1, lineHeight: '1.4', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        {language === 'en' ? mod.nameEn : mod.nameHi}
                      </h3>
                    </div>
                    
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.2rem', zIndex: 1 }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                          INTEGRATED TOPICS
                        </span>
                        <span style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '800' }}>
                          {mod.subTopicsEn.length}
                        </span>
                      </div>
                      <div style={{ 
                        fontSize: '0.75rem', color: '#000', fontWeight: '800', background: 'var(--color-primary)', 
                        padding: '0.5rem 1rem', borderRadius: '4px', letterSpacing: '1px', textTransform: 'uppercase',
                        boxShadow: '0 0 10px var(--color-primary-glow)'
                      }}>
                        INITIALIZE
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', padding: '4rem', textAlign: 'center', color: '#94a3b8', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <ShieldAlert size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
              <h3>{language === 'en' ? 'NO MODULES DETECTED MATCHING QUERY' : 'आपकी खोज से मेल खाने वाला कोई मॉड्यूल नहीं मिला।'}</h3>
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
};

export default Home;
