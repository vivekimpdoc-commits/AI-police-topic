const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const templatePath = path.join(__dirname, 'template.txt');
const template = fs.readFileSync(templatePath, 'utf8');

const newModule = {
    file: 'MetaverseVRTrainingDetailed.jsx',
    component: 'MetaverseVRTrainingDetailed',
    titleEn: 'AI Metaverse & VR Police Training Platform',
    titleHi: 'एआई मेटावर्स और वीआर ट्रेनिंग प्लेटफॉर्म',
    description: 'Immersive virtual reality training environments powered by AI for realistic combat, negotiation, and riot control simulations.',
    icon: 'Cpu',
    aiExperts: [
        { name: "VR Hostage Negotiation Simulator", icon: "Mic", desc: "Simulates high-stress hostage scenarios." },
        { name: "Active Shooter VR Trainer", icon: "Crosshair", desc: "Dynamic active shooter response training." },
        { name: "Virtual Crime Scene Reconstructor", icon: "Search", desc: "Explore 3D crime scenes in the Metaverse." },
        { name: "Riot Control Phalanx AI Bot", icon: "Shield", desc: "Trains officers in crowd control formations." },
        { name: "Interrogation Stress Test AI", icon: "Brain", desc: "Reads biometric feedback during interrogations." },
        { name: "High-Speed Chase VR Engine", icon: "Activity", desc: "Physics-accurate pursuit driving simulator." },
        { name: "Cyber Warfare Tabletop VR", icon: "Lock", desc: "Command level cyber defense training." },
        { name: "Virtual Courtroom Testify Bot", icon: "Scale", desc: "Prepares officers for hostile cross-examinations." },
        { name: "Drone Swarm Tactical VR", icon: "Network", desc: "Commanding autonomous drones in VR." },
        { name: "Metaverse Undercover Avatar", icon: "User", desc: "Training for dark web undercover ops." },
        { name: "Biometric Combat Stress Tracker", icon: "Heart", desc: "Monitors officer vitals in VR combat." },
        { name: "AI Scenario Director", icon: "Video", desc: "Dynamically alters VR scenarios in real-time." }
    ]
};

let content = template.replace(/{{COMPONENT_NAME}}/g, newModule.component)
                      .replace(/{{MODULE_TITLE_EN}}/g, newModule.titleEn)
                      .replace(/{{MODULE_TITLE_HI}}/g, newModule.titleHi)
                      .replace(/{{MODULE_DESCRIPTION}}/g, newModule.description)
                      .replace(/{{MODULE_ICON}}/g, newModule.icon);

let expertsCode = newModule.aiExperts.map((exp, idx) => `
    {
      id: 'meta-vr-expert-${idx+1}',
      name: "${exp.name}",
      role: "VR Simulation AI",
      capabilities: ["3D Rendering", "Biometric Sync", "Dynamic Scenarios"],
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
content = content.replace(/import {.*?}.*?lucide-react';/, `import { Brain, ShieldAlert, Cpu, Network, Zap, Lock, Database, FileText, Search, TrendingUp, Crosshair, Activity, Fingerprint, Map, Shield, Globe, Mic, Scale, User, Heart, Video } from 'lucide-react';`);

fs.writeFileSync(path.join(targetDir, newModule.file), content);
console.log('Created ' + newModule.file);

// Update App.jsx
let appJsx = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
if (!appJsx.includes(newModule.component)) {
    appJsx = appJsx.replace(/import DynamicAgent from '\.\/pages\/DynamicAgent';/, `import DynamicAgent from './pages/DynamicAgent';\nimport ${newModule.component} from './pages/${newModule.file.replace('.jsx', '')}';`);
    appJsx = appJsx.replace(/<Route path="\/agent\/:agentName" element={<DynamicAgent \/>} \/>/, `<Route path="/agent/:agentName" element={<DynamicAgent />} />\n        <Route path="/metaverse-vr-training" element={<${newModule.component} />} />`);
    fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx);
    console.log('Updated App.jsx with ' + newModule.component);
}

// Update modules.js
const modulesPath = path.join(__dirname, 'src', 'data', 'modules.js');
let modulesData = fs.readFileSync(modulesPath, 'utf8');

const newModuleEntry = `
  {
    id: "metaverse-vr-training",
    nameEn: "${newModule.titleEn}",
    nameHi: "${newModule.titleHi}",
    subTopicsEn: [
      "VR Hostage Negotiation Simulator",
      "Active Shooter VR Trainer",
      "Virtual Crime Scene Reconstructor",
      "Riot Control Phalanx AI Bot",
      "Interrogation Stress Test AI",
      "High-Speed Chase VR Engine",
      "Cyber Warfare Tabletop VR",
      "Virtual Courtroom Testify Bot",
      "Drone Swarm Tactical VR",
      "Metaverse Undercover Avatar",
      "Biometric Combat Stress Tracker",
      "AI Scenario Director"
    ]
  }
`;

if (!modulesData.includes('metaverse-vr-training')) {
    const lastBracketIndex = modulesData.lastIndexOf(']');
    if (lastBracketIndex !== -1) {
        modulesData = modulesData.slice(0, lastBracketIndex) + ',' + newModuleEntry + '\n' + modulesData.slice(lastBracketIndex);
        fs.writeFileSync(modulesPath, modulesData);
        console.log("Added to modules.js");
    }
}
