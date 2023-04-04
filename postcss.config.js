import PurgeCss from '@fullhuman/postcss-purgecss';
import Autoprefixer from 'autoprefixer';

const purgeCssOptions = {
  content: ['./src/**/*.html', './src/**/*.jsx'],
};

const Config = {
  plugins: [Autoprefixer, PurgeCss(purgeCssOptions)],
};

export default Config;
