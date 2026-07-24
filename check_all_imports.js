import fs from 'fs';
import path from 'path';

const pagesDir = 'c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic\\src\\pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const importMatch = content.match(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/);
  const importedTags = importMatch ? importMatch[1].split(',').map(s => s.trim()) : [];
  
  // Find all JSX tags <Tag> or <Tag ...>
  const tagMatches = [...content.matchAll(/<([A-Z][a-zA-Z0-9]*)/g)];
  for (const m of tagMatches) {
    const tag = m[1];
    
    // Ignore native components or components imported from other places
    if (tag === 'AnimatePresence' || tag === 'Route' || tag === 'Routes') continue;
    
    // If it's not imported from lucide-react
    if (!importedTags.includes(tag)) {
      // Check if it's declared locally as a function or const
      const isLocallyDeclared = content.includes(`function ${tag}`) || content.includes(`const ${tag} =`);
      if (!isLocallyDeclared) {
        console.log(`ERROR: ${file} uses <${tag}> but it's neither imported from lucide-react nor declared locally!`);
      }
    }
  }
}
console.log('Check complete.');
