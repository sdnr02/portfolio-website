'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, FileText, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

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

const DockIcon = ({ icon: Icon, href, label, mouseX, isExternal, isMobile }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance, 
    [-150, 0, 150], 
    isMobile ? [36, 48, 36] : [48, 80, 48]
  );
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const IconWrapper = isExternal ? 'a' : Link;
  const linkProps = isExternal 
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };

  return (
    <motion.div 
      ref={ref} 
      style={{ 
        width: isMobile ? '36px' : width,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <IconWrapper
        {...linkProps}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          transition: 'opacity 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        aria-label={label}
      >
        <Icon 
          style={{ 
            width: isMobile ? '20px' : '32px', 
            height: isMobile ? '20px' : '32px', 
            color: '#00FF41',
            strokeWidth: 1.5 
          }} 
        />
      </IconWrapper>
    </motion.div>
  );
};

export default function Dock() {
  const mouseX = useMotionValue(Infinity);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const dockItems = [
    { icon: Home, href: '#hero', label: 'Home', isExternal: false },
    { icon: FileText, href: '/blog', label: 'Blog', isExternal: false },
    { icon: Github, href: 'https://github.com/siddharth', label: 'GitHub', isExternal: true },
    { icon: Linkedin, href: 'https://linkedin.com/in/siddharth', label: 'LinkedIn', isExternal: true },
    { icon: Mail, href: 'mailto:siddharth@example.com', label: 'Email', isExternal: true },
    { icon: Twitter, href: 'https://twitter.com/siddharth', label: 'X', isExternal: true },
  ];

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={{
        position: 'fixed',
        bottom: isMobile ? '16px' : '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          height: isMobile ? '56px' : '80px',
          gap: isMobile ? '12px' : '24px',
          padding: isMobile ? '12px 16px' : '16px 24px',
          backgroundColor: '#050505',
          border: '1px solid #00FF41',
          boxShadow: '0 10px 30px rgba(0, 255, 65, 0.2)'
        }}
      >
        {dockItems.map((item, index) => (
          <DockIcon
            key={index}
            mouseX={mouseX}
            isMobile={isMobile}
            {...item}
          />
        ))}
      </div>
    </motion.div>
  );
}