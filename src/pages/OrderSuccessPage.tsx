import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Package, Truck, ArrowRight, Sparkles, MapPin, Calendar, Clock, Crown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const OrderSuccessPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrderById } = useAuth();

  const order = orderId ? getOrderById(orderId) : undefined;

  return (
    <div className="bg-[#140A07] min-h-screen text-elora-cream py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1E110B] border border-elora-gold/40 shadow-2xl text-center space-y-6">
          
          {/* Royal Crest Checkmark */}
          <div className="w-20 h-20 rounded-full bg-emerald-950/70 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-gold-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-elora-gold font-serif">
              Royal Order Confirmed
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-elora-cream mt-1 mb-2">
              Thank You For Your Patronage
            </h1>
            <p className="text-xs sm:text-sm text-elora-beige/80 max-w-lg mx-auto">
              Your exquisite fragrances are being hand-packaged with our signature presentation box and wax seal.
            </p>
          </div>

          {/* Order Details Highlight Box */}
          <div className="p-6 rounded-2xl bg-[#150B07] border border-elora-gold/25 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-elora-textMuted uppercase tracking-wider block text-[10px]">Order Reference</span>
              <strong className="font-serif text-base text-elora-goldLight font-bold">{order?.id || orderId}</strong>
            </div>

            <div>
              <span className="text-elora-textMuted uppercase tracking-wider block text-[10px]">Estimated Delivery</span>
              <strong className="font-serif text-base text-elora-cream font-bold">{order?.estimatedDelivery || 'In 3-4 Business Days'}</strong>
            </div>

            <div>
              <span className="text-elora-textMuted uppercase tracking-wider block text-[10px]">Tracking Number</span>
              <span className="font-mono text-elora-cream">{order?.trackingNumber || 'ELR-EXP-9402148'}</span>
            </div>

            <div>
              <span className="text-elora-textMuted uppercase tracking-wider block text-[10px]">Payment Method</span>
              <span className="text-elora-cream font-medium">{order?.paymentMethod || 'UPI'} • {order?.paymentStatus || 'Paid'}</span>
            </div>
          </div>

          {/* Shipping Address */}
          {order?.shippingAddress && (
            <div className="p-4 rounded-xl bg-[#170C08] border border-elora-gold/20 text-left text-xs space-y-1">
              <span className="text-elora-gold font-semibold uppercase tracking-wider block text-[10px] mb-1">
                Dispatch Destination:
              </span>
              <p className="text-elora-cream font-bold">{order.shippingAddress.fullName}</p>
              <p className="text-elora-beige/80">{order.shippingAddress.house}, {order.shippingAddress.street}</p>
              <p className="text-elora-beige/80">{order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
              <p className="text-elora-textMuted">Contact: {order.shippingAddress.phone}</p>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/track-order?orderId=${order?.id || orderId}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-elora-gold hover:bg-elora-goldLight text-elora-deep font-bold text-xs uppercase tracking-widest rounded-xl shadow-gold-sm transition-all flex items-center justify-center gap-2"
            >
              <Truck className="w-4 h-4" /> Track Real-Time Delivery
            </Link>

            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-elora-gold/40 text-elora-goldLight hover:bg-elora-gold/10 font-bold text-xs uppercase tracking-widest rounded-xl transition-all"
            >
              Continue Shopping
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
