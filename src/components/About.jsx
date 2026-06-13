import { useInView, motion} from "framer-motion";
import { Computer, ComputerIcon, Rocket, RocketIcon } from "lucide-react";
import { useRef } from "react";

export function About() {
    const ref = useRef(null);
    const isView = useInView(ref, {once: true, amount: 0.5});

    return (
        <section id="about" ref={ref} className="relative py-20 md:py-32">
            {/* <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/10 to-blue-500/10 rounded-full blur-3xl"></div> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                      <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={isView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.8}}
                            className="flex justify-center lg:justify-start"

                      >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl blur-2xl opacity-30 "></div>
                            <div className="relative w-64 h-64 overflow-hidden border-2 border-purple-500/30 shadow-2xl rounded-3xl md:w-80 md:h-80 lg:w-96 lg:h-96">
                                <img
                                  src="src/assets/Anuj_Profile_Pic.png"
                                  alt="Anuj Kumar"
                                  className="w-full h-full object-cover object-top"
                                />
                            </div>

                            <motion.div
                               animate={{y: [0, -10, 0]}}
                               transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
                               className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center w-20 h-20"
                            >
                                <ComputerIcon className="w-10 h-10"/>
                            </motion.div>
                            <motion.div
                               animate={{y: [0, -10, 0]}}
                               transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
                               className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center w-20 h-20"
                            >
                                <RocketIcon className="w-10 h-10"/>
                            </motion.div>

                        </div>
                      </motion.div>

                      <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={isView ? {opacity: 1, x: 0} : {}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="text-center lg:text-left"
                      >
                         <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={isView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.3}}
                            className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-4"
                         >
                             Get to Know Me
                         </motion.div>

                         <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={isView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.4}}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                         >
                            About Me
                         </motion.div>

                         <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={isView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5}}
                            className="text-base sm:text-lg mb-8 leading-relaxed text-gray-400"
                         >
                           MCA graduate from VIT Chennai with hands-on experience in MERN
                           stack development. I build scalable, responsive applications with
                           modern UI and robust backend systems.
                         </motion.div>

                         <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={isView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.6 }}
                          className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed"
                        >
                          Passionate about creating seamless user experiences and solving
                          complex problems with clean, efficient code. Always learning and
                          exploring new technologies to stay ahead in the ever-evolving tech
                          landscape.
                        </motion.p>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={isView ? {opacity: 1, y: 0} : {}}
                            transition={{delay: 0.7}}
                            className="grid grid-cols-3 gap-4 md:gap-6"
                        >
                             <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 text-center">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                    2+
                                </div>
                                <div className="text-gray-500 text-sm md:text-sm mt-1">Year of Expriences</div>
                             </div>
                             <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 text-center">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                    15+
                                </div>
                                <div className="text-gray-500 text-sm md:text-sm mt-1">Projects</div>
                             </div>
                             <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 text-center">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                    10+
                                </div>
                                <div className="text-gray-500 text-sm md:text-sm mt-1">Tech Stack</div>
                             </div>
                        </motion.div>

                      </motion.div>

                 </div>

            </div>
        </section>
    )
}