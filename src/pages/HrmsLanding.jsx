import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Shield, Brain, Network, Zap, UserCheck, Activity, Award, Server, Key, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/hrms.css';

// Reusable scroll-reveal component
const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } }
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
};

const HrmsLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="hrms-page">
      {/* Background Animations */}
      <div className="hrms-bg"></div>
      <div className="hrms-grid"></div>

      {/* Hero Section */}
      <section className="hrms-hero">
        <button 
          onClick={() => navigate(-1)}
          style={{ position: 'absolute', top: '2rem', left: '2rem', background: 'transparent', color: 'var(--color-cyan)', border: '1px solid var(--color-cyan)', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer', zIndex: 100 }}
        >
          &larr; BACK TO DASHBOARD
        </button>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <Shield size={60} color="var(--color-cyan)" style={{ marginBottom: '2rem' }} />
        </motion.div>
        
        <motion.h1 className="hrms-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          AI HRMS FOR POLICE ADMINISTRATION
        </motion.h1>
        
        <motion.p className="hrms-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
          An Artificial Intelligence powered Human Resource Management Platform for Smart Police Workforce Management. Integrating predictive analytics, machine learning, and zero-trust security into the core of police administration.
        </motion.p>
        
        <motion.div className="hrms-btn-group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <button className="hrms-btn hrms-btn-primary">Explore Modules</button>
          <button className="hrms-btn hrms-btn-outline">View Architecture</button>
          <button className="hrms-btn hrms-btn-outline">AI Workflow</button>
          <button className="hrms-btn hrms-btn-outline">Live Dashboard</button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          style={{ position: 'absolute', bottom: '2rem', color: 'var(--color-cyan)' }}
        >
          <ArrowDown size={30} />
        </motion.div>
      </section>

      {/* Section 1: Project Overview */}
      <section className="hrms-section">
        <h2 className="hrms-section-title">PROJECT OVERVIEW</h2>
        <div className="hrms-grid-3">
          <FadeIn delay={0.1}>
            <div className="hrms-card">
              <div className="hrms-card-icon"><Brain /></div>
              <h3>What is AI HRMS?</h3>
              <p>A next-generation enterprise platform replacing legacy police HR systems with a unified, AI-driven digital nervous system that automates the entire employee lifecycle.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="hrms-card">
              <div className="hrms-card-icon"><Zap /></div>
              <h3>Vision & Mission</h3>
              <p>To empower police administration with real-time data, eliminate administrative bottlenecks, and deploy the right personnel at the right time using predictive intelligence.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="hrms-card">
              <div className="hrms-card-icon"><UserCheck /></div>
              <h3>Target Users</h3>
              <p>Designed for DGP Headquarters, ADG Personnel, IG Ranges, District SPs, HR Administrators, and individual police personnel via secure SSO.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Employee Lifecycle */}
      <section className="hrms-section" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <h2 className="hrms-section-title">EMPLOYEE LIFECYCLE</h2>
        <FadeIn>
          <div className="hrms-timeline-wrapper">
            <div className="hrms-timeline">
              {['Recruitment', 'Joining', 'Training', 'Posting', 'Duty', 'Performance', 'Promotion', 'Transfer', 'Awards', 'Retirement'].map((stage, idx) => (
                <div key={idx} className="hrms-timeline-item">
                  <div className="hrms-timeline-dot"></div>
                  <div className="hrms-timeline-label">{stage}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Section 3: AI Modules */}
      <section className="hrms-section">
        <h2 className="hrms-section-title">AI MODULES</h2>
        <div className="hrms-grid-4">
          {[
            'Employee Management', 'Digital Service Book', 'Attendance Tracking', 'Leave Management',
            'Duty Management', 'AI Posting Engine', 'Transfer Recommendation', 'Promotion Readiness',
            'Performance Matrix', 'Training Management', 'Skill Analytics', 'Health Monitoring',
            'Mental Wellness', 'Disciplinary Tracking', 'Retirement Planning', 'AI Chatbot Assistant'
          ].map((mod, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div className="hrms-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1rem', margin: 0 }}>{mod}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Section 4 & 5: AI Workflow & Recommendation Engine */}
      <section className="hrms-section" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <h2 className="hrms-section-title">AI POSTING RECOMMENDATION ENGINE</h2>
        <FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="hrms-card" style={{ width: '300px', textAlign: 'center', borderColor: 'var(--color-blue)' }}>Select Officer Data</div>
            <div className="hrms-flow-arrow"><ArrowDown /></div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="hrms-card" style={{ padding: '1rem' }}>Experience</div>
              <div className="hrms-card" style={{ padding: '1rem' }}>Skills</div>
              <div className="hrms-card" style={{ padding: '1rem' }}>Medical</div>
              <div className="hrms-card" style={{ padding: '1rem' }}>Performance</div>
            </div>
            
            <div className="hrms-flow-arrow"><ArrowDown /></div>
            <div className="hrms-card" style={{ width: '400px', textAlign: 'center', background: 'rgba(6, 182, 212, 0.2)', borderColor: 'var(--color-cyan)', boxShadow: '0 0 30px var(--color-cyan-glow)' }}>
              <h3 style={{ margin: 0 }}><Brain style={{ display: 'inline', verticalAlign: 'middle', marginRight: '10px' }} /> AI Neural Analysis</h3>
            </div>
            
            <div className="hrms-flow-arrow"><ArrowDown /></div>
            <div className="hrms-card" style={{ width: '300px', textAlign: 'center', borderColor: 'var(--color-secondary)' }}>Recommended Posting Generated</div>
          </div>
        </FadeIn>
      </section>

      {/* Section 6 & 7: Dashboard & Analytics */}
      <section className="hrms-section">
        <h2 className="hrms-section-title">EXECUTIVE DASHBOARD & ANALYTICS</h2>
        <FadeIn>
          <div className="hrms-dashboard-mock">
            <div className="hrms-dash-kpi-grid">
              <div className="hrms-kpi">
                <div className="hrms-kpi-val">2.8L</div>
                <div className="hrms-kpi-label">Total Strength</div>
              </div>
              <div className="hrms-kpi">
                <div className="hrms-kpi-val" style={{ color: 'var(--color-secondary)'}}>92%</div>
                <div className="hrms-kpi-label">Active Duty</div>
              </div>
              <div className="hrms-kpi">
                <div className="hrms-kpi-val" style={{ color: '#f59e0b'}}>14K</div>
                <div className="hrms-kpi-label">On Leave/Training</div>
              </div>
              <div className="hrms-kpi">
                <div className="hrms-kpi-val" style={{ color: '#ef4444'}}>1.2K</div>
                <div className="hrms-kpi-label">Health Alerts</div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
              <div className="hrms-chart-mock">
                {/* CSS Bar Chart Mock */}
                {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                  <motion.div key={i} className="hrms-bar" initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }}></motion.div>
                ))}
              </div>
              <div className="hrms-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Activity size={50} color="var(--color-cyan)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ textAlign: 'center' }}>AI HR Score: 98/100</h3>
                <p style={{ textAlign: 'center', fontSize: '0.8rem' }}>Workforce efficiency is highly optimized.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Section 8 & 9: Architecture & Tech */}
      <section className="hrms-section">
        <h2 className="hrms-section-title">SYSTEM ARCHITECTURE & TECH STACK</h2>
        <FadeIn>
          <div className="hrms-tech-tags" style={{ marginBottom: '4rem' }}>
            {['.NET 9', 'ASP.NET Core', 'SQL Server', 'Redis', 'Docker', 'Azure', 'Power BI', 'SignalR', 'REST API', 'JWT Auth', 'React', 'Machine Learning', 'NLP', 'Predictive Analytics'].map((tech, i) => (
              <span key={i} className="hrms-tag">{tech}</span>
            ))}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: '16px', border: 'var(--glass-border)' }}>
            <div style={{ textAlign: 'center' }}><Users size={30} color="var(--color-cyan)"/><br/>Users</div>
            <div style={{ flex: 1, height: '2px', background: 'var(--color-cyan)', margin: '0 1rem' }}></div>
            <div style={{ textAlign: 'center' }}><Network size={30} color="var(--color-cyan)"/><br/>API Gateway</div>
            <div style={{ flex: 1, height: '2px', background: 'var(--color-cyan)', margin: '0 1rem' }}></div>
            <div style={{ textAlign: 'center' }}><Brain size={30} color="var(--color-cyan)"/><br/>AI Engine</div>
            <div style={{ flex: 1, height: '2px', background: 'var(--color-cyan)', margin: '0 1rem' }}></div>
            <div style={{ textAlign: 'center' }}><Server size={30} color="var(--color-cyan)"/><br/>Database</div>
          </div>
        </FadeIn>
      </section>

      {/* Section 10 & 11: Security & Roles */}
      <section className="hrms-section" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <h2 className="hrms-section-title" style={{ fontSize: '1.8rem' }}>ZERO-TRUST SECURITY</h2>
            <div className="hrms-grid-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="hrms-card" style={{ padding: '1rem', textAlign: 'center' }}><Key size={24} color="var(--color-cyan)"/><br/>RBAC & SSO</div>
              <div className="hrms-card" style={{ padding: '1rem', textAlign: 'center' }}><Shield size={24} color="var(--color-cyan)"/><br/>AES-256 Encryption</div>
              <div className="hrms-card" style={{ padding: '1rem', textAlign: 'center' }}><UserCheck size={24} color="var(--color-cyan)"/><br/>Multi-Factor Auth</div>
              <div className="hrms-card" style={{ padding: '1rem', textAlign: 'center' }}><Activity size={24} color="var(--color-cyan)"/><br/>Audit Logging</div>
            </div>
          </div>
          <div>
            <h2 className="hrms-section-title" style={{ fontSize: '1.8rem' }}>HIERARCHY ACCESS</h2>
            <div className="hrms-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: 'transparent', border: 'none', boxShadow: 'none' }}>
              {['Police Headquarters (PHQ)', 'DGP / ADG / IG', 'DIG / SP', 'CO / SHO', 'Police Personnel'].map((role, i) => (
                <div key={i} style={{ padding: '0.8rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', borderLeft: `4px solid var(--color-cyan)`, marginLeft: `${i * 1.5}rem` }}>
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 12 & 13: Benefits & Roadmap */}
      <section className="hrms-section">
        <h2 className="hrms-section-title">SYSTEM BENEFITS</h2>
        <div className="hrms-grid-4" style={{ marginBottom: '6rem' }}>
          {[
            { val: '90%', label: 'Automation of Records' },
            { val: '70%', label: 'Faster Processing' },
            { val: '100%', label: 'Digital Service Book' },
            { val: '24/7', label: 'AI Decision Support' }
          ].map((b, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="hrms-card" style={{ textAlign: 'center', borderColor: 'var(--color-cyan)' }}>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--color-cyan)', textShadow: '0 0 20px var(--color-cyan-glow)' }}>{b.val}</div>
                <div style={{ fontSize: '1rem', color: '#fff', marginTop: '1rem' }}>{b.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <h2 className="hrms-section-title">FUTURE ROADMAP</h2>
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
            {[
              { p: 'Phase 1', d: 'Digital HRMS Rollout' },
              { p: 'Phase 2', d: 'AI Analytics Integration' },
              { p: 'Phase 3', d: 'Predictive Intelligence' },
              { p: 'Phase 4', d: 'Generative AI Assistant' },
              { p: 'Phase 5', d: 'Autonomous Workforce' }
            ].map((phase, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--color-cyan)', borderRadius: '50%', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>{i+1}</div>
                <h4 style={{ color: 'var(--color-cyan)', marginBottom: '0.5rem' }}>{phase.p}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{phase.d}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Section 14: Footer */}
      <footer className="hrms-footer">
        <div className="hrms-footer-grid">
          <div>
            <h4>AI HRMS PLATFORM</h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Enterprise-grade Human Resource Management System powered by Artificial Intelligence for Police Administration.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Architecture</a></li>
              <li><a href="#">Security Protocols</a></li>
              <li><a href="#">Modules Catalog</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">API Documentation</a></li>
              <li><a href="#">User Manuals</a></li>
              <li><a href="#">Support Portal</a></li>
            </ul>
          </div>
          <div>
            <h4>System Info</h4>
            <ul>
              <li style={{ color: 'var(--color-text-muted)' }}>Version 2.0.1 (Build 492)</li>
              <li style={{ color: 'var(--color-text-muted)' }}>Status: Active Node</li>
              <li style={{ color: 'var(--color-cyan)', marginTop: '1rem' }}>© 2026 UP Police AI Core</li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HrmsLanding;
