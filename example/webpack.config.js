// webpack.config.js

module.exports = {
  entry: './index.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
	presets: ['react', 'es2015']      
	}
    }]
  }
};
