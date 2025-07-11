"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code,
  Zap,
  Sparkles,
  ArrowRight,
  Download,
} from "lucide-react";
import img1 from "../assets/images/1p.jpg";

import img2 from "../assets/images/2p.jpg";

import img3 from "../assets/images/3p.jpg";

// Typewriter Component
const Typewriter = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 2000,
  loop = true,
  cursor = true,
  cursorStyle = "|",
  onComplete,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(cursor);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
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
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    loop,
    onComplete,
  ]);

  return (
    <span>
      {currentText}
      {showCursor && (
        <motion.span
          className="text-red-500"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          {cursorStyle}
        </motion.span>
      )}
    </span>
  );
};

// Floating Particle Component
const FloatingParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-red-500/30 rounded-full"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -100, 0],
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Number.POSITIVE_INFINITY,
      delay: delay,
    }}
  />
);

// Magnetic Button Component
const MagneticButton = ({ children, className, ...props }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

function HeroSection() {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showUI, setShowUI] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000);

    const uiTimer = setTimeout(() => {
      setShowUI(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(uiTimer);
    };
  }, []);

  return (
    <div id="herosection" className="relative min-h-screen  bg-transparent overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}

        {/* Interactive Mouse Follower */}
        <motion.div
          className="fixed w-6 h-6 bg-red-500/20 rounded-full pointer-events-none z-50 mix-blend-screen"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,70,85,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,70,85,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative floating icons */}
            <motion.div
              className="flex items-center space-x-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Code className="w-6 h-6 text-red-500" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.3,
                }}
              >
                <Zap className="w-5 h-5 text-blue-500" />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.7,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-4 h-4 text-yellow-500" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-clash tracking-tight text-white">
                Hi, I'm{" "}
                <span className="text-red-500 relative inline-block">
                  {showTypewriter ? (
                    <Typewriter
                      words={["Aditya"]}
                      typeSpeed={150}
                      cursor={true}
                      cursorStyle="_"
                      loop={false}
                    />
                  ) : (
                    <span className="opacity-0">Aditya</span>
                  )}
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 blur-sm"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: showTypewriter ? 1 : 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  />
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light font-heading text-gray-300 tracking-wide">
                {showTypewriter ? (
                  <Typewriter
                    words={[
                      "Creative Developer & Problem Solver",
                      "Tech Enthusiast & Innovator",
                      "Full Stack Developer",
                      "MERN Stack Specialist",
                    ]}
                    typeSpeed={55}
                    deleteSpeed={40}
                    delaySpeed={2000}
                    loop={true}
                  />
                ) : (
                  <span className="opacity-0">
                    Creative Developer & Problem Solver
                  </span>
                )}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 leading-relaxed font-heading max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about crafting digital experiences that blend
              creativity with cutting-edge technology. I transform complex
              problems into elegant solutions, bringing ideas to life through
              code and design.
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showUI ? 1 : 0, y: showUI ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Aditya-Valand/",
                  label: "GitHub",
                  color: "hover:text-purple-400 hover:shadow-purple-400/50",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/aditya-valand/",
                  label: "LinkedIn",
                  color: "hover:text-blue-400 hover:shadow-blue-400/50",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/aditya_val28871",
                  label: "Twitter",
                  color: "hover:text-cyan-400 hover:shadow-cyan-400/50",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/aditya_a4555/",
                  label: "Instagram",
                  color: "hover:text-pink-400 hover:shadow-pink-400/50",
                },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`relative group p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 ${color}`}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    rotate: [0, -5, 5, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-current transition-all duration-300" />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div
                    className="absolute -inset-1 rounded-xl bg-gradient-to-br from-current/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showUI ? 1 : 0, y: showUI ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
           
            

              <MagneticButton className="font-heading bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 border border-red-500/50 hover:border-red-400 group relative overflow-hidden">
                <a
                  href="/Aditya Valand CV.pdf"
                  download
                  className="relative z-10 flex items-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Resume</span>
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Side - Photos */}
          <motion.div
            className="flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
              {/* Main large photo - bottom center */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                }}
              >
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img1}
                    alt="Main profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                </motion.div>

                {/* Floating elements around main photo */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Top right photo */}
              <motion.div
                className="absolute top-4 right-0 md:top-8 md:right-4 w-32 h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-2xl overflow-hidden transform -rotate-2 border-4 border-white/10"
                initial={{ opacity: 0, x: 50, rotate: 15 }}
                animate={{ opacity: 1, x: 0, rotate: -2 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                }}
              >
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img2}
                    alt="Secondary profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent" />
                </motion.div>

                {/* Floating sparkle */}
                <motion.div
                  className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Bottom left photo */}
              <motion.div
                className="absolute bottom-8 left-0 md:bottom-12 md:left-0 w-28 h-36 md:w-32 md:h-40 lg:w-36 lg:h-44 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-2xl overflow-hidden transform rotate-6 border-4 border-white/10"
                initial={{ opacity: 0, x: -50, rotate: -15 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                }}
              >
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img3}
                    alt="Tertiary profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
                </motion.div>

                {/* Floating dot */}
                <motion.div
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>

              {/* Additional floating elements */}
              <motion.div
                className="absolute top-1/2 left-1/4 w-1 h-1 bg-red-400 rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 2,
                }}
              />

              <motion.div
                className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div
        className="absolute top-1/2 left-4 md:left-8 w-px h-32 bg-gradient-to-b from-transparent via-red-500/50 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-8 right-4 md:right-8 w-32 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1.5,
        }}
      />

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-red-500/30"
        animate={{ rotate: [0, 90, 0] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-blue-500/30"
        animate={{ rotate: [0, -90, 0] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}

export default HeroSection;
