import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  icon: LucideIcon;
};

export function SectionHeading({ title, icon: Icon }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-10"
    >
      <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-xl shadow-inner">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white">
        {title}
      </h2>
    </motion.div>
  );
}
