const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        'hello-world': './hello-world.js',
        'kiwi': './kiwi.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        clean: true
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000
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
                    MiniCssExtractPlugin.loader,
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
                        presets: [ '@babel/env' ]
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
        new MiniCssExtractPlugin( {
            filename: '[name].[contenthash].css'
        } ),
        // new CleanWebpackPlugin( {
        //     cleanOnceBeforeBuildPatterns: [
        //         '**/*',
        //         path.join( __dirname, 'nnnn/**/*' )
        //     ]
        // } ),
        new HtmlWebpackPlugin( {
            filename: 'hello-world.html',
            title: 'Hello World',
            chunks: [ 'hello-world' ],
            description: 'Hello World',
            template: 'page_template.hbs',
            description: 'Some Description'
        } ),
        new HtmlWebpackPlugin( {
            filename: 'kiwi.html',
            title: 'Kiwi Image',
            chunks: [ 'kiwi' ],
            description: 'some description',
            template: 'page_template.hbs',
            description: 'Kiwi Image'
        } )
    ]
}