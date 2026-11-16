export type Category = 'men' | 'women' | 'unisex';

export type FragranceFamily = 
  | 'Woody' 
  | 'Floral' 
  | 'Amber' 
  | 'Oud' 
  | 'Fresh' 
  | 'Vanilla' 
  | 'Musky' 
  | 'Oriental' 
  | 'Spicy' 
  | 'Citrus' 
  | 'Fruity';

export type BottleSize = '30ml' | '50ml' | '100ml';

export interface ProductSizeOption {
  size: BottleSize;
  price: number;
  originalPrice?: number;
  inStock: boolean;
}

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ProductCharacteristics {
  longevity: string;
  sillage: string;
  season: string;
  concentration: string;
}

export interface ProductSpecs {
  origin: string;
  bottleType: string;
  sprayType: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  category: Category;
  fragranceFamily: FragranceFamily;
  price: number; // base price for default 50ml
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  images: string[];
  description: string;
  fullStory?: string;
  notes: FragranceNotes;
  sizes: ProductSizeOption[];
  characteristics: ProductCharacteristics;
  specs: ProductSpecs;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  size: BottleSize;
  price: number;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  isVerified: boolean;
  isDemo?: boolean;
  likes: number;
  userLiked?: boolean;
  avatarUrl?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  size: BottleSize;
  quantity: number;
  price: number;
  image: string;
}

export interface OrderShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  house: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface Order {
  id: string; // e.g. ELO-948215
  createdAt: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  couponCode?: string;
  status: 'Processing' | 'Blending & Quality Check' | 'Dispatched' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  paymentMethod: 'UPI' | 'Credit/Debit Card' | 'Cash on Delivery';
  paymentStatus: 'Paid' | 'Pending' | 'COD';
  shippingAddress: OrderShippingAddress;
  trackingNumber: string;
  estimatedDelivery: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  addresses?: OrderShippingAddress[];
}
