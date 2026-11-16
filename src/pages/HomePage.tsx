import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Gift, 
  Flame, 
  Star, 
  ChevronRight, 
  Check, 
  Heart, 
  ShoppingBag, 
  Eye,
  Award,
  Crown
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, WHY_CHOOSE_US, DEMO_REVIEWS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useToast } from '../context/ToastContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
  const newArrivals = PRODUCTS.filter(p => p.isNewArrival).slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setIsSubscribed(true);
    showToast('You are now subscribed to ÉLORA Royal Privileges.', 'gold', 'Privilege Confirmed');
    setNewsletterEmail('');
  };

  return (
    <div className="bg-[#140A07] text-elora-cream selection:bg-elora-gold selection:text-elora-deep">
      
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden border-b border-elora-gold/25">
        
        {/* Background Atmosphere Layers */}
        <div className="absolute inset-0 bg-[#120805]">
          {/* Ambient Royal Arch / Architecture Backdrop */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transform animate-pulse duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85')`
            }}
          />
          {/* Radial warm lighting gradients matching reference image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#140A07] via-[#1A0E0A]/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-transparent to-[#140A07]/80 z-10" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C6A15B]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Subtle Royal Crest Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24150F]/80 border border-elora-gold/40 text-elora-goldLight text-xs tracking-[0.2em] uppercase backdrop-blur-md">
                <Crown className="w-3.5 h-3.5 text-elora-gold" />
                <span>The Essence of Royal Elegance</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-elora-cream leading-[1.12] tracking-wide">
                Discover the Art of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F3] via-[#E4CD99] to-[#C6A15B]">
                  Arabian Fragrance.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-lg text-elora-beige/85 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Experience the richness of luxury scents crafted to leave an unforgettable impression. Hand-blended with vintage oud, warm amber, and precious petals.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-8 py-4 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-[0.2em] rounded-lg shadow-gold-md hover:shadow-gold-lg transition-all duration-300 text-center transform hover:-translate-y-0.5"
                >
                  SHOP NOW
                </Link>
                <a
                  href="#collections"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-elora-gold/10 text-elora-goldLight hover:text-white border border-elora-gold/60 rounded-lg font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 text-center"
                >
                  EXPLORE COLLECTION
                </a>
              </div>

              {/* Key Trust Metrics */}
              <div className="pt-6 border-t border-elora-gold/20 flex items-center justify-center lg:justify-start gap-8 text-xs text-elora-textMuted">
                <div>
                  <div className="font-serif text-lg font-bold text-elora-goldLight">100%</div>
                  <div className="text-[11px] uppercase tracking-wider">Pure Fragrance Oil</div>
                </div>
                <div className="w-[1px] h-8 bg-elora-gold/20" />
                <div>
                  <div className="font-serif text-lg font-bold text-elora-goldLight">14+ Hrs</div>
                  <div className="text-[11px] uppercase tracking-wider">Royal Longevity</div>
                </div>
                <div className="w-[1px] h-8 bg-elora-gold/20" />
                <div>
                  <div className="font-serif text-lg font-bold text-elora-goldLight">15,000+</div>
                  <div className="text-[11px] uppercase tracking-wider">Bottles Delivered</div>
                </div>
              </div>

            </div>

            {/* Right Column: Featured Arabian Perfume Bottle Decanter */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Gold Halo Glow Behind Bottle */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#C6A15B]/30 to-[#3B2419]/20 blur-2xl pointer-events-none" />

              {/* Royal Decanter Frame */}
              <div className="relative group p-2 rounded-2xl bg-gradient-to-b from-elora-gold/40 via-elora-gold/10 to-transparent backdrop-blur-md shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] max-w-sm sm:max-w-md bg-[#1B0F0A] border border-elora-gold/40">
                  <img
                    src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85"
                    alt="Royal Oud Perfume Flacon"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-transparent to-transparent opacity-70" />

                  {/* Bottle Float Overlay Badge */}
                  <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-[#1D100A]/90 border border-elora-gold/40 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-elora-gold font-semibold">
                        Signature Flacon
                      </span>
                      <h4 className="font-serif text-base font-bold text-elora-cream">
                        ROYAL OUD
                      </h4>
                      <p className="text-[11px] text-elora-textMuted">Oud • Amber • Saffron</p>
                    </div>
                    <Link
                      to="/product/royal-oud"
                      className="px-3.5 py-2 bg-elora-gold hover:bg-elora-goldLight text-elora-deep rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-gold-sm"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 2. FEATURED COLLECTIONS (MEN / WOMEN / UNISEX) */}
      <section id="collections" className="py-20 lg:py-28 bg-[#180E09] border-b border-elora-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-semibold font-serif">
              Royal Curations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-2 mb-3">
              Explore Our Collections
            </h2>
            <div className="w-16 h-0.5 bg-elora-gold mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-elora-beige/80">
              Each bottle is an ode to Arabian olfactory mastery, formulated for unforgettable moments.
            </p>
          </div>

          {/* 3 Large Visual Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group relative bg-[#22130C] rounded-2xl overflow-hidden border border-elora-gold/30 hover:border-elora-gold transition-all duration-500 hover:shadow-gold-md flex flex-col justify-between"
              >
                {/* Image Container with Luxury Gradient */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#150A06]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E09] via-[#1A0E09]/40 to-transparent" />
                  
                  {/* Subtle Top Accent */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-[#140A07]/80 border border-elora-gold/30 text-elora-goldLight text-[10px] font-bold uppercase tracking-widest rounded backdrop-blur-sm">
                      {cat.id === 'unisex' ? 'Signature Unisex' : `${cat.id}'s Atelier`}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 bg-[#22130C] flex flex-col justify-between flex-1 border-t border-elora-gold/20">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-elora-cream tracking-wide group-hover:text-elora-goldLight transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-elora-gold tracking-widest uppercase mt-1 mb-3 font-medium">
                      {cat.description}
                    </p>
                    <p className="text-xs text-elora-textMuted leading-relaxed mb-4">
                      {cat.heroQuote}
                    </p>

                    {/* Scent note tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cat.notes.slice(0, 4).map((note) => (
                        <span
                          key={note}
                          className="px-2 py-0.5 rounded-full bg-[#180D08] border border-elora-gold/20 text-[10px] text-elora-beige/80"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/shop/${cat.id}`}
                    className="w-full py-3 bg-[#2D180F] hover:bg-elora-gold text-elora-goldLight hover:text-elora-deep border border-elora-gold/40 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-elora-gold"
                  >
                    <span>SHOP COLLECTION</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BEST SELLERS */}
      <section className="py-20 lg:py-28 bg-[#140A07] border-b border-elora-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-semibold font-serif">
                Acclaimed Masterpieces
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-1">
                Best Sellers
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-elora-goldLight hover:text-white transition-colors border-b border-elora-gold/40 pb-0.5"
            >
              <span>View All Fragrances</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of Best Sellers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. BRAND STORY BANNER ("More Than a Fragrance. It's Your Identity.") */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-elora-gold/25 bg-[#1B0F09]">
        <div className="absolute inset-0 bg-[#160D08]/90 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#170C08] via-[#1B0F09]/95 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-elora-gold font-serif">
                <Sparkles className="w-3.5 h-3.5" /> Royal Atelier Heritage
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-elora-cream leading-tight">
                More Than a Fragrance. <br />
                <span className="text-elora-goldLight">It's Your Identity.</span>
              </h2>

              <p className="text-sm sm:text-base text-elora-beige/85 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                At ÉLORA, every fragrance tells a story of elegance, confidence, and individuality. We reject mass production in favor of small-batch perfection, extracting the pure essence of Arabian royalty so your scent precedes and outlives you in memory.
              </p>

              <div className="pt-2 flex justify-center lg:justify-start">
                <Link
                  to="/about"
                  className="px-8 py-3.5 bg-transparent border-2 border-elora-gold text-elora-goldLight hover:bg-elora-gold hover:text-elora-deep font-bold text-xs uppercase tracking-[0.2em] rounded-lg transition-all duration-300 shadow-gold-sm"
                >
                  DISCOVER OUR STORY
                </Link>
              </div>
            </div>

            {/* Right Luxury Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-2.5 rounded-2xl bg-gradient-to-b from-elora-gold/30 to-transparent border border-elora-gold/30 shadow-2xl max-w-md">
                <div className="rounded-xl overflow-hidden aspect-[4/5] bg-[#160D08]">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                    alt="ÉLORA Royal Arabian Elegance"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. NEW ARRIVALS */}
      <section className="py-20 lg:py-28 bg-[#180E09] border-b border-elora-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-semibold font-serif">
                Private Reserve Creations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-1">
                New Arrivals
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-elora-goldLight hover:text-white transition-colors border-b border-elora-gold/40 pb-0.5"
            >
              <span>Explore All Releases</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 6. WHY CHOOSE ÉLORA? */}
      <section className="py-20 lg:py-28 bg-[#140A07] border-b border-elora-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-semibold font-serif">
              Uncompromising Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-2 mb-3">
              Why Choose ÉLORA?
            </h2>
            <div className="w-16 h-0.5 bg-elora-gold mx-auto mb-3" />
            <p className="text-xs sm:text-sm text-elora-beige/80">
              Honoring the golden age of Arabian perfumery through bespoke craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => {
              const icons = [
                <Sparkles key={1} className="w-6 h-6 text-elora-gold" />,
                <Flame key={2} className="w-6 h-6 text-elora-gold" />,
                <Gift key={3} className="w-6 h-6 text-elora-gold" />,
                <ShieldCheck key={4} className="w-6 h-6 text-elora-gold" />
              ];
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-[#1E110B] border border-elora-gold/25 hover:border-elora-gold transition-all duration-300 hover:shadow-gold-sm text-center flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#2A170F] border border-elora-gold/40 flex items-center justify-center mb-4 shadow-sm">
                    {icons[idx]}
                  </div>
                  <h3 className="font-serif text-base font-bold text-elora-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-elora-textMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-[#180E09] border-b border-elora-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-semibold font-serif">
              Words of Adoration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-2 mb-3">
              What Our Customers Say
            </h2>
            <div className="w-16 h-0.5 bg-elora-gold mx-auto mb-3" />
            <p className="text-xs text-elora-textMuted">
              Sample reviews marked as demonstrations until genuine customer reviews are verified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_REVIEWS.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-[#22130C] border border-elora-gold/25 hover:border-elora-gold/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    {rev.isDemo && (
                      <span className="text-[9px] uppercase tracking-wider text-elora-gold/80 px-2 py-0.5 border border-elora-gold/30 rounded bg-[#180D08]">
                        Demo Review
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-sm font-bold text-elora-cream mb-2">
                    “{rev.title}”
                  </h4>
                  <p className="text-xs text-elora-beige/85 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-elora-gold/15 flex items-center gap-3">
                  {rev.avatarUrl && (
                    <img
                      src={rev.avatarUrl}
                      alt={rev.author}
                      className="w-8 h-8 rounded-full object-cover border border-elora-gold/40"
                    />
                  )}
                  <div>
                    <h5 className="text-xs font-bold text-elora-cream">{rev.author}</h5>
                    <span className="text-[10px] text-elora-textMuted flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified Patron
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-elora-goldLight hover:text-white border-b border-elora-gold/40 pb-0.5"
            >
              <span>Read All Verified Customer Experiences & Submit Your Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 8. NEWSLETTER SUBSCRIPTION */}
      <section className="py-20 bg-gradient-to-b from-[#1E110B] to-[#140A07] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <Crown className="w-8 h-8 text-elora-gold mx-auto mb-3 animate-pulse" />
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mb-3">
            Stay in the World of Luxury.
          </h2>
          <p className="text-xs sm:text-sm text-elora-beige/85 max-w-xl mx-auto mb-8 leading-relaxed">
            Subscribe to receive exclusive offers, new arrivals, and fragrance inspiration directly from the ÉLORA royal perfumers.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-[#160D08] border border-elora-gold/40 rounded-xl px-4 py-3 text-xs text-elora-cream placeholder-elora-textMuted/60 focus:outline-none focus:border-elora-gold shadow-inner"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-widest rounded-xl shadow-gold-sm transition-all"
            >
              {isSubscribed ? 'Subscribed' : 'SUBSCRIBE'}
            </button>
          </form>

        </div>
      </section>

    </div>
  );
};
