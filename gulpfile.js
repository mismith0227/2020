const gulp = require('gulp')
const browserSync = require('browser-sync')
const config = require('./config')
const { src, dest, watch } = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

// HTML
// =====================================================
const html = () => {
  return src(`${config.tasks.html.src}`).pipe(
    gulp.dest(`${config.tasks.html.dest}`)
  )
}

// SCSS
// =====================================================
const compileSass = () => {
  return src(config.tasks.scss.src)
    .pipe(
      sass({
        outputStyle: config.envProduction ? 'compressed' : 'nested'
      }).on('error', sass.logError)
    )
    .pipe(dest(config.tasks.scss.dest))
}

// Images
// =====================================================
const minifyImages = () => {
  return src(config.tasks.images.src).pipe(dest(config.tasks.images.dest))
}

// webpack
// =====================================================
const compileJavascript = () => {
  return src(config.tasks.webpack.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(config.tasks.webpack.dest))
}

// Font
// =====================================================
const font = () => {
  return src(config.tasks.fonts.src).pipe(dest(config.tasks.fonts.dest))
}

// Clean
// =====================================================
const clean = (cb) => {
  return del(config.tasks.clean, cb)
}

// Server
// =====================================================
const server = (done) => {
  browserSync.init(config.tasks.server.browserSyncOptions)
  done()
  console.log('Server was launched')
}

// Watch
// =====================================================
const watchFiles = (done) => {
  watch(config.tasks.html.src, html).on('change', browserSync.reload)
  watch(config.tasks.watch.css, compileSass).on('change', browserSync.reload)
  watch(config.tasks.watch.webpack, compileJavascript).on(
    'change',
    browserSync.reload
  )
  watch(config.tasks.images.src, minifyImages).on('change', browserSync.reload)
  watch(config.tasks.fonts.src, font).on('change', browserSync.reload)
  done()
}

// Build
// =====================================================
const build = gulp.series(
  clean,
  html,
  compileSass,
  compileJavascript,
  minifyImages,
  font
)

// Default
// =====================================================
const defaultTask = gulp.series(build, watchFiles, server)

exports.build = build

exports.default = defaultTask
