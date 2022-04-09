import replace from "gulp-replace";
import browsersync from "browser-sync";
import newer from "gulp-newer"
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import ifPlugin from "gulp-if"

export const plugins={
    replace:replace,
    browsersync:browsersync,
    newer:newer,
    plumber:plumber,
    notify:notify,
    if:ifPlugin,
}