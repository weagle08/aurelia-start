/**
 * Created by ben on 8/25/15.
 */
var appRoot = 'src/';
var outRoot = 'dist/';

module.exports = {
    root: appRoot,    
    views: appRoot + 'vvm/**/*.html',
    viewModels: appRoot + 'vvm/**/*.js',
    styles: {
        css: appRoot + 'styles/**/*.css',
        sass: appRoot + 'styles/**/*.sass'
    },
    output: {
        root: outRoot,
        viewModels: outRoot + 'vvm/',
        views: outRoot + 'vvm/',
        styles: outRoot + 'styles/'
    },
    documentation:'./docs',
    tests: './test/**/*.js'
};