import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ShieldAlert, Fingerprint, Database, Cpu, Activity, GlobeLock, FolderKanban, Zap, Network, ChevronLeft, ChevronRight, Clock, CalendarDays, Mic, MicOff } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { modules } from '../data/modules';

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: 'rgba(15, 23, 42, 0.6)', padding: '10px 20px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)' }}>
        <Clock size={16} />
        <span style={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '1px' }}>
          {time.toLocaleTimeString('en-US', { hour12: false })}
        </span>
      </div>
      <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)' }}></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
        <CalendarDays size={16} />
        <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>
    </div>
  );
};

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // State for Filtering and Pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = language === 'en' ? 'en-US' : 'hi-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchTerm(transcript);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognition.start();
    } else {
      alert("Voice search is not supported in this browser.");
    }
  };
  const [selectedLetter, setSelectedLetter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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
    return `/module/${id}`;
  };

  const alphabets = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const sortedModules = [...modules].sort((a, b) => {
    const nameA = language === 'en' ? a.nameEn : a.nameHi;
    const nameB = language === 'en' ? b.nameEn : b.nameHi;
    return nameA.localeCompare(nameB);
  });

  const filteredModules = sortedModules.filter(mod => {
    const term = searchTerm.toLowerCase();
    const nameEn = mod.nameEn.toLowerCase();
    const nameHi = mod.nameHi.toLowerCase();
    
    // Search match
    const matchesSearch = nameEn.includes(term) || nameHi.includes(term);
    
    // Alphabet match
    const matchesAlphabet = selectedLetter === 'ALL' || nameEn.toUpperCase().startsWith(selectedLetter);
    
    return matchesSearch && matchesAlphabet;
  });

  const totalPages = Math.ceil(filteredModules.length / itemsPerPage);
  const paginatedModules = filteredModules.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedLetter]);

  return (
    <div style={{ position: 'relative', minHeight: '100%', padding: '1rem', maxWidth: '1600px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        
        {/* Hero Header Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.4) 100%)', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', backdropFilter: 'blur(20px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '10px', color: 'var(--color-primary)', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                  <ShieldAlert size={20} />
                </span>
                <span style={{ color: 'var(--color-primary)', fontSize: '1.1rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
                  NEURAL NETWORK SUBSYSTEMS
                </span>
              </div>
              <h1 className="neon-text" style={{ fontSize: '3.5rem', margin: '0 0 10px 0', letterSpacing: '1px', textShadow: '0 0 30px rgba(56, 189, 248, 0.5)', lineHeight: 1.1 }}>
                CENTRAL COMMAND
              </h1>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
                {language === 'en' ? 'Access point for 108 highly specialized AI-driven law enforcement modules.' : '108 अत्यधिक विशिष्ट एआई-संचालित कानून प्रवर्तन मॉड्यूल के लिए एक्सेस पॉइंट।'}
              </p>
            </div>
            
            <ClockWidget />
          </div>

          <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)', margin: '1rem 0' }}></div>

          <div style={{ position: 'relative', maxWidth: '600px' }}>
            <Search size={22} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-primary)' }} />
            <input
              type="text"
              placeholder={language === 'en' ? "Search 108 AI Modules..." : "108 एआई मॉड्यूल खोजें..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1.2rem 1.2rem 1.2rem 3.8rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.3)',
                color: '#fff',
                fontSize: '1.1rem',
                outline: 'none',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.3), inset 0 2px 4px rgba(0,0,0,0.5)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.5)'; }}
            />
          </div>
        </div>

        {/* Alphabet Filter */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2rem', scrollbarWidth: 'thin', WebkitOverflowScrolling: 'touch' }}>
          {alphabets.map(letter => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              style={{
                background: selectedLetter === letter ? 'var(--color-primary)' : 'rgba(15, 23, 42, 0.6)',
                color: selectedLetter === letter ? '#000' : '#94a3b8',
                border: `1px solid ${selectedLetter === letter ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)'}`,
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: selectedLetter === letter ? '0 0 15px var(--color-primary-glow)' : 'none',
                minWidth: letter === 'ALL' ? '60px' : '40px'
              }}
              onMouseOver={(e) => { if (selectedLetter !== letter) e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              onMouseOut={(e) => { if (selectedLetter !== letter) e.currentTarget.style.background = 'rgba(15, 23, 42, 0.6)' }}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Info Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>Showing {filteredModules.length} Modules</span>
          {totalPages > 1 && <span>Page {currentPage} of {totalPages}</span>}
        </div>

        {/* Modules Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          minHeight: '400px'
        }}>
          {paginatedModules.length > 0 ? (
            paginatedModules.map((mod, index) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
              >
                <Link to={getDirectRoute(mod.id)} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                  <div
                    style={{
                      padding: '2rem', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column',
                      background: 'linear-gradient(145deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '20px',
                      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.2)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                    {/* Glowing background accent */}
                    <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '120px', height: '120px', background: 'var(--color-primary-glow)', borderRadius: '50%', filter: 'blur(50px)', opacity: 0.6, zIndex: 0 }}></div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem', zIndex: 1 }}>
                      <div style={{
                        width: '56px', height: '56px',
                        borderRadius: '16px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--color-primary)',
                        marginRight: '16px',
                        border: '1px solid rgba(56, 189, 248, 0.2)',
                        boxShadow: 'inset 0 0 15px rgba(56, 189, 248, 0.1)'
                      }}>
                        {getIcon(mod.id)}
                      </div>
                      <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#fff', flex: 1, lineHeight: '1.4', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        {language === 'en' ? mod.nameEn : mod.nameHi}
                      </h3>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.2rem', zIndex: 1 }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '6px' }}>
                          AGENTS ONLINE
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
                          <span style={{ fontSize: '1.2rem', color: '#fff', fontWeight: '800' }}>
                            {mod.subTopicsEn.length}
                          </span>
                        </div>
                      </div>
                      <div style={{
                        fontSize: '0.75rem', color: '#000', fontWeight: '800', background: 'var(--color-primary)',
                        padding: '0.6rem 1.2rem', borderRadius: '8px', letterSpacing: '1px', textTransform: 'uppercase',
                        boxShadow: '0 0 15px rgba(56, 189, 248, 0.4)',
                        display: 'flex', alignItems: 'center', gap: '6px'
                      }}>
                        ACCESS <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', padding: '5rem', textAlign: 'center', color: '#94a3b8', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '24px', border: '1px dashed rgba(255,255,255,0.1)' }}>
              <Search size={48} color="rgba(148, 163, 184, 0.5)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#fff' }}>{language === 'en' ? 'NO MODULES DETECTED' : 'कोई मॉड्यूल नहीं मिला'}</h3>
              <p style={{ marginTop: '10px' }}>Try adjusting your search query or alphabet filter.</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', paddingBottom: '3rem' }}>
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              style={{
                padding: '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px',
                background: currentPage === 1 ? 'transparent' : 'rgba(15, 23, 42, 0.8)',
                color: currentPage === 1 ? '#475569' : '#fff',
                border: `1px solid ${currentPage === 1 ? '#334155' : 'rgba(255,255,255,0.1)'}`,
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontWeight: 600
              }}
            >
              <ChevronLeft size={18} /> Previous
            </button>
            
            <div style={{ display: 'flex', gap: '5px' }}>
              {[...Array(totalPages)].map((_, i) => {
                // Show limited page numbers for cleaner UI
                if (i === 0 || i === totalPages - 1 || (i >= currentPage - 2 && i <= currentPage)) {
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      style={{
                        width: '40px', height: '40px', borderRadius: '10px',
                        background: currentPage === i + 1 ? 'var(--color-primary)' : 'rgba(15, 23, 42, 0.8)',
                        color: currentPage === i + 1 ? '#000' : '#fff',
                        border: `1px solid ${currentPage === i + 1 ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)'}`,
                        cursor: 'pointer', fontWeight: 800, transition: 'all 0.2s'
                      }}
                    >
                      {i + 1}
                    </button>
                  );
                }
                if (i === currentPage - 3 || i === currentPage + 1) return <span key={i} style={{ padding: '0 5px', color: '#94a3b8', alignSelf: 'end' }}>...</span>;
                return null;
              })}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: '10px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px',
                background: currentPage === totalPages ? 'transparent' : 'rgba(15, 23, 42, 0.8)',
                color: currentPage === totalPages ? '#475569' : '#fff',
                border: `1px solid ${currentPage === totalPages ? '#334155' : 'rgba(255,255,255,0.1)'}`,
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontWeight: 600
              }}
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
};

export default Home;
