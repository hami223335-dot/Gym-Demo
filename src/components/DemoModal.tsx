import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDemo } from '../context/DemoContext';
import { ShieldCheck, X } from 'lucide-react';

export const DemoModal: React.FC = () => {
  const { isOpen, closeModal, actionContext } = useDemo();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="demo-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="demo-modal-content"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-900/90 p-8 text-white shadow-2xl shadow-cyan-950/40 backdrop-blur-xl"
          >
            {/* Glowing Accent Border Top */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-500" />

            {/* Close Button */}
            <button
              id="close-demo-modal-btn"
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon Banner */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                <ShieldCheck className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Security Verification</span>
                <h3 className="text-xl font-sans font-bold tracking-tight text-white uppercase">Demo Website Notice</h3>
              </div>
            </div>

            {/* Message Body */}
            <div className="space-y-4 font-sans text-sm text-slate-300 leading-relaxed mb-8">
              <p className="font-semibold text-white">
                You just triggered a checkout, contact, or external action for <span className="text-cyan-400 font-mono">"{actionContext}"</span>.
              </p>
              <p>
                This is a fully-customized, high-end demonstration website. All contact details, booking systems, social media links, location details, phone numbers, and interactive forms are highly polished visual placeholders.
              </p>
              <p className="border-l-2 border-cyan-500 pl-4 bg-cyan-950/20 py-2 text-slate-400 rounded-r">
                These features and credentials will be fully wired and integrated with your active business integrations and secure payment processors upon deployment.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                id="demo-modal-continue-btn"
                onClick={closeModal}
                className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-950/50 transition-all duration-300 cursor-pointer"
              >
                Continue Exploring
              </button>
              <button
                id="demo-modal-close-btn"
                onClick={closeModal}
                className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
