/*global module:false*/
module.exports = function(grunt) {
'use strict';
  // Project configuration.
  grunt.initConfig({
    connect: {
      spec: {
        options: {
          port: 5555,
          keepalive: true
        }
      }
    },
    bower: {
      target: {
        rjsConfig: 'app/config.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-bower-requirejs');

  // Default task.
  grunt.registerTask('default', 'connect');
};
