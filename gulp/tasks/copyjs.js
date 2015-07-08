import gulp from 'gulp';
import {copyjs} from '../config';

// 先实现拷贝
gulp.task('copyjs',() => {
  let dest = copyjs.dest;
  return gulp.src(copyjs.src)
    .pipe(gulp.dest(dest));
})

