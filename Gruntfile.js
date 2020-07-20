module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-karma-coveralls');
    grunt.initConfig({
        coveralls: {
            options: {
                coverage_dir: './coverage/**/'
            }
        }
    });
};