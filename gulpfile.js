var browserSync =require("browser-sync"),
    gulp=require("gulp"),
    gulpCleanCss =require("gulp-clean-css"),
    gulpSass=require("gulp-sass"),
    gulpUglify=require("gulp-uglify"),
    mergeStream=require("merge-stream");

gulp.task("styleone",function(){
    gulp.src("/node_modules/materialize-css/dist/css/materialize.min.cssb")
        .pipe(gulp.dest("/dist/css/"));       

});

gulp.task("scriptjs",function() {
    var getjq = gulp.src("/node_modules/jquery/dist/jquery.min.js")
                .pipe(gulp.dest("/dist/js/"));
    var getmatz=gulp.src("/node_modules/materialize-css/dist/js/materialize.min.js")
                .pipe(gulp.dest("dist/js/"));

    return mergeStream(getjq,getmatz);

});

gulp.task("sass",function() {
    return gulp.src("./assets/scss/*.scss")
    .pipe(gulpSass())
    .pipe(gulpCleanCss())
    .pipe(gulp.dest("/dist/css/"));

});

gulp.task("uglify",function() {
    gulp.src("/assets/js/*.js")
    .pipe(gulpUglify())
    .pipe(gulp.dest("/dist/js/"));
})

gulp.task("browser-sync",function () {
    browserSync.init({
        server: "./"
 });
});

gulp.task("gulpwatch",['styleone','scriptjs','sass','uglify'],function () {
        gulp.watch("/assets/scss/*.scss",["sass"]).on("change", browserSync.reload)
        gulp.watch("/assets/js/*.js",["uglify"]).on("change", browserSync.reload)
        gulp.watch("./*.html", ).on("change", browserSync.reload)

    });

gulp.task("default", ['gulpwatch']);
    