var gulp = require('gulp'), 
    connect = require('gulp-connect'),
    sass = require("gulp-sass"),
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');


gulp.task('connect', function() {
  connect.server({
    livereload: true,
    open:true,
    directoryListing: {
  enable: true,
  path: 'build/'
}
  });
});
 

gulp.task('minify-css', function() {
  return gulp.src('development/assets/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/assets/css/'));
});


gulp.task('html', function() {
	return gulp.src('development/**/*.html')
  .pipe(connect.reload())
  .pipe(gulp.dest('build/'));
});

gulp.task("sass", function() {
	return gulp.src('development/assets/css/**/*.scss')
		.pipe(sass())
		.pipe(concatCss("css.css"))
		.pipe(connect.reload())
  .pipe(gulp.dest('build/assets/css/'))
});





gulp.task('scripts', function() {
	return gulp.src('development/assets/js/**/*.js')
   .pipe(uglify())
	.pipe(gulp.dest('build/assets/js/'))
});

  



gulp.task('watch', function() {
  gulp.watch('development/assets/css/**/*.scss', ['sass']);
	gulp.watch('development/assets/css/**/*.css', ['minify-css']);
	gulp.watch('development/assets/js/**/*.js', ['scripts']);
  gulp.watch('development/**/*.html', ['html']);
});
	
gulp.task("default", [ 'sass','html','scripts','minify-css','connect', 'watch'])