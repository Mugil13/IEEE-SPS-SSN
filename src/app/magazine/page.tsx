'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const PDF_URL = './SPS Annual Magazine.pdf';

export default function MagazinePage() {
  const [zoom, setZoom] = useState(1);
  const pdfIframeRef = useRef(null);

  const zoomIn = () => setZoom((z) => Math.min(3, z + 0.25));
  const zoomOut = () => setZoom((z) => Math.max(0.5, z - 0.25));

  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
        color: 'white',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '1rem',
          color: '#24A647',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        IEEE SPS SSN Magazine
      </motion.h1>
      <p
        style={{
          fontSize: '1.15rem',
          marginBottom: '2rem',
          textAlign: 'center',
          color: 'white',
          fontWeight: 500,
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.5,
        }}
      >
        Welcome to the latest issue of the IEEE Signal Processing Society SSN Chapter magazine. 
        This publication showcases exciting research, projects, and innovations from our vibrant community of students and professionals. 
        Stay tuned for future editions as we continue to explore and advance the field of signal processing.
      </p>

      <div
        style={{
          border: '2px solid #208BEE',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(32, 139, 238, 0.25)',
          backgroundColor: '#0a2239',
          position: 'relative',
        }}
      >
        {/* PDF viewer iframe */}
        <iframe
          ref={pdfIframeRef}
          src={PDF_URL}
          title="IEEE SPS SSN Magazine"
          style={{
            width: '100%',
            height: '1500px',
            transform: `scale(${zoom})`,
            transformOrigin: 'top center',
            transition: 'transform 0.3s ease',
            border: 'none',
            display: 'block',
            backgroundColor: 'white',
          }}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </main>
  );
}
