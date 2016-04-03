var path = require('path')
var webpack = require('webpack')
// import WebpackNotifierPlugin from 'webpack-notifier'

var config = {
    context: path.join(__dirname, 'src'),
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'build/scripts'),
        publicPath: 'scripts/',
        filename: 'app.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: 'public',
        historyApiFallback: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                loaders: [
                    'style',
                    {
                        loader: 'css',
                        query: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                // exclude: /node_modules/,
                loaders: [
                    'style',
                    'css',
                    'sass'
                ]
            },
            {
                test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
                // exclude: /node_modules/,
                loader: 'url',
                query: {
                    limit: 100000
                }
            }
        ]
    },
    plugins: [
        // new WebpackNotifierPlugin()
    ],
    resolve: {
        modules: [
            path.resolve('./src'),
            'node_modules'
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    config.devtool = 'source-map'
    config.devServer = {}
    config.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
}

module.exports = config
