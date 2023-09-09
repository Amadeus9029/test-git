module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rule: {
    'prettier/prettier': 'error'
  }
}
