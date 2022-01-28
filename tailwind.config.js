module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box-s-sml': '0px 0px 30px 5px rgb(0 0 0 / 50%)',
        'box-s-sml2': '0 6px 12px rgb(0 0 0 / 65%)',
      },
      transitionProperty: {
        'bg-transition': 'background-color 0.6s ease',
        'height-transition': 'max-height 0.8s ease',
      }
    },
  },
  plugins: [],
}