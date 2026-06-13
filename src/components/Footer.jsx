import { Code2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t border-white/10 py-8">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="flex flex-row items-center justify-center gap-2">
                         <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg">
                            <Code2 className="text-white w-5 h-5 md:w-6 md:h-6"/>
                        </div>
                        <span className="text-white font-semibold">&copy; {new Date().getFullYear()} Anuj Kumar. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}