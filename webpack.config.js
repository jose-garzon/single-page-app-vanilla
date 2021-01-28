const path = require("path");
const HMTLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@router": path.resolve(__dirname, "src/router"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@templates": path.resolve(__dirname, "src/templates"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HMTLWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "public/index.html"),
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/styles/style.css",
          to: "",
        },
      ],
    }),
  ],
  devServer: {
    open: true,
    port: 3005,
    historyApiFallback: true,
    compress: true,
  },
};
