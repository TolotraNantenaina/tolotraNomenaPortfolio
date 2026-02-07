/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0B1120',
          light: '#1a2332',
          dark: '#060a14',
        },
        beige: {
          DEFAULT: '#F5E6D3',
          light: '#FAF3E8',
          dark: '#E8D5BC',
        },
        brown: {
          DEFAULT: '#8B5A3C',
          light: '#A67355',
          dark: '#6D4730',
        },
        garnet: {
          DEFAULT: '#991B1E',
          light: '#B8292C',
          dark: '#7A1618',
        },
      },
    },
  },
  plugins: [],
};
