import React from 'react';
import { RotateCcw, ShieldCheck, HelpCircle } from 'lucide-react';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      <section className="py-16 bg-[#1A0E0A] border-b border-elora-gold/25 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">Customer Care</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elora-cream mt-2 mb-3">Return & Refund Policy</h1>
          <p className="text-xs text-elora-textMuted">Last updated: November 2026 • Policy Template</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-elora-beige/85 leading-relaxed">
        
        <div className="p-4 bg-[#1E110B] rounded-xl border border-elora-gold/25 text-xs text-elora-goldLight">
          <strong>Notice:</strong> This policy is an editable template prepared for the store owner. Replace with finalized merchant return terms.
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">1. 7-Day Replacement Guarantee for Transit Damage</h2>
          <p>
            Due to the hygienic and personal nature of luxury fragrances, opened or used bottles cannot be returned. However, in the rare event your crystal flacon arrives cracked, leaking, or with a malfunctioning atomizer, we provide an immediate 100% complimentary replacement within 7 days of package delivery.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">2. Unopened & Sealed Returns</h2>
          <p>
            Perfumes in their pristine, unopened original packaging with unbroken cellophane wrapping and security seals may be returned within 7 days of delivery for store credit or refund.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">3. Refund Processing Timeline</h2>
          <p>
            Once an inspection has been concluded at our fulfillment atelier (typically 2-3 business days following physical receipt), the refund will be reversed to your original payment method (UPI or Credit/Debit card) within 5–7 banking days.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">4. How to Initiate a Claim</h2>
          <p>
            Simply reach out to our concierge team at <strong>concierge@elora-perfumes.com</strong> or message our WhatsApp concierge with your Order ID and brief photos of the parcel.
          </p>
        </section>

      </div>
    </div>
  );
};
