const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: './js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		static: {
			director:path.join(__dirname, "dist"),
		}
	}
};
plugins: [
	new ESLintPlugin(),
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
		title: 'Pig Dice',
		template: './src/index.html',
		inject: 'body'
	})
];
	module: {
	rules: [
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}
	]
};