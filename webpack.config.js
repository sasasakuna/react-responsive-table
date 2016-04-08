var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './',
    port: 3000
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    path.resolve(__dirname, './src/index.jsx')
  ],
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=react,presets[]=es2015'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
