/*'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('reload', function() {
  browserSync.reload();

});*/
'use strict';
import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('reload',()=>browserSync.reload());
