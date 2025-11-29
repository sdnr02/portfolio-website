'use client';

import { motion } from 'framer-motion';
import Dock from '@/components/Dock';
import SystemSkills from '@/components/SystemSkills';
import ExperienceLog from '@/components/ExperienceLog';
import HarmanBentoGrid from '@/components/HarmanBentoGrid';
import AcademicTerminal from '@/components/AcademicTerminal';
import ActiveDevelopment from '@/components/ActiveDevelopment';
import { useState, useEffect } from 'react';

// Custom hook for media query
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '128px' }}>
      {/* Hero Section */}
      <section 
        id="hero" 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: isMobile ? '32px 16px' : '64px 32px' 
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          {/* Terminal Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: isMobile ? '14px' : '20px',
              color: '#00FF41',
              marginBottom: '16px',
              fontFamily: 'Space Mono, monospace',
            }}
          >
            {'>'}_
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontSize: isMobile ? '36px' : '60px', 
              fontWeight: 'bold',
              color: '#00FF41',
              marginBottom: '16px',
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '0.05em',
              textShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
            }}
          >
            SIDDHARTH NAIR
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: isMobile ? '16px' : '24px',
              color: '#00FF41',
              opacity: 0.8,
              marginBottom: '48px',
              fontFamily: 'Space Mono, monospace',
            }}
          >
            // AI ENGINEER
          </motion.p>

          {/* Scroll Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1, 
              y: [0, 10, 0] 
            }}
            transition={{ 
              opacity: { delay: 0.8 },
              y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' }
            }}
            onClick={() => scrollToSection('work')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontSize: isMobile ? '10px' : '12px',
                color: '#00FF41',
                opacity: 0.6,
                fontFamily: 'Space Mono, monospace',
                letterSpacing: '0.1em',
              }}
            >
              SCROLL TO EXPLORE
            </span>
            <svg
              width={isMobile ? "24" : "32"}
              height={isMobile ? "24" : "32"}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00FF41"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section - Harman */}
      <HarmanBentoGrid />

      {/* Experience Section */}
      <ExperienceLog />

      {/* Education Section */}
      <AcademicTerminal />

      {/* Current Projects */}
      <ActiveDevelopment />

      {/* Skills Section */}
      <SystemSkills />

      {/* Footer */}
      <footer 
        style={{ 
          padding: isMobile ? '24px 16px' : '32px', 
          maxWidth: '1280px', 
          margin: '0 auto', 
          textAlign: 'center', 
          borderTop: '1px solid #00FF41',
          fontFamily: 'Space Mono, monospace',
        }}
      >
        <p style={{ fontSize: isMobile ? '10px' : '12px', color: '#00FF41', opacity: 0.7 }}>
          © 2025 SIDDHARTH NAIR // AI ENGINEER // ALL SYSTEMS OPERATIONAL
        </p>
      </footer>

      {/* Dock */}
      <Dock />
    </main>
  );
}