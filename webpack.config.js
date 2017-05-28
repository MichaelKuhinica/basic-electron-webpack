const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //dev
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    inline: false,
    port: 9000
  },

  node: {
    __dirname: false
  },

  entry: {
    'main': './src/app/main.js',
    'ui/index': [
      'webpack-dev-server/client?http://localhost:9000',
      './src/ui/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      excludeChunks: ['main']
    }),
    new WriteFilePlugin()
  ],
  target: 'electron'

};
