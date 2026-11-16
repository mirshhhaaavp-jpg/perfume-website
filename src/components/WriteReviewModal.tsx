import React, { useState } from 'react';
import { X, Star, Upload, Sparkles, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

interface WriteReviewModalProps {
  productId: string;
  productName: string;
  isOpen: boolean;
  onClose: () => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  productId,
  productName,
  isOpen,
  onClose,
}) => {
  const { addReview, user } = useAuth();
  const { showToast } = useToast();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState(user?.fullName || '');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [photoSelected, setPhotoSelected] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !title.trim() || !comment.trim()) {
      showToast('Please complete all required fields.', 'error');
      return;
    }

    addReview({
      productId,
      author: author.trim(),
      rating,
      title: title.trim(),
      comment: comment.trim(),
      isVerified: true,
      isDemo: false,
      avatarUrl: photoSelected
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
        : undefined,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative bg-[#1E110B] border border-elora-gold/40 rounded-2xl max-w-lg w-full p-6 text-elora-cream shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-elora-beige hover:text-white p-1"
          aria-label="Close review modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <span className="text-[10px] uppercase tracking-widest text-elora-gold font-semibold">
            Verified Fragrance Experience
          </span>
          <h3 className="font-serif text-xl font-bold text-elora-cream mt-0.5">
            Review {productName}
          </h3>
          <p className="text-xs text-elora-textMuted mt-1">
            Share your experience of the scent notes, longevity, and royal presentation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Star Rating Selector */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1.5">
              Overall Rating:
            </label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  className="p-1 focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-6 h-6 transition-colors ${
                      star <= (hoverRating || rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-amber-400/30'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-semibold text-elora-gold ml-2">
                {rating === 5 ? 'Royal Perfection (5/5)' : `${rating} Stars`}
              </span>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Fatima Al-Mansoor"
              className="w-full bg-[#160D08] border border-elora-gold/30 rounded-lg px-3.5 py-2.5 text-xs text-elora-cream placeholder-elora-textMuted/50 focus:outline-none focus:border-elora-gold"
            />
          </div>

          {/* Headline Title */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
              Review Headline *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Majestic Oud note with incredible 14-hour longevity"
              className="w-full bg-[#160D08] border border-elora-gold/30 rounded-lg px-3.5 py-2.5 text-xs text-elora-cream placeholder-elora-textMuted/50 focus:outline-none focus:border-elora-gold"
            />
          </div>

          {/* Detailed Comment */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
              Detailed Feedback *
            </label>
            <textarea
              required
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Describe the fragrance projection, how the top notes blend into the base notes, and your overall thoughts..."
              className="w-full bg-[#160D08] border border-elora-gold/30 rounded-lg px-3.5 py-2.5 text-xs text-elora-cream placeholder-elora-textMuted/50 focus:outline-none focus:border-elora-gold resize-none"
            />
          </div>

          {/* Customer Photo Upload Option */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
              Customer Photo (Optional)
            </label>
            <div
              onClick={() => setPhotoSelected(!photoSelected)}
              className={`p-3 rounded-lg border border-dashed flex items-center justify-between cursor-pointer transition-colors ${
                photoSelected
                  ? 'border-elora-gold bg-elora-gold/15 text-elora-goldLight'
                  : 'border-elora-gold/30 bg-[#160D08] text-elora-textMuted hover:border-elora-gold/60'
              }`}
            >
              <div className="flex items-center gap-2 text-xs">
                <Upload className="w-4 h-4 text-elora-gold" />
                <span>{photoSelected ? 'Photo attached: perfume_flacon.jpg' : 'Click to attach photo of your perfume bottle'}</span>
              </div>
              {photoSelected && <span className="text-[10px] text-emerald-400 font-bold">Attached</span>}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[10px] text-elora-textMuted flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-elora-gold" /> Verified Buyer Review
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-elora-gold/30 text-elora-beige hover:text-white rounded-lg text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-wider rounded-lg shadow-gold-sm transition-all"
              >
                Publish Review
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
