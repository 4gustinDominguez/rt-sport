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
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/')
    },
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
    historyApiFallback: true,
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
  ],
});
