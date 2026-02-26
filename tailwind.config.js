/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Fantasy palette
        'fantasy-gold': '#D4AF37',
        'fantasy-bronze': '#B87333',
        'fantasy-silver': '#C0C0C0',
        'parchment': '#D2B48C',
        'parchment-dark': '#BC9A6A',
        'parchment-light': '#F5DEB3',
        'ink': '#2C1810',
        'blood-red': '#8B0000',
        'mystic-purple': '#6B46C1',
        'forest-green': '#228B22',
        'ocean-blue': '#1E3A8A',
        'dark-wood': '#3E2723',
        'ornate-gold': '#FFD700',
        'old-gold': '#CFB53B',
        'antique-brass': '#CD9575',

        // Light mode
        light: {
          bg: { primary: '#FBF8F3', secondary: '#F5F0E8', tertiary: '#E8DDD0', quaternary: '#D4C5B0' },
          text: { primary: '#2D1B0E', secondary: '#5D4037', tertiary: '#8D6E63', accent: '#1A237E' },
          primary: { DEFAULT: '#1A237E', hover: '#000051', light: '#534BAE' },
          secondary: { DEFAULT: '#B8860B', hover: '#8B6914', light: '#DAA520' },
          accent: { DEFAULT: '#B71C1C', hover: '#8B0000', light: '#D32F2F' },
          success: { DEFAULT: '#1B5E20', hover: '#2E7D32', light: '#4CAF50' },
          warning: { DEFAULT: '#E65100', hover: '#BF360C', light: '#FF9800' },
          error: { DEFAULT: '#C62828', hover: '#AD1457', light: '#F44336' },
          info: { DEFAULT: '#1565C0', hover: '#0D47A1', light: '#2196F3' },
          border: { DEFAULT: '#D4C5B0', hover: '#B8860B', focus: '#1A237E' },
        },

        // Dark mode
        dark: {
          bg: { primary: '#0A0A0F', secondary: '#1A1A24', tertiary: '#2A2A3A', quaternary: '#3A3A4A' },
          text: { primary: '#E8E3D3', secondary: '#C4B5A0', tertiary: '#A0958A', accent: '#7C4DFF' },
          primary: { DEFAULT: '#7C4DFF', hover: '#651FFF', light: '#B085FF' },
          secondary: { DEFAULT: '#FFD700', hover: '#FFC107', light: '#FFEB3B' },
          accent: { DEFAULT: '#FF6B6B', hover: '#FF5252', light: '#FF8A80' },
          success: { DEFAULT: '#4CAF50', hover: '#66BB6A', light: '#81C784' },
          warning: { DEFAULT: '#FF9800', hover: '#FFB74D', light: '#FFCC02' },
          error: { DEFAULT: '#F44336', hover: '#EF5350', light: '#E57373' },
          info: { DEFAULT: '#2196F3', hover: '#42A5F5', light: '#64B5F6' },
          border: { DEFAULT: '#3A3A4A', hover: '#FFD700', focus: '#7C4DFF' },
        },
      },
      fontFamily: {
        fantasy: ['Cinzel'],
        body: ['LibreBaskerville'],
      },
    },
  },
  plugins: [],
};
