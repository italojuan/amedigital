const gulp = require('gulp');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

function swallowError (error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}

// Limpar SVG
gulp.task('clean-svg',async function () {
  return gulp.src('assets/images/svg/svg.svg', {read: false, "allowEmpty": true})
    .pipe(clean());
});

// Gerar SVG
gulp.task('svg', gulp.series('clean-svg'),async function () {
    return gulp.src('assets/images/svg/**/*.svg')
    .pipe(svgmin(function (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
            plugins: [{
                cleanupIDs: {
                    prefix: prefix + '-',
                    minify: true
                }
            }]
        }
    }))
    .pipe(svgstore())
    .pipe(gulp.dest('assets/images/svg'))
});


// Otimizar scripts
var global = [
    'assets/js/plugins/jquery3.6.0.min.js',
    'assets/js/plugins/bootstrap.bundle.min.js',
    'assets/js/plugins/bootstrap.min.js',
    'assets/js/plugins/owl.carousel.min.js',
    'assets/js/plugins/all.min.js',
];

gulp.task('scripts', async function() {
    gulp.src(global)
    .pipe(concat("plugins.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/plugins/'));
});

gulp.task('less', async function() {
    gulp.src('assets/less/main.less')
    .pipe(less())
    .on('error', swallowError)
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/css'))
});

// WATCH LESS, SCRIPTS E LIVERELOAD
gulp.task('watch',async function() {
    gulp.watch('assets/less/**/*.less', gulp.series('less'));
});

gulp.task('default', gulp.series('less', 'scripts', 'svg', 'watch'));