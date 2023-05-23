/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "colors" : {
        "primary": "#042B8A",
        "primary-dark": "#032074"
      },
    },
  },
  plugins: [],
}
