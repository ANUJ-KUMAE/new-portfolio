import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import SkillsData from "../data/skillsData";

export function Skills() {
    const refs = useRef(null);
    const isInView = useInView(refs, {once: true, amount: 0.2});

    return (
        <section id="skills" className="relative py-20 md:py-32" ref={refs}>
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-l from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8">
                  <motion.div
                         initial={{opacity: 0, y: 20}}
                         animate={isInView ? {opacity: 1, y: 0} : {}}
                         transition={{duration: 0.6}}
                         className="text-center mb-16"
                  >
                     <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-4">
                        My Expertise
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        Skills & Technology
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
                       A comprehensive overview of my technical skills and proficiencies
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                     {SkillsData.map((skill, skillIndex) => (
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, delay: skillIndex * 0.1}}
                            whileHover={{y: -5}}
                            className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-500/0 group-hover:from-purple-600/10 group-hover:to-blue-500/10 transition-all duration-300 rounded-3xl"></div>
              
              
                            <div className="relative flex items-center gap-4 mb-6">
                              <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-2xl shadow-lg`}>
                                <skill.icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold text-white">
                                {skill.title}
                              </h3>
                            </div>

                            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 auto-rows-fr">
                                {skill.skills.map((s, index) => (
                                    <div
                                      key={index}
                                      className="group flex items-center gap-4 p-4 rounded-2xl h-full 
                                      bg-gradient-to-br from-slate-800/60 to-slate-900/60 
                                      border border-white/10 
                                      hover:border-purple-500/30 
                                      hover:shadow-lg hover:shadow-purple-500/10 
                                      transition-all duration-300 hover:-translate-y-1"
                                    >
                                      <div className="p-3 bg-slate-900 border border-white/10 rounded-xl group-hover:scale-110 transition">
                                        <s.icon className="w-5 h-5" style={{color: s.color}} />
                                      </div>
                                      <p className="text-gray-300 text-sm font-medium group-hover:text-white transition">
                                        {s.name}
                                      </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                     ))}
                  </div>
            </div>
        </section>
    )
}