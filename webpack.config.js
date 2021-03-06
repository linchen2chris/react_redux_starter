/*
 * Copyright(c) omk 2016
 * Filename: webpack.config.js
 * Author  : Lin Chen <lc@omk.io>
 * Create  : Monday, 14 November 2016.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: {
   app: path.resolve(APP_PATH, 'index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: APP_PATH
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'My first react app'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
}
