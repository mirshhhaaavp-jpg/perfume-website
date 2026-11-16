import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, Package, Truck, CheckCircle2, Clock, MapPin, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Order } from '../types';

export const OrderTrackingPage: React.FC = () => {
  const location = useLocation();
  const { orders, getOrderById } = useAuth();

  const queryParams = new URLSearchParams(location.search);
  const initialOrderId = queryParams.get('orderId') || '';

  const [searchId, setSearchId] = useState(initialOrderId);
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (initialOrderId) {
      handleSearch(initialOrderId);
    } else if (orders.length > 0) {
      // Default to most recent order if available
      setActiveOrder(orders[0]);
      setSearchId(orders[0].id);
      setHasSearched(true);
    }
  }, [initialOrderId, orders]);

  const handleSearch = (queryId?: string) => {
    const idToLook = (queryId || searchId).trim();
    if (!idToLook) return;

    setHasSearched(true);
    const found = getOrderById(idToLook);
    setActiveOrder(found || null);
  };

  const trackingSteps = [
    { title: 'Order Confirmed', desc: 'Received & Authenticated', date: 'Done' },
    { title: 'Blending & Quality Check', desc: 'Flacon sealed in atelier', date: 'Done' },
    { title: 'Dispatched from Hub', desc: 'Courier manifest generated', date: 'In Progress' },
    { title: 'In Transit', desc: 'En route to local sorting facility', date: 'Pending' },
    { title: 'Out for Delivery', desc: 'Delivery partner assigned', date: 'Pending' },
  ];

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream">
      
      {/* Header Banner */}
      <section className="py-16 bg-[#1A0E0A] border-b border-elora-gold/25 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">
            Live Dispatch Updates
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elora-cream mt-2 mb-3">
            Track Your Order
          </h1>
          <div className="w-16 h-0.5 bg-elora-gold mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-elora-beige/85 max-w-xl mx-auto">
            Enter your ÉLORA Order ID (e.g. ELO-784912) or courier tracking number to check delivery status.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-6 flex gap-2">
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Order ID (e.g. ELO-784912)"
              className="flex-1 bg-[#140A07] border border-elora-gold/40 rounded-xl px-4 py-3 text-xs text-elora-cream uppercase placeholder-elora-textMuted/50 focus:outline-none focus:border-elora-gold"
            />
            <button
              onClick={() => handleSearch()}
              className="px-6 py-3 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-gold-sm"
            >
              Track
            </button>
          </div>
        </div>
      </section>

      {/* Main Tracking View */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {activeOrder ? (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Top Status Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1E110B] border border-elora-gold/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-elora-gold font-semibold">
                  Order Status
                </span>
                <h2 className="font-serif text-2xl font-bold text-elora-cream mt-1">
                  {activeOrder.status}
                </h2>
                <p className="text-xs text-elora-textMuted mt-0.5">
                  Order Reference: <strong className="text-elora-goldLight">{activeOrder.id}</strong> • Tracking #{activeOrder.trackingNumber}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#150B07] border border-elora-gold/20 text-center sm:text-right">
                <span className="text-[10px] uppercase tracking-wider text-elora-textMuted block">
                  Estimated Delivery Date
                </span>
                <span className="font-serif text-lg font-bold text-emerald-400 block mt-0.5">
                  {activeOrder.estimatedDelivery}
                </span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1A0E0A] border border-elora-gold/25 space-y-6">
              <h3 className="font-serif text-lg font-bold text-elora-cream pb-3 border-b border-elora-gold/20">
                Shipment Progress Timeline
              </h3>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-elora-gold/25">
                {trackingSteps.map((step, idx) => (
                  <div key={step.title} className="relative flex items-start gap-4">
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-6 sm:-left-8 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        idx <= 1
                          ? 'bg-emerald-500 text-elora-deep shadow-sm'
                          : idx === 2
                          ? 'bg-elora-gold text-elora-deep animate-pulse'
                          : 'bg-[#22130C] border border-elora-gold/40 text-elora-textMuted'
                      }`}
                    >
                      {idx <= 1 ? '✓' : idx + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-sm font-bold text-elora-cream">{step.title}</h4>
                        <span className="text-[11px] text-elora-goldLight">{step.date}</span>
                      </div>
                      <p className="text-xs text-elora-textMuted mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items & Shipping Address Snapshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Items Card */}
              <div className="p-6 rounded-2xl bg-[#1A0E0A] border border-elora-gold/25 space-y-4">
                <h4 className="font-serif text-sm font-bold text-elora-cream pb-2 border-b border-elora-gold/15">
                  Fragrances in Package ({activeOrder.items.length})
                </h4>
                <div className="space-y-3">
                  {activeOrder.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-12 h-14 rounded-lg object-cover bg-[#160D08] border border-elora-gold/20 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-serif text-xs font-bold text-elora-cream truncate">{item.productName}</h5>
                        <p className="text-[11px] text-elora-textMuted">Size: {item.size} • Qty: {item.quantity}</p>
                      </div>
                      <span className="font-serif font-bold text-elora-cream">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destination Card */}
              <div className="p-6 rounded-2xl bg-[#1A0E0A] border border-elora-gold/25 space-y-3 text-xs text-elora-beige/85">
                <h4 className="font-serif text-sm font-bold text-elora-cream pb-2 border-b border-elora-gold/15">
                  Delivery Destination
                </h4>
                <p className="text-sm font-bold text-elora-cream">{activeOrder.shippingAddress.fullName}</p>
                <p>{activeOrder.shippingAddress.house}, {activeOrder.shippingAddress.street}</p>
                <p>{activeOrder.shippingAddress.city}, {activeOrder.shippingAddress.state} - {activeOrder.shippingAddress.pincode}</p>
                <p className="text-elora-textMuted">Mobile: {activeOrder.shippingAddress.phone}</p>
                <div className="pt-2 border-t border-elora-gold/15 flex justify-between font-bold text-elora-cream text-sm">
                  <span>Total Paid ({activeOrder.paymentMethod})</span>
                  <span className="font-serif text-elora-goldLight">₹{activeOrder.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

            </div>

          </div>
        ) : hasSearched ? (
          <div className="p-12 rounded-2xl bg-[#1A0E0A] border border-elora-gold/25 text-center space-y-4 max-w-lg mx-auto">
            <Package className="w-12 h-12 text-elora-gold/60 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-elora-cream">No Order Found for "{searchId}"</h3>
            <p className="text-xs text-elora-textMuted">
              Please verify your Order ID from your confirmation email or choose from your recent orders below.
            </p>
          </div>
        ) : null}

        {/* Recent Orders List if available */}
        {orders.length > 0 && (
          <div className="mt-14 pt-8 border-t border-elora-gold/20">
            <h3 className="font-serif text-lg font-bold text-elora-cream mb-4">
              Your Recent Orders ({orders.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {orders.map((ord) => (
                <div
                  key={ord.id}
                  onClick={() => {
                    setActiveOrder(ord);
                    setSearchId(ord.id);
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    activeOrder?.id === ord.id
                      ? 'border-elora-gold bg-elora-gold/15'
                      : 'border-elora-gold/25 bg-[#1E110B] hover:border-elora-gold/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-bold text-elora-cream">{ord.id}</span>
                    <span className="text-emerald-400 font-semibold">{ord.status}</span>
                  </div>
                  <p className="text-[11px] text-elora-textMuted mt-1">
                    {ord.items.length} item(s) • Total: ₹{ord.total.toLocaleString('en-IN')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
