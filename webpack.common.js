const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const extractCSS = new ExtractTextPlugin('[name]-one.css');
const extractSCSS = new ExtractTextPlugin('[name]-two.css');

const ccpOptions = {
    name: 'vendor',
    path: __dirname + "/public/",
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
        publicPath: '/public/',
        path: __dirname + "/public/",
        filename: "[name].bundle.js",
        chunkFilename: 'chunks/[id].-[hash:8].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            'node_modules',
            path.resolve('./app')
        ]
    },
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: "@ngtools/webpack",
            },
            {
                test: /\.pug$/,
                loader: [ 'pug-ng-html-loader' ]
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
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg|mp4)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:
                        {
                            limit: 80000,
                            name: '[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.json5$/,
                loader: 'json5-loader'
            }
        ]
    },
    plugins: [

        extractCSS,
        extractSCSS,

        new AngularCompilerPlugin({
            tsConfigPath: 'tsconfig-aot.json',
            entryModule: 'app/core/app.module#AppModule',
            sourceMap: true
        }),

        new webpack.optimize.CommonsChunkPlugin(ccpOptions),

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
            template: 'indexTemplate.pug'
        }),

        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html)$/,
            threshold: 10240,
            minRatio: 0.8
        }),

        new webpack.DefinePlugin({
            'process.env.ENV': JSON.stringify(ENV),
        })
    ]
}
