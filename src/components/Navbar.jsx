import { useEffect, useState } from "react";
import { Code2, GitBranch, Menu, X} from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";

export function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNav, setIsMobileNav] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToScction = (id) => {
        const element = document.getElementById(id);
        if(element) {
            element.scrollIntoView({behavior: "smooth"});
            setIsMobileNav(false);
        }
    };

     const navLinks = [
        {name: "About", id: "about"},
        {name: "Skills", id: "skills"},
        {name: "Projects", id: "projects"},
        {name: "Experience", id: "experience"},
        {name: "Contact", id: "contact"},
     ];

     return (
        <motion.nav
           initial={{y: -100}}
           animate={{y:0}}
           className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <motion.div
                       whileHover={{scale: 1.05}}
                       className="flex items-center gap-2 cursor-pointer"
                       onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                    >
                        <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg">
                            <Code2 className="text-white w-5 h-5 md:w-6 md:h-6"/>
                        </div>
                        <span className="text-white font-semibold text-lg md:text-xl">Anuj Kumar</span>
                    </motion.div>

                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((m) => (
                            <button key={m.id} className="text-gray-300 hover:text-white transition-colors relative group" onClick={() => scrollToScction(m.id)}>
                                {m.name}
                                <span className="absolute left-0 w-0 h-0.5 -bottom-1 bg-gradient-to-br from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <motion.a
                            href="https://github.com/AnujKumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="p-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <FaGithub className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/anuj-kumar-7b3a6b1a9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="p-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <LuLinkedin className="w-5 h-5"/>
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/AnujKumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="p-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <FaTwitter className="w-5 h-5"/>
                        </motion.a>
                    </div>

                    <button
                       onClick={() => setIsMobileNav(!isMobileNav)}
                       className="md:hidden text-white p-2"
                    >
                        {isMobileNav ? (
                            <X className="w-6 h-6"/>
                        ) : (
                            <Menu className="w-6 h-6"/>
                        )}
                    </button>

                </div>
            </div>
            {isMobileNav && (
                <motion.div
                    initial={{height: 0, opacity: 0}}
                    animate={{height: "auto", opacity: 1}}
                    exit={{opacity: 0, height: 0}}
                    className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/5"
                >
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((m) => (
                            <button key={m.id} className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2" onClick={() => scrollToScction(m.id)}>
                                {m.name}
                            </button>
                        ))}

                        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                            <a
                                href="https://github.com/AnujKumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-300 hover:text-white transition-colors"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/anuj-kumar-7b3a6b1a9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-300 hover:text-white transition-colors"
                            >
                                <LuLinkedin className="w-5 h-5"/>
                            </a>
                            <a
                                href="https://twitter.com/AnujKumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-300 hover:text-white transition-colors"
                            >
                                <FaTwitter className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                     
                </motion.div>
            )}
        </motion.nav>
     );
}