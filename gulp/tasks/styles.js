/*'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
// 自动给 css3 属性加浏览器前缀, 如: `-webkit-`
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {


  return gulp.src(config.styles.src)
    .pipe(sass({
      sourceComments: global.isProd ? 'none' : 'map',
      sourceMap: 'sass',
      // 输出格式
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    // 后面 是 版本
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

});*/

import gulp from 'gulp';
import {styles} from '../config';
// 自动给 css3 属性加浏览器前缀, 如: `-webkit-`
//var autoprefixer = require('gulp-autoprefixer');
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';

// 先实现拷贝
gulp.task('styles',() => {
  return gulp.src(styles.src)
    .pipe(sass({
      sourceComments:global.isProd ? 'none': 'map',
      sourceMap:'sass',
      outputStyle:global.isProd ? 'compressed': 'nested'
    }))
    .pipe(autoprefixer("last 2 versions","> 1%"," ie 8"))
    .pipe(gulp.dest(styles.dest))
    .pipe(gulpif(browserSync.active,browserSync.reload({ stream: true })));
})
