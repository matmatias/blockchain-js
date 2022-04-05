const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const srcDir        = path.join(__dirname,"./src")
const distDir       = path.join(__dirname,"./build") // pode usar a dist
const entry         = path.join(srcDir, "index.jsx" )
const srcHtmlLayout = path.join(__dirname, "index.html")

module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: "web",
  entry: {
    main: entry
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
      template: srcHtmlLayout
    }),
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