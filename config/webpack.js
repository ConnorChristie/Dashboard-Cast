/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 */

/*
 * Webpack configuration. For more information visit
 * http://webpack.github.io/docs/configuration
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = function (release) {
	return {
		output: {
			path: path.resolve(__dirname, '../build'),
			filename: 'app.js',
			publicPatch: path.resolve(__dirname, '../build')
		},
        
		cache: !release,
		debug: !release,
		devtool: false,
		entry: path.resolve(__dirname, '../src') + '/App.jsx',

		stats: {
			colors: true,
			reasons: !release
		},

		plugins: release ? [
			new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.AggressiveMergingPlugin(),
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery"
			})
		] : [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery"
			})
		],
        
		resolve: {
			extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
		},

		module: {
			loaders: [
				{
					test: /\.css$/,
					loader: 'style!css'
				},
				{
					test: /\.less$/,
					loader: 'style!css!less'
				},
				{
					test: /\.scss/,
					loader: 'style!scss'
				},
				{
					test: /\.gif/,
					loader: 'url-loader?limit=10000&mimetype=image/gif'
				},
				{
					test: /\.jpg/,
					loader: 'url-loader?limit=10000&mimetype=image/jpg'
				},
				{
					test: /\.png/,
					loader: 'url-loader?limit=10000&mimetype=image/png'
				},
				{
					test: /\.jsx/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
					query: {
						presets: ['es2015', 'react']
					}
				}
			]
		}
	};
};