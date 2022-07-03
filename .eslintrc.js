module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-trailing-spaces': 'off',
    'key-spacing': 'off',
    'eol-last': 'off',
    'vue/multi-word-component-names': 'off',
    'space-before-blocks': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-unused-components':'off'

  }
}