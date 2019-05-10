const path = require('path');

module.exports = {
	entry: __dirname + '/client/src/app.jsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/client/compile'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,			
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/react']
					}				
				}
			}
		]
	}
};
