import PurgeCss from '@fullhuman/postcss-purgecss';
import Autoprefixer from 'autoprefixer';

const purgeCssOptions = {
  content: ['index.html', './src/**/*.jsx'],
};

const Config = {
  plugins: [Autoprefixer],
};

if (process.env.NODE_ENV === 'production') {
  Config.plugins.push(PurgeCss(purgeCssOptions));
}

export default Config;
