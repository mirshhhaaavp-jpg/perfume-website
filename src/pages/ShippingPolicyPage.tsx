import React from 'react';
import { Truck, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const ShippingPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      <section className="py-16 bg-[#1A0E0A] border-b border-elora-gold/25 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">Delivery & Fulfillment</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elora-cream mt-2 mb-3">Shipping Policy</h1>
          <p className="text-xs text-elora-textMuted">Last updated: November 2026 • Policy Template</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-elora-beige/85 leading-relaxed">
        
        <div className="p-4 bg-[#1E110B] rounded-xl border border-elora-gold/25 text-xs text-elora-goldLight">
          <strong>Notice:</strong> This policy is an editable template prepared for the store owner. Replace with finalized delivery commitments.
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">1. Delivery Areas & Service Coverage</h2>
          <p>
            ÉLORA delivers across all major metropolitan cities and tier 1/2/3 districts in India via premier air express couriers (BlueDart, Delhivery, DTDC). Select international shipments to GCC nations are available upon concierge arrangement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">2. Processing & Dispatch Timelines</h2>
          <p>
            Orders are blended, bottled, and packaged within 24 to 48 hours of payment verification (excluding Sundays and national holidays). Each flacon undergoes an atomizer pressure test and is wrapped in our signature gold-embossed presentation box.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">3. Shipping Charges & Free Delivery Threshold</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Complimentary Royal Shipping:</strong> Available on all domestic orders valued at ₹1,999 or above.</li>
            <li><strong>Standard Flat Rate:</strong> Orders under ₹1,999 incur a modest handling charge of ₹99.</li>
            <li><strong>Cash on Delivery:</strong> No additional surcharge on eligible COD orders.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">4. Live Tracking & Tamper-Proof Packaging</h2>
          <p>
            Upon dispatch, an automated SMS and email notification with an express AWB tracking number will be delivered. You may track your package in real-time on our Order Tracking page. All shipments are sealed with security tamper-evident tape.
          </p>
        </section>

      </div>
    </div>
  );
};
