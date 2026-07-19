import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, HeartPulse, RefreshCw, Trophy } from 'lucide-react';
import { BRAND_NAME } from '../data';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Dumbbell className="w-5 h-5 text-cyan-400" />,
      title: "Scientific Biomechanics",
      description: "We optimize physical angles and loads based on personal anatomy, replacing standard reps with scientific precision."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-blue-400" />,
      title: "Active Decompression",
      description: "A luxury recovery suite featuring advanced physical compression, infrared, cryotherapy, and cold plunges."
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-indigo-400" />,
      title: "Biometric Diagnostics",
      description: "Monitor real-time improvements using metabolic testing and advanced muscular and cellular scanning."
    },
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      title: "World-Class Coaching",
      description: "Direct elite mentoring from certified coaches, former professional athletes, and exercise physiologists."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background soft glowing accent */}
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Columns - Copy & Philosophy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                The Philosophy
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
                A New Standard Of <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
                  Human Engineering
                </span>
              </h2>
            </div>

            <p className="text-slate-300 font-sans text-base md:text-lg leading-relaxed">
              At {BRAND_NAME}, we reject the notion that fitness is simply about exhaustion. True strength is engineered through deliberate effort, anatomical science, and targeted recovery. Our spaces are custom-tailored to provide the ultimate physical sanctuary.
            </p>

            <blockquote className="border-l-4 border-cyan-500 bg-slate-900/40 p-5 rounded-r-xl">
              <p className="text-sm italic font-sans text-slate-400 leading-relaxed">
                \"We do not build typical gyms. We curate advanced physical laboratories where bespoke coaching, state-of-the-art weights, and professional thermal healing meet.\"
              </p>
              <cite className="block text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mt-3">
                — Marcus Vance, Founder & Coach
              </cite>
            </blockquote>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/20 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 border border-slate-800 mb-3">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Columns - Visual Image Stack */}
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            {/* Main Primary Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl z-20">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                alt="Elite Athlete workout session"
                className="w-full h-[380px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            {/* Overlapping Floating Secondary Image */}
            <div className="absolute -bottom-10 -left-10 w-[220px] h-[220px] rounded-2xl overflow-hidden border-2 border-slate-900 shadow-2xl z-30 hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=400&q=80"
                alt="Elite strength weights"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>

            {/* Glowing Accent Elements behind stack */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
