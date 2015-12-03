module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },


    // sass: {
    //   dist: {
    //     files: {
    //       'main.css': 'main.scss'
    //     }
    //   }
   // },

    karma: {
      unit: {
        options: {
          frameworks: ['jasmine'],
          singleRun: true,
          browsers: ['PhantomJS'],
          files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'js/**/*.js',
            'test/unit/*.js'
          ]
        }
      }
    }

  });

  //Make sure have npm install --save-dev load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['jshint', 'karma']);

};
