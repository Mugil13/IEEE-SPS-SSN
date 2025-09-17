'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, MapPin, User, Users, Calendar } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    type: 'Workshop',
    starred: true,
    title: 'Advanced Deep Learning for Signal Processing',
    description: 'Explore the latest techniques in deep learning applied to signal processing problems including audio, image, and biomedical signals.',
    fullDescription: 'This comprehensive workshop will dive deep into advanced deep learning methodologies specifically designed for signal processing applications. Participants will learn about convolutional neural networks for audio processing, recurrent networks for time-series analysis, and transformer architectures for biomedical signal interpretation. The workshop includes hands-on coding sessions using Python and TensorFlow, with real-world datasets from audio, image, and biomedical domains. Industry experts will share case studies and best practices for deploying these models in production environments.',
    date: 'Monday, January 15, 2024',
    time: '2:00 PM - 5:00 PM',
    venue: 'Seminar Hall A, Block 3',
    capacity: '45/60',
    speaker: 'Dr. Ananya Singh, IIT Madras',
    tags: ['Deep Learning', 'Neural Networks', '+1']
  },
  {
    id: 2,
    type: 'Competition',
    starred: true,
    title: 'IEEE Signal Processing Cup 2024',
    description: 'Annual student competition focusing on real-world signal processing challenges. Teams compete to develop innovative solutions.',
    fullDescription: 'The IEEE Signal Processing Cup 2024 is a prestigious international competition that challenges students to apply their theoretical knowledge to solve real-world signal processing problems. This year\'s theme focuses on environmental monitoring using sensor networks. Teams will work with multi-modal sensor data including acoustic, visual, and environmental sensors to develop intelligent monitoring systems. The competition spans several months with preliminary rounds, mentoring sessions, and a final presentation. Winners receive cash prizes, IEEE certificates, and opportunities for publication in IEEE journals.',
    date: 'Saturday, January 20, 2024',
    time: '9:00 AM - 6:00 PM',
    venue: 'Computer Lab 1 & 2',
    capacity: '35/40',
    speaker: 'IEEE SPS Team',
    tags: ['Competition', 'Team Project', '+1']
  },
  {
    id: 3,
    type: 'Hands-on Session',
    starred: false,
    title: 'Introduction to MATLAB for Signal Processing',
    description: 'Beginner-friendly workshop covering MATLAB basics and signal processing toolbox for first and second-year students.',
    fullDescription: 'This introductory session is designed for students new to MATLAB and signal processing. The workshop covers MATLAB fundamentals including variable manipulation, plotting, and basic programming constructs. Students will learn to use the Signal Processing Toolbox for filtering, spectral analysis, and signal generation. Practical exercises include designing FIR and IIR filters, performing FFT analysis, and creating signal processing applications with GUI interfaces. All necessary software will be provided, and students will receive comprehensive tutorial materials.',
    date: 'Thursday, January 25, 2024',
    time: '10:00 AM - 1:00 PM',
    venue: 'Lab Complex B',
    capacity: '22/40',
    speaker: 'Prof. Ramesh Kumar, ECE Department',
    tags: ['MATLAB', 'Beginner', '+1']
  },
  {
    id: 4,
    type: 'Guest Lecture',
    starred: false,
    title: 'Industry Talk: 5G Signal Processing',
    description: 'Insights into 5G technology, beamforming, MIMO systems, and career opportunities in telecommunications industry.',
    fullDescription: 'Join us for an exclusive industry talk by a senior engineer from Qualcomm, covering the revolutionary aspects of 5G signal processing. The presentation will explore massive MIMO systems, beamforming algorithms, and the role of machine learning in 5G networks. Topics include signal processing challenges in millimeter-wave communications, network slicing, and edge computing applications. The speaker will also discuss career opportunities in the telecommunications industry, required skills, and the future roadmap of 6G technologies.',
    date: 'Friday, February 2, 2024',
    time: '4:00 PM - 5:30 PM',
    venue: 'Main Auditorium',
    capacity: '155/200',
    speaker: 'Ms. Priya Reddy, Senior Engineer at Qualcomm',
    tags: ['5G', 'Industry', '+1']
  },
  {
    id: 5,
    type: 'Presentation',
    starred: false,
    title: 'Research Paper Presentation Session',
    description: 'Students present their ongoing research projects and receive feedback from faculty and peers.',
    fullDescription: 'This session provides a platform for students to present their ongoing research work in signal processing and related fields. Each presenter gets 15 minutes to present their work followed by a 5-minute Q&A session. Faculty members and industry experts will provide valuable feedback and suggestions for improvement. Topics may include but are not limited to biomedical signal processing, communications, image processing, and machine learning applications. This is an excellent opportunity for students to refine their presentation skills and receive constructive feedback before submitting to conferences.',
    date: 'Thursday, February 8, 2024',
    time: '2:00 PM - 4:00 PM',
    venue: 'Conference Room 1',
    capacity: '25/50',
    speaker: 'Student Researchers',
    tags: ['Research', 'Presentation', '+1']
  },
  {
    id: 6,
    type: 'Masterclass',
    starred: true,
    title: 'Digital Image Processing Masterclass',
    description: 'Advanced techniques in digital image processing including filtering, enhancement, and computer vision applications.',
    fullDescription: 'This comprehensive masterclass covers advanced digital image processing techniques used in modern computer vision applications. Participants will learn about advanced filtering techniques, morphological operations, feature extraction, and object recognition algorithms. The session includes hands-on implementation of image enhancement algorithms, edge detection methods, and introduction to deep learning for computer vision. Industry applications in medical imaging, autonomous vehicles, and surveillance systems will be discussed. Participants will work with popular libraries like OpenCV and scikit-image.',
    date: 'Thursday, February 15, 2024',
    time: '1:00 PM - 6:00 PM',
    venue: 'Advanced Computing Lab',
    capacity: '31/35',
    speaker: 'Dr. Suresh Babu, Anna University',
    tags: ['Image Processing', 'Computer Vision', '+1']
  }
];

export default function UpcomingEventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Workshop': return '#3B82F6';
      case 'Competition': return '#EF4444';
      case 'Hands-on Session': return '#10B981';
      case 'Guest Lecture': return '#8B5CF6';
      case 'Presentation': return '#F59E0B';
      case 'Masterclass': return '#06B6D4';
      default: return '#6B7280';
    }
  };

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1400px', 
      margin: '0 auto',
      minHeight: '100vh',
      backgroundColor: 'transparent'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold',
          color: '#10B981',
          marginBottom: '1rem'
        }}>
          All Upcoming Events
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#FFFFFF',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Below are the upcoming events organized by IEEE SPS SSN Chapter. Stay tuned for exciting workshops, competitions, and learning opportunities!
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {eventsData.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            {/* Header with type badge and star */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{
                backgroundColor: getTypeColor(event.type),
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600'
              }}>
                {event.type}
              </span>
              {event.starred && (
                <div style={{ color: '#3B82F6', fontSize: '1.25rem' }}>★</div>
              )}
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.75rem',
              lineHeight: '1.4'
            }}>
              {event.title}
            </h3>

            {/* Description */}
            <p style={{
              color: '#6b7280',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              marginBottom: '1rem'
            }}>
              {event.description}
            </p>

            {/* Date and Time */}
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '0.5rem',
                color: '#374151',
                fontSize: '0.85rem'
              }}>
                <Calendar size={14} style={{ marginRight: '0.5rem' }} />
                {event.date}
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '0.5rem',
                color: '#374151',
                fontSize: '0.85rem'
              }}>
                <Clock size={14} style={{ marginRight: '0.5rem' }} />
                {event.time}
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '0.5rem',
                color: '#374151',
                fontSize: '0.85rem'
              }}>
                <MapPin size={14} style={{ marginRight: '0.5rem' }} />
                {event.venue}
              </div>
            </div>

            {/* Capacity */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '0.75rem',
              color: '#374151',
              fontSize: '0.85rem'
            }}>
              <Users size={14} style={{ marginRight: '0.5rem' }} />
              {event.capacity}
            </div>

            {/* Speaker */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '1rem',
              color: '#374151',
              fontSize: '0.85rem'
            }}>
              <User size={14} style={{ marginRight: '0.5rem' }} />
              {event.speaker}
            </div>

            {/* Tags */}
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              marginBottom: '1.5rem',
              flexWrap: 'wrap'
            }}>
              {event.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '0.75rem',
              marginTop: 'auto'
            }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: '#10B981',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                Register ↗
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedEvent(event)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#3B82F6',
                  border: '1px solid #3B82F6',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                View More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '2rem',
                maxWidth: '600px',
                maxHeight: '70vh',
                overflowY: 'auto',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#6b7280',
                  padding: '0.5rem'
                }}
              >
                <X size={24} />
              </button>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{
                  backgroundColor: getTypeColor(selectedEvent.type),
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  {selectedEvent.type}
                </span>
                {selectedEvent.starred && (
                  <div style={{ color: '#3B82F6', fontSize: '1.5rem' }}>★</div>
                )}
              </div>

              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                {selectedEvent.title}
              </h2>

              <div style={{ marginBottom: '1.5rem', color: '#4b5563' }}>
                <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <Calendar size={16} style={{ marginRight: '0.75rem' }} />
                  <strong>{selectedEvent.date}</strong>
                </div>
                <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <Clock size={16} style={{ marginRight: '0.75rem' }} />
                  {selectedEvent.time}
                </div>
                <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <MapPin size={16} style={{ marginRight: '0.75rem' }} />
                  {selectedEvent.venue}
                </div>
                <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <Users size={16} style={{ marginRight: '0.75rem' }} />
                  Capacity: {selectedEvent.capacity}
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <User size={16} style={{ marginRight: '0.75rem' }} />
                  {selectedEvent.speaker}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  marginBottom: '0.75rem',
                  color: '#1f2937'
                }}>
                  Description
                </h3>
                <p style={{
                  color: '#4b5563',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {selectedEvent.fullDescription}
                </p>
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '0.75rem', 
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                {selectedEvent.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.85rem'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: '#10B981',
                  color: 'white',
                  border: 'none',
                  padding: '0.875rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Register for Event ↗
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}