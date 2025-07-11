"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const SkillsShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const controls = useAnimation()

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Trigger animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const skillsRow1 = [
    {
      name: "ReactJS",
      icon: <img src="/images/react-2.svg" alt="ReactJS" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "HTML5",
      icon: <img src="/images/html5.svg" alt="HTML5" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
    {
      name: "CSS3",
      icon: <img src="/images/css3.svg" alt="CSS3" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
    },
    {
      name: "JavaScript",
      icon: <img src="/images/javascript.svg" alt="JavaScript" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
    },
    {
      name: "Node.js",
      icon: <img src="/images/nodejs.svg" alt="Node.js" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Express.js",
      icon: <img src="/images/express-js.svg" alt="Express.js" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-gray-500/20 to-slate-500/20",
    },
    {
      name: "MongoDB",
      icon: <img src="/images/mongodb.svg" alt="MongoDB" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
    },
    {
      name: "MySQL",
      icon: <img src="/images/mysql.svg" alt="MySQL" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-blue-500/20 to-sky-500/20",
    },
    {
      name: "Tailwind CSS",
      icon: <img src="/images/tailwindcss.svg" alt="Tailwind CSS" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20",
    },
    {
      name: "Bootstrap",
      icon: <img src="/images/bootstrap.svg" alt="Bootstrap" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
    },
    {
      name: "Git",
      icon: <img src="/images/git.svg" alt="Git" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
  ]

  const skillsRow2 = [
    {
      name: "Figma",
      icon: <img src="/images/figma.svg" alt="Figma" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
    },
    {
      name: "Postman",
      icon: <img src="/images/postman.svg" alt="Postman" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-orange-500/20 to-amber-500/20",
    },
    {
      name: "Canva",
      icon: <img src="/images/canva.svg" alt="Canva" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    },
    {
      name: "Vanta.js",
      icon: <div className="text-white text-2xl font-bold">⚡</div>,
      bg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
    },
    {
      name: "Shadcn",
      icon: <img src="/images/shadcn.svg" alt="Shadcn" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-gray-500/20 to-zinc-500/20",
    },
    {
      name: "Socket.io",
      icon: <img src="/images/Socket.io.svg" alt="Socket.io" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-green-500/20 to-lime-500/20",
    },
    {
      name: "GitHub",
      icon: <img src="/images/github.svg" alt="GitHub" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-gray-500/20 to-slate-500/20",
    },
    {
      name: "Supabase",
      icon: <img src="/images/supabase.svg" alt="Supabase" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Vercel",
      icon: <img src="/images/vercel.svg" alt="Vercel" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-gray-500/20 to-black/20",
    },
    {
      name: "RAG",
      icon: <div className="text-white text-xl font-bold">🧠</div>,
      bg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Python",
      icon: <img src="/images/python.svg" alt="Python" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-blue-500/20 to-yellow-500/20",
    },
    {
      name: "SkillKitLearn",
      icon: <div className="text-white text-sm font-bold">SKL</div>,
      bg: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
    },
    {
      name: "Flask",
      icon: <img src="/images/flask.svg" alt="Flask" className="w-16 h-16 md:w-20 md:h-20" />,
      bg: "bg-gradient-to-br from-gray-500/20 to-slate-500/20",
    },
  ]

  const InfiniteRow = ({ skills, reverse = false, speed = 25, delay = 0 }) => (
    <div className="relative w-full font-heading overflow-hidden py-8">
      <style jsx>{`
        .marquee-row {
          animation: ${reverse ? "marquee-right" : "marquee-left"} ${speed}s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
          .marquee-row:hover {
  animation-play-state: paused;
}

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Scrolling row */}
      <div className="flex gap-6 md:gap-8 items-center marquee-row min-w-max">
        {[...skills, ...skills].map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className={`relative flex flex-col items-center justify-center rounded-2xl border border-gray-800/50 p-4 md:p-6 group w-28 h-36 md:w-32 md:h-40 lg:w-36 lg:h-44 flex-shrink-0 backdrop-blur-sm ${skill.bg} transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:border-red-500/50`}
            onMouseEnter={() => {
              setIsHovered(true)
              setHoveredSkill(skill.name)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setHoveredSkill(null)
            }}
          >
            {/* Icon container */}
            <div className="relative mb-3 md:mb-4 h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110">
              {skill.icon}
            </div>

            {/* Skill name */}
            <h3 className="px-2 text-center text-xs md:text-sm leading-tight font-medium text-white transition-all duration-500 group-hover:text-red-400">
              {skill.name}
            </h3>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/20 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Blur overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black via-black/60 to-transparent" />

      {/* Edge effects */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-red-500/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-red-500/30 to-transparent" />
    </div>
  )

  return (
    <div id="skillsshowcase" className="min-h-screen flex flex-col justify-center items-center bg-black py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
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
              y: [0, -100, 0],
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

      <div className="max-w-7xl w-full relative z-10" ref={containerRef}>
        {/* Header Section */}
        <motion.div
          className="text-left mb-12 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-clash text-white mb-4 md:mb-8"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(239, 68, 68, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #ffffff, #ef4444, #ffffff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 font-heading max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeOut",
                },
              },
            }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Rows */}
        <div className="space-y-8 md:space-y-12">
          <InfiniteRow skills={skillsRow1} speed={30} />
          <InfiniteRow skills={skillsRow2} reverse speed={35} />
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 1,
                ease: "easeOut",
              },
            },
          }}
        >
          {[
            { number: "10+", label: "Technologies" },
            { number: "2+", label: "Years hands on Experience" },
            { number: "10+", label: "Projects Built" },
            { number: "∞", label: "Lines of Code" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:scale-105 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 1.2 + index * 0.1,
                  },
                },
              }}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-400 font-heading">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsShowcase
