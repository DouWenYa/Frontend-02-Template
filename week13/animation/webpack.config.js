module.exports = {
  mode: 'development',
  //entry: './index.js',
  entry: {
    'index': './index.js'
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ['@babel/plugin-transform-react-jsx', {
              pragma: 'createElement'
            }]
          ],
        },
      },
    },],
  },
  plugins: [],
  devServer: {
    hot: true,
    port: 3000,
    open: true,
  }
}