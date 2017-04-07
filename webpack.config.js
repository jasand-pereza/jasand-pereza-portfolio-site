var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('src/'),
    entry: {
        'bundle.js': './client.js', 
        'styles.css':  ['./scss/main.scss', './scss/lib/hamburgers.min.css'],
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
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
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
            },
            {
                test: /\.woff(2)?(\?[a-z0-9]+)?$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
                exclude: /node_modules/,
                loader: "url-loader"
            }
        ]
    },
     resolve: {
        extensions: [' ', '.js', '.es6'],
        alias: {'waypoints': 'waypoints/lib/jquery.waypoints.min.js'}
    }
}