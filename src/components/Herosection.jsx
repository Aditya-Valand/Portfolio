import React, { useEffect, useState } from "react";
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

import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import RobotModel from "./RobotModel";
import { Typewriter } from 'react-simple-typewriter';

function Herosection() {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 3000); // 3 seconds delay

    const uiTimer = setTimeout(() => {
      setShowUI(true);
    }, 4500); // Show UI elements after typewriter starts

    return () => {
      clearTimeout(timer);
      clearTimeout(uiTimer);
    };
  }, []);

  return (
    <>
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-8 bg-black font-heading">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - 3D Model inside Canvas */}
          <div className="relative w-full h-[800px] lg:h-[550px]">
            <Canvas camera={{ position: [2, 2, 4.5], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} />
              <Environment preset="sunset" />
              <RobotModel />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            </Canvas>
          </div>

          {/* Right Side - Content */}
          <div className="relative space-y-8 lg:pl-8 z-999">
            {/* Decorative floating icons */}
            <div className="flex flex-row ">

              <Code className="w-6 h-6 mx-2 text-red-500 animate-bounce" />
              <Zap className="w-5 h-5 mx-2 text-blue-500 animate-pulse delay-300" />
              <Sparkles className="w-4 h-4 mx-2 text-yellow-500 animate-spin delay-700" />
            </div>
          

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="text-red-500 relative">
                  {showTypewriter ? (
                    <Typewriter
                      words={['Aditya']}
                      typeSpeed={100}
                      cursor
                      cursorStyle="_"
                    />
                  ) : (
                    ''
                  )}
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 blur-sm" />
                </span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-light text-gray-300 tracking-wide">
                {showTypewriter ? (
                  <Typewriter
                    words={[
                      'Creative Developer & Problem Solver',
                      'Tech Enthusiast & Innovator',
                      'Full Stack Engineer',
                    ]}
                    loop={false}
                    typeSpeed={60}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                ) : (
                  ''
                )}
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              {showTypewriter && (
                <Typewriter
                  words={[
                    'Passionate about crafting digital experiences that blend creativity with cutting-edge technology. I transform complex problems into elegant solutions, bringing ideas to life through code and design.',
                  ]}
                  typeSpeed={25}
                  cursor={false}
                />
              )}
            </p>

            {/* Social Media Icons */}
            <div 
              className={`flex items-center space-x-8 transition-all duration-1500 delay-1500 ${
                showUI ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
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

            {/* Hire Me Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 border border-red-500/50 hover:border-red-400 group relative overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Hire Me</span>  
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-8 w-px h-32 bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
      <div className="absolute bottom-8 right-8 w-32 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
    </>
  );
}

export default Herosection;