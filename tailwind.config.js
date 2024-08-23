/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this path to match your source files
    "./gatsby-browser.js",
    "./gatsby-ssr.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
