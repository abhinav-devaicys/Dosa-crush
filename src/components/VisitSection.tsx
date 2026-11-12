import React from 'react';
import { motion } from 'motion/react';
import { BUSINESS_DATA } from '../data/businessData';
import { MapPin, Clock, Phone, MessageCircle, Compass, ShoppingBag, ArrowUpRight } from 'lucide-react';

interface VisitSectionProps {
  onOrderOnline: () => void;
}

export function VisitSection({ onOrderOnline }: VisitSectionProps) {
  return (
    <section id="contact" className="py-24 bg-[#FFF3DF] text-[#27201C] border-t border-[#27201C]/10 relative overflow-hidden">
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
              COME FIND YOUR CRUSH
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
            GOOD FOOD IS <br />
            <span className="text-[#F15A24]">CLOSER THAN YOU THINK.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#27201C]/80 leading-relaxed font-normal"
          >
            Drop by, bring your people, and let the cravings take over.
          </motion.p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Location Details & Contact Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 p-8 sm:p-10 bg-white/60 border border-[#27201C]/15 rounded-2xl shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-headline font-bold text-[#27201C] mb-2 tracking-wide">
                {BUSINESS_DATA.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#F15A24] font-semibold mb-8">
                {BUSINESS_DATA.tagline}
              </p>

              <div className="space-y-6 text-sm text-[#27201C]/80">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#F15A24] shrink-0 mt-0.5" />
                  <span>{BUSINESS_DATA.address}</span>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#F15A24] shrink-0 mt-0.5" />
                  <span>{BUSINESS_DATA.hours}</span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#F15A24] shrink-0 mt-0.5" />
                  <span>{BUSINESS_DATA.phone}</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#27201C]/10 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-[#27201C]/70">
                <span className="px-3 py-1 bg-[#27201C]/5 rounded-full">Dine-In Available</span>
                <span className="px-3 py-1 bg-[#27201C]/5 rounded-full">Express Takeaway</span>
                <span className="px-3 py-1 bg-[#27201C]/5 rounded-full">Home Delivery</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-10 pt-8 border-t border-[#27201C]/10">
              <a
                href={BUSINESS_DATA.phoneUrl}
                className="py-3 px-4 bg-[#27201C] text-[#FFF3DF] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#F15A24] transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>

              <a
                href={BUSINESS_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_DATA.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 border border-[#27201C]/20 text-[#27201C] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#27201C]/5 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>

              <button
                onClick={onOrderOnline}
                className="py-3 px-4 bg-[#F15A24] text-white font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#d94a1a] transition-colors flex items-center justify-center gap-2 text-center"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Order Online</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed & Exterior */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 h-full min-h-[450px] bg-white/40 border border-[#27201C]/15 rounded-2xl overflow-hidden shadow-sm flex flex-col"
          >
            <div className="relative flex-1 w-full h-full min-h-[400px] bg-[#27201C]/10">
              <iframe
                title="Dosa Crush Sai Kripa Patel Nagar Gwalior Location"
                src={BUSINESS_DATA.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover filter contrast-90"
              />
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={BUSINESS_DATA.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#27201C]/90 text-[#FFF3DF] text-xs font-medium rounded-lg backdrop-blur-md hover:bg-[#F15A24] transition-colors shadow-md"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
