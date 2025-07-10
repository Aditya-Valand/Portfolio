import React from "react";

// Skills data with modern styling matching the reference image
const skillsRow1 = [
  { 
    name: "React", 
    icon: (
      <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">⚛</span>
      </div>
    )
  },
  { 
    name: "Next.js", 
    icon: (
      <div className="w-16 h-16 rounded-xl flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path>
</svg>
      </div>
    )
  },
  { 
    name: "Tailwind CSS", 
    icon: (
      <div className="w-16 h-16 bg-cyan-400 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">~</span>
      </div>
    )
  },
  { 
    name: "SASS", 
    icon: (
      <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">S</span>
      </div>
    )
  },
  { 
    name: "LESS", 
    icon: (
      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">L</span>
      </div>
    )
  },
  { 
    name: "Bootstrap", 
    icon: (
      <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">B</span>
      </div>
    )
  }
];

const skillsRow2 = [
  { 
    name: "Ant Design", 
    icon: (
      <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">⭐</span>
      </div>
    )
  },
  { 
    name: "Material UI", 
    icon: (
      <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">M</span>
      </div>
    )
  },
  { 
    name: "PNPM", 
    icon: (
      <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">P</span>
      </div>
    )
  },
  { 
    name: "GSAP", 
    icon: (
      <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">G</span>
      </div>
    )
  },
  { 
    name: "Supabase", 
    icon: (
      <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">⚡</span>
      </div>
    )
  },
  { 
    name: "Shadcn", 
    icon: (
      <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">★</span>
      </div>
    )
  }
];

// Infinite scrolling row component
const InfiniteRow = ({ skills, reverse = false, speed = 25 }) => (
  <div className="overflow-hidden w-full py-2">
    <div
      className={`flex gap-8 items-center marquee-row ${reverse ? "reverse" : ""}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {/* Duplicate skills for seamless loop */}
      {[...skills, ...skills].map((skill, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center bg-[#1a1a1a] rounded-xl border border-gray-800 p-4 hover:border-gray-600 hover:bg-gray-700 hover:shadow-lg transition-all duration-300 group w-32 h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 flex-shrink-0"
        >
          <div className="relative mb-4 h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 transform group-hover:brightness-110 transition-all duration-300">
            {skill.icon}
          </div>
          <h3 className="px-2 text-center text-sm leading-tight font-medium text-white md:text-base lg:text-lg group-hover:text-white transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
);

const SkillsShowcase = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-black py-20 px-6">
    {/* Inline CSS for marquee animation */}
    <style>
      {`
        .marquee-row {
          animation: marquee-left linear infinite;
          will-change: transform;
        }
        .marquee-row.reverse {
          animation: marquee-right linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}
    </style>
    
    <div className="max-w-7xl w-full">
      <div className="text-left mb-20">
        <h1 className="text-9xl font-bold font-clash text-white mb-8">
          Skills
        </h1>
      </div>
      
      <div className="space-y-16">
        <InfiniteRow skills={skillsRow1} speed={10} />
        <InfiniteRow skills={skillsRow2} reverse speed={12} />
      </div>
    </div>
  </div>
);

export default SkillsShowcase;