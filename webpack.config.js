const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'word-number.js',
    library: 'WordNumber',
    libraryTarget: 'umd',
    // libraryExport: 'default',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  externals: {
    "lodash": 'lodash'
  },
};