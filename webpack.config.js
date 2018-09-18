var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    worker: './src/worker.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },

  output: {
    path: path.join(__dirname, './dist/js'),
    filename: '[name].js'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
}
