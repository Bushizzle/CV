const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const outputFolder = isProduction ? 'public' : 'dist';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, outputFolder),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                            importLoaders: 1,
                            sourceMap: process.env.NODE_ENV === 'development',
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'static', 'index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "static",
                    globOptions: {
                        ignore: ["**/index.html"], // Ignore the index.html file if it's in the static folder
                    },
                },
            ],
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'static'),
        compress: true,
        port: 9000,
    },
};
