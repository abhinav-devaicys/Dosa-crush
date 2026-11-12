import React, { useState } from 'react';
import { SIGNATURE_DISHES } from '../data/menuData';
import { motion } from 'motion/react';
import { Sparkles, Plus, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface SignatureShowcaseProps {
  onAddToCart: (item: MenuItem) => void;
}

export function SignatureShowcase({ onAddToCart }: SignatureShowcaseProps) {
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (dish: typeof SIGNATURE_DISHES[0]) => {
    // Map signature dish to MenuItem structure for cart compatibility
    const menuItem: MenuItem = {
      id: dish.id,
      name: dish.name,
      subtitle: dish.subtitle,
      description: dish.description,
      price: dish.price,
      category: 'dosa-specials',
      image: dish.image,
      isBestseller: true,
      isVegetarian: dish.isVegetarian
    };
    onAddToCart(menuItem);
    setAddedId(dish.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-24 bg-[#FFF3DF] border-t border-[#27201C]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Introduction */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F15A24]">
              MADE TO BE CRAVED
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
            THE ART OF <br />
            A GOOD CRUSH.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#27201C]/80 leading-relaxed font-normal"
          >
            From timeless South Indian classics to irresistible fusion creations. Every bite has its own story.
          </motion.p>
        </div>

        {/* Asymmetric Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Featured Dish (Left - Large) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 group bg-white/40 border border-[#27201C]/10 rounded-2xl overflow-hidden shadow-sm hover:border-[#27201C]/30 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#27201C]/5">
              <img
                src={SIGNATURE_DISHES[0].image}
                alt={SIGNATURE_DISHES[0].name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#F15A24] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-xs">
                {SIGNATURE_DISHES[0].tag}
              </div>
              <div className="absolute top-4 right-4 bg-[#27201C]/80 backdrop-blur-md text-[#FFF3DF] text-sm font-bold px-4 py-1.5 rounded-full">
                ₹{SIGNATURE_DISHES[0].price}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-[#F15A24] font-semibold">
                  {SIGNATURE_DISHES[0].subtitle}
                </span>
                {SIGNATURE_DISHES[0].isVegetarian && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-sm">
                    ● VEG
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-headline font-bold text-[#27201C] tracking-wide mb-3">
                {SIGNATURE_DISHES[0].name}
              </h3>
              <p className="text-sm sm:text-base text-[#27201C]/80 leading-relaxed font-normal mb-6">
                {SIGNATURE_DISHES[0].description}
              </p>

              <button
                onClick={() => handleAdd(SIGNATURE_DISHES[0])}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  addedId === SIGNATURE_DISHES[0].id
                    ? 'bg-emerald-700 text-white'
                    : 'bg-[#27201C] text-[#FFF3DF] hover:bg-[#F15A24]'
                }`}
              >
                {addedId === SIGNATURE_DISHES[0].id ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Order</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Order — ₹{SIGNATURE_DISHES[0].price}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3 Supporting Signature Compositions */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {SIGNATURE_DISHES.slice(1).map((dish, idx) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group bg-white/40 border border-[#27201C]/10 rounded-2xl overflow-hidden shadow-xs hover:border-[#27201C]/30 transition-all duration-500 flex flex-col sm:flex-row"
              >
                <div className="relative sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden bg-[#27201C]/5">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {dish.tag && (
                    <span className="absolute top-3 left-3 bg-[#27201C]/80 text-[#FFF3DF] text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full">
                      {dish.tag}
                    </span>
                  )}
                </div>

                <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase tracking-widest text-[#F15A24] font-semibold">
                        {dish.subtitle}
                      </span>
                      <span className="text-sm font-bold text-[#27201C]">₹{dish.price}</span>
                    </div>
                    <h4 className="text-xl font-headline font-bold text-[#27201C] tracking-wide mb-2">
                      {dish.name}
                    </h4>
                    <p className="text-xs text-[#27201C]/70 leading-relaxed font-normal line-clamp-2 mb-4">
                      {dish.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleAdd(dish)}
                    className={`w-full py-2.5 px-3 rounded-lg font-semibold text-[11px] tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
                      addedId === dish.id
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#27201C] text-[#FFF3DF] hover:bg-[#F15A24]'
                    }`}
                  >
                    {addedId === dish.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add — ₹{dish.price}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
