import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { BottleSize } from '../types';
import { useQuickView } from '../context/QuickViewContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export const QuickViewModal: React.FC = () => {
  const { product, isOpen, closeQuickView } = useQuickView();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState<BottleSize>('50ml');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize('50ml');
      setQuantity(1);
      setActiveImageIndex(0);
      setIsAdded(false);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const currentSizeOption = product.sizes.find(s => s.size === selectedSize) || product.sizes[0];
  const currentPrice = currentSizeOption.price;
  const originalPrice = currentSizeOption.originalPrice;
  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      closeQuickView();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-[#1E110B] border border-elora-gold/40 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl text-elora-cream"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-elora-gold/30 text-elora-beige hover:text-white hover:border-elora-gold flex items-center justify-center transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image Gallery */}
          <div className="p-6 bg-[#160D08] flex flex-col justify-between">
            <div className="aspect-square rounded-xl overflow-hidden bg-[#1A0E0A] border border-elora-gold/20 relative">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <span className="absolute top-3 left-3 bg-[#1A0E0A]/90 border border-elora-gold/40 text-elora-goldLight text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                {product.category}
              </span>
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-elora-gold scale-105 shadow-gold-sm'
                        : 'border-elora-gold/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div>
              <span className="text-xs uppercase tracking-widest text-elora-gold font-medium">
                {product.category} Collection • {product.fragranceFamily}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-elora-cream mt-1 mb-2">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-amber-400/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-elora-goldLight">{product.rating}</span>
                <span className="text-xs text-elora-textMuted">({product.reviewsCount} verified reviews)</span>
              </div>

              {/* Dynamic Price */}
              <div className="flex items-baseline gap-3 pb-3 border-b border-elora-gold/15">
                <span className="font-serif text-2xl font-bold text-elora-cream">
                  ₹{currentPrice.toLocaleString('en-IN')}
                </span>
                {originalPrice && (
                  <span className="text-sm text-elora-textMuted line-through">
                    ₹{originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="text-xs text-emerald-400 font-semibold">
                    Save {product.discountPercent}%
                  </span>
                )}
              </div>

              {/* Description snippet */}
              <p className="text-xs text-elora-beige/80 leading-relaxed my-3 line-clamp-3">
                {product.description}
              </p>

              {/* Fragrance Notes Highlights */}
              <div className="bg-[#170C08] p-3 rounded-lg border border-elora-gold/20 text-[11px] space-y-1 mb-4">
                <div className="flex gap-2">
                  <span className="text-elora-gold font-semibold uppercase tracking-wider w-16">Top:</span>
                  <span className="text-elora-cream">{product.notes.top.join(', ')}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-elora-gold font-semibold uppercase tracking-wider w-16">Heart:</span>
                  <span className="text-elora-cream">{product.notes.heart.join(', ')}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-elora-gold font-semibold uppercase tracking-wider w-16">Base:</span>
                  <span className="text-elora-cream">{product.notes.base.join(', ')}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-elora-goldLight mb-2">
                  Select Flacon Size:
                </label>
                <div className="flex gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s.size}
                      onClick={() => setSelectedSize(s.size)}
                      className={`flex-1 py-2 px-3 rounded-lg border text-xs font-semibold tracking-wider transition-all ${
                        selectedSize === s.size
                          ? 'border-elora-gold bg-elora-gold/20 text-elora-goldLight shadow-gold-sm'
                          : 'border-elora-gold/25 bg-[#170C08] text-elora-beige hover:border-elora-gold/60'
                      }`}
                    >
                      {s.size}
                      <span className="block text-[10px] font-normal text-elora-textMuted mt-0.5">
                        ₹{s.price.toLocaleString('en-IN')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center border border-elora-gold/30 rounded-lg bg-[#160D08]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-elora-gold hover:text-white transition-colors text-sm"
                  >
                    -
                  </button>
                  <span className="px-3 py-1.5 text-xs font-semibold text-elora-cream">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-elora-gold hover:text-white transition-colors text-sm"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-2.5 rounded-lg border transition-colors flex items-center justify-center ${
                    isFavorited
                      ? 'border-elora-gold bg-elora-gold/20 text-elora-gold'
                      : 'border-elora-gold/30 bg-[#160D08] text-elora-beige hover:text-elora-gold'
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-elora-gold' : ''}`} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-3 rounded-xl font-semibold tracking-widest uppercase text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-gold-sm ${
                  isAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-elora-gold hover:bg-elora-goldLight text-elora-deep hover:shadow-gold-md'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Your Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Cart • ₹{(currentPrice * quantity).toLocaleString('en-IN')}
                  </>
                )}
              </button>

              <Link
                to={`/product/${product.id}`}
                onClick={closeQuickView}
                className="block text-center text-xs tracking-wider uppercase text-elora-goldLight hover:text-white py-1 transition-colors"
              >
                View Full Product Specifications & Details →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
