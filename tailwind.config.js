/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F4A522',
          hover: '#df9419',
          amber: '#F4A522',
        },
        carbon: {
          DEFAULT: '#1D1D1B',
          dark: '#141412',
          card: '#222220',
        },
        pearl: {
          DEFAULT: '#F7F7F8',
        },
        muted: {
          DEFAULT: '#5A5A5C',
          light: '#8E8E93',
          border: '#E5E5E7',
        },
        // Backward-compatible tokens mapped to official palette
        gold: {
          DEFAULT: '#F4A522',
          deep: '#df9419',
          pale: '#fce5be',
          bright: '#F4A522',
        },
        ink: {
          DEFAULT: '#1D1D1B',
          soft: '#2A2A28',
          warm: '#1D1D1B',
          charcoal: '#2A2A28',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          bone: '#FFFFFF',
          cream: '#F7F7F8',
        },
        ash: {
          DEFAULT: '#5A5A5C',
          soft: '#8E8E93',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        editorial: '0 40px 100px -30px rgba(29, 29, 27, 0.15), 0 15px 40px -10px rgba(29, 29, 27, 0.08)',
        card: '0 10px 40px -15px rgba(29, 29, 27, 0.08)',
        'card-hover': '0 20px 50px -15px rgba(244, 165, 34, 0.18)',
        whatsapp: '0 10px 25px -5px rgba(37, 211, 102, 0.4)',
      },
    },
  },
  plugins: [],
}
