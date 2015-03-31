var gulp = require('gulp'),
    babel = require('gulp-babel');
 
gulp.task('react', function () {
    return gulp.src(['src/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', ['react'], function() {
    gulp.watch(['src/*.js'], ['react']);
});