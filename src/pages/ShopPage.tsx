import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, ArrowUpDown, X, Check, Sparkles, ChevronDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Category, FragranceFamily, BottleSize } from '../types';

export const ShopPage: React.FC = () => {
  const { categoryParam } = useParams<{ categoryParam?: string }>();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const [selectedFamily, setSelectedFamily] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync category param from URL
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam.toLowerCase());
    } else {
      setSelectedCategory('all');
    }
  }, [categoryParam]);

  // Available Fragrance Families
  const fragranceFamilies: FragranceFamily[] = [
    'Oud', 'Woody', 'Amber', 'Floral', 'Vanilla', 'Musky', 'Oriental', 'Spicy', 'Citrus'
  ];

  // Price ranges in INR
  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹1,300', value: 'under-1300' },
    { label: '₹1,300 - ₹1,500', value: '1300-1500' },
    { label: '₹1,500 - ₹1,800', value: '1500-1800' },
    { label: 'Above ₹1,800', value: 'above-1800' },
  ];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Fragrance Family Filter
      if (selectedFamily !== 'all' && product.fragranceFamily !== selectedFamily) {
        return false;
      }

      // Price Range Filter
      if (selectedPriceRange !== 'all') {
        if (selectedPriceRange === 'under-1300' && product.price >= 1300) return false;
        if (selectedPriceRange === '1300-1500' && (product.price < 1300 || product.price > 1500)) return false;
        if (selectedPriceRange === '1500-1800' && (product.price < 1500 || product.price > 1800)) return false;
        if (selectedPriceRange === 'above-1800' && product.price <= 1800) return false;
      }

      // Size Filter
      if (selectedSize !== 'all') {
        const hasSize = product.sizes.some(s => s.size === selectedSize && s.inStock);
        if (!hasSize) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      if (sortBy === 'bestseller') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0; // default featured
    });
  }, [selectedCategory, selectedFamily, selectedPriceRange, selectedSize, sortBy]);

  const activeCategoryInfo = CATEGORIES.find(c => c.id === selectedCategory);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedFamily('all');
    setSelectedPriceRange('all');
    setSelectedSize('all');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedFamily !== 'all' || selectedPriceRange !== 'all' || selectedSize !== 'all';

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Category Banner / Header */}
      <section className="relative py-16 sm:py-20 bg-[#1C0F0A] border-b border-elora-gold/25 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
          style={{
            backgroundImage: `url('${activeCategoryInfo ? activeCategoryInfo.image : 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1600&q=80'}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140A07] via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">
            {activeCategoryInfo ? activeCategoryInfo.name : 'Exclusive Arabian Fragrances'}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elora-cream mt-2 mb-3">
            {activeCategoryInfo ? activeCategoryInfo.tagline : 'Explore Our Fragrance Collection'}
          </h1>
          <p className="text-xs sm:text-sm text-elora-beige/80 max-w-xl mx-auto">
            {activeCategoryInfo 
              ? activeCategoryInfo.heroQuote 
              : 'Find your perfect scent among hand-crafted royal oud, velvety florals, warm amber, and intoxicating spices.'}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Top Control Bar: Active filter indicators, Mobile Filter Trigger, Sort Select */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b border-elora-gold/20 gap-4">
          
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#22130C] border border-elora-gold/40 text-elora-goldLight rounded-lg text-xs font-semibold uppercase tracking-wider"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>

            <span className="text-xs text-elora-textMuted">
              Showing <strong className="text-elora-cream font-bold">{filteredProducts.length}</strong> of {PRODUCTS.length} Fragrances
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-elora-gold hover:text-white underline hidden sm:inline"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <span className="text-xs text-elora-textMuted uppercase tracking-wider flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-elora-gold" /> Sort By:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#22130C] border border-elora-gold/30 rounded-lg px-3 py-1.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold appearance-none pr-8 cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="bestseller">Best Selling</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-elora-gold absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Layout: Sidebar Filters (Desktop) + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* DESKTOP SIDEBAR FILTERS */}
          <aside className="hidden lg:block space-y-6 bg-[#1A0E0A] p-6 rounded-2xl border border-elora-gold/25 h-fit sticky top-28">
            
            <div className="flex items-center justify-between pb-3 border-b border-elora-gold/20">
              <h3 className="font-serif text-base font-bold text-elora-cream flex items-center gap-2">
                <Filter className="w-4 h-4 text-elora-gold" /> Filter Collection
              </h3>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-elora-gold hover:text-white underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-elora-goldLight mb-2.5">
                Categories
              </h4>
              <div className="space-y-1.5 text-xs">
                {[
                  { id: 'all', label: 'All Fragrances', count: PRODUCTS.length },
                  { id: 'men', label: "Men's Collection", count: PRODUCTS.filter(p => p.category === 'men').length },
                  { id: 'women', label: "Women's Collection", count: PRODUCTS.filter(p => p.category === 'women').length },
                  { id: 'unisex', label: 'Unisex Signature', count: PRODUCTS.filter(p => p.category === 'unisex').length },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-left ${
                      selectedCategory === cat.id
                        ? 'bg-elora-gold/20 text-elora-goldLight font-bold border border-elora-gold/40'
                        : 'text-elora-beige/80 hover:bg-[#24130C] hover:text-elora-cream'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[11px] text-elora-textMuted">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Fragrance Family Filter */}
            <div className="pt-4 border-t border-elora-gold/15">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-elora-goldLight mb-2.5">
                Fragrance Family
              </h4>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedFamily('all')}
                  className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                    selectedFamily === 'all'
                      ? 'bg-elora-gold text-elora-deep font-bold'
                      : 'bg-[#24130C] border border-elora-gold/25 text-elora-beige/80 hover:border-elora-gold'
                  }`}
                >
                  All
                </button>
                {fragranceFamilies.map((fam) => (
                  <button
                    key={fam}
                    onClick={() => setSelectedFamily(fam)}
                    className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                      selectedFamily === fam
                        ? 'bg-elora-gold text-elora-deep font-bold'
                        : 'bg-[#24130C] border border-elora-gold/25 text-elora-beige/80 hover:border-elora-gold'
                    }`}
                  >
                    {fam}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="pt-4 border-t border-elora-gold/15">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-elora-goldLight mb-2.5">
                Price in INR (₹)
              </h4>
              <div className="space-y-1.5 text-xs">
                {priceRanges.map((range) => (
                  <label
                    key={range.value}
                    className="flex items-center gap-2 cursor-pointer text-elora-beige/80 hover:text-elora-cream py-1"
                  >
                    <input
                      type="radio"
                      name="priceRange"
                      checked={selectedPriceRange === range.value}
                      onChange={() => setSelectedPriceRange(range.value)}
                      className="accent-[#C6A15B] cursor-pointer"
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Flacon Size Filter */}
            <div className="pt-4 border-t border-elora-gold/15">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-elora-goldLight mb-2.5">
                Flacon Size
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {['all', '30ml', '50ml', '100ml'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-1.5 rounded-lg border text-xs font-semibold uppercase tracking-wider transition-all ${
                      selectedSize === s
                        ? 'bg-elora-gold text-elora-deep border-elora-gold'
                        : 'bg-[#24130C] border-elora-gold/25 text-elora-beige hover:border-elora-gold'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* PRODUCT GRID */}
          <main className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#1A0E0A] border border-elora-gold/20 rounded-2xl p-12 text-center space-y-4">
                <Sparkles className="w-10 h-10 text-elora-gold mx-auto" />
                <h3 className="font-serif text-xl font-bold text-elora-cream">No Fragrances Match Your Filter</h3>
                <p className="text-xs text-elora-textMuted max-w-sm mx-auto">
                  Try clearing some of your filters or browse through our complete collection.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-widest rounded-lg shadow-gold-sm transition-all"
                >
                  View All Perfumes
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>

        </div>

      </div>

      {/* MOBILE FILTER MODAL DRAWER */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm lg:hidden flex justify-end">
          <div className="w-full max-w-xs bg-[#1E110B] h-full p-6 text-elora-cream overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-elora-gold/25">
                <h3 className="font-serif text-lg font-bold">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)} aria-label="Close filters">
                  <X className="w-5 h-5 text-elora-beige" />
                </button>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-elora-goldLight mb-2">Category</h4>
                <div className="space-y-1 text-xs">
                  {['all', 'men', 'women', 'unisex'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left py-2 px-3 rounded capitalize ${
                        selectedCategory === cat ? 'bg-elora-gold text-elora-deep font-bold' : 'text-elora-beige'
                      }`}
                    >
                      {cat === 'all' ? 'All Perfumes' : `${cat}'s Collection`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Families */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-elora-goldLight mb-2">Fragrance Family</h4>
                <div className="flex flex-wrap gap-1">
                  {['all', ...fragranceFamilies].map((fam) => (
                    <button
                      key={fam}
                      onClick={() => setSelectedFamily(fam)}
                      className={`px-2.5 py-1 text-xs rounded ${
                        selectedFamily === fam ? 'bg-elora-gold text-elora-deep font-bold' : 'bg-[#140A07] text-elora-beige'
                      }`}
                    >
                      {fam}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-elora-goldLight mb-2">Price Range</h4>
                <div className="space-y-1 text-xs">
                  {priceRanges.map((r) => (
                    <label key={r.value} className="flex items-center gap-2 py-1">
                      <input
                        type="radio"
                        name="mobPrice"
                        checked={selectedPriceRange === r.value}
                        onChange={() => setSelectedPriceRange(r.value)}
                        className="accent-[#C6A15B]"
                      />
                      <span>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-elora-gold/20 flex gap-2">
              <button
                onClick={resetFilters}
                className="flex-1 py-2.5 border border-elora-gold/40 text-xs text-elora-beige rounded-lg"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2.5 bg-elora-gold text-elora-deep font-bold text-xs uppercase tracking-wider rounded-lg"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
