import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/images';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOrderOnline: () => void;
}

export function HeroSection({ onExploreMenu, onOrderOnline }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const easeCubic = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-20 md:pt-32 md:pb-24 flex items-center bg-[#FFF3DF] bg-grain overflow-hidden"
    >
      {/* 1. Background Color Treatment: Organic Muted Peach (#EBCBB3) Field behind Left Content */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: easeCubic }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Desktop asymmetrical organic curved peach field on the left */}
        <svg
          className="hidden lg:block absolute top-0 left-0 h-full w-[58%] xl:w-[55%]"
          viewBox="0 0 800 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="heroPeachGrad" x1="0%" y1="15%" x2="95%" y2="85%">
              <stop offset="0%" stopColor="#EBCBB3" stopOpacity="0.92" />
              <stop offset="65%" stopColor="#EBCBB3" stopOpacity="0.62" />
              <stop offset="100%" stopColor="#FFF3DF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L710,0 C775,210 615,430 695,650 C735,760 660,860 560,900 L0,900 Z"
            fill="url(#heroPeachGrad)"
          />
        </svg>

        {/* Soft organic feathered edge blend */}
        <div
          className="hidden lg:block absolute top-[8%] left-[-6%] w-[48%] h-[84%] rounded-full bg-[#EBCBB3]/40 blur-3xl"
        />

        {/* Mobile & Tablet subtle peach upper wash */}
        <div
          className="lg:hidden absolute -top-16 -left-16 w-[115%] h-[58%] rounded-b-[45%] bg-gradient-to-b from-[#EBCBB3]/70 via-[#EBCBB3]/35 to-transparent blur-2xl"
        />
      </motion.div>

      {/* Main Container: Unified 1280px container aligned with Navbar */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[48fr_52fr] gap-10 md:gap-12 lg:gap-12 xl:gap-16 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN (~48%): Editorial Typography on Peach Wash   */}
          {/* ======================================================== */}
          <div className="flex flex-col items-start">
            
            {/* 3. Eyebrow Text */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12, ease: easeCubic }}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#F15A24]">
                A MODERN INDIAN FUSION EXPERIENCE
              </span>
              <span className="w-8 h-[1px] bg-[#F15A24]/45" aria-hidden="true" />
            </motion.div>

            {/* 4. Main Headline: Staggered line-by-line reveal */}
            <h1 className="text-[clamp(2.65rem,4.9vw,4.75rem)] font-headline font-extrabold uppercase leading-[0.92] tracking-tight text-[#27201C] mb-6 flex flex-col">
              <span className="overflow-hidden inline-block">
                <motion.span
                  initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: easeCubic }}
                  className="inline-block"
                >
                  A LITTLE
                </motion.span>
              </span>

              <span className="overflow-hidden inline-block">
                <motion.span
                  initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.28, ease: easeCubic }}
                  className="inline-block"
                >
                  MORE THAN
                </motion.span>
              </span>

              <span className="overflow-hidden inline-block">
                <motion.span
                  initial={shouldReduceMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.36, ease: easeCubic }}
                  className="relative isolate inline-block text-[#27201C]"
                >
                  JUST DOSA.
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1.5 left-0 w-full h-[5px] sm:h-[6px] bg-[#F15A24]/90 -z-10 rounded-xs"
                  />
                </motion.span>
              </span>
            </h1>

            {/* 5. Supporting Description: Smooth fade-up after headline */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.46, ease: easeCubic }}
              className="text-base sm:text-lg text-[#27201C]/85 max-w-[30rem] mb-8 leading-relaxed font-normal"
            >
              Crispy classics. Unexpected flavours. An entirely new way to experience your cravings in the heart of Gwalior.
            </motion.p>

            {/* 6. CTA Buttons: Slight staggered fade-in */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <motion.button
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.56, ease: easeCubic }}
                onClick={onExploreMenu}
                className="group px-7 sm:px-8 py-3.5 sm:py-4 bg-[#27201C] text-[#FFF3DF] text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-[#F15A24] active:scale-[0.98] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF3DF]"
              >
                <span>EXPLORE THE MENU</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.button
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.64, ease: easeCubic }}
                onClick={onOrderOnline}
                className="px-7 sm:px-8 py-3.5 sm:py-4 border border-[#27201C]/25 text-[#27201C] text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:border-[#27201C] hover:bg-[#27201C]/5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF3DF]"
              >
                <span>ORDER ONLINE</span>
              </motion.button>
            </div>

            {/* Metadata Trust Bar */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.72, ease: easeCubic }}
              className="mt-9 pt-6 border-t border-[#27201C]/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#27201C]/70 tracking-wider font-medium w-full max-w-[30rem]"
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#E8A83E]" aria-hidden="true" />
                <span>GWALIOR, MP</span>
              </div>
              <span aria-hidden="true">·</span>
              <span className="whitespace-nowrap">DINE-IN &amp; DELIVERY</span>
              <span aria-hidden="true">·</span>
              <span className="whitespace-nowrap">ARTISANAL BATTER</span>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN (~52%): Food Photography on Cream Canvas    */}
          {/* ======================================================== */}
          <div className="relative flex items-center justify-center">
            
            {/* 8. Floating Brand Notification: Gentle fade-in after food image */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.85, ease: easeCubic }}
              className="absolute -top-4 sm:-top-5 right-2 sm:right-5 z-20 pointer-events-none"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="bg-[#FFF3DF]/95 backdrop-blur-md border border-[#27201C]/15 px-4 py-2 rounded-full shadow-md flex items-center gap-2.5"
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F15A24] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F15A24]" />
                </span>
                <span className="text-[11px] font-headline font-bold uppercase tracking-wider text-[#27201C] whitespace-nowrap">
                  A LITTLE CRISP. A LOT OF CRUSH.
                </span>
              </motion.div>
            </motion.div>

            {/* 7. Food Image: Smooth clipping-mask reveal with scale 0.97 -> 1 */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.97,
                      clipPath: 'inset(8% 0% 0% 0% round 1rem)',
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                clipPath: 'inset(0% 0% 0% 0% round 1rem)',
              }}
              transition={{ duration: 0.75, delay: 0.25, ease: easeCubic }}
              className="relative w-full"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#27201C]/10 bg-[#27201C] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] xl:h-[500px] xl:aspect-auto w-full">
                <img
                  src={IMAGES.heroDosa}
                  alt="Crispy golden dosa served on dark ceramic stoneware with coconut chutney, tomato garlic chutney, and steaming sambar"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#27201C]/65 via-transparent to-transparent opacity-80 pointer-events-none"
                />
                
                {/* Floating Editorial Caption */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#E8A83E] font-semibold block mb-1">
                      Chef’s Signature
                    </span>
                    <h3 className="text-lg font-headline font-bold tracking-wide">
                      THE CRUSH GOLDEN PAPER DOSA
                    </h3>
                  </div>
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shrink-0"
                  >
                    <Sparkles className="w-4 h-4 text-[#FFF3DF]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Discovery Indicator — hides cleanly once scrolling begins */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 1, y: hasScrolled ? 6 : 0 }}
        transition={{
          delay: hasScrolled ? 0 : 0.95,
          duration: hasScrolled ? 0.25 : 0.5,
          ease: easeCubic,
        }}
        aria-hidden="true"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none text-[#27201C]/50 z-10"
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">SCROLL TO EXPLORE</span>
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-[1.5px] h-5 bg-[#F15A24]/60 rounded-full"
        />
      </motion.div>
    </section>
  );
}
