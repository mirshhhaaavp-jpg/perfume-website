import React, { useState } from 'react';
import { Star, ThumbsUp, ShieldCheck, MessageSquare, Plus, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { WriteReviewModal } from '../components/WriteReviewModal';
import { PRODUCTS } from '../data/products';

export const ReviewsPage: React.FC = () => {
  const { reviews, likeReview } = useAuth();
  const [ratingFilter, setRatingFilter] = useState<number | 'all'>('all');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  // Overall average
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1)).toFixed(1);

  const filteredReviews = ratingFilter === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === ratingFilter);

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Header */}
      <section className="py-16 bg-[#1A0E0A] border-b border-elora-gold/25 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">
            Client Testimonials & Impressions
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elora-cream mt-2 mb-3">
            Customer Reviews
          </h1>
          <div className="w-16 h-0.5 bg-elora-gold mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-elora-beige/85 max-w-xl mx-auto">
            Honest reflections from fragrance lovers. Sample testimonials are clearly marked as demonstrations until real patron submissions are processed.
          </p>
        </div>
      </section>

      {/* Main Reviews Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Rating Breakdown Summary Box */}
        <div className="p-8 rounded-3xl bg-[#1E110B] border border-elora-gold/30 shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6 text-center md:text-left">
            <div>
              <span className="font-serif text-5xl font-bold text-elora-cream">{avgRating}</span>
              <div className="flex text-amber-400 mt-1 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-elora-textMuted mt-1 block">Based on {reviews.length} reviews</span>
            </div>
            
            <div className="h-16 w-0.5 bg-elora-gold/20 hidden sm:block" />

            <div className="hidden sm:block text-xs space-y-1 text-elora-beige/80">
              <p>• 98% of patrons recommend our royal oud formulations</p>
              <p>• Verified longevity of 12 to 16+ hours</p>
              <p>• 100% authentic pure perfume extract</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Filter buttons */}
            <div className="flex gap-1.5 bg-[#140A07] p-1.5 rounded-xl border border-elora-gold/25">
              <button
                onClick={() => setRatingFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  ratingFilter === 'all' ? 'bg-elora-gold text-elora-deep' : 'text-elora-beige'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setRatingFilter(5)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  ratingFilter === 5 ? 'bg-elora-gold text-elora-deep' : 'text-elora-beige'
                }`}
              >
                5 ★
              </button>
              <button
                onClick={() => setRatingFilter(4)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  ratingFilter === 4 ? 'bg-elora-gold text-elora-deep' : 'text-elora-beige'
                }`}
              >
                4 ★
              </button>
            </div>

            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="px-6 py-2.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-wider rounded-xl shadow-gold-sm transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Write a Review
            </button>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => {
            const productMatch = PRODUCTS.find(p => p.id === rev.productId);
            return (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-[#1C0F0A] border border-elora-gold/25 hover:border-elora-gold/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-amber-400/30'
                          }`}
                        />
                      ))}
                    </div>

                    {rev.isDemo ? (
                      <span className="text-[10px] uppercase tracking-wider text-elora-gold/80 px-2.5 py-0.5 border border-elora-gold/30 rounded-full bg-[#140A07]">
                        Demonstration Review
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 px-2.5 py-0.5 border border-emerald-500/30 rounded-full bg-emerald-950/40 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Verified Customer
                      </span>
                    )}
                  </div>

                  {productMatch && (
                    <span className="text-[11px] font-serif font-bold text-elora-gold block">
                      Reviewed: {productMatch.name}
                    </span>
                  )}

                  <h4 className="font-serif text-base font-bold text-elora-cream">
                    “{rev.title}”
                  </h4>

                  <p className="text-xs text-elora-beige/85 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-elora-gold/15 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    {rev.avatarUrl && (
                      <img
                        src={rev.avatarUrl}
                        alt=""
                        className="w-7 h-7 rounded-full object-cover border border-elora-gold/40"
                      />
                    )}
                    <div>
                      <span className="font-bold text-elora-cream block">{rev.author}</span>
                      <span className="text-[10px] text-elora-textMuted">{rev.date}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => likeReview(rev.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs transition-colors ${
                      rev.userLiked
                        ? 'border-elora-gold bg-elora-gold/20 text-elora-gold'
                        : 'border-elora-gold/20 text-elora-textMuted hover:text-elora-cream'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful ({rev.likes})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <WriteReviewModal
        productId="royal-oud"
        productName="Royal Oud"
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
      />

    </div>
  );
};
