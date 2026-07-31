import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Command, Activity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { modules } from '../data/modules';

const AICopilotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Nexus AI Copilot initialized. How can I assist you with the 108 modules?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    // Simple AI simulation logic
    const lowerInput = input.toLowerCase();
    let botReply = '';
    let matchedModules = [];

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      botReply = 'Hello Officer! Need to locate a specific AI subsystem?';
    } else {
      matchedModules = modules.filter(m => 
        m.nameEn.toLowerCase().includes(lowerInput) || 
        m.subTopicsEn.some(sub => sub.toLowerCase().includes(lowerInput))
      ).slice(0, 3);

      if (matchedModules.length > 0) {
        botReply = `I found ${matchedModules.length} module(s) matching "${input}":`;
      } else {
        botReply = `I couldn't find any direct matches for "${input}". Try searching for keywords like "cyber", "drone", or "forensics".`;
      }
    }

    const botMessage = { sender: 'bot', text: botReply, links: matchedModules };
    
    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 600);

    setInput('');
  };

  return (
    <>
      {/* Floating Action Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)',
          zIndex: 9999,
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: isOpen ? 'scale(0.8)' : 'scale(1)'
        }}
        onMouseOver={(e) => { e.currentTarget.style.transform = isOpen ? 'scale(0.85)' : 'scale(1.1)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = isOpen ? 'scale(0.8)' : 'scale(1)'; }}
      >
        {isOpen ? <X size={28} color="#000" /> : <Bot size={32} color="#000" />}
      </div>

      {/* Chat Interface */}
      <div style={{
        position: 'fixed',
        bottom: '100px',
        right: '30px',
        width: '380px',
        height: '500px',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(56, 189, 248, 0.3)',
        borderRadius: '16px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(56, 189, 248, 0.1)',
        zIndex: 9998,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none'
      }}>
        {/* Header */}
        <div style={{
          padding: '1rem',
          background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.1) 0%, rgba(15,23,42,0) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Bot size={24} color="var(--color-primary)" />
          <div>
            <h3 style={{ margin: 0, fontSize: '1rem', color: '#fff', letterSpacing: '1px' }}>NEXUS AI COPILOT</h3>
            <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
              SYSTEM ONLINE
            </span>
          </div>
        </div>

        {/* Message Area */}
        <div style={{
          flex: 1,
          padding: '1rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              background: msg.sender === 'user' ? 'var(--color-primary)' : 'rgba(255,255,255,0.05)',
              color: msg.sender === 'user' ? '#000' : '#fff',
              padding: '10px 14px',
              borderRadius: msg.sender === 'user' ? '14px 14px 0 14px' : '14px 14px 14px 0',
              border: msg.sender === 'bot' ? '1px solid rgba(255,255,255,0.1)' : 'none',
              fontSize: '0.9rem',
              lineHeight: 1.4
            }}>
              {msg.text}
              
              {/* Render matched module links if present */}
              {msg.links && msg.links.length > 0 && (
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {msg.links.map(mod => (
                    <Link 
                      key={mod.id} 
                      to={`/module/${mod.id}`}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--color-primary)',
                        padding: '8px', borderRadius: '8px', color: 'var(--color-primary)', textDecoration: 'none',
                        fontSize: '0.8rem', fontWeight: 'bold'
                      }}
                    >
                      <Zap size={14} /> {mod.nameEn}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{
          padding: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          gap: '10px'
        }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Command size={16} color="#94a3b8" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              placeholder="Ask Copilot..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                width: '100%',
                padding: '10px 10px 10px 34px',
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>
          <button 
            onClick={handleSend}
            style={{
              background: 'var(--color-primary)',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#000'
            }}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default AICopilotWidget;
