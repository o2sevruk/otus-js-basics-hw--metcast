const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

require("@babel/polyfill");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: ["./src/js/index.js", "./src/scss/styles.scss"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new WriteFilePlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "*css",
          to: "leaflet",
          context: "node_modules/leaflet/dist",
        },
        {
          from: "images/*",
          to: "leaflet",
          context: "node_modules/leaflet/dist",
        },
      ],
    }),
  ],
};
