import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// import ESLintPlugin from 'eslint-webpack-plugin';
// import HtmlWebpackTagsPlugin from 'html-webpack-tags-plugin';

export default {
  entry: './src/index.ts',
  devServer: {
    inline: true,
    open: true,
    port: 5000,
    historyApiFallback: true,
    hot: true
  },
  experiments: {
    asyncWebAssembly: true
  },
  optimization: {
		nodeEnv: 'production',
    minimize: true,
    minimizer: [new UglifyJsPlugin({ sourceMap: false })],
    // splitChunks: {
    //   minSize: 30000,
    //   chunks: 'all',
    //   automaticNameDelimiter: '_'
    // }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|wasm)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext]'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [

    // new ESLintPlugin({
    //   files: 'src/**/*.ts'
    // }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'beamer',
      template: './src/index.html'
    }),
    // new HtmlWebpackTagsPlugin({
    //   append: false,
    //   tags: ['qrc:///qtwebchannel/qwebchannel.js']
    // }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css'
    }),
		new CompressionPlugin({
      include: /\/includes/,
      deleteOriginalAssets: true
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
