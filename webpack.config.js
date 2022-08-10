var path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, './client/src/index.jsx'),
  module: {
    rules: [
      {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: ['babel-loader']
      },
      {
         test: /\.(css)$/,
         use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};