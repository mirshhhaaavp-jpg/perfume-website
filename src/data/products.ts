import { Product, Review } from '../types';

export const PRODUCTS: Product[] = [
  // --- UNISEX (HERO PRODUCT) ---
  {
    id: 'royal-oud',
    sku: 'ELO-UNI-001',
    name: 'ROYAL OUD',
    subtitle: 'Oud & Amber • Unisex Signature',
    category: 'unisex',
    fragranceFamily: 'Oud',
    price: 1499,
    originalPrice: 1999,
    discountPercent: 25,
    rating: 4.8,
    reviewsCount: 745,
    isBestSeller: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'Experience the richness of Arabian elegance with Royal Oud. A sophisticated fragrance inspired by the depth of rare aged agarwood, the warmth of amber, and the beauty of refined oriental notes.',
    fullStory: 'Royal Oud is the crowning jewel of the ÉLORA atelier. Formulated using vintage harvested Cambodi Oud and golden amber resin from the Arabian peninsula, this intoxicating elixir is balanced with regal saffron strands and velvet damask rose. Designed for discerning royalty and modern connoisseurs seeking commanding presence.',
    notes: {
      top: ['Kashmiri Saffron', 'Bergamot Zest', 'Cardamom'],
      heart: ['Taif Rose', 'Nutmeg', 'Smoked Incense'],
      base: ['Royal Cambodi Oud', 'Golden Amber', 'Sandalwood', 'Musk']
    },
    sizes: [
      { size: '30ml', price: 999, originalPrice: 1399, inStock: true },
      { size: '50ml', price: 1499, originalPrice: 1999, inStock: true },
      { size: '100ml', price: 2499, originalPrice: 3299, inStock: true }
    ],
    characteristics: {
      longevity: '14+ Hours (Extrait De Parfum)',
      sillage: 'Heavy & Regal',
      season: 'All Seasons • Evening & Royal Occasions',
      concentration: '32% Pure Fragrance Oil Concentration'
    },
    specs: {
      origin: 'Dubai, United Arab Emirates',
      bottleType: 'Heavy Cut Crystal with 24K Electroplated Gold Cap',
      sprayType: 'Ultra-Fine Micro-Mist Atomizer'
    },
    inStock: true
  },

  // --- MEN'S COLLECTION ---
  {
    id: 'elora-noir',
    sku: 'ELO-MEN-001',
    name: 'ÉLORA NOIR',
    subtitle: 'Woody & Spicy • Bold & Masculine',
    category: 'men',
    fragranceFamily: 'Woody',
    price: 1499,
    originalPrice: 1899,
    discountPercent: 21,
    rating: 4.8,
    reviewsCount: 1240,
    isBestSeller: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'A dark, magnetic fragrance opening with spicy black pepper and aromatic spices, anchored in smoky cedarwood, vetiver, and midnight amber.',
    fullStory: 'Crafted for the confident modern leader, ÉLORA NOIR merges Arabian nighttime mystique with bold French woods. An aura of dark sophistication that leaves an indelible impression in executive boardrooms and gala evenings.',
    notes: {
      top: ['Madagascar Black Pepper', 'Pink Peppercorn', 'Italian Bergamot'],
      heart: ['Atlas Cedarwood', 'Smoked Birch', 'Leather'],
      base: ['Haitian Vetiver', 'Dark Amber', 'Patchouli']
    },
    sizes: [
      { size: '30ml', price: 999, originalPrice: 1299, inStock: true },
      { size: '50ml', price: 1499, originalPrice: 1899, inStock: true },
      { size: '100ml', price: 2399, originalPrice: 2999, inStock: true }
    ],
    characteristics: {
      longevity: '12+ Hours',
      sillage: 'Moderate to Strong',
      season: 'Autumn / Winter & Evenings',
      concentration: 'Eau de Parfum Intense (28% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Matte Obsidian Glass with Brushed Gunmetal Gold Cap',
      sprayType: 'High-Velocity Precision Atomizer'
    },
    inStock: true
  },
  {
    id: 'royal-amber',
    sku: 'ELO-MEN-002',
    name: 'ROYAL AMBER',
    subtitle: 'Amber & Warm Spices • Majestic Warmth',
    category: 'men',
    fragranceFamily: 'Amber',
    price: 1599,
    originalPrice: 1999,
    discountPercent: 20,
    rating: 4.9,
    reviewsCount: 630,
    isBestSeller: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'Envelop yourself in the liquid gold of Arabian palaces. Warm cinnamon and clove open into opulent amber resin, aged pipe tobacco, and creamy Mysore sandalwood.',
    fullStory: 'Royal Amber evokes the warm golden glow of desert sands bathed in sunset. It possesses a comforting yet commanding warmth, casting a spell of royal prestige wherever worn.',
    notes: {
      top: ['Ceylon Cinnamon', 'Nutmeg', 'Cardamom Pods'],
      heart: ['Honeyed Amber Resin', 'Blonde Tobacco', 'Labdanum'],
      base: ['Mysore Sandalwood', 'Tonka Bean', 'Vanilla Bourbon']
    },
    sizes: [
      { size: '30ml', price: 1099, originalPrice: 1399, inStock: true },
      { size: '50ml', price: 1599, originalPrice: 1999, inStock: true },
      { size: '100ml', price: 2699, originalPrice: 3399, inStock: true }
    ],
    characteristics: {
      longevity: '14+ Hours',
      sillage: 'Heavy & Inviting',
      season: 'Winter & Cool Evenings',
      concentration: 'Extrait de Parfum (30% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Faceted Amber Crystal Flacon with Polished Brass Collar',
      sprayType: 'Luxury Atomizer'
    },
    inStock: true
  },
  {
    id: 'oud-elite',
    sku: 'ELO-MEN-003',
    name: 'OUD ELITE',
    subtitle: 'Arabian Oud • Untamed Luxury',
    category: 'men',
    fragranceFamily: 'Oud',
    price: 1899,
    originalPrice: 2499,
    discountPercent: 24,
    rating: 4.9,
    reviewsCount: 512,
    isBestSeller: false,
    isNewArrival: true,
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'A pure, unadulterated tribute to authentic Arabian Oud. Smoky, earthy, and leathery with a subtle undertone of dry rose and frankincense.',
    fullStory: 'Oud Elite is formulated for true agarwood connoisseurs. Using aged natural oud distillates from Assam and Cambodia, its deep woody resonance lingers effortlessly for over 16 hours.',
    notes: {
      top: ['Hojari Frankincense', 'Dry Thyme', 'Bitter Orange'],
      heart: ['Aged Dehn Al Oud', 'Smoked Leather', 'Orris Root'],
      base: ['Agarwood Charcoal', 'Dark Musk', 'Castoreum Accord']
    },
    sizes: [
      { size: '30ml', price: 1299, originalPrice: 1699, inStock: true },
      { size: '50ml', price: 1899, originalPrice: 2499, inStock: true },
      { size: '100ml', price: 3199, originalPrice: 4199, inStock: true }
    ],
    characteristics: {
      longevity: '16+ Hours',
      sillage: 'Very Heavy',
      season: 'Special Occasions & Celebrations',
      concentration: 'Pure Parfum (35% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Solid Black Glass with Traditional Arabian Engraved Gold Plaque',
      sprayType: 'Fine Particle Dispersion Atomizer'
    },
    inStock: true
  },
  {
    id: 'midnight-musk',
    sku: 'ELO-MEN-004',
    name: 'MIDNIGHT MUSK',
    subtitle: 'Musk & Fresh Notes • Crisp & Alluring',
    category: 'men',
    fragranceFamily: 'Musky',
    price: 1399,
    originalPrice: 1699,
    discountPercent: 18,
    rating: 4.7,
    reviewsCount: 388,
    isBestSeller: false,
    isNewArrival: true,
    images: [
      'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'Crisp nocturnal fresh air meeting velvet Arabian white musk. Uplifting bergamot and juniper berries harmonize with clean cedar and skin-warmed ambergris.',
    fullStory: 'Midnight Musk is versatile, fresh, and irresistibly clean yet undeniably luxurious. Designed for everyday nobility, it brings a brisk energetic breeze to warm climates.',
    notes: {
      top: ['Calabrian Bergamot', 'Juniper Berry', 'Crisp Mint Leaf'],
      heart: ['Lavender Blossom', 'Cardamom', 'Aquatic Accord'],
      base: ['Arabian White Musk', 'Virginian Cedar', 'Clean Amber']
    },
    sizes: [
      { size: '30ml', price: 899, originalPrice: 1199, inStock: true },
      { size: '50ml', price: 1399, originalPrice: 1699, inStock: true },
      { size: '100ml', price: 2199, originalPrice: 2699, inStock: true }
    ],
    characteristics: {
      longevity: '10+ Hours',
      sillage: 'Moderate & Elegant',
      season: 'Day-to-Night • All Seasons',
      concentration: 'Eau de Parfum (22% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Smoked Midnight Blue/Brown Gradient Bottle',
      sprayType: 'Micro-Spray Atomizer'
    },
    inStock: true
  },

  // --- WOMEN'S COLLECTION ---
  {
    id: 'rose-eclat',
    sku: 'ELO-WOM-001',
    name: 'ROSE ÉCLAT',
    subtitle: 'Floral & Rose • Royal Damask Petals',
    category: 'women',
    fragranceFamily: 'Floral',
    price: 1299,
    originalPrice: 1699,
    discountPercent: 24,
    rating: 4.8,
    reviewsCount: 890,
    isBestSeller: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'An ethereal tapestry of Taif roses, succulent lychee, and pink peonies kissed by morning dew, settling into a powdery bed of cashmeran and amber.',
    fullStory: 'Harvested at dawn when fragrance oils reach their peak, Rose Éclat captures the pure spirit of Arabian royal gardens. Romantic, luminous, and enchanting, it wraps the wearer in an intoxicating silk veil of flowers.',
    notes: {
      top: ['Juicy Lychee', 'Italian Mandarin', 'Pink Pepper'],
      heart: ['Taif Damask Rose', 'Pink Peony', 'Turkish Rose Petals'],
      base: ['White Musk', 'Cashmeran Wood', 'Golden Amber']
    },
    sizes: [
      { size: '30ml', price: 899, originalPrice: 1199, inStock: true },
      { size: '50ml', price: 1299, originalPrice: 1699, inStock: true },
      { size: '100ml', price: 2199, originalPrice: 2799, inStock: true }
    ],
    characteristics: {
      longevity: '12+ Hours',
      sillage: 'Romantic & Noticeable',
      season: 'Spring / Summer & Romantic Evenings',
      concentration: 'Eau de Parfum Intense (26% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Blush Tinted Crystal with Hand-Polished Gold Crown Cap',
      sprayType: 'Fine Veil Atomizer'
    },
    inStock: true
  },
  {
    id: 'velvet-bloom',
    sku: 'ELO-WOM-002',
    name: 'VELVET BLOOM',
    subtitle: 'Floral & Fruity • Sophisticated Charm',
    category: 'women',
    fragranceFamily: 'Floral',
    price: 1399,
    originalPrice: 1799,
    discountPercent: 22,
    rating: 4.7,
    reviewsCount: 412,
    isBestSeller: false,
    isNewArrival: true,
    images: [
      'https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1592945403407-98e30feb999a?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'A decadent bouquet of night-blooming jasmine and velvety blackcurrant, rounded with sensual vanilla orchid and sweet sandalwood.',
    fullStory: 'Velvet Bloom balances rich sweetness with high-fashion poise. A harmonious symphony of exotic blossoms and dark berries, leaving a trail of pure grace and allure.',
    notes: {
      top: ['Blackcurrant Nectar', 'Ripe Pear', 'Wild Freesia'],
      heart: ['Sambac Jasmine', 'Vanilla Orchid', 'Orange Blossom'],
      base: ['Australian Sandalwood', 'Praline Accord', 'Sensual Musk']
    },
    sizes: [
      { size: '30ml', price: 949, originalPrice: 1249, inStock: true },
      { size: '50ml', price: 1399, originalPrice: 1799, inStock: true },
      { size: '100ml', price: 2299, originalPrice: 2899, inStock: true }
    ],
    characteristics: {
      longevity: '11+ Hours',
      sillage: 'Radiant & Alluring',
      season: 'All Seasons',
      concentration: 'Eau de Parfum (25% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Fluted Emerald & Amber Glass with Gold Monogram',
      sprayType: 'Fine Feather Atomizer'
    },
    inStock: true
  },
  {
    id: 'golden-vanilla',
    sku: 'ELO-WOM-003',
    name: 'GOLDEN VANILLA',
    subtitle: 'Vanilla & Sweet • Indulgent Gourmand',
    category: 'women',
    fragranceFamily: 'Vanilla',
    price: 1499,
    originalPrice: 1899,
    discountPercent: 21,
    rating: 4.9,
    reviewsCount: 520,
    isBestSeller: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1592945403407-98e30feb999a?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'Sumptuous Madagascar bourbon vanilla infused with roasted tonka bean, caramelized honey, and warm almond milk over golden sandalwood.',
    fullStory: 'An addictive gourmand composition that never cloys. Golden Vanilla is warm, comforting, and irresistibly seductive, wrapping you in the sweet embrace of Arabian desserts and golden palaces.',
    notes: {
      top: ['Almond Blossom', 'Sweet Cardamom', 'Bergamot Bloom'],
      heart: ['Bourbon Vanilla Pod', 'Caramelized Honey', 'Heliotrope'],
      base: ['Tonka Bean', 'Benzoin Resin', 'Creamy Sandalwood']
    },
    sizes: [
      { size: '30ml', price: 999, originalPrice: 1299, inStock: true },
      { size: '50ml', price: 1499, originalPrice: 1899, inStock: true },
      { size: '100ml', price: 2499, originalPrice: 3099, inStock: true }
    ],
    characteristics: {
      longevity: '14+ Hours',
      sillage: 'Cozy & Deliciously Intoxicating',
      season: 'Autumn / Winter',
      concentration: 'Extrait de Parfum (30% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Heavy Honey-Amber Crystal with Gold Filigree Base',
      sprayType: 'Fine Dispersion Atomizer'
    },
    inStock: true
  },
  {
    id: 'mystic-blossom',
    sku: 'ELO-WOM-004',
    name: 'MYSTIC BLOSSOM',
    subtitle: 'Oriental & Musk • Midnight Bloom',
    category: 'women',
    fragranceFamily: 'Oriental',
    price: 1599,
    originalPrice: 1999,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 340,
    isBestSeller: false,
    isNewArrival: true,
    images: [
      'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'An exotic oriental bouquet of white lilies, orange blossom, and frankincense, wrapped in sultry Egyptian musk and smoky myrrh.',
    fullStory: 'Mystic Blossom whispers secrets of ancient desert nights. Deep, sacred, and richly floral, this scent is designed for the woman who owns the room with quiet magnetism.',
    notes: {
      top: ['Neroli', 'White Peach', 'Saffron Threads'],
      heart: ['Casablanca Lily', 'Orange Flower Absolute', 'Incense Smoke'],
      base: ['Egyptian Musk', 'Golden Myrrh', 'Dark Amber']
    },
    sizes: [
      { size: '30ml', price: 1099, originalPrice: 1399, inStock: true },
      { size: '50ml', price: 1599, originalPrice: 1999, inStock: true },
      { size: '100ml', price: 2699, originalPrice: 3299, inStock: true }
    ],
    characteristics: {
      longevity: '13+ Hours',
      sillage: 'Mysterious & Enveloping',
      season: 'Evenings & Formal Occasions',
      concentration: 'Eau de Parfum Intense (27% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Deep Plum and Chocolate Lacquered Flacon with Gold Crest',
      sprayType: 'Gentle Mist Atomizer'
    },
    inStock: true
  },

  // --- UNISEX COLLECTION ---
  {
    id: 'amber-soul',
    sku: 'ELO-UNI-002',
    name: 'AMBER SOUL',
    subtitle: 'Amber & Woody • Warm Resins',
    category: 'unisex',
    fragranceFamily: 'Amber',
    price: 1599,
    originalPrice: 1999,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 630,
    isBestSeller: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'An evocative dialogue between sun-warmed amber, sacred labdanum, smoky guaiacwood, and dry cedar. Rich, meditative, and soulful.',
    fullStory: 'Amber Soul represents the heartbeat of Middle Eastern hospitality. Warm like an open hearth, generous with its sillage, it transforms from crisp resin into velvety warmth on skin.',
    notes: {
      top: ['Bergamot', 'Thyme', 'Smoked Cinnamon'],
      heart: ['Cistus Labdanum', 'Amber Crystals', 'Patchouli'],
      base: ['Guaiacwood', 'Cedarwood', 'Vanilla Resinoid']
    },
    sizes: [
      { size: '30ml', price: 1099, originalPrice: 1399, inStock: true },
      { size: '50ml', price: 1599, originalPrice: 1999, inStock: true },
      { size: '100ml', price: 2599, originalPrice: 3299, inStock: true }
    ],
    characteristics: {
      longevity: '14+ Hours',
      sillage: 'Deep & Intimate',
      season: 'All Seasons',
      concentration: 'Extrait de Parfum (30% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Carved Amber Glass with Magnetic Gold Closure',
      sprayType: 'Fine Precision Atomizer'
    },
    inStock: true
  },
  {
    id: 'desert-mist',
    sku: 'ELO-UNI-003',
    name: 'DESERT MIST',
    subtitle: 'Musk & Citrus • Oasis Breezes',
    category: 'unisex',
    fragranceFamily: 'Citrus',
    price: 1499,
    originalPrice: 1799,
    discountPercent: 17,
    rating: 4.7,
    reviewsCount: 295,
    isBestSeller: false,
    isNewArrival: true,
    images: [
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'The sensation of walking into a lush Arabian oasis after days under the desert sun. Blood orange, sunlit citrus, and green cardamom meeting crystal musk.',
    fullStory: 'Desert Mist captures the refreshing miraculous duality of the desert: burning golden dunes against cool marble courtyards with crystal fountains.',
    notes: {
      top: ['Blood Orange', 'Amalfi Lemon', 'Green Cardamom'],
      heart: ['Orange Blossom', 'Green Tea', 'Nutmeg'],
      base: ['White Musk', 'Atlas Cedar', 'Mineral Amber']
    },
    sizes: [
      { size: '30ml', price: 999, originalPrice: 1249, inStock: true },
      { size: '50ml', price: 1499, originalPrice: 1799, inStock: true },
      { size: '100ml', price: 2399, originalPrice: 2999, inStock: true }
    ],
    characteristics: {
      longevity: '9+ Hours',
      sillage: 'Breezy & Refreshing',
      season: 'Spring / Summer & Daytime Wear',
      concentration: 'Eau de Parfum (22% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Frosted Champagne Glass with Polished Gold Accents',
      sprayType: 'Wide-Angle Fine Atomizer'
    },
    inStock: true
  },
  {
    id: 'oud-mystique',
    sku: 'ELO-UNI-004',
    name: 'OUD MYSTIQUE',
    subtitle: 'Oriental & Spicy • Smoky Incense',
    category: 'unisex',
    fragranceFamily: 'Spicy',
    price: 1799,
    originalPrice: 2299,
    discountPercent: 22,
    rating: 4.9,
    reviewsCount: 460,
    isBestSeller: true,
    isNewArrival: false,
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85',
    ],
    description: 'A hypnotic blend of pink pepper, Arabian bakhoor incense smoke, smoked dark oud, and sweet benzoin balm. Deeply sacred and royal.',
    fullStory: 'Oud Mystique transports you inside ancient Arabian souks at twilight, where aromatic resins smolder in silver censers. Dramatic, dark, and utterly memorable.',
    notes: {
      top: ['Pink Pepper', 'Coriander Seed', 'Incense Smoke'],
      heart: ['Smoked Bakhoor', 'Orris Butter', 'Rose Absolu'],
      base: ['Cambodian Dark Oud', 'Benzoin', 'Smoked Leather', 'Black Amber']
    },
    sizes: [
      { size: '30ml', price: 1199, originalPrice: 1599, inStock: true },
      { size: '50ml', price: 1799, originalPrice: 2299, inStock: true },
      { size: '100ml', price: 2999, originalPrice: 3899, inStock: true }
    ],
    characteristics: {
      longevity: '15+ Hours',
      sillage: 'Commanding & Ceremonial',
      season: 'Winter Evenings & Galas',
      concentration: 'Extrait de Parfum (33% Oil)'
    },
    specs: {
      origin: 'Dubai, UAE',
      bottleType: 'Lacquered Obsidian & Gold Flacon with Embossed Metal Seal',
      sprayType: 'High-Density Atomizer'
    },
    inStock: true
  }
];

export const DEMO_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    productId: 'royal-oud',
    author: 'Ayesha K.',
    rating: 5,
    date: '12 Nov 2026',
    title: 'Absolutely luxurious! Royal fragrance that lasts all day',
    comment: 'The scent opens with majestic saffron and settles into the most heavenly warm oud and amber. I got compliments everywhere I went in Mumbai. Worth every rupee!',
    isVerified: true,
    isDemo: true,
    likes: 42,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-2',
    productId: 'royal-oud',
    author: 'Mohammed R.',
    rating: 5,
    date: '08 Nov 2026',
    title: 'Premium quality and elegant packaging',
    comment: 'The bottle has serious weight and the gold cap feels so royal. As someone who collects high-end Gulf perfumes, ÉLORA is on par with Amouage and Roja.',
    isVerified: true,
    isDemo: true,
    likes: 31,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-3',
    productId: 'royal-oud',
    author: 'Sneha P.',
    rating: 5,
    date: '02 Nov 2026',
    title: 'A truly royal experience!',
    comment: 'I ordered the 50ml bottle and it arrived in a gorgeous gold-lined presentation box with wax seal accents. The rose and oud balance is perfection.',
    isVerified: true,
    isDemo: true,
    likes: 19,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-4',
    productId: 'elora-noir',
    author: 'Vikram Malhotra',
    rating: 5,
    date: '28 Oct 2026',
    title: 'My new signature scent for meetings and dinners',
    comment: 'Bold, spicy, and very sophisticated. The black pepper and cedar drydown is sensational. Projects for 8+ hours easily.',
    isVerified: true,
    isDemo: true,
    likes: 27,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-5',
    productId: 'rose-eclat',
    author: 'Zainab Al-Mansoori',
    rating: 5,
    date: '20 Oct 2026',
    title: 'Authentic Taif Rose note done to perfection',
    comment: 'Coming from the Emirates, I am very picky with rose fragrances. Rose Éclat avoids smelling synthetic; it is pure velvet petals and golden amber.',
    isVerified: true,
    isDemo: true,
    likes: 35,
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  }
];

export const CATEGORIES = [
  {
    id: 'men',
    name: "MEN'S COLLECTION",
    description: 'Bold • Powerful • Woody • Spicy',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=85',
    tagline: 'Commanding Masculinity & Timeless Woods',
    notes: ['Woody', 'Fresh', 'Spicy', 'Aquatic', 'Oud', 'Amber'],
    heroQuote: 'Crafted for leaders who leave a lasting legacy.'
  },
  {
    id: 'women',
    name: "WOMEN'S COLLECTION",
    description: 'Elegant • Floral • Romantic • Sophisticated',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1000&q=85',
    tagline: 'Enchanting Florals & Velvet Allure',
    notes: ['Floral', 'Fruity', 'Vanilla', 'Musky', 'Sweet', 'Oriental'],
    heroQuote: 'Elegance woven into every fragrant droplet.'
  },
  {
    id: 'unisex',
    name: "UNISEX COLLECTION",
    description: 'Unique • Rich • Oud • Amber',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85',
    tagline: 'Transcendent Arabian Heritage Beyond Gender',
    notes: ['Arabian Oud', 'Amber', 'Musk', 'Citrus', 'Woody', 'Oriental'],
    heroQuote: 'Pure olfactory art for true perfume connoisseurs.'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'selection',
    title: 'Premium Fragrance Selection',
    description: 'Every fragrance is hand-blended with high-concentration perfume oils sourced from ethical Arabian distilleries.',
    icon: 'Sparkles'
  },
  {
    id: 'scents',
    title: 'Elegant Arabian Inspired Scents',
    description: 'Rich oriental profiles including authentic Cambodi oud, Kashmiri saffron, Taif rose, and crystalline amber.',
    icon: 'Flame'
  },
  {
    id: 'packaging',
    title: 'Beautiful Gift Packaging',
    description: 'Luxury unboxing experience with custom gold-embossed presentation boxes, silk pouches, and wax seals.',
    icon: 'Gift'
  },
  {
    id: 'security',
    title: 'Secure Shopping Experience',
    description: 'Fast encrypted checkout, instant tracking updates, tamper-proof courier packaging, and dedicated concierge support.',
    icon: 'ShieldCheck'
  }
];

export const FAQS = [
  {
    question: 'How can I place an order?',
    answer: 'Browse our fragrance collections, choose your desired bottle size (30ml, 50ml, or 100ml), click "Add to Cart", and proceed through our seamless checkout. You will receive an instant order confirmation with a tracking ID.'
  },
  {
    question: 'What sizes are available?',
    answer: 'Our fragrances are available in 3 sizes: 30ml Travel Flacon, 50ml Signature Flacon, and 100ml Grand Decanter. Pricing updates dynamically as you select your preferred size.'
  },
  {
    question: 'Do you offer Cash on Delivery (COD)?',
    answer: 'Yes! We offer Cash on Delivery across most serviceable PIN codes in India. You can also pay seamlessly via UPI (Google Pay, PhonePe, Paytm) and Credit/Debit cards.'
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order is dispatched, you will receive a tracking link via SMS/Email. You can also visit our "Order Tracking" page anytime and enter your Order ID (e.g. ELO-948215) to see real-time dispatch and delivery progress.'
  },
  {
    question: 'What is your return & replacement policy?',
    answer: 'We provide a 7-day replacement guarantee if your perfume bottle arrives damaged or broken in transit. Unopened bottles in original sealed packaging can also be returned within 7 days of delivery.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'Our royal concierge team is available Monday to Saturday (9:00 AM – 8:00 PM IST). You can click the WhatsApp button on our website, email us at concierge@elora-perfumes.com, or use the Contact Us page.'
  }
];
