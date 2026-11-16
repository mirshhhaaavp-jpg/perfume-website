import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      <section className="py-16 bg-[#1A0E0A] border-b border-elora-gold/25 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">Legal & Transparency</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elora-cream mt-2 mb-3">Privacy Policy</h1>
          <p className="text-xs text-elora-textMuted">Last updated: November 2026 • Policy Template</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-xs sm:text-sm text-elora-beige/85 leading-relaxed">
        
        <div className="p-4 bg-[#1E110B] rounded-xl border border-elora-gold/25 text-xs text-elora-goldLight">
          <strong>Notice:</strong> This policy is an editable template prepared for the store owner. Replace with finalized legal commitments.
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">1. Information We Collect</h2>
          <p>
            When you browse ÉLORA, purchase fragrances, or join our royal membership circle, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details such as name, email address, phone number, and physical shipping address.</li>
            <li>Billing information required for transaction processing via authorized payment gateways.</li>
            <li>Browsing activity and fragrance preferences through cookies and standard web analytics.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">2. How We Use Your Information</h2>
          <p>
            Your information is used strictly to fulfill orders, provide accurate courier dispatch tracking, offer personalized fragrance recommendations, and dispatch privileged subscriber newsletters. We never sell customer records to third-party marketing entities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">3. Payment Security & Encryption</h2>
          <p>
            All electronic transactions are processed through Level 1 PCI-DSS compliant payment gateways with 256-bit SSL encryption. ÉLORA does not store full credit/debit card numbers or CVVs on local servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">4. Cookies & Personalization</h2>
          <p>
            We use persistent and session cookies to maintain your active shopping bag contents and wishlist selections across visits. You may disable cookies via browser preferences at any time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-elora-cream">5. Your Privacy Rights</h2>
          <p>
            You retain the right to inspect, correct, or request deletion of your personal account data by sending a written notice to concierge@elora-perfumes.com.
          </p>
        </section>

      </div>
    </div>
  );
};
