/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elora: {
          deep: '#140A07',        // deepest chocolate-black
          primary: '#24150F',     // dark chocolate brown
          secondary: '#3B2419',   // rich coffee brown
          surface: '#2B170F',     // card surface
          elevated: '#341C12',    // hover / elevated card
          gold: '#C6A15B',        // champagne royal gold
          goldLight: '#E4CD99',   // light shimmering gold
          goldMuted: '#9B7C3E',   // dark antique gold
          goldGlow: '#F5E6BE',    // bright highlight
          beige: '#E9DDC9',       // warm cream beige
          cream: '#FAF8F3',       // pure soft cream white
          sand: '#D6C7B2',        // neutral muted sand
          textMuted: '#B29E93',   // soft muted body text on dark
          border: 'rgba(198, 161, 91, 0.22)',
          borderHover: 'rgba(198, 161, 91, 0.55)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(198, 161, 91, 0.15)',
        'gold-md': '0 8px 30px rgba(198, 161, 91, 0.22)',
        'gold-lg': '0 12px 40px rgba(198, 161, 91, 0.32)',
        'dark-luxury': '0 10px 30px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E4CD99 0%, #C6A15B 50%, #9B7C3E 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #F5E6BE 0%, #D4AF37 50%, #B8923F 100%)',
        'dark-overlay': 'linear-gradient(180deg, rgba(20, 10, 7, 0.7) 0%, rgba(20, 10, 7, 0.95) 100%)',
        'luxury-radial': 'radial-gradient(circle at 50% 30%, rgba(198, 161, 91, 0.15) 0%, rgba(20, 10, 7, 0) 70%)',
      }
    },
  },
  plugins: [],
}
