const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = env => ({
  mode: env.mode,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   // options: {
          //   //   name: '[path][name].[ext]',
          //   // },
          // },
          // 'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: [':src', 'source:src'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          //fallback to style-loader in dev
          process.env.NODE_ENV === 'production'
            ? miniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:7].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:base64:7].[ext]',
              outputPath: 'images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      template: './index.html',
      favicon: './img/favicon.png',
    }),
    new miniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
});
