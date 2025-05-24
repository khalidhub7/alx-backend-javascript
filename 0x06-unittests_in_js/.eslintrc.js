module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
    mocha: true,
  },
  extends: ["airbnb-base", "plugin:jest/all", "plugin:mocha/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["jest", "mocha"],
  settings: {
    jest: {
      version: "detect",
    },
  },
  rules: {
    "max-classes-per-file": "off",
    "no-underscore-dangle": "off",
    "no-console": "off",
    "no-shadow": "off",
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "jest/require-hook": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      excludedFiles: "babel.config.js",
    },
  ],
};
