module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        connect: {
            server: {
                options: {
                    hostname: "localhost",
                    port: 8080,
                    base: "."
                }
            }
        },
        
        watch: {
        	styles: {
                files: ['css/**/*.less'],
                tasks: ['less'],
                options: {
                  nospawn: true
                }
              },
          source: {
                  files: ['js/**/*.js'],
                  tasks: ['less'],
                  options: {
                    nospawn: true
                  }
                }
        },
        
        less: {
            development: {
              options: {
                compress: true,
                yuicompress: true,
                optimization: 2
              },
              files: {
                "css/styles.css": "css/styles.less"
              }
            }
          },
    });

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask("default", ["less:development", "connect", "watch"]);
};