const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const package = require('./package.json');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = (env = {}) => {
  const envFile = env.ENVFILE ? env.ENVFILE : '.env';
  require('dotenv').config({
    path: path.resolve(process.cwd(), envFile),
  });
  return {
    entry: {
      app: `${srcPath}/index.tsx`,
    },
    output: {
      path: distPath,
      filename: '[name]-[contenthash:8].js',
      publicPath: '/',
    },
    resolve: {
      alias: {
        assets: `${srcPath}/assets`,
        components: `${srcPath}/components`,
        content: `${srcPath}/content`,
        core: `${srcPath}/core`,
        screens: `${srcPath}/screens`,
        scenes: `${srcPath}/scenes`,
        store: `${srcPath}/store`,
        styles: `${srcPath}/styles`,
        utils: `${srcPath}/utils`,
        mock: `${srcPath}/mock`,
      },
      extensions: ['.js', '.ts', '.tsx'],
      symlinks: false,
      cacheWithContext: false,
      fallback: { crypto: false },
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: 'ts-loader', include: srcPath },
        { test: /\.(md)/, use: ['raw-loader', { loader: 'markdown-loader' }], include: srcPath },
        {
          test: /\.(woff|woff2|eot|ttf|svg|png|jpg)/,
          use: [{ loader: 'url-loader', options: { limit: 100000, name: 'assets/[name].[ext]' } }],
          include: srcPath,
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcPath },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-router-dom)[\\/]/,
            priority: 1,
            name: 'react',
          },
          lodash: {
            test: /[\\/]node_modules[\\/]lodash/,
            priority: 1,
            name: 'lodash',
          },
          material: {
            test: /[\\/]node_modules[\\/]@material-ui/,
            priority: 1,
            name: 'material-ui',
          },
          redux: {
            test: /[\\/]node_modules[\\/]redux/,
            priority: 1,
            name: 'redux',
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        url: process.env.APP_URL || '',
        title: package.title,
        company: package.company,
        description: package.description,
        keywords: package.keywords,
        filename: 'index.html',
        template: 'src/templates/app.ejs',
        hash: true,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyJS: true,
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/*.{txt,json,ico}', to: '[name].[ext]' },
          { from: '**/*.{png,jpg}', context: path.resolve(__dirname, 'public') },
        ],
      }),
      new webpack.DefinePlugin({
        APP_VERSION: JSON.stringify(package.version),
        APP_NAME: JSON.stringify(package.name),
        APP_TITLE: JSON.stringify(package.title),
        APP_COMPANY: JSON.stringify(package.company),
        APP_DESCRIPTION: JSON.stringify(package.description),
        APP_ENV: JSON.stringify(process.env.APP_ENV),
        APP_URL: JSON.stringify(process.env.APP_URL || ''),
        API_URL: JSON.stringify(process.env.API_URL || ''),
        COGNITO_USER_POOL_ID: JSON.stringify(process.env.COGNITO_USER_POOL_ID || ''),
        COGNITO_WEB_CLIENT_ID: JSON.stringify(process.env.COGNITO_WEB_CLIENT_ID || ''),
        COGNITO_REGION: JSON.stringify(process.env.COGNITO_REGION || ''),
        COGNITO_DOMAIN: JSON.stringify(process.env.COGNITO_DOMAIN || ''),
        STRIPE_KEY: JSON.stringify(process.env.STRIPE_KEY || ''),
        RECAPTCHA_PUBLIC: JSON.stringify(process.env.RECAPTCHA_PUBLIC || ''),
      }),
    ],
    devServer: {
      host: 'localhost',
      port: process.env.PORT || process.env.APP_PORT || 7000,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    cache: {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '.cache'),
    },
    devtool: 'source-map',
  };
};
