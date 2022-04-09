import imagemin from 'gulp-imagemin'
import webp from 'gulp-webp'

export const images =()=>{
    return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(
        app.isBuilt,webp()
        ))
    .pipe(app.plugins.if(
        app.isBuilt,
        app.gulp.dest(app.path.build.images)
        ))
    .pipe(app.plugins.if(
        app.isBuilt,
        app.gulp.src(app.path.src.images)
        ))
    .pipe(app.plugins.if(
        app.isBuilt,
        app.plugins.newer(app.path.build.images)
        ))
    .pipe(app.plugins.if(
        app.isBuilt,
        imagemin({
       progressive: true,
       svgoPlugins:[{removeViewBow:false}],
       interlaced: true,
       optimizationLevel:3
    })
        ))
    
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())
}
