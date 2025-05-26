module.exports = {
  env: { es6: true, mocha: true },

  extends: ["airbnb-base", "plugin:mocha/recommended"],

  parserOptions: { ecmaVersion: 2018, sourceType: "module" },

  plugins: ["mocha"],

  rules: {
    "max-classes-per-file": "off",
    "no-underscore-dangle": "off",
    "no-console": "off",
    "no-shadow": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],

    "jest/require-hook": "off",
    "function-paren-newline": ["error", "consistent"],
    "mocha/no-mocha-arrows": "off",
    "no-self-compare": "off",
    "no-unused-expressions": "off",
    "mocha/no-skipped-tests": "off",
  },

  overrides: [{ files: ["*.js"], excludedFiles: ".eslintrc.js" }],
};
