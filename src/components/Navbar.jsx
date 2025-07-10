import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  ArrowDown,
  Code,
  Zap,
  Sparkles
} from "lucide-react";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ["About", "Projects", "Skills", "Contact"];

  const handleNavClick = (item) => {
    // Smooth scroll to section
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-red-500 text-2xl lg:text-3xl font-bold font-clash tracking-tight hover:text-red-400 transition-colors duration-300"
            >
              Aditya
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center font-heading justify-center flex-1">
            <div className="flex space-x-12">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide text-lg group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                  <span className="absolute inset-0 rounded-lg bg-red-500/0 group-hover:bg-red-500/5 transition-all duration-300 -z-10" />
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex font-heading items-center">
            <button
              onClick={() => handleNavClick('Contact')}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`} style={{ top: '80px' }}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-2xl font-medium text-gray-300 hover:text-white transition-all duration-500 hover:scale-110 transform ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                }}
              >
                {item}
                <span className="block w-0 h-0.5 bg-red-500 transition-all duration-300 hover:w-full mx-auto mt-2" />
              </button>
            ))}
            
            <button
              onClick={() => handleNavClick('Contact')}
              className={`bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 ${
                isMobileMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? '600ms' : '0ms'
              }}
            >
              Let's Talk
            </button>

            {/* Social Icons for Mobile */}
            {/* <div className={`flex space-x-6 mt-8 ${
              isMobileMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ 
              transitionDelay: isMobileMenuOpen ? '800ms' : '0ms'
            }}>
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
                <button
                  key={social}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-red-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                >
                  <span className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-300">
                    {social[0]}
                  </span>
                </button>
              ))}
            </div> */}
<div className={`flex space-x-6 mt-8 ${
              isMobileMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{ 
              transitionDelay: isMobileMenuOpen ? '800ms' : '0ms'
            }}>
              {[
                { icon: Github, href: "#", label: "GitHub", color: "hover:text-purple-400 hover:shadow-purple-400/50" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400 hover:shadow-blue-400/50" },
                { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400 hover:shadow-cyan-400/50" },
                { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400 hover:shadow-pink-400/50" },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <a
                  key={label}
                  href={href}
                  className={`relative group p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 transform hover:-translate-y-2 ${color}`}
                  style={{ animationDelay: `${index * 100 + 1500}ms` }}
                >
                  <Icon className="w-7 h-7 text-gray-400 group-hover:text-current transition-all duration-300 group-hover:rotate-12" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-current/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;