import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import ProjectData from "../data/projectData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export function Projects() {
    const refs = useRef(null);
    const isInView = useInView(refs, {once: true, amount: 0.2});

    return (
        <section id="projects" className="relative py-20 md:py-32" ref={refs}>
             <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-l from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
                  <motion.div
                         initial={{opacity: 0, y: 20}}
                         animate={isInView ? {opacity: 1, y: 0} : {}}
                         transition={{duration: 0.6}}
                         className="text-center mb-16"
                  >
                     <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-4">
                        Portfolio
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
                       Showcasing my best work in full-stack development
                    </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {ProjectData.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                        <div className="relative h-48 md:h-56 overflow-hidden">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    </div>

                    <div className="relative p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-2">
                        {project.description}
                      </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-slate-800/50 border border-white/10 rounded-full text-xs text-purple-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mb-4 space-y-1">
                          {project.features.slice(0, 3).map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-gray-400 text-xs md:text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* <div className="flex items-center gap-3">
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.gradient} rounded-xl text-white text-sm font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow`}
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2.5 bg-slate-800 border border-white/10 rounded-xl text-white hover:bg-slate-700 transition-colors"
                          >
                            <FaGithub className="w-4 h-4" />
                          </motion.a>
                        </div> */}
                    </div>

                    <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </motion.div>
            ))}
            </div>
            </div>
        </section>
    )
}