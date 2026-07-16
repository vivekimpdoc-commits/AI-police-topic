import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowDown, Shield, Brain, Network, Activity, 
  Database, Cpu, Lock, Users, Zap, FileText, CheckCircle2,
  TrendingUp, BarChart, DollarSign, Briefcase, FileSpreadsheet,
  PieChart, LineChart, Server, Link, AlertTriangle, Fingerprint,
  GlobeLock, Target, Eye, GitMerge
} from 'lucide-react';
import '../styles/hrms.css'; // Reuse the excellent cyber styling

const SectionHeading = ({ title, subtitle, icon: Icon }) => (
  <div className="section-heading">
    {Icon && <Icon className="section-icon" size={32} />}
    <h2 className="neon-text">{title}</h2>
    <p className="section-subtitle">{subtitle}</p>
    <div className="section-divider"></div>
  </div>
);

const AnimatedSection = ({ children, className = '' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        hidden: { opacity: 0, y: 50 }
      }}
      className={`landing-section ${className}`}
    >
      {children}
    </motion.section>
  );
};

const FinanceLanding = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hrms-landing">
      {/* Dynamic Network Background */}
      <div className="network-bg"></div>
      
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="btn-back">
        <ArrowLeft size={20} /> <span className="btn-text">BACK TO COMMAND</span>
      </button>

      {/* 1. Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-badge">ENTERPRISE EDITION 2.0</div>
          <h1 className="hero-title neon-text">AI FINANCE & BUDGET</h1>
          <h2 className="hero-subtitle">MANAGEMENT SYSTEM</h2>
          <p className="hero-desc">
            An Artificial Intelligence powered financial governance platform for Police Administration that automates budgeting, fund allocation, expenditure monitoring, financial analytics, audit compliance, and executive decision support.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' })}>
              <BarChart size={18} /> Financial Dashboard
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('architecture').scrollIntoView({ behavior: 'smooth' })}>
              <Network size={18} /> System Architecture
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('ai-workflow').scrollIntoView({ behavior: 'smooth' })}>
              <Brain size={18} /> AI Workflow
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={30} color="var(--color-primary)" />
        </motion.div>
      </section>

      {/* 2. Project Overview */}
      <AnimatedSection className="overview-section">
        <SectionHeading 
          title="Project Overview" 
          subtitle="Transforming financial governance through artificial intelligence"
          icon={GlobeLock}
        />
        <div className="overview-grid">
          <div className="overview-card">
            <h3><Database size={24} /> Why is it needed?</h3>
            <p>Traditional police financial management relies on fragmented spreadsheets and manual approvals, leading to delayed fund disbursement and lack of real-time visibility into operational spending across districts.</p>
          </div>
          <div className="overview-card">
            <h3><Brain size={24} /> How AI Improves Governance</h3>
            <p>Our AI engine ingests real-time financial data, flags anomalous expenses, predicts future budget requirements based on historical crime/operation rates, and ensures 100% audit compliance automatically.</p>
          </div>
          <div className="overview-card">
            <h3><CheckCircle2 size={24} /> Expected Outcomes</h3>
            <p>Zero budget leakage, instant vendor payments, optimized fuel/infrastructure spending, and complete financial transparency for the DGP, ADG, and Government Finance Departments.</p>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Objectives */}
      <AnimatedSection className="objectives-section bg-darker">
        <SectionHeading title="Strategic Objectives" subtitle="Core goals of the AI Finance Platform" icon={Target} />
        <div className="objectives-grid">
          {[
            { t: "Digitize Financial Management", i: Database },
            { t: "Centralize Finance Records", i: Server },
            { t: "Improve Transparency", i: Eye },
            { t: "Optimize Public Expenditure", i: TrendingUp },
            { t: "AI-based Budget Planning", i: Brain },
            { t: "Predict Future Needs", i: LineChart },
            { t: "Strengthen Audit Compliance", i: ShieldAlert },
            { t: "Improve Decision Making", i: Activity }
          ].map((obj, i) => (
            <motion.div 
              key={i} className="objective-item"
              whileHover={{ scale: 1.05, borderColor: 'var(--color-primary)' }}
            >
              <obj.i className="objective-icon" size={30} />
              <h4>{obj.t}</h4>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* 4. Core Modules */}
      <AnimatedSection className="modules-section">
        <SectionHeading title="Core Modules" subtitle="Comprehensive financial management suite" icon={Briefcase} />
        <div className="modules-grid">
          {[
            "Budget Planning", "Budget Approval", "Fund Allocation", "Grant Management",
            "Department Budget", "Project Budget", "Revenue Management", "Expense Management",
            "Payroll Integration", "Procurement Management", "Vendor Management", "Asset Finance",
            "Audit Management", "Financial Compliance", "Financial Reports", "AI Forecasting",
            "Cost Optimization", "Financial Risk Analysis", "Executive Dashboard", "Notification Center"
          ].map((mod, i) => (
            <div key={i} className="module-card interactive">
              <div className="mod-header">
                <Cpu size={20} className="mod-icon" />
                <h4>{mod}</h4>
              </div>
              <p>AI-driven capability enabling autonomous monitoring, telemetry logging, and secure data processing.</p>
              <button className="mod-btn">View Details &rarr;</button>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 5. Budget Workflow */}
      <AnimatedSection className="workflow-section bg-darker">
        <SectionHeading title="Budget Workflow" subtitle="End-to-end automated financial lifecycle" icon={GitMerge} />
        <div className="flowchart vertical">
          {[
            "Budget Proposal", "Department Review", "Finance Approval", "Fund Allocation",
            "Department Utilization", "Expense Monitoring", "Audit", "Financial Reports", "Budget Closure"
          ].map((step, i) => (
            <div key={i} className="flow-step-wrapper">
              <motion.div 
                className="flow-step"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="step-num">{i + 1}</span>
                <div className="step-content">
                  <h4>{step}</h4>
                </div>
              </motion.div>
              {i < 8 && <div className="flow-connector">↓</div>}
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 6. AI Workflow */}
      <AnimatedSection id="ai-workflow" className="workflow-section">
        <SectionHeading title="AI Logic Workflow" subtitle="How artificial intelligence processes financial data" icon={Brain} />
        <div className="flowchart horizontal">
          {[
            "Police Finance Data", "Financial Database", "AI Engine", "Machine Learning",
            "Budget Prediction", "Risk Detection", "Cost Optimization", "Recommendation Engine",
            "Executive Dashboard", "Final Human Approval"
          ].map((step, i) => (
            <div key={i} className="h-flow-wrapper">
              <div className="h-flow-step">{step}</div>
              {i < 9 && <div className="h-flow-connector">&rarr;</div>}
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 7. Executive Financial Dashboard */}
      <AnimatedSection id="dashboard" className="dashboard-section bg-darker">
        <SectionHeading title="Executive Financial Dashboard" subtitle="Real-time telemetry and fund monitoring" icon={PieChart} />
        <div className="mock-dashboard">
          <div className="dash-kpi-grid">
            <div className="dash-kpi"><span>Approved Budget</span><h3>₹4,500 Cr</h3></div>
            <div className="dash-kpi"><span>Utilized Budget</span><h3 className="text-warning">₹3,200 Cr</h3></div>
            <div className="dash-kpi"><span>Remaining Budget</span><h3 className="text-success">₹1,300 Cr</h3></div>
            <div className="dash-kpi"><span>Pending Bills</span><h3 className="text-danger">412</h3></div>
          </div>
          
          <div className="dash-charts">
            <div className="dash-chart-card">
              <h4>Budget Utilization (Live)</h4>
              <div className="bar-chart-mock">
                <div className="bar-row"><span className="label">HQ</span><div className="bar"><div className="fill fill-warning" style={{width:'85%'}}></div></div><span className="val">85%</span></div>
                <div className="bar-row"><span className="label">Traffic</span><div className="bar"><div className="fill fill-success" style={{width:'40%'}}></div></div><span className="val">40%</span></div>
                <div className="bar-row"><span className="label">Cyber</span><div className="bar"><div className="fill fill-danger" style={{width:'92%'}}></div></div><span className="val">92%</span></div>
                <div className="bar-row"><span className="label">Training</span><div className="bar"><div className="fill fill-info" style={{width:'60%'}}></div></div><span className="val">60%</span></div>
              </div>
            </div>
            <div className="dash-chart-card">
              <h4>Financial Health Score</h4>
              <div className="gauge-mock">
                <div className="gauge-circle">
                  <h2>94<small>/100</small></h2>
                  <span className="status text-success">OPTIMAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 8. AI Capabilities */}
      <AnimatedSection className="capabilities-section">
        <SectionHeading title="AI Capabilities" subtitle="Deep learning models for financial operations" icon={Cpu} />
        <div className="caps-grid">
          {[
            "Budget Forecasting", "Expenditure Prediction", "Financial Risk Detection", 
            "Fraud Pattern Detection", "Cost Optimization", "Cash Flow Analysis", 
            "Procurement Intelligence", "Vendor Performance Analysis", "Grant Utilization", "Financial Recommendations"
          ].map((cap, i) => (
            <div key={i} className="cap-card">
              <Zap size={24} className="text-primary" />
              <h4>{cap}</h4>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 9. Finance Analytics */}
      <AnimatedSection className="analytics-section bg-darker">
        <SectionHeading title="Finance Analytics" subtitle="Comprehensive spending analysis" icon={LineChart} />
        <div className="analytics-pills">
          {["Budget Performance", "Fund Utilization", "Operational Cost", "Salary Analysis", "Procurement Analysis", "Vehicle Maintenance Cost", "Infrastructure Cost", "Training Cost", "Fuel Cost", "IT Expenditure", "Emergency Fund Usage"].map((item, i) => (
             <span key={i} className="analytic-pill">{item}</span>
          ))}
        </div>
      </AnimatedSection>

      {/* 10. Financial Reports */}
      <AnimatedSection className="reports-section">
        <SectionHeading title="Automated Financial Reports" subtitle="One-click audit-ready documentation" icon={FileSpreadsheet} />
        <div className="reports-grid">
          {[
            "Budget Report", "Expense Report", "Grant Report", "Fund Allocation Report", 
            "Vendor Report", "Procurement Report", "Audit Report", "Department Summary", 
            "Monthly Report", "Annual Financial Report"
          ].map((rep, i) => (
            <div key={i} className="report-card">
              <FileText size={20} className="text-primary" /> {rep}
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 11. Security */}
      <AnimatedSection className="security-section bg-darker">
        <SectionHeading title="Enterprise Security" subtitle="Bank-grade financial data protection" icon={Lock} />
        <div className="security-grid">
          <div className="sec-item"><Fingerprint size={28}/> <h4>Role Based Access</h4></div>
          <div className="sec-item"><CheckCircle2 size={28}/> <h4>Digital Approval Workflow</h4></div>
          <div className="sec-item"><Lock size={28}/> <h4>AES-256 Encryption</h4></div>
          <div className="sec-item"><FileText size={28}/> <h4>Immutable Audit Logs</h4></div>
          <div className="sec-item"><ShieldAlert size={28}/> <h4>Multi Factor Authentication</h4></div>
          <div className="sec-item"><Database size={28}/> <h4>Secure Financial Records</h4></div>
          <div className="sec-item"><Server size={28}/> <h4>Automated Data Backup</h4></div>
          <div className="sec-item"><Activity size={28}/> <h4>Compliance Monitoring</h4></div>
        </div>
      </AnimatedSection>

      {/* 12. User Hierarchy */}
      <AnimatedSection className="hierarchy-section">
        <SectionHeading title="Access Hierarchy" subtitle="Strict role-based permissions matrix" icon={Users} />
        <div className="hierarchy-tree">
          {["Government", "Police Headquarters", "Finance Directorate", "DGP Office", "ADG", "IG", "DIG", "SP", "District Finance Officer", "Accounts Branch", "Department User"].map((role, i) => (
            <div key={i} className="tree-node">
              <div className="node-box">{role}</div>
              {i < 10 && <div className="node-line"></div>}
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 13. System Architecture */}
      <AnimatedSection id="architecture" className="arch-section bg-darker">
        <SectionHeading title="System Architecture" subtitle="High-performance cloud infrastructure" icon={Server} />
        <div className="arch-diagram">
          <div className="arch-layer">Users &rarr; Web Portal &rarr; Authentication</div>
          <div className="arch-arrow">&darr;</div>
          <div className="arch-layer highlight">Finance Module + AI Engine + Business Logic</div>
          <div className="arch-arrow">&darr;</div>
          <div className="arch-layer">Database &larr;&rarr; Analytics Engine &larr;&rarr; Reporting System</div>
        </div>
      </AnimatedSection>

      {/* 14. Technology Stack */}
      <AnimatedSection className="tech-section">
        <SectionHeading title="Technology Stack" subtitle="Modern enterprise technologies" icon={Cpu} />
        <div className="tech-grid">
          <div className="tech-category">
            <h4>Frontend</h4>
            <p>HTML5, CSS3, JavaScript, React, Bootstrap, Chart.js, Framer Motion</p>
          </div>
          <div className="tech-category">
            <h4>Backend</h4>
            <p>ASP.NET Core (.NET 9), REST API, SignalR, Microservices</p>
          </div>
          <div className="tech-category">
            <h4>Database</h4>
            <p>SQL Server Enterprise, Redis Cache, Data Lake</p>
          </div>
          <div className="tech-category">
            <h4>AI & Cloud</h4>
            <p>Python, ML, NLP, OCR, Azure Cloud, Docker, Kubernetes, Power BI</p>
          </div>
        </div>
      </AnimatedSection>

      {/* 15. Benefits */}
      <AnimatedSection className="benefits-section bg-darker">
        <SectionHeading title="Platform Benefits" subtitle="Why Police Administrations choose AI Finance" icon={TrendingUp} />
        <div className="benefits-list">
          <ul>
            <li><CheckCircle2 size={16} /> Better Budget Planning</li>
            <li><CheckCircle2 size={16} /> Transparent Financial Management</li>
            <li><CheckCircle2 size={16} /> Reduced Manual Work</li>
            <li><CheckCircle2 size={16} /> Real-Time Budget Monitoring</li>
            <li><CheckCircle2 size={16} /> Intelligent Decision Support</li>
          </ul>
          <ul>
            <li><CheckCircle2 size={16} /> Improved Audit Readiness</li>
            <li><CheckCircle2 size={16} /> Automated Cost Optimization</li>
            <li><CheckCircle2 size={16} /> Total Financial Accountability</li>
            <li><CheckCircle2 size={16} /> Paperless Finance Operations</li>
          </ul>
        </div>
      </AnimatedSection>

      {/* 16. Future Roadmap */}
      <AnimatedSection className="roadmap-section">
        <SectionHeading title="Future Roadmap" subtitle="The evolution of financial governance" icon={Link} />
        <div className="roadmap-path">
          <div className="rm-step"><span>1</span> Digital Finance</div>
          <div className="rm-line"></div>
          <div className="rm-step"><span>2</span> AI Budget Intelligence</div>
          <div className="rm-line"></div>
          <div className="rm-step"><span>3</span> Predictive Finance</div>
          <div className="rm-line"></div>
          <div className="rm-step"><span>4</span> Autonomous Financial Monitoring</div>
          <div className="rm-line"></div>
          <div className="rm-step"><span>5</span> Smart Government Platform</div>
        </div>
      </AnimatedSection>

      {/* 17. Footer */}
      <footer className="landing-footer">
        <div className="footer-links">
          <span>Documentation</span>
          <span>System Architecture</span>
          <span>Modules</span>
          <span>Technology</span>
          <span>Security</span>
          <span>API</span>
          <span>Support</span>
          <span>Version 2.0</span>
        </div>
        <div className="footer-copyright">
          &copy; 2026 UP POLICE AI COMMAND CENTER - FINANCE DIRECTORATE. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default FinanceLanding;
