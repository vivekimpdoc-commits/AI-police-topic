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
        minHeight: '320px',
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
          // Dynamic Description Generator for 1000+ Topics
          const generateDescription = (modName, topicName) => {
            const isHindi = language === 'hi';
            const m = modName.toUpperCase();
            
            if (isHindi) {
              if (m.includes('मानव संसाधन') || m.includes('HRMS')) return `कृत्रिम बुद्धिमत्ता (AI) के माध्यम से पुलिस कर्मियों का प्रबंधन। ${topicName} के लिए रीयल-टाइम ट्रैकिंग।`;
              if (m.includes('कमांड')) return `${topicName} के लिए उन्नत AI एल्गोरिदम। सिस्टम की निगरानी और सुरक्षित कॉन्फ़िगरेशन।`;
              if (m.includes('नागरिक')) return `नागरिकों के लिए बेहतर सुविधाएँ। ${topicName} के माध्यम से त्वरित और पारदर्शी सेवाएं।`;
              if (m.includes('शिकायत') || m.includes('एफआईआर')) return `${topicName} के लिए स्वचालित प्रणाली। त्वरित समाधान और AI-आधारित विश्लेषण।`;
              if (m.includes('यातायात')) return `${topicName} के जरिए स्मार्ट ट्रैफिक मैनेजमेंट और एआई आधारित चालान सिस्टम।`;
              return `${topicName} के लिए AI-संचालित मॉड्यूल। रीयल-टाइम डेटा मॉनिटरिंग और उन्नत मशीन लर्निंग का उपयोग करके ${modName} को सशक्त बनाना।`;
            } else {
              if (m.includes('HUMAN RESOURCE') || m.includes('HRMS')) return `Managing police personnel through Artificial Intelligence. Real-time monitoring of service records and duty allocation for ${topicName}.`;
              if (m.includes('COMMAND') || m.includes('GOVERNANCE')) return `Executing advanced AI algorithms for ${topicName}. Ensuring real-time monitoring, telemetry analysis, and secure configurations.`;
              if (m.includes('CITIZEN')) return `Enhancing public service delivery. ${topicName} provides transparent, fast, and AI-driven interfaces for citizens.`;
              if (m.includes('COMPLAINT') || m.includes('FIR')) return `Automated grievance redressal via ${topicName}. Featuring NLP for instant FIR classification and analytics.`;
              if (m.includes('INTELLIGENCE') || m.includes('INVESTIGATION') || m.includes('CRIME')) return `Powering investigative operations with ${topicName}. Utilizing deep learning to cross-reference databases and generate actionable intelligence.`;
              if (m.includes('CYBER')) return `Securing digital infrastructure via ${topicName}. Continuous threat hunting, anomaly detection, and automated mitigation.`;
              if (m.includes('TRAFFIC')) return `Optimizing city mobility with ${topicName}. Smart traffic routing, automated challan generation, and predictive analytics.`;
              if (m.includes('FORENSIC') || m.includes('EVIDENCE')) return `Digitizing evidence management through ${topicName}. Immutable records and AI-assisted forensic analysis.`;
              if (m.includes('FINANCE') || m.includes('PROCUREMENT') || m.includes('AUDIT')) return `Streamlining financial operations using ${topicName}. AI-driven budget forecasting, automated auditing, and fraud detection.`;
              
              // Default English
              return `Enterprise AI module for ${topicName}. Leveraging machine learning and real-time data analytics to optimize workflows within the ${modName} division.`;
            }
          };

          const desc = generateDescription(moduleName, topic);

          return (
            <motion.div key={idx} variants={itemVars} style={{ display: 'flex', justifyContent: 'center' }}>
              <CyberCard
                topic={topic}
                description={desc}
                onClick={() => {
                  const upperTopic = topic.toUpperCase();
                  if (moduleId === 'module-33' || moduleId === 'module-85' || upperTopic.includes('FINANCE') || topic.includes('वित्त')) {
                    navigate('/finance');
                  } else if (moduleId === 'module-32' || upperTopic.includes('HRMS') || topic.includes('एचआरएमएस')) {
                    navigate('/hrms');
                  } else if (upperTopic.includes('PROCUREMENT') || topic.includes('खरीद')) {
                    navigate('/procurement');
                  } else if (upperTopic.includes('AUDIT') || topic.includes('ऑडिट')) {
                    navigate('/audit');
                  } else if (upperTopic.includes('DOCUMENT') || upperTopic.includes('DMS') || topic.includes('दस्तावेज़')) {
                    navigate('/document');
                  } else if (upperTopic.includes('MULTI-AGENT') || upperTopic.includes('MULTI AGENT')) {
                    navigate('/multi-agent');
                  } else if (upperTopic.includes('KNOWLEDGE GRAPH') || upperTopic.includes('KNOWLEDGE')) {
                    navigate('/knowledge-graph');
                  } else if (upperTopic.includes('DECISION SUPPORT') || upperTopic.includes('DECISION')) {
                    navigate('/decision-support');
                  } else if (upperTopic.includes('DIGITAL TWIN')) {
                    navigate('/digital-twin');
                  } else if (upperTopic.includes('INVESTIGATION') || upperTopic.includes('AUTONOMOUS')) {
                    navigate('/investigation-assistant');
                  } else if (upperTopic.includes('COPILOT') || upperTopic.includes('CONVERSATIONAL')) {
                    navigate('/copilot');
                  } else if (upperTopic.includes('MULTIMODAL')) {
                    navigate('/multimodal');
                  } else if (upperTopic.includes('MODEL MANAGEMENT')) {
                    navigate('/model-management');
                  } else if (upperTopic.includes('DATA LAKE') || upperTopic.includes('BIG DATA')) {
                    navigate('/data-lake');
                  } else if (upperTopic.includes('RESEARCH') || upperTopic.includes('INNOVATION')) {
                    navigate('/research-lab');
                  } else if (moduleId === 'module-07') {
                    navigate('/citizen-services');
                  } else if (moduleId === 'module-08') {
                    navigate('/complaint-fir');
                  } else if (moduleId === 'module-10') {
                    navigate('/intelligence');
                  } else if (moduleId === 'module-11') {
                    navigate('/predictive-policing');
                  } else if (moduleId === 'module-13') {
                    navigate('/cyber-crime');
                  } else if (moduleId === 'module-14') {
                    navigate('/digital-evidence');
                  } else if (moduleId === 'module-15') {
                    navigate('/missing-persons');
                  } else if (moduleId === 'module-16') {
                    navigate('/women-child-safety');
                  } else if (moduleId === 'module-17') {
                    navigate('/traffic');
                  } else if (moduleId === 'module-18') {
                    navigate('/law-order');
                  } else if (moduleId === 'module-19') {
                    navigate('/legal-court');
                  } else if (moduleId === 'module-20') {
                    navigate('/training-academy');
                  } else if (moduleId === 'module-21') {
                    navigate('/logistics');
                  } else if (moduleId === 'module-22') {
                    navigate('/smart-city');
                  } else if (moduleId === 'module-23') {
                    navigate('/communication');
                  } else if (moduleId === 'module-24') {
                    navigate('/border-security');
                  } else if (moduleId === 'module-25') {
                    navigate('/prison-management');
                  } else if (moduleId === 'module-26') {
                    navigate('/anti-terror');
                  } else if (moduleId === 'module-27') {
                    navigate('/financial-crime');
                  } else if (moduleId === 'module-28') {
                    navigate('/narcotics');
                  } else if (moduleId === 'module-29') {
                    navigate('/police-station');
                  } else if (moduleId === 'module-30') {
                    navigate('/fleet-logistics');
                  } else if (moduleId === 'module-31') {
                    navigate('/radio-comms');
                  } else if (moduleId === 'module-34') {
                    navigate('/public-safety');
                  } else if (moduleId === 'module-35') {
                    navigate('/emerging-tech');
                  } else if (moduleId === 'module-36') {
                    navigate('/tech-services');
                  } else if (moduleId === 'module-37') {
                    navigate('/infrastructure');
                  } else if (moduleId === 'module-38') {
                    navigate('/internal-security');
                  } else if (moduleId === 'module-39') {
                    navigate('/armoury');
                  } else if (moduleId === 'module-40') {
                    navigate('/legal-process');
                  } else if (moduleId === 'module-06') {
                    navigate('/command-center');
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
