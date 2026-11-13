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
        className={`fixed top-0 left-0 right-0 w-full z-50 pointer-events-none px-4 sm:px-6 md:px-10 lg:px-12 transition-[padding] duration-500 ease-out ${
          scrolled ? 'pt-2.5 md:pt-3' : 'pt-4 md:pt-5'
        }`}
      >
        <div
          className={`pointer-events-auto w-full max-w-[1280px] mx-auto rounded-full px-5 sm:px-6 md:px-8 flex items-center justify-between gap-6 transition-all duration-500 ease-out ${
            scrolled
              ? 'py-2.5 md:py-3 bg-[#FFF3DF]/72 backdrop-blur-xl backdrop-saturate-150 border border-[#27201C]/12 shadow-[0_14px_38px_-10px_rgba(39,32,28,0.16)] ring-1 ring-inset ring-white/55'
              : 'py-3 md:py-3.5 bg-[#FFF3DF]/10 backdrop-blur-[6px] border border-[#FFF3DF]/30 shadow-[0_6px_24px_-8px_rgba(39,32,28,0.10)] ring-1 ring-inset ring-white/20'
          }`}
        >
          {/* Zone 1: Brand Wordmark */}
          <div className="md:flex-1 flex items-center justify-start">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('hero');
              }}
              className={`group flex items-center gap-2 text-xl md:text-2xl font-headline font-extrabold tracking-wider whitespace-nowrap shrink-0 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 rounded-sm ${
                scrolled
                  ? 'text-[#27201C] focus-visible:ring-[#F15A24]'
                  : 'text-[#FFF3DF] drop-shadow-[0_1px_2px_rgba(39,32,28,0.2)] focus-visible:ring-[#FFF3DF]'
              }`}
            >
              <span>DOSA CRUSH</span>
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150 ${
                  scrolled ? 'bg-[#F15A24]' : 'bg-[#E8A83E]'
                }`}
              />
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className={`hidden md:flex items-center justify-center gap-7 lg:gap-9 text-sm font-medium tracking-wide transition-colors duration-300 ${
              scrolled
                ? 'text-[#27201C]/90'
                : 'text-[#FFF3DF] lg:text-[#27201C]/90'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 rounded-sm ${
                  scrolled
                    ? 'hover:text-[#27201C] focus-visible:ring-[#F15A24]'
                    : 'hover:text-white lg:hover:text-[#27201C] focus-visible:ring-[#FFF3DF] lg:focus-visible:ring-[#F15A24]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-[#F15A24]' : 'bg-[#E8A83E] lg:bg-[#F15A24]'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="md:flex-1 flex items-center justify-end gap-3 sm:gap-4 shrink-0">
            <button
              onClick={onOpenCart}
              className={`relative p-2.5 transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 rounded-full ${
                scrolled
                  ? 'text-[#27201C] hover:text-[#F15A24] focus-visible:ring-[#F15A24]'
                  : 'text-[#FFF3DF] hover:text-[#E8A83E] lg:text-[#27201C] lg:hover:text-[#F15A24] focus-visible:ring-[#FFF3DF] lg:focus-visible:ring-[#F15A24]'
              }`}
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span
                  className={`absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center tabular-nums ${
                    scrolled
                      ? 'bg-[#F15A24] text-white'
                      : 'bg-[#FFF3DF] text-[#D9471F] lg:bg-[#F15A24] lg:text-white'
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavigate('menu-explorer')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-full active:scale-[0.98] transition-all duration-300 whitespace-nowrap shrink-0 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                scrolled
                  ? 'bg-[#27201C] text-[#FFF3DF] hover:bg-[#F15A24] focus-visible:ring-[#F15A24] focus-visible:ring-offset-[#FFF3DF]'
                  : 'bg-[#FFF3DF] text-[#27201C] hover:bg-[#27201C] hover:text-[#FFF3DF] focus-visible:ring-[#FFF3DF] focus-visible:ring-offset-[#D9471F] lg:bg-[#27201C] lg:text-[#FFF3DF] lg:hover:bg-[#F15A24] lg:focus-visible:ring-[#F15A24] lg:focus-visible:ring-offset-[#FFF3DF]'
              }`}
            >
              <span>Order Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 rounded-full ${
                scrolled
                  ? 'text-[#27201C] hover:text-[#F15A24] focus-visible:ring-[#F15A24]'
                  : 'text-[#FFF3DF] hover:text-[#E8A83E] focus-visible:ring-[#FFF3DF]'
              }`}
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
