const fs = require('fs');

let app = fs.readFileSync('src/App.jsx', 'utf8');

if (!app.includes('NetworkBackground')) {
  app = app.replace(
    "import TopNav from './components/TopNav';",
    "import TopNav from './components/TopNav';\nimport NetworkBackground from './components/NetworkBackground';\nimport AICopilotWidget from './components/AICopilotWidget';"
  );
}

if (!app.includes('<NetworkBackground />')) {
  app = app.replace(
    '<div className="hud-glow"></div>',
    '<div className="hud-glow"></div>\n        <NetworkBackground />'
  );
}

if (!app.includes('<AICopilotWidget />')) {
  app = app.replace(
    '<TopNav />',
    '<TopNav />\n        <AICopilotWidget />'
  );
}

fs.writeFileSync('src/App.jsx', app);
console.log('App.jsx updated with Copilot and NetworkBackground');
