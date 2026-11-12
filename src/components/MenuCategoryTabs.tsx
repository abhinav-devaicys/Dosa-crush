import React from 'react';
import { MENU_CATEGORIES } from '../data/menuData';
import { motion } from 'motion/react';

interface MenuCategoryTabsProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function MenuCategoryTabs({ activeCategory, onSelectCategory }: MenuCategoryTabsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-[#27201C]/10 mb-12">
      {MENU_CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`relative px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
              isActive
                ? 'bg-[#27201C] text-[#FFF3DF] shadow-sm'
                : 'text-[#27201C]/70 hover:text-[#27201C] bg-[#27201C]/5 hover:bg-[#27201C]/10'
            }`}
          >
            <span>{cat.name}</span>
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 rounded-full border border-[#27201C] -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
