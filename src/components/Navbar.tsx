import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { BUSINESS_DATA } from '../data/businessData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ cartCount, onOpenCart, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Menu', id: 'menu-explorer' },
    { name: 'Our Story', id: 'story' },
    { name: 'Contact', id: 'contact' },
  ];

  const easeCubic = [0.16, 1, 0.3, 1] as const;

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? false : { y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.04, ease: easeCubic }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? 'bg-[#FFF3DF]/95 backdrop-blur-md py-3.5 border-b border-[#27201C]/10 shadow-xs'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('hero');
            }}
            className="group flex items-center gap-2 text-xl md:text-2xl font-headline font-extrabold tracking-wider text-[#27201C] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-sm"
          >
            <span>DOSA CRUSH</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24] transition-transform duration-300 group-hover:scale-150" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#27201C]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                className="relative py-1.5 hover:text-[#27201C] transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-sm"
              >
                {link.name}
                <span className="absolute bottom-0.5 left-0 w-0 h-[1.5px] bg-[#F15A24] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={onOpenCart}
              className="relative p-2.5 text-[#27201C] hover:text-[#F15A24] transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-full"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#F15A24] text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavigate('menu-explorer')}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#27201C] text-[#FFF3DF] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#F15A24] active:scale-[0.98] transition-all duration-300 whitespace-nowrap shrink-0 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF3DF]"
            >
              <span>Order Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#27201C] hover:text-[#F15A24] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24] rounded-md"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#FFF3DF] pt-28 px-8 flex flex-col justify-between md:hidden pb-12"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-[#27201C]/50 font-semibold">
                Navigation
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onNavigate(link.id);
                  }}
                  className="text-3xl font-headline font-bold text-[#27201C] hover:text-[#F15A24] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="pt-6 border-t border-[#27201C]/10 flex flex-col gap-2 text-sm text-[#27201C]/70">
                <p>{BUSINESS_DATA.shortAddress}</p>
                <p>{BUSINESS_DATA.hours}</p>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('menu-explorer');
                }}
                className="w-full py-3.5 bg-[#F15A24] text-white font-semibold text-sm tracking-wider uppercase rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Order Online Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
