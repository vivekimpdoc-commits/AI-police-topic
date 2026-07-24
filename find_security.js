import fs from 'fs';
import path from 'path';

const modulesPath = 'c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic\\src\\data\\modules.js';
const content = fs.readFileSync(modulesPath, 'utf8');

const targetKeywords = [
  'Safety',
  'Investigation',
  'Intelligence',
  'Cyber',
  'Predictive',
  'Traffic',
  'Emergency'
];

let currentModule = '';
let currentSubTopics = [];

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const nameMatch = lines[i].match(/nameEn:\s*'([^']+)'/);
  if (nameMatch) {
    if (currentModule && targetKeywords.some(k => currentModule.includes(k))) {
      console.log(`\nModule: ${currentModule}`);
      currentSubTopics.forEach(t => console.log(` - ${t}`));
    }
    currentModule = nameMatch[1];
    currentSubTopics = [];
  }
  
  if (lines[i].includes('subTopicsEn: [')) {
    let j = i + 1;
    while (j < lines.length && !lines[j].includes(']')) {
      const topicMatch = lines[j].match(/'([^']+)'/);
      if (topicMatch) {
        currentSubTopics.push(topicMatch[1]);
      }
      j++;
    }
    i = j;
  }
}

if (currentModule && targetKeywords.some(k => currentModule.includes(k))) {
  console.log(`\nModule: ${currentModule}`);
  currentSubTopics.forEach(t => console.log(` - ${t}`));
}
