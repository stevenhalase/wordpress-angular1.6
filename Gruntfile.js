module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-shell');

    var scriptsDirectory = 'wordpress/wp-content/themes/machomil/assets/js/';
    var stylesheetDirectory = 'wordpress/wp-content/themes/machomil/assets/css/';

    grunt.initConfig({
        // Sass
        sass: {
            options: {
                sourceMap: false
            },
            style: {
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['**/*.scss'],
                    dest: stylesheetDirectory,
                    ext: '.css'
                }]
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false
                },
                processors: [
                    require('autoprefixer')({
                        browsers: ['ie >= 9',
                                   'last 2 Chrome versions',
                                   'last 2 ChromeAndroid versions',
                                   'Android > 0',
                                   'Firefox >= 31',
                                   'last 2 Safari versions',
                                   'last 2 ExplorerMobile versions'],
                    }),
                ]
            },
            dist: {
                src: stylesheetDirectory + '**/*.css'
            }
        },
        watch: {
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['build_css'],
            },
            css: {
                files: ['wordpress/wp-content/themes/machomil/assets/css/**/*.css'],
                options: { livereload: true },
            }
        },
        shell: {
            options: {
                stderr: false
            }
        },
        scsslint: {
            allFiles: ['scss/**/*.scss'],
            options: {
                config: '.scss-lint.yml',
                compact: true,
                reporterOutput: 'scss-lint-report.xml',
                colorizeOutput: true
            }
        },
    });

    grunt.registerTask('build_css', ['sass:style', 'postcss']);
    grunt.registerTask('build_styleguide', ['shell:buildStyleguide']);
    grunt.registerTask('build', ['build_css']);
    grunt.registerTask('lint', ['lint_css']);
    grunt.registerTask('lint_css', ['scsslint']);
    grunt.registerTask('default', ['watch']);
};