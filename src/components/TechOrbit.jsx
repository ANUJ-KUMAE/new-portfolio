import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  FileCode,
  Flame,
  Globe,
  Server,
} from "lucide-react";
import { FaGithub, FaReact } from "react-icons/fa";

export function TechOrbit() {
  const technologies = [
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: FileCode, name: "JavaScript", color: "#F7DF1E" },
    { Icon: Code2, name: "TypeScript", color: "#3178C6" },
    { Icon: Server, name: "Node.js", color: "#339933" },
    { Icon: Cloud, name: "AWS", color: "#FF9900" },
    { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
    { Icon: Flame, name: "Firebase", color: "#FFCA28" },
    { Icon: Globe, name: "HTML/CSS", color: "#E34F26" },
  ];

  const radius = 140;

  return (
    <div className="relative w-full h-full flex items-center justify-center">

      <div className="absolute w-32 h-32 bg-gradient-to-r from-purple-600/30 to-blue-500/30 rounded-full blur-3xl"></div>

      <div className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-purple-500/20 rounded-full"></div>
      <div className="absolute w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 border border-blue-500/20 rounded-full"></div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-full h-full flex items-center justify-center"
      >
        {technologies.map((tech, index) => {
          const angle = (index / technologies.length) * 360;

          return (
            <div
              key={tech.name}
              className="absolute"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translate(${radius}px)
                  rotate(-${angle}deg)
                `,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-12 h-12 md:w-14 md:h-14 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center shadow-lg group cursor-pointer"
                style={{
                  boxShadow: `0 0 20px ${tech.color}30`,
                }}
              >
                <tech.Icon
                  className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                />

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.name}
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl"
        style={{
          boxShadow:
            "0 0 60px rgba(139, 92, 246, 0.6), 0 0 100px rgba(59, 130, 246, 0.4)",
        }}
      >
        <Database className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </motion.div>
    </div>
  );
}