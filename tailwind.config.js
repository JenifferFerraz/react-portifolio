/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', 'sans'] // Use 'sans' or 'serif' depending on your preference
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.red.600"), 0 0 20px theme("colors.red.800")'
      }
    }
  },
  plugins: []
}
