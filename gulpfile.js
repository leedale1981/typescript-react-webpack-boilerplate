var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var gutil = require('gulp-util');

gulp.task("webpack", function(callback) {
    var myConfig = require('./webpack.config.js');
    
    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    var myConfig = require('./webpack.config.js');
    
    // Start a webpack-dev-server
    var compiler = webpack(myConfig);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/index.html");

        // keep the server alive or continue?
        // callback();
    });
});