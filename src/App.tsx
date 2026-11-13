/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageTransitionWrapper } from './components/PageTransitionWrapper';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HeroSection } from './components/HeroSection';
import { SignatureShowcase } from './components/SignatureShowcase';
import { MenuExplorer } from './components/MenuExplorer';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FoodGallery } from './components/FoodGallery';
import { ReviewSection } from './components/ReviewSection';
import { MenuCTA } from './components/MenuCTA';
import { Footer } from './components/Footer';
import { VisitSection } from './components/VisitSection';
import { OrderDrawer } from './components/OrderDrawer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <PageTransitionWrapper>
      <ScrollProgressBar />
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        <HeroSection
          onExploreMenu={() => handleNavigate('menu-explorer')}
          onOrderOnline={() => setIsCartOpen(true)}
        />
        <SignatureShowcase onAddToCart={handleAddToCart} />
        <MenuExplorer
          onAddToCart={handleAddToCart}
          onOpenOrderDrawer={() => setIsCartOpen(true)}
        />
        <AboutSection />
        <WhyChooseUs />
        <FoodGallery />
        <ReviewSection />
        <MenuCTA
          onExploreFullMenu={() => handleNavigate('menu-explorer')}
          onOrderOnline={() => setIsCartOpen(true)}
        />
        <VisitSection onOrderOnline={() => setIsCartOpen(true)} />
      </main>

      <Footer onNavigate={handleNavigate} />

      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </PageTransitionWrapper>
  );
}
