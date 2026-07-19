import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FACILITIES } from '../data';
import { Facility } from '../types';
import { CheckCircle2, ChevronRight, LayoutGrid } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

export const Facilities: React.FC = () => {
  const { triggerModal } = useDemo();
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  return (
    <section id="facilities" className="py-24 bg-slate-900/40 border-t border-b border-slate-800/40 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            The Infrastructure
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            World-Class <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              Training Facilities
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Spanning over 15,000 square feet, our meticulously designed sectors cater to every phase of athletic performance, biometric recovery, and sensory premium wellness.
          </p>
        </div>

        {/* 9-Facility Elegant Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              key={facility.id}
              onClick={() => {
                setSelectedFacility(facility);
                triggerModal(`Private Tour of ${facility.name}`);
              }}
              className="group relative h-[360px] rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950 flex flex-col justify-end p-6 cursor-pointer hover:border-cyan-500/30 shadow-xl transition-all duration-500"
            >
              {/* Background Photo */}
              <div className="absolute inset-0 z-0">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.45] group-hover:brightness-[0.35]"
                  referrerPolicy="no-referrer"
                />
                {/* Visual Underlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute inset-0 bg-cyan-950/10 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Top Accent Tech Marker */}
              <div className="absolute top-4 right-4 h-6 w-6 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                <ChevronRight className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 space-y-3">
                <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400 font-bold bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded-full inline-block">
                  Elite Zone {index + 1}
                </span>

                <h3 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
                  {facility.name}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {facility.description}
                </p>

                {/* Sliding Glass Drawer Panel (Revealed on Hover) */}
                <div className="pt-2 overflow-hidden max-h-0 opacity-0 group-hover:max-h-[140px] group-hover:opacity-100 transition-all duration-500 ease-in-out border-t border-slate-800/0 group-hover:border-slate-800/60">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                    Included Amenities:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {facility.amenities.slice(0, 4).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Subtle Glowing Corner Lines on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={() => triggerModal("Comprehensive Gym Tour Booking")}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 px-6 py-4 font-semibold text-xs uppercase tracking-widest text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/5"
          >
            <LayoutGrid className="w-4 h-4 text-cyan-400" />
            <span>Book Private Tour of Facilities</span>
          </button>
        </div>

      </div>
    </section>
  );
};
