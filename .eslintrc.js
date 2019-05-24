module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaVersion: 6,
    ecmaFeatures: {
      globalReturn: false,
      experimentalObjectRestSpread: true
    },
    babelOptions: {
      configFile: ".babelrc",
    },
  },
  rules: {
    "max-len": [1, 80, 2, {ignoreComments: true}],
    "quotes": ["error", "single"]
  }
};