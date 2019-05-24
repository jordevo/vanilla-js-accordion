const postcssPresetEnv = require('postcss-preset-env');

const prodMode = process.env.NODE_ENV === 'production';
const devMode = process.env.NODE_ENV !== 'production';

if (devMode) {
  module.exports = {
    plugins: [
      postcssPresetEnv({
        browsers: ['> 1%']
      }),
      require('autoprefixer')
    ]
  };

  return;
}

if (prodMode) {
  module.exports = {
    plugins: [
      postcssPresetEnv({
        browsers: ['> 1%']
      }),
      require('cssnano'),
      require('autoprefixer')
    ]
  };

  return;
}

module.exports = {};
