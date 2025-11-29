'use client';

import { motion } from 'framer-motion';
import { profileData } from '@/data/profileData';
import { Github, Linkedin, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Icon mapping
const iconMap = {
  Github,
  Linkedin,
  Mail,
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

export default function ProfilePage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [nameHovered, setNameHovered] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '32px 16px' : '64px 32px',
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

      {/* Holographic Identity Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          maxWidth: isMobile ? '90%' : '800px',
          width: '100%',
          backgroundColor: 'rgba(0, 20, 10, 0.4)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 255, 65, 0.5)',
          boxShadow: '0 0 40px rgba(0, 255, 65, 0.2), inset 0 0 40px rgba(0, 255, 65, 0.05)',
          padding: isMobile ? '24px' : '48px',
          fontFamily: 'Space Mono, monospace',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Scanning Line Animation */}
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
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

        {/* Header Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '20px' : '32px',
            marginBottom: isMobile ? '24px' : '32px',
            alignItems: isMobile ? 'center' : 'flex-start',
          }}
        >
          {/* Hexagonal Avatar with Rotating Ring */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: '-12px',
                border: '2px solid transparent',
                borderTopColor: '#00FF41',
                borderRightColor: '#00FF41',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                pointerEvents: 'none',
              }}
            />

            {/* Avatar */}
            <div
              style={{
                width: isMobile ? '120px' : '150px',
                height: isMobile ? '120px' : '150px',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                backgroundColor: '#0a0a0a',
                border: '2px solid #00FF41',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Replace with actual image or keep placeholder */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 255, 65, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? '40px' : '50px',
                  color: '#00FF41',
                  fontWeight: 'bold',
                }}
              >
                SN
              </div>
            </div>

            {/* Status Indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '8px',
                color: '#00FF41',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: '4px 8px',
                border: '1px solid #00FF41',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#00FF41',
                  borderRadius: '50%',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />
              {profileData.identity.status}
            </div>
          </div>

          {/* Identity Info */}
          <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
            {/* Name with Glitch Effect */}
            <motion.h1
              onMouseEnter={() => setNameHovered(true)}
              onMouseLeave={() => setNameHovered(false)}
              style={{
                fontSize: isMobile ? '24px' : '36px',
                fontWeight: 'bold',
                color: '#00FF41',
                marginBottom: '8px',
                letterSpacing: '0.05em',
                filter: nameHovered ? 'drop-shadow(0 0 10px #00FF41)' : 'drop-shadow(0 0 5px rgba(0, 255, 65, 0.7))',
                textShadow: nameHovered ? '2px 0 #ff00de, -2px 0 #00ffff' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              {profileData.identity.name}
            </motion.h1>

            <p
              style={{
                fontSize: isMobile ? '11px' : '14px',
                color: '#00FF41',
                opacity: 0.8,
                marginBottom: '12px',
                letterSpacing: '0.1em',
              }}
            >
              {profileData.identity.role}
            </p>

            {/* Clearance Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                backgroundColor: 'rgba(0, 255, 65, 0.1)',
                border: '1px solid #00FF41',
                fontSize: isMobile ? '9px' : '10px',
                letterSpacing: '0.1em',
                color: '#00FF41',
                marginBottom: '12px',
              }}
            >
              <span>🔐</span>
              <span>{profileData.identity.clearance}</span>
            </div>

            <div
              style={{
                fontSize: isMobile ? '10px' : '11px',
                color: '#00FF41',
                opacity: 0.6,
                lineHeight: '1.6',
              }}
            >
              <div>{profileData.identity.location}</div>
              <div>{profileData.identity.email}</div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '12px' : '16px',
            marginBottom: isMobile ? '24px' : '32px',
          }}
        >
          {profileData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              style={{
                padding: isMobile ? '12px' : '16px',
                backgroundColor: 'rgba(0, 255, 65, 0.05)',
                border: '1px solid rgba(0, 255, 65, 0.3)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? '16px' : '20px',
                  fontWeight: 'bold',
                  color: '#00FF41',
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: isMobile ? '8px' : '9px',
                  color: '#00FF41',
                  opacity: 0.6,
                  letterSpacing: '0.05em',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Section */}
        <div
          style={{
            padding: isMobile ? '16px' : '24px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(0, 255, 65, 0.2)',
            marginBottom: isMobile ? '24px' : '32px',
          }}
        >
          <div
            style={{
              fontSize: isMobile ? '10px' : '12px',
              color: '#00FF41',
              lineHeight: '1.8',
              whiteSpace: 'pre-line',
              opacity: 0.9,
            }}
          >
            {profileData.bio}
          </div>
        </div>

        {/* Connect Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '12px' : '16px',
          }}
        >
          {profileData.connect.map((connection, idx) => {
            const Icon = iconMap[connection.icon];
            return (
              <motion.a
                key={idx}
                href={connection.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: isMobile ? '16px' : '20px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(0, 255, 65, 0.3)',
                  textDecoration: 'none',
                  color: '#00FF41',
                  fontSize: isMobile ? '10px' : '11px',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00FF41';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.borderColor = '#00FF41';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                  e.currentTarget.style.color = '#00FF41';
                  e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon size={isMobile ? 24 : 32} style={{ marginBottom: '8px' }} />
                <span>[ {connection.action} ]</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}