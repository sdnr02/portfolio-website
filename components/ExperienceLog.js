'use client';

import { motion } from 'framer-motion';
import { experienceLogs } from '@/data/experienceData';
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

const LogEntry = ({ log, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        paddingLeft: isMobile ? '24px' : '40px',
        marginBottom: isMobile ? '32px' : '48px',
        cursor: 'pointer',
      }}
    >
      {/* Vertical Timeline Line */}
      <div
        style={{
          position: 'absolute',
          left: isMobile ? '7px' : '11px',
          top: isMobile ? '8px' : '12px',
          bottom: isMobile ? '-32px' : '-48px',
          width: '1px',
          backgroundColor: '#00FF41',
          opacity: 0.3,
        }}
      />

      {/* Timeline Node (Hollow Square) */}
      <div
        style={{
          position: 'absolute',
          left: isMobile ? '3px' : '7px',
          top: isMobile ? '4px' : '8px',
          width: isMobile ? '10px' : '10px',
          height: isMobile ? '10px' : '10px',
          border: '2px solid #00FF41',
          backgroundColor: isHovered ? '#00FF41' : '#050505',
          transform: 'rotate(45deg)',
          transition: 'all 0.3s ease',
          boxShadow: isHovered ? '0 0 12px rgba(0, 255, 65, 0.8)' : 'none',
        }}
      />

      {/* Log Content */}
      <div style={{ fontFamily: 'Space Mono, monospace' }}>
        {/* Timestamp & Organization */}
        <div 
          style={{ 
            marginBottom: isMobile ? '8px' : '12px',
            opacity: isHovered ? 1 : 0.9,
            transition: 'opacity 0.3s ease',
          }}
        >
          <span
            style={{
              fontSize: isMobile ? '10px' : '12px',
              color: '#00FF41',
              opacity: 0.7,
              letterSpacing: '0.05em',
              textShadow: isHovered ? '0 0 8px rgba(0, 255, 65, 0.8)' : 'none',
              transition: 'text-shadow 0.3s ease',
            }}
          >
            [{log.timestamp}]
          </span>
          <span
            style={{
              fontSize: isMobile ? '11px' : '13px',
              color: '#00FF41',
              marginLeft: '8px',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              textShadow: isHovered ? '0 0 8px rgba(0, 255, 65, 0.8)' : 'none',
              transition: 'text-shadow 0.3s ease',
            }}
          >
            :: {log.organization}
          </span>
        </div>

        {/* Nested Info with Indentation */}
        <div
          style={{
            paddingLeft: isMobile ? '12px' : '20px',
            borderLeft: '1px solid rgba(0, 255, 65, 0.2)',
            marginLeft: isMobile ? '4px' : '8px',
            opacity: isHovered ? 1 : 0.9,
            transition: 'opacity 0.3s ease',
          }}
        >
          {/* Role */}
          <div
            style={{
              fontSize: isMobile ? '10px' : '11px',
              color: '#00FF41',
              marginBottom: isMobile ? '4px' : '6px',
              lineHeight: '1.6',
              textShadow: isHovered ? '0 0 6px rgba(0, 255, 65, 0.6)' : 'none',
              transition: 'text-shadow 0.3s ease',
            }}
          >
            <span style={{ opacity: 0.6 }}>{'>'}</span> ROLE: {log.role}
          </div>

          {/* Project */}
          <div
            style={{
              fontSize: isMobile ? '10px' : '11px',
              color: '#00FF41',
              marginBottom: isMobile ? '4px' : '6px',
              lineHeight: '1.6',
              textShadow: isHovered ? '0 0 6px rgba(0, 255, 65, 0.6)' : 'none',
              transition: 'text-shadow 0.3s ease',
            }}
          >
            <span style={{ opacity: 0.6 }}>{'>'}</span> PROJECT: {log.project}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: isMobile ? '10px' : '11px',
              color: '#00FF41',
              marginBottom: isMobile ? '4px' : '6px',
              lineHeight: '1.6',
              opacity: 0.7,
              textShadow: isHovered ? '0 0 6px rgba(0, 255, 65, 0.6)' : 'none',
              transition: 'text-shadow 0.3s ease',
            }}
          >
            <span style={{ opacity: 0.6 }}>{'>'}</span> SYSTEM: {log.description}
          </div>

          {/* Metrics */}
          {log.metrics && (
            <div
              style={{
                fontSize: isMobile ? '10px' : '11px',
                color: '#00FF41',
                marginBottom: isMobile ? '6px' : '8px',
                lineHeight: '1.6',
                fontWeight: 'bold',
                textShadow: isHovered ? '0 0 8px rgba(0, 255, 65, 0.8)' : 'none',
                transition: 'text-shadow 0.3s ease',
              }}
            >
              <span style={{ opacity: 0.6 }}>{'>'}</span> METRIC: {log.metrics}
            </div>
          )}

          {/* Tech Stack */}
          <div
            style={{
              fontSize: isMobile ? '9px' : '10px',
              color: '#00FF41',
              marginTop: isMobile ? '6px' : '8px',
              lineHeight: '1.8',
              textShadow: isHovered ? '0 0 6px rgba(0, 255, 65, 0.6)' : 'none',
              transition: 'text-shadow 0.3s ease',
            }}
          >
            <span style={{ opacity: 0.6 }}>{'>'}</span> STACK:{' '}
            {log.tech.map((tech, idx) => (
              <span key={idx} style={{ opacity: 0.6 }}>
                [{tech}]{' '}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExperienceLog() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      id="experience"
      style={{
        minHeight: 'auto',
        padding: isMobile ? '48px 16px 32px' : '64px 32px 48px',
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
          marginBottom: isMobile ? '32px' : '48px',
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
            {'>'} EXECUTE: HISTORY_LOG -V
          </h2>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Starting Line */}
        <div
          style={{
            position: 'absolute',
            left: isMobile ? '7px' : '11px',
            top: 0,
            width: '1px',
            height: isMobile ? '16px' : '24px',
            backgroundColor: '#00FF41',
            opacity: 0.3,
          }}
        />

        {/* Log Entries */}
        <div style={{ marginTop: isMobile ? '24px' : '32px' }}>
          {experienceLogs.map((log, index) => (
            <LogEntry key={log.id} log={log} index={index} isMobile={isMobile} />
          ))}
        </div>

        {/* End of Logs */}
        <div
          style={{
            paddingLeft: isMobile ? '24px' : '40px',
            fontFamily: 'Space Mono, monospace',
            fontSize: isMobile ? '10px' : '12px',
            color: '#00FF41',
            opacity: 0.5,
            marginTop: isMobile ? '16px' : '24px',
            letterSpacing: '0.1em',
          }}
        >
          [END OF LOGS]
        </div>
      </div>
    </section>
  );
}