var path = require('path');

module.exports = {
  entry: './public/javascripts/ng-app.js',
  output: {
    path: path.join(__dirname, './public/dist/'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: 'url-loader?limit=50000&name=fonts/[name].[ext]',
      }, {
        test: /\.(png|jpe?g)$/,
        loader: 'url-loader?limit=50000&name=images/[name].[ext]',
      },
    ],
  },
};
