/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
    root: true,
    env: {
        node: true,
        commonjs: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'no-useless-escape': 'warn',
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',
    },
};