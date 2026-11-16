import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Star, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const filtered = PRODUCTS.filter(p => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchCategory = p.category.toLowerCase().includes(q);
      const matchFamily = p.fragranceFamily.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchNotes = [
        ...p.notes.top,
        ...p.notes.heart,
        ...p.notes.base
      ].some(note => note.toLowerCase().includes(q));

      return matchName || matchCategory || matchFamily || matchDesc || matchNotes;
    });

    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  const popularSearches = ['Royal Oud', 'Élora Noir', 'Rose Éclat', 'Amber', 'Woody', 'Saffron', 'Men', 'Women'];

  const handleSelectProduct = (productId: string) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-fadeIn">
      <div className="relative bg-[#1E110B] border border-elora-gold/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl text-elora-cream">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-elora-gold/25 flex items-center gap-3 bg-[#170C08]">
          <Search className="w-5 h-5 text-elora-gold" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search perfumes, notes (e.g. Oud, Saffron, Rose), or collection..."
            className="flex-1 bg-transparent text-sm sm:text-base text-elora-cream placeholder-elora-textMuted/60 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-elora-textMuted hover:text-white px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-elora-beige hover:text-white hover:bg-white/10"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-5 py-3 bg-[#150A06] border-b border-elora-gold/15 flex items-center gap-2 overflow-x-auto text-xs text-elora-textMuted">
          <span className="flex-shrink-0 text-elora-gold flex items-center gap-1 font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Trending:
          </span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-2.5 py-1 rounded-full bg-[#24130C] border border-elora-gold/25 hover:border-elora-gold text-elora-goldLight text-[11px] whitespace-nowrap transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-5">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-elora-textMuted space-y-2">
              <p>Type above to discover your royal signature scent.</p>
              <p className="text-[11px] text-elora-gold/80">Try searching: "Oud", "Saffron", "Vanilla", or "Rose"</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-elora-textMuted">
              <p className="text-sm font-serif text-elora-cream mb-1">No fragrances found for "{query}"</p>
              <p>Try searching for "Oud", "Amber", or "Men" to explore our collection.</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-elora-gold font-semibold mb-2">
                Found {results.length} Royal Fragrance{results.length > 1 ? 's' : ''}:
              </div>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product.id)}
                  className="p-3 bg-[#24130C] border border-elora-gold/20 hover:border-elora-gold/60 rounded-xl flex items-center gap-3.5 cursor-pointer transition-all hover:bg-[#2B180F] group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-16 rounded-lg object-cover bg-[#160D08] border border-elora-gold/20 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-elora-gold font-medium">
                      {product.category} • {product.fragranceFamily}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-elora-cream group-hover:text-elora-goldLight truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-elora-textMuted truncate">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-serif text-sm font-bold text-elora-cream block">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-elora-goldLight flex items-center justify-end gap-1 mt-0.5">
                      View <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
