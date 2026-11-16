import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useQuickView } from '../context/QuickViewContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { openQuickView } = useQuickView();
  const [isAdded, setIsAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, '50ml', 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div className="group relative bg-[#22130C] border border-elora-gold/20 hover:border-elora-gold/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-gold-md flex flex-col justify-between">
      
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.isBestSeller && (
          <span className="bg-gradient-to-r from-[#C6A15B] to-[#9B7C3E] text-elora-deep text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">
            Best Seller
          </span>
        )}
        {product.isNewArrival && (
          <span className="bg-[#3B2419] border border-elora-gold/40 text-elora-goldLight text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-sm">
            New Arrival
          </span>
        )}
        {product.discountPercent && product.discountPercent > 0 && (
          <span className="bg-[#781D1D] text-white text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-sm">
            {product.discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleToggleWishlist}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#180D09]/80 backdrop-blur-sm border border-elora-gold/30 flex items-center justify-center text-elora-gold hover:text-white hover:border-elora-gold transition-all duration-200"
        aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isFavorited ? 'fill-elora-gold text-elora-gold' : 'text-elora-beige'
          }`}
        />
      </button>

      {/* Product Image with Hover Overlay */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-[#180D08]">
        {!imageError ? (
          <img
            src={product.images[0]}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#1A0E0A] p-4 text-center">
            <span className="text-4xl text-elora-gold mb-2 font-serif">É</span>
            <span className="text-xs text-elora-goldLight uppercase tracking-widest">{product.name}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#22130C] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Quick View hover button overlay */}
        <div className="absolute inset-x-0 bottom-3 px-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={handleQuickView}
            className="w-full py-2 bg-[#1A0E0A]/90 hover:bg-elora-gold hover:text-elora-deep text-elora-goldLight border border-elora-gold/50 rounded-md text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 backdrop-blur-sm transition-all"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        </div>
      </Link>

      {/* Product Info Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Fragrance Family */}
          <div className="flex items-center justify-between text-[11px] text-elora-textMuted uppercase tracking-wider mb-1">
            <span className="capitalize">{product.category} • {product.fragranceFamily}</span>
            <span className="text-[10px] text-elora-gold/80 font-mono">50ml</span>
          </div>

          {/* Product Name */}
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-serif text-base font-bold text-elora-cream group-hover:text-elora-goldLight transition-colors tracking-wide truncate">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1.5 mb-2.5">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-amber-400/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-elora-goldLight">
              {product.rating}
            </span>
            <span className="text-[10px] text-elora-textMuted/70">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Price & Add to Cart row */}
        <div className="pt-2 border-t border-elora-gold/15 flex items-center justify-between mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-base font-bold text-elora-cream">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-elora-textMuted/70 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-1 ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-elora-gold hover:bg-elora-goldLight text-elora-deep shadow-gold-sm hover:shadow-gold-md'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Add
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
