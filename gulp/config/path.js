import * as nodePath from 'path';
const rootFoder = nodePath.basename(nodePath.resolve());

const buildFolder ="./dist"
const srcFolder ="./src"

export const path ={
    build:{
        js:`${buildFolder}/js/`,
        images:`${buildFolder}/img/`,
        css:`${buildFolder}/css/`,
        html:`${buildFolder}/`,
        fonts:`${buildFolder}/fonts/`,
        files:`${buildFolder}/files/`},
    src:{
        js:`${srcFolder}/js/index.js`,
        images:`${srcFolder}/img/**/*.{jpeg,jpg,png,gif,webp}`,
        svg:`${srcFolder}/img/**/*.svg`,
        scss:`${srcFolder}/scss/style.scss`,
        html:`${srcFolder}/*.html`,
        files:`${srcFolder}/files/**/*.*`},
    watch:{
        js:`${srcFolder}/js/**/*.js`,
        scss:`${srcFolder}/scss/**/*.scss`,
        html:`${srcFolder}/**/*.html`,
        images:`${srcFolder}/img/**/*.{jpeg,jpg,png,gif,webp,ico,svg}`,
        files:`${srcFolder}/files/**/*.*`},
    clean:buildFolder,
    buildFolder:buildFolder,
    srcFolder:srcFolder,
    rootFoder:rootFoder,
    ftp:``
}