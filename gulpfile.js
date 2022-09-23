const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');



// Process CSS
gulp.task('taskCSS', async function(){
    return gulp.src('./src/Scss/main.scss')
    .pipe(sass({outputStyled: 'nested'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename('App.css'))
    .pipe(gulp.dest('./src/'))
});



// Watch
gulp.task('watch', async function(){
    gulp.watch([
        './src/Scss/**/*.scss',
        './src/Components/**/*.scss',
        './src/Pages/**/*.scss'
    ], gulp.series('taskCSS'))
});