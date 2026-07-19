import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Users, Compass, Eye } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      title: "Strictly Limited Capacity",
      description: "We cap active membership levels to guarantee zero wait times on elite rigs, private spacing, and absolute focus during peak hours."
    },
    {
      icon: <Compass className="w-5 h-5 text-blue-400" />,
      title: "Bespoke Biometric Tracking",
      description: "Includes regular dual-frequency body composition mapping, joint range diagnostic profiling, and metabolic feedback reports."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-indigo-400" />,
      title: "Clean Room Protocols",
      description: "Our training floors and locker rooms feature continuous hospital-grade UV-C air scrubbers and custom natural sanitizing loops."
    },
    {
      icon: <Eye className="w-5 h-5 text-amber-400" />,
      title: "Elite Privacy Controls",
      description: "Enjoy private dressing tables, individual walk-in luxury rainfall showers, and quiet cellular focus pods."
    }
  ];

  const progressMetrics = [
    { label: "Floor Occupancy Ratio (Capped)", value: 45, displayValue: "45% Max density" },
    { label: "Coach to Active Member Ratio", value: 85, displayValue: "1 : 12 Elite ratio" },
    { label: "Average Recovery Completion Rating", value: 94, displayValue: "94% Program adherence" },
    { label: "Advanced Sanitation Score", value: 100, displayValue: "100% UV-C sterile" }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-b border-slate-800/40">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            The Elite Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            Designed For The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Discerning Athlete
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            We do not compete with commercial gym facilities. PowerCore is a boutique workspace engineered for high-net-worth professionals, executives, and serious physical developers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Grid - Unique Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div 
                key={index} 
                className="group relative rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl hover:border-cyan-500/20 hover:shadow-cyan-950/10 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 mb-4 group-hover:bg-cyan-950/30 group-hover:border-cyan-500/20 transition-all duration-300">
                  {point.icon}
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Panel - Progress bars & Stats */}
          <div className="space-y-8 bg-slate-950/60 border border-slate-800 p-8 md:p-10 rounded-2xl backdrop-blur-md">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                Active Analytics
              </span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Performance Standards
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                We monitor our key structural standards in real-time to preserve our members' focus, hygiene, and coaching availability.
              </p>
            </div>

            <div className="space-y-6">
              {progressMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-end text-xs">
                    <span className="font-semibold text-slate-200">{metric.label}</span>
                    <span className="font-mono text-cyan-400 font-bold">{metric.displayValue}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-850 flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono uppercase text-slate-300 tracking-wider font-semibold">
                Live Status: Peak Floor Comfort Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
