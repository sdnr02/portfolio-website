'use client';

import { motion } from 'framer-motion';
import Dock from '@/components/Dock';
import SystemSkills from '@/components/SystemSkills';
import ExperienceLog from '@/components/ExperienceLog';
import HarmanBentoGrid from '@/components/HarmanBentoGrid';
import AcademicTerminal from '@/components/AcademicTerminal';
import ActiveDevelopment from '@/components/ActiveDevelopment';
import { Terminal, Cpu, Zap, Database, Brain, Code2 } from 'lucide-react';

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen pb-32">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-4 flex justify-center">
            <Terminal className="w-16 h-16 text-terminal-green" strokeWidth={1} />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
            SIDDHARTH
          </h1>
          <div className="text-2xl md:text-4xl mb-12 tracking-widest">
            // AI ENGINEER
          </div>
          <motion.button
            onClick={() => scrollToSection('work')}
            className="px-8 py-4 border border-terminal-green bg-terminal-black hover:bg-terminal-green hover:text-terminal-black transition-colors duration-300 text-lg tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            [ INITIALIZE SYSTEM ]
          </motion.button>
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
      <footer className="px-8 py-8 max-w-7xl mx-auto text-center border-t border-terminal-green">
        <p className="text-sm opacity-70">
          © 2025 SIDDHARTH NAIR // AI ENGINEER // ALL SYSTEMS OPERATIONAL
        </p>
      </footer>

      {/* Dock */}
      <Dock />
    </main>
  );
}