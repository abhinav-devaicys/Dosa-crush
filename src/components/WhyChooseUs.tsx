import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/images';

export function WhyChooseUs() {
  const highlights = [
    {
      number: '01',
      title: 'CLASSICS MEET CREATIVITY',
      description: 'Traditional South Indian favourites alongside exciting fusion creations.',
      image: IMAGES.mysoreMasala
    },
    {
      number: '02',
      title: 'SOMETHING FOR EVERY CRAVING',
      description: 'A diverse food selection beyond dosa, including snacks, street food, and beverages.',
      image: IMAGES.pavBhaji
    },
    {
      number: '03',
      title: 'MADE TO BE ENJOYED',
      description: 'A welcoming food experience for friends, families, and everyday cravings.',
      image: IMAGES.loungeInterior
    },
    {
      number: '04',
      title: 'DINE IN OR TAKE AWAY',
      description: 'Enjoy your favourites at the café or order them for home.',
      image: IMAGES.heroDosa
    }
  ];

  return (
    <section className="py-24 bg-[#FFF3DF] text-[#27201C] border-t border-[#27201C]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F15A24]">
                THE DOSA CRUSH DIFFERENCE
              </span>
              <span className="w-8 h-[1px] bg-[#F15A24]/40" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold uppercase text-[#27201C] tracking-tight leading-[0.95]"
            >
              NOT JUST FOOD. <br />
              <span className="text-[#F15A24]">A WHOLE LOT OF FLAVOUR.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-[#27201C]/80 leading-relaxed font-normal"
            >
              From familiar classics to unexpected fusion combinations, discover a place where every craving finds its match.
            </motion.p>
          </div>
        </div>

        {/* Asymmetric Editorial Grid for 4 Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group bg-white/40 border border-[#27201C]/10 rounded-2xl overflow-hidden shadow-xs hover:border-[#27201C]/30 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#27201C]/5">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#27201C]/80 backdrop-blur-md text-[#FFF3DF] text-xs font-headline font-bold px-3.5 py-1.5 rounded-full tracking-wider">
                  // {item.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-headline font-bold text-[#27201C] tracking-wide mb-3 group-hover:text-[#F15A24] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#27201C]/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
