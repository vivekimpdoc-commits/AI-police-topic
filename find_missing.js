import fs from 'fs';
import path from 'path';

const modulePageContent = fs.readFileSync('c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic\\src\\components\\ModulePage.jsx', 'utf8');

const dashMapMatch = modulePageContent.match(/const dashMap = {([\s\S]*?)};/);
let mappedModules = [];
if (dashMapMatch) {
  const matches = [...dashMapMatch[1].matchAll(/'(module-\d+)':/g)];
  mappedModules = matches.map(m => m[1]);
}

const modulesContent = fs.readFileSync('c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic\\src\\data\\modules.js', 'utf8');

const missingModules = [];
let currentModule = null;

const lines = modulesContent.split('\n');
for (let i = 0; i < lines.length; i++) {
  const idMatch = lines[i].match(/id:\s*'([^']+)'/);
  if (idMatch) currentModule = idMatch[1];
  
  const nameMatch = lines[i].match(/nameEn:\s*'([^']+)'/);
  if (nameMatch && currentModule && currentModule.startsWith('module-')) {
    if (!mappedModules.includes(currentModule)) {
      missingModules.push(`${currentModule}: ${nameMatch[1]}`);
    }
  }
}

console.log('Modules that ARE NOT mapped in dashMap:');
missingModules.forEach(m => console.log(m));
