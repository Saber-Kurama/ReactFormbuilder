/*'use strict';

var config  = require('../config');
var http    = require('http');
var express = require('express');
var gulp    = require('gulp');
var gutil   = require('gulp-util');
// 日志中间件
var morgan  = require('morgan');

gulp.task('server', function() {

  var server = express();

  // log all requests to the console
  server.use(morgan('dev'));
  // 设置静态路径
  server.use(express.static(config.dist.root));

  // Serve index.html for all routes to leave routing up to Angular
  // 请求
  server.all('/*', function(req, res) {
    //res.send('Hello World');
    res.sendFile('index.html', { root: 'build' });
  });

  // Start webserver if not already running
  // 创建 server
  var s = http.createServer(server);
  s.on('error', function(err){
    if(err.code === 'EADDRINUSE'){
      gutil.log('Development server is already started at port ' + config.serverport);
    }
    else {
      throw err;
    }
  });
  
  // 开启监听
  s.listen(config.serverport);

});*/