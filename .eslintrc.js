module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: "path/to/config.js",
    },
  },
  rules: {
    "max-len": [1, 80, 2, {ignoreComments: true}],
    "quotes": ["error", "single"]
  }
};