const CLeanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, 
                    { loader: 'css-loader' }]

                }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CLeanWebpackPlugin(['dist'])
    ],
}
