module.exports = {
	devtool: 'sourcemap',
    entry: {
        moduleSecreet: "./js/moduleSecret/index.js",
        blockScope: "./js/blockScope/index.js",
		classes: "./js/classes/index.js",
		polyfill: "./js/polyfill/index.js"
    },
	output: {
		filename: "./build/[name].bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	resolve: {
		extensions: ["", ".js"]
	}
}
