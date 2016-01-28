module.exports = {
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

