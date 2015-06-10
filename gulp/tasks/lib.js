/*'use strict';
// 创建一个合并 lib的任务 
var gulp = require('gulp');
var config = require('../config');
var concat = require('gulp-concat');
gulp.task("lib",function(){
	return gulp.src(config.lib.src)
			   .pipe(concat(config.lib.dist))
			   .pipe(gulp.dest(config.lib.dest));
});*/