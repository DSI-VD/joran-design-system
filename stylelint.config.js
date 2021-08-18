module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'extend',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'max-empty-lines': 5,
    'no-descending-specificity': null,
  },
  ignoreFiles: ['src/assets/styles/_elements.a11y.css'],
};
