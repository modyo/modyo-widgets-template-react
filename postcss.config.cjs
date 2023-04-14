const PurgeCss = require('@fullhuman/postcss-purgecss');
const Autoprefixer = require('autoprefixer');
const Path = require('path');
const resolve = Path.resolve;

const purgeCssOptions = {
  content: [
    'index.html',
    './src/**/*.jsx',
    // change modyo-widgets-template-react for the Modyo commons for this project
    resolve(__dirname, 'node_modules/@modyo/modyo-widgets-template-react/**/*.js'),
  ],
};

const Config = {
  plugins: [Autoprefixer],
};

if (process.env.NODE_ENV === 'production') {
  Config.plugins.push(PurgeCss(purgeCssOptions));
}

module.exports = Config;
