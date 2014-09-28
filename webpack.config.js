module.exports = {
	entry: './index.js',
	output: {
		filename: './dist/react-tabs.js',
    sourceMapFilename: './dist/react-tabs.map',
    library: 'ReactTabs',
    libraryTarget: 'umd'
	},
  externals: {
    'react/addons': 'React'
  },
	module: {
		loaders: [
			{test: /\.js$/, loader: 'jsx-loader'}
		]
	}
};
