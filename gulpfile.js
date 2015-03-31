var gulp = require('gulp'),
    react = require('gulp-react'),
    babel = require('gulp-babel');
 
gulp.task('react', function () {
    return gulp.src(['src/*.js'])
        .pipe(react())
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', ['react'], function() {
    gulp.watch(['src/*.js'], ['react']);
});