import { delay } from "framer-motion";
import { TechOrbit } from "./TechOrbit";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Intro() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if(element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-b from-purple-600/30 via-blue-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity:1, x: 0}}
                       transition={{duration: 0.8}}
                       className="text-center lg:text-left"
                    >
                        <motion.div
                           initial={{opacity: 0, y: 20}}
                           animate={{opacity: 1, y: 0}}
                           transition={{duration: 0.2}}
                           className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-500/20 border-purple-500/30 text-sm text-purple-300 backdrop-blur-sm rounded-full"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span></span>
                            </span>
                            Fullstack Developer
                        </motion.div>

                        <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Providing{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                the best
              </span>
              <br />
              project experience.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I'm a Full Stack Software Engineer with experience in web, mobile,
              and software development. Check out my projects and skills.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("about")}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl text-white font-semibold text-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                Learn More
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </motion.button>

                    </motion.div>

                    <motion.div
                       initial={{opacity: 0, x: 50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{duration: 0.8, delay: 0.2}}
                       className="h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"

                    >
                        <TechOrbit/>
                    </motion.div>

                </div>
            </div>

            <motion.div
               initial={{opacity: 0}}
               animate={{opacity: 1}}
               transition={{delay: 1}}
               className="absolute bottom-8 left-1/2 -translate-x-1/2"
            > 
               <motion.div
                 animate={{y: [0, 10, 0]}}
                 transition={{duration: 2, repeat: Infinity}}
                 className="text-gray-500"
               >
                <ArrowDown className="w-6 h-6"/>
                </motion.div>
            </motion.div>
        </section>
    )
}