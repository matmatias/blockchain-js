const path = require("path")
const webpack = require("webpack")
 const HtmlWebpackPlugin = require("html-webpack-plugin")
//const MiniCssExtractPlugin = require("mini-css-extract-plugin")
//const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// const CopyPlugin = require("copy-webpack-plugin")
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')


const srcDir        = path.join(__dirname,"./src")
const distDir       = path.join(__dirname,"./build") // pode usar a dist
const entry         = path.join(srcDir, "index.jsx" )
const srcHtmlLayout = path.join(__dirname, "index.html")

module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: "web",
  entry: {
    main: entry // ./src/index.js
  },
  output: {
    filename: "bundle.js",
    path: distDir
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [ "node_modules", srcDir ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: srcHtmlLayout,
      chunksSortMode: "none"
    }),
/*
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css"
    }),
    new CopyPlugin([
      { from: "./public/", to: "assets/" },
    ])
*/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  devServer: {
    host: "127.0.0.1",
    port: process.env.PORT || 8085,
    hot: true,
    inline: true,
  }
}