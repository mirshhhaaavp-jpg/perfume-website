import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, Smartphone, Banknote, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { OrderShippingAddress } from '../types';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, subtotal, discount, shipping, total, coupon, clearCart } = useCart();
  const { user, createOrder } = useAuth();
  const { showToast } = useToast();

  const [formData, setFormData] = useState<OrderShippingAddress>({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    house: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India'
  });

  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Credit/Debit Card' | 'Cash on Delivery'>('UPI');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  // If cart is empty, redirect to shop
  if (cart.length === 0) {
    return (
      <div className="bg-[#140A07] min-h-[70vh] flex items-center justify-center p-6 text-center text-elora-cream">
        <div className="max-w-md p-8 bg-[#1E110B] rounded-2xl border border-elora-gold/30 space-y-4">
          <h2 className="font-serif text-2xl font-bold">Your Bag is Empty</h2>
          <p className="text-xs text-elora-textMuted">Please select your royal fragrances before proceeding to checkout.</p>
          <Link
            to="/shop"
            className="inline-block px-6 py-2.5 bg-elora-gold text-elora-deep font-bold text-xs uppercase tracking-wider rounded-lg"
          >
            Explore Fragrances
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validations
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      showToast('Please fill out all personal details.', 'error');
      return;
    }

    if (!formData.house.trim() || !formData.street.trim() || !formData.city.trim() || !formData.pincode.trim()) {
      showToast('Please provide your complete delivery address.', 'error');
      return;
    }

    setIsProcessing(true);

    // Simulate order placement
    setTimeout(() => {
      const orderItems = cart.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
        image: item.product.images[0]
      }));

      const newOrder = createOrder({
        items: orderItems,
        subtotal,
        discount,
        shipping,
        total,
        couponCode: coupon?.code,
        shippingAddress: formData,
        paymentMethod
      });

      // Fire celebratory confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C6A15B', '#FAF8F3', '#3B2419', '#E4CD99']
      });

      clearCart();
      setIsProcessing(false);
      showToast(`Order #${newOrder.id} confirmed!`, 'gold', 'Royal Order Placed');
      navigate(`/order-success/${newOrder.id}`);
    }, 1500);
  };

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Header */}
      <section className="py-8 bg-[#1A0E0A] border-b border-elora-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-elora-textMuted">
            <Link to="/cart" className="hover:text-elora-gold">Cart</Link>
            <ChevronRight className="w-3.5 h-3.5 text-elora-gold/50" />
            <span className="text-elora-goldLight font-medium">Checkout</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-elora-goldLight">
            <Lock className="w-3.5 h-3.5 text-elora-gold" />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>
      </section>

      {/* Main Checkout Form Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form: Details, Address & Payment (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Customer Information */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1A0E0A] border border-elora-gold/25 space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-elora-gold/20">
                <span className="w-6 h-6 rounded-full bg-elora-gold text-elora-deep font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h2 className="font-serif text-lg font-bold text-elora-cream">
                  Customer Information
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rohail Khan"
                    className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-3.5 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. rohail@domain.com"
                    className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-3.5 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                    Mobile Number (For Courier Updates) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-3.5 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1A0E0A] border border-elora-gold/25 space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-elora-gold/20">
                <span className="w-6 h-6 rounded-full bg-elora-gold text-elora-deep font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h2 className="font-serif text-lg font-bold text-elora-cream">
                  Shipping Address
                </h2>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                    House / Flat / Building Name *
                  </label>
                  <input
                    type="text"
                    name="house"
                    required
                    value={formData.house}
                    onChange={handleInputChange}
                    placeholder="e.g. Penthouse 802, Royal Palms Palace"
                    className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-3.5 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                    Street Address / Landmark *
                  </label>
                  <input
                    type="text"
                    name="street"
                    required
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="e.g. Marine Drive Boulevard, Near Grand Mosque"
                    className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-3.5 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Mumbai"
                      className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-3.5 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="e.g. Maharashtra"
                      className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-3.5 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="400050"
                      className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-3.5 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Payment Options */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1A0E0A] border border-elora-gold/25 space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-elora-gold/20">
                <span className="w-6 h-6 rounded-full bg-elora-gold text-elora-deep font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h2 className="font-serif text-lg font-bold text-elora-cream">
                  Payment Method
                </h2>
              </div>

              {/* Payment selector radios */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'UPI', label: 'UPI / QR', icon: <Smartphone className="w-4 h-4" /> },
                  { id: 'Credit/Debit Card', label: 'Credit / Debit Card', icon: <CreditCard className="w-4 h-4" /> },
                  { id: 'Cash on Delivery', label: 'Cash on Delivery', icon: <Banknote className="w-4 h-4" /> },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPaymentMethod(opt.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      paymentMethod === opt.id
                        ? 'border-elora-gold bg-elora-gold/20 text-elora-goldLight shadow-gold-sm font-bold'
                        : 'border-elora-gold/25 bg-[#140A07] text-elora-beige/80 hover:border-elora-gold/60'
                    }`}
                  >
                    <div className="text-elora-gold mb-2">{opt.icon}</div>
                    <span className="text-xs font-semibold">{opt.label}</span>
                  </button>
                ))}
              </div>

              {/* Sub-panels for selected payment */}
              <div className="p-4 rounded-xl bg-[#140A07] border border-elora-gold/20 text-xs">
                {paymentMethod === 'UPI' && (
                  <div className="space-y-3">
                    <p className="text-elora-textMuted">
                      Scan QR or enter your Virtual Payment Address (Google Pay, PhonePe, Paytm, BHIM):
                    </p>
                    <input
                      type="text"
                      placeholder="username@okhdfcbank or yourname@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full bg-[#1A0E0A] border border-elora-gold/30 rounded-lg px-3 py-2 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                    />
                    <p className="text-[10px] text-elora-goldLight">
                      • Demo mode: You will not be charged. Real gateway can be plugged in when live API keys are provided.
                    </p>
                  </div>
                )}

                {paymentMethod === 'Credit/Debit Card' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-elora-goldLight mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="4111 2222 3333 4444"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                        className="w-full bg-[#1A0E0A] border border-elora-gold/30 rounded-lg px-3 py-2 text-xs text-elora-cream focus:outline-none focus:border-elora-gold font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-elora-goldLight mb-1">
                          Expiry MM/YY
                        </label>
                        <input
                          type="text"
                          placeholder="12/28"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          className="w-full bg-[#1A0E0A] border border-elora-gold/30 rounded-lg px-3 py-2 text-xs text-elora-cream focus:outline-none focus:border-elora-gold font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-elora-goldLight mb-1">
                          CVV
                        </label>
                        <input
                          type="password"
                          placeholder="•••"
                          maxLength={4}
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          className="w-full bg-[#1A0E0A] border border-elora-gold/30 rounded-lg px-3 py-2 text-xs text-elora-cream focus:outline-none focus:border-elora-gold font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'Cash on Delivery' && (
                  <div className="space-y-1">
                    <p className="text-elora-goldLight font-medium">Pay with Cash Upon Delivery</p>
                    <p className="text-elora-textMuted text-[11px]">
                      Please keep exact cash ready upon arrival of the courier. Available across India for eligible orders.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Right Summary: Items & Place Order (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1E110B] border border-elora-gold/30 shadow-2xl space-y-5 sticky top-28">
              <h3 className="font-serif text-lg font-bold text-elora-cream pb-3 border-b border-elora-gold/20">
                Order Summary ({cart.length} item{cart.length > 1 ? 's' : ''})
              </h3>

              {/* Items List Snapshot */}
              <div className="max-h-60 overflow-y-auto divide-y divide-elora-gold/15 pr-1 space-y-3">
                {cart.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="pt-2 flex items-center gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-14 rounded-lg object-cover bg-[#160D08] border border-elora-gold/20 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-xs font-bold text-elora-cream truncate">{item.product.name}</h4>
                      <p className="text-[10px] text-elora-textMuted">Size: {item.size} • Qty: {item.quantity}</p>
                    </div>
                    <span className="font-serif text-xs font-bold text-elora-cream">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Cost Breakdown */}
              <div className="pt-4 border-t border-elora-gold/20 space-y-2 text-xs text-elora-beige/90">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-elora-cream">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Discount ({coupon?.code})</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <strong className="text-emerald-400">FREE</strong> : `₹${shipping}`}</span>
                </div>
                <div className="pt-2 border-t border-elora-gold/20 flex justify-between items-baseline text-sm font-bold text-elora-cream">
                  <span className="font-serif text-base">Grand Total</span>
                  <span className="font-serif text-xl text-elora-goldLight">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Submit Order Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-gold-md hover:shadow-gold-lg transition-all flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Securing Royal Order...</span>
                ) : (
                  <>
                    <span>Place Order • ₹{total.toLocaleString('en-IN')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="pt-2 text-[10px] text-elora-textMuted text-center space-y-1">
                <p className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-elora-gold" /> Guaranteed Safe & Tamper-Proof Packaging
                </p>
                <p>By placing order you agree to ÉLORA's Terms and Privacy Policy.</p>
              </div>

            </div>

          </div>

        </form>
      </div>

    </div>
  );
};
