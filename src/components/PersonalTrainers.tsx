import React from 'react';
import { motion } from 'motion/react';
import { TRAINERS } from '../data';
import { Award, Dumbbell, ShieldCheck } from 'lucide-react';
import { useDemo } from '../context/DemoContext';
import { AnimatedCounter } from './AnimatedCounter';

export const PersonalTrainers: React.FC = () => {
  const { triggerModal } = useDemo();

  return (
    <section id="coaches" className="py-24 bg-slate-900/40 border-t border-b border-slate-800/40 relative overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            The Mentors
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            Master Coaching <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Staff
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Our coaching staff has collectively trained professional athletic associations, Olympic teams, and executives. They hold advanced degrees in sports science and specialized biometric fitness.
          </p>
        </div>

        {/* Coach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={trainer.id}
              className="group relative rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Profile Image Column */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] group-hover:brightness-[0.65]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Float tag for experience */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md px-3 py-1.5 border border-slate-800 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span><AnimatedCounter target={trainer.experience.split(" ")[0]} /> Experience</span>
                </div>
              </div>

              {/* Information / Details */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6 relative z-10">
                <div className="space-y-4">
                  {/* Name and Role */}
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">
                      {trainer.role}
                    </p>
                  </div>

                  {/* Certifications and credentials */}
                  <div className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 border border-slate-850 p-3 rounded-xl">
                    <Award className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="font-medium text-slate-400">
                      <strong className="text-slate-200">Credentials:</strong> {trainer.certification}
                    </span>
                  </div>

                  {/* Bio copy */}
                  <p className="text-xs text-slate-400 leading-relaxed font-sans font-medium line-clamp-3">
                    {trainer.bio}
                  </p>

                  {/* Specialties tag cloud */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold block">
                      Core Specialties
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono font-bold uppercase tracking-wide px-2.5 py-1 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-500/10"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Book Session Trigger button */}
                <div className="pt-4 border-t border-slate-900">
                  <button
                    onClick={() => triggerModal(`1-on-1 Session with Coach ${trainer.name}`)}
                    className="w-full text-center rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-850 hover:border-cyan-500/30 text-white font-semibold text-xs uppercase tracking-widest py-3.5 shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group-hover:bg-cyan-950/20 group-hover:border-cyan-500/10"
                  >
                    <Dumbbell className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Inquire Private Session</span>
                  </button>
                </div>
              </div>

              {/* Accent hover border line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
