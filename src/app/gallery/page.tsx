'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { src: '/download-removebg-preview.png', alt: 'Event Photo 1', tag: 'talks', date: 'Aug 2023' },
  { src: '/gallery/photo2.jpg', alt: 'Event Photo 2', tag: 'workshops', date: 'Jul 2023' },
  { src: '/gallery/photo3.jpg', alt: 'Event Photo 3', tag: 'conferences', date: 'Jun 2023' },
  { src: '/gallery/photo4.jpg', alt: 'Event Photo 4', tag: 'competitions', date: 'May 2023' },
  { src: '/gallery/photo5.jpg', alt: 'Event Photo 5', tag: 'workshops', date: 'Apr 2023' },
  { src: '/gallery/photo6.jpg', alt: 'Event Photo 6', tag: 'talks', date: 'Mar 2023' },
  { src: '/gallery/photo7.jpg', alt: 'Event Photo 7', tag: 'competitions', date: 'Feb 2023' },
  { src: '/gallery/photo8.jpg', alt: 'Event Photo 8', tag: 'conferences', date: 'Jan 2023' },
  { src: '/gallery/photo9.jpg', alt: 'Event Photo 9', tag: 'workshops', date: 'Dec 2022' },
  { src: '/gallery/photo10.jpg', alt: 'Event Photo 10', tag: 'talks', date: 'Nov 2022' },
];

const tags = ['all', 'talks', 'workshops', 'conferences', 'competitions'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [viewPhoto, setViewPhoto] = useState(null); // photo object or null

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.tag === filter);

  return (
    <>
      <main
        style={{
          padding: '2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          color: '#204a87',
          fontFamily: "'Inter', system-ui, sans-serif",
          position: 'relative',
          zIndex: 1,
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
          IEEE SPS SSN GALLERY
        </motion.h1>

        <p
          style={{
            fontSize: '1.1rem',
            marginBottom: '2.5rem',
            textAlign: 'center',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
            fontWeight: 500,
          }}
        >
          Browse through moments captured at our various talks, workshops, conferences, and
          competitions. Use the filters below to explore photos by event type.
        </p>

        {/* Filter Buttons with Icon */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          {tags.map(tagName => (
            <button
              key={tagName}
              onClick={() => setFilter(tagName)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '25px',
                border: filter === tagName ? '2px solid #24A647' : '2px solid transparent',
                background: filter === tagName ? '#24A647' : '#dbebff',
                color: filter === tagName ? 'white' : '#24A647',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '110px',
                textTransform: 'capitalize',
                boxShadow: filter === tagName ? '0 4px 15px rgba(36,166,71,0.4)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={filter === tagName ? 'white' : '#24A647'}
                viewBox="0 0 24 24"
              >
                <path d="M3 5h18v2H3V5zm3 6h12v2H6v-2zm3 6h6v2H9v-2z" />
              </svg>
              {tagName === 'all' ? 'All Photos' : tagName}
            </button>
          ))}
        </div>

        {/* Gallery Grid with Cards */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.3rem',
            justifyItems: 'center',
          }}
          layout
        >
          <AnimatePresence>
            {filteredPhotos.map(({ src, alt, tag, date }) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  width: '100%',
                  maxWidth: '220px',
                  background: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 4px 15px rgba(36,166,71,0.2)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  userSelect: 'none',
                }}
                title={`${alt} • ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
                onClick={() => setViewPhoto({ src, alt, tag })}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />

                {/* Date below image */}
                <div
                  style={{
                    padding: '0.3rem 0',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#24A647',
                    textTransform: 'none',
                    width: '100%',
                    textAlign: 'center',
                    borderTop: '1px solid #d1f0d8',
                  }}
                >
                  {date || 'Unknown Date'}
                </div>

                <div
                  style={{
                    padding: '0.6rem 1rem',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: '#24A647',
                    textTransform: 'capitalize',
                    borderTop: '1px solid #d1f0d8',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  {tag}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(36, 166, 71, 0.6)',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '15px',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  VIEW
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Modal for viewing image */}
      <AnimatePresence>
        {viewPhoto && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              padding: '1.5rem',
            }}
            onClick={() => setViewPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(36,166,71,0.6)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                cursor: 'auto',
              }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={viewPhoto.src}
                alt={viewPhoto.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                }}
              />
              <div
                style={{
                  padding: '1rem 1.5rem',
                  backgroundColor: '#24A647',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  textTransform: 'capitalize',
                  textAlign: 'center',
                  userSelect: 'none',
                }}
              >
                {viewPhoto.tag}
              </div>
              <button
                onClick={() => setViewPhoto(null)}
                aria-label="Close Image"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255,255,255,0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  userSelect: 'none',
                  lineHeight: 0,
                }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
