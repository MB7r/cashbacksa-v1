// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1E5631',
        'brand-green-light': '#DFF5E3',
        'brand-orange': '#FFA552',
        'brand-gray': '#F4F4F4',
        'brand-text': '#333333',
        'brand-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
