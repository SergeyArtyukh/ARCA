let gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),
    comments = require('gulp-strip-css-comments');

gulp.task('watch', function(){
    watch(['css/**/*.scss'], function(event, cb) {
        gulp.src('css/**/*.scss') //Выберем наш .scss
            .pipe(sass()) //Скомпилируем
            .pipe(comments()) //Кожурки назуй
            .pipe(prefixer()) //Добавим вендорные префиксы
            .pipe(cleancss()) //Сожмем
            .pipe(gulp.dest('css/'));
            console.log ('done!');
    });

});
