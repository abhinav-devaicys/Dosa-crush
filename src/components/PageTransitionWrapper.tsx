import React from 'react';
import { motion, MotionConfig, LayoutGroup, useReducedMotion } from 'motion/react';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.45,
        ease: EDITORIAL_EASE,
      }}
    >
      <LayoutGroup>
        {/* Opacity-only root reveal preserves fixed positioning for Navbar, ScrollProgressBar & OrderDrawer */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
          className="w-full min-h-screen bg-[#FFF3DF] text-[#27201C] selection:bg-[#F15A24] selection:text-white"
        >
          {children}
        </motion.div>
      </LayoutGroup>
    </MotionConfig>
  );
}
