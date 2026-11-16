import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product: any) => {
    addToCart(product, '50ml', 1);
    removeFromWishlist(product.id);
  };

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Header */}
      <section className="py-12 bg-[#1A0E0A] border-b border-elora-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-serif">
              Saved Royal Selections
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-0.5">
              Your Wishlist ({wishlist.length})
            </h1>
          </div>
          {wishlist.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-xs text-elora-textMuted hover:text-rose-400 underline transition-colors"
            >
              Clear Entire Wishlist
            </button>
          )}
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {wishlist.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-16 px-6 bg-[#1A0E0A] rounded-2xl border border-elora-gold/25 space-y-5">
            <div className="w-20 h-20 rounded-full border border-elora-gold/30 flex items-center justify-center bg-[#22130C] mx-auto">
              <Heart className="w-10 h-10 text-elora-gold/60" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-elora-cream">Your Wishlist is Empty</h2>
              <p className="text-xs text-elora-textMuted mt-1.5">
                Save your favorite Arabian perfumes to revisit or add directly to your bag anytime.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-block px-8 py-3 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-widest rounded-xl shadow-gold-sm transition-all"
            >
              Explore Royal Perfumes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="group relative bg-[#22130C] border border-elora-gold/20 hover:border-elora-gold/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-gold-md flex flex-col justify-between"
              >
                {/* Remove button */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#180D09]/80 backdrop-blur-sm border border-elora-gold/30 flex items-center justify-center text-rose-400 hover:text-rose-200 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {/* Product Image */}
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-[#180D08]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22130C] via-transparent to-transparent opacity-60" />
                </Link>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-elora-gold block mb-1">
                      {product.category} • {product.fragranceFamily}
                    </span>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-base font-bold text-elora-cream group-hover:text-elora-goldLight transition-colors truncate">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs font-serif font-bold text-elora-cream mt-1.5">
                      ₹{product.price.toLocaleString('en-IN')} (50ml)
                    </p>
                  </div>

                  {/* Move to Cart CTA */}
                  <div className="pt-4 border-t border-elora-gold/15 mt-3">
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="w-full py-2.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-wider rounded-lg shadow-gold-sm transition-all flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Move to Bag
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
