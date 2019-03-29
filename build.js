var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var jsFiles = './src/**/*.js',
    jsDest = './dist';

gulp.src(jsFiles)
    .pipe(concat('howler.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('howler.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));

gulp.src('./src/howler.core.js')
    .pipe(gulp.dest(jsDest))
    .pipe(rename('howler.core.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));

gulp.src('./src/plugins/howler.spatial.js')
    .pipe(gulp.dest(jsDest))
    .pipe(rename('howler.spatial.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));



// var jsmap = uglifyjs.minify('dist/howler.min.js', {
//     compress: false,
//     outSourceMap: "rpnmodule." + version + ".min.js.map"
// });
// fs.writeFile("dist/rpnmodule." + version + ".min.js", function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("js file compression done");
//     }
// });
// fs.writeFile("dist/rpnmodule." + version + ".min.js.map", function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("js file map compression done");
//     }
// });