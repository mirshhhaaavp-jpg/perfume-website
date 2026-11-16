import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all mandatory fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate concierge dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Your message has been received by the ÉLORA Concierge.', 'gold', 'Message Dispatched');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 bg-[#1A0E0A] border-b border-elora-gold/25 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">
            Royal Concierge Service
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elora-cream mt-2 mb-3">
            Contact ÉLORA
          </h1>
          <div className="w-16 h-0.5 bg-elora-gold mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-elora-beige/85 max-w-xl mx-auto">
            Our fragrance advisors are at your service for bespoke fragrance recommendations, order inquiries, and luxury corporate gifting.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts & Boutique Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Action Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1E110B] to-[#2B170F] border border-elora-gold/40 shadow-gold-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-elora-cream">Instant WhatsApp Concierge</h3>
                  <p className="text-[11px] text-elora-goldLight">Average response time: 5 minutes</p>
                </div>
              </div>
              <p className="text-xs text-elora-beige/80 mb-4 leading-relaxed">
                Connect directly with our master perfumers for signature layering advice or instant order status updates.
              </p>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" /> Start WhatsApp Chat
              </a>
            </div>

            {/* Contact Details List */}
            <div className="p-6 rounded-2xl bg-[#1A0E0A] border border-elora-gold/25 space-y-5 text-xs text-elora-beige/90">
              
              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-elora-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-elora-cream mb-0.5">Concierge Email</h4>
                  <p className="text-elora-goldLight">concierge@elora-perfumes.com</p>
                  <p className="text-[11px] text-elora-textMuted mt-0.5">We reply within 24 business hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-elora-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-elora-cream mb-0.5">Client Hotline</h4>
                  <p className="text-elora-goldLight">+91 (022) 2640-ELORA / +91 98765 43210</p>
                  <p className="text-[11px] text-elora-textMuted mt-0.5">Mon – Sat: 9:00 AM – 8:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-elora-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-elora-cream mb-0.5">Flagship Boutiques</h4>
                  <p className="text-elora-cream font-medium">Bandra West, Marine Drive, Mumbai 400050</p>
                  <p className="text-[11px] text-elora-textMuted">Downtown Dubai, Near Opera District, UAE</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Instagram className="w-5 h-5 text-elora-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-elora-cream mb-0.5">Follow Our Atelier</h4>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-elora-gold hover:underline"
                  >
                    @elora.arabianperfumes
                  </a>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-[#170C08] border border-elora-gold/20 flex items-center gap-3 text-xs text-elora-textMuted">
              <ShieldCheck className="w-5 h-5 text-elora-gold flex-shrink-0" />
              <span>Placeholder business contact details. Replaceable with actual store operator coordinates.</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#1E110B] border border-elora-gold/30 shadow-2xl">
              
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-elora-gold font-semibold font-serif">
                  Send An Inquiry
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-elora-cream mt-1">
                  How May We Assist You?
                </h2>
                <p className="text-xs text-elora-textMuted mt-1">
                  Kindly leave your message and our bespoke fragrance specialist will reach out.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-elora-cream">
                    Message Successfully Dispatched
                  </h3>
                  <p className="text-xs text-elora-beige/85 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to ÉLORA. A dedicated fragrance consultant will respond to your registered email shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Mansoor"
                        className="w-full bg-[#160D08] border border-elora-gold/30 rounded-xl px-4 py-2.5 text-xs text-elora-cream placeholder-elora-textMuted/50 focus:outline-none focus:border-elora-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. tariq@domain.com"
                        className="w-full bg-[#160D08] border border-elora-gold/30 rounded-xl px-4 py-2.5 text-xs text-elora-cream placeholder-elora-textMuted/50 focus:outline-none focus:border-elora-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 00000"
                        className="w-full bg-[#160D08] border border-elora-gold/30 rounded-xl px-4 py-2.5 text-xs text-elora-cream placeholder-elora-textMuted/50 focus:outline-none focus:border-elora-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                        Inquiry Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#160D08] border border-elora-gold/30 rounded-xl px-4 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold cursor-pointer"
                      >
                        <option value="">Select Topic</option>
                        <option value="Fragrance Recommendation">Fragrance Recommendation</option>
                        <option value="Order Tracking & Delivery">Order Tracking & Delivery</option>
                        <option value="Corporate & Wedding Gifting">Corporate & Wedding Gifting</option>
                        <option value="Return / Damaged Flacon">Return / Damaged Flacon</option>
                        <option value="Press & Partnership">Press & Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Kindly provide details regarding your fragrance preferences or order inquiries..."
                      className="w-full bg-[#160D08] border border-elora-gold/30 rounded-xl px-4 py-3 text-xs text-elora-cream placeholder-elora-textMuted/50 focus:outline-none focus:border-elora-gold resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-widest rounded-xl shadow-gold-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending note to Concierge...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Note to Concierge
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
