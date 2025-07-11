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

  // Updated navItems to match your App.jsx structure
  const navItems = [
    { name: "About", id: "herosection" }, // Maps to Hero component
    { name: "Projects", id: "workshowcase" }, // Maps to WorkShowcase component  
    { name: "Skills", id: "skillsshowcase" }, // Maps to SkillsShowcase component
    // { name: "Contact", id: "contact" } // Maps to Contact component
  ];

  const handleNavClick = (item) => {
    // Smooth scroll to section with offset for fixed navbar
    const element = document.getElementById(item.id);
    if (element) {
      const navbarHeight = 80; // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
              className="text-red-500 text-2xl lg:text-3xl font-bold font-clash tracking-tight hover:text-red-400 transition-all duration-300 hover:scale-105 transform"
            >
              Aditya
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center font-heading justify-center flex-1">
            <div className="flex space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide text-lg group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                  <span className="absolute inset-0 rounded-lg bg-red-500/0 group-hover:bg-red-500/5 transition-all duration-300 -z-10" />
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex font-heading items-center">
            <button
              onClick={() => {
                
                const element = document.getElementById('contactme');
               
                if (element) {
                  // Try using getBoundingClientRect for more accurate positioning
                  const rect = element.getBoundingClientRect();
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  const elementTop = rect.top + scrollTop;
                  const navbarHeight = 80;
                  
                  window.scrollTo({ 
                    top: elementTop - navbarHeight, 
                    behavior: 'smooth' 
                  });
                }
                setIsMobileMenuOpen(false);
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 active:scale-95"
            >
              Let's talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mobile-menu-container">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            >
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                    className="animate-pulse"
                  />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out mobile-menu-container ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible '
        }`} style={{ top: isScrolled ? '80px' : '80px', position: 'fixed' }}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8 pt-20">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-2xl font-medium text-gray-300 hover:text-white transition-all duration-500 hover:scale-110 transform active:scale-95 ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                }}
              >
                {item.name}
                <span className="block w-0 h-0.5 bg-red-500 transition-all duration-300 hover:w-full mx-auto mt-2" />
              </button>
            ))}
            
            <button
              onClick={() => {
                
                const element = document.getElementById('contactme');
                
                if (element) {
                  // Try using getBoundingClientRect for more accurate positioning
                  const rect = element.getBoundingClientRect();
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  const elementTop = rect.top + scrollTop;
                  const navbarHeight = 80;
                  
                  window.scrollTo({ 
                    top: elementTop - navbarHeight, 
                    behavior: 'smooth' 
                  });
                }
                setIsMobileMenuOpen(false);
              }}
              className={`bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 active:scale-95 ${
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
            <div className={`flex space-x-6 mt-8 transition-all duration-500 ${
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
                  className={`relative group p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 transform hover:-translate-y-2 active:scale-95 ${color}`}
                  style={{ 
                    animationDelay: `${index * 100 + 1000}ms`,
                    transitionDelay: isMobileMenuOpen ? `${index * 100 + 1000}ms` : '0ms'
                  }}
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