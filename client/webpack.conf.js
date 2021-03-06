var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var babelSettings = { presets: ['react', 'es2015', 'stage-0'] };
babelSettings.plugins = ['transform-decorators-legacy'];

if (process.env.NODE_ENV !== 'production' && !process.env.IS_MIRROR) {
	babelSettings.plugins.push(['react-transform', {
		transforms: [{
			transform: 'react-transform-hmr',
			imports: ['react'],
			locals: ['module']
		}, {
			transform: 'react-transform-catch-errors',
			imports: ['react', 'redbox-react']
		}]
		// redbox-react is breaking the line numbers :-(
		// you might want to disable it
	}]);
}

var cssLoader;
var plugins = [];

if (process.env.NODE_ENV === 'production') {
	plugins.push(new ExtractTextPlugin('style.css'));
	cssLoader = ExtractTextPlugin.extract('style', 'css!postcss!stylus?module&localIdentName=[hash:base64:5]');
} else {
	cssLoader = 'style!css!postcss!stylus?module&localIdentName=[name]__[local]__[hash:base64:5]';
}

module.exports = {
	entry: './entry',
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: 'babel', query: babelSettings, exclude: /node_modules/ },
			{ test: /\.styl/, loader: cssLoader },
			{ test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
			{ test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
		]
	},
	postcss: [autoprefixer({})],
	plugins: plugins
};