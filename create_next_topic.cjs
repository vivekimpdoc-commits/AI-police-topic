const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const templatePath = path.join(__dirname, 'template.txt');
const template = fs.readFileSync(templatePath, 'utf8');

const newModule = {
    file: 'GlobalThreatIntelligenceDetailed.jsx',
    component: 'GlobalThreatIntelligenceDetailed',
    titleEn: 'AI Global Threat Intelligence & Interpol Sync',
    titleHi: 'एआई ग्लोबल थ्रेट इंटेलिजेंस',
    description: 'Advanced global threat monitoring platform linking interpol databases, cross-border intelligence, and global terror watchlists in real-time.',
    icon: 'Globe',
    aiExperts: [
        { name: "Interpol Database Sync Agent", icon: "Database", desc: "Real-time sync with Interpol red notices." },
        { name: "Global Terror Watchlist Monitor", icon: "ShieldAlert", desc: "Monitors global terror lists automatically." },
        { name: "Cross-Border Smuggling Predictor", icon: "TrendingUp", desc: "Predicts smuggling routes across borders." },
        { name: "International Extradition Tracker", icon: "FileText", desc: "Tracks extradition cases globally." },
        { name: "Dark Web Global Arms Tracker", icon: "Crosshair", desc: "Tracks illegal arms sales globally." },
        { name: "Crypto Terrorism Finance Tracer", icon: "Activity", desc: "Traces crypto used in global terror." },
        { name: "Global Biometric Matcher", icon: "Fingerprint", desc: "Matches fingerprints with global databases." },
        { name: "Human Trafficking Route Analyst", icon: "Map", desc: "Analyzes international trafficking routes." },
        { name: "Transnational Gang Link Predictor", icon: "Network", desc: "Predicts links between global gangs." },
        { name: "Global Cyber Attack Warning AI", icon: "Shield", desc: "Early warning for global cyber attacks." },
        { name: "Deep Web Narcotic Sales Tracker", icon: "Search", desc: "Tracks drug sales on the deep web." },
        { name: "Global OSINT Aggregator", icon: "Globe", desc: "Aggregates open source intel globally." }
    ]
};

let content = template.replace(/{{COMPONENT_NAME}}/g, newModule.component)
                      .replace(/{{MODULE_TITLE_EN}}/g, newModule.titleEn)
                      .replace(/{{MODULE_TITLE_HI}}/g, newModule.titleHi)
                      .replace(/{{MODULE_DESCRIPTION}}/g, newModule.description)
                      .replace(/{{MODULE_ICON}}/g, newModule.icon);

let expertsCode = newModule.aiExperts.map((exp, idx) => `
    {
      id: 'gti-expert-${idx+1}',
      name: "${exp.name}",
      role: "Global Intelligence Analyst",
      capabilities: ["Global Search", "Predictive Alerts", "Data Sync"],
      status: "Active",
      efficiency: Math.floor(Math.random() * 15) + 85,
      icon: ${exp.icon}
    }`).join(',');

content = content.replace(/const aiExperts = \[\];/, `const aiExperts = [${expertsCode}];`);
content = content.replace(/lucide-react';/, `lucide-react';\nimport { useNavigate } from 'react-router-dom';`);

content = content.replace(/<button className="expert-action-btn">/g, `<button className="expert-action-btn" onClick={() => navigate(\`/agent/\${expert.name.replace(/\\s+/g, '')}\`)}>`);

// insert useNavigate inside component
content = content.replace(/const \[searchTerm, setSearchTerm\] = useState\(''\);/, `const [searchTerm, setSearchTerm] = useState('');\n  const navigate = useNavigate();`);

// Ensure required icons are imported
content = content.replace(/import {.*?}.*?lucide-react';/, `import { Brain, ShieldAlert, Cpu, Network, Zap, Lock, Database, FileText, Search, TrendingUp, Crosshair, Activity, Fingerprint, Map, Shield, Globe } from 'lucide-react';`);

fs.writeFileSync(path.join(targetDir, newModule.file), content);
console.log('Created ' + newModule.file);

// Update App.jsx
let appJsx = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
if (!appJsx.includes(newModule.component)) {
    appJsx = appJsx.replace(/import DynamicAgent from '\.\/pages\/DynamicAgent';/, `import DynamicAgent from './pages/DynamicAgent';\nimport ${newModule.component} from './pages/${newModule.file.replace('.jsx', '')}';`);
    appJsx = appJsx.replace(/<Route path="\/agent\/:agentName" element={<DynamicAgent \/>} \/>/, `<Route path="/agent/:agentName" element={<DynamicAgent />} />\n        <Route path="/global-threat-intelligence" element={<${newModule.component} />} />`);
    fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx);
    console.log('Updated App.jsx with ' + newModule.component);
}
