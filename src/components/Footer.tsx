import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, Mail, ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Footer: React.FC = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Welcome to the ÉLORA Inner Circle. You will receive exclusive royal offers.', 'gold', 'Newsletter Subscribed');
    setEmail('');
  };

  return (
    <footer className="bg-[#140A07] border-t border-elora-gold/25 text-elora-beige pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-elora-gold/15">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.25em] text-elora-cream font-bold">
                ÉLORA
              </span>
              <span className="block text-[10px] tracking-[0.35em] text-elora-gold font-medium uppercase">
                Arabian Perfumes
              </span>
            </Link>
            <p className="font-serif italic text-elora-goldLight/90 text-sm">
              “The Essence of Royal Elegance.”
            </p>
            <p className="text-xs text-elora-textMuted leading-relaxed max-w-sm">
              Handcrafted in the heart of Arabian perfumery traditions. We blend rare Cambodi agarwood, golden amber, Kashmiri saffron, and velvet roses to craft enduring signature fragrances.
            </p>
            
            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-elora-gold/30 flex items-center justify-center text-elora-gold hover:bg-elora-gold hover:text-elora-deep transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-elora-gold/30 flex items-center justify-center text-elora-gold hover:bg-elora-gold hover:text-elora-deep transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-elora-gold/30 flex items-center justify-center text-elora-gold hover:bg-elora-gold hover:text-elora-deep transition-all"
                aria-label="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-elora-goldLight mb-4 font-serif">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-elora-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-elora-gold transition-colors">Shop All Perfumes</Link>
              </li>
              <li>
                <Link to="/shop/men" className="hover:text-elora-gold transition-colors">Men's Collection</Link>
              </li>
              <li>
                <Link to="/shop/women" className="hover:text-elora-gold transition-colors">Women's Collection</Link>
              </li>
              <li>
                <Link to="/shop/unisex" className="hover:text-elora-gold transition-colors">Unisex Royal Oud</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-elora-gold transition-colors">About ÉLORA</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-elora-gold transition-colors">Contact Concierge</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-elora-goldLight mb-4 font-serif">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/faq" className="hover:text-elora-gold transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-elora-gold transition-colors">Track Your Order</Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="hover:text-elora-gold transition-colors">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-elora-gold transition-colors">Return & Refund Policy</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-elora-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-elora-gold transition-colors">Customer Reviews</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-elora-goldLight mb-4 font-serif">
              Royal Concierge
            </h4>
            <p className="text-xs text-elora-textMuted leading-relaxed mb-4">
              Receive privileged access to private reserve batches, seasonal decants, and bespoke gifting sets.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-[#1F110B] border border-elora-gold/30 rounded-lg px-3.5 py-2.5 text-xs text-elora-cream placeholder-elora-textMuted/60 focus:outline-none focus:border-elora-gold transition-colors pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-elora-gold text-elora-deep rounded-md hover:bg-elora-goldLight transition-colors flex items-center justify-center"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-[10px] text-elora-textMuted/70 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-elora-gold" /> No spam. Unsubscribe at any time.
              </p>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-elora-textMuted gap-4">
          <p className="tracking-wider">
            &copy; {new Date().getFullYear()} ÉLORA – Arabian Perfumes. All rights reserved.
          </p>

          {/* Payment Badges in Gold styling */}
          <div className="flex items-center space-x-3 text-[11px] tracking-wider uppercase text-elora-goldLight/80">
            <span className="px-2 py-0.5 border border-elora-gold/25 rounded bg-[#1D100A]">UPI</span>
            <span className="px-2 py-0.5 border border-elora-gold/25 rounded bg-[#1D100A]">Visa</span>
            <span className="px-2 py-0.5 border border-elora-gold/25 rounded bg-[#1D100A]">Mastercard</span>
            <span className="px-2 py-0.5 border border-elora-gold/25 rounded bg-[#1D100A]">RuPay</span>
            <span className="px-2 py-0.5 border border-elora-gold/25 rounded bg-[#1D100A]">COD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
