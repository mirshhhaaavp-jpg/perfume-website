import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/products';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Header */}
      <section className="py-16 bg-[#1A0E0A] border-b border-elora-gold/25 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">
            Client Guidance
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elora-cream mt-2 mb-3">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-0.5 bg-elora-gold mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-elora-beige/85 max-w-xl mx-auto">
            Everything you need to know about our royal perfume formulations, flacon sizes, delivery, and payments.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#1E110B] border border-elora-gold/25 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-elora-cream">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#140A07] border border-elora-gold/30 flex items-center justify-center text-elora-gold flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-elora-beige/85 leading-relaxed border-t border-elora-gold/15 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-14 p-8 rounded-2xl bg-[#1A0E0A] border border-elora-gold/30 text-center space-y-4">
          <HelpCircle className="w-10 h-10 text-elora-gold mx-auto" />
          <h3 className="font-serif text-xl font-bold text-elora-cream">Have Another Question?</h3>
          <p className="text-xs text-elora-textMuted max-w-md mx-auto">
            Our royal fragrance concierge is pleased to assist you with scent layer advice or custom orders.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Contact Concierge
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
