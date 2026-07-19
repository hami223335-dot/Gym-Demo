import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useDemo } from '../context/DemoContext';
import { Play, ArrowRight, Activity, ShieldCheck, Award } from 'lucide-react';
import { BRAND_SLOGAN, BRAND_SUBHEADING } from '../data';

// Custom Animated Counter Component
const AnimatedCounter: React.FC<{ target: string; label: string; icon: React.ReactNode }> = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const duration = 1800; // 1.8 seconds

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Cubic ease out
            const progressValue = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(progressValue * numericTarget));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [numericTarget, hasAnimated]);

  return (
    <div 
      ref={elementRef}
      className="flex items-center gap-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
    >
      <div className="h-12 w-12 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
        {icon}
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-mono font-extrabold text-white">
          {hasAnimated ? count.toLocaleString() : '0'}{suffix}
        </div>
        <div className="text-xs font-sans text-slate-400 font-medium uppercase tracking-widest mt-1">
          {label}
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { triggerModal } = useDemo();

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background Cinematic Image with real athlete */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury athletic training"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlays to match luxury colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/25 to-transparent" />
        
        {/* Floating Glowing Accent shapes */}
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-20 flex flex-col justify-between min-h-[calc(100vh-80px)]">
        {/* Center Main Copy */}
        <div className="my-auto max-w-3xl space-y-8">
          {/* Subtle Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-2 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              Welcome to elite-tier fitness
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-white leading-none">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block"
            >
              Train Smarter.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500"
            >
              Become Stronger.
            </motion.span>
          </h1>

          {/* Subheading description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-sans font-medium"
          >
            {BRAND_SUBHEADING}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <button
              onClick={(e) => handleScrollTo(e, '#pricing')}
              className="group rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 px-8 py-4 text-center font-bold text-sm uppercase tracking-widest text-slate-950 shadow-xl shadow-cyan-400/10 hover:shadow-cyan-300/20 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Membership</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="group rounded-xl border border-slate-700 hover:border-cyan-500/50 bg-slate-950/40 hover:bg-slate-900/60 px-8 py-4 text-center font-bold text-sm uppercase tracking-widest text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Free Day Trial</span>
              <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Animated Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 border-t border-slate-800/60"
        >
          <AnimatedCounter 
            target="15000+" 
            label="Square Feet Luxury Arena" 
            icon={<Activity className="w-5 h-5" />} 
          />
          <AnimatedCounter 
            target="25+" 
            label="Certified Master Coaches" 
            icon={<Award className="w-5 h-5" />} 
          />
          <AnimatedCounter 
            target="98%" 
            label="Client Transformation Ratio" 
            icon={<ShieldCheck className="w-5 h-5" />} 
          />
        </motion.div>
      </div>

      {/* Decorative vertical separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};
