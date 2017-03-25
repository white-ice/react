const webpack = require('webpack');
const { resolve } = require('path');

const config = {
    context: resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {modules: false}],
                            'stage-2',
                            'react'
                        ]
                    },
                }],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: "file-loader?name=images/[name].[ext]"
            }
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: 3030,
        contentBase: __dirname + '/public',
        inline: true,
        hot: true
    }
};

module.exports = config;
