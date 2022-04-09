import gulp from 'gulp';
import {path} from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js'

global.app={
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import {copy} from './gulp/tasks/copy.js'
import {reset} from './gulp/tasks/reset.js'
import {html} from './gulp/tasks/html.js'
import {server} from './gulp/tasks/server.js'
import {scss} from './gulp/tasks/scss.js'
import {js} from './gulp/tasks/js.js'
import {images} from './gulp/tasks/images.js'
import {otfToTtf,ttfToWoff,fontsStyle} from './gulp/tasks/fonts.js'

const fonts = gulp.series(otfToTtf,ttfToWoff,fontsStyle)

const MainTask = gulp.series(fonts ,gulp.parallel(copy,html,scss,js,images))

function watcher(){
    gulp.watch(path.watch.files,copy)
    gulp.watch(path.watch.html,html)
    gulp.watch(path.watch.scss,scss)
    gulp.watch(path.watch.js,js)
    gulp.watch(path.watch.images,images)
}
const build = gulp.series(reset,MainTask)
const dev=gulp.series(reset,MainTask,gulp.parallel(watcher,server))

export {dev }
export {build}

gulp.task('default',dev)

