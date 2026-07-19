import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { TRANSFORMATIONS } from '../data';
import { Check, Info, Sparkles } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

const BeforeAfterSlider: React.FC<{ beforeImg: string; afterImg: string; name: string; duration: string; achievement: string }> = ({
  beforeImg,
  afterImg,
  name,
  duration,
  achievement
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 percentage
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center">
      {/* Slider Visual Container (60%) */}
      <div 
        ref={containerRef}
        onMouseDown={() => { isDragging.current = true; }}
        onTouchStart={() => { isDragging.current = true; }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="w-full lg:w-[480px] h-[340px] md:h-[400px] relative rounded-xl overflow-hidden select-none cursor-ew-resize border border-slate-800 shadow-2xl shrink-0"
      >
        {/* After Image (Full Background) */}
        <img
          src={afterImg}
          alt={`${name} After`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 z-10 rounded bg-emerald-500 px-2.5 py-1 text-[10px] font-mono font-bold text-slate-950 uppercase tracking-widest shadow-md">
          After
        </div>

        {/* Before Image (Cropped Overlay) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImg}
            alt={`${name} Before`}
            className="absolute inset-y-0 left-0 w-[480px] h-[340px] md:h-[400px] max-w-none object-cover pointer-events-none filter grayscale opacity-90 brightness-[0.7]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 z-10 rounded bg-slate-850 border border-slate-750 px-2.5 py-1 text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest shadow-md">
            Before
          </div>
        </div>

        {/* Vertical Split Line Handle */}
        <div 
          className="absolute inset-y-0 w-[2px] bg-cyan-400 pointer-events-none z-20 shadow-[0_0_10px_#22d3ee]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Button Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full border border-cyan-400 bg-slate-950 flex items-center justify-center text-cyan-400 shadow-xl cursor-ew-resize">
            <div className="flex items-center gap-[2px]">
              <span className="h-3 w-[2px] bg-cyan-400" />
              <span className="h-3 w-[2px] bg-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Copy Details (40%) */}
      <div className="flex-grow space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-950 px-3 py-1 border border-cyan-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
              Verified physical outcome
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
            {name}
          </h3>
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-0.5">
            Duration of program: <AnimatedCounter target={duration.split(" ")[0]} /> {duration.split(" ")[1]}
          </p>
        </div>

        <div className="p-4 bg-slate-950/60 border border-slate-850 rounded-xl">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold block mb-1">
            Achieved Milestones
          </span>
          <p className="text-sm font-semibold text-white">
            {achievement}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>Structured biweekly body composition scans.</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>Bespoke daily nutritional intake coaching plan.</span>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
            <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>Targeted kinetic routines for active joint stabilization.</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
          <Info className="w-3.5 h-3.5 text-slate-600" />
          <span>Interactive Slider: Drag circular bar to compare</span>
        </div>
      </div>
    </div>
  );
};

export const TransformationGallery: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[200px] h-[200px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            The Evidence
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            Transformation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              Case Studies
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Real physical adaptations from dedicated club members. We prioritize metrics, joint restoration, and sustainable skeletal mechanics over temporary visual exhaustion.
          </p>
        </div>

        {/* Case Studies sliders */}
        <div className="space-y-12">
          {TRANSFORMATIONS.map((trans) => (
            <BeforeAfterSlider
              key={trans.id}
              beforeImg={trans.beforeImg}
              afterImg={trans.afterImg}
              name={trans.name}
              duration={trans.duration}
              achievement={trans.achievement}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
