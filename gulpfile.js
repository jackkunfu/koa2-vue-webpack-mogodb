var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync')

var webpack = require('webpack')
    // var webpackProdutionConfig = require('./gulp-webpack.conf')
var webpackProdutionConfig = require('./front/build/gulp-webpack.prod.conf')

gulp.task('nodemon', function(cb) {
    var started = false;
    return nodemon({
        script: './bin/www-gulp'
    }).on('start', function() {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
})

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:3000", // 注意这里要换成你在koa中设定的 服务端口一般是3000
        files: ["public/**/*.*", "routes/**/*.*", "views/**/*.*", "mongoose/**/*.*", "app.js", "front/src/**/*.*"],
        // browser: "google chrome",
        port: 7000
    });
});

// 监控vue组件变化 build
gulp.task('vue', function() {
    console.log('---------------webpack build vue-cli--------------')
    webpack(webpackProdutionConfig, function(err, stats) {
        // spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
        console.log('  Build complete.\n')
    })
})

gulp.task('default', ['vue', 'browser-sync'], function() {
    gulp.watch('front/src/**/*.*', ['vue'])
})