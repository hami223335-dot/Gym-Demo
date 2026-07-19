import React, { useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { CONTACT_INFO, BRAND_NAME } from '../data';
import { Dumbbell, Send, Facebook, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { triggerModal } = useDemo();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      triggerModal(`Newsletter subscription for ${email}`);
      setEmail('');
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "Facilities", href: "#facilities" },
    { label: "Class Schedule", href: "#schedule" },
    { label: "Our Coaches", href: "#coaches" },
    { label: "Results & Gallery", href: "#results" },
    { label: "BMI Diagnostic", href: "#bmi" },
    { label: "Membership Plans", href: "#pricing" },
    { label: "Private Booking", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderSocialIcon = (name: string) => {
    switch (name) {
      case 'Facebook':
        return <Facebook className="w-4 h-4" />;
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'LinkedIn':
        return <Linkedin className="w-4 h-4" />;
      case 'YouTube':
        return <Youtube className="w-4 h-4" />;
      default:
        return <Send className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
      {/* Background soft glowing accent */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Split Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Brand & Bio (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <a 
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/20">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-lg font-sans font-extrabold uppercase tracking-widest text-white">
                Power<span className="text-cyan-400">Core</span>
              </span>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Experience the absolute zenith of physical engineering and luxury conditioning. We cultivate high-end, limited-capacity sports training clubs designed for physical mastery.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3">
              {CONTACT_INFO.socials.map((social) => (
                <button
                  key={social.name}
                  onClick={() => triggerModal(`Social Link: ${social.name}`)}
                  className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-850 hover:border-cyan-500/30 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label={`Visit our ${social.name}`}
                >
                  {renderSocialIcon(social.name)}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Bespoke Directory
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                The Core Briefing
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Subscribe to receive elite sports science updates, physical mobility schedules, and nutritional reports.
              </p>
            </div>

            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex gap-2 items-center">
              <input
                type="email"
                required
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow rounded-xl bg-slate-900 border border-slate-850 px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 min-w-0"
              />
              <button
                type="submit"
                id="newsletter-subscribe-btn"
                className="h-[42px] w-[42px] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-cyan-950/40 shrink-0 hover:from-cyan-400 hover:to-blue-500 cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-slate-500 font-mono uppercase tracking-wider">
          <div>
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. Built as a universal luxury demo.
          </div>
          
          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            id="back-to-top-btn"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="h-7 w-7 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center group-hover:border-cyan-500/30 transition-all">
              <ArrowUp className="w-3.5 h-3.5 group-hover:translate-y-[-2px] transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
