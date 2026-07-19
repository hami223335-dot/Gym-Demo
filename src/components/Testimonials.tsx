import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide every 4.5 seconds unless paused
  useEffect(() => {
    if (isAutoplayPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoplayPaused]);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) { // 50px swipe threshold
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Slide variants for smooth animation
  const slideVariants = {
    initial: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 260, damping: 26 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-slate-950 relative overflow-hidden border-t border-b border-slate-900/60"
    >
      {/* Background radial soft cyan & indigo lights */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            The Community
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            Member Experiences & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Endorsements
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Read from active athletes, venture partners, medical physicians, and athletic developers who call PowerCore their physical workspace.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative px-0 md:px-12"
          onMouseEnter={() => setIsAutoplayPaused(true)}
          onMouseLeave={() => setIsAutoplayPaused(false)}
        >
          {/* Active Card with Slider animation */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="overflow-hidden min-h-[380px] md:min-h-[340px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full relative rounded-3xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-between shadow-2xl hover:border-cyan-500/30 hover:shadow-cyan-500/5 transition-all duration-500 group"
              >
                {/* Quote Icon watermark */}
                <div className="absolute top-8 right-10 text-slate-800/30 group-hover:text-cyan-500/5 transition-colors duration-500">
                  <Quote className="w-16 h-16 transform scale-x-[-1] pointer-events-none" />
                </div>

                <div className="space-y-6 relative z-10">
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: currentTestimonial.rating || 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4.5 h-4.5 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-200 text-sm md:text-lg leading-relaxed font-sans font-medium">
                    "{currentTestimonial.content}"
                  </p>
                </div>

                {/* Author Info block */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-4">
                    {/* Profile Avatar */}
                    <div className="h-14 w-14 rounded-2xl overflow-hidden border border-slate-800 shrink-0 group-hover:border-cyan-500/30 transition-all duration-500 shadow-lg">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {/* Name & Credentials */}
                    <div className="min-w-0">
                      <h4 className="text-base font-extrabold text-white uppercase tracking-wider">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest truncate mt-0.5">
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Achievement tag */}
                  <div className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/20 text-[10px] text-cyan-400 font-bold font-mono uppercase tracking-wider shadow-md shadow-cyan-950/20">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{currentTestimonial.achievement}</span>
                  </div>
                </div>

                {/* Left Subtle Glass Highlight */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-3xl" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8 md:mt-0 md:absolute md:inset-y-0 md:-left-4 md:-right-4 md:pointer-events-none z-20">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 md:pointer-events-auto shadow-xl hover:shadow-cyan-500/5 hover:translate-x-[-2px] cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 md:pointer-events-auto shadow-xl hover:shadow-cyan-500/5 hover:translate-x-[2px] cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {TESTIMONIALS.map((_, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
                      : "w-2.5 bg-slate-800 hover:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
