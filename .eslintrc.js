module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Bu satırı ekleyin
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier', // Bu satırı ekleyin
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        // Bu bölümü ekleyin
        arrowParens: 'always',
        singleQuote: true,
        bracketSpacing: false,
        trailingComma: 'all',
      },
    ],
  },
};
