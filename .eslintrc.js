module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "rules": {
    "react/prefer-stateless-function":0,
    "jsx-a11y/href-no-hash": 0,
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": 0,
    "no-console": 0,
    "react/jsx-pascal-case": 1,
    "react/jsx-filename-extension": [2, { extensions: ['.js','.jsx'] }],
    "no-unused-vars": "warn",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "import/prefer-default-export": 0,
    "object-shorthand": 0,
    "class-methods-use-this": 0,
    "react/no-unused-prop-types": 1,
    "no-param-reassign": 0,
  },
  "env": {
    "browser": true
  }
}
