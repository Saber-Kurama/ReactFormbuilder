'use strict';

/*var gulp = require('gulp');
var config = require('../config');*/
import gulp from 'gulp';
import {views} from '../config';
// 创建一个 views 任务
gulp.task("views",function(){
	//console.log(`开始views 流程${views.dest}`)
	return gulp.src(views.src)
			   .pipe(gulp.dest(views.dest));
})