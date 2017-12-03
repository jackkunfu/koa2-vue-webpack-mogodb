var gulp = require('gulp'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	del = require('del'),
	minJs = require('gulp-uglify'),
	minCss = require('gulp-minify-css'),
	minHtml = require('gulp-htmlmin'),
	minImage = require('gulp-imagemin'),
	sequence = require('gulp-sequence');

var devDir = './';
var destDir = './build';
var revDir = './rev';

gulp.task('del-dist', function(){
	return del(['./dist']);
})
gulp.task('del-build', function(){
	return del(['./build']);
})
gulp.task('del-rev', function(){
	return del(['./rev'])
})

gulp.task('rev-json', function(){
	return gulp.src(["./dist/**/*.js", "./dist/**/*.css"])
		.pipe(rev())
		.pipe(gulp.dest(destDir))
		.pipe(rev.manifest())
		.pipe(gulp.dest(revDir))
});
gulp.task('rev', ['rev-json'], function(){
	return gulp.src(['./rev/**/*.json', "./dist/*.html"])
		.pipe(revCollector({
			replaceReved: true
		}))
		.pipe(gulp.dest(destDir))
})

gulp.task('html', function() {
    return gulp.src('./app/*.html')
        .pipe(minHtml({
			removeComments: true,//清除HTML注释
			collapseWhitespace: true,//压缩HTML
			// collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
			// removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
			removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
			removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
			minifyJS: true,//压缩页面JS
			minifyCSS: true//压缩页面CSS
		}))
        .pipe(gulp.dest('./dist'))
})
gulp.task('js', function() {
    return gulp.src('./app/**/*.js')
        .pipe(minJs({ mangle: false }))
        .pipe(gulp.dest('./dist'))
})
gulp.task('css', function() {
    return gulp.src('./app/**/*.css')
        .pipe(minCss())
        .pipe(gulp.dest('./dist'))
})
gulp.task('img', function() {
    return gulp.src('./app/img/*.{png,jpg,gif,ico}')
        // .pipe(minImage({
        //     optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
        //     progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        //     interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        //     multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        // }))
        .pipe(gulp.dest('./build/img'))
})

gulp.task('del', ['del-dist', 'del-build', 'del-rev'])
gulp.task('min', ['js', 'css', 'html', 'img'])
gulp.task('default', sequence('del', 'min', 'rev', 'del-dist', 'del-rev'))    // sequence依赖的任务比如html js css 需要return 不然不会理想