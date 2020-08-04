module.exports = {
    entry: './src/assets/config.js',
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(woff|woff2|eot|otf|ttf)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: '[name]-[hash].[ext]',
                        outputPath: '/assets/fonts'
                    }
                }
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif|webp)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].[ext]',
                        outputPath: '/assets/images'
                    }
                }
            }
        ]
    }
};