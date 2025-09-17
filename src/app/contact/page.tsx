'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Calendar, UserPlus, Zap } from 'lucide-react';

const FaqItem = ({ question, answer }) => (
  <div>
    <h4 style={{ fontWeight: '600', color: '#2563eb', marginBottom: '0.25rem' }}>{question}</h4>
    <p style={{ color: '#374151', fontSize: '0.875rem' }}>{answer}</p>
  </div>
);

const QuickAction = ({ icon, text }) => (
  <a
    href="#"
    className="quick-action-link"
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      transition: 'background-color 0.2s ease-in-out',
      textDecoration: 'none',
      color: '#374151',
    }}
  >
    {icon}
    <span style={{ marginLeft: '0.75rem', fontWeight: '500' }}>{text}</span>
  </a>
);

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const faqs = [
    { q: 'How do I become a member?', a: 'Visit our Current Members page and fill out the membership application form. IEEE membership is required.' },
    { q: 'How do I apply for funding?', a: 'Visit our Funding page to see available opportunities and application procedures for each program.' },
    { q: 'Are events free for members?', a: 'Most events are free for IEEE members. Some specialized workshops may have a nominal fee.' },
    { q: 'Do you offer mentoring?', a: 'Yes, we have comprehensive mentoring programs. Check our Mentoring page for different program options.' },
    { q: 'Can I contribute to the magazine?', a: 'Yes! Check our Magazine page for submission guidelines and deadlines for different types of articles.' },
    { q: 'Where are events held?', a: 'Most events are held at SSN College of Engineering. Specific venues are mentioned in event details.' },
  ];

  const inputStyle = {
    marginTop: '0.25rem',
    display: 'block',
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'transparent',
    color: '#111827',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
  };

  const cardStyle = {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid transparent',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'white',
    backgroundColor: isSending ? '#93c5fd' : '#2563eb',
    cursor: isSending ? 'not-allowed' : 'pointer',
  };

  const componentStylesheet = `
    .contact-form-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .faq-section-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: flex-start;
    }
    .faq-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem 1.5rem;
    }
    .submit-button:hover {
      background-color: #10B981;
    }
    .quick-action-link:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    @media (min-width: 768px) {
      .faq-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (min-width: 1024px) {
      .contact-form-grid {
        grid-template-columns: repeat(5, 1fr);
      }
      .contact-form-container {
        grid-column: span 3 / span 3;
      }
      .contact-info-container {
        grid-column: span 2 / span 2;
      }
      .faq-section-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      .quick-actions-container {
        grid-column: span 1 / span 1;
      }
      .faq-container {
        grid-column: span 2 / span 2;
      }
    }
  `;

  return (
    <section id="contact" style={{ backgroundColor: 'transparent', padding: '5rem 1rem', color: '#111827' }}>
      <style>{componentStylesheet}</style>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#24A647', textTransform: 'uppercase' }}>
            CONTACT US
          </h1>
          <p style={{ fontSize: '1.2rem', fontWeight: '500', color: '#ffffff', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Get in touch with the IEEE SPS SSN team for inquiries, collaborations, or to join our vibrant community.
          </p>
        </motion.div>

        <div className="contact-form-grid">
          {/* Send us a Message */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="contact-form-container" style={{ ...cardStyle, padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <Mail style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.75rem', color: '#2563eb' }} />
              Send us a Message
            </h3>
            <p style={{ color: '#374151', marginBottom: '1.5rem' }}>Fill out the form below and we'll get back to you as soon as possible.</p>
            <form action="https://formspree.io/f/mwpbjbla" method="POST" onSubmit={() => setIsSending(true)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="full-name" style={labelStyle}>Full Name *</label>
                  <input type="text" name="name" id="full-name" required style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="email-address" style={labelStyle}>Email Address *</label>
                  <input type="email" name="email" id="email-address" required style={inputStyle} />
                </div>
              </div>
              <div>
                <label htmlFor="inquiry-type" style={labelStyle}>Inquiry Type *</label>
                <select id="inquiry-type" name="inquiry-type" style={inputStyle}>
                  <option>General Inquiry</option>
                  <option>Collaboration</option>
                  <option>Membership</option>
                  <option>Funding</option>
                </select>
              </div>
              <div>
                <label htmlFor="subject" style={labelStyle}>Subject *</label>
                <input type="text" name="subject" id="subject" required style={inputStyle} />
              </div>
              <div>
                <label htmlFor="message" style={labelStyle}>Message *</label>
                <textarea id="message" name="message" rows={5} required style={inputStyle} />
              </div>
              <div>
                <button type="submit" disabled={isSending} style={buttonStyle} className="submit-button">
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="contact-info-container" style={cardStyle}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Contact Information</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#374151' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <Mail style={{ width: '1.25rem', height: '1.25rem', marginRight: '1rem', marginTop: '0.25rem', color: '#2563eb', flexShrink: 0 }} />
                <div>
                  <span style={{ fontWeight: '600' }}>Email</span>
                  <br />
                  <a href="mailto:ieeespsssn@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    ieeespsssn@gmail.com
                  </a>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <Phone style={{ width: '1.25rem', height: '1.25rem', marginRight: '1rem', marginTop: '0.25rem', color: '#2563eb', flexShrink: 0 }} />
                <div>
                  <span style={{ fontWeight: '600' }}>Phone</span>
                  <br />
                  +91 98765 43210
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <MapPin style={{ width: '1.25rem', height: '1.25rem', marginRight: '1rem', marginTop: '0.25rem', color: '#2563eb', flexShrink: 0 }} />
                <div>
                  <span style={{ fontWeight: '600' }}>Location</span>
                  <br />
                  SSN College of Engineering, Kalavakkam, Chennai - 603110
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <Clock style={{ width: '1.25rem', height: '1.25rem', marginRight: '1rem', marginTop: '0.25rem', color: '#2563eb', flexShrink: 0 }} />
                <div>
                  <span style={{ fontWeight: '600' }}>Office Hours</span>
                  <br />
                  Monday - Friday, 9:00 AM - 5:00 PM
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div style={{ margin: '6rem 0' }} />

        <div className="faq-section-grid">
          {/* Quick Actions */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="quick-actions-container" style={cardStyle}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
              <Zap style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.75rem', color: '#2563eb' }} />
              Quick Actions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <QuickAction icon={<Calendar style={{ width: '1.25rem', height: '1.25rem', color: '#2563eb' }} />} text="View Upcoming Events" />
              <QuickAction icon={<UserPlus style={{ width: '1.25rem', height: '1.25rem', color: '#2563eb' }} />} text="Join Our Chapter" />
              <QuickAction icon={<Zap style={{ width: '1.25rem', height: '1.25rem', color: '#2563eb' }} />} text="Apply for Funding" />
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="faq-container" style={cardStyle}>
            <div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#111827' }}>Frequently Asked Questions</h2>
              <p style={{ marginTop: '0.5rem', color: '#374151' }}>Common inquiries and quick answers</p>
            </div>
            <div className="faq-grid" style={{ marginTop: '2rem' }}>
              {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
