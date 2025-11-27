'use client';

import { motion } from 'framer-motion';
import Dock from '@/components/Dock';
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
      <section id="work" className="min-h-screen px-8 py-16 max-w-7xl mx-auto">
        <div className="border border-terminal-green p-6 mb-8">
          <h2 className="text-3xl font-bold mb-2 tracking-wider">MODULE: HARMAN</h2>
          <p className="text-sm opacity-70">SYSTEM STATUS: OPERATIONAL</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'SPEECH RECOGNITION', desc: 'Advanced ASR pipeline development', icon: Cpu },
            { title: 'NLU SYSTEMS', desc: 'Intent classification & entity extraction', icon: Brain },
            { title: 'MODEL OPTIMIZATION', desc: 'Quantization & edge deployment', icon: Zap },
            { title: 'DATA PIPELINE', desc: 'Audio preprocessing & augmentation', icon: Database },
            { title: 'MULTI-LINGUAL NLP', desc: 'Cross-language model training', icon: Code2 },
            { title: 'PRODUCTION ML', desc: 'MLOps & model monitoring', icon: Terminal },
          ].map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-terminal-green p-6 hover:bg-terminal-green hover:bg-opacity-5 transition-colors"
            >
              <module.icon className="w-8 h-8 mb-4" strokeWidth={1} />
              <h3 className="text-xl font-bold mb-2 tracking-wider">{module.title}</h3>
              <p className="text-sm opacity-70">{module.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen px-8 py-16 max-w-7xl mx-auto">
        <div className="border border-terminal-green p-6 mb-8">
          <h2 className="text-3xl font-bold mb-2 tracking-wider">SYSTEM LOG: EXPERIENCE</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              date: '2021 - 2023',
              org: 'GTRE (GAS TURBINE RESEARCH ESTABLISHMENT)',
              role: 'RESEARCH ENGINEER',
              desc: 'Developed ML models for turbine performance prediction and anomaly detection in aerospace systems.',
            },
            {
              date: '2019 - 2021',
              org: 'ARAW (AERONAUTICAL RESEARCH & ANALYSIS WING)',
              role: 'AI RESEARCH SCIENTIST',
              desc: 'Implemented computer vision systems for aircraft component inspection and defect classification.',
            },
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="border border-terminal-green p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs opacity-70 mb-1">{exp.date}</p>
                  <h3 className="text-xl font-bold tracking-wider">{exp.org}</h3>
                  <p className="text-sm mt-1">{exp.role}</p>
                </div>
              </div>
              <p className="text-sm opacity-70">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="px-8 py-16 max-w-7xl mx-auto">
        <div className="border border-terminal-green p-6 mb-8">
          <h2 className="text-3xl font-bold mb-2 tracking-wider">CREDENTIALS</h2>
        </div>

        <div className="border border-terminal-green">
          <table className="w-full">
            <thead>
              <tr className="border-b border-terminal-green">
                <th className="text-left p-4 font-bold">DEGREE</th>
                <th className="text-left p-4 font-bold">INSTITUTION</th>
                <th className="text-left p-4 font-bold">YEAR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-terminal-green">
                <td className="p-4">M.TECH IN AI</td>
                <td className="p-4">IIT HYDERABAD</td>
                <td className="p-4">2023</td>
              </tr>
              <tr>
                <td className="p-4">B.TECH IN CSE</td>
                <td className="p-4">NIT TRICHY</td>
                <td className="p-4">2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Current Projects */}
      <section id="projects" className="px-8 py-16 max-w-7xl mx-auto">
        <div className="border border-terminal-green p-6 mb-8">
          <h2 className="text-3xl font-bold mb-2 tracking-wider">ACTIVE PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'PITCHPULSE',
              desc: 'Real-time startup pitch analysis using NLP and sentiment analysis',
              status: 'COMPILING',
            },
            {
              name: 'NEURAL FORGE',
              desc: 'Automated neural architecture search framework',
              status: 'COMPILING',
            },
            {
              name: 'VOICE SYNTH',
              desc: 'Low-latency voice cloning system',
              status: 'TESTING',
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="border border-terminal-green p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold tracking-wider">{project.name}</h3>
                <span className="text-xs px-2 py-1 border border-terminal-green">
                  STATUS: {project.status}
                </span>
              </div>
              <p className="text-sm opacity-70">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-16 max-w-7xl mx-auto">
        <div className="border border-terminal-green p-6 mb-8">
          <h2 className="text-3xl font-bold mb-2 tracking-wider">TECHNICAL STACK</h2>
        </div>

        <div className="border border-terminal-green p-6">
          <div className="flex flex-wrap gap-3">
            {[
              'PYTHON', 'PYTORCH', 'TENSORFLOW', 'TRANSFORMERS', 'CUDA',
              'ONNX', 'FASTAPI', 'DOCKER', 'KUBERNETES', 'AWS',
              'GCP', 'MLFLOW', 'WANDB', 'NUMPY', 'PANDAS',
              'SCIKIT-LEARN', 'HUGGINGFACE', 'LANGCHAIN', 'REDIS', 'POSTGRESQL',
            ].map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="px-3 py-1 border border-terminal-green text-sm hover:bg-terminal-green hover:text-terminal-black transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 max-w-7xl mx-auto text-center border-t border-terminal-green">
        <p className="text-sm opacity-70">
          © 2025 SIDDHARTH // AI ENGINEER // ALL SYSTEMS OPERATIONAL
        </p>
      </footer>

      {/* Dock */}
      <Dock />
    </main>
  );
}