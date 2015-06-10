import gulp from 'gulp';
import {copycss} from '../config';

// 先实现拷贝
gulp.task('copycss',() => {
  let dest = copycss.dest;
  return gulp.src(copycss.src)
    .pipe(gulp.dest(dest));
})
