import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '../data/modules';
import { motion } from 'framer-motion';
import { Terminal, Settings, Zap, ArrowLeft, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

// A premium enterprise AI card component
const CyberCard = ({ topic, description, onClick, totalCount }) => {
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
        
        {/* AI Topics Count */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#06b6d4', letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center' }}>
            <Terminal size={12} style={{ marginRight: '5px' }} /> AI TOPICS
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>{totalCount}</span>
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
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
              <p style={{ color: '#06b6d4', margin: 0, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                // NEURAL NETWORK INTERFACE ACTIVE — SELECT A TOPIC BELOW
              </p>
              <span style={{ background: 'rgba(6, 182, 212, 0.2)', color: '#06b6d4', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid rgba(6, 182, 212, 0.5)' }}>
                TOTAL AI TOPICS: {subTopics.length}
              </span>
            </div>
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
          const getTopicCount = (topicName) => {
            const upper = topicName.toUpperCase();
            if (upper.includes('HRMS')) return 20;
            if (upper.includes('FINANCE') || upper.includes('BUDGET')) return 22;
            if (upper.includes('PROCUREMENT')) return 19;
            if (upper.includes('AUDIT')) return 17;
            if (upper.includes('DOCUMENT')) return 20;
            
            let hash = 0;
            for (let i = 0; i < topicName.length; i++) {
              hash = topicName.charCodeAt(i) + ((hash << 5) - hash);
            }
            return Math.abs(hash) % 25 + 12;
          };

          const desc = generateDescription(moduleName, topic);
          const cardCount = getTopicCount(topic);

          return (
            <motion.div key={idx} variants={itemVars} style={{ display: 'flex', justifyContent: 'center' }}>
              <CyberCard
                topic={topic}
                description={desc}
                totalCount={cardCount}
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
                      // Module 50: Police Inspection
                      'AI Annual Inspection Planner': '/annual-inspection-planner',
                      'AI Surprise Inspection System': '/surprise-inspection-system',
                      'AI Police Line Inspection': '/police-line-inspection',
                      'AI Station Cleanliness Audit': '/station-cleanliness-audit',
                      'AI Vehicle Inspection Register': '/vehicle-inspection-register',
                      'AI Equipment Inspection': '/equipment-inspection',
                      'AI Record Inspection': '/record-inspection',
                      'AI Inspection Deficiency Tracker': '/inspection-deficiency-tracker',
                      'AI Compliance Verification': '/compliance-verification',
                      'AI Inspection Scoring Engine': '/inspection-scoring-engine',
                      // Module 100: Police Innovation
                      'AI Idea Submission Portal': '/idea-submission-portal',
                      'AI Hackathon Management': '/hackathon-management',
                      'AI Pilot Deployment Tracker': '/pilot-deployment-tracker',
                      'AI Innovation Scorecard': '/innovation-scorecard',
                      'AI Technology Watch Dashboard': '/technology-watch-dashboard',
                      'AI Patent Monitoring': '/patent-monitoring',
                      'AI Startup Partnership Register': '/startup-partnership-register',
                      'AI Sandbox Environment Manager': '/sandbox-environment-manager',
                      'AI Experimental Policy Register': '/experimental-policy-register',
                      'AI Innovation Adoption Analytics': '/innovation-adoption-analytics',
                      // Module 95: Police Infrastructure Engineering
                      'AI Building Structural Health Index': '/building-structural-health-index',
                      'AI Earthquake Safety Inspection': '/earthquake-safety-inspection',
                      'AI Fire Exit Readiness Monitor': '/fire-exit-readiness-monitor',
                      'AI Rain Leakage Monitoring': '/rain-leakage-monitoring',
                      'AI Building Renovation Planner': '/building-renovation-planner',
                      'AI Smart Water Meter Dashboard': '/smart-water-meter-dashboard',
                      'AI Energy Efficiency Audit': '/energy-efficiency-audit',
                      'AI HVAC Performance Monitoring': '/hvac-performance-monitoring',
                      'AI Generator Fuel Consumption Analytics': '/generator-fuel-consumption-analytics',
                      'AI Lift Breakdown Prediction': '/lift-breakdown-prediction',
                      // Module 37: Police Infrastructure
                      'AI Police Building Maintenance': '/police-building-maintenance',
                      'AI Police Barrack Management': '/police-barrack-management',
                      'AI Police Guest House Management': '/police-guest-house-management',
                      'AI Police Campus Security': '/police-campus-security',
                      'AI Smart Police Headquarters': '/smart-police-headquarters',
                      'AI Police Station Energy Monitoring': '/police-station-energy-monitoring',
                      'AI Water Supply Monitoring': '/water-supply-monitoring',
                      'AI Electrical Asset Monitoring': '/electrical-asset-monitoring',
                      'AI Generator Monitoring': '/generator-monitoring',
                      'AI Fire Safety Compliance': '/fire-safety-compliance',
                      // Module 102: Police Identification & Authentication
                      'AI Police Identity Lifecycle Management': '/police-identity-lifecycle-management',
                      'AI Smart Access Pass Management': '/smart-access-pass-management',
                      'AI Biometric Device Administration': '/biometric-device-administration',
                      'AI Officer Digital Identity Wallet': '/officer-digital-identity-wallet',
                      'AI Secure Visitor Identity Exchange': '/secure-visitor-identity-exchange',
                      'AI Temporary Duty Pass Generator': '/temporary-duty-pass-generator',
                      'AI Lost ID Card Recovery Workflow': '/lost-id-card-recovery-workflow',
                      'AI Multi-Factor Access Compliance': '/multi-factor-access-compliance',
                      'AI Access Privilege Review System': '/access-privilege-review-system',
                      'AI Identity Revocation Manager': '/identity-revocation-manager',
                      // Module 97: Police Hospitality
                      'AI VIP Lounge Management': '/vip-lounge-management',
                      'AI Conference Hospitality Planner': '/conference-hospitality-planner',
                      'AI Guest Refreshment Inventory': '/guest-refreshment-inventory',
                      'AI Official Catering Coordination': '/official-catering-coordination',
                      'AI Government Guest Reception': '/government-guest-reception',
                      'AI Accommodation Preparation Checklist': '/accommodation-preparation-checklist',
                      'AI Protocol Dining Planner': '/protocol-dining-planner',
                      'AI Kitchen Hygiene Audit': '/kitchen-hygiene-audit',
                      'AI Food Safety Compliance': '/food-safety-compliance',
                      'AI Hospitality Feedback Dashboard': '/hospitality-feedback-dashboard',
                      // Module 48: Police Headquarters Management
                      'AI DGP Secretariat Management': '/dgp-secretariat-management',
                      'AI ADG Office Management': '/adg-office-management',
                      'AI IG Office Workflow': '/ig-office-workflow',
                      'AI DIG Office Dashboard': '/dig-office-dashboard',
                      'AI SP Office Automation': '/sp-office-automation',
                      'AI Police Headquarters File Room': '/police-headquarters-file-room',
                      'AI Headquarters Visitor Pass': '/headquarters-visitor-pass',
                      'AI Headquarters Meeting Scheduler': '/headquarters-meeting-scheduler',
                      'AI Headquarters Approval Workflow': '/headquarters-approval-workflow',
                      'AI Headquarters Circular Monitoring': '/headquarters-circular-monitoring',
                      // Module 85: Police Finance
                      'AI Salary Projection': '/salary-projection',
                      'AI Overtime Calculator': '/overtime-calculator',
                      'AI Uniform Allowance Management': '/uniform-allowance-management',
                      'AI Fuel Budget Planner': '/fuel-budget-planner',
                      'AI Building Maintenance Budget': '/building-maintenance-budget',
                      'AI Electricity Bill Analytics': '/electricity-bill-analytics',
                      'AI Water Bill Analytics': '/water-bill-analytics',
                      'AI Telephone Expense Analytics': '/telephone-expense-analytics',
                      'AI Internet Expense Monitoring': '/internet-expense-monitoring',
                      'AI Cost Center Dashboard': '/cost-center-dashboard',
                      // Module 94: Police Documentation
                      'AI Government Order Repository': '/government-order-repository',
                      'AI Circular Impact Analyzer': '/circular-impact-analyzer',
                      'AI Standing Order Management': '/standing-order-management',
                      'AI Office Note Sheet Assistant': '/office-note-sheet-assistant',
                      'AI Dispatch Envelope Tracking': '/dispatch-envelope-tracking',
                      'AI Gazette Notification Archive': '/gazette-notification-archive',
                      'AI Record Classification Engine': '/record-classification-engine',
                      'AI Legacy Record Conversion Tracker': '/legacy-record-conversion-tracker',
                      'AI Microfilm Digitization Manager': '/microfilm-digitization-manager',
                      'AI Official Record Authentication': '/official-record-authentication',
                      // Module 49: Police Correspondence
                      'AI Dak Management': '/dak-management',
                      'AI eOffice Integration': '/e-office-integration',
                      'AI Dispatch Register': '/dispatch-register',
                      'AI Receipt Register': '/receipt-register',
                      'AI Government Communication Tracker': '/government-communication-tracker',
                      'AI Confidential Letter Register': '/confidential-letter-register',
                      'AI Office Memorandum Management': '/office-memorandum-management',
                      'AI Reminder Management': '/reminder-management',
                      'AI Pending Letter Dashboard': '/pending-letter-dashboard',
                      'AI Correspondence Analytics': '/correspondence-analytics',
                      // Module 84: Police Buildings
                      'AI Building Structural Inspection': '/building-structural-inspection',
                      'AI Roof Maintenance Planner': '/roof-maintenance-planner',
                      'AI Water Tank Cleaning Schedule': '/water-tank-cleaning-schedule',
                      'AI Lift Maintenance Monitor': '/lift-maintenance-monitor',
                      'AI Air Conditioner Maintenance': '/air-conditioner-maintenance',
                      'AI CCTV Pole Maintenance': '/cctv-pole-maintenance',
                      'AI Boundary Wall Inspection': '/boundary-wall-inspection',
                      'AI Electrical Safety Inspection': '/electrical-safety-inspection',
                      'AI Drainage Inspection': '/drainage-inspection',
                      'AI Solar Power Monitoring': '/solar-power-monitoring',
                      // Module 44: Police Administration
                      'AI Office Order Management': '/office-order-management',
                      'AI Circular Distribution System': '/circular-distribution',
                      'AI Meeting Agenda Generator': '/meeting-agenda-generator',
                      'AI Meeting Attendance Tracker': '/meeting-attendance-tracker',
                      'AI Action Taken Report (ATR) Manager': '/action-taken-report-manager',
                      'AI File Movement Tracker': '/file-movement-tracker',
                      'AI Government Letter Tracking': '/government-letter-tracking',
                      'AI Record Retention Scheduler': '/record-retention-scheduler',
                      'AI RTI Assistance System': '/rti-assistance-system',
                      'AI Office Productivity Dashboard': '/office-productivity-dashboard',
                      // Module 88: Police Administration
                      'AI Office Shift Calendar': '/office-shift-calendar',
                      'AI Holiday Duty Rotation': '/holiday-duty-rotation',
                      'AI Official Diary Management': '/official-diary-management',
                      'AI Digital Attendance Board': '/digital-attendance-board',
                      'AI Office Seating Plan': '/office-seating-plan',
                      'AI Department Contact Directory': '/department-contact-directory',
                      'AI Internal Telephone Directory': '/internal-telephone-directory',
                      'AI Official Notice Automation': '/official-notice-automation',
                      'AI Office Workflow Designer': '/office-workflow-designer',
                      'AI Office Process Automation': '/office-process-automation',
                      // Module 81: Planning & Strategy
                      'AI Annual Policing Calendar': '/annual-policing-calendar',
                      'AI Resource Readiness Score': '/resource-readiness-score',
                      'AI District Preparedness Audit': '/district-preparedness-audit',
                      'AI Strategic Initiative Tracker': '/strategic-initiative-tracker',
                      'AI Mission Objective Dashboard': '/mission-objective-dashboard',
                      'AI Capability Gap Analysis': '/capability-gap-analysis',
                      'AI Long-Term Equipment Planning': '/long-term-equipment-planning',
                      'AI Police Innovation Index': '/police-innovation-index',
                      'AI Organizational Benchmarking': '/organizational-benchmarking',
                      'AI Strategic Review Repository': '/strategic-review-repository',
                      // Module 15: Missing Persons & Identification
                      'AI Missing Person': '/missing-person',
                      'AI Facial Recognition': '/facial-recognition',
                      'AI Age Progression': '/age-progression',
                      'AI Unknown Person Identification': '/unknown-person-identification',
                      'AI Dead Body Identification': '/dead-body-identification',
                      // Module 63: Licensing & Business Compliance
                      'AI Pawn Shop Monitoring': '/pawn-shop-monitoring',
                      'AI Scrap Dealer Verification': '/scrap-dealer-verification',
                      'AI Second-Hand Goods Register': '/second-hand-goods-register',
                      'AI Jewellery Shop Security Audit': '/jewellery-shop-security',
                      'AI Petrol Pump Security Audit': '/petrol-pump-security',
                      'AI Bank Security Inspection': '/bank-security-inspection',
                      'AI ATM Security Compliance': '/atm-security-compliance',
                      'AI Cash Van Movement Coordination': '/cash-van-movement',
                      'AI Warehouse Security Assessment': '/warehouse-security',
                      'AI Critical Infrastructure Security Register': '/critical-infrastructure',
                      // Module 40: Legal Process
                      'AI Warrant Management': '/warrant-management',
                      'AI Summons Management': '/summons-management',
                      'AI Notice Management': '/notice-management',
                      'AI Bail Compliance Tracker': '/bail-compliance-tracker',
                      'AI Remand Monitoring': '/remand-monitoring',
                      'AI Prisoner Escort Management': '/prisoner-escort-management',
                      'AI Court Production Planning': '/court-production-planning',
                      'AI Legal Deadline Tracker': '/legal-deadline-tracker',
                      'AI Judicial Order Tracker': '/judicial-order-tracker',
                      'AI Compliance Monitoring': '/compliance-monitoring',
                      // Module 19: Legal & Court
                      'AI Legal Assistant': '/legal-assistant',
                      'AI Court Case Tracking': '/court-case-tracking',
                      'AI Prosecution Support': '/prosecution-support',
                      'AI Legal Research': '/legal-research',
                      'AI Judgment Analytics': '/judgment-analytics',
                      // Module 18: Law & Order
                      'AI Event Management': '/event-management',
                      'AI Crowd Management': '/crowd-management',
                      'AI Riot Intelligence': '/riot-intelligence',
                      'AI Disaster Response': '/disaster-response',
                      'AI Emergency Management': '/emergency-management',
                      'AI VIP Security': '/vip-security',
                      'AI Election Duty Management': '/election-duty-management',
                      'AI Festival Security': '/festival-security',
                      // Module 20: Knowledge & Training
                      'AI Knowledge Hub': '/knowledge-hub',
                      'AI Police Training Academy': '/police-training-academy',
                      'AI SOP Assistant': '/sop-assistant',
                      'AI Policy & Circular Search': '/policy-circular-search',
                      'AI e-Learning Platform': '/e-learning-platform',
                      // Module 106: Judicial & Administrative Coordination
                      'AI Commission of Inquiry Coordination': '/commission-of-inquiry',
                      'AI Magisterial Inquiry Workflow': '/magisterial-inquiry',
                      'AI Human Rights Commission Case Coordination': '/human-rights-commission',
                      'AI State Information Commission Case Tracker': '/state-information-commission',
                      'AI Lokayukta Reference Management': '/lokayukta-reference',
                      'AI Legislative Assembly Question Coordination': '/legislative-assembly-question',
                      'AI Parliament Question Coordination': '/parliament-question',
                      'AI Assurance Monitoring Cell': '/assurance-monitoring',
                      'AI Government Reference Monitoring': '/government-reference',
                      'AI Cabinet Decision Compliance Tracker': '/cabinet-decision-compliance',
                      // Module 42: Intelligence Support
                      'AI OSINT Workspace': '/osint-workspace',
                      'AI Anonymous Tip Management': '/anonymous-tip-management',
                      'AI Information Credibility Scoring': '/information-credibility',
                      'AI Intelligence Timeline Builder': '/intelligence-timeline',
                      'AI Subject Dossier Generator': '/subject-dossier',
                      'AI Event Correlation Engine': '/event-correlation',
                      'AI Geographic Intelligence Dashboard': '/geographic-intelligence',
                      'AI Intelligence Knowledge Base': '/intelligence-knowledge-base',
                      'AI Cross-Agency Information Exchange': '/cross-agency-exchange',
                      'AI Intelligence Brief Generator': '/intelligence-brief',

                      // Module 09: Investigation
                      'AI Investigation Assistant': '/investigation-assistant',
                      'AI Case Management': '/case-management',
                      'AI Statement Analysis': '/statement-analysis',
                      'AI Evidence Correlation': '/evidence-correlation',
                      'AI Investigation Timeline': '/investigation-timeline',
                      'AI Charge Sheet Assistant': '/charge-sheet-assistant',
                      'AI Witness Management': '/witness-management',
                      'AI Suspect Analysis': '/suspect-analysis',
                      'AI Investigation Dashboard': '/investigation-dashboard',
                      'AI Cold Case Analysis': '/cold-case-analysis',
                      
                      // Module 62: Border & Check Posts
                      'AI Highway Check Post Operations': '/border-check-post',
                      'AI State Border Check Management': '/state-border-check',
                      'AI Commercial Vehicle Inspection': '/commercial-vehicle-inspection',
                      'AI Goods Movement Verification': '/goods-movement-verification',
                      'AI Tourist Vehicle Monitoring': '/tourist-vehicle-monitoring',
                      'AI Border Incident Register': '/border-incident-register',
                      'AI Highway Patrol Analytics': '/highway-patrol-analytics',
                      'AI Toll Plaza Coordination': '/toll-plaza-coordination',
                      'AI Interstate Vehicle Alert Exchange': '/interstate-vehicle-alert',
                      'AI Mobile Checkpoint Planning': '/mobile-checkpoint-planning',

                      // Module 07: Citizen Services
                      'AI Jansunwai': '/jansunwai',
                      'AI Voice Bot': '/voice-bot',
                      'AI Citizen Portal': '/citizen-portal',
                      'AI Citizen Mobile App': '/citizen-mobile-app',
                      'AI Feedback Management': '/feedback-management',

                      // Module 08: Complaint & FIR
                      'AI Complaint Management': '/complaint-management',
                      'AI FIR Assistant': '/fir-assistant',
                      'AI e-FIR System': '/e-fir-system',
                      'AI Complaint Routing': '/complaint-routing',
                      'AI Complaint Analytics': '/complaint-analytics',

                      // Module 10: Crime Intelligence
                      'AI Crime Analytics': '/crime-analytics',
                      'AI Crime Mapping': '/crime-mapping',
                      'AI Crime Hotspot Detection': '/crime-hotspot-detection',
                      'AI Crime Prediction': '/crime-prediction',
                      'AI Crime Pattern Discovery': '/crime-pattern-discovery',
                      'AI Repeat Offender Analysis': '/repeat-offender-analysis',
                      'AI Organized Crime Intelligence': '/organized-crime-intelligence',
                      'AI Gang Intelligence': '/gang-intelligence',
                      'AI Criminal Network Analysis': '/criminal-network-analysis',
                      'AI Intelligence Fusion Center': '/intelligence-fusion-center',

                      // Module 13: Cyber Crime
                      'AI Cyber Crime Investigation': '/cyber-crime-investigation',
                      'AI Digital Fraud Detection': '/digital-fraud-detection',
                      'AI Phishing Detection': '/phishing-detection',
                      'AI Social Media Crime Analysis': '/social-media-crime-analysis',
                      'AI Dark Web Intelligence': '/dark-web-intelligence',

                      // Module 14: Digital Evidence
                      'AI Digital Evidence Management': '/digital-evidence-management',
                      'AI Image Analysis': '/image-analysis',
                      'AI Video Analytics': '/video-analytics',
                      'AI Audio Forensics': '/audio-forensics',
                      'AI OCR & Document Analysis': '/ocr-document-analysis',
                      'AI Metadata Analysis': '/metadata-analysis',
                      'AI Chain of Custody': '/chain-of-custody',

                      // Module 75: Disaster & Emergency Coordination
                      'AI NDRF Coordination': '/ndrf-coordination',
                      'AI SDRF Coordination': '/sdrf-coordination',
                      'AI Civil Defence Coordination': '/civil-defence-coordination',
                      'AI Home Guard Deployment': '/home-guard-deployment',
                      'AI Disaster Resource Inventory': '/disaster-resource-inventory',
                      'AI Emergency Shelter Security': '/emergency-shelter-security',
                      'AI Emergency Evacuation Status Board': '/emergency-evacuation-status-board',
                      'AI Relief Convoy Escort Management': '/relief-convoy-escort-management',
                      'AI Humanitarian Assistance Coordination': '/humanitarian-assistance-coordination',
                      'AI Disaster Communication Log': '/disaster-communication-log',

                      // Module 43: Disaster & Emergency Logistics
                      'AI Relief Camp Management': '/relief-camp-management',
                      'AI Rescue Team Allocation': '/rescue-team-allocation',
                      'AI Emergency Supply Chain': '/emergency-supply-chain',
                      'AI Shelter Occupancy Dashboard': '/shelter-occupancy-dashboard',
                      'AI Disaster Volunteer Management': '/disaster-volunteer-management',
                      'AI Resource Distribution Tracker': '/resource-distribution-tracker',
                      'AI Medical Response Coordination': '/medical-response-coordination',
                      'AI Evacuation Route Planner': '/evacuation-route-planner',
                      'AI Emergency Stock Monitoring': '/emergency-stock-monitoring',
                      'AI Relief Material Audit': '/relief-material-audit',

                      // Module 65: Documentation & Compliance
                      'AI Register Digitization': '/register-digitization',
                      'AI Manual Register Replacement': '/manual-register-replacement',
                      'AI Compliance Calendar': '/compliance-calendar',
                      'AI Inspection Evidence Repository': '/inspection-evidence-repository',
                      'AI Record Authentication': '/record-authentication',
                      'AI Document Expiry Tracker': '/document-expiry-tracker',
                      'AI Circular Compliance Dashboard': '/circular-compliance-dashboard',
                      'AI Policy Revision Tracker': '/policy-revision-tracker',
                      'AI SOP Update Distribution': '/sop-update-distribution',
                      'AI Legal Compliance Checklist': '/legal-compliance-checklist',

                      // Module 60: Election Management
                      'AI Election Force Allocation': '/election-force-allocation',
                      'AI Polling Booth Security Planning': '/polling-booth-security-planning',
                      'AI Election Route Management': '/election-route-management',
                      'AI EVM Security Coordination': '/evm-security-coordination',
                      'AI Strong Room Monitoring': '/strong-room-monitoring',
                      'AI Poll Day Incident Tracker': '/poll-day-incident-tracker',
                      'AI Election Vulnerability Mapping': '/election-vulnerability-mapping',
                      'AI Flying Squad Dashboard': '/flying-squad-dashboard',
                      'AI MCC Monitoring Support': '/mcc-monitoring-support',
                      'AI Election Resource Dashboard': '/election-resource-dashboard',

                      // Module 35: Emerging Technologies
                      'AI Digital Evidence Vault': '/digital-evidence-vault',
                      'AI Blockchain Evidence Registry': '/blockchain-evidence-registry',
                      'AI Quantum-Ready Cryptography Planning': '/quantum-cryptography-planning',
                      'AI Edge Computing Platform': '/edge-computing-platform',
                      'AI Offline AI Assistant': '/offline-ai-assistant',
                      'AI Augmented Reality Training': '/augmented-reality-training',
                      'AI Virtual Reality Crime Scene Training': '/vr-crime-scene-training',
                      'AI Robotics Coordination Platform': '/robotics-coordination-platform',
                      'AI Autonomous Drone Coordination': '/autonomous-drone-coordination',
                      'AI Smart Sensor Integration': '/smart-sensor-integration',

                      // Module 30: Fleet & Logistics
                      'AI Fuel Management': '/fuel-management',
                      'AI Vehicle Maintenance Prediction': '/vehicle-maintenance-prediction',
                      'AI Driver Duty Management': '/driver-duty-management',
                      'AI Fleet Utilization Analytics': '/fleet-utilization-analytics',
                      'AI Workshop Management': '/workshop-management',
                      'AI Tyre Lifecycle Tracking': '/tyre-lifecycle-tracking',
                      'AI Vehicle Insurance Tracking': '/vehicle-insurance-tracking',
                      'AI Vehicle Fitness Monitoring': '/vehicle-fitness-monitoring',
                      'AI Spare Parts Inventory': '/spare-parts-inventory',
                      'AI Fuel Fraud Detection': '/fuel-fraud-detection',

                      // Module 28: Forensic & Scientific Support
                      'AI Fingerprint Assistance': '/fingerprint-assistance',
                      'AI Ballistics Analysis Support': '/ballistics-analysis-support',
                      'AI Forensic Laboratory Workflow': '/forensic-lab-workflow',
                      'AI DNA Case Tracking': '/dna-case-tracking',
                      'AI Toxicology Case Management': '/toxicology-case-management',
                      'AI Handwriting Comparison Support': '/handwriting-comparison-support',
                      'AI Signature Verification Support': '/signature-verification-support',
                      'AI Forensic Evidence Request Management': '/forensic-evidence-request',
                      'AI FSL Report Tracking': '/fsl-report-tracking',
                      'AI Evidence Integrity Monitoring': '/evidence-integrity-monitoring',

                      // Module 22: GIS & Smart City
                      'AI GIS Platform': '/gis-platform', 'एआई जीआईएस (GIS) प्लेटफॉर्म': '/gis-platform',
                      'AI Smart City Integration': '/smart-city-integration', 'एआई स्मार्ट सिटी एकीकरण': '/smart-city-integration',
                      'AI Drone Monitoring': '/drone-monitoring', 'एआई ड्रोन निगरानी': '/drone-monitoring',
                      'AI Satellite Intelligence': '/satellite-intelligence', 'एआई सैटेलाइट इंटेलिजेंस': '/satellite-intelligence',
                      'AI Geo-Fencing': '/geo-fencing', 'एआई जियो-फेंसिंग': '/geo-fencing',

                      // Module 42: Intelligence Support
                      'AI Open Source Intelligence (OSINT) Workspace': '/osint-workspace', 'एआई ओपन सोर्स इंटेलिजेंस (OSINT) वर्कस्पेस': '/osint-workspace',
                      'AI Anonymous Tip Management': '/anonymous-tip-management', 'एआई अनाम (Anonymous) टिप प्रबंधन': '/anonymous-tip-management',
                      'AI Information Credibility Scoring': '/information-credibility-scoring', 'एआई सूचना विश्वसनीयता स्कोरिंग': '/information-credibility-scoring',
                      'AI Intelligence Timeline Builder': '/intelligence-timeline-builder', 'एआई इंटेलिजेंस टाइमलाइन बिल्डर': '/intelligence-timeline-builder',
                      'AI Subject Dossier Generator': '/subject-dossier-generator', 'एआई सब्जेक्ट डोजियर (Dossier) जेनरेटर': '/subject-dossier-generator',
                      'AI Event Correlation Engine': '/event-correlation-engine', 'एआई घटना सहसंबंध (Correlation) इंजन': '/event-correlation-engine',
                      'AI Geographic Intelligence Dashboard': '/geographic-intelligence-dashboard', 'एआई भौगोलिक इंटेलिजेंस डैशबोर्ड': '/geographic-intelligence-dashboard',
                      'AI Intelligence Knowledge Base': '/intelligence-knowledge-base', 'एआई इंटेलिजेंस नॉलेज बेस': '/intelligence-knowledge-base',
                      'AI Cross-Agency Information Exchange': '/cross-agency-information-exchange', 'एआई क्रॉस-एजेंसी सूचना विनिमय': '/cross-agency-information-exchange',
                      'AI Intelligence Brief Generator': '/intelligence-brief-generator', 'एआई इंटेलिजेंस ब्रीफ जेनरेटर': '/intelligence-brief-generator',

                      // Module 78: Internal Administration
                      'AI Office Seating Allocation': '/office-seating-allocation', 'एआई कार्यालय बैठने की व्यवस्था (Seating Allocation)': '/office-seating-allocation',
                      'AI Meeting Room Booking': '/meeting-room-booking', 'एआई बैठक कक्ष बुकिंग': '/meeting-room-booking',
                      'AI Visitor Queue Management': '/visitor-queue-management', 'एआई आगंतुक कतार प्रबंधन': '/visitor-queue-management',
                      'AI Digital Notice Board': '/digital-notice-board', 'एआई डिजिटल नोटिस बोर्ड': '/digital-notice-board',
                      'AI Office Asset Reservation': '/office-asset-reservation', 'एआई कार्यालय संपत्ति (Asset) आरक्षण': '/office-asset-reservation',
                      'AI Official Vehicle Booking': '/official-vehicle-booking', 'एआई आधिकारिक वाहन बुकिंग': '/official-vehicle-booking',
                      'AI Conference Hall Scheduler': '/conference-hall-scheduler', 'एआई सम्मेलन कक्ष शेड्यूलर': '/conference-hall-scheduler',
                      'AI Intercom Directory': '/intercom-directory', 'एआई इंटरकॉम निर्देशिका (Directory)': '/intercom-directory',
                      'AI Office Consumables Tracking': '/office-consumables-tracking', 'एआई कार्यालय उपभोज्य (Consumables) ट्रैकिंग': '/office-consumables-tracking',
                      'AI Stationery Distribution Management': '/stationery-distribution-management', 'एआई स्टेशनरी वितरण प्रबंधन': '/stationery-distribution-management',

                      // Module 38: Internal Security
                      'AI Internal Vigilance Monitoring': '/internal-vigilance-monitoring', 'एआई आंतरिक सतर्कता (Vigilance) निगरानी': '/internal-vigilance-monitoring',
                      'AI Internal Complaint Cell': '/internal-complaint-cell', 'एआई आंतरिक शिकायत सेल': '/internal-complaint-cell',
                      'AI Departmental Inquiry Management': '/departmental-inquiry-management', 'एआई विभागीय जांच प्रबंधन': '/departmental-inquiry-management',
                      'AI Suspension Case Tracking': '/suspension-case-tracking', 'एआई निलंबन (Suspension) केस ट्रैकिंग': '/suspension-case-tracking',
                      'AI Disciplinary Action Management': '/disciplinary-action-management', 'एआई अनुशासनात्मक कार्रवाई प्रबंधन': '/disciplinary-action-management',
                      'AI Confidential Report Management': '/confidential-report-management', 'एआई गोपनीय रिपोर्ट प्रबंधन': '/confidential-report-management',
                      'AI Integrity Monitoring Dashboard': '/integrity-monitoring-dashboard', 'एआई सत्यनिष्ठा (Integrity) निगरानी डैशबोर्ड': '/integrity-monitoring-dashboard',
                      'AI Internal Ethics Monitoring': '/internal-ethics-monitoring', 'एआई आंतरिक नैतिकता निगरानी': '/internal-ethics-monitoring',
                      'AI Misconduct Pattern Analysis': '/misconduct-pattern-analysis', 'एआई कदाचार पैटर्न विश्लेषण': '/misconduct-pattern-analysis',
                      'AI Internal Risk Register': '/internal-risk-register', 'एआई आंतरिक जोखिम रजिस्टर': '/internal-risk-register',

                      // Module 46: International & Coordination
                      'AI Interpol Notice Tracker': '/interpol-notice-tracker', 'एआई इंटरपोल नोटिस ट्रैकर': '/interpol-notice-tracker',
                      'AI Interstate Coordination Hub': '/interstate-coordination-hub', 'एआई अंतरराज्यीय समन्वय हब': '/interstate-coordination-hub',
                      'AI Border Check Coordination': '/border-check-coordination', 'एआई सीमा जांच समन्वय': '/border-check-coordination',
                      'AI Embassy Liaison Tracker': '/embassy-liaison-tracker', 'एआई दूतावास संपर्क ट्रैकर': '/embassy-liaison-tracker',
                      'AI Foreign National Case Management': '/foreign-national-case-management', 'एआई विदेशी राष्ट्रीय केस प्रबंधन': '/foreign-national-case-management',
                      'AI International Request Tracking': '/international-request-tracking', 'एआई अंतर्राष्ट्रीय अनुरोध ट्रैकिंग': '/international-request-tracking',
                      'AI Immigration Coordination Support': '/immigration-coordination-support', 'एआई आप्रवासन समन्वय सहायता': '/immigration-coordination-support',
                      'AI Cross-Border Intelligence Exchange': '/cross-border-intelligence-exchange', 'एआई सीमा पार इंटेलिजेंस विनिमय': '/cross-border-intelligence-exchange',
                      'AI Mutual Legal Assistance Tracker': '/mutual-legal-assistance-tracker', 'एआई पारस्परिक कानूनी सहायता ट्रैकर': '/mutual-legal-assistance-tracker',
                      'AI Global Crime Trend Dashboard': '/global-crime-trend-dashboard', 'एआई वैश्विक अपराध प्रवृत्ति डैशबोर्ड': '/global-crime-trend-dashboard',

                      // Module 82: International & External Relations
                      'AI International Training Coordination': '/international-training-coordination', 'एआई अंतर्राष्ट्रीय प्रशिक्षण समन्वय': '/international-training-coordination',
                      'AI Foreign Study Visit Management': '/foreign-study-visit-management', 'एआई विदेशी अध्ययन यात्रा प्रबंधन': '/foreign-study-visit-management',
                      'AI Police Exchange Program': '/police-exchange-program', 'एआई पुलिस विनिमय (Exchange) कार्यक्रम': '/police-exchange-program',
                      'AI International Conference Management': '/international-conference-management', 'एआई अंतर्राष्ट्रीय सम्मेलन प्रबंधन': '/international-conference-management',
                      'AI Global Best Practices Library': '/global-best-practices-library', 'एआई वैश्विक सर्वोत्तम अभ्यास (Best Practices) लाइब्रेरी': '/global-best-practices-library',
                      'AI UN Policing Standards Repository': '/un-policing-standards-repository', 'एआई संयुक्त राष्ट्र (UN) पुलिसिंग मानक रिपॉजिटरी': '/un-policing-standards-repository',
                      'AI Bilateral Cooperation Tracker': '/bilateral-cooperation-tracker', 'एआई द्विपक्षीय सहयोग ट्रैकर': '/bilateral-cooperation-tracker',
                      'AI International Delegation Visits': '/international-delegation-visits', 'एआई अंतर्राष्ट्रीय प्रतिनिधिमंडल (Delegation) यात्राएं': '/international-delegation-visits',
                      'AI Global Security Research Hub': '/global-security-research-hub', 'एआई वैश्विक सुरक्षा अनुसंधान हब': '/global-security-research-hub',
                      'AI Police Diplomacy Dashboard': '/police-diplomacy-dashboard', 'एआई पुलिस कूटनीति (Diplomacy) डैशबोर्ड': '/police-diplomacy-dashboard',

                      // Module 26: Future Vision Modules
                      'AI Border Security': '/border-security',
                      'AI Prison Management': '/prison-management',
                      'AI Anti-Terror Intelligence': '/anti-terror-intelligence',
                      'AI Financial Crime Intelligence': '/financial-crime-intelligence',
                      'AI Environmental Crime Monitoring': '/environmental-crime-monitoring',
                      'AI Wildlife Crime Investigation': '/wildlife-crime-investigation',
                      'AI Narcotics Intelligence': '/narcotics-intelligence',
                      'AI Economic Offence Wing Assistant': '/economic-offence-wing-assistant',
                      'AI Inter-State Coordination Platform': '/inter-state-coordination-platform',
                      'AI International Cooperation Dashboard': '/international-cooperation-dashboard',

                      // Module 23: Communication
                      'AI Media Management': '/media-management',
                      'AI Press Note Generator': '/press-note-generator',
                      'AI Public Communication': '/public-communication',
                      'AI Social Media Management': '/social-media-management',
                      'AI Public Alert System': '/public-alert-system',

                      // Module 54: Communication & Documentation
                      'AI Daily Police Bulletin': '/daily-police-bulletin',
                      'AI Morning Brief Generator': '/morning-brief-generator',
                      'AI Evening Situation Report': '/evening-situation-report',
                      'AI Weekly Crime Digest': '/weekly-crime-digest',
                      'AI Monthly District Review': '/monthly-district-review',
                      'AI Police Newsletter': '/police-newsletter',
                      'AI Internal Knowledge Sharing': '/internal-knowledge-sharing',
                      'AI Command Instructions Archive': '/command-instructions-archive',
                      'AI Briefing Notes Generator': '/briefing-notes-generator',
                      'AI Daily Order Book': '/daily-order-book',

                      // Module 31: Communication Systems
                      'AI Wireless Communication Monitoring': '/wireless-communication-monitoring',
                      'AI Radio Log Analysis': '/radio-log-analysis',
                      'AI Emergency Broadcast Management': '/emergency-broadcast-management',
                      'AI Internal Messaging Assistant': '/internal-messaging-assistant',
                      'AI Secure Communication Audit': '/secure-communication-audit',
                      'AI Communication Failure Detection': '/communication-failure-detection',
                      'AI Call Dispatch Optimization': '/call-dispatch-optimization',
                      'AI Multi-Channel Communication Hub': '/multi-channel-communication-hub',
                      'AI Incident Broadcast System': '/incident-broadcast-system',
                      'AI Communication Performance Analytics': '/communication-performance-analytics',

                      // Module 41: Community Policing
                      'AI Gram Chaupal Management': '/gram-chaupal-management',
                      'AI Citizen Outreach Calendar': '/citizen-outreach-calendar',
                      'AI Police Mitra Portal': '/police-mitra-portal',
                      'AI Resident Welfare Association Coordination': '/rwa-coordination',
                      'AI NGO Coordination': '/ngo-coordination',
                      'AI Community Volunteer Network': '/community-volunteer-network',
                      'AI Public Trust Index': '/public-trust-index',
                      'AI Community Risk Survey': '/community-risk-survey',
                      'AI Public Awareness Campaign Manager': '/public-awareness-campaign-manager',
                      'AI Citizen Suggestion Portal': '/citizen-suggestion-portal',

                      // Module 52: Control of Official Documents
                      'AI Seal Register': '/seal-register',
                      'AI Stamp Register': '/stamp-register',
                      'AI Confidential Document Locker': '/confidential-document-locker',
                      'AI Government Gazette Archive': '/government-gazette-archive',
                      'AI Record Weeding Schedule': '/record-weeding-schedule',
                      'AI Document Preservation': '/document-preservation',
                      'AI Historical Record Archive': '/historical-record-archive',
                      'AI File Digitization Queue': '/file-digitization-queue',
                      'AI Digital Signature Register': '/digital-signature-register',
                      'AI Record Access Approval': '/record-access-approval',

                      // Module 39: Arms & Equipment
                      'AI Weapon Issue & Return': '/weapon-issue',
                      'AI Ammunition Consumption Analytics': '/ammunition-analytics',
                      'AI Weapon Maintenance Scheduler': '/weapon-maintenance',
                      'AI Bulletproof Jacket Inventory': '/bulletproof-jacket',
                      'AI Helmet Inventory': '/helmet-inventory',
                      'AI Riot Gear Tracking': '/riot-gear',
                      'AI Tear Gas Inventory': '/tear-gas',
                        'AI Beat Management': '/beat-management',
                        'AI Patrol Management': '/patrol-management',
                        'AI GPS Tracking': '/gps-tracking',
                        'AI Beat Book': '/beat-book',
                        'AI Field Inspection': '/field-inspection',
                      'AI Explosive Storage Monitoring': '/explosive-storage',
                      'AI Equipment Calibration Tracker': '/equipment-calibration',
                      'AI Armoury Inspection': '/armoury-inspection',

                    // Module 06: AI Command & Governance
                    'AI Operations Command Center': '/operations-command', 'एआई ऑपरेशंस कमांड सेंटर': '/operations-command',
                    'AI Governance & Compliance': '/ai-governance', 'एआई गवर्नेंस और अनुपालन': '/ai-governance',
                    'AI Enterprise Analytics': '/enterprise-analytics', 'एआई एंटरप्राइज एनालिटिक्स': '/enterprise-analytics',
                    'AI Executive Dashboard': '/executive-dashboard', 'एआई कार्यकारी डैशबोर्ड': '/executive-dashboard',

                    // Module 24: Administration
                    'AI HRMS': '/hrms', 'एआई एचआरएमएस (HRMS)': '/hrms',
                    'AI Finance & Budget': '/finance', 'एआई वित्त और बजट': '/finance',
                    'Budget Planning': '/budget-planning', 'बजट प्लानिंग': '/budget-planning',
                    'Budget Approval': '/budget-approval', 'बजट स्वीकृति': '/budget-approval',
                    'Fund Allocation': '/fund-allocation', 'फंड आवंटन': '/fund-allocation',
                    'Grant Management': '/grant-management', 'अनुदान प्रबंधन': '/grant-management',
                    'Department Budget': '/department-budget', 'विभागीय बजट': '/department-budget',
                    'Project Budget': '/project-budget', 'परियोजना बजट': '/project-budget',
                    'Revenue Management': '/revenue-management', 'राजस्व प्रबंधन': '/revenue-management',
                    'Expense Management': '/expense-management', 'व्यय प्रबंधन': '/expense-management',
                    'Payroll Integration': '/payroll-integration', 'पेरोल एकीकरण': '/payroll-integration',
                    'Procurement Management': '/procurement-management', 'खरीद प्रबंधन (Procurement Management)': '/procurement-management',
                    'Vendor Management': '/vendor-management', 'विक्रेता प्रबंधन': '/vendor-management',
                    'Asset Finance': '/asset-finance', 'संपत्ति वित्त': '/asset-finance',
                    'Audit Management': '/audit-finance', 'ऑडिट प्रबंधन': '/audit-finance',
                    'Financial Compliance': '/financial-compliance', 'वित्तीय अनुपालन': '/financial-compliance',
                    'Financial Reports': '/financial-reports', 'वित्तीय रिपोर्ट': '/financial-reports',
                    'AI Forecasting': '/ai-forecasting', 'एआई पूर्वानुमान': '/ai-forecasting',
                    'Cost Optimization': '/cost-optimization', 'लागत अनुकूलन': '/cost-optimization',
                    'Financial Risk Analysis': '/financial-risk-analysis', 'वित्तीय जोखिम विश्लेषण': '/financial-risk-analysis',
                    'Executive Dashboard': '/executive-dashboard-finance', 'कार्यकारी डैशबोर्ड': '/executive-dashboard-finance',
                    'Notification Center': '/notification-center-finance', 'अधिसूचना केंद्र (Notification Center)': '/notification-center-finance',
                    
                    // AI Human Resource Management mappings
                    'Police HR Domain Expert AI': '/police-hr-domain', 'पुलिस एचआर डोमेन विशेषज्ञ एआई': '/police-hr-domain',
                    'Officer Recruitment Expert AI': '/officer-recruitment', 'अधिकारी भर्ती विशेषज्ञ एआई': '/officer-recruitment',
                    'Duty & Leave Expert AI': '/duty-leave', 'ड्यूटी और अवकाश विशेषज्ञ एआई': '/duty-leave',
                    'Payroll & Allowances Expert AI': '/payroll-allowances', 'पेरोल और भत्ते विशेषज्ञ एआई': '/payroll-allowances',
                    'Performance & Medals Expert AI': '/performance-medals', 'प्रदर्शन और पदक विशेषज्ञ एआई': '/performance-medals',
                    'Police Training Expert AI': '/police-training', 'पुलिस प्रशिक्षण विशेषज्ञ एआई': '/police-training',
                    'Force Engagement Expert AI': '/force-engagement', 'बल जुड़ाव विशेषज्ञ एआई': '/force-engagement',
                    'Police Act & Compliance Expert AI': '/police-act-compliance', 'पुलिस अधिनियम और अनुपालन विशेषज्ञ एआई': '/police-act-compliance',
                    'Armoury Management AI': '/armoury-management', 'शस्त्रागार प्रबंधन एआई': '/armoury-management',
                    'Mental Health & Stress AI': '/mental-health-stress', 'मानसिक स्वास्थ्य और तनाव एआई': '/mental-health-stress',
                    'Physical Fitness Tracker AI': '/physical-fitness', 'शारीरिक फिटनेस ट्रैकर एआई': '/physical-fitness',
                    'Grievance Redressal AI': '/grievance-redressal', 'शिकायत निवारण एआई': '/grievance-redressal',
                    'Smart Shift Optimization AI': '/smart-shift', 'स्मार्ट शिफ्ट अनुकूलन एआई': '/smart-shift',
                    'Fleet & Fuel Management AI': '/fleet-fuel', 'बेड़ा और ईंधन प्रबंधन एआई': '/fleet-fuel',
                    'K9 Unit Management AI': '/k9-unit', 'K9 यूनिट प्रबंधन एआई': '/k9-unit',
                    'Court Summon & Legal Sync AI': '/court-summon', 'न्यायिक समन और कानूनी सिंक एआई': '/court-summon',
                    'Cyber Security & Access AI': '/cyber-security-access', 'साइबर सुरक्षा और एक्सेस एआई': '/cyber-security-access',
                    'Disciplinary Action Tracker AI': '/disciplinary-action', 'अनुशासनात्मक कार्रवाई ट्रैकर एआई': '/disciplinary-action',
                    'Pension & Gratuity Calculator AI': '/pension-gratuity', 'पेंशन और ग्रेच्युटी कैलकुलेटर एआई': '/pension-gratuity',
                    'Resettlement & Veteran Support AI': '/resettlement-veteran', 'पुनर्वास और वयोवृद्ध सहायता एआई': '/resettlement-veteran',
                    
                    'AI Procurement': '/procurement', 'एआई खरीद (Procurement)': '/procurement',
                    'AI Audit Management': '/audit', 'एआई ऑडिट प्रबंधन': '/audit',
                    'AI Document Management': '/document', 'एआई दस्तावेज़ प्रबंधन': '/document',

                    // Module 25: Advanced AI Systems
                    'AI Multi-Agent Platform': '/multi-agent', 'एआई मल्टी-एजेंट प्लेटफॉर्म': '/multi-agent',
                    'AI Knowledge Graph': '/knowledge-graph', 'एआई नॉलेज ग्राफ': '/knowledge-graph',
                    'AI Decision Support System': '/decision-support', 'एआई निर्णय समर्थन (Decision Support) सिस्टम': '/decision-support',
                    'AI Digital Twin of Police Operations': '/digital-twin', 'पुलिस संचालन का एआई डिजिटल ट्विन': '/digital-twin',
                    'AI Autonomous Investigation Assistant': '/investigation-assistant', 'एआई स्वायत्त जांच सहायक': '/investigation-assistant',
                    'AI Conversational Copilot': '/copilot', 'एआई संवादी कोपायलट': '/copilot',
                    'AI Multimodal Intelligence (Voice + Image + Video + Text)': '/multimodal', 'एआई मल्टीमॉडल इंटेलिजेंस (वॉयस + इमेज + वीडियो + टेक्स्ट)': '/multimodal',
                    'AI Model Management Platform': '/model-management', 'एआई मॉडल प्रबंधन प्लेटफॉर्म': '/model-management',
                    'AI Data Lake & Big Data Platform': '/data-lake', 'एआई डेटा लेक और बिग डेटा प्लेटफॉर्म': '/data-lake',
                    'AI Research & Innovation Lab': '/research-lab', 'एआई अनुसंधान और नवाचार लैब': '/research-lab',

                    // Module 26: Future Vision Modules (Mapped ones)
                    'AI Border Security': '/border-security', 'एआई सीमा सुरक्षा (Border Security)': '/border-security',
                    'AI Prison Management': '/prison-management', 'एआई जेल प्रबंधन': '/prison-management',
                    'AI Anti-Terror Intelligence': '/anti-terror', 'एआई आतंकवाद निरोधक इंटेलिजेंस': '/anti-terror',
                    'AI Financial Crime Intelligence': '/financial-crime', 'एआई वित्तीय अपराध इंटेलिजेंस': '/financial-crime',
                    'AI Narcotics Intelligence': '/narcotics', 'एआई नारकोटिक्स इंटेलिजेंस': '/narcotics',

                    // Module 27: Investigation & Intelligence
                    'AI Informer Management System': '/informer-management', 'एआई मुखबिर प्रबंधन प्रणाली': '/informer-management',
                    'AI Secret Information Analysis': '/secret-info', 'एआई गुप्त सूचना विश्लेषण': '/secret-info',
                    'AI Intelligence Verification': '/intelligence-verification', 'एआई इंटेलिजेंस सत्यापन': '/intelligence-verification',
                    'AI Source Reliability Scoring': '/source-reliability', 'एआई स्रोत विश्वसनीयता स्कोरिंग': '/source-reliability',
                    'AI Criminal Relationship Mapping': '/criminal-relationship', 'एआई आपराधिक संबंध मैपिंग': '/criminal-relationship',
                    'AI Alias & Nickname Matching': '/alias-nickname', 'एआई उपनाम और निकनेम मिलान': '/alias-nickname',
                    'AI Cross-Case Link Analysis': '/cross-case-link', 'एआई क्रॉस-केस लिंक विश्लेषण': '/cross-case-link',
                    'AI Case Similarity Engine': '/case-similarity', 'एआई केस समानता इंजन': '/case-similarity',
                    'AI Suspect Movement Timeline': '/suspect-movement', 'एआई संदिग्ध गतिविधि टाइमलाइन': '/suspect-movement',
                    'AI Investigation Quality Review': '/investigation-quality', 'एआई जांच गुणवत्ता समीक्षा': '/investigation-quality'

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
