import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Data from "../data/experienceData";

export function Experience() {
     const ref = useRef(null);
     const isInView = useInView(ref, {once: true, amount: 0.2});

     return (
        <section id="experience" className="relative py-20 md:py-32" ref={ref}>
             <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
             <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                 <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                 >
                    <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-4">
                        My Journey
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        Education & Experience
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
                        My Professional Journey And Academic Background
                    </p>
                 </motion.div>
                 <div className="relative">
                     <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-500"></div>
                     <div className="space-y-12">
                        {Data.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                 initial={{opacity: 0, x: index % 2 === 0 ? - 50 : 50}}
                                 animate={isInView ? {opacity: 1, x: 0} : {}}
                                 transition={{duration: 0.6, delay: index * 0.2}}
                                 className={`relative flex items-center ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                                  <motion.div
                                     whileHover={{scale: 1.1, rotate: 360}}
                                     transition={{duration: 0.5}}
                                     className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}
                                  >
                                     <exp.icon className="w-8 h-8 text-white"/>
                                  </motion.div>
                                </div>
                                <div
                                  className={`w-full md:w-[calc(50%-3rem)] ml-24 md:ml-0 ${
                                    index % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                                  }`}
                                >
                                  <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8"
                                  >
                   
                                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`}></div>

                    
                                    <div className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300 mb-3">
                                      {exp.period}
                                    </div>

                   
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                      {exp.title}
                                    </h3>

                    
                                    <div className="text-purple-400 font-semibold mb-1">
                                      {exp.company}
                                    </div>

                   
                                    <div className="text-gray-500 text-sm mb-4">
                                      {exp.location}
                                    </div>

                                    <p className="text-gray-400 text-sm md:text-base mb-4">
                                      {exp.description}
                                    </p>

                   
                                    <div className="space-y-2">
                                      {exp.achievements.map((achievement) => (
                                        <div
                                          key={achievement}
                                          className="flex items-start gap-2 text-gray-400 text-sm"
                                        >
                                          <div className={`mt-1.5 w-1.5 h-1.5 bg-gradient-to-r ${exp.color} rounded-full flex-shrink-0`}></div>
                                          {achievement}
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                </div>
                            </motion.div>
                        ))}
                     </div>
                 </div>
             </div>
        </section>
     )

    // return (

    // <section id="experience" className="relative py-20 md:py-32" ref={ref}>
    //   {/* Background glow */}
    //   <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-purple-600/10 to-transparent rounded-full blur-3xl"></div>

    //   <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Section Header */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ duration: 0.6 }}
    //       className="text-center mb-16"
    //     >
    //       <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-4">
    //         My Journey
    //       </div>
    //       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
    //         Experience & Education
    //       </h2>
    //       <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
    //         My professional journey and academic background
    //       </p>
    //     </motion.div>

    //     {/* Timeline */}
    //     <div className="relative">
    //       {/* Vertical line */}
    //       <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-500"></div>

    //       {/* Timeline items */}
    //       <div className="space-y-12">
    //         {Data.map((exp, index) => (
    //           <motion.div
    //             key={exp.title}
    //             initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    //             animate={isInView ? { opacity: 1, x: 0 } : {}}
    //             transition={{ duration: 0.6, delay: index * 0.2 }}
    //             className={`relative flex items-center ${
    //               index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    //             }`}
    //           >
    //             {/* Icon */}
    //             <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
    //               <motion.div
    //                 whileHover={{ scale: 1.1, rotate: 360 }}
    //                 transition={{ duration: 0.5 }}
    //                 className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}
    //               >
    //                 <exp.icon className="w-8 h-8 text-white" />
    //               </motion.div>
    //             </div>

    //             {/* Content Card */}
    //             <div
    //               className={`w-full md:w-[calc(50%-3rem)] ml-24 md:ml-0 ${
    //                 index % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
    //               }`}
    //             >
    //               <motion.div
    //                 whileHover={{ y: -5 }}
    //                 className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8"
    //               >
    //                 {/* Glow effect */}
    //                 <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`}></div>

    //                 {/* Period badge */}
    //                 <div className="inline-block px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300 mb-3">
    //                   {exp.period}
    //                 </div>

    //                 {/* Title */}
    //                 <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
    //                   {exp.title}
    //                 </h3>

    //                 {/* Company/University */}
    //                 <div className="text-purple-400 font-semibold mb-1">
    //                   {exp.company}
    //                 </div>

    //                 {/* Location */}
    //                 <div className="text-gray-500 text-sm mb-4">
    //                   {exp.location}
    //                 </div>

    //                 {/* Description */}
    //                 <p className="text-gray-400 text-sm md:text-base mb-4">
    //                   {exp.description}
    //                 </p>

    //                 {/* Achievements */}
    //                 <div className="space-y-2">
    //                   {exp.achievements.map((achievement) => (
    //                     <div
    //                       key={achievement}
    //                       className="flex items-start gap-2 text-gray-400 text-sm"
    //                     >
    //                       <div className={`mt-1.5 w-1.5 h-1.5 bg-gradient-to-r ${exp.color} rounded-full flex-shrink-0`}></div>
    //                       {achievement}
    //                     </div>
    //                   ))}
    //                 </div>
    //               </motion.div>
    //             </div>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // );

}