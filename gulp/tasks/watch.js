/*'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');
//gulp.task('watch', ['browserSync', 'server'], function() {
gulp.task('watch', ['browserSync'], function() {
	// 检测 js 文件夹
    gulp.watch(config.scripts.src, [ 'scripts']);
    //gulp.watch(config.styles.watch, ['styles']);
    // 检测 scss
    gulp.watch(config.styles.src, ['styles']);
    // 检测 images
    gulp.watch(config.images.src, ['images', 'reload']);
    gulp.watch(config.views.src, ['views', 'reload']);
    //gulp.watch(config.copylib.src, ["copylib"]);
});*/

"use strict";
// 监听
import gulp from 'gulp';
import {bundle,copycss,styles,views} from '../config';

gulp.task('watch',['browserSync'],()=>{
	console.log("watching");
	//监听 js 
	gulp.watch(bundle.src,['bundle']);
    // 监听 sass 和 css
    gulp.watch(copycss.src,['copycss','reload']);
    gulp.watch(styles.src,['styles']);
    // 监听 html 
    gulp.watch(views.src,['views','reload']);
});
