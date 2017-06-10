var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync')

var webpack = require('webpack')
    // var webpackProdutionConfig = require('./front/build/gulp.webpack.prod.conf')
var webpackProdutionConfig = require('./gulp-webpack.js')

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

gulp.task('default', ['browser-sync'], function() {
    gulp.watch('front/src/**/*.*', ['vue'])
})

// gulp启动webpack-dev-server
/**
 * 使用测试配置打包，启动hot dev server
 */
// gulp.task('webpack-dev', ['concat-lib'], function() {
//     var config = Object.create(webpackConfigDev);
//     //这两项配置原本是在webpack.config.dev.js里边配置，可是通过gulp启动devserver，那种配置无效，只能在此处写入
//     //官网的解释是webpack-dev-server没有权限读取webpack的配置
//     config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
//     config.plugins.push(new webpack.HotModuleReplacementPlugin());
//     var compiler = webpack(config);
//     var server = new WebpackDevServer(compiler, {
//         contentBase: "../",
//         publicPath: "/release/",
//         hot: true,
//         compress: false,
//         stats: { colors: true }
//     });
//     server.listen(8080, "localhost", function() {});
//     // server.close();
// });