import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLASS_SCHEDULE } from '../data';
import { ClassScheduleItem } from '../types';
import { Clock, User, MapPin, Sparkles } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

export const ClassSchedule: React.FC = () => {
  const { triggerModal } = useDemo();
  const days: ClassScheduleItem['day'][] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];
  
  const [activeDay, setActiveDay] = useState<ClassScheduleItem['day']>('Monday');

  const filteredSchedule = CLASS_SCHEDULE.filter(item => item.day === activeDay);

  const getIntensityColor = (intensity: ClassScheduleItem['intensity']) => {
    switch (intensity) {
      case 'High':
        return 'bg-rose-950/60 border-rose-500/30 text-rose-400';
      case 'Medium':
        return 'bg-amber-950/60 border-amber-500/30 text-amber-400';
      case 'Low':
        return 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400';
      default:
        return 'bg-slate-900 border-slate-800 text-slate-300';
    }
  };

  return (
    <section id="schedule" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              Dynamic Calendar
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
              Elite Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
                Weekly Schedule
              </span>
            </h2>
          </div>
          <p className="text-slate-400 font-sans text-sm md:text-base max-w-sm leading-relaxed">
            Choose from a wide variety of daily metabolic, strength, or recovery sessions guided by our master training staff. Capped at 15 members per class.
          </p>
        </div>

        {/* Days of the Week Selector Bar */}
        <div className="flex items-center overflow-x-auto pb-4 gap-2 scrollbar-none border-b border-slate-800/60">
          {days.map((day) => {
            const isActive = activeDay === day;
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider whitespace-nowrap border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-950/30"
                    : "bg-slate-900/40 border-slate-850 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Schedule Display */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSchedule.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl border border-slate-800 bg-slate-900/30 p-6 flex flex-col justify-between hover:border-cyan-500/30 hover:bg-slate-900/50 shadow-xl transition-all duration-300"
                >
                  {/* Decorative glowing gradient inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/2 group-hover:to-blue-500/2 rounded-2xl pointer-events-none transition-all duration-500" />

                  <div className="space-y-4">
                    {/* Time & Intensity Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>{item.time}</span>
                      </div>
                      <span className={`text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${getIntensityColor(item.intensity)}`}>
                        {item.intensity} Intensity
                      </span>
                    </div>

                    {/* Class Name */}
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                      {item.className}
                    </h3>

                    {/* Details row (Trainer & Room) */}
                    <div className="space-y-2 border-t border-slate-800/60 pt-4">
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <User className="w-4 h-4 text-slate-500 shrink-0" />
                        <span className="font-medium">{item.trainer}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                        <span className="font-medium text-slate-400">{item.room}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions (Duration & Book Button) */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/60">
                    <span className="text-xs font-mono text-slate-400">
                      Duration: {item.duration}
                    </span>
                    <button
                      onClick={() => triggerModal(`Reserve spot in ${item.className}`)}
                      className="inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all cursor-pointer"
                    >
                      <span>Reserve Spot</span>
                      <Sparkles className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}

              {filteredSchedule.length === 0 && (
                <div className="col-span-full py-16 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/10">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    No classes scheduled for this day.
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
