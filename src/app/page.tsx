'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const SphereLogo3D = dynamic(() => import('./SphereLogo3D'), { ssr: false });

const SPLINE_MODEL_URL =
  "https://my.spline.design/lowpolyballcopy-ca8c419d99e2e7cb6660c5df6f82ed9b/";

export default function AboutPage() {
  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '0 1rem',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
            margin: '0 auto',
            flexWrap: 'wrap',
          }}
        >
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              minWidth: '300px',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.2,
                color: 'white',
                marginBottom: '1.5rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              IEEE
              <br />
              <span style={{ color: '#78BE20' }}>Signal Processing Society</span>
              <br />
              SSN Chapter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: 'rgba(255, 255, 255, 0.95)',
                marginBottom: '2.5rem',
                lineHeight: 1.6,
                fontWeight: 500,
                maxWidth: '580px',
              }}
            >
              Empowering the Next Generation of Signal Processing Innovators at Sri Sivasubramaniya Nadar College of Engineering
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', flexWrap: 'wrap' }}
            >
              <a
                href="https://signalprocessingsociety.org/get-involved/membership"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #78BE20, #5a9617)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(120, 190, 32, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(120, 190, 32, 0.6)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(120, 190, 32, 0.4)';
                }}
              >
                Join IEEE SPS
              </a>
              <a
                href="/contact"
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              minWidth: '300px',
            }}
          >
            <div
              style={{
                width: '475px',
                height: '475px',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
              }}
            >
              <SphereLogo3D />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
          padding: '5rem 1rem',
          borderRadius: '30px',
          margin: '5rem auto',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
          }}
        >
          {/* LEFT: Spline */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: '1 1 320px',
              display: 'flex',
              justifyContent: 'center',
              minHeight: 300,
            }}
          >
            <motion.iframe
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              src={SPLINE_MODEL_URL}
              width="280"
              height="280"
              style={{
                border: 'none',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #f0fdff, #e8f7ff)',
                boxShadow: '0 15px 50px rgba(32, 139, 238, 0.2)',
              }}
            />
          </motion.div>

          {/* RIGHT: Who We Are Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              flex: '1 1 450px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              justifyContent: 'center',
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                background: 'linear-gradient(135deg, #208BEE, #24A647)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
              }}
            >
              Who We Are
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                lineHeight: 1.7,
                color: '#2d3748',
                fontWeight: 500,
                marginBottom: '1.5rem',
              }}
            >
              The IEEE Signal Processing Society (SPS) SSN Chapter is a vibrant community of students, researchers, and professionals dedicated to advancing the field of signal processing. As part of the world's largest professional organization for the advancement of technology, we bridge the gap between theoretical knowledge and practical applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              <div style={{
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(32,139,238,0.1), rgba(32,139,238,0.05))',
                borderRadius: '12px',
                border: '1px solid rgba(32,139,238,0.2)',
              }}>
                <h4 style={{ color: '#208BEE', fontWeight: 700, marginBottom: '0.5rem' }}>Research Excellence</h4>
                <p style={{ color: '#4a5568', fontSize: '0.9rem', margin: 0 }}>Cutting-edge signal processing research</p>
              </div>
              <div style={{
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(36,166,71,0.1), rgba(36,166,71,0.05))',
                borderRadius: '12px',
                border: '1px solid rgba(36,166,71,0.2)',
              }}>
                <h4 style={{ color: '#24A647', fontWeight: 700, marginBottom: '0.5rem' }}>Industry Connect</h4>
                <p style={{ color: '#4a5568', fontSize: '0.9rem', margin: 0 }}>Direct industry collaboration opportunities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* MISSION AND VISION CARDS */}
      <section
        style={{
          width: '100%',
          padding: '4rem 1rem',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 900,
            color: 'white',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}>
            Our Purpose & Direction
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Driven by innovation, guided by excellence, and committed to shaping the future of signal processing
          </p>
        </motion.div>

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '3rem',
          }}
        >
          {/* MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              y: -10,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(36,166,71,0.95), rgba(29,131,57,0.95))',
              borderRadius: '25px',
              boxShadow: '0 20px 60px rgba(36,166,71,0.3)',
              flex: '1 1 350px',
              padding: '3rem 2.5rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            }}></div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                fontSize: '1.8rem',
              }}
            >
              🎯
            </motion.div>

            <h3
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
                marginBottom: '1.5rem',
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              Our Mission
            </h3>
            <p
              style={{
                fontWeight: 500,
                color: 'rgba(255,255,255,0.95)',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 1,
              }}
            >
              To advance and disseminate state-of-the-art scientific information and resources in signal processing; educate our community through workshops, seminars, and hands-on projects; and provide a collaborative platform where students, researchers, and industry professionals can interact, exchange innovative ideas, and drive technological breakthroughs that impact society.
            </p>
          </motion.div>

          {/* VISION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              y: -10,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(32,139,238,0.95), rgba(25,111,191,0.95))',
              borderRadius: '25px',
              boxShadow: '0 20px 60px rgba(32,139,238,0.3)',
              flex: '1 1 350px',
              padding: '3rem 2.5rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            }}></div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                fontSize: '1.8rem',
              }}
            >
              🚀
            </motion.div>

            <h3
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
                marginBottom: '1.5rem',
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              Our Vision
            </h3>
            <p
              style={{
                fontWeight: 500,
                color: 'rgba(255,255,255,0.95)',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                lineHeight: '1.7',
                position: 'relative',
                zIndex: 1,
              }}
            >
              To be the preeminent source of signal processing innovation and excellence at SSN College, fostering a dynamic ecosystem where cutting-edge research meets practical application. We envision a future where our chapter serves as a one-stop hub for signal processing resources, adapts to rapidly changing technology landscapes, and remains intimately involved in educating the next generation of signal processing pioneers and industry leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- OBJECTIVES SECTION --- */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: '900px',
          margin: '4rem auto',
          padding: '0 1rem',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 900,
            color: '#208BEE',
            marginBottom: '1rem',
          }}
        >
          Our Objectives
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: 1.7,
            color: '#2d3748',
            marginBottom: '2rem',
            fontWeight: 500,
          }}
        >
          To promote academic excellence in signal processing through innovative research, inclusive community engagement, and continuous learning. We aim to bridge knowledge gaps and inspire creativity to solve real-world challenges.
        </p>

        <ul
          style={{
            listStyle: 'disc inside',
            textAlign: 'left',
            maxWidth: '600px',
            margin: '0 auto',
            color: '#4a5568',
            fontSize: '1rem',
            lineHeight: 1.6,
          }}
        >
          <li>Facilitate collaborative research and knowledge sharing.</li>
          <li>Organize workshops, seminars and technical talks.</li>
          <li>Encourage student participation in competitions and projects.</li>
          <li>Develop industry connections for practical exposure.</li>
          <li>Support professional development and networking.</li>
        </ul>
      </motion.section>

      {/* --- ACHIEVEMENTS / HIGHLIGHTS SECTION --- */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        style={{
          maxWidth: '900px',
          margin: '4rem auto 6rem',
          padding: '2.5rem 1rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #24A647 10%, #208BEE 90%)',
          borderRadius: '20px',
          color: 'white',
          boxShadow: '0 10px 40px rgba(32, 139, 238, 0.4)',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 900,
            marginBottom: '1.5rem',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
          }}
        >
          Achievements & Highlights
        </h2>

        <ul
          style={{
            listStyle: 'none',
            maxWidth: '700px',
            margin: '0 auto',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.5,
          }}
        >
          <li style={{ position: 'relative', paddingLeft: '2rem' }}>
            🎓 Successfully organized 10+ workshops and seminars with top experts.
          </li>
          <li style={{ position: 'relative', paddingLeft: '2rem' }}>
            🏆 Won regional competitions in signal processing innovation.
          </li>
          <li style={{ position: 'relative', paddingLeft: '2rem' }}>
            🤝 Established partnerships with 5 leading industry organizations.
          </li>
          <li style={{ position: 'relative', paddingLeft: '2rem' }}>
            📚 Developed open-access learning resources utilized by 500+ students.
          </li>
          <li style={{ position: 'relative', paddingLeft: '2rem' }}>
            🌐 Hosted the first virtual IEEE SPS conference at SSN Chapter.
          </li>
        </ul>
      </motion.section>

      <style jsx>{`
        ul li {
          margin-bottom: 0.8rem;
          line-height: 1.6;
          text-align: left;
        }
        ul li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #24A647;
          font-weight: 900;
          font-size: 1.2rem;
          top: 2px;
        }
      `}</style>
    </main>
  );
}
