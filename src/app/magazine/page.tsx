'use client';

import { motion, Variants } from 'framer-motion';
import { Download, ExternalLink, FileText, BookOpen } from 'lucide-react';

// Ensure the PDF file is named exactly this in your public folder
const CURRENT_ISSUE = {
  title: 'SPS Annual Magazine',
  year: '2025-26',
  url: '/SPS Annual Magazine.pdf', // Changed ./ to / for better routing safety
  description: 'Welcome to the Annual Magazine of the IEEE Signal Processing Society SSN Chapter. This publication showcases exciting research, projects, and innovations from our vibrant community of students and professionals.',
};

export default function MagazinePage() {
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section style={{ padding: '4rem 1rem', color: 'white', minHeight: '100vh', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Reusing your gradient button style */}
      <style>{`
        .event-btn {
          background-size: 200% 100%;
          background-image: linear-gradient(to right, #78BE20 50%, #05191a 50%);
          transition: background-position 0.4s ease-out, color 0.4s ease-out;
          color: #05191a;
          border: 1px solid #78BE20;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.8rem;
          border-radius: 3rem;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .event-btn:hover {
          background-position: -100% 0;
          color: #78BE20;
        }
      `}</style>

      {/* HEADER SECTION */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(120, 190, 32, 0.1)', padding: '0.5rem 1rem', borderRadius: '2rem', marginBottom: '-1.5rem', border: '1px solid rgba(120, 190, 32, 0.3)' }}>
            <BookOpen size={18} color="#78BE20" />
            <span style={{ color: '#78BE20', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.05em' }}>LATEST EDITION</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: '800', lineHeight: 1.1 }}>
          THE ANNUAL <span style={{ color: '#78BE20' }}>MAGAZINE</span>
        </h1>
        
        <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: 'inherit', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
          {CURRENT_ISSUE.description}
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <ActionButton href={CURRENT_ISSUE.url} icon={<Download size={20} />}>
              Download PDF
            </ActionButton>
            <ActionButton href={CURRENT_ISSUE.url} icon={<ExternalLink size={20} />}>
              Open in New Tab
            </ActionButton>
        </div>
      </motion.div>

      {/* PDF VIEWER SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ position: 'relative', marginBottom: '4rem' }}
      >
        {/* Glow effect behind the viewer */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', height: '90%', background: 'rgba(120, 190, 32, 0.15)', filter: 'blur(60px)', zIndex: -1, borderRadius: '50%' }} />

        <div className="pdf-container" style={{
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            backgroundColor: '#05191a', 
            height: '85vh',
            position: 'relative',
          }}
        >
          {/* Loading / Background Layer */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
             <span style={{ color: 'rgba(255,255,255,0.3)' }}>Loading Preview...</span>
          </div>

          {/* PDF Object */}
          <object
            data={CURRENT_ISSUE.url}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ position: 'relative', zIndex: 1, display: 'block' }}
          >
            {/* Fallback for mobile/browsers without PDF support */}
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ccfbf1', padding: '2rem', textAlign: 'center', background: '#05191a' }}>
              <FileText size={64} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Preview not available on this device</p>
              <p style={{ marginBottom: '1.5rem', opacity: 0.7 }}>Please download the PDF to view it.</p>
              <a href={CURRENT_ISSUE.url} download style={{ color: '#78BE20', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'underline' }}>
                Download Magazine
              </a>
            </div>
          </object>
        </div>
      </motion.div>

    </section>
  );
}

// Typed ActionButton
interface ActionButtonProps {
    href: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

function ActionButton({ href, icon, children }: ActionButtonProps) {
  return (
    <motion.a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="event-btn" 
      whileTap={{ scale: 0.95 }}
    >
      {icon} {children}
    </motion.a>
  );
}