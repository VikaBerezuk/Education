const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackConcatPlugin = require('webpack-concat-files-plugin');

const isDevMode = /*process.env.DEV_STAGE !== "production"*/ false;

module.exports = {
    mode: isDevMode ? 'development' : 'production',
    entry: './src/script.js',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            {test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]}
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            chunks: ['main']
        }),
        new WebpackConcatPlugin({
            bundles: [
                {
                    dest: './dist/polyfills.min.js',
                    src: './src/*.js',
                },
            ],
        }),
    ],
    devtool: 'source-map'
}