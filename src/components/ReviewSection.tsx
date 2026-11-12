import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS_DATA, RATING_SUMMARY } from '../data/reviewsData';
import { Star, ArrowUpRight, MessageSquareQuote } from 'lucide-react';

export function ReviewSection() {
  const featured = REVIEWS_DATA.find((r) => r.isFeatured) || REVIEWS_DATA[0];
  const supporting = REVIEWS_DATA.filter((r) => r.id !== featured.id);

  return (
    <section className="py-24 bg-[#FFF3DF] text-[#27201C] border-t border-[#27201C]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header & Rating Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#F15A24]">
                LOVE SERVED FRESH
              </span>
              <span className="w-8 h-[1px] bg-[#F15A24]/40" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold uppercase text-[#27201C] tracking-tight leading-[0.95] mb-4"
            >
              GOOD FOOD. <br />
              <span className="text-[#F15A24]">GREAT LOVE.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-[#27201C]/80 leading-relaxed font-normal"
            >
              Every visit, every bite, every smile. Here&apos;s what our customers have to say.
            </motion.p>
          </div>

          {/* Rating Badge */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 bg-white/60 border border-[#27201C]/15 rounded-2xl shadow-xs flex items-center gap-6"
            >
              <div className="text-center">
                <span className="text-4xl font-headline font-extrabold text-[#27201C]">
                  {RATING_SUMMARY.averageRating}
                </span>
                <div className="flex items-center justify-center gap-1 text-[#E8A83E] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E8A83E]" />
                  ))}
                </div>
              </div>
              <div className="border-l border-[#27201C]/15 pl-6">
                <p className="text-xs uppercase tracking-wider text-[#27201C]/60 font-semibold mb-1">
                  Verified Reviews
                </p>
                <p className="text-xl font-headline font-bold text-[#27201C]">
                  {RATING_SUMMARY.totalReviews}+ Reviews
                </p>
                <a
                  href={RATING_SUMMARY.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#F15A24] font-semibold hover:underline mt-1"
                >
                  <span>Google Business</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Testimonial Composition: 1 Featured + Supporting Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Featured Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 p-8 sm:p-10 bg-white/60 border border-[#27201C]/15 rounded-2xl shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-[#E8A83E]">
                  {[...Array(featured.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E8A83E]" />
                  ))}
                </div>
                <span className="text-xs text-[#27201C]/50 font-semibold">
                  {featured.source} · {featured.date}
                </span>
              </div>
              <MessageSquareQuote className="w-10 h-10 text-[#F15A24]/30 mb-4" />
              <p className="text-lg sm:text-xl font-medium text-[#27201C] leading-relaxed mb-8">
                &ldquo;{featured.text}&rdquo;
              </p>
            </div>
            <div className="pt-6 border-t border-[#27201C]/10 flex items-center justify-between">
              <div>
                <h4 className="font-headline font-bold text-lg text-[#27201C]">
                  {featured.author}
                </h4>
                <p className="text-xs text-[#27201C]/60 uppercase tracking-wider">
                  Verified Diner
                </p>
              </div>
              <span className="px-3 py-1 bg-[#F15A24]/10 text-[#F15A24] text-[10px] font-bold tracking-widest uppercase rounded-full">
                Featured Story
              </span>
            </div>
          </motion.div>

          {/* Supporting Reviews */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {supporting.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (idx + 1) * 0.15 }}
                className="p-8 bg-white/40 border border-[#27201C]/10 rounded-2xl flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#E8A83E]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#E8A83E]" />
                      ))}
                    </div>
                    <span className="text-xs text-[#27201C]/50">
                      {rev.date}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#27201C]/80 leading-relaxed font-normal mb-6">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#27201C]/10 text-xs">
                  <span className="font-headline font-bold text-[#27201C] text-sm">
                    {rev.author}
                  </span>
                  <span className="text-[#27201C]/60">
                    {rev.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Social Proof CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 bg-[#27201C] text-[#FFF3DF] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E8A83E] block mb-2">
              JOIN THE COMMUNITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-headline font-extrabold uppercase tracking-tight">
              YOUR NEXT FAVOURITE FOOD STORY STARTS HERE.
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#F15A24] text-white text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-[#d94a1a] transition-all duration-300 flex items-center gap-2"
            >
              <span>READ ALL REVIEWS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-white/20 text-[#FFF3DF] text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>SHARE YOUR EXPERIENCE</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
