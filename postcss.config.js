module.exports = {
  plugins: {
    'postcss-easy-import': {},
    'postcss-extend-rule': {},
    'postcss-nested': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-header': {
      header: "/*! Joran v" + require('./package.json').version + " */"
    }
  }
};
