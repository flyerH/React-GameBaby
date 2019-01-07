module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'react/prefer-stateless-function': 'warn',
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'object-shorthand': 'warn',
    'class-methods-use-this': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/no-unused-state': 'warn',
  },
};
