'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Example images & socials. Replace with actual assets and handles.
const members = [
  {
    name: 'random',
    role: 'Chairperson',
    img: '/members/random.jpg',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'random1',
    role: 'Vice Chairperson',
    img: '/members/random1.jpg',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'random11',
    role: 'Secretary',
    img: '/members/random11.jpg',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
  },
  {
    name: 'random',
    role: 'Treasurer',
    img: '/members/randomdsom.jpg',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
  },
  {
    name: 'randomm',
    role: 'Web Master',
    img: '/members/random.jpg',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
  },
];

const facultyCoordinator = {
  name: 'Prof. Dr. Example',
  role: 'Faculty Coordinator',
  img: '/members/faculty.jpg',
  linkedin: 'https://linkedin.com/in/faculty',
  instagram: 'https://instagram.com/faculty',
};

export default function CurrentMembersPage() {
  const [selected, setSelected] = useState(null);

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', color: '#333' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '3rem' 
        }}
      >
       <h1
  style={{
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#24A647'
    
  }}
>
  PAST MEMBERS
</h1>

        <p style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold',
          color: '#ffffff',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Meet our dedicated team of IEEE SPS SSN members working towards advancing signal processing research and education.
        </p>
      </motion.div>
      {/* Faculty Coordinator */}
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  style={{
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#0d0d0c',
    textAlign: 'center',
  }}
>
  FACULTY COORDINATOR
</motion.h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3rem'
      }}>
        <ProfileCard
          member={facultyCoordinator}
          onClick={() => setSelected(facultyCoordinator)}
        />
      </div>

      {/* Office Bearers */}
      
      <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  style={{
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#0d0d0c',
    textAlign: 'center',
  }}
>
  OFFICE BEARERS
</motion.h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}
      >
        {members.map((m) => (
          <ProfileCard key={m.name} member={m} onClick={() => setSelected(m)} />
        ))}
      </div>

      {/* Popup Modal */}
      {selected && (
        <ProfileModal member={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}

function ProfileCard({ member, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: '#fff',
        boxShadow: '0 4px 12px rgba(30,40,100,0.07)',
        borderRadius: '1.2rem',
        cursor: 'pointer',
        textAlign: 'center',
        padding: '1.5rem 1rem',
        transition: 'box-shadow 0.2s'
      }}
      onClick={onClick}
    >
      <img
        src={member.img}
        alt={member.name}
        style={{
          width: 110, height: 110, objectFit: 'cover', borderRadius: '1rem', marginBottom: '1rem'
        }}
      />
      <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: 4 }}>{member.name}</div>
      <div style={{ fontSize: '0.98rem', color: '#888' }}>{member.role}</div>
    </motion.div>
  );
}

function ProfileModal({ member, onClose }) {
  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: 'rgba(30, 30, 50, 0.65)', // blurred overlay
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(6px)',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.3 }}
        style={{
          background: '#fff',
          borderRadius: '2rem',
          padding: '2.5rem 2rem',
          boxShadow: '0 8px 32px rgba(30,40,80,0.15)',
          textAlign: 'center',
          maxWidth: 340,
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        <img src={member.img} alt={member.name}
          style={{ width: 180, height: 180, borderRadius: '1.4rem', objectFit: 'cover', marginBottom: '1.2rem' }}
        />
        <h3 style={{ margin: 0 }}>{member.name}</h3>
        <div style={{ color: '#666', marginBottom: '1rem' }}>{member.role}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.6rem', marginBottom: '1rem' }}>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/icons/linkedin.svg" width={32} height={32} alt="LinkedIn" />
          </a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/icons/instagram.svg" width={32} height={32} alt="Instagram" />
          </a>
        </div>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 18,
            background: 'none',
            border: 'none',
            fontSize: '1.6rem',
            cursor: 'pointer',
            color: '#aaa'
          }}>
          &times;
        </button>
      </motion.div>
    </div>
  );
}
