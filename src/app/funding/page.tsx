'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FundingPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', color: '#333' }}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}
      >
        Funding Opportunities
      </motion.h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Learn about the funding options available to support IEEE SPS SSN Chapter initiatives and members.
      </p>

      {/* Sample content */}
      <ul>
        <li>Grant A – Details & Application Process</li>
        <li>Scholarship B – Eligibility & Benefits</li>
        <li>Sponsorship Options – How to Become a Sponsor</li>
      </ul>

      <Link href="/mentoring" style={{ color: '#208BEE', textDecoration: 'underline' }}>
        Explore Mentoring Programs
      </Link>
    </main>
  );
}
