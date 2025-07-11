

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github, Monitor, Zap, Code, Palette } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import image1 from "../assets/images/citysports.png"
import pureinsight from "../assets/images/pureinsight1.png"
import image2 from "../assets/images/imagess.png"
import image3 from "../assets/images/image3.png"
import image4 from "../assets/images/image4.png"
import image5 from "../assets/images/image5.png"

const WorkShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "PureInsights",
      description:
        "PureInsight is a healthcare web application that helps users choose the right products by allowing them to upload or scan product images. The app analyzes the product and provides a comprehensive report. Built using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB, it also features secure authentication with Google login/signup.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
      image: pureinsight,
      liveUrl: "https://github.com/Aditya-Valand/PureFrontend/",
      githubUrl: "https://github.com/Aditya-Valand/PureFrontend/",
      category: "Fullstack Project",
      icon: <Code className="w-4 h-4" />,
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "CitySport Junagadh",
      description:
        "This is a freelance project for CitySport Junagadh, developed using Next.js. Through this project, I gained hands-on experience in SEO optimization and learned efficient usage of Next.js features to build a highly optimized, responsive, and fast-loading website.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
      image: image1,
      liveUrl: "https://citysportsjunagadh.vercel.app/",
      githubUrl: "https://citysportsjunagadh.vercel.app/",
      category: "Frontend Project",
      icon: <Palette className="w-4 h-4" />,
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 3,
      title: "Sniffect",
      description:
        "Sniffect is a machine learning-based project for detecting fake Instagram accounts, built for Big Data and Business Intelligence. I handled data collection, cleaning, and developed both frontend (React.js) and backend (Flask) to integrate the ML model for real-time detection.",
      tech: ["React.js", "Flask", "Machine Learning", "Python"],
      image: image2,
      liveUrl: "https://github.com/Aditya-Valand/Fake-Instagram_account-Detection_HTM",
      githubUrl: "https://github.com/Aditya-Valand/Fake-Instagram_account-Detection_HTM",
      category: "Web Application",
      icon: <Zap className="w-4 h-4" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      title: "ChatKaroO",
      description:
        "ChatKarooo is a real-time anonymous chat platform like Omegle, enabling users to connect and chat with strangers. Built with React.js and Tailwind CSS for the frontend, and Node.js with Express.js for the backend, it ensures a secure and responsive chatting experience.",
      tech: ["React.js", "Node.js", "Express.js", "Socket.io", "Tailwind CSS"],
      image: image3,
      liveUrl: "https://chat-karoo.vercel.app/",
      githubUrl: "https://chat-karoo.vercel.app/",
      category: "Web Application",
      icon: <Zap className="w-4 h-4" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 5,
      title: "GDG Badge Creator",
      description:
        "As a member of GDG Rajkot, I developed a personalized badge creation platform for DevFest 2024 participants. Built with React.js and Tailwind CSS, the site offers a user-friendly interface and modern UI aligned with the event’s branding and theme.",
      tech: ["React.js", "Tailwind CSS"],
      image: image4,
      liveUrl: "https://github.com/Aditya-Valand/GDG-Badge-",
      githubUrl: "https://github.com/Aditya-Valand/GDG-Badge-",
      category: "Web Application",
      icon: <Zap className="w-4 h-4" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 6,
      title: "Eventure",
      description:
        "Eventure is an event management and planning platform connecting vendors, organizers, and local communities. Built using React.js and Supabase, the platform supports event posting, planning, and user interaction. The site is deployed on Netlify.",
      tech: ["React.js", "Supabase", "Netlify", "Tailwind CSS"],
      image: image5,
      liveUrl: "https://spectacular-semolina-808a7c.netlify.app/",
      githubUrl: "https://github.com/Aditya-Valand/Eventure",
      category: "Web Application",
      icon: <Zap className="w-4 h-4" />,
      color: "from-green-500 to-emerald-600",
    },
  ];
  

  const nextProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goToProject = (index) => {
    if (isAnimating || index === currentProject) return
    setIsAnimating(true)
    setCurrentProject(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <div id="workshowcase" className="min-h-screen bg-transparent text-white py-8 sm:py-12 lg:py-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Interactive Mouse Follower */}
        <motion.div
          className="fixed w-8 h-8 bg-red-500/10 rounded-full pointer-events-none z-50 mix-blend-screen"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
          }}
          animate={{
            scale: isHovered ? 2 : 1,
            opacity: isHovered ? 0.8 : 0.3,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,70,85,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,70,85,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-left mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-clash text-white mb-4 sm:mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="text-red-500"
              animate={{
                textShadow: [
                  "0 0 0px rgba(239, 68, 68, 0)",
                  "0 0 20px rgba(239, 68, 68, 0.5)",
                  "0 0 0px rgba(239, 68, 68, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Work
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Project Counter */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(239, 68, 68, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              className="text-4xl sm:text-6xl font-clash font-bold text-white/20 mr-2"
              key={currentProject}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(currentProject + 1).padStart(2, "0")}
            </motion.span>
            <span className="text-xs sm:text-sm text-gray-400 font-heading">
              / {String(projects.length).padStart(2, "0")}
            </span>
          </motion.div>
        </motion.div>

        {/* Main Project Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-16">
          {/* Project Info - Left Side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Category Badge */}
              <motion.div
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${projects[currentProject].color} bg-opacity-10 border border-red-500/20 rounded-full px-3 sm:px-4 py-2`}
                whileHover={{ scale: 1.05, y: -2 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.div
                  className="w-2 h-2 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                {projects[currentProject].icon}
                <span className="text-red-400 text-xs sm:text-sm font-heading">
                  {projects[currentProject].category}
                </span>
              </motion.div>

              {/* Project Title */}
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-clash font-bold text-white leading-tight"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {projects[currentProject].title}
              </motion.h3>

              {/* Project Description */}
              <motion.p
                className="text-base sm:text-lg text-gray-400 font-heading leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {projects[currentProject].description}
              </motion.p>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-heading text-gray-500 uppercase tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {projects[currentProject].tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300 font-heading cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                        borderColor: "rgb(239 68 68)",
                        color: "rgb(248 113 113)",
                        y: -2,
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <motion.a
                  href={projects[currentProject].liveUrl}
                  className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-3 rounded-full transition-all duration-300 group w-full sm:w-auto"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="font-heading font-medium">Live Demo</span>
                </motion.a>

                <motion.a
                  href={projects[currentProject].githubUrl}
                  className="flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 text-white px-4 sm:px-6 py-3 rounded-full transition-all duration-300 group w-full sm:w-auto"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-heading font-medium">View Code</span>
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Image - Right Side */}
          <div className="relative order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                className="relative"
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -50, rotateY: 15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ perspective: "1000px" }}
              >
                {/* Device Frame */}
                <motion.div
                  className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-700"
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Browser Header */}
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <div className="flex space-x-2">
                      <motion.div
                        className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.div
                        className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.div
                        className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"
                        whileHover={{ scale: 1.2 }}
                      />
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-full px-3 sm:px-4 py-1 ml-4">
                      <div className="text-xs text-gray-400 font-heading truncate">
                        {projects[currentProject].title.toLowerCase().replace(/\s+/g, "-")}.com
                      </div>
                    </div>
                  </div>

                  {/* Project Screenshot */}
                  <motion.div
                    className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 aspect-video"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${projects[currentProject].color} opacity-10`}
                    />
                    {projects[currentProject].image ? (
                      <motion.img
                        src={projects[currentProject].image}
                        alt={projects[currentProject].title}
                        className="w-full h-full object-cover rounded-xl relative z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <Monitor className="w-12 sm:w-16 h-12 sm:h-16 text-gray-500 mx-auto" />
                          </motion.div>
                          <div className="text-sm text-gray-400 font-heading">{projects[currentProject].title}</div>
                        </div>
                      </div>
                    )}

                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <motion.div
                      className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-white/10">
                        <div className="text-xs text-gray-300 font-heading">Project Preview</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 sm:w-12 h-8 sm:h-12 bg-red-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Previous Button */}
          <motion.button
            onClick={prevProject}
            disabled={isAnimating}
            className="group flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-full px-4 sm:px-6 py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-1"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-hover:text-white group-hover:-translate-x-1 transition-all duration-300" />
            <span className="text-sm font-heading text-gray-400 group-hover:text-white">Previous</span>
          </motion.button>

          {/* Project Indicators */}
          <div className="flex items-center space-x-3 order-3 sm:order-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? "bg-red-500" : "bg-white/20 hover:bg-white/40"
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentProject ? 1.25 : 1,
                  backgroundColor: index === currentProject ? "rgb(239 68 68)" : "rgba(255, 255, 255, 0.2)",
                }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextProject}
            disabled={isAnimating}
            className="group flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-full px-4 sm:px-6 py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed order-2 sm:order-3"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-heading text-gray-400 group-hover:text-white">Next</span>
            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/2 left-4 sm:left-8 w-px h-16 sm:h-32 bg-gradient-to-b from-transparent via-red-500/30 to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
        />
      </div>
    </div>
  )
}

export default WorkShowcase
