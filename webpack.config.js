var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('src/'),
    entry: {
        'bundle.js': './client.js', 
        'styles.css':  './scss/main.scss',
    },
    output: {
        path: path.resolve('build/'),
        publicPath: 'public/assets/',
        filename: '[name]'
    },
    devServer: {
        contentBase: 'public',
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    module: {
        rules: [
            {
                test: /\.(es6|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
     resolve: {
        extensions: [' ', '.js', '.es6']
    }
}