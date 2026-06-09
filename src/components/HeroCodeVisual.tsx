import { motion } from "framer-motion";

export function HeroCodeVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex-1 relative hidden lg:block"
    >
      <div className="relative w-full max-w-lg mx-auto aspect-square rounded-[3rem] bg-gradient-to-tr from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-cyan-400/10 border border-white/40 dark:border-white/10 shadow-2xl backdrop-blur-3xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-700">
        <div className="w-full h-full bg-white/80 dark:bg-slate-900/80 rounded-[2rem] shadow-inner overflow-hidden flex flex-col border border-slate-100 dark:border-slate-700">
          <div className="w-full h-12 bg-slate-100/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 flex items-center px-6 gap-2 backdrop-blur-md">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
            <div className="ml-4 text-xs sf-mono-font text-slate-400">imam_portfolio.jsx</div>
          </div>
          <div className="p-8 sf-mono-font text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <div>
              <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
              <span className="text-blue-600 dark:text-blue-400">softwareEngineer</span> = {"{"}
            </div>
            <div className="pl-8 pt-2">
              name:{" "}
              <span className="text-green-600 dark:text-green-400">
                &apos;Imam Nur Arifin&apos;
              </span>
              ,
            </div>
            <div className="pl-8">
              role:{" "}
              <span className="text-green-600 dark:text-green-400">
                &apos;Frontend Developer&apos;
              </span>
              ,
            </div>
            <div className="pl-8">
              skills: [<span className="text-green-600 dark:text-green-400">&apos;React&apos;</span>
              , <span className="text-green-600 dark:text-green-400">&apos;Next.js&apos;</span>,{" "}
              <span className="text-green-600 dark:text-green-400">&apos;Tailwind&apos;</span>
              ],
            </div>
            <div className="pl-8">
              passion:{" "}
              <span className="text-green-600 dark:text-green-400">&apos;UI Performance&apos;</span>
              ,
            </div>
            <div className="pl-8">
              isAvailable: <span className="text-amber-500">true</span>
            </div>
            <div className="pt-2">{"}"};</div>
            <div className="mt-6 flex gap-2">
              <span className="text-purple-600 dark:text-purple-400">export default</span>{" "}
              <span className="text-blue-600 dark:text-blue-400">softwareEngineer</span>
              <span className="text-slate-400">;</span>
            </div>
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block w-2 h-5 bg-blue-500 ml-1 mt-4 align-middle"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
