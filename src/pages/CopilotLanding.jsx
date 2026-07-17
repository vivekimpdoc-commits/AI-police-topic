import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Database, Server, Cpu, Layers, 
  Workflow, Globe, MessageSquare, BookOpen, BrainCircuit
} from 'lucide-react';
import '../styles/hrms.css';

const SectionHeading = ({ title, subtitle, icon: Icon, color = "var(--color-primary)" }) => (
  <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      {Icon && <div style={{ background: `rgba(6, 182, 212, 0.1)`, padding: '12px', borderRadius: '12px', border: `1px solid ${color}40` }}><Icon size={24} color={color} style={{ filter: `drop-shadow(0 0 10px ${color}80)` }} /></div>}
      <h2 style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '2px', color: '#fff', fontSize: '1.8rem' }}>{title}</h2>
    </div>
    {subtitle && <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '1rem', maxWidth: '800px', lineHeight: '1.6' }}>{subtitle}</p>}
  </div>
);

const AnimatedSection = ({ children, style }) => (
  <motion.section 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    style={{ padding: '4rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', ...style }}
  >
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {children}
    </div>
  </motion.section>
);

const TechBadge = ({ icon: Icon, name, type }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(6,182,212,0.3)', padding: '15px 20px', borderRadius: '10px' }}>
    <Icon size={20} color="#06b6d4" />
    <div>
      <h4 style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>{name}</h4>
      <span style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{type}</span>
    </div>
  </div>
);

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative', background: '#0d1117', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#161b22', padding: '10px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ color: '#8b949e', fontSize: '0.8rem', fontFamily: 'monospace' }}>{language}</span>
        <button onClick={copyToClipboard} style={{ background: 'transparent', border: '1px solid #30363d', color: '#c9d1d9', padding: '5px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.background='#30363d'} onMouseOut={e=>e.currentTarget.style.background='transparent'}>
          {copied ? 'COPIED!' : 'COPY CODE'}
        </button>
      </div>
      <pre style={{ padding: '20px', margin: 0, overflowX: 'auto', fontSize: '0.85rem', lineHeight: '1.5', color: '#e6edf3', fontFamily: '"Fira Code", "Courier New", monospace' }}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

const CopilotLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prismaSchemaCode = `// Enterprise AI Conversational Copilot - Schema
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Conversation Storage
model Conversation {
  id          String   @id @default(uuid())
  title       String
  userId      String
  summary     String?
  tokenCount  Int      @default(0)
  createdAt   DateTime @default(now())
  
  messages    Message[]
}

model Message {
  id             String   @id @default(uuid())
  conversationId String
  conversation   Conversation @relation(fields: [conversationId], references: [id])
  role           String   // "USER", "ASSISTANT", "SYSTEM"
  content        String
  tokens         Int      @default(0)
  createdAt      DateTime @default(now())
}

// RAG Documents
model Document {
  id             String   @id @default(uuid())
  fileName       String
  fileType       String   // PDF, DOCX, CSV
  vectorId       String?  // ID in Pinecone/pgvector
  uploadStatus   String   @default("UPLOADED") // UPLOADED, PROCESSING, EMBEDDED
  uploadedBy     String
  createdAt      DateTime @default(now())
}`;

  return (
    <div style={{ background: 'var(--color-bg-dark)', minHeight: '100vh', color: '#fff' }}>
      
      <section style={{ padding: '8rem 2rem 4rem', background: 'radial-gradient(circle at top, rgba(6,182,212,0.15) 0%, transparent 60%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ color: '#06b6d4', letterSpacing: '3px', fontWeight: 'bold', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>PROJECT BLUEPRINT</span>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', textShadow: '0 0 20px rgba(6,182,212,0.3)' }}>
              Enterprise AI Conversational Copilot
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '800px', lineHeight: '1.8' }}>
              A conversational AI assistant comparable to ChatGPT Enterprise and Microsoft Copilot. Features RAG (Retrieval-Augmented Generation) for chatting with PDFs, Excel, and internal Knowledge Bases securely.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection>
        <SectionHeading title="Technology Stack" subtitle="Language Model and Vector Search ecosystem." icon={Layers} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <TechBadge icon={BrainCircuit} name="LangChain / LlamaIndex" type="LLM Orchestration" />
          <TechBadge icon={Database} name="Pinecone / ChromaDB" type="Vector Database" />
          <TechBadge icon={MessageSquare} name="OpenAI / Claude APIs" type="Large Language Models" />
          <TechBadge icon={Globe} name="Next.js & Server Actions" type="Frontend / Streaming" />
        </div>
      </AnimatedSection>

      <AnimatedSection style={{ background: 'rgba(8,17,33,0.3)' }}>
        <SectionHeading title="Core Features" subtitle="What the Copilot can do." icon={Workflow} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
          <div style={{ background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#06b6d4', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Retrieval-Augmented Generation (RAG)</h3>
            <p style={{ margin: 0, color: '#94a3b8', lineHeight: '1.6' }}>Allows users to upload internal police manuals (PDF, Word) and ask questions against them without leaking data to public models.</p>
          </div>
          <div style={{ background: 'rgba(15,23,42,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#06b6d4', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Prompt Engineering Studio & Token Analytics</h3>
            <p style={{ margin: 0, color: '#94a3b8', lineHeight: '1.6' }}>Create shared enterprise prompt templates and monitor token usage/cost per department.</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <SectionHeading title="Database Architecture" subtitle="Schema for Conversations and RAG Documents." icon={Database} />
        <CodeBlock code={prismaSchemaCode} language="prisma/schema.prisma" />
      </AnimatedSection>

    </div>
  );
};

export default CopilotLanding;
