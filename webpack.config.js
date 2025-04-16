const path = require("node:path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  module.exports = {
    entry: "./src/index.js", // Добавлен входной файл
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js", // Указан выходной файл
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      port: 9000, // можно указать любой порт
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        }
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
        chunkFilename: "[id].css", 
      }),
    ],
  };

