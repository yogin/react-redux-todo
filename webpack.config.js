var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    bundle: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/app.jsx'
    ]
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loaders: ['babel'],
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    port: 3000
  }
};
