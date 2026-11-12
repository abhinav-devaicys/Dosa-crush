import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#F15A24] origin-left z-50 pointer-events-none"
    />
  );
}
