const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'word-number.js',
    library: {
      name: 'WordNumber',
      type: 'umd'
    },
  },
  externals: {
    lodash: 'lodash'
  },
};