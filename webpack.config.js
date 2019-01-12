const path = require('path');

module.exports = {
  entry: {
    app: './search//index.js'
  },
  output: {
    path: path.join(__dirname, 'src/static/js/'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      // Test for js or jsx files
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
        // Convert ES6 syntax to ES5 for browser compatibility
        presets: ['es2015', 'react'],
      },
    }
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};