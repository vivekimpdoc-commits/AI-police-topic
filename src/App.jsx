import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import { modules } from './data/modules';
import ModulePage from './components/ModulePage';
import Home from './pages/Home';
import HRMSDetailed from './pages/HrmsDetailed';
import FinanceDetailed from './pages/FinanceDetailed';
import ProcurementDetailed from './pages/ProcurementDetailed';
import AuditDetailed from './pages/AuditDetailed';
import DocumentDetailed from './pages/DocumentDetailed';
import AgentDetailed from './pages/AgentDetailed';
import KnowledgeDetailed from './pages/KnowledgeDetailed';
import DecisionDetailed from './pages/DecisionDetailed';
import TwinDetailed from './pages/TwinDetailed';
import InvestigationDetailed from './pages/InvestigationDetailed';
import CopilotDetailed from './pages/CopilotDetailed';
import MultimodalDetailed from './pages/MultimodalDetailed';
import ModelManagementDetailed from './pages/ModelManagementDetailed';
import DataLakeDetailed from './pages/DataLakeDetailed';
import ResearchLabDetailed from './pages/ResearchLabDetailed';
import CommandCenterDetailed from './pages/CommandCenterDetailed';
import TopicContent from './pages/TopicContent';
import TopicDetail from './pages/TopicDetail';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Globe, ShieldAlert } from 'lucide-react';

const TopNav = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem', background: 'rgba(11, 20, 38, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(6, 182, 212, 0.3)', zIndex: 1000, boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <ShieldAlert color="#06b6d4" size={24} />
        <span style={{ color: '#fff', fontWeight: 800, letterSpacing: '2px', fontSize: '1.1rem' }}>UP POLICE <span style={{ color: '#06b6d4' }}>AI COMMAND</span></span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
          <span style={{ color: '#10b981', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 'bold' }}>SYSTEM ONLINE</span>
        </div>
        
        <button 
          onClick={toggleLanguage}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid #06b6d4',
            color: '#06b6d4',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'var(--font-family)',
            fontWeight: 600,
            letterSpacing: '1px',
            fontSize: '0.8rem',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = '#06b6d4'; e.currentTarget.style.color = '#000'; e.currentTarget.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.5)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; e.currentTarget.style.color = '#06b6d4'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <Globe size={14} /> 
          {language === 'en' ? 'हिंदी' : 'ENGLISH'}
        </button>
      </div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="page-transition">
            <Home />
          </motion.div>
        } />
        <Route path="/hrms" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <HRMSDetailed />
          </motion.div>
        } />
        <Route path="/finance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FinanceDetailed />
          </motion.div>
        } />
        <Route path="/procurement" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ProcurementDetailed />
          </motion.div>
        } />
        <Route path="/audit" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AuditDetailed />
          </motion.div>
        } />
        <Route path="/document" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DocumentDetailed />
          </motion.div>
        } />
        <Route path="/multi-agent" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AgentDetailed />
          </motion.div>
        } />
        <Route path="/knowledge-graph" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <KnowledgeDetailed />
          </motion.div>
        } />
        <Route path="/decision-support" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DecisionDetailed />
          </motion.div>
        } />
        <Route path="/digital-twin" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TwinDetailed />
          </motion.div>
        } />
        <Route path="/investigation-assistant" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InvestigationDetailed />
          </motion.div>
        } />
        <Route path="/copilot" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CopilotDetailed />
          </motion.div>
        } />
        <Route path="/multimodal" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MultimodalDetailed />
          </motion.div>
        } />
        <Route path="/model-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ModelManagementDetailed />
          </motion.div>
        } />
        <Route path="/data-lake" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DataLakeDetailed />
          </motion.div>
        } />
        <Route path="/research-lab" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ResearchLabDetailed />
          </motion.div>
        } />
        <Route path="/command-center" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommandCenterDetailed />
          </motion.div>
        } />
        <Route path="/topic/:topicName/content" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="page-transition">
            <TopicContent />
          </motion.div>
        } />
        <Route path="/topic/:topicName" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="page-transition">
            <TopicDetail />
          </motion.div>
        } />
        <Route path="/module/:moduleId" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="page-transition">
            <ModulePage modules={modules} />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="hud-grid"></div>
        <div className="hud-scanlines"></div>
        <div className="hud-glow"></div>
        <TopNav />
        
        <div className="dashboard-layout">
          <main className="main-content scrollbar-hide" style={{ paddingTop: '80px' }}>
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
