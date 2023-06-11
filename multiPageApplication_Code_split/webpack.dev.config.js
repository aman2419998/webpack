const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'hello-world': './hello-world.js',
        'kiwi': './kiwi.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.jpg$/,
                type: 'asset/resource'
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            title: 'Hello World',
            chunks: [ 'hello-world' ],
            description: 'Hello World',
            template: 'page_template.hbs'
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            title: 'Kiwi',
            chunks: [ 'kiwi' ],
            description: 'Kiwi',
            template: 'page_template.hbs'
        })
    ]
}