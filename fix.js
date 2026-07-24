import fs from 'fs';
import path from 'path';

const dir = 'c:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\AI topic for html\\\\AI poilc topic\\\\AI-police-topic\\\\src\\\\pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Detailed.jsx'));

files.forEach(file => {
  const filepath = path.join(dir, file);
  let code = fs.readFileSync(filepath, 'utf8');
  
  // Clean up previous mess
  code = code.replace(/import\s+\{\s*\\n/g, 'import { \n');
  code = code.replace(/\\n\s*\}\s*from\s+'lucide-react'/g, '\n} from \'lucide-react\'');
  
  const matches = code.matchAll(/<([A-Z][a-zA-Z0-9]+)/g);
  const usedIcons = new Set();
  for (const match of matches) {
    if (match[1] !== 'motion' && match[1] !== 'AnimatePresence' && match[1] !== 'Fragment' && match[1] !== 'CyberCard') {
      usedIcons.add(match[1]);
    }
  }

  const lucideImportRegex = /import\s+\{([^}]+)\}\s+from\s+'lucide-react';/s;
  const match = code.match(lucideImportRegex);
  
  if (match) {
    const existingIcons = new Set(match[1].split(',').map(s => s.trim().replace(/\\n/g, '')).filter(Boolean));
    usedIcons.forEach(icon => existingIcons.add(icon));
    
    // Create new import with actual newlines
    let iconStr = Array.from(existingIcons).join(', ');
    const newImport = 'import { \n  ' + iconStr + '\n} from "lucide-react";';

    code = code.replace(lucideImportRegex, newImport);
    fs.writeFileSync(filepath, code);
  }
});
console.log('Fixed imports successfully!');
