module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            js: {
                files: ['src/js/**/*'],
                tasks: ['js']
            },
            sass: {
                files: ['src/css/**/*'],
                tasks: ['sass']
            },
            html: {
                files: ['src/*.html'],
                tasks: ['copy:html']
            },
            views: {
                files: ['src/html/*.mustache'],
                tasks: ['mustache']
            }
        },

        sass: {
            dist: {
                options: {
                    outputStyle: 'compact'
                },
                files: {
                    'dist/css/main.css': 'src/css/main.scss'
                }
            }
        },

        copy: {
            html: {
                src: 'src/*.html',
                dest: 'dist/',
                flatten: true,
                expand: true
            },

            js: {
                src: '**/*',
                dest: 'dist/js/',
                flatten: false,
                expand: true,
                cwd: 'src/js/'
            },

            imgs: {
                src: 'src/imgs/*',
                dest: 'dist/imgs/',
                flatten: true,
                expand: true
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'src/js/*.js', 'src/js/app/**/*.js']
        },

        mustache: {
            files : {
                src: 'src/html/',
                dest: 'dist/js/html.js',
                options: {
                    prefix: 'var JOURNEY = JOURNEY || {}; JOURNEY.html = ',
                    postfix: ';',
                    verbose: true
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9999,
                    base: 'dist',
                    hostname: '*',
                    open: true
                }
            }
        },

        clean: ['dist']

    });

    // Loads
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-mustache');

    // Tasks
    grunt.registerTask('js', ['jshint', 'copy:js']);
    grunt.registerTask('build', ['clean', 'jshint', 'sass', 'copy', 'js', 'mustache']);
    grunt.registerTask('default', ['build', 'connect', 'watch']);

};
