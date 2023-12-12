/*
 * Silex website builder, free/libre no-code tool for makers.
 * Copyright (c) 2023 lexoyo and Silex Labs foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const rootDir = path.resolve(__dirname);

module.exports = {
  entry: "./src/ts/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [
      path.resolve(__dirname, "src/ts"), // default src directory
      path.resolve(__dirname, "../../node_modules"),
    ],
    alias: {
      grapesjs: `${rootDir}/../../node_modules/grapesjs`,
    }
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/js"),
    library: "softPageBuilder",
  },
  devServer: {
    port: 18080,
    hot: true,
    static: [
      {
        directory: path.join(__dirname, "dist"),
        publicPath: "/",
      },
      {
        directory: path.join(__dirname, "public"),
        publicPath: "/",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version),
    }),
    new CopyWebpackPlugin ({
      patterns: [
        { from: path.resolve (__dirname, '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'), to: path.resolve (rootDir, 'public/css/all.min.css') },
        { from: path.resolve (__dirname, '../../node_modules/@fortawesome/fontawesome-free/webfonts/'), to: path.resolve (rootDir, 'public/webfonts') },
        { from: path.resolve (__dirname, '../../node_modules/@fontsource/ubuntu/files/ubuntu-latin-400-normal.woff2'), to: path.resolve (rootDir, 'public/css/files/ubuntu-latin-400-normal.woff2') },
      ],
    }),
  ],
};
