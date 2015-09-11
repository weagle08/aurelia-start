/**
 * Created by ben on 8/25/15.
 */
var appRoot = 'src/';
var outRoot = 'dist/';

module.exports = {
    root: appRoot,
    main: appRoot + 'index.html',
    views: appRoot + 'vvm/**/*.html',
    viewModels: appRoot + 'vvm/**/*.js',
    styles: {
        css: appRoot + 'styles/**/*.css',
        sass: appRoot + 'styles/**/*.sass',
        less: appRoot + 'styles/**/*.less'
    },
    scripts: {
      config: appRoot + '../config.js'
    },
    output: {
        root: outRoot,
        vvm: outRoot + 'vvm/',
        styles: outRoot + 'styles/',
        jspm: outRoot + 'jspm_packages'
    },
    documentation:'./docs',
    tests: './test/**/*.js'
};