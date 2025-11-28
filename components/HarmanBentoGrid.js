'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, FileCode, Activity, DollarSign, Shield } from 'lucide-react';
import { harmanProjects } from '@/data/harmanData';
import { useState, useEffect } from 'react';

// Icon mapping
const iconMap = {
  Cpu,
  Database,
  FileCode,
  Activity,
  DollarSign,
  Shield,
};

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

// Terminal Log Component for Magnum Opus
const TerminalLog = ({ lines, isMobile }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, lines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLine(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentLine, lines]);

  return (
    <div
      style={{
        backgroundColor: '#000000',
        border: '1px solid #00FF41',
        padding: isMobile ? '12px' : '16px',
        fontFamily: 'Space Mono, monospace',
        fontSize: isMobile ? '8px' : '10px',
        color: '#00FF41',
        height: '100%',
        minHeight: isMobile ? '150px' : 'auto',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Terminal Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '8px',
          paddingBottom: '6px',
          borderBottom: '1px solid rgba(0, 255, 65, 0.2)',
        }}
      >
        <div style={{ width: '4px', height: '4px', backgroundColor: '#00FF41', borderRadius: '50%' }} />
        <span style={{ fontSize: isMobile ? '7px' : '9px', opacity: 0.7, textTransform: 'uppercase' }}>
          LIVE EXECUTION LOG
        </span>
      </div>

      {/* Log Lines */}
      <div style={{ lineHeight: '1.6' }}>
        {visibleLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              color: '#00FF41',
              opacity: 0.8,
              marginBottom: '3px',
            }}
          >
            {line}
          </motion.div>
        ))}
        
        {/* Blinking Cursor */}
        {currentLine < lines.length && (
          <span
            style={{
              display: 'inline-block',
              width: isMobile ? '6px' : '8px',
              height: isMobile ? '10px' : '12px',
              backgroundColor: '#00FF41',
              marginLeft: '2px',
              animation: 'blink 1s step-end infinite',
            }}
          />
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, isMobile }) => {
  const Icon = iconMap[project.icon];
  const isWideCard = project.layout.colSpan === 2 && project.layout.rowSpan === 1;
  const isMagnumOpus = project.highlight;
  const hasTwoByTwo = project.layout.colSpan === 2 && project.layout.rowSpan === 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#050505',
        border: '1px solid #00FF41',
        padding: isMobile ? '16px' : '24px',
        fontFamily: 'Space Mono, monospace',
        gridColumn: isMobile ? 'span 1' : `span ${project.layout.colSpan}`,
        gridRow: isMobile ? 'auto' : `span ${project.layout.rowSpan}`,
        transition: 'all 0.3s',
        ...(isMagnumOpus && {
          boxShadow: '0 0 0 1px rgba(0, 255, 65, 0.5)',
        }),
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(0, 255, 65, 0.05)';
        e.currentTarget.style.borderColor = '#00FF41';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#050505';
        e.currentTarget.style.borderColor = '#00FF41';
      }}
    >
      {/* Scanline effect for Magnum Opus */}
      {isMagnumOpus && (
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 65, 0.03), transparent)',
              animation: 'scan 8s linear infinite',
            }}
          />
        </div>
      )}

      {/* Special Layout for 2x2 with Terminal - MOBILE VERTICAL */}
      {hasTwoByTwo && project.visualContent ? (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {isMobile ? (
            // MOBILE: Vertical Stack
            <>
              <Icon style={{ width: isMobile ? '32px' : '40px', height: isMobile ? '32px' : '40px', color: '#00FF41', marginBottom: '10px', strokeWidth: 1, filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))' }} />
              
              <h3
                style={{
                  fontSize: isMobile ? '14px' : '18px',
                  fontWeight: 'bold',
                  color: '#00FF41',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
                }}
              >
                {project.title}
              </h3>
              <p style={{ fontSize: isMobile ? '9px' : '11px', color: '#00FF41', opacity: 0.6, marginBottom: '10px' }}>
                {project.subtitle}
              </p>

              {/* Status indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    backgroundColor: '#00FF41',
                    borderRadius: '50%',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  }}
                />
                <span style={{ fontSize: isMobile ? '8px' : '10px', color: '#00FF41', opacity: 0.7, textTransform: 'uppercase' }}>
                  {project.status}
                </span>
              </div>

              <p
                style={{
                  fontSize: isMobile ? '11px' : '13px',
                  color: '#00FF41',
                  opacity: 0.7,
                  lineHeight: '1.6',
                  marginBottom: '12px',
                }}
              >
                {project.description}
              </p>

              {/* Terminal on mobile - below description */}
              <div style={{ marginBottom: '12px' }}>
                <TerminalLog lines={project.visualContent} isMobile={isMobile} />
              </div>

              {/* Stats */}
              {project.stats && (
                <div
                  style={{
                    marginBottom: '8px',
                    paddingBottom: '6px',
                    color: '#00FF41',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '11px' : '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderTop: '1px solid rgba(0, 255, 65, 0.2)',
                    paddingTop: '12px',
                    filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
                  }}
                >
                  {project.stats}
                </div>
              )}

              {/* Tech Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: isMobile ? '7px' : '8px',
                      padding: '1px 3px',
                      border: '1px solid #00FF41',
                      color: '#00FF41',
                      opacity: 0.6,
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          ) : (
            // DESKTOP: Side by Side
            <>
              <div style={{ display: 'flex', gap: '20px', flex: 1, marginBottom: '20px' }}>
                <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column' }}>
                  <Icon style={{ width: '40px', height: '40px', color: '#00FF41', marginBottom: '12px', strokeWidth: 1, filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))' }} />
                  
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#00FF41',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '11px', color: '#00FF41', opacity: 0.6, marginBottom: '14px' }}>
                    {project.subtitle}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#00FF41',
                        borderRadius: '50%',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                      }}
                    />
                    <span style={{ fontSize: '10px', color: '#00FF41', opacity: 0.7, textTransform: 'uppercase' }}>
                      {project.status}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '13px',
                      color: '#00FF41',
                      opacity: 0.7,
                      lineHeight: '1.6',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div style={{ flex: 1 }}>
                  <TerminalLog lines={project.visualContent} isMobile={false} />
                </div>
              </div>

              <div style={{ width: '100%', paddingTop: '20px' }}>
                {project.stats && (
                  <div
                    style={{
                      marginBottom: '10px',
                      paddingBottom: '8px',
                      color: '#00FF41',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderTop: '1px solid rgba(0, 255, 65, 0.2)',
                      paddingTop: '18px',
                      filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
                    }}
                  >
                    {project.stats}
                  </div>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '8px',
                        padding: '1px 4px',
                        border: '1px solid #00FF41',
                        color: '#00FF41',
                        opacity: 0.6,
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      ) : isWideCard ? (
        // Wide card layout
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '12px' : '24px', height: '100%' }}>
          <div style={{ flexShrink: 0, width: isMobile ? '100%' : '30%' }}>
            <Icon style={{ width: isMobile ? '28px' : '32px', height: isMobile ? '28px' : '32px', color: '#00FF41', marginBottom: '10px', strokeWidth: 1, filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))' }} />
            <h3
              style={{
                fontSize: isMobile ? '13px' : '16px',
                fontWeight: 'bold',
                color: '#00FF41',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontSize: isMobile ? '9px' : '11px', color: '#00FF41', opacity: 0.6, marginBottom: '10px' }}>
              {project.subtitle}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <div
                style={{
                  width: isMobile ? '5px' : '6px',
                  height: isMobile ? '5px' : '6px',
                  backgroundColor: '#00FF41',
                  borderRadius: '50%',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />
              <span style={{ fontSize: isMobile ? '8px' : '10px', color: '#00FF41', opacity: 0.7, textTransform: 'uppercase' }}>
                {project.status}
              </span>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p
              style={{
                fontSize: isMobile ? '11px' : '13px',
                color: '#00FF41',
                opacity: 0.7,
                lineHeight: '1.6',
                marginBottom: '10px',
              }}
            >
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: isMobile ? '7px' : '8px',
                    padding: '1px 3px',
                    border: '1px solid #00FF41',
                    color: '#00FF41',
                    opacity: 0.6,
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Regular card layout
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Icon style={{ width: isMobile ? '28px' : '32px', height: isMobile ? '28px' : '32px', color: '#00FF41', marginBottom: '10px', strokeWidth: 1, filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))' }} />

          <h3
            style={{
              fontSize: isMobile ? '13px' : '16px',
              fontWeight: 'bold',
              color: '#00FF41',
              marginBottom: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: isMobile ? '9px' : '11px', color: '#00FF41', opacity: 0.6, marginBottom: '10px' }}>
            {project.subtitle}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <div
              style={{
                width: isMobile ? '5px' : '6px',
                height: isMobile ? '5px' : '6px',
                backgroundColor: '#00FF41',
                borderRadius: '50%',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            />
            <span style={{ fontSize: isMobile ? '8px' : '10px', color: '#00FF41', opacity: 0.7, textTransform: 'uppercase' }}>
              {project.status}
            </span>
          </div>

          <p
            style={{
              fontSize: isMobile ? '11px' : '13px',
              color: '#00FF41',
              opacity: 0.7,
              lineHeight: '1.6',
              marginBottom: '10px',
              flex: 1,
            }}
          >
            {project.description}
          </p>

          {project.stats && (
            <div
              style={{
                marginBottom: '10px',
                color: '#00FF41',
                fontWeight: 'bold',
                fontSize: isMobile ? '9px' : '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderTop: '1px solid rgba(0, 255, 65, 0.2)',
                paddingTop: '10px',
                filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
              }}
            >
              {project.stats}
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginTop: 'auto' }}>
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: isMobile ? '7px' : '8px',
                  padding: '1px 3px',
                  border: '1px solid #00FF41',
                  color: '#00FF41',
                  opacity: 0.6,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Corner decoration for Magnum Opus */}
      {isMagnumOpus && (
        <>
          <div style={{ position: 'absolute', top: 0, left: 0, width: isMobile ? '8px' : '12px', height: isMobile ? '8px' : '12px', borderTop: '1px solid #00FF41', borderLeft: '1px solid #00FF41' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: isMobile ? '8px' : '12px', height: isMobile ? '8px' : '12px', borderTop: '1px solid #00FF41', borderRight: '1px solid #00FF41' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: isMobile ? '8px' : '12px', height: isMobile ? '8px' : '12px', borderBottom: '1px solid #00FF41', borderLeft: '1px solid #00FF41' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: isMobile ? '8px' : '12px', height: isMobile ? '8px' : '12px', borderBottom: '1px solid #00FF41', borderRight: '1px solid #00FF41' }} />
        </>
      )}
    </motion.div>
  );
};

export default function HarmanBentoGrid() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="work" style={{ minHeight: '100vh', padding: isMobile ? '32px 16px' : '64px 32px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Section Header */}
      <div
        style={{
          border: '1px solid #00FF41',
          backgroundColor: '#050505',
          padding: isMobile ? '16px' : '24px',
          marginBottom: isMobile ? '20px' : '32px',
          fontFamily: 'Space Mono, monospace',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px', marginBottom: isMobile ? '6px' : '8px' }}>
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
              fontSize: isMobile ? '20px' : '30px',
              fontWeight: 'bold',
              color: '#00FF41',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              filter: 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
            }}
          >
            MODULE: HARMAN
          </h2>
        </div>
        <p
          style={{
            fontSize: isMobile ? '10px' : '14px',
            color: '#00FF41',
            opacity: 0.7,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          SYSTEM STATUS: OPERATIONAL // DATA STREAM ACTIVE
        </p>
      </div>

      {/* Bento Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? '12px' : '16px',
          gridAutoRows: isMobile ? 'auto' : 'minmax(250px, auto)',
        }}
      >
        {harmanProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}