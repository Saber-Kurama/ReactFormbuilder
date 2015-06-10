/*'use strict';
// 浏览器同步工具
var config      = require('../config');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function() {

  browserSync({
    proxy: 'localhost:' + config.serverport
  },function(){
  	console.log(browserSync);
  });

});*/

import {browser} from '../config';
import browserSync from 'browser-sync'
import gulp from 'gulp';

gulp.task('browserSync',()=>{
	browserSync({
		proxy:browser.proxy
	},()=>{
		console.log(browserSync);
	})
})
