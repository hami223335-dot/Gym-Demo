import React from 'react';
import { motion } from 'motion/react';
import { useDemo } from '../context/DemoContext';
import { Sparkles, ArrowRight, Activity, Calendar } from 'lucide-react';

export const CTASection: React.FC = () => {
  const { triggerModal } = useDemo();

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#contact');
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="cta-section" className="py-28 relative overflow-hidden bg-slate-950">
      {/* Background Cinematic Image with real athlete */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
          alt="Athlete focused conditioning"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.25] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays to match luxury colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
        
        {/* Glowing Ambient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[110px] animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8">
        
        {/* Little badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/50 px-4 py-2 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
            Limited Capacity Opportunity
          </span>
        </motion.div>

        {/* Powerful Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase leading-tight"
          >
            Ready to <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              Engineer Your Body?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 font-sans text-sm md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Claim your complimentary high-threshold biometric diagnostic, metabolic mapping, and a full day pass to experience our physical sanctuary first-hand.
          </motion.p>
        </div>

        {/* Conversion Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
        >
          <button
            onClick={handleScrollToContact}
            className="group w-full sm:w-auto rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 px-8 py-4 text-center font-bold text-xs uppercase tracking-widest text-slate-950 shadow-2xl shadow-cyan-400/20 hover:shadow-cyan-300/30 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Activate Guest Pass</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => triggerModal("Virtual Club Walkthrough")}
            className="group w-full sm:w-auto rounded-xl border border-slate-700 hover:border-cyan-500/50 bg-slate-950/60 hover:bg-slate-900/40 px-8 py-4 text-center font-bold text-xs uppercase tracking-widest text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
          >
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Virtual Walkthrough</span>
          </button>
        </motion.div>

        {/* Quick Trust factors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 pt-8 text-[10px] text-slate-500 font-mono uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>No long term obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>Hospital-grade UV air purification</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span>Strict 15-person capacity limits</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
