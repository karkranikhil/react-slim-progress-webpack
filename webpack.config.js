var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    javascript: "./test/index.js",
    html: "./test/index.html"
  },

  output: {
    filename: "app.js",
    path: "app"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('app.css', {
        allChunks: true
    })
  ],

  devtool: 'source-map',

  externals: {
    //'react': 'React'
  }
};
