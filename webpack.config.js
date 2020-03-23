const path = require('path');
const webpack = require('webpack');
// const readFile = pify(fs.readFile);
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VENDOR_LIBS = [
    'axios',
    'babel-loader',
    'bootstrap',
    'jquery',
    'popper.js',
    'react',
    'react-dom',
    'react-fontawesome',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
]
module.exports = {
    entry : {
        bundle : './src/index.js',
        vendor: VENDOR_LIBS
    },
    output : {
        path : path.join(__dirname, 'dist'),
        // filename : 'bundle.js'
        filename: '[name].[chunkhash].js'
    },
    module : {
        rules : [
            {
                use : 'babel-loader',
                test : /\.js$/,
                exclude : '/node_modules/'
              
            },
            {
                use : [
                    'style-loader',
                    'css-loader'
                ],
                test : /\.css$/
            },
            {
                // test: /\.jsx?$/,
                // exclude: /node_modules/,
                // loader: 'babel-loader',
                        // query: {
                        //     presets: ['react', 'es2015','stage-1']       
                        // }
            },
            {
                loader : 'file-loader',
                test : /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ],
       
    },
    resolve: {
        modules: [
          path.join(__dirname, "src"),
          "node_modules"
        ]
       },
       node: { fs: 'empty' },
    plugins : [
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            'jquery' : 'jquery',
            'window.$' : 'jquery',
            'window.jQuery' : 'jquery'
        }),

        new HtmlWebpackPlugin({
            template : 'src/index.html'
        }),
        


        // new webpack.optimization [ 
        //     splitChunks ({
        //     names : ['vendor','manifest']
        // }) ]
        // new webpack.optimize.CommonsChunkPlugin
        // ({
        //     name: 'vendor'
        // })
    ],
    optimization: {
        splitChunks: {
          chunks: 'async',
        //   chunks: ['vendor','manifest'],
        //   name : ['vendor','manifest'],
          minSize: 30000,
        //   minRemainingSize: 0,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 6,
          maxInitialRequests: 4,
          automaticNameDelimiter: '~',
          automaticNameMaxLength: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
    
}