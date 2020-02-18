const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const basePath = __dirname;

module.exports = (mode = 'development') => ({
  entry: path.join(basePath, 'src', 'index.tsx'),
  output: {
    path: path.join(basePath, 'build'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: mode === 'development' ? 'inline-source-map' : 'eval-source-map',
  devServer: {
    port: 3000,
    contentBase: path.join(basePath, 'build'),
    open: true,
    compress: true,
    watchContentBase: true,
    progress: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          mimetype: 'application/octet-stream',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(basePath, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      // 'process.env.FIREBASE_apikey': JSON.stringify(process.env.FIREBASE_apikey),
      // FIREBASE_authDomain: JSON.stringify(process.env.FIREBASE_authDomain),
      // FIREBASE_databaseURL: JSON.stringify(process.env.FIREBASE_databaseURL),
      // FIREBASE_projectId: JSON.stringify(process.env.FIREBASE_apikey),
      // FIREBASE_storageBucket: JSON.stringify(process.env.FIREBASE_apikey),
      // FIREBASE_messagingSenderId: JSON.stringify(process.env.FIREBASE_apikey),
    }),
  ],
});
