var webpack = require('webpack');
var path = require("path");
var fs = require("fs");

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

var typeLib = path.join(__dirname, 'src', 'defines.d.ts');

module.exports = {

    entry: {
        server: './src/server/index.node.js'
    },

    target: "node",
    externals: nodeModules,

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/assets/',
        filename: '[name].js',
        libraryTarget: "commonjs2"
    },

    resolve: {
        extensions: ['', '.ts', '.js'],
        alias: {
            'alfa-react-ui': path.join(__dirname, 'bower_components', 'alfa-react-ui')
        }
    },

    // Source maps support (or 'inline-source-map' also works)
    devtool: 'inline-source-map',

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript?rewriteImports=alfa-react-ui&externals=" + typeLib
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ]
    },

    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.styl$/, 'node-noop'),
        new webpack.IgnorePlugin(/\.(styl)$/),
        new webpack.DefinePlugin({
            ENV: {
                debug: true
            }
        }),
        new webpack.BannerPlugin('require("source-map-support").install();',
            { raw: true, entryOnly: false })
    ]
};
