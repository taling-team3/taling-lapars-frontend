const tailwindcssForms = require('@tailwindcss/forms');

module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssForms],
};
