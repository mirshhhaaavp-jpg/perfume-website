import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Order, OrderShippingAddress, OrderItem, Review } from '../types';
import { DEMO_REVIEWS } from '../data/products';
import { useToast } from './ToastContext';

interface AuthContextType {
  user: User | null;
  orders: Order[];
  reviews: Review[];
  login: (email: string, fullName: string) => void;
  register: (email: string, fullName: string, phone?: string) => void;
  logout: () => void;
  createOrder: (data: {
    items: OrderItem[];
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
    couponCode?: string;
    shippingAddress: OrderShippingAddress;
    paymentMethod: 'UPI' | 'Credit/Debit Card' | 'Cash on Delivery';
  }) => Order;
  getOrderById: (id: string) => Order | undefined;
  addReview: (review: Omit<Review, 'id' | 'date' | 'likes'>) => void;
  likeReview: (reviewId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Sample initial order for demonstration
const SAMPLE_INITIAL_ORDER: Order = {
  id: 'ELO-784912',
  createdAt: '2026-11-10T14:30:00.000Z',
  items: [
    {
      productId: 'royal-oud',
      productName: 'ROYAL OUD',
      size: '50ml',
      quantity: 1,
      price: 1499,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80'
    }
  ],
  subtotal: 1499,
  discount: 0,
  shipping: 99,
  total: 1598,
  status: 'In Transit',
  paymentMethod: 'UPI',
  paymentStatus: 'Paid',
  shippingAddress: {
    fullName: 'Royal Guest',
    email: 'guest@elora-perfumes.com',
    phone: '+91 98765 43210',
    house: 'Villa 14, Royal Palm Residences',
    street: 'Bandra West, Marine Drive',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    country: 'India'
  },
  trackingNumber: 'DEL-IN-8839210',
  estimatedDelivery: '18 Nov 2026'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();

  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('elora_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('elora_orders');
      return saved ? JSON.parse(saved) : [SAMPLE_INITIAL_ORDER];
    } catch {
      return [SAMPLE_INITIAL_ORDER];
    }
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('elora_reviews');
      return saved ? JSON.parse(saved) : DEMO_REVIEWS;
    } catch {
      return DEMO_REVIEWS;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('elora_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('elora_user');
      }
    } catch (e) {
      console.error('Error saving user', e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('elora_orders', JSON.stringify(orders));
    } catch (e) {
      console.error('Error saving orders', e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('elora_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.error('Error saving reviews', e);
    }
  }, [reviews]);

  const login = (email: string, fullName: string) => {
    const newUser: User = {
      id: 'USR-' + Math.floor(100000 + Math.random() * 900000),
      email,
      fullName: fullName || email.split('@')[0],
    };
    setUser(newUser);
    showToast(`Welcome back, ${newUser.fullName}!`, 'gold', 'Welcome to ÉLORA');
  };

  const register = (email: string, fullName: string, phone?: string) => {
    const newUser: User = {
      id: 'USR-' + Math.floor(100000 + Math.random() * 900000),
      email,
      fullName,
      phone,
    };
    setUser(newUser);
    showToast('Your ÉLORA Royal Membership account is created.', 'gold', 'Account Created');
  };

  const logout = () => {
    setUser(null);
    showToast('You have been signed out.', 'info');
  };

  const createOrder = (data: {
    items: OrderItem[];
    subtotal: number;
    discount: number;
    shipping: number;
    total: number;
    couponCode?: string;
    shippingAddress: OrderShippingAddress;
    paymentMethod: 'UPI' | 'Credit/Debit Card' | 'Cash on Delivery';
  }): Order => {
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const orderId = `ELO-${randomSuffix}`;
    const trackingNo = `ELR-EXP-${Math.floor(1000000 + Math.random() * 9000000)}`;

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 4);
    const dateFormatted = deliveryDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const newOrder: Order = {
      id: orderId,
      createdAt: new Date().toISOString(),
      items: data.items,
      subtotal: data.subtotal,
      discount: data.discount,
      shipping: data.shipping,
      total: data.total,
      couponCode: data.couponCode,
      status: 'Blending & Quality Check',
      paymentMethod: data.paymentMethod,
      paymentStatus: data.paymentMethod === 'Cash on Delivery' ? 'COD' : 'Paid',
      shippingAddress: data.shippingAddress,
      trackingNumber: trackingNo,
      estimatedDelivery: dateFormatted
    };

    setOrders(prev => [newOrder, ...prev]);

    // If no user is logged in, attach order details as active guest session
    if (!user) {
      setUser({
        id: 'GUEST-' + randomSuffix,
        fullName: data.shippingAddress.fullName,
        email: data.shippingAddress.email,
        phone: data.shippingAddress.phone,
        addresses: [data.shippingAddress]
      });
    }

    return newOrder;
  };

  const getOrderById = (id: string): Order | undefined => {
    const cleanId = id.trim().toUpperCase();
    return orders.find(o => o.id.toUpperCase() === cleanId || o.trackingNumber.toUpperCase() === cleanId);
  };

  const addReview = (reviewInput: Omit<Review, 'id' | 'date' | 'likes'>) => {
    const newRev: Review = {
      ...reviewInput,
      id: 'rev-' + Date.now(),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      likes: 1,
      isVerified: true
    };
    setReviews(prev => [newRev, ...prev]);
    showToast('Your royal fragrance review has been submitted for display!', 'gold', 'Review Submitted');
  };

  const likeReview = (reviewId: string) => {
    setReviews(prev =>
      prev.map(r => {
        if (r.id === reviewId) {
          const liked = !r.userLiked;
          return {
            ...r,
            likes: liked ? r.likes + 1 : Math.max(0, r.likes - 1),
            userLiked: liked
          };
        }
        return r;
      })
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        orders,
        reviews,
        login,
        register,
        logout,
        createOrder,
        getOrderById,
        addReview,
        likeReview
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
