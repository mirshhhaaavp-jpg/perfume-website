# ÉLORA – Luxury Arabian Perfumes E-Commerce Website

> **“The Essence of Royal Elegance.”**

A complete, high-performance, fully responsive luxury Arabian perfume e-commerce website built with React 18, TypeScript, Tailwind CSS, and React Router.

---

## 🌟 Brand Identity & Design System

* **Brand Name**: ÉLORA – Arabian Perfumes
* **Brand Tagline**: *“The Essence of Royal Elegance.”*
* **Design Aesthetic**: Royal Arabian Luxury with gold borders, ambient warm lighting, dark chocolate backdrop, and refined typography.

### 🎨 Color Palette
* **Deepest Chocolate Background**: `#140A07`
* **Primary Chocolate Brown**: `#24150F`
* **Rich Coffee Brown**: `#3B2419`
* **Card Surface**: `#22130C` / `#1E110B`
* **Champagne Royal Gold**: `#C6A15B`
* **Light Shimmering Gold**: `#E4CD99`
* **Warm Cream Beige**: `#E9DDC9`
* **Pure Cream White**: `#FAF8F3`

### ✒️ Typography
* **Headings**: Editorial serif (`Playfair Display`, `Cinzel`)
* **Body**: Modern refined sans-serif (`Montserrat`, `Plus Jakarta Sans`)

---

## 💎 Features & Capabilities

### 1. 🛍️ Full E-Commerce Experience
* **Persistent Shopping Bag**: Add products with custom flacon sizes (`30ml`, `50ml`, `100ml`), dynamic pricing, instant quantity stepper, and free shipping progress bar. Persists in `localStorage`.
* **Side-Over Cart Drawer & Dedicated Cart Page**: Access your bag from anywhere without leaving the current browsing flow.
* **Promo Coupons**: Supports codes like `ELORA10` (10% off) and `ROYALOUD` (15% off).
* **Multi-Step Checkout**: Customer information, shipping address validation, payment selector (UPI, Credit/Debit card, Cash on Delivery), and order confirmation with celebration confetti.
* **Live Order Tracking**: Search any Order ID (e.g., `ELO-784912`) to view a step-by-step dispatch timeline from the atelier to delivery.
* **Royal Wishlist**: One-click heart save, count badge in header, remove and "Move to Bag" controls.
* **Instant Live Search**: Search across perfumes, top/heart/base notes (e.g. Saffron, Rose, Agarwood), categories, and fragrance families.
* **Quick View Modal**: Instant lightbox inspection of flacon imagery, fragrance notes, and quick add-to-bag.

### 2. 👑 12 Signature Demo Fragrances
* **Men's Collection**:
  1. *ÉLORA NOIR* – Woody & Spicy (₹1,499)
  2. *ROYAL AMBER* – Amber & Warm Spices (₹1,599)
  3. *OUD ELITE* – Pure Arabian Cambodi Oud (₹1,899)
  4. *MIDNIGHT MUSK* – Musk & Fresh Notes (₹1,399)
* **Women's Collection**:
  5. *ROSE ÉCLAT* – Floral & Taif Rose (₹1,299)
  6. *VELVET BLOOM* – Floral & Fruity (₹1,399)
  7. *GOLDEN VANILLA* – Bourbon Vanilla & Sweet (₹1,499)
  8. *MYSTIC BLOSSOM* – Oriental & Lily Musk (₹1,599)
* **Unisex Collection**:
  9. *ROYAL OUD* – Signature Oud & Amber (₹1,499) [Hero decanter]
  10. *AMBER SOUL* – Amber & Guaiacwood (₹1,599)
  11. *DESERT MIST* – Musk & Citrus (₹1,499)
  12. *OUD MYSTIQUE* – Oriental & Bakhoor Spices (₹1,799)

### 3. 📄 Complete Multi-Page Routing Architecture
* `/` – **Home Page**: Hero banner, 3 collection cards, Best Sellers, Brand Story banner, Why Choose ÉLORA, Testimonials, Newsletter.
* `/shop` – **Shop / Catalog**: Category filters, price ranges, fragrance family filters, size selector, and sorting.
* `/shop/men`, `/shop/women`, `/shop/unisex` – Dedicated collection pages.
* `/product/:id` – **Product Details**: Multi-angle gallery, dynamic flacon size pricing, notes breakdown (Top, Heart, Base), trust badges, specs, reviews, and related scents.
* `/about` – **About Us**: Our Story with arched heritage design, Our Mission, Our Vision, 6 Pillars, and Brand Specialty.
* `/contact` – **Contact Us**: WhatsApp direct concierge link, boutique coordinates, email, and interactive contact form with validation.
* `/cart` – **Shopping Cart Page**: Itemized summary, shipping indicator, and coupon entry.
* `/checkout` – **Checkout Page**: Form validation, address capture, payment options, and order placement.
* `/order-success/:orderId` – **Order Confirmation**: Receipt details, invoice summary, and tracking button.
* `/track-order` – **Order Tracking**: Visual shipment status stepper with recent orders list.
* `/wishlist` – **Saved Perfumes**: Saved collection with 1-click move to bag.
* `/account` – **Client Portal**: Profile, royal patron tier, and order history.
* `/reviews` – **Customer Reviews**: Rating breakdown, verified buyer reviews, and interactive review submission.
* `/faq` – **FAQ**: Interactive accordion answering ordering, sizes, COD, returns, and support.
* `/privacy-policy`, `/shipping-policy`, `/refund-policy` – Complete editable legal policy templates.

---

## 🚀 Running the Project

### Development Server
```bash
./start.sh
# or
npm run dev
```

### Production Build & Preview
```bash
npm run build
npm run preview
```

Open `http://localhost:5173` in your browser.
