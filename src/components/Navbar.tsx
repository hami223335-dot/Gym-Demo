import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDemo } from '../context/DemoContext';
import { Menu, X, Dumbbell, Phone } from 'lucide-react';
import { BRAND_NAME } from '../data';

export const Navbar: React.FC = () => {
  const { triggerModal } = useDemo();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background shift
      setIsScrolled(window.scrollY > 20);

      // Scroll progress computation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section detection based on element position
      const sections = ['home', 'services', 'facilities', 'schedule', 'coaches', 'results', 'bmi', 'pricing', 'contact'];
      const offset = 120; // sticky header offset + buffer
      const scrollPosition = window.scrollY + offset;

      // Special case: bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      // Find current active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set correct section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Facilities", href: "#facilities" },
    { label: "Schedule", href: "#schedule" },
    { label: "Coaches", href: "#coaches" },
    { label: "Results", href: "#results" },
    { label: "BMI", href: "#bmi" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-500 z-[9999] transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/60 py-4 shadow-lg shadow-slate-950/20" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-all duration-300">
              <Dumbbell className="w-5 h-5 font-bold" />
            </div>
            <span className="text-lg font-sans font-extrabold uppercase tracking-widest text-white">
              Power<span className="text-cyan-400">Core</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative group ${
                    isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-cyan-400 transform transition-transform duration-300 origin-center ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* CTA & Phone Trigger */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => triggerModal("Phone Call Center")}
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+00 000 0000</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-semibold text-xs uppercase tracking-widest px-5 py-3 shadow-md shadow-cyan-500/10 hover:shadow-cyan-400/20 transition-all duration-300"
            >
              Book Studio Pass
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Fullscreen Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col gap-2 p-6">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`py-3 px-4 rounded-xl transition-all text-sm font-medium flex items-center justify-between ${
                        isActive 
                          ? "text-cyan-400 bg-cyan-950/20 border-l-2 border-cyan-400 pl-3" 
                          : "text-slate-200 hover:text-cyan-400 hover:bg-slate-900"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                    </motion.a>
                  );
                })}
                
                <div className="h-[1px] bg-slate-800 my-4" />
                
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      triggerModal("Direct Mobile Dial");
                    }}
                    className="flex items-center gap-3 py-2 px-4 text-slate-300 hover:text-white"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium">+00 000 0000000</span>
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleLinkClick(e, '#contact');
                    }}
                    className="w-full text-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-widest py-4 shadow-lg shadow-cyan-400/10"
                  >
                    Book Studio Pass
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
