const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const os = require('os');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const srcDir = path.join(__dirname, '../src');
const devMode = process.env.NODE_ENV !== 'production';
const grapersJsDir = path.join(__dirname, '../node_modules/grapesjs');


module.exports = {
  entry: {
    main: path.join(__dirname, '../src/main.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    // publicPath: "/",
    chunkFilename: 'chunk/[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   include: [srcDir],
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   options: {
      //     fix: true,
      //   },
      // },
      {
        test: /\.(js|jsx)$/,
        include: [srcDir],
        exclude: /(node_modules|bower_components)/,
        use: ['happypack/loader?id=happybabel'],
      },
      {
        test: /\.less$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ['url-loader', 'file-loader'],
        include: [srcDir, grapersJsDir],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: ['url-loader', 'file-loader'],
        include: [srcDir, grapersJsDir],
      },
      {
        test: /\.(eot|woff|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ['file-loader', 'url-loader'],
        include: [srcDir, grapersJsDir],
      },
    ],
  },
  plugins: [
    // ?????? happypack ????????????
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader?cacheDirectory=true'],
      threadPool: happyThreadPool,
      // cache: true,
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${srcDir}/assets/images/nowthen.jpg`,
          to: 'nowthen.jpg',
        },
      ],
    }),
    new AntdDayjsWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@': srcDir,
      '@pages': `${srcDir}/pages`,
    },
  },
  // optimization: {
  //   removeAvailableModules: true, // ??????????????????chunk (?????? true)
  //   removeEmptyChunks: true, // ????????????chunks (?????? true)
  //   mergeDuplicateChunks: true // ???????????????chunk (?????? true)
  // }
};
