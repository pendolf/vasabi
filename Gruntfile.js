'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

            pkg: grunt.file.readJSON('package.json'),

            project: {
                app: ['homepage'],
                assets: ['<%= project.app %>/assets'],
                css: ['<%= project.assets %>/sass/style.scss']
            }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [

    ]);

};