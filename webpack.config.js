const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function NothingPlugin() {
    this.apply = function(){};
}

const config = (env) => ({
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.mjs' // For Apollo library
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        env && env.analyze
            ? new BundleAnalyzerPlugin()
            : new NothingPlugin(),
    ],
    devServer: {
        contentBase: './dist'
    }
});

module.exports = config;