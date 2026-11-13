import React, { useState } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menuData';
import { MenuItem } from '../types';
import { MenuCategoryTabs } from './MenuCategoryTabs';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Check, Sparkles } from 'lucide-react';

interface MenuExplorerProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenOrderDrawer: () => void;
}

export function MenuExplorer({ onAddToCart, onOpenOrderDrawer }: MenuExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>(MENU_CATEGORIES[0].id);
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <section id="menu-explorer" className="py-24 bg-[#FFF3DF] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F15A24] block mb-3">
              EXPLORE BY CATEGORY
            </span>
            <h2 className="text-4xl sm:text-5xl font-headline font-extrabold uppercase text-[#27201C] tracking-tight">
              THE FULL DOSA CRUSH CATALOGUE
            </h2>
          </div>
          <p className="text-sm text-[#27201C]/70 max-w-sm">
            Handcrafted with organic fermentation and genuine culinary art in Gwalior.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <MenuCategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Grid of Items with Smooth Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white/50 border border-[#27201C]/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#27201C]/30 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#27201C]/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {item.isBestseller && (
                      <span className="absolute top-4 left-4 bg-[#F15A24] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-xs">
                        Bestseller
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="absolute top-4 left-4 bg-[#D93622] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-xs">
                        Spicy
                      </span>
                    )}
                    <div className="absolute top-4 right-4 bg-[#27201C]/80 backdrop-blur-md text-[#FFF3DF] text-xs font-semibold px-3 py-1 rounded-full">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold tracking-wider text-[#F15A24] uppercase">
                        {item.subtitle}
                      </span>
                      {item.isVegetarian && (
                        <span className="text-[10px] font-semibold tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-xs">
                          ● VEG
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-headline font-bold text-[#27201C] tracking-wide mb-3">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#27201C]/70 leading-relaxed font-normal line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Add button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleAddWithFeedback(item)}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs tracking-wider uppercase active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      addedId === item.id
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#27201C] text-[#FFF3DF] hover:bg-[#F15A24]'
                    }`}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {addedId === item.id ? (
                        <motion.span
                          key="added"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.18 }}
                          className="inline-flex items-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          <span>Added to Order</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="add"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.18 }}
                          className="inline-flex items-center gap-2"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Add to Order — ₹{item.price}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
