import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, Image as ImageIcon, Video, FileText, Activity, Server, Cpu, 
  Layers, Eye, Volume2, Type, Subtitles, Fingerprint, Search, 
  LineChart, Target, MonitorPlay, Zap, Ear
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

const MultimodalLanding = () => {
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
              <Layers size={20} color="#06b6d4" className="pulse-anim" />
              <span style={{ color: '#06b6d4', letterSpacing: '3px', fontWeight: '700', fontSize: '0.85rem' }}>VOICE • IMAGE • VIDEO • TEXT</span>
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', textShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
            AI Multimodal Intelligence
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ fontSize: '1.3rem', color: '#cbd5e1', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem auto', lineHeight: '1.7' }}>
            Process any sensory input. Instantly analyze video feeds, transcribe live speech, extract text from images, and cross-reference massive datasets using advanced Multimodal RAG.
          </motion.p>
        </div>
      </section>

      {/* 2. Processing & GPU Telemetry */}
      <AnimatedSection style={{ padding: '6rem 2rem', background: 'rgba(8,17,33,0.3)' }}>
        <SectionHeading title="Real-Time GPU Processing" subtitle="Live monitoring of heavy AI model workloads and inference queues" icon={Activity} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
          {[
            { l: "GPU CLUSTER LOAD", v: "82%", c: "#ef4444", i: Cpu },
            { l: "VIDEO QUEUE", v: "45 pending", c: "#f59e0b", i: MonitorPlay },
            { l: "AUDIO TRANSCRIBED", v: "14.5K hrs", c: "#10b981", i: Ear },
            { l: "IMAGES PROCESSED", v: "2.1M", c: "#38bdf8", i: ImageIcon },
            { l: "MULTIMODAL SEARCHES", v: "8,940", c: "#a855f7", i: Search },
            { l: "AVG INFERENCE TIME", v: "84ms", c: "#10b981", i: Zap }
          ].map((k, i) => (
            <CyberCard key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 1rem' }}>
              <k.i size={32} color={k.c} style={{ marginBottom: '1rem', filter: `drop-shadow(0 0 10px ${k.c}80)` }} className={k.l === "GPU CLUSTER LOAD" ? "pulse-anim" : ""} />
              <h2 style={{ margin: 0, fontSize: '2.5rem', color: '#fff', fontWeight: '800' }}>{k.v}</h2>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', letterSpacing: '2px', marginTop: '10px' }}>{k.l}</span>
            </CyberCard>
          ))}
        </div>
      </AnimatedSection>

      {/* 3. Multimodal Features */}
      <AnimatedSection style={{ padding: '6rem 2rem' }}>
        <SectionHeading title="Multimodal Modules" subtitle="Discrete AI engines working in parallel for comprehensive analysis" icon={Layers} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          
          <CyberCard>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: `rgba(245,158,11,0.1)`, padding: '12px', borderRadius: '50%' }}><Video size={24} color="#f59e0b" /></div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Video AI</h3>
            </div>
            <ul style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
              <li>Video Summarization & Scene Detection</li>
              <li>Automated Subtitle Generation</li>
              <li>Object Tracking across frames</li>
            </ul>
          </CyberCard>

          <CyberCard>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: `rgba(6,182,212,0.1)`, padding: '12px', borderRadius: '50%' }}><ImageIcon size={24} color="#06b6d4" /></div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Image AI</h3>
            </div>
            <ul style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
              <li>Optical Character Recognition (OCR)</li>
              <li>Image Captioning & Object Detection</li>
              <li>Automated PII / Face Blurring</li>
            </ul>
          </CyberCard>

          <CyberCard>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: `rgba(16,185,129,0.1)`, padding: '12px', borderRadius: '50%' }}><Volume2 size={24} color="#10b981" /></div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Voice AI</h3>
            </div>
            <ul style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
              <li>Real-time Speech-to-Text (Transcription)</li>
              <li>Voice Commands & Live Assistant</li>
              <li>Text-to-Speech (Multilingual Synthesis)</li>
            </ul>
          </CyberCard>

        </div>
      </AnimatedSection>

    </div>
  );
};

export default MultimodalLanding;
