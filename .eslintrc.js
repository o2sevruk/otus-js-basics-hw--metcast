module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base'],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'import/prefer-default-export': 'off',
    'no-tabs': 'off',
    'no-undef': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    'no-return-await': 'off',
    'no-unused-vars': 'off',
  },
};
