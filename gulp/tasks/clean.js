'use strict';
import {distroot} from "../config";
import gulp from 'gulp';
import del from 'del';
gulp.task('clean', function(cb) {
  console.log(`开始删除${distroot}`)
  del(distroot,  cb);

});
