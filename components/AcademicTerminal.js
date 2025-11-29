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

const PackageRow = ({ project, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate dots for alignment
  const maxNameLength = 25;
  const dots = '.'.repeat(Math.max(2, maxNameLength - project.name.length));

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: isMobile ? '9px' : '11px',
        color: '#00FF41',
        marginBottom: isMobile ? '8px' : '12px',
        padding: isMobile ? '8px' : '12px',
        backgroundColor: isHovered ? 'rgba(0, 255, 65, 0.05)' : 'transparent',
        border: isHovered ? '1px solid rgba(0, 255, 65, 0.3)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Package Info Line */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '4px' : '8px',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontWeight: 'bold', opacity: isHovered ? 1 : 0.9 }}>
          {project.name}
        </span>
        <span style={{ opacity: 0.4, fontSize: isMobile ? '8px' : '10px' }}>
          {dots}
        </span>
        <span style={{ opacity: 0.7, fontSize: isMobile ? '8px' : '10px' }}>
          {project.version}
        </span>
        <span
          style={{
            opacity: 0.6,
            fontSize: isMobile ? '8px' : '10px',
            border: '1px solid #00FF41',
            padding: '1px 4px',
            marginLeft: 'auto',
          }}
        >
          [{project.status}]
        </span>
      </div>

      {/* Expanded Details on Hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={{
            marginTop: '8px',
            paddingTop: '8px',
            borderTop: '1px solid rgba(0, 255, 65, 0.2)',
            fontSize: isMobile ? '8px' : '10px',
            lineHeight: '1.6',
          }}
        >
          <div style={{ opacity: 0.7, marginBottom: '4px' }}>
            <span style={{ opacity: 0.6 }}>{'>'}</span> CATEGORY: {project.category}
          </div>
          <div style={{ opacity: 0.7 }}>
            <span style={{ opacity: 0.6 }}>{'>'}</span> DESC: {project.description}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function AcademicTerminal() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section
      id="education"
      style={{
        minHeight: 'auto',
        padding: isMobile ? '32px 16px 60px' : '48px 32px 100px',
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
            ACADEMIC TERMINAL
          </h2>
        </div>
      </div>

      {/* Split Terminal Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '24px' : '32px',
          position: 'relative',
        }}
      >
        {/* Vertical Separator Line (Desktop Only) */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              backgroundColor: '#00FF41',
              opacity: 0.2,
            }}
          />
        )}

        {/* LEFT COLUMN: Education Tree */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            border: '1px solid #00FF41',
            backgroundColor: '#050505',
            padding: isMobile ? '16px' : '24px',
            fontFamily: 'Space Mono, monospace',
            opacity: 0.95,
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              fontSize: isMobile ? '9px' : '11px',
              color: '#00FF41',
              marginBottom: isMobile ? '16px' : '20px',
              opacity: 0.7,
              borderBottom: '1px solid rgba(0, 255, 65, 0.2)',
              paddingBottom: '8px',
            }}
          >
            root@siddharth:~/education# tree -L 2
          </div>

          {/* Tree Structure */}
          <div style={{ fontSize: isMobile ? '10px' : '12px', color: '#00FF41', lineHeight: '1.8' }}>
            {/* Root */}
            <div style={{ marginBottom: '8px', opacity: 0.6 }}>.</div>

            {/* University Branch */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontWeight: 'bold', opacity: 1, filter: 'drop-shadow(0 0 3px rgba(0, 255, 65, 0.5))' }}>
                ├── {educationData.university.name}
              </div>
              <div style={{ paddingLeft: isMobile ? '16px' : '20px', opacity: 0.8 }}>
                │   ├── {educationData.university.degree}
              </div>
              <div style={{ paddingLeft: isMobile ? '16px' : '20px', opacity: 0.7 }}>
                │   ├── {educationData.university.timeline}
              </div>
              <div style={{ paddingLeft: isMobile ? '16px' : '20px', opacity: 0.6 }}>
                │   └── {educationData.university.location}
              </div>
            </div>

            {/* Coursework Branch */}
            <div>
              <div style={{ fontWeight: 'bold', opacity: 1, filter: 'drop-shadow(0 0 3px rgba(0, 255, 65, 0.5))' }}>
                └── CORE_MODULES
              </div>
              {educationData.coursework.map((course, idx) => {
                const isLast = idx === educationData.coursework.length - 1;
                return (
                  <div
                    key={idx}
                    style={{
                      paddingLeft: isMobile ? '16px' : '20px',
                      opacity: 0.7,
                      marginTop: '4px',
                    }}
                  >
                    {isLast ? '    └──' : '    ├──'} {course.replace(/ /g, '_')}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Package Manager */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            border: '1px solid #00FF41',
            backgroundColor: '#050505',
            padding: isMobile ? '16px' : '24px',
            fontFamily: 'Space Mono, monospace',
            opacity: 0.95,
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              fontSize: isMobile ? '9px' : '11px',
              color: '#00FF41',
              marginBottom: isMobile ? '16px' : '20px',
              opacity: 0.7,
              borderBottom: '1px solid rgba(0, 255, 65, 0.2)',
              paddingBottom: '8px',
            }}
          >
            root@siddharth:~/projects# ./list-packages
          </div>

          {/* Package List Header */}
          <div
            style={{
              fontSize: isMobile ? '8px' : '10px',
              color: '#00FF41',
              opacity: 0.5,
              marginBottom: isMobile ? '12px' : '16px',
              letterSpacing: '0.05em',
            }}
          >
            [PACKAGE NAME] .................. [VERSION] [STATUS]
          </div>

          {/* Package Rows */}
          <div>
            {educationData.academicProjects.map((project, index) => (
              <PackageRow key={project.id} project={project} index={index} isMobile={isMobile} />
            ))}
          </div>

          {/* Footer */}
          <div
            style={{
              fontSize: isMobile ? '8px' : '10px',
              color: '#00FF41',
              opacity: 0.4,
              marginTop: isMobile ? '16px' : '20px',
              borderTop: '1px solid rgba(0, 255, 65, 0.1)',
              paddingTop: '12px',
            }}
          >
            {educationData.academicProjects.length} packages installed
          </div>
        </motion.div>
      </div>
    </section>
  );
}