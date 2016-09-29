var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = config.devServer.port;

for (var entry in config.entry) {
  config.entry[entry].unshift("webpack-dev-server/client?http://localhost:"+port+"/", "webpack/hot/dev-server");
}

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: './public',
  hot: true,
  historyApiFallback: true
});

server.listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:'+port+'/');
});
