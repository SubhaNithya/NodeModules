var path = require('path');

const webpack = require('webpack');
var Extract = require('extract-text-webpack-plugin');

var plugins = [];

module.exports = {
entry: "./client/index.js",
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'public', 'build')
},
watch: true,
module: {
loaders: [
{
test: /.scss$/,
use: Extract.extract(
{
use: ['css-loader', 'sass-loader']
}
)
},
{
test: /.(png|jpg|jpeg|gif|svg)$/,
loader: 'file-loader'
// 'url-loader?limit=10000&name=[name][hash:6].[ext]'
},
{ test: /\.css$/, loader: "style-loader!css-loader" } ,
{
test: /.js$/,
loader: "babel-loader",
exclude:/node_modules/,
query:{
presets:["react", "es2015"],
}
}
]
},
watchOptions: {
poll: true
},
plugins: plugins.concat([
new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', Infinity }),
new webpack.DefinePlugin({ DEV: 'development', PROD__: 'production'
}),
new Extract({
filename: 'css/bundle.css',
disable: false,
allChunks: true
})
])

};