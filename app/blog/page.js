'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '@/data/blog/posts';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
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

const BlogEntry = ({ post, index, isMobile }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        paddingLeft: isMobile ? '24px' : '40px',
        marginBottom: isMobile ? '32px' : '48px',
        cursor: 'pointer',
      }}
      onClick={() => setIsExpanded(!isExpanded)}
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

      {/* Timeline Node */}
      <div
        style={{
          position: 'absolute',
          left: isMobile ? '3px' : '7px',
          top: isMobile ? '4px' : '8px',
          width: isMobile ? '10px' : '10px',
          height: isMobile ? '10px' : '10px',
          border: '2px solid #00FF41',
          backgroundColor: isHovered || isExpanded ? '#00FF41' : '#050505',
          transform: 'rotate(45deg)',
          transition: 'all 0.3s ease',
          boxShadow: isHovered || isExpanded ? '0 0 12px rgba(0, 255, 65, 0.8)' : 'none',
        }}
      />

      {/* Entry Content */}
      <div style={{ fontFamily: 'Space Mono, monospace' }}>
        {/* Header */}
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
            [{post.timestamp}]
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
            :: {post.title}
          </span>
        </div>

        {/* Category & Read Time */}
        <div
          style={{
            paddingLeft: isMobile ? '12px' : '20px',
            borderLeft: '1px solid rgba(0, 255, 65, 0.2)',
            marginLeft: isMobile ? '4px' : '8px',
            opacity: isHovered ? 1 : 0.9,
            transition: 'opacity 0.3s ease',
          }}
        >
          <div
            style={{
              fontSize: isMobile ? '9px' : '10px',
              color: '#00FF41',
              marginBottom: isMobile ? '4px' : '6px',
              lineHeight: '1.6',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ opacity: 0.9 }}>
              <span style={{ opacity: 0.9 }}>{'>'}</span> CATEGORY: {post.category}
            </span>
            <span style={{ opacity: 0.9, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={isMobile ? 10 : 12} />
              {post.readTime}
            </span>
          </div>

          {/* Excerpt */}
          <div
            style={{
              fontSize: isMobile ? '10px' : '11px',
              color: '#00FF41',
              marginBottom: isMobile ? '6px' : '8px',
              lineHeight: '1.6',
              opacity: 0.95,
              fontStyle: 'italic',
            }}
          >
            {post.excerpt}
          </div>

          {/* Tags */}
          <div
            style={{
              fontSize: isMobile ? '8px' : '9px',
              color: '#00FF41',
              marginTop: isMobile ? '6px' : '8px',
              lineHeight: '1.8',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
              alignItems: 'center',
            }}
          >
            <span style={{ opacity: 0.6 }}>{'>'}</span>
            <Tag size={isMobile ? 10 : 12} style={{ opacity: 0.6 }} />
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  opacity: 0.85,
                  border: '1px solid rgba(0, 255, 65, 0.7)',
                  padding: '2px 6px',
                }}
              >
                [{tag}]
              </span>
            ))}
          </div>

          {/* Expand Indicator */}
          <div
            style={{
              fontSize: isMobile ? '9px' : '10px',
              color: '#00FF41',
              marginTop: isMobile ? '8px' : '12px',
              opacity: 0.85,
              textShadow: isHovered ? '0 0 6px rgba(0, 255, 65, 0.6)' : 'none',
              transition: 'text-shadow 0.3s ease',
            }}
          >
            {isExpanded ? '▼ COLLAPSE ENTRY' : '▶ EXPAND TO READ'}
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: isMobile ? '12px' : '16px',
                paddingLeft: isMobile ? '12px' : '20px',
                borderLeft: '2px solid #00FF41',
                marginLeft: isMobile ? '4px' : '8px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? '11px' : '12px',
                  color: '#00FF41',
                  lineHeight: '1.8',
                  opacity: 0.95,
                  whiteSpace: 'pre-line',
                  padding: isMobile ? '12px' : '16px',
                  backgroundColor: 'rgba(0, 255, 65, 0.08)',
                  border: '1px solid rgba(0, 255, 65, 0.4)',
                }}
              >
                {post.content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function BlogPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        padding: isMobile ? '32px 16px 80px' : '64px 32px 120px',
        position: 'relative',
      }}
    >
      {/* Back Button */}
      <Link
        href="/"
        style={{
          position: 'fixed',
          top: isMobile ? '20px' : '32px',
          left: isMobile ? '20px' : '32px',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'Space Mono, monospace',
          fontSize: isMobile ? '10px' : '12px',
          color: '#00FF41',
          textDecoration: 'none',
          padding: '8px 16px',
          border: '1px solid #00FF41',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 255, 65, 0.1)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <ArrowLeft size={isMobile ? 14 : 16} />
        <span>RETURN TO MAIN</span>
      </Link>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: isMobile ? '60px' : '80px' }}>
        {/* Header */}
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
              {'>'} ARCHIVE: SYSTEM WRITINGS
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
            [TECH INSIGHTS] :: CLICK TO EXPAND ENTRIES
          </p>
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

          {/* Blog Entries */}
          <div style={{ marginTop: isMobile ? '24px' : '32px' }}>
            {blogPosts.map((post, index) => (
              <BlogEntry key={post.id} post={post} index={index} isMobile={isMobile} />
            ))}
          </div>

          {/* End of Archive */}
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
            [END OF ARCHIVE] :: {blogPosts.length} ENTRIES LOGGED
          </div>
        </div>
      </div>
    </div>
  );
}