import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Bot, LayoutDashboard, Database, Shield, Rocket, 
  FileText, Activity, Network, ArrowLeft, Terminal, Cpu,
  CheckCircle, ShieldAlert, PieChart, HeartHandshake, Eye, Landmark
} from 'lucide-react';
import '../styles/hrmsDetailed.css'; 

const aiExperts = [
  "School Perimeter Sentinel AI", "Hospital VIP Escort Router", "Religious Crowd Modeler", 
  "Tourist Sentiment Tracker", "Industrial Hazmat Detector", "Metro Platform Safety AI", 
  "Railway Baggage Anomaly Bot", "Stampede Prevention Bot", "Lost Child Re-uniter AI",
  "Aggressive Panning Detector", "Airport Facial Matcher", "Backend Developer AI", 
  "Database Engineer AI", "AI/ML Engineer AI", "Cyber Security Engineer AI"
];

const safetyModules = [
  {
    title: "School & College Safety",
    icon: <Shield size={20} />,
    items: ["Bus Route Geo-Fencing", "Bullying/Fight Detection in Corridors", "Stranger Loitering Alerts", "Automated Lockdown Triggers"]
  },
  {
    title: "Hospital & VIP Security",
    icon: <Activity size={20} />,
    items: ["Emergency Room Aggression Flags", "Ambulance 'Green Corridor' Sync", "VIP Entry Path Clearing", "Infant Abduction Alerts"]
  },
  {
    title: "Religious & Tourist Places",
    icon: <Landmark size={20} />,
    items: ["Stampede/Crowd Density Alerts", "Suspicious Baggage Drops", "Tourist Multi-Lingual Help Kiosks", "Pickpocket Pattern Recognition"]
  },
  {
    title: "Railway & Metro Security",
    icon: <Network size={20} />,
    items: ["Platform Edge Crossing Alerts", "Unattended Object Detection", "Face Recognition on Turnstiles", "Track Intrusion Detection"]
  },
  {
    title: "Industrial & Market Zones",
    icon: <Eye size={20} />,
    items: ["Hazmat/Chemical Leak Alarms", "Night-Time Intrusion Vectors", "Market Fire Outbreak Sensors", "Automated Shoplifting Analytics"]
  }
];

const aiFeatures = [
  "AI Crowd Fluid Dynamics Modeling", "AI Edge-Based Facial Recognition", "AI Object Permanence Tracking",
  "AI Multi-spectral Fire Detection", "AI Emotional Contagion Analysis (Riots)", "AI Automated 'Green Corridor' Routing",
  "AI Acoustic Glass Break Detection", "AI Fall/Medical Emergency Detection"
];

const databases = [
  "School_Bus_Telematics", "Known_Offender_Watchlist", "Crowd_Density_Heatmaps", "Hospital_Bed_Availability", "Tourist_Help_Logs", 
  "Railway_CCTV_Meta", "Industrial_Hazmat_Sensors", "Market_CCTV_Feeds", "VIP_Movement_Schedules", "Emergency_Contact_DB"
];

const dashboards = [
  "Live City-Wide Crowd Density", "School & Transport Safety", "Railway/Metro Threat Alerts", 
  "Hospital ER & Ambulance Sync", "Tourist Assistance Hotspots", "Industrial Zone Health"
];

const apis = [
  "Smart City Command Center (ICCC)", "Railway Protection Force (RPF) DB", "Metro Operations Control (OCC)", "Tourism Dept Helplines",
  "Health Ministry Hospital Sync", "Industrial Pollution Control Boards"
];

const reports = [
  "Weekly Crowd Safety Index", "School Vulnerability Audits", "Tourist Incident Resolution Time", 
  "Railway Unattended Baggage Stats", "Hospital Security Breaches", "Industrial Emergency Response Time"
];

const security = [
  "Anonymized Face-Blurring (Privacy)", "Decentralized Edge Node Processing", "Strict API Quotas for CCTV", 
  "End-to-End Encrypted Feeds", "Automatic Deletion of Non-Threat Data", 
  "Role-Based Video Export Rights", "Watermarked Video Evidence", "Zero-Trust IoT Sensor Networks"
];

const futureScope = [
  "Drone-based Life Preserver Drops", "AI Holographic Crowd Control", "Robotic Bomb-Disposal Sentinels",
  "Predictive Crime-Hotspot Policing", "Smart-Glass AR for Patrolling", "Subway Autonomous Patrol Dogs"
];

const tabs = [
  { id: 'overview', label: 'Platform Overview', icon: <FileText size={18} /> },
  { id: 'experts', label: 'Safety Bots', icon: <Bot size={18} /> },
  { id: 'modules', label: 'Security Modules', icon: <LayoutDashboard size={18} /> },
  { id: 'features', label: 'AI Capabilities', icon: <Cpu size={18} /> },
  { id: 'architecture', label: 'Tech Stack & DB', icon: <Database size={18} /> },
  { id: 'reports', label: 'Command Dashboards', icon: <PieChart size={18} /> },
  { id: 'security', label: 'Security & Roadmap', icon: <Shield size={18} /> }
];

const PublicSafetyDetailed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="overview-panel premium-module-panel">
            <h2 style={{ color: '#06b6d4', marginBottom: '1.5rem', borderBottom: '1px solid rgba(6,182,212,0.3)', paddingBottom: '1rem' }}>
              <HeartHandshake className="inline-icon" size={28} /> AI Public Safety & Infrastructure
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem' }}>
              <strong>AI Public Safety</strong> connects isolated security systems into one unified brain. It protects vulnerable sectors—like schools, hospitals, and railways—by instantly detecting crowd stampedes, unattended baggage, or unauthorized intrusions before human operators even notice.
            </p>

            <div className="split-section" style={{ gap: '1.5rem' }}>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Shield className="inline-icon" color="#3b82f6" /> School & Hospital Safety</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Monitors school buses via GPS. In hospitals, AI detects escalating aggression in Emergency Rooms or attempts at infant abduction, instantly locking specific wards and alerting security.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Landmark className="inline-icon" color="#10b981" /> Crowd & Stampede Control</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>At religious festivals or tourist hubs, AI continuously calculates crowd density per square meter. If it crosses a critical threshold, it alerts police to divert foot traffic to prevent stampedes.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Network className="inline-icon" color="#f59e0b" /> Railway & Metro Security</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Connects to railway CCTV to flag unattended bags left for more than 5 minutes. Detects if a person crosses the platform edge or intrudes onto the tracks, automatically halting approaching trains.</p>
              </div>
              <div className="panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}><Eye className="inline-icon" color="#ef4444" /> Market & Industrial Monitoring</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Uses thermal cameras in crowded markets to detect fire outbreaks instantly. Interfaces with IoT sensors in industrial zones to sound the alarm on toxic chemical/gas leaks.</p>
              </div>
            </div>
          </motion.div>
        );
      case 'experts':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid experts-grid">
            {aiExperts.map((expert, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan">
                <Bot className="card-icon" />
                <h4>{expert}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'modules':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="module-accordion">
            {safetyModules.map((mod, i) => (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="premium-module-panel">
                <div className="module-header">
                  {mod.icon}
                  <h3>{mod.title}</h3>
                </div>
                <div className="module-tags">
                  {mod.items.map((item, j) => (
                    <span key={j} className="module-tag">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'features':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="content-grid">
            {aiFeatures.map((feat, i) => (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-purple">
                <Cpu className="card-icon" />
                <h4>{feat}</h4>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'architecture':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="split-section">
              <div className="panel">
                <h3><Database className="inline-icon" color="#06b6d4" /> Database Tables</h3>
                <div className="tag-cloud">
                  {databases.map((db, i) => <span key={i} className="tech-tag">{db}</span>)}
                </div>
              </div>
              <div className="panel">
                <h3><Network className="inline-icon" color="#8b5cf6" /> System APIs</h3>
                <div className="tag-cloud">
                  {apis.map((api, i) => <span key={i} className="tech-tag tech-tag-alt">{api}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'reports':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
             <div className="split-section">
              <div className="panel">
                <h3><LayoutDashboard className="inline-icon" color="#3b82f6" /> Dashboards</h3>
                <ul className="premium-list">
                  {dashboards.map((d, i) => <li key={i}><CheckCircle size={16} color="#3b82f6"/> {d}</li>)}
                </ul>
              </div>
              <div className="panel">
                <h3><FileText className="inline-icon" color="#10b981" /> Generated Reports</h3>
                <ul className="premium-list">
                  {reports.map((r, i) => <li key={i}><CheckCircle size={16} color="#10b981"/> {r}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case 'security':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
             <div className="split-section">
              <div className="panel highlight-red">
                <h3><ShieldAlert className="inline-icon" color="#ef4444" /> Security Protocols</h3>
                <ul className="premium-list">
                  {security.map((s, i) => <li key={i}><Shield size={16} color="#ef4444"/> {s}</li>)}
                </ul>
              </div>
              <div className="panel highlight-green">
                <h3><Rocket className="inline-icon" color="#10b981" /> Future Enhancements</h3>
                <ul className="premium-list">
                  {futureScope.map((f, i) => <li key={i}><Terminal size={16} color="#10b981"/> {f}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="hrms-detailed-page">
      <div className="hrms-bg-fx"></div>
      <div className="hrms-grid-overlay"></div>
      
      {/* Header */}
      <header className="hrms-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} /> BACK TO MODULES
        </button>
        <div className="header-titles">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="icon-wrapper">
            <HeartHandshake size={40} color="#06b6d4" />
          </motion.div>
          <div>
            <h1 className="cyber-title">PUBLIC <span>SAFETY</span></h1>
            <p className="cyber-subtitle">Crowd Dynamics, School Security & Transport Safety AI</p>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="hrms-layout">
        {/* Sidebar Nav */}
        <nav className="hrms-sidebar">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="hrms-content-area">
          <AnimatePresence mode="wait">
            <div key={activeTab}>
              {renderContent()}
            </div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default PublicSafetyDetailed;
