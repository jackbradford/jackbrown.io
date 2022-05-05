const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  //devtool: 'inline-source-map',
  devServer: {
    //static: path.join(__dirname, "htdocs/"),
    static: {
      directory: path.join(__dirname, 'htdocs'),
      //publicPath: path.join(__dirname, "/htdocs/")
    },
    historyApiFallback: true,
    port: 3001,
  },
});

