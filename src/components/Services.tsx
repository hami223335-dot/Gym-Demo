import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

export const Services: React.FC = () => {
  const { triggerModal } = useDemo();
  const [activeService, setActiveService] = useState<Service>(SERVICES[0]);

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              Core Specialties
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
              Bespoke Training <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
                Disciplines
              </span>
            </h2>
          </div>
          <p className="text-slate-400 font-sans text-sm md:text-base max-w-sm leading-relaxed">
            Every fitness journey is customized. We offer elite specialized training categories engineered for maximum efficiency, recovery, and precision results.
          </p>
        </div>

        {/* Interactive Desktop Layout (Tabs + Detail Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column Tabs (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {SERVICES.map((service) => {
              const isActive = activeService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? "bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/20"
                      : "bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                      {service.category}
                    </span>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center border transition-all ${
                    isActive 
                      ? "bg-cyan-500 border-cyan-400 text-slate-950" 
                      : "bg-slate-900 border-slate-800 text-slate-400 group-hover:text-white"
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column - Highlighted Profile (8 Columns) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden flex flex-col md:flex-row shadow-2xl backdrop-blur-md"
              >
                {/* Photo half */}
                <div className="md:w-1/2 h-[260px] md:h-auto relative overflow-hidden">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover absolute inset-0 scale-105 hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10" />
                </div>

                {/* Info half */}
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between space-y-8 relative z-20">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-950 px-3 py-1 border border-cyan-500/20">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                        {activeService.category} discipline
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-sans font-extrabold text-white tracking-tight uppercase">
                      {activeService.title}
                    </h3>

                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                      {activeService.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Key Outcomes & Focus:
                    </h4>
                    <ul className="space-y-2.5">
                      {activeService.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-cyan-950 border border-cyan-500/20 text-cyan-400 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-slate-800">
                    <button
                      onClick={() => triggerModal(`Consultation for ${activeService.title}`)}
                      className="w-full text-center rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-white font-semibold text-xs uppercase tracking-widest py-3.5 shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 cursor-pointer"
                    >
                      Inquire About Training
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
