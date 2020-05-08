const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'source-map',
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        library: 'Meter',
        libraryTarget: 'umd'
    },
    externals: {
        'react': 'react'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            include: path.resolve(__dirname, '../')
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
};

module.exports = [config];
