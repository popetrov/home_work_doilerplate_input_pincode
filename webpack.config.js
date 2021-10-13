const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './index.js',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		clean: true,
	},
	plugins: [new MiniCssExtractPlugin()],
};
