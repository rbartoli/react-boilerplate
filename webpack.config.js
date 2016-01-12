module.exports = {
    context: __dirname + '/app',
    
    entry: {
      javascript: './app.js',
      html: './index.html',
    },

    output: {
        path: __dirname + '/',
        filename: 'app.js',
    },
    
    devtool: 'eval-source-map',
    
    devServer: {
        contentBase: 'dist',
        historyApiFallback: false,
        // stats: 'errors-only'
    },
    
    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            { 
                test: /\.jpg$/, 
                loader: 'file' 
            },
            { 
                test: /\.png$/, 
                loader: 'url?mimetype=image/png' 
            }
        ],
    },
}
