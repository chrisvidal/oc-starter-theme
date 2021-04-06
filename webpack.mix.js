const mix = require('laravel-mix')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
require('laravel-mix-copy-watched')
require('laravel-mix-nunjucks')

mix
  .setPublicPath('assets/dist/')
  .js('assets/js/app.js', 'js')
  .sass('assets/css/app.scss', 'css')
  // .njk('assets/templates/', 'dist/')
  .browserSync({
    // server: 'dist/',
    proxy: 'http://oc-pcf.local/', //replace with your url
    files: [
      'assets/css/**/*.{css,scss}',
      'assets/js/**/*.js',
      'assets/fonts/**/*.{woff,woff2}',
      'assets/img/**/*.{ico,gif,jpg,png,svg}',
      // 'assets/templates/**/*.html',
      'layouts/**/*.htm',
      'pages/**/*.htm',
      'partials/**/*.htm',
      'tailwind.config.js',
    ],
  })
  .copyWatched('assets/fonts/**/*.{woff,woff2}', 'assets/dist/fonts')
  .webpackConfig({
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: '**/*.{ico,gif,jpg,png,svg}',
            to: 'img',
            context: 'assets/img',
          },
        ],
      }),
      new ImageMinimizerPlugin({
        minimizerOptions: {
          plugins: [
            ['gifsicle'],
            ['mozjpeg', { quality: 50 }],
            ['pngquant', { quality: [0.5, 0.5] }],
            ['svgo'],
          ],
        },
      }),
    ],
  })
  .options({
    processCssUrls: false,
    terser: { extractComments: false } // Stop Mix from generating license file
  })
  .disableSuccessNotifications()

if (mix.inProduction()) {
  mix.version()
}
