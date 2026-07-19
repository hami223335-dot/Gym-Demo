import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDemo } from '../context/DemoContext';
import { CONTACT_INFO } from '../data';
import { Mail, Phone, MapPin, Calendar, Clock, User, CheckCircle2, Sparkles, Send } from 'lucide-react';

export const BookingAndContact: React.FC = () => {
  const { triggerModal } = useDemo();
  
  // Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    membership: 'Elite Performance',
    trainer: 'Aria Thorne',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Booking Submit
    setIsSubmitted(true);
    setTimeout(() => {
      // Show confirmation popup alert of demo website state
      triggerModal("Simulated Studio Booking Submission");
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      membership: 'Elite Performance',
      trainer: 'Aria Thorne',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
            Get Started
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
            Book Session & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Connect With Us
            </span>
          </h2>
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Begin your athletic performance journey. Fill out our private demo booking scheduler or reach out to our guest service concierge directly.
          </p>
        </div>

        {/* Form and Contact Two-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: Booking Form (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 p-8 md:p-10 rounded-2xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                      Private Member Booker
                    </h3>
                    <p className="text-xs text-slate-400">
                      Schedule your initial complimentary biometric diagnostic or coaching assessment.
                    </p>
                  </div>

                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="+00 000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                  </div>

                  {/* Email & Date/Time Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1.5">
                        <label htmlFor="date" className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                          Select Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="time" className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                          Select Time *
                        </label>
                        <input
                          type="time"
                          id="time"
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3 py-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Membership & Trainer selections */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="membership" className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                        Membership Plan
                      </label>
                      <select
                        id="membership"
                        value={formData.membership}
                        onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50"
                      >
                        <option>Club Access</option>
                        <option>Elite Performance</option>
                        <option>Ultimate Athlete</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="trainer" className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                        Coaching Mentor
                      </label>
                      <select
                        id="trainer"
                        value={formData.trainer}
                        onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50"
                      >
                        <option>Marcus Vance</option>
                        <option>Aria Thorne</option>
                        <option>Darius Sterling</option>
                      </select>
                    </div>
                  </div>

                  {/* Custom Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono text-slate-300 uppercase tracking-wider font-bold">
                      Add notes or physical considerations (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Specify physical goals or historic joint considerations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    id="submit-booking-btn"
                    className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs uppercase tracking-widest py-4 shadow-lg shadow-cyan-400/10 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Booking Application</span>
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="h-16 w-16 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                      Demo Booking Successfully Submitted
                    </h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your assessment request. Your details have been parsed by our front-end model successfully.
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={handleReset}
                      className="rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
                    >
                      Book Another Session
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Contact Details (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info Card */}
            <div className="p-8 bg-slate-900/20 border border-slate-800/80 rounded-2xl space-y-6 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest block border-b border-slate-800/60 pb-3">
                Guest Services Concierge
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <button
                  onClick={() => triggerModal("Dial Phone number")}
                  className="flex items-center gap-4 text-left w-full hover:text-cyan-400 group transition-colors cursor-pointer"
                >
                  <div className="h-10 w-10 rounded-lg bg-slate-950 border border-slate-850 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold block">Direct Mobile Line</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{CONTACT_INFO.phone}</span>
                  </div>
                </button>

                {/* Email */}
                <button
                  onClick={() => triggerModal("Send direct email")}
                  className="flex items-center gap-4 text-left w-full hover:text-cyan-400 group transition-colors cursor-pointer"
                >
                  <div className="h-10 w-10 rounded-lg bg-slate-950 border border-slate-850 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold block">Direct Support Email</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{CONTACT_INFO.email}</span>
                  </div>
                </button>

                {/* Address */}
                <button
                  onClick={() => triggerModal("Locate Gym via Google Maps")}
                  className="flex items-center gap-4 text-left w-full hover:text-cyan-400 group transition-colors cursor-pointer"
                >
                  <div className="h-10 w-10 rounded-lg bg-slate-950 border border-slate-850 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold block">Studio Location</span>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors leading-relaxed block">{CONTACT_INFO.address}</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Opening Hours list */}
            <div className="p-8 bg-slate-900/20 border border-slate-800/80 rounded-2xl space-y-4 backdrop-blur-md">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest block border-b border-slate-800/60 pb-3">
                Club Opening Hours
              </h3>
              <div className="space-y-3">
                {CONTACT_INFO.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">{item.days}</span>
                    <span className="font-mono text-slate-400 font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
