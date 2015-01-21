'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

            pkg: grunt.file.readJSON('package.json'),

            project: {
                app: ['homepage'],
                assets: ['<%= project.app %>/assets'],
                css: ['<%= project.assets %>/sass/style.scss']
            },
            bowercopy: {
                options: {
                    // Bower components folder will be removed afterwards
                    // clean: true
                },
                // JavaScript
                libs: {
                    options: {
                        destPrefix: 'homepage/assets/js/libs'
                    },
                    files: {
                        'jquery.js': 'jquery/dist/jquery.js',
                        'jquery.typeahead.js': 'jquery-typeahead/jquery.typeahead.js',
                        'bootstrap.js': 'bootstrap-sass-official/assets/javascripts/bootstrap.js',
                    }
                },
                fonts: {
                    files: {
                        'homepage/assets/fonts/bootstrap': 'bootstrap-sass-official/assets/fonts/bootstrap'
                    }
                }
            },
            sass: {
                dev: {
                    options: {
                        style: 'expanded',
                        compass: false
                    },
                    files: {
                        '<%= project.assets %>/css/style.css':'<%= project.css %>'
                    }
                }
            },
            watch: {
                sass: {
                    files: '<%= project.assets %>/sass/{,*/}*.{scss,sass}',
                    tasks: ['sass:dev']
                }
            }
    });    

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
                       'bowercopy',
                       'watch'
    ]);

};