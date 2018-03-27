const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const extractCSS = new ExtractTextPlugin('[name]-one.css');
const extractSCSS = new ExtractTextPlugin('[name]-two.css');

const ccpOptions = {
    name: 'vendor',
    path: __dirname + "/public",
    filename: 'vendor.bundle.js'
};

function root(__path) {
    return path.join(__dirname, __path);
}

module.exports = {
    entry: {
        "app": "./app/main"
    },
    output: {
        publicPath: '/public',
        path: __dirname + "/public",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve('./app'),
            'node_modules'
        ]
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular-router-loader?aot=true&genDir=aot/',
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: true,
                    collapseWhitespace: true,

                    // angular 2 templates break if these are omitted
                    removeAttributeQuotes: false,
                    keepClosingSlash: true,
                    caseSensitive: true,
                    conservativeCollapse: true
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract([ 'css-loader' ])
            },
            {
                test: /\.scss$/,
                use: extractSCSS.extract([ 'css-loader', 'sass-loader' ])
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg|mp4)$/, loader: 'url-loader?limit=100000&name=/[hash].[ext]' },
            {
                test: /\.json5$/,
                loader: 'json5-loader'
            }
        ]
    },
    plugins: [

        extractCSS,
        extractSCSS,

        new webpack.optimize.CommonsChunkPlugin(ccpOptions),

        // Takes care of warnings described at https://github.com/angular/angular/issues/11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('./src'), // location of your src
            { }
        ),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),

        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true,
        //     sourceMap: true
        // }),

        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'indexTemplate.html'
        }),

        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
}
