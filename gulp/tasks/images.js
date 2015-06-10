'use strict';

/*var config     = require('../config');
//只允许改变的文件通过管道。
var changed    = require('gulp-changed');
var gulp       = require('gulp');
var gulpif     = require('gulp-if');
var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {

  var dest = config.images.dest;

  return gulp.src(config.images.src)
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulpif(global.isProd, imagemin()))    // Optimize
    .pipe(gulp.dest(dest));

});*/

import gulp from 'gulp';
import {images} from '../config';
import change from 'gulp-changed';
import gulpif from 'gulp-if';

gulp.task('images',() => {
	let dest = images.dest;
	return gulp.src(images.src)
		.pipe(change(dest))
		.pipe(gulp.dest(dest));
})
