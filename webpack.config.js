var path = require('path');

var devConfig = {
    context: path.join(__dirname, '/app'),
    entry: [
        './app.js'
    ],
    output: {
        path: path.join(__dirname, '/build/'),
        publicPath: '/public/assets/js/',
        filename: 'app.js',
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: 'public',
        historyApiFallback: false,
        
        stats: 'errors-only'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style', 'css']
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
    }
}

if (process.env.NODE_ENV === 'production') {
    devConfig.devtool = '';
    devConfig.devServer = {};
};

module.exports = devConfig;
