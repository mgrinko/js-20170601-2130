const path = require('path');

module.exports = {
  entry: {
    index: './frontend/app.js',
    login: './frontend/login.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },

  watch: true,
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime'],
          }
        }
      },
    ]
  }
};