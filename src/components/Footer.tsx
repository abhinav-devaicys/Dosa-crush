import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Instagram, Facebook, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#27201C] text-[#FFF3DF] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}
              className="text-2xl font-headline font-extrabold tracking-wider mb-4"
            >
              {BUSINESS_DATA.name}
            </a>
            <p className="text-sm text-[#FFF3DF]/70 max-w-sm mb-6 leading-relaxed">
              {BUSINESS_DATA.tagline} in Gwalior. Crispy classics, unexpected flavours, and unforgettable moments.
            </p>
            <div className="flex items-center gap-4 text-white/70">
              <a href={BUSINESS_DATA.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={BUSINESS_DATA.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={BUSINESS_DATA.googleBusiness} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center text-xs font-bold" aria-label="Google Business">
                G
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E8A83E]">
              Navigation
            </span>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-[#FFF3DF]/80">
              <a href="#hero" onClick={(e) => { e.preventDefault(); onNavigate('hero'); }} className="hover:text-white transition-colors">Home</a>
              <a href="#menu-explorer" onClick={(e) => { e.preventDefault(); onNavigate('menu-explorer'); }} className="hover:text-white transition-colors">Menu Collection</a>
              <a href="#story" onClick={(e) => { e.preventDefault(); onNavigate('story'); }} className="hover:text-white transition-colors">Our Philosophy</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-white transition-colors">Visit & Contact</a>
            </div>
          </div>

          {/* Menu Categories */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E8A83E]">
              Menu Categories
            </span>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-[#FFF3DF]/80">
              <a href="#menu-explorer" onClick={(e) => { e.preventDefault(); onNavigate('menu-explorer'); }} className="hover:text-white transition-colors">Dosa Specials & Fusion</a>
              <a href="#menu-explorer" onClick={(e) => { e.preventDefault(); onNavigate('menu-explorer'); }} className="hover:text-white transition-colors">Traditional South Indian</a>
              <a href="#menu-explorer" onClick={(e) => { e.preventDefault(); onNavigate('menu-explorer'); }} className="hover:text-white transition-colors">Mumbai Pav Bhaji</a>
              <a href="#menu-explorer" onClick={(e) => { e.preventDefault(); onNavigate('menu-explorer'); }} className="hover:text-white transition-colors">Chinese & Beverages</a>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E8A83E]">
              Location & Hours
            </span>
            <p className="text-sm text-[#FFF3DF]/80 leading-relaxed">
              {BUSINESS_DATA.address}
            </p>
            <p className="text-sm text-[#FFF3DF]/80">
              {BUSINESS_DATA.phone}
            </p>
            <p className="text-xs text-[#FFF3DF]/50">
              {BUSINESS_DATA.hours}
            </p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF3DF]/40 gap-4">
          <span>© {new Date().getFullYear()} {BUSINESS_DATA.name} Gwalior. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#FFF3DF] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#FFF3DF] cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-[#FFF3DF] cursor-pointer transition-colors">FSSAI Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
