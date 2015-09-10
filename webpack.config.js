var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/test",
  entry: {
    javascript: "./index.js",
    html: "./index.html"
  },

  output: {
    filename: "app.js",
    path: __dirname + "/app"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?optional[]=runtime&stage=0"]
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
