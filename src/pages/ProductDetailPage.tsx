import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles, 
  Flame, 
  Gift, 
  Clock, 
  Check, 
  Truck, 
  RotateCcw, 
  ChevronRight,
  ZoomIn,
  MessageSquare
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { BottleSize, Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { ProductCard } from '../components/ProductCard';
import { WriteReviewModal } from '../components/WriteReviewModal';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { reviews } = useAuth();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [selectedSize, setSelectedSize] = useState<BottleSize>('50ml');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'desc' | 'reviews' | 'shipping'>('desc');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Scroll to top when product ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedSize('50ml');
    setQuantity(1);
    setActiveImageIndex(0);
  }, [id]);

  const currentSizeOption = product.sizes.find(s => s.size === selectedSize) || product.sizes[0];
  const currentPrice = currentSizeOption.price;
  const originalPrice = currentSizeOption.originalPrice;
  const isFavorited = isInWishlist(product.id);

  // Reviews matching this product
  const productReviews = reviews.filter(r => r.productId === product.id);

  // Related products
  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && (p.category === product.category || p.fragranceFamily === product.fragranceFamily)
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    navigate('/checkout');
  };

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-[#1A0E0A] border-b border-elora-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-elora-textMuted flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-elora-gold transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-elora-gold/50" />
          <Link to="/shop" className="hover:text-elora-gold transition-colors">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 text-elora-gold/50" />
          <Link to={`/shop/${product.category}`} className="capitalize hover:text-elora-gold transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-elora-gold/50" />
          <span className="text-elora-goldLight font-medium truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Gallery (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Main Image Container with zoom styling */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#180D08] border border-elora-gold/30 shadow-2xl group">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140A07]/60 via-transparent to-transparent opacity-60" />

              {/* Wishlist Heart on top right */}
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#180D09]/80 backdrop-blur-md border border-elora-gold/30 flex items-center justify-center text-elora-gold hover:text-white hover:border-elora-gold transition-all"
                aria-label="Wishlist toggle"
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-elora-gold' : ''}`} />
              </button>

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-elora-gold text-elora-deep font-bold text-xs uppercase tracking-widest rounded shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation Row */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-square rounded-xl overflow-hidden bg-[#180D08] border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-elora-gold shadow-gold-sm scale-102'
                      : 'border-elora-gold/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Product Info & Buy Box (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              {/* Category & Family Tagline */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-elora-gold font-serif mb-2">
                <Sparkles className="w-3.5 h-3.5 text-elora-gold" />
                <span>{product.category} Signature • {product.fragranceFamily}</span>
              </div>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-elora-cream tracking-wide">
                {product.name}
              </h1>

              {/* Rating & Reviews Count */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-amber-400/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-elora-goldLight">{product.rating}</span>
                <span className="text-xs text-elora-textMuted underline cursor-pointer" onClick={() => setActiveTab('reviews')}>
                  ({productReviews.length || product.reviewsCount} reviews)
                </span>
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1 ml-auto">
                  <Check className="w-3.5 h-3.5" /> In Stock & Ready to Dispatch
                </span>
              </div>
            </div>

            {/* Dynamic Price Box */}
            <div className="p-4 rounded-xl bg-[#1E110B] border border-elora-gold/25 flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold text-elora-cream">
                ₹{currentPrice.toLocaleString('en-IN')}
              </span>
              {originalPrice && (
                <span className="text-base text-elora-textMuted line-through">
                  ₹{originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {product.discountPercent && (
                <span className="px-2.5 py-1 bg-[#781D1D] text-white text-xs font-semibold rounded">
                  {product.discountPercent}% OFF
                </span>
              )}
              <span className="text-[11px] text-elora-textMuted ml-auto">
                Inclusive of all taxes & free royal gift box
              </span>
            </div>

            {/* Description Snippet */}
            <p className="text-xs sm:text-sm text-elora-beige/85 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Fragrance Notes Icons Breakdown */}
            <div className="p-4 rounded-xl bg-[#1A0E0A] border border-elora-gold/20 space-y-2.5">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-elora-goldLight flex items-center gap-1.5 font-serif">
                <Flame className="w-3.5 h-3.5 text-elora-gold" /> Olfactive Notes Architecture:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-2.5 bg-[#140A07] rounded-lg border border-elora-gold/15">
                  <span className="text-[10px] uppercase tracking-wider text-elora-gold font-bold block mb-1">
                    Top Notes
                  </span>
                  <p className="text-elora-cream leading-tight">{product.notes.top.join(', ')}</p>
                </div>
                <div className="p-2.5 bg-[#140A07] rounded-lg border border-elora-gold/15">
                  <span className="text-[10px] uppercase tracking-wider text-elora-gold font-bold block mb-1">
                    Heart Notes
                  </span>
                  <p className="text-elora-cream leading-tight">{product.notes.heart.join(', ')}</p>
                </div>
                <div className="p-2.5 bg-[#140A07] rounded-lg border border-elora-gold/15">
                  <span className="text-[10px] uppercase tracking-wider text-elora-gold font-bold block mb-1">
                    Base Notes
                  </span>
                  <p className="text-elora-cream leading-tight">{product.notes.base.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-elora-goldLight">
                  Select Available Size:
                </label>
                <span className="text-[11px] text-elora-textMuted">Pure Extrait Concentration</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((s) => (
                  <button
                    key={s.size}
                    onClick={() => setSelectedSize(s.size)}
                    className={`py-3 px-3 rounded-xl border text-center transition-all ${
                      selectedSize === s.size
                        ? 'border-elora-gold bg-elora-gold/20 text-elora-goldLight shadow-gold-sm font-bold'
                        : 'border-elora-gold/25 bg-[#1E110B] text-elora-beige hover:border-elora-gold/60'
                    }`}
                  >
                    <div className="text-sm font-bold">{s.size}</div>
                    <div className="text-xs text-elora-gold font-serif mt-0.5">
                      ₹{s.price.toLocaleString('en-IN')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Actions */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                
                {/* Quantity */}
                <div className="flex items-center border border-elora-gold/30 rounded-xl bg-[#1A0E0A] px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-elora-gold hover:text-white text-base"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-elora-cream">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-elora-gold hover:text-white text-base"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* ADD TO CART Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-1 py-3.5 rounded-xl font-bold tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
                    isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-elora-gold hover:bg-elora-goldLight text-elora-deep shadow-gold-md hover:shadow-gold-lg'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Your Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </>
                  )}
                </button>

                {/* BUY NOW Button */}
                <button
                  onClick={handleBuyNow}
                  className="px-6 py-3.5 bg-[#3B2419] hover:bg-[#4E3022] border border-elora-gold/50 text-elora-goldLight font-bold tracking-widest uppercase text-xs rounded-xl shadow-gold-sm transition-all"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Trust Badges Row */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-elora-gold/20 text-center">
              <div className="p-3 bg-[#1A0E0A] rounded-xl border border-elora-gold/15">
                <Clock className="w-4 h-4 text-elora-gold mx-auto mb-1.5" />
                <span className="text-[11px] font-bold text-elora-cream block">14+ Hours</span>
                <span className="text-[10px] text-elora-textMuted">Royal Longevity</span>
              </div>
              <div className="p-3 bg-[#1A0E0A] rounded-xl border border-elora-gold/15">
                <ShieldCheck className="w-4 h-4 text-elora-gold mx-auto mb-1.5" />
                <span className="text-[11px] font-bold text-elora-cream block">100% Authentic</span>
                <span className="text-[10px] text-elora-textMuted">Artisanal Blends</span>
              </div>
              <div className="p-3 bg-[#1A0E0A] rounded-xl border border-elora-gold/15">
                <Gift className="w-4 h-4 text-elora-gold mx-auto mb-1.5" />
                <span className="text-[11px] font-bold text-elora-cream block">Luxury Box</span>
                <span className="text-[10px] text-elora-textMuted">Signature Gifting</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabbed Section: Description / Reviews / Shipping */}
        <div className="mt-20 border-t border-elora-gold/25 pt-10">
          
          {/* Tab Navigation */}
          <div className="flex border-b border-elora-gold/20 gap-8 justify-center sm:justify-start">
            {[
              { id: 'desc', label: 'Description & Olfactive Story' },
              { id: 'reviews', label: `Reviews (${productReviews.length || product.reviewsCount})` },
              { id: 'shipping', label: 'Shipping & Authentic Guarantee' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 text-xs uppercase tracking-widest font-semibold transition-all relative ${
                  activeTab === tab.id
                    ? 'text-elora-gold'
                    : 'text-elora-beige/70 hover:text-elora-goldLight'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-elora-gold rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'desc' && (
              <div className="space-y-6 max-w-4xl text-xs sm:text-sm text-elora-beige/85 leading-relaxed">
                <p>{product.fullStory || product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-5 rounded-xl bg-[#1A0E0A] border border-elora-gold/20 space-y-2">
                    <h5 className="font-serif text-sm font-bold text-elora-goldLight">Scent Characteristics</h5>
                    <ul className="space-y-1 text-xs text-elora-beige/80">
                      <li>• <strong>Longevity:</strong> {product.characteristics.longevity}</li>
                      <li>• <strong>Sillage:</strong> {product.characteristics.sillage}</li>
                      <li>• <strong>Best Season:</strong> {product.characteristics.season}</li>
                      <li>• <strong>Concentration:</strong> {product.characteristics.concentration}</li>
                    </ul>
                  </div>
                  <div className="p-5 rounded-xl bg-[#1A0E0A] border border-elora-gold/20 space-y-2">
                    <h5 className="font-serif text-sm font-bold text-elora-goldLight">Flacon Craftsmanship</h5>
                    <ul className="space-y-1 text-xs text-elora-beige/80">
                      <li>• <strong>Origin:</strong> {product.specs.origin}</li>
                      <li>• <strong>Bottle:</strong> {product.specs.bottleType}</li>
                      <li>• <strong>Atomizer:</strong> {product.specs.sprayType}</li>
                      <li>• <strong>Preservation:</strong> UV-coated glass protects natural aromatic resins</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {/* Review Header with Overall Rating and Write a Review Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-[#1A0E0A] rounded-2xl border border-elora-gold/25 gap-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <span className="font-serif text-4xl font-bold text-elora-cream">{product.rating}</span>
                      <div className="flex text-amber-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-elora-textMuted mt-0.5 block">Overall Score</span>
                    </div>
                    <div className="h-12 w-[1px] bg-elora-gold/20" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-elora-cream">Patron Reviews</h4>
                      <p className="text-xs text-elora-textMuted">Real fragrance collectors rating projection & packaging.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="px-6 py-2.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-wider rounded-xl shadow-gold-sm transition-all"
                  >
                    Write a Review
                  </button>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {productReviews.length === 0 ? (
                    <div className="p-8 text-center text-xs text-elora-textMuted bg-[#1A0E0A] rounded-xl border border-elora-gold/20">
                      Be the first to leave a review for {product.name}!
                    </div>
                  ) : (
                    productReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="p-5 bg-[#1C0F0A] rounded-xl border border-elora-gold/20 space-y-2.5"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3.5 h-3.5 ${
                                    i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-amber-400/30'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs font-bold text-elora-cream">{rev.author}</span>
                            {rev.isVerified && (
                              <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                                <ShieldCheck className="w-3 h-3" /> Verified Buyer
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-elora-textMuted">{rev.date}</span>
                        </div>
                        <h5 className="font-serif text-sm font-bold text-elora-goldLight">“{rev.title}”</h5>
                        <p className="text-xs text-elora-beige/85 leading-relaxed">{rev.comment}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl text-xs text-elora-beige/85">
                <div className="p-5 rounded-xl bg-[#1A0E0A] border border-elora-gold/20 space-y-2">
                  <h5 className="font-serif text-sm font-bold text-elora-goldLight flex items-center gap-2">
                    <Truck className="w-4 h-4 text-elora-gold" /> Royal Express Shipping
                  </h5>
                  <p>• Complimentary shipping on all orders over ₹1,999.</p>
                  <p>• Orders are dispatched within 24–48 hours from our Mumbai & Dubai distribution hubs.</p>
                  <p>• Estimated delivery: 3 to 5 business days across India.</p>
                  <p>• Secured in shock-absorbent gold presentation boxes with tamper-evident holograms.</p>
                </div>
                <div className="p-5 rounded-xl bg-[#1A0E0A] border border-elora-gold/20 space-y-2">
                  <h5 className="font-serif text-sm font-bold text-elora-goldLight flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-elora-gold" /> Replacement Guarantee
                  </h5>
                  <p>• 7-day hassle-free replacement in case of transit damage or atomizer issues.</p>
                  <p>• Fragrances must remain in their original cellophane wrap for hygiene returns.</p>
                  <p>• Dedicated royal concierge support on WhatsApp & email.</p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* You May Also Like Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-elora-gold/25">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-serif">
                Complementary Aromas
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-elora-cream mt-1">
                You May Also Like
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Review Submission Modal */}
      <WriteReviewModal
        productId={product.id}
        productName={product.name}
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />

    </div>
  );
};
