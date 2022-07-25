// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        extraFileExtensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        vueFeatures: {
            interpolationAsNonHTML: true,
        },
    },
    // extraFileExtensions:[],
    rules: {
        'prettier/prettier': 0,
        'vue/multi-word-component-names': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/no-multiple-template-root': 0,
        'vue/no-mutating-props': 0,
        'vue/comment-directive': 'off',
        // indent: [1, 2],
    },
});
