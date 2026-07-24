import fs from 'fs';
import path from 'path';

const pagesDir = 'c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic\\src\\pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('TrendingUp')) {
    const importMatch = content.match(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"]/);
    if (importMatch) {
      if (!importMatch[1].includes('TrendingUp')) {
        console.log(`${file} is MISSING TrendingUp in import!`);
      }
    } else {
      console.log(`${file} does not import from lucide-react at all but uses TrendingUp!`);
    }
  }
}
console.log('Check complete.');
