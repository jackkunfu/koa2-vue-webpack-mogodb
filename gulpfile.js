var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync')

gulp.task('default', ['browser-sync'], function() {})

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:3000", // 注意这里要换成你在koa中设定的 服务端口一般是3000
        files: ["public/**/*.*", "routes/**/*.*", "views/**/*.*", "mongoose/**/*.*", "app.js"],
        // browser: "google chrome",
        port: 7000,
    });
});
gulp.task('nodemon', function(cb) {

    var started = false;

    return nodemon({
        script: './bin/www'
    }).on('start', function() {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});