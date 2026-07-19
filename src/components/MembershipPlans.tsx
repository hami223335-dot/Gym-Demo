import React from 'react';
import { motion } from 'motion/react';
import { MEMBERSHIP_PLANS } from '../data';
import { Check, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import { useDemo } from '../context/DemoContext';

export const MembershipPlans: React.FC = () => {
  const { triggerModal } = useDemo();

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            The Investment
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            Membership <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
              Subscription Plans
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Experience absolute training freedom. Select an elite subscription package tailored for your physical milestones, schedule flexibility, and luxury diagnostic needs.
          </p>
        </div>

        {/* 3-Column Plan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={plan.id}
              className={`group relative rounded-2xl border bg-gradient-to-b p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 ${
                plan.popular 
                  ? "border-cyan-500 bg-slate-950/90 shadow-cyan-950/30 scale-102 lg:scale-105 z-10" 
                  : "border-slate-800/80 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-950/80"
              }`}
            >
              {/* Highlight ribbon for popular option */}
              {plan.popular && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-cyan-950 border border-cyan-500/30 px-3 py-1">
                  <Flame className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mt-4">
                    <span className="text-3xl font-mono font-bold text-slate-400">$</span>
                    <span className="text-5xl md:text-6xl font-mono font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 font-mono text-xs uppercase tracking-widest ml-2">
                      / {plan.billing}
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-slate-800/60" />

                {/* Features list */}
                <ul className="space-y-4">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-slate-300">
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                        plan.popular ? "bg-cyan-950 text-cyan-400 border border-cyan-500/20" : "bg-slate-900 text-slate-400 border border-slate-800"
                      }`}>
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8 border-t border-slate-800/60">
                <button
                  onClick={() => triggerModal(`Acquire ${plan.name} Membership`)}
                  className={`w-full text-center rounded-xl font-bold text-xs uppercase tracking-widest py-4 cursor-pointer transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-300/30"
                      : "bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white"
                  }`}
                >
                  Acquire Studio Pass
                </button>
              </div>

              {/* Glowing accent effects on hover */}
              {plan.popular ? (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500" />
              ) : (
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-700 group-hover:w-full transition-all duration-500" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Dynamic Warning Banner */}
        <div className="max-w-2xl mx-auto mt-16 p-4 rounded-xl border border-slate-800 bg-slate-900/30 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
            <strong>Membership Terms:</strong> Rates displayed represent active pricing. All memberships include initial physical movement scans and complimentary underground parking. Initiation fees are waived for early online enrollments.
          </p>
        </div>

      </div>
    </section>
  );
};
