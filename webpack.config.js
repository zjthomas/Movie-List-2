const path = require('path');

module.exports = {
	mode: "development",
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  // externals: {
  //   'react/addons': true, // important!!
  //   'react/lib/ReactContext': true,
  //   'react/lib/ExecutionEnvironment': true
  // }
};
