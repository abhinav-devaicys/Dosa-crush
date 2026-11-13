import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
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

  const heroContentVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.18,
      },
    },
  };

  const editorialItemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.52,
        ease: easeCubic,
      },
    },
  };

  const headlineGroupVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const headlineLineVariants = {
    hidden: { y: '105%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.58,
        ease: easeCubic,
      },
    },
  };

  const ctaGroupVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const ctaButtonVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.46,
        ease: easeCubic,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[94vh] lg:min-h-screen pt-28 pb-20 md:pt-32 md:pb-24 flex items-center bg-[#FFF3DF] overflow-hidden"
    >
      {/* ================================================================== */}
      {/* 1. TWO-TONE ANIMATED LIQUID BACKGROUND (#D9471F <-> #FFF3DF)       */}
      {/* ================================================================== */}
      <div className="absolute inset-0 w-full pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Cream canvas reveal from the right */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, clipPath: 'inset(0% 0% 0% 18%)' }
          }
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 0.75, delay: 0.05, ease: easeCubic }}
          className="absolute inset-0 w-full bg-[#FFF3DF] bg-grain will-change-transform"
        />

        {/* ---------------------------------------------------------------- */}
        {/* DESKTOP (lg+): Painterly S-Curve Terracotta -> Cream Liquid Melt */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: '-6%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ duration: 0.85, delay: 0, ease: easeCubic }}
          className="hidden lg:block absolute inset-y-0 left-[-4%] w-[104%] will-change-transform"
        >
          {/* Layer A: Wide painterly apricot-cream melt wash */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.94 }}
            animate={{ opacity: 0.78, scaleX: 1 }}
            transition={{ duration: 0.95, delay: 0.14, ease: easeCubic }}
            className="absolute inset-0 will-change-transform"
          >
            <motion.svg
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: [0, 8, -4, 0],
                      y: [0, -8, 6, 0],
                      scaleX: [1, 1.016, 0.992, 1],
                    }
              }
              transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
              className="absolute top-[-3%] left-0 w-full h-[106%] origin-left blur-[28px] will-change-transform"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="terracottaMeltWide" gradientUnits="userSpaceOnUse" x1="350" y1="0" x2="545" y2="0">
                  <stop offset="0%" stopColor="#D9471F" stopOpacity="1" />
                  <stop offset="48%" stopColor="#E66939" stopOpacity="0.8" />
                  <stop offset="78%" stopColor="#F5B489" stopOpacity="0.38" />
                  <stop offset="100%" stopColor="#FFF3DF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L430,0 C400,155 510,280 492,435 C474,575 530,715 505,875 C492,935 478,975 458,1000 L0,1000 Z"
                fill="url(#terracottaMeltWide)"
              />
            </motion.svg>
          </motion.div>

          {/* Layer B: Mid flowing translucent liquid paint swirl */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.18, ease: easeCubic }}
            className="absolute inset-0 will-change-transform"
          >
            <motion.svg
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: [0, -7, 5, 0],
                      y: [0, 9, -7, 0],
                      scaleX: [1, 0.99, 1.015, 1],
                    }
              }
              transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
              className="absolute top-[-2%] left-0 w-full h-[104%] origin-left blur-[14px] will-change-transform"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="terracottaLiquidVeil" gradientUnits="userSpaceOnUse" x1="365" y1="0" x2="565" y2="0">
                  <stop offset="0%" stopColor="#D9471F" stopOpacity="0.96" />
                  <stop offset="56%" stopColor="#E56837" stopOpacity="0.72" />
                  <stop offset="86%" stopColor="#F8C89F" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#FFF3DF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L395,0 C365,165 505,295 475,455 C445,595 535,730 495,880 C480,938 465,975 445,1000 L0,1000 Z"
                fill="url(#terracottaLiquidVeil)"
              />
            </motion.svg>
          </motion.div>

          {/* Layer C: Primary rich Terracotta canvas with organic S-curve edge */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0.96 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: easeCubic }}
            className="absolute inset-0 will-change-transform"
          >
            <motion.svg
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: [0, 4, -3, 0],
                      scaleX: [1, 1.008, 0.996, 1],
                    }
              }
              transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
              className="absolute top-[-1%] left-0 w-full h-[102%] origin-left will-change-transform"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="terracottaCoreCanvas" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="535" y2="0">
                  <stop offset="0%" stopColor="#BE3814" />
                  <stop offset="52%" stopColor="#D9471F" />
                  <stop offset="76%" stopColor="#DE5325" />
                  <stop offset="88%" stopColor="#E97542" stopOpacity="0.86" />
                  <stop offset="96%" stopColor="#F6B88C" stopOpacity="0.42" />
                  <stop offset="100%" stopColor="#FFF3DF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L385,0 C355,160 495,290 465,445 C435,585 525,725 485,875 C470,932 455,970 438,1000 L0,1000 Z"
                fill="url(#terracottaCoreCanvas)"
              />
            </motion.svg>
          </motion.div>

          {/* Subtle luminous liquid ripple highlight along the S-curve crest */}
          <motion.svg
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, -5, 4, 0],
                    y: [0, 6, -5, 0],
                  }
            }
            transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-full blur-[6px] opacity-45 will-change-transform"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M398,0 C368,162 508,292 478,448 C448,588 538,728 498,878 C483,935 468,972 452,1000"
              stroke="#FFE3C4"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* MOBILE & TABLET (< lg): Vertical/Diagonal Organic Liquid Split   */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: '-4%' }}
          animate={{ opacity: 1, y: '0%' }}
          transition={{ duration: 0.85, delay: 0.04, ease: easeCubic }}
          className="lg:hidden absolute inset-x-[-2%] top-[-3%] h-[63%] sm:h-[59%] md:h-[56%] will-change-transform"
        >
          {/* Soft feathered liquid melt below mobile curve */}
          <svg
            className="absolute inset-x-0 top-0 w-full h-[108%] blur-[18px] opacity-75"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="mobileTerracottaMelt" x1="0%" y1="70%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D9471F" stopOpacity="1" />
                <stop offset="65%" stopColor="#E67042" stopOpacity="0.62" />
                <stop offset="100%" stopColor="#FFF3DF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 L800,0 L800,490 C610,565 370,455 0,555 Z"
              fill="url(#mobileTerracottaMelt)"
            />
          </svg>

          {/* Primary organic diagonal/curved terracotta field */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="mobileTerracottaCore" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C13915" />
                <stop offset="72%" stopColor="#D9471F" />
                <stop offset="100%" stopColor="#E15C2E" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 L800,0 L800,475 C600,555 340,440 0,540 Z"
              fill="url(#mobileTerracottaCore)"
            />
          </svg>
        </motion.div>
      </div>

      {/* ================================================================== */}
      {/* 2. MAIN CONTENT CONTAINER (Centered 1280px)                        */}
      {/* ================================================================== */}
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[46fr_54fr] gap-12 md:gap-14 lg:gap-12 xl:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Editorial Typography over Terracotta        */}
          {/* ======================================================== */}
          <motion.div
            variants={heroContentVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            className="flex flex-col items-start"
          >
            
            {/* Eyebrow Text */}
            <motion.div
              variants={editorialItemVariants}
              className="flex items-center gap-3 mb-5"
            >
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#FFF3DF]/95">
                A MODERN INDIAN FUSION EXPERIENCE
              </span>
              <span className="w-8 h-[1px] bg-[#FFF3DF]/55" aria-hidden="true" />
            </motion.div>

            {/* Main Headline: Cream top lines + Espresso accent bottom line with tapered brushstroke */}
            <motion.h1
              variants={headlineGroupVariants}
              className="text-[clamp(2.85rem,5.2vw,5.15rem)] font-headline font-extrabold uppercase leading-[0.9] tracking-tight mb-7 flex flex-col"
            >
              <span className="overflow-hidden inline-block">
                <motion.span
                  variants={headlineLineVariants}
                  className="inline-block text-[#FFF3DF]"
                >
                  A LITTLE
                </motion.span>
              </span>

              <span className="overflow-hidden inline-block">
                <motion.span
                  variants={headlineLineVariants}
                  className="inline-block text-[#FFF3DF]"
                >
                  MORE THAN
                </motion.span>
              </span>

              <span className="overflow-hidden inline-block pb-2">
                <motion.span
                  variants={headlineLineVariants}
                  className="relative isolate inline-block text-[#27201C]"
                >
                  JUST DOSA.
                  <motion.svg
                    initial={shouldReduceMotion ? false : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.55, delay: 0.78, ease: easeCubic }}
                    aria-hidden="true"
                    viewBox="0 0 360 18"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1.5 left-0 w-full h-3 sm:h-3.5 origin-left pointer-events-none"
                    fill="none"
                  >
                    <path
                      d="M3,11 C95,5 235,3 356,8 C280,12 135,14 3,13 Z"
                      fill="#F29F4B"
                    />
                  </motion.svg>
                </motion.span>
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={editorialItemVariants}
              className="text-base sm:text-lg text-[#FFF3DF]/92 max-w-[27.5rem] mb-8 leading-relaxed font-normal"
            >
              Crispy classics. Unexpected flavours. An entirely new way to experience your cravings in the heart of Gwalior.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={ctaGroupVariants}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <motion.button
                variants={ctaButtonVariants}
                onClick={onExploreMenu}
                className="group px-7 sm:px-8 py-3.5 sm:py-4 bg-[#FFF3DF] text-[#27201C] text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-[#27201C] hover:text-[#FFF3DF] active:scale-[0.98] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF3DF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#D9471F]"
              >
                <span>EXPLORE THE MENU</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.button
                variants={ctaButtonVariants}
                onClick={onOrderOnline}
                className="px-7 sm:px-8 py-3.5 sm:py-4 border border-[#FFF3DF]/65 text-[#FFF3DF] text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:border-[#FFF3DF] hover:bg-[#FFF3DF]/15 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF3DF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#D9471F]"
              >
                <span>ORDER ONLINE</span>
              </motion.button>
            </motion.div>

            {/* Metadata Trust Bar */}
            <motion.div
              variants={editorialItemVariants}
              className="mt-10 pt-5 border-t border-[#FFF3DF]/20 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-[#FFF3DF]/85 tracking-[0.14em] uppercase font-medium w-full max-w-[27.5rem]"
            >
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#F29F4B]" aria-hidden="true" />
                <span>GWALIOR, MP</span>
              </div>
              <span aria-hidden="true" className="text-[#FFF3DF]/40">|</span>
              <span className="whitespace-nowrap">DINE-IN &amp; DELIVERY</span>
              <span aria-hidden="true" className="text-[#FFF3DF]/40">|</span>
              <span className="whitespace-nowrap">ARTISANAL BATTER</span>
            </motion.div>
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN (~54%): Standalone Natural Dosa Photography */}
          {/* ======================================================== */}
          <div className="relative flex flex-col items-end w-full">
            {/* Floating Brand Notification */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.95, ease: easeCubic }}
              className="mb-3 lg:mb-0 lg:absolute lg:-top-5 lg:right-4 z-20 pointer-events-none"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="bg-[#FFF3DF]/95 backdrop-blur-md border border-[#27201C]/10 px-4 py-2 rounded-full shadow-md flex items-center gap-2.5"
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

            {/* Clean Standalone Food Photograph on Dosa Cream */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: easeCubic }}
              className="relative w-full will-change-transform"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#27201C]/10 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] xl:h-[490px] xl:aspect-auto w-full">
                <img
                  src={IMAGES.heroDosa}
                  alt="Crispy golden dosa served on dark ceramic stoneware with coconut chutney, tomato garlic chutney, and steaming sambar"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.025] transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 5. SCROLL DISCOVERY INDICATOR (Mouse outline + text)               */}
      {/* ================================================================== */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 1, y: hasScrolled ? 6 : 0 }}
        transition={{
          delay: hasScrolled ? 0 : 1.1,
          duration: hasScrolled ? 0.25 : 0.45,
          ease: easeCubic,
        }}
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none text-[#27201C]/75 z-20"
      >
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[18px] h-[28px] rounded-full border-[1.5px] border-[#D9471F] flex items-start justify-center pt-1.5">
          <motion.span
            animate={shouldReduceMotion ? undefined : { y: [0, 6, 0], opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-[2px] h-[5px] bg-[#D9471F] rounded-full"
          />
        </div>
        <span className="w-[1px] h-4 bg-[#D9471F]/35" />
      </motion.div>
    </section>
  );
}
