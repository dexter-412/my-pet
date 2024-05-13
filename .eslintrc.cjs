/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  plugins: ['simple-import-sort', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['layouts/**/*', 'pages/**/*', 'error.vue'],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': process.env.NODE_ENV === 'production' ? ['warn', { allow: ['error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'symbol-description': 'off',
    camelcase: ['error', { allow: ['((.*?)_([a-zA-Z]{0,}[0-9]{0,}[a-zA-Z]{0,})){0,}'] }],
    // https://typescript-eslint.io/rules/no-unused-vars/
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'property',
        format: null,
      },
    ],
    'vue/html-self-closing': [
      'warn', {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'never',
        math: 'never',
      },
    ],
    'vue/attribute-hyphenation': [
      'warn',
      'always',
      {
        ignore: ['viewBox', 'gradientUnits', 'modelValue'],
      },
    ],
    'vue/require-component-is': 'off',
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods'],
      },
    ],
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand',
      },
    ],
    'vue/no-mutating-props': ['error'],
    'vue/multi-word-component-names': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    curly: 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    // check
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    // check
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    // check
    'prefer-promise-reject-errors': 'warn',
    'no-extra-boolean-cast': 'off',
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
    'array-bracket-spacing': ['error', 'never'],
    'no-multiple-empty-lines': ['error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'vue/no-multiple-template-root': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // from nuxt directory
          ['^#?\\w'],
          // types
          ['^(@/app/types)(/.*|$)'],
          // plugins + composables + store
          ['^(@/plugins|@/composables||@/store)(/.*|$)'],
          // app
          ['^(@/app)(/.*|$)'],
          // components
          ['^(@|components)(/.*|$)'],
          // Absolute imports and other imports such as Vue-style `@/foo`. Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
  },
}
