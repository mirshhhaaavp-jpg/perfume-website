import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Sparkles, Tag, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const {
    cart,
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

  const freeShippingThreshold = 1999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Page Header */}
      <section className="py-12 bg-[#1A0E0A] border-b border-elora-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-serif">
              Royal Bag
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-0.5">
              Your Shopping Cart
            </h1>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-elora-goldLight hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
          </Link>
        </div>
      </section>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cart.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-16 px-6 bg-[#1A0E0A] rounded-2xl border border-elora-gold/25 space-y-5">
            <div className="w-20 h-20 rounded-full border border-elora-gold/30 flex items-center justify-center bg-[#22130C] mx-auto">
              <ShoppingBag className="w-10 h-10 text-elora-gold/60" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-elora-cream">Your Cart is Empty</h2>
              <p className="text-xs text-elora-textMuted mt-1.5">
                Explore our signature fragrances crafted from rare oud, saffron, and velvet roses.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-block px-8 py-3 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-widest rounded-xl shadow-gold-sm transition-all"
            >
              Explore Royal Perfumes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Items Column (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Free Shipping Alert Box */}
              <div className="p-4 rounded-xl bg-[#1E110B] border border-elora-gold/25 text-xs">
                {remainingForFreeShipping > 0 ? (
                  <p className="text-elora-goldLight mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-elora-gold flex-shrink-0" />
                    Add <strong className="text-white">₹{remainingForFreeShipping.toLocaleString('en-IN')}</strong> more for <strong className="text-elora-gold">FREE Express Delivery across India</strong>
                  </p>
                ) : (
                  <p className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    You unlocked Complimentary Royal Express Shipping!
                  </p>
                )}
                <div className="w-full bg-[#140A07] h-1.5 rounded-full overflow-hidden border border-elora-gold/20">
                  <div
                    className="bg-gradient-to-r from-elora-gold to-elora-goldLight h-full transition-all duration-500 rounded-full"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="bg-[#1A0E0A] rounded-2xl border border-elora-gold/25 overflow-hidden divide-y divide-elora-gold/15">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 hover:bg-[#1E110B]/60 transition-colors"
                  >
                    {/* Image & Title */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <Link
                        to={`/product/${item.product.id}`}
                        className="w-20 h-24 rounded-xl overflow-hidden bg-[#160D08] border border-elora-gold/20 flex-shrink-0 block"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-elora-gold font-semibold">
                          {item.product.category} • {item.product.fragranceFamily}
                        </span>
                        <Link
                          to={`/product/${item.product.id}`}
                          className="font-serif text-base sm:text-lg font-bold text-elora-cream hover:text-elora-goldLight block transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-elora-textMuted mt-0.5">
                          Selected Size: <strong className="text-elora-goldLight">{item.size}</strong> Flacon
                        </p>
                        <p className="text-xs text-elora-gold font-serif mt-1 sm:hidden">
                          ₹{item.price.toLocaleString('en-IN')} each
                        </p>
                      </div>
                    </div>

                    {/* Quantity Stepper & Price */}
                    <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-elora-gold/30 rounded-xl bg-[#140A07]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-elora-gold hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-elora-cream">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-elora-gold hover:text-white"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-right">
                        <span className="font-serif text-base sm:text-lg font-bold text-elora-cream block">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-elora-textMuted hidden sm:block">
                          ₹{item.price.toLocaleString('en-IN')} / unit
                        </span>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="text-elora-textMuted hover:text-rose-400 p-2 transition-colors"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* Right Summary Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 sm:p-7 rounded-2xl bg-[#1E110B] border border-elora-gold/30 shadow-2xl space-y-5">
                <h3 className="font-serif text-lg font-bold text-elora-cream pb-3 border-b border-elora-gold/20">
                  Order Summary
                </h3>

                {/* Subtotal, Shipping, Discount Breakdown */}
                <div className="space-y-3 text-xs text-elora-beige/90">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-elora-cream">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Promotional Discount</span>
                      <span>-₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Royal Shipping</span>
                    <span>{shipping === 0 ? <strong className="text-emerald-400">FREE</strong> : `₹${shipping}`}</span>
                  </div>

                  <div className="pt-3 border-t border-elora-gold/20 flex justify-between items-baseline text-sm font-bold text-elora-cream">
                    <span className="font-serif text-base">Grand Total</span>
                    <span className="font-serif text-xl text-elora-goldLight">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Coupon Code Section */}
                <div className="pt-2">
                  {coupon ? (
                    <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-500/40 px-3 py-2 rounded-lg text-xs">
                      <div className="flex items-center gap-1.5 text-emerald-300">
                        <Tag className="w-3.5 h-3.5" />
                        <span>Coupon <strong>{coupon.code}</strong> Applied</span>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-xs text-rose-300 hover:text-rose-100 underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="space-y-2">
                      <label className="block text-[11px] uppercase tracking-wider text-elora-goldLight font-medium">
                        Have a Coupon?
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Code (e.g. ELORA10)"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          className="flex-1 bg-[#140A07] border border-elora-gold/30 rounded-lg px-3 py-2 text-xs text-elora-cream uppercase placeholder-elora-textMuted/50 focus:outline-none focus:border-elora-gold"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#2D180F] border border-elora-gold/40 hover:bg-elora-gold hover:text-elora-deep text-elora-goldLight rounded-lg text-xs font-semibold tracking-wider transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      <p className="text-[10px] text-elora-textMuted">
                        Try codes: <strong className="text-elora-gold">ELORA10</strong> (10% off) or <strong className="text-elora-gold">ROYALOUD</strong> (15% off)
                      </p>
                    </form>
                  )}
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-gold-md hover:shadow-gold-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-[11px] text-elora-textMuted text-center space-y-1">
                  <p className="flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-elora-gold" /> Guaranteed Safe & Encrypted Checkout
                  </p>
                  <p>UPI • Credit/Debit Cards • Cash on Delivery</p>
                </div>

              </div>

            </div>

          </div>
        )}
      </div>

    </div>
  );
};
