const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: __dirname + '/dist',
        filename: "bundle.[contentHash].js"
    },
    devServer: {
        contentBase: __dirname + '/dist',
        writeToDisk:true, // ✓
        open: true, // ←
        // hot: true // -
    },
    // optimization: { minimizer: [] },
    plugins: [
  /* 1st */ new CleanWebpackPlugin(),
  /* 2nd */ new MinifyPlugin({},{comments: false}),
  /* 3rd */ new OptimizeCssAssetsPlugin(),
  /* 4th */ new MiniCssExtractPlugin({
                filename: "bundle.[contentHash].css"
            }),
  /* 5th */ new HtmlWebpackPlugin({
                favicon: './src/assets/images/icons/favicon.ico',
                template: "./src/index.html",
                filename: 'index.html',
                minify: true
            })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // 'style-loader', // ✗
                    // exracts into single CSS file
          /* 2nd */ MiniCssExtractPlugin.loader, // ✓
          /* 1st */ 'css-loader',
                ],
            }
        ]
    }
});