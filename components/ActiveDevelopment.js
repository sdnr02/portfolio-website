'use client';

import { motion } from 'framer-motion';
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

const ProjectCard = ({ project, index, isMobile }) => {
  const isRunning = project.status === 'RUNNING';
  const statusColor = isRunning ? '#00FF41' : '#FFA500';
  const statusLabel = isRunning ? 'RUNNING' : 'BUILDING';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        border: `2px dashed ${statusColor}`,
        backgroundColor: '#050505',
        padding: isMobile ? '16px' : '24px',
        fontFamily: 'Space Mono, monospace',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${statusColor}22 1px, transparent 1px), linear-gradient(90deg, ${statusColor}22 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: isMobile ? '12px' : '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            {/* Status Indicator */}
            <div
              style={{
                width: isMobile ? '8px' : '10px',
                height: isMobile ? '8px' : '10px',
                backgroundColor: statusColor,
                borderRadius: '50%',
                animation: isRunning ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
                boxShadow: `0 0 ${isMobile ? '8px' : '12px'} ${statusColor}`,
              }}
            />
            <span
              style={{
                fontSize: isMobile ? '10px' : '12px',
                color: statusColor,
                fontWeight: 'bold',
                letterSpacing: '0.1em',
              }}
            >
              [{statusLabel}]
            </span>
          </div>

          <h3
            style={{
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: 'bold',
              color: '#00FF41',
              marginBottom: '4px',
              letterSpacing: '0.05em',
              filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
            }}
          >
            {project.name}
          </h3>

          <div
            style={{
              fontSize: isMobile ? '10px' : '12px',
              color: '#00FF41',
              opacity: 0.6,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {project.type}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: isMobile ? '11px' : '12px',
            color: '#00FF41',
            opacity: 0.8,
            lineHeight: '1.6',
            marginBottom: isMobile ? '12px' : '16px',
          }}
        >
          {project.description}
        </p>

        {/* Modules Section */}
        <div style={{ marginBottom: isMobile ? '12px' : '16px' }}>
          <div
            style={{
              fontSize: isMobile ? '9px' : '10px',
              color: '#00FF41',
              opacity: 0.5,
              marginBottom: '8px',
              letterSpacing: '0.1em',
            }}
          >
            {isRunning ? '> ACTIVE SERVICES:' : '> COMPILED LIBRARIES:'}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  fontSize: isMobile ? '9px' : '10px',
                  padding: '4px 8px',
                  border: `1px solid ${statusColor}`,
                  color: statusColor,
                  backgroundColor: `${statusColor}11`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {isRunning && module === 'Real-time Scoring' && (
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#00FF41',
                      borderRadius: '50%',
                      animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }}
                  />
                )}
                {module}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <div
            style={{
              fontSize: isMobile ? '9px' : '10px',
              color: '#00FF41',
              opacity: 0.5,
              marginBottom: '8px',
              letterSpacing: '0.1em',
            }}
          > STACK:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: isMobile ? '8px' : '9px',
                  padding: '2px 6px',
                  border: '1px solid #00FF41',
                  color: '#00FF41',
                  opacity: 0.6,
                }}
              >
                [{tech}]
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ActiveDevelopment() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      id="projects"
      style={{
        minHeight: 'auto',
        padding: isMobile ? '16px 16px 48px' : '16px 32px 64px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          border: '2px dashed #00FF41',
          backgroundColor: '#050505',
          padding: isMobile ? '16px' : '24px',
          marginBottom: isMobile ? '24px' : '32px',
          fontFamily: 'Space Mono, monospace',
          position: 'relative',
        }}
      >
        {/* Warning Stripe Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'repeating-linear-gradient(45deg, #00FF41, #00FF41 10px, transparent 10px, transparent 20px)',
            opacity: 0.3,
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px', marginTop: '8px' }}>
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
            {'>'} ACTIVE DEVELOPMENT STREAM
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
          [WIP/EXPERIMENTAL] :: BACKGROUND PROCESSES
        </p>
      </div>

      {/* Project Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '20px' : '32px',
        }}
      >
        {educationData.current_work.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isMobile={isMobile} />
        ))}
      </div>

      {/* Footer Note */}
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
        [LIVE MONITORING] :: {educationData.current_work.length} ACTIVE PROCESSES
      </div>
    </section>
  );
}