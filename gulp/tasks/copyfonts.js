'use strict';
import gulp from 'gulp';
import { copyfonts } from '../config';

// 创建一个 copyfonts 任务
gulp.task("copyfonts",function(){
	return gulp.src(copyfonts.src)
			   .pipe(gulp.dest(copyfonts.dest));
})

// var gulp = require('gulp');
// var config = require('../config');
// // 创建一个 copyfonts 任务
// gulp.task("copyfonts",function(){
// 	return gulp.src(config.copyfonts.src)
// 			   .pipe(gulp.dest(config.copyfonts.dest));
// })
