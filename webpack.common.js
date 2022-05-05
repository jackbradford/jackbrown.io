const path = require('path');
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: [
    "./src/jackbrown-io.jsx",
  ],
  module: {
    rules: [
      /**
       * Transform ES6/JSX. All js/jsx files outside node_modules/ and
       * bower_components/ are processed via babel.
       **/
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] }
      },
      /**
       * Process CSS.
       **/
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    filename: './jackbrown-io.bundle.js',
    path: path.resolve(__dirname, 'htdocs/js'),
  },
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, 'src/actions/'),
      Components: path.resolve(__dirname, 'src/component/'),
      Config: path.resolve(__dirname, 'src/config/'),
      Reducers: path.resolve(__dirname, 'src/reducers/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
  }
};

