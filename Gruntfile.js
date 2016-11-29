module.exports = function(grunt) {

    require("load-grunt-config")(grunt);

    grunt.initConfig({

        concat: {
            options: {
                separator: "\n",
            },
            dist: {
                src: [ "src/**/*.js" ],
                dest: "dist/GroovyJS.js",
            }
        },

        jasmine: {
            dist: {
                src: "src/**/*.js",
                options: {
                    specs: "spec/**/*.spec.js"
                }
            }
        },

        jshint: {
            options: {
                reporterOutput: ''
            },
            test: {
                files: {
                    src: [ "spec/**/*.spec.js" ]
                }
            },
            dist: {
                files: {
                    src: [ "src/**/*.js" ]
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    "dist/GroovyJS.min.js": [ "dist/GroovyJS.js" ]
                }
            }
        }

    });

    grunt.registerTask("test", [ "jshint:test", "jasmine" ]);
    grunt.registerTask("build", [ "jshint:dist", "concat", "uglify" ])
    grunt.registerTask("default", [ "test", "build" ]);

};
