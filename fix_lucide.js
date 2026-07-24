import fs from 'fs';
import path from 'path';

const dir = 'c:\\\\Users\\\\DELL\\\\OneDrive\\\\Desktop\\\\AI topic for html\\\\AI poilc topic\\\\AI-police-topic\\\\src\\\\pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Detailed.jsx'));

files.forEach(file => {
  const filepath = path.join(dir, file);
  let code = fs.readFileSync(filepath, 'utf8');
  
  // replace literal \n with actual newline if present from previous run
  code = code.replace(/import \{ \\n/g, 'import { \n');
  code = code.replace(/\\n\} from 'lucide-react'/g, '\n} from \'lucide-react\'');
  
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
    const existingIcons = new Set(match[1].split(',').map(s => s.trim()).filter(Boolean));
    usedIcons.forEach(icon => existingIcons.add(icon));
    
    const newImport = \`import { 
  \${Array.from(existingIcons).join(', ')}
} from 'lucide-react';\`;

    code = code.replace(lucideImportRegex, newImport);
    fs.writeFileSync(filepath, code);
  }
});
console.log('Fixed imports in all Detailed.jsx files');
