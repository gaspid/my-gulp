
import fileinclude from "gulp-file-include"

import webpHtmlNosg from "gulp-webp-html-nosvg"


export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@img\//g,'img/'))
    .pipe(app.plugins.if(
        app.isBuilt,webpHtmlNosg()
        ))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}