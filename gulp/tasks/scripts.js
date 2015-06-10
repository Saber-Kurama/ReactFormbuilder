/*'use strict';
var gulp = require('gulp');
var config = require('../config');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var browserSync  = require('browser-sync');
// 创建一个 scripts 任务
gulp.task("scripts",function(){
	return gulp.src(config.scripts.src)
		       .pipe(gulpif(global.isProd,uglify()))
		       .pipe(gulp.dest(config.scripts.dest))
		       .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});*/