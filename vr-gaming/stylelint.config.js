export default {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-scss',
    'stylelint-config-property-sort-order-smacss',
  ],
  rules: {
    'scss/dollar-variable-pattern': null,
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'vertical', 'horizontal'],
      },
    ],
    'scss/double-slash-comment-whitespace-inside': null,
    'no-descending-specificity': null,
    'scss/no-global-function-names': null,
    'no-invalid-position-at-import-rule': null,
    'scss/at-mixin-pattern': null,
    'keyframes-name-pattern': null,
    'scss/at-function-pattern': null,
    'scss/load-no-partial-leading-underscore': null,
    'number-max-precision': null,
    'media-feature-name-no-unknown': [true, { ignoreMediaFeatureNames: ['min-device-pixel-ratio'] }],
    'scss/operator-no-newline-after': null,
  },
};