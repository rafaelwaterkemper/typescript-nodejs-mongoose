module.exports = {
  parser: "@typescript-eslint/parser",
  'env': {
    'browser': true,
    'es6': true
  },
  plugins: ["@typescript-eslint"],
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
       { "allowExpressions": true }
     ]
  }
}
