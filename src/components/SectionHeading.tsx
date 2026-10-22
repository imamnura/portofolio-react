import { motion } from "framer-motion";
import type { ComponentType } from "react";

type SectionHeadingProps = {
  title: string;
  icon: ComponentType<{ size?: number | string }>;
};

export function SectionHeading({ title, icon: Icon }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-8 flex items-center gap-3 sm:mb-10"
    >
      <div className="brutal-sm shrink-0 bg-blood p-2.5 text-white" aria-hidden>
        <Icon size={24} />
      </div>
      <h2 className="min-w-0 font-display text-2xl uppercase leading-tight tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      <span className="hidden h-1.5 min-w-8 flex-1 bg-ink sm:block" />
    </motion.div>
  );
}
