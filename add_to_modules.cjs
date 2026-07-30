const fs = require('fs');
const path = require('path');

const modulesPath = path.join(__dirname, 'src', 'data', 'modules.js');
let modulesData = fs.readFileSync(modulesPath, 'utf8');

const newModuleEntry = `
  {
    id: "global-threat-intelligence",
    nameEn: "AI Global Threat Intelligence & Interpol Sync",
    nameHi: "एआई ग्लोबल थ्रेट इंटेलिजेंस",
    subTopicsEn: [
      "Interpol Database Sync Agent",
      "Global Terror Watchlist Monitor",
      "Cross-Border Smuggling Predictor",
      "International Extradition Tracker",
      "Dark Web Global Arms Tracker",
      "Crypto Terrorism Finance Tracer",
      "Global Biometric Matcher",
      "Human Trafficking Route Analyst",
      "Transnational Gang Link Predictor",
      "Global Cyber Attack Warning AI",
      "Deep Web Narcotic Sales Tracker",
      "Global OSINT Aggregator"
    ]
  }
`;

if (!modulesData.includes('global-threat-intelligence')) {
    // Find the last closing bracket of the array and insert the new module before it
    const lastBracketIndex = modulesData.lastIndexOf(']');
    if (lastBracketIndex !== -1) {
        modulesData = modulesData.slice(0, lastBracketIndex) + ',' + newModuleEntry + '\n' + modulesData.slice(lastBracketIndex);
        fs.writeFileSync(modulesPath, modulesData);
        console.log("Added Global Threat Intelligence to modules.js");
    }
}
