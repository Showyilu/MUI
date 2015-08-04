var webpack = require("webpack");
var path = require("path");
module.exports = {
  context: __dirname,
  entry: "./app/assets/javascripts/app.js",
  output: {
    path: path.join(__dirname, "public/assets"), // absolute path
    publicPath: "/assets/", // relative path for github pages
    filename: "main.js", // no hash in main.js because index.html is a static page
    chunkFilename: "[hash]/js/[id].js",
    hotUpdateMainFilename: "[hash]/update.json",
    hotUpdateChunkFilename: "[hash]/js/[id].update.js"
  },
  module: {
    loaders: [
      { test: /\.json$/,   loader: "json-loader" },
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.css$/,    loader: "style-loader!css-loader?root=../" },
      { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
      { test: /\.jade$/,   loader: "jade-loader?self" },
      { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=10000" },
      { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
      { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
      { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000'}
    ],
    preLoaders: [
      {
        test: /\.js$/,
        include: pathToRegExp(path.join(__dirname, "app")),
        loader: "jshint-loader"
      }
    ]
  },
  resolve: {
    fallback: path.join(__dirname, "jam")
  },
  node: {
    fs: "empty"
  },
  amd: { jQuery: true },
  plugins: [
   // new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 20 })
  ],
  fakeUpdateVersion: 0
};
function escapeRegExpString(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); }
function pathToRegExp(p) { return new RegExp("^" + escapeRegExpString(p)); }