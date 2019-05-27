const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}, argv = {}) => ({
  devtool: 'source-map',
  // output: {

  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true // disables on development mode
            }
          }
        ]
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
          argv.mode === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // Any option given to Webpack client can be captured on the 'argv'
    argv.mode === 'development' ? new HtmlWebpackPlugin() : null,
    argv.mode === 'production'
      ? new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })
      : null
  ].filter(
    // To remove any possibility of 'null' values inside the plugins array, we filter it
    plugin => !!plugin
  )
});