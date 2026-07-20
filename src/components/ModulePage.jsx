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

      <div style={{ position: 'relative', zIndex: 1, marginBottom: '3rem', borderBottom: '1px solid rgba(6, 182, 212, 0.2)', paddingBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
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
              // NEURAL NETWORK INTERFACE ACTIVE — SELECT A TOPIC BELOW
            </p>
          </div>
        </div>

        {/* Full AI Dashboard Button — for modules with dedicated detailed pages */}
        {(() => {
          const dashMap = {
            'module-32': '/hrms', 'module-33': '/finance', 'module-85': '/police-finance',
            'module-71': '/police-procurement', 'module-72': '/police-laboratories', 'module-73': '/police-library',
            'module-74': '/police-intelligence', 'module-75': '/disaster-emergency', 'module-76': '/vip-protocol',
            'module-77': '/specialized-registers', 'module-78': '/internal-admin', 'module-79': '/police-welfare-unique',
            'module-80': '/scientific-technical', 'module-81': '/planning-strategy', 'module-82': '/international-relations',
            'module-83': '/police-legal-process-2', 'module-84': '/police-buildings', 'module-99': '/audit',
            'module-86': '/police-environment', 'module-87': '/police-technology', 'module-88': '/police-administration',
            'module-89': '/police-sports', 'module-90': '/police-protocol',
            'module-91': '/police-research-91', 'module-92': '/police-knowledge-92', 'module-93': '/police-telecom-93',
            'module-94': '/police-documentation-94', 'module-95': '/police-infrastructure-95',
            'module-96': '/police-utilities-96', 'module-97': '/police-hospitality-97', 'module-98': '/police-media-98',
            'module-100': '/police-innovation-100',
            'module-52': '/document', 'module-06': '/command-center', 'module-07': '/citizen-services',
            'module-08': '/complaint-fir', 'module-10': '/intelligence', 'module-11': '/predictive-policing',
            'module-13': '/cyber-crime', 'module-14': '/digital-evidence', 'module-15': '/missing-persons',
            'module-16': '/women-child-safety', 'module-17': '/traffic', 'module-18': '/law-order',
            'module-19': '/legal-court', 'module-20': '/training-academy', 'module-21': '/logistics',
            'module-22': '/smart-city', 'module-23': '/communication', 'module-29': '/police-station',
            'module-30': '/fleet-logistics', 'module-31': '/radio-comms', 'module-34': '/public-safety',
            'module-35': '/emerging-tech', 'module-36': '/tech-services', 'module-37': '/infrastructure',
            'module-38': '/internal-security', 'module-39': '/armoury', 'module-40': '/legal-process',
            'module-41': '/community-policing', 'module-42': '/intelligence-support', 'module-43': '/disaster-logistics',
            'module-44': '/police-admin', 'module-45': '/training-quality', 'module-46': '/international-coordination',
            'module-47': '/research-innovation', 'module-48': '/police-hq', 'module-49': '/correspondence',
            'module-50': '/police-inspection', 'module-51': '/police-lines', 'module-53': '/police-vehicles',
            'module-54': '/comms-docs', 'module-55': '/police-welfare', 'module-56': '/tech-admin',
            'module-57': '/strategic-planning', 'module-58': '/licensing-regulation', 'module-59': '/verification-services',
            'module-60': '/election-management', 'module-61': '/prisoner-custody', 'module-62': '/border-check-post',
            'module-63': '/business-compliance', 'module-64': '/special-operations', 'module-65': '/documentation-compliance',
            'module-66': '/public-interface', 'module-67': '/strategic-admin', 'module-68': '/recruitment-ecosystem',
            'module-69': '/police-promotions', 'module-70': '/police-transfers'
          };
          
          if (dashMap[moduleId]) {
            return (
              <button
                onClick={() => navigate(dashMap[moduleId])}
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))',
                  border: '1px solid rgba(6, 182, 212, 0.6)',
                  color: '#06b6d4',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(6,182,212,0.4), rgba(139,92,246,0.4))'; e.currentTarget.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.6)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))'; e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.3)'; }}
              >
                <Zap size={18} /> OPEN FULL AI DASHBOARD
              </button>
            );
          }
          return null;
        })()}
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
                  const dashMap = {
                    'module-32': '/hrms', 'module-33': '/finance', 'module-85': '/police-finance',
                    'module-71': '/police-procurement', 'module-72': '/police-laboratories', 'module-73': '/police-library',
                    'module-74': '/police-intelligence', 'module-75': '/disaster-emergency', 'module-76': '/vip-protocol',
                    'module-77': '/specialized-registers', 'module-78': '/internal-admin', 'module-79': '/police-welfare-unique',
                    'module-80': '/scientific-technical', 'module-81': '/planning-strategy', 'module-82': '/international-relations',
                    'module-83': '/police-legal-process-2', 'module-84': '/police-buildings', 'module-99': '/audit',
                    'module-86': '/police-environment', 'module-87': '/police-technology', 'module-88': '/police-administration',
                    'module-89': '/police-sports', 'module-90': '/police-protocol',
                    'module-91': '/police-research-91', 'module-92': '/police-knowledge-92', 'module-93': '/police-telecom-93',
                    'module-94': '/police-documentation-94', 'module-95': '/police-infrastructure-95',
                    'module-96': '/police-utilities-96', 'module-97': '/police-hospitality-97', 'module-98': '/police-media-98',
                    'module-100': '/police-innovation-100',
                    'module-52': '/document', 'module-06': '/command-center', 'module-07': '/citizen-services',
                    'module-08': '/complaint-fir', 'module-10': '/intelligence', 'module-11': '/predictive-policing',
                    'module-13': '/cyber-crime', 'module-14': '/digital-evidence', 'module-15': '/missing-persons',
                    'module-16': '/women-child-safety', 'module-17': '/traffic', 'module-18': '/law-order',
                    'module-19': '/legal-court', 'module-20': '/training-academy', 'module-21': '/logistics',
                    'module-22': '/smart-city', 'module-23': '/communication', 'module-29': '/police-station',
                    'module-30': '/fleet-logistics', 'module-31': '/radio-comms', 'module-34': '/public-safety',
                    'module-35': '/emerging-tech', 'module-36': '/tech-services', 'module-37': '/infrastructure',
                    'module-38': '/internal-security', 'module-39': '/armoury', 'module-40': '/legal-process',
                    'module-41': '/community-policing', 'module-42': '/intelligence-support', 'module-43': '/disaster-logistics',
                    'module-44': '/police-admin', 'module-45': '/training-quality', 'module-46': '/international-coordination',
                    'module-47': '/research-innovation', 'module-48': '/police-hq', 'module-49': '/correspondence',
                    'module-50': '/police-inspection', 'module-51': '/police-lines', 'module-53': '/police-vehicles',
                    'module-54': '/comms-docs', 'module-55': '/police-welfare', 'module-56': '/tech-admin',
                    'module-57': '/strategic-planning', 'module-58': '/licensing-regulation', 'module-59': '/verification-services',
                    'module-60': '/election-management', 'module-61': '/prisoner-custody', 'module-62': '/border-check-post',
                    'module-63': '/business-compliance', 'module-64': '/special-operations', 'module-65': '/documentation-compliance',
                    'module-66': '/public-interface', 'module-67': '/strategic-admin', 'module-68': '/recruitment-ecosystem',
                    'module-69': '/police-promotions', 'module-70': '/police-transfers'
                  };

                  const topicMap = {
                    'AI Multi-Agent Platform': '/multi-agent',
                    'AI Knowledge Graph': '/knowledge-graph',
                    'AI Decision Support System': '/decision-support',
                    'AI Digital Twin of Police Operations': '/digital-twin',
                    'AI Autonomous Investigation Assistant': '/investigation-assistant',
                    'AI Conversational Copilot': '/copilot',
                    'AI Multimodal Intelligence (Voice + Image + Video + Text)': '/multimodal',
                    'AI Model Management Platform': '/model-management',
                    'AI Data Lake & Analytics': '/data-lake',
                    'AI Research Lab & Sandbox': '/research-lab',
                    'एआई एचआरएमएस (HRMS)': '/hrms',
                    'एआई वित्त और बजट': '/finance',
                    'एआई खरीद (Procurement)': '/procurement',
                    'एआई ऑडिट प्रबंधन': '/audit',
                    'एआई दस्तावेज़ प्रबंधन': '/document'
                  };

                  if (topicMap[topic]) {
                    navigate(topicMap[topic]);
                  } else if (dashMap[moduleId]) {
                    navigate(dashMap[moduleId]);
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
