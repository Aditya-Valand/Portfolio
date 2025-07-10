import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  Code,
  Zap,
  Sparkles
} from "lucide-react";

// Typewriter Component
const Typewriter = ({ words, typeSpeed = 100, deleteSpeed = 50, delaySpeed = 2000, loop = true, cursor = true, cursorStyle = "|", onComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(cursor);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentWord) {
        if (loop || currentWordIndex < words.length - 1) {
          setTimeout(() => setIsDeleting(true), delaySpeed);
        } else {
          setShowCursor(false);
          onComplete?.();
        }
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delaySpeed, loop, onComplete]);

  return (
    <span>
      {currentText}
      {showCursor && (
        <span className="animate-pulse">{cursorStyle}</span>
      )}
    </span>
  );
};

function Herosection() {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showUI, setShowUI] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000);

    const uiTimer = setTimeout(() => {
      setShowUI(true);
    }, 2000);

    const descTimer = setTimeout(() => {
      setShowDescription(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(uiTimer);
      clearTimeout(descTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">

      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
          
          {/* Left Side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            
            {/* Decorative floating icons */}
            <div className="flex items-center space-x-4 mb-8">
              <Code className="w-6 h-6 text-red-500 animate-bounce" />
              <Zap className="w-5 h-5 text-blue-500 animate-pulse" style={{ animationDelay: '300ms' }} />
              <Sparkles className="w-4 h-4 text-yellow-500 animate-spin" style={{ animationDelay: '700ms' }} />
            </div>

            {/* Main Heading - Reduced space */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-clash tracking-tight text-white">
                Hi, I'm{" "}
                <span className="text-red-500 relative inline-block">
                  {showTypewriter ? (
                    <Typewriter
                      words={['Aditya']}
                      typeSpeed={150}
                      cursor={true}
                      cursorStyle="_"
                      loop={false}
                    />
                  ) : (
                    <span className="opacity-0 ">Aditya</span>
                  )}
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 blur-sm"></span>
                </span>
              </h1>

              {/* Subtitle - Reduced space */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light font-heading text-gray-300 tracking-wide">
                {showTypewriter ? (
                  <Typewriter
                    words={[
                      'Creative Developer & Problem Solver',
                      'Tech Enthusiast & Innovator',
                      'Full Stack Developer',
                      'MERN Stack'
                    ]}
                    typeSpeed={55}
                    deleteSpeed={40}
                    delaySpeed={2000}
                    loop={true}
                  />
                ) : (
                  <span className="opacity-0">Creative Developer & Problem Solver</span>
                )}
              </h2>
            </div>

            {/* Description - No animation, static text */}
            <p className="text-lg text-gray-400 leading-relaxed font-heading max-w-lg">
              Passionate about crafting digital experiences that blend creativity with cutting-edge technology. I transform complex problems into elegant solutions, bringing ideas to life through code and design.
            </p>

            {/* Social Media Icons */}
            <div className={`flex items-center space-x-6 transition-all duration-1000 ${showUI ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {[
                { icon: Github, href: "#", label: "GitHub", color: "hover:text-purple-400 hover:shadow-purple-400/50" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400 hover:shadow-blue-400/50" },
                { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400 hover:shadow-cyan-400/50" },
                { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400 hover:shadow-pink-400/50" },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <a
                  key={label}
                  href={href}
                  className={`relative group p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 transform hover:-translate-y-2 ${color}`}
                  style={{ animationDelay: `${index * 100 + 2000}ms` }}
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-current transition-all duration-300 group-hover:rotate-12" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-current/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                </a>
              ))}
            </div>

            {/* Hire Me Button */}
            <div className={`pt-4 transition-all duration-1000 delay-500 ${showUI ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 border border-red-500/50 hover:border-red-400 group relative overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Hire Me</span>  
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
              
              {/* Professional Photo Container */}
              {/* <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl"> */}
                
                {/* Photo placeholder with professional styling */}
                {/* <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative"> */}
                  
                  {/* Professional avatar placeholder */}
                  {/* <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500/30 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div> */}
                    
                    {/* Professional badge */}
                    {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-2 border-gray-800">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                   */}
                  {/* Professional overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
                  
                  {/* Name placeholder */}
                  {/* <div className="absolute bottom-6 left-6 right-6 text-center">
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                      <p className="text-white font-medium">Aditya</p>
                      <p className="text-gray-300 text-sm">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
                  <div className="relative w-full h-full">
          
          {/* Main large photo - bottom center */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg border-4 border-white overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-700/20">
              <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          
          
          
          {/* Top right photo */}
          <div className="absolute top-8 right-4 w-36 h-44 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg border-3 border-white overflow-hidden transform -rotate-2">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/20 to-green-700/20">
              <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Bottom left photo */}
          <div className="absolute bottom-12 left-0 w-28 h-36 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg border-3 border-white overflow-hidden transform rotate-6">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-700/20">
              <svg className="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          </div>
          </div>
          
          
          
          
        </div>
        </div>
      

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-8 w-px h-32 bg-gradient-to-b from-transparent via-red-500/50 to-transparent"></div>
      <div className="absolute bottom-8 right-8 w-32 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Herosection;