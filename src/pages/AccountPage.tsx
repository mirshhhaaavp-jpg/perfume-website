import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, MapPin, LogOut, Crown, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export const AccountPage: React.FC = () => {
  const { user, login, register, logout, orders } = useAuth();
  const { showToast } = useToast();

  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      showToast('Please provide a valid email.', 'error');
      return;
    }

    if (isLoginTab) {
      login(email, fullName || email.split('@')[0]);
    } else {
      if (!fullName.trim()) {
        showToast('Please enter your full name.', 'error');
        return;
      }
      register(email, fullName, phone);
    }
  };

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Header Banner */}
      <section className="py-12 bg-[#1A0E0A] border-b border-elora-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.25em] text-elora-gold font-serif">
            Client Portal
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-0.5">
            {user ? `Welcome, ${user.fullName}` : 'ÉLORA Royal Account'}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {user ? (
          /* LOGGED IN VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Sidebar Profile Card (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-[#1E110B] border border-elora-gold/30 shadow-xl text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#2A170F] border-2 border-elora-gold flex items-center justify-center text-elora-gold mx-auto text-2xl font-serif font-bold">
                  {user.fullName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-elora-cream">{user.fullName}</h3>
                  <p className="text-xs text-elora-textMuted">{user.email}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-elora-gold/15 border border-elora-gold/40 text-elora-goldLight text-[11px] font-semibold">
                  <Crown className="w-3.5 h-3.5 text-elora-gold" /> Gold Tier Royal Patron
                </div>
                <div className="pt-4 border-t border-elora-gold/20">
                  <button
                    onClick={logout}
                    className="w-full py-2.5 bg-[#140A07] border border-elora-gold/30 hover:border-rose-400 text-elora-beige hover:text-rose-300 text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              </div>
            </div>

            {/* Orders & Saved Addresses (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Order History */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#1A0E0A] border border-elora-gold/25 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-elora-gold/20">
                  <h3 className="font-serif text-lg font-bold text-elora-cream flex items-center gap-2">
                    <Package className="w-5 h-5 text-elora-gold" /> Order History ({orders.length})
                  </h3>
                  <Link to="/shop" className="text-xs text-elora-gold hover:underline">
                    Shop More Scents
                  </Link>
                </div>

                {orders.length === 0 ? (
                  <p className="text-xs text-elora-textMuted py-4">You have not placed any orders yet.</p>
                ) : (
                  <div className="space-y-4">
                    {orders.map((ord) => (
                      <div
                        key={ord.id}
                        className="p-5 rounded-xl bg-[#22130C] border border-elora-gold/20 space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <div>
                            <span className="font-serif text-sm font-bold text-elora-cream">{ord.id}</span>
                            <span className="text-elora-textMuted ml-3">
                              Placed on {new Date(ord.createdAt).toLocaleDateString('en-GB')}
                            </span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-semibold text-[11px] w-fit">
                            {ord.status}
                          </span>
                        </div>

                        {/* Items in order */}
                        <div className="divide-y divide-elora-gold/10">
                          {ord.items.map((it, idx) => (
                            <div key={idx} className="py-2 flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2.5">
                                <img src={it.image} alt="" className="w-9 h-10 rounded object-cover" />
                                <span>{it.productName} ({it.size}) × {it.quantity}</span>
                              </div>
                              <span className="font-serif font-bold">₹{(it.price * it.quantity).toLocaleString('en-IN')}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-elora-gold/15 flex items-center justify-between text-xs">
                          <span className="text-elora-textMuted">
                            Total: <strong className="text-elora-goldLight">₹{ord.total.toLocaleString('en-IN')}</strong> ({ord.paymentMethod})
                          </span>
                          <Link
                            to={`/track-order?orderId=${ord.id}`}
                            className="text-elora-gold hover:text-white flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
                          >
                            <Truck className="w-3.5 h-3.5" /> Track Package
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>
        ) : (
          /* AUTHENTICATION FORM VIEW */
          <div className="max-w-md mx-auto p-8 rounded-3xl bg-[#1E110B] border border-elora-gold/30 shadow-2xl space-y-6">
            
            {/* Tab switch */}
            <div className="flex border-b border-elora-gold/20 pb-2">
              <button
                onClick={() => setIsLoginTab(true)}
                className={`flex-1 py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                  isLoginTab ? 'text-elora-gold border-b-2 border-elora-gold' : 'text-elora-beige/60 hover:text-elora-beige'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLoginTab(false)}
                className={`flex-1 py-2 text-xs uppercase tracking-widest font-bold transition-colors ${
                  !isLoginTab ? 'text-elora-gold border-b-2 border-elora-gold' : 'text-elora-beige/60 hover:text-elora-beige'
                }`}
              >
                Create Account
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {!isLoginTab && (
                <div>
                  <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Leila Al-Sabah"
                    className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-4 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. patron@domain.com"
                  className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-4 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                />
              </div>

              {!isLoginTab && (
                <div>
                  <label className="block text-xs uppercase tracking-wider text-elora-goldLight font-medium mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 00000"
                    className="w-full bg-[#140A07] border border-elora-gold/30 rounded-xl px-4 py-2.5 text-xs text-elora-cream focus:outline-none focus:border-elora-gold"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-widest rounded-xl shadow-gold-sm transition-all"
              >
                {isLoginTab ? 'Sign In To ÉLORA' : 'Register Royal Membership'}
              </button>

              <p className="text-[10px] text-elora-textMuted text-center">
                Demo authentication: Enter any valid email to sign in or create an account.
              </p>
            </form>

          </div>
        )}
      </div>

    </div>
  );
};
