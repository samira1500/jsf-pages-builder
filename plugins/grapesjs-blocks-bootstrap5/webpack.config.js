const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const pkg = require('./package.json');
const webpack = require('webpack');
const fs = require('fs');
const path = require("path");
const name = pkg.name;
let plugins = [];
let optimization = {};

module.exports = (env = {}) => {
    if (env.production) {
        optimization.minimizer = [
            new TerserPlugin({
                parallel: true,
            })
        ];
        plugins = [
            new webpack.BannerPlugin(`${name} - ${pkg.version}`),
        ]
    } else {
        plugins.push(new HtmlWebpackPlugin({
            title: 'My App',
            template: './src/index.html', // your custom template
            scriptLoading: 'blocking'
            //inject: 'body'
          }));
    }

    return {
        mode: env.production ? 'production' : 'development',
        entry: path.resolve (__dirname, 'src/index.js'),
        devtool: 'inline-source-map',
        output: {
            path: path.resolve (__dirname, 'dist'),
            publicPath: "",
            filename: `${name}.min.js`
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: /src/,
            }]
        },
        devServer: {
            port: 28080,
            open: '/',
            hot: true,
            devMiddleware: {
                mimeTypes: { phtml: 'text/html' }
            },
            static: [
              {
                directory: path.join(__dirname, "public"),
                publicPath: "/",
              },
            ]
        },
        externals: {'grapesjs': 'grapesjs'},
        optimization: optimization,
        plugins: plugins,
        // watchOptions: {
        //     ignored: /node_modules/
        // }
    };
};
