const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const babel = require("gulp-babel");
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const rigger = require('gulp-rigger');

// === Пути ===

const src = {
   script: {
      all: './src/js/**/*',
      input: './src/js/**/*.js',
      ignore: '!/src/js/maskedinput',
      output: {
         we: './js'
      },
   
      output_name: 'script.js'
   },

   style: {
      input: {
         basis: './src/scss/style.scss',
         all: './src/scss/**/*.scss',
         normalize: '!./src/scss/normalize/*.scss',
      },

      ignore: {
         file_1: '!./src/scss/slider/slick-theme.scss',
         file_2: '!./src/scss/slider/slick.scss',
         file_3: '!./src/scss/class.scss'
      },

      output: {
         we: './css',
      },

      output_name: 'style.css',
      s_maps: './'
   },

   html: {
      input: {
         basis:'./index.html',
         all: './src/pages/**/*'
      }
   },

   fonts: {
      input: './src/fonts/**/*',
      output: {
         we: './fonts'
      },
   },

   img: {
      input: './src/img/**',
      output: {
         we: './img'
      },
   },

   templates: {
      input: './src/pages/*.html',
      input_index: './src/index.html',

      output: './pages/',
      output_index: './'
   },
}

// === task ===

gulp.task('styles', () => {
   return gulp.src([src.style.input.all, src.style.input.basis, src.style.input.normalize, src.style.ignore.file_1, src.style.ignore.file_2, src.style.ignore.file_3])
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on('error', function (err) {
         console.log(err);
         this.emit('end');
      })
      .pipe(concat(src.style.output_name))
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 2 versions'],
         cascade: false
      }))
      // Сжатие CSS
      // .pipe(cleanCSS({
      //    level: 2
      // }))
      .pipe(sourcemaps.write(src.style.s_maps))
      .pipe(gulp.dest(src.style.output.we))
      .pipe(browserSync.stream());
});

// gulp.task('html_basis', () => {
//    return gulp.src(src.html.input.basis)
//       .pipe(browserSync.stream());
// });

gulp.task('fonts', () => {
   return gulp.src(src.fonts.input)
      .pipe(gulp.dest(src.fonts.output.we))
      .pipe(browserSync.stream());
});

gulp.task('rigger', () => {
   return gulp.src(src.templates.input)
   .on('error', function (err) {
      console.log(err);
      this.emit('end');
   })
   .pipe(rigger())
   .pipe(gulp.dest(src.templates.output))
   .pipe(browserSync.stream());
});

gulp.task('rigger-2', () => {
   return gulp.src(src.templates.input_index)
   .on('error', function (err) {
      console.log(err);
      this.emit('end');
   })
   .pipe(rigger())
   .pipe(gulp.dest(src.templates.output_index))
   .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
   return gulp.src(src.script.input, src.script.ignore)
      .pipe(babel())
      // Сжатие JS
      // .pipe(uglify({
      //    toplevel: true
      // }))
      .on('error', function (err) {
         console.log(err);
         this.emit('end');
      })
      .pipe(gulp.dest(src.script.output.we))
      .pipe(browserSync.stream());
});

gulp.task('scripts-2', () => {
   return gulp.src(src.script.input)
   .pipe(gulp.dest(src.script.output.we))
});

gulp.task('jsAll', () => {
   return gulp.src(src.script.all)
   .pipe(babel())
   .pipe(gulp.dest(src.script.output.we))
   .pipe(browserSync.stream());
});

gulp.task('del', () => {
   return del([src.style.output.we, src.script.output.we, src.fonts.output.we, src.img.output.we, src.templates.output]);
});

gulp.task('img-compress', () => {
   return gulp.src(src.img.input)
      .pipe(imagemin({
         progressive: true
      }))
      .on('error', function (err) {
         console.log(err);
         this.emit('end');
      })
      .pipe(gulp.dest(src.img.output.we))
});

gulp.task('fonts', () => {
   return gulp.src(src.fonts.input)
   .pipe(gulp.dest(src.fonts.output.we))
});

gulp.task('watch', () => {
   browserSync.init({
      server: {
         baseDir: "./"
      }
   });
   gulp.watch(src.templates.input, gulp.series('rigger'))
   gulp.watch(src.templates.input_index, gulp.series('rigger-2'))
   // gulp.watch([src.html.input.basis, src.html.input.all], gulp.series('html_basis'))
   gulp.watch(src.img.input, gulp.series('img-compress'))
   gulp.watch(src.style.input.all, gulp.series('styles'))
   gulp.watch(src.fonts.input, gulp.series('fonts'))
   gulp.watch(src.script.input, gulp.series('scripts-2', 'scripts'))
   gulp.watch(src.html.input.basis).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('del', gulp.parallel('styles', 'scripts', 'img-compress', 'fonts', 'jsAll', 'rigger', 'rigger-2'), 'watch'));