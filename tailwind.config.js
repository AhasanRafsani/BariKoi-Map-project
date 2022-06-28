/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
      'listBox': '0 3px 3px 3px rgba(0, 0, 0, 0.3)',
      'detailsBox': '0 3px 3px 3px rgba(0, 0, 0, 0.3)',
      'inputBox': '0px 2px 2px 2px rgba(0, 0, 0, 0.3)',
      
         }
          },
  },
  plugins: [require('tailwind-scrollbar'),],
}
