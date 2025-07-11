

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Floating animation for code snippets
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    })
  }, [controls])

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com/Aditya-Valand/", color: "hover:text-purple-400" },
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/aditya-valand/", color: "hover:text-blue-400" },
    { name: "Twitter", icon: "🐦", url: "https://x.com/aditya_val28871", color: "hover:text-cyan-400" },
    { name: "Instagram", icon: "📸", url: "https://www.instagram.com/aditya_a4555/", color: "hover:text-pink-400" },
    { name: "Discord", icon: "🎮", url: "https://discord.com/users/aditya_a4555", color: "hover:text-indigo-400" },
  ]

  const techStack = [
    "React js",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Python",
    "MongoDB",
    "MySQL",
    "Vercel",
    "Socket io",
    "Express js",
   
  ]

  const codeSnippets = [
    "const magic = () => 'Hello World! 🚀'",
    "while(alive) { eat(); sleep(); code(); repeat(); }",
    "if(coffee) { productivity++; }",
    "// Building the future, one line at a time",
    "console.log('Dreams into Reality 💫')",
  ]

  return (
    <footer className="relative font-heading bg-transparent overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
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
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,70,85,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,70,85,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Gradient Orbs */}
        {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        /> */}
      </div>

      {/* Interactive Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-red-500/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h3
                className="text-4xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Aditya<span className="text-red-500">.</span>
              </motion.h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Crafting digital experiences that push boundaries. Turning complex problems into elegant solutions
                through innovative code and creative design.
              </p>
            </div>

            {/* Live Status */}
            <motion.div
              className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.7)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Available for work</span>
              </div>
              <div className="text-slate-400 text-sm">{currentTime.toLocaleTimeString()} IST</div>
            </motion.div>

            {/* Floating Code Snippets */}
            <div className="space-y-2">
              {codeSnippets.slice(0, 3).map((snippet, index) => (
                <motion.div
                  key={index}
                  className="text-slate-500 text-sm font-mono bg-slate-900/30 px-3 py-1 rounded border-l-2 border-red-500/30"
                  animate={controls}
                  style={{ animationDelay: `${index * 0.5}s` }}
                  whileHover={{
                    borderLeftColor: "rgb(239 68 68)",
                    color: "rgb(203 213 225)",
                    x: 10,
                  }}
                >
                  {snippet}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Projects", "Skills", "Contact", "Resume"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-slate-400 hover:text-red-400 transition-colors duration-200"
                  whileHover={{ x: 10, color: "rgb(248 113 113)" }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-white">Tech Arsenal</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700/50 cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    borderColor: "rgb(239 68 68)",
                    color: "rgb(248 113 113)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          className="border-t border-slate-800 pt-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2">Let's Connect</h4>
              <p className="text-slate-400">Building the future together, one connection at a time</p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={`w-14 h-14 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm transition-all duration-300 ${social.color}`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: "rgba(30, 41, 59, 0.8)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-slate-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span>© 2024 Aditya. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <span className="flex items-center gap-1">
                Made with <span className="text-red-500 animate-pulse">❤️</span> and lots of ☕
              </span>
            </div>

            <motion.div
              className="flex items-center gap-2 text-slate-400 text-sm"
              whileHover={{ color: "rgb(248 113 113)" }}
            >
              <span>Powered by creativity & caffeine</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                ⚡
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Hidden Easter Egg */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <div className="text-xs text-slate-600 font-mono cursor-pointer" title="You found the easter egg! 🥚">
            // TODO: Take over the world 🌍
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
