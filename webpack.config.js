const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      cssExtractor = new ExtractTextPlugin('styles.css'),
      htmlExtractor = new ExtractTextPlugin('index.html');      

module.exports = {
  entry: [
    './source/app/index'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'app.js'
  },
  devServer: {
    contentBase: './source'
  },
  plugins: [
		cssExtractor,
		htmlExtractor
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: cssExtractor.extract('style-loader', 'css-loader!sass-loader')
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: htmlExtractor.extract('html-loader!html-minify-loader')
			}
    ]
  }
};
