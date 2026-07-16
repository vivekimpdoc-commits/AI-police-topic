import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '../data/modules';
import { motion } from 'framer-motion';
import { Terminal, Settings, Zap, ArrowLeft, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

// A premium enterprise AI card component
const CyberCard = ({ topic, description, onClick }) => {
  const [load, setLoad] = useState(Math.floor(Math.random() * 50) + 20);

  // Randomize load every few seconds for live feel
  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(Math.floor(Math.random() * 80) + 15);
    }, 2000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5, boxShadow: '0 15px 35px rgba(6, 182, 212, 0.4)' }}
      style={{
        width: '100%',
        maxWidth: '420px',
        height: '300px',
        background: 'rgba(15, 23, 42, 0.6)', // Police Blue / Navy Glass
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        borderRadius: '18px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#f8fafc',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Background Particle / Glow */}
      <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>

      <div style={{ zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          <Cpu size={24} color="#06b6d4" style={{ marginRight: '12px' }} />
          <h3 style={{ margin: 0, fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#fff' }}>{topic}</h3>
        </div>
        
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6' }}>
          {description}
        </p>
      </div>
      
      <div style={{ zIndex: 1, marginTop: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.8rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#06b6d4', letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>
            <Zap size={12} style={{ marginRight: '5px' }} /> SYSTEM LOAD
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>{load}%</span>
        </div>
        
        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden', marginBottom: '1.5rem' }}>
          <motion.div 
            animate={{ width: `${load}%` }} 
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ height: '100%', background: '#06b6d4', boxShadow: '0 0 10px #06b6d4' }}
          ></motion.div>
        </div>

        <button 
          onClick={onClick}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.5)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          style={{ 
            background: 'transparent', border: '1px solid #06b6d4', 
            color: '#06b6d4', padding: '0.6rem 1.2rem', borderRadius: '8px',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px',
            transition: 'all 0.3s', width: '100%', fontWeight: 'bold'
          }}
        >
          <Settings size={14} /> CONFIGURE
        </button>
      </div>
    </motion.div>
  );
};

const ModulePage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];
  const mod = modules.find((m) => m.id === moduleId);

  if (!mod) {
    return <div style={{ padding: '2rem', color: '#fff' }}>{t.error404}</div>;
  }

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } }
  };

  const moduleName = language === 'en' ? mod.nameEn : mod.nameHi;
  const subTopics = language === 'en' ? mod.subTopicsEn : mod.subTopicsHi;

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'transparent', // Uses global index.css background
      color: '#f8fafc',
      padding: '2rem',
      position: 'relative',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Dark Cyber Background Overlay */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.1), transparent 50%)',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, marginBottom: '3rem', borderBottom: '1px solid rgba(6, 182, 212, 0.2)', paddingBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button 
            onClick={() => navigate(-1)}
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              color: '#06b6d4',
              padding: '0.8rem',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = '#06b6d4'; e.currentTarget.style.color = '#000'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)'; e.currentTarget.style.color = '#06b6d4'; }}
          >
            <ArrowLeft size={20} />
          </button>
          
          <div>
            <h2 style={{ fontSize: '2.5rem', margin: 0, letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', textShadow: '0 0 15px rgba(6, 182, 212, 0.5)' }}>
              {moduleName}
            </h2>
            <p style={{ color: '#06b6d4', marginTop: '0.5rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              // NEURAL NETWORK INTERFACE ACTIVE
            </p>
          </div>
        </div>
      </div>

      <motion.div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2.5rem',
          position: 'relative',
          zIndex: 1,
          maxWidth: '1600px',
          margin: '0 auto'
        }}
        variants={containerVars}
        initial="hidden"
        animate="show"
      >
        {subTopics.map((topic, idx) => {
          // Construct a dynamic description
          let desc = `${t.executingAlgos} ${topic}. Real-time monitoring, telemetry analysis, and secure configurations active for ${moduleName} subsystems.`;
          
          if (moduleName.toUpperCase().includes('HUMAN RESOURCE') || moduleName.toUpperCase().includes('मानव संसाधन')) {
            desc = `Managing police personnel through Artificial Intelligence. Real-time monitoring of service records, attendance, duty allocation, transfers, promotions, training, performance, workforce analytics, and HR intelligence for ${topic}.`;
          }
          
          return (
            <motion.div key={idx} variants={itemVars} style={{ display: 'flex', justifyContent: 'center' }}>
              <CyberCard 
                topic={topic}
                description={desc}
                onClick={() => {
                  if (topic.includes('FINANCE & BUDGET') || topic.includes('वित्त और बजट')) {
                    navigate('/finance');
                  } else if (topic.includes('AI HRMS') || topic.includes('एआई एचआरएमएस')) {
                    navigate('/hrms');
                  } else {
                    navigate(`/topic/${encodeURIComponent(topic)}`);
                  }
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ModulePage;
