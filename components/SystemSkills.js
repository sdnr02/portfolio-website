'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { educationData } from '@/data/educationData';
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

const SkillModule = ({ categoryKey, category, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showItems, setShowItems] = useState(true);

  // Refresh/blink effect on hover
  useEffect(() => {
    if (isHovered) {
      setShowItems(false);
      const timer = setTimeout(() => setShowItems(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: isHovered ? 'rgba(0, 255, 65, 0.8)' : 'rgba(0, 255, 65, 0.5)',
        backgroundColor: isHovered ? 'rgba(0, 255, 65, 0.05)' : 'rgba(0, 20, 10, 0.5)',
        padding: isMobile ? '16px' : '20px',
        fontFamily: 'Space Mono, monospace',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 0 20px rgba(0, 255, 65, 0.2)' : 'none',
      }}
    >
      {/* Scanning Line Effect on Hover */}
      {isHovered && (
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: '#00FF41',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Module Header */}
      <div
        style={{
          marginBottom: isMobile ? '12px' : '16px',
          paddingBottom: isMobile ? '8px' : '12px',
          borderBottom: '1px solid rgba(0, 255, 65, 0.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <div
            style={{
              width: isMobile ? '6px' : '8px',
              height: isMobile ? '6px' : '8px',
              backgroundColor: '#00FF41',
              borderRadius: '50%',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          <span
            style={{
              fontSize: isMobile ? '9px' : '10px',
              color: '#00FF41',
              opacity: 0.6,
              letterSpacing: '0.1em',
            }}
          >
            [MODULE_{String(index + 1).padStart(2, '0')}]
          </span>
        </div>

        <h3
          style={{
            fontSize: isMobile ? '13px' : '15px',
            fontWeight: 'bold',
            color: '#00FF41',
            letterSpacing: '0.05em',
            filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
          }}
        >
          [ {category.label} ]
        </h3>
      </div>

      {/* Driver List */}
      <AnimatePresence mode="wait">
        {showItems && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: isMobile ? '10px' : '11px',
              color: '#00FF41',
              lineHeight: '1.8',
            }}
          >
            {category.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: isHovered ? idx * 0.05 : 0, duration: 0.3 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px',
                  opacity: 0.85,
                }}
              >
                <span style={{ color: '#00FF41', opacity: 0.6, fontSize: isMobile ? '10px' : '12px' }}>
                  {'>>'}
                </span>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status Footer */}
      <div
        style={{
          marginTop: isMobile ? '12px' : '16px',
          paddingTop: isMobile ? '8px' : '12px',
          borderTop: '1px solid rgba(0, 255, 65, 0.1)',
          fontSize: isMobile ? '8px' : '9px',
          color: '#00FF41',
          opacity: 0.5,
          letterSpacing: '0.05em',
        }}
      >
        [{category.items.length} DRIVERS LOADED]
      </div>
    </motion.div>
  );
};

export default function SystemSkills() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const skillsArray = Object.entries(educationData.skills);

  return (
    <section
      id="skills"
      style={{
        minHeight: '100vh',
        padding: isMobile ? '16px 16px 80px' : '32px 32px 95px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          border: '1px solid #00FF41',
          backgroundColor: '#050505',
          padding: isMobile ? '16px' : '24px',
          marginBottom: isMobile ? '24px' : '32px',
          fontFamily: 'Space Mono, monospace',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
          <div
            style={{
              width: isMobile ? '6px' : '8px',
              height: isMobile ? '6px' : '8px',
              backgroundColor: '#00FF41',
              borderRadius: '50%',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          <h2
            style={{
              fontSize: isMobile ? '16px' : '24px',
              fontWeight: 'bold',
              color: '#00FF41',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
            }}
          >
            {'>'} SYSTEM CONFIG MONITOR
          </h2>
        </div>

        <p
          style={{
            fontSize: isMobile ? '9px' : '11px',
            color: '#00FF41',
            opacity: 0.6,
            marginTop: '8px',
            letterSpacing: '0.05em',
          }}
        >
          [ACTIVE MODULES] :: RUNTIME STATUS
        </p>
      </div>

      {/* Skills Grid - 2x2 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '16px' : '24px',
        }}
      >
        {skillsArray.map(([key, category], index) => (
          <SkillModule
            key={key}
            categoryKey={key}
            category={category}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Footer Status */}
      <div
        style={{
          marginTop: isMobile ? '24px' : '32px',
          padding: isMobile ? '12px' : '16px',
          border: '1px solid rgba(0, 255, 65, 0.2)',
          backgroundColor: 'rgba(0, 255, 65, 0.02)',
          fontFamily: 'Space Mono, monospace',
          fontSize: isMobile ? '9px' : '10px',
          color: '#00FF41',
          opacity: 0.6,
          textAlign: 'center',
          letterSpacing: '0.05em',
        }}
      >
        [SYSTEM CHECK] :: {skillsArray.reduce((acc, [_, cat]) => acc + cat.items.length, 0)} TOTAL DRIVERS :: ALL MODULES OPERATIONAL
      </div>
    </section>
  );
}