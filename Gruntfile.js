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

    // Tasks
    grunt.registerTask('js', ['jshint', 'copy:js']);
    grunt.registerTask('build', ['clean', 'jshint', 'sass', 'copy', 'js']);
    grunt.registerTask('default', ['build', 'connect', 'watch']);

};
