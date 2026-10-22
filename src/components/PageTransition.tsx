import { motion } from "framer-motion";
import { type ReactNode, useEffect } from "react";
import { pageContent, shutter } from "../utils/motionVariants";

type PageTransitionProps = {
  children: ReactNode;
};

/** Wraps a routed page: red + ink shutters wipe across, then content rises in. */
export function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <motion.div initial="initial" animate="animate" exit="exit" variants={pageContent}>
        {children}
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] border-x-8 border-[#0b0b0b] bg-blood"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={shutter}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 left-0 z-[69] w-full bg-[#0b0b0b]"
        initial={{ scaleX: 1, originX: 1 }}
        animate={{
          scaleX: 0,
          transition: { delay: 0.12, duration: 0.45, ease: [0.77, 0, 0.18, 1] },
        }}
        exit={{ scaleX: 1, originX: 0, transition: { duration: 0.3, ease: [0.77, 0, 0.18, 1] } }}
      />
    </>
  );
}
