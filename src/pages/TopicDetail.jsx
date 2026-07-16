import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Shield, Brain, Network, Zap, UserCheck, Activity, Database, Server, Key, Users, Target, Eye, Lock, Cpu, Globe } from 'lucide-react';
import '../styles/hrms.css';

const FadeIn = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } }}}>
      {children}
    </motion.div>
  );
};

// Intelligent content generator based on keywords
const getTopicContent = (topicName) => {
  const name = topicName.toLowerCase();
  
  if (name.includes('predict') || name.includes('forecast') || name.includes('भविष्य')) {
    return {
      subtitle: `Advanced statistical modeling and machine learning algorithms to forecast crime hotspots and anticipate activities before they occur using ${topicName}.`,
      icon: <Target size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'Pattern Recognition', desc: 'Analyzes historical crime data to identify non-obvious patterns and sequences.' },
      f2: { title: 'Hotspot Mapping', desc: 'Generates dynamic thermal maps showing high-probability zones for deployment.' },
      f3: { title: 'Risk Scoring', desc: 'Assigns real-time threat scores to specific areas based on ongoing local events.' }
    };
  }
  
  if (name.includes('drone') || name.includes('uav') || name.includes('aerial') || name.includes('ड्रोन')) {
    return {
      subtitle: `Autonomous aerial surveillance network providing real-time 4K video feeds, thermal imaging, and rapid response deployment through ${topicName}.`,
      icon: <Globe size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'Aerial Reconnaissance', desc: 'Provides undisputed bird-eye views of active crime scenes and large gatherings.' },
      f2: { title: 'Thermal Scanning', desc: 'Equipped with FLIR cameras to detect suspects hiding in dark or wooded areas.' },
      f3: { title: 'Autonomous Flight', desc: 'AI-driven pathfinding allows drones to patrol designated grids without pilot input.' }
    };
  }
  
  if (name.includes('cyber') || name.includes('network') || name.includes('digital') || name.includes('साइबर')) {
    return {
      subtitle: `State-of-the-art digital forensics and network security protocols to identify, isolate, and neutralize cyber threats using ${topicName}.`,
      icon: <Lock size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'Threat Hunting', desc: 'Proactively scans deep web and local networks for compromised UP Police credentials.' },
      f2: { title: 'Packet Inspection', desc: 'Deep AI inspection of all incoming data traffic to block ransomware and DDoS attacks.' },
      f3: { title: 'Zero-Day Defense', desc: 'Machine learning heuristics designed to stop viruses that have never been seen before.' }
    };
  }
  
  if (name.includes('traffic') || name.includes('transport') || name.includes('यातायात')) {
    return {
      subtitle: `Intelligent traffic management utilizing AI cameras and sensors to optimize flow, detect violations, and manage routing via ${topicName}.`,
      icon: <Activity size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'ANPR Systems', desc: 'Automatic Number Plate Recognition tracking stolen vehicles across the state.' },
      f2: { title: 'Congestion Prediction', desc: 'AI alters traffic light timings dynamically to prevent gridlocks during rush hours.' },
      f3: { title: 'Automated E-Challan', desc: 'Instantly identifies speeding and red-light violations, issuing digital tickets.' }
    };
  }
  
  if (name.includes('face') || name.includes('biometric') || name.includes('identity') || name.includes('चेहरा')) {
    return {
      subtitle: `High-accuracy biometric identification system cross-referencing live video feeds with the central criminal database using ${topicName}.`,
      icon: <Eye size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'Real-time Matching', desc: 'Scans thousands of faces per second against the national most-wanted databases.' },
      f2: { title: 'Crowd Scanning', desc: 'Identifies individuals of interest even in dense crowds and low-light conditions.' },
      f3: { title: 'Emotion Analysis', desc: 'Detects micro-expressions to identify extreme stress or aggressive intentions.' }
    };
  }

  if (name.includes('women') || name.includes('mahila') || name.includes('महिला') || name.includes('safety')) {
    return {
      subtitle: `AI-powered emergency response and safety network dedicated to women's security, ensuring instant tracking and rapid dispatch via ${topicName}.`,
      icon: <Shield size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'SOS Routing', desc: 'Instantly routes panic alerts to the nearest patrol unit using geospatial AI.' },
      f2: { title: 'Sentiment Analysis', desc: 'Analyzes emergency calls for distress levels using voice emotion detection.' },
      f3: { title: 'Safe Route Mapping', desc: 'Provides dynamically generated safe travel routes based on real-time lighting and patrol data.' }
    };
  }

  if (name.includes('emergency') || name.includes('112') || name.includes('response') || name.includes('आपातकालीन')) {
    return {
      subtitle: `Next-generation dispatch and emergency management utilizing predictive resource allocation to minimize response times for ${topicName}.`,
      icon: <Zap size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'Smart Dispatch', desc: 'Automatically assigns the most appropriate emergency unit based on incident type and live traffic.' },
      f2: { title: 'Multi-Agency Sync', desc: 'Simultaneously coordinates Police, Fire, and Medical teams on a single unified grid.' },
      f3: { title: 'Predictive Staging', desc: 'Pre-positions emergency vehicles in high-risk zones during peak hours or major events.' }
    };
  }

  if (name.includes('crime') || name.includes('criminal') || name.includes('investigation') || name.includes('अपराध')) {
    return {
      subtitle: `Advanced investigative AI to connect disparate evidence, track suspects, and accelerate case solving within the ${topicName} framework.`,
      icon: <Database size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'Link Analysis', desc: 'Automatically connects suspects, locations, and vehicles across multiple unsolved cases.' },
      f2: { title: 'Evidence NLP', desc: 'Uses Natural Language Processing to scan thousands of FIRs for matching Modus Operandi.' },
      f3: { title: 'Suspect Profiling', desc: 'Generates behavioral and geographic profiles based on historical crime data.' }
    };
  }

  if (name.includes('jail') || name.includes('prison') || name.includes('inmate') || name.includes('जेल')) {
    return {
      subtitle: `Comprehensive correctional facility management using IoT and AI to monitor inmates, prevent riots, and manage resources via ${topicName}.`,
      icon: <Server size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'Crowd Sentiment', desc: 'Analyzes CCTV feeds inside cell blocks to detect aggressive clustering or riot formations.' },
      f2: { title: 'Visitor Tracking', desc: 'Deep background checks and biometric logging for all external visitors.' },
      f3: { title: 'Parole AI', desc: 'Calculates recidivism risk scores to assist parole boards in decision making.' }
    };
  }

  if (name.includes('forensic') || name.includes('dna') || name.includes('फॉरेंसिक')) {
    return {
      subtitle: `Digital automation for forensic laboratories, speeding up DNA matching, ballistics analysis, and toxicology reports through ${topicName}.`,
      icon: <Activity size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
      f1: { title: 'Automated DNA Matching', desc: 'Cross-references field samples with the state DNA databank in near real-time.' },
      f2: { title: 'Ballistics Imaging', desc: 'AI 3D modeling to match bullet striations across different crime scenes.' },
      f3: { title: 'Chain of Custody', desc: 'Blockchain-backed tracking of physical evidence from crime scene to courtroom.' }
    };
  }
  
  // Default generic but highly professional AI content
  return {
    subtitle: `Enterprise Artificial Intelligence Solution for ${topicName}. Automating core operations, providing real-time telemetry, and enhancing UP Police capabilities with next-generation predictive modeling.`,
    icon: <Network size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />,
    f1: { title: 'AI Integration', desc: `Seamlessly integrates predictive intelligence into the core functionalities of ${topicName}.` },
    f2: { title: 'Real-Time Processing', desc: `Capable of parsing millions of data points simultaneously to keep operations running 24/7.` },
    f3: { title: 'Zero-Trust Security', desc: `All data processed by ${topicName} is encrypted via AES-256 and protected via biometrics.` }
  };
};

const TopicDetail = () => {
  const { topicName } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(topicName || 'System Module');
  
  const content = useMemo(() => getTopicContent(decodedName), [decodedName]);
  
  return (
    <div className="hrms-page">
      <div className="hrms-bg"></div>
      <div className="hrms-grid"></div>

      {/* Hero Section */}
      <section className="hrms-hero">
        <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: '2rem', left: '2rem', background: 'transparent', color: 'var(--color-cyan)', border: '1px solid var(--color-cyan)', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', zIndex: 100 }}>
          &larr; BACK TO DASHBOARD
        </button>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          {content.icon}
        </motion.div>
        
        <motion.h1 className="hrms-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          {decodedName.toUpperCase()}
        </motion.h1>
        
        <motion.p className="hrms-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
          {content.subtitle}
        </motion.p>
        
        <motion.div className="hrms-btn-group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <button className="hrms-btn hrms-btn-primary">Initialize System</button>
          <button className="hrms-btn hrms-btn-outline">View Analytics</button>
        </motion.div>
      </section>

      {/* Section 1: Project Overview */}
      <section className="hrms-section">
        <h2 className="hrms-section-title">SYSTEM CAPABILITIES</h2>
        <div className="hrms-grid-3">
          <FadeIn delay={0.1}>
            <div className="hrms-card">
              <div className="hrms-card-icon"><Brain /></div>
              <h3>{content.f1.title}</h3>
              <p>{content.f1.desc}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="hrms-card">
              <div className="hrms-card-icon"><Cpu /></div>
              <h3>{content.f2.title}</h3>
              <p>{content.f2.desc}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="hrms-card">
              <div className="hrms-card-icon"><Shield /></div>
              <h3>{content.f3.title}</h3>
              <p>{content.f3.desc}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="hrms-section" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <h2 className="hrms-section-title">OPERATIONAL WORKFLOW</h2>
        <FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="hrms-card" style={{ width: '300px', textAlign: 'center', borderColor: 'var(--color-blue)' }}>Raw Field Data Ingestion</div>
            <div className="hrms-flow-arrow"><ArrowDown /></div>
            <div className="hrms-card" style={{ width: '400px', textAlign: 'center', background: 'rgba(6, 182, 212, 0.2)', borderColor: 'var(--color-cyan)', boxShadow: '0 0 30px var(--color-cyan-glow)' }}>
              <h3 style={{ margin: 0 }}><Brain style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }} /> {decodedName} Engine</h3>
            </div>
            <div className="hrms-flow-arrow"><ArrowDown /></div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div className="hrms-card" style={{ padding: '1rem' }}>AI Processing</div>
              <div className="hrms-card" style={{ padding: '1rem' }}>Live Verification</div>
              <div className="hrms-card" style={{ padding: '1rem' }}>Actionable Alerts</div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Dashboard Section */}
      <section className="hrms-section">
        <h2 className="hrms-section-title">LIVE TELEMETRY DASHBOARD</h2>
        <FadeIn>
          <div className="hrms-dashboard-mock">
            <div className="hrms-dash-kpi-grid">
              <div className="hrms-kpi">
                <div className="hrms-kpi-val">{Math.floor(Math.random() * 90) + 10}K</div>
                <div className="hrms-kpi-label">Active Packets</div>
              </div>
              <div className="hrms-kpi">
                <div className="hrms-kpi-val" style={{ color: 'var(--color-secondary)'}}>{(Math.random() * 5 + 94).toFixed(1)}%</div>
                <div className="hrms-kpi-label">AI Accuracy</div>
              </div>
              <div className="hrms-kpi">
                <div className="hrms-kpi-val" style={{ color: '#f59e0b'}}>{Math.floor(Math.random() * 50) + 10}ms</div>
                <div className="hrms-kpi-label">System Latency</div>
              </div>
              <div className="hrms-kpi">
                <div className="hrms-kpi-val" style={{ color: '#10b981'}}>ONLINE</div>
                <div className="hrms-kpi-label">Node Status</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="hrms-footer">
        <div className="hrms-footer-grid">
          <div>
            <h4>{decodedName.toUpperCase()}</h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Enterprise-grade AI solution for the UP Police Network.</p>
          </div>
          <div>
            <h4>System Info</h4>
            <ul>
              <li style={{ color: 'var(--color-text-muted)' }}>Status: Active Node</li>
              <li style={{ color: 'var(--color-cyan)', marginTop: '1rem' }}>© 2026 UP Police AI Core</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TopicDetail;
