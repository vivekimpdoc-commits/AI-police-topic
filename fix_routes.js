const fs = require('fs');

let app = fs.readFileSync('src/App.jsx', 'utf8');

if (!app.includes('GlobalThreatIntelligenceDetailed')) {
  app = app.replace("import React from 'react';", "import React from 'react';\nimport GlobalThreatIntelligenceDetailed from './pages/GlobalThreatIntelligenceDetailed';\nimport MetaverseVRTrainingDetailed from './pages/MetaverseVRTrainingDetailed';");
}

if (!app.includes('path="/module/global-threat-intelligence"')) {
  app = app.replace("        </Routes>", '          <Route path="/module/global-threat-intelligence" element={<GlobalThreatIntelligenceDetailed />} />\n          <Route path="/module/metaverse-vr-training" element={<MetaverseVRTrainingDetailed />} />\n        </Routes>');
}

// Ensure DynamicAgent is added correctly, wait, DynamicAgent is for '/agent/:agentName'. Let's see if it's there.
if (!app.includes('<Route path="/agent/:agentName" element={<DynamicAgent />} />')) {
  app = app.replace("        </Routes>", '          <Route path="/agent/:agentName" element={<DynamicAgent />} />\n        </Routes>');
}
if (!app.includes("import DynamicAgent from './pages/DynamicAgent';")) {
  app = app.replace("import React from 'react';", "import React from 'react';\nimport DynamicAgent from './pages/DynamicAgent';");
}

fs.writeFileSync('src/App.jsx', app);
console.log('App.jsx updated with routes!');
