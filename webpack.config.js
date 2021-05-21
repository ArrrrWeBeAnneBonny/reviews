var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  entry: [`${SRC_DIR}/src/app.jsx`, `${SRC_DIR}/public/styles.css`],
  output: {
    filename: 'reviews.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       },
      },
      {
        test: /\.css?/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
};