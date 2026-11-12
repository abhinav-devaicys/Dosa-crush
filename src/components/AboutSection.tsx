import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export function AboutSection() {
  const principles = [
    {
      number: '01',
      title: 'Tradition',
      description: 'Inspired by the authentic flavours, stone-ground batters, and heirloom recipes we grew up loving in Gwalior.'
    },
    {
      number: '02',
      title: 'Creativity',
      description: 'Bringing unexpected fusion twists, truffle notes, and modern presentation to familiar street-food favourites.'
    },
    {
      number: '03',
      title: 'Passion',
      description: 'Crafted with meticulous attention to detail to turn everyday cravings into warm, memorable dining experiences.'
    }
  ];

  return (
    <section id="story" className="py-24 bg-[#FFF3DF] text-[#27201C] border-t border-[#27201C]/10 relative overflow-hidden">
      {/* Background Subtle Grain / Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F15A24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header & Eyebrow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F15A24]">
                OUR STORY, OUR FLAVOUR
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
              ROOTED IN TRADITION. <br />
              <span className="text-[#F15A24]">MADE FOR THE CRAVING.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-[#27201C]/80 leading-relaxed font-normal mb-8"
            >
              “DOSA CRUSH brings the comfort of familiar Indian flavours together with the excitement of modern food. From crispy South Indian classics to creative fusion favourites, we make every craving worth celebrating.”
            </motion.p>

            {/* Decorative Stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#27201C]/5 border border-[#27201C]/15 rounded-full text-xs font-semibold uppercase tracking-wider text-[#27201C]"
            >
              <Heart className="w-4 h-4 text-[#F15A24] fill-[#F15A24]" />
              <span>MADE WITH LOVE IN GWALIOR</span>
            </motion.div>
          </div>

          {/* Asymmetrical Editorial Image Composition */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F15A24]/10 to-[#E8A83E]/20 rounded-3xl transform -rotate-1 -z-10" />

              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#27201C]/10 bg-[#27201C]">
                <img
                  src="/src/assets/images/dosa_crush_about_tawa_1794506454378.jpg"
                  alt="Chef preparing tawa dosa at Dosa Crush Gwalior"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#27201C]/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#E8A83E] font-semibold block mb-1">
                      Live Tawa Kitchen
                    </span>
                    <h4 className="text-lg font-headline font-bold tracking-wide">
                      THE ARTISANAL BATTER CRUST
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Sparkles className="w-4 h-4 text-[#FFF3DF]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Three Brand Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-[#27201C]/10">
          {principles.map((p, idx) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 bg-white/40 border border-[#27201C]/10 rounded-2xl flex flex-col justify-between hover:border-[#27201C]/30 transition-all duration-300 shadow-xs"
            >
              <div>
                <span className="text-xs font-headline font-bold text-[#F15A24] tracking-widest block mb-4">
                  // {p.number}
                </span>
                <h3 className="text-2xl font-headline font-bold text-[#27201C] tracking-wide mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-[#27201C]/70 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
