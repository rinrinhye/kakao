const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
        ],
      },
      {
        test: /\.(png|jpeg|svg|webp|gif|mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            const { dir, name } = path.parse(pathData.filename);
            return `${dir}/${name}[ext]`;
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './site.webmanifest'),
          to: path.resolve(__dirname, 'docs/site.webmanifest'),
        },
        {
          from: '*.png',
          to: path.resolve(__dirname, 'docs'),
          context: __dirname,
        },
        {
          from: '*.svg',
          to: path.resolve(__dirname, 'docs'),
          context: __dirname,
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
