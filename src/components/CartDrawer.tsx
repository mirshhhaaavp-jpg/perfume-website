import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    shipping,
    total,
    coupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const navigate = useNavigate();
  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const freeShippingThreshold = 1999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm transition-opacity animate-fadeIn">
      <div className="absolute inset-0" onClick={closeCart} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1B0F09] border-l border-elora-gold/30 shadow-2xl flex flex-col justify-between text-elora-cream">
          
          {/* Header */}
          <div className="p-5 border-b border-elora-gold/20 flex items-center justify-between bg-[#150B07]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-elora-gold" />
              <h2 className="font-serif text-lg tracking-wider text-elora-cream font-bold">
                Your Shopping Bag ({cart.length})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="text-elora-beige hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          {cart.length > 0 && (
            <div className="px-5 py-3 bg-[#24130C] border-b border-elora-gold/15 text-xs">
              {remainingForFreeShipping > 0 ? (
                <p className="text-elora-goldLight mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-elora-gold" />
                  Add <span className="font-bold text-white">₹{remainingForFreeShipping.toLocaleString('en-IN')}</span> more for <strong className="text-elora-gold">FREE Express Delivery</strong>
                </p>
              ) : (
                <p className="text-emerald-400 font-semibold mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Congratulations! You unlocked FREE Royal Express Shipping.
                </p>
              )}
              <div className="w-full bg-[#140A07] h-1.5 rounded-full overflow-hidden border border-elora-gold/20">
                <div
                  className="bg-gradient-to-r from-elora-gold to-elora-goldLight h-full transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-20 h-20 rounded-full border border-elora-gold/30 flex items-center justify-center bg-[#24130C]">
                  <ShoppingBag className="w-9 h-9 text-elora-gold/60" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-elora-cream font-bold">Your Bag is Empty</h3>
                  <p className="text-xs text-elora-textMuted max-w-xs mt-1">
                    Explore our regal collection of oud, amber, and floral perfumes.
                  </p>
                </div>
                <button
                  onClick={() => {
                    closeCart();
                    navigate('/shop');
                  }}
                  className="px-6 py-2.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-semibold text-xs uppercase tracking-widest rounded-lg shadow-gold-sm transition-all"
                >
                  Discover Scents
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="p-3.5 bg-[#22130C] border border-elora-gold/20 rounded-xl flex gap-3.5 items-center relative hover:border-elora-gold/40 transition-colors"
                >
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={closeCart}
                    className="w-18 h-20 w-16 h-20 rounded-lg overflow-hidden bg-[#160D08] flex-shrink-0 border border-elora-gold/20 block"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={closeCart}
                      className="block font-serif text-sm font-bold text-elora-cream hover:text-elora-goldLight truncate transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <div className="flex items-center gap-2 text-[11px] text-elora-textMuted mt-0.5">
                      <span>Size: <strong className="text-elora-goldLight">{item.size}</strong></span>
                      <span>•</span>
                      <span className="capitalize">{item.product.category}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2.5">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-elora-gold/30 rounded bg-[#160D08]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-elora-gold hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-elora-gold hover:text-white"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="font-serif text-sm font-bold text-elora-cream">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id, item.size)}
                    className="text-elora-textMuted hover:text-rose-400 p-1 transition-colors"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Order Summary */}
          {cart.length > 0 && (
            <div className="p-5 bg-[#170C08] border-t border-elora-gold/25 space-y-4">
              
              {/* Promo Code Input */}
              <div>
                {coupon ? (
                  <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-500/40 px-3 py-2 rounded-lg text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Code <strong>{coupon.code}</strong> applied (-₹{discount.toLocaleString('en-IN')})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-rose-300 hover:text-rose-100 underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. ELORA10)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 bg-[#22130C] border border-elora-gold/30 rounded-lg px-3 py-1.5 text-xs text-elora-cream placeholder-elora-textMuted/60 uppercase focus:outline-none focus:border-elora-gold"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-[#2B180F] border border-elora-gold/50 text-elora-goldLight hover:bg-elora-gold hover:text-elora-deep rounded-lg text-xs font-semibold tracking-wider transition-all"
                    >
                      Apply
                    </button>
                  </form>
                )}
              </div>

              {/* Summary Breakdown */}
              <div className="space-y-1.5 text-xs text-elora-beige/90">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-elora-cream">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <strong className="text-emerald-400">FREE</strong> : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-elora-cream pt-2 border-t border-elora-gold/20">
                  <span className="font-serif">Grand Total</span>
                  <span className="font-serif text-base text-elora-goldLight">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout CTAs */}
              <div className="space-y-2">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full py-3 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold tracking-widest uppercase text-xs rounded-xl shadow-gold-sm hover:shadow-gold-md transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex justify-between items-center text-xs">
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="text-elora-goldLight hover:text-white underline"
                  >
                    View Shopping Cart Details
                  </Link>
                  <button
                    onClick={closeCart}
                    className="text-elora-textMuted hover:text-elora-beige"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] text-elora-textMuted">
                <ShieldCheck className="w-3.5 h-3.5 text-elora-gold" />
                <span>100% Authentic Arabian Fragrances • Secure SSL Encrypted Checkout</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
