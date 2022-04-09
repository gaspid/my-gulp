
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'
import webpcss from 'gulp-webpcss'
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss,{sourcemap:app.isDev})
    .pipe(app.plugins.replace(/@img\//g,'img/'))
    .pipe(sass({
        outputStyle:"expanded"
    }))
    .pipe(app.plugins.if(
        app.isBuilt,
        groupCssMediaQueries()
        ))
    .pipe(app.plugins.if(
        app.isBuilt,
        webpcss({
        webpClass: '.webp',
        noWebpClass:'.no-webp'
    })
        ))
    .pipe(app.plugins.if(
        app.isBuilt,
        autoPrefixer({
            grid:true,
            overrideBrowser:["last 3 versions"],
            cascade:true
        }
    )

        ))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.if(
        app.isBuilt,cleanCss()
        ))
    .pipe(rename({
        extname:".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}