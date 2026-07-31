const fs = require('fs');

let app = fs.readFileSync('src/pages/Home.jsx', 'utf8');

if (!app.includes('Mic, MicOff')) {
  app = app.replace(
    "import { Search, ShieldAlert, Fingerprint, Database, Cpu, Activity, GlobeLock, FolderKanban, Zap, Network, ChevronLeft, ChevronRight, Clock, CalendarDays } from 'lucide-react';",
    "import { Search, ShieldAlert, Fingerprint, Database, Cpu, Activity, GlobeLock, FolderKanban, Zap, Network, ChevronLeft, ChevronRight, Clock, CalendarDays, Mic, MicOff } from 'lucide-react';"
  );
}

if (!app.includes('isListening')) {
  app = app.replace(
    "const [searchTerm, setSearchTerm] = useState('');",
    `const [searchTerm, setSearchTerm] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = language === 'en' ? 'en-US' : 'hi-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchTerm(transcript);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognition.start();
    } else {
      alert("Voice search is not supported in this browser.");
    }
  };`
  );
}

if (!app.includes('startListening')) {
  app = app.replace(
    /<input\s+type="text"[\s\S]*?onBlur=\{.*?\}\s*\/>/m,
    `$&
            <button 
              onClick={startListening}
              style={{ 
                position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', 
                background: 'transparent', border: 'none', cursor: 'pointer', 
                color: isListening ? '#ef4444' : 'var(--color-primary)',
                animation: isListening ? 'pulse 1.5s infinite' : 'none'
              }}
              title="Voice Search"
            >
              {isListening ? <MicOff size={22} /> : <Mic size={22} />}
            </button>`
  );
}

fs.writeFileSync('src/pages/Home.jsx', app);
console.log('Home.jsx updated with Voice Search');
