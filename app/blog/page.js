'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Dock from '@/components/Dock';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'BUILDING ASR SYSTEMS AT SCALE',
      date: '2025.01.15',
      excerpt: 'Deep dive into production-grade automatic speech recognition pipelines...',
      status: 'PUBLISHED',
    },
    {
      id: 2,
      title: 'QUANTIZATION TECHNIQUES FOR EDGE DEPLOYMENT',
      date: '2025.01.08',
      excerpt: 'Optimizing transformer models for resource-constrained environments...',
      status: 'PUBLISHED',
    },
    {
      id: 3,
      title: 'MULTI-MODAL AI: BEYOND TEXT',
      date: '2024.12.20',
      excerpt: 'Exploring vision-language models and their applications...',
      status: 'PUBLISHED',
    },
  ];

  return (
    <main className="min-h-screen pb-32 px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="border border-terminal-green p-6 mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-4 hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            BACK TO MAIN SYSTEM
          </Link>
          <h1 className="text-5xl font-bold tracking-wider mb-2">BLOG MODULE</h1>
          <p className="text-sm opacity-70">TECHNICAL WRITINGS & RESEARCH NOTES</p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-terminal-green p-6 hover:bg-terminal-green hover:bg-opacity-5 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5" strokeWidth={1} />
                  <span className="text-xs opacity-70">{post.date}</span>
                </div>
                <span className="text-xs px-2 py-1 border border-terminal-green">
                  {post.status}
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-wider mb-3">{post.title}</h2>
              <p className="text-sm opacity-70 mb-4">{post.excerpt}</p>
              <button className="text-sm border border-terminal-green px-4 py-2 hover:bg-terminal-green hover:text-terminal-black transition-colors">
                [ READ MORE ]
              </button>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 border border-terminal-green p-6 text-center">
          <p className="text-sm opacity-70">MORE ENTRIES LOADING...</p>
        </div>
      </div>

      <Dock />
    </main>
  );
}