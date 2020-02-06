// As "pluginUri" you must specify this plugin's Bundle Symbolic Name.
// Being an OSGi bundle every DMX plugin has a globally unique "Bundle Symbolic Name" (see OSGi specification).
// The Bundle Symbolic Name is calculated by the Maven Bundle Plugin based on the plugin's Maven Group ID and
// Artifact ID (see this plugin's pom.xml), and has basically the form "<groupId>.<artifactId>".
const pluginUri = 'ch.dreyeck.dmx-zettelkasten'

const MiniCssExtractPlugin   = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin }    = require('vue-loader')

var elmSource = __dirname + 'src/main/elm'

module.exports = {
  entry: './src/main/js/plugin.js',
  output: {
    path: __dirname + '/src/main/resources/web',
    filename: '[chunkhash].plugin.js',
    chunkFilename: '[chunkhash].[name].js',
    publicPath: '/' + pluginUri + '/',
    library: '_' + pluginUri.replace(/[.-]/g, '_'),
    libraryTarget: 'jsonp'
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          { loader: 'elm-hot-webpack-loader' },
          { loader: 'elm-webpack-loader',
            options: {
              cwd: elmSource 
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash].style.css',
      chunkFilename: '[contenthash].[name].css'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}
