const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/jackbrown-io.jsx',
  },
  plugins: [ new CleanWebpackPlugin() ],
  output: {
    filename: './jackbrown-io.bundle.js',
    path: path.resolve(__dirname, 'htdocs/js'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, 'src/actions/'),
      Components: path.resolve(__dirname, 'src/component/'),
      Config: path.resolve(__dirname, 'src/config/'),
      Reducers: path.resolve(__dirname, 'src/reducers/')
    }
  }
};

