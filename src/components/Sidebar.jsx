import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldAlert, Fingerprint, Database, Cpu, Activity, GlobeLock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Sidebar = ({ modules }) => {
  const location = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  const getIcon = (id) => {
    switch (id) {
      case 'module-01': return <Activity size={18} />;
      case 'module-02': return <GlobeLock size={18} />;
      case 'module-03': return <Database size={18} />;
      case 'module-04': return <Fingerprint size={18} />;
      case 'module-05': return <Cpu size={18} />;
      default: return <ShieldAlert size={18} />;
    }
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-title neon-text">
        <span style={{ fontSize: '0.85rem', display: 'block', color: 'var(--color-primary)', letterSpacing: '2px', marginBottom: '4px' }}>{t.titleSub}</span>
        {t.titleMain}
      </div>
      <ul className="module-list scrollbar-hide">
        <li className={`module-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/" className="module-link">
             <Activity size={18} style={{ marginRight: '10px' }} /> {t.mainHud}
          </Link>
        </li>

      </ul>
      <div style={{ padding: '1rem', borderTop: 'var(--glass-border)', fontSize: '0.75rem', color: 'var(--color-secondary)', textAlign: 'center', letterSpacing: '2px' }}>
        {t.secureConnection}
      </div>
    </nav>
  );
};

export default Sidebar;
