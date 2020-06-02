const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }, 
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'] 
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true, //to tell server to check for resource on client not server
        port: 3000
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
}