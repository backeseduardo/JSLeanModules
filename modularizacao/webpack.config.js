var path = require('path');

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  }
};