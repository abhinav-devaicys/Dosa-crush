import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, Plus, Minus, CheckCircle2, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export function OrderDrawer({ isOpen, onClose, cart, onUpdateQuantity, onClearCart }: OrderDrawerProps) {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const subtotal = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    onClearCart();
    setStep('cart');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#27201C]/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Order Drawer"
            initial={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
            transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#FFF3DF] border-l border-[#27201C]/10 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#27201C]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#F15A24]" />
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={step}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: EDITORIAL_EASE }}
                    className="text-xl font-headline font-bold text-[#27201C] tracking-wide"
                  >
                    {step === 'cart' && 'YOUR CRUSH ORDER'}
                    {step === 'checkout' && 'DELIVERY DETAILS'}
                    {step === 'success' && 'ORDER CONFIRMED'}
                  </motion.h2>
                </AnimatePresence>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#27201C] hover:text-[#F15A24] transition-colors cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F15A24]"
                aria-label="Close Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                {step === 'cart' && (
                  <motion.div
                    key="step-cart"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                    className="h-full"
                  >
                    {cart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center text-[#27201C]/60 gap-4">
                        <div className="w-16 h-16 rounded-full bg-[#27201C]/5 flex items-center justify-center text-[#27201C]/40">
                          <ShoppingBag className="w-8 h-8" />
                        </div>
                        <div>
                          <p className="text-lg font-headline font-bold text-[#27201C]">Your cart is empty</p>
                          <p className="text-xs text-[#27201C]/60 mt-1">Explore our menu and add your favorite fusion dosas.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <AnimatePresence initial={false}>
                          {cart.map((ci) => (
                            <motion.div
                              key={ci.item.id}
                              layout={!shouldReduceMotion}
                              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
                              transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                              className="p-4 bg-white/60 border border-[#27201C]/10 rounded-xl flex items-center gap-4"
                            >
                              <img src={ci.item.image} alt={ci.item.name} className="w-16 h-16 object-cover rounded-lg shrink-0" />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-headline font-bold text-[#27201C] truncate">{ci.item.name}</h4>
                                <p className="text-xs text-[#F15A24] font-semibold mt-0.5 tabular-nums">₹{ci.item.price * ci.quantity}</p>
                                
                                <div className="flex items-center gap-3 mt-2">
                                  <button
                                    onClick={() => onUpdateQuantity(ci.item.id, -1)}
                                    className="w-6 h-6 rounded-md bg-[#27201C]/10 flex items-center justify-center text-[#27201C] hover:bg-[#27201C]/20 active:scale-95 transition-all cursor-pointer"
                                    aria-label={`Decrease ${ci.item.name} quantity`}
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="text-xs font-bold text-[#27201C] tabular-nums">{ci.quantity}</span>
                                  <button
                                    onClick={() => onUpdateQuantity(ci.item.id, 1)}
                                    className="w-6 h-6 rounded-md bg-[#27201C]/10 flex items-center justify-center text-[#27201C] hover:bg-[#27201C]/20 active:scale-95 transition-all cursor-pointer"
                                    aria-label={`Increase ${ci.item.name} quantity`}
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                )}

                {step === 'checkout' && (
                  <motion.form
                    key="step-checkout"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                    onSubmit={handleSubmitOrder}
                    id="checkout-form"
                    className="flex flex-col gap-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#27201C]/70 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Aarav Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#27201C]/20 rounded-xl text-sm text-[#27201C] focus:outline-none focus:border-[#F15A24] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#27201C]/70 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98933 73223"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#27201C]/20 rounded-xl text-sm text-[#27201C] focus:outline-none focus:border-[#F15A24] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#27201C]/70 mb-1.5">
                        Delivery Address (Gwalior)
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="House No, Street, Patel Nagar, City Centre, Gwalior"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#27201C]/20 rounded-xl text-sm text-[#27201C] focus:outline-none focus:border-[#F15A24] transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#27201C]/70 mb-1.5">
                        Delivery Notes (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Extra coconut chutney, ring doorbell"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#27201C]/20 rounded-xl text-sm text-[#27201C] focus:outline-none focus:border-[#F15A24] transition-colors"
                      />
                    </div>
                  </motion.form>
                )}

                {step === 'success' && (
                  <motion.div
                    key="step-success"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
                    className="h-full flex flex-col items-center justify-center text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-headline font-bold text-[#27201C]">ORDER #DC-8492 CONFIRMED</h3>
                    <p className="text-sm text-[#27201C]/70 max-w-xs">
                      Thank you, <span className="font-semibold">{formData.name}</span>! Your delicious order is being freshly prepared at our Patel Nagar, Gwalior kitchen and will arrive in ~30 minutes.
                    </p>
                    <div className="p-4 bg-white/60 border border-[#27201C]/10 rounded-xl w-full text-left text-xs text-[#27201C]/80 mt-4 space-y-1">
                      <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
                      <p><span className="font-semibold">Address:</span> {formData.address}</p>
                      <p><span className="font-semibold">Total Paid:</span> ₹{total} (Cash / UPI on Delivery)</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Summary / Actions */}
            {cart.length > 0 && step !== 'success' && (
              <div className="p-6 border-t border-[#27201C]/10 bg-[#FFF3DF] flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 text-sm">
                  <div className="flex justify-between text-[#27201C]/70">
                    <span>Subtotal</span>
                    <span className="tabular-nums">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#27201C]/70">
                    <span>Express Delivery</span>
                    <span className="tabular-nums">₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between font-bold text-base text-[#27201C] pt-2 border-t border-[#27201C]/10">
                    <span>Total Amount</span>
                    <span className="tabular-nums">₹{total}</span>
                  </div>
                </div>

                {step === 'cart' ? (
                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full py-3.5 bg-[#27201C] text-[#FFF3DF] font-semibold text-xs tracking-widest uppercase rounded-xl hover:bg-[#F15A24] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('cart')}
                      className="w-1/3 py-3.5 border border-[#27201C]/20 text-[#27201C] font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-[#27201C]/5 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      form="checkout-form"
                      className="w-2/3 py-3.5 bg-[#F15A24] text-white font-semibold text-xs tracking-widest uppercase rounded-xl hover:bg-[#d94a1a] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Place Order (₹{total})</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {step === 'success' && (
              <div className="p-6 border-t border-[#27201C]/10 bg-[#FFF3DF]">
                <button
                  onClick={handleReset}
                  className="w-full py-3.5 bg-[#27201C] text-[#FFF3DF] font-semibold text-xs tracking-widest uppercase rounded-xl hover:bg-[#F15A24] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Done & Return Home
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
