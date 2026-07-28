const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');

const files = fs.readdirSync(pagesDir);
let fixedCount = 0;

files.forEach(file => {
  if (file.endsWith('Detailed.jsx') && file !== 'StateBorderCheckDetailed.jsx') {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the <h2> title to extract the actual text
    // Example: <ShieldAlert className="inline-icon" size={28} /> AI INVESTIGATION QUALITY REVIEW
    const h2Match = content.match(/<ShieldAlert className="inline-icon" size=\{28\} \/>\s*(.*?)\s*<\/h2>/);
    
    if (h2Match && h2Match[1]) {
      const fullTitle = h2Match[1].trim(); // "AI INVESTIGATION QUALITY REVIEW"
      const words = fullTitle.split(' ');
      const lastWord = words.pop(); // "REVIEW"
      const restOfTitle = words.join(' '); // "AI INVESTIGATION QUALITY"
      
      const newCyberTitle = `<h1 className="cyber-title">${restOfTitle} <span>${lastWord}</span></h1>`;
      
      // We know the broken ones start with AI STATE BORDER <span>CHECK
      const oldCyberTitleRegex = /<h1 className="cyber-title">AI STATE BORDER <span>CHECK.*?<\/span><\/h1>/;
      
      if (oldCyberTitleRegex.test(content)) {
        content = content.replace(oldCyberTitleRegex, newCyberTitle);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    }
  }
});

console.log(`Finished fixing titles. Total fixed: ${fixedCount}`);
