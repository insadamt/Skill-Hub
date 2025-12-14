// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geom', 'sans-serif'], // Makes Geom the default
        geom: ['Geom', 'sans-serif'],  // Also available as font-geom
      },
    },
  },
  plugins: [],
}
