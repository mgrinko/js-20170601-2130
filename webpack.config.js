const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },

  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],

  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    inline: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/'
  }
};