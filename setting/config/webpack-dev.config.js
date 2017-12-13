const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const paths = require("../paths");

module.exports = {
    bail: false,
    cache: true,
    entry: {
        app: [
            "babel-polyfill",
            "react-hot-loader/patch",
            paths.root("src/index")
        ]
    },
    output: {
        path: paths.root("public"),
        filename: "[name].[chunkhash:8].js",
        chunkFilename: "[id].[chunkhash:8].js",
        publicPath: "/",
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["env", { "modules": false, "browsers": ["last 2 versions"] }],
                            "stage-2",
                            "react"
                        ],
                        plugins: [
                            "transform-export-extensions",
                            "transform-decorators-legacy",
                            "react-hot-loader/babel"
                        ],
                        cacheDirectory: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { sourceMap: true, minimize: false } },
                    { loader: "postcss-loader", options: { sourceMap: true, config: paths.root("setting/config/postcss.config.js") } },
                    { loader: "sass-loader", options: { includePaths: [paths.root()], sourceMap: true } }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].[chunkhash:8].css",
            disable: true,
            allChunks: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ],
    resolve: {
        modules: [ "node_modules", paths.root()],
        extensions: [".js", ".jsx"]
    },
    performance: { hints: false }
};
