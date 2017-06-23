/* eslint-env node */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const BrowserSyncPluginConfig = new BrowserSyncPlugin(
  {
    host: "localhost",
    port: 3000,
    // proxy the Webpack Dev Server endpoint
    // (which should be serving on http://localhost:8080/)
    // through BrowserSync
    proxy: "http://localhost:8080/"
  },
  { reload: false }
);

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: ["whatwg-fetch", "./src/index.js"],
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, BrowserSyncPluginConfig]
};
