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

    grunt.registerTask('default', [

    ]);

};