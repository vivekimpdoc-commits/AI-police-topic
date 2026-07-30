const fs = require('fs');
const path = require('path');

const modules = [
  {
    file: 'MultiAgentDetailed.jsx',
    experts: [
      "Swarm Intelligence Coordinator AI", "Cross-Department Orchestrator AI", "Dynamic Resource Allocator AI",
      "Conflict Resolution Agent AI", "Task Delegation Master AI", "Inter-Agency Protocol AI",
      "Load Balancing AI", "Agent Health Monitor AI", "Decentralized Command AI",
      "Intelligence Fusion Center AI", "Human-in-the-Loop AI", "Security Policy AI",
      "Integration Manager AI", "Risk Prediction AI", "Anomaly Detection AI",
      "Executive Command Dashboard AI", "Audit Trail AI"
    ]
  },
  {
    file: 'KnowledgeDetailed.jsx',
    experts: [
      "Entity Resolution AI", "Entity Extraction AI", "Semantic Entity Linking AI",
      "Relationship Discovery AI", "Multi-Hop Relationship Explorer AI", "Graph Embedding AI",
      "Knowledge Graph Builder AI", "Ontology Management AI", "Knowledge Base Manager AI",
      "Criminal Network Analyzer AI", "Criminal Link Prediction AI", "Association Rule Mining AI",
      "Community Detection AI", "Network Centrality Analyzer AI", "Influence Analysis AI",
      "Unknown Entity Discovery AI", "Suspicious Cluster Detection AI", "Hidden Pattern Discovery AI",
      "Graph Pattern Matching AI", "Graph Similarity AI", "Identity Resolution AI",
      "Cross-Database Entity Matching AI", "Multi-Source Data Fusion AI", "Intelligence Fusion AI",
      "Event Correlation AI", "Timeline Correlation AI", "Behavioral Pattern Analysis AI",
      "Criminal Profile Builder AI", "Organization Relationship Mapper AI", "Social Network Intelligence AI",
      "Communication Network Intelligence AI", "Financial Network Intelligence AI", "Location Intelligence AI",
      "Mobility Pattern Analysis AI", "Device Correlation AI", "Digital Identity Correlation AI",
      "Risk Scoring AI", "Threat Prediction AI", "Criminal Activity Prediction AI",
      "Network Evolution Prediction AI", "AI Graph Search Assistant", "Natural Language Graph Query AI",
      "Graph Recommendation Engine AI", "Graph Visualization AI", "Interactive Link Explorer AI",
      "Explainable AI for Link Prediction", "Graph Analytics AI", "Knowledge Graph Quality Validator AI",
      "Graph Consistency Checker AI", "Real-Time Knowledge Graph Update AI", "Streaming Data Correlation AI",
      "Graph Version Control AI", "Knowledge Graph Governance AI", "Metadata Intelligence AI",
      "Data Lineage AI", "AI Investigation Copilot", "Case Intelligence AI",
      "Decision Support AI", "Strategic Intelligence AI", "Executive Knowledge Graph Dashboard AI"
    ]
  },
  {
    file: 'DecisionDetailed.jsx',
    experts: [
      "Riot Prediction AI", "Force Deployment Scorer", "Real-Time Threat Assessor", 
      "Public Sentiment Analyst AI", "Event Security Planner AI", "Tactical Evacuation Agent", 
      "Emergency Triage Coordinator", "Resource Optimization AI", "Weather & Disaster Impact AI",
      "VIP Route Security AI", "Crowd Density Analyzer AI", "Flash Mob Predictor AI",
      "Election Violence Heatmapper", "Festival Crowd Surge Forecaster", "Optimal Station Staffing AI",
      "Anti-Riot Gear Allocator", "Rapid Action Force Dispatcher", "Beat Patrol Routing Optimizer",
      "Emergency Call Prioritization Agent", "Active Shooter Triangulator AI", "Hostage Situation Modeler",
      "Simultaneous Attack Correlator", "VVIP Route Vulnerability Assessor", "Convoy Speed Optimizer",
      "Stadium Crowd Dynamics Modeler", "Sniper Over-watch Positioning AI", "Flood Evacuation Routing Agent",
      "Earthquake Triage AI", "Hospital Bed Sync Coordinator", "Relief Material Supply Chain AI",
      "Multi-Variable Threat Scorer", "Sentiment Shift Trigger AI", "Route Vulnerability Indexer",
      "Optimal Pathfinding AI", "Automatic Escalation Protocol AI", "Drone Recon Deployment AI",
      "Gunfire Acoustic Triangulator", "Predictive Force Exhaustion AI", "Legal Use-of-Force Prompter",
      "DGP Decision Support Matrix AI", "Live Threat Heatmap Generator", "Force Readiness Board AI",
      "VVIP Convoy Tracker AI", "Disaster Command Board AI", "Pre-Event Risk Assessor",
      "Riot Post-Mortem Analyst", "Force Deployment Efficiency AI", "VVIP Security Auditor",
      "Emergency Response Time Profiler", "Resource Depletion Forecaster", "Rank-Based Override Validator",
      "Encrypted Tactical Comm Router", "Decision Audit Trail Analyzer", "Anti-Tamper Sensor Feed AI",
      "Zero-Trust API Gateway Monitor", "Offline Fail-safe Mode Trigger", "Holographic Tactical Table Manager",
      "Neural-Link Command Parser", "Autonomous Drone Coordinator", "Pre-Crime Legal Arbitrator"
    ]
  },
  {
    file: 'TwinDetailed.jsx',
    experts: [
      "3D City Simulator AI", "Traffic Grid Modeler AI", "Virtual Station Load Tester", 
      "Crowd Physics Simulator", "Disaster Impact Modeler AI", "VVIP Route Simulation Agent", 
      "Cyber-Twin Vulnerability Tester", "Emergency Response Optimizer", "Riot Control Simulator AI",
      "Spatial Analytics Expert AI", "Tactical Breach Planner AI", "Flood Dynamics Simulator AI",
      "Earthquake Structural Integrity AI", "Drone Swarm Sandbox Modeler", "Autonomous Vehicle Traffic AI",
      "Sniper Line-of-Sight Calculator", "Blast Radius Physics Engine", "Acoustic Reverberation Modeler",
      "Tear-Gas Dispersion Physics AI", "Virtual VIP Decoy Simulator", "Escape Route Viability Tester",
      "Cyber-Attack Tabletop Exerciser", "Subterranean Network Modeler", "Hospital Surge Capacity Simulator",
      "Emergency Call Center Load Tester", "Evacuation Bottleneck Analyzer", "Cell-Block Capacity Predictor",
      "Smart City Sensor Virtualizer", "Green-Corridor Timing Simulator", "Stadium Stampede Modeler",
      "Festival Crowd Flow Predictor", "Flash-Mob Convergence AI", "Riot Gear Efficacy Tester",
      "Active Shooter VR Scenario AI", "Hostage Negotiation VR Trainer", "Airborne Toxin Drift Modeler",
      "Radio-Frequency Shadow Mapper", "CCTV Blind-Spot Identifier AI", "Telecom Network Overload Modeler",
      "Power Grid Failure Simulator", "Virtual Interrogation Room AI", "Evidence Tampering Simulator",
      "Crime Scene Recreation AI", "Bullet Trajectory Simulator", "High-Speed Chase Physics AI",
      "Virtual Perimeter Security AI", "Facial Recognition Load Tester", "Border Infiltration Modeler",
      "Smuggling Route Simulator AI", "Maritime Port Logistics Twin", "Airspace Violation Modeler AI",
      "Weapon Issue Bottleneck AI", "Shift Handover Optimization AI", "Supply Chain Disruption Twin",
      "Ransomware Blast Radius AI", "Multi-Agency Coordination Twin", "Real-Time Resource Mirror AI",
      "Geolocation Spoofing Simulator", "Virtual Commando Trainer AI", "Future Crime Scenario Generator"
    ]
  },
  {
    file: 'InvestigationDetailed.jsx',
    experts: [
      "FIR Drafting Assistant AI", "Legal Code Matcher AI", "Charge-sheet Summarizer", 
      "Pre-Trial Evidence Scorer", "Interrogation Insight AI", "Cold-Case Correlation Bot", 
      "Witness Testimony Analyzer", "Jurisdiction Mapper AI", "Alibi Verification Agent",
      "Court Precedent Search AI", "Bail Risk Assessor AI", "Voice-to-FIR Dictation AI",
      "IPC/BNS Section Suggester", "Multi-lingual Statement Translator", "Suspect Entity Extractor",
      "Timeline Reconstruction Agent", "Testimony Contradiction Detector", "Historical Judgement Analyzer",
      "Bail Rejection Predictor AI", "Prosecution Strategy Prompter", "Modus Operandi Profiler",
      "Forensic Report Parser AI", "Ballistics Pattern Matcher", "Digital Evidence Timestamp Analyzer",
      "Micro-Expression Detector AI", "Voice Stress Analysis Bot", "Polygraph Data Interpreter",
      "Case Solvability Scorer", "Audio Transcription Agent", "Emotion Classification AI",
      "Witness Sentiment Analyzer", "Automated Evidence Tagger", "Cross-Case Similarity Matcher",
      "Defense Argument Predictor", "Crime Scene Photo Analyzer", "Missing Persons Correlator",
      "Unidentified Body Matcher AI", "Bank Statement Fraud Finder", "Cyber-Footprint Tracer AI",
      "Deepfake Audio Detector", "Threat Letter Authorship AI", "Handwriting Analysis Assistant",
      "Sketch-to-Mugshot AI", "Criminal Nickname Resolver", "Call Data Record (CDR) Summarizer",
      "GPS Ping Triangulation AI", "Drone Footage Analyst AI", "Victim Vulnerability Scorer",
      "Parole Violation Predictor", "Jailhouse Informant Credibility AI", "Evidence Chain-of-Custody Auditor",
      "Post-Mortem Report Interpreter", "DNA Match Probability Calculator", "Surveillance Video Summarizer",
      "Social Media Confession Scraper", "Dark Web Credential Searcher", "Legal Loophole Flagging AI",
      "Judge Sentencing Trend Analyzer", "Warrant Application Drafter", "Virtual Jury Bias Modeler"
    ]
  }
];

function toPascalCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
            .replace(/[^a-zA-Z0-9]/g, '')
            .replace(/^[a-z]/, m => m.toUpperCase());
}

function toKebabCase(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase().replace(/^-+|-+$/g, '');
}

const templatePath = path.join(__dirname, 'template.txt');
const template = fs.readFileSync(templatePath, 'utf8');

let totalGenerated = 0;
let allImportStatements = [];
let allRouteComponents = [];

modules.forEach(mod => {
  const expertRoutes = {};
  mod.experts.forEach(expert => {
    const compName = toPascalCase(expert) + 'Agent';
    const routePath = '/' + toKebabCase(expert) + '-agent';
    const filePath = path.join(__dirname, 'src', 'pages', compName + '.jsx');
    
    expertRoutes[expert] = routePath;
    
    if (!fs.existsSync(filePath)) {
        const content = template.replace(/AGENT_NAME_PASCAL/g, compName)
                                .replace(/AGENT_NAME_DISPLAY/g, expert)
                                .replace(/AGENT_DESCRIPTION/g, `The ${expert} is designed to automate and optimize workflows, providing real-time analytics, predictive modeling, and absolute transparency across administrative and financial protocols.`);
        
        fs.writeFileSync(filePath, content, 'utf8');
        totalGenerated++;
    }
    
    // Defer reading/writing App.jsx till the end
    allImportStatements.push(`import ${compName} from './pages/${compName}';`);
    allRouteComponents.push(`        <Route path="${routePath}" element={<${compName} />} />`);
  });

  // Update the detailed component
  let procJsx = fs.readFileSync(path.join(__dirname, 'src', 'pages', mod.file), 'utf8');
  const routeDictCode = `
const expertRoutes = ${JSON.stringify(expertRoutes, null, 2)};
const isClickable = (expert) => !!expertRoutes[expert];
`;

  if (!procJsx.includes('isClickable')) {
      procJsx = procJsx.replace('const tabs = [', routeDictCode + '\nconst tabs = [');

      const oldMap = `<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }} key={i} className="premium-card highlight-cyan">
                <Bot className="card-icon" />
                <h4>{expert}</h4>
              </motion.div>`;

      const newMap = `<motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ delay: i * 0.03 }} 
                    key={i} 
                    className={\`premium-card highlight-cyan \${isClickable(expert) ? 'clickable-agent-card' : ''}\`}
                    onClick={() => { if (isClickable(expert)) navigate(expertRoutes[expert]); }}
                    style={isClickable(expert) ? { cursor: 'pointer', border: '1px solid #00f0ff', boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)' } : {}}
                  >
                    <Bot className="card-icon" />
                    <h4>{expert}</h4>
                    {isClickable(expert) && <div style={{ fontSize: '0.75rem', color: '#00f0ff', marginTop: '5px' }}>Click to view Agent details</div>}
                  </motion.div>`;

      procJsx = procJsx.replace(oldMap, newMap);

      fs.writeFileSync(path.join(__dirname, 'src', 'pages', mod.file), procJsx, 'utf8');
      console.log(mod.file + ' updated.');
  }
});

if (allImportStatements.length > 0) {
    let appJsx = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');
    
    // filter duplicates out just in case
    let newImports = [];
    let newRoutes = [];
    allImportStatements.forEach((imp, idx) => {
        if (!appJsx.includes(imp)) {
            newImports.push(imp);
            newRoutes.push(allRouteComponents[idx]);
        }
    });

    if (newImports.length > 0) {
        const lines = appJsx.split('\n');
        lines.splice(10, 0, newImports.join('\n'));
        appJsx = lines.join('\n');

        const routeIndex = appJsx.indexOf('</Routes>');
        appJsx = appJsx.substring(0, routeIndex) + newRoutes.join('\n') + '\n      ' + appJsx.substring(routeIndex);

        fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx, 'utf8');
        console.log('App.jsx updated with ' + newImports.length + ' new routes.');
    }
}

console.log('Total agents generated: ' + totalGenerated);
