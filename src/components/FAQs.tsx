import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FAQs: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("q1");
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Membership', 'Coaching', 'Facilities', 'Recovery'];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faqs" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background visual decorations */}
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            Support Center
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Need clarification on active club procedures, pricing tiers, or recovery diagnostics? Explore our structured FAQs below.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search queries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-11 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 items-center">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setExpandedId(null); }}
                    className={`py-1.5 px-3.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                      isActive 
                        ? "bg-cyan-500 border-cyan-400 text-slate-950" 
                        : "bg-slate-900 border-slate-850 text-slate-400 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "border-cyan-500/40 bg-slate-900/40 shadow-xl shadow-cyan-950/10"
                    : "border-slate-800/80 bg-slate-900/10 hover:border-slate-700"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center border shrink-0 transition-all ${
                      isExpanded ? "bg-cyan-950 border-cyan-500/20 text-cyan-400" : "bg-slate-950 border-slate-850 text-slate-500"
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm md:text-base font-bold text-slate-200 uppercase tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transform transition-transform duration-300 ${
                    isExpanded ? "rotate-180 text-cyan-400" : ""
                  }`} />
                </button>

                {/* Accordion Body with Motion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 ml-11">
                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                          {faq.answer}
                        </p>
                        <div className="mt-4 flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Category:</span>
                          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/10">{faq.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="py-16 text-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/10">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                No matching queries found in our records.
              </span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
