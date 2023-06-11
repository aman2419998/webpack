const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        clean: true
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // }
    },
    module: {
        rules: [
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
            filename: 'styles.[contenthash].css'
        } ),
        // new CleanWebpackPlugin( {
        //     cleanOnceBeforeBuildPatterns: [
        //         '**/*',
        //         path.join( __dirname, 'nnnn/**/*' )
        //     ]
        // } ),
        new HtmlWebpackPlugin( {
            title: 'Hello World',
            description: 'some description',
            template: 'index.hbs',
            description: 'Some Description'
        } )
    ]
}