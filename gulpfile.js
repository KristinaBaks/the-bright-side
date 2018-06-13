var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    gulp.watch('app/index.html', function(){
        browserSync.reload();
    });
    gulp.watch('app/js/app.js', function(){
        browserSync.reload();
    });
    gulp.watch('app/scss/*.scss', ['style']);
});

gulp.task('style', function(){
    return gulp.src('app/scss/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});
