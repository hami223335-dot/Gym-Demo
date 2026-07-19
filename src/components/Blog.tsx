import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { Clock, BookOpen, ChevronRight } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

export const Blog: React.FC = () => {
  const { triggerModal } = useDemo();

  return (
    <section id="blog" className="py-24 bg-slate-900/40 border-t border-b border-slate-800/40 relative overflow-hidden">
      {/* Background soft glowing accent */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            Science & Research
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            The PowerCore <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Intel Journal
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Stay aligned with advanced athletic biomechanics, cellular restoration, metabolic longevity formulas, and dietary optimization plans written by our master coaches.
          </p>
        </div>

        {/* 3-Card Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={post.id}
              className="group rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
            >
              
              {/* Image Header wrapper */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.6]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float category badge */}
                <div className="absolute top-4 left-4 rounded bg-slate-950/80 backdrop-blur-md px-3 py-1 border border-slate-800 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>

              {/* Text Context Body */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-600" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 font-sans">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Link */}
                <div className="pt-4 border-t border-slate-900/80 flex items-center justify-between">
                  <button
                    onClick={() => triggerModal(`Reading: "${post.title}"`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-widest hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>Read Article</span>
                  </button>

                  <div className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
