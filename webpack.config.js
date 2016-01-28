module.exports = {
	entry: './main.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader"
			}
		]
	},
	eslint: {
		configFile: './.eslintrc'
	}
};

