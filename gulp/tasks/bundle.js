import gulp from 'gulp';
import webpackConfig from '../../webpack.config.js';
import minimist from 'minimist';
import webpack from 'webpack';
import browserSync from 'browser-sync';
let argv = minimist(process.argv.slice(2));

gulp.task('bundle', function(cb) {
  var started = false;
  var bundler = webpack(webpackConfig);
  var verbose = !!argv.verbose;

  function bundle(err, stats) {
    if (err) {
      //throw new $.util.PluginError('webpack', err);
    }

    console.log(stats.toString({
      //colors: $.util.colors.supportsColor,
      hash: verbose,
      version: verbose,
      timings: verbose,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose
    }));

    if (!started) {
      started = true;
      if(browserSync.active){
        browserSync.reload();
      }
      return cb();
    }
  }
  bundler.run(bundle);
/*
  if (watch) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }*/
});
