import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface MenuCTAProps {
  onExploreFullMenu: () => void;
  onOrderOnline: () => void;
}

export function MenuCTA({ onExploreFullMenu, onOrderOnline }: MenuCTAProps) {
  return (
    <section className="py-24 bg-[#27201C] text-[#FFF3DF] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E8A83E] mb-4">
            READY TO TASTE?
          </span>
          <h2 className="text-4xl sm:text-6xl font-headline font-extrabold uppercase tracking-tight text-[#FFF3DF] mb-6">
            FOUND YOUR FAVOURITE?
          </h2>
          <p className="text-base sm:text-lg text-[#FFF3DF]/80 max-w-lg mb-10 leading-relaxed">
            Your next favourite bite is just a click away. Experience dine-in freshness or swift doorstep delivery across Gwalior.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={onExploreFullMenu}
              className="px-8 py-4 bg-[#F15A24] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-[#d94a1a] transition-all duration-300 shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE FULL MENU</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOrderOnline}
              className="px-8 py-4 border border-white/20 text-[#FFF3DF] text-xs font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>ORDER ONLINE</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
