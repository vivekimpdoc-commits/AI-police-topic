import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Box, Settings, Cpu, Activity, BarChart2, CheckCircle, 
  AlertTriangle, ShieldAlert, GitCommit, Target, RefreshCw, 
  Hexagon, Database, Server, GitMerge, FileCheck2, Scale, Zap
} from 'lucide-react';
import '../styles/hrms.css';

const SectionHeading = ({ title, subtitle, icon: Icon, color = "var(--color-primary)" }) => (
  <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {Icon && <div style={{ background: `rgba(6, 182, 212, 0.1)`, padding: '15px', borderRadius: '50%', marginBottom: '1rem', border: `1px solid ${color}40` }}><Icon size={32} color={color} style={{ filter: `drop-shadow(0 0 10px ${color}80)` }} /></div>}
    <h2 className="hrms-section-title" style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '2px', color: '#fff' }}>{title}</h2>
    <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '700px' }}>{subtitle}</p>
  </div>
);

const AnimatedSection = ({ children, className, style }) => (
  <motion.section 
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    style={style}
  >
    {children}
  </motion.section>
);

const CyberCard = ({ children, style, noHover = false }) => (
  <motion.div 
    whileHover={noHover ? {} : { y: -5, borderColor: 'var(--color-primary)' }} 
    style={{ 
      background: 'var(--color-panel)', 
      border: 'var(--glass-border)', 
      borderRadius: '16px', 
      padding: '2rem',
      boxShadow: 'var(--glass-shadow)',
      backdropFilter: 'blur(10px)',
      ...style 
    }}
  >
    {children}
  </motion.div>
);

const ModelManagementLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hrms-landing" style={{ background: 'var(--color-bg-dark)', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}>
      
      {/* 1. Hero Section */}
      <section style={{ position: 'relative', padding: '10rem 2rem 6rem', minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(6,182,212,0.1)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(6,182,212,0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div className="hud-scanlines" style={{ opacity: 0.05, zIndex: 0 }}></div>
        
        <div style={{ zIndex: 1, textAlign: 'center', maxWidth: '1200px' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(6,182,212,0.1)', padding: '10px 20px', borderRadius: '30px', border: '1px solid rgba(6,182,212,0.3)', marginBottom: '2rem' }}>
              <Hexagon size={20} color="#06b6d4" className="pulse-anim" />
              <span style={{ color: '#06b6d4', letterSpacing: '3px', fontWeight: '700', fontSize: '0.85rem' }}>ENTERPRISE MLOps COMMAND CENTER</span>
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', textShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
            AI Model Management
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ fontSize: '1.3rem', color: '#cbd5e1', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem auto', lineHeight: '1.7' }}>
            A unified registry for all your AI models. Track experiments, manage versions, detect data drift, and deploy to Kubernetes clusters with ISO 42001 & SOC2 compliant audit trails.
          </motion.p>
        </div>
      </section>

      {/* 2. MLOps Telemetry */}
      <AnimatedSection style={{ padding: '6rem 2rem', background: 'rgba(8,17,33,0.3)' }}>
        <SectionHeading title="Model Health & Drift Analytics" subtitle="Real-time monitoring of deployed inference endpoints" icon={Activity} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
          {[
            { l: "ACTIVE MODELS", v: "42", c: "#06b6d4", i: Box },
            { l: "TRAINING JOBS", v: "14", c: "#f59e0b", i: RefreshCw },
            { l: "DATA DRIFT ALERTS", v: "2", c: "#ef4444", i: AlertTriangle },
            { l: "API INFERENCE", v: "1.2M/hr", c: "#10b981", i: Zap },
            { l: "AVG LATENCY", v: "42ms", c: "#38bdf8", i: Target },
            { l: "BIAS DETECTION", v: "Optimal", c: "#10b981", i: Scale }
          ].map((k, i) => (
            <CyberCard key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 1rem' }}>
              <k.i size={32} color={k.c} style={{ marginBottom: '1rem', filter: `drop-shadow(0 0 10px ${k.c}80)` }} className={k.l === "DATA DRIFT ALERTS" ? "pulse-anim" : ""} />
              <h2 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', fontWeight: '800' }}>{k.v}</h2>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '2px', marginTop: '10px' }}>{k.l}</span>
            </CyberCard>
          ))}
        </div>
      </AnimatedSection>

      {/* 3. MLOps Features */}
      <AnimatedSection style={{ padding: '6rem 2rem' }}>
        <SectionHeading title="Model Lifecycle Management" subtitle="From experiment tracking to production serving" icon={GitCommit} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <CyberCard noHover>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: `rgba(6,182,212,0.1)`, padding: '12px', borderRadius: '50%' }}><Box size={24} color="#06b6d4" /></div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Model Registry & Versioning</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>Centralized catalog for all LLMs and embedding models. Track version history, dependencies, and promotion criteria (Staging -&gt; Production).</p>
          </CyberCard>

          <CyberCard noHover>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: `rgba(245,158,11,0.1)`, padding: '12px', borderRadius: '50%' }}><GitMerge size={24} color="#f59e0b" /></div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>CI/CD Pipeline Integration</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>Seamlessly triggers retraining and deployment workflows via GitHub, GitLab, and Azure DevOps upon dataset updates or code changes.</p>
          </CyberCard>

          <CyberCard noHover>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: `rgba(16,185,129,0.1)`, padding: '12px', borderRadius: '50%' }}><FileCheck2 size={24} color="#10b981" /></div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Compliance & Explainable AI</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>Built to meet ISO 42001, SOC2, GDPR, and NIST AI RMF standards. Ensure complete transparency with Explainable AI (XAI) reports.</p>
          </CyberCard>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default ModelManagementLanding;
