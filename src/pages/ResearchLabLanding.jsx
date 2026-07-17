import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Microscope, TestTube, Lightbulb, GraduationCap, BookOpen, Users, 
  Cpu, FileText, Target, LineChart, ShieldAlert, FileSearch, Library,
  Activity, GitMerge, FileArchive
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

const ResearchLabLanding = () => {
  const navigate = useNavigate();
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
              <Microscope size={20} color="#06b6d4" className="pulse-anim" />
              <span style={{ color: '#06b6d4', letterSpacing: '3px', fontWeight: '700', fontSize: '0.85rem' }}>OPENAI / DEEPMIND RESEARCH PORTAL</span>
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', textShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
            AI Research & Innovation Lab
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ fontSize: '1.3rem', color: '#cbd5e1', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem auto', lineHeight: '1.7' }}>
            A collaborative environment for Data Scientists and AI Engineers. Track ML experiments, manage proprietary datasets, and accelerate Police Operations with cutting-edge Research & Development.
          </motion.p>
        </div>
      </section>

      {/* 2. Research KPI Telemetry */}
      <AnimatedSection style={{ padding: '6rem 2rem', background: 'rgba(8,17,33,0.3)' }}>
        <SectionHeading title="Research KPI Dashboard" subtitle="Live tracking of AI Models, Experiments, and Hardware utilization" icon={Activity} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
          {[
            { l: "ACTIVE PROJECTS", v: "14", c: "#06b6d4", i: Target },
            { l: "EXPERIMENTS", v: "342", c: "#10b981", i: TestTube },
            { l: "PUBLICATIONS", v: "28", c: "#f59e0b", i: BookOpen },
            { l: "GPU ALLOCATION", v: "92%", c: "#ef4444", i: Cpu },
            { l: "PROPRIETARY DATASETS", v: "1,402", c: "#a855f7", i: FileArchive },
            { l: "RESEARCHERS", v: "64", c: "#38bdf8", i: Users }
          ].map((k, i) => (
            <CyberCard key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 1rem' }}>
              <k.i size={32} color={k.c} style={{ marginBottom: '1rem', filter: `drop-shadow(0 0 10px ${k.c}80)` }} className={k.l === "GPU ALLOCATION" ? "pulse-anim" : ""} />
              <h2 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', fontWeight: '800' }}>{k.v}</h2>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '2px', marginTop: '10px' }}>{k.l}</span>
            </CyberCard>
          ))}
        </div>
      </AnimatedSection>

      {/* 4. Sub‑Topic Cards – navigate to AI Learning Roadmap */}
      <AnimatedSection style={{ padding: '6rem 2rem', background: 'rgba(8,17,33,0.4)' }}>
        <SectionHeading
          title="Explore AI Learning Roadmaps"
          subtitle="Click any sub‑topic to see a detailed, AI‑generated learning path"
          icon={BookOpen}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
          {[
            "Predictive Policing",
            "Drone Surveillance",
            "Facial Recognition",
            "Cyber Threat Detection",
            "Traffic Management",
            "AI‑Assisted Investigation"
          ].map((topic, idx) => (
            <CyberCard
              key={idx}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <BookOpen size={24} color="#06b6d4" />
                <h3 style={{ margin: 0, color: '#fff' }}>{topic}</h3>
              </div>
            </CyberCard>
          ))}
        </div>
      </AnimatedSection>

      {/* 3. Research Workflows */}
      <AnimatedSection style={{ padding: '6rem 2rem' }}>
        <SectionHeading title="Innovation Lifecycle" subtitle="From Hypothesis to Production LLMs" icon={GitMerge} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <CyberCard noHover>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: `rgba(6,182,212,0.1)`, padding: '12px', borderRadius: '50%' }}><FileSearch size={24} color="#06b6d4" /></div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Literature & RAG Search</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>AI-powered semantic search across ArXiv, Patents, and internal knowledge bases. Auto-generates citations and summaries.</p>
          </CyberCard>

          <CyberCard noHover>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: `rgba(245,158,11,0.1)`, padding: '12px', borderRadius: '50%' }}><TestTube size={24} color="#f59e0b" /></div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Experiment Tracking (MLflow)</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>Log hyperparameters, evaluate metrics (Accuracy, F1), and track model artifacts across hundreds of concurrent ML experiments.</p>
          </CyberCard>

          <CyberCard noHover>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: `rgba(16,185,129,0.1)`, padding: '12px', borderRadius: '50%' }}><Library size={24} color="#10b981" /></div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Dataset Versioning</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>Secure upload, strict version control, data labeling workflows, and lineage tracking for high-quality Machine Learning datasets.</p>
          </CyberCard>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default ResearchLabLanding;
