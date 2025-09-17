'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MentoringPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', color: '#333' }}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}
      >
        Mentoring Program
      </motion.h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Discover mentoring opportunities within IEEE SPS SSN Chapter to help nurture the next generation of innovators.
      </p>

      {/* Sample content */}
      <ul>
        <li>How to Find a Mentor – Process & Guidelines</li>
        <li>Become a Mentor – Responsibilities & Benefits</li>
        <li>Mentoring Events & Workshops</li>
      </ul>

      <Link href="/funding" style={{ color: '#208BEE', textDecoration: 'underline' }}>
        Learn about Funding Opportunities
      </Link>
    </main>
  );
}
