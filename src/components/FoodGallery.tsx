import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export function FoodGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
      }
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="py-24 bg-[#FFF3DF] text-[#27201C] border-t border-[#27201C]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F15A24]">
              A FEAST FOR THE EYES
            </span>
            <span className="w-8 h-[1px] bg-[#F15A24]/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold uppercase text-[#27201C] tracking-tight leading-[0.95] mb-6"
          >
            GOOD FOOD. <br />
            <span className="text-[#F15A24]">BETTER MEMORIES.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#27201C]/80 leading-relaxed font-normal"
          >
            A closer look at the flavours, textures, and moments that make DOSA CRUSH special.
          </motion.p>
        </div>

        {/* Asymmetrical Masonry-Inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item, index) => {
            const isTall = item.aspect === 'portrait';
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => handleOpen(index)}
                className={`group relative overflow-hidden rounded-2xl bg-[#27201C]/5 border border-[#27201C]/10 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-500 ${
                  isTall ? 'md:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Scrim Overlay & Caption on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#27201C]/80 via-[#27201C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#E8A83E] font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-headline font-bold tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-[#27201C]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            >
              <img
                src={GALLERY_ITEMS[selectedIndex].image}
                alt={GALLERY_ITEMS[selectedIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-6 text-center text-white">
                <span className="text-xs uppercase tracking-[0.25em] text-[#E8A83E] font-semibold block mb-1">
                  {GALLERY_ITEMS[selectedIndex].category} · {selectedIndex + 1} of {GALLERY_ITEMS.length}
                </span>
                <h3 className="text-2xl font-headline font-bold tracking-wide">
                  {GALLERY_ITEMS[selectedIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
