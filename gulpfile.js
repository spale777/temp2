var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var ttf2eot = require('gulp-ttf2eot');
var ttf2woff = require('gulp-ttf2woff');

gulp.task('sass', function(){
   return gulp.src('./sass/*.scss')
       .pipe(sass())
       .pipe(rename('app.css'))
       .pipe(gulp.dest('css'));
});
gulp.task('minCss', function(){
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css/dist'));
});
gulp.task('js', function(){
    return gulp.src('./js/app.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename('custom.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js/dist'))
});
gulp.task('jsConcat',function(){
   return gulp.src(['./node_modules/jquery/dist/jquery.min.js','./node_modules/swiper/dist/js/swiper.jquery.min.js','./js/modernizr.min.js','./js/dist/custom.min.js'])
       .pipe(concat('app.min.js'))
       .pipe(gulp.dest('./js/dist'))
});

//-------- Fonts ----------//

gulp.task('eot',function(){
    gulp.src('./fonts/OpenSans/*.ttf')
        .pipe(ttf2eot({clone:true}))
        .pipe(gulp.dest('./fonts/OpenSans'))
    gulp.src('./fonts/Raleway/*.ttf')
        .pipe(ttf2eot({clone:true}))
        .pipe(gulp.dest('./fonts/Raleway'))
});
gulp.task('woff',function(){
    gulp.src('./fonts/OpenSans/*.ttf')
        .pipe(ttf2woff({clone:true}))
        .pipe(gulp.dest('./fonts/OpenSans'))
    gulp.src('./fonts/Raleway/*.ttf')
        .pipe(ttf2woff({clone:true}))
        .pipe(gulp.dest('./fonts/Raleway'))
});

//-------- Fonts ----------//

gulp.task('watch',function(){
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/*.js', ['js', 'jsConcat']);
    gulp.watch('./css/*.css', ['minCss']);
});
gulp.task('default', ['sass','js','jsConcat','watch']);