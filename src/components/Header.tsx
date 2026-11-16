import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User as UserIcon, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { totalItemsCount, openCart } = useCart();
  const { totalWishlistCount } = useWishlist();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Men', path: '/shop/men' },
    { label: 'Women', path: '/shop/women' },
    { label: 'Unisex', path: '/shop/unisex' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Promotional Announcement Bar */}
      <div className="bg-[#170C08] border-b border-elora-gold/20 text-xs py-2 px-4 text-center tracking-widest uppercase text-elora-goldLight flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-elora-gold animate-pulse hidden sm:inline" />
        <span>Discover Luxury Arabian Fragrances – Shop Your Signature Scent</span>
        <Sparkles className="w-3.5 h-3.5 text-elora-gold animate-pulse hidden sm:inline" />
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1C0F0A]/95 backdrop-blur-md shadow-dark-luxury border-b border-elora-gold/30 py-3.5'
            : 'bg-[#24150F] border-b border-elora-gold/20 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-elora-beige hover:text-elora-gold p-2 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <Link to="/" className="flex flex-col items-center group text-center">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-elora-cream font-bold group-hover:text-elora-goldLight transition-colors">
              ÉLORA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-elora-gold font-medium uppercase -mt-0.5">
              Arabian Perfumes
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-xs uppercase tracking-widest font-medium py-1 transition-all duration-200 ${
                    active
                      ? 'text-elora-gold font-semibold'
                      : 'text-elora-beige hover:text-elora-goldLight'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-elora-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Header Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="text-elora-beige hover:text-elora-gold p-1.5 transition-colors focus:outline-none"
              aria-label="Search fragrances"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Link with Badge */}
            <Link
              to="/wishlist"
              className="relative text-elora-beige hover:text-elora-gold p-1.5 transition-colors"
              aria-label={`Wishlist with ${totalWishlistCount} items`}
            >
              <Heart className="w-5 h-5" />
              {totalWishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-elora-gold text-elora-deep text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-gold-sm">
                  {totalWishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon with Drawer Opener */}
            <button
              onClick={openCart}
              className="relative text-elora-beige hover:text-elora-gold p-1.5 transition-colors focus:outline-none"
              aria-label={`Shopping bag with ${totalItemsCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-elora-gold text-elora-deep text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-gold-sm">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* User Account Link */}
            <Link
              to="/account"
              className="text-elora-beige hover:text-elora-gold p-1.5 transition-colors hidden sm:flex items-center gap-1.5"
              aria-label="User Account"
            >
              <UserIcon className="w-5 h-5" />
              {user && (
                <span className="text-[11px] font-medium text-elora-goldLight truncate max-w-[80px]">
                  {user.fullName.split(' ')[0]}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#1A0E0A]/98 border-b border-elora-gold/30 shadow-2xl backdrop-blur-lg px-6 py-6 transition-all animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-widest uppercase py-2 border-b border-elora-border/20 ${
                    isActive(link.path)
                      ? 'text-elora-gold font-semibold'
                      : 'text-elora-beige hover:text-elora-goldLight'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <Link
                  to="/account"
                  className="flex items-center gap-2 text-sm uppercase tracking-wider text-elora-gold"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>{user ? `Account (${user.fullName})` : 'Sign In / Account'}</span>
                </Link>
                <Link
                  to="/track-order"
                  className="text-xs tracking-wider uppercase text-elora-textMuted hover:text-elora-gold"
                >
                  Track Order
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
