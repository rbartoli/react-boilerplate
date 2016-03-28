import path from 'path'
import WebpackNotifierPlugin from 'webpack-notifier'

let devConfig = {
    context: path.join(__dirname, 'src'),
    entry: [
        './app.js'
    ],
    output: {
        path: path.join(__dirname, 'build/assets/js'),
        publicPath: 'assets/js/',
        filename: 'app.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: 'static',
        historyApiFallback: false
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'eslint'
            } 
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=100000'
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin()
    ]
}

if (process.env.NODE_ENV === 'production') {
    devConfig.devtool = ''
    devConfig.devServer = {}
}

export default devConfig
