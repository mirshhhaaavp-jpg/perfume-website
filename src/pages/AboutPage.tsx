import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Sparkles, ShieldCheck, Heart, Award, CheckCircle2, Flame, Feather, Compass } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#1A0E0A] border-b border-elora-gold/25 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-transparent to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="w-8 h-8 text-elora-gold mx-auto mb-3 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">
            About ÉLORA
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elora-cream mt-2 mb-4 leading-tight">
            The Essence of Royal Elegance.
          </h1>
          <div className="w-20 h-0.5 bg-elora-gold mx-auto mb-4" />
          <p className="text-xs sm:text-base text-elora-beige/85 font-light max-w-2xl mx-auto leading-relaxed">
            Crafting luxury Arabian perfumes inspired by timeless palaces, rare oud resins, and majestic royal heritage.
          </p>
        </div>
      </section>

      {/* Main Story & Arch Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Our Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Arch framed image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-elora-gold/40 via-elora-gold/15 to-transparent border border-elora-gold/40 max-w-sm shadow-2xl">
              <div className="rounded-t-[130px] rounded-b-xl overflow-hidden aspect-[3/4] bg-[#180D08]">
                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85"
                  alt="Arabian Heritage Arch"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Story text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-semibold font-serif flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Our Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream">
              Our Story
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-elora-beige/85 leading-relaxed font-light">
              <p className="text-base sm:text-lg text-elora-goldLight font-serif italic">
                “ÉLORA was created for those who believe that fragrance is an expression of personality, elegance, and identity. Inspired by the richness of Arabian perfumery, we bring together captivating fragrances for men, women, and everyone who appreciates exceptional scents.”
              </p>
              <p>
                From the bustling historic spice markets of Old Dubai to the serene desert dunes at sunset, Arabian perfumery has held a revered sacred status for centuries. Fragrance in Arabian culture is not a mere cosmetic accessory—it is an art of hospitality, an aura of prestige, and a personal signature.
              </p>
              <p>
                At ÉLORA, we distill this age-old wisdom into modern masterpieces. Every formulation undergoes extended maturation in glass demijohns, allowing vintage Cambodian agarwood, Kashmiri saffron, and Damask rose to harmonize into an intoxicating, skin-caressing symphony.
              </p>
            </div>
          </div>

        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          <div className="p-8 sm:p-10 rounded-2xl bg-[#1E110B] border border-elora-gold/30 hover:border-elora-gold/60 transition-colors shadow-dark-luxury flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#2B180F] border border-elora-gold/40 flex items-center justify-center text-elora-gold">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-elora-gold font-semibold font-serif">
                Guiding Purpose
              </span>
              <h3 className="font-serif text-2xl font-bold text-elora-cream">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-elora-beige/85 leading-relaxed font-light">
                “Our mission is to make beautiful fragrance experiences accessible through a carefully curated collection of elegant perfumes.” We combine authentic Gulf distillation techniques with contemporary refinement to deliver long-lasting, royal scents directly to fragrance enthusiasts across the globe.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#1E110B] border border-elora-gold/30 hover:border-elora-gold/60 transition-colors shadow-dark-luxury flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#2B180F] border border-elora-gold/40 flex items-center justify-center text-elora-gold">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-elora-gold font-semibold font-serif">
                Aspiration
              </span>
              <h3 className="font-serif text-2xl font-bold text-elora-cream">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-elora-beige/85 leading-relaxed font-light">
                “To become a trusted destination for luxury-inspired fragrances and unforgettable scent experiences.” We strive to set the gold standard in perfume longevity, bespoke presentation, and ethical sourcing of rare natural resins.
              </p>
            </div>
          </div>

        </div>

        {/* Brand Speciality / Scent Profiles */}
        <div className="mb-24 p-8 sm:p-12 rounded-2xl bg-[#1B0F09] border border-elora-gold/30">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-serif">
              Olfactive Expertise
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-elora-cream mt-1 mb-3">
              Brand Speciality
            </h2>
            <p className="text-xs sm:text-sm text-elora-beige/85 leading-relaxed font-serif italic">
              “Discover the beauty of Arabian-inspired fragrance through woody, floral, oud, amber, musk, and oriental scent profiles.”
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { name: 'Woody', desc: 'Cedar, Vetiver, Sandalwood', icon: '🌲' },
              { name: 'Floral', desc: 'Taif Rose, Jasmine, Neroli', icon: '🌸' },
              { name: 'Oud', desc: 'Cambodi & Assam Agarwood', icon: '🪵' },
              { name: 'Amber', desc: 'Warm Golden Resins', icon: '✨' },
              { name: 'Musk', desc: 'Clean White Velvet Musk', icon: '☁️' },
              { name: 'Oriental', desc: 'Saffron, Incense & Spices', icon: '👑' },
            ].map((profile) => (
              <div
                key={profile.name}
                className="p-4 rounded-xl bg-[#24130C] border border-elora-gold/20 hover:border-elora-gold/50 transition-all"
              >
                <div className="text-2xl mb-2">{profile.icon}</div>
                <h4 className="font-serif text-sm font-bold text-elora-cream">{profile.name}</h4>
                <p className="text-[10px] text-elora-textMuted mt-1">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose ÉLORA? 6 Pillars */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-serif">
              The ÉLORA Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-1">
              Why Choose ÉLORA?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Carefully Curated Collections',
                desc: 'Only formulations that achieve 12+ hour performance and balanced projection enter our permanent collection.',
              },
              {
                title: 'Men, Women, & Unisex Fragrances',
                desc: 'Thoughtfully categorized olfactive profiles designed to suit boardroom presence, gala evenings, and intimate moments.',
              },
              {
                title: 'Elegant Packaging',
                desc: 'Each flacon is housed in our signature gold-embossed presentation chest, complete with wax-seal accents and silk pulls.',
              },
              {
                title: 'Easy Online Shopping',
                desc: 'Seamless browsing, dynamic flacon sizing, instant cart management, and real-time order tracking.',
              },
              {
                title: 'Customer-Focused Service',
                desc: 'A dedicated royal concierge team available directly on WhatsApp and email to guide your fragrance selection.',
              },
              {
                title: 'Secure Payment Options',
                desc: 'Full support for UPI, Credit/Debit cards, and Cash on Delivery with end-to-end encrypted transactions.',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-[#1E110B] border border-elora-gold/25 hover:border-elora-gold/50 transition-colors space-y-2.5"
              >
                <CheckCircle2 className="w-5 h-5 text-elora-gold" />
                <h4 className="font-serif text-base font-bold text-elora-cream">{pillar.title}</h4>
                <p className="text-xs text-elora-textMuted leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Shop */}
        <div className="text-center pt-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-gold-sm transition-all"
          >
            <span>Explore The Royal Collection</span>
          </Link>
        </div>

      </section>

    </div>
  );
};
