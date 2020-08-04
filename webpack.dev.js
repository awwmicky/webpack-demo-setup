const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        filename: "dev.bundle.js"
    },
    devServer: {
        contentBase: __dirname + '/dist',
        open: true, // browser
        hot: true, // reload
        port: 5000
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/assets/images/icons/favicon.ico',
            template: './src/index.html',
            filename: 'index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
          /* 2nd */ 'style-loader', // injects to DOM/HTML
          /* 1st */ 'css-loader' // convert CSS to JS
                ],
            }
        ]
    }
});