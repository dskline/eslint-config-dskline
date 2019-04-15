
const typescriptDelimiter = {
  delimiter: "comma",
  requireLast: false
}

module.exports = {

  parser: "@typescript-eslint/parser",

  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "react-app",
    "standard",
    "standard-react"
  ],

  plugins: [
    "@typescript-eslint",
    "babel",
    "compat",
    "import",
    "jest",
    "jsx-a11y",
    "promise",
    "simple-import-sort"
  ],

  rules: {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": {
      multiLine: typescriptDelimiter,
      singleLine: typescriptDelimiter
    },
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    "padded-blocks": "off",
    "simple-import-sort/sort": "error"
  }
}