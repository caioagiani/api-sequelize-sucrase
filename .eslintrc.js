module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'import-helpers'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    radix: 0,
    eqeqeq: 0,
    camelcase: 0,
    'prettier/prettier': 'error',
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'global-require': 0,
    'consistent-return': 0,
    'func-names': 0,
    'no-unused-expressions': 0,
    'no-const-assign': 0,
    'no-plusplus': 0,
    'linebreak-style': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
