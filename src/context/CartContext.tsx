import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, BottleSize, CartItem } from '../types';
import { useToast } from './ToastContext';

interface CouponInfo {
  code: string;
  type: 'percent' | 'fixed';
  value: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size?: BottleSize, quantity?: number) => void;
  removeFromCart: (productId: string, size: BottleSize) => void;
  updateQuantity: (productId: string, size: BottleSize, quantity: number) => void;
  clearCart: () => void;
  coupon: CouponInfo | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  totalItemsCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
}

const VALID_COUPONS: Record<string, CouponInfo> = {
  'ELORA10': { code: 'ELORA10', type: 'percent', value: 10 },
  'ROYALOUD': { code: 'ROYALOUD', type: 'percent', value: 15 },
  'FIRSTORDER': { code: 'FIRSTORDER', type: 'fixed', value: 200 },
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('elora_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [coupon, setCoupon] = useState<CouponInfo | null>(() => {
    try {
      const saved = localStorage.getItem('elora_coupon');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('elora_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      if (coupon) {
        localStorage.setItem('elora_coupon', JSON.stringify(coupon));
      } else {
        localStorage.removeItem('elora_coupon');
      }
    } catch (e) {
      console.error('Failed to save coupon to localStorage', e);
    }
  }, [coupon]);

  const addToCart = (product: Product, size: BottleSize = '50ml', quantity = 1) => {
    const selectedSizeOption = product.sizes.find(s => s.size === size);
    const itemPrice = selectedSizeOption ? selectedSizeOption.price : product.price;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id && item.size === size);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, size, price: itemPrice, quantity }];
      }
    });

    showToast(`Added ${quantity}× ${product.name} (${size}) to your bag.`, 'gold', 'Royal Selection Added');
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: BottleSize) => {
    setCart(prev => {
      const target = prev.find(item => item.product.id === productId && item.size === size);
      if (target) {
        showToast(`Removed ${target.product.name} from your bag.`, 'info');
      }
      return prev.filter(item => !(item.product.id === productId && item.size === size));
    });
  };

  const updateQuantity = (productId: string, size: BottleSize, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    setCart(prev =>
      prev.map(item => {
        if (item.product.id === productId && item.size === size) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setCoupon(null);
  };

  const applyCoupon = (rawCode: string): boolean => {
    const code = rawCode.trim().toUpperCase();
    if (VALID_COUPONS[code]) {
      setCoupon(VALID_COUPONS[code]);
      showToast(`Coupon "${code}" applied successfully!`, 'success', 'Promotion Applied');
      return true;
    } else {
      showToast('Invalid coupon code. Try ELORA10 or ROYALOUD', 'error', 'Coupon Error');
      return false;
    }
  };

  const removeCoupon = () => {
    setCoupon(null);
    showToast('Promo code removed', 'info');
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let discount = 0;
  if (coupon && subtotal > 0) {
    if (coupon.type === 'percent') {
      discount = Math.round((subtotal * coupon.value) / 100);
    } else if (coupon.type === 'fixed') {
      discount = Math.min(coupon.value, subtotal);
    }
  }

  // Free shipping over ₹1,999; 0 when cart empty; otherwise ₹99
  const shipping = subtotal === 0 ? 0 : subtotal >= 1999 ? 0 : 99;
  const total = Math.max(0, subtotal - discount + shipping);
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        coupon,
        applyCoupon,
        removeCoupon,
        subtotal,
        discount,
        shipping,
        total,
        totalItemsCount,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
