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
};