const fs = require('fs');
const files = [
  'MultiAgentDetailed.jsx', 'KnowledgeDetailed.jsx', 'DecisionDetailed.jsx',
  'TwinDetailed.jsx', 'InvestigationDetailed.jsx', 'CopilotDetailed.jsx',
  'MultimodalDetailed.jsx'
];

let allTopics = new Set();
let globalDuplicates = [];

files.forEach(file => {
  const path = 'c:/Users/DELL/OneDrive/Desktop/AI topic for html/AI poilc topic/AI-police-topic/src/pages/' + file;
  if (!fs.existsSync(path)) return;
  const content = fs.readFileSync(path, 'utf-8');
  
  // Extract aiExperts array string
  const match = content.match(/const aiExperts = \[([\s\S]*?)\];/);
  if (match) {
    const arrayStr = match[1];
    // Simple parsing by splitting on quotes
    const topics = arrayStr.split('\"').filter((_, i) => i % 2 !== 0);
    
    let localSet = new Set();
    let localDupes = [];
    
    topics.forEach(t => {
      if (localSet.has(t)) localDupes.push(t);
      else localSet.add(t);
      
      if (allTopics.has(t)) globalDuplicates.push(t);
      else allTopics.add(t);
    });
    
    console.log(file + ' -> Total: ' + topics.length + ' Unique: ' + localSet.size);
    if (localDupes.length > 0) {
      console.log('   LOCAL DUPES: ', localDupes);
    }
  }
});

if (globalDuplicates.length > 0) {
    console.log('GLOBAL DUPES (Across all files): ', [...new Set(globalDuplicates)]);
} else {
    console.log('No global duplicates found.');
}
